---
title: "聖塔菲研究所（SFI）與複雜科學：起源、運作與 faculty 制度"
description: "聖塔菲研究所成立於 1984 年，是專注複雜系統科學的獨立非營利研究機構。一篇中性百科體介紹，涵蓋複雜科學的起源與應用、SFI 的創立沿革與營運財務，並詳述其小常駐核心、龐大外部教授網絡與 Omidyar 博士後構成的 faculty 制度。"
pubDate: 2026-06-05
tags: ["santa-fe-institute", "complexity-science", "complex-systems", "interdisciplinary-research", "faculty-system", "emergence", "research-institution"]
category: "複雜科學"
lang: "zh-TW"
aiModel: "Claude Opus 4.8"
aiPrompt: "聖塔菲研究所（SFI）是什麼樣的研究機構？複雜科學如何起源、它研究什麼、可以怎麼使用；SFI 的歷史、營運模式，特別是其 faculty（resident / external / postdoctoral）制度如何運作？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-06-05-santa-fe-institute-complexity-intro"
aiGeneratedDate: 2026-06-05
humanReviewed: true
---

聖塔菲研究所（Santa Fe Institute，縮寫 SFI）是一所成立於 1984 年、位於美國新墨西哥州聖塔菲、專注於複雜系統科學（complexity science）的獨立非營利研究機構<sup>1</sup><sup>2</sup>。它由以 George Cowan 為首、包含諾貝爾物理獎得主 Murray Gell-Mann 在內的八位科學家共同創立，多數人出身鄰近的洛斯阿拉莫斯國家實驗室（Los Alamos National Laboratory）<sup>2</sup><sup>3</sup>。SFI 不授予學位、不收取常規學費、不設系所，也沒有傳統的終身職位（tenure），其運作以一個小型常駐研究核心、龐大的外部研究網絡與流動的博士後制度為特徵<sup>2</sup><sup>16</sup>。SFI 將自身定位為跨越物理、生物、計算與社會科學的理論研究論壇，主張這種去學科邊界的安排有助於促成傳統大學系所難以發生的協作<sup>1</sup><sup>2</sup>。

需要先區分兩件常被混為一談的事。「複雜科學」是一個鬆散的跨領域研究取徑，並不等於 SFI 這個機構；SFI 推動了複雜科學的制度化，也是這個領域最具象徵性的據點，但複雜科學的研究分布在世界各地許多機構，SFI 只是其中之一<sup>27</sup><sup>28</sup>。理解這所機構，可以先從複雜科學這個領域談起，再回到 SFI 自身的歷史、營運與人員制度。

## 複雜科學的起源

複雜科學並非憑空出現的單一學科，而是 1970 至 1980 年代由數條既有研究線匯流而成<sup>27</sup><sup>35</sup>。最早的源頭之一是 Norbert Wiener 於 1948 年提出的控制論（cybernetics），它以資訊與控制理論確立了「回饋」（feedback）與非線性在工程與生物系統中的角色<sup>35</sup>。與之平行的是 Ludwig von Bertalanffy 等人自 1950 年代發展的一般系統論（general systems theory），強調跨領域的系統共通原則<sup>35</sup>。

另一條源頭來自物理化學。Ilya Prigogine 因非平衡熱力學、特別是耗散結構（dissipative structures）理論獲得 1977 年諾貝爾化學獎，他指出遠離熱力學平衡、持續與環境交換能量的開放系統，能夠自發產生有序結構<sup>26</sup>。混沌理論則由氣象學家 Edward Lorenz 在 1963 年的論文〈Deterministic Nonperiodic Flow〉奠定，他發現確定性的方程式也可能對初始條件極度敏感，後來以「蝴蝶效應」一詞廣為人知<sup>25</sup>。同一時期，細胞自動機（cellular automata）這類簡單規則能產生複雜行為的計算模型，也從 Stanisław Ulam 與 John von Neumann 在洛斯阿拉莫斯的工作，延伸到 John Conway 的「生命遊戲」與 Stephen Wolfram 的系統研究<sup>35</sup>。

