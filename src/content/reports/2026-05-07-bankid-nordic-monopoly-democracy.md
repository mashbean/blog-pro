---
title: "北歐商業身分基礎設施的代價：當登入民主政府需要商業銀行的同意"
description: "北歐五國 BankID/MitID 是四種治理形態並存的商業身分基礎設施，覆蓋率 92-99.9% 掩蓋 60-95 萬人系統性排除。五國央行 2022 年起發出「viktigt komplement」警示；本文以「單一壟斷者 + 無救濟程序 → infrastructural tyranny」結構批判，評估技術 < 治理 << 社會結構三層輸出難度梯度。"
pubDate: 2026-05-07
draft: false
tags: [civic-proof, digital-identity, bankid, nordic, infrastructural-rights, central-banks]
lang: zh-TW
aiModel: claude-opus-4-7
aiPipelineStage: published
aiPipelineId: 2026-05-07-bankid-nordic-monopoly-democracy
humanReviewed: false
category: digital-identity-policy
series: civic-proof
seriesOrder: 9
slug: 2026-05-07-bankid-nordic-monopoly-democracy
---

# 北歐商業身分基礎設施的代價：當登入民主政府需要商業銀行的同意

## 一、導論

過去二十年，瑞典 BankID、挪威 BankID、丹麥 MitID、芬蘭 Mobiilivarmenne 與冰島 Auðkenni 被英語政策圈統稱為「北歐 BankID 模式」，並在世界銀行 ID4D、ITU FIGI、麥肯錫《Digital Identification: A Key to Inclusive Growth》等國際報告中被反覆引用為「銀行業主導的數位公民身分」成功範例<sup>1</sup>。這個外部標籤掩蓋了三項結構性事實。

第一，五國的法律地位差異到不應共用單一標籤的程度。瑞典 BankID 與挪威 BankID 是純私法產品，丹麥 MitID 自 2022 年 9 月 22 日起為公私合營合資，芬蘭 Mobiilivarmenne 是電信營運商產品，冰島 Auðkenni 因股權結構顯示政府實質控制<sup>2,3,4,5</sup>。第二，覆蓋率（介於 92% 與 99.9% 之間）並未消除排除。北歐五國在 2022–2025 年間有約 60–95 萬人實際無法獨立完成日常政府數位互動（中位估計，不確定區間 ±25%），其中瑞典單一國別的中位估計落於 18–28 萬，丹麥 MitID 過渡期估計則為 18–22 萬，由 Digst 公布系統面數據反推估計<sup>6,7</sup>。第三，五國央行自 2022 年起陸續發出「商業身分基礎設施對國家韌性構成系統性風險」的警示，但警示並非同步同調；瑞典 Riksbank 的「viktigt komplement」（重要補充）框架已從技術備註演進到備災功能，丹麥已在 2022 年部分回應，芬蘭與冰島仍處於警示醞釀階段<sup>8,9</sup>。

本文以「商業身分基礎設施」（commercial identity infrastructure，以下簡稱 CII）取代「BankID 模式」這個外部標籤，並以五個獨立的子論證構成全篇骨架：(1) 五國 CII 的市場結構分類；(2) 排除人口的規模、機制與五個具體案例；(3) Riksbank「viktigt komplement」框架四階段演進與央行警示的分布差異；(4) 把「商業壟斷批判」改寫為「單一壟斷者 + 無救濟程序 → infrastructural tyranny」結構批判；(5) 條件性可移植，分為技術、治理、社會結構三層輸出難度梯度，配以南非 NABID、巴西 Itaú-Serasa、中東歐 eIDAS 1.0 三個失敗輸出案例。最後以治理框架含意收尾。

本文的核心結論是條件性而非普遍性的：北歐 CII 是六項歷史前提（銀行帳戶普及率 ≥ 95%、央行獨立性、福利國家底層、社會信任、勞工保護、規模均質性）下的條件性均衡，可學的是「央行警示 + 政府 e-ID 為基準權利 + 非銀行 fallback + 救濟程序設計」這個治理框架；BankID 本身不在可學範圍內。治理框架本身的有效性也受央行獨立性、政府能力、財政能力限制，並非免費的全球範本。

## 二、五國 CII 的市場結構：四種治理形態

「BankID 模式」是英語世界的便利稱呼。Riksbank 2024《Payments Report》、Norges Bank 2024《Financial Infrastructure》、Digitaliseringsstyrelsen 2024 統計、Traficom Määräys 72 B/2022、Auðkenni 股權揭露顯示，五國的法律地位差異到不應共用單一標籤的程度<sup>2,3,4,5,10</sup>。本節依「發行主體性質、強制性、可替代性、申訴管道」四個變項，把五國分為四種治理形態。

### 2.1 純私法產品（瑞典 BankID、挪威 BankID）

瑞典 BankID 由 Finansiell ID-Teknik BID AB 發行，七家銀行（SEB、Swedbank、Handelsbanken、Nordea、Danske Bank、Länsförsäkringar、Sparbanken／Skandiabanken／Ikano Bank）100% 持有<sup>2,11</sup>。法律上沒有強制使用 BankID 的法源，但實質強制；政府服務、銀行帳戶、Swish、藥局處方領取、保險、租屋登記等幾乎全部以 BankID 為唯一登入管道<sup>2</sup>。覆蓋率 99.9%（18–67 歲成人），2024 年用戶 8.6 百萬<sup>2</sup>。Konkurrensverket（瑞典競爭管理局）在 2023–2024 反覆指出「在私部門無義務接受 BankID 替代品的條件下，新進業者難以建立業務」，並於 2024 年 9 月 18 日對 Vipps MobilePay 投訴 BankID「對每次登入與付款強制使用其識別服務」啟動反濫用市場支配地位調查<sup>12</sup>。

挪威 BankID 在 2022 年從 Vipps 集團 demerge 後，由 Stø AS / BankID BankAxept AS 持有，銀行聯盟（DNB、SpareBank 1 Betaling、Eika VBB、Balder Betaling 等）擁有股權<sup>3,13</sup>。挪威透過 ID-porten 接受 BankID + Buypass + Commfides + MinID 多選，形式多元，但實質 BankID 主導 90% 以上<sup>3</sup>。2024 年覆蓋率約 97%、用戶 4.5–4.6 百萬、年登入／簽章約 10 億次<sup>3</sup>。

### 2.2 公私合營合資（丹麥 MitID）

丹麥 MitID 自 2022 年 9 月 22 日起，由 Digitaliseringsstyrelsen（丹麥數位化署）與 Finans Danmark 合組的「MitID-partnerskabet」單一持有，運營由 Nets DanID A/S 透過 9.39 億丹麥克朗、10 年合約承包<sup>4,14</sup>。法律強制；公部門服務（borger.dk、skat.dk、sundhed.dk）自 2022 年 9 月 22 日起必須使用 MitID<sup>4</sup>。覆蓋率 96.6%（15+ 歲）、5.5 百萬用戶、月交易 89 百萬筆<sup>4</sup>。MitID 的關鍵設計變更是把「身分驗證」與「銀行帳戶」解耦，這構成與瑞典 BankID 的根本差異；Digitaliseringsstyrelsen 可發放 MitID 給沒有丹麥銀行帳戶的人（含難民、外籍勞工等）<sup>4,15</sup>。但 IMF FSAP Denmark 2023、Danmarks Nationalbank 2023 與 2024《Financial Stability Report》仍指出 MitID 的三個未解問題：商業壟斷（Nets 仍是單一運營商）、故障 fallback（單點失效仍存在）、制裁名單漏洞<sup>16,17,18</sup>。

### 2.3 電信營運商主導（芬蘭 Mobiilivarmenne + Bank IDs）

芬蘭採「銀行 BankID（10 家銀行）+ 電信 Mobiilivarmenne（Telia / Elisa / DNA 三家）」並列結構，由 Traficom（芬蘭交通與通訊管理局）主管的 Luottamusverkosto（信任網路）統一監管<sup>10,19</sup>。Traficom Määräys 72 B/2022 強制 broker 互通與費率上限，這構成芬蘭與瑞典挪威的關鍵差異。費率上限解決了 TUPAS 時代每家銀行單獨議價的問題，市場結構較開放，但 Mobiilivarmenne + 銀行 BankID 仍是寡頭<sup>10</sup>。整體覆蓋率約 92%、年登入 1 億次<sup>20</sup>。

### 2.4 國家實質控制（冰島 Auðkenni）

冰島 Auðkenni 在 2000 年由銀行 + 電信合組創立，2020 年代後股權結構顯示政府實質控制；國家透過 Landsbankinn（100% 國有）、Íslandsbanki（65% 國有）、Arion（13% 國有）的銀行端股權<sup>5,21</sup>。形式上仍為商業實體，但實質為國家控制，這是五種治理形態中最接近 Estonia e-ID（政府主導）的一種，但仍以銀行為發行通路。覆蓋率 97% eligible，75 歲以上人口從 2014 年 40% 攀升到 2022 年 97%<sup>5</sup>。

### 2.5 為何不能共用單一標籤

把五者統稱「BankID 模式」會掩蓋四項治理結構差異：(a) 法律地位（純私法 / 公私合營 / 政府實質控制）；(b) 強制性（法律強制 / 實質強制 / 形式多元）；(c) 監管路徑（Konkurrensverket 反壟斷 / Digitaliseringsstyrelsen 直接擁有 / Traficom 互通與費率上限 / 政府股權間接掌握）；(d) 申訴管道（瑞挪走商業契約途徑 / 丹麥可走行政救濟 / 芬蘭走 Traficom 監管途徑 / 冰島透過 Fjármálaeftirlitið）。下游論證若以「BankID 模式」為單一單位，會錯估這些差異對排除規模、央行警示強度、可移植性的影響。

