---
title: "為什麼有了 Tor 與 Signal，數位結社仍然失敗：身分隱私假說的實證檢驗"
description: "mashbean 原始假說「身分不夠隱私 → 數位結社失敗」的最強讀法（H0）在文獻檢索後修正為三道牆合取假說 H1' = ¬F ⇔ W1 ∧ W2 ∧ W3。Civic proof 4 條件恰好對應三道牆所需的規範必要條件。但目前尚無案例同時解三道牆，假說只能否證式檢驗。本文是博論第 3 篇研究 article，與 article 01 (accountability without identification) 與 article 02 (civic proof concept positioning) 在三道牆框架上正式接合。"
pubDate: 2026-05-03
tags: ["digital-association", "civic-proof", "three-walls-hypothesis", "assembly-vs-association", "connective-action", "DAO-governance", "tor", "signal", "briar", "process-tracing", "arendt", "tocqueville"]
category: "數位公民與結社理論"
aiModel: "Claude Opus 4.7"
aiPrompt: "為何已有 Tor / Signal / Briar / Cwtch 等匿名工具存在多年，仍然沒有規模化的數位結社案例？身分不夠隱私這個假說，是真的嗎？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-03-digital-association-empirical-test"
aiGeneratedDate: 2026-05-03
humanReviewed: false
lang: "zh-TW"
---

## 一、導論

Tor 自 2004 年第二代 onion router 論文發表以來已歷二十二年<sup>1</sup>，Signal protocol 完成端對端加密的部署超過十年，Briar、Cwtch 等以離線網狀網路為核心的高威脅情境通訊工具也已釋出可用版本多年<sup>2</sup>。在規範層次上，匿名通訊權與結社自由皆有足夠的法理位階；在工程層次上，足以對抗大量網路敵手的密碼學基礎已經就緒。然而，跨多個威權與半威權場景觀察到的現象卻是「強集會、弱結社」；大規模一次性的數位動員時有所成（突尼西亞、埃及、香港、伊朗、白俄羅斯、加泰隆尼亞），但能在動員之後維持持續成員身分、可驗證群體界線、內部問責機制的數位結社案例卻幾近於無<sup>3</sup>。

mashbean 在博論前置研究中提出一個直觀假說，可以重述為以下最強讀法（以下稱 H0）：「現存匿名工具未能支撐數位結社的根本原因，是身分不夠隱私；只要把身分隱私推到足夠強度，數位結社就會出現。」這個讀法以「身分隱私不足」作為單因充分條件，把所有結社失敗案例化約為「上游隱私問題」的下游表現。它的吸引力在於與 cypherpunks 自 1990 年代以來的工具樂觀主義系譜對齊，並且在 Tor / Signal / Briar 仍未真正擴散的事實下保有解釋空間<sup>4</sup>。

H0 的問題在文獻檢索之後逐漸浮現。第一，已實質解決成員假名連續性的場景（如 MakerDAO、Compound、Uniswap 的代幣治理）並未因此達成穩定結社，反而陷入 plutocracy、VC capture、core-team exit 等多重治理困境<sup>5</sup>。第二，香港 LIHKG 在 2019-2020 反送中期間以藍勾勾與假名 handle 部分解決了「同一個發言主體被群內辨識」的條件，但派系裂解（勇武 / 和理非 / 流亡）與內部問責崩潰仍構成決定性失敗<sup>6</sup>。第三，Briar 與 Cwtch 在工具層面提供了強隱私的對等通訊，但採用率在最需要它的高威脅族群中仍然低落，工具規格與社會制度之間缺乏對應<sup>7</sup>。

把這三組觀察放在一起，初步推得 H0 過強。Tor 與 Signal 等工具解決了「瞬時身分隱私」這個上游問題，但結社失敗的場域裡，第二道與第三道牆（群體界線可驗證、內部問責）仍在獨立地阻擋規模化。任務於是是修正 H0，而不是否定 H0。修正後的版本以三道牆合取結構出現，記為 H1' = ¬F ⇔ W1 ∧ W2 ∧ W3。其中 W1 是持續性假名牆（工具層）、W2 是群體界線可驗證牆（制度層）、W3 是內部問責牆（治理層）。本文藉由政治哲學文本詮釋、連結式行動文獻匯流、五個案例的 process tracing、三道牆形式化、反例邊界處理共五個論證階段，逐步建立 H1' 的可信度，並提出與 article 01（accountability without identification）、article 02（civic proof concept positioning）的整合接合點。

需要先標明三項邊界。其一，H1' 是規範-經驗合取，不是純邏輯定義；W4/W5/W6（法律地位、資源、領導）等其他結構條件並未排除，而是留作待開發。其二，本文案例樣本 N=5（伊朗、香港、加泰隆尼亞、白俄羅斯、Briar/Cwtch），N 偏低，所推得的三種失敗 pattern α/β/γ 屬於「N=5 觀察 pattern，待擴展驗證」性質。其三，目前無案例同時解了三道牆，所以 H1' 在當代條件下只能否證式檢驗（缺一即敗）而不能證實式驗證；相應的工程實作即「civic proof 規範條件束在規模化結社中的同時滿足」也仍是規範性提案，不是已驗證的工程方案<sup>8</sup>。

## 二、政治哲學基礎：assembly 與 association 的三條件

要評估 H0 是否站得住，先必須確定「結社」相對於「集會」多承擔了什麼規範義務。如果結社等於持續到第二天的集會，H0 的單因路徑或許就成立；身分隱私撐住了瞬時集會，沿時間軸延伸即得結社。文獻證據卻指向另一個方向。

Arendt 在 *The Human Condition* ch. V 把 action 描述為「spontaneous beginning」與「公共空間中的自我顯現」，許多二手詮釋因此把 Arendt 視為「assembly = 瞬時」的支持者。這個讀法低估了 Arendt 後期文本的制度面向。在 *On Revolution* ch. 6 對 council system 與 ward republics 的討論中，Arendt 明確指出政治行動需要制度沉澱才能在世代之間延續；「公共空間」之所以是公共的，正在於它能跨越單次聚集而維持<sup>9</sup>。Honig 1993 對 Arendt 的「政治化-去政治化」張力詮釋與 Benhabib 1996 對 Arendt 制度面向的補強，皆把這一點推到更明確的位置<sup>10</sup>。Arendt 的 action 並非純瞬時派；瞬時讀法更接近 Arendt 的某些斷面，而非她的全部立場。

