---
title: "請出示皮夾：把數位皮夾查驗做成一鍵部署的開源服務"
description: "從官方皮夾的相容性除錯、Cloudflare 架構、實機測試到個資零持久化，記錄「請出示皮夾」開源驗證器的開發與治理邊界。"
topic: digital-identity
tags: ["數位皮夾", "可驗證憑證", "OpenID4VP", "個資保護", "隱私", "資安", "開源", "Cloudflare", "台灣"]
keywords: ["請出示皮夾", "數位憑證皮夾", "有備而來", "TWDIW", "OpenID4VP", "OIDC4VP", "Presentation Exchange", "SD-JWT VC", "Durable Objects", "個人資料保護法", "一鍵部署", "did:key"]
pubDate: 2026-09-03
draft: false
lang: "zh-TW"
aiModel: "OpenAI GPT-5.6"
aiPrompt: "依公開原始碼、Cloudflare 實作、數位發展部文件、開發 commit、資安檢查與兩款皮夾的實機測試紀錄，撰寫一鍵部署數位皮夾驗證器的開發及個資治理報告。"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-09-03-one-click-twdiw-vp-verifier-lite"
aiGeneratedDate: 2026-09-03
humanReviewed: false
category: "數位政府與數位身分"
series: "ready-digital-government"
seriesOrder: 3
slug: "2026-09-03-one-click-twdiw-vp-verifier-lite"
---

_這是「有備而來，理想的政府數位身分與資料 App 開發報告」第三篇。本文依 2026 年 9 月 3 日的公開原始碼、Cloudflare 部署、實機操作與自動測試撰寫。「請出示皮夾」是 mashbean 獨立維護的互通實驗站，沒有取得數位發展部的官方驗證者資格，也不適合直接承接高風險身分決策。測試使用真實卡片時，只記錄階段、結果、耗時與錯誤類型；公開文章與 issue 不收錄 QR、presentation、揭露欄位或持卡人資料。_

前兩篇從持卡端出發。第一篇把自然人憑證、MyData 與電子公文收件放進「有備而來」；第二篇用台灣大哥大的門號電子卡，在正式統一超商完成一次包裹取貨。第三篇換到桌子的另一側，處理一個更基本的問題。沒有政府專案預算、Java 後端與專用資料庫，一般業者能不能先架起一套可查驗數位憑證的服務？

