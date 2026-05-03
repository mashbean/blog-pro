---
title: "可問責不以實名為前提：從密碼學到政治哲學的雙向論證"
description: "民主問責性是結果性條件而非前置性條件。當啟封權力被多方持有、啟封門檻明定、啟封過程可稽核時，密碼學假名加上條件性開封機制可同時滿足匿名與問責，且邊界場景（AML、選舉、跨境制裁）反而強化此論點。"
pubDate: 2026-05-02
tags: ["accountability", "pseudonymity", "digital-identity", "cryptography", "political-philosophy", "civic-proof", "republicanism", "due-process", "threshold-cryptography"]
category: "數位身分與民主理論"
aiModel: "Claude Opus 4.7"
aiPrompt: "民主問責性能否在不要求前置實名識別的情況下成立？滿足什麼工程與政治條件下成立？邊界在哪？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-02-accountability-without-identification"
aiGeneratedDate: 2026-05-02
humanReviewed: false
lang: "zh-TW"
---

## 一、導論：兩層信任模型與核心問題

當代數位身分制度的設計論辯，往往被化約為「實名 vs 匿名」的二元對立。這種化約遮蔽了一個更精細的結構問題。身分系統實際上由兩層信任機制疊合而成，下層為 *發行正當性*（issuance legitimacy），處理身分憑證的核發是否合於規範性條件，上層為 *交換架構*（exchange architecture），處理憑證在公民行動現場如何被出示、驗證、選擇性揭露與條件性啟封。將兩層分開檢視之後，原本看似互斥的「匿名」與「問責」便可能在制度上分屬不同層級，難以在單一介面上互相排擠。換言之，許多歷時甚久的爭議，可能源於論者錯把上層的選擇性揭露當成下層的發行條件，或反之，將下層的可追溯性視為上層必須揭露的義務。

由此引出的核心問題有三層。其一，民主憲政意義下的可問責性（accountability），究竟屬於 *前置性條件*（要求參與者在進入公共行動前完成自然人身分綁定），還是 *結果性條件*（要求在違反規則之後存在可被啟動的追溯與制裁程序）。其二，密碼學文獻自一九九〇年代以來累積的可問責假名族（accountable pseudonymity）原語，包括可開封群簽章、可問責子群多簽章、可問責環簽章、具撤銷之匿名憑證、門檻群簽章等構造，能否在政治經濟層面承擔條件性事後啟封的承諾。其三，哪些公民行動的啟封門檻、啟封權力分配、啟封證據鏈滿足正當程序的要求，哪些則否。

下文先以政治哲學重構 accountability 的結構特徵（第二節），再進入密碼學機制的成熟度分層（第三節），續以法律先例梳理制度模板及其可移植性的限制（第四節），接著以反向案例驗證啟封權集中所導致的範式退化（第五節），最後以邊界倒戈分析將原本預期的最強反論轉化為主論點的支撐（第六節）。第七節提出統合命題並界定剩餘的開放問題。論證採取雙向結構，一面從政治哲學基礎下推到工程設計要求，一面從密碼學工程上推到政治經濟條件，兩線在啟封權力的分散性這一介面交會。

## 二、政治哲學基礎：accountability 的結果性本質與身分區分

民主理論中關於 accountability 的二元結構分析，自 Schedler (1999) 與 Bovens (2007) 以降已具相當共識。accountability 的核心要件是 answerability 與 enforceability，前者要求行動者於被質疑時提供解釋，後者要求在解釋不被接受時可施加制裁<sup>1</sup>。這個結構從定義上即指向 *事件發生之後* 的程序，無關於事件發生之前的身分要件。Mulgan (2000) 在概念史的盤整中亦指出，accountability 一詞的擴張使用雖頻仍，其核心仍維持為一種「事後可追溯」的關係<sup>2</sup>。

自由主義 procedural due process 一線在美國判例法中的累積也支撐相同的結構結論。Talley v. California, 362 U.S. 60 (1960) 否定加州市政府要求傳單必須署名的條例；NAACP v. Alabama ex rel. Patterson, 357 U.S. 449 (1958) 確認結社匿名性受第一修正案保護；McIntyre v. Ohio Elections Comm'n, 514 U.S. 334 (1995) 進一步將匿名政治言論納入核心保護範圍<sup>3</sup>。三案的共同邏輯在於否認在參與發生 *之前* 強制完成自然人身分綁定的合憲性，同時保留問責本身於事後程序中的位置。Doe v. Cahill, 884 A.2d 451 (Del. 2005) 與 Dendrite Int'l v. Doe No. 3, 775 A.2d 756 (N.J. Super. App. Div. 2001) 兩案則建立了 unmasking 程序的五要件標準，預設了一個關鍵結構，亦即後台存在動態 *pseudonymous identification*（系統內可辨識且可在事後依司法程序被連結到自然人的 handle），而前台則無 *real-name identification*（事前綁定法律姓名）<sup>4</sup>。

這個區分在過往文獻中常被混淆，於本論文中作為基本概念工具使用。法理學歷史所否定的對象限於 ex ante real-name binding，後台的 pseudonymous traceability 則未受同等否定。Doe v. 2theMart.com, 140 F. Supp. 2d 1088 (W.D. Wash. 2001) 對網路言論的司法揭名門檻，建立在這個區分之上。法院僅在符合特定要件時要求平台協助揭示後台已存在的識別資訊，未要求平台於使用者註冊階段即綁定真實姓名<sup>5</sup>。將此一概念區分明確化的意義在於，反對的對象限定為前置實名綁定，後台動態識別在憲政問責結構中的位置仍受承認。

