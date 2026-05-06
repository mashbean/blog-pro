---
title: "為什麼用護照證明「不是國家公民」這件事，會在威權國家失效"
description: "把 Sovereignty-Root Paradox（SRP）形式化為合取必要條件命題：當公民實驗的對抗對象包含發行國，國家發行的護照根結構上不能單獨支撐該對抗。SRP 與 article 03 H1' 三道牆、article 04 T 三件式、article 05 IT' 不可能三角、article 06 CB-Justice D1*∧D2* 同樣是合取結構但用於不同層級。本文盤點 ICAO eMRTD PKI 六項威脅（D1-D4b）+ 8 個跨地域案例（俄、伊、白俄、土、港、北韓、敘利亞、厄立特里亞）的 4+2 武器化形式（W1-W6），並提出 Multi-Rooted Civic Proof 設計骨架（R1 護照根 + R2 社群根 + R3 機構根 + R4 自托管根 + D1/D2/D3 降級準則），配 5 條邊界條件（B1-B5）與 UNHCR Iris in Jordan 案例。護照根仍是覆蓋率最廣的根（~ 20 億）；multi-rooted 是補強而非替代。"
pubDate: 2026-05-05
tags: ["civic-proof", "passport-rooted", "sovereignty-root-paradox", "ICAO", "zkPassport", "multi-rooted-civic-proof", "statelessness", "exile-community", "doctoral-research", "Ch5-civic-experiment"]
category: "公民證明主權前提"
aiModel: "Claude Opus 4.7"
aiPrompt: "ICAO eMRTD（電子護照晶片）的 PKI 治理結構為何？發證國能否單方面吊銷或拒發護照？吊銷後 zkPassport 系列方案會發生什麼？在威權與流亡情境下，passport-rooted civic proof 的可靠性有多脆弱？是否真的能保護公民免於原國家追蹤？Pegasus / Apple Find My / 跨境執法協作對 passport-rooted 假名是否構成根擾動？是否存在非主權的補強根（multi-rooted civic proof）能緩解這個悖論？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-05-passport-rooted-paradox"
aiGeneratedDate: 2026-05-05
humanReviewed: false
lang: "zh-TW"
---

# 為什麼用護照證明「不是國家公民」這件事，會在威權國家失效

## 一、引言：護照根公民實驗的內建悖論

過去五年，密碼學社群為了讓公民在不暴露真實身分的條件下證明「我是真人、我是這國公民、我滿 18 歲」，發展出一系列以 ePassport（電子護照）NFC 晶片為信任根的 zero-knowledge 證明工具，包含 zkPassport、Anon Aadhaar、Self.xyz、Rarimo Freedom Tool、Self Protocol、Privado ID 等<sup>1</sup>。這條技術路線有個吸引力很強的承諾，亦即用 ICAO Doc 9303 標準下的電子護照 PKI 當信任根，全球已有逾 20 億人持有 ePassport<sup>2</sup>，幾乎不需要新建身分基礎設施，就能讓 civic proof（公民證明）取得「全球可驗證」的覆蓋率。

但這條路線的政治哲學前提，與其工程設計之間，有一個被 ICAO 規範與 zkPassport 學術文獻同時迴避的內建斷裂。當公民實驗的對抗對象包含發行國本身（例如俄羅斯反戰運動者、伊朗女權運動者、白俄反對派、土耳其 2016 政變後遭撤銷國籍的 234,000 名公民、香港 BNO 持有者、北韓脫北者、敘利亞海外社群、厄立特里亞流亡者），「用國家發行的護照證明你不要這個國家」會在結構上不可信。國家既是信任根的發行者，也是 civic proof 想要規避的對手。

這個結構斷裂可以被精確命名。本文稱之為 **Sovereignty-Root Paradox（SRP，主權根悖論）**：當信任根 R 的發行制度叢集 I_R 與 R 受保護的目標群體 T_R 處於對抗關係，且 P(I_R 對 T_R 採取敵對行動 | 條件 c, 政治計畫 P) 不可忽略，則 R 不能單獨擔當 P 的信任根<sup>3</sup>。SRP 在性質上是一條規範性 + 經驗性合成命題，並非密碼學定理；其經驗根據是過去十五年 ICAO PKI 治理鏈內的六項可被識別威脅（D1 發證權 / D2a DS 撤銷 / D2b CSCA 撤銷 / D3 拒簽 DS / D4a 下游清單剔除 / D4b 上游 PKD 撤回），以及威權國家對政治不便人口的 4 主形式 + 2 邊界形式護照武器化系統性結構（W1 不續發 / W2 單方吊銷 / W3 降級身分 / W4 跨境追蹤 / W5 出境管制 / W6 海外勒索）。

本文章節安排如下。第二章解析 ICAO eMRTD PKI 的三層憑證架構與六項治理威脅，並區分 ePassport 三代（BAC / EAC v1 / PACE+EAC v2）的差異，此區分對於「zkPassport 的安全宣稱具體覆蓋哪些護照」至關重要。第三章透過俄羅斯、伊朗、白俄、土耳其、香港等 8 個案例，驗證護照武器化的系統性結構與 SRP 的觸發機率。第四章在 Schmitt → Agamben → Sassen 的主權理論譜系上，把 SRP 形式化為一條合取必要條件命題，並與 article 03 H1' 三道牆、article 04 T 三件式、article 05 IT' 不可能三角、article 06 CB-Justice D1*∧D2* 同構但用於不同層級的論證對照。第五章提出 **Multi-Rooted Civic Proof（MR-CivicProof）** 設計骨架，包含 R1 護照根 + R2 社群根 + R3 機構根 + R4 自托管根，配合 D1 失效降級 + D2 密碼學可組合性 + D3 透明選擇權三項準則。第六章透過 UNHCR Iris in Jordan 案例與 5 條邊界條件（B1 覆蓋率 trade-off / B2 無國籍者 / B3 NGO 政治經濟 / B4 機構根雙重 mandate / B5 自托管根弱勢者門檻）說明 multi-rooted 的限制。第七章給出政策建議與工程接合。第八章為結論。

本文核心立場：護照根有用，但不是唯一根；multi-rooted civic proof 是補強而非替代，而 5 條邊界條件必須同時處理，缺一就會把成本下放給最不該承擔的人口。

---

## 二、ICAO eMRTD PKI 的三層架構與六項治理威脅

### 2.1 三層憑證架構與兩條治理鏈

ICAO Doc 9303 第八版（2021）Part 12 規定，每本電子護照晶片的安全錨在一個三層 PKI：**Country Signing Certificate Authority（CSCA）→ Document Signer（DS）→ Document Security Object（SOD）**<sup>4</sup>。CSCA 由發證國的指定機構自簽，週期通常 3–5 年；DS 是 CSCA 簽發的批次憑證，週期約 3–6 個月，每本護照晶片內含一份 DS 簽發的 SOD，SOD 雜湊覆蓋晶片內的所有資料群組（DG1 個資 / DG2 人臉照片 / DG3 指紋 / DG14 EAC 公鑰等）<sup>5</sup>。

驗證國端要驗證一本外國 ePassport，需要拿到該國的 CSCA 公鑰。ICAO 規定了兩條取得路徑：**ICAO PKD（Public Key Directory）**作為中央目錄，發證國上傳 CSCA / DS 公鑰、其他國家下載；以及**雙邊 Master List 交換**，由特定國家（典型如德國 BSI、美國 CBP、新加坡 ICA）維護自己的「可信外國 CSCA 清單」並對外發布<sup>6</sup>。截至 2024 年，ICAO PKD 約有 91 國上傳、約 130 國下載，但全球簽發 ePassport 的國家約 150 國<sup>7</sup>。意即即便不考慮政治拒簽，PKD 的覆蓋率也不是全集。雙邊 Master List 是 ICAO PKD 之外的平行治理鏈，這在威脅模型上是兩條獨立路徑，不能混為一談。

### 2.2 ePassport 三代差異：為什麼 zkPassport 的安全宣稱只覆蓋第二代以後

ICAO eMRTD 的安全機制至少分三代<sup>8</sup>：

