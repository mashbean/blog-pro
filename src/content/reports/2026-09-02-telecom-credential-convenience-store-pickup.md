---
title: "用「有備而來」完整重現數位皮夾超商取貨"
description: "我把台灣大哥大門號電子卡接進有備而來，實際產生統一超商取貨 QR 並領到包裹。這篇拆解 OID4VP、官方驗證模組與既有 POS 之間的橋接，以及它離 OID4VP 1.0 還有多遠。"
topic: digital-identity
tags: ["數位皮夾", "可驗證憑證", "信任根與信任清單", "隱私", "使用者經驗", "開源", "台灣"]
keywords: ["有備而來", "數位憑證皮夾", "門號電子卡", "台灣大哥大", "統一超商", "超商取貨", "OID4VP", "SD-JWT VC", "QR Code", "POS", "選擇性揭露", "did:key"]
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

_這是「有備而來，理想的政府數位身分與資料 App 開發報告」第二篇。OpenAI GPT-5.6 協助我整理真機開發紀錄、數位發展部公開程式碼、OpenID4VP 1.0 Final 與國外案例，最後以我本人在超商完成取貨的結果校正。附圖保留發卡者的 `did:key` 與公開信任紀錄；姓名、手機末五碼、憑證序號都已裁掉或遮蔽，真正可掃的 QR 也不會公開。_

> **更正（2026 年 9 月 3 日）：** 初版把取貨 QR 說成「不透明的服務端核銷 token」，也推論 QR 不該含姓名或電話。這是錯的。數位發展部其實已公開 QR 驗證規格與離線驗證範例；本文已依文件重寫機制分析及流程圖，並保留這段更正紀錄。

我真的用有備而來領到包裹了。

流程不複雜：把台灣大哥大的門號電子卡領進有備而來，選「統一超商包裹取貨」，確認要提供姓名和手機末五碼，拿到一張畫面倒數五分鐘的 QR，再交給門市掃描。正式 POS 接受，包裹交付。

對我來說，最有意思的不是手機終於畫出 QR，而是那台不受我控制、也不知道我在開發什麼的門市機器真的收了它。這才是 App 之外的驗收。

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/telecom-credential-store-pickup/telecom-card-detail.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖：有備而來裡的台灣大哥大門號電子卡">
    <img src="/images/reports/telecom-credential-store-pickup/telecom-card-detail.png" alt="有備而來顯示台灣大哥大門號電子卡的卡片種類、發卡者 did:key 與效期" width="1170" height="2532" loading="lazy" />
  </a>
  <figcaption><em>圖一。實際領進有備而來的門號電子卡。畫面上的 `did:key` 是發卡者公開識別碼，不是持卡人的姓名或手機號碼，因此保留。</em></figcaption>
</figure>

這個成功也把原本的疑問放得更大：手機已經驗證過憑證，為什麼還要再顯示一張 QR？這張 QR 究竟是不是 OpenID4VP（也常被寫成 OIDC4VP）？

## 先把「成功」的範圍說清楚

這次確實走完了幾個彼此可以分開失敗的關卡：第三方皮夾讀到電信卡、找到官方取貨服務、核對 API 與鏈上信任紀錄、讓我看見並同意揭露欄位、送出 holder key 簽名的 VP、取得會倒數的服務端 QR，最後由門市完成核銷。

但這不是全台相容性認證。我只測了一張台灣大哥大門號電子卡、一個統一超商取貨情境和一次成功交付。過期碼、截圖重播、離線門市、取消交易、同一包裹重複兌換，以及其他電信商和超商，都還沒在這次實測裡得到答案。成功是真的，能外推到哪裡也要老實。

## 我怎麼摸到 QR 背後那條線

我沒有從破解 QR 開始，更沒有嘗試偽造條碼。比較可靠的做法，是先看官方 App 的行為，再沿著公開資料和實際網路流程往裡走。

官方畫面先讓人選憑證和欄位，按下「產生條碼」之後才出現五分鐘 QR。光是這個先後順序，就知道「提供身分資料」和「讓門市核銷」是兩件事。