Tocqueville 在 *Democracy in America* vol. 2 pt. 2 ch. 5-7 把結社區分為政治結社（政黨、政治結盟）與公民結社（讀書會、合作社、互助組織），並警告兩者承擔不同的規範義務、混淆會帶來危害<sup>11</sup>。當代 Tocqueville 詮釋分為兩條主要路徑。Putnam 2000 *Bowling Alone* 把公民結社浪漫化為「社會資本生產者」，認為結社的衰退就是民主衰退的指標。Skocpol 2003 *Diminished Democracy* 反駁這個浪漫化，指出 Putnam 路徑忽略了美國二十世紀公民組織從會員制（membership-based）向經理制（management-based）轉變的歷史結構<sup>12</sup>。Rosenblum 2008 *On the Side of the Angels* 接著在 Tocqueville 系譜內為政黨結社辯護，但同時警告政黨結社與公民結社不可互換，前者承擔的代表義務、利益匯聚義務與內部紀律義務都遠重於後者<sup>13</sup>。把 Tocqueville-Putnam-Skocpol-Rosenblum 這條系譜放在一起，得到的是「結社是承擔了規範義務的政治實踐」這個較克制的命題；浪漫化 framing（「結社天然 good」）並非系譜的真正立場。

法理層的證據來自美國第一修正案 doctrine 對 freedom of assembly 與 freedom of association 的分離處理。NAACP v. Alabama 357 U.S. 449 (1958) 確認了會員名單的保密權對結社存續的核心地位；Roberts v. United States Jaycees 468 U.S. 609 (1984) 確認了結社對成員資格設定的內部規則權；Boy Scouts of America v. Dale 530 U.S. 640 (2000) 進一步把結社的「expressive association」邊界推到允許排除特定成員<sup>14</sup>。Inazu 2012 *Liberty's Refuge* 系統整理了這條 doctrine 的歷史，指出 freedom of assembly 與 freedom of association 在二十世紀後逐漸被處理為兩種不同的憲法權利，前者保護瞬時公共聚集、後者保護持續性的群體存在與成員身分<sup>15</sup>。法律層的兩個 doctrine 與政治哲學層的兩個概念互相對應。

整合上述文本，結社相對於集會多承擔三項條件。第一，**時間軸上可被認出的成員身分**，即同一個個體在 t1 與 t2 兩個時間點被群體認為是同一個成員。第二，**可被群體驗證的成員/非成員邊界**，即群體有能力在內部判定誰是成員、誰不是。第三，**成員之間的相互問責義務鏈**，即成員犯錯時群體有制度機制追究責任，採用退出之外的另一條路徑。把這三項記為 C1（持續性身分）、C2（群體界線）、C3（內部問責），則「結社 = 集會 + C1 + C2 + C3」是這條系譜下的最低限度操作判準。

C1 的最弱形式是什麼？常見的回答是 pseudonymity；同一個假名 handle 在 t1 與 t2 都被認出。但這個回答對 Linux Kernel 等以真名為主的長期協作群體不適用；Linus Torvalds 與其 maintainer 圈是用真名 + 公開貢獻歷史持續被群體辨識，沒有走 pseudonymity 的路徑<sup>16</sup>。把 C1 的最弱形式拓寬為 **narrative continuity**（同一個敘事主體在時間軸上被認出，可以掛真名也可以掛假名 handle），比較能涵蓋所有可觀察案例。Arendt-Honig-Benhabib 系譜下的 narrative identity 概念，正好為這個拓寬提供了規範基礎<sup>17</sup>。需要標明的是，從 Arendt-Honig-Benhabib 推到「工程意義上的持續性身分設計」屬於理論延伸，將其視為一個可推得的延伸命題，並非已被經驗驗證的工程結論。

這個拓寬對 article 02 的 civic proof unlinkability 條件帶來一個反向修正。article 02 把 unlinkability 描述為「跨行為不可連結」，未明確區分對外與對內。在 C1 + C2 的合取要求下，unlinkability 必須做內外分離：對外（對非成員、對國家、對監控敵手）保護成員的跨行為不可連結；對內（對群體本身）維持成員的可連結性以利驗證成員身分。Anonymous credentials（如 idemix 風格、完全不可連結）違反 C1，因為它使「同一個成員」在群內無法被識別。Pseudonymous credentials（如 BBS+ 風格、群外不可連結但群內可連結）才同時滿足 C1 與 C2<sup>18</sup>。本文在 §7 對此修正進一步處理。

## 三、連結式行動文獻：強集會、弱結社的 empirical regularity

第二個證據來源是連結式行動（connective action）、networked publics、digitally enabled social change 三條主流文獻線。這些文獻在 2010-2020 年間累積了跨地理（中東、東亞、南歐、北美）、跨議題（民主化、勞工、環境、性別）、跨工具（Twitter、Facebook、WhatsApp、Telegram、Signal）的大量案例觀察，匯流出一個可重複指認的 empirical regularity。

Bennett-Segerberg 2013 *Logic of Connective Action* 把數位工具帶來的行動形態變化命名為「personal action frames + digitally networked」<sup>19</sup>。這套架構強調，個體可以在不加入正式組織的情況下，藉由分享、轉發、自我披露行為加入大型集體行動。這降低了動員門檻，但同時降低了組織形成。Tufekci 2017 *Twitter and Tear Gas* 把這個機制具體化為「組織能力過剩、敘事能力不足、決策能力斷層」三項觀察，並用突尼西亞、埃及、土耳其、佔領運動、香港等案例反覆驗證<sup>20</sup>。Castells 2012/2015 *Networks of Outrage and Hope* 從西班牙 15M、佔領華爾街、阿拉伯之春的觀察推得類似結論，但更強調情感動員與身分認同<sup>21</sup>。Earl-Kimport 2011 *Digitally Enabled Social Change* 從美國國內議題行動的資料切入，強調工具降低協調成本但也降低承諾密度<sup>22</sup>。Polletta 2002 *Freedom Is an Endless Meeting* 雖然以前數位時代的美國社會運動為主，但她對「無領導 / 共識決策」結社難以維持的觀察，與連結式行動文獻的結論相通<sup>23</sup>。Diani-McAdam 2003 *Social Movements and Networks* 在網絡分析框架下證實，弱連帶有助於動員擴散，強連帶才能支撐組織<sup>24</sup>。

把這些獨立研究的結論放在一起，得到的共同 empirical regularity 可重述為：「數位工具強化動員、削弱建制」；強集會、弱結社。這個觀察在跨地理、跨議題、跨工具場景中穩固重複，因此具備經驗規律的地位。然而需要先把兩件事分開。其一，empirical regularity 是「在當前觀察條件下穩固重複的現象」，不等於「結構必然」。結構必然的論證需要訴諸機制，這部分留給第五章的三道牆形式化處理。其二，empirical regularity 在現有文獻中的成立條件，並不涵蓋所有可能場景；以下兩個反例必須限縮主張範圍。