共和主義一線的 Pettit (1997, 2012) 提出 contestability 作為非支配（non-domination）自由觀的制度保證機制，要求公權力的行使應始終可被公民挑戰<sup>6</sup>。表面上 contestability 似要求識別，實則 Pettit 在 *On the People's Terms* 第六章中對 power-holder 與 power-subject 採取不對稱處理。制度層級的權力者必須可被識別、被質問、被換掉，而公民作為 power-subject 並無對等義務<sup>7</sup>。此一不對稱性對主論證至關重要，將個體層結論直接外推到「制度層級的權力者亦可匿名」並不成立。政治哲學論證的有效範圍因此限縮為「公民參與行為」一側，制度層的可識別性要求則作為獨立的相對命題保留。

對前述命題尚需指出三項規範強度限制。第一，前述判例為規範性主張，並非普遍實證描述。Buckley v. Valeo, 424 U.S. 1 (1976) 與 Doe v. Reed, 561 U.S. 186 (2010) 皆承認在足夠公共利益下可強制 ex ante disclosure<sup>8</sup>。第二，Etzioni (2015) 的 communitarian 批評提醒，絕對匿名在某些社群安全場景中會與 mosaic theory 衝突<sup>9</sup>。第三，Sagar (2013) 對於國家層級 ex post accountability 在系統性 secrecy 條件下的失效有完整分析，提示結果性問責結構在面對國家機密時需要額外的制度補強<sup>10</sup>。三項限制共同提示，accountability 的結果性本質為一種 *默認傾向*，而非絕對命題；其制度兌現高度依賴後續工程與政治經濟條件。

## 三、密碼學工程：可問責假名族的成熟度分層

從 Chaum (1985) 與 Chaum & van Heyst (1991) 起步的密碼學構造，提供了實作「事後可啟封假名」的基本工具<sup>11</sup>。下文以四階分層評估四十年累積的成熟度，分別為理論層、標準化層、實作層、治理層。分層的目的在於避免常見的混淆，亦即把「理論存在」誤讀為「已部署」，或把「已部署」誤讀為「治理可承擔」。

**L1 理論層**已然穩固。匿名憑證（anonymous credentials）的形式定義與安全性證明見於 Camenisch & Lysyanskaya (2001, 2002)，其後續變體支援零知識出示與屬性選擇性揭露<sup>12</sup>。群簽章（group signatures）的形式化由 Bellare, Micciancio & Warinschi (2003) 完成，其動態擴展由 Bellare, Shi & Zhang (2005) 處理，其中 Boneh, Boyen & Shacham (2004) 的 BBS 構造在效率上具突破<sup>13</sup>。可問責子群多簽章（accountable subgroup multisignatures）由 Micali, Ohta & Reyzin (2001) 提出，可問責環簽章（accountable ring signatures）由 Xu & Yung (2004) 與 Bootle 等人 (ESORICS 2015) 推進<sup>14</sup>。門檻動態群簽章由 Camenisch, Drijvers, Lehmann, Lyubashevsky & Towa (SCN 2020) 給出短簽章構造，使啟封權可在多方之間以密碼學方式分散<sup>15</sup>。L1 層的核心結論為，在密碼學意義上，「事後可條件性啟封的假名」已是成熟原語族，其存在性無爭議。

**L2 標準化層**呈現半成熟狀態。BBS+ 已進入 IETF CFRG 與 W3C VC Data Integrity BBS Cryptosuite v1.0 (2024)，SD-JWT 於 IETF 完成 RFC 9901 (2025-11)<sup>16</sup>。ISO 18013-5 mDL 第二版 DIS 仍在制定中，W3C Bitstring Status List v1.0 為 2025 年 Recommendation<sup>17</sup>。歐盟 EUDI ARF v1.4 仍以 SD-JWT VC 與 mdoc 為核心，BBS+ 為候選但未強制<sup>18</sup>。L2 層揭示一個與 L1 並不同步的事實，亦即密碼學的存在性結論未必能在標準化進程中等比例兌現。標準化的政治經濟動態，包括廠商利益、現有部署沿襲、互通需求，對 unlinkability 等隱私性質施加實質壓力。

**L3 實作層**呈現顯著不平衡。已在億級用戶規模實戰部署的匿名憑證類別，主要為 KVAC（Keyed-Verification Anonymous Credentials），見於 Signal Private Group System、Tor 的 lox 機制、Cloudflare 的 Privacy Pass 與 ARC 部署<sup>19</sup>。BBS+ 雖具標準化進程，尚未進入主流身分錢包的生產環境。Direct Anonymous Attestation (DAA) 是另一個規模化案例，其構造由 Brickell, Camenisch & Chen (CCS 2004) 提出，已隨 ISO/IEC 11889 系列 TPM 部署數億片，但 DAA 並未設置 opener<sup>20</sup>。

DAA 的部署紀錄揭示一個值得追蹤的政治經濟悖論。業界對 *無 opener 的* DAA 接受度極高，對 *open-by-design* 的 BBS+ 接受度顯著較低。一個合理觀察是，當啟封權的法律承擔者不明確時，廠商寧願選擇「無人能啟封」的設計，以避免承擔潛在訴訟與政治壓力。這個觀察目前作為 hypothesis 提出，尚未經系統研究驗證，需要在後續案例追蹤中釐清其因果機制；此處暫不對該悖論做強因果斷言。

**L4 治理與政治經濟層**位於關鍵瓶頸。threshold opening 在密碼學上可工程化，Boneh & Komlo (CRYPTO 2022) 的 Threshold Accountable Private Signatures (TAPS) 在工程設計層解決了「責任分散悖論」，亦即批評者擔憂 m-of-n 啟封會導致無人負責的疑慮<sup>21</sup>。TAPS 的關鍵特徵在於，每個簽署者的參與都會留下可稽核紀錄，啟封事件可被個別追溯到每位共同簽署者，並要求其各自承擔責任<sup>22</sup>。然而，鑰匙保管者的長期獨立性、proactive resharing 的程序設計、跨司法管轄協作機制等問題，幾乎無實證部署可參考。Doerner, Kondi, Lee, Shelat & Tyner (IEEE S&P 2023) 的 Threshold BBS+ 提供了分散簽發的工程藍圖，但實證治理紀錄仍待累積<sup>23</sup>。

