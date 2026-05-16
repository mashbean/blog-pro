---
title: "身分基礎設施為什麼一定會擴張——以及如何預防"
description: "結構性滑坡的因果機制是真實的（強傾向，可被反向制度壓力反轉），歷史擴張案例的共同條件是法律限制與技術綁定雙缺位，4 種預防工具是跨層級組合而非互斥選項。本文從四個歷史案例（Aadhaar、SSN、eIDAS、中國 real-name）與兩個關鍵反例（奧地利 sourcePIN、德國 nPA）抽出共同模式，用 path dependency / infrastructure studies / institutional layering 三角推導因果機制，評估 EUDI ARF 與加州 AB1043 的 prima facie 證據，回應虛無主義與 public choice 兩個反論，最後給出 MVSR（最小可行滑坡阻力）三層條款。"
pubDate: 2026-05-09
draft: false
tags: [civic-proof, digital-identity, structural-slippage, path-dependency, sunset-clauses, prevention-design]
lang: zh-TW
aiModel: claude-opus-4-7
aiPipelineStage: published
aiPipelineId: 2026-05-09-structural-slippage-prevention
humanReviewed: false
category: digital-identity-policy
series: civic-proof
seriesOrder: 13
slug: 2026-05-09-structural-slippage-prevention
---

## 一、導論：在兩個誤讀之間

身分基礎設施的擴張現象有兩個常見誤讀。第一個誤讀把擴張寫成「結構性必然」——既然 Aadhaar 從 PDS 滑到 SIM 卡與投票名冊、SSN 從稅務滑到通用識別符、eIDAS 從電子簽章滑到 wallet 與年齡驗證，那麼任何中心化身分基礎設施一旦建成都會擴張用途，制度設計工具只是延緩滑坡的安慰劑。這個誤讀的政策結論是放棄治療，要嘛宿命接受擴張，要嘛根本不要建任何身分基礎設施。第二個誤讀把擴張寫成「政治意志薄弱」——如果立法者更謹慎、行政官僚更節制、公民社會更警覺，滑坡就不會發生。這個誤讀把結構問題降格為個人問題，等於說滑坡是道德缺陷而非制度設計失誤。

這兩個誤讀都錯過了滑坡的真實樣貌。本文的居中立場是：身分基礎設施一旦建成，**在沒有反向制度壓力的條件下，強傾向被擴展使用**。「強傾向」由三個機制疊加產生（path dependency、infrastructure invisibility、institutional layering），但三個機制都是機率語言而非邏輯必然。當憲法審查、強公民運動、跨國比較壓力、技術 affordance 結構性限制其中任一項或多項出現時，滑坡可被反轉。歷史證據既支持「強傾向」（多數歷史案例擴張），也支持「可反轉」（德國 *Volkszählungsurteil* 1983、英國 ID Card 廢除 2010、美國 *Civil Aeronautics Board* 廢除 1985、愛沙尼亞 X-Road 維持限定範圍）。

本文要建立的論證有四層。第一層用四個歷史案例抽出滑坡的共同條件，並引入兩個關鍵反例（奧地利 sourcePIN 與德國 nPA）把原命題從「未寫條款 → 滑坡」校正為「**未寫條款且未做技術綁定** 是擴張的弱必要條件」。第二層用 Pierson 的 path dependency、Bowker–Star 的 infrastructure studies、Mahoney–Thelen 的 institutional layering 三角推導擴張的因果機制，明確標出機率語言。第三層介紹四種跨層級預防工具（sunset clauses、scope-bound infrastructure、split-key、opt-out by design），每個給法律或技術原理、具體條款範例、失敗模式與組合策略。第四層評估 EUDI ARF v1.4/1.5 與加州 AB1043（2023）作為早期實證證據的限度——這兩個案例 *prima facie* 支持預防工具假設，但兩者上線時間都不超過 3 年，與 path dependency 文獻的 5–10 年時間常數相比，當前的「沒滑坡」與「尚未滑坡」無法區分。

最後本文回應兩個反論。反論 A 來自虛無主義譜系（cypherpunk、anarcho-capitalist、後 Snowden 徹底懷疑論），主張既然滑坡會發生就乾脆不建身分基礎設施；本文用規範論證（Anderson 的私領域政府、Habermas 的基礎設施作為公共善、SSI/ZKP 在低端裝置的覆蓋限制）回應。反論 B 來自 public choice 學派（Buchanan–Tullock、Niskanen、Olson），主張 sunset clauses 在政治壓力下會被延期，PATRIOT Act 是經典反例；本文用實證論證（澳洲 sunset 38% 自動失效率、配套 layered defense、真實 sunset 廢除案例）回應。兩個反論屬於不同推理層級，回應必須分層；混層會犯邏輯錯誤。

## 二、四個歷史案例的擴張軌跡

### 2.1 Aadhaar：從 PDS 到投票名冊的 16 年滑坡

印度 Aadhaar 系統 2009 年由 *Unique Identification Authority of India* (UIDAI) 啟動<sup>1</sup>，最初的政策論述是「為福利遞送提供唯一識別」，集中在 *Public Distribution System* (PDS) 與 *Mahatma Gandhi National Rural Employment Guarantee Scheme* (MGNREGS) 兩個目標。建設階段（2009–2016）的法源基礎是行政命令與內閣決議，沒有專屬立法。2016 年通過的 *Aadhaar Act*<sup>2</sup> 在事後追溯合法化，並把使用範圍寫成「targeted delivery of financial and other subsidies, benefits and services」。

擴張軌跡可以分四波。第一波（2011–2013）連結 PDS 與 MGNREGS 福利遞送，這是 *Aadhaar Act* 第 7 條明文授權的範圍。第二波（2013–2016）逐步擴展到銀行帳戶 (KYC)、瓦斯補貼、稅務識別 (PAN)，由 *Reserve Bank of India* (RBI) 與 *Securities and Exchange Board of India* (SEBI) 的行政通告推動<sup>3</sup>。第三波（2017–2018）強制連結到 SIM 卡與所得稅申報，由 *Department of Telecommunications* 與 *Central Board of Direct Taxes* 的行政命令推動，迴避立法層審議。第四波（2018–2026）擴張到投票名冊 (Election Laws Amendment Act 2021) 與 *National Population Register* / *Citizenship Amendment Act* 配套<sup>4</sup>。

法院介入的關鍵節點是 2017 年 *K.S. Puttaswamy v. Union of India* 隱私權判決<sup>5</sup>，與 2018 年九人合議庭 *Puttaswamy II* 對 *Aadhaar Act* 的部分違憲審查<sup>6</sup>。判決把 Aadhaar 與 SIM 卡的強制連結、與銀行帳戶的全面強制連結部分撤銷，但保留了 PDS、MGNREGS、稅務、補貼這幾個「targeted delivery」的核心使用情境。判決的政策意義是：法院能在事後減縮範圍，但無法回到建設前重設條款。Drèze、Khera 與 Pudussery 的系列實證研究<sup>7</sup>記錄了滑坡對最弱勢人口（無生物識別匹配的長者、勞動者）的排除效應。

### 2.2 美國社會安全號（SSN）：從稅務到通用識別符的 90 年滑坡

美國 *Social Security Number* (SSN) 由 1936 年 *Social Security Act* 創建<sup>8</sup>，原始用途限定為 *Old Age Reserve Account* 的稅務記錄。建設階段沒有寫入任何使用限制條款，原因之一是當時技術上無法跨機關共享，沒有意識到結構擴張的可能。

擴張軌跡橫跨七十年。1943 年 *Civilian Conservation Corps* 用 SSN 識別軍事部署人員。1961 年 *Internal Revenue Service* 把 SSN 採納為納稅人識別號 (TIN)。1965 年 Medicare 啟動後，SSN 成為健保識別號。1976 年 *Tax Reform Act* 授權各州把 SSN 用於駕照識別<sup>9</sup>。1990 年代起 SSN 成為信用評分、租屋審查、雇主背景查核的標準識別符，遠超過原始稅務範圍。

美國 *Government Accountability Office* (GAO) 從 1999 年起出版多份審計報告<sup>10</sup>批評 SSN 的擴張。GAO 1999 報告 *Social Security Numbers: Government Benefits from SSN Use but Could Provide Better Safeguards* 指出聯邦機關用 SSN 的範圍已超過原始授權，但補救措施需要立法層介入，行政命令難以收回擴張範圍。Garfinkel 在 *Database Nation*<sup>11</sup> 把 SSN 描述為「the de facto national identifier we said we would never have」——美國聯邦層級從未通過國家身分卡立法，但 SSN 透過行政滑坡承擔了同樣功能。