替這股匯流提供概念旗幟的，是物理學家 Philip W. Anderson 於 1972 年發表在《Science》的短文〈More is Different〉。Anderson 主張化約論有其方法論局限，更高的組織層級會湧現出無法由部分簡單還原推導的新規律<sup>24</sup>。這篇文章協助在物理科學中確立了「湧現」（emergence）的概念，也成為複雜科學日後反覆援引的思想起點<sup>24</sup>。這些既有研究線在 1980 年代中期於 SFI 結晶為一個有自我意識的研究社群，而 SFI 也成為第一個專門以複雜系統、特別是複雜適應系統為對象的研究機構<sup>2</sup><sup>35</sup>。

## 複雜科學研究什麼

複雜科學研究「由大量相互作用、且常能適應或學習的組成部分構成、整體行為無法由部分簡單加總推導出來的系統」<sup>24</sup><sup>32</sup>。它的招牌現象是湧現，也就是整體展現出組成單元所沒有的性質。圍繞這個核心，領域逐漸累積出一組常用概念。

自組織（self-organization）指系統在沒有中央控制下、由局部交互自發產生全域秩序，Prigogine 的耗散結構與 Stuart Kauffman 的基因網絡都屬此類<sup>26</sup><sup>31</sup>。複雜適應系統（complex adaptive systems, CAS）是計算機科學家 John Holland 提出的概念，指由許多會適應與學習的「行為者」（agents）構成的系統，他發展的基因演算法把演化變成可計算的搜尋與適應機制<sup>32</sup>。網絡科學研究節點與連結構成的系統，Albert-László Barabási 與 Réka Albert 在 1999 年提出的模型，以「優先連接」機制解釋了某些網絡為何呈現少數高連結節點主導的「無尺度」結構<sup>30</sup>。此外還有自組織臨界、混沌邊緣、尺度律（scaling laws），以及作為主要計算方法的代理人基模型（agent-based modelling, ABM）<sup>29</sup><sup>30</sup>。

學界對「複雜科學是否構成一門統一的獨立學科」仍有爭論，這一點值得誠實呈現。複雜系統至今沒有公認的正式定義，科普作家兼研究者 Melanie Mitchell 在《Complexity: A Guided Tour》中坦言，這個領域只能提供一系列彼此競爭的定義<sup>27</sup>。一份文獻計量研究指出，1980 年代諸如「自組織」之類的普適性宣稱，最終未能真正統一各子領域，這些子領域隨時間反而更貼回各自的母學科<sup>28</sup>。換句話說，複雜科學被部分研究者視為「一個有共同取徑的社群」，而它能否成為一門有共同對象與方法的學科，至今並無定論<sup>27</sup><sup>28</sup>。

## 複雜科學可以怎麼使用

複雜科學的方法被應用到許多領域。最早成形的應用之一是複雜經濟學（complexity economics），由 SFI 的經濟學家 W. Brian Arthur 領銜，把經濟視為一個永遠在變化、未必趨向均衡的演化系統；Arthur 以「報酬遞增」解釋市場如何被鎖定到少數主導者<sup>6</sup>。在流行病學中，代理人基模型由個體層次的接觸規則產生群體層次的傳播動態，已被用於模擬 1918 年流感等疫情並評估不同防控策略的效果<sup>29</sup>。

都市研究是另一個具代表性的應用。Luis Bettencourt、Geoffrey West 等人在 2007 年的《PNAS》論文中提出都市尺度律，指出社會經濟產出（如創新、工資，也包括犯罪與疾病傳播）隨城市人口呈超線性成長，而基礎設施（如道路、管線）則以約 0.83 的次線性指數成長，呈現規模經濟<sup>29</sup>。在生物學中，Stuart Kauffman 以隨機布林網絡建模基因調控，提出有序結構可以「免費」地從自組織中浮現<sup>31</sup>。