### 2.6 變項拆分：覆蓋率、強制性、排除三者獨立

第二個必須點明的結構性事實是：「覆蓋率」、「強制性」、「排除」是三個獨立變項，不能滑混。Sahlgrenska Academy 2018–2022 縱貫研究顯示瑞典 75 歲以上 BankID 獨立使用率從 38% 上升到 41%（4 年僅 3 個百分點），85 歲以上組停滯在 18–22%<sup>22</sup>。挪威 Digdir 2020–2023 數位排除人口估計從 8.5% 降到 7.9%（4 年 0.6 個百分點）<sup>23</sup>。同期間「銀行單方解約並導致 BankID 失效」的年度新增量穩定在 2.5–3.0 萬／年<sup>24</sup>。新排除以接近速率產生，平衡狀態維持。「覆蓋率高 → 排除小」的推論在縱貫資料上被反證；排除規模由「覆蓋率 × 強制性 × 替代品有效性」三個變項共同決定，是動態流量而非存量。

## 三、排除人口：規模、機制與案例

### 3.1 規模估計：60–95 萬人區間

依五個排除維度（移工／第三國國民、難民／庇護申請者、信用紀錄爭議／被銀行終止、失能與認知障礙、無智慧手機／低識讀／無家者），加上補充維度六（金融制裁／反洗錢警示名單），北歐五國因 CII 模式被實質排除於民主數位基礎設施者，2023 年中位估計落於 60–95 萬人區間，不確定區間 ±25%<sup>6</sup>。其中瑞典單一國別中位估計 18–28 萬人（含失能 UX 障礙），完全無 BankID 約 8–12 萬<sup>7,25</sup>。丹麥 MitID 過渡期（2021–2023）排除規模可由 Digitaliseringsstyrelsen 公布之系統面數據（如第三方授權使用率、Borgerservice 臨櫃量）反推之中位估計約 18–22 萬人，下界由系統面流量反推，上界由人口子群比例推估，並非 Digst 公布之排除人口普查值<sup>26</sup>。挪威 Digdir 2023《Digital inkludering》年度報告統計，nav.no *服務障礙類投訴*中與 BankID/buypass 等高保證 e-ID 直接相關者占 11%；分母為服務障礙類投訴而非全部投訴，分母總件數待 Digdir 補揭<sup>23</sup>。

這個區間估計的最大不確定性，來自瑞典 Migrationsverket 與 Skatteverket 並未公開「無 BankID 的合法居留人口」橫斷面估計。Riksrevisionen 2023《Statens digitala identitet — risker när infrastrukturen ägs av bankerna》（RiR 2023:14）審計建議由 SCB（Statistics Sweden）執行普查，但該建議至 2025 年仍未被執行<sup>7</sup>。本文採「合法暫居人口（uppehållstillstånd ≤ 24 個月者）× 銀行開戶拒絕率（FI 2023 銀行客訴統計約 32–41%）」作為中位估計，並承認部分受影響者不再嘗試會使分母被低估。

### 3.2 因果鏈四環

排除是 CII 商業基礎設施結構的功能性結果，並非其副產品。因果鏈分四環。

**第一環：銀行 KYC 結論等同公民身分結論**。瑞典 BankID 的發行門檻是「銀行客戶關係」<sup>27</sup>。挪威 BankID 由 BankID BankAxept AS 與 Vipps 共同營運；丹麥 MitID 雖在 2022 年解耦，但上游仍仰賴 NemKonto 銀行帳戶關係<sup>4,28</sup>。CII 把銀行 PEP（政治曝險人物）、AML（反洗錢）、信用評分結論轉化為公民身分能力的必要條件。這在制度設計上就把「金融排斥」直接轉碼為「公民排斥」。

**第二環：政府服務的單一強制鎖定**。Sahlfeld 2022《The Quiet Privatisation of Swedish Civic Infrastructure》統計指出，瑞典中央政府網站中 86% 以上的線上身分驗證入口僅接受 BankID；類似比例見於 borger.dk（DK）、altinn.no（NO）、suomi.fi（FI）、island.is（IS）<sup>25</sup>。Riksrevisionen 2023 直接點名這構成「對單一商業基礎設施的系統性依賴」<sup>7</sup>。Justitieombudsmannen（瑞典國會監察使）2023 *beslut 6235-2022* 認定 Skatteverket 拒絕替代驗證違反《Förvaltningslagen》（行政程序法）第 9 條與第 21 條<sup>29</sup>。

**第三環：替代管道的擠出（fallback erosion）**。理論上各國都聲稱保留紙本／臨櫃 fallback。實證上：瑞典 Skatteverket 自 2018 年起逐年減少地方辦事處；丹麥 Borgerservice 2021–2022 過渡期排隊周期延長至 3–5 週；挪威 NAV 紙本案件處理 9–14 週；芬蘭 Kela 2023《Digisyrjäytyminen ja sosiaaliturva》報告指 10% 以上申辦者因紙本耗時而放棄申請應得福利<sup>30</sup>。Stockholms Stadsmission 2024《Hemlöshet och digital uteslutning》報告指出，社工協助無 BankID 的無家者完成單一案件，平均耗時 11 倍於有 BankID 案件<sup>31</sup>。

**第四環：權利訴訟與救濟管道斷裂**。被 CII 排除者要爭取救濟，本身又需要 BankID 登入司法電子系統。瑞典 Domstolsverket 2022 起多項訴訟程序預設 BankID 登入；丹麥 minretssag.dk 同樣<sup>25,4</sup>。Diskrimineringsombudsmannen（DO，瑞典平等機構）2022 年報告坦承收到的 BankID 相關投訴中有相當比例「無法以原本管道遞交」<sup>32</sup>。形成自我封閉循環：被排除者連申訴排除這件事都需要 BankID。

四環結合，使 CII 成為民主基礎設施的事實閘門（de facto gate of civic infrastructure），「便利工具」只是其表象。當閘門由商業實體掌握開關權，金融排斥就同時是公民排斥。

### 3.3 五個具體案例

下列五個案例由各國 NGO、人權機構、央行報告與獨立學術研究記錄；除「Anwar」由 Dagens Nyheter 2022 系列調查記錄，其餘均以匿名或合成方式呈現於原始報告，本文延用其匿名標籤<sup>33,34,35,36,37</sup>。

**Anwar（瑞典斯德哥爾摩）**：敘利亞籍 IT 工程師，2022 年依 EU Blue Card 來瑞典 KTH 周邊科技公司就職，持兩年 uppehållstillstånd。SEB 與 Swedbank 都以「合約期不足三年、KYC 風險」拒絕開戶；Handelsbanken 在第六次嘗試後同意開戶但拒絕核發 BankID（理由是「需 personnummer 並完整居住歷史」）。結果是 Anwar 必須委託主管代為登入 Skatteverket 申報、無法線上核驗 CSN 課程津貼資格、無法使用 1177.se 取得自己的健康紀錄<sup>33</sup>。

**Fatima（挪威奧斯陸）**：索馬利亞庇護申請者，2022 年抵挪威，持 D-nummer 但無 BankID。當她需要登入 nav.no 申請過渡性社會福利時，nav.no 介面僅接受 BankID／Buypass／Commfides 三種高保證 e-ID。NAV 雖有 manuell saksbehandling（紙本管道），但承辦時間平均 9–14 週；同期租屋押金與生活急用救助延宕<sup>34</sup>。

**Per L.（丹麥哥本哈根）**：自雇技工，2021 年因事業破產進入 RKI（信用紀錄登錄），Danske Bank 2022 年單方解除帳戶關係。MitID 於 2022 年取代 NemID，Per 在過渡期未及完成新註冊；Danske 解約後新銀行（Arbejdernes Landsbank、Lunar、Nordea）以信用紀錄為由全部拒絕，導致 MitID 無法重新激活，無法登入 borger.dk、無法簽收 e-Boks 中的法院文書<sup>35</sup>。Finanstilsynet 2023 後續調查確認此類個案在 2022 年達 8 千–1.2 萬件<sup>36</sup>。

**Yelena V.（瑞典）**：俄羅斯國籍永久居留者，2008 年取得瑞典永久居留與 personnummer，持有 BankID 多年。2022 年俄烏戰爭後 SEB 在強化 AML 與制裁名單比對中觸發警示（家族親戚名字部分相符），Yelena 收到 SEB 與 Swedbank 連續解約通知。BankID 隨銀行帳戶失效。她被排除於 Skatteverket、CSN、Försäkringskassan 線上服務，必須改用紙本與臨櫃，並等待平均 6–10 週處理。Diskrimineringsombudsmannen 2022 接獲此類投訴 142 件<sup>32,37</sup>。

**Else B.（丹麥日德蘭半島）**：82 歲獨居女性。在 NemID 時期靠紙本碼卡（papkort）獨立操作銀行與 borger.dk。MitID 2022 年強制過渡時要求生物辨識或 chip-kort，且預設 app 流程；Else 視力衰退、無智慧手機；地方 Borgerservice 排隊 3–4 週才能臨櫃辦理；過渡期間無法簽收 e-Boks 的醫療通知，延誤白內障手術預約。Det Centrale Handicapråd 2022 與 Danish Institute for Human Rights 2023 報告以此類個案論證 MitID 違反《歐盟身障權利公約》第 9 條 accessibility 要求<sup>38,39</sup>。Ældre Sagen 2022 估同年類似 80 歲以上案例至少 4–6 萬<sup>40</sup>。

### 3.4 跨層級警示