關鍵差異是：1936 年的 SSN 法源沒有 sunset clause、沒有功能限制條款、沒有 cryptographic binding 阻止跨機關共享。九十年後追補限制條款（如 *Social Security Number Confidentiality Act 2010*<sup>12</sup>）只能管控部分濫用，無法回退既有擴張。

### 2.3 eIDAS：從電子簽章到 wallet 的十年規範性擴張

歐盟 *eIDAS Regulation* (Regulation EU 910/2014)<sup>13</sup> 於 2014 年通過，原始範圍限定為 *electronic identification* 與 *trust services*（電子簽章、電子封印、時間戳記、合格憑證）。建設階段的政策論述是「為跨境電子商務提供法律確定性」，沒有 wallet、沒有屬性憑證、沒有 KYC 整合。

擴張軌跡由規範性文本驅動。2018 年起歐盟 *Commission* 啟動 eIDAS 修正討論，2021 年提出 *Proposal for eIDAS 2*<sup>14</sup>，把 wallet 納入規範範圍。2024 年 4 月 *Regulation (EU) 2024/1183*<sup>15</sup>（eIDAS 2.0）通過，把範圍從電子簽章擴張到 *European Digital Identity Wallet* (EUDI Wallet)、 *Person Identification Data* (PID)、 *Qualified Electronic Attestation of Attributes* (QEAA) 三個新範疇。當前 (2026) 的擴張壓力延伸到 KYC、年齡驗證、交通票證、醫療憑證、駕照憑證等多個討論中的 use case。

eIDAS 的特殊性是擴張在規範性文本層發生，每一波擴張都通過正式立法程序。這意味著公民社會與成員國有形式上的反對窗口，但實際上 *European Commission* 的 *Impact Assessment*<sup>16</sup> 把擴張需求論證為「跨境互操作性的必然要求」，把反對立場框定為「拒絕現代化」。EDPB 與 EDPS 在 *Joint Opinion 2/2023*<sup>17</sup> 對 EUDI Wallet 提出隱私風險警告，部分建議被採納（unlinkability、minimum disclosure 寫入 ARF），部分未被採納（pairwise pseudonym 強制使用未明確要求）。

eIDAS 的軌跡顯示：即使在規範性文本透明的歐盟程序下，擴張壓力仍能透過「impact assessment 框架」與「跨境互操作論述」推進，公民社會的反對窗口在實踐上被結構性壓縮。

### 2.4 中國 real-name：從網絡備案到全領域接入的部委級滾動推行

中國 real-name 制度的擴張軌跡與其他三案例的差異在於以行政命令而非立法為主要工具。2012 年《全國人民代表大會常務委員會關於加強網絡信息保護的決定》<sup>18</sup> 首次規定「網絡服務提供者應當要求用戶提供真實身分信息」，原始範圍限定在網絡備案。

擴張軌跡橫跨十四年。2014 年起逐步延伸到即時通訊、微博、社交平台。2015–2017 年通過《中華人民共和國國家安全法》、《中華人民共和國反恐怖主義法》、《中華人民共和國網絡安全法》<sup>19</sup>，把 real-name 規定上升到法律層級。2018 年起延伸到電商、共享出行、線上教育。2020 年起延伸到行動 SIM 卡、手機線上支付、線上醫療。2022 年起延伸到健康碼與行程碼系統<sup>20</sup>。2024 年起延伸到 AI 生成內容標註與 LLM 服務註冊。

Creemers、Triolo 與其他中國數位政策學者<sup>21</sup>把這個軌跡描述為 *rolling implementation*：每一波擴張都用部委級行政命令推進，立法層追溯背書。NPC Observer 與 China Law Translate 的全文比對<sup>22</sup> 顯示，從 2012 到 2024 年共有超過 60 份部委級規範性文件涉及 real-name 範圍，其中超過半數沒有對應的立法層審議。

中國案例的特殊意義是：它顯示在沒有強違憲審查、強公民社會、強跨國比較壓力的政體下，滑坡的速度與深度顯著高於其他三個案例。但與此同時，real-name 的擴張也遭遇局部反向壓力（例如 2017 年人臉辨識公司 SenseTime、Megvii 因國際壓力部分撤回特定使用情境），顯示就算在威權政體下，反向壓力仍能影響部分擴張軌跡。

## 三、共同條件抽取：法律限制與技術綁定的雙條件分析

把四個案例放在一起，可以抽出滑坡的共同條件：建設階段法源 *沒有* 寫入功能限制條款（function-creep prevention clause）、落日條款（sunset clause）或範圍綁定（scope-bound）的技術約束。但這個歸納馬上遇到兩個關鍵反例——奧地利 sourcePIN 與德國 nPA——它們迫使原命題從「未寫條款 → 滑坡」校正為更精細的版本。

### 3.1 奧地利 sourcePIN：未寫法律限制但因技術綁定未顯著擴張

奧地利 *Source-PIN* 系統<sup>23</sup>於 2004 年由 *E-Government Act* 引入，作為公民身分基礎的密碼學標識符。建設階段的法源沒有寫入明確的功能限制條款；*E-Government Act* 第 6 條僅規定 sourcePIN 為「私部門領域識別符的衍生來源」，沒有列舉禁止用途、沒有 sunset clause。

但奧地利在 *技術層* 寫入了強約束：sourcePIN 永遠不會以原始形式向 verifier 揭露，每個使用情境（稅務、健保、私部門 KYC）獲得的是一個 *sectoral PIN* (ssPIN)，由 sourcePIN 透過 *symmetric cryptographic derivation* 產生。不同 sector 的 ssPIN 在密碼學上無法相互重組，即使兩個 verifier 串謀也無法重建公民的跨 sector 行為記錄<sup>24</sup>。

結果：sourcePIN 部署 22 年來，使用範圍實質上維持在原始設計的 sector 內。沒有發生 Aadhaar 式的跨領域 layering，沒有發生 SSN 式的通用識別符化。Epicenter.works 與 noyb 等奧地利公民社會組織的批評集中在不同議題（如 ELGA 健保系統的資料治理），sourcePIN 本身的範圍擴張不在批評清單前列。

奧地利的案例顯示：技術綁定可以在法律條款缺位的情況下，承擔功能限制條款的角色。

### 3.2 德國 nPA：寫了法律限制但因技術可重配置仍鬆動

德國 *neuer Personalausweis* (nPA) 系統<sup>25</sup>於 2010 年由 *Personalausweisgesetz* (PAuswG) 引入，建設階段法源寫入了明確的限制條款。PAuswG 第 18 條規定 *function-restricted reading*（受限讀取），verifier 必須持有 *Berechtigungszertifikat*（授權憑證）才能讀取屬性，且只能讀取授權清單列出的屬性。第 19 條規定 *pseudonym 預設模式*，verifier 預設只能看到 service-specific pseudonym，無法直接看到公民身分。

但 nPA 在 *技術層* 沒有完全綁定限制：核心晶片支援多個 application，授權憑證的範圍由 *Bundesverwaltungsamt* (BVA) 管理，而 BVA 的授權範圍可由行政命令調整。隨著 *Online-Zugangsgesetz* (OZG) 2017 推動數位政府服務，BVA 逐步擴大授權清單，新增屬性類型（如年齡證明、地址證明、學位證明）、新增 verifier 類別（如金融機構 KYC、年齡驗證服務）<sup>26</sup>。

結果：nPA 的法律限制條款在 16 年部署期間經歷三次擴張（2014、2017、2021），每次擴張都通過 BVA 的行政程序而非立法層審議。雖然擴張幅度遠小於 Aadhaar 或 SSN，但「鬆動軌跡」清楚可見。德國資訊安全專家圈（CCC、Stiftung Datenschutz）的批評<sup>27</sup>指出，PAuswG 的限制條款在文本層仍然嚴格，但執行層的 BVA 實質上承擔了「半立法者」角色，把限制條款掏空。

德國案例顯示：法律限制條款若沒有技術綁定支撐，會在執行層逐步鬆動。

### 3.3 校正後的共同條件

奧地利 sourcePIN 與德國 nPA 兩個反例共同支持以下校正版本：

> 在「大尺度、由國家主導、最初設計為跨部門可重用」的身分基礎設施樣本範圍內，**未寫入功能限制條款 *且* 未做技術綁定**，是擴張壓力顯著高於同類系統的弱必要條件。

