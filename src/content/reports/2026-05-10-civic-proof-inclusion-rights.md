---
title: "不會用皮夾的人怎麼辦：公民證明取得權作為基本權利"
description: "本文主張，當 civic proof 成為進入民主基礎設施的事實必要通道時，其取得權具有作為「人權層級前置權利」（precursor right）的學理位階主張空間。論述採三層拆分：（L1 access interest）取得 civic proof 是民主基礎設施近用利益；（L2 institutional entitlement）當 civic proof 成為事實必要通道，國家有建立可近用、可救濟、可替代路徑的制度義務；（L3 treaty-level human right）目前不主張已達成文公約權利地位，僅以 Marshall 三層公民權結構與 UDHR Art 6 / ICCPR Art 16 法律人格權作為類比錨點。國家義務三層保障結構（程序 / 實質 / 制度）對應 L2 制度義務；Wallet 工程的個人擁有 / 個人識別 / 個人私鑰三重預設本身須被檢驗為規範偏誤。"
pubDate: 2026-05-10
tags: ["civic-proof", "inclusion-rights", "digital-identity", "human-rights", "Marshall", "Sen-capability-approach", "CRPD", "stateless-persons", "shared-device", "delegated-authority", "supported-decision-making", "inclusion-impact-assessment", "wallet"]
category: "數位身分與民主理論"
aiModel: "Claude Opus 4.7"
aiPrompt: "哪些人群在 civic proof 取得上面臨結構性障礙？civic proof 取得權應如何被法律保障——程序保障 / 實質保障 / 制度保障？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-10-civic-proof-inclusion-rights"
aiGeneratedDate: 2026-05-10
humanReviewed: false
lang: "zh-TW"
---

## 1. 導論

歐盟在 2024 年 4 月通過 Regulation (EU) 2024/1183（eIDAS 2.0），把數位身分皮夾從歐盟層級的提案推進到成員國強制建置的義務<sup>1</sup>。台灣行動自然人憑證皮夾（TW DIW）、印度 DigiLocker、布宜諾斯艾利斯 QuarkID、不丹 NDI 等案例則陸續上線。這些系統共同假設使用者擁有一支可承載 wallet 的智慧型手機、有足夠的數位識讀能力、有合法身分證件可以註冊、且不被行政或結構性條件擋下。

實際情況遠不是這樣。World Bank ID4D 2024 估計全球 8.5 億人仍無官方身分證件<sup>2</sup>；UNHCR 2024 統計截至 2023 年底全球至少 440 萬法律無國籍者<sup>3</sup>；ITU 2024 估全球 26 億人未連網<sup>4</sup>；GSMA 2024 報告 Sub-Saharan Africa 女性 23% 屬於 non-owner shared user（非主要持有者）<sup>5</sup>；WHO 2024 估全球失智人口已達 5500 萬，其中超過 60% 在低中收入國家<sup>6</sup>。把這些數字放在一起看，wallet 普及對相當部分人口意味著進一步的排除，而非數位包容的延伸。

本文的核心命題為，當 civic proof 成為進入民主基礎設施的事實必要通道時，其取得權具有作為「人權層級前置權利」（precursor right）的學理位階主張空間。命題採三層拆分以避免位階模糊——**Level 1 access interest**：取得 civic proof 是民主基礎設施近用利益；**Level 2 institutional entitlement**：當 civic proof 成為事實必要通道，國家有建立可近用、可救濟、可替代路徑的制度義務；**Level 3 treaty-level human right**：目前不主張已達成文公約權利地位，僅以 Marshall 1950 公民權三層結構與 UDHR Art 6 / ICCPR Art 16 法律人格權作為類比錨點<sup>7</sup>。國家在 Level 2 制度義務上有三層保障結構：程序保障（必須提供 wallet 之外的替代路徑）、實質保障（對無證件者、無國籍者、流亡者提供「最小可用 civic proof」）、制度保障（基礎設施設計階段強制 inclusion impact assessment）。國家不履行此義務時，可能在嚴重度光譜上構成從「行政可見性喪失」（administrative invisibility）、「累積性排除」（accumulated exclusion）到極端情境下的「結構性褫奪公民資格」（structural deprivation of citizenship）三層程度的傷害；具體嚴重度依該國憲法解釋、行政承載結構與替代路徑可用性而定。

論證安排如下：第 2 章先釐清四方關係與 civic proof 4 條件的概念基礎。第 3 章歸納被排除人群的四類結構機制。第 4 章從 Marshall + Sen 政治哲學基礎演繹 precursor right 命題。第 5 章溯因處理三層國家義務的法理基礎與失敗案例。第 6 章用共用裝置 + 委任代理拆解 wallet 三重預設。第 7 章合成三層具體政策條款。第 8 章用 5 個失敗案例做 process tracing。第 9 章用 4 個反事實壓力測試政策路徑。第 10 章接合博論其他章節與 article 序列。第 11 章是誠實邊界與開放問題。第 12 章是條件性學術結論。

論證強度需要先行交代。歸納部分（第 3 章）以已發生案例與全球量化資料為主，證據強度為「強」。演繹部分（第 4 章）以 Marshall + Sen + Anderson + Nussbaum + UN 公約為基礎，證據強度為「強」，但「precursor right」的法理位階屬學理推論而非公約直接認定。溯因部分（第 5 章）以失敗案例反推三層義務，證據強度為「中強」，但三層分類在不同法域有不同承載結構，須明示為「分析性類型學」。反例部分（第 6 章）的 wallet 三重預設拆解屬規範性論證，證據強度為「中」。政策合成（第 7 章）的具體條款（含等效性量化指標）為政策建議數，無實證來源。

## 2. 概念與術語

數位身分皮夾涉及四方關係。**Issuer**（發行者）發行 verifiable credential，包括政府、學術機構、商業 KYC 服務商。**Verifier**（驗證者）接收憑證並驗證有效性。**Wallet provider**（皮夾廠商）提供應用程式或 SDK 給用戶儲存與出示憑證。**Holder**（持有者）是憑證指涉的個人或法人。

Civic proof 4 條件；anonymity（匿名）、unlinkability（不可連結）、verifiability（可驗證）、accountability（可問責）；是博論第 2 章提出的規範性提案<sup>8</sup>。本文的關注點是這 4 條件在 inclusion 層次的具體實作。當 anonymity 與 unlinkability 在密碼學層被解（透過 zero-knowledge proof、blind signature、pseudonymous credentials），verifiability 透過 W3C Verifiable Credentials 與 mDoc 標準逐步成熟，accountability 仍然是規範性提案而非已驗證的工程實作；而 inclusion；確保所有公民都能取得這 4 條件保障下的 civic proof；是規範與工程同步的雙向挑戰。

「基本權利位階」一語在中文政治哲學脈絡下含混，本文沿用 Sub-Arg 2 的拆分，把它分為三層意義：(a) 國際人權法上的「人權」（human right）；已有公約根據；(b) 各國憲法上的「基本權」（fundamental right / Grundrecht）；須各國憲法解釋承認；(c) 立法層級的「法定權利」（statutory right）；可由國會多數修改。本文主張 civic proof 取得權在 (a) 與 (b) 兩層皆成立，並批判把它僅視為 (c) 的論述（Banerjee & Duflo 2011, 2019; Posner & Vermeule 2010）。

## 3. 被排除人群：四類結構機制

被排除人群可被分為四類結構機制，每一類對應獨立的排除原因與政策介入點。把這四類混為「數位落差」（digital divide）會掩蓋政策介入的精準度<sup>9</sup>。

### 3.1 工具排除（device exclusion）

缺乏可承載 wallet 的硬體基礎，包括無智慧型手機、共用裝置、低頻寬、舊型功能機、停電不穩網域。介入點為基礎建設政策。

GSMA 2024 全球統計指出，Sub-Saharan Africa 女性 23% 屬於 non-owner shared user（非主要持有者），South Asia 為 19%；非洲整體 mobile internet penetration 約 27%，遠低於高收入國家的 80%+<sup>10</sup>。ITU 2024 估全球至少 26 億人未連網，其中相當比例的近用模式經由家戶共用達成<sup>11</sup>。在肯亞 Wyche 等人 ICTD/CHI 研究系列中，「Sharing this with the family」一文記錄了單一智慧型手機作為 6 人家庭通訊工具的常態場景<sup>12</sup>。South Asia 的 Sambasivan 等人研究記錄女性手機使用受到家庭男性成員的監管，wallet 設計的「個人擁有」預設直接與這些社會結構衝突<sup>13</sup>。

### 3.2 識讀排除（literacy exclusion）

擁有裝置但無法理解或操作 wallet 流程，包括低數位識讀、年長者、失能者、失智者、文盲、視障與聽障使用者。介入點為教育與長照。