第一層警示在個人層級：BankID 失效導致無法登入 1177.se（健康紀錄）、Skatteverket（稅務與身分證明）、CSN（學貸與津貼）、Försäkringskassan（社會保險）、Domstolsverket（司法）。一個介面失效，全部斷線。第二層在家庭與照護網絡層級。Karolinska Institutet 2023 與 Funktionsrätt Sverige 2023 都指出 BankID UX 障礙使失能與高齡者高度依賴家屬或照護者代為登入，等於把個人健康／財務／法律隱私交給代理人；Det Centrale Handicapråd 2022 收到 BankID 委任濫用案例 220 餘件<sup>41,42,38</sup>。第三層在機構層級：Riksrevisionen 2023 與 Norges Bank 2023 都把 BankID／MitID 集中度列為系統性 operational risk<sup>7,9</sup>。第四層在民主制度層級：當登入投票（瑞典 e-tjänster、芬蘭 vaalit.fi）、登入線上聯署、登入工會選舉都需要 BankID，被排除者就同步失去政治參與管道。Larsson 2021 將此描述為「信任的官僚化」（bureaucratisation of trust），把人對政府的信任轉化為對銀行的依賴<sup>43</sup>。

### 3.5 反例與反論逐條處理

**反論一**：「排除人口可透過免費政府 e-ID 解決」。Freja eID+ 雖名義上獨立，但 Loa 3 等級（高保證）發行仍需要 BankID 或實體臨櫃驗證；Skouby & Falch 2020 指出實際使用率不到 BankID 的 5%<sup>44</sup>。Skatteverket id-kort 需 personnummer，對暫居者無效。丹麥 MitID 的「borgerservice 路徑」確實存在，但 Digitaliseringsstyrelsen 2023 自身統計顯示 MitID 主要核發仍由銀行通路占 87% 以上<sup>26</sup>。「免費 fallback 存在」為真，「免費 fallback 對被排除者有效」為假。

**反論二**：「排除是過渡現象，數位包容會自然發生」。已於 § 2.6 的縱貫資料反證。Caritas Denmark 2023 直接指出 MitID 過渡期帶來的新排除超過 NemID 時期的累積殘餘<sup>45</sup>。

**反論三**：「商業 BankID 的覆蓋率比政府方案更高」。覆蓋率比較需要分母明確。BankID 8.5 百萬／瑞典適齡人口約 95–98%，但這個分母把「能在銀行開戶的成年人」當預設；以「總成年居住人口」為分母，覆蓋率會跌至 88–92%。Sahlfeld 2022 與 Riksrevisionen 2023 都採後者口徑<sup>25,7</sup>。覆蓋率與分配正義是兩個不同問題；高覆蓋若伴隨對剩餘 5–10% 的系統性集中排除（最弱勢者），其分配後果比低覆蓋但均勻分布更嚴重。

## 四、央行警示：Riksbank「viktigt komplement」框架四階段演進

### 4.1 五國央行警示分布

北歐五國央行對 CII 的警示並非同步同調。整理 Riksbank、Norges Bank、Suomen Pankki、Danmarks Nationalbank、Seðlabanki Íslands 在 2020–2024 年的官方文件、行長演說與工作論文，警示強度可分五段（1 = 無警示／提及；2 = 風險識別但無建議；3 = 風險識別 + 一般建議；4 = 明確警示 + 具體政策建議；5 = 行長層級公開警示 + 立法落地或推進中）。

下表 1–5 等級為本文整合呈現之相對警示強度，無原始央行公布之等級分數；每央行的等級指派依其對應年度《Payments Report》／《Financial Stability Report》／行長演說所披露的政策強度進行排序。

| 央行 | 2020 | 2022 | 2024 | 主要框架 |
|---|---|---|---|---|
| Sveriges Riksbank | 1 | 4 | 5 | viktigt komplement → beredskapsfunktion |
| Norges Bank | 2 | 3 | 4 | konsentrasjonsrisiko + digital sårbarhet |
| Suomen Pankki | 1 | 2 | 4 | viranomaisten oma tunnistuspalvelu |
| Danmarks Nationalbank | 2 | 4 | 4 | systemisk afhængighed af enkeltleverandører（強警示但因果鏈最強體現於 MitID 2022 改革） |
| Seðlabanki Íslands | 1 | 1 | 2 | 對 Auðkenni 與 RB 的市場結構評估，論述能見度低 |

來源：Riksbank 2022/2023/2024《Payments Report》與 Erik Thedéen 2023–2024 演說<sup>8,46,47,48</sup>；Norges Bank 2023/2024《Financial Infrastructure》與《Annual Report on Payment Systems》<sup>9,49,50</sup>；Suomen Pankki《Payment Statistics Finland 2023》與《Bank of Finland Bulletin 2024》<sup>51,52</sup>；Danmarks Nationalbank 2023/2024《Financial Stability Report》<sup>17,18</sup>；Seðlabanki Íslands 2023/2024《Fjármálastöðugleiki》<sup>53</sup>。

### 4.2 Riksbank 框架的四階段演進

以下四階段框架為本文整合呈現；Riksbank 自身在 *Payments Report* 系列中以三步演進敘述（2022 引入補充框架、2023 加入危機脈絡、2024 寫入備災原則），第四階段（備災功能）為本文據 2024 年 Sverige-id 國家計畫補入；2020–2021 的「技術備註階段」亦由本文據該時期未作風險評估的事實另行命名。

**2020–2021 年（技術備註階段）**：Riksbank 對 BankID 的提及主要在 retail payment statistics 表格與註腳，將其列為「third-party identification provider」，未作風險評估。同期關注焦點是 e-krona 概念設計（Phase 1 / Phase 2 pilot），BankID 被視為 e-krona 必須整合或繞開的既有 stack，不是被批評對象。

**2022 年（補充框架成形）**：2022 年《Payments Report》是分水嶺。具體文本（從原文翻譯整理）：「Den svenska betalningsmarknaden är i hög grad privatiserad. Det är viktigt att staten har en grundläggande infrastruktur som komplement.」（瑞典支付市場高度私有化，國家必須擁有作為補充的基礎設施。）「En statlig e-legitimation kan utgöra ett viktigt komplement till de privata lösningar som finns idag.」（政府 e-legitimation 可作為現有私人解決方案的重要補充）<sup>8</sup>。「viktigt komplement」（重要補充）此後成為 Riksbank 反覆使用的政策框架，其政治意涵有三：(a) 不主張替代，央行避免被解讀為要消滅 BankID；(b) 主張並存，承認商業壟斷在短期內具政治經濟結構性鎖定，必須有國家備援；(c) 責任轉移，國家有最終責任確保支付與身分基礎設施可用，不能完全外包給商業實體。

**2023 年（危機框架引入）**：俄烏戰爭後北歐安全環境改變。2023《Payments Report》加入「betalningar i kris och krig」（危機與戰爭時的支付）章節，把支付與身分基礎設施納入瑞典 totalförsvar（總體防衛）規劃<sup>46</sup>。行長 Erik Thedéen 在 2023 年 Swedish House of Finance / SIFR 秋季會議演說《"En ny tid för betalningar—motståndskraft, konkurrens och statens roll"》中明確指出：「kommersiella aktörer kan inte ensamma ansvara för betalningsinfrastrukturens motståndskraft」（商業參與者不能單獨負責支付基礎設施的韌性）<sup>47</sup>。副行長 Anna Breman 在 2023 年公開提及：「BankID-utfall är ett hot mot finansiell stabilitet」（BankID 故障是金融穩定的威脅）<sup>54</sup>。

**2024 年（備災功能框架）**：2024《Payments Report》與行長春季演說《"Statens roll i betalningar och digital identitet"》引入「statlig betalningsinfrastruktur som beredskapsfunktion」（政府支付基礎設施作為備災功能）框架，並把 e-krona 設計考量寫入「offline + identity-light」原則，回應 BankID 對銀行帳戶的依賴<sup>48,55</sup>。Riksbank 同步以正式 remissvar 表態支持 SOU 2023:61《Statens digitala identitet》提案的「政府 e-ID 作為 BankID 補充」方向<sup>56</sup>。瑞典政府 2024 年 9 月公告 Sverige-id 國家 e-ID 計畫，預定 2026 年 12 月 1 日上線<sup>57</sup>。

### 4.3 從警示到政策：丹麥 MitID 2022 改革的因果鏈

丹麥 MitID 2022 改革是央行警示「政策落地」的最強案例，但需先點出：央行警示僅是促成因素之一；技術倒逼（OCES II 證書 2022 到期）與 IMF FSAP 2020 對單一供應商風險的明確指摘，是另兩個主要動因，三者共同推動 MitID 上線。NemID（2010–2022）由 DanID（Nets 旗下）部署，關鍵問題有三：單一供應商（Nets 同時是 NemID 與 Dankort 處理者）、OCES II 證書 2022 年到期、技術老化（Java applet + 紙本卡片）<sup>58</sup>。Digitaliseringsstyrelsen 自 2017 年起規劃替代方案；Danmarks Nationalbank 自 2019 年起在《Financial Stability Report》中提及 NemID 操作風險；2020 年 IMF FSAP 明確指出丹麥支付與身分基礎設施單一供應商風險；2020 年 Nets 被 Mastercard 部分收購（Corporate Services Business 24 億歐元交易）把問題推到外資控制層級<sup>16</sup>。

MitID 於 2021 年 6 月分階段上線，2022 年 6 月 30 日 NemID 退役。設計變更的核心是把「身分驗證」與「銀行帳戶」解耦，這構成與瑞典 BankID 的根本差異。MitID 由 Digitaliseringsstyrelsen 所有，Nets 是運營商但不是所有者；新的「broker」架構讓未來可以更換運營商<sup>4</sup>。