L1 至 L4 的分層提示一個結論。「密碼學上 accountable pseudonymity 已可行」與「治理上 accountable pseudonymity 已可部署」是兩個不同的命題。後者的瓶頸已超出密碼學原語的存在性問題，涉及標準化動態、發行者誘因設計、與啟封權力的政治經濟結構這三個層面。將博論的貢獻位置定位於 L4，既能避免重複既有密碼學文獻的工作，也能直接回應實際部署的爭議焦點。

## 四、制度模板與三個非對稱性

民主憲政長期透過「條件性開啟隱私」的制度設計協調隱私與問責。法律先例所累積的制度家族至少包含五個。第一是第四修正案下的搜索票（search warrant），第二是 Federal Rules of Criminal Procedure Rule 6(e) 的密封起訴與大陪審團保密制度，第三是 18 U.S.C. § 3521-3528 的證人保護計畫（WITSEC），第四是 Doe v. Cahill 與 Doe v. 2theMart.com 一線的 John Doe 訴訟假名訴訟程序，第五是 Buckley v. Valeo、NAACP v. Alabama、McIntyre 一線的匿名捐款與結社保護<sup>24</sup>。每一家族在規範性意涵上各有側重，但在程序結構上呈現高度相似的設計骨架。

五個制度家族雖場域相異，共有四項骨架特徵。其一，啟封權與審核權由多方獨立機關持有。例如搜索票需由治安法官審核並由執法機關執行，密封起訴需經大陪審團與檢察官並由聯邦法院監督。其二，啟封 trigger 條件須事前明文定義，例如 probable cause、specific articulable facts、清晰可指認的法律利益。其三，啟封程序內部稽核可追溯，包括令狀紀錄、法庭文書、上訴審查、上級法院的 supervisory review。其四，條件成就時的事後啟封或揭露具備明確的程序與證據鏈，難以容受任意行政裁量<sup>25</sup>。四項特徵共同形成一個可被工程化映射的制度結構，意即一個多方持權、明定門檻、可被審計、條件性執行的閉環。

跨法域比較進一步顯示這個制度家族的普遍性。英國 Contempt of Court Act 1981 對公開審理原則與當事人保護之間設計了類似的條件性啟封結構；德國聯邦憲法法院在 BVerfGE 120, 274 (2008) Online-Durchsuchung 一線判決中確立了 Quellen-TKÜ 與通訊資料留存的多方審核要件；法國 Loi du 4 janvier 2010 將新聞來源保護的條件性揭露程序成文化；台灣司法院大法官釋字第 384、396、418、436、709、762、805 號系列亦建立了類似的正當程序審查框架<sup>26</sup>。EU Whistleblower Directive 2019/1937 與 Dodd-Frank § 922 在制度移植層面提供了當代條件性啟封的設計範本，亦即在保護當事人匿名的同時，預留條件性事後揭露的程序窗口<sup>27</sup>。

然而，將這個制度家族直接類比於 threshold opening 設計，會遭遇三個非對稱性。第一個非對稱性是 *主權範圍*。法院的分權結構運作於單一主權內，threshold key 設計則往往跨主權，例如鑰匙保管者分布於多個司法管轄區。第二個非對稱性是 *持份性質*。法院的「多方」是角色分工（檢察官、法官、大陪審團各有不同職能），屬異質持份；threshold key 預設的多方往往為同質持份者，缺乏內生的角色制衡。第三個非對稱性是 *執行基礎*。法院判決的執行依賴國家強制力的物理基礎，threshold key 啟封依賴數學保證，後者在主權衝突場景下無法直接調動國家暴力。Microsoft Corp. v. United States, 829 F.3d 197 (2d Cir. 2016) 對美國搜索票調取愛爾蘭伺服器資料之爭議，與其後 CLOUD Act 2018 透過雙邊執行協議回應之路徑，皆證實主權邊界對司法執行構成實質障礙、且立法回應採協議式而非單邊強制設計<sup>28</sup>。三項非對稱性意味著，制度移植不是簡單的「複製分權結構到密碼學鑰匙」就可完成的工作，需要設計新的角色分化與跨主權協作機制。

承認三項非對稱性之後，制度模板論證採取較弱的版本。search warrant 等家族提供的是合法性論證模板，難以視為可逐條移植的制度模型；其貢獻在於支撐「條件性開啟隱私」這個結構在憲政設計上具有前例。具體可移植條款必須逐條檢驗其對三個非對稱性的處理。Pozen (2018) 對 transparency 規範框架在不同政治經濟條件下的漂移現象之分析，提示制度移植過程中規範意義可能轉變<sup>29</sup>。Reality Winner 案中吹哨者匿名失敗、CLOUD Act 跨境衝突、若干 Twitter 揭名 order 在 Doe 標準下的處理失靈，皆顯示既有制度模板在新場景下的局限<sup>30</sup>。在此意義上，制度模板提供的是論證起點，止於論證起點之外則需要逐案檢視特定 threshold opening 設計如何處理跨主權鑰匙託管、如何建立角色分工以避免同質持份、如何在執行階段填補數學保證與物理執行之間的落差。

## 五、因果反證：啟封權集中與範式退化

如果主論點成立，應可預期一個對應的反向命題，亦即當啟封權集中於單一機構時，系統將呈現範式退化。本節以五個獨立案例的 process tracing 檢驗此一反向命題，並區分機制必然層次與機率性事件層次的因果推論。