WHO 2024 估全球失智人口已達 5500 萬，其中超過 60% 在低中收入國家<sup>14</sup>。台灣 65 歲以上失智盛行率約 7.9%（WHO 2024 + 台灣失智症協會 2024），對應失智人口超過 30 萬<sup>15</sup>。弘道老人福利基金會與失智症協會的家屬反饋顯示，行動自然人憑證皮夾的多步驟登入、生物識別失敗時的 PIN 重設流程、長照給付請領的多重驗證，對失智長者構成實際上不可單獨完成的障礙<sup>16</sup>。

NIST Face Recognition Vendor Test (FRVT) 2022 顯示，演算法錯認率對深色膚色與東亞臉部辨識率顯著偏低（False Match Rate 在某些演算法上對非洲人臉是白人臉的 10–100 倍）<sup>17</sup>。這個演算法錯認問題作為窮盡性的開放性留口暫歸入識讀排除擴展，未來證據累積足夠應升格為獨立排除類型。

UK Universal Credit 全面數位化福利申請的設計，從 2017 年部署至今持續產生大量「digital by default」失敗案例：Eubanks 2018 *Automating Inequality* + Alston 2019 UN Special Rapporteur 報告 + Ranchordas 2022 *Duke Law Journal* 71(6) 累積記錄該系統對年長者、低識讀者、無穩定網路者的系統性排除<sup>18</sup>。

### 3.3 證件排除（documentation exclusion）

被拒於發證體系之外，包括法律無國籍者、de facto 無國籍者、未登記出生兒童、被吊銷證件的流亡者、未登記移工。介入點為國籍與移民法。

UNHCR 2024 統計截至 2023 年底全球至少 440 萬法律無國籍者，其中羅興亞、敘利亞、克什米爾無國籍者占多數<sup>19</sup>。1954 Convention relating to the Status of Stateless Persons 與 1961 Convention on the Reduction of Statelessness 建立締約國對其領土無國籍者的最低證件義務（minimum documentation duty），UNHCR 2014 *Handbook on Protection of Stateless Persons* 將此義務具體化<sup>20</sup>。

UK Windrush 案（2018）是這一類最具規模的失敗案例。英國內政部 hostile environment policy（2012 年起）要求在租屋、就業、健保、教育各環節進行身分驗證，導致長期合法居英的英聯邦移民（特別是 1948–1973 年從加勒比海地區移民英國的 Windrush 一代）因檔案管理錯誤被認定為非法居留，遭驅逐、拘留、失去工作與健保<sup>21</sup>。UK Home Office (2020) *Windrush Lessons Learned Review* 認定該政策造成「結構性歧視」，國家對受害者的補償至 2024 年仍處理不全<sup>22</sup>。

孟加拉的羅興亞無國籍者持有 UNHCR Biometric Identity Management System (BIMS) 數位憑證，但該憑證在孟加拉境內服務（食物配給、SIM 卡實名登記、跨境匯款）時，當地行政人員不熟悉 UNHCR 系統，受害者面臨的具體障礙包括：UNHCR case management 介入時程冗長、孟加拉國家人權委員會無強制執行力、國際難民法律援助組織只能政治倡議<sup>23</sup>。這些路徑都屬人道援助與政治倡議性質的補救，並非「跨境訴訟」性質的救濟。

### 3.4 制度排除（institutional exclusion）

擁有裝置與識讀能力，仍被行政或結構性條件排除，包括低收入家庭被資產審查門檻擋下、新移民未滿居住年限、移工被雇主扣留證件、街友失去固定地址。介入點為社會福利與勞動法。

印度 Aadhaar 公共配給系統（PDS）的失敗案例是這一類最嚴重的記錄。Khera 與 Drèze 系列研究累積至 2024 年共記錄 ~30 件 Jharkhand、Bihar、Karnataka 致死案；當受益人因 Aadhaar 連結錯誤、生物識別失敗、行政人員疏忽而被拒於配給站之外，最終死於饑餓<sup>24</sup>。Khera 2019 *Economic and Political Weekly* 系列指出，這些死亡屬於 Aadhaar 強制連結設計與 PDS 既有運作邏輯衝突的結構性後果<sup>25</sup>。

澳洲 Robodebt（2016–2020）是另一個制度排除的典型案例。Department of Human Services 用自動化計算錯誤地對福利受益人發出大量欠款通知，造成大規模誤扣與精神壓力，部分受益人因此自殺。Australian Royal Commission 2023 報告認定該系統違反法律與行政正當性<sup>26</sup>。

台灣移工的居留證（ARC）扣留是制度排除的本地案例。雇主透過扣留 ARC 控制移工流動，當 ARC 失效時，移工的數位身分、健保、銀行帳戶、勞工保險全部失效。TIWA 與台灣國際勞工協會 2024 統計記錄 ~5000 件相關案例<sup>27</sup>。

### 3.5 第五類「自願不使用者」的窮盡性檢查

第五類候選；「自願不使用者」（公共意願排除，例如基於資料保護考量主動拒絕使用 wallet）；經文獻檢索後判定不需獨立列為結構層級。理由是德國聯邦憲法法院 1983 年 Volkszählungsurteil（BVerfGE 65, 1）已建立「資訊自決權」（informationelle Selbstbestimmung）作為基本權利，保障消極不使用<sup>28</sup>。把自願不使用者與結構排除混合，會稀釋兩者各自的規範力道；前者是基本權利的行使（拒絕資料處理），後者是基本權利的剝奪（被擋於發證體系之外）。

NIST FRVT 2022 演算法錯認問題作為窮盡性的開放性留口暫歸入 (b) 識讀排除擴展，但未來證據累積足夠應升格為獨立的演算法排除類型。

## 4. 政治哲學基礎：Civic proof 作為前置權利（學理位階主張）

從第 3 章被排除人群的實證盤點，本章演繹 civic proof 取得權在政治哲學上的位階主張。論證的核心是：civic proof 具有作為橫貫 Marshall 1950 公民權三層的前置條件之學理位階主張空間，借自 ICCPR Art 16 法律人格權的論述傳統，命名為「precursor right」（前置權利）。本文以此作為**學理位階主張與制度義務框架**，不主張其已具成文公約權利地位。

### 4.1 Marshall 三層公民權與 civic proof

T.H. Marshall 在 1950 年 *Citizenship and Social Class* 把公民權分為三層。公民層為法律之前的自由與平等（civil rights，包括契約自由、訴訟權、財產權）、政治層為參政權（political rights，包括投票與被選舉權）、社會層為經濟福祉與基本生活（social rights，包括教育、健康、社會保險）<sup>29</sup>。三層按歷史順序依次建立，但在規範上互為前提：政治層的有效行使預設公民層的法律平等，社會層的實現預設公民層與政治層的制度承認。

把 Marshall 三層套到當代數位化的公共生活，civic proof 在每一層都扮演進入該層權利的「實質可行能力」前提（capability prerequisite）：

- **公民層**，簽訂租賃契約需要身分驗證、銀行開戶需要 KYC、訴訟需要證明當事人身分。當這些流程從紙本實體驗證轉為 wallet 數位驗證，無法取得 civic proof 等同於失去契約能力。
- **政治層**，投票需要選民登記、連署需要身分核對、政黨黨員資格需要資料管理。當選舉行政或政治參與工具轉為 wallet 介面（如 Estonia i-Voting、加州 Vote-by-Mail 系統），civic proof 取得失敗等同於失去政治參與能力。
- **社會層**，申請社會保險、領取退休金、就學註冊、就醫、長照給付。當這些社會福利轉為 wallet 介面（如台灣 TW DIW 的長照給付請領、印度 Aadhaar 強制連結 PDS），civic proof 取得失敗等同於失去社會保障。

這個對應顯示 civic proof 在三層之間具有作為「前置條件」的學理位階主張空間，與三層中任一層的權利並非結構同型；本文據此提出 precursor right 學理位階主張，不主張其已被任一既有公約直接認定。借自 ICCPR Art 16「人人在法律之前有被承認為人的權利」（right to recognition as a person before the law）<sup>30</sup>之論述傳統作為類比錨點，本文把 civic proof 取得權命名為「precursor right」（前置權利）。

### 4.2 Sen capability approach 的延伸

Amartya Sen 在 *Development as Freedom* (1999) 與 *The Idea of Justice* (2009) 提出 capability approach，把權利定義為「實質可行能力」（substantive capabilities），而非僅是形式自由<sup>31</sup>。一個人擁有投票權，但若無法到達投票所、無法理解選票、無法登記為選民，則該權利在實質上不存在。Sen 的論證對 civic proof 的延伸非常直接：civic proof 取得失敗使三層公民權的「實質可行能力」消失。Martha Nussbaum 在 *Creating Capabilities* (2011) 進一步把 capability approach 制度化為十項「核心可行能力」清單，其中「affiliation」與「control over one's environment」直接涵蓋 civic proof 場景<sup>32</sup>。

