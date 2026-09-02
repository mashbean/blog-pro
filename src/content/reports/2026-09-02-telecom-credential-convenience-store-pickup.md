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

_這是「有備而來，理想的政府數位身分與資料 App 開發報告」第二篇。OpenAI GPT-5.6 協助我整理真機開發紀錄、數位發展部公開程式碼、OpenID4VP 1.0 Final 與國外案例，最後以我本人在超商完成取貨的結果校正。附圖保留發卡者的 `did:key` 與公開信任紀錄；姓名、手機末五碼、憑證序號都已裁掉或遮蔽，真正可掃的 QR 也不會公開。_

我真的用有備而來領到包裹了。

流程不複雜：把台灣大哥大的門號電子卡領進有備而來，選「統一超商包裹取貨」，確認要提供姓名和手機末五碼，拿到一張五分鐘有效的 QR，再交給門市掃描。正式 POS 接受，包裹交付。

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
6. 模組回傳 `data:image/png;base64,…` 和 `totptimeout=300`；App 顯示原圖，門市 POS 負責兌換。

所以有備而來沒有自己「算」一張超商條碼。它也不該這麼做。門市相信的是服務端簽發、能在後台核銷的短效授權，不是任何長得像 QR 的黑白方格。相容性實作放在有備而來的[公開 PR #56](https://github.com/bonds-tw/backupTW-iOS/pull/56)；CI 通過證明程式沒有壞，這次門市取貨才證明外面的系統真的接受它。

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/telecom-credential-store-pickup/pickup-qr-redacted.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖：已遮蔽的五分鐘統一超商取貨 QR">
    <img src="/images/reports/telecom-credential-store-pickup/pickup-qr-redacted.png" alt="有備而來顯示五分鐘有效的統一超商取貨 QR；可掃區塊已以不透明遮罩完整覆蓋" width="1170" height="2532" loading="lazy" />
  </a>
  <figcaption><em>圖三。這張 QR 是官方驗證模組回傳的短效 PNG，畫面上的倒數會真的走。公開版用不透明遮罩蓋掉整個可掃區域；即使原碼已過期，也不把服務 token 當成裝飾公開。</em></figcaption>
</figure>

<figure>
  <a href="/images/reports/telecom-credential-store-pickup/pickup-protocol-bridge.svg" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸流程圖：有備而來超商取貨的三層協定">
    <img src="/images/reports/telecom-credential-store-pickup/pickup-protocol-bridge.svg" alt="有備而來先以 OpenID4VP 向官方驗證模組呈現電信憑證，再取得五分鐘 QR 給超商 POS 掃描" width="1200" height="690" loading="lazy" />
  </a>
  <figcaption><em>圖四。OpenID4VP 處理「這張卡和這次呈現能不能相信」；服務端 QR 處理「既有 POS 要怎麼核銷這次取貨」。它們接在一起，卻不是同一個協定。</em></figcaption>
</figure>

## 手機已經驗證成功，為什麼還要 QR

手機上的「驗證成功」只代表 verifier 接受了這次憑證呈現。收銀台還需要一個它看得懂、能對應包裹、可以立即核銷的東西。

[OpenID4VP 1.0 Final](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html)規範 verifier 怎麼要求憑證、wallet 怎麼取得同意、VP 怎麼送回去，以及 verifier 怎麼驗證。`direct_post` 成功時，規格走到 HTTP 200 JSON 回應就停了。它不替統一超商定義包裹查詢、門市條碼格式或「已領取」狀態。

如果硬要每台收銀機直接解析 SD-JWT VC、驗 holder binding、跑 DCQL、下載信任清單，再查鏈上狀態，就等於把整套數位身分基礎建設搬進 POS。更新慢，也讓門市端碰到更多不需要的資料。

現在的做法比較像轉接頭。官方驗證模組理解數位憑證，通過之後再發一張 POS 已經會處理的短效兌換碼。五分鐘縮短了截圖重播的窗口；第二次 holder-key 簽章則把已完成的 VP 和眼前這筆交易綁在一起。POS 不必變成 OpenID4VP verifier，也能完成取貨。

這個折衷能成立，有幾個條件：QR 必須真的一次性、掃描後要失效、內容不該塞入姓名電話或長期識別碼，伺服器和門市也要有清楚的留存政策。我沒有解碼原始 QR，因此不對它裡面究竟放了什麼做超出證據的猜測。

## 它離 OpenID4VP 1.0 到底多遠

很難用一個百分比回答，因為三層的距離不同。

| 層次 | 這次看到的做法 | 與 1.0 Final 的關係 |
| --- | --- | --- |
| 身分呈現核心 | request by reference、簽名 request、`nonce`／`state`、選擇性揭露、holder binding、`direct_post` | 明確屬於 OpenID4VP 家族，核心觀念很接近 |
| 請求與回應格式 | `presentation_definition`、`presentation_submission`、裸的 `did:key` client ID | 還是 Final 之前常見的方言；Final 以 `dcql_query` 為核心，DID verifier 也有 `decentralized_identifier:` client-id prefix |
| 取貨與核銷 | 建立交易、第二個 JWT、PNG、300 秒效期、POS 核銷 | 不在 OpenID4VP 範圍內，是台灣服務自己加的應用協定 |

OpenID Foundation 在 2025 年 7 月核准[OpenID4VP 1.0 Final](https://openid.net/openid-for-verifiable-presentations-1-0-final-specification-approved/)。這次服務仍可看見 DIF Presentation Exchange 的 `presentation_definition`／`presentation_submission`，以及裸 `did:key`。它能和官方 App、有備而來互通，也完成了真實取貨；但一個只照 1.0 Final 寫的新 wallet，不會自己猜出這些舊欄位，更不會知道後半段 QR API。

我的判斷是：只看身分呈現，它是 OpenID4VP Final 前一代的可互通實作；看完整取貨旅程，後半段還有一整套台灣自訂協定。真正的問題不是「合不合格」，而是這套台灣 profile 有沒有公開、版本化，讓下一個 wallet 不必重新考古。

## 我猜它為什麼被做成這樣

這一節是依公開介面和實測作的推論，不是官方內部設計文件。

最現實的理由應該是既有 POS。掃描器、包裹後台和店員流程都已經在運作；在中間放一個會驗數位身分、也會發舊系統 token 的模組，比改造所有門市快得多。

這樣也把責任集中在比較容易更新的地方。POS 不必理解每家電信商的 credential type，不必保存信任清單，也不必碰選擇性揭露。姓名與手機末五碼用來回答「是不是符合取貨核對條件」，QR 則回答「這筆包裹現在能不能交付」。兩段拆開，門市理論上可以少看一些資料。

還有一個時序問題：不少系統在 OpenID4VP Final 之前就開始做，沿用 Presentation Exchange 並不奇怪。若最初只要求官方 App 能跑，自訂 deep link、catalogue 和第二段 API 也很自然。等到第三方 wallet 真正接進來，原本藏在官方 App 裡的默契才變成互通障礙。

## 別的國家有沒有類似做法

我沒有找到另一個國家公開出完全相同的「電信憑證做完 OpenID4VP，再換超商取貨 QR」。不過，先驗身分、再換營運系統認得的通行物，並不是台灣獨有。

| 國家／服務 | 實際做法 | 和這次取貨的距離 |
| --- | --- | --- |
| [韓國行動身分證](https://www.mobileid.go.kr/mip/hps/svcIntrcn/svcIntrcnUser.do) | 在便利商店、酒吧等場所顯示「我的 QR」供驗證端掃描；官方說明 QR 約 30 秒重設，只提供必要欄位 | 最接近「手機短效 QR＋便利商店」，但 QR 本身就在做身分／年齡查驗，不是 VP 後再發取貨碼 |
| [日本 My Number 超商交付](https://lg-waps.go.jp/01-00.html) | 用 My Number 卡或載有手機電子證明書的手機，在超商多功能機驗證後取得住民票等證明 | 同樣把數位身分接到超商基礎設施，主要介面卻是機台、NFC 與電子證明書 |
| [IATA One ID](https://www.iata.org/en/programs/passenger/one-id/) | 旅客先從 wallet 提供護照、簽證等數位憑證，航空公司驗完後再進入 check-in 與 boarding-pass 流程 | 結構很像：先證明身分與資格，再拿營運系統認得的通行憑證 |
| [Apple Verify with Wallet](https://developer.apple.com/wallet/get-started-with-verify-with-wallet/index.html) | 美國部分州的駕照／ID 與日本 My Number 可在 App 內選擇性提供，由服務端解密驗證 | Apple 管「驗身分」這一段；驗完後的票券、訂單或門票，仍由服務自己定義 |
| [歐盟 EUDI 年齡驗證](https://ec.europa.eu/digital-building-blocks/sites/spaces/EUDIGITALIDENTITYWALLET/pages/930450954/The%2BAge%2BVerification%2BManual) | 以 OpenID4VP 或 Digital Credentials API 呈現年齡證明，只揭露服務需要的結果 | 標準化呈現與信任；呈現成功後能買什麼、看什麼，仍屬業務層 |

這些例子讓邊界變得很清楚：數位身分標準通常把人送到服務門口，不會替服務定義門票。台灣比較特別的地方，不是多發了一個 token，而是這個 token 的 discovery、簽發方式、格式和生命週期，目前仍深深綁在單一生態系。

## 最後一公里比卡面重要

這次實測讓我改變了一點看法。互通性不一定是讓所有舊設備立刻看懂最新標準；有時候先做一座邊界清楚的橋，反而能讓人今天就完成一件生活裡的事。

電信憑證把原本口頭報末五碼、拿證件給店員看的動作，改成手機上一次看得見的同意。verifier 再把密碼學結果轉成門市會核銷的 token。這比把數位身分證卡面做得很漂亮更接近基礎設施，因為它真的跨進既有物流網。

但橋也可能變成新的關卡。如果只有官方 App 知道 VP 通過後去哪裡換 QR，wallet 的可攜性還是會在最後一公尺消失；若 QR 永遠只是一張不透明 PNG，第三方也很難稽核它的一次性和隱私；若服務目錄、信任清單、鏈上紀錄與 verifier module 沒有共同版本，畫面上的綠勾勾很容易把真正失敗的層次藏起來。

我希望下一步不是拆掉這座橋，而是把它畫成公開道路。至少要有一份可引用的 TWDIW 取貨 profile、無個資 sandbox、test vector、錯誤碼、一次性核銷規則和第三方 wallet conformance suite；也要寫出從 Presentation Exchange／裸 `did:key` 遷移到 OpenID4VP 1.0 Final DCQL 與 client-id prefix 的時間表。

另一件不能漏掉的事，是把正式 POS 核銷列進驗收。API 200、App 成功出圖、實驗室掃描器讀得到，都不等於門市會交付包裹。螢幕太暗、手機沒電、網路斷線或 VoiceOver 操作不順時，也仍需要人工核對和無障礙的退路。

## 這張 QR 不是數位身分證

它是可信身分流程換來的一張短效取貨授權。

前半段在問：這張電信憑證是真的嗎、手機上的人握有對應私鑰嗎、他同意提供哪些欄位？這是可驗證憑證與 OpenID4VP 的工作。

後半段在問：統一超商願不願意為這筆交易交付包裹？這是服務端和 POS 的工作。

有備而來守的是中間那條線：只向官方目錄與信任紀錄一致的模組送資料，用卡片自己的 holder key 綁住兩次必要動作，最後顯示服務端真正簽發的短效圖像。

我拿手機去超商，包裹真的領到了。這件小事把政府 API、電信憑證、鏈上信任紀錄、iPhone 金鑰和既有 POS 接在同一條路上。現在最值得做的，是讓下一個皮夾不用再把這條路猜一次。
