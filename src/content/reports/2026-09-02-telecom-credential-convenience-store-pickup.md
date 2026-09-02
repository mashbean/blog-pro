---
title: "不是把身分證塞進 QR Code：我用有備而來完成超商取貨"
description: "我把台灣大哥大門號電子卡接進有備而來，實際產生統一超商取貨 QR 並領到包裹。這篇拆解 OID4VP、官方驗證模組與既有 POS 之間的橋接，以及它離 OID4VP 1.0 還有多遠。"
topic: digital-identity
tags: ["數位皮夾", "可驗證憑證", "信任根與信任清單", "隱私", "使用者經驗", "開源", "台灣"]
keywords: ["有備而來", "數位憑證皮夾", "門號電子卡", "台灣大哥大", "統一超商", "超商取貨", "OID4VP", "SD-JWT VC", "QR Code", "POS", "選擇性揭露", "did:key"]
pubDate: 2026-09-02
draft: false
lang: "zh-TW"
aiModel: "OpenAI GPT-5.6"
aiPrompt: "以有備而來真機實測、官方公開程式碼與服務目錄、OpenID4VP 1.0 Final 原文及各國官方案例，撰寫電信憑證轉換為超商取貨條碼的全面測試與協定分析。"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-09-02-telecom-credential-convenience-store-pickup"
aiGeneratedDate: 2026-09-02
humanReviewed: false
category: "數位政府與數位身分"
series: "ready-digital-government"
seriesOrder: 2
slug: "2026-09-02-telecom-credential-convenience-store-pickup"
---

_這是「有備而來，理想的政府數位身分與資料 App 開發報告」第二篇。文章由 OpenAI GPT-5.6 協助比對真機開發紀錄、數位發展部公開程式碼、OpenID4VP 1.0 Final 與各國官方資料，再由我用實際取貨結果校正。測試使用我本人合法持有的電信憑證與包裹；為避免重播與個資外洩，本文不刊登原始 QR、完整 DID、憑證序號、姓名或手機末五碼。_

我真的領到包裹了。

不是模擬器裡出現一張很像 QR Code 的圖，也不是單元測試回傳綠燈。我先把台灣大哥大的門號電子卡領進有備而來，在 App 裡選擇「統一超商包裹取貨」，確認提供姓名與手機末五碼，取得五分鐘有效的 QR Code，再到門市讓既有掃描器讀取。店員端接受，包裹交付。

這個結果跨過的是整條開發中最難假裝的一關：**一套不受我控制的正式 POS，接受了由第三方皮夾啟動的交易。**

但它也立刻帶出一個很好的問題：既然皮夾已經用可驗證憑證證明我是我，為什麼後面還需要另一張 QR Code？這張 QR 是 OID4VP 嗎？如果不是，我們究竟做了什麼？

## 這次實測證明了什麼

| 檢查點 | 結果 | 能證明的範圍 |
| --- | --- | --- |
| 電信卡進入第三方皮夾 | 通過 | 有備而來可保存、讀取並使用該張門號電子卡 |
| 官方服務目錄與信任紀錄 | 通過 | App 找到統一超商取貨服務，且 API 與鏈上紀錄指向可接受的驗證模組 |
| 使用者同意 | 通過 | 畫面在送出前列出姓名與手機末五碼，不是背景靜默傳送 |
| 憑證呈現 | 通過 | 驗證模組接受 holder key 所簽的 VP 回應 |
| 五分鐘 QR | 通過 | 官方模組回傳可顯示、會倒數的 PNG，不是 App 自畫圖樣 |
| 門市掃描與取貨 | 通過 | 正式 POS 接受 QR，實體包裹完成交付 |

這仍不是「全台所有電信商、所有超商、所有門市都相容」的證明。本次只驗證一張台灣大哥大門號電子卡、一個統一超商取貨情境與一次成功交付；沒有測過過期碼、截圖重播、離線門市、取消交易、同一包裹重複兌換，也沒有做統計上足夠的效能測量。成功是真成功，外推範圍也要說清楚。

## 我怎麼知道 QR 背後走什麼連線

我沒有先破解 QR 內容，也沒有嘗試偽造超商條碼。真正可重複的方法，是從公開且可驗證的外圍往內收斂。

第一個線索是官方 App 的使用者流程：先選擇憑證與欄位，按下產生條碼後才出現五分鐘 QR。這已經顯示「身分資料提供」與「門市兌換碼」是兩個階段。