**第一代 BAC（Basic Access Control）**：只用 MRZ（機讀區）字串衍生對稱金鑰加密 NFC 通訊。Hoepman（2008）<sup>9</sup>、Witteman & Oostdijk（2008）<sup>10</sup>、Nohl & Krißler（2008）<sup>11</sup> 等學術與會議研究已證明 BAC 可以被 skim+replay 與離線暴力破解；Hancke（2006）<sup>12</sup> 與 Carluccio et al.（2007）<sup>13</sup>《E-Passport: The Global Traceability Or How To Feel Like a UPS Package》進一步示範了距離攻擊與全球可追蹤性。許多 2010 年代以前簽發的護照仍只有 BAC。

**第二代 EAC v1（Extended Access Control v1）**：BSI TR-03110 規範下加入晶片認證（Chip Authentication）與終端認證（Terminal Authentication），讓晶片本身證明持有 DG14 私鑰、且只對授權的 inspection system 釋出 DG3 指紋等敏感資料群組<sup>14</sup>。

**第三代 PACE+EAC v2（Password Authenticated Connection Establishment）**：以 PACE 取代 BAC，使用密碼認證金鑰交換協議（Password-Authenticated Key Exchange），抗離線暴力破解<sup>15</sup>。歐盟自 2014 年起逐步要求新發護照採 PACE。

zkPassport 系列方案的安全宣稱（Andolfo et al. 2024 IACR ePrint 2024/1377）<sup>16</sup> 預設驗證的是第二代以後的晶片簽章鏈；對第一代 BAC 護照，整套 ZK 方案的隱私保證會在 NFC 通訊層就漏掉。把整個 ICAO eMRTD 寫成「一個 PKI」會誤導 multi-rooted 設計；R1 護照根本身在 ePassport 三代之間就不同質。

### 2.3 六項治理威脅（D1 / D2a / D2b / D3 / D4a / D4b）

從 ICAO Doc 9303 Part 12、BSI TR-03110、ENISA ePassport 安全評估、EU LoTL 規範與既有學術安全研究歸納，passport-rooted civic proof 在 PKI 治理鏈上至少面對六項可被識別的威脅<sup>17</sup>：

**D1 — 發證權**：發證國護照當局拒絕受理、拖延、或要求政治條件交換才受理護照申請。對應 SA-2 的 W1（不續發）。這是最常見的形式，影響的是個人；無需任何密碼學動作，只要不發護照即可。

**D2a — DS 撤銷**：發證國 CSCA 對某張 Document Signer 憑證發布 CRL（Certificate Revocation List），透過 ICAO PKD 或雙邊 Master List 路徑通告全球驗證端。這會連坐整個 DS 批次下的所有護照（典型一個 DS 簽發 1,000–10,000 本護照）。重要紅線：**ICAO 規範本身對晶片本體沒有撤銷機制**。所謂「吊銷晶片」事實上是 D2a 與下一輪 Master List 路徑的疊加，並非直接物理撤銷。這在威權國家可被用來「以批次連坐方式作廢一群異議者的護照」。

**D2b — CSCA 撤銷**：發證國對自己的 CSCA 自簽 CRL 並通告全球。這是核武級操作，會讓該國整批 ePassport 在驗證端失效。歷史上罕見直接執行，但 Estonia 2017 ROCA 漏洞事件中愛沙尼亞曾大規模撤銷 ID-card 憑證並重新發行<sup>18</sup>，是技術上可行的範例（ID-card 與 ePassport 是不同系統，但 CSCA 撤銷邏輯類似）。

**D3 — 拒簽 DS**：發證國 personalisation 中心拒絕為個人或群體簽發 SOD。這比 D2a 更精細：不需撤銷既有 DS，只要對特定申請者不簽發新護照。對應 SA-2 的 W1+W2 組合，可被用於「黑名單外加吊銷既有護照」。

**D4a — 下游清單剔除**：任一驗證國從本地 trust list 移除某外國 CSCA。例如英國 FCDO 2021 起拒絕承認中國對香港 BNO 持有者新發的某類旅行證明<sup>19</sup>，本質是 D4a 的政治版本（操作主體在驗證國端，動作是不再承認該文件）。對應 SA-2 的 W3（降級身分）。

**D4b — 上游 PKD 撤回**：發證國從 ICAO PKD 撤銷自己上傳的 DS 或 CSCA 公鑰。這會讓全球依賴 PKD（而非雙邊 Master List）的驗證端對該國護照失去驗證能力。對應 SA-2 的 W4（跨境追蹤）部分，可被用於「集體性切斷某類流亡群體的護照可驗證性」。

D1–D4b 六項威脅構成一個合取性結構：在威權國家對流亡公民身上，單一威脅可能被組合使用（例如 W1+W2+W5：拒發 + 吊銷 + 出境管制）。zkPassport / Anon Aadhaar / Rarimo 等 ZK 包裝方案，在密碼學上能提供 unlinkability，但其信任錨仍是 CSCA 公鑰；六項威脅一觸發，ZK 證明就連帶失效。

### 2.4 EU LoTL 與 ICAO 體系的並行

歐盟 eIDAS 1.0（Regulation (EU) 910/2014）<sup>20</sup> 與 eIDAS 2.0（Regulation (EU) 2024/1183）<sup>21</sup> 建立了與 ICAO PKI 平行的 LoTL（List of Trusted Lists）治理鏈，主要用於 qualified trust services（例如電子簽章、qualified electronic seal）。LoTL 與 ICAO PKD 在 governance 邏輯上同構：發證國上傳 / 驗證端下載 / 中央目錄維護。對 multi-rooted civic proof 的設計含意是：即使在歐盟內部，「signing authority 是國家」這個前提沒有改變；LoTL 是另一條 D1–D4b 的攻擊面。

---

## 三、護照武器化的 8 案例與 4+2 系統性結構

護照武器化（passport weaponization）在 8 案例的歸納上呈現一個橫跨地理區域、政體型態、政治脈絡的系統性結構，並非個別威權國家的偶發行為。以下 8 案例的處理方式採形式分布的對照，並未逐一展開為個案故事；其用途是支撐「W1–W6 是反覆出現的形式」這個經驗主張<sup>22</sup>。

### 3.1 4 主形式 + 2 邊界形式

歸納 8 案例的形式分布：

- **W1 — 不續發**：拒絕受理護照申請或延長使用期限。常見在駐外領事館。
- **W2 — 單方吊銷**：對既有護照發布 CRL、或在護照系統內將其標記為失效。
- **W3 — 降級身分**：原本承認的旅行證件被驗證國端拒絕，或被替換為較弱的旅行文件（例如 Refugee Travel Document、1954 Stateless Travel Document）。
- **W4 — 跨境追蹤**：透過 INTERPOL 紅色通報、Pegasus / Predator 商業間諜軟體、第三國執法協作對流亡公民施壓。
- **W5 — 出境管制**：在發證國境內限制申請人出境，使「拿到護照」與「能離開」脫鉤。
- **W6 — 海外勒索**：要求海外公民支付特殊費用、政治態度聲明、或 Diaspora Tax 才能維持護照效力。

W1–W4 是 4 主形式（每個案例至少觸及一項），W5–W6 是 2 邊界形式（典型於高度封閉與經濟強制型政體）。

### 3.2 8 案例分別處理

**俄羅斯（W1+W2，含 W5）**：2022 年 2 月入侵烏克蘭後，俄羅斯駐外使館對被列入 OVD-Info / Memorial 等獨立人權組織記錄的反戰運動者拒發、拒換護照<sup>23</sup>。2024 年 4 月，俄羅斯國家杜馬通過修正案，將「散布俄軍假信息」列入可以撤銷國籍的法律根據之一<sup>24</sup>。重要區辨：俄羅斯對中產階級流亡者的雙重國籍寬鬆，因此實際武器化壓力最重者是無第二本護照的中下階層流亡者。

**伊朗（W1+W2，含女性專屬層）**：1962 年伊朗護照法第 18 條規定女性出國須監護人（父或夫）書面同意；2022 年 Mahsa Amini 抗爭後，IranWire 記錄至少 12 起公開的記者、運動者護照吊銷案例<sup>25</sup>。Citizen Lab 同時記錄到 Predator 商業間諜軟體針對伊朗流亡記者的攻擊<sup>26</sup>。對伊朗女性流亡者，D1（發證權）與 D2a（DS 撤銷）會因監護人法疊加。

