---
title: "請收下卡片：把數位皮夾發卡做成一鍵部署的開源服務"
description: "把台灣數位憑證的發卡端縮成一個 Cloudflare Worker：一鍵部署就能發測試卡，走 OID4VCI 預授權碼流程，卡片是包在 W3C vc 裡的 SD-JWT。本文記錄發卡流程、信任模型、與請出示皮夾對稱的架構，以及只發虛構資料的治理邊界。"
topic: digital-identity
tags: ["數位皮夾", "可驗證憑證", "OpenID4VP", "個資保護", "隱私", "資安", "開源", "Cloudflare", "台灣"]
keywords: ["請收下卡片", "twdiw-vc-issuer-lite", "數位憑證皮夾", "有備而來", "TWDIW", "OID4VCI", "OpenID4VCI", "預授權碼", "SD-JWT VC", "did:key", "StatusList2021", "Durable Objects", "請出示皮夾", "一鍵部署", "信任清單"]
pubDate: 2026-09-09
draft: false
lang: "zh-TW"
aiModel: "Anthropic Claude Opus 4.8"
aiPrompt: "依 twdiw-vc-issuer-lite 公開原始碼、README、docs/protocol-and-trust.md、docs/test-data.md 與示範站 issuer.mashbean.net，撰寫數位皮夾發卡端一鍵部署服務的開發與治理報告；沿用「請出示皮夾」報告的結構與客觀語氣，區分已實作、示範限制與尚未完成。"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-09-09-one-click-twdiw-vc-issuer-lite"
aiGeneratedDate: 2026-09-09
humanReviewed: false
category: "數位政府與數位身分"
series: "ready-digital-government"
seriesOrder: 7
slug: "2026-09-09-one-click-twdiw-vc-issuer-lite"
---