弱版命題的具體形式為，集中啟封權與系統範式退化呈現高度正相關，且至少在 Aadhaar India、China real-name、Worldcoin、South Korea 2007-2012 實名制、若干生物特徵 ID 系統等獨立案例中可追蹤明確的因果機制。在分散持鑰系統的對照下，含 Tor Directory Authorities 的 m-of-9 共識、ICANN Root KSK 的 m-of-7 儀式、若干 threshold accountable signatures 部署，集中持鑰系統的退化速率顯著較高。此處主用此弱版命題；強版命題（範式退化的因果必然性）作為延伸假說，其驗證需要更多 QCA（Qualitative Comparative Analysis）跨案例研究。Bennett & Checkel (2015) 的 process tracing 標準對此一弱／強版區分提供了方法論基礎，要求每個 causal step 具可觀察 implication 且替代解釋可被排除<sup>31</sup>。

Aadhaar 案例的 process tracing 提供了七步因果鏈的完整觀察。在 T0（2009）UIDAI 設計階段，啟封權即被集中於單一行政機構。T1（2012-2016）Aadhaar Act § 33 的緊急啟封權範圍持續擴張。T2（2017）135 million 筆資料外洩事件被揭露，The Tribune 報導指出以 Rs.500 在十分鐘內可取得任意 Aadhaar 詳情<sup>32</sup>。T3（2017）Justice K.S. Puttaswamy v. Union of India (2017) 10 SCC 1 確認隱私為基本權利。T4（2018-2019）§ 33(2) 修正後實質執法仍延續。T5（2023 起）Pegasus 對記者的使用與 § 33 enforcement 的實證紀錄持續累積<sup>33</sup>。Khera (2019) 主編的 *Dissent on Aadhaar* 與 Drèze, Khalid, Khera & Somanchi (2017) 對 Jharkhand 食物安全的實證研究，記錄了排除性損害（exclusion harms）的規模與機制，包括以指紋失敗為由拒絕配給、以 Aadhaar 連結失敗為由削減社會保障給付等<sup>34</sup>。

需區分 process tracing 中的兩類推論。S0 至 S2 階段，亦即啟封權集中、機構獲得不可審計的去匿名化能力、結構性必然事件，屬於 *機制必然*。S2 至 S4 階段，亦即資料外洩、政治化使用、使用者感知假名性塌縮，屬於 *機率性事件*，其發生取決於外部觸發條件。Bennett & Checkel (2015) 對 process tracing 中「結構性必然」與「機率性傳遞」之分層處理，是這個區分的方法論依據<sup>35</sup>。第五節的因果主張僅及於弱版，並不對「集中啟封必然導致退化」做強因果斷言。Aadhaar 案例的價值在於，其七步演化中至少前三步具備機制必然性，後續四步在五個獨立案例中具備一致的方向性，因此可作為弱版命題的中度強度支持。

中國實名制案例提供了第二條因果鏈。Cybersecurity Law 2017 與 PIPL 2021 共同建構了系統性的前置實名識別架構。Roberts (2018) 的 *Censored* 對寒蟬效應的測量、Fu, Chan & Chau (2013) 對微博實名政策的分析，記錄了使用者行為均衡的偏移<sup>36</sup>。需指出，Fu et al. 的具體效應量數字應引用為「has been associated with」而非「caused」，方法論上與隨機對照試驗存在距離；中國案例因此宜被視為機制觀察與行為偏移的相關性證據，而非嚴格因果驗證。

南韓案例則提供了反向修正。2007-2012 年間南韓對五十萬以上日活之網站實施實名留言制；Korea Constitutional Court 2010Hun-Ma252 (2012) 判決認定該制度違憲<sup>37</sup>。此案的重要性在於兩點。第一，實名留言制度被經驗研究證實未顯著降低惡意言論，卻顯著抑制公共討論的活躍度。第二，其違憲理由直接對應主論證的方向，亦即前置識別未能達成宣稱的問責功效，反而擾動了結社自由的核心。南韓案例對主論點具有直接的規範性與實證性雙重支撐。

Worldcoin 案例為密碼學構造設計與政治經濟後果之間張力的當代示例。其 centralized opening 結構引發 AEPD 在 2024 年的預防性措施，Buterin (2023) 對 biometric proof of personhood 的分析提出了多項治理風險，包含中央化生物特徵收集、跨境部署的法域衝突、Orb 製造與部署的單點集中<sup>38</sup>。在政治經濟層，Worldcoin 呈現與 DAA 政治經濟悖論同向的模式；在因果機制層，其長期演化仍待持續觀察，但短期內已呈現退化路徑的早期徵兆。兩個面向並不互斥。

對照組的 Tor Directory Authorities m-of-9 共識與 ICANN Root KSK 在 m-of-7 儀式下的長期運作，提供了分散持鑰系統未發生同等退化的對照證據<sup>39</sup>。兩個系統的鑰匙保管者組織紀錄較長，且皆建立了公開可審計的儀式與輪替機制；雖難以視為嚴格的反事實對照組，仍提供有意義的對比觀察。Estonia X-Road 是邊界案例，其究竟為密碼學上的分散持鑰，或僅為組織分散，仍待技術文件直讀確認<sup>40</sup>。

責任分散悖論是反論者的核心質疑，亦即當啟封權分散到多方，是否反而導致無人負責。此一質疑在工程層已由 Boneh & Komlo (CRYPTO 2022) 的 TAPS 解決，其構造保證每個簽署者的參與留下密碼學可稽核紀錄，啟封事件可被個別追溯到每位共同簽署者<sup>41</sup>。在政治哲學層，責任分散悖論仍須細緻論證。m-of-n 結構要求每位持鑰者承擔個別的政治責任，並使其決策過程可被公眾質問，因此具備分配責任而非規避責任的設計意圖。這個論證的工程基礎在 TAPS 已具備，其政治經濟兌現則仰賴持鑰者組織學的進一步累積，包含獨立性審查、定期輪替、公開行使理由的紀錄機制。