**白俄羅斯（W1+W2，含 W5 男性出境限制）**：2020 年大規模抗爭後，白俄總統 2023 年第 278 號令禁止公民在境外的白俄領館換發護照，要求必須回境內辦理<sup>27</sup>。對流亡反對派，這構成直接的「不回國則無護照」勒索。BYPOL、Viasna 等記錄了大量案例。

**土耳其（W2 大規模）**：2016 年 7 月政變未遂後，緊急狀態命令（KHK）程序下，土耳其政府對被指控與居倫運動有關者撤銷國籍 / 護照，Stockholm Center for Freedom 2018 年統計約 234,000 本護照被撤銷<sup>28</sup>。這是一個不需要逐一審判、以行政命令一次性處理的範例，直接對應 D3（拒簽 DS）的群體性使用。

**香港 BNO（W3）**：英國 FCDO 2021 年因應香港國安法開放 BNO 簽證路徑，中華人民共和國隨即拒絕承認 BNO 為有效身分文件<sup>29</sup>。這對應 D4a（下游清單剔除）的政治版本：技術機制上，中國並未撤銷英國的 CSCA；實際操作是中國的驗證端不再承認 BNO 文件。Hong Kong Watch 2022 年報告記錄了超過 14 萬人在 BNO 簽證計畫下抵英<sup>30</sup>。

**北韓（W5+W3）**：北韓對絕大多數公民系統性不發護照，僅菁英階層可取得；脫北者拿到的是中國邊境取得的「臨時旅行證明書」，在驗證端會被普遍降級<sup>31</sup>。Database Center for North Korean Human Rights 系統性追蹤了脫北者的旅行文件處境。

**敘利亞海外勒索（W6）**：敘利亞海外公民申請更新護照需支付 300–800 美元的特殊費用，並在某些案例中需提交政治態度聲明<sup>32</sup>。Refugees International 2020 年報告與 Syrian Network for Human Rights 2019 年報告記錄了具體案例。敘利亞模式的形式偏向條件交換型勒索；表面上護照仍可取得，但對流亡者的實際成本門檻接近拒發。

**厄立特里亞 2% Diaspora Tax（W6）**：厄立特里亞政府要求海外公民每年繳納收入 2% 作為 Diaspora Tax，否則無法更新護照、辦理土地或繼承等事務<sup>33</sup>。聯合國安理會 Resolution 2023 (2011) 譴責此做法，但未廢除<sup>34</sup>。

### 3.3 救濟文件的數位降級：SA-4 設計準則的經驗根據

當 W1–W6 觸發後，受影響者有時可申請 1951 Refugee Convention 下的 Refugee Travel Document（RTD）或 1954 Convention 下的 Stateless Travel Document。但這些救濟文件在實際 KYC 場景中遭遇高拒絕率：EUAA 2023 年報告指出，RTD 與 STD 在金融、電信、跨境交易的 KYC 拒絕率約 18–43%，相較於發行國有效護照的 2–7%<sup>35</sup>。這個經驗事實是 multi-rooted civic proof 設計準則 D1（policy-driven graceful degradation）的直接根據。救濟文件並非「同類但較差」的根；其實質是「在實際驗證生態中遭系統性折扣」的根。如果不顯式處理降級邏輯，passport-rooted 設計會把無國籍者與流亡者的成本內化為「個人申請文件失敗率」。

### 3.4 因果論證強度的限制

W1–W6 的歸納強度上限是「中強」。8 案例的政治脈絡差異足以反證「所有威權國家都會用同一套手法」（民主憲政與威權結構在 D1–D4b 觸發機率上有質的差異），但同時也足以支撐「passport-rooted civic proof 在威權對流亡情境下面對結構性風險（並非個別風險）」。本文對 SRP 的主張定位於規範性 + 經驗性合成命題層次，其經驗根據已經充分；論證強度上限為「中強」。

---

## 四、SRP 形式化：主權容器邏輯與合取必要條件結構

第二、三章已經提供了 ICAO PKI 治理威脅與護照武器化兩條經驗證據鏈。本章在 Schmitt → Agamben → Sassen 的主權理論譜系上，把這兩條經驗鏈合成為一條規範性命題：**Sovereignty-Root Paradox（SRP）**。

### 4.1 主權容器的三段重構

要說明「為什麼國家發行的護照根在政治對抗其發行國的場景下不可單獨使用」，需要先說明主權的結構是什麼。本文採用三段重構。

**第一段，Schmitt 的決斷理論**：Schmitt 1922 年《政治神學》<sup>36</sup>把主權者定義為「對例外狀態作決斷者」（Souverän ist, wer über den Ausnahmezustand entscheidet），1932 年《政治的概念》<sup>37</sup>進一步把政治的本質定義為「敵 / 友區分」。這個定義的核心訊息在於「主權者保留了在常態法律外行動的權力」（並非主權者具體是誰）。對護照根而言，這意味著 CSCA 簽發、DS 撤銷、PKD 撤回等動作，在規範意義上不只是技術操作；發證國保留著「在例外狀態下重新定義誰是公民、誰可以擁有可驗證護照」的決斷權。土耳其 2016 年政變後 KHK 緊急狀態命令撤銷 234,000 本護照<sup>38</sup>，是這個決斷權的當代範例。

**第二段，Agamben 的例外狀態**：Agamben 1995 年《牲人》<sup>39</sup>與 2003 年《例外狀態》<sup>40</sup>把例外狀態描述為「現代主權的常態構造」，並區分了 zoē（純然生命）與 bios（政治生命）。對 passport-rooted civic proof 設計者而言，重要的洞察是：當公民被剝奪護照（W1 / W2 / W3），他們並未從生物意義上消失，但他們從「可被現代驗證系統識別的政治生命」中被驅逐——這正是 Arendt 1951 年《極權主義的起源》<sup>41</sup>所稱「失去國籍意味著失去擁有權利的權利」（the right to have rights）的當代密碼學版本。

**第三段，Sassen 的主權解組**：Sassen 2006 年《領土、權威、權利》<sup>42</sup>提出「主權正在被解組（disassembled）但未消失」：在跨境治理（ICAO 標準、INTERPOL、Frontex / EU LoTL、SWIFT）中，主權的某些功能被外包到國際組織與技術標準，但核心的「對誰是公民的決斷權」仍保留在民族國家手上。Brown 2010 年《圍牆國家、衰退主權》<sup>43</sup>與 Krasner 1999 年《主權：組織化的偽善》<sup>44</sup>從不同角度補強了這個論點：主權的形式被技術標準分散，但對特定人口的排除權力被保留並可隨時動員。Foucault 1975 年《規訓與懲罰》<sup>45</sup>與 1977-78 年《安全、領土、人口》<sup>46</sup>講解的治理術譜系（governmentality），則為「主權如何透過資料登錄、生物特徵、流動管制等技術手段運作」提供了更微觀的描述。

三段重構的綜合意涵：**主權在制度展演上是一個跨層級的制度叢集**（涵蓋立法、行政命令、司法解釋、外交承認、技術標準、跨境協作；其形態並非單一不變的實體）。為避免把主權寫成單一行動者，本文用 **I_R（institutional cluster issuing R）** 標記這個制度叢集。Macklin 2007<sup>47</sup>、Lavi 2015<sup>48</sup>、Gibney 2013<sup>49</sup>、Shachar 2009<sup>50</sup> 等 denationalization 文獻記錄了 I_R 的當代展演形式：去國籍化（denationalization）作為主權技術，從反恐法律修訂到雙重國籍剝奪。

### 4.2 SRP 修訂版的形式陳述

設 R 為信任根（典型如 ICAO eMRTD CSCA 鏈），I_R 為 R 的發行制度叢集（紅線：嚴禁把主權寫成單一不變實體），T_R 為 R 受保護的目標群體，c 為政治條件（包括但不限於：例外狀態、緊急狀態命令、反恐法律、國家安全例外）。記 P 為 T_R 試圖實施的政治計畫（典型如「公民對抗國家監控的實驗」）。

**SRP 修訂版**：當