Elizabeth Anderson 在 *Ethics* 1999 年的 "What Is the Point of Equality?" 提出 relational equality 概念，把平等定義為「公民之間的平等地位關係」，反對僅以分配結果衡量正義<sup>33</sup>。當 civic proof 取得失敗使部分公民被「行政可見性」剝奪，他們與其他公民的平等地位關係被破壞；這個地位關係的破壞不能用事後的補償取代。

### 4.3 與其他政治哲學家的對話

Philip Pettit 1997 年 *Republicanism* 從共和主義傳統論證自由作為「免於支配」（freedom as non-domination），與羅馬法傳統的 *libertas* 概念相連<sup>34</sup>。當公民被排除於 civic proof 體系之外，他們在公共行動中被任意支配的風險上升，這與共和主義的核心關切直接衝突。Iris Marion Young 2000 年 *Inclusion and Democracy* 把民主重新定義為「結構性 inclusion」，反對僅以多數決衡量民主品質<sup>35</sup>。Nancy Fraser 2007 年的 transnational public sphere 論證跨國公共領域需要對 civic proof 的多重承認<sup>36</sup>。

Jürgen Habermas 在 1962 年 *Strukturwandel der Öffentlichkeit*（《公共領域的結構轉型》）與 1992 年 *Faktizität und Geltung*（1996 年 MIT 英譯為 *Between Facts and Norms*，《事實性與效力》）論證公共領域的成立需要「communicative competence」，而 civic proof 是進入該 competence 的物質基礎<sup>37</sup>。

UN Special Rapporteur Philip Alston 2019 年的 *Digital welfare state* 報告（UN A/74/493）從人權法角度直接論證，數位化的福利國家若不保障 civic proof inclusion，會構成基本人權的系統性侵犯<sup>38</sup>。

### 4.4 反論處理

第一個反論是 Banerjee & Duflo 在 *Poor Economics* (2011) 與 *Good Economics for Hard Times* (2019) 主張 universal ID 的經濟效益（金融包容、社會福利分配效率）是工具性的，不應與基本權利等同；把 civic proof 提升到基本權利位階可能弱化權利語言本身<sup>39</sup>。Banerjee, Duflo, Imbert, Mathew, Pande 2020 與 Muralidharan, Niehaus, Sukhtankar 2016 的兩個 RCT 提供了印度 Aadhaar 在 leakage 改善上的「淨包容效益」實證<sup>40</sup>。

本文的回應是：兩個 RCT 的 outcome variable 是「淨 leakage 改善」與「整體配給效率」，這些數字成立。但本文 Sub-Arg 1 與第 3 章 Khera 系列記錄的是「尾端排除致死」outcome variable，兩者並不互斥；可以同時 (i) leakage 改善 + (ii) 尾端排除致死。Banerjee/Duflo 的論證是對的，但他們論證的議題與本文不同。把 civic proof 提升為 precursor right 並非否認其工具性效益，而屬於在工具性效益之上加一層底線保障，尾端不可被致死。

第二個反論是 Eric Posner & Adrian Vermeule 2010 *The Executive Unbound* 主張當代行政國家的決策需要彈性，把 civic proof 鎖定為基本權利會限制政府靈活回應新技術<sup>41</sup>。本文的回應是：把 civic proof 認定為 precursor right 並未要求政府用特定技術實現它，僅要求政府滿足結果條件（所有人都能取得）。技術選擇的彈性保留在憲法基本權利保護之內。

第三個反論是 Florian Hoffmann 2017 對 relational equality 的批評，主張可能存在「過度法律化」的風險；把所有公共參與資格都納入基本權利會稀釋憲法層級的特殊性<sup>42</sup>。本文的回應是：civic proof 屬於橫貫三層公民權的前置條件，並非「所有公共參與資格」；這個前置性質本身就決定了它的憲法層級特殊性。

第四個反論是 Lawrence Lessig 1999 *Code* cyber-libertarian 立場主張 wallet 普及應透過市場 vs. 國家退出，而非把入場權升級為基本權利<sup>43</sup>。本文的回應是：當 wallet 已成為進入公共生活的事實必要通道，市場退出無法滿足結果條件；市場主導的 wallet 設計會把弱勢群體留給「自由選擇不使用」的 fiction，這個 fiction 在實質上等於排除。

## 5. 國家義務的三層保障結構

若 civic proof 是基本權利，國家義務必須包含三層保障結構：程序保障、實質保障、制度保障。三層分類在不同法域有不同承載結構，本文採此分類時須明示其為「分析性類型學」（analytical typology），非單一法域的法律術語直接移植。

### 5.1 三層分類的跨法域承載

在普通法系（英美）傳統中，三層對應 procedural due process（程序正當）、substantive due process（實質正當）、institutional design（制度設計）三組可訴主張。在大陸法系（特別是德國基本法傳統）中，對應 formelle Rechtsstaatlichkeit（形式法治）、materielle Rechtsstaatlichkeit（實質法治）、Schutzpflicht（國家保護義務）三組憲法概念<sup>44</sup>。德國憲法另有 Institutionsgarantie（制度性保障）的 Carl Schmitt-Häberle 傳統，與英美意義不完全等同。東亞憲政（含台灣）採「制度的保障」傳統，與大陸法系延續性較高<sup>45</sup>。

法律根據包括：UDHR Art 6（法律人格權）、ICCPR Art 16、ICESCR、CRPD Art 9（Accessibility）+ Art 12（Equal recognition before the law）、CRC Art 7（出生登記權）、1954 Convention Art 27/28（無國籍者的身分證件與旅行證件義務）。UN General Comments 提供具體解釋，特別是 No. 3（1990）國家義務的本質、No. 9（1998）ICESCR 的國內適用、No. 12（1999）食物權<sup>46</sup>。

### 5.2 程序保障

程序保障要求國家提供 wallet 之外的替代路徑（紙本 / NFC 卡 / 客服 / 委任代理 / 印章授權），且替代路徑不得有歧視性附加條件。具體條款建議三類：

**P1 法定義務條款**，所有 civic proof 服務不得僅提供 wallet 介面；必須同時提供至少一條非 wallet 替代路徑。EU EAA Directive (EU) 2019/882（European Accessibility Act）+ EU EECC Directive (EU) 2018/1972（Universal Service Directive 後續）提供了部分歐盟法基礎<sup>47</sup>。

**P2 等效性條款**，替代路徑與 wallet 在法律效力上等同，且實質效率不歧視。本文採 Sub-Arg 5 的修訂限定，把等效性區分為「形式等效」（紙本與 wallet 在法律效力上同位階）與「實質等效」（紙本在實際使用流程中不被附加歧視性處理時程或費用）。實質等效須含量化指標：替代路徑處理時程不超過 wallet 路徑的 1.5 倍；駁回率不高於 wallet 路徑的 1.5 倍。這些量化指標屬政策建議數，須立法協商<sup>48</sup>。

**P3 反歧視條款**，替代路徑不得有附加費用、處理時程歧視等。違反者公民可循行政訴訟救濟。

### 5.3 實質保障

實質保障要求國家對無證件者、無國籍者、流亡者提供「最小可用 civic proof」，即使他們不滿足傳統公民身分條件。本文採 Sub-Arg 5 的修訂限定，把「最小可用 civic proof」拆成兩種人群：

**法律無國籍者**（受 1954/1961 公約保護，截至 2023 年底約 440 萬人）<sup>49</sup>：依 1954 公約 Art 27（identity papers）+ Art 28（travel documents）已建立締約國對其領土無國籍者的最低證件義務；UNHCR 2014 *Handbook on Protection of Stateless Persons* 將此義務具體化（須注意 Handbook 屬論述延伸而非條約直接覆蓋，主要處理身分認定程序，不直接處理數位 wallet）。「最小可用 civic proof」應為這些既有義務的數位時代延伸，與 UNHCR Digital Identity for Refugees programme（2018 年起，截至 2024 年覆蓋約 11.4M 人）對接<sup>50</sup>。需要明示，UNHCR 計畫的「使用者主導」部分極小，主要採中央化 BIMS 設計，下游 writer 不可把它寫成「已實現」狀態。

**de facto 無 ID 者**（不受任何國際公約直接覆蓋，World Bank ID4D 估計約 8.5 億人）<sup>51</sup>：含未登記出生兒童、被吊銷證件的流亡者、未登記移工、街友失去固定地址者等。對這些人群提供「最小可用 civic proof」沒有國際公約的直接基礎，須仰賴各國憲法基本權與行政法。

兩種人群的 trust framework 不同：法律無國籍者由 UNHCR / IOM 主導；de facto 無 ID 者須各國國內機制（社會福利機關、移民署、警政系統）+ 民間 NGO 共同發展。