這些應用也提醒了領域的限度。複雜科學若干高調主張曾被更嚴格的統計檢驗修正。2018 年，Anna Broido 與 Aaron Clauset 分析了近一千個真實網絡，發現只有約百分之四通過最嚴格的「無尺度」檢驗，多數網絡的冪律假設被拒絕<sup>30</sup>。Barabási 回應稱真實世界的雜訊會掩蓋底層機制，Clauset 則反駁根本現象不該需要如此大量客製化才能觀察到<sup>30</sup>。這場爭論顯示，複雜科學的招牌結果需要嚴格驗證，避免僅憑視覺印象就宣稱普適規律<sup>30</sup>。

## 聖塔菲研究所的創立

SFI 的構想來自 George Cowan。Cowan 是曼哈頓計畫的老兵，在洛斯阿拉莫斯國家實驗室服務近四十年，曾任化學部主任<sup>3</sup>。1983 年，他召集一群關注複雜適應系統的資深科學家聚會，一年後這個集會發展成 SFI，由他出任首任所長直到 1991 年退休<sup>3</sup>。這群創辦人尋求一個在學術系所與政府科學預算的傳統學科疆界之外進行理論研究的論壇；Cowan 在洛斯阿拉莫斯親見跨學科團隊產生洞見的價值，希望推動橫跨物理、生物、計算與社會科學的綜合研究<sup>2</sup><sup>3</sup>。

依據記述，研究所最初在 1984 年 5 月以「Rio Grande Institute」之名註冊為非營利法人，數月後才向一家經營困難的機構購得「Santa Fe Institute」這個名稱並更名（購名一事多見於二手百科彙編，金額細節尚待一手資料確認）<sup>2</sup>。八位共同創辦人包括 George Cowan、Murray Gell-Mann、David Pines、Nick Metropolis、Herb Anderson、Peter Carruthers、Stirling Colgate 與 Richard Slansky，除 Pines 與 Gell-Mann 外多為洛斯阿拉莫斯科學家<sup>2</sup>。1969 年諾貝爾物理獎得主 Gell-Mann 是其中最知名的一位，他於 2019 年逝世<sup>11</sup>。

第一場定義 SFI 走向的奠基性工作坊在 1984 年 10 月 5 日至 6 日舉行，連同後續一場，約六十位受邀者聽取了這個新型研究中心的計畫；參與者之一的物理學家 David Pines 後來回憶，這些奠基工作坊才是研究所真正的開端<sup>4</sup>。M. Mitchell Waldrop 於 1992 年出版的《Complexity: The Emerging Science at the Edge of Order and Chaos》，是記述 SFI 早期歷史最具影響力的大眾科普著作，書中描繪了 Cowan、Gell-Mann、Arthur、Kauffman、Holland 等人的群像，但其戲劇化筆法不宜當作嚴格史學<sup>5</sup>。

## 早期里程碑與歷任領導

SFI 草創期最具標誌性的活動，是 1987 年 9 月的一場經濟學會議。會議由物理學家 Philip Anderson、物理學家 David Pines 與經濟學家 Kenneth Arrow 籌組，邀來十位理論經濟學家與十位物理、生物、計算科學家對話<sup>6</sup>。Arrow 與 Anderson 皆為諾貝爾獎得主，會議由花旗集團（Citicorp）資助，其執行長 John Reed 長期敦促這所新研究機構投入經濟學<sup>6</sup>。一年後，這場會議催生了 SFI 的第一個研究計畫與同名論文集《The Economy as an Evolving Complex System》（1988），標誌複雜經濟學的發端<sup>7</sup>。圍繞著早期 SFI 的還有研究報酬遞增的 Brian Arthur、探尋自組織秩序的 Stuart Kauffman、發展演化計算的 John Holland，以及創造「人工生命」一詞的 Christopher Langton<sup>5</sup><sup>35</sup>。

SFI 自成立以來歷經七任所長：George Cowan（1984–1991）、Edward Knapp（1991–1995）、Ellen Goldberg（約 1996–2003）、Robert Eisenstein（2003–2004）、Geoffrey West（2005–2009）、Jerry Sabloff（2009–2015），以及自 2015 年 8 月起任職至今的 David Krakauer<sup>2</sup><sup>8</sup>。物理學家 Geoffrey West 任內把研究重心擴展到普適尺度律與城市，著有《Scale》一書<sup>9</sup>。現任所長 Krakauer 是演化理論學者，在接任前曾於 2002 至 2011 年擔任 SFI 教授<sup>8</sup>。