但因果鏈評估必須誠實。MitID 解決了「沒有銀行帳戶就無法登入政府服務」的最嚴重排除問題，但沒有解決三件事：(a) 商業壟斷（Nets 仍是單一運營商）；(b) 故障 fallback（單點失效仍存在，當 Nets 系統故障 MitID 整體不可用）；(c) 制裁名單漏洞（MitID 不檢查制裁名單，與 NemID 相同）<sup>17,18</sup>。MitID 上線初期（2021–2022）發生多起認證問題，老人與低數位能力族群困難加劇，某種程度上短期加劇了排除，雖然長期改善<sup>40</sup>。

至於 Riksbank 為何沒同樣推動結構改革，三個結構差異提供解釋：瑞典銀行體系比丹麥更分散（多家銀行、多家 BankID 簽發者），結構改革成本更高；BankID 滲透率（97% 以上）比 NemID 更高，使用者鎖定效應更強；瑞典政府 e-ID（Freja eID+ 等）發展時間較晚<sup>2</sup>。

### 4.4 央行警示的政治經濟學：央行不是中立技術評估者

下游論證必須避免兩個推論失誤。第一，「央行說了」不等於「事實」。央行論述的可信度來自實證能力（央行擁有支付數據、銀行報告、操作風險統計）、獨立性（在制度設計上獨立於政府日常政治）、法定責任（對金融穩定有法定職責），但這三點都不保證警示的「正確性」，只保證警示的「重要性」。對策是對每個央行論點都要找至少一個獨立證據（學術研究、技術審計、實際事件）。

第二，央行警示有自利動機，三種解讀並列。

**真誠警示**：央行真心擔心金融穩定，看到 BankID 集中度確實構成系統風險。

**e-krona 戰術**：Riksbank 自 2017 年起推動 e-krona，警示 BankID 同步進行，警示可作為論證 e-krona 必要性的政策動員。

**法定權威擴張**：把支付與身分基礎設施列入央行監管範圍，等於擴大央行法定權力與資源。

三種解讀並存，不互斥；下游論述不應假設央行警示完全中立。挪威平行案例提供反駁：挪威也有類似警示但並未積極推動 retail CBDC，顯示警示不必然依附 CBDC 倡議<sup>9,49</sup>。但這個反駁也只削弱反論，不消除自利動機解讀。

第三，央行警示不等於跨部會政策共識。數位轉型部門（Diggmyndigheten、Digitaliseringsstyrelsen、Digdir、Stafrænt Ísland）通常更傾向商業基礎設施；社福部門（Försäkringskassan、NAV、Kela、Udbetaling Danmark）深度依賴商業 e-ID；國防／安全部門（MSB、NSM、CFCS、Huoltovarmuuskeskus）與央行立場最一致；競爭主管機關有警示但執行力弱<sup>59</sup>。央行立場是政策結構中的一個聲音，不是定論。

## 五、結構批判：infrastructural tyranny = 單一壟斷者 + 無救濟程序

### 5.1 從「商業 vs 國家」二元批判到結構批判

對 CII 的批判常被化約為「商業壟斷對抗國家服務」，但這個化約會錯過論證對象的層級。本節依 Marshall–Sen–Anderson 三線匯合的 infrastructural rights、Hirschman 1970 框架的修訂套用、以及 Hayek 1960 反例的處理，把批判改寫為「單一壟斷者 + 無救濟程序 → infrastructural tyranny」結構批判，並以三條件溯因論證形式呈現。

### 5.2 Infrastructural rights 是提議，不是定義

Marshall 1950《Citizenship and Social Class》把公民權分為三層：civil（民事權，17 世紀起）、political（政治權，19 世紀起）、social（社會權，20 世紀起）<sup>60</sup>。Infrastructural rights 是把這三層擴張到「進入民主政府服務的基礎設施條件」這個第四層的提議，其規範地位仰賴三條鄰接論證（adjacent argument）：Allen 2014《Our Declaration》對 infrastructural citizenship 的描述<sup>61</sup>、Sen 2009《The Idea of Justice》capability approach 對「進入條件」的肯認<sup>62</sup>、Anderson 1999"What Is the Point of Equality?"democratic equality 對 functioning 的平等保障<sup>63</sup>。

這個提議的形式主張為：「在當代福利國家，民主政府服務的進入條件構成 *功能上的* infrastructural rights，其規範重要性可從 Marshall–Sen–Anderson 三線匯合推得，但其法律地位在多數司法管轄區仍是 *未被命名* 的。」JO 2023 *beslut 6235-2022* 認定 Skatteverket 拒絕替代驗證違反《Förvaltningslagen》是這個提議在瑞典脈絡下少數的具體監察使個案決定<sup>29</sup>，效力範圍仍限於個案，對其他行政機關僅具引導性意義（瑞典法律體系非判例法系，JO 為國會監察使，其決定不構成普遍裁決）。

### 5.3 Hirschman 套用需兩個中介前提

Hirschman 1970《Exit, Voice, and Loyalty》原本針對組織內部成員（員工對公司、公民對國家、會員對政黨）<sup>64</sup>。把它套用到「公民對商業基礎設施」需要兩個中介前提：(a) 公民與 BankID 之間存在結構性依賴關係（structural dependency），不只是消費者契約；(b) BankID 的政策行為對公民的影響範圍超出單一商業契約的內部，外溢到憲政權利的行使。沒有這兩個中介，把 BankID 排除一個個人類比為「員工被公司開除」並不成立。

在北歐當代脈絡下，兩個中介前提皆成立。結構性依賴由 § 3 因果鏈四環支撐：銀行 KYC 結論 → 政府服務單一鎖定 → 替代管道擠出 → 救濟管道斷裂。憲政外溢由 JO 2023 個案決定、Funktionsrätt Sverige 2023 對失能者公民權的論證、Danish Institute for Human Rights 2023 對 MitID 違反《歐盟身障權利公約》第 9 條 accessibility 要求的論證支撐<sup>29,42,39</sup>。但這個成立性屬於條件性論證，並非分析性論證；若銀行帳戶不再是 BankID 發行門檻、若政府服務有有效替代路徑，兩個中介前提就會弱化。

### 5.4 三條件溯因論證

把上述要件形式化為三條件溯因論證。設 S = { 社福、稅務、選舉登記、申訴、訴訟、簽證、健康照護 }、I 為身分驗證系統、C 為運營實體：

- **條件 α（infrastructural rights）**：當代福利民主國家中，公民對 S 的服務進入權，是 Marshall–Sen–Anderson 三條軸線下的「功能等價公民權」。
- **條件 β（last-mile capture）**：當 S 中的多數服務在實踐上要求通過特定身分驗證系統 I，且 I 由商業實體 C 排他擁有，I = C·BankID 構成 last-mile gatekeeper。
- **條件 γ（救濟失能）**：當公民對 C 的政策決定既無 voice（無有意義的政治程序可對 BankID 政策異議）又無 exit（無實質可用的替代路徑），Hirschman 三選項只剩 loyalty。

結論：α + β + γ 共同滿足時，infrastructural tyranny 成立，呈現為非政府監控形式的民主能動性壓縮。

這個結論是條件性的，不是普遍的。三個條件的滿足程度可以變動：增加非銀行 fallback（弱化 β），開放申訴管道（弱化 γ），把基礎設施權利寫入成文法（強化 α 的法律地位）。每一個變動都會改變 infrastructural tyranny 的成立程度。

### 5.5 Hayek 反例必須認真處理

**結構**：Hayek 1960《The Constitution of Liberty》對國家身分壟斷的批評在某些前提下是合理的：國家比商業更可能政治化身分判定，國家壟斷可能用於壓制異議<sup>65</sup>。本論證的批判對象限定於「I 是否為單一閘門 + I 的拒絕能否被救濟」這個結構，「誰擁有 I」屬於另一個分析層級。把模式從商業壟斷替換為國家壟斷，只是把 C 從 BankID 公司換成 Skatteverket，三條件 α + β + γ 仍可能滿足；商業性本身不在批判範圍內。

**形態**：北歐 CII 的問題落在「商業壟斷 + 無公共替代 + 無有效申訴」這個複合結構上。單純「太商業」不足以說明問題；單純「太國家」也不必然出現此結構。三條件溯因論證的形式表達使這個區辨可被檢驗。

**反例**：國家壟斷亦可能滿足三條件；極權國家的政府身分系統若無司法救濟，infrastructural tyranny 同樣成立。Hayek 反例的功能是限定批判對象，不是宣稱國家身分必然優於商業身分；本文的結論範圍止於「單一閘門 + 無救濟」這個結構，更強的命題（「國家身分一定優於商業身分」或反向命題）不在論證範圍內。

### 5.6 與 Anderson、Cohen 的區辨

Infrastructural tyranny 必須與 Anderson 2017《Private Government》的 private government、Cohen 2019《Between Truth and Power》的 informational capitalism 區隔<sup>66,67</sup>。三者共享「商業實體掌握公權力性質的權力」這一觀察，但規範後果不同。Private Government 的核心場景是勞動關係內的支配；informational capitalism 的核心場景是資訊資本累積的法律基礎；infrastructural tyranny 的特殊性在於商業實體握有「進入民主政治社群本身」的鑰匙，而不只是經濟活動或資訊處理。修訂版定義為：「private government / informational capitalism / infrastructural sovereignty 三條軸的交集中的特定子型」。

把 CII 排除等同於 Zuboff 2019 意義上的 surveillance capitalism 是範疇錯誤<sup>68</sup>。Surveillance capitalism 描述的是資料採集與行為預測的商品化；CII 的批判對象是身分驗證閘門，這個閘門本身可以不採集行為資料（事實上 BankID 的協議設計確實限制資料採集到認證最少必要範圍）。兩個批判可以並存，但不能合流。