「弱必要條件」的精確意義是：法律條款 *與* 技術綁定 *互為補位*。任一存在就足以顯著減緩擴張；兩者都缺位才產生顯著擴張壓力。Aadhaar、SSN、eIDAS、中國 real-name 四個高擴張案例都符合「兩者都缺位」的條件——SSN 與 Aadhaar 的核心識別符可跨機關直接使用、eIDAS 的 trust list 機制無 cryptographic 範圍綁定、中國 real-name 的部委級命令既無法律 sunset 也無技術 sectoral derivation。

這個校正有兩個重要意義。第一，它把預防策略從單一工具（「寫 sunset 就好」）擴展為跨層級組合（「法律 + 技術都要做」），這正是第五節要展開的論證。第二，它解釋為何某些寫了法律條款的系統（如 nPA）仍然鬆動——條款若沒有技術綁定支撐，執行層有充分空間慢慢掏空。

## 四、因果機制：path dependency × infrastructure invisibility × institutional layering

擴張的共同條件已經確立，但「條件」與「機制」是兩個不同層級的問題。「為什麼缺乏雙重綁定的系統會擴張」需要解釋層的論述。本文採用三個機制的疊加推導，並在推導後明確收斂為「強傾向」而非「結構性必然」。

### 4.1 機制一：Path dependency（路徑依賴）

Pierson 的 *Politics in Time*<sup>28</sup> 與 *American Political Science Review* 2000 年論文<sup>29</sup>把 path dependency 形式化為四個微觀基礎：(a) *increasing returns to adoption*（採用的遞增報酬），(b) *learning effects*（學習效應），(c) *coordination effects*（協調效應），(d) *adaptive expectations*（適應性預期）。當這四個微觀基礎同時成立時，新建替代品的邊際成本隨時間指數上升，使用既有系統的政治誘因系統性高於另建新系統。

身分基礎設施滿足這四個微觀基礎的程度極高。以 Aadhaar 為例：(a) UIDAI 的中央資料庫 (CIDR) 一旦累積 13 億人的生物識別資料，新建替代資料庫的邊際成本已超過任何替代收益；(b) 各部會學會用 Aadhaar 識別符整合資料，學習投資已經沉沒；(c) PDS、銀行、稅務系統都已經接入 Aadhaar API，協調成本已經支付；(d) 公民、行政官僚、私部門都預期 Aadhaar 會繼續存在，行為已經調整。

North 的 *Institutions, Institutional Change and Economic Performance*<sup>30</sup>進一步指出，制度的 path dependency 不只是技術層的鎖定，還包括「ideational lock-in」——一旦某個制度被視為「事情就是這樣運作的」，挑戰它需要動員的政治成本遠高於擴展它。Aadhaar 與 SSN 都展示了這種 ideational lock-in：質疑系統的存在（abolition）幾乎不在政治可能性內，質疑系統的擴張範圍（containment）才是現實可行的辯論題。

### 4.2 機制二：Infrastructure invisibility（基礎設施 invisible 化）

Bowker 與 Star 的 *Sorting Things Out*<sup>31</sup>、Star 的 *The Ethnography of Infrastructure*<sup>32</sup>、Edwards 的 *A Vast Machine*<sup>33</sup>與 *Infrastructure and Modernity*<sup>34</sup>建立了 *infrastructure studies* 這個分析傳統。核心洞見是：基礎設施在運作穩定後 invisible 化，它的存在被視為自然事實而非政治選擇，因而從公共審議中退出。

這個機制在身分基礎設施的應用特別明顯。Aadhaar 啟用初期 (2009–2013)，UIDAI 的合法性、CIDR 的隱私風險、生物識別失敗率都是激烈公共辯論議題。但部署 5 年後，Aadhaar 號碼已成為日常生活組件，新增的擴張使用情境（強制連結 SIM、PAN、銀行）不再被視為「Aadhaar 系統的政治問題」，而被視為「Aadhaar 與其他系統的整合工程問題」。SSN 的軌跡更極端：1936 年的稅務識別符經過 90 年的 invisibility，今天美國公民被要求在租屋、求職、信用評分時提供 SSN，幾乎沒有人質疑這個要求本身。

Infrastructure invisibility 的政治後果是：擴張不需要正式的政策辯論，可以透過行政命令、機關間協議、私部門慣例靜靜推進。每一次擴張都被框定為技術整合而非政治選擇，公共審議的觸發機制失效。

### 4.3 機制三：Institutional layering（制度疊層）

Mahoney 與 Thelen 的 *Explaining Institutional Change*<sup>35</sup>、Thelen 的 *How Institutions Evolve*<sup>36</sup>、Hacker 的 *Privatizing Risk without Privatizing the Welfare State*<sup>37</sup>建立了 *institutional layering* 理論。核心洞見是：新政策需求傾向 layered onto 既有制度（drift / layering / conversion 三形式），而非全面重建，因為重建需要動員 supermajority，而疊層只需要邊際多數。

這個機制解釋為什麼擴張通常以「整合」而非「新建」的形式進行。SSN 從 1936 年稅務工具擴張到信用評分標識符，每一步都是把新功能 layered onto 既有號碼系統，沒有任何一步需要立法層通過「美國國家身分證」這種高度敏感的法案。Aadhaar 從 2009 年福利識別擴張到投票名冊，每一步也是 layering——強制連結 SIM 卡只需要 *Department of Telecommunications* 的行政通告，不需要立法層通過「全國 SIM 卡身分綁定法」。

Hacker 的 *Privatizing Risk* 提供了 layering 的關鍵實證：美國社會保障的退化不是透過正面廢除 (revision)，而是透過讓既有制度漸漸被新功能覆蓋（drift / conversion），最終既有制度的原始功能被掏空。這個分析直接適用於身分基礎設施：原始功能限制不需要被正面廢除，只需要讓新使用情境 layered onto 既有系統，原始限制就會被執行層架空。

### 4.4 從「機率」到「強傾向」的收斂

三個機制的疊加產生擴張的強傾向，但三個機制都是 *機率語言* 而不是 *邏輯必然*。Path dependency 描述「新建邊際成本系統性升高」，不等於「不可能新建」；infrastructure invisibility 描述「公共審議觸發機制失效」，不等於「公共審議永不會被觸發」；institutional layering 描述「邊際多數疊層比 supermajority 重建更容易」，不等於「supermajority 重建不可能」。

把三個機率機制疊加只能推到「在多數條件下高機率擴張」，無法推到「在所有條件下必然擴張」。原 thesis 的「結構性必然」字眼把機率機制誤推到邏輯結論，是這條推理鏈最脆弱的跳躍。本文修訂為「強傾向，可被反向制度壓力反轉」。

反例案例支持這個修訂。德國 *Volkszählungsurteil* 1983<sup>38</sup>（普查判決）由 *Bundesverfassungsgericht* 建立 *informational self-determination*（資訊自決權）原則，把普查擴張範圍打回起點，path dependency 在此被憲法審查打斷。愛沙尼亞 X-Road<sup>39</sup>採用 cryptographic logging + 強制公民可見的稽核介面，使 infrastructure 不 invisible 化——公民每次資料被機關存取時都會收到通知，公共審議觸發機制由系統工程強制保留。英國 *Identity Cards Act 2006* 在 2010 年由 *Identity Documents Act 2010* 廢除<sup>40</sup>，是強公民運動 (NO2ID) 與政權更替（保守黨–自民黨聯合執政取代工黨）共同反轉 layering 的案例。美國 *Civil Aeronautics Board* (CAB) 在 1985 年廢除<sup>41</sup>，是產業壓力 + 跨黨派共識使制度層減範圍的案例（雖然不是身分基礎設施，但作為 path dependency 可被打斷的對照案例有意義）。

這四個反例不否定三個機制的存在，它們證明三個機制是「強傾向」而非「必然」。修訂後的措辭把光譜還給政治：你可以反轉滑坡，但你需要在建設之前、用結構性條款、在政治機會窗口仍開啟時做。

需要補上的觀察是：北歐國家（特別是丹麥、瑞典）的身分基礎設施軌跡顯示一個微妙現象——displacement（替代）在某些政治文化中取代 layering 的形式，但 *不* 取代擴張的結果。瑞典 *personnummer* 從稅務識別符擴張到醫療、銀行、租屋、雇主背景查核的軌跡，與 SSN 高度相似，雖然個別擴張步驟可能採用 displacement（廢除舊辦法、採新辦法）而非 layering（疊加新功能於舊系統）<sup>42</sup>。這個觀察提醒我們，制度設計形式（layering vs displacement）與擴張結果不是一一對應，預防策略需要瞄準擴張結果而非制度設計形式。