研究所的地點也幾經變遷。早期借用空間運作，1987 年遷入 Canyon Road 的 Cristo Rey 修道院，1994 年落腳現址 Hyde Park Road 的 Cowan Campus，一處俯瞰聖塔菲與桑格雷-德克里斯托山脈的山丘校區<sup>10</sup>。2013 年，Eugene 與 Clare Thaw 捐贈了距主校區約十二英里的 Miller Campus<sup>10</sup>。

## 營運與財務模式

SFI 是一所獨立的非營利研究機構，依美國國稅法屬 501(c)(3) 免稅組織，其雇主識別號為 85-0325494，自 1984 年 11 月起取得免稅資格<sup>13</sup>。它不授予學位、不是受認證的學位授予機構，也不收取常規學費；獨立資料庫將其歸類為公益慈善機構（public charity），而非私人運作型基金會<sup>13</sup><sup>14</sup>。這套安排使 SFI 與設有學位、學費、終身職與系所的大學，以及隸屬聯邦、有固定任務編制的政府實驗室，在組織形態上都有所區別<sup>2</sup><sup>12</sup>。

在財務上，SFI 的常態年度支出長期約在一千萬美元上下，近年升高到約一千五百萬至一千七百萬美元的量級<sup>12</sup><sup>13</sup>。經會計師事務所簽核的審計財報顯示，2020 會計年度總支出約一千零三十二萬美元，2019 會計年度約一千二百三十一萬美元<sup>12</sup>。其收入由幾個部分混合而成，包括私人捐助與非政府補助、政府研究經費、商業會員網絡的會費，以及捐贈基金的投資收益；以 2020 年度為例，政府補助約一百五十萬美元，商業會員網絡會費約一百一十八萬美元，而學費僅約兩萬餘美元，印證其營運並不依賴學費<sup>12</sup>。研究所最大的單筆捐贈來自投資人 Bill Miller，他在 2021 年 11 月捐出五千萬美元<sup>15</sup>。需要注意的是，近年部分年度的稅務申報收入因一次性大額認列而顯著偏高，不宜當作常態營運規模解讀<sup>13</sup><sup>14</sup>。

治理方面，研究所由所長領導，現任所長 David Krakauer 的正式職稱為「President and William H. Miller Professor of Complex Systems」，科學副所長（VP for Science）為網絡生態學者 Jennifer Dunne，另設董事會與由眾多傑出學者組成、含若干諾貝爾獎得主的科學委員會（Science Board）提供策略諮詢<sup>2</sup><sup>13</sup>。

SFI 也經營一系列對外計畫。教育方面，線上平台 Complexity Explorer 提供免費的複雜性科學課程，旗艦課程由 Melanie Mitchell 講授；每年並舉辦複雜系統暑期學校等培訓<sup>22</sup>。面向產業與政府的應用複雜性網絡（Applied Complexity Network，簡稱 ACtioN）由企業、政府與非營利組織會員組成，透過年度研討會與工作坊協助成員應用複雜系統的洞見<sup>21</sup>。傳播方面則有成立於 2017 年的 SFI Press、2019 年推出的 Complexity 播客，以及自 2018 年起舉辦的 InterPlanetary Festival 公眾節慶<sup>23</sup>。研究所本身沒有實驗室與系所，主要透過工作小組、工作坊與駐點訪問來促成協作<sup>2</sup><sup>16</sup>。

## faculty 制度

SFI 最具特色之處在於它的人員制度。它刻意避開大學的系所編制，改以一個小型常駐核心，連結一個龐大的外部網絡與一群流動的博士後，再加上每年大量的來訪者。依據 SFI 博士後招募頁面在 2025 至 2026 年招募週期所載的數字，研究環境包含約十名常駐教授、超過一百名外部教授、約二十一名博士後研究員，以及平均每年約一千名來訪者<sup>16</sup>。以下分類說明各類人員，數字均為該招募週期的當期快照。