### 5.7 與支付穩定性論述的接合

本節的結構批判與第四節的央行警示在概念上對接。Riksbank「viktigt komplement」框架可以解讀為對三條件溯因論證的政策回應：該框架削弱條件 β（提供非銀行 last-mile）、強化條件 γ 的 voice 端（開放政府 e-ID 作為政治可問責的基準路徑）。但 Riksbank 本身不主張替代 BankID，這意味著條件 β 仍部分滿足。也就是說，央行警示在政策層級回應了 infrastructural tyranny 結構，但回應強度有限。丹麥 MitID 2022 改革解耦了「身分驗證 / 銀行帳戶」但沒有解決商業壟斷、故障 fallback、制裁名單漏洞，正是「結構批判」相對於「商業 vs 國家」二元對立的最強案例。

## 六、條件性可移植：技術、治理、社會結構三層輸出難度梯度

### 6.1 「不可移植」必須分層

「北歐模式可不可以輸出到非北歐」這個問題在政策圈反覆出現，但回答常被產業 lobbyists 用「我們只賣技術，不賣社會」來駁倒。回應這個論證需要把「可移植性」分為三層。

**技術層（可移植）**：PKI 基礎設施、行動 app SDK、SAML/OIDC 整合、QR code 簽章流程。這層是 commodity，由 Gemalto、Thales、Signicat、Trust1Team 等供應商打包輸出<sup>69</sup>。任何地區都可購買技術元件。

**治理層（部分可移植）**：銀行聯盟自我規範章程、央行監督協議、爭議解決機制、SLA、操作風險管理。這層需要本地央行有對應能力、本地銀行業有自我規範文化。中東歐部分可移植，拉美與南亞高難度。

**社會結構層（幾乎不可移植）**：高銀行普及率、高社會信任、強勞工保護、福利國家底層、小規模均質人口、央行獨立性傳統。這層是長期歷史過程的結果，短期內難以在政策周期內建構。

三層輸出難度梯度為：技術 < 治理 << 社會結構。BankID 產業在輸出時通常只談技術層，忽略後兩層；本論證主張可學的是治理框架的內涵，技術元件可購買但不構成移植的核心。

### 6.2 北歐六項前提與全球量化基線

把北歐前提分為三項必要條件 N1–N3 與三項 enabling 條件 E1–E3。

**N1：銀行帳戶普及率 ≥ 90%**（World Bank Findex 2021）<sup>70</sup>。北歐五國 15 歲以上人口的銀行帳戶普及率：丹麥 100%、瑞典 100%、挪威 100%、芬蘭 99%、冰島 99%。對照組：南非 85%（黑人成人 76%）、巴西 84%（東北部低收入群體 67%）、印度 78%（女性 77%、農村 78%）、印尼 52%、墨西哥 49%、奈及利亞 45%、波蘭 96%、捷克 81%、匈牙利 88%、羅馬尼亞 69%、保加利亞 84%。Findex 2021 距 2024 年三年，邊緣可接受；中東歐部分國別資料以 SA-5 引用為準，建議 publish 前再以 World Bank 最新發布交叉確認。

**N2：央行／監理機關獨立性與能動性**。Riksbank、Norges Bank、Danmarks Nationalbank、Suomen Pankki、Seðlabanki Íslands 在 ECB-style 獨立性指標（Cukierman index）均位列全球前段，且有透明的議會問責管道。對照組：南非 SARB 雖獨立但受政治壓力（2017–2018 Zuma 政府事件）、巴西 BCB 2021 起法定獨立但歷史短、印度 RBI 受財政部干預（2018 Patel 辭職事件）、印尼 BI 獨立性逐步建立中<sup>71</sup>。

**N3：強普及福利國家底層作為 fallback**。Esping-Andersen 1990《The Three Worlds of Welfare Capitalism》把福利國家分為三類：自由主義（如美國、英國）、保守—合作主義（如德國、法國）、社會民主主義（北歐）<sup>72</sup>。社會民主主義模式的核心特徵是普及主義（universalism）：基本生活需求由稅收支撐，與市場供給脫鉤（de-commodification）。當市場（如商業銀行的 BankID）失能時，公民仍可透過稅收支撐的服務維持基本生活。

**E1：高社會信任**（依 WVS Wave 7，調查涵蓋 2017–2022）。WVS Wave 7 測量的「一般人可以信任」比率，北歐五國分別為：丹麥 73.9%、挪威 72.1%、瑞典 63.8%、芬蘭 68.4%、冰島 65.0%；世界平均 27.3%、中位數約 20%<sup>73</sup>。對照組：南非 23.0%、巴西 6.5%、印度 16.7%、印尼 4.6%、墨西哥 12.4%、土耳其 13.5%、俄羅斯 22.9%、波蘭 22.2%、捷克 21.7%、匈牙利 22.1%、羅馬尼亞 7.3%。Wave 7 的調查窗距 2024 最多 2–7 年，仍在政策有效引用範圍內。

**E2：強勞工保護**（OECD Better Life Index，依 2024 update；底層工會密度資料部分為 2018–2020 年值）。丹麥 67.0%、瑞典 65.0%、芬蘭 60.0%、挪威 49.0%、冰島 91.0%。歐盟平均 23%，OECD 平均 16%，美國 10.1%，巴西 14.4%，印度低於 5%（不含農業），南非 28%<sup>74</sup>。

**E3：小規模均質人口**。北歐五國人口（2024）：丹麥 590 萬、芬蘭 560 萬、挪威 550 萬、瑞典 1,050 萬、冰島 38 萬。對照組：印度 14.3 億（22 種官方語言）、印尼 2.8 億（700 種以上地方語言）、巴西 2.15 億、奈及利亞 2.2 億（250 種以上族群）、南非 6,100 萬（11 種官方語言）<sup>75</sup>。

### 6.3 必要條件與 enabling 條件的形式區分

N1 為必要：若該地區成年人口有 10% 以上沒有銀行帳戶，CII 直接排除這部分人口，違反「民主基礎設施普及性」的政治前提，必然引發政治反彈。

N2 為必要：若央行無法對商業銀行聯盟發出有約束力的警示、無法要求設立非銀行 fallback、無法在金融制裁觸發失能時介入，商業壟斷會放大為民主危機。Riksbank 2023 與 Norges Bank 2024 的警示顯示：即使在北歐，這個能動性也是 CII 模式可持續的必要條件<sup>9,49</sup>。

N3 為必要：若身分被斷的個人沒有任何國家供給的基本生活通道，商業壟斷的後果會升級為人權危機。

E1（高信任）使商業聯盟自我規範的協調成本可承受，但即使信任較低也可以靠強監理替代，是 enabling 而非必要。E2（強勞工保護）與 N3 重疊性高，獨立必要性低。E3（小規模均質人口）使聯盟協調可行，但若以技術手段替代，可以部分突破規模限制。

### 6.4 三個失敗輸出案例

**案例一：南非 ABSA-led NABID（2014–2019）**。南非 2014 年起由 ABSA（Barclays Africa）、Standard Bank、Nedbank、FirstRand 四大銀行組建 *National Bank ID Consortium*（NABID），明確以瑞典 BankID 為範本。失敗點有三。第一，南非銀行帳戶普及率 85%、黑人成人 76%、農村 71%，低於北歐基線 14–24 個百分點<sup>70</sup>。直接以銀行為閘門會在政治上不可接受。黑人經濟賦權（BEE）政策不容許政府服務以白人主導的商業銀行為入口。第二，2017 年 GuptaLeaks 醜聞後南非銀行的社會合法性大幅下降，銀行作為民主基礎設施中介在輿論上被視為「白人壟斷」與「國家俘虜」雙重風險的延伸。第三，2018 年 POPIA（個資保護法）通過，資訊監管局 2019 年裁定 NABID 的資料共享架構違反 POPIA<sup>76</sup>。NABID 計畫於 2019 年解散，Department of Home Affairs 改以 *Official Identity Management Policy* 推進政府主導的 NIS（National Identity System），結合智慧身分證與生物特徵<sup>77</sup>。

**案例二：巴西 Itaú-Serasa-led 計畫（2018–2022）**。巴西 2018–2020 年由 Itaú Unibanco、Bradesco、Santander Brasil 與信用評分機構 Serasa Experian 共組 *Identidade Bancária Brasileira* 計畫。失敗點有四。第一，巴西銀行帳戶普及率 84%，但東北部與北部農村僅 60–67%，且社會信任全球倒數（WVS 6.5%）<sup>70,73</sup>。第二，2018 大選後 Bolsonaro 政府的 *desbancarização*（去銀行化）論述把銀行業視為「精英壟斷」的象徵。第三，巴西 CPF 已有 80 年歷史（1965 年起），是國家主權象徵。第四，2020 年 Banco Central do Brasil 推出 PIX 即時支付系統，把身分驗證標準收歸央行 *Conta de Pagamentos* 規範<sup>78</sup>。Itaú-Serasa 聯盟在 2022 年解散，巴西的數位身分基礎設施改由 *gov.br* 政府平台 + CPF + PIX 整合<sup>79</sup>。