## 五、四種預防工具的跨層級組合

如果擴張的共同條件是「法律限制 *與* 技術綁定雙缺位」、因果機制是 path dependency × infrastructure invisibility × institutional layering 的三角，那麼預防工具必須跨層級組合。本節介紹四種工具，每個給法律或技術原理、具體條款範例、失敗模式與組合策略。

### 5.1 工具 (a)：Sunset clauses（功能限期失效）

**法律原理**。Sunset clause 強制條款在 N 年後自動失效，重新立法才能延續。Ackerman 的 *Legislatures of the Future*<sup>43</sup>把 sunset 描述為「reversing the burden of legislative inertia」——預設條款會失效，需要主動行動才能延續，把舉證責任從反對者轉到支持者。

**具體條款範例**。澳洲 *Legislation Act 2003* §50A<sup>44</sup>是 sunset clause 的權威立法範本。條款規定 *legislative instruments*（次級立法）預設在 10 年後 *automatic lapse*（自動失效），除非主管機關提交 *Sunset Audit Report* 並由國會通過延續案。Schoenmaker 與 Wierts 在金融監管 sunset 的研究<sup>45</sup>顯示，*automatic lapse* 機制比 *periodic review* 機制更有效——前者預設失效，後者預設續存，舉證責任分配的差異決定了延續率。

**失敗模式**。USA *PATRIOT Act* §215<sup>46</sup>是 sunset clause 失敗的經典案例。原始條款設計 4 年 sunset (2005)，但實際軌跡是 2005 延期 → 2010 延期 → 2015 *USA Freedom Act*<sup>47</sup>局部修訂保留多數權力 → 2020 失效後行政部門啟動緊急 *Section 215 reauthorization* 嘗試 → 後續幾年持續延期討論。十九年中 §215 從未真正自動失效，每次延期都通過國會多數，public choice 對 sunset 的批評在此案例中得到充分驗證。

**組合策略**。Sunset clause 單獨使用容易被延期掏空，需要與 scope-bound 與 split-key 組合。當 sunset 條款與 scope-bound infrastructure 並存時，即使延期通過、功能也無法擴張；當 sunset 條款與 split-key governance 並存時，延期需要多方共識，集中化壓力被分散。Davis 在 *Sunset Clauses in Australian Legislation*<sup>48</sup>的跨國比較顯示，「sunset + 配套」的組合存活率顯著高於 sunset 單獨使用。

### 5.2 工具 (b)：Scope-bound infrastructure（技術上不可擴展）

**技術原理**。Scope-bound 用 cryptographic binding 把屬性與 verifier 識別綁定，使屬性無法跨 verifier 重組。具體機制是 *audience claim*——憑證在簽發時就鎖定接收者，其他 verifier 即使取得憑證也無法驗證。

**具體條款範例**。IETF *Selective Disclosure for JWTs* (SD-JWT) draft 系列<sup>49</sup>與配套的 SD-JWT VC、Key Binding JWT (KB-JWT) 標準，把 *audience binding* 與 *selective disclosure* 寫入標準層。每個憑證可以選擇性揭露子屬性（例如年齡 ≥ 18 而不揭露具體年齡），且每次揭露都附帶 audience claim 限定接收者。W3C *Verifiable Credentials Data Model* 2.0<sup>50</sup>提供配套的 verifiable presentation 框架。EUDI Wallet ARF v1.4 / v1.5<sup>51</sup>把 SD-JWT VC 與 KB-JWT 寫入 PID 與 QEAA 的強制規範。

**失敗模式**。Scope-bound 的主要失敗模式是 *verifier 串謀重組屬性*。即使每個 verifier 只取得綁定自己的子屬性，多個 verifier 可以跨 session 累積、跨組織串謀重組公民的跨領域行為記錄。Ohm 在 *Broken Promises of Privacy*<sup>52</sup>的匿名化研究顯示，即使部分屬性被密碼學保護，再識別攻擊（re-identification attack）仍能透過足夠多的子屬性組合成功還原身分。Privacy & Scaling Explorations (PSE) 與其他 cryptography 研究團隊正在開發 wallet-side aggregation control 機制（讓 wallet 偵測 verifier 跨 session 的累積使用），但目前仍是研究階段。

**組合策略**。Scope-bound 與 opt-out by design 互補：scope-bound 限制技術層的屬性流向，opt-out 給公民最後退出權。Scope-bound 與 split-key 互補：split-key 控制屬性 schema 擴張的治理層門檻，scope-bound 控制具體 verifier 的接入層。

### 5.3 工具 (c)：Split-key（治理上不可單方擴展）

**技術 + 治理混合原理**。Split-key 把 issuer 主簽發私鑰拆成 (k, n) 個分片（threshold cryptography），擴展屬性 schema 或新增 verifier 需要 k 個 shareholder 共同簽署。技術基礎是 Shamir 1979 的 *secret sharing*<sup>53</sup>、Pedersen 1991 的 *verifiable secret sharing*<sup>54</sup>、Boneh–Lynn–Shacham 2001 的 BLS signature<sup>55</sup>。當代實作包括 FROST<sup>56</sup>、GG18、Lindell17 等 threshold ECDSA 與 BLS multi-signature 系列。

**具體條款範例**。Boneh 與 Shoup 的 *A Graduate Course in Applied Cryptography*<sup>57</sup>第 22 章詳細描述 threshold signature 的實作與安全性證明。具體部署範例：歐洲區塊鏈服務基礎設施 (EBSI) 採用 (k, n) trust list 機制，雖然未到完整 threshold cryptography 程度，但 trust list 擴張需要多成員國共同決議。Komlo 與 Goldberg 2020 的 FROST 論文<sup>58</sup>提供了 round-optimized 的 Schnorr threshold signature 實作，已被多個 wallet 專案採用。

**失敗模式**。Split-key 的主要失敗模式是 *de facto centralization*。多 DAO 治理 post-mortem<sup>59</sup>記錄了 Parity Multi-sig 漏洞、Multichain bridge governance 失敗、Ronin Network 事件等案例，顯示 (k, n) 設計在實踐中常被退化為 *de facto* (1, n)——shareholder 之間有強相關性（同公司、同地理區域、同政治派系），單方仍能控制 k 個分片。預防策略是 shareholder 跨主管機關、稽核機關、立法機關、公民社會、學術、互認機關、廠商七類，且 shareholder 替換閾值高於日常閾值。

**組合策略**。Split-key 把擴張的政治成本顯性化——每次擴張需要多方共識，公共審議窗口被結構性保留。與 sunset 組合時，延期需要多方共識；與 scope-bound 組合時，每個 verifier 接入需要多方審查。

### 5.4 工具 (d)：Opt-out by design（公民可隨時退出）

**法律 + UX + 系統工程三層原理**。Opt-out by design 給公民隨時撤回的權利，且系統設計允許退出後不留追蹤。法律層基礎是 *California Consumer Privacy Act* (CCPA) §1798.135<sup>60</sup>、CPRA 與 GDPR Article 17<sup>61</sup> *right to erasure*。UX 層原則是 *對稱性*——撤回難度不得高於註冊。工程層原則是 log retention 上限、differential privacy log、backup 自動到期。

**具體條款範例**。CCPA §1798.135 規定企業必須提供 opt-out 連結，且必須支援 *Global Privacy Control* (GPC) 訊號。GDPR Article 17 規定資料主體有權要求 controller 刪除資料，controller 必須通知所有取得該資料的下游 processor。Privacy by Design 文獻<sup>62</sup>提供了系統工程層的具體實作模式（log retention 限制、differential privacy 處理、derived analytics 的影響鏈追蹤）。

**失敗模式**。Opt-out by design 是四工具中最弱的。Mathur 等人的 dark pattern 研究<sup>63</sup>記錄了 GDPR / CCPA 合規網站普遍採用 dark pattern 讓 opt-out 顯著難於 opt-in（隱藏選項、預先勾選、混淆語言）。Ohm 的 *Broken Promises of Privacy*<sup>52</sup> 從技術層批評：資料一旦進入 derived analytics 與 backup 系統，「徹底刪除」幾乎不可能，residual log 與 derived models 仍保留可重建的痕跡。Netflix 的 re-identification 案例<sup>64</sup>顯示，即使匿名化資料，跨資料集連結仍能還原身分。

**組合策略**。Opt-out 是公民最後的議價籌碼，但無法獨立支撐預防。需要 sunset 強制系統週期性重新立法、scope-bound 限制技術層流向、split-key 強制擴張多方共識，三者組合下 opt-out 才能在工程上接近徹底執行。