## 六、邊界倒戈：狹窄邊界、嚴格判準、程序性防火牆

主論點需要面對三類預期的最強反論。第一是反洗錢與 know-your-customer（AML/KYC）對犯罪資金管制的需要，第二是選舉舞弊防治，第三是跨境制裁與不可逆大規模傷害的場景。本節依次檢視，並提出一項頗具反直覺意涵的觀察，亦即當這些反論被嚴格檢驗，多數倒戈成為主論點的支持證據。本節因此將「邊界場域」與「擴張濫用場域」分開處理，前者為主論點承認的有限例外，後者則由六項程序性防火牆遏止。

**AML/KYC 倒戈**。Pol (2020) 的系統性盤點指出，全球反洗錢制度對犯罪資金的影響不到 0.1%，合規成本超過追回資金一百倍以上，主要負擔由弱勢群體與非 banked 人口承擔<sup>42</sup>。Halliday, Levi & Reuter (2024) 在 *UC Irvine Journal of International, Transnational, and Comparative Law* 4(1) 以跨國法律秩序視角提供了相同方向的結論，並以 IMF 的內部評估為例指出「即使 IMF 也承認難以表述清晰目標」<sup>43</sup>。該文同時指出，AML 跨國法律秩序在規則制訂的速度遠超過效益測量，這項落差正對應於主論點所指認的「啟封門檻分散加上可審計」設計缺位。Naylor (2002) 與 Levi (2020) 對犯罪資金黑市的長期研究進一步支持此一判斷，犯罪資金的真實流向多透過非銀行通道、現金經濟、跨境貿易發票虛開等路徑<sup>44</sup>。換言之，KYC 制度作為前置識別機制，未能達成其宣稱的犯罪預防功效，卻施加了顯著的合規成本與隱私損失。制度若改採屬性證明加上條件性事後啟封的設計，反洗錢的有效性未必下降，而隱私與包容性可顯著提升。

此處需指出 Pol 對「< 0.1%」的具體數字在學界仍有討論，其方法論與測量範圍存在爭議；以 Pol (2020) 為主要來源，並以 Halliday-Levi-Reuter (2024) 與 Levi (2020) 作為補強。即使將 Pol 的數字放寬至 1%，AML/KYC 的成本效益比仍呈現顯著不對稱，主論點的方向性結論不受影響。

**選舉舞弊倒戈**。Levitt (2007) 在 Brennan Center 的盤點中指出，美國在約十億張選票中只能找到三十一件可信的冒充投票案例，比率約為 0.0003 至 0.0025%<sup>45</sup>。Hasen (2012) 的 *The Voting Wars* 對長期數據的整理得出相同方向的結論<sup>46</sup>。Hajnal, Lajevardi & Nielson (2017) 進一步顯示前置 voter ID 對少數族群投票權有可觀察的衝擊<sup>47</sup>。需附上方法論脈絡，Hajnal et al. 的測量方法受到 Grimmer, Hersh, Meredith, Mummolo & Nall (2018) 在 *Journal of Politics* 80(3) "Obstacles to Estimating Voter ID Laws' Effect on Turnout" 的方法論反駁，其因果識別策略仍有討論空間；但即便保守解釋其結果，前置 voter ID 對少數族群的負外部性仍可觀察<sup>48</sup>。Crawford v. Marion County Election Bd., 553 U.S. 181 (2008)、Shelby County v. Holder, 570 U.S. 529 (2013)、Brnovich v. Democratic National Committee, 594 U.S. ___ (2021) 一線判例則顯示美國司法在此議題上的擺盪；Issacharoff & Pildes (1998) 與 Pildes (2004) 提供了規範性框架<sup>49</sup>。前置實名識別在選舉場域被證實處理一個近乎不存在的問題，卻施加可觀察的投票權壓抑，此一倒戈直接增強了主論點。

**邊界場域的狹窄定義**。當「不可逆、大規模、即時擴散」三重判準被嚴格應用，真正落入邊界的場域為核擴散、武器擴散、即時生物威脅、關鍵基礎設施的角色身分識別（操作員、處置者）。在此類場域中，前置識別具有因應不可逆性的補保險價值。然而，即便在這些場域，識別應針對特定可識別主體（持有特定權限的操作員、特定危險物質的處置者），全民實名則不在合理範圍。Drezner (2003) 與 Early (2015) 對精準制裁機制的研究，以及 Gostin & Wiley (2016) 對公共衛生緊急狀態下強制措施合憲性的分析，提供了狹窄邊界場域的設計原則，包括最小必要識別、定期重新評估、緊急狀態結束後的識別資料銷毀義務<sup>50</sup>。

**程序性防火牆**。三重判準有被擴張濫用的歷史記錄。USA PATRIOT Act 從原訂四年 sunset 條款被延伸為十九年延期，其中十六項條款中的十四項被永久化；COVID-19 緊急權力在多個司法管轄區呈現 stickiness；AUMF（Authorization for Use of Military Force）的範圍從原始授權持續擴張<sup>51</sup>。這些 one-way ratchet 歷史證據要求邊界條件本身具備程序性防火牆。此處參照 FATF Recommendations 10 與 16、NIS2 Directive 2022/2555、CISA 2015、NIST CSF 2.0 等現行制度文本，提取出六項可操作的程序性防火牆規則。第一，攻擊向量必須具體可指認；第二，成本效益測試必須對稱進行（將隱私損失與識別效益同時量化）；第三，需通過密碼學替代品測試（屬性證明、ZK 出示等是否能達成同等管制目的）；第四，強制 sunset 條款且需明確 review trigger；第五，多方獨立機關啟封權持有；第六，啟封紀錄與行使理由的事後公開審查機制<sup>52</sup>。