_這是「有備而來：理想的數位皮夾開發報告」第七篇。本文依 2026 年 9 月 9 日的 [twdiw-vc-issuer-lite](https://github.com/mashbean/twdiw-vc-issuer-lite) 公開原始碼、README、`docs/protocol-and-trust.md`、`docs/test-data.md` 與示範站 [issuer.mashbean.net](https://issuer.mashbean.net) 撰寫。示範站只發虛構資料，不是數位發展部或任何機關的官方發行者，也不在官方信任清單上；發出的卡只能用來測試皮夾與查驗流程。_

第三篇把「查驗端」的建置成本降下來，做了[「請出示皮夾」](../2026-09-03-one-click-twdiw-vp-verifier-lite/)。本篇處理對稱的另一半：發卡端。沒有政府專案預算、Java 後端與專用資料庫，一般業者能不能先架起一套會發可驗證憑證的服務？

答案做成了[「請收下卡片」](https://issuer.mashbean.net)。它跟請出示皮夾是姊妹專案，用同一套邏輯、目標與架構，把發行者的建置成本也壓到一個 Cloudflare Worker。按下部署按鈕後，Cloudflare 會建立 Worker、三個 Durable Object binding 與發卡者自己的 P-256 `did:key`，不需要另架資料庫或 Java 服務。原始碼以開源釋出，並附一鍵部署按鈕、部署 skill 與 prompt。

## 一個網頁上的三件事

示範站把發卡端會遇到的三個問題放在同一頁。

**領卡。** 從六種常見卡片（駕照、門號、學生證、員工證、圖書借閱證、會員卡）與六位虛構持卡人裡各選一個，產生一次性的 OID4VCI 領卡 QR Code，由皮夾掃描收下。

**出示測試。** 把剛領到的卡出示回本站。本站同時是一個只信任自己的 OIDC4VP 查驗端，會驗發卡簽章、持有人金鑰綁定、nonce、audience、選擇性揭露與狀態清單。這一段與請出示皮夾同形，等於把發卡與查驗接成一個閉環，讓部署者不必先有另一個皮夾就能確認自己發的卡是完整的。

**信任清單。** 即時讀取數位發展部的 DID 清單，把本站的 `did:key` 列在最上方，誠實標示它不在清單上、又被誰接受。

## 皮夾看到的領卡流程

發卡端實作 OpenID for Verifiable Credential Issuance（OID4VCI）1.0 的預授權碼流程。QR 只攜帶 `credential_offer_uri`，皮夾取得 offer 後，用自己的兩道信任閘門決定要不要跟這個主機講話：先比 offer 主機名稱是否在信任清單，再比 `credential_issuer` 的主機名稱是否一致。

<div class="table-scroll">

| 步驟 | 請求 | 回應 |
| --- | --- | --- |
| QR | `openid-credential-offer://?credential_offer_uri=…/api/offer/<id>` | 皮夾掃碼或開啟 deep link |
| 1 | `GET /api/offer/<id>` | `credential_issuer`、`credential_configuration_ids`、`pre-authorized_code` |
| 2 | `GET /.well-known/openid-credential-issuer` | `credential_endpoint`（同一主機） |
| 3 | `POST /token`（`grant_type=…pre-authorized_code`、`client_id=moda_dw`） | `access_token`、`c_nonce` |
| 4 | `POST /credential`（`Authorization: Bearer …`、`proofs.jwt[0]`） | `{ credential: "<jws>~<disclosure>~…~" }` |

</div>

預授權碼與存取權杖都是 `<session id>.<secret>` 的複合字串：第 3、4 步的請求沒有帶 session id，Worker 靠前半段找到對應的 Durable Object，由它以常數時間比對後半段。預授權碼只能兌換一次，存取權杖十分鐘內有效且只能領一次卡。

## 發出去的卡片

TWDIW 現行卡片是「包在 W3C `vc` 裡的 SD-JWT」，不是 IETF SD-JWT VC。本站照這個方言發：header 的 `typ` 是 `vc+sd-jwt`，payload 的 `iss` 與 `sub` 都是 `did:key`（`jwk_jcs-pub` 拼法，公鑰內嵌於識別子），`cnf.jwk` 綁定皮夾在 proof 中出示的金鑰，`vc.type[1]` 是卡種，每個欄位一個 disclosure，並附 StatusList2021 狀態清單。

幾個設計細節值得記錄。發行者 `iss` 的公鑰就在識別子裡，皮夾只用 `iss` 驗簽章，不追蹤外部的 `jku`，少一個可被替換的信任環節。每個欄位的 disclosure 是 `base64url(JSON([salt, name, value]))`，鹽 16 bytes，`_sd` 摘要排序後才寫入，避免摘要順序洩漏欄位順序。卡種識別子全部帶 `sandbox` 字樣，且駕照含 `driverlicense`、門號含 `telecom`，皮夾的發行者對照表會把它標成測試卡，卡面顏色也才會分別落到綠色駕照與洋紅門號，而不是冒充公路局或電信商。

每張卡佔用一份 StatusList2021 的一個位置（131,072 位），清單 JWT 由同一把發行者金鑰簽。請出示皮夾的 verifier 讀得懂這個格式，會把本站的卡顯示為「狀態清單確認為有效」。撤銷的資料結構已經在 `IssuerIdentity.revoke(index)` 實作，但還沒有接到 HTTP，目前沒有撤銷操作介面。

## 信任模型：只信任自己

發卡端和同頁的查驗端共用一條非常窄的信任政策：只信任本站自己的 DID。這句話決定了誰收得下這裡的卡。

<div class="table-scroll">

| 對象 | 接受？ | 原因 |
| --- | --- | --- |
| 本站的出示測試 | 是 | 只信任自己的 `did:key` |
| 「有備而來」DEBUG 建置 | 是 | 以沙盒例外釘住本站 DID 與主機名稱（`TWDIWIssuer.mashbeanSandbox`）；Release 建置不包含 |
| 數位發展部「數位憑證皮夾」 | 否 | 本站不在官方信任清單 |
| 請出示皮夾（verifier.mashbean.net） | 否 | 政府卡以官方 DID API 為唯一信任來源，fail closed |

</div>

皮夾以信任清單上的主機名稱決定要不要跟發卡端講話，再以清單上的 DID 決定要不要收下卡。要讓任何皮夾收下自己部署的卡，都要先把新站的 `did:key`（`GET /api/issuer`）與主機名稱釘進那個皮夾的信任例外。這是皮夾營運者擁有的決定，本專案不提供任何繞過官方清單的方法。這條邊界很重要：一鍵部署只建立一個獨立的開源發卡站，不會讓部署者成為數位發展部的註冊發行者，官方皮夾也不會收下它發的卡。正式申請須另走[數位憑證皮夾發行者／驗證者申請流程](https://www.wallet.gov.tw/apply/applyIssuerVerifier.html)。

換句話說，這個示範是「卡片是完整的、綁在皮夾金鑰上、狀態清單可查」的證明，不是「別人應該接受這張卡」的證明。前者是技術可行性，後者是治理決定，兩者被刻意分開。

## 只發虛構資料

示範站發的每一張卡都是虛構資料，這不是免責的裝飾，而是進了測試向量把關的設計。六位虛構持卡人用台灣表單範例最常出現的名字，一看就知道是假的；統一編號由檢查碼產生器產生，格式與檢查碼驗證器會接受（請出示皮夾的統一編號情境就是這樣檢查），但這些號碼不屬於任何人；手機號全部落在 `09000001xx`，電子郵件全部在保留網域 `@sandbox.example`；地址、學校、雇主、圖書館、合作社全是不存在的「沙盒」單位。

六種卡片的欄位鍵刻意對齊有備而來的欄位對照表與請出示皮夾的查驗情境，讓發卡、入庫、出示、查驗四端能對得起來。示範站不接受任何輸入的個資；自行部署若要接進真實資料，要重做告知、合法事由、保存期限與撤銷設計，那不在本專案範圍內。

## 資料保存

三個 Durable Object 各有明確的保存邊界。`IssuerIdentity` 永久保存私鑰、公鑰、DID、下一個狀態清單位置與已撤銷位置；私鑰在自己的 Durable Object 內產生，不出現在 repository、設定檔或任何回應。`IssuanceSession` 只在十分鐘內暫存這次領卡選了哪張卡、哪位虛構持卡人、預授權碼與 nonce，發卡完成或十分鐘 alarm 即刪除，卡片本身不寫入伺服器。`PresentationSession` 的 presentation 與揭露值只在單次請求記憶體中處理，查驗完成或十分鐘 alarm 即刪除。網頁採同源 CSP，不載入第三方 script、字型或 analytics，`wrangler.jsonc` 預設停用 Workers Logs 持久化。

## 標準範圍與尚未完成的部分

發卡端實作 OID4VCI 1.0 的預授權碼流程（offer by reference、`/.well-known/openid-credential-issuer`、`/token`、`/credential`、`openid4vci-proof+jwt`），卡片格式與出示端採 TWDIW 相容 profile。這不是 OpenID Foundation conformance 的宣稱；若需要跨國或 mdoc 互通，應另建純 SD-JWT VC／DCQL profile 並跑 conformance suite。撤銷介面、真實資料的告知與合法事由、以及正式發行者資格，都不在這個示範的範圍內。

## 從查驗到發卡，第二層生態的另一半

第三篇的結論是：數位憑證皮夾能否形成公共基礎設施，取決於發卡 App 之外的第二層生態；當一般組織可以用公開 profile 建立 verifier、以合成 fixture 排除格式問題、用清楚錯誤碼完成互通，卡片才會從展示功能變成可被社會採用的工具。發卡端是同一個論點的另一半。查驗端降到一鍵部署之後，如果發行端仍然只有政府專案與少數廠商做得起，生態就只長一半。

請收下卡片把發卡也壓到一個 Worker，並刻意把「技術上發得出完整的卡」與「制度上這張卡被接受」分成兩件事：前者開源、可一鍵部署、可自行查驗；後者留在官方信任清單與皮夾營運者手上，本專案不繞過。這樣的分工，才可能在不動搖官方信任根的前提下，讓更多人以低成本參與、測試與貢獻整條可驗證憑證的流程。

＊

原始碼：[github.com/mashbean/twdiw-vc-issuer-lite](https://github.com/mashbean/twdiw-vc-issuer-lite)（GPL-3.0）。示範站：[issuer.mashbean.net](https://issuer.mashbean.net)。姊妹專案「請出示皮夾」：[github.com/mashbean/twdiw-vp-verifier-lite](https://github.com/mashbean/twdiw-vp-verifier-lite)。