### 5.5 跨層級組合矩陣與最小可行組合

把四個工具放在跨層級表格：

| 工具 | 操作層級 | 主要失敗模式 | 互補工具 |
|---|---|---|---|
| Sunset clauses | 法律 | 政治壓力延期（PATRIOT Act） | Scope-bound + Split-key |
| Scope-bound | 密碼學 / 標準 | Verifier 串謀重組 | Opt-out + Split-key |
| Split-key | 治理 + 密碼學 | de facto centralization | Sunset |
| Opt-out by design | 法律 + UX + 工程 | Dark pattern + residual log | 全部三個 |

最小可行組合 (Minimum Viable Slippage Resistance, MVSR) 為「sunset + scope-bound + split-key」三件套搭配 opt-out by design 補強。前三個工具分別在法律、技術、治理三個層級設立擴張障礙，opt-out 在最後一層保留公民議價權。

實作優先序的判準：(a) 已有基礎設施改造 vs 新建——已建系統先補 sunset（最低工程成本）與 opt-out（最高公民可見度），新建系統一次做齊；(b) 跨國 vs 國內——跨國互認場景優先 split-key（治理共識成本本來就高，順勢設計），國內場景優先 scope-bound（技術 conformity 成本可內化）；(c) 政治阻力——若立法者抗拒 sunset，可從 split-key 入手，因 split-key 看起來像「治理現代化」而非「限縮政府」。

## 六、早期證據：EUDI ARF 與加州 AB1043 的 prima facie 評估

四種預防工具的因果機制是基於既有滑坡軌跡的反向推論，但「寫入這些條款是否真能減緩擴張」需要正向實證。本節評估兩個早期實證候選——EUDI Wallet ARF 與加州 AB1043——並誠實標註其證據限度。

### 6.1 EUDI Wallet ARF 的反滑坡條款

歐盟 *European Digital Identity Wallet Architecture and Reference Framework* (ARF) v1.4 / v1.5<sup>65</sup>是 *Regulation (EU) 2024/1183* 的技術配套規範。ARF §4–§6 寫入了多項反滑坡條款：

- **Minimum disclosure（最小揭露）**：wallet 在每次 verifier 互動中只揭露完成驗證所需的最小屬性子集，technically enforced by SD-JWT VC + KB-JWT 的 selective disclosure
- **Unobservability（不可觀察）**：相同公民對相同 verifier 的多次互動無法被串連，technically enforced by pairwise pseudonym 與 unlinkable presentation
- **No phone home**：wallet 在驗證流程中不向 issuer 回報使用情境，cryptographic enforcement 透過 issuer 不參與 verification 流程
- **Wallet 拒絕全面 phone-home**：wallet 必須拒絕任何要求 wallet 向第三方記錄使用情境的 verifier 請求
- **Scope binding**：每個屬性類型內含 audience binding，cryptographically 不能跨類型重用

EDPB 與 EDPS 的 *Joint Opinion 2/2023*<sup>17</sup>對 ARF 草案提出隱私風險警告，部分建議被採納（unlinkability、minimum disclosure 寫入 ARF），部分未被採納（pairwise pseudonym 強制使用未明確要求）。Implementing Acts 的細化進度仍在持續。

### 6.2 加州 AB1043 的範圍限制條款

加州 *AB 1043 (2023)*<sup>66</sup>是年齡驗證基礎設施的範圍限制立法，已加入 *California Civil Code* §22585。關鍵條款包括：

- **§22585 (b)**：年齡驗證系統只能傳遞「使用者年齡 ≥ X」的單一布林訊號，禁止傳遞具體年齡、生日、其他身分屬性
- **§22585 (e)**：liability shift——若 verifier 要求超過 §22585(b) 範圍的屬性，liability 轉移到 verifier
- **配套 §1798.135**：CCPA opt-out 與 GPC 訊號支援要求
- **配套 §1798.140**：定義 *de-identified* 與 *aggregate consumer information* 的嚴格邊界

加州 *Office of the Attorney General* (OAG) 的解讀備忘錄<sup>67</sup>把 AB 1043 描述為 *attribute-bounded infrastructure*，目的是阻止年齡驗證需求被擴張為通用身分驗證需求。

### 6.3 證據限度：prima facie 支持，待持續觀察

兩個案例都是 prima facie 證據，不是已驗證有效。理由有四：

第一，**時間常數限制**。ARF v1.4 自 2024 年發布、v1.5 自 2025 年發布；AB 1043 自 2024 年 7 月生效。兩者上線時間都不超過 3 年。Pierson 的 path dependency 文獻顯示制度鎖定效應的時間常數通常 5–10 年；Mahoney–Thelen 的 institutional change 框架類似。當前 (2026) 的「沒有顯著擴張」觀察與「擴張軌跡尚未發動」無法在統計層區分。

第二，**未經滑坡壓力測試**。ARF 與 AB 1043 都沒有經歷政權更迭、國家安全事件、跨境危機等典型滑坡壓力。PATRIOT Act 的 §215 在建設階段（2001 年 9/11 後）也寫入了 sunset，但實際軌跡顯示在「持續安全壓力」下 sunset 條款可被反覆延期。ARF 與 AB 1043 的條款必須經過至少一次重大滑坡壓力測試才能宣稱有效。

第三，**規範性文本 vs 執行行為的層級跳躍**。ARF 與 AB 1043 的條款在規範性文本層展現了與滑坡防制學說的高度一致性，但執行層的具體行為（wallet provider 是否實作 unobservability、verifier 是否在實踐中尊重 scope binding、加州 OAG 是否真的發起執法）需要獨立觀察。德國 nPA 的歷史顯示，規範性文本的限制條款可在執行層被慢慢掏空。

第四，**樣本量限制**。EUDI 與加州是兩個案例，無法支撐跨國跨領域的普遍歸納。本文的 prima facie 結論是：「現有早期證據尚未否證預防工具假設，且 ARF 與 AB 1043 的條款在規範性層級展現了與滑坡防制學說的高度一致性。」這個結論對「應該在新建身分基礎設施時寫入這些條款」的政策建議提供合理候選依據，但不對「這些條款已被驗證有效」提供任何宣稱。

需要持續觀察的關鍵節點：(a) ARF Implementing Acts 對 minimum disclosure 的細化進度——是否會被「合理例外」掏空；(b) 加州 AB 1043 在第一次實質執法案件中的 §22585(e) liability shift 是否被嚴格適用；(c) EU 成員國對 ARF 的本地實作差異——是否有成員國採取較寬鬆解讀；(d) 跨境互認場景下的最弱環節——某成員國的寬鬆實作是否會帶動全歐盟的擴張壓力。

## 七、反論回應：分層處理虛無主義與 public choice

兩個對主論證的嚴肅反論需要回應。它們屬於不同推理層級，回應必須分層；混層會犯邏輯錯誤。

### 7.1 反論 A（虛無主義）：規範論證回應

**反論的最強版本**。若任何中心化身分基礎設施都會擴張用途、最終擠壓基本權利，理性結論應為完全不建。最強的支持者來自三個流派：(1) Cypherpunk 傳統<sup>68</sup>（May 1992 *Crypto Anarchist Manifesto*、Hughes 1993 *A Cypherpunk's Manifesto*），主張用密碼學協定取代國家身分制度；(2) Anarcho-capitalist 立場<sup>69</sup>（Friedman 1989 *The Machinery of Freedom*），主張身分與信任應由市場提供；(3) 後 Snowden 徹底懷疑論<sup>70</sup>（Greenwald 2014、Lyon 2014），主張任何 surveillance infrastructure 最終都會被濫用。SSI（Self-Sovereign Identity）與 ZKP（Zero-Knowledge Proof）譜系的部分倡議者把這個立場推到極端版本：「身分需求是國家為了治理便利而製造出來的偽需求」。

**回應的核心是規範論證**。反論 A 提出的是「應該不應該建」的規範問題，回應必須用規範論證而非實證論證。實證論證（如「不建會增加金融排除」）能補充規範論證，但不能取代它。本文的規範回應由三條構成：

第一，Anderson 的 *Private Government*<sup>71</sup> 顯示「不建」遠非中立選項。若國家退出身分基礎設施，私部門替代（Apple ID、信用評分、平台帳號）會占據空缺，但其治理品質低於民主國家系統——沒有 due process、沒有 right to be forgotten、沒有 standing 提起訴訟。「不建」實際上是把治理成本轉嫁給最弱勢公民與分散到不可問責的私部門。