六項防火牆共同的設計目的，在於將邊界條件從「可被擴張濫用的彈性條款」收束為「具明確操作邊界的有限授權」。Cain (2014) 對美國政治改革的長期觀察提供了制度設計上的參考<sup>53</sup>。將邊界條件納入論證後，主論點的內容其實更加清晰。可問責性不以實名為前提這個命題，並未否認任何身分識別的必要性，重點在於要求識別的負擔與收益在絕大多數公民行動場景中對稱衡量；在三重判準成立的狹窄場域，識別仍可正當化，但其實施方式仍需符合多方持權與可審計的設計原則。

## 七、合成命題與開放問題

橫跨前述五節的論證指向一個統合命題。accountable pseudonymity 不是密碼學成就，是政治經濟成就；密碼學是必要不充分條件。換言之，制度層的啟封權力結構決定了密碼學能否兌現其政治承諾，反向則否。第二節提供規範性基礎，亦即 accountability 的結果性本質與 pseudonymous 對比 real-name identification 的概念區分。第三節提供工程可行性，亦即 L1 至 L4 的成熟度分層與 DAA 政治經濟悖論。第四節提供制度模板，亦即五個制度家族的合法性論證資源與三個非對稱性的限制。第五節提供反向案例，亦即 Aadhaar process tracing 等五個獨立案例的範式退化證據與 TAPS 對責任分散悖論的工程層解。第六節提供邊界倒戈分析，亦即 AML/KYC、選舉舞弊等預期反論在嚴格檢驗下對主論點的反向強化。

在主張的邊界上，本論文保留三項限制條件。第一，個體層與制度層的不對稱性必須嚴格遵守，制度層級的權力者匿名仍受共和主義 contestability 的反對。第二，單一主權內與跨主權的處理仍待制度創新，本論文限縮於單一法域場景，跨法域救濟空白由後續論文處理。第三，可逆損害與不可逆大規模傷害的場景區分必須以六項程序性防火牆為操作邊界，避免邊界條件被擴張濫用為前置實名的正當化理由。

剩餘的開放問題涵蓋若干類別。在政治哲學層面，Pettit 對個體與制度識別不對稱性的明文表述需透過進一步詮釋確認，Habermas 在 *Faktizität und Geltung* §8.3 對 anonymous public sphere 的具體立場需直讀德文原文。在密碼學工程層面，DAA 政治經濟悖論的因果機制需系統性驗證，threshold opening 治理在跨司法管轄場景的長期可用性需實證部署累積。在因果機制層面，中等政體（hybrid regime）最脆弱的假說需更多 QCA 案例驗證，Estonia X-Road 是否為密碼學上的分散持鑰需進一步技術文件直讀以確認。在制度層面，FATF Recommendation 16 對 ZK 替代方案的最新態度、EUDI ARF 第三輪 implementing regulations 對 unlinkability 條款的最終決定，皆為後續研究需要追蹤的政策節點。

研究結論為條件性命題。可問責性不以實名為前提這個主張，在自由主義 due process 與共和主義 contestability 兩個主流規範性框架下，於「公民參與行為」一側具有規範基礎；在密碼學工程上具有原語族的可行性支撐；在制度設計上具有合法性模板資源；在因果機制上具有反向案例的驗證；在邊界場景中具有反向強化的證據。其成立要求啟封機制的密碼學可承擔性與啟封權力的憲政性分散同時滿足，缺一不可。當代數位身分制度爭議的核心，由此可被重新定位，應從「實名與匿名」的二元對立轉向「啟封權力的政治經濟設計品質」。一個能在憲政上承擔問責、又能在密碼學上保護隱私的數位身分系統，其關卡座落於 L4 治理層的多方持權設計，而其成敗與否，將決定下一代公民身分基礎設施是走向監控架構，或走向具備憲政承諾的可問責假名制度。

## 參考資料