「最小可用 civic proof」的雙防線：

- **不可替代國籍授予**，最小可用 civic proof 不能取代國籍取得權，否則會永久化無國籍狀態。1961 公約對國家「減少無國籍」的義務必須優先於 wallet 政策議程。
- **居住升級條款**，最小可用 civic proof 必須伴隨居住升級至完整公民身分的清楚路徑。沒有升級路徑的最小可用 civic proof，會被某些國家視為「永久化無國籍」工具。

城市級 sanctuary card 制度（San Francisco Municipal ID 自 2009 年、New York City IDNYC 自 2015 年、Los Angeles CitiID、Chicago CityKey）提供另一條實質保障路徑，但本文採 Sub-Arg 5 的修訂限定 5：定位為「在聯邦保護不足時的城市級回填」；穩定模板地位不成立<sup>52</sup>。NYC IDNYC 在 2017–2020 年面臨 ICE 資料調取壓力，多次訴訟與和解顯示這些城市級制度在聯邦政權更迭下的法律可持續性受直接影響。

### 5.4 制度保障

制度保障要求基礎設施設計階段必須包容低數位識讀、共用裝置、無智慧型手機等實際使用情境，不得預設「智慧型手機 + 個人擁有 + 高識讀率」為基準。具體機制是強制 inclusion impact assessment（IIA），仿環境影響評估（EIA）與資料保護影響評估（DPIA）。

IIA 的三層設計：

- **L1 設計階段強制 IIA**，任何 wallet 系統部署前必須執行 IIA，仿 EAA Directive 2019/882 的 conformity assessment 程序<sup>53</sup>
- **L2 第三方 audit 機制**，IIA 報告須由獨立第三方 audit，不能由部署單位自行宣告合規
- **L3 受影響人群參與權**，IIA 設計與 audit 過程須有民間 NGO + 受影響人群（含失能 / 失智者代表、無國籍者代表、年長者代表、移工代表）的參與權

IIA 的 box-ticking 退化風險必須明示。Wright & De Hert 2012 *Privacy Impact Assessment* 對 PIA 的批判文獻已詳細記錄這個風險。當 PIA 變成程序合規文件而非實質評估，其保護效果會大幅下降<sup>54</sup>。Diver & Schafer 2017、Edwards 2018 對 DPIA 的後續批判延續這個關切<sup>55</sup>。本文的三道防腐設計（強制公開、第三方 audit、受影響人群參與權）為部分緩解（partial mitigation），承認沒有任何單一機制能完全免疫。可能的最終背書是法律後果：當 IIA 嚴重失敗導致排除，受害者可循行政訴訟或憲法訴願追究國家責任。

### 5.5 「結構性褫奪公民資格」措辭強度光譜

當國家未履行三層保障義務，國家不履行的後果在嚴重度光譜上有三層程度：

- **最強層**，「結構性褫奪公民資格」（structural deprivation of citizenship）；對應 arbitrary deprivation of nationality（UN Human Rights Council Resolution 20/5, 2012；Resolution 32/5, 2016；UN A/HRC/25/28, 2013，這些屬於非拘束性決議，但仍為人權法解釋的權威指引）。僅用於 Aadhaar 致死案、Windrush 失國籍案等極端情境<sup>56</sup>
- **中層**，「累積性排除」（accumulated exclusion）；適用於多次失敗導致的綜合排除，如印度 PDS 整體系統的 leakage 改善但 exclusion error 上升、UK Universal Credit 系統性排除無數位識讀者
- **較輕層**，「行政可見性喪失」（administrative invisibility，Alston 2019 用語）；適用於系統性可見度下降但未到剝奪公民資格，如澳洲 Robodebt、日本 my number card 對年長者的設計排除

下游 writer 在每個失敗案例先判斷嚴重度層級再選詞，避免把所有案例都用最強層措辭描述，否則會稀釋語言精度。

## 6. Wallet 三重預設拆解：共用裝置與委任代理

第 3 章與第 5 章從規範與實證兩面建立 inclusion 的基本權利位階；本章用共用裝置與委任代理兩個邊界情境，反向證明 wallet 工程主流預設本身需要被檢驗為規範偏誤。

Wallet 工程的主流預設由三重結構組成：個人擁有（personal ownership of device）、個人識別（individual biometric / behavioural binding）、個人私鑰（individually held key material）。共用裝置主要打破 (1) 與 (2) 的綁定；委任代理主要打破 (3) 與「行使主體」的綁定。這兩個情境屬於全球至少十億人的日常實況，並非邊緣現象<sup>57</sup>。

### 6.1 共用裝置情境

GSMA 2024 報告 Sub-Saharan Africa 女性 23% 屬於 non-owner shared user（非主要持有者）、South Asia 為 19%；ITU 2024 估全球至少 26 億未連網人口，其中相當比例的近用模式經由家戶共用達成<sup>58</sup>。這些數字使共用裝置在規範上不能被當作「邊緣使用情境」。

Wyche 等人在 ICTD/CHI 系列研究中記錄肯亞奈洛比郊區家庭的共用裝置實況：「Sharing this with the family」（2018）顯示單一智慧型手機作為 6 人家庭通訊工具的常態，wallet 設計的「個人擁有」預設直接與這些社會結構衝突<sup>59</sup>。Sambasivan 等人在 SOUPS 2018 的「Privacy is not for me, it's for those rich women」記錄南亞女性的手機使用受到家庭男性成員的監管，個人識別與個人私鑰預設在這個情境下不僅排除，更構成性別權力結構的延伸<sup>60</sup>。Donner 2015 *After Access* 系統性分析了「after access」階段（取得行動連線後的實際使用）的共用模式<sup>61</sup>。

### 6.2 委任代理情境

WHO 2024 估全球失智人口 5500 萬（超 60% 在低中收入國家）<sup>62</sup>。台灣 65 歲以上失智盛行率約 7.9%，對應失智人口超過 30 萬。失能 / 失智 / 文盲 / 兒童監護等委任代理場景在規範與實務上都需要 wallet 工程的特殊設計。

委任代理的法律基礎在不同法域有不同承載：英美普通法的 power of attorney、大陸法系的 Vollmacht、台灣 2019 民法意定監護新制（民法第 1110 條）<sup>63</sup>。但 wallet 工程並未提供與這些法律框架對齊的設計原語。當失智長者由家屬代行使用 TW DIW 領取長照給付，工程上家屬的代行被歸類為「非預期使用」（unintended use），而非合法的委任代理。

CRPD Art 12（Equal recognition before the law）+ General Comment No. 1（2014）明確要求逐步廢除替代決策（substituted decision-making），代之以 supported decision-making：失能者保有完整法律行為能力，由「支援者」（supporter）協助決策而非代替決策<sup>64</sup>。這個原則對 wallet 工程是直接挑戰；supported decision-making 的工程化迄未完成。台灣 2019 民法意定監護新制是這個國際趨勢的部分回應，但工程實作仍未跟上。

### 6.3 三重預設的工程修補

Sub-Arg 4 提出「制度保障」具體化為三項可工程的要求：

1. **設計階段強制 IIA**，仿 EAA Directive 2019/882 conformity assessment 程序
2. **Multi-tenant + delegated key custody 的標準化**，W3C DID Core 1.0 與 EUDI Wallet ARF 已有部分原語<sup>65</sup>，但「家戶代理」的法律—工程同步建構迄未完成
3. **「代理鏈」可被審計**，家戶 / 機構 / 監護人 / 社工的代理關係必須可被法律與工程同時驗證

三項缺一即未盡 inclusion-by-design。

### 6.4 反論處理

第一個反論主張智慧型手機普及率持續上升（GSMA 2024 全球達 73%），共用裝置情境會在 5–10 年內自然消失，因此不應作為設計核心約束<sup>66</sup>。本文的回應是：GSMA 縱貫資料顯示共用率下降速度遠慢於 ownership 增速，且失能 / 失智人口同步上升使委任代理規模不會隨手機普及而消失。WHO 2024 預測全球失智人口將從 5500 萬增至 2050 年的 1.39 億<sup>67</sup>。

第二個反論主張 wallet 已有 multi-tenant 設計（如 EUDI Wallet ARF 2024 的 multi-profile 規格），共用裝置問題已被工程方案部分解決。本文的回應是：multi-tenant 規格存在但實作極不成熟；EUDI Wallet large-scale pilots（POTENTIAL、NOBID、EWC、DC4EU）2024–2025 年的中期評估報告尚未公開「多 tenant + 跨家庭代理」的實作驗證<sup>68</sup>。

第三個反論主張委任代理場景應該透過監護法處理，wallet 工程不應重新發明法律框架。本文的回應是：法律框架（power of attorney、意定監護）已存在，問題是 wallet 工程未提供對齊這些法律框架的設計原語。工程未重新發明法律；其工作為把既有法律的條件編碼為可審計的密碼學流程。