我把答案做成[「請出示皮夾」](https://verifier.mashbean.net/)。它是一個跑在 Cloudflare Workers 的開源 verifier，預設對接數位發展部「數位憑證皮夾」，另提供「有備而來」相容模式。使用者可以選擇核對姓名、門號末五碼、駕照種類、國民身分證統一編號等情境；開發者可以 fork [GPL-3.0 原始碼](https://github.com/mashbean/twdiw-vp-verifier-lite)，以 Cloudflare 的部署按鈕建立自己的站，或透過 API 嵌入既有流程。

<figure>
  <a href="/images/reports/twdiw-vp-verifier-lite/verifier-landing.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖，請出示皮夾首頁">
    <img src="/images/reports/twdiw-vp-verifier-lite/verifier-landing.png" alt="請出示皮夾首頁，列出民眾測試、建立驗證服務、選擇性揭露、Cloudflare 一鍵部署與開源授權" width="1259" height="720" loading="lazy" />
  </a>
  <figcaption><em>圖一。「請出示皮夾」把民眾測試和業者部署放在同一個入口。首頁明示這是依公開原始碼建置的獨立實驗站，不代表官方認證。</em></figcaption>
</figure>

## 從一個能出 QR 的頁面開始

查驗器的最小工作單位是一筆短暫 session。瀏覽器選擇驗證目的後，Worker 建立 `nonce`、`state`、驗證情境與要求欄位，再以 verifier 自己的 P-256 `did:key` 簽署 Authorization Request。頁面顯示的 QR 只帶 `client_id` 與 `request_uri`。持卡人的姓名、電話、統一編號與其他憑證內容不會先塞進 QR。

皮夾掃碼後取得 signed request，讓持卡人確認卡片與揭露欄位，再以 `direct_post` 送出 presentation。Worker 在單次執行記憶體內完成 issuer 信任、credential 簽章、SD-JWT disclosure、holder proof、`nonce`、`audience`、`cnf.jwk` 與狀態清單檢查，最後執行情境規則。

查驗結果分成三層。

| 層次 | 回答的問題 | 不應越界的推論 |
| --- | --- | --- |
| 發卡者信任 | issuer 是否在官方 DID API 啟用，API 是否同時提供鏈上交易紀錄 | 鏈上紀錄不能取代官方 API 的啟用狀態 |
| 密碼學證據 | 卡片、揭露與 holder proof 是否通過，是否綁定本次 nonce 與 verifier audience | 簽章有效不代表實體資格目前仍有效 |
| 業務判斷 | 這次要求的姓名、門號末五碼、卡型或條件是否成立 | 姓名相同不能單獨證明是同一人 |

這樣拆開後，駕照簽章有效而撤銷狀態為 `unknown` 時，頁面可以呈現已完成的證據，也保留「無法確認駕照仍有效」的警告。把所有狀態壓成一個綠勾，會讓查驗方以為密碼學成功已經涵蓋行政狀態、即時持有與業務資格。

## 官方皮夾揭露的相容性現實

最初版本依 Presentation Exchange 的一般寫法，直接要求 `$.credentialSubject.name`。有備而來可以理解這種 request，官方 TWDIW 卻顯示 `No credentials available for authorization`。錢包甚至還沒進入持卡人同意階段，問題發生在卡片配對。

我對照數位發展部公開的 [TWDIW official app](https://github.com/moda-gov-tw/TWDIW-official-app) 與正式統一超商取貨 request，才找到官方實作採用的具體 profile。每個 input descriptor 的第一個欄位先比對 `$.type`，filter 使用 `contains.const` 指定卡片型別，後面才列要揭露的 claim。超商取貨還把姓名與門號末五碼拆成兩個群組，每組各提供中華電信、遠傳與台灣大哥大的型別，合計六個 descriptors。

這個差異帶來三項修改。

1. 官方 TWDIW request 改用 `modadigitalwallet://authorize`、Presentation Exchange 與具體卡片型別，不再夾帶會干擾官方 SDK 配對的 DCQL。
2. 有備而來維持 `openid4vp://` 相容入口，並保留 DCQL 遷移實驗。iOS 上若有其他 wallet 註冊同一個自訂 URL scheme，網站無法指定要開啟哪一款 App，因此有備而來模式以跨裝置掃碼為主。
3. 超商取貨的同一張 credential 可能為兩個 disclosure group 出現兩次。驗證端需要確認它們來自同一個 issuer JWT，再合併姓名與末五碼，不能把第二份當成重播或兩張不同卡片。

修正後，官方皮夾已能以電信卡完成超商取貨的 presentation。後續單獨核對姓名仍曾出現 `[1] unknown error`，原因也相同。只有 claim path、沒有卡片型別的 generic descriptor，對官方 wallet 仍不夠具體。現行版本把姓名查驗展開成三種電信卡與兩種駕照卡的 alternatives，相關 request shape 已進入自動測試；這一條的最新真機重測仍要和已確認成功的超商取貨分開記錄。

MyData 自發證件則遇到另一類錯誤。Presentation holder 與 credential subject 使用等價但表示方式不同的 `did:key` 時，直接比字串會誤判不一致。修正後先解析公鑰，再比較密碼學身分。它仍保留每張卡自己的 holder key 與自然人憑證簽章，不會因為 verifier 放寬字串格式而取消 holder binding。

這段除錯顯示「支援 OpenID4VP」還不夠精確。現行台灣皮夾使用 Presentation Exchange 與部署中的卡片命名規則；[OpenID4VP 1.0 Final](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html)以 DCQL 為主要查詢語言。請出示皮夾實作的是 TWDIW compatibility profile，加上一條朝 Final 規格遷移的相容路徑，沒有宣稱通過 OpenID Foundation conformance suite。

## 測試結果截至 9 月 3 日

測試報告刻意分開程式驗證、線上服務與真機互通。任何一列通過，都不能代替其他列。

| 測試面向 | 方法 | 結果 | 證據邊界 |
| --- | --- | --- | --- |
| 單元與整合測試 | Vitest 12 個檔案 | 86 項通過 | 使用去識別化 fixture，沒有真實政府卡片 |
| TypeScript | `tsc --noEmit` | 通過 | 確認型別，不代表協定互通 |
| Cloudflare 建置 | Wrangler 4.128.0 dry-run | 通過 | Worker bundle 與兩個 Durable Object binding 可建置，沒有執行真機 presentation |
| 線上介面 | `verifier.mashbean.net` 首頁、profiles、signed request 與安全標頭 | 通過 | HTTP 與 request 結構檢查 |
| 官方 TWDIW＋門號電子卡 | iPhone 掃描跨裝置超商取貨 request | 實機通過 | 已收到姓名與末五碼 presentation；沒有在本站產生門市取貨 QR |
| 官方 TWDIW＋單獨姓名 | 具體卡型 alternatives | 修正已部署，待最新實機確認 | 先前 generic request 會出現 `[1] unknown error` |
| 有備而來＋政府卡 | 姓名、駕照與統一編號等情境 | 部分路徑完成 | App 尚未公開上架，仍屬開發測試相容層 |
| 有備而來＋MyData 自發證件 | 每卡 holder key、MOICA 簽章與逐欄揭露 | 驗證器修正及測試通過，真機矩陣未結案 | 舊版卡片不支援逐欄揭露，必須以新版 App 重新建立 |

超商取貨在這裡只驗證 OpenID4VP 的前段。第二篇的正式門市測試使用官方 verifier module 取得加密取貨 QR，再由統一超商 POS 完成交付。請出示皮夾沒有門市端金鑰，也不應模擬發出可核銷的正式條碼。它的任務是讓一般服務建立「請持卡人出示哪些證據」的入口。

目前自動測試覆蓋官方卡型 descriptors、兩組三電信商的取貨 request、presentation submission mapping、同卡多組 disclosure 合併、SD-JWT 與 status list、holder binding、政府信任 API、MOICA 自發證件、個資類別對照及一次性結果 capability。下一輪實機測試仍需補完不同電信商、政府身分資料、駕照、舊卡升級、逾時、重播、網路中斷與手機同機跳轉。

## 個資模組放在 QR 之前

查驗器即使不把資料寫進資料庫，Worker 仍會在記憶體中取得姓名、統一編號或其他欄位並形成判斷。依[個人資料保護法](https://law.pdpc.gov.tw/LawContent.aspx?id=FL010627)第 2 條，蒐集不以長期儲存為必要條件；零持久化不能免除合法事由、告知、目的限制、資料最少化與安全維護責任。

頁面因此在建立 QR 前加入用途連動的個資告知。切換「核對姓名」與「超商取貨」時，資料類別、欄位、目的、拒絕影響與保存期間會同步改變。`name` 與 `phonel5` 對應 C001，統一編號對應 C003，成年述詞與國籍欄位對應 C011，駕照種類對應 C039。類別名稱依個資保護委員會公布的[特定目的及個人資料類別](https://law.pdpc.gov.tw/LawContent.aspx?id=FL010631)整理。

<figure>
  <a href="/images/reports/twdiw-vp-verifier-lite/verifier-privacy-notice.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖，請出示皮夾的個資告知模組">
    <img src="/images/reports/twdiw-vp-verifier-lite/verifier-privacy-notice.png" alt="請出示皮夾依核對姓名情境顯示必要欄位、C001 資料類別、保存期間與查驗方確認欄位" width="1259" height="720" loading="lazy" />
  </a>
  <figcaption><em>圖二。個資告知跟著驗證目的更新。畫面勾選是查驗方確認已理解用途並會向持卡人提供告知，不能取代持卡人在皮夾內的出示決定，也不是概括同意收據。</em></figcaption>
</figure>

零持久化透過資料流限制實作。

- `PresentationSession` Durable Object 只保存交換需要的 `nonce`、`state`、結果 capability、profile、皮夾類型、要求欄位名稱與建立時間。
- presentation、credential、揭露值與最後結果只存在單次 Worker 執行記憶體，不寫入 Durable Object、KV、D1、R2、application log 或 analytics。
- 結果不提供輪詢網址。查驗頁先建立同源 WebSocket，再以第一個 message 提交 256-bit `resultKey`。這把 capability 不放在 QR、URL 或 signed request。
- 結果送達已授權的 WebSocket 後，session 呼叫 `deleteAll()`。未完成的 session 最長十分鐘，由 alarm 清除。
- 查驗端畫面提供立即清除，並在結果顯示兩分鐘後自動從 DOM 移除。結果送達時也會解除 WebSocket handlers 與前端 socket reference，縮短 capability 在瀏覽器記憶體中的生命週期。
- `VerifierIdentity` 是另一個 Durable Object。它只保存這次部署的 P-256 私鑰與穩定 `did:key`，不接觸持卡人 presentation。任意更換 namespace 會換發 verifier 身分，因此示範站部署保留既有 namespace。

Cloudflare 的[文件](https://developers.cloudflare.com/durable-objects/best-practices/rules-of-durable-objects/)指出，`deleteAll()` 才是清空 Durable Object storage 的完整操作；2026 年 2 月 24 日以後的 compatibility date 也會一併刪除 alarm。兩份 Wrangler 設定關閉 observability、invocation logs 與 traces，程式沒有第三方 script、字型或 analytics。

這些控制縮小了可被外洩或二次利用的資料面，沒有把 Cloudflare 從資料流中移除。TLS 連線、請求處理與基礎設施 metadata 仍會經過 Cloudflare。自行部署者若開啟 Workers Logs、Logpush、Web Analytics、錯誤追蹤或反向代理，必須重新檢查 URL、body 與查驗結果是否被保存；也不能在沒有區域限制時聲稱資料只在臺灣處理。

示範站沒有保存告知勾選紀錄與 consent receipt。這適合低風險、一次性研究測試，卻無法提供日後的交易稽核。需要追溯責任的正式服務應另行設計最小化的告知版本證明，同時避免把完整 credential 與 claims 一起留下。

## 資安檢查帶來的設計修改

2026 年 9 月 3 日的[原始碼資安檢查](https://github.com/mashbean/twdiw-vp-verifier-lite/blob/main/docs/security-audit-2026-09-03.md)找到兩個需要立刻修正的問題。早期版本曾把 claims、decision 與 issuer trust 寫回 session，直到十分鐘後才刪除；結果查詢 capability 也曾放在 query string。現行版本已移除兩條資料路徑，改採記憶體內驗證與 WebSocket message capability。

其餘防護包括 512 KB presentation body 上限、8 KB 建立查驗上限、JOSE algorithm allowlist、`Cache-Control: no-store`、同源 Content Security Policy、HSTS、COOP、`no-referrer`、`nosniff`，以及狀態清單 URL 的 SSRF 防護。外部 URL 必須是公共 HTTPS hostname，拒絕帳密、literal IP、localhost、redirect、逾時與過大回應。

尚存風險沒有藏進附錄。任何人都可以呼叫建立 session API，正式高流量部署需要另加 WAF 或 rate limiting。官方 DID API 無法連線時，政府卡採 fail closed；狀態清單無法確認時回傳 `unknown`。WebSocket 在結果送出當下若斷線，伺服器不會為了方便重取而保存資料，使用者必須重做一次查驗。這是隱私與可用性的明確取捨。

端點畫面仍屬資料暴露面。姓名與末五碼在查驗端顯示的兩分鐘內，可能被旁人看到、截圖或被瀏覽器擴充功能讀取。自動清除只能縮短暴露時間，無法取代櫃台操作規範、受管裝置與瀏覽器擴充功能政策。

這份檢查是 repository scope 的安全 review，不是第三方滲透測試、個資影響評估或正式法遵認證。部署者仍要處理營運帳號、Cloudflare 權限、網域、事件應變、當事人權利窗口與法定保存要求。

## 一鍵部署仍需要明確責任

開源 repo 內含 Worker、兩個 Durable Object bindings、六種驗證情境、部署 skill、內嵌指南與可交給 coding agent 的 prompt。Cloudflare 部署按鈕會 fork 原始碼、建立 Worker 與 bindings；第一次啟動時產生部署者自己的 verifier `did:key`。通用版固定查詢官方 DID API，不要求使用者在表單貼一個 `trusted issuer ID`，避免把陌生 DID 變成未經審查的信任繞道。

<figure>
  <a href="/images/reports/twdiw-vp-verifier-lite/verifier-developer-deploy.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖，請出示皮夾的開發者部署區">
    <img src="/images/reports/twdiw-vp-verifier-lite/verifier-developer-deploy.png" alt="請出示皮夾開發者區列出 Cloudflare 一鍵部署、Agent Skill 與既有服務整合" width="1259" height="720" loading="lazy" />
  </a>
  <figcaption><em>圖三。開發者入口同時提供一鍵部署、Agent Skill、API 內嵌與個資模組。部署後必須換成實際營運者的告知內容，再做自己的真機驗收。</em></figcaption>
</figure>

一鍵部署完成的是技術起點。要成為數位發展部的正式驗證者，仍須走[官方發行者／驗證者申請流程](https://www.wallet.gov.tw/apply/applyIssuerVerifier.html)。開源專案不代辦申請，也不會因為 verifier 能讀取一張卡，就自動取得特定業務的合法蒐集事由或機關授權。

嵌入既有服務時，前端可先讀取 `GET /api/profiles`，再以 `POST /api/presentations` 建立查驗。回應提供 QR SVG、request URI、WebSocket URL 與分離的 `resultKey`。正式產品應在 server-to-server 邊界加入自己的登入、授權、限流與交易狀態，不能把公開 demo 的 anonymous session 直接當成完整業務系統。

## 這次開發留下的工程判斷

第一，公開標準和既有部署 profile 必須同時寫進測試。只看 OpenID4VP 規格，無法預測官方 App 對 `$.type`、descriptor group、URL scheme 與卡片名稱的要求；只複製官方 request，又會把舊格式永久固化。比較穩健的做法是為 TWDIW 建立明示 compatibility profile，另以純 DCQL profile 追蹤 Final 規格。

第二，錯誤訊息是互通基礎設施的一部分。`No credentials available` 和 `[1] unknown error` 沒有說明是卡型、claim path、格式還是 trust policy 不符，第三方只能從公開程式碼與正式 request 反推。官方測試環境若能回傳 machine-readable mismatch reason，並發布去識別化 conformance fixtures，會顯著降低皮夾與 verifier 的接入成本。

第三，資料最少化要從 request profile 開始。後端收到完整 credential 再宣稱只顯示一欄，風險已經發生。每個業務目的都要先定義可接受卡型、最少 claims、狀態需求與失敗政策，signed request、前端告知、驗證器 disclosure opening 和測試 fixture 使用同一份 profile。

第四，驗證時間應由程式自動分段記錄，但不能把個資一起帶進 telemetry。後續測試會分開 request 建立、皮夾配對、使用者確認、presentation 產生、網路傳輸、簽章驗證、信任查詢、狀態清單與結果回傳。公開報告只保留時間、build、裝置角色、網路狀態與去識別化錯誤碼。

第五，真機是獨立發布門檻。86 項測試可以阻止 request 結構、holder binding 與隱私通道回歸，仍無法替官方 iPhone App 選到正確卡片。正式超商取貨的一次成功也不能外推到三家電信商、所有門市與所有查驗情境。測試報告需要讓每個證據停在它能支持的位置。

## 接下來的驗收順序

下一輪工作先補完查驗矩陣，再擴大部署能力。

1. 以官方 TWDIW 重測電信卡單獨姓名、三家電信卡的姓名加末五碼、駕照種類與國民身分證統一編號。
2. 以新版有備而來重建 MyData 自發證件，逐項測試姓名、成年述詞、國籍與統一編號，確認舊卡升級提示。
3. 在 iPad verifier 與 iPhone wallet 間自動記錄端到端時間，分離使用者停留時間與密碼學計算時間。
4. 補測逾時、重播、錯誤 audience、狀態清單中斷、WebSocket 斷線與大量建立 session。
5. 建立一套不含真實個資的 TWDIW compatibility fixtures，讓第三方 wallet 與 verifier 可以在 CI 先驗 request matching，再進真機。
6. 對正式部署加入可選的 rate limiting、營運者設定檢核、告知版本證明與外部滲透測試。

「請出示皮夾」目前已是一套可部署、可閱讀原始碼、能和台灣現行皮夾進行真實 presentation 的輕量驗證器。它也把限制留在產品表面。官方註冊、特定業務合法性、完整實機矩陣、狀態資料可用性與高風險決策責任，都沒有被一鍵部署按鈕包掉。

數位憑證皮夾能否形成公共基礎設施，取決於發卡 App 之外的第二層生態。當一般組織可以用公開 profile 建立 verifier、用合成 fixture 排除格式問題、用清楚錯誤碼完成互通，再以資料最少化和可稽核治理進入正式服務，卡片才會從展示功能變成可被社會採用的工具。