1. Schedler, A. (1999). "Conceptualizing Accountability." In A. Schedler, L. Diamond & M. Plattner (Eds.), *The Self-Restraining State: Power and Accountability in New Democracies*. Lynne Rienner; Bovens, M. (2007). "Analysing and Assessing Accountability: A Conceptual Framework." *European Law Journal*, 13(4), 447–468. 來源等級 A。
2. Mulgan, R. (2000). "'Accountability': An Ever-Expanding Concept?" *Public Administration*, 78(3), 555–573. 來源等級 A。
3. *Talley v. California*, 362 U.S. 60 (1960); *NAACP v. Alabama ex rel. Patterson*, 357 U.S. 449 (1958); *McIntyre v. Ohio Elections Comm'n*, 514 U.S. 334 (1995). 第一手判決，來源等級 A。
4. *Doe v. Cahill*, 884 A.2d 451 (Del. 2005); *Dendrite Int'l v. Doe No. 3*, 775 A.2d 756 (N.J. Super. App. Div. 2001). 第一手判決，來源等級 A。
5. *Doe v. 2theMart.com*, 140 F. Supp. 2d 1088 (W.D. Wash. 2001). 第一手判決，來源等級 A。
6. Pettit, P. (1997). *Republicanism: A Theory of Freedom and Government*. Oxford University Press. 來源等級 A。
7. Pettit, P. (2012). *On the People's Terms: A Republican Theory and Model of Democracy*. Cambridge University Press, ch. 6. 來源等級 A。
8. *Buckley v. Valeo*, 424 U.S. 1 (1976); *Doe v. Reed*, 561 U.S. 186 (2010). 第一手判決，來源等級 A。
9. Etzioni, A. (2015). *Privacy in a Cyber Age: Policy and Practice*. Palgrave Macmillan. 來源等級 B。
10. Sagar, R. (2013). *Secrets and Leaks: The Dilemma of State Secrecy*. Princeton University Press. 來源等級 A。
11. Chaum, D. (1985). "Security without Identification: Transaction Systems to Make Big Brother Obsolete." *Communications of the ACM*, 28(10), 1030–1044; Chaum, D., & van Heyst, E. (1991). "Group Signatures." *EUROCRYPT 1991*. Springer. 來源等級 A。
12. Camenisch, J., & Lysyanskaya, A. (2001). "An Efficient System for Non-transferable Anonymous Credentials with Optional Anonymity Revocation." *EUROCRYPT 2001*. Springer; Camenisch, J., & Lysyanskaya, A. (2002). "A Signature Scheme with Efficient Protocols." *SCN 2002*. Springer. 來源等級 A。
13. Bellare, M., Micciancio, D., & Warinschi, B. (2003). "Foundations of Group Signatures: Formal Definitions, Simplified Requirements, and a Construction." *EUROCRYPT 2003*. Springer; Bellare, M., Shi, H., & Zhang, C. (2005). "Foundations of Group Signatures: The Case of Dynamic Groups." *CT-RSA 2005*. Springer; Boneh, D., Boyen, X., & Shacham, H. (2004). "Short Group Signatures." *CRYPTO 2004*. Springer. 來源等級 A。
14. Micali, S., Ohta, K., & Reyzin, L. (2001). "Accountable-Subgroup Multisignatures." *CCS 2001*. ACM; Xu, S., & Yung, M. (2004). "Accountable Ring Signatures: A Smart Card Approach." *CARDIS 2004*. Springer; Bootle, J., Cerulli, A., Chaidos, P., Ghadafi, E., & Groth, J. (2015). "Foundations of Fully Dynamic Group Signatures." *ESORICS 2015*. Springer. 來源等級 A。
15. Camenisch, J., Drijvers, M., Lehmann, A., Lyubashevsky, V., & Towa, P. (2020). "Short Threshold Dynamic Group Signatures." *SCN 2020*. Springer. 來源等級 A。
16. W3C Verifiable Credentials Data Integrity BBS Cryptosuite v1.0 (2024); IETF RFC 9901 (SD-JWT, 2025-11); IETF CFRG draft-irtf-cfrg-bbs-signatures. 來源等級 A。
17. ISO 18013-5 Mobile Driving Licence Part 1 (2021) 與 Part 2 DIS; W3C Bitstring Status List v1.0 (2025 Recommendation). 來源等級 A。
18. EU EUDI Wallet Architecture Reference Framework v1.4 (2024-2025). 來源等級 A。
19. Chase, M., Perrin, T., & Zaverucha, G. (2020). "The Signal Private Group System and Anonymous Credentials Supporting Efficient Verifiable Encryption." *CCS 2020*. ACM; IETF RFC 9577 (Privacy Pass). 來源等級 A。
20. Brickell, E., Camenisch, J., & Chen, L. (2004). "Direct Anonymous Attestation." *CCS 2004*. ACM; ISO/IEC 11889 series (TPM); ISO/IEC 20008-2. 來源等級 A。
21. Boneh, D., & Komlo, C. (2022). "Threshold Signatures with Private Accountability." *CRYPTO 2022*. IACR ePrint 2022/1636. https://eprint.iacr.org/2022/1636. 來源等級 A。
22. 同上，第 3-4 節對 accountability property 的形式定義。來源等級 A。
23. Doerner, J., Kondi, Y., Lee, E., Shelat, A., & Tyner, P. (2023). "Threshold BBS+ Signatures for Distributed Anonymous Credential Issuance." *IEEE S&P 2023*. 來源等級 A。
24. Federal Rules of Criminal Procedure Rule 6(e); 18 U.S.C. § 3521-3528 (Witness Security); *Buckley v. Valeo*, 424 U.S. 1 (1976); *NAACP v. Alabama ex rel. Patterson*, 357 U.S. 449 (1958); *McIntyre v. Ohio Elections Comm'n*, 514 U.S. 334 (1995). 來源等級 A。
25. Federal Judicial Center, *Sealed Cases in Federal Courts* (2009); Tribe, L. H. (2000). *American Constitutional Law* (3rd ed., Vol. 1). Foundation Press. 來源等級 A。
26. UK Contempt of Court Act 1981; BVerfGE 120, 274 (2008) Online-Durchsuchung; Loi du 4 janvier 2010 relative à la protection du secret des sources des journalistes; 台灣司法院大法官釋字第 384、396、418、436、709、762、805 號。來源等級 A。
27. EU Whistleblower Directive 2019/1937; Dodd-Frank § 922; US Whistleblower Protection Act 1989. 來源等級 A。
28. *Microsoft Corp. v. United States*, 829 F.3d 197 (2d Cir. 2016)（vacated as moot, 138 S. Ct. 1186 (2018)）; CLOUD Act, Pub. L. 115-141, Div. V (2018); Federal Rules of Criminal Procedure Rule 6(e); 18 U.S.C. § 3521-3528. 來源等級 A。
29. Pozen, D. E. (2018). "Transparency's Ideological Drift." *Yale Law Journal*, 128, 100–165. 來源等級 A。
30. Reality Winner case 之 NYT 主流報導；EFF "Twitter Lawsuit Against Government Censorship Demands" 與 amicus briefs；CLOUD Act 跨境衝突相關文獻。來源等級 B/C。
31. Bennett, A., & Checkel, J. T. (Eds.). (2015). *Process Tracing: From Metaphor to Analytic Tool*. Cambridge University Press, ch. 1. 來源等級 A。
32. The Tribune (2017). "Rs 500, 10 minutes, and you have access to billion Aadhaar details." 2017-01-04 報導；Centre for Internet & Society India 135M leak report. 來源等級 B。
33. *Justice K.S. Puttaswamy v. Union of India*, (2017) 10 SCC 1; Amnesty International (2023). "India: Damning new forensic investigation reveals repeated use of Pegasus spyware." 來源等級 A/B。
34. Khera, R. (Ed.). (2019). *Dissent on Aadhaar: Big Data Meets Big Brother*. Orient BlackSwan; Drèze, J., Khalid, N., Khera, R., & Somanchi, A. (2017). "Aadhaar and Food Security in Jharkhand: Pain Without Gain." *Economic and Political Weekly*, 52(50). 來源等級 A。
35. Bennett, A., & Checkel, J. T. (2015). *Process Tracing: From Metaphor to Analytic Tool*. Cambridge University Press, ch. 1（特別針對 deterministic vs. probabilistic causal step 的分層處理）. 來源等級 A。
36. 中華人民共和國《網絡安全法》(2017)；《個人信息保護法》(2021)；DigiChina Cybersecurity Law translation; Roberts, M. E. (2018). *Censored: Distraction and Diversion Inside China's Great Firewall*. Princeton University Press; Fu, K. W., Chan, C. H., & Chau, M. (2013). "Assessing Censorship on Microblogs in China: Discriminatory Keyword Analysis and the Real-Name Registration Policy." *IEEE Internet Computing*, 17(3), 42–50. 來源等級 A/B。
37. Korean Constitutional Court 2010Hun-Ma252 (2012); Open Net Korea English translation. 來源等級 A。
38. Buterin, V. (2023). "What do I think about biometric proof of personhood?" Vitalik blog. https://vitalik.eth.limo/general/2023/07/24/biometric.html; AEPD（西班牙資料保護局）Precautionary Measure on Worldcoin (2024). 來源等級 B。
39. ICANN Root KSK Ceremonies 公開紀錄；Tor Consensus Format Specification 與 Directory Authorities 文件。來源等級 A。
40. Estonia X-Road 技術文件；其密碼學分散性質尚需技術文件直讀確認。來源等級 C。
41. Boneh & Komlo (2022) 同註 21，§ 3-4 對 accountable threshold 的構造設計。來源等級 A。
42. Pol, R. F. (2020). "Anti-money laundering: The world's least effective policy experiment? Together, we can fix it." *Policy Design and Practice*, 3(1), 73–94. 來源等級 A。
43. Halliday, T. C., Levi, M., & Reuter, P. (2024). "Anti-Money Laundering: An Inquiry into a Disciplinary Transnational Legal Order." *UC Irvine Journal of International, Transnational, and Comparative Law*, 4(1)（SSRN / eScholarship 全文公開）. 來源等級 A。
44. Naylor, R. T. (2002). *Wages of Crime: Black Markets, Illegal Finance, and the Underworld Economy*. Cornell University Press; Levi, M. (2020). "Evaluating the Control of Money Laundering and Its Underlying Offences: the Search for Meaningful Data." *Asian Journal of Criminology*, 15(4), 301–320 (Springer). 來源等級 A。
45. Levitt, J. (2007). "The Truth About Voter Fraud." Brennan Center for Justice. 來源等級 A。
46. Hasen, R. L. (2012). *The Voting Wars: From Florida 2000 to the Next Election Meltdown*. Yale University Press. 來源等級 A。
47. Hajnal, Z., Lajevardi, N., & Nielson, L. (2017). "Voter Identification Laws and the Suppression of Minority Votes." *Journal of Politics*, 79(2), 363–379. 來源等級 A。
48. Grimmer, J., Hersh, E., Meredith, M., Mummolo, J., & Nall, C. (2018). "Obstacles to Estimating Voter ID Laws' Effect on Turnout." *Journal of Politics*, 80(3), 1045–1051. 來源等級 A。
49. *Crawford v. Marion County Election Bd.*, 553 U.S. 181 (2008); *Shelby County v. Holder*, 570 U.S. 529 (2013); *Brnovich v. Democratic National Committee*, 594 U.S. ___ (2021); Issacharoff, S., & Pildes, R. H. (1998). "Politics as Markets: Partisan Lockups of the Democratic Process." *Stanford Law Review*, 50(3), 643–717; Pildes, R. H. (2004). "The Constitutionalization of Democratic Politics." *Harvard Law Review*, 118, 28. 來源等級 A。
50. Drezner, D. W. (2003). "The Hidden Hand of Economic Coercion." *International Organization*, 57(3), 643–659; Early, B. R. (2015). *Busted Sanctions*. Stanford University Press; Gostin, L. O., & Wiley, L. F. (2016). *Public Health Law: Power, Duty, Restraint* (3rd ed.). UC Press. 來源等級 A。
51. USA PATRIOT Act 條款 sunset 與延期紀錄；Congressional Research Service R45718 (USA FREEDOM Reauthorization) 與 RL33625 (USA PATRIOT Act Improvement)；AUMF 範圍擴張之 CRS 報告；COVID-19 緊急權力跨國比較相關文獻。來源等級 A/B。
52. FATF Recommendations 10 與 16; EU NIS2 Directive 2022/2555; Cybersecurity Information Sharing Act 2015 (CISA); NIST Cybersecurity Framework 2.0; USA PATRIOT Act § 326 (Customer Identification Program); NIST SP 800-63-4 (Digital Identity Guidelines). 來源等級 A。
53. Cain, B. E. (2014). *Democracy More or Less: America's Political Reform Quandary*. Cambridge University Press. 來源等級 A。