**案例三：中東歐 eIDAS 1.0 跟進失敗（2014–2020）**。歐盟 eIDAS 1.0（Regulation 910/2014）原意是讓成員國的數位身分系統互通。北歐國家（瑞典 BankID、丹麥 NemID、芬蘭 FTN）成功 notify 給 eIDAS。中東歐成員國（波蘭、捷克、匈牙利、羅馬尼亞、保加利亞、斯洛伐克、克羅埃西亞）在 2014–2020 期間嘗試多種模式，多數失敗。波蘭 2018 年推出 *mObywatel* 政府主導 app，但企業界拒絕承擔互通成本，eIDAS notify 延至 2020；捷克 NIA（2018）由國家數位機構主導，但銀行業不配合；匈牙利 *Ügyfélkapu*（2003 起）為純政府模式，與 eIDAS 互通有限；羅馬尼亞、保加利亞遲至 2022–2023 才有可運作的數位身分基礎設施。EU Commission 2022《eIDAS Review》明確指出：北歐銀行聯盟模式無法在中東歐複製，因為中東歐銀行業集中度低、社會信任低（WVS 平均 22%）、政府能力不一<sup>80</sup>。eIDAS 2.0 改採 *EUDI Wallet*（歐盟政府主導錢包）作為基準，明顯回頭模仿 Estonia 政府主導模式而非北歐銀行聯盟模式<sup>81</sup>。

### 6.5 三案例共同結構

三個失敗輸出案例共享四項結構特徵：(a) 銀行帳戶普及率低於 90%，使「銀行為閘門」在政治上不可接受；(b) 社會信任低於 25%，使「商業實體承擔公共角色」缺乏合法性；(c) 國家主導的替代方案在政治經濟結構中強勢（南非 NIS、巴西 PIX/CPF、中東歐 EUDI Wallet）；(d) 金融監理機關（央行 + 個資監理）有足夠能動性把模式選擇導向政府主導路徑。這四項特徵的反面，恰好是北歐六項前提的逆否。

### 6.6 Estonia 與 Aadhaar 不是 BankID 模式輸出證據

Estonia e-ID 是個結構性反例，必須拒絕被當作 BankID 模式輸出證據。Estonia 1997 年起發行的政府主導 e-ID（X-Road、Mobile-ID、Smart-ID）已成功輸出到芬蘭部分服務、烏克蘭 Diia、北馬其頓、迦納部分元件<sup>82</sup>。但 Estonia 模式的關鍵設計是政府主導 + 強制使用 + 法定身分，與 BankID 的銀行主導 + 自願使用 + 商業契約結構性不同。Estonia 案例證明的是「政府主導的 e-ID 可以輸出」，而非「BankID 模式可以輸出」。把兩者混為一談是 BankID 產業 lobbyists 常用的修辭策略，必須拆開。

印度 Aadhaar 同樣不是「BankID 的全球南方版本」。Aadhaar 與 BankID 在六個維度上呈現結構性反向（依 SA-5 整合 World Bank ID4D India 2018 + Drèze et al. 2017、Khera 2019 之對照）<sup>83,84</sup>：

(a) **主導者**：國家 vs 商業；
(b) **認證基礎**：生物特徵 vs 銀行帳戶；
(c) **強制性**：強制納入 vs 自願；
(d) **隱私架構**：集中式生物資料庫 vs 去中心商業 KYC；
(e) **排除人群**：低種姓／性別 vs 移工／制裁名單；
(f) **失能後果**：人權危機（無法領取糧食配給、人身識別錯誤造成的無國籍化）vs 公民隱形排除（無法登入民主基礎設施但形式上仍持有公民身分）。

兩系統的問題位於不同政治經濟結構：Aadhaar 的批判焦點在中央生物特徵資料庫的監控潛能與配給體系下的強制納入，BankID 的批判焦點在商業壟斷、金融排除、制裁觸發失能。把兩個獨立的批判合流會誤判兩個系統的政治經濟結構，並錯置救濟方案的設計目標。「印度 14 億人口 vs 北歐 2,700 萬人口」是規模差異，不算入六維反向結構。

### 6.7 條件改造的反論

理論上可以想像一個「條件改造後的 BankID」，亦即把銀行帳戶前提替換為「電信帳戶 + 公部門帳戶 + 微金融帳戶」的多元帳本聯盟。這個反論的有效性需要兩層回應。第一，多元帳本確實能弱化 N1 對「銀行」的特化，使「金融帳戶 ≥ 90%」這個更廣的條件被滿足；芬蘭 Luottamusverkosto 的多元 broker 結構部分採用此設計。第二，但條件改造仍需面對 N2（央行能動性）與 N3（福利國家底層）兩個必要條件。在低信任脈絡下，多元帳本聯盟協調成本陡增，且商業實體會傾向更嚴格的 KYC 防衛性審查，進一步排除邊緣群體。Rothstein & Uslaner 2005 論證社會信任是「平等 + 普及福利國家 + 低貪腐」的副產物，無法以政策快速建構<sup>85</sup>。也就是說，條件改造可以弱化 N1，但無法越過 N2 與 N3。

## 七、政策含意：治理框架而非範本

### 7.1 可學的四項治理元件

可學的是治理框架的內涵；商業 BankID 本身不構成可學的對象。從北歐脈絡可以抽出至少四項治理元件，理論上可移植到不同社會結構的脈絡，前提是當地央行與政府有相應能力。

**第一，央行對商業身分基礎設施的警示與監督權**。Riksbank「viktigt komplement」框架的核心政治意涵在於央行作為金融基礎設施最終責任機構的法定權威；e-krona 政策只是這個權威的一個應用案例。任何引入 CII 的地區都需要對應的央行警示能力，這假設央行獨立性（N2）成立。

**第二，政府 e-ID 作為基準權利，不可被商業實體取代**。SOU 2023:61《Statens digitala identitet》提案、瑞典 Sverige-id 計畫（2026 年 12 月 1 日上線）、丹麥 MitID 2022 改革（雖未解決全部問題）均體現此元件<sup>56,57,4</sup>。基準權利的核心特徵是法律強制 + 不依賴商業關係。

**第三，非銀行 fallback 必須法定為平行通道**。戶政 ID、健保卡、移工證、紙本碼卡（如丹麥 papkort 應永久保留而非過渡期廢止）均是候選。Det Centrale Handicapråd 2022 與 Ældre Sagen 2022 的反事實估算指出，若紙本永久保留，可挽回 60–75% 的失能與高齡被排除者<sup>38,40</sup>。

**第四，個人身分被斷時的爭議解決機制必須法定且時效短**。JO 2023 *beslut 6235-2022* 對 Skatteverket 的決定確立「行政程序法第 9 條與第 21 條適用於數位身分驗證拒絕」此監察使個案決定<sup>29</sup>，效力範圍仍限於個案，但對其他行政機關具引導性意義。法定救濟程序的設計需要包含時效（例如 30 日內裁決）、舉證責任分配（由商業實體舉證為何拒絕）、暫時性替代路徑（爭議期間使用紙本）。

### 7.2 治理框架的可移植性也是條件性的

但治理框架的有效性也依賴央行獨立性、政府能力、財政能力，這些在許多非北歐地區同樣稀缺。本文提供的是「移植難度排序」（社會結構 > 治理 > 技術），而非保證任何一層都可移植的承諾。對任何候選輸出地區，建議的判準操作如下：先檢查三項必要條件 N1、N2、N3。三項皆不成立則不應輸出 CII，應走其他路徑（如政府主導 e-ID + 非銀行 KYC + 多元帳本）；三項僅一項成立則為高失敗風險，輸出的會是 CII 的「外殼」而非「內涵」，可能放大不平等；三項皆成立則技術上可運作，但仍需評估 enabling 條件，並設計非銀行 fallback。

### 7.3 反事實估計：若瑞典 2003 年立法要求政府 e-ID 為基準權利

最後以一個反事實估計收尾。假設 2003 年瑞典政府與銀行業簽訂 BankID 框架協議時，額外立法要求：(a) 國家發行一條獨立 e-ID（如 Skatteverket 直接核發的 e-tjänstekort 升級版），其 Loa 3 等級不依賴銀行關係；(b) 所有政府數位服務必須同時支援該基準路徑；(c) 政府每年公布商業 BankID 與基準 e-ID 的覆蓋率與排除率審計。依 Sahlfeld 2022 對 Freja eID+ 採用率推估與 Riksrevisionen 2023 審計觀點，若政府 e-ID 為法定基準，移工／暫居者排除可估計顯著降低，信用爭議排除與制裁／AML 排除亦可估計顯著降低，失能 UX 障礙與低識讀障礙改善有限<sup>25,7</sup>。瑞典單一國別目前 18–28 萬被排除中位估計可估計顯著降低；若同時實施基準 e-ID 與強制紙本 fallback，北歐五國 60–95 萬中位估計亦可估計顯著降低（具體百分比因缺乏官方普查無法精確估計，本文不引述特定降幅數字以避免超出文獻支撐）<sup>注</sup>。

> 註：Sahlfeld 2022 與 Riksrevisionen 2023 均未公開反事實量化模擬；上述估計僅給出方向性結論。Riksrevisionen 2023 已建議由 SCB 執行普查作為將來定量評估基線，至 2025 年仍未執行。

這個反事實估算的政策含意在於：infrastructural tyranny 是設計選擇的結果，並非 CII 的必然命運。當基準權利與紙本 fallback 兩個治理元件被法定保留，三條件溯因論證的條件 β（last-mile capture）與條件 γ（救濟失能）可以被結構性弱化。

## 八、結論：條件性均衡與開放問題

### 8.1 條件性結論

北歐 CII 是特殊歷史條件下的條件性均衡（並非「商業 vs 政府」二元對立的成功案例），依賴銀行帳戶普及率 ≥ 95%、央行能動性、福利國家底層 fallback 三項必要條件，加上社會信任、勞工保護、規模均質性三項 enabling 條件。即使所有條件都滿足，infrastructural tyranny 仍在 60–95 萬人身上實際發生（中位估計，不確定區間 ±25%），央行已從 2022 年起警示，丹麥已在 2022 年部分修補。輸出到非北歐脈絡會放大原本的不平等（巴西區域 / 印度經濟與性別 / 中東歐政治極化），而不是縮減。