第一個反例是 Karpf 2012 *The MoveOn Effect*。Karpf 的觀察顯示，MoveOn.org 等「線上線下混合 + 前數位骨架」組織在美國民主環境下成功規模化，並未陷入連結式行動文獻所描述的「弱結社」困境<sup>25</sup>。MoveOn 的支撐機制是「真名與假名選擇性混用 + 中央團隊執行 + 前 Internet 時代的政治 mailing list 資產」三項條件的合取。這把連結式行動文獻的主張限縮為「在無前數位骨架的場景下」成立；若行動者繼承了前數位時代的工會、政黨、教會、社區組織骨架，則數位工具反而能放大既有結社能力，並未削弱建制。

第二個反例是突尼西亞與埃及的自然實驗。兩國在 2010-2011 年面臨相近的威權-動員結構，且皆大量使用社交媒體進行動員。然而突尼西亞繼承了 UGTT（Union Générale Tunisienne du Travail）這個成立於 1946 年的全國性工會骨架，其內部問責、會員資格、跨城市協調機制在數位動員爆發前已運作六十餘年；埃及則無類似骨架，Tahrir 廣場的動員雖然成功推翻 Mubarak，但無能在動員後形成穩定的政治結社<sup>26</sup>。Howard-Hussain 2013 *Democracy's Fourth Wave?* 與 Anduiza et al. 2014 對西班牙 15M 的研究，皆指向同一個解釋；前數位骨架是民主化軌跡的主要解釋變數之一，數位工具放大或抑制這個變數但不取代它<sup>27</sup>。需要標明的是，自然實驗推論需要控制其他變數（教派比例、軍隊立場、外部支持），把前數位骨架描述為「主要解釋變數之一」比描述為「決定性自變項」更貼合資料。

把 Karpf 反例與突尼西亞-埃及自然實驗合在一起，連結式行動文獻的主張可以限縮為以下形式：「在無前數位骨架的場景下，數位工具強化動員、削弱建制」是穩固的 empirical regularity。這個限縮並未削弱本文對 H0 的修正；數位結社失敗的核心場景（伊朗、香港、加泰隆尼亞、白俄羅斯、流亡 Iranian / Syrian / Belarusian 社群）正是「無前數位骨架」場景。連結式行動文獻給出的是觀察，不是機制。三道牆形式化把這個觀察轉成可檢驗的合取結構。

集會與結社的可操作判準，從 §2 的規範條件與本節的經驗觀察可以推得。集會的判準是「one-off mobilization、no persistent membership、no internal rules」；結社的判準是「persistent membership、verifiable boundary、internal accountability」。這套判準在以下章節用於分類案例。

## 四、五個案例的 process tracing：三種失敗 pattern 與 Catalonia 邊界

本節對五個準數位結社案例做 process tracing。每個案例先列出 W1/W2/W3 的解 / 部分解 / 未解狀態，再追蹤失敗鏈的關鍵節點，最後歸入三種失敗 pattern 之一。需要先明示樣本邊界。N=5 對歸納推論而言偏低，所得的三種 pattern α/β/γ 屬於「跨案例觀察 pattern，待擴展驗證」性質，未涵蓋拉美（智利 2019）與非洲（衣索比亞、蘇丹）案例，後續研究應擴展至 N≥15 含成功對照組以提升歸納強度。

「失敗」也需要分三層定義以避免概念混淆。動員層失敗指的是連大規模動員都未發生（伊朗 Green Movement 2009 接近此情形）；治理層失敗指的是動員成功但動員後的內部治理崩潰（香港 LIHKG、白俄羅斯反對派接近此情形）；法效層失敗指的是內部治理可行但對外法律效力缺失（加泰隆尼亞 ANC/Òmnium 接近此情形）。這三層在以下分析中分別標示。

**案例一，伊朗 Green Movement 2009**。在 Twitter 與 Facebook 早期動員下，伊朗反對派一度在 Tehran 集結大規模抗議。然而當局透過 Twitter 公開資料、Facebook 真名實名政策、行動電話訊號定位等多種途徑進行 dragnet identification，將大量參與者識別、拘留、刑求<sup>28</sup>。Sreberny-Khiabany 2010 *Blogistan* 與 Khamis-Vaughn 2011 對伊朗網路政治的研究指出，W1（持續性假名）的失守導致整個動員鏈在第一階段就被切斷。下游的 W2（群體界線）與 W3（內部問責）根本來不及形成。本案例屬於 **Pattern α：C1 失守 → 上游崩潰**。

**案例二，香港 LIHKG 2019-2020**。LIHKG 提供藍勾勾驗證機制 + 假名 handle，在工具層次上部分解決了 W1；同一個發言主體可被群內辨識為連續存在。W2 在實作上偏弱，多重匿名帳號交雜使群體界線難以清楚劃定。W3 完全缺失；派系裂解（勇武、和理非、流亡）後，無內部問責機制可阻止行動路線分裂或追究決策責任<sup>29</sup>。Lee & Chan 2018 *Media and Protest Logics in the Digital Era*、Lee 2020 在 *Critical Asian Studies* 對反送中後續軌跡的觀察、Yuen 2020 在 *Hong Kong Studies* 的延伸研究，都指向同一個結局；動員強度極高但動員後三條道路相互否定，2020 年後因國安法環境惡化而徹底瓦解<sup>30</sup>。本案例屬於 **Pattern β：W1 部分解但 W2/W3 沒解 → 派系裂解**。

**案例三，加泰隆尼亞後 2017 (ANC/Òmnium)**。ANC（Assemblea Nacional Catalana）與 Òmnium Cultural 在數位協作工具支援下維持了會員制與內部章程；W2 在線下會員制度層面屬於中等強度，W3 同樣中等。W1 在工具層因為使用西班牙公民身分根，跨入威權壓制邊界後反而成為弱點。2017 年公投後西班牙憲法法院的封鎖、馬德里中央政府的刑事追訴、Vocdoni 等替代基礎設施的試驗，使案例同時面臨內部治理與外部法效兩層挑戰<sup>31</sup>。Crameri 2014 *Goodbye, Spain?* 與 Della Porta et al. 2017 *Movement Parties Against Austerity* 的觀察指出，ANC/Òmnium 在內部三條件達中等強度的情況下仍未能達成獨立目標，主要因為外部國家壓制壓垮了內部結構。本案例屬於 **Catalonia 邊界**；劃定外部變數（國家強制力）的邊界但不削弱框架本身。需要明示，外部變數可能的另一種解讀是「外部壓制本身就足以使三條件失效」，這留作 H1' 的開放挑戰。