### 常駐教授（Resident Faculty）

常駐教授是長駐聖塔菲、由 SFI 支薪的核心研究人員，截至 2025 至 2026 年招募週期約有十人<sup>16</sup>。他們使用「Professor」職稱，例如所長 Krakauer 的冠名講座為 William H. Miller Professor of Complex Systems<sup>2</sup>。SFI 立所時即把自己設計為一所「沒有永久或終身職位的訪問型機構」，藉此維持人與想法的流動，因此常駐教授一般沒有傳統學術終身職<sup>2</sup>。研究所在公開招募時表明，它尋找的是「廣博、有創造力、能催化、敢冒險」、又在本科領域有傑出學術資歷的研究者，以全職為主，也接受兼職，並積極招募能停留長達兩年的休假訪問學者<sup>17</sup>。常駐教授的職責是自主進行跨越學科界線的基礎研究，並催化跨域協作、指導博士後與來訪者<sup>16</sup><sup>17</sup>。

### 外部教授（External / Fractal Faculty）

外部教授是 SFI 模式的核心，也是它最具辨識度的制度。這些研究者主要任職於世界各地的其他大學或研究機構，與 SFI 維持正式的聯繫關係；SFI 內部對這一類人員的稱呼是「Fractal Faculty」（碎形教授）<sup>16</sup>。官方數字為「一百多名」，2025 年的公告指出外部教授把研究所連結到全球七十多個機構，而 SFI 的常駐教授、外部教授與博士後合計代表了二十個國家的八十多個機構<sup>16</sup><sup>18</sup>。

外部教授每年成批任命，學者個人與其所屬機構常以「獲選為外部教授」（elected to the External Faculty）來描述這項任命，任期一般為數年並可續任，惟詳細的章程與續任規則並未完整公開<sup>18</sup>。他們不常駐聖塔菲，主要薪資來自原機構，與 SFI 的關係建立在聯繫與來訪之上<sup>18</sup>。2025 年新聘的十位外部教授橫跨自然科學、社會科學、人文與業界，包括來自 Google 的 Blaise Agüera y Arcas、華盛頓大學的生物學家 Carl Bergstrom、麻省理工學院的建築學者 Nicholas de Monchaux、哈佛大學的應用數學家 L. Mahadevan，以及霍華德大學從事非裔美國研究的 Michael Ralph 等人，顯示這個網絡跨度極廣<sup>18</sup>。SFI 稱外部教授是其作為世界級研究機構身分的核心，這套安排讓一個小常駐核心得以連結上百位散布全球的學者，形成放大數十倍的智識網絡，研究所自身也以「沒有圍牆的大學」自我描述<sup>18</sup>。

### 博士後與 Omidyar Fellowship

SFI 的招牌博士後制度是 Omidyar Fellowship，其對外招募時也稱為 Complexity Postdoctoral Fellowship，兩者為同一制度<sup>16</sup><sup>19</sup>。這項獎助得名自 eBay 創辦人 Pierre Omidyar 與 Pam Omidyar 夫婦，由 Pierre Omidyar 在 2008 年的捐贈設立，2009 年開辦<sup>19</sup>。自開辦以來，Omidyar 夫婦的捐贈約覆蓋每位 Fellow 一半的成本，其餘由 SFI 每年另行募款支應，這也對應了後文所述的財務脆弱性<sup>19</sup>。

依官方資料，自 2009 年起 SFI 每年最多遴選四名新的 Fellow，每人最長在所駐研三年；申請者須在截止日前六年內取得任何科學領域的博士學位，並具備強的量化與計算能力<sup>16</sup><sup>19</sup>。這項獎助提供具競爭力的薪資與福利，以及可自由運用的研究與協作經費<sup>16</sup>。它最突出的特徵是高度自主：Fellow 不綁定特定指導教授或計畫主持人，可以自訂研究議程；一名受獎者形容它像是「一個沒有教學責任的初級教職」，能在追求自己研究方向的同時獲得整個社群的指導<sup>19</sup>。1990 年代末，後來成為網絡科學知名人物的 Duncan Watts、Mark Newman 都曾在 SFI 做博士後，這常被引為這套制度培養並輸出人才的例子<sup>33</sup>。