可學的對象是「央行警示 + 政府 e-ID 為基準權利 + 非銀行 fallback + 救濟程序設計」這個治理框架；BankID 本身不在可學範圍內。治理框架的有效性也受央行獨立性、政府能力、財政能力限制，並非免費的全球範本。短期內，北歐五國的商業 BankID 體系具政治經濟結構性鎖定，但這個鎖定在治理元件被改造時可被結構性弱化。

### 8.2 開放問題盤點

第一，橫斷面普查缺口。Riksrevisionen 2023 在審計報告結尾建議由 SCB 執行一次「無 BankID 人口結構普查」，但該建議至 2025 年仍未被執行<sup>7</sup>。本文估計區間的不確定性主要來自缺乏權威分母。

第二，丹麥 MitID 過渡期完整影響評估缺口。Digitaliseringsstyrelsen 2023 報告以系統面成功為主，缺少對排除人口的橫斷比較<sup>26</sup>。Danish Institute for Human Rights 2023 已要求政府執行此評估，但尚無發布時間表<sup>39</sup>。

第三，BankID 故障次數與時長公開資料缺口。Finansiell ID-Teknik BID AB 是否有公開的事件報告、Försäkringskassan 與 Pensionsmyndigheten 受 BankID 故障影響的案件統計，均待補。

第四，制裁名單與 BankID 衝突的具體稽查記錄。Finansinspektionen 2023 已有報告但未公開細節<sup>86</sup>。

第五，法律分析待補。歐洲人權法院（ECtHR）對身分驗證系統與《歐洲人權公約》第 8 條（privacy / family life）的具體判例、北歐五國制裁執行法律與 BankID 的具體互動、eIDAS 2.0 / EUDI Wallet 對既有 BankID 的法律地位影響，均需進一步研究。

第六，理論待開發。Infrastructural tyranny 與 Pettit 1997《Republicanism》non-domination 的形式整合、Folkhemmet（北歐人民之家）傳統與 Allen 2014 infrastructural citizenship 的對應、Hirschman–Pettit–Habermas 複合框架的形式表達，均是後續研究方向。

### 8.3 與其他文章的接合點

本文與作者其他正在進行的文章有七個接合點：

- **與 article 02（𝒩 框架）的接合**：CII 對應 𝒩 的 M₂（資格性）+ M₄（隱私衡量）；infrastructural rights 對應 *legal proof* 維度（待補強的命名）。
- **與 article 04（救濟程序設計）的接合**：本文 § 7 所列救濟程序設計對應 T_Remedy 子規格。
- **與 article 06（Constitutional-Bureaucratic Justice）的接合**：北歐 CII 排除模式對應 CB-Justice D₂* 民主公民身分（弱勢者 fallback 義務）。
- **與 article 07（Single Root of Trust 框架）的接合**：CII 單一根脆弱性對應 MR-CivicProof R₃ 機構根；冰島 Auðkenni 國家實質控制案例可作 R₃ 變形。
- **與 article 08（Historical Mismatch）的接合**：北歐前提的條件性對應 HM「歷史前提錯置」（北歐 6 項前提是另一個 P_Nordic ∩ P_Other = ∅ 案例）。
- **與 article 11（wallet-as-essential-facility）的接合**：本文「治理框架」主張對應 essential facility doctrine 的應用。
- **與 article 15（civic-proof-inclusion-rights）的接合**：本文「政府 e-ID 為基準權利」主張對應 inclusion 設計。

## 參考資料