**案例四，白俄羅斯反對派 2020-2021**。Telegram 動員（NEXTA 與相關頻道）在 2020 年總統選舉抗議期間達到數十萬人規模。W1 偏弱（Telegram 仍綁定真實電話），W2 弱（流亡 vs 國內基層斷裂），W3 缺失（領導 Tikhanovskaya 流亡後與國內基層失去問責鏈）<sup>32</sup>。Wilson 2021 *Belarus: The Last European Dictatorship* 更新版的觀察指出，白俄羅斯反對派在動員層成功但治理層完全崩潰；2021 年後國內組織能力幾近清零，流亡領導與國內聲援者之間出現結構性斷層。本案例屬於 **Pattern β**，但相較香港更接近單純的領導斷層而非派系分歧。

**案例五，Briar / Cwtch 2017-2026**。Briar 與 Cwtch 在工具層面強解 W1；對等網狀網路 + 端對端加密 + 不依賴中心化伺服器，即使在斷網場景仍可運作<sup>33</sup>。但工具本身未提供 W2 與 W3 的對應制度；Briar 沒有「群組成員資格證明」或「跨成員問責流程」這類功能設計。在最需要這些工具的高威脅人群（流亡者、記者、抵抗政體下的組織者）中，採用率仍然低落，部分原因是工具無對應的社會制度配套<sup>34</sup>。需要標明的是，Briar / Cwtch 的採用率定量資料不完整，目前的觀察主要來自 Sukhbaatar 2017 學術評估與項目自身公開文檔，後續需要 GitHub stars / Play Store / interview-based fieldwork 等更系統的定量研究。本案例屬於 **Pattern γ：工具解 W1 但社會層 W2/W3 無對應制度 → 採用率低**。

整理上述五個案例，三種失敗 pattern 可以對應到三道牆的失守位置：

- **Pattern α**：W1 在動員層失守，下游談不到（Iran Green 2009）。
- **Pattern β**：W1 部分解但 W2/W3 在治理層失守，導致派系裂解或領導斷層（LIHKG、Belarus）。
- **Pattern γ**：W1 在工具層被解，但社會層無對應的 W2/W3 制度，導致採用率低（Briar/Cwtch）。
- **Catalonia 邊界**：W1+W2+W3 達中等強度但外部國家壓制壓倒內部結構，劃定框架的外部邊界。

這四種模式在 N=5 的限制下構成本文的核心歸納。需要再次明示，這個歸納是 N=5 樣本下的 pattern 觀察，後續研究在 N 提升後可能修正模式分類或新增模式類型。Catalonia 邊界尤其需要小心處理；外部變數削弱框架的可能性必須與框架本身被驗證的可能性分開記錄。

## 五、三道牆形式化：H0 → H1 → H1' 與 civic proof 對應

§2-§4 的證據分別來自規範文本詮釋（D 演繹）、跨案例文獻匯流（I 歸納）、五案例 process tracing（C 因果）。本節把這三組證據整合進一個形式化的合取假說，並建立與 article 02 civic proof 4 條件的對應映射。形式化採 Cappelen 2018 *Fixing Language* 的 conceptual engineering 三判準（覆蓋度 / 區辨力 / 可承繼性）作為內部評估標準<sup>35</sup>。

**P1（弱），H0 過強**。mashbean 原始假說的最強讀法 H0 = (A ⟹ F)，其中 A = 身分隱私不足，F = 數位結社失敗，⟹ 為單因充分條件。H0 等價於「只要 A，就 F」。反例如下。MakerDAO、Compound、Uniswap 等代幣治理 DAO 在 W1 上達到實質強度（pseudonymous wallets + 公鑰連續性），但治理仍然失敗；plutocracy（持幣比例決定投票權）、VC capture（早期投資者持有大量代幣）、core-team exit（核心開發團隊離開後治理崩潰）等多重機制獨立發揮作用<sup>36</sup>。Buterin-Ohlhaver-Weyl 2022 *Decentralized Society: Finding Web3's Soul* 與 DuPont 2017 *The DAO* 的分析指出，DAO 治理失敗的原因不是身分隱私不足；W3 內部問責機制的設計失敗才是核心。這個反例使 H0 在「身分隱私充分」的條件下仍然預測結社成立，與觀察不符，因此 H0 過強。

**P2（中，核心修正），H1' = ¬F ⇔ W1 ∧ W2 ∧ W3**。把 H0 修正為合取結構，得到 H1'。¬F（結社不失敗）等價於 W1 ∧ W2 ∧ W3 同時成立；三道牆同時被解才是結社規模化的必要充分條件。三道牆的內容如下。**W1（持續性假名牆）**：同一個成員身分在時間軸上可被群體辨識，可以掛真名或假名，最弱形式為 narrative continuity。**W2（群體界線可驗證牆）**：群體有能力在內部判定誰是成員、誰不是。**W3（內部問責牆）**：成員犯錯時群體有制度機制追究責任。三道牆的合取結構承載 §4 三種失敗 pattern；任何一個 W_i 失守即構成失敗，這對應於合取結構在邏輯上的「缺一即敗」性質。

H1' 是規範-經驗合取，不是純邏輯定義。「規範」在於三道牆的內容由 §2 的政治哲學系譜推得；「經驗」在於三種失敗 pattern 由 §4 的五案例 process tracing 歸納而來。這個合取性質意味著 H1' 不能透過純概念分析證明，只能透過經驗檢驗逼近，並接受在新案例下被修正的可能。W4（法律地位）、W5（資源）、W6（領導）等其他結構條件未被排除，留作開放討論；它們可能作為三道牆的補充條件或前提條件，但本文不對此作斷言。

**P3（強，需橋接），Civic proof 4 條件對應三道牆所需的規範必要條件**。article 02 提出的 civic proof 概念框架包含四項條件；anonymity、unlinkability、verifiability、accountability<sup>37</sup>。這四項條件與三道牆的對應映射如下表。

| Civic proof 條件 | 對應牆 | 機制 |
|---|---|---|
| anonymity | W1 | 不暴露真名仍可被認為「同一個成員」（narrative continuity 而非真名持續性） |
| unlinkability | W1 + W2 | 群外不可連結個別成員行動，群內可驗證為成員（內外分離） |
| verifiability | W2 | verifiable membership credentials（密碼學意義上的成員資格證明） |
| accountability | W3 | accountable pseudonymity（threshold opening 由群體 m-of-n 持有；借 article 01「政治經濟成就」框架） |