第四個反論主張對失能 / 失智者的「自主性」要求過嚴會造成「過度照護」（paternalism）的反向問題；CRPD Art 12 supported decision-making 原則可能與委任代理直接衝突<sup>69</sup>。本文的回應是：supported decision-making 與 substituted decision-making 屬不同範疇；前者是「支援當事人決策」，後者是「替當事人決策」。CRPD 廢除的是後者，不是前者。Wallet 工程需要對齊的是 supported decision-making 的支援者結構，而非取消代理。

## 7. 三層具體政策條款

第 5 章建立了三層國家義務的法理基礎；第 6 章用反例補強了制度保障的必要性；本章合成具體政策條款，含 implementation roadmap 與政治阻力分析。

### 7.1 程序保障條款

**P1 法定義務條款**（時程 12–24 月）：所有 civic proof 服務不得僅提供 wallet 介面，必須同時提供至少一條非 wallet 替代路徑（紙本 / NFC 卡 / 客服 / 委任代理 / 印章授權）。立法路徑為各國國會修訂行政程序法或專法。EU 法基礎為 EAA Directive 2019/882 + EU EECC Directive 2018/1972；台灣建議路徑為修訂《電子簽章法》或制定《數位身分服務法》。政治阻力來自部會「數位優先」立場與成本壓力，但已有 EAA Directive 先例。

**P2 等效性條款**（時程 24–48 月）。替代路徑與 wallet 在法律效力上等同（形式等效），且實質效率不歧視（實質等效）。實質等效須含量化指標如下，時程不超過 1.5 倍、駁回率不高於 1.5 倍。立法須含可訴性條款，使違反者可循行政訴訟。政治阻力來自量化指標的具體數字（1.5 倍是政策建議數），須立法協商。

**P3 反歧視條款**（時程 12–36 月）：替代路徑不得有附加費用、處理時程歧視等。配套申訴管道為各國資料保護機關（DPA）+ 行政法院。

### 7.2 實質保障三軸並行

**自我主權識別符（W3C DID）軌道**（時程 24–60 月）：以 W3C DID Core 1.0 + Verifiable Credentials 2.0 為標準起點，發展不依賴國籍根的 trust framework<sup>70</sup>。技術層已成熟但治理層未定。OpenWallet Foundation 2024 governance 文件提供了部分藍圖<sup>71</sup>。

**UNHCR / IOM / 民間 NGO 共同主導 trust framework**（時程 36–72 月）：對法律無國籍者，UNHCR Digital Identity for Refugees programme 應從「中央化 BIMS」逐步向「使用者主導 + W3C DID」轉型。當前覆蓋約 11.4M 人，但「使用者主導」部分極小。IOM Migration Governance Indicators 提供另一條軌道<sup>72</sup>。

**城市級 sanctuary card 回填**（時程 12–48 月）：定位為「在聯邦保護不足時的城市級回填」；穩定模板地位不成立。NYC IDNYC 2017–2020 年的 ICE 資料調取壓力為政治可持續性的具體警示<sup>73</sup>。

「最小可用 civic proof」六層密碼學底線：(1) DID + (2) Verifiable Credentials + (3) 撤銷機制 + (4) trust framework + (5) threshold cryptography（多方持鑰）+ (6) 安全傳輸層。每層都有可被工程化的標準起點。

### 7.3 制度保障 IIA 三層設計

**L1 設計階段強制 IIA**（時程 24–48 月）：仿 EAA Directive 2019/882 conformity assessment 程序，所有國家發行或認證的 wallet 系統部署前須提交 IIA 報告。台灣建議路徑為由數位發展部訂定行政命令，由內政部、衛福部、勞動部、教育部按業務範圍執行。

**L2 第三方 audit 機制**（時程 36–60 月）：IIA 報告須由獨立第三方 audit。可參考環評（EIA）的 audit 制度，但須避免 EIA 在台灣的「橡皮圖章化」前車之鑑。Treasury Board of Canada 2019 *Directive on Automated Decision-Making* 提供了較成熟的第三方 audit 模型<sup>74</sup>。

**L3 受影響人群參與權**（時程 36–72 月）：IIA 設計與 audit 過程須有民間 NGO + 受影響人群的參與權。仿 CRPD「Nothing About Us Without Us」原則，含失能 / 失智者代表、無國籍者代表、年長者代表、移工代表<sup>75</sup>。

**三道防腐 vs Box-ticking 退化**，強制公開（IIA 報告須公開可被檢視）+ 第三方 audit + 受影響人群參與權三道防腐為部分緩解（partial mitigation），不能完全免疫。可能的最終背書是法律後果；當 IIA 嚴重失敗導致排除，受害者可循行政訴訟或憲法訴願追究國家責任。

### 7.4 政治阻力分析

三組政治阻力源各有不同邏輯：

**部會利益**，「數位優先」立場（如台灣數位發展部過去推動 TW DIW 採高度數位化路徑）會抗拒 P1 法定義務條款。協調機制：跨部會協調 + 民意團體施壓。

**廠商利益**，wallet 廠商與系統整合商會抗拒實質等效（P2）量化指標與 IIA 強制（L1），因為這些會增加部署成本。協調機制：廠商連帶責任條款（與 article 14 cross-jurisdictional-redress-gap 的三軸並行政策接合）。

**Open-source 社群**，去中心化 wallet 社群（Polygon ID、ENS、Worldcoin 等）會抗拒 P1 法定義務（會被認定為對開源元件的監管），但對實質保障 W3C DID 軌道有結構性支持。協調機制：對 Tier 3 中介廠商（純通訊轉送元件）採低監管，對 Tier 1 提供者採高責任。

## 8. 失敗案例 Process Tracing

本章對 5 個已發生的失敗案例做 process tracing，每個案例先列出對應的排除分類，再追蹤救濟過程的關鍵節點，最後標出對政策合成的啟示與三層義務違反的具體層次。

**案例一，印度 Aadhaar PDS 致死案（2017–2024）**。Aadhaar 強制連結 PDS 食物配給後，部分受益人因 Aadhaar 連結錯誤、生物識別失敗、行政人員疏忽被拒於配給站之外，最終死於饑餓<sup>76</sup>。Khera 系列累計記錄至 2024 年共 ~30 件 Jharkhand、Bihar、Karnataka 致死案。對應分類為 (c) 證件排除 + (d) 制度排除。嚴重度光譜層級為「結構性褫奪公民資格」（最強層）。三層義務違反：程序（無有效替代路徑）+ 實質（無「最小可用 civic proof」對 de facto 無 ID 者）+ 制度（無 IIA）三層皆違反。對政策合成的啟示為，強制連結設計必須有 IIA 強制 + 替代路徑強制；單一 IT 系統決定民眾能否得到食物的設計本身即為制度保障違反。Banerjee/Duflo 2020、Muralidharan 2016 RCT 的「淨包容效益」結論在 outcome variable 層次成立（leakage 改善 + 配給效率上升），但與「尾端排除致死」的本案 outcome variable 不互斥，雙方論證共存<sup>77</sup>。

**案例二，UK Windrush（2018）**。英國內政部 hostile environment policy（2012 年起）要求在租屋、就業、健保、教育各環節進行身分驗證，導致長期合法居英的英聯邦移民被認定為非法居留<sup>78</sup>。對應分類為 (c) 證件排除。嚴重度光譜層級為「結構性褫奪公民資格」（最強層）。三層義務違反：程序（無有效替代路徑承認 Windrush 一代的歷史身分）+ 實質（無「最小可用 civic proof」對失去檔案者）。UK Home Office (2020) *Windrush Lessons Learned Review* 認定該政策造成「結構性歧視」<sup>79</sup>。對政策合成的啟示為，Windrush 案直接示範三層義務全面失敗的後果，且政府補償機制至 2024 年仍處理不全；程序救濟也未充分。

**案例三，印度 PDS 整體系統**。Aadhaar 強制連結 PDS 後，leakage 改善（Banerjee 等人 RCT）但 exclusion error 上升（Khera 等人系列）<sup>80</sup>。對應分類為 (d) 制度排除。嚴重度光譜層級為「累積性排除」（中層）。三層義務違反：制度保障（無 IIA、無第三方 audit、無受影響人群參與）。對政策合成的啟示為，本案是 IIA 必要性的最直接證據；若強制連結設計階段執行 IIA，exclusion error 上升趨勢會被預警。

**案例四，UK Universal Credit（2017–至今）**。Department for Work and Pensions 全面數位化福利申請設計（「digital by default」）排除無數位識讀者<sup>81</sup>。對應分類為 (b) 識讀排除。嚴重度光譜層級為「累積性排除」（中層）。三層義務違反：程序（替代路徑存在但歧視性附加條件）+ 制度（無 IIA）。對政策合成的啟示為，「digital by default」設計違反 P2 等效性條款的實質等效要求；替代路徑（電話 / 紙本）的處理時程顯著長於數位路徑，駁回率更高。