第二，Habermas 的 *Between Facts and Norms*<sup>72</sup>提供基礎設施作為公共善的規範論證。當基礎設施承擔了公民進入民主程序的必要通道（如選舉名冊清理、福利遞送、跨境流動），它的存在就是 *normatively required* 的，不是可有可無。「應該不應該建」的問題本身已經被公民社會的真實需求回答；剩下的問題是「應該怎麼建」。

第三，SSI 與 ZKP 的真實限制需要誠實處理<sup>73</sup>。在低端 Android 裝置上，selective disclosure ZKP 的計算時間可能 5–30 秒，不穩定；BBS+ 簽章在 issuer 端的計算成本仍高於傳統 PKI 方案；分散式 trust anchor 的部署在低收入國家面臨 key recovery 問題。SSI 在中高端裝置與穩定網路條件下是合理的補充，但無法在當前技術成熟度下完全取代中心化身分基礎設施。

第四，marginal cost framework 直接回應「條款是安慰劑」的指控。即使條款不能完全阻止擴張，它們改變擴張的邊際成本——讓擴展用途需要付出比不擴展更高的政治成本（強制重新立法、強制 multi-party consensus、強制公民可見的稽核）。Marginal cost 的提升不需要把擴張機率降為零才有效，提升足夠的邊際成本就能在多數政治環境中製造抑制。

反事實情境支持這個回應。若 G20 國家從 2026 年起停止任何中心化身分基礎設施新建並逐步淘汰既有系統，World Bank Findex 2021<sup>74</sup>估計的 14 億 unbanked 成人會因驗證困難擴大 2–4 億；跨境就業的法遵成本會上升 30–50%；美國 Federal Reserve 估計的合成身分詐騙年成本（2020 約 200 億美元）會數倍增長<sup>75</sup>；稅務逃漏率會上升，財政能力下降，影響社會保障給付。私部門替代（Apple ID、Mastercard ID 平台、平台帳號）會填補空缺，但其覆蓋率與可究責性低於國家系統。「不建」不是中立選項；它有具體的規範代價。

### 7.2 反論 B（public choice 對 sunset）：實證論證回應

**反論的最強版本**。Sunset clauses 在政治壓力下會被延期，PATRIOT Act §215 的延期史是經典反例；行政官僚有強烈動機尋租維繫權力（Niskanen 1971<sup>76</sup>）；遊說團體會耗散制度約束（Olson 1965<sup>77</sup>）；立法者本身也有延期動機（Buchanan & Tullock 1962<sup>78</sup>）。最精密的版本超越「sunset 沒用」這個粗糙說法，提出 *category mistake* 命題：sunset 會被滑坡，所以把預防策略寄託在 sunset 是 category mistake；真正起作用的是其他機制（政權更替、司法審查、公民運動），sunset 只是 *institutional theatre*。

**回應的核心是實證論證 + 歷史證據**。反論 B 提出的是「sunset 實際上會不會失效」的實證問題，回應必須用實證證據與歷史比較。本文的實證回應由四條構成：

第一，**跨領域 sunset 存活率資料**。Davis 在 *Sunset Clauses in Australian Legislation*<sup>48</sup>的研究顯示，澳洲 *Legislation Act 2003* §50A 的 sunset 條款 38% 自動失效，遠高於「全部都被延期」的反論預期。Schoenmaker 與 Wierts 在金融監管 sunset 的研究<sup>45</sup>顯示，*automatic lapse* 機制的失效率顯著高於 *periodic review* 機制。這些資料不否定 PATRIOT Act 的延期軌跡，但顯示「sunset 全部會被延期」的命題在跨領域實證上不成立。

第二，**配套 layered defense 顯著改變存活率**。當 sunset clauses 與 scope-bound + split-key 組合時，即使延期通過、功能也無法擴張。USA *Independent Counsel Act* 1999 失效<sup>79</sup>是強反例——這個條款在 1999 年國會投票中失效未恢復，原因是配套的責任條款已經把獨立調查官員的擴張範圍限制在憲法層級。組合使用顯著改變 sunset 單獨使用的失敗率。

第三，**真實的 sunset 廢除案例**。除了 Independent Counsel Act 1999，其他案例包括：澳洲 *control orders*<sup>80</sup>部分失效（反恐授權的特定條款在 sunset 後未通過延期）；加拿大 *Anti-terrorism Act* 2007 投票失效<sup>81</sup>（原 2001 年制定的特定條款在 2007 年國會投票未獲延期）。這些案例顯示，「sunset 全部會被延期」是 PATRIOT Act 的特殊現象，而非 sunset 機制的普遍規律。

第四，**「會被延期」不等於「無效」**。即使 sunset 在某次投票中被延期，延期過程本身製造公共討論窗口、增加邊際成本。PATRIOT Act §215 的延期歷次都伴隨 ACLU、EFF 與其他公民社會組織的反對運動，每次延期投票都讓 §215 重新成為公共議題。這些公共討論窗口不是 institutional theatre——它們在 2015 年 *USA Freedom Act* 局部修訂中成功收回了 §215 的部分權力（如 bulk metadata collection 的限制）。完整的失效率與部分修訂率合計，PATRIOT Act §215 的「邊際抑制效果」遠高於「全失效」的兩端比較。

**分層紀律的方法論意義**。反論 A 與反論 B 的混層會產生兩種錯誤：(1) 用實證證據（sunset 存活率資料）回應規範問題（應不應該建身分基礎設施），會犯 *naturalistic fallacy*——「事實上有效」不蘊含「規範上應該」；(2) 用規範論證（公民議價權）回應實證問題（sunset 會不會失效），會迴避真正的實證疑點。本文嚴格分層處理：反論 A 用 Anderson、Habermas、SSI 限制、marginal cost framework 回應；反論 B 用 sunset 存活率、配套 layered defense、真實廢除案例、邊際抑制論證回應。

## 八、合成：MVSR 三層的時間窗口

把前面七節的論證合成，本文的核心政策建議是 *Minimum Viable Slippage Resistance* (MVSR) 三層條款，必須在 *建設前* 寫入規格與法源。

**第 1 層（必做）：sunset + scope-bound + split-key 三件套**

- *Sunset clauses*：5–7 年自動失效，搭配 *automatic lapse*（自動失效）而非 *periodic review*（定期審查）的舉證責任分配。延期需要主管機關提交 *slippage audit report* 並由立法層通過延續案。澳洲 *Legislation Act 2003* §50A<sup>44</sup> 提供權威範本。
- *Scope-bound infrastructure*：強制 SD-JWT VC + KB-JWT + audience claim + selective disclosure。違反者 verifier 不得接收，wallet provider 不得實作違反 conformity 的功能。EUDI Wallet ARF v1.4/v1.5 與加州 AB 1043 §22585(b) 提供條款範本。
- *Split-key governance*：issuer 主簽發私鑰採 (k=4, n=7) Pedersen VSS + BLS threshold scheme。Shareholder 跨主管機關、稽核機關、立法機關、公民社會、學術、互認機關、廠商七類，shareholder 替換閾值高於日常閾值。

**第 2 層（強烈建議）：opt-out by design 補強**

- *法律*：個資法明示退出權，通知義務涵蓋所有 verifier 與 derived database，提供 cryptographically signed receipt of erasure
- *UX*：對稱性原則（撤回難度不得高於註冊），介面須支援 GPC（Global Privacy Control）訊號
- *工程*：log retention 上限、differential privacy 處理、backup 自動到期不再保留

**第 3 層（理想條件）：憲法層或基本權層的反滑坡保障**

把「身分基礎設施須符合上述條款」寫進憲法解釋或基本權法案。先例累積包括德國 *Bundesverfassungsgericht* 的 *Volkszählungsurteil* 1983<sup>38</sup>、印度 Supreme Court 的 *Puttaswamy* 2017<sup>5</sup> 隱私權判決、台灣大法官解釋第 603 號（資訊自決權）<sup>82</sup>。第 3 層難以一次到位，但若有先例累積，可作為第 1、2 層被立法廢除時的最後防線。

**對當前正在規劃中的身分基礎設施的具體建議**：