這個對應映射是三篇博論 article 在概念層次的接合點。article 01 提供 W3 的政治經濟基礎；accountable pseudonymity 之所以可能，並非密碼學機制單獨能完成；某種社會契約使「在違規時可被內部問責 + 在正常情況下對外保持假名」這個雙條件被結社成員集體承擔，這是「政治經濟成就」而非純技術成就<sup>38</sup>。article 02 提供 W1+W2+W3 的規範條件束；civic proof 把四條件作為任何「對外宣稱具有成員資格 + 對內可被問責 + 對外不被識別」的證明系統的最小規範要求<sup>39</sup>。article 03（本篇）提供 empirical 驗證；三道牆假說 + 五案例 process tracing + Strong/Weak form 邊界。

需要明示的是，civic proof 4 條件是規範性提案，不是已驗證的工程實作。anonymity 在密碼學上有 zero-knowledge proof / blind signature 等成熟工具，verifiability 在 verifiable credentials / W3C VC 標準下也有實作路徑，但 unlinkability 的內外分離（pseudonymous credentials 而非 anonymous credentials）在主流 wallet 生態尚未成為預設，accountability 的「threshold opening 由群體 m-of-n 持有」更是研究中議題<sup>40</sup>。把 civic proof 4 條件映射到三道牆，是建立規範性提案與實證假說的對齊，不是宣稱問題已解。

**P4（最強，條件性），若三道牆同時被解，數位結社的規模化將是可能的；目前尚無案例同時解了三道牆，假說只能否證式檢驗**。P4 是 H1' 的條件性結論。它的最強讀法是「三道牆合取構成結社規模化的必要充分條件」，但要真正驗證這個讀法，需要至少一個案例同時解了 W1、W2、W3 並達到 ≥10⁵ 成員規模 + 持續性運作 + 跨威權邊界。這個案例目前不存在。Lakatos 1970 對科學研究綱領的方法論討論為這種狀況提供了一個可行的處理路徑；當核心命題無法直接證實時，把它作為研究綱領的硬核（hard core），藉由保護帶（protective belt）的反例處理逐步逼近<sup>41</sup>。本文 §6 的反例與邊界處理即扮演這個角色。

## 六、反例與邊界：DAO、Cypherpunks、SecureDrop、Linux 重新框定

H1' 在 §5 完成形式化。本節處理可能反駁 H1' 的四組案例，並劃定 Strong/Weak form 邊界。

**DAO 治理（MakerDAO、Compound、Uniswap、Optimism Citizens' House）**。DAO 是 H1' 的最強反例候選；在 W1 上以 pseudonymous wallets 達實質強度，在 W2 上以 token holder 為界線達中強強度，但 W3 仍然失敗。MakerDAO 自 2018 年運作至今，多次經歷 plutocracy 危機（持幣比例決定治理）、VC capture（a16z 等早期投資者集中持幣）、core-team exit（Rune Christensen 退出後治理路線爭議）<sup>42</sup>。Compound 與 Uniswap 的治理紀錄也呈現類似模式。Hassan & De Filippi 2021 在 *Internet Policy Review* 對 DAO 治理理論的綜述、Schneider 2022 *Governable Spaces* 對「可治理空間」的概念分析、Buterin 2021 "Moving beyond coin voting governance" 對 coin voting 缺陷的反思，皆指向 W3 的多重失敗。W3 失敗的表現是多重的：plutocracy 之外，還有 VC capture 與 core-team exit 同時作用，每一條獨立構成 W3 的破口<sup>43</sup>。

Optimism Citizens' House（自 2023 年運作至今）是目前最認真的 W3 嘗試。它採用 quadratic voting、Citizens' House 與 Token House 雙院制、RetroPGF 公共財追溯資助等機制，試圖跳脫 coin voting 的 plutocracy 陷阱<sup>44</sup>。但案例目前卡在 100s-1,000s 規模，且 Citizens' House 的成員資格仍是 Foundation-led citizen issuance（基金會選定發放），規模化軌跡未知。若 2027 年前 Optimism Citizens' House 達到 10K 規模 + 真正去 Foundation 化的 citizen issuance，將部分反駁 weak form。這個推測屬於 conditional 結論，不能作為當前的反駁依據。

把 DAO 案例整理在 H1' 的框架內，得到的是修正而非反駁。DAO 解了 W1+W2 但未解 W3，正是 H1' 預測「缺一即敗」的具體實例。這支持 weak form。

**Cypherpunks 1990s mailing list**。Levy 2001 *Crypto*、Coleman 2014 *Hacker, Hoaxer, Whistleblower, Spy*、Beyer 2014 *Expect Us* 對 cypherpunks 的歷史敘述顯示，這個社群以 pseudonyms 為主（W1 解），無正式 membership 制度（W2 弱），社群規範靠 Tim May、Eric Hughes 等核心人物 + mailing list moderation 維繫（W3 中等）<sup>45</sup>。把 cypherpunks 視為 H1' 反例的論證，常以「Bitcoin 起源於 cypherpunks 社群」為佐證；既然 cypherpunks 能孕育 Bitcoin，就證明 W1 解的社群可以做出大事。這個論證把 movement 與 association 混淆。Cypherpunks 是 movement / knowledge community（思想流派、技術試驗場），不是 association（持續成員身分 + 群體界線 + 內部問責）；Bitcoin 的成功是 Satoshi 的單人 / 小團隊 + 公開協議 + 自主運行的合成結果，不可洗白歸功於 cypherpunks 社群本身的結社能力。重新框定後，cypherpunks 不構成 H1' 的反例。

**Tor SecureDrop**。SecureDrop 自 2013 年起部署於 70+ 新聞機構，提供記者與線民之間的匿名提交工作流<sup>46</sup>。它解 W1（onion service + Tor），W2 在 newsroom-scoped 範圍內中等（每個新聞編輯室自管自己的 instance），W3 在 newsroom 內部由編輯職權承擔。把 SecureDrop 視為「數位結社」的論證犯了範疇錯誤。SecureDrop 屬於 service-tier whistleblower workflow（服務層的吹哨者工作流），由新聞機構作為已存在的法人組織提供與運維，並非新興的數位結社本身。判準有兩條。其一，SecureDrop 的成員資格由 host newsroom 定義，並非由群體本身定義；其二，內部問責機制由 host newsroom 的編輯紀律承擔，並非群體成員之間的相互問責。這兩條判準使 SecureDrop 落在 service tier 而非 association tier。重新框定後，SecureDrop 不構成 H1' 的反例。需要標明的是，這個重新框定並不否認 SecureDrop 的價值，僅劃定它作為服務基礎設施的範疇。