第二個線索是數位發展部前端的[公開 VP 服務目錄](https://frontend.wallet.gov.tw/api/moda/dwapp/offline/vpList?name=&page=0&size=100)。2026 年 9 月 2 日查詢時，目錄中的 `22555003_711pickup` 對應「統一超商包裹取貨」，並給出獨立的 verifier module URL。這不是把某個網域名稱硬寫死在 App 裡；App 先從官方目錄取得情境，再把模組主機與信任清單、鏈上紀錄交叉核對。

第三個線索是數位發展部已公開的[數位憑證皮夾原始碼](https://github.com/moda-gov-tw/TWDIW-official-app)。公開專案列出 holder App、OID4VP handler、verifier API 與 VP 驗證元件，足以確認這不是一張孤立的圖片，而是一個「皮夾—驗證模組—服務系統」架構。

最後才是相容性實作與黑箱測試。完整連線可整理成六步：

1. 從官方目錄找到取貨情境與 verifier module。
2. 向該模組建立一次性交易，收到 `transactionId` 與皮夾可開啟的 authorization deep link。
3. 依 deep link 取得簽名的 OID4VP request，檢查 `nonce`、`state`、回傳主機與要求欄位。
4. 使用者同意後，以門號電子卡選擇性揭露姓名與手機末五碼，將 VP 送回 verifier。
5. VP 成功後，再用**同一張卡的 holder key**對 `transactionId` 簽一個 JWT，向原模組請求取貨 QR。
6. 模組回傳 `data:image/png;base64,…` 與 `totptimeout=300`；App 原樣顯示 PNG，門市 POS 負責兌換。

這也是為什麼我沒有在有備而來裡裝一個 QR library，照猜測的內容自行編碼。掃描器信任的是服務端簽發、可在後台核銷的短效授權，不是黑白方格長得像不像。實作已整理在有備而來的[公開 PR #56](https://github.com/bonds-tw/backupTW-iOS/pull/56)，CI 也已通過；門市成功取貨則補上自動化測試無法替代的外部驗收。

<figure>
  <a href="/images/reports/telecom-credential-store-pickup/pickup-protocol-bridge.svg" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸流程圖：有備而來超商取貨的三層協定">
    <img src="/images/reports/telecom-credential-store-pickup/pickup-protocol-bridge.svg" alt="有備而來先以 OID4VP 向官方驗證模組呈現電信憑證，再取得五分鐘 QR 給超商 POS 掃描" width="1200" height="690" loading="lazy" />
  </a>
  <figcaption><em>圖一。OID4VP 解決「可不可以相信這張卡與這次呈現」；服務端 QR 解決「既有 POS 要如何核銷這次取貨」。兩者相接，但不是同一個協定。</em></figcaption>
</figure>

## 為什麼驗證成功後還要 QR

因為手機上的「驗證成功」與收銀台的「可以交貨」不是同一件事。

OID4VP 定義 verifier 如何請求憑證、wallet 如何取得使用者同意、如何回傳 VP，以及 verifier 如何驗證。它不規定統一超商的 POS 要怎麼查包裹、不規定門市條碼格式，也不規定掃描後如何把訂單標成已領取。[OpenID4VP 1.0 Final](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html)把成功的 `direct_post` 結果定義為 verifier 回傳 HTTP 200 JSON；後續要不要發票、登機證、取貨碼或開門權限，是應用層的事。

若直接要求全台收銀機解析 SD-JWT VC、處理 holder binding、解析 DCQL、下載信任清單，再驗鏈上狀態，等於把數位皮夾的密碼學堆疊搬進每一台既有 POS。成本高、更新慢，也會讓門市終端接觸更多個資。

目前的設計採另一條路：官方驗證模組先理解數位身分，再把結果轉成 POS 已經會處理的短效兌換憑證。五分鐘期限縮短截圖被重播的窗口；第二次 holder-key 簽章把「已通過的 VP」與「現在要領的這筆交易」綁在一起。門市 POS 不必直接驗 VP，只需處理完成取貨所需的授權，不必成為一台完整的 OID4VP verifier。

這是合理的工程折衷，但前提是短效 QR 必須真正一次性、掃描後立即失效，服務端不得把姓名、電話或可長期追蹤的識別碼直接塞進可被旁人拍到的碼。本文沒有解碼原始 QR，因此不對其 payload 結構做超出證據的猜測。

## 它離 OID4VP 1.0 有多遠

答案不是「完全符合」或「完全不符合」，而是三層距離。

| 層次 | 觀察到的做法 | 與 1.0 Final 的距離 |
| --- | --- | --- |
| 核心交換觀念 | request by reference、簽名 request、`nonce`／`state`、選擇性揭露、holder binding、`direct_post` | **接近標準核心**；這一段明確是 OID4VP 家族 |
| 請求與回應方言 | `presentation_definition`、`presentation_submission`，以及裸的 `did:key` client ID | **仍是 final 前的方言**；1.0 Final 已以 `dcql_query` 為核心；若以 DID 識別 verifier，對應做法是 `decentralized_identifier:` client-id prefix |
| 取貨條碼 | 交易建立、第二個交易 JWT、PNG 與 300 秒期限、POS 核銷 | **完全在 OID4VP 範圍之外**；這是台灣服務的自訂應用協定 |

OpenID Foundation 在 2025 年 7 月核准[OpenID4VP 1.0 Final](https://openid.net/openid-for-verifiable-presentations-1-0-final-specification-approved/)。Final 規格已找不到 `presentation_definition`，改以 DCQL 描述要哪些憑證與欄位；它也為 DID verifier 定義 `decentralized_identifier:did:…` 的 client identifier prefix。這次官方服務仍沿用先前草案常見的 DIF Presentation Exchange 結構與裸 `did:key`。

這不代表既有服務突然變成「錯誤」。它確實能和官方 App 及有備而來互通，也完成了真實取貨。問題是：第三方 wallet 若只照 1.0 Final 實作，不能自然推導出這些舊欄位與後半段 API。沒有一份公開、可版本化的台灣 profile，就只能逐項做相容性工程。

所以我會這樣下結論：**身分呈現核心大約停在 OID4VP final 前一代；完整取貨旅程則在 OID4VP 之外多了一整個服務協定。** 這不是單純偏離幾個欄位，而是「標準身分層＋台灣橋接層＋既有 POS 層」的組合。

## 為什麼會這樣設計

以下是依公開介面與實測推論，不是官方未公開的設計說明。

第一，**保護既有投資**。超商 POS、掃描器、包裹後台和店員流程早已存在。讓 verifier 轉譯成舊設備可讀的 token，比一次改造所有門市容易。

第二，**縮小終端責任**。POS 不必保存信任清單、理解每家電信商的 credential type，或處理選擇性揭露。這些工作集中在可更新的 verifier module。

第三，**把身分與業務分開**。姓名與手機末五碼是「我符合取貨核對條件」；QR 是「這筆包裹現在可以被核銷」。把兩者分開，理論上能讓門市端看到更少資料。

第四，**官方規格當時仍在變動**。許多 OID4VP 部署是在 Final 之前開發，使用 Presentation Exchange 並不意外。真正該追問的是：Final 已經確定後，是否有遷移版本、相容期限與 conformance test。

第五，**第三方皮夾不是原本唯一目標**。若系統最初只要求官方 App 能工作，自訂 deep link、catalogue 與第二段 API 很快就能完成。當生態系開始期待多 wallet 互通，這些隱含契約才會浮出來。

## 其他國家也這樣做嗎

我沒有找到另一個國家公開出**完全相同**的「電信憑證經 OID4VP 後，再換超商取貨 QR」流程。比較接近的是四種相鄰設計。

| 國家／服務 | 做法 | 與台灣這次的異同 |
| --- | --- | --- |
| [韓國行動身分證](https://www.mobileid.go.kr/mip/hps/svcIntrcn/svcIntrcnUser.do) | 在便利商店、酒吧等場所顯示「我的 QR」，由驗證端掃描；官方說明 QR 約 30 秒重設，並只提供必要欄位 | 最接近「手機短效 QR＋便利商店」，但 QR 本身用來查驗身分／年齡，不是先做 VP、再發取貨兌換碼 |
| [日本 My Number 超商交付](https://lg-waps.go.jp/01-00.html) | My Number 卡或載有手機電子證明書的手機，在超商多功能機驗證後取得住民票等證明；iPhone／Android 可作為裝置 | 同樣讓數位身分接上既有超商基礎設施，但主要走機台與 NFC／電子證明書，不是手機顯示服務 QR |
| [IATA One ID](https://www.iata.org/en/programs/passenger/one-id/) | 旅客先從 wallet 提供護照、簽證等數位憑證；航空公司驗證後完成 check-in，之後使用 boarding-pass credential | 結構最相似：先證明身分與資格，再取得營運系統認得的通行憑證；後者不等於前面的身分呈現 |
| [Apple Verify with Wallet](https://developer.apple.com/wallet/get-started-with-verify-with-wallet/index.html) | 美國多州駕照、ID 與日本 My Number 可在 App 內選擇性提供；加密回應交由服務端解密驗證 | Apple 只標準化「驗身分」這一段；驗證後發票券、訂單或門票仍由各服務決定，和 OID4VP 的邊界相同 |
| [歐盟 EUDI 年齡驗證](https://ec.europa.eu/digital-building-blocks/sites/spaces/EUDIGITALIDENTITYWALLET/pages/930450954/The%2BAge%2BVerification%2BManual) | 以 OpenID4VP 或 Digital Credentials API 呈現 proof of age，服務只收到是否成年所需的最小資料 | 強調標準化呈現與信任清單；呈現成功後能看內容或買商品，是平台業務層，不是 OID4VP 自身 |

這些案例共同說明：**數位身分標準通常只把人帶到服務門口，不會替服務定義門票。** 台灣的特別之處不是有第二個 token，而是第二個 token 的 discovery、簽發、格式與生命週期目前仍高度綁定單一生態系。

## 我從這次成功學到的事

最直觀的心得是：互通性不一定代表所有舊設備都原生懂最新標準。有時真正能讓人今天就完成一件事的，是一座設計良好的橋。

超商取貨是一個很漂亮的例子。電信憑證把「報手機末五碼、拿證件給店員看」改成使用者明確同意的資料提供；verifier 把密碼學結果轉成門市已會核銷的 token；五分鐘 QR 讓新皮夾進入既有物流網。這比做一張華麗的數位身分證卡面更接近公共基礎設施：它真的把一件生活中的事做完。

但橋也會形成新的壟斷點。如果只有官方 App 知道怎麼從 VP 換 QR，標準的 wallet 可攜性會在最後一公尺消失；如果 QR 只能以不透明 PNG 取得，第三方很難獨立檢查 payload、一次性與隱私性；如果 public catalogue、信任清單、區塊鏈紀錄和 verifier module 沒有一致的版本與錯誤模型，綠勾勾可能只是在掩蓋哪一層失敗。

下一步不應該把這條橋拆掉，而是把它變成公開道路。我會建議數位發展部與服務提供者：

1. 發布「TWDIW 超商取貨 profile」，寫明 discovery、交易狀態、簽章、QR 生命週期、一次性核銷、錯誤碼與隱私欄位。
2. 提供不含真實包裹與個資的 sandbox、test vector 與第三方 wallet conformance suite。
3. 訂出從 Presentation Exchange／裸 `did:key` 遷移到 OID4VP 1.0 Final DCQL 與 client-id prefix 的版本計畫。
4. 公開說明 QR 是否包含個資、是否一次性、POS 掃描後如何撤銷，以及伺服器與門市日誌保存多久。
5. 保留人工核對與無障礙 fallback；螢幕亮度、放大、VoiceOver、網路失敗和手機沒電都不該讓人失去包裹。
6. 把「正式 POS 成功核銷」列入驗收，而不是只驗 API 200、App 出圖或測試機掃得到。

## 結論：這張 QR 不是數位身分證

它是一張由可信身分流程換來、短時間可用的取貨授權。

前半段問：「這張電信憑證是真的嗎？操作的人持有對應私鑰嗎？他同意提供哪些欄位？」這是可驗證憑證與 OID4VP 的工作。

後半段問：「統一超商的系統是否願意為這筆交易交付包裹？」這是服務端與 POS 的工作。

有備而來做的，不是猜出 QR 長什麼樣子，而是守住兩邊的信任邊界：只向官方目錄與信任紀錄一致的模組送資料，用卡片自己的 holder key 完成兩次必要的綁定，最後只顯示服務端真正簽發的短效圖像。

實驗到這裡不再只是「第三方皮夾理論上可行」。我拿手機走進超商，掃描器嗶了一聲，包裹真的交到手上。那一聲很短，卻把標準、政府 API、電信憑證、區塊鏈信任紀錄、iPhone 金鑰與一台既有 POS 接在了一起。

真正值得繼續做的，是讓下一個皮夾不必重新猜一次。