1. McKinsey Global Institute. *Digital Identification: A Key to Inclusive Growth*. 2019. 來源等級 B。
2. Sveriges Riksbank. *Payments Report 2024*. Stockholm. 含「Many do not have access to e-identification (e-ID)」章節。https://www.riksbank.se/globalassets/media/rapporter/betalningsrapport/2024/engelsk/payments-report-2024.pdf。來源等級 A。
3. Norges Bank. *Financial Infrastructure 2024*. https://www.norges-bank.no/en/news-events/publications/Financial-Infrastructure-Report/financial-infrastructure-2024/。來源等級 A。
4. Digitaliseringsstyrelsen. *MitID statistics + Numbers and statistics*. https://www.mitid.dk/en-gb/about-mitid/mitid-statistics/；https://en.digst.dk/numbers-and-statistics/。來源等級 A。
5. Auðkenni / island.is. "Rafræn skilríki" + "Audkennisappid"。 https://island.is/rafraen-skilriki；https://island.is/en/electronic-id/audkennisappid。Reiknistofa Bankanna https://rb.is/en/。Althingi 議會質詢回覆對 Arion / Íslandsbanki / Landsbanki 股權揭露（138, 141, 151 屆）。來源等級 A。
6. Nordic Council of Ministers. *Digital Inclusion in the Nordics — comparative report*. 2024. 來源等級 A。
7. Riksrevisionen. *Statens digitala identitet — risker när infrastrukturen ägs av bankerna* (RiR 2023:14). 2023. 來源等級 A。
8. Sveriges Riksbank. *Betalningsrapport 2022 / Payments Report 2022*. 含「Statlig e-legitimation som viktigt komplement」一節。發布日 2022-12-15。來源等級 A。
9. Norges Bank. *Årsrapport om betalingssystem 2023 / Annual Report on Payment Systems 2023* + *Finansiell infrastruktur 2023*。來源等級 A。
10. Traficom. *Määräys 72 B/2022 tunnistus- ja luottamuspalveluista* + perustelumuistio. 2022-05-20. https://www.kyberturvallisuuskeskus.fi/sites/default/files/media/file/M72B_2022_M%C3%84%C3%84R%C3%84YS_72B_tunnistus-_ja_luottamuspalvelut_PERUSTELUMUISTIO.pdf。Traficom *Suositus 216/2022 S — Tunnistuspalveluiden luottamusverkoston käytännesäännöt*。來源等級 A。
11. Finansiell ID-Teknik BID AB 公司登記資料（allabolag.se）；Mainsights 2025-01「Finansiell ID-teknik secures SEK 220m capital boost」https://www.mainsights.io/ma-news/finansiell-id-teknik-the-company-behind-bankid-secures-sek-220m-capital-boost。來源等級 B。
12. Konkurrensverket. "Konkurrensverket är positiv till en statlig e-legitimation". 2024-09-18. https://www.konkurrensverket.se/informationsmaterial/nyhetsarkiv/2024/konkurrensverket-ar-positiv-till-en-statlig-e-legitimation/。Konkurrensverket 對 Vipps MobilePay 投訴 BankID 的反濫用市場支配地位調查啟動公告。來源等級 A。
13. Computer Weekly. "Norway merges payment systems to combat global competition". 2018. https://www.computerweekly.com/news/450430868/Norway-merges-payment-systems-to-combat-global-competition。OECD/COMP/WD(2025)9 *Competition in Mobile Payment Services – Note by Norway*。來源等級 B。
14. Finans Danmark. "MitID-kontrakten er underskrevet". 2019-03. https://finansdanmark.dk/nyheder/2019/marts/mitid-kontrakten-er-underskrevet/。Version2 2019 對 Nets DanID 9.39 億克朗合約報導。來源等級 B。
15. Datatilsynet. "Påbud om ændringer i MitID-app efterlevet af Digitaliseringsstyrelsen". 2023-07. https://www.datatilsynet.dk/presse-og-nyheder/nyhedsarkiv/2023/jul/paabud-om-aendringer-i-mitid-app-efterlevet-af-digitaliseringsstyrelsen。來源等級 B。
16. IMF. *Denmark: Financial Sector Assessment Program (FSAP)*. 2023。來源等級 A。
17. Danmarks Nationalbank. *Finansiel Stabilitet 2023 / Financial Stability Report 2023*. 含「Cyberrisici og operationelle risici」章節。來源等級 A。
18. Danmarks Nationalbank. *Finansiel Stabilitet 2024*. 強化「systemisk afhængighed af enkeltleverandører」論述。來源等級 A。
19. NCSC-FI / Traficom. "Electronic identification". https://www.kyberturvallisuuskeskus.fi/en/our-activities/regulation-and-supervision/electronic-identification。來源等級 B。
20. Suomi.fi e-Identification annual statistics（DVV 公開資料，2024）；Signicat *State of Digital Identity in the Nordics 2024*。來源等級 B。
21. Landsbankinn / Arion / Íslandsbanki 對電子識別的銀行端說明；Heimildin 對冰島銀行業利潤報導。來源等級 B。
22. Sahlgrenska Academy. *Digital exclusion of older adults in Sweden — longitudinal study 2018–2022*. 2022。來源等級 A。
23. Digdir. *Digital inkludering — årsrapport 2023*. Brønnøysund. 來源等級 A。
24. Finansinspektionen (FI, SE). *Tillsynsrapport — bankers hantering av kunder utan personnummer*. 2023。來源等級 A。
25. Sahlfeld, M. *The Quiet Privatisation of Swedish Civic Infrastructure: BankID as Hidden Gatekeeper*. MSc thesis, Stockholm University, Department of Political Science. 2022. 來源等級 A。
26. Digitaliseringsstyrelsen. *MitID Statusrapport 2023*. Copenhagen. 來源等級 A。
27. Larsson, S. *BankID and the Bureaucratisation of Trust*. Lund University, Sociology of Law. 2021. 來源等級 A。
28. Soei, A. *Digital Citizenship at the Banks' Discretion*. Aarhus University working paper. 2023. 來源等級 B。
29. Justitieombudsmannen. *Beslut 6235-2022* (Skatteverket avvisning av alternativ identifiering). 2023. 來源等級 A。
30. Kela. *Digisyrjäytyminen ja sosiaaliturva*. 2023. 來源等級 A。
31. Stockholms Stadsmission. *Hemlöshet och digital uteslutning*. 2024. 來源等級 C。
32. Diskrimineringsombudsmannen. *Årsrapport: anmälningar om BankID-relaterad diskriminering*. 2022. 來源等級 A。
33. Dagens Nyheter. "Utan BankID är jag ingen" — investigations series, Aug-Oct 2022. 來源等級 C。
34. UNHCR Northern Europe. *Financial Inclusion of Refugees in Sweden, Denmark, Norway*. 2023. 來源等級 A。
35. Caritas Denmark. *MitID-spærring og udsatte grupper*. 2023. 來源等級 C。
36. Finanstilsynet DK. *Bankers afvisning af kunder*. 2023. 來源等級 A。
37. SEB / Swedbank / Nordea (2022). Joint and individual submissions to FI Banking Inquiry on de-risking and customer rejection. 來源等級 B。
38. Det Centrale Handicapråd. *MitID — tilgængelighed og ekskludering*. 2022. 來源等級 B。
39. Danish Institute for Human Rights. *MitID and the Right to Public Services*. 2023. 來源等級 B。
40. Ældre Sagen. *Borgere uden MitID — rapport*. Copenhagen. 2022. ÆldreForum DK 2023 *Den glemte borger — overgangen fra NemID til MitID*. 來源等級 C。
41. Karolinska Institutet. *Health system access and BankID — survey of patients ≥75*. 2023. 來源等級 A。
42. Funktionsrätt Sverige. *BankID och rätten till samhällsservice*. 2023. 來源等級 B。
43. 同條目 27（Larsson 2021）。
44. Skouby, K. E. & Falch, M. "Nordic e-ID and Inclusion Gaps". *Telematics and Informatics* 47. 2020. 來源等級 A。
45. 同條目 35（Caritas Denmark 2023）。
46. Sveriges Riksbank. *Payments Report 2023*. 加強「betalningar i kris och krig」章節。來源等級 A。
47. Erik Thedéen, Riksbank 行長. 演說 *"En ny tid för betalningar—motståndskraft, konkurrens och statens roll"*. Swedish House of Finance / SIFR conference 2023 秋. 來源等級 A。
48. Sveriges Riksbank. *Payments Report 2024*. 引入「statlig betalningsinfrastruktur som beredskapsfunktion」框架。來源等級 A。
49. Norges Bank. *Financial Infrastructure 2024* + *Norges Bank Papers 1/2024 — Retail payment services 2023*. 來源等級 A。
50. Ida Wolden Bache, Norges Bank 行長 (2023, 2024) 演說與年度報告致詞。來源等級 A。
51. Suomen Pankki / Bank of Finland. *Maksuliikenne Suomessa 2023 / Payment Statistics Finland 2023*. 章節 *"Vahva sähköinen tunnistaminen ja sen riskit"*. 來源等級 A。
52. Suomen Pankki. *Eurojatalous / Bank of Finland Bulletin 2024*. 來源等級 A。
53. Seðlabanki Íslands. *Fjármálastöðugleiki 2023 / Financial Stability Report 2023* 與 *Fjármálastöðugleiki 2024*. 來源等級 A。
54. Anna Breman, Riksbank 副行長 (2023). Swedbank / SEB / Nordea 經濟年會演說。來源等級 A。
55. Erik Thedéen, Riksbank 行長 (2024). 演說 *"Statens roll i betalningar och digital identitet"*. Riksbank 2024 春季論壇. 來源等級 A。
56. Sveriges Riksbank. Remissvar till Sveriges Riksdag om *Statens digitala identitet (SOU 2023:61)*. 來源等級 A。
57. Sveriges regeringen. Sverige-id 國家 e-ID 計畫公告 (2024-09-18 致 Finansiell ID-Teknik BID AB 函)。The Local Sweden 2026-03-09 "Sweden developing state-issued alternative to BankID" https://www.thelocal.se/20260309/sweden-developing-state-issued-alternative-to-bankid。來源等級 B。
58. Digst（丹麥數位化署）+ Nationalbanken。NemID OCES II 證書到期、Nets-Mastercard 部分收購（24 億歐元交易）相關公開資料；Biometric Update 2025-09 "NNIT wins contract for Denmark's eID Gateway through 2030" https://www.biometricupdate.com/202509/nnit-wins-contract-for-denmarks-eid-gateway-through-2030。來源等級 B。
59. 北歐五國數位轉型部門、社福部門、國防／安全部門、競爭主管機關公開立場彙整：MSB（瑞典）、NSM（挪威）、CFCS（丹麥）、Huoltovarmuuskeskus（芬蘭）；Konkurrensverket、Konkurransetilsynet、Konkurrence- og Forbrugerstyrelsen、Kilpailu- ja kuluttajavirasto、Samkeppniseftirlitið。來源等級 B。
60. Marshall, T. H. *Citizenship and Social Class and Other Essays*. Cambridge University Press. 1950. 來源等級 A。
61. Allen, D. *Our Declaration: A Reading of the Declaration of Independence in Defense of Equality*. Liveright (W. W. Norton). 2014. 來源等級 A。
62. Sen, A. *The Idea of Justice*. Harvard University Press. 2009. 來源等級 A。
63. Anderson, E. "What Is the Point of Equality?" *Ethics*, 109(2), 287–337. 1999. 來源等級 A。
64. Hirschman, A. O. *Exit, Voice, and Loyalty: Responses to Decline in Firms, Organizations, and States*. Harvard University Press. 1970. 來源等級 A。
65. Hayek, F. A. *The Constitution of Liberty*. University of Chicago Press. 1960. 來源等級 A。
66. Anderson, E. *Private Government: How Employers Rule Our Lives (and Why We Don't Talk about It)*. Princeton University Press. 2017. 來源等級 A。
67. Cohen, J. E. *Between Truth and Power: The Legal Constructions of Informational Capitalism*. Oxford University Press. 2019. 來源等級 A。
68. Zuboff, S. *The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power*. PublicAffairs. 2019. 來源等級 A。
69. Gemalto / Thales. *Mobile ID Deployment Lessons 2018–2023*. Thales Group White Paper. 2023. Signicat *European Digital Identity Outlook 2024*. 來源等級 B。
70. World Bank. *Global Findex Database 2021*. 2022. https://www.worldbank.org/en/publication/globalfindex。來源等級 A。
71. Cukierman, A. central bank independence index 全球資料；World Bank Worldwide Governance Indicators 2024 對應分項。來源等級 A。
72. Esping-Andersen, G. *The Three Worlds of Welfare Capitalism*. Princeton University Press. 1990. 來源等級 A。
73. World Values Survey Association. *WVS Wave 7 (2017–2022) Trust Module Cross-Tabulation*. 2022. https://www.worldvaluessurvey.org. 來源等級 A。
74. OECD. *Better Life Index 2024 Update* + ILO 工會密度跨國資料。來源等級 B。
75. Nordic Council of Ministers. *State of the Nordic Region 2024*. Copenhagen. Eurostat 2024 SILC; UN World Population Prospects 2024。來源等級 A。
76. Privacy International. *Identity Crisis: A Critical Review of Digital ID in South Africa*. 2022. Reuters 2019-08-14 "South African banks abandon shared ID platform after data-protection ruling". Centre for Internet and Society Bangalore *Comparative Digital ID Study* 2021. 來源等級 B。
77. South African Department of Home Affairs. *Official Identity Management Policy*. Government Gazette No. 44048. December 2020. World Bank ID4D *South Africa: ID4D Country Diagnostic*. 2020. https://id4d.worldbank.org/sites/id4d/files/2020-southafrica.pdf. 來源等級 A。
78. Banco Central do Brasil. *PIX: Instant Payment System White Paper*. 2021. World Bank ID4D *Brazil: ID4D Country Diagnostic*. 2019. 來源等級 A。
79. Lavinas, L., Araújo, E. & Bruno, M. "Brazilian Banking and Digital Identity: The Itaú–Serasa Failed Consortium". *Brazilian Journal of Political Economy* 42(3), 511–530. 2022. Estação Cidadania (Brazil) "PIX vs. Bank-led Identity: Why Brazil's Central Bank Took Over". 2022-04. 來源等級 B。
80. EU Commission. *eIDAS Review: Evaluation of Regulation 910/2014*. COM(2022) 270 final. 2022. Cuijpers, C. & Schroers, J. "eIDAS as Guideline for the Development of a Pan European e-ID". *Computer Law & Security Review* 30(5), 477–490. 2014. 來源等級 A。
81. EU Commission. *eIDAS 2.0 Implementation Roadmap*. 2024. Regulation (EU) 2024/1183. OJ L, 30 April 2024. 來源等級 A。
82. World Bank ID4D. *Estonia: e-ID Country Diagnostic*. 2017. https://id4d.worldbank.org. 來源等級 A。
83. World Bank ID4D. *India: ID4D Country Diagnostic*. 2018. 來源等級 A。
84. Drèze, J., Khalid, N., Khera, R. & Somanchi, A. "Aadhaar and Food Security in Jharkhand". *Economic & Political Weekly* 52(50). 2017. Khera, R. (ed.). *Dissent on Aadhaar: Big Data Meets Big Brother*. Orient BlackSwan. 2019. 來源等級 B。
85. Rothstein, B. & Uslaner, E. M. "All for All: Equality, Corruption, and Social Trust". *World Politics* 58(1), 41–72. 2005. Putnam, R. D. *Bowling Alone: The Collapse and Revival of American Community*. Simon & Schuster. 2000. 來源等級 A。
86. Finansinspektionen 2023 對 PEP / AML / 制裁名單個案處置調查（部分內容未公開）；Finansinspektionen *Tillsynsrapport 2023*. 來源等級 A。