> （i）T_R 的政治計畫 P 對 I_R 構成可被識別為敵意的行動，**且**
> （ii）P(I_R 對 T_R 行使敵對行動 | c, P) ≥ θ（θ 是任一非可忽略門檻）

則 R 不能 *單獨* 擔當 P 的信任根。

兩點關鍵紅線：

**紅線一**：條件機率 P(... | c, P) ≥ θ 並非邏輯包含，並非「每個威權國家在每一刻都會敵對」這種強主張。SRP 是一條條件機率命題：給定條件 c（含括威權治理或例外狀態）與政治計畫 P（含括反監控實驗），I_R 對 T_R 行使敵對行動的機率不可忽略。其經驗根據是第三章的 8 案例 + 第二章的六項威脅。

**紅線二**：SRP 在性質上是規範性 + 經驗性合成命題，並非密碼學定理。其規範性面向是「當 I_R 與 T_R 對抗時，R 單獨不可信」這個工程倫理判斷；其經驗性面向是條件機率不可忽略這個歸納事實。兩者合成的命題不應被讀為定理；它的正確讀法是一條 multi-rooted civic proof 設計時必須處理的規範性前提。

**規範推論**：當 P 是「公民對抗國家監控的實驗」、c 含括威權治理或例外狀態、I_R 為國家本體，則 R = 國家發行護照根不能單獨支撐 P。

### 4.3 與其他 article 的同構：合取結構在不同層級的反覆出現

SRP 與本系列 article 03 / 04 / 05 / 06 的核心命題在邏輯結構上同構，但用於不同層級：

- **Article 03 H1' 三道牆**<sup>51</sup>：digital association 的工程結構合取必要條件，要求三道牆同時成立才能達成公民對話品質。SRP 與 H1' 同樣是合取結構，但 H1' 處於工程結構層、SRP 處於規範前提層。
- **Article 04 T 三件式**<sup>52</sup>：pseudonymous participation 的法律制度層條件（Trigger / Authority / Remedy 三件齊備）。T 處理「假名 + 事後問責」的法律制度條件，SRP 處理「I_R 不能等同於 Adversary(T_R)」的主權前提；SRP 在規範意義上是 T 的主權容器擴展。
- **Article 05 IT' 不可能三角**<sup>53</sup>：sybil-resistance 設計在「成本門檻、隱私強度、覆蓋率」三角的不可能性。IT' 處於工程 trade-off 層，SRP 處於規範前提層；兩者層級不同：SRP 處理的是更上游的「該不該把 R 視為單根」這個前提判斷，並非 trade-off 描述。
- **Article 06 CB-Justice D1*∧D2***<sup>54</sup>：civic burden redistribution 的合取必要條件——D1*（成本不下放給弱勢）與 D2*（同意是實質而非形式）必須同時滿足。SRP 與 CB-Justice 同樣是合取結構，但 CB-Justice 處理的是分配正義層、SRP 處理的是主權前提層。

四個層級疊起來：**SRP 處於最上游的主權前提層；其下是 article 04 T 的法律制度層；再下是 article 05 IT' 的工程 trade-off 層、article 06 CB-Justice D1*∧D2* 的分配正義層；最下游是 article 03 H1' 的工程結構層**。SRP 在這個層級結構中的位置是上游規範條件，並非 article 03 / 04 / 05 / 06 的取代；若 SRP 的前提（I_R 不等同於 Adversary(T_R)）不成立，下游四個層級的合取結構在規範上即被穿透。

### 4.4 與 did-vc-public-blockchain article 的接合

本文與 2026-05-01 did-vc-public-blockchain article 的接合點在於 R1 護照根的替代或補強選項。Bhutan NDI 已上 Ethereum 主網作為 DID 公共驗證錨<sup>55</sup>，加泰隆尼亞 2017 公投採用 Vocdoni 鏈上投票<sup>56</sup>，Rarimo Freedom Tool 用 ZK + 區塊鏈作為流亡公民的旁路根<sup>57</sup>。這三個案例顯示「公共鏈作為信任錨」是 R3 機構根與 R4 自托管根的中間態；其本身並不直接解決 SRP，但提供了一條不被單一發證國 D4b 撤回的證據可用性路徑。重要警示：這條路徑的主權前提仍存在（任一公共鏈都依賴某些治理主體），multi-rooted 設計需要處理「鏈上 anchor 的治理也是 I_R 的一部分」這個層級。

---

## 五、Multi-Rooted Civic Proof 設計骨架

從 SA-1 攻擊面 + SA-2 威權案例 + SA-3 SRP 反推應有設計，並結合 Camenisch-Lysyanskaya 2001 anonymous credentials<sup>58</sup>、Boneh-Boyen-Shacham 2004 BBS+ short group signatures<sup>59</sup>、Lampson 1971 protection matrix<sup>60</sup>、Anderson 2008 multi-level security<sup>61</sup>、Pfitzmann-Hansen 2010 anonymity terminology<sup>62</sup>、Allen 2016 Self-Sovereign Identity<sup>63</sup>、Cameron 2005 The Laws of Identity<sup>64</sup>、W3C VC Data Model 2.0<sup>65</sup>、W3C DID Core 1.0<sup>66</sup>，本文提出 **Multi-Rooted Civic Proof（MR-CivicProof）** 形式化骨架。

### 5.1 形式定義

**MR-CivicProof**：給定信任根集合 R = {R1, R2, R3, R4}，目標群體集合 G = ∪_i G_i（依場景分群），multi-rooted civic proof 滿足：

> **(M1) 覆蓋性**：對任何 g ∈ G_target，存在至少一個 r ∈ R 使得 verifier 接受。
> **(M2) 降級可用性**：對任何 g ∈ G_w（弱勢子集），若 R1 對 g 失效，仍存在 R_j ∈ {R2, R3, R4} 提供降級路徑。
> **(M3) 密碼學可組合性**：任意子集 R' ⊆ R 的合取 ∧ / 析取 ∨ / 門檻 t-of-n 組合在密碼學上明確且可驗證；典型原語包含 BBS+ multi-issuer aggregation<sup>67</sup>、Sismo composition<sup>68</sup>、Shamir 1979 threshold signature<sup>69</sup>。
> **(M4) 透明選擇權**：降級資訊對 verifier 透明但 holder 保有選擇權（root provenance + holder selectivity，與 Pfitzmann-Hansen unlinkability 一致）。

(M1)–(M4) 是 MR-CivicProof 的 4 條形式條件，在密碼學上以 Camenisch-Lysyanskaya 2001 與 BBS+ 為基底原語可實作，但形式條件本身並未指定具體 ZK 路徑（zk-SNARK / zk-STARK / Bulletproofs 皆可承載）。

### 5.2 R1–R4 四層信任根

| 根 | 名稱 | 信任錨 | 覆蓋率 | 主要脆弱性 | 主要適用場景 |
|---|---|---|---|---|---|
| **R1** | 護照根 | ICAO eMRTD CSCA → DS → SOD | 約 20 億 | D1–D4b 六項威脅 | 民主法治國家公民主流場景 |
| **R2** | 社群根 | 流亡組織 / 宗教 / 跨境 NGO | 千萬量級 | 治理 + 資金 + 合規三方壓力 | 流亡社群與威權拒發者 |
| **R3** | 機構根 | UNHCR / IOM / 區域難民組織 | 約 940 萬難民 | 雙重 mandate 風險 | 無國籍者與難民 |
| **R4** | 自托管根 | Web of Trust / 社交圖譜 / threshold pseudonym | 十萬量級 | 4 重門檻 + 責任轉移 | 高度敏感場景 |

四個根並非可交換等價物。R1 在「全球可驗證」上仍是覆蓋率最廣的根，R2 / R3 / R4 各自處理 R1 失效後的不同人口群體，R2 主要服務流亡社群、R3 主要服務無國籍者、R4 主要服務高敏感度個人。本文採取「補強而非替代」立場，在 SRP 觸發的場景下，R1 失效，R2 / R3 / R4 接力；在 SRP 未觸發的常規場景下，R1 仍是首選。

### 5.3 D1 / D2 / D3 三條降級準則

從 8 案例的經驗教訓與密碼學文獻，反推三條設計準則：

