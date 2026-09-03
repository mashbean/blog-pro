---
title: "用「有備而來」完整重現數位皮夾超商取貨"
description: "以真機、正式門市 POS 與官方規格檢驗電信憑證超商取貨流程，分析 OpenID4VP、離線 QR、iOS 實作與政策互通性。"
topic: digital-identity
tags: ["數位皮夾", "可驗證憑證", "信任根與信任清單", "隱私", "使用者經驗", "開源", "台灣"]
keywords: ["有備而來", "數位憑證皮夾", "門號電子卡", "台灣大哥大", "統一超商", "超商取貨", "OpenID4VP", "SD-JWT VC", "QR Code", "POS", "選擇性揭露", "did:key"]
pubDate: 2026-09-02
draft: false
lang: "zh-TW"
aiModel: "OpenAI GPT-5.6"
aiPrompt: "以有備而來真機實測、官方公開程式碼、QR Code 驗證規格與服務目錄、OpenID4VP 1.0 Final 原文及各國官方案例，撰寫電信憑證轉換為超商取貨條碼的全面測試與協定分析。"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-09-02-telecom-credential-convenience-store-pickup"
aiGeneratedDate: 2026-09-02
humanReviewed: false
category: "數位政府與數位身分"
series: "ready-digital-government"
seriesOrder: 2
slug: "2026-09-02-telecom-credential-convenience-store-pickup"
---

_這是「有備而來，理想的政府數位身分與資料 App 開發報告」第二篇。分析材料包括 iPhone 真機操作、正式門市 POS 驗收、數位發展部公開程式碼與 QR 驗證規格、OpenID4VP 1.0 Final，以及國外官方案例。公開截圖保留發卡者的 `did:key` 與信任紀錄，姓名、手機末五碼、憑證序號和可掃描 QR 均已遮蔽。_

2026 年 9 月 2 日，我以有備而來匯入台灣大哥大的門號電子卡，完成「統一超商包裹取貨」的憑證呈現，取得取貨 QR，並由正式門市 POS 掃描交付包裹。

這項結果建立了一條端到端互通證據。App 能讀取卡片、API 回傳成功或畫面顯示 QR，都屬於中間狀態。正式 POS 接受 QR 並完成交付，才證明第三方皮夾產生的流程能進入既有物流系統。

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/telecom-credential-store-pickup/wallet-credential-overview.webp" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖，有備而來首頁的國民身分證與政府皮夾卡片">
    <img src="/images/reports/telecom-credential-store-pickup/wallet-credential-overview.webp" alt="有備而來首頁同時顯示自簽國民身分證、駕照電子卡、台灣大哥大門號電子卡與 MyData 資料" width="1170" height="2532" loading="lazy" />
  </a>
  <figcaption><em>圖一。有備而來的證件首頁。自簽國民身分證、政府皮夾卡片與 MyData 資料共存在同一個皮夾。本次取貨使用其中的台灣大哥大門號電子卡。</em></figcaption>
</figure>

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/telecom-credential-store-pickup/telecom-card-detail.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖，有備而來裡的台灣大哥大門號電子卡">
    <img src="/images/reports/telecom-credential-store-pickup/telecom-card-detail.png" alt="有備而來顯示台灣大哥大門號電子卡的卡片種類、發卡者 did:key 與效期" width="1170" height="2532" loading="lazy" />
  </a>
  <figcaption><em>圖二。實際匯入有備而來的門號電子卡。畫面保留發卡者公開的 `did:key`，持卡人的姓名與手機號碼沒有出現在公開圖檔。</em></figcaption>
</figure>

## 測試結論與適用範圍

本次測試涵蓋四個層級。

| 層級 | 驗證內容 | 結果 |
| --- | --- | --- |
| 憑證層 | 有備而來能讀取台灣大哥大門號電子卡與 holder key | 通過 |
| 信任層 | 取貨服務同時出現在官方 API 目錄與 Arbitrum 信任紀錄 | 通過 |
| 協定層 | App 完成 OpenID4VP 呈現、姓名與手機末五碼揭露、交易簽章與 QR 取得 | 通過 |
| 營運層 | 正式門市 POS 接受 QR 並交付包裹 | 通過一次 |