### 其他人員類別

除上述三層結構外，SFI 還設有若干特殊人員類別。Miller Scholar 由投資人 Bill Miller 捐助，僅由內部提名，刻意納入藝術家、哲學家與人文學者，要求其貢獻與 SFI 使命互補或正交的觀點，任期從數月到一年不等；已知的 Miller Scholar 包括科幻作家姜峯楠（Ted Chiang）與哲學家 Daniel Dennett<sup>20</sup>。Applied Complexity Fellow 設立於 2019 年，在常駐教授指導下執行由政府或產業夥伴支持的應用專案，扮演在頂尖科學家與決策者之間轉譯的角色，與偏理論的 Omidyar Fellow 互補<sup>21</sup>。此外，研究所每年接待約一千名訪問者，並積極招募休假訪問學者，科學委員會則由眾多傑出學者組成，就策略事項提供諮詢<sup>16</sup><sup>17</sup>。

### 制度設計的理念

這套「小常駐核心、大外部網絡、流動博士後、大量來訪」的安排，源自一個明確的設計理念。SFI 把自己設計為沒有永久職位的訪問型機構，目的是讓人與想法保持活躍的流動，使研究維持在跨域科學的前沿<sup>2</sup>。由於沒有系所、沒有終身職、也沒有實驗室本位，不同領域的研究者得以在同一空間以暫時性的協作相遇，小常駐核心負責催化，外部網絡與來訪者提供智識多樣性，而三年期、不綁主持人、自主議程的博士後，則是這套制度中流入、培養與輸出的引擎<sup>16</sup><sup>17</sup><sup>19</sup>。

## 評價與限制

SFI 的取徑與制度同時受到肯定與批評，誠實的介紹需要呈現兩面。如前所述，複雜科學是否構成一門統一學科至今並無定論，這也使 SFI 賴以立足的領域本身帶有爭議<sup>27</sup><sup>28</sup>。

在制度與財務層面，SFI 的歷史顯示它長期面對資金不穩的問題。據歷史研究，研究所早年預算極為拮据，1985 年的全年預算僅約八萬三千美元，1986 年約九萬七千美元，最初寄望「聰明的人脈自然吸引資金」的想法很快落空，被迫轉向慈善家與企業募款<sup>33</sup>。Omidyar Fellowship 每年仍須另籌約半數成本，也反映了依賴逐年募款的結構性脆弱<sup>19</sup>。歷史學者 Erik Baker 在 2022 年的研究中指出，SFI 在 1990 至 2000 年代日益依賴企業與帶有自由意志主義色彩的商界領袖捐助，並質疑這是否使其智識重心偏向與金主世界觀親近的主題，對研究所的獨立性提出疑問<sup>33</sup>。

在學術層面，1990 年代曾有評論質疑複雜科學在追求抽象普適原則時與經驗現實脫節、缺乏可驗證性<sup>34</sup>。也有研究以「複雜科學的失敗制度化」為題，檢討 SFI 對明星級外部教授與明星博士後的高度依賴，認為這使研究所更像一個人才中轉站與聲望放大器，其產出與聲望部分繫於少數明星，而非穩定的學科建制<sup>34</sup>。此外，共同創辦人 Murray Gell-Mann 與金融家 Jeffrey Epstein 之間的金錢往來，也曾在聲譽層面引發討論<sup>2</sup>。

綜觀而言，SFI 是一個以複雜系統為核心、刻意跨越學科邊界的獨立研究機構，它以一套小常駐核心、大外部網絡與流動博士後的人員制度推動跨域協作，並在複雜經濟學、都市尺度律等領域留下影響。它所投身的複雜科學作為一個領域的學科地位、它對私人與企業捐助的依賴，以及部分成果的可驗證性，則是理解這所機構時需要一併放在桌面上的問題。

## 參考資料