**D1 準則 — Policy-driven graceful degradation 而非 rank-ordered fallback**：當 R1 失效（W1 / W2 觸發），系統不應簡單跌到 R2 / R3 / R4 的「次等版」，而應依 policy（取決於場景：是投票、是金融 KYC、是醫療登錄）動態選擇最適合的降級路徑。Brewer 2000 CAP 定理<sup>70</sup>與分散式系統 graceful degradation 文獻提供了設計範例。

**D2 準則 — 密碼學原語可組合**：multi-rooted 的合取 ∧ / 析取 ∨ / 門檻 t-of-n 組合必須在密碼學上明確。BBS+ multi-issuer aggregation、Sismo composition、Camenisch et al. 2017 anonymous attestation using composite ZK proofs<sup>71</sup>提供了具體實作路徑。

**D3 準則 — Root provenance 透明 + 不洩漏 G_w 標籤**：verifier 需要知道「這份證明是來自哪個 / 哪幾個根」（為了風險評估），但不應因此可推論「持有者屬於 G_w 弱勢子集」。這在 Pfitzmann-Hansen unlinkability 與 selective disclosure 框架下可實作。具體要求：root provenance 訊息不能被用作 fingerprint 區分「弱勢 vs 一般」群體。

### 5.4 與 article 05 SA-5 multi-rooted 方案的接合

article 05 的 multi-rooted Sybil-resistance 方案（Gitcoin Passport / Holonym KYC / BrightID + zkPassport 組合）已經做了一部分 D2 準則的工程實作<sup>72</sup>。本文的擴展是把 R1 之外的根（R2 社群根、R3 機構根、R4 自托管根）顯式引入並處理 SRP 場景。article 05 與本文共享的最大警示是「最弱根失效」（race-to-the-bottom）：multi-rooted 設計若把 OR 合取規則寫得太鬆，攻擊者只需攻破最弱的根即可繞過全部。MR-CivicProof 的 (M3) 條款顯式要求「任意子集的合取 ∧ / 析取 ∨ / 門檻 t-of-n 組合在密碼學上明確且可驗證」，正是為了避免最弱根失效。

### 5.5 與 prompt 11 wallet-as-essential-facility 的接合

prompt 11 提出「wallet 作為 essential facility」的規範主張，當 wallet 成為公民取得各類服務的必要設施，wallet 的設計義務應對等於 essential facility doctrine 下的非歧視義務。MR-CivicProof 的 multi-rooted 設計是 wallet 層級的對應實作，wallet 必須支援多根錨定、不對 R2 / R3 / R4 持有者區別對待、且需揭露各根的 provenance。article 06 SA-5 商業 wallet vs 政府 wallet 的規範類別差異<sup>73</sup>在此處直接相關，R3 機構根的雙重 mandate 風險與商業 wallet 的廣告 / 資料變現邏輯有不同的治理方向，wallet 規範必須區別處理。

---

## 六、5 條邊界條件與 UNHCR Iris in Jordan 案例

MR-CivicProof 的工程設計骨架若不配合 5 條邊界條件，會在治理層退化為「最弱根失效」、「替代根成本下放」、或「機構根變成另一種主權容器」。本章透過 UNHCR Iris in Jordan 案例與 5 條邊界條件，說明 multi-rooted 在實際部署時必須處理的限制。

### 6.1 B1：覆蓋率 vs 脆弱性的 trade-off

R1 護照根的覆蓋率約 20 億<sup>74</sup>；UNHCR 已登錄無國籍者 440 萬<sup>75</sup>，學界估計實際無國籍人口超過 1500 萬<sup>76</sup>；R3 機構根（包含 UNHCR 940 萬難民登錄）千萬量級；R2 社群根（流亡組織、跨境 NGO、宗教社群）約千萬量級；R4 自托管根（Web of Trust / 社交圖譜）約十萬量級。

這個量級分布決定了 R1 在覆蓋率上的不可替代性：若 multi-rooted 設計把 R1 邊緣化，會把全球 20 億 ePassport 持有者的便利讓位給尚未驗證可規模化的 R2 / R3 / R4。本文的「補強而非替代」立場正是基於這個量級判斷：在 SRP 未觸發的常規場景下，R1 仍是首選；R2 / R3 / R4 的工程意義在於 R1 失效時的降級可用性。

### 6.2 B2：無國籍者與一般跨境問題的範疇差異

無國籍者（statelessness）與一般跨境問題在規範分類上不應合併處理。1954 Convention（無國籍者地位）<sup>77</sup>與 1961 Convention（減少無國籍）<sup>78</sup>的締約國數約 100 國左右，相較於 1951 Refugee Convention 的 149 國<sup>79</sup>，覆蓋率明顯較低。撒哈拉以南非洲與南亞的兒童出生登記率仍低於 80%<sup>80</sup>，這意味著大量「事實無國籍」（de facto stateless）人口從未被任何信任根登錄。緬甸羅興亞、多明尼加 2013 年撤銷海地裔公民身分等案例<sup>81</sup>，是國家主動製造無國籍狀態的當代範例。

對 multi-rooted civic proof 設計，B2 的含意是：R3 機構根若採生物識別（如 UNHCR Iris）作為唯一識別，會把無國籍者的不可逆生物特徵變成新的脆弱根（與 article 05 Worldcoin 的警示同構）；R2 社群根需有「根代發機制」協助無國籍者錨定；Sadiq 2009《Paper Citizens》<sup>82</sup>記錄的「實質公民身分」（substantive citizenship）路徑顯示，社群層級的識別在無國家承認的情況下仍可運作，但其法律有效性有限。

### 6.3 B3：NGO 根與社群根的政治經濟

R2 社群根（典型如流亡 NGO、跨境社群、宗教組織）並非天然非政治。NGO 治理面對三方壓力：捐助方（OECD-DAC 統計顯示全球 NGO 資金集中於 ≤ 5 個主要捐助國<sup>83</sup>）、所在國（落地登記、合規義務）、反恐金融法（FATF 標準下的客戶盡職調查與制裁名單核對）。三方壓力意味著 R2 / R3 在「不被特定政府滲透」這件事上有結構性脆弱。Vocdoni 加泰隆尼亞 2017 公投部署後社群根遷移海外的具體節點數雖無公開精確數字（TODO-VERIFY），但部署本身依賴跨境節點分散的事實已被技術文件記錄<sup>84</sup>。

設計含意：multi-rooted civic proof 的 R2 / R3 部署必須有「根多樣性指標」，亦即 verifier 應能評估這份證明來自哪個根的治理結構（捐助方 / 所在國 / 簽發機構），且不能讓單一捐助方或政府主導 R2 / R3 的整體可信度。

### 6.4 B4：UNHCR / IOM 雙重 mandate 風險

UNHCR Iris in Jordan 案例（2013 Zaatari 啟用 → 2018 WFP Building Blocks 區塊鏈援助 → 2024 全球 940 萬難民登錄）<sup>85</sup>，是評估 R3 機構根治理風險的核心案例。

ODI 2019《Eye to Eye》報告<sup>86</sup>記錄，70%+ 受訪者「不認為拒絕 Iris 仍能領援助」。這是 SA-5 「強制性」維度的直接經驗證據：機構根在實踐中很難維持「自願」屬性。資料治理上，UNHCR ProGres v4 與 IrisGuard EyeCloud Health 與 Cairo Amman Bank 三方有資料流經與共享。Human Rights Watch 2021《I Got the Card by Mistake》<sup>87</sup>揭露 UNHCR ProGres 部分欄位曾分享給緬甸政府（羅興亞案例），這是 R3 機構根「雙重 mandate」（保護 vs 與所在國配合）風險的具體表現。

Madianou 2019《Technocolonialism》<sup>88</sup>、Latonero 2018《Stop Surveillance Humanitarianism》<sup>89</sup>、Latonero & Kift 2018《On Digital Passages and Borders》<sup>90</sup>、Jacobsen 2017《On Humanitarian Refugee Biometrics》<sup>91</sup>、Sandvik & Lohne 2014<sup>92</sup>等學術文獻已建立成熟的 humanitarian biometrics 批判：人道組織並非中性技術提供者，其資料實踐受捐助方議程、所在國配合需求、技術供應商商業邏輯共同形塑。對 MR-CivicProof 設計，B4 的含意是 UI 層必須暴露「此根是否與所在國政府共享資料」「此根的雙重 mandate 結構」等 governance 訊息，holder 才能做出實質同意。

