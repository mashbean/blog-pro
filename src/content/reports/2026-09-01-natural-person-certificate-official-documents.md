---
title: "如果用自然人憑證接收電子公文？"
description: "台灣已把 G2C 民眾公文電子交換列入 115–119 年計畫。我用有備而來做出真機原型，拆解自然人憑證、數位皮夾、法定送達與政府採購之間還缺哪些零件。"
topic: digital-identity
tags: ["數位皮夾", "共融與可及性", "使用者經驗", "公共採購", "開源", "法律與救濟", "台灣", "北歐"]
keywords: ["電子公文", "自然人憑證", "行動自然人憑證", "G2C", "電子送達", "有備而來", "MyData", "Digital Post", "eDelivery", "資料保險箱"]
pubDate: 2026-09-01
draft: false
lang: "zh-TW"
aiModel: "OpenAI GPT-5.6"
aiPrompt: "以青年諮詢提案、台灣法規與官方計畫、國際數位郵件案例、研究文獻及有備而來真機原型，查核並撰寫可落地的電子公文政策倡議。"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-09-01-natural-person-certificate-official-documents"
aiGeneratedDate: 2026-09-01
humanReviewed: false
category: "數位政府與數位身分"
series: "ready-digital-government"
seriesOrder: 1
slug: "2026-09-01-natural-person-certificate-official-documents"
---

_這是「有備而來，理想的政府數位身分與資料 App 開發報告」第一篇。文章由 OpenAI GPT-5.6 協助蒐集與交叉查核官方資料、國際案例和研究文獻，再由我用實際開發紀錄修訂。文中的有備而來畫面是 iPhone 真機開發沙盒，使用合成公文與不可路由地址，沒有介接政府 G2C 交換服務，也沒有法定送達效果。_

我擔任行政院青年諮詢委員時，同儕陳建穎和陳怡君、黃稚淋提出一個很直白的問題：公司、團體和機關早已交換電子公文，一般人為什麼不能用自然人憑證收？