1. 聖塔菲研究所官方網站，About / Overview。https://www.santafe.edu/about/overview 。來源等級 A（官方一手）。
2. Wikipedia, "Santa Fe Institute"。https://en.wikipedia.org/wiki/Santa_Fe_Institute 。來源等級 C（交叉比對，創辦人、制度哲學、爭議等與 A 級來源吻合）。
3. Physics Today, "Obituary: George Cowan (1920–2012)"。https://pubs.aip.org/physicstoday/online/3283/ 。來源等級 A（權威學術訃聞）。
4. Stephen Wolfram, "My Part in an Origin Story: The Launching of the Santa Fe Institute"（2019）。https://writings.stephenwolfram.com/2019/06/my-part-in-an-origin-story-the-launching-of-the-santa-fe-institute/ 。來源等級 A（親歷者一手記述）。
5. M. Mitchell Waldrop, *Complexity: The Emerging Science at the Edge of Order and Chaos*（Simon & Schuster, 1992）。https://archive.org/details/complexityemergi00wald 。來源等級 A（關鍵二手敘事，筆法戲劇化）。
6. W. Brian Arthur, "Complexity Economics" 及 SFI Symposium 文件。https://sites.santafe.edu/~wbarthur/complexityeconomics.htm 。來源等級 A（一手學者文件）。
7. P. W. Anderson, K. Arrow, D. Pines（編），*The Economy as an Evolving Complex System*（1988，ISBN 0-201-15685-0）。來源等級 A（一手出版品）。
8. 聖塔菲研究所官方新聞稿，"David Krakauer becomes SFI's new president"（2015）。https://www.santafe.edu/news-center/news/krakauer-becomes-sfis-new-president 。來源等級 A。
9. 聖塔菲研究所官方頁，Geoffrey West profile / *Scale*。https://www.santafe.edu/people/profile/geoffrey-west 。來源等級 A。
10. 聖塔菲研究所官方頁，Campuses。https://www.santafe.edu/campuses 。來源等級 B（官方校區頁）。
11. 聖塔菲研究所官方訃聞，"In memoriam: Murray Gell-Mann"。https://www.santafe.edu/news-center/news/murray-gell-mann-passes-away-89 。來源等級 A。
12. 聖塔菲研究所經 CliftonLarsonAllen 簽核之 FY2020 與 FY2019 審計財報。https://sfi-edu.s3.amazonaws.com/sfi-edu/production/uploads/ckeditor/2022/06/13/2020-santa-fe-institute-fy20-fs-final-s.pdf 。來源等級 A（最高，逐項收支與淨資產）。
13. ProPublica Nonprofit Explorer, Santa Fe Institute（EIN 85-0325494）。https://projects.propublica.org/nonprofits/organizations/850325494 。來源等級 A（IRS 990 數位化資料）。
14. Cause IQ, Santa Fe Institute。https://www.causeiq.com/organizations/santa-fe-institute,850325494/ 。來源等級 B（990 衍生；分類為 public charity，NTEE U50）。
15. 聖塔菲研究所官方新聞稿，"Santa Fe Institute receives $50 million from Bill Miller"（2021）。https://www.santafe.edu/news-center/news/santa-fe-institute-receives-50-million-bill-miller 。來源等級 A。
16. 聖塔菲研究所 Complexity Postdoctoral Fellowship 招募頁（2025/2026 招募週期）。https://apply-sfi.smapply.org/prog/complexity_postdoctoral_fellowship_/ 。來源等級 A（完整渲染，含當期人員數字、任期、資格、薪酬）。
17. 聖塔菲研究所官方新聞稿，Resident faculty positions posting。https://www.santafe.edu/news-center/news/resident-faculty-posting 。來源等級 A（常駐教授遴選語言、全職／兼職、休假訪問）。
18. 聖塔菲研究所官方新聞稿，"SFI welcomes new 2025 External Professors"。https://www.santafe.edu/news-center/news/sfi-welcomes-new-2025-external-professors 。來源等級 A（2025 新聘名單、連結 70+ 機構）。
19. 聖塔菲研究所，Omidyar Fellowship 頁與 "Join SFI as a Complexity Postdoctoral Fellow" 新聞稿。https://www.santafe.edu/research/fellowships/omidyar ；https://www.santafe.edu/news-center/news/join-sfi-as-a-complexity-postdoctoral-fellow 。來源等級 A/B（2008 設立、2009 開辦、每年最多 4 名、最長 3 年、覆蓋半數成本、自主性引述）。
20. 聖塔菲研究所，The Miller Scholarship。https://www.santafe.edu/research/initiatives/miller-scholarship 。來源等級 A（Bill Miller 捐助、內部提名、任期、Ted Chiang／Dennett 名單）。
21. 聖塔菲研究所，Applied Complexity / Applied Complexity Fellows。https://www.santafe.edu/research/fellowships/applied-complexity ；https://www.santafe.edu/applied-complexity/partner 。來源等級 A（2019 設立、產業／政府支持、轉譯角色）。
22. 聖塔菲研究所 Complexity Explorer 線上教育平台。https://www.complexityexplorer.org/ 。來源等級 A/B（免費 MOOC、Melanie Mitchell 旗艦課）。
23. 聖塔菲研究所 SFI Press、Complexity 播客與 InterPlanetary Festival。https://www.sfipress.org/ ；https://www.santafe.edu/culture/podcasts ；https://interplanetaryfest.org/ 。來源等級 A/B（SFI Press 2017 春創立；播客 2019-10；節慶首屆 2018-06）。
24. P. W. Anderson, "More is Different," *Science* 177, 4047（1972），pp. 393–396。https://www.science.org/doi/10.1126/science.177.4047.393 。來源等級 A（一手經典論文）。
25. Edward N. Lorenz, "Deterministic Nonperiodic Flow," *Journal of the Atmospheric Sciences* 20（1963），pp. 130–141。來源等級 A（一手論文；「蝴蝶效應」命名年份取自二手）。
26. The Nobel Prize in Chemistry 1977（Ilya Prigogine）。https://www.nobelprize.org/prizes/chemistry/1977/prigogine/facts/ 。來源等級 A（諾貝爾官方）。
27. Melanie Mitchell, *Complexity: A Guided Tour*（Oxford University Press, 2009）。來源等級 A（權威科普學術書；「無公認定義」之關鍵引述）。
28. "Complex Systems Science: Dreams of Universality, Reality of Interdisciplinarity," arXiv:1206.2216。https://arxiv.org/pdf/1206.2216 。來源等級 A（文獻計量研究）。
29. L. Bettencourt, J. Lobo, D. Helbing, C. Kühnert, G. West, "Growth, innovation, scaling, and the pace of life in cities," *PNAS*（2007）。https://www.pnas.org/doi/10.1073/pnas.0610172104 。來源等級 A（都市尺度律）。代理人基流行病模型另見 PMC2729742。
30. "Scant Evidence of Power Laws Found in Real-World Networks," *Quanta Magazine*（2018），引述 Broido & Clauset, *Nature Communications*。https://www.quantamagazine.org/scant-evidence-of-power-laws-found-in-real-world-networks-20180215/ 。來源等級 B（引述 A 級同儕審查研究）。
31. Stuart Kauffman, *At Home in the Universe* / *The Origins of Order*。來源等級 A（隨機布林網絡、自組織秩序）。
32. John H. Holland 關於複雜適應系統之著作（*Hidden Order*、*Emergence*）與相關概述。來源等級 A/B（CAS 定義、基因演算法）。
33. Erik Baker, "The ultimate think tank: The rise of the Santa Fe Institute libertarian," *Social Studies of Science*（2022）。https://journals.sagepub.com/doi/abs/10.1177/09526951211068995 。來源等級 B（學術評論；早年預算、金主依賴、人才輸出史）。
34. "The failed institutionalization of 'complexity science'"（學術檢討）。https://www.researchgate.net/publication/343293927 。來源等級 B（學術；含對 1990 年代《Scientific American》可驗證性批評之轉述）。
35. Wikipedia, "Complex adaptive system" 與 "Christopher Langton"；以及細胞自動機、控制論、一般系統論之概述。https://en.wikipedia.org/wiki/Complex_adaptive_system 。來源等級 C（交叉比對思想史與匯流敘事）。