**早期 Linux Kernel 社群**。Linus Torvalds 與 maintainer 圈以 real names + 公開貢獻歷史為主，運作三十餘年，是長期有效的協作群體<sup>47</sup>。Kelty 2008 *Two Bits* 與 Lerner & Tirole 2002 對開源運動的分析顯示，Linux 的成功依賴於三項條件；(a) 真名 + 公開貢獻歷史替代 W1 的 narrative continuity 機制，(b) committers 名單作為 W2 的群體界線，(c) Linus 與 maintainer 圈承擔 W3 的內部問責。把 Linux 視為 H1' 反例的論證會說，既然 Linux 能在不解 W1 的條件下成功，三道牆假說就不成立。

這個論證的問題在於它忽略了 Linux 案例的脈絡邊界；民主環境 + 勞權保護 + 個人物理曝光可承受。在這個脈絡下，「真名 + 公開貢獻歷史 + 個人可承擔被識別」可以替代 narrative-continuity 意義上的 W1。但這個 substitute path **只在民主 / 勞權保護的脈絡下成立**；當脈絡轉為威權（中國、伊朗、白俄羅斯），Linux 的 substitute 路徑會崩潰，因為個人物理曝光不可承受。重新框定後，Linux 不構成 H1' 的反例，反而劃定了一個 substitute path 邊界；在符合民主 + 勞權保護條件的脈絡下，real-name + public-contribution-history 可以替代假名形式的 W1。需要明示，這個邊界判定屬於從現有案例的脈絡推得的延伸命題，不是已被經驗驗證的結構結論；「威權脈絡下 Linux substitute 是否仍可行」目前缺乏直接案例，留作後續研究。

把上述四組重新框定整理為以下 Strong/Weak form 拆分：

- **Strong form**：政治結社 + ≥10⁵ 規模 + 跨威權邊界場景下，三道牆 jointly necessary。目前無同時解三道牆的案例；NEXTA / Telegram 等準大規模案例皆呈現標準失敗模式。
- **Weak form**：財務治理 + 10³-10⁴ 規模 + 民主環境場景下，W1+W2 可解，W3 仍是難題。MakerDAO / Compound / Uniswap 等 DAO 是典型支持案例；Optimism Citizens' House 2025-2027 軌跡是潛在反駁候選。
- **Linux substitute path**：民主 + 勞權保護 + 個人物理曝光可承受場景下，real-name + 公開貢獻歷史可以替代 W1。早期 Linux Kernel 社群是支持案例；該替代在威權脈絡下失效屬推論而非已驗證命題。

Strong form 在當前條件下仍只能否證式檢驗。Weak form 在 DAO 場景下已部分驗證（W1+W2 解 → W3 仍開放）。Linux substitute path 提供 W1 的替代路徑但不否定三道牆框架。

## 七、與 article 01 與 article 02 的整合

本章是博論第三篇研究 article。前兩篇分別處理 accountability without identification（article 01）與 civic proof concept positioning（article 02）。三篇 article 在三道牆框架上正式接合，本節整理接合點與一個重要的反向修正。

**與 article 01 的接合點是 W3 的政治經濟基礎**。article 01 論證「accountability 不需要 identification」這個概念配對的可能性。Accountable pseudonymity 是一個密碼學上可實作（threshold opening、selective disclosure）但社會學上需要群體承載的雙條件設計<sup>48</sup>。把 article 01 的論證接到 H1' 的 W3 上，得到的關係如下。W3 的內部問責機制要在「不對外暴露成員真實身分」的條件下達成，必須走 accountable pseudonymity 路徑；而 accountable pseudonymity 的可能性在 article 01 中被論證為「政治經濟成就」，因為它需要群體願意集體承擔「在違規時可被內部問責 + 在正常情況下對外保持假名」這個雙條件，屬於社會契約而非單純技術契約。把這個觀點代入 §4 的失敗案例，可以重新解讀 LIHKG 與 Belarus 的 W3 失敗。兩個案例所缺者並非密碼學工具一項，更核心的缺項是承擔 accountable pseudonymity 政治經濟負擔的群體配套。

**與 article 02 的接合點：civic proof 4 條件作為 W1+W2+W3 的規範條件束**。article 02 把 civic proof 定位為「一個對外可宣稱具有成員資格 + 對內可被問責 + 對外不被識別」的證明系統的概念框架，提出 anonymity / unlinkability / verifiability / accountability 四條件作為任何 civic proof 候選方案的最小規範要求<sup>49</sup>。本章 §5 的對應映射顯示，這四條件恰好對應於三道牆所需的規範必要條件；anonymity 對應 W1，unlinkability 對應 W1+W2 內外分離，verifiability 對應 W2，accountability 對應 W3。把 article 02 的規範框架套用到 article 03 的 empirical 假說，得到的結論是 civic proof 提供了一個系統性解法的規範性提案；若有工程實作能同時滿足四條件，則三道牆同時被解的可能性就被打開。需要明示，civic proof 仍是規範性提案而非已驗證工程實作；目前在主流 wallet / verifiable credentials 生態中，內外分離的 unlinkability 與群體 m-of-n threshold opening 的 accountability 都尚未成為標準配置。

**對 article 02 的反向修正：unlinkability 必須做內外分離**。本章 §2 的政治哲學論證指出，C1（持續性身分）與 C2（群體界線）的合取要求使 unlinkability 必須做內外分離；對外（對非成員、對國家、對監控敵手）保護成員的跨行為不可連結，對內（對群體本身）維持成員的可連結性以利驗證。article 02 的原始版本把 unlinkability 描述為「跨行為不可連結」，未明確區分對外與對內。在本章框架下，這個描述需要修正；anonymous credentials（如 idemix 風格、完全不可連結）違反 C1，因為它使「同一個成員」在群內無法被識別，這會讓結社的 W1 無法成立；pseudonymous credentials（如 BBS+ 風格 / Coconut 風格、群外不可連結但群內可連結）才同時滿足 C1 與 C2<sup>50</sup>。

這個反向修正對 article 02 的後續修訂提出兩項建議。第一，在 unlinkability 的條件描述中明確加入「內外分離」子條件，並把「對內可連結 + 對外不可連結」作為任何 civic proof 候選方案的工程選型指引。第二，在 article 02 對主流密碼學工具（idemix、BBS+、AnonCreds、PCP、Privacy Pass、Tor、Verifiable Credentials Data Model 等）的評估表中，加入「是否符合 unlinkability 內外分離原則」這項評估維度。這兩項建議不削弱 article 02 的 civic proof 規範框架，而是把該框架在工程選型層次的精細度推進一步。

**三 article 的接合圖譜**。整理上述接合點，三篇博論 article 在 H1' 框架下的關係如下。article 01 提供 W3 的政治經濟基礎（accountable pseudonymity 是社會契約成就），article 02 提供 W1+W2+W3 的規範條件束（civic proof 4 條件，含本章對 unlinkability 的反向修正），article 03（本篇）提供 empirical 驗證（三道牆假說 + 五案例 process tracing + Strong/Weak form 邊界）。三者構成「規範條件 → 政治經濟基礎 → 經驗檢驗」的論證鏈，每一篇可獨立成立，但合在一起才完整。