他們的[提案](https://advisory.yda.gov.tw/proposals-detail/316)談的不只是少印幾張紙。掛號寄到戶籍地，人可能在外地工作；平信沒有可追蹤紀錄；視障者即使摸到信封，也未必知道裡面是有期限的行政處分。不同機關各做一套入口，民眾還得逐一註冊、安裝元件、記住去哪裡收。

看到這份提案時，我腦中冒出一句：「那我自己做做看。」

我把「個人公文接收站」放進有備而來 App 的 MyData 資料保險箱下面，沿用既有的行動自然人憑證簽章跳轉，也開了一條實體自然人憑證和讀卡機的開發測試路徑。幾個小時之後，iPhone 已經可以顯示合成公文、驗來源簽章、解密、保存、簽收。

然後我也更確定一件事。簽章成功，只跨過了整條路上的一小段。

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/natural-person-official-documents/ready-home-vault.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖：有備而來首頁與 MyData 資料保險箱">
    <img src="/images/reports/natural-person-official-documents/ready-home-vault.png" alt="有備而來首頁與 MyData 資料保險箱" width="1206" height="2622" loading="lazy" />
  </a>
  <figcaption><em>圖一。有備而來原有的國民身分證、政府皮夾卡片與 MyData 資料保險箱。電子公文被安排在資料保險箱之下，讓「收到」接到「長期保管與再次使用」。這是開發版畫面。</em></figcaption>
</figure>

## 台灣其實已經開始做了

這份青年諮詢提案最後被列為「部分參採」。辦理情形留下幾個很關鍵的官方承諾。

數位發展部表示，檔案管理局的「文書檔案數位治理與智能服務計畫」已納入 115–119 年「智慧政府數位領航發展計畫」，工作項目明列 **G2C 民眾公文電子交換服務**。國發會的回覆進一步寫到，民眾收件平台的系統架構與功能開發已納入計畫，**預計 117 年完成上線服務**，後續還要協調主管機關建置民眾端統合交換中心。[立法院審議的計畫文件](https://ppg.ly.gov.tw/ppg/download/agenda1/02/agendaAnnex/11/05/14/110514991.pdf)和[檔案管理局 115 年度施政計畫](https://www.archives.gov.tw/wSite/public/Attachment/008/f1756450402384.pdf)也能看到相同方向。

「預計」兩字要保留。今天還沒有一個可供全民註冊的正式 G2C 收件地址，也沒有公開測試端點、合格 App 清單或法定送達啟用公告。117 年是官方規劃時程，服務是否按期可用，要看法制、預算、採購、跨機關接入、資安與使用者驗收。

規模也是新的量級。國發會在提案回覆中指出，截至 113 年 7 月 15 日，自然人憑證申請人數為 983 萬 5,292 人；當時公文交換單位共 3 萬 7,646 個。前一套交換體系主要面對有組織、有承辦人、有文書流程的單位。全民服務還要處理換手機、搬家、失能、監護、死亡、出國、代理、拒收、誤投、撤銷憑證和救濟。

數位部也在官方回覆中說得很清楚：MyData 是個人化資料自主運用平台，並非電子公文交換平台。MyData 適合讓人主動取回資料；電子送達則是政府把會影響權利與期限的文件交到一個依法可認定的位址。兩者可在使用者端會合，背後仍是兩套制度。

## 為什麼一直沒有全民服務

自然人憑證發行多年，開源社群也已有 PC/SC、PKCS#11 和 GPKI driver，卡片簽章本身並非空白地帶。卡住的是五件必須一起成立的事。

| 層次 | 要回答的問題 | 只有自然人憑證能否完成 |
| --- | --- | --- |
| 身分 | 目前操作的人是誰？簽章金鑰是否有效？ | 可完成一部分 |
| 地址 | 哪個收件位址屬於這個人？何時啟用、停用或改投紙本？ | 不能 |
| 交換 | 哪些機關能送？封裝、加密、簽章與錯誤回報如何互通？ | 不能 |
| 送達 | 何時起算法定期限？未開啟、通知失敗、人在國外怎麼辦？ | 不能 |
| 證據與救濟 | 民眾如何證明沒收到、收到錯件或系統故障？誰負責調閱紀錄？ | 不能 |

[電子簽章法](https://law.moda.gov.tw/LawContent.aspx?id=FL011349&media=print)讓符合條件的電子文件與簽章進入法律秩序。[行政程序法第 68 條](https://mojlaw.moj.gov.tw/LawContentExtent.aspx?LawNo=68&lsid=FL000632)則讓電子傳達受到適用法規與具體程序的約束。檔案管理局的[機關公文電子交換作業辦法](https://www.archives.gov.tw/tw/arctw/155-1741.html)與[文書及檔案管理電腦化作業規範](https://www.archives.gov.tw/tw/arctw/156-1795.html)還規定交換、確認、簽章與紀錄等作業。

把這些層次壓成一個「以自然人憑證登入」按鈕，畫面很快能做完，爭議發生時卻回答不了最重要的問題：期限究竟從哪一秒開始算？

## 國內最接近的服務

台灣並非沒有個人電子收文。現有服務多半被包在特定業務裡。

| 服務 | 已經做到 | 距離全民收件匣還差什麼 |
| --- | --- | --- |
| [智慧財產局 E-SET／e 網通](https://www.tipo.gov.tw/tw/tipo1/241-1877.html) | 申請人可登錄電子送達、以憑證收受特定智財文件 | 只涵蓋智財業務，註冊、元件與規則由單一法域管理 |
| [司法院電子訴訟文書平台](https://www.judicial.gov.tw/tw/cp-248-58073-78798-1.html) | 自然人可用自然人憑證取得帳號，在開放案件類型中遞狀與收文 | 案件與文書有明確範圍，部分程序仍排除在外 |
| [經濟部 G2B 電子公文交換](https://serv.gcis.nat.gov.tw/g2b-edoc/tw/Index) | 企業端已有交換服務和工商憑證 | 服務對象是事業，不是所有自然人 |
| [MyData](https://mydata.nat.gov.tw/) | 由本人發動取回個人資料，可進資料保險箱 | 沒有政府主動送達、送達時點與交換回執 |
| [行動自然人憑證](https://moica.nat.gov.tw/news_in_17f02741be1000000769.html) | 手機可做身分驗證與簽章 | 它是可信身分元件，沒有公文地址與交換網 |

這些服務很重要。它們證明「自然人憑證＋特定規則＋限定文件」能運作，也顯示碎片化的代價。人民面對的政府是一個整體，後台卻按機關與法律切成許多入口。

另一條倡議來自身心障礙近用。司法院公布的[身心障礙者近用司法指引](https://www.judicial.gov.tw/tw/cp-1429-1179729-afca9-1.html)與諮詢資料，已經碰到視障者難以辨識紙本法院通知、可能錯過期限的風險。數位收件匣若支援 VoiceOver、可調字級、簡明摘要、可信代理與多重提醒，可以改善這一類紙本摩擦。它仍須保留紙本、電話、臨櫃與人員協助，因為 App 也會製造新的門檻。

## 我做出的原型，和它還沒有做到的事

我先把公文接收站放在 MyData 資料保險箱下方，獨立成一個區塊。第一個畫面只回答兩個問題：目前有沒有正式啟用，以及本機保存了幾份文件。

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/natural-person-official-documents/official-document-inbox.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖：有備而來個人公文接收站入口">
    <img src="/images/reports/natural-person-official-documents/official-document-inbox.png" alt="有備而來個人公文接收站入口" width="1206" height="2622" loading="lazy" />
  </a>
  <figcaption><em>圖二。個人公文接收站已保存一份合成測試套件，畫面同時顯示「尚未啟用正式收文」。這個限制不能藏在說明頁。</em></figcaption>
</figure>

接著我做了四段可以分別失敗的流程。

1. **裝置信任**。iOS App Attest 要先證明請求來自真實 App 與真實裝置。第一次 UAT 回傳 `endpoint=unconfigured` 與 `configuration_missing`，而且 `identity_data_sent=false`、`signing_started=false`。這個失敗是對的：服務端還沒準備好時，App 應停止流程，避免把身分資料送到未知端點。
2. **本人簽署**。行動自然人憑證採跳轉簽章，回到有備而來後核對一次性請求、狀態與結果。實體卡片的開發路徑則由 Mac 讀卡機與開源 PKCS#11 driver 產生簽章；App 只建立不含身分資料的一次性請求。這條路徑適合相容性測試，手機無法憑空驅動接在 Mac 上的 USB 讀卡機。
3. **交換套件**。沙盒載入合成的 EN／DI／ESW 套件，驗證來源簽章、對指定裝置解密、保存密文與明文。所有欄位都刻意使用合成資料。
4. **收文確認**。開啟文件和送出確認是兩個事件。確認內容需綁定文件摘要、時間、收件地址和裝置證據，避免只留一個容易誤解的「已讀」。

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/natural-person-official-documents/official-document-sandbox.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖：有備而來電子公文測試控制與邊界">
    <img src="/images/reports/natural-person-official-documents/official-document-sandbox.png" alt="有備而來電子公文測試控制與邊界" width="1206" height="2622" loading="lazy" />
  </a>
  <figcaption><em>圖三。行動自然人憑證、實體自然人憑證、G2C sandbox 和合成套件各自獨立。畫面直接寫明 sandbox 地址不可路由、沒有法律效果；正式收文仍需檔案管理局 G2C 與機關送達規則。</em></figcaption>
</figure>

目前完成的是一條可重複的產品與密碼學測試路徑。尚未完成的包括正式 G2C 收件地址、主管機關測試憑證、真實機關來源簽章、正式 ESW 解密規格、收文確認回送、跨機關互通、送達時點、紙本 fallback、爭議處理、壓力測試和營運稽核。

一路做下來，我最在意的是每個狀態都要讓人看懂。App Attest 通過、自然人憑證簽章成功、來源簽章有效、文件解密完成、使用者開啟、收文確認送達交換中心、法定送達成立，至少是七件事。任何一件失敗，都應留下不同的錯誤碼、補救方式與責任單位。

## 透過數位皮夾收公文，優勢在哪裡

如果只把紙本 PDF 搬進另一個政府 App，誘因有限。數位皮夾的價值來自它已經握有身分、裝置金鑰、同意紀錄與個人資料保險箱，可以把一次送達變成完整的使用者旅程。

### 一個跟著人走的收件地址

戶籍地址跟著房屋，email 跟著平台，手機號碼也會更換。皮夾可以持有由政府簽發、可撤銷、可轉移的收件能力，換裝置時經過高強度復原。機關取得的是可送達位址或路由代碼，無須看到多餘的生活地址。

### 開啟之前先驗來源

釣魚郵件常把「政府通知」當誘餌。可信收件匣可以先驗機關憑證、交換節點與文件摘要，再顯示人類可讀的機關名稱、權責、案件類型和救濟期限。來源驗證結果應能點開核對，不能只放一個綠色勾勾。

### 敏感文件在指定端點解密

稅務、社福、醫療與司法文件可能包含高度敏感資料。以裝置金鑰加密、在本機資料保險箱解密，可以縮小伺服器明文暴露面。這仍需要備份、換機、合法調閱與金鑰遺失設計，不能把「端對端」當成一句免責標語。

### 收件、理解、行動接成一條路

收到補件通知後，皮夾可以呈現期限、救濟方式與最少必要欄位，再讓人選擇從 MyData 取回證明、簽章並回送。民眾不用先下載 PDF、另找自然人憑證元件、再猜應該上傳到哪個網站。

### 代理與無障礙可以成為正式能力

丹麥 Digital Post 已提供授權他人閱讀的機制。台灣可以把代理限定在特定案件、時間或操作，讓家人、社工、律師或信賴之人協助，同時保留完整稽核。VoiceOver、動態字級、朗讀順序、簡明語言、手語與多語版本也應進共同驗收，避免各機關重做一次。

### 公民手上有自己的證據

紙本掛號的關鍵證據多在郵務與機關端。皮夾可以保存經簽署的發送、到達、通知、開啟與確認回執，讓民眾在爭議發生時匯出一份可獨立驗證、又不洩漏其他公文的證據包。

## 國外怎麼做

國外成熟服務幾乎都把身分、郵件底層、前端與法律規則拆開。

| 地方 | 做法 | 台灣可以帶走的設計 |
| --- | --- | --- |
| [丹麥 Digital Post](https://lifeindenmark.borger.dk/apps-and-digital-services/Digital-Post) | 國家、地方與區域機關共用底層郵件；borger.dk、e-Boks、mit.dk 等前端讀取同一份公共郵件並同步狀態 | 共同底層可以容納多個前端；代理、豁免與協助必須跟著制度走 |
| [奧地利 Mein Postkorb](https://www.oesterreich.gv.at/de/hilfe/Die-elektronische-Zustellung-und-Mein-Postkorb) | 以 ID Austria 登入，驗證 email、明確同意後啟用；另有可證明送達與缺席規則 | 把啟用、通知、取件、回執和紙本改投寫成狀態機 |
| [芬蘭 Suomi.fi Messages](https://www.suomi.fi/instructions-and-support/messages/what-is-suomifi-messages) | 2026 年起，成年人使用強身分驗證登入公部門服務時啟用數位郵箱；可改回紙本，無強身分工具、未成年、受監護等群體仍走其他通道 | 數位優先要有容易理解的退出權、排除條件與多通道服務 |
| [歐盟 eDelivery](https://ec.europa.eu/digital-building-blocks/sites/spaces/DIGITAL/pages/467110114/eDelivery) | 以 AS4 access point 和四角模型連接不同組織，提供簽章、加密、簽署回執與相容性測試 | 公開交換規格與 conformance suite，避免所有機關綁同一套產品 |
| [EUDI Wallet](https://digital-strategy.ec.europa.eu/en/factpages/european-digital-identity-wallet) | 保存官方文件與憑證，支援選擇性揭露、使用者控制與安全認證 | 皮夾負責身分、文件與同意；送達網路仍需另建 |

[OECD 2024 年數位公共基礎設施報告](https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/12/digital-public-infrastructure-for-digital-governments_11fe17d9/ff525dc8-en.pdf)把 digital post、digital identity、notification 與 single digital gateway 列成可組合的公共元件。這個分類很適合台灣：一個元件故障或換廠商時，整個政府服務不必一起重做。

2026 年一篇比較丹麥、愛沙尼亞與德國的研究，將數位郵件的作用整理成數位化推進器、流程整合器與生態系催化者。這篇研究提醒我們，收件匣會從單一工具長成許多機關依賴的基礎設施，採用、擴張、正當性和持續創新都要治理。[Kuch et al., 2026](https://doi.org/10.1016/j.giq.2026.102110)

國際研究同時提醒另一面。針對德國身心障礙者的研究發現，數位政府服務的迴避同時涉及操作焦慮、可及性，也涉及人們是否覺得政府只想節省成本、忽視他們更深的處境。[Pethig、Kroenung 與 Noeltner, 2021](https://doi.org/10.1016/j.giq.2020.101545) 早期跨州實證也指出，政府自身的技術協助政策、目標清楚度與執行能力，和無障礙表現密切相關。[Rubaii-Barrett & Wise, 2008](https://doi.org/10.1177/1044207307311533)

因此，紙本退出選項、真人協助和共同無障礙標準不是妥協品。它們是數位服務取得正當性的核心功能。

## 如果政府委託 SI，可以怎麼做

我很怕看到這類採購只寫一句「建置自然人憑證登入、電子公文收件 App」。得標廠商很可能交出可登入、可顯示 PDF 的系統，跨機關規則一路留到驗收前才爆開。

我會把標案拆成五個可替換層次。

1. **G2C 地址與同意登錄**。管理啟用、停用、紙本切換、代理、換機與撤銷；對外只暴露最小路由資料。
2. **交換 access point**。遵循公開封裝、簽章、加密、錯誤與回執規格；提供機關端 SDK 和 conformance suite。
3. **送達規則引擎**。按文件類型決定可否電子送達、成立時點、通知次數、逾時改投紙本與期限計算。規則版本必須可稽核。
4. **民眾端皮夾與 SDK**。支援政府 App、合格民間皮夾與 web 備援；用同一組相容性、安全和無障礙測試驗收。
5. **證據、監控與救濟**。保存簽署事件、狀態轉換與系統時間來源；民眾和機關都能匯出單案證據，並有 24 小時事件通報與人工客服。

契約也要先決定資料與退出權。API、資料模型、測試套件、錯誤碼和介面文字應由政府持有並公開；核心程式至少允許第三方安全稽核，適合的共同元件可採開源。金鑰、日誌與個資不得被廠商拿來做其他用途。更換廠商時，要能帶著地址、同意、歷史回執和未結案件平滑遷移。

驗收應分四期，每一期都能獨立停下來修正。

| 階段 | 範圍 | 進入下一期的門檻 |
| --- | --- | --- |
| 0. 法規與旅程盤點 | 文件分級、送達規則、障礙者與非數位使用者共同設計 | 公開規則矩陣、資料影響評估、威脅模型、可及性研究 |
| 1. 無法律效果沙盒 | 合成 EN／DI／ESW、測試憑證、錯誤注入、第三方 App | 跨兩家獨立實作互通；簽章、加密、回執、重送與撤銷全數通過 |
| 2. 自願試辦 | 少量低風險通知，使用者可隨時改回紙本 | 完成率、錯投率、輔助科技、客服、紙本 fallback 與災難復原達標 |
| 3. 可證明送達 | 僅納入已有明確法律依據的文件 | 每種文件通過法遵、資安、個資、無障礙與爭議演練 |
| 4. 跨機關擴張 | 增加機關、皮夾供應者與代理情境 | 公開 KPI、事件報告、版本相容政策與年度獨立稽核 |

最容易被低估的困難也很具體。

- 機關既有文書系統年份、廠牌和格式不同，還有密件與大型附件。
- 憑證有效不代表本人仍有行為能力或代理關係仍有效。
- push、email、簡訊都只是提醒，不能直接當送達證據。
- iOS、Android、web、讀卡機與行動自然人憑證各有不同失敗模式。
- 系統時間、簽章演算法與憑證撤銷資料需要多年後仍可驗證。
- 一次大規模通知可能造成尖峰流量，災害時又最需要可靠。
- 服務故障會直接影響申訴、繳費、補件和訴訟期限，SLA 必須連到實際補救。
- 紙本與數位雙軌期間會增加一段時間的成本，預算不能只算 App 開發。

## 我希望政府現在就做的七件事

1. 公開 G2C 目標架構、法規盤點、里程碑與 117 年上線的完成定義。
2. 提前提供無法律效果的公開沙盒、合成公文、測試憑證與 conformance suite。
3. 公開民眾端地址、文件封裝、錯誤碼、回執和代理授權格式，允許多個合格皮夾實作。
4. 先選自願、低風險、能隨時改投紙本的案件試辦，避免一開始拿權利期限做壓力測試。
5. 由身心障礙者、高齡者、偏鄉、移工、新住民、受監護者和協助者共同設計，將可及性列為付款門檻。
6. 建立民眾可讀、可下載、可獨立驗證的送達證據包，以及清楚的申訴與期限回復流程。
7. 把開放標準、資料可攜、密碼敏捷、第三方稽核和換廠商演練寫進採購契約。

青年諮詢提案問的是「能不能讓民眾用自然人憑證收電子公文」。我的原型給了一個很有限、也很有用的回答：手機上的流程做得出來，開源 driver 也能讓實體卡片參與測試；每一段都可以被拆開、驗證、失敗和修復。

接下來的工作屬於公共制度。政府要把地址、交換、送達、證據與救濟接起來，還要讓不使用智慧型手機的人保有同等權利。數位皮夾的意義，正在於把公民放回這條證據鏈裡：我知道誰送來、內容有沒有被改、期限從何時開始、我做過什麼，以及系統出錯時能拿什麼去主張自己的權利。

如果 117 年的服務能做到這些，它會比「少寄一封掛號」多走很遠。

## 參考資料

1. 行政院青年諮詢委員會，[「建置一般民眾以自然人憑證收取電子公文之平臺」](https://advisory.yda.gov.tw/proposals-detail/316)。
2. 國家發展委員會檔案管理局，[「文書及檔案管理電腦化作業規範」](https://www.archives.gov.tw/tw/arctw/156-1795.html)。
3. 國家發展委員會檔案管理局，[「機關公文電子交換作業辦法」](https://www.archives.gov.tw/tw/arctw/155-1741.html)。
4. 立法院，[「智慧政府數位領航發展計畫（115 至 119 年）」](https://ppg.ly.gov.tw/ppg/download/agenda1/02/agendaAnnex/11/05/14/110514991.pdf)。
5. 國家發展委員會檔案管理局，[「115 年度施政計畫」](https://www.archives.gov.tw/wSite/public/Attachment/008/f1756450402384.pdf)。
6. 數位發展部主管法規，[「電子簽章法」](https://law.moda.gov.tw/LawContent.aspx?id=FL011349&media=print)。
7. 法務部全國法規資料庫，[「行政程序法第 68 條」](https://mojlaw.moj.gov.tw/LawContentExtent.aspx?LawNo=68&lsid=FL000632)。
8. 經濟部智慧財產局，[「要如何才能收受電子公文？」](https://www.tipo.gov.tw/tw/tipo1/241-1877.html)。
9. 司法院，[「線上起訴」](https://www.judicial.gov.tw/tw/cp-248-58073-78798-1.html)與[「身心障礙者近用司法指引」](https://www.judicial.gov.tw/tw/cp-1429-1179729-afca9-1.html)。
10. OECD (2024), [*Digital public infrastructure for digital governments*](https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/12/digital-public-infrastructure-for-digital-governments_11fe17d9/ff525dc8-en.pdf).
11. World Bank ID4D, [*Principles on Identification for Sustainable Development*](https://id4d.worldbank.org/guide/1-principles), [*Interoperability*](https://id4d.worldbank.org/guide/interoperability), [*Privacy and Security*](https://id4d.worldbank.org/guide/privacy-security).
12. Denmark, [*Digital Post*](https://lifeindenmark.borger.dk/apps-and-digital-services/Digital-Post).
13. Austria, [*Die elektronische Zustellung und Mein Postkorb*](https://www.oesterreich.gv.at/de/hilfe/Die-elektronische-Zustellung-und-Mein-Postkorb).
14. Finland, [*Suomi.fi Messages*](https://www.suomi.fi/instructions-and-support/messages/what-is-suomifi-messages).
15. European Commission, [*eDelivery*](https://ec.europa.eu/digital-building-blocks/sites/spaces/DIGITAL/pages/467110114/eDelivery) and [*European Digital Identity Wallet*](https://digital-strategy.ec.europa.eu/en/factpages/european-digital-identity-wallet).
16. Kuch, F. et al. (2026), [“The role of digital post systems in transforming public administration: A digital infrastructure perspective.”](https://doi.org/10.1016/j.giq.2026.102110) *Government Information Quarterly*, 43(1), 102110.
17. Pethig, F., Kroenung, J., and Noeltner, M. (2021), [“A stigma power perspective on digital government service avoidance.”](https://doi.org/10.1016/j.giq.2020.101545) *Government Information Quarterly*, 38(2), 101545.
18. Rubaii-Barrett, N., and Wise, L. R. (2008), [“Disability Access and E-Government: An Empirical Analysis of State Practices.”](https://doi.org/10.1177/1044207307311533) *Journal of Disability Policy Studies*, 19(1).