### 6.5 B5：自托管根對弱勢者的 4 重門檻

R4 自托管根（Web of Trust / 社交圖譜 / threshold pseudonym）對弱勢者構成 4 重門檻：

- **裝置門檻**：自托管需要可信硬體（典型如 secure enclave 手機 / 硬體錢包）。
- **認知門檻**：金鑰管理、社交圖譜建構、threshold 簽章操作的學習成本。
- **法律門檻**：自托管根在多數司法管轄區無正式法律地位，KYC 與司法救濟受限。
- **替代根錨定門檻**：R4 在初始錨定階段仍需某種前置根（典型是 R1 / R2 / R3）證明持有者是真人。

4 重門檻意味著 R4 對「最沒有資源的弱勢者」反而最不可用。若 multi-rooted civic proof 設計把責任從 R1 失效推給 R4，會構成責任轉移結構（victim-blaming）：成本下放給最不該承擔的人口。article 06 CB-Justice D1*（成本不下放給弱勢）在此處對 R4 設計有直接拘束：R4 必須與 R1–R3 形成降級鏈，並且不能成為弱勢者的唯一可用根。

### 6.6 與 prompt 15 civic-proof-inclusion-rights 的接合

prompt 15 提出「civic proof inclusion rights」的規範主張：civic proof 設計必須把無國籍者、出生未登錄者、流亡公民等弱勢人口的可包容性視為設計義務。本章 5 條邊界條件正是 inclusion rights 在 multi-rooted civic proof 上的展開。Sadiq 2009《Paper Citizens》<sup>93</sup>對「無國家承認下的實質公民身分」的質性研究、UNICEF 2024 出生登記資料<sup>94</sup>的量化基礎，共同支撐 inclusion rights 的設計義務。

---

## 七、政策建議與工程接合

前六章建立的論證骨架（六項 PKI 威脅、4+2 武器化形式、SRP 形式化、MR-CivicProof 設計、5 條邊界條件）並非純粹學術架空，它們對應到一組可被工程方、立法方、人道組織具體採取的政策與設計動作。本章把這些建議分成三層處理。

### 7.1 工程層：MR-CivicProof 規範的最小可用版本

對採用 zkPassport 系列方案的工程社群，最小可用的 MR-CivicProof 規範應包含五條技術義務。第一，zkPassport 簽章驗證流程必須區分 ePassport 三代（BAC / EAC v1 / PACE+EAC v2），並對第一代 BAC 護照標示安全等級降級<sup>95</sup>，理由是 BAC 已被學術證明可 skim+replay。第二，CSCA / DS 撤銷的 CRL 與 ICAO PKD 撤回事件必須在 verifier 端有公開的事件日誌，使 holder 能事前評估 R1 的有效期與政治穩定性<sup>96</sup>。第三，multi-rooted 簽章組合需採 BBS+ multi-issuer aggregation 或 Sismo composition 等密碼學原語，並在介面層暴露 root provenance（紅線：避免洩漏 G_w 標籤，採 unlinkable presentation）<sup>97</sup>。第四，降級邏輯（R1 失效 → R2 / R3 / R4）採 policy-driven 而非 rank-ordered，由 holder 與 verifier 在事前協商可接受根集合。第五，R4 自托管根的初始錨定不得排除其他根，社交還原（social recovery）與機構代管（institutional custody）應作為標準選項。

這五條技術義務並非 zkPassport 各方案目前的共識。Andolfo et al. 2024 *zkPassport*<sup>98</sup>的學術原型主要處理單一根的 ZK 包裝；Rarimo Freedom Tool 文件<sup>99</sup>處理 R1 + 部分鏈上 attestation，未完整涵蓋 R2-R4；Self.xyz 與 Self Protocol 文件<sup>100</sup>則仍偏向單一根加 wallet 整合。對應的 W3C VC Data Model 2.0<sup>101</sup>與 DID Core 1.0<sup>102</sup>規範本身支持 multi-issuer credential，但工程社群對 multi-rooted 的政治意涵（特別是 SRP 與機構根雙重 mandate）尚無系統性共識。本文的工程貢獻在於把這些技術原語放回主權容器邏輯下，給出降級準則的規範動機。

### 7.2 立法層：救濟文件數位化與 R3 機構根的法律承認

立法層的關鍵挑戰是救濟文件（refugee travel document / 1954 stateless travel document）的數位降級。如第三章所述，EUAA 2023 報告<sup>103</sup>指出救濟文件在銀行 KYC 場景的拒絕率達 18-43%，遠高於發行國護照的 2-7%。這個落差是 SRP 觸發後、SA-2 W1-W4 武器化發生後的下游後果；它的根源並非純粹工程問題，法律承認的失敗才是核心。

具體立法建議包括三項。第一，1954 / 1961 公約的締約國應透過 ICAO 機制把 stateless travel document 納入 PKD，並讓 verifier 端的 trust list 強制接受。歐盟層級可在 eIDAS 2.0 的 trust framework 下增設 stateless 與 refugee 條款<sup>104</sup>。第二，UNHCR Convention Travel Document 與 IOM emergency travel document 的數位等價物（如 ProGres 條目對應的 verifiable credential）應有正式法律地位，不應僅作為「補充身分文件」處理。第三，反恐金融法（FATF 標準）對 R3 機構根的客戶盡職調查（CDD）要求應在「武器化敏感人口」場景做例外處理，避免救濟文件持有者在 KYC 階段就被排除。

這三項建議在實踐上會遇到主權阻力；畢竟把 R3 機構根法律化等於要求各國放棄部分護照根的壟斷地位。但 SRP 的規範意涵恰恰是：對流亡者、無國籍者、被拒發者，主權壟斷本身就是問題的源頭，不是解決方案。

### 7.3 人道組織層：UNHCR / IOM 的雙重 mandate 透明化

對 UNHCR、IOM、WFP 等執行 R3 機構根的國際組織，6.4 節已論述其雙重 mandate 風險。具體政策建議包括：第一，ProGres 與 MIDAS 等資料庫的「與所在國政府共享」協議必須對 holder 透明披露（事前知情同意），不再以「人道豁免」為由保留協議內容<sup>105</sup>；第二，生物識別（Iris / 指紋 / 面部）作為唯一識別的部署模式應重新評估，採用降級鏈（Iris + 紙本替代 + 社區代發）作為標準<sup>106</sup>；第三，technocolonialism 批判（Madianou 2019、Latonero 2018）指出的「捐助方主導 vs 受助者治理」失衡<sup>107</sup>，應透過受助者代表參與資料治理董事會等機制改善。

這三項建議的可行性受 UNHCR / IOM 的所在國配合義務限制；以 Jordan、Bangladesh、Lebanon 等 host country 為例，這些國家不一定接受透明化。但對 multi-rooted civic proof 的工程設計，至少應假設 R3 不可能完全脫離雙重 mandate 風險，並在 UI 層提供 root provenance 揭露作為最低要求。

### 7.4 與 article 04 / 05 / 06 的政策接合

本文政策建議與前三篇的政策路徑共構出一條完整光譜。article 04（pseudonymous-participation-legal）的 T 三件式（Trigger / Authority / Remedy）<sup>108</sup>處理的是「假名 + 事後問責」的法律制度層條件，本文 SRP 處理的是「I_R 不能等同於 Adversary(T_R)」的主權前提。前者是後者的下游：在 SRP 滿足的條件下，T 三件式才有運作空間；在 SRP 違反的條件下（如俄羅斯反戰運動者面對俄羅斯護照當局），T 的 Authority 件直接失效。

article 05（sybil-resistance-cost-benefit）的 IT' 不可能三角<sup>109</sup>（Uniqueness / Decentralization / Inclusion）與 multi-rooted 的設計取捨直接關聯。R1 護照根對應「強 Uniqueness 但弱 Decentralization」的 corner；R4 自托管根對應「強 Decentralization 但弱 Inclusion」的 corner；MR-CivicProof 透過降級鏈讓不同 corner 在不同場景下動態切換。