## 八、結論

H0 的最強讀法（「身分隱私不足是數位結社失敗的單因充分條件」）在文獻檢索後過強，需要修正為合取結構 H1' = ¬F ⇔ W1 ∧ W2 ∧ W3。三道牆是 W1（持續性假名）、W2（群體界線可驗證）、W3（內部問責）。五個案例的 process tracing 顯示三種失敗 pattern；α（W1 失守 → 上游崩潰，伊朗模式）、β（W1 部分解但 W2/W3 沒解 → 派系裂解，香港 / 白俄羅斯模式）、γ（工具解 W1 但社會層 W2/W3 無對應 → 採用率低，Briar / Cwtch 模式）；以及 Catalonia 邊界（外部國家壓制下三條件中等強度也撐不住）。DAO、Cypherpunks、SecureDrop、Linux 等準成功案例在嚴格框定後不構成反例，反而劃定 Strong form（政治結社 + ≥10⁵ + 跨威權）三道牆 jointly necessary 與 Weak form（財務治理 + 10³-10⁴ + 民主）W1+W2 可解 W3 仍開放的兩種邊界。Linux substitute path 在民主 + 勞權保護下提供 real-name + 公開貢獻歷史的 W1 替代路徑，威權脈絡下該替代崩潰屬推論而非已驗證。

數位結社的失敗，根本問題並不只是工具不足。三道牆同時未被解才是核心。身分隱私只是上游的第一道牆，它是必要的瓶頸；解了它，仍會在第二道（群體界線可驗證）與第三道（內部問責）失敗。Civic proof 的規範條件束恰好對應這三道牆所需的規範必要條件，提供一個系統性解法的規範性提案。然而 civic proof 是規範性提案，並非已驗證的工程實作；目前尚無案例同時解了三道牆。

H1' 在當代條件下只能否證式檢驗（缺一即敗），不能證實式驗證（同時解三道牆需要至少一個 ≥10⁵ 規模 + 跨威權邊界 + 持續運作的案例，目前不存在）。這個方法論限制是 H1' 的內生條件，不是論證瑕疵。Lakatos 1970 對科學研究綱領的處理路徑；把核心命題作為硬核，藉由保護帶的反例處理逐步逼近；為 H1' 提供了可行的後續研究框架。

留作後續研究的問題包括以下幾項。第一，N=5 案例樣本不足，需擴展至 N≥15 含成功對照組（拉美 2019 智利、非洲衣索比亞 / 蘇丹案例、亞洲 2025 後續案例皆未覆蓋）；其中拉美與非洲案例的覆蓋對於檢驗框架的跨地理普適性尤其關鍵。第二，W4（法律地位）、W5（資源）、W6（領導）等其他結構條件與三道牆的關係未在本文中處理，可能作為三道牆的補充或前提條件。第三，三條件「強/中/弱」評分尚未操作化，後續研究需要建立可重複的 5-point rubric + inter-rater reliability 評估。第四，civic proof 4 條件的工程實作研究；若有 wallet 同時滿足 4 條件並支撐 ≥10K 結社，是否反例化 H1' P4；是 article 02 與本篇可共同推進的研究路線。第五，Optimism Citizens' House 2025-2027 規模化軌跡若達 10K 規模 + 真正去 Foundation 化的 citizen issuance，將提供 weak form 的部分反駁機會。第六，mashbean 原始假說的作者本意是否就是 H0 的最強讀法，仍待透過訪談或交叉引用其他文本確認；本文在「最強讀法」的工作預設下進行修正，避免把作者鎖死在某個特定版本。

三篇博論 article 在三道牆框架上正式接合；article 01 提供 W3 的政治經濟基礎，article 02 提供 W1+W2+W3 的規範條件束（含本篇對 unlinkability 的內外分離反向修正），article 03 提供 empirical 驗證與 Strong/Weak form 邊界。下一步的整合需要工程實作研究與 N≥15 跨地理案例擴展共同推進。

## 參考資料