**案例五，台灣失能 / 失智者數位身分服務**。行動自然人憑證皮夾預設個人擁有，失能 / 失智者實際上靠家屬代行<sup>82</sup>。對應分類為 (b) 識讀排除 + 委任代理。嚴重度光譜層級為「行政可見性喪失」（較輕層）。三層義務違反：制度保障（無 IIA、無 multi-tenant 設計、無對齊 supported decision-making）。對政策合成的啟示為，CRPD Art 12 + 台灣 2019 意定監護新制提供了法律基礎，但 wallet 工程未對齊；本案直接示範 inclusion-by-design 的三項可工程要求（IIA、multi-tenant、代理鏈可審計）的必要性。

5 個案例的共同模式是：失敗屬於 wallet 工程主流預設與既有制度不對齊的結構性後果，並非個別事件。從 Aadhaar 致死的最強層到台灣失能者的較輕層，嚴重度光譜的三層都需要三層國家義務同步保障。

## 9. 反事實壓力測試

本章用 4 個反事實情境壓力測試第 7 章的政策路徑。

**CF1，高雄 78 歲失智長者 + 女兒委任代理**。一位住在台北市的 84 歲失智長者由 65 歲女兒代為使用「行動自然人憑證皮夾」處理長照給付請領、退休金領取、健保卡換發。當女兒因故住院 3 個月，長者在這段期間如何維持基本身分驗證？目前可循的替代路徑包括 (i) 紙本書面長照申請（時程約 4–6 週）、(ii) 委請社工協助、(iii) 委任其他親屬代行（須意定監護登記）。政策合成的回應為，本案直接命中第 6 章的三項可工程要求（IIA、multi-tenant、代理鏈可審計）；當前架構在程序保障 P1 上有替代路徑（紙本 + 客服）但 P2 實質等效不足（時程顯著長），制度保障 L1 IIA 未執行。改善路徑為，意定監護登記與 wallet 工程的法律—工程同步建構（CRPD Art 12 + 台灣民法第 1110 條）<sup>83</sup>。

**CF2，羅興亞無國籍者持 UNHCR BIMS 數位憑證 + 孟加拉境內被拒**。羅興亞無國籍者持 UNHCR BIMS 數位憑證在孟加拉境內被某 wallet verifier 拒絕（如食物配給、SIM 卡實名登記、跨境匯款 KYC）。受害者目前可循的救濟路徑包括，(i) UNHCR case management（人道援助性質，非法律救濟）；(ii) 孟加拉國家人權委員會（無強制執行力）；(iii) 國際難民法律援助組織（政治倡議性質）。對應分類為 (c) 證件排除（無國籍特殊情境）。嚴重度光譜層級為「結構性褫奪公民資格」（極端層，前置條件就缺失）。政策合成的回應為：本案凸顯「最小可用 civic proof」對法律無國籍者的緊迫性，但須與 1954 公約 Art 27/28 對接，並建立「不可替代國籍授予 + 居住升級條款」雙防線。當前 UNHCR Digital Identity for Refugees 計畫覆蓋 11.4M 人，但「使用者主導」部分極小，須與 OpenWallet Foundation governance + W3C VC/DID 規範並列檢討<sup>84</sup>。

**CF3，台灣 DIW 排除 8 萬失智長者 + IIA 後續處置**。台灣立法承認 civic proof 取得權為基本權利並要求數位發展部執行 inclusion impact assessment。當 IIA 報告指出 TW DIW 排除超過 8 萬名失智長者（依 WHO 2024 + 台灣 65 歲以上失智盛行率 7.9% 估算），應如何修補？三條路徑的優劣比較：

- **路徑 A（立法）**，修訂《電子簽章法》或制定《數位身分服務法》，把 IIA 與替代路徑寫入法律。優：穩定性高、可訴性強。劣：時程 24–48 月，政治阻力大。
- **路徑 B（行政命令）**，數位發展部訂定行政命令，內政部、衛福部執行。優：時程 6–12 月，靈活。劣：政府更迭可廢除，可訴性弱。
- **路徑 C（行政指導）**，數位發展部發行「最佳實務指引」。優：時程 3–6 月，無政治成本。劣：無強制力，部會可選擇性遵守。

本文建議：B + A 雙線並進；B 短期實施 IIA + 替代路徑強制，A 中期立法承認 civic proof 取得權為基本權利。8 萬人估算屬政策建議數，需內政部資料佐證<sup>85</sup>。

**CF4，保加利亞 EUDIW 強制上線 + 替代路徑不完整**。EUDI Wallet 在 2027 年強制上線，但歐盟某成員國（如保加利亞）未提供完整紙本替代路徑。受害公民透過 ECtHR + EU Commission infringement 程序並行救濟。ECtHR 路徑援引 Art 8（隱私）+ Art 14（不歧視）+ Protocol 1 Art 1（財產權，若涉及福利請領）。EU Commission infringement 路徑依 EAA Directive 2019/882 + EU EECC Directive 2018/1972 起訴成員國未轉換或執行不全<sup>86</sup>。兩條路徑在時程與救濟上差異大：ECtHR 平均 5–7 年，但有個案救濟；infringement 平均 2–4 年，且可導致跨國法律修改。本案直接驗證 P1 法定義務條款的可訴性必要；沒有可訴性條款，等效性就退化為政治承諾。

## 10. 與博論章節的接合

本文是博論第 14 章政策議程章核心，特別涉及 14.4 civic proof inclusion rights 段落。對博論其他章節與 article 序列的延伸：

對博論 Ch12 採購政治經濟章的接合：本文的「替代路徑強制 + 等效性量化指標 + IIA」與 Ch12 的「採購語言把權利底線翻成驗收規格」有結構同構性；兩者都試圖把規範性權利翻譯為可被工程驗收的條件。

對博論 Ch10 平台化呈現層的接合：本文 Sub-Arg 4 的 wallet 三重預設拆解，與 Ch10 的 wallet / OS / browser as gatekeeper 直接連動。Tier 1 提供者（Apple Wallet、Google Wallet、各國 EUDI Wallet 國家發行版）承擔嚴格責任 + 強制責任保險的論點，本文補充為「並必須執行 IIA」。

與 article 序列的橫向連動：

- 與 article 01（accountability without identification）的接合：accountable pseudonymity 對 inclusion 場景的特殊應用，特別是失能 / 失智者由家屬代行的問責結構；當代行者違反信託義務，threshold opening 機制如何適用？
- 與 article 02（civic-proof concept positioning）的接合：civic proof 4 條件（anonymity / unlinkability / verifiability / accountability）在 inclusion 層次的具體實作；共用裝置情境下 unlinkability 如何維持，委任代理情境下 accountability 如何分配？
- 與 article 03（digital-association-empirical-test）的接合：W1（持續性假名）/ W2（群體界線可驗證）/ W3（內部問責）三道牆對 inclusion 場景的特殊應用；失智者組織的社群參與如何同時滿足三道牆與 supported decision-making？
- 與 article 14（cross-jurisdictional-redress-gap）的接合：跨境救濟空白與無國籍者「最小可用 civic proof」共同處理；三軸並行政策合成的實質保障層直接餵給本文 Sub-Arg 5。
- 與 prompt 16（civic-ai-agent-delegation-limits）的接合：委任代理可以是 AI agent 嗎？本文第 6 章的 supported decision-making + 代理鏈可審計直接餵給 prompt 16。
- 與 prompt 11（wallet-as-essential-facility）的接合：Tier 1 提供者的 essential facility 認定 + IIA 強制是 prompt 11 的政策化具體版本。

## 11. 誠實邊界與開放問題

本文的論證需要明示其邊界。

**論證強度差異**，歸納（第 3 章，強）、演繹（第 4 章，強，但 precursor right 法理位階屬學理推論）、溯因（第 5 章，中強，但三層分類在不同法域有不同承載結構）、反例（第 6 章，中）、政策合成（第 7 章，建議性，量化指標無實證來源）。

**時間性**，EUDI Wallet large-scale pilots 2025 年中期評估、UNHCR Digital Identity for Refugees 後續報告、台灣行動自然人憑證皮夾政策變更，會在未來 2–3 年內改變本文的證據基礎。

**地理性**，本文證據以台灣、歐盟、英國、印度、肯亞、Sub-Saharan Africa、South Asia 為主，對拉丁美洲、中東、東南亞（除新加坡）的覆蓋有限。