測試樣本限於一張台灣大哥大門號電子卡、一個統一超商取貨情境與一次成功交付。過期 QR、截圖重播、門市斷網、取消交易、重複取貨、其他電信商及其他超商尚未納入。這些情境需要獨立測試，無法從單次成功結果外推。

## 協定追查與 iOS 實作

數位發展部前端提供[公開 VP 服務目錄](https://frontend.wallet.gov.tw/api/moda/dwapp/offline/vpList?name=&page=0&size=100)。2026 年 9 月 2 日的查詢結果包含 `22555003_711pickup`，名稱為「統一超商包裹取貨」，並提供獨立的 verifier module URL。有備而來先從目錄發現服務，再核對模組主機、官方信任清單與鏈上紀錄。

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/telecom-credential-store-pickup/pickup-trust-evidence.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖，統一超商包裹取貨服務的 API 與 Arbitrum 信任核對">
    <img src="/images/reports/telecom-credential-store-pickup/pickup-trust-evidence.png" alt="有備而來在提供資料前顯示統一超商服務已通過官方 API 與 Arbitrum 信任核對" width="1170" height="1050" loading="lazy" />
  </a>
  <figcaption><em>圖三。App 在傳送身分資料前核對官方 API 與 Arbitrum 紀錄。公開圖檔只保留服務名稱、區塊與交易紀錄。</em></figcaption>
</figure>

數位發展部公開的[數位憑證皮夾原始碼](https://github.com/moda-gov-tw/TWDIW-official-app)顯示 holder App、OpenID4VP handler、verifier API 與 VP 驗證元件採分層設計。有備而來依照這個邊界實作七個步驟。

1. 從官方目錄取得取貨情境與 verifier module。
2. 向模組建立交易，取得 `transactionId` 與 authorization deep link。
3. 依 deep link 取得簽名的 OpenID4VP request，核對 `nonce`、`state`、request host、response host 與要求欄位。
4. 由使用者確認揭露姓名與手機末五碼，再以門號電子卡建立 VP。
5. 將 VP 送回 verifier，保留這次呈現使用的 holder key 與交易收據。
6. 以同一把 holder key 對 `transactionId` 簽署 ES256 JWT，向原 verifier module 請求 QR。
7. 驗證回應為 PNG、檔案大小不超過 5 MB、服務端效期為正數，再顯示原始圖檔。

iOS client 在主機、請求與回應三層採 fail-closed。request URI 與 response URI 必須回到目錄指定的同一個主機，`definitionID` 必須符合取貨情境，揭露欄位必須包含 `name` 與 `phonel5`。任何一項不一致，流程立即停止。QR 重新產生時再次呼叫官方模組，有備而來不會把姓名或手機末五碼自行編碼成另一張 QR。相關實作與測試可見[公開 PR #56](https://github.com/bonds-tw/backupTW-iOS/pull/56)。

倒數計時採用服務端回傳的 `totptimeout` 與 QR 產生時間計算絕對期限。畫面每秒依目前時間重算剩餘秒數，從 Face ID、背景執行或捲動返回後仍能得到正確結果。這項設計修正了計時器在 view 尚未進入 window 時啟動，導致 `04:59` 停住的生命週期錯誤。

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/telecom-credential-store-pickup/pickup-qr-redacted.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖，已遮蔽且畫面倒數五分鐘的統一超商取貨 QR">
    <img src="/images/reports/telecom-credential-store-pickup/pickup-qr-redacted.png" alt="有備而來顯示畫面倒數五分鐘的統一超商取貨 QR，可掃區塊已以不透明遮罩完整覆蓋" width="1170" height="2532" loading="lazy" />
  </a>
  <figcaption><em>圖四。官方模組回傳的 QR 與五分鐘 UI 倒數。公開版完整遮蔽可掃區域，因為失效後的 QR 仍可能保存個人欄位密文與協定資訊。</em></figcaption>
</figure>

## 離線 QR 的安全模型

數位發展部的[QR Code 驗證規格](https://github.com/moda-gov-tw/TWDIW-official-app/blob/main/Docs/QR%20Code%20%E9%A9%97%E8%AD%89%E8%A6%8F%E6%A0%BC%E8%AA%AA%E6%98%8E%E6%96%87%E4%BB%B6.md)已定義 QR 外層資料。

| 欄位 | 內容 | 驗證用途 |
| --- | --- | --- |
| `t` | 交易類型 | 區分超商取貨等應用情境 |
| `d` | Base64 編碼的加密資料 | 承載 TOTP 與情境需要的揭露欄位 |
| `h` | 解密後整份明文的 HMAC | 檢查資料完整性與共享金鑰持有狀態 |
| `k` | 金鑰識別碼 | 選擇對應的驗證金鑰 |

門市 POS 或相鄰的安全模組持有 `privateKey`、`totpKey` 與 `hmacKey`。驗證端以 X25519／ECDH 衍生金鑰，用 ChaCha20-Poly1305 解密 `d`，再檢查 TOTP 與 HMAC。官方[離線驗證範例](https://github.com/moda-gov-tw/TWDIW-official-app/blob/main/SampleCode/VerifyQRCodeController.java)明確要求三把金鑰留在 POS 設定、環境變數或安全模組，密碼學驗證可在沒有網路的環境完成。

解密資料可以包含姓名與電話。官方範例要求不得把解密明文寫入 log，且格式只強制 `totp` 欄位，其餘內容由應用情境定義。本次取貨要求姓名與手機末五碼，安全控制應涵蓋收件端加密、欄位最小化、POS 金鑰保護、明文記錄禁令與資料留存期限。

<figure>
  <a href="/images/reports/telecom-credential-store-pickup/pickup-protocol-bridge.svg" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸流程圖，有備而來超商取貨的分層協定">
    <img src="/images/reports/telecom-credential-store-pickup/pickup-protocol-bridge.svg" alt="有備而來先以 OpenID4VP 向官方驗證模組呈現電信憑證，再由門市端解密 QR 並驗證 TOTP 與 HMAC" width="1200" height="690" loading="lazy" />
  </a>
  <figcaption><em>圖五。OpenID4VP 驗證憑證呈現與 holder binding。加密 QR 將同意揭露的資料帶到門市端，由 POS 或安全模組完成離線查驗。</em></figcaption>
</figure>

目前仍有一項時間語意未被公開文件完整說明。有備而來收到 `totptimeout=300`，畫面據此倒數五分鐘；官方 QR 規格記載 TOTP 有效 60 秒，並容許前後 30 秒的時鐘誤差。現有 App 在五分鐘內不會自動輪替 QR，只有使用者按下重新產生時才向模組取得新圖。

本次成功掃描發生在 QR 產生後不久，因此無法判定門市實際採用 60 秒或 300 秒週期。TOTP 也只提供時間新鮮度，掃描後失效與防止重複交付仍需業務系統處理。這項落差應列入正式 profile 與互通測試，避免 UI 顯示可用時，內層 TOTP 已被驗證端拒絕。

## 雙階段驗證架構

[OpenID4VP 1.0 Final](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html)處理 verifier 的憑證請求、wallet 同意、選擇性揭露、VP 回傳與驗證。`direct_post` 完成後，規格不再處理包裹查詢、門市設備、QR 格式或交付狀態。

台灣的取貨服務在 OpenID4VP 後加入離線 QR。前段 verifier 驗證 SD-JWT VC、holder binding 與信任來源；後段把情境需要的欄位加密給門市驗證端。POS 不需要實作完整的 SD-JWT VC、OpenID4VP 或政府信任清單，仍需具備 QR 解密、TOTP 與 HMAC 驗證能力。

業務核銷位於第三個層次。QR 密碼學驗證通過後，門市仍要查找包裹、確認交付資格並防止重複領取。公開 QR 規格沒有定義這些物流狀態，也無法證明實際 POS 在密碼學驗證後是否連回後台。

## 架構選擇的政策推論

離線驗證是公開規格明確支持的設計目標。既有門市設備的相容需求與責任配置，則是依公開介面、程式碼及實測結果形成的工程與政策推論，並非官方決策紀錄。

第一項推論涉及營運韌性。POS 在本地完成解密、TOTP 與 HMAC，可降低網路中斷對身分查驗的影響。包裹查詢與交付狀態仍可能需要後台，密碼學查驗至少保留離線能力。

第二項推論涉及系統改造範圍。把 SD-JWT VC、holder binding 與信任清單留在 verifier module，可避免所有門市設備同步導入完整數位身分堆疊。POS 只需加入 QR 解密與完整性驗證，既有掃描及交付流程可繼續使用。

第三項推論涉及公共基礎設施治理。技術複雜度從 POS 移到 verifier module 與金鑰發放體系後，互通性會依賴服務目錄、profile、測試向量及金鑰政策。這些規則若只存在官方 App 與特定供應商實作中，第三方 wallet 與不同 POS 廠商仍會面臨制度性進入成本。

## 與 OpenID4VP 1.0 的相容性

| 層次 | 本次觀察 | 與 1.0 Final 的關係 |
| --- | --- | --- |
| 身分呈現核心 | request by reference、簽名 request、`nonce`／`state`、選擇性揭露、holder binding、`direct_post` | 採用 OpenID4VP 的核心模型 |
| 請求與回應格式 | `presentation_definition`、`presentation_submission`、裸 `did:key` client ID | 保留 Final 前常見格式；Final 採 `dcql_query`，DID verifier 使用 `decentralized_identifier` 前綴 |
| 取貨與離線查驗 | 建立交易、第二個 JWT、PNG 內的 `t`／`d`／`h`／`k`、X25519 解密、TOTP、HMAC | 位於 OpenID4VP 規格範圍之外，屬於 TWDIW 應用 profile |

OpenID Foundation 在 2025 年 7 月核准[OpenID4VP 1.0 Final](https://openid.net/openid-for-verifiable-presentations-1_0-final-specification-approved/)。本次服務仍使用 DIF Presentation Exchange 的 `presentation_definition` 與 `presentation_submission`，client ID 也保留裸 `did:key`。官方 App 與有備而來可以互通，依照 1.0 Final 開發的新 wallet 則需要額外實作這組既有格式與後段 QR API。

完整取貨流程可描述為 OpenID4VP 相容呈現，加上 TWDIW 離線 QR profile 與超商業務核銷。把整段流程統稱為 OIDC4VP 會掩蓋後兩層的自訂介面，也不利於第三方 wallet 評估實作成本。

## 軟體開發實務

工程實務可整理為五項要求。

- **服務發現與信任驗證要分開。** 服務出現在目錄只證明它可被發現。App 還需核對 verifier host、信任清單、鏈上紀錄、definition ID 與 response URI。
- **外部 API 應視為不可信輸入。** QR 回應需檢查狀態碼、資料結構、PNG magic bytes、大小與正效期。issuer 名稱、憑證名稱與揭露值也不能直接當成 App chrome。
- **倒數必須依絕對期限重算。** 每秒遞減一個記憶體計數器容易受背景執行、Face ID 與 run loop 影響。以 `generatedAt + lifetime` 計算期限，才能在畫面恢復時維持正確狀態。
- **協定資料不應進入診斷紀錄。** 自動測試與效能量測可以保存階段、時間、錯誤類型與 build 資訊，QR、transaction ID、姓名、電話及解密明文均應排除。
- **正式 POS 屬於發布門檻。** 單元測試、CI、API 200 與 App 成功出圖都不能替代門市驗收。螢幕亮度、掃描距離、網路狀態、逾時、重新產生與人工備援也需要測試。

目前的單元測試覆蓋服務目錄解析、交易回應、憑證序號、PNG 與效期解析、絕對期限倒數、錯誤圖檔及服務拒絕。後續測試矩陣應增加 60 秒與 300 秒邊界、重播、錯誤金鑰、時鐘偏移、離線 POS、重複領取與跨超商實作。效能紀錄則應拆分服務發現、request 取得、VP 建立、`direct_post`、QR 取得與首幀顯示，並使用 monotonic clock 自動記錄。

## 政策與採購建議

取貨流程已具備公開原始碼、QR 規格與真實服務，跨實作成本仍集中在分散文件、未定義的時間語意與缺少正式驗證套件。政策與採購可優先處理六項工作。

1. **發布完整的 TWDIW 取貨 profile。** 將服務目錄、deep link、OpenID4VP 版本、欄位名稱、holder-key JWT、QR schema、錯誤碼與版本政策放在同一份可引用規格。
2. **說明 60 秒與 300 秒的關係。** 文件需定義 QR 是否輪替、驗證端採用的 TOTP 週期、時鐘誤差、過期畫面與重新產生條件。
3. **區分密碼學新鮮度與業務防重播。** TOTP、掃描次數、包裹交付狀態與重複領取控制應分別定義，並提供可稽核的狀態轉換。
4. **提供無個資 sandbox 與 conformance suite。** 測試資料需涵蓋正確與錯誤金鑰、過期、時鐘偏移、欄位缺漏、HMAC 錯誤、離線操作及第三方 wallet。
5. **建立 POS 金鑰治理。** 規範金鑰產生、發放、輪替、撤銷、HSM 或安全模組、門市設備遺失與供應鏈事件處理。
6. **把正式門市與無障礙納入驗收。** 驗收需包含多家設備、不同亮度與字級、VoiceOver、裝置沒電、網路中斷、人工核對與客服處理。

OpenID4VP 遷移也需要公開時程。Presentation Exchange 與裸 `did:key` 仍在正式服務中運作，短期內可以維持相容層；新版本應逐步支援 DCQL、Final client-id scheme 與明確的 capability negotiation，降低第三方 wallet 依賴官方 App 行為考古。

## 國際案例

其他國家沒有公開完全相同的「電信憑證完成 OpenID4VP 後轉為超商取貨 QR」流程。相近案例集中在短效 QR、便利商店公共服務，以及身分驗證後銜接營運憑證。

| 國家／服務 | 實際做法 | 與本次取貨的關聯 |
| --- | --- | --- |
| [韓國行動身分證](https://www.mobileid.go.kr/mip/hps/svcIntrcn/svcIntrcnUser.do) | 在便利商店、酒吧等場所顯示「我的 QR」供驗證端掃描，官方說明 QR 約 30 秒重設，只提供必要欄位 | 同樣採手機短效 QR 與便利商店驗證；QR 直接承擔身分或年齡查驗 |
| [日本 My Number 超商交付](https://lg-waps.go.jp/01-00.html) | 使用 My Number 卡或載有手機電子證明書的手機，在超商多功能機取得住民票等證明 | 將數位身分接入超商基礎設施，主要介面為機台、NFC 與電子證明書 |
| [IATA One ID](https://www.iata.org/en/programs/passenger/one-id/) | 旅客從 wallet 提供護照、簽證等數位憑證，航空公司驗證後銜接 check-in 與 boarding pass | 身分與資格驗證完成後，由營運系統發行通行憑證 |
| [Apple Verify with Wallet](https://developer.apple.com/wallet/get-started-with-verify-with-wallet/index.html) | 美國部分州的駕照／ID 與日本 My Number 可在 App 內選擇性提供，由服務端解密驗證 | Apple 定義身分呈現介面，後續票券、訂單與門票仍由服務設計 |
| [歐盟 EUDI 年齡驗證](https://ec.europa.eu/digital-building-blocks/sites/spaces/EUDIGITALIDENTITYWALLET/pages/930450954/The%2BAge%2BVerification%2BManual) | 以 OpenID4VP 或 Digital Credentials API 呈現年齡證明，只揭露服務需要的結果 | 標準化呈現與信任，購買或存取權限留在業務層 |

台灣案例的特色在於 OpenID4VP 後增加可離線解密的 QR 呈現層。這個做法支援既有門市設備與斷網驗證，也把金鑰治理、欄位 profile、時間同步及防重播責任帶進 POS 環境。國際案例可提供介面與治理參考，無法直接取代這套 profile 的公開與驗證工作。

## 結論

本次實測確認第三方皮夾可以使用台灣大哥大的門號電子卡，經官方信任目錄與 OpenID4VP 流程取得加密 QR，最後由統一超商正式 POS 完成交付。這條路徑已跨越 App、政府 API、發卡者金鑰、鏈上信任紀錄、官方 verifier module 與門市設備。

協定架構包含三個責任邊界。OpenID4VP 驗證憑證呈現，TWDIW 離線 QR 將必要欄位加密給門市端，超商系統處理包裹交付與重複領取控制。任何互通性評估都應分別驗證這三層。

下一階段的技術重點包括 60 秒與 300 秒時間語意、POS 金鑰生命週期、重播與重複交付、跨電信商及跨超商測試。政策重點則是把已存在的程式碼與分散規格整理成可版本化、可測試、可由第三方實作的公共 profile。正式門市的成功交付證明這條路徑具有實用價值，公開互通規格將決定它能否成為可持續的數位公共基礎設施。