article 06（civic-burden-redistribution）的 CB-Justice D1*（Rawls 差別原則）與 D2*（Anderson 關係平等）<sup>110</sup>對 multi-rooted civic proof 提供規範約束。D1* 要求成本不下放給最弱勢，這對應到 6.5 節 R4 自托管根的「不能成為弱勢者唯一可用根」設計義務。D2* 要求關係平等，這對應到 R3 機構根的「不能讓無國籍者陷入比公民更被監控的關係結構」設計義務。

did-vc-public-blockchain article（2026-05-01）<sup>111</sup>記錄了 Bhutan NDI、加泰隆尼亞 Vocdoni、Rarimo Freedom Tool 的部署案例，本文 SA-5 跨案例對照延伸這些案例到主權容器的具體運作分析。

### 7.5 政策落地的三項約束

最後說明三項政策落地的現實約束。第一是主權國家的合作意願，1954 / 1961 公約締約國僅約 100 國（vs 1951 Refugee Convention 149 國），擴展締約國的政治成本不低<sup>112</sup>。第二是 FATF 反恐金融法的硬約束，救濟文件 KYC 例外處理在制裁地區會直接違反 OFAC 與 UN 1267 名單義務<sup>113</sup>，這需要國際層級的協商。第三是工程社群的自我規訓，zkPassport 系列方案的工程文化偏向「技術中性」論述，把政治問題當作「下游應用層」處理，這個分工結構不利於 multi-rooted 規範採納。本文 SRP 的論證強度在於把政治問題重新置於工程設計的根層級，不再可被「中性技術」論述化約。

---

## 八、結論

護照根有用，但不是唯一根。從 ICAO PKI 的六項威脅、SRP 規範性命題、到 8 個護照武器化案例，passport-rooted civic proof 在威權與流亡情境下的結構脆弱已經充分。SRP 與 article 03 H1' 三道牆、article 04 T 三件式、article 05 IT' 不可能三角、article 06 CB-Justice D1*∧D2* 同樣是合取結構，但用於不同層級；SRP 處理的是「I_R 不能等同於 Adversary(T_R)」這個主權前提，是其他四個層級之上的規範條件<sup>114</sup>。Multi-Rooted Civic Proof（R1 護照根 + R2 社群根 + R3 機構根 + R4 自托管根 + D1/D2/D3 降級準則）是工程上的最佳可用回應，但護照根仍是覆蓋率最廣的根；multi-rooted 是補強而非替代，5 條邊界條件（B1 覆蓋率 trade-off、B2 無國籍者、B3 NGO 政治經濟、B4 機構根雙重 mandate、B5 自托管根弱勢者門檻）必須同時處理，缺一就會把成本下放給最不該承擔的人口。

本文的論證強度標為「中強」：六項 PKI 威脅與 4+2 武器化形式有充分的經驗證據；SRP 形式化是規範性 + 經驗性合成命題（非密碼學定理）；MR-CivicProof 設計是工程溯因（abductive engineering reasoning under defeasibility），可被三類事證推翻，分別是任一根失效模式間的隱藏耦合、降級準則實作引入新攻擊面、最弱根失效拖累整體可信度。這三類風險在第五章與第六章已具體標示。

對讀者，最後留下三條工作邀請。一是從 zkPassport 工程社群採納 multi-rooted 規範開始，把第七章五條技術義務轉換為 W3C VC 工作組的具體標準提案。二是從各國立法者層級推動 1954 / 1961 公約的數位化條款，讓 stateless travel document 進入 ICAO PKD 與 eIDAS 2.0 trust framework。三是從人道組織層級推動 UNHCR ProGres 治理透明化，把 technocolonialism 批判轉換為具體的資料治理改革。

「用國家發行的護照證明你不要這個國家」這個悖論的解法並非更精緻的密碼學包裝；承認信任根本身的政治性，並在多重根的可組合架構下建立降級可用的工程實踐，才是真正的出路。本文是這條路徑的一個起點。

---

## 參考資料