1. Dingledine, R., Mathewson, N., & Syverson, P. (2004). "Tor: The Second-Generation Onion Router." *USENIX Security Symposium* 13. 來源等級 A。
2. Briar Project documentation, briarproject.org; Cwtch Project documentation, cwtch.im; Sukhbaatar, B. (2017). Briar Project academic evaluation. 來源等級 B/C。
3. 跨案例觀察整合自 Tufekci (2017) *Twitter and Tear Gas*; Castells (2012/2015) *Networks of Outrage and Hope*; Bennett & Segerberg (2013) *Logic of Connective Action*。來源等級 A。
4. Levy, S. (2001). *Crypto: How the Code Rebels Beat the Government Saving Privacy in the Digital Age*. Penguin。來源等級 A。
5. Buterin, V., Ohlhaver, P., & Weyl, E. G. (2022). "Decentralized Society: Finding Web3's Soul." SSRN 4105763; DuPont, Q. (2017). "Experiments in algorithmic governance: A history and ethnography of 'The DAO'." In *Bitcoin and Beyond*, ed. Campbell-Verduyn. Routledge。來源等級 A。
6. Lee, F. L. F., & Chan, J. M. (2018). *Media and Protest Logics in the Digital Era: The Umbrella Movement in Hong Kong*. Oxford UP; Lee, F. L. F. (2020). "Solidarity in the Anti-Extradition Bill movement in Hong Kong." *Critical Asian Studies* 52(1)。來源等級 A。
7. Briar Project documentation 與 Sukhbaatar (2017) 對採用率的觀察；定量資料不完整，後續需要 GitHub stars / Play Store / interview-based fieldwork。來源等級 B/C。
8. 條件性結論之方法論依據參 Lakatos, I. (1970). "Falsification and the Methodology of Scientific Research Programmes." 來源等級 A。
9. Arendt, H. (1958). *The Human Condition*. University of Chicago Press, ch. V; Arendt, H. (1963). *On Revolution*. Viking Press, ch. 6。來源等級 A。
10. Honig, B. (1993). *Political Theory and the Displacement of Politics*. Cornell UP; Benhabib, S. (1996). *Democracy and Difference*. Princeton UP。來源等級 A。
11. Tocqueville, A. de (1840). *Democracy in America*, vol. 2, pt. 2, ch. 5-7。來源等級 A。
12. Putnam, R. D. (2000). *Bowling Alone: The Collapse and Revival of American Community*. Simon & Schuster; Skocpol, T. (2003). *Diminished Democracy: From Membership to Management in American Civic Life*. Oklahoma UP。來源等級 A。
13. Rosenblum, N. L. (2008). *On the Side of the Angels: An Appreciation of Parties and Partisanship*. Princeton UP。來源等級 A。
14. NAACP v. Alabama ex rel. Patterson, 357 U.S. 449 (1958); Roberts v. United States Jaycees, 468 U.S. 609 (1984); Boy Scouts of America v. Dale, 530 U.S. 640 (2000)。來源等級 A（一手判決）。
15. Inazu, J. D. (2012). *Liberty's Refuge: The Forgotten Freedom of Assembly*. Yale UP。來源等級 A。
16. Kelty, C. M. (2008). *Two Bits: The Cultural Significance of Free Software*. Duke UP; Lerner, J., & Tirole, J. (2002). "The Open Source Movement." *Journal of Industrial Economics*。來源等級 A。
17. narrative continuity 概念之系譜詮釋整合自 Honig (1993); Benhabib (1996); 並依 Arendt action 的「公共空間中自我顯現」概念延伸。來源等級 A（基礎文本）+ B（延伸推論）。
18. 內外分離原則之技術實作對照參 BBS+ 簽章與 Coconut 等 selective disclosure credentials；對應 anonymous vs pseudonymous credentials 區分屬本文對 article 02 的反向修正。來源等級 B（綜合推論）。
19. Bennett, W. L., & Segerberg, A. (2013). *The Logic of Connective Action: Digital Media and the Personalization of Contentious Politics*. Cambridge UP。來源等級 A。
20. Tufekci, Z. (2017). *Twitter and Tear Gas: The Power and Fragility of Networked Protest*. Yale UP。來源等級 A。
21. Castells, M. (2012/2015). *Networks of Outrage and Hope: Social Movements in the Internet Age*. Polity。來源等級 A。
22. Earl, J., & Kimport, K. (2011). *Digitally Enabled Social Change*. MIT Press。來源等級 A。
23. Polletta, F. (2002). *Freedom Is an Endless Meeting: Democracy in American Social Movements*. Chicago UP。來源等級 A。
24. Diani, M., & McAdam, D. (Eds.) (2003). *Social Movements and Networks: Relational Approaches to Collective Action*. Oxford UP。來源等級 A。
25. Karpf, D. (2012). *The MoveOn Effect*. Oxford UP。來源等級 A。
26. Howard, P. N., & Hussain, M. M. (2013). *Democracy's Fourth Wave? Digital Media and the Arab Spring*. Oxford UP；UGTT 工會骨架歷史見書中對突尼西亞案例之第 5 章。來源等級 A。
27. Anduiza, E., Cristancho, C., & Sabucedo, J. M. (2014). "Mobilization through online social networks: the political protest of the indignados in Spain." *Information, Communication & Society* 17(6); Lim, M. (2013). "Many Clicks but Little Sticks: Social Media Activism in Indonesia." *Journal of Contemporary Asia*。來源等級 A/B。
28. Sreberny, A., & Khiabany, G. (2010). *Blogistan: The Internet and Politics in Iran*. I.B. Tauris; Khamis, S., & Vaughn, K. (2011). "Cyberactivism in the Egyptian Revolution." *Arab Media & Society*。來源等級 A/B。
29. 派系裂解觀察整合自 Lee (2020) 與 Yuen (2020); Yuen, S. (2020). "Hong Kong After the Anti-Extradition Bill Movement." *Hong Kong Studies*。來源等級 A。
30. Lee & Chan (2018) 同註 6。
31. Crameri, K. (2014). *Goodbye, Spain? The Question of Independence for Catalonia*. Sussex Academic; Della Porta, D., et al. (2017). *Movement Parties Against Austerity*. Polity; Vocdoni 加泰隆尼亞案例 documentation, vocdoni.io。來源等級 A/B/C。
32. Wilson, A. (2021). *Belarus: The Last European Dictatorship* (updated ed.). Yale UP; Tikhanovskaya organizing platforms documentation。來源等級 A/C。
33. Briar Project documentation 同註 2; Cwtch Project documentation 同註 2。
34. 採用率觀察整合自 Sukhbaatar (2017) 與 Briar Project 公開文檔；定量資料不完整需後續研究。來源等級 B/C。
35. Cappelen, H. (2018). *Fixing Language: An Essay on Conceptual Engineering*. Oxford UP。來源等級 A。
36. MakerDAO MIPs 公開治理文件; Compound governance forums; Uniswap governance forum 與相關治理紀錄分析。來源等級 C（一手治理紀錄）。
37. article 02 civic proof concept positioning（博論第 2 篇研究 article，2026）論證 anonymity / unlinkability / verifiability / accountability 四條件之規範必要性。
38. article 01 accountability without identification（博論第 1 篇研究 article，2026）論證 accountable pseudonymity 作為政治經濟成就而非單純技術成就的概念配對。
39. article 02 同註 37。
40. 工程實作評估參 Schneider, N. (2022). *Governable Spaces*. University of California Press; Hassan, S., & De Filippi, P. (2021). "Decentralized Autonomous Organization." *Internet Policy Review* 10(2)。來源等級 A。
41. Lakatos (1970) 同註 8。
42. Buterin, V. (2021). "Moving beyond coin voting governance." vitalik.eth.limo; MakerDAO MIPs 公開治理文件 同註 36。來源等級 A/C。
43. Hassan & De Filippi (2021) 同註 40; Schneider (2022) 同註 40; Buterin (2021) 同註 42。
44. Optimism Citizens' House 2024-2025 governance documentation, optimism.io/governance; RetroPGF 2-4 公開評估。來源等級 C。
45. Levy (2001) 同註 4; Coleman, G. (2014). *Hacker, Hoaxer, Whistleblower, Spy: The Many Faces of Anonymous*. Verso; Beyer, J. L. (2014). *Expect Us: Online Communities and Political Mobilization*. Oxford UP。來源等級 A。
46. SecureDrop deployment data, securedrop.org; 跨 70+ 新聞機構部署紀錄。來源等級 C。
47. Kelty (2008) 同註 16; Lerner & Tirole (2002) 同註 16。
48. article 01 同註 38；W3 政治經濟基礎之延伸論證見該篇 §3-§5。
49. article 02 同註 37；civic proof 規範條件束之系統論證見該篇 §2-§4。
50. BBS+ 簽章與 Coconut credentials 之內外分離 unlinkability 性質參 Camenisch et al. 對 BBS+ 的安全性分析與 Sonnino et al. 對 Coconut 的設計文檔；將該技術區分視為 article 02 unlinkability 條件的反向修正。來源等級 B（綜合推論）。