接著是數位發展部前端的[公開 VP 服務目錄](https://frontend.wallet.gov.tw/api/moda/dwapp/offline/vpList?name=&page=0&size=100)。我在 2026 年 9 月 2 日查到 `22555003_711pickup`，名稱正是「統一超商包裹取貨」，旁邊還有獨立的 verifier module URL。有備而來不是把一個猜來的網址寫死，而是先找到服務，再把模組主機和官方信任紀錄對起來。

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/telecom-credential-store-pickup/pickup-trust-evidence.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖：統一超商包裹取貨服務的 API 與 Arbitrum 信任核對">
    <img src="/images/reports/telecom-credential-store-pickup/pickup-trust-evidence.png" alt="有備而來在提供資料前顯示統一超商服務已通過官方 API 與 Arbitrum 信任核對" width="1170" height="1050" loading="lazy" />
  </a>
  <figcaption><em>圖二。App 在送資料前先核對官方 API 與 Arbitrum 紀錄。這張公開版截到個人欄位出現之前，留下服務名稱、區塊與交易紀錄。</em></figcaption>
</figure>

數位發展部的[數位憑證皮夾原始碼](https://github.com/moda-gov-tw/TWDIW-official-app)則補上架構線索：holder App、OpenID4VP handler、verifier API 和 VP 驗證元件是分開的。把畫面、目錄、原始碼和黑箱測試疊在一起，完整流程才慢慢浮出來：

1. App 從官方目錄找到取貨情境與 verifier module。
2. App 向模組建立一次性交易，拿到 `transactionId` 和 authorization deep link。
3. App 依 deep link 取得簽名的 OpenID4VP request，核對 `nonce`、`state`、回傳主機與要求欄位。
4. 我同意後，門號電子卡選擇性揭露姓名與手機末五碼，VP 回到 verifier。
5. VP 通過後，App 再用同一張卡的 holder key 對 `transactionId` 簽一個 JWT，向原模組請求取貨 QR。
6. 模組回傳 `data:image/png;base64,…` 和 `totptimeout=300`；App 顯示原圖。
7. 門市端掃出 QR 裡的 `t`、`d`、`h`、`k`，以本地金鑰解密 `d`，再驗 TOTP 與 HMAC；密碼學查驗通過後，才進入交付包裹的業務流程。

所以有備而來沒有自己「算」一張超商條碼。它拿到官方模組產生的 PNG，原樣顯示；真正的協定資料藏在 QR 裡。依數位發展部公開的[QR Code 驗證規格](https://github.com/moda-gov-tw/TWDIW-official-app/blob/main/Docs/QR%20Code%20%E9%A9%97%E8%AD%89%E8%A6%8F%E6%A0%BC%E8%AA%AA%E6%98%8E%E6%96%87%E4%BB%B6.md)，這不是等後台查詢的隨機 token，而是一包可離線驗證的加密資料。相容性實作放在有備而來的[公開 PR #56](https://github.com/bonds-tw/backupTW-iOS/pull/56)；CI 通過證明程式沒有壞，這次門市取貨才證明外面的系統真的接受它。

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/telecom-credential-store-pickup/pickup-qr-redacted.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖：已遮蔽且畫面倒數五分鐘的統一超商取貨 QR">
    <img src="/images/reports/telecom-credential-store-pickup/pickup-qr-redacted.png" alt="有備而來顯示畫面倒數五分鐘的統一超商取貨 QR；可掃區塊已以不透明遮罩完整覆蓋" width="1170" height="2532" loading="lazy" />
  </a>
  <figcaption><em>圖三。這張 QR 是官方驗證模組回傳的短效 PNG，畫面上的倒數會真的走。公開版用不透明遮罩蓋掉整個可掃區域；即使原碼已過期，裡面仍可能是姓名、電話等欄位的密文，不拿來當裝飾公開。</em></figcaption>
</figure>

<figure>
  <a href="/images/reports/telecom-credential-store-pickup/pickup-protocol-bridge.svg" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸流程圖：有備而來超商取貨的三層協定">
    <img src="/images/reports/telecom-credential-store-pickup/pickup-protocol-bridge.svg" alt="有備而來先以 OpenID4VP 向官方驗證模組呈現電信憑證，再由門市端解密 QR 並驗證 TOTP 與 HMAC" width="1200" height="690" loading="lazy" />
  </a>
  <figcaption><em>圖四。OpenID4VP 處理「這張卡和這次呈現能不能相信」；加密 QR 把已同意揭露的資料帶到門市端，讓 POS 或安全模組離線查驗。它們接在一起，卻不是同一個協定。</em></figcaption>
</figure>

## 手機已經驗證成功，為什麼還要 QR

手機上的「驗證成功」只代表前一段 verifier 接受了這次憑證呈現。資料接著怎麼送到門市端、門市怎麼在自己的環境裡重驗，OpenID4VP 沒有規定。這張 QR 就是台灣實作補上的第二段載具。

[OpenID4VP 1.0 Final](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html)規範 verifier 怎麼要求憑證、wallet 怎麼取得同意、VP 怎麼送回去，以及 verifier 怎麼驗證。`direct_post` 成功時，規格走到 HTTP 200 JSON 回應就停了。它不替統一超商定義包裹查詢、門市條碼格式或「已領取」狀態。

官方 QR 規格把外層 JSON 寫得很清楚：`t` 是交易類型，`d` 是 Base64 編碼的加密資料，`h` 是解密後明文的 HMAC，`k` 是金鑰識別碼。門市端或它旁邊的驗證模組持有 `privateKey`、`totpKey` 與 `hmacKey`，以 X25519／ECDH 衍生金鑰、用 ChaCha20-Poly1305 解密 `d`，再檢查 TOTP 和整份明文的 HMAC。官方[離線驗證範例](https://github.com/moda-gov-tw/TWDIW-official-app/blob/main/SampleCode/VerifyQRCodeController.java)甚至直接寫明：這個檢查可以在離線環境完成，三把金鑰在正式部署時應留在 POS 或安全模組，不要送上網路。

這也推翻了我初版文章裡最離譜的判斷：QR 的設計不是「不要放姓名電話」，而是**允許把必要欄位放進明文，再把整包資料加密給指定的驗證端**。官方範例特別提醒，解密結果可能包含姓名與電話，絕對不能寫進 log；格式上只有 `totp` 是必填，其餘欄位由 wallet 情境決定。這次取貨要求的正是姓名與手機末五碼，隱私保護靠的是收件端加密、最少揭露與解密後不留存，不是靠 QR 裡完全沒有個資。

所以答案是：手機掃 iPad 後立刻顯示成功，是 OpenID4VP 那一段完成了；後面的 QR 則把同意揭露的資料換成門市驗證端能解密、能離線檢查的新封裝。門市不必重新理解 SD-JWT VC、holder binding 或整份信任清單，但也不只是一支「笨掃描器」——POS 或其安全模組仍要做解密、TOTP 與 HMAC 驗證。至於驗完之後是否再連包裹後台、如何標記已領取，是另一層業務流程，QR 密碼規格沒有替超商作答。

這裡還有一個真正需要釐清的落差。有備而來收到的 API 欄位是 `totptimeout=300`，畫面因此倒數五分鐘；官方 QR 規格卻寫 TOTP 有效 60 秒，另容許前後 30 秒時鐘誤差。TOTP 只證明資料夠新鮮，**不等於掃過一次就自動作廢**。目前沒有足夠證據把五分鐘 UI、60 秒 TOTP 和「一次性取貨」硬說成同一件事。這應該列為 profile 文件與互通測試的必答題：五分鐘內是否輪替內層 QR、不同門市使用哪個 TOTP 週期，以及重複交付由哪一層擋下。

## 它離 OpenID4VP 1.0 到底多遠

很難用一個百分比回答，因為三層的距離不同。

| 層次 | 這次看到的做法 | 與 1.0 Final 的關係 |
| --- | --- | --- |
| 身分呈現核心 | request by reference、簽名 request、`nonce`／`state`、選擇性揭露、holder binding、`direct_post` | 明確屬於 OpenID4VP 家族，核心觀念很接近 |
| 請求與回應格式 | `presentation_definition`、`presentation_submission`、裸的 `did:key` client ID | 還是 Final 之前常見的方言；Final 以 `dcql_query` 為核心，DID verifier 也有 `decentralized_identifier:` client-id prefix |
| 取貨與離線查驗 | 建立交易、第二個 JWT、PNG 內的 `t`／`d`／`h`／`k`、X25519 解密、TOTP、HMAC | 不在 OpenID4VP 範圍內，是台灣服務自己加的 QR 驗證 profile |

OpenID Foundation 在 2025 年 7 月核准[OpenID4VP 1.0 Final](https://openid.net/openid-for-verifiable-presentations-1-0-final-specification-approved/)。這次服務仍可看見 DIF Presentation Exchange 的 `presentation_definition`／`presentation_submission`，以及裸 `did:key`。它能和官方 App、有備而來互通，也完成了真實取貨；但一個只照 1.0 Final 寫的新 wallet，不會自己猜出這些舊欄位，更不會知道後半段 QR API。

我的判斷是：只看身分呈現，它是 OpenID4VP Final 前一代的可互通實作；看完整取貨旅程，後半段還有一整套台灣自訂協定。真正的問題不是「合不合格」，而是這套台灣 profile 有沒有公開、版本化，讓下一個 wallet 不必重新考古。

## 我猜它為什麼被做成這樣

這一節是依公開介面和實測作的推論，不是官方內部設計文件。

最現實的理由仍是既有 POS，但官方規格透露了更具體的設計目標：**門市端即使斷網，也能驗這包資料。** 掃描器、包裹後台和店員流程都已經在運作；在中間放一個把數位憑證結果轉成加密 QR 的模組，再把解密金鑰放進 POS 的安全區，比要求每台收銀機都實作 OpenID4VP、SD-JWT VC 與政府信任清單容易得多。

這樣確實把責任切開，但不是把資料完全擋在門市之外。前段 verifier 負責判斷憑證和 holder binding；後段 POS 驗證模組解密 QR，取得姓名、手機末五碼等情境需要的欄位，再用 TOTP 和 HMAC 確認時效與完整性。好處是門市不用看懂原始憑證，也不用連回網路做密碼學查驗；代價是 POS 端必須妥善保管三把驗證金鑰，而且解密後的個資不能落入 log。

還有一個時序問題：不少系統在 OpenID4VP Final 之前就開始做，沿用 Presentation Exchange 並不奇怪。若最初只要求官方 App 與既有門市系統能跑，自訂 deep link、catalogue、第二段 API 和離線 QR profile 都很自然。等到第三方 wallet 真正接進來，原本散落在官方 App 與範例程式裡的默契才變成互通成本。

## 別的國家有沒有類似做法

我沒有找到另一個國家公開出完全相同的「電信憑證做完 OpenID4VP，再換超商取貨 QR」。不過，先驗身分、再換營運系統認得的通行物，並不是台灣獨有。

| 國家／服務 | 實際做法 | 和這次取貨的距離 |
| --- | --- | --- |
| [韓國行動身分證](https://www.mobileid.go.kr/mip/hps/svcIntrcn/svcIntrcnUser.do) | 在便利商店、酒吧等場所顯示「我的 QR」供驗證端掃描；官方說明 QR 約 30 秒重設，只提供必要欄位 | 最接近「手機短效 QR＋便利商店」，但 QR 本身就在做身分／年齡查驗，不是 VP 後再發取貨碼 |
| [日本 My Number 超商交付](https://lg-waps.go.jp/01-00.html) | 用 My Number 卡或載有手機電子證明書的手機，在超商多功能機驗證後取得住民票等證明 | 同樣把數位身分接到超商基礎設施，主要介面卻是機台、NFC 與電子證明書 |
| [IATA One ID](https://www.iata.org/en/programs/passenger/one-id/) | 旅客先從 wallet 提供護照、簽證等數位憑證，航空公司驗完後再進入 check-in 與 boarding-pass 流程 | 結構很像：先證明身分與資格，再拿營運系統認得的通行憑證 |
| [Apple Verify with Wallet](https://developer.apple.com/wallet/get-started-with-verify-with-wallet/index.html) | 美國部分州的駕照／ID 與日本 My Number 可在 App 內選擇性提供，由服務端解密驗證 | Apple 管「驗身分」這一段；驗完後的票券、訂單或門票，仍由服務自己定義 |
| [歐盟 EUDI 年齡驗證](https://ec.europa.eu/digital-building-blocks/sites/spaces/EUDIGITALIDENTITYWALLET/pages/930450954/The%2BAge%2BVerification%2BManual) | 以 OpenID4VP 或 Digital Credentials API 呈現年齡證明，只揭露服務需要的結果 | 標準化呈現與信任；呈現成功後能買什麼、看什麼，仍屬業務層 |

這些例子讓邊界變得很清楚：數位身分標準通常把人送到服務門口，不會替服務定義門票。台灣比較特別的地方，是在 OpenID4VP 之後又加了一個可離線解密的 QR 呈現層；它的 discovery、金鑰布署、欄位 profile 和生命週期，仍深深綁在單一生態系。

## 最後一公里比卡面重要

這次實測讓我改變了一點看法。互通性不一定是讓所有舊設備立刻看懂最新標準；有時候先做一座邊界清楚的橋，反而能讓人今天就完成一件生活裡的事。

電信憑證把原本口頭報末五碼、拿證件給店員看的動作，改成手機上一次看得見的同意。verifier 再把需要的欄位封進只能由門市驗證端解開的 QR。這比把數位身分證卡面做得很漂亮更接近基礎設施，因為它真的跨進既有物流網。

但橋也可能變成新的關卡。如果只有官方 App 知道 VP 通過後去哪裡換 QR，wallet 的可攜性還是會在最後一公尺消失。好消息是 QR 格式和離線驗證演算法已經公開，不是完全不透明；缺的則是端到端 profile：API 回應的五分鐘如何對上規格的 60 秒、金鑰怎麼輪替、不同門市怎麼佈署、哪些欄位允許進入明文，以及重複取貨究竟由 POS 還是後台阻擋。若服務目錄、信任清單、鏈上紀錄與 verifier module 又沒有共同版本，畫面上的綠勾勾很容易把真正失敗的層次藏起來。

我希望下一步不是拆掉這座橋，而是把它畫成公開道路。至少要有一份把現有 QR 規格、取貨 API 與欄位定義串起來的 TWDIW 取貨 profile，再補無個資 sandbox、test vector、錯誤碼、60／300 秒的明確語意、業務層防重複交付規則和第三方 wallet conformance suite；也要寫出從 Presentation Exchange／裸 `did:key` 遷移到 OpenID4VP 1.0 Final DCQL 與 client-id prefix 的時間表。

另一件不能漏掉的事，是把正式 POS 核銷列進驗收。API 200、App 成功出圖、實驗室掃描器讀得到，都不等於門市會交付包裹。螢幕太暗、手機沒電、網路斷線或 VoiceOver 操作不順時，也仍需要人工核對和無障礙的退路。

## 這張 QR 不是數位身分證

它是可信身分流程產生的一包加密取貨資料。

前半段在問：這張電信憑證是真的嗎、手機上的人握有對應私鑰嗎、他同意提供哪些欄位？這是可驗證憑證與 OpenID4VP 的工作。

後半段把同意揭露的欄位加密給門市端，讓它離線檢查資料是否新鮮、完整；至於統一超商願不願意為這筆交易交付包裹，才是服務端和 POS 的業務工作。

有備而來守的是中間那條線：只向官方目錄與信任紀錄一致的模組送資料，用卡片自己的 holder key 綁住兩次必要動作，最後原樣顯示模組回傳的加密 QR。門市端再以自己的金鑰解密，而不是拿 QR 回伺服器問「這個 token 是不是真的」。

我拿手機去超商，包裹真的領到了。這件小事把政府 API、電信憑證、鏈上信任紀錄、iPhone 金鑰和既有 POS 接在同一條路上。現在最值得做的，是讓下一個皮夾不用再把這條路猜一次。