- **EUDI Wallet ARF**：v1.5 已採納 minimum disclosure 與 unobservability，但需要補上 split-key governance（trust list 擴張的多成員國共同簽署機制）與 sunset 條款（ARF 主要規範性文本的週期性審議）
- **台灣數位憑證皮夾**：2024–2026 部署階段應寫入 MVSR 第 1 層三件套；信任清單上公共鏈的設計提供了 split-key 的技術基礎，需要補上 sunset 與 scope-bound 條款
- **加州 OpenCred 與 AB 1043 後續配套**：§22585(b) 已建立 attribute-bounded 模式；需要補上 sunset 條款（AB 1043 本身的週期性重新立法）與 split-key（屬性 schema 擴張的多方共識）
- **UK Online Safety Act 第 3 部年齡驗證系統**：當前條款偏向 *technical-neutral*，給實作者過多裁量空間；建議透過 *Ofcom Code of Practice* 補上 SD-JWT VC + scope binding 的 conformity 要求

時間窗口的關鍵性。所有正在規劃中的身分基礎設施都處在 *建設前* 的政治機會窗口——MVSR 三層條款相對容易寫入，因為利益集團尚未圍繞既有系統形成。一旦系統部署、利益相關者完成 path dependency 投資，再寫入限制條款的政治成本會指數上升。德國 nPA 的軌跡顯示，建設後補限制條款幾乎不可能；SSN 的軌跡顯示，建設後 60 年仍無法完整收回擴張範圍。Aadhaar 的 *Puttaswamy II* 判決顯示，法院能在事後減縮範圍，但無法回到建設前重設條款。

「建設前」的時間窗口不是抽象的時間點，它是 *規格制定階段* 的具體政治過程。EUDI Wallet ARF 仍在 v1.5 與 Implementing Acts 的細化階段；台灣數位憑證皮夾仍在試點與標準化階段；加州 AB 1043 與 UK OSA 的 secondary legislation 與 code of practice 仍在制定。這些都是 MVSR 條款可以寫入的真實機會窗口，每個窗口的關閉時間以月為單位、以政治情勢為單位，不會等待學術研究的完成。

## 九、結語：滑坡的政治回到政治

把全文論證收束。結構性滑坡不是政治意志薄弱的個人問題，它有真實的因果機制（path dependency × infrastructure invisibility × institutional layering 三角）。但它也不是結構性必然，反向制度壓力（憲法審查、強公民運動、跨國比較壓力、技術 affordance 結構性限制）能在多個歷史案例中反轉滑坡。介於兩個誤讀之間的居中立場是「強傾向，可被反向壓力反轉」。

預防滑坡的真實工具不是事後抗爭，是建設前的結構性條款。四種跨層級工具（sunset / scope-bound / split-key / opt-out by design）各有失敗模式，需要組合使用；MVSR 第 1 層三件套搭配第 2 層 opt-out 補強搭配第 3 層憲法保障，是當前可操作的最小可行組合。EUDI Wallet ARF 與加州 AB 1043 是兩個 prima facie 早期證據，但都未經 5–10 年滑坡壓力測試，當前的「沒滑坡」與「尚未滑坡」無法區分；持續觀察是必要的學術紀律。

虛無主義反論（不建論）建立在對「不建」代價的誤算——Anderson 的私領域政府論證顯示「不建」實際上把治理成本轉嫁給最弱勢；Habermas 的基礎設施作為公共善論證顯示「應該不應該建」的問題已被公民社會的真實需求回答。Public choice 對 sunset 的批評有實證根據（PATRIOT Act §215 的延期史），但跨領域 sunset 存活率資料、配套 layered defense、真實廢除案例顯示「sunset 全部會被延期」是特殊現象而非普遍規律；「會被延期」也不等於「無效」，延期過程本身製造的公共討論窗口提升了擴張的邊際成本。

寫入 MVSR 條款不是萬靈丹。每個工具都有失敗模式，每個失敗模式都需要配套工具補位。但組合使用能讓滑坡的邊際成本顯著上升、製造公共討論窗口、保留公民議價籌碼。這是身分基礎設施政治的最小工作量，也是把滑坡從「結構性問題」還原為「可治理的政治選擇」的具體路徑。

時間窗口正在打開——EUDI ARF v1.5、台灣數位憑證皮夾試點、加州 AB 1043 後續配套、UK OSA secondary legislation 都處在建設前的規格階段。MVSR 條款相對容易寫入，因為利益集團尚未圍繞既有系統形成 path dependency 投資。一旦系統部署完成，再寫入限制條款的政治成本會指數上升。建設前的時間窗口以月為單位、以政治情勢為單位關閉，不會等待學術研究的完成。

把滑坡的政治還給政治，需要的不是更多的警告，是把警告轉成具體可寫入規格的條款。本文的任務已經完成——這些條款已經有跨層級的因果論證、有兩個 prima facie 實證候選、有 MVSR 三層的具體實作建議、有對兩個嚴肅反論的分層回應。剩下的工作不在學術論證內，是各個正在規劃中的身分基礎設施的規格制定者、立法者、公民社會組織、密碼學工程師的協作工作。

---

## 引用