**特定議題**，「最小可用 civic proof」對法律無國籍者與 de facto 無 ID 者兩種人群的具體密碼學底線設計仍未有實證驗證；UNHCR Digital Identity for Refugees 11.4M 人覆蓋是中央化 BIMS，「使用者主導」部分極小。

**主要開放問題**，

- (Q1) 「最小可用 civic proof」對法律無國籍與 de facto 無 ID 兩種人群的具體密碼學底線是否相同？
- (Q2) 委任代理在 wallet 設計中是否就是 delegated authority 的擴展？或需要設計新的密碼學原語（如 threshold delegation）？
- (Q3) Wallet 的「multi-tenant」設計與「家戶代理」的法律地位如何協調？
- (Q4) IIA 的 box-ticking 退化能否透過三道防腐完全免疫？
- (Q5) 城市級 sanctuary card 在聯邦政權更迭下的法律可持續性能否標準化？
- (Q6) 「結構性褫奪公民資格」措辭是否需要新立國際公約承認？
- (Q7) NIST FRVT 2022 演算法錯認是否會在 2027–2030 年累積足夠案例升格為獨立排除類型？
- (Q8) Banerjee et al. 2020 RCT 的「淨包容效益」結論在 outcome variable 改為「尾端排除致死」時是否仍成立？
- (Q9) CRPD Art 12 supported decision-making 與台灣意定監護法 2019 修法的工程化路徑？
- (Q10) 「等效性條款」量化指標（時程 1.5 倍、駁回率 1.5 倍）的法律可訴性？

**訪談需求**，UNHCR Statelessness Section、弘道老人福利基金會 / 失智症協會、台灣移工服務組織（TIWA）、城市級 sanctuary card 程式（NYC IDNYC、SF Municipal ID）執行單位、World Bank ID4D 團隊、W3C VC Working Group、OpenWallet Foundation、ITU-T Focus Group on Digital Identity、EU EUDI Wallet large-scale pilots 協調者。

## 12. 條件性學術結論

本文的核心命題為，當 civic proof 成為進入民主基礎設施的事實必要通道時，其取得權具有作為「人權層級前置權利」（precursor right）的學理位階主張空間（Level 2 institutional entitlement 層）；本文不主張其已具成文公約權利地位（Level 3），僅以 Marshall 三層公民權結構與 UDHR Art 6 / ICCPR Art 16 法律人格權作為類比錨點。國家在 Level 2 制度義務上的三層保障結構（程序 / 實質 / 制度），缺一即可能在「結構性褫奪公民資格／累積性排除／行政可見性喪失」三層嚴重度光譜中構成對應狀態；具體嚴重度依該國憲法解釋、行政承載結構與替代路徑可用性而定。Wallet 工程的三重預設（個人擁有 / 個人識別 / 個人私鑰）本身須被檢驗為規範偏誤，共用裝置與委任代理在規範上不能被當作邊緣情境處理。設計階段強制 inclusion impact assessment 是最有效的預防機制，但有 box-ticking 退化風險，須配三道防腐（強制公開 + 第三方 audit + 受影響人群參與權）。對無國籍者的「最小可用 civic proof」須拆成法律無國籍與 de facto 無 ID 兩種人群分別處理，並對接 1954 公約 Art 27/28 + UNHCR 2014 Handbook，建立「不可替代國籍授予 + 居住升級條款」雙防線。

如果這些命題成立，則政策合成的合理路徑是三層條款並行：程序保障的 P1 法定義務 + P2 等效性量化指標（時程 1.5 倍、駁回率 1.5 倍）+ P3 反歧視條款；實質保障的 W3C DID 軌道 + UNHCR/IOM/NGO trust framework + 城市級 sanctuary card 三軸；制度保障的 IIA 三層設計（L1 設計強制 + L2 第三方 audit + L3 受影響人群參與權）。短期實施應從程序保障 P1 開始（時程 12–24 月），中期推進實質保障 W3C DID 軌道與制度保障 IIA L1（時程 24–48 月），長期推進實質保障 UNHCR/IOM/NGO trust framework 與制度保障 L2/L3（時程 36–72 月）。

這個結論是條件性的。其成立依賴於：(i) 各國憲法解釋承認 civic proof 取得權為憲法基本權；(ii) UNHCR Digital Identity for Refugees programme 從中央化 BIMS 轉型為「使用者主導 + W3C DID」；(iii) wallet 工程的 multi-tenant + delegated key custody 標準化進展；(iv) 主要 wallet 廠商（Apple、Google、各國 EUDI Wallet 發行者）願意接受連帶責任的法律框架。任一假設失敗都會大幅修改政策路徑。

**對博論的貢獻**，建立 Ch14 政策議程章 14.4 段落的核心，為 federated trust-list alliance、Indo-Pacific demo grants、procurement sandbox + supplier diversity 三個既有政策議題提供 inclusion 維度的規範基礎。

**對民主理論的貢獻**，把「公民權」從 Marshall 三層擴展為「公民權 + 前置權利」四層結構，並把 Sen capability approach 的「實質可行能力」延伸到數位化公共生活。

**對工程實作的指引**，wallet 廠商需在系統設計階段就考慮三重預設（ownership / identification / key custody）的修補需求，特別是 multi-tenant + delegated key custody + 代理鏈可審計三項可工程要求。

**對台灣讀者的關鍵警示**，在現行架構下，超過 30 萬失智長者、~5000 位被扣留 ARC 的移工、相當數量的長期未領取行動自然人憑證的年長者，已構成「行政可見性喪失」狀態。當 TW DIW 強制上線於更多政府服務（健保、長照、退休金、教育），這個狀態會升級至「累積性排除」。要改變這個現況，必須政府主動推動 IIA 強制 + 替代路徑強制 + 委任代理工程化三項措施。

---

## Revision Note（2026-05-16）

本文於修訂中將 precursor right 明確界定為**學理位階主張與制度義務框架**（Level 2 institutional entitlement），不主張其已具成文公約權利地位（Level 3 treaty-level human right）。本次修訂之依據為 civic-proof series Phase 1+2 audit + GPT-5.5-pro 二輪 audit（2026-05-16），審視標的為 rights-language overclaim 風險；具體修訂位置包含 frontmatter description、§1 導論核心命題段、§4 章節引言與 §4.1 末段、§12 條件性學術結論段。核心論證骨架（三層保障結構 / wallet 三重預設拆解 / IIA 三道防腐 / 雙防線最小可用 civic proof / 5 個失敗案例 / 4 個 CF 壓力測試）未動，僅在位階用語與條件性表述上做精確化。原版採用之「並列」「會構成」等強規範句式，修訂後改為「具有作為...的學理位階主張空間」「可能在嚴重度光譜上構成」之條件性表述。

## 參考資料