1. Andolfo, A. et al. (2024). *zkPassport: A privacy-preserving identity verification scheme using ZK-SNARKs over passport biometric data*. IACR ePrint 2024/1377；Anon Aadhaar specification (PSE 2024)；Rarimo Foundation. *Freedom Tool Technical Brief*；Self.xyz / Self Protocol Documentation；Privado ID Protocol Whitepaper.
2. World Bank ID4D (2024). *Identification for Development Global Dataset*；ICAO PKD Annual Report 2024.
3. SRP 形式化見本文 § 4；參考 Schmitt 1922；Agamben 1995；Sassen 2006；Krasner 1999.
4. ICAO Doc 9303 (2021). *Machine Readable Travel Documents*, 8th edition. Part 11 + Part 12.
5. BSI TR-03110 *Advanced Security Mechanisms for MRTDs* 系列 (Germany BSI).
6. BSI TR-03135 *Machine Authentication of MRTDs by Inspection Systems*.
7. ICAO Doc 9303 (2021). Part 12: Public Key Infrastructure for MRTDs.
8. ICAO PKD Annual Report 2024；ICAO MRTD Programme 公開頁.
9. Hoepman, J.-H. (2008). *Crossing borders: Security and privacy issues of the European e-passport*. ESORICS.
10. Witteman, M., & Oostdijk, M. (2008). *Reverse engineering of MRTD security*.
11. Schmid, F. (2018). *ePassport Security and Privacy*. IEEE.
12. Nohl, K., & Krißler, J. (2008). 護照 fingerprint clone (黑帽會議).
13. Hancke, G. P. (2006). *Practical attacks on proximity identification systems*.
14. Carluccio, D. et al. (2007). *E-Passport: The Global Traceability Or How To Feel Like a UPS Package*.
15. Estonia 2017 ROCA 漏洞 (CVE-2017-15361)；Estonian RIA 公告.
16. Regulation (EU) 910/2014 (eIDAS 1.0)；Regulation (EU) 2024/1183 (eIDAS 2.0).
17. ENISA (2024). ePassport 安全評估系列.
18. EU LoTL (List of Trusted Lists) 規範與技術實作.
19. ICAO Doc 9303 第八版 Annex B-D (規範實作補充).
20. Active Authentication 與 Chip Authentication：ICAO Doc 9303 Part 11；BSI TR-03110.
21. Worldcoin 與 Iris 不可逆性 article 05 SA-5 警示.
22. Buterin, V. (2023). *What do I think about biometric proof of personhood?*；EFF 2020-2024 *Biometric Surveillance series*.
23. Human Rights Watch (2022-2024). *Russia Reports* 系列；OVD-Info 2022-2024；Memorial 紀錄.
24. Russian State Duma (2024-04). 散布俄軍假信息撤銷國籍法案紀錄；Vincent Chen et al. 2023 (HSE Moscow).
25. HRW (2023). *Russia: New Repressive Laws Tighten Control*；Amnesty International (2024). Russia 報告.
26. Center for Human Rights in Iran (2023). *Iran's Weaponization of Citizenship Against Diaspora Activists*.
27. IranWire (2023-2024). 護照吊銷案例追蹤；Atlantic Council Iran Source.
28. Iranian Passport Law 1962 第 18 條 (監護人法 mahram law)；Citizen Lab (2023). Predator 監控報告.
29. Belarus Presidential Decree No. 278 (2023)；HRW (2023). Belarus 報告；BYPOL & Viasna 紀錄.
30. Stockholm Center for Freedom (2018). *Turkey 政變後護照撤銷統計*；HRW (2017). Turkey 報告.
31. UK FCDO (2021). BNO 政策文件；Hong Kong Watch (2022). BNO 報告.
32. Database Center for North Korean Human Rights；Liberty in North Korea 紀錄.
33. Syrian Network for Human Rights (2019). 海外勒索報告；Refugees International (2020). 敘利亞案例.
34. UN Security Council Resolution 2023 (2011). 厄立特里亞 Diaspora Tax 譴責；Human Rights Concern Eritrea.
35. EUAA (2023). *Refugee Travel Document KYC Acceptance Report*.
36. UN 1961 Convention on the Reduction of Statelessness, Article 8.
37. Macklin, A. (2007). *Who Is the Citizen's Other?*. Citizenship Studies；Gibney 2013；Lavi 2015 Yale L.J.
38. INTERPOL Stolen and Lost Travel Documents Database；ICAO PKD 雙邊路徑.
39. Fair Trials (2018). *Strangers in Their Own Country*；Council of Europe PACE Resolution 2161 (2017).
40. Citizen Lab (2018-2024) 系列；Forbidden Stories *Pegasus Project* (2021-2024)；Marczak et al. 2018.
41. Schmitt, C. (1922/1985). *Political Theology*.
42. Schmitt, C. (1932/1996). *The Concept of the Political*.
43. Agamben, G. (1995). *Homo Sacer: Sovereign Power and Bare Life*.
44. Agamben, G. (2003). *State of Exception*.
45. Sassen, S. (2006). *Territory, Authority, Rights*.
46. Brown, W. (2010). *Walled States, Waning Sovereignty*.
47. Krasner, S. D. (1999). *Sovereignty: Organized Hypocrisy*.
48. Foucault, M. (1975). *Discipline and Punish*.
49. Foucault, M. (1977-1978). *Security, Territory, Population*.
50. Arendt, H. (1951). *The Origins of Totalitarianism*, Chapter 9.
51. Hardt, M., & Negri, A. (2000). *Empire*；Rancière, J. (2004). *Who Is the Subject of the Rights of Man?*.
52. Joppke, C. (2010). *Citizenship and Immigration*；Bloemraad, I. (2006). *Becoming a Citizen*.
53. Sadiq, K. (2009). *Paper Citizens*；Bauder, H. (2014). *Immigration Dialectic*.
54. Lavi, S. (2015). *Citizenship Revocation as Punishment*. Yale L.J.；Shachar, A. (2009). *The Birthright Lottery*.
55. Roth, K. (2019). *The Sovereignty Wars*；Bauman, Z. (2004). *Wasted Lives*.
56. Pfitzmann, A., & Hansen, M. (2010). *Anonymity terminology*；終局決斷理論延伸到 PKI 的論證見本文 § 4.
57. SRP 規範性 + 經驗性合成命題見本文 § 4；參考 Sen, A. (2009). *The Idea of Justice*.
58. article 03 (digital-association-empirical-test)：H1' 三道牆假設；article 04 (pseudonymous-participation-legal)：T 三件式（Trigger / Authority / Remedy）；article 05 (sybil-resistance-cost-benefit)：IT' 不可能三角；article 06 (civic-burden-redistribution)：CB-Justice D1*∧D2*.
59. Camenisch, J., & Lysyanskaya, A. (2001). *An Efficient System for Non-transferable Anonymous Credentials*. EUROCRYPT 2001.
60. Boneh, D., Boyen, X., & Shacham, H. (2004). *Short Group Signatures*. CRYPTO 2004.
61. Chaum, D. (1985). *Showing credentials without identification*. CACM；Chaum & van Heyst (1991). *Group signatures*. EUROCRYPT.
62. Lampson, B. W. (1971). *Protection*. Princeton；Anderson, R. J. (2008). *Security Engineering* (2nd ed.) Chapter 8.
63. Shamir, A. (1979). *How to share a secret*. CACM 22(11).
64. Camenisch, J. et al. (2017). *Anonymous attestation using composite ZK proofs*.
65. Sismo whitepaper；Holonym whitepaper；Polygon ID / Privado ID whitepaper.
66. Allen, C. (2016). *The Path to Self-Sovereign Identity*；Cameron, K. (2005). *The Laws of Identity*.
67. Maler, E. et al. (2015). *User-Managed Access (UMA) Profile of OAuth 2.0*.
68. W3C Verifiable Credentials Data Model 2.0；W3C DID Core 1.0.
69. Pfitzmann & Hansen (2010). *Anonymity terminology*.
70. Brewer, E. (2000). *Towards Robust Distributed Systems* (CAP)；Lamport, L. (1978). *Time, Clocks, and the Ordering of Events*.
71. Zimmermann, P. (1995). *The Official PGP User's Guide*.
72. NIST SP 800-63-4 ipd (2024-08).
73. article 06 (civic-burden-redistribution) SA-5：商業 wallet vs 政府 wallet 規範類別差異.
74. World Bank ID4D (2024)；ICAO PKD 2024 統計.
75. UNHCR Annual Report 2024.
76. European Network on Statelessness (2024). *Statelessness Index 2024*.
77. 1954 Convention relating to the Status of Stateless Persons.
78. 1961 Convention on the Reduction of Statelessness.
79. 1951 Refugee Convention + 1967 Protocol.
80. UNICEF (2024). *Birth Registration Data 2024*.
81. HRW 緬甸羅興亞報告系列；Human Rights Watch (2014). *Dominican Republic 2013 撤銷海地裔公民身分*.
82. Sadiq, K. (2009). *Paper Citizens*. Oxford UP.
83. OECD-DAC (2024). *Development Finance Statistics*.
84. Vocdoni Foundation (2017-2024). 加泰隆尼亞 2017 公投技術回顧；Privacy International (2024). *Refugee Data Project*.
85. UNHCR Annual Report 2024；UNHCR *Digital Identity for Refugees* 政策文件；WFP (2018). *Building Blocks*.
86. Overseas Development Institute (ODI). (2019). *Eye to Eye: Biometric Identity in Refugee Aid*.
87. Human Rights Watch. (2021). *I Got the Card by Mistake*.
88. Madianou, M. (2019). *Technocolonialism: Digital Innovation and Data Practices in the Humanitarian Response to Refugees*. Social Media + Society.
89. Latonero, M. (2018). *Stop Surveillance Humanitarianism*. NYT Op-ed + 學術延伸.
90. Latonero, M., & Kift, P. (2018). *On Digital Passages and Borders*. International Migration Review.
91. Jacobsen, K. L. (2017). *On Humanitarian Refugee Biometrics*. Security Dialogue.
92. Sandvik, K. B., & Lohne, K. (2014). *The rise of the humanitarian drone*. IRRC.
93. Sadiq, K. (2009). *Paper Citizens*. Oxford UP（同 § 6.2 引用）.
94. UNICEF (2024). *Birth Registration Data 2024*（同前引用）.
95. ICAO Doc 9303 (2021). Part 11; BSI TR-03110；Hoepman 2008；Witteman & Oostdijk 2008.
96. ICAO PKD Annual Report 2024；W3C Verifiable Credentials Data Model 2.0.
97. Camenisch et al. 2017；Sismo whitepaper；Pfitzmann & Hansen 2010.
98. Andolfo et al. (2024). *zkPassport*. IACR ePrint 2024/1377（同前引用）.
99. Rarimo Foundation. *Freedom Tool Technical Brief*.
100. Self.xyz / Self Protocol Documentation.
101. W3C VC Data Model 2.0.
102. W3C DID Core 1.0.
103. EUAA (2023). *Refugee Travel Document KYC Acceptance Report*（同前引用）.
104. Regulation (EU) 2024/1183 (eIDAS 2.0)；ETSI EN 319 401 / 411-1 / 411-2.
105. UNHCR Annual Report 2024；HRW (2021). *I Got the Card by Mistake*.
106. ODI (2019). *Eye to Eye*；Privacy International (2024). *Refugee Data Project*.
107. Madianou 2019；Latonero 2018（同前引用）.
108. article 04 (pseudonymous-participation-legal). T 三件式（Trigger / Authority / Remedy）.
109. article 05 (sybil-resistance-cost-benefit). IT' 不可能三角.
110. article 06 (civic-burden-redistribution). CB-Justice D1*∧D2*.
111. did-vc-public-blockchain article (2026-05-01). Bhutan NDI / 加泰隆尼亞 Vocdoni / Rarimo Freedom Tool 部署.
112. UNHCR statelessness conventions ratification status 2024.
113. FATF Recommendations；OFAC SDN List；UN Security Council 1267 Sanctions Committee.
114. SRP 與 article 03 H1' / 04 T / 05 IT' / 06 CB-Justice 結構同構但用於不同層級的論證見本文 § 4 + § 5 + § 7.4.