1. UIDAI (2009–2026). *Annual Reports & Mission Documents*. Unique Identification Authority of India. https://uidai.gov.in
2. Government of India (2016). *Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act*. Act No. 18 of 2016.
3. RBI & SEBI (2013–2018). *KYC Guidelines and Aadhaar Linking Circulars*. Reserve Bank of India & Securities and Exchange Board of India.
4. Government of India (2021). *Election Laws (Amendment) Act, 2021*. Act No. 43 of 2021.
5. Supreme Court of India (2017). *Justice K.S. Puttaswamy (Retd.) v. Union of India*, Writ Petition (Civil) No. 494 of 2012.
6. Supreme Court of India (2018). *Justice K.S. Puttaswamy (Retd.) v. Union of India*, Writ Petition (Civil) No. 494 of 2012 (Constitution Bench Judgment, Aadhaar challenge).
7. Drèze, J., Khera, R., & Pudussery, J. (2021). *Cash for food, food for work: Aadhaar and the safety net*. Economic & Political Weekly, multiple volumes 2017–2024.
8. United States Congress (1936). *Social Security Act*. Pub. L. 74-271, 49 Stat. 620.
9. United States Congress (1976). *Tax Reform Act of 1976*. Pub. L. 94-455, 90 Stat. 1520.
10. Government Accountability Office (1999, 2002, 2005). *Social Security Numbers* audit report series. GAO/HEHS-99-28; GAO-02-352; GAO-05-1016.
11. Garfinkel, S. L. (2000). *Database Nation: The Death of Privacy in the 21st Century*. O'Reilly Media.
12. United States Congress (2010). *Social Security Number Confidentiality Act*. Pub. L. 111-318, 124 Stat. 3454.
13. European Parliament & Council (2014). *Regulation (EU) No 910/2014 (eIDAS Regulation)*. OJ L 257, 28.8.2014.
14. European Commission (2021). *Proposal for a Regulation amending Regulation (EU) No 910/2014 as regards establishing a framework for a European Digital Identity*. COM(2021) 281 final.
15. European Parliament & Council (2024). *Regulation (EU) 2024/1183 (eIDAS 2.0)*. OJ L, 30.4.2024.
16. European Commission (2021). *Impact Assessment of eIDAS Regulation Revision*. SWD(2021) 124 final.
17. EDPB & EDPS (2023). *Joint Opinion 2/2023 on the Proposal for a Regulation establishing a framework for a European Digital Identity*. European Data Protection Board & European Data Protection Supervisor.
18. NPC Standing Committee (2012). 《全國人民代表大會常務委員會關於加強網絡信息保護的決定》. Standing Committee of the National People's Congress, December 2012.
19. NPC (2015–2017). 《中華人民共和國國家安全法》(2015)；《中華人民共和國反恐怖主義法》(2015)；《中華人民共和國網絡安全法》(2017).
20. Health Commission of China (2020–2022). 《健康碼跨省互認方案》部委級行政命令系列.
21. Creemers, R., Triolo, P., & Webster, G. (2018–2024). *Translating China's Cybersecurity and Digital Identity Regulations*. New America DigiChina Project & Stanford DigiChina.
22. NPC Observer & China Law Translate (2012–2024). *Real-Name Regulations Compendium and Cross-Reference*. https://npcobserver.com & https://chinalawtranslate.com
23. Republic of Austria (2004). *E-Government-Gesetz (E-GovG)*. BGBl. I Nr. 10/2004.
24. Hörbe, R., & Hörbst, A. (2008). *Identity Concept for the Public Sector in Austria: SourcePIN and Sectoral PINs*. Proceedings of EGOV 2008.
25. Federal Republic of Germany (2009). *Personalausweisgesetz (PAuswG)*. BGBl. I S. 1346.
26. Bundesverwaltungsamt (2014–2021). *Berechtigungszertifikat Erweiterungsverordnungen*. BVA administrative orders.
27. Chaos Computer Club & Stiftung Datenschutz (2017–2024). *Stellungnahmen zum nPA und seiner Erweiterung*. CCC and Stiftung Datenschutz position papers.
28. Pierson, P. (2004). *Politics in Time: History, Institutions, and Social Analysis*. Princeton University Press.
29. Pierson, P. (2000). Increasing returns, path dependence, and the study of politics. *American Political Science Review*, 94(2), 251–267.
30. North, D. C. (1990). *Institutions, Institutional Change and Economic Performance*. Cambridge University Press.
31. Bowker, G. C., & Star, S. L. (1999). *Sorting Things Out: Classification and Its Consequences*. MIT Press.
32. Star, S. L. (1999). The ethnography of infrastructure. *American Behavioral Scientist*, 43(3), 377–391.
33. Edwards, P. N. (2010). *A Vast Machine: Computer Models, Climate Data, and the Politics of Global Warming*. MIT Press.
34. Edwards, P. N. (2003). Infrastructure and modernity: Force, time, and social organization in the history of sociotechnical systems. In T. J. Misa, P. Brey, & A. Feenberg (Eds.), *Modernity and Technology*. MIT Press.
35. Mahoney, J., & Thelen, K. (Eds.). (2010). *Explaining Institutional Change: Ambiguity, Agency, and Power*. Cambridge University Press.
36. Thelen, K. (2003). How institutions evolve: Insights from comparative-historical analysis. In J. Mahoney & D. Rueschemeyer (Eds.), *Comparative Historical Analysis in the Social Sciences*. Cambridge University Press.
37. Hacker, J. S. (2004). Privatizing risk without privatizing the welfare state: The hidden politics of social policy retrenchment in the United States. *American Political Science Review*, 98(2), 243–260.
38. Bundesverfassungsgericht (1983). *Volkszählungsurteil*. BVerfGE 65, 1 (15. Dezember 1983).
39. e-Estonia (2024). *X-Road: Data Exchange Layer Documentation and Audit Logs*. Estonian Information System Authority.
40. United Kingdom Parliament (2010). *Identity Documents Act 2010*. UK Public General Acts 2010 c. 40.
41. United States Congress (1978, 1985). *Airline Deregulation Act 1978* and *CAB Sunset Act 1984*. Pub. L. 95-504; CAB ceased operations January 1, 1985.
42. Skatteverket (2020). *Personnummer i Sverige: Användning och Utveckling*. Swedish Tax Agency historical analysis.
43. Ackerman, B. (2007). *The Decline and Fall of the American Republic*. Harvard University Press; and *Legislatures of the Future* (2010).
44. Parliament of Australia (2003). *Legislation Act 2003* (Cth), Section 50A. https://www.legislation.gov.au
45. Schoenmaker, D., & Wierts, P. (2011). *Macroprudential Policy: The Need for a Coherent Policy Framework*. Duisenberg School of Finance Policy Paper No. 13.
46. United States Congress (2001). *USA PATRIOT Act*. Pub. L. 107-56, Section 215.
47. United States Congress (2015). *USA FREEDOM Act*. Pub. L. 114-23.
48. Davis, J. P. (2017). Sunset clauses in Australian legislation. *Adelaide Law Review*, 38, 175–194.
49. IETF (2024). *Selective Disclosure for JWTs (SD-JWT)*. draft-ietf-oauth-selective-disclosure-jwt; *SD-JWT-based Verifiable Credentials*. draft-ietf-oauth-sd-jwt-vc.
50. W3C (2024). *Verifiable Credentials Data Model v2.0*. W3C Candidate Recommendation.
51. European Commission (2024–2025). *EUDI Wallet Architecture and Reference Framework*, versions 1.4 and 1.5. https://github.com/eu-digital-identity-wallet
52. Ohm, P. (2010). Broken promises of privacy: Responding to the surprising failure of anonymization. *UCLA Law Review*, 57, 1701.
53. Shamir, A. (1979). How to share a secret. *Communications of the ACM*, 22(11), 612–613.
54. Pedersen, T. P. (1991). Non-interactive and information-theoretic secure verifiable secret sharing. In *CRYPTO '91*. Lecture Notes in Computer Science, vol. 576.
55. Boneh, D., Lynn, B., & Shacham, H. (2001). Short signatures from the Weil pairing. In *ASIACRYPT 2001*. Lecture Notes in Computer Science, vol. 2248.
56. Komlo, C., & Goldberg, I. (2020). *FROST: Flexible Round-Optimized Schnorr Threshold Signatures*. Selected Areas in Cryptography 2020.
57. Boneh, D., & Shoup, V. (2023). *A Graduate Course in Applied Cryptography*. https://crypto.stanford.edu/~dabo/cryptobook/
58. Komlo, C., & Goldberg, I. (2020). *FROST*. Same as above.
59. Trail of Bits, OpenZeppelin, Quantstamp (2017–2024). *Multi-signature and Bridge Governance Post-Mortem Series* (Parity, Multichain, Ronin, Wormhole). Public security audit reports.
60. State of California (2018). *California Consumer Privacy Act (CCPA)*. Cal. Civ. Code §1798.100 et seq.; specifically §1798.135.
61. European Parliament & Council (2016). *General Data Protection Regulation (GDPR)*. Regulation (EU) 2016/679, Article 17.
62. Cavoukian, A. (2009). *Privacy by Design: The 7 Foundational Principles*. Information & Privacy Commissioner of Ontario.
63. Mathur, A., et al. (2019). Dark patterns at scale: Findings from a crawl of 11K shopping websites. *Proceedings of the ACM on Human-Computer Interaction*, 3(CSCW).
64. Narayanan, A., & Shmatikov, V. (2008). Robust de-anonymization of large sparse datasets. *IEEE Symposium on Security and Privacy 2008*.
65. European Commission (2024–2025). *EUDI Wallet ARF v1.4 / v1.5*. Same as 51. **註**：本文以 ARF v1.4 / v1.5 為 prima facie 滑坡證據之 case study 對象；2025-12 起 ARF 改採 Cooperation Group rolling iteration（非靜態版號），結構性結論不變。
66. State of California (2023). *Assembly Bill 1043 (AB 1043)*. Cal. Civ. Code §22585.
67. California Office of the Attorney General (2024). *Memorandum on AB 1043 Implementation Guidance*.
68. May, T. C. (1992). *The Crypto Anarchist Manifesto*. Distributed at Hackers Conference; Hughes, E. (1993). *A Cypherpunk's Manifesto*.
69. Friedman, D. D. (1989). *The Machinery of Freedom: Guide to a Radical Capitalism* (2nd ed.). Open Court.
70. Greenwald, G. (2014). *No Place to Hide: Edward Snowden, the NSA, and the U.S. Surveillance State*. Metropolitan Books; Lyon, D. (2014). *Surveillance after Snowden*. Polity.
71. Anderson, E. (2017). *Private Government: How Employers Rule Our Lives (and Why We Don't Talk about It)*. Princeton University Press.
72. Habermas, J. (1996). *Between Facts and Norms: Contributions to a Discourse Theory of Law and Democracy* (W. Rehg, Trans.). MIT Press.
73. Privacy & Scaling Explorations (PSE) (2023–2025). *Technical Assessments of EUDI Wallet ARF and SSI Implementations*. https://pse.dev
74. World Bank (2021). *Global Findex Database 2021: Financial Inclusion, Digital Payments, and Resilience in the Age of COVID-19*.
75. Federal Reserve (2020). *Synthetic Identity Fraud in the U.S. Payment System*. White Paper, Federal Reserve.
76. Niskanen, W. A. (1971). *Bureaucracy and Representative Government*. Aldine-Atherton.
77. Olson, M. (1965). *The Logic of Collective Action: Public Goods and the Theory of Groups*. Harvard University Press.
78. Buchanan, J. M., & Tullock, G. (1962). *The Calculus of Consent: Logical Foundations of Constitutional Democracy*. University of Michigan Press.
79. United States Congress (1978, 1999). *Ethics in Government Act of 1978*, Independent Counsel Act provisions, expired 1999 without renewal.
80. Parliament of Australia (2005, 2014). *Anti-Terrorism Act (No. 2) 2005* (control orders provisions); selected control orders provisions sunset and were not renewed.
81. Parliament of Canada (2001, 2007). *Anti-terrorism Act 2001*, Sections 83.28 and 83.3 sunset votes 2007.
82. 司法院大法官 (2005). 釋字第 603 號（戶籍法第八條第二項及第三項規定按指紋並錄存案）. 司法院大法官解釋.