1. Regulation (EU) 2024/1183 of the European Parliament and of the Council of 11 April 2024 amending Regulation (EU) No 910/2014 (eIDAS 2.0). OJ L, 30.4.2024. 來源等級 A。
2. World Bank ID4D Global Dataset 2024 + ID4D Practitioner's Guide 2024. 來源等級 A。
3. UNHCR Global Trends 2023 + Statelessness Statistics 2024. UNHCR Refworld. 來源等級 A。
4. ITU *Measuring Digital Development: Facts and Figures 2024*. International Telecommunication Union. 來源等級 A。
5. GSMA Mobile Gender Gap Report 2024 + Mobile Internet Connectivity Report 2024. 來源等級 A。
6. WHO Global Dementia Statistics 2024. World Health Organization. 來源等級 A。
7. Marshall, T.H. (1950). *Citizenship and Social Class*. Cambridge University Press. 來源等級 A。
8. 博論草案 Ch 2，2.3 節「規範條件：anonymity / unlinkability / verifiability / accountability」(civic-proof-dissertation/dissertation-outline.md)。來源等級 A（內部文件）。
9. Donner, J. (2015). *After Access: Inclusion, Development, and a More Mobile Internet*. MIT Press. 來源等級 A。
10. GSMA Mobile Gender Gap Report 2024，第 3 章 Sub-Saharan Africa + South Asia 統計。來源等級 A。
11. ITU 2024，同來源 #4，第 4 章 unconnected populations。來源等級 A。
12. Wyche, S., et al. (2018). "Sharing this with the family: Mobile phone use in rural Sub-Saharan Africa". *ACM CHI / ICTD*. 來源等級 A。
13. Sambasivan, N., et al. (2018). "Privacy is not for me, it's for those rich women". *SOUPS (Symposium on Usable Privacy and Security)*. 來源等級 A。
14. WHO 2024，同來源 #6。
15. 台灣失智症協會 2024 年盛行率調查 + WHO 2024 全球估算。來源等級 A/B。
16. 弘道老人福利基金會家屬反饋報告 2023–2024 + 台灣失智症協會家屬團體報告 2024。來源等級 B。
17. NIST Face Recognition Vendor Test (FRVT) 2022. National Institute of Standards and Technology. 來源等級 A。
18. Eubanks, V. (2018). *Automating Inequality*. St. Martin's Press; Alston, P. (2019). UN A/74/493 *Digital welfare state*; Ranchordas, S. (2022). Empathy in the Digital Administrative State. *Duke Law Journal* 71(6). 來源等級 A。
19. UNHCR 2024，同來源 #3。
20. Convention relating to the Status of Stateless Persons (1954), Articles 27, 28; Convention on the Reduction of Statelessness (1961); UNHCR (2014). *Handbook on Protection of Stateless Persons*. HCR/GS/12/04. 來源等級 A。
21. UK Home Office (2020). *Windrush Lessons Learned Review* by Wendy Williams. 來源等級 A。
22. UK Parliamentary report on Windrush 2018 + UK Home Office (2020) 同來源 #21。來源等級 A。
23. UNHCR Digital Identity for Refugees programme documentation 2018–2024. 來源等級 A。
24. Khera, R. (2019). Aadhaar failures: Series in *Economic and Political Weekly* on PDS exclusion + Aadhaar-linked deaths. 來源等級 A。
25. Khera, R. (2019)，同來源 #24。
26. Australian Royal Commission into the Robodebt Scheme (2023). Final Report. 來源等級 A。
27. TIWA (Taiwan International Workers' Association) 2024 年案例統計 + 台灣國際勞工協會報告。來源等級 B。
28. Volkszählungsurteil (BVerfGE 65, 1, 1983). Bundesverfassungsgericht. 來源等級 A。
29. Marshall, T.H. (1950)，同來源 #7。
30. International Covenant on Civil and Political Rights (ICCPR, 1966), Article 16. 來源等級 A。
31. Sen, A. (1999). *Development as Freedom*. Oxford University Press; Sen, A. (2009). *The Idea of Justice*. Belknap Press. 來源等級 A。
32. Nussbaum, M. (2011). *Creating Capabilities: The Human Development Approach*. Belknap Press. 來源等級 A。
33. Anderson, E. (1999). What Is the Point of Equality? *Ethics* 109(2): 287–337. 來源等級 A。
34. Pettit, P. (1997). *Republicanism: A Theory of Freedom and Government*. Oxford University Press. 來源等級 A。
35. Young, I. M. (2000). *Inclusion and Democracy*. Oxford University Press. 來源等級 A。
36. Fraser, N. (2007). Special Section: Transnational Public Sphere. *Theory, Culture & Society*. 來源等級 A。
37. Habermas, J. (1962/1989). *The Structural Transformation of the Public Sphere* (*Strukturwandel der Öffentlichkeit*). MIT Press; Habermas, J. (1992 Suhrkamp / 1996 MIT trans). *Faktizität und Geltung* / *Between Facts and Norms*. MIT Press. 來源等級 A。
38. Alston, P. (2019). UN A/74/493，同來源 #18。
39. Banerjee, A. & Duflo, E. (2011). *Poor Economics*; Banerjee, A. & Duflo, E. (2019). *Good Economics for Hard Times*. PublicAffairs. 來源等級 A。
40. Banerjee, A., Duflo, E., Imbert, C., Mathew, S., & Pande, R. (2020). E-Governance, Accountability, and Leakage in Public Programs. *AEA Papers and Proceedings*; Muralidharan, K., Niehaus, P., & Sukhtankar, S. (2016). Building State Capacity: Evidence from Biometric Smartcards in India. *American Economic Review*. 來源等級 A。
41. Posner, E. & Vermeule, A. (2010). *The Executive Unbound*. Oxford University Press. 來源等級 A。
42. Hoffmann, F. (2017). Relational Equality (對 inclusion 的批評)。來源等級 A。
43. Lessig, L. (1999). *Code and Other Laws of Cyberspace*. Basic Books. 來源等級 A。
44. 大陸法系三層概念：formelle / materielle Rechtsstaatlichkeit / Schutzpflicht，源自 Bundesverfassungsgericht 判例傳統與德國基本法理論。來源等級 A。
45. 東亞憲政「制度的保障」傳統，含台灣大法官第 380 號（教育權）、第 469 號（國家賠償）解釋之延伸。來源等級 A。
46. UN General Comment No. 3 (1990) on the nature of States parties' obligations + No. 9 (1998) on domestic application of ICESCR + No. 12 (1999) on the right to adequate food. 來源等級 A。
47. EAA (European Accessibility Act) Directive (EU) 2019/882; EU EECC Directive (EU) 2018/1972 (Universal Service Directive 後續). 來源等級 A。
48. 量化指標「時程 1.5 倍、駁回率 1.5 倍」為政策建議數，須立法協商。來源等級 A（政策建議）。
49. UNHCR 2024，同來源 #3。
50. UNHCR Digital Identity for Refugees programme，同來源 #23。
51. World Bank ID4D 2024，同來源 #2。
52. San Francisco Municipal ID program documentation 2009–2024; New York City IDNYC program documentation 2015–2024. 來源等級 A。
53. EAA Directive 2019/882，同來源 #47。
54. Wright, D. & De Hert, P. (eds.). (2012). *Privacy Impact Assessment*. Springer. 來源等級 A。
55. Diver, L. & Schafer, B. (2017). Opening the black box: Petri nets and Privacy Impact Assessments. 來源等級 A。
56. UN Human Rights Council Resolution 20/5 (2012); Resolution 32/5 (2016); UN A/HRC/25/28 (2013) *Human Rights and Arbitrary Deprivation of Nationality*. 來源等級 A。
57. GSMA 2024，同來源 #5；ITU 2024，同來源 #4；WHO 2024，同來源 #6。
58. GSMA 2024，同來源 #5；ITU 2024，同來源 #4。
59. Wyche et al. (2018)，同來源 #12。
60. Sambasivan et al. (2018)，同來源 #13。
61. Donner, J. (2015)，同來源 #9。
62. WHO 2024，同來源 #6。
63. 台灣民法第 1110 條意定監護新制（2019 年修法）+ 立法院公報 2019 年第 108 卷第 49 期。來源等級 A。
64. CRPD General Comment No. 1 (2014) on Equal recognition before the law (Article 12). UN CRPD Committee. 來源等級 A。
65. W3C Decentralized Identifiers (DIDs) Core 1.0 + Verifiable Credentials Data Model 2.0; EU EUDI Wallet Architecture Reference Framework 2024. 來源等級 A。
66. GSMA 2024，同來源 #5，第 1 章 ownership statistics。
67. WHO 2024，同來源 #6，2050 年預測章節。
68. EU EUDI Wallet large-scale pilots (POTENTIAL, NOBID, EWC, DC4EU) 2024–2025 progress reports. 來源等級 A/B。
69. CRPD General Comment No. 1 (2014)，同來源 #64。
70. W3C DID Core 1.0 + Verifiable Credentials 2.0，同來源 #65。
71. OpenWallet Foundation governance documents 2024. 來源等級 A/B。
72. IOM Migration Governance Indicators + Migration Data Portal 2023–2024. 來源等級 A。
73. NYC IDNYC 與 ICE 資料調取爭議 2017–2020 訴訟記錄 + NYC Council reports. 來源等級 A/B。
74. Treasury Board of Canada (2019). *Directive on Automated Decision-Making*. 來源等級 A。
75. CRPD「Nothing About Us Without Us」原則 + CRPD 2006 立法歷史。來源等級 A。
76. Khera, R. (2019)，同來源 #24。
77. Banerjee et al. (2020) + Muralidharan et al. (2016)，同來源 #40。
78. UK Home Office (2020)，同來源 #21。
79. UK Home Office (2020)，同來源 #21。
80. Khera, R. (2019)，同來源 #24；Drèze, J. & Khera, R. (2017). Recent Social Security Initiatives in India. *World Development*. 來源等級 A。
81. Alston, P. (2019); Eubanks, V. (2018); Ranchordas, S. (2022)，同來源 #18。
82. 弘道老人福利基金會 + 台灣失智症協會 2024 報告，同來源 #16。
83. 台灣民法第 1110 條 + CRPD Art 12 + General Comment No. 1，同來源 #63、#64。
84. UNHCR Digital Identity for Refugees programme，同來源 #23；OpenWallet Foundation，同來源 #71；W3C VC/DID，同來源 #65。
85. CF3 估算依 WHO 2024 + 台灣 65 歲以上失智盛行率 7.9%，台灣 65 歲以上人口約 421 萬（內政部 2024）→ 失智長者約 33 萬，使用 TW DIW 比例估約 25%（≈ 8 萬）。屬政策建議數，需內政部資料佐證。來源等級 B（估算）。
86. EAA Directive 2019/882 + EU EECC Directive 2018/1972 + ECtHR 判例（Art 8、Art 14、Protocol 1 Art 1）。來源等級 A。
