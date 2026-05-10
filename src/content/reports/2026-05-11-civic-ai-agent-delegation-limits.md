---
title: "AI 代理可以代我連署、投票、出席聽證嗎：公民行動委任的制度極限"
description: "AI 代理在公民行動中的角色須分三層處理：L1 完全允許、L2 條件允許（須四件式委任機制 scope / revocation / audit / override）、L3 絕對禁止（投票、政治連署、聽證發言等公民意志的本質性表達）。判準是「微觀真實性」（micro-authenticity），由 Arendt plurality + Arendt natality + Habermas Verständigungsorientierung 三項條件構成。失能者保留 supported decision-making 對齊的雙重認證例外。責任歸屬採三層分配（Tier 1 嚴格責任 + 強制保險、Tier 2 過失責任 + 舉證倒置、Tier 3 限縮責任）。"
pubDate: 2026-05-11
tags: ["AI-agent", "civic-action", "delegation-limits", "Arendt", "Habermas", "personhood", "proxy-voting", "CRPD", "supported-decision-making", "AI-governance", "OpenID-GAS", "EU-AI-Act", "wallet", "civic-proof"]
category: "數位身分與民主理論"
aiModel: "Claude Opus 4.7"
aiPrompt: "哪些公民行動可以由 AI 代理執行？哪些絕對不行？民主正當性的「人格性」要件是什麼？委任機制應如何設計？AI 代理失誤時責任如何分配？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-11-civic-ai-agent-delegation-limits"
aiGeneratedDate: 2026-05-11
humanReviewed: false
lang: "zh-TW"
---

## 1. 導論

OpenID Foundation 在 2024 年陸續釋出 Generalized Agentic Sub-protocol（GAS）draft，把 AI agent 的委任機制標準化<sup>1</sup>。NIST 在同年發布 AI Agent concept paper + AI Risk Management Framework 1.0，建立 AI agent 治理的美國國家標準<sup>2</sup>。W3C 同步推進 AI agent identity discussion 與 Verifiable Credentials Working Group 對 AI 代理身份的標準化<sup>3</sup>。歐盟 AI Act（Regulation (EU) 2024/1689）的 high-risk 分類涵蓋部分 AI agent 場景<sup>4</sup>。EU EUDI Wallet 的 Architecture Reference Framework 2024 已預留 AI agent 的 multi-tenant 規格<sup>5</sup>。

當 AI 代理從 enterprise context 延伸到 civic action，一組無法被現行 enterprise governance 直接回答的問題會浮現。哪些公民行動可以由 AI 代理執行？哪些絕對不行？民主正當性的「人格性」要件是什麼？委任機制應如何設計？AI 代理失誤時責任如何分配？既有 article 2026-04-01-agentic-id-governance 已處理 enterprise / institutional 路徑（公司、機構代理）<sup>6</sup>，但 civic 補集尚未被獨立處理。

本文的核心命題為，AI 代理在公民行動中的角色須分三層處理。L1 完全允許（資訊查詢、文件預填、簡單登入）、L2 條件允許（申訴提交、行政程序協助，須四件式委任機制）、L3 絕對禁止（投票、政治連署、聽證發言、宣誓證詞、政治參選、選民登記、公投連署、罷免連署）。三層分類的判準是「微觀真實性」（micro-authenticity），由三項條件構成：Arendt plurality（每位行動者的人格獨特性不可被聚合演算法替代）、Arendt natality（每次行動是新的開始，並非預先訓練模式的執行）、Habermas Verständigungsorientierung（相互理解導向，不可被策略行動的最佳化目標取代）<sup>7</sup>。即使在允許 proxy voting 的法域，演算法規模化風險使 AI 代理執行 L3 行動仍應被禁止。失能者保留「supported decision-making 對齊的雙重認證」例外，避免落入 CRPD Art 12 違反<sup>8</sup>。責任歸屬採三層分配（Tier 1 嚴格責任 + 強制保險、Tier 2 過失責任 + 舉證倒置、Tier 3 限縮責任），承認三項 caveat（責任比例待實證、保險成本傳導風險、中小開發者退出壓力）。

論證安排如下：第 2 章釐清四方關係（committer / model provider / wallet provider / verifier）與「微觀真實性」概念。第 3 章從 Arendt + Habermas 政治哲學基礎演繹微觀真實性判準。第 4 章用 5 法域選舉法比較加上演算法規模化風險論證 proxy voting 的雙軸類比。第 5 章溯因建立 L1/L2/L3 三層分類加上 7 個灰色情境的邊界判定。第 6 章用失能者反例設計「supported decision-making 對齊的雙重認證」例外。第 7 章合成委任機制四件式與責任分配三層。第 8 章用案例與反事實壓力測試。第 9 章接合博論其他章節與 article 序列。第 10 章是誠實邊界與開放問題。第 11 章是條件性學術結論。

論證強度需要先行交代。演繹部分（第 3 章）所用基礎為 Arendt + Habermas + Pettit + Gutmann-Thompson 為基礎，證據強度為「強」，但「微觀真實性」三項條件的整合架構屬本文合成定義，非文獻直接論證。類比部分（第 4 章）以 5 法域選舉法為基礎，證據強度為「強」，但 AI 代理與傳統 proxy voting 的類比相似性須兩軸論證才成立。溯因部分（第 5 章）L1/L2/L3 三層分類屬「分析性類型學」，跨法域承載不同。反例部分（第 6 章）失能者例外設計依賴 CRPD Art 12 supported decision-making 對齊，但「雙重認證」具體實作仍待 disability advocacy 組織共識。政策合成（第 7 章）的責任比例與保險成本傳導為政策建議數，無實證來源。

## 2. 概念與術語

AI 代理在公民行動中的四方關係。**Committer**（委任者）是發起委任的公民，最終承擔行動後果。**Model provider**（模型提供者）是訓練與部署 AI 模型的廠商（OpenAI、Anthropic、Google DeepMind、Microsoft 等）。**Wallet provider**（皮夾廠商）是承載 AI agent 委任機制的應用程式廠商（Apple Wallet、Google Wallet、EUDI Wallet 各成員國版本、台灣 TW DIW 等）。**Verifier**（驗證者）是接收 AI agent 行動結果的主體（政府機關、選舉行政、行政聽證單位等）。

四方關係的法律意涵在 enterprise context 已被部分釐清（既有 article 2026-04-01 agentic-id-governance），但 civic context 的法律本質尚未在跨境條約中定型。Civic context 與 enterprise context 的核心差異在於：enterprise 的關鍵價值是「商業效率 + 法人責任」，civic 的關鍵價值是「民主正當性 + 微觀真實性」。前者的類比不能直接外推到後者。

「微觀真實性」（micro-authenticity）是本文合成的概念。它由三項條件構成。第一項是 Arendt plurality；每位行動者在公共領域中有不可化約的人格獨特性<sup>9</sup>。Arendt 在 *The Human Condition* §24-28 論證 plurality 是 action 的本體論前提：人類在 action 中既相同（共享世界）又獨特（彼此不可化約）。當 AI 代理批量執行公民行動，多個使用者的行動可能源於同一模型的同一決策路徑，plurality 在規範上消失。第二項是 Arendt natality；每次 action 是「新的開始」，並非預先訓練模式的執行<sup>10</sup>。Arendt 在 *The Human Condition* §24 把 natality 與生命的更新連結，強調 action 的不可預測性。AI 代理的決策來自訓練資料的模式抽取，natality 在認識論上被破壞。第三項是 Habermas Verständigungsorientierung（相互理解導向）；communicative action 的核心是參與者彼此承認為主體，以相互理解為導向，不可被策略行動取代<sup>11</sup>。Habermas 在 *Theorie des kommunikativen Handelns* Vol I §III 把 communicative action 與 strategic action 區分，前者以 Verständigungsorientierung 為核心，後者以 Erfolgsorientierung（成果導向）為核心。AI 代理的決策結構本質上是 Erfolgsorientierung，當它取代人類在 communicative action 中的位置，民主正當性的微觀基礎被破壞。

「微觀真實性」與「程序合理性」（procedural rationality）區分。Estlund 2008 *Democratic Authority* 把民主正當性的核心定位為程序合理性<sup>12</sup>。本文部分接受：程序合理性是民主正當性的必要條件，但並非充分條件。當 AI 代理批量執行 L3 行動時，程序「形式」可能合規（如 NIST AI RMF 1.0 + EU AI Act Art 14 human oversight），但「微觀真實性」已被破壞；這是 Estlund procedural rationality 自身無法涵蓋的盲點。

## 3. 政治哲學基礎：Arendt + Habermas 推得微觀真實性

從第 2 章微觀真實性的三項條件，本章建立其政治哲學基礎。論證的核心為，當公民行動屬於 action / communicative action 範疇，AI 代理介入會破壞 actor 的人格獨特性與相互理解導向的主體間性。

### 3.1 Arendt action / labor / work 三層與 L1/L2/L3

Hannah Arendt 在 1958 年 *The Human Condition* 把人類活動分為三層。Labor（勞動，維持生命再生產）、work（工作，創造耐久物件）、action（行動，在公共領域中與他人共在）<sup>13</sup>。三層按本體論順序排列。Labor 最接近生物性必然，work 是工具性創造，action 是公共政治性活動。

把 Arendt 三層對應到當代電子化公民行動：labor / work 對應 L1（資訊查詢、文件預填、簡單登入；工具性活動，可由 AI 代理執行）；action 對應 L3（投票、政治連署、聽證發言；公共領域的本質性表達，不可被 AI 代理取代）。L2 是中間區域（申訴提交、行政程序協助；工具性 + 微弱表達，需條件允許）。這個對應屬學理推論而非 Arendt 文本直接認定，writer 階段須標明「論述延伸」。

需要明示 Arendt 寫於前數位時代（1958 年），把 action 概念直接套到當代電子化公民行動需要額外論證。Arendt 在 §24-28 對 action 的論證強調其本質在於「在他人面前顯現」（appearance before others），這個本質性質在 wallet + AI agent 場景下是否仍由「物理在場」承擔，或可由「數位在場」（digital presence）部分滿足，仍有爭議空間<sup>14</sup>。本文採折衷立場。物理在場是 action 的典型表現，但不是唯一表現；數位在場可滿足 action 的形式條件，但不可由 AI 代理「替使用者在場」。

### 3.2 Habermas communicative vs strategic action

Jürgen Habermas 在 1981 年 *Theorie des kommunikativen Handelns* 把社會行動分為兩類：communicative action（以相互理解為導向）+ strategic action（以成果為導向）<sup>15</sup>。前者的核心是 Verständigungsorientierung（相互理解導向），後者的核心是 Erfolgsorientierung（成果導向）。Habermas 在 Vol I §III 論證民主正當性的微觀基礎在 communicative action；當參與者彼此承認為主體，以相互理解為導向，才有共同合理化（rationalization）的可能。

把這個區分套到 AI agent：L1 / L2 屬 strategic action 範疇（工具性增強，AI agent 的 Erfolgsorientierung 與使用者的策略目標相容）；L3 屬 communicative action 範疇（公民意志的本質性表達，AI agent 的 Erfolgsorientierung 取代使用者的 Verständigungsorientierung，破壞民主正當性的微觀基礎）。

Habermas 在 1996 年 *Faktizität und Geltung*（Suhrkamp 德文版 1992 / MIT 英譯本 1996）進一步把 discourse theory of democracy 與法治結合，論證合法性（Legitimität）需要透過 communicative action 在公共領域中被生產<sup>16</sup>。AI 代理批量執行 L3 行動時，合法性的微觀生產被中斷；形式上的程序合規不能補償微觀真實性的破壞。

### 3.3 與其他政治哲學家的對話

Philip Pettit 1997 *Republicanism* 從共和主義 *libertas* 傳統論證「免於支配」（freedom as non-domination）<sup>17</sup>。當 AI 代理介入公民行動，使用者面臨「演算法支配」風險；AI 模型的決策路徑、訓練資料偏誤、廠商商業利益等，都是潛在的支配源。Pettit 的共和主義論證直接支撐 L3 絕對禁止的規範力道。

Amy Gutmann & Dennis Thompson 1996 *Democracy and Disagreement* 提出 reciprocity 原則；民主審議要求參與者以彼此可接受的理由互相說服<sup>18</sup>。AI 代理無法承擔 reciprocity；它的「理由」來自訓練資料的統計模式，並非參與者間的相互可接受性。Gutmann-Thompson 的審議民主論證支撐 L3 行動中的「人類發言」要求。

Iris Marion Young 2000 *Inclusion and Democracy* 把民主重新定義為「結構性 inclusion」<sup>19</sup>。Young 的論證對 L3 絕對禁止有反向支撐：當 AI 代理介入使「不會用 AI 的公民」（如年長者、低數位識讀者）被排除於 L3 行動之外，民主的 inclusion 條件被破壞。這個論證與既有 article 2026-05-10 civic-proof-inclusion-rights 直接連動。

### 3.4 反論處理

第一個反論是 Luciano Floridi 2023 *The Ethics of Artificial Intelligence* 主張 AI 為 augmentation 而並非 replacement，「人格性表達」可由 human-AI 混合主體承擔<sup>20</sup>。本文部分接受：augmentation 在 L1 / L2 成立，使用者意志透過 AI 代理被擴展但不被取代。但 L3 場景下「微觀真實性」三項條件不可被 augmented；當 AI 代理批量執行投票，plurality 已被破壞（多個使用者共享同一模型決策）、natality 已被破壞（行動是訓練模式的執行）、Verständigungsorientierung 已被破壞（AI 的 Erfolgsorientierung 取代）。Augmentation 在 L3 等同於 replacement。

第二個反論是 Eric Posner & Adrian Vermeule 2010 *The Executive Unbound* 主張當代行政國家的決策需要彈性，把 civic proof 鎖定為基本權利會限制政府靈活回應新技術<sup>21</sup>。本文回應：把 L3 認定為絕對禁止並未要求政府用特定技術實現公民行動，而要求政府保證所有人都能親自參與。技術選擇的彈性保留在 L1 / L2 場景。

第三個反論是 Christian List & Philip Pettit 2011 *Group Agency* 論證集體 agent（公司、機構）可以有「集體意圖」<sup>22</sup>。AI 代理可類比為集體 agent 的延伸。本文回應：List-Pettit 的 group agency 概念依賴於「組織程序性決策」；集體 agent 透過 voting、deliberation、reasoning 等程序形成意圖。AI agent 的決策路徑沒有對應的內部程序；它的「意圖」屬訓練資料的統計推論，並非程序性合成。

第四個反論是 cyber-libertarian 立場（如 Lawrence Lessig 1999 *Code*）主張政治哲學概念在數位時代應重新定義；用 1958 / 1981 年的概念套 2026 年的 AI agent 是 anachronism<sup>23</sup>。本文部分接受：Arendt + Habermas 的概念須謹慎延伸。但「微觀真實性」三項條件本身（plurality / natality / Verständigungsorientierung）並未依賴於前數位時代的物質條件；它們是民主正當性的微觀基礎，與技術時代無關。Lessig 的批評只能反駁「概念字面套用」，不能反駁「概念實質延伸」。

第五個反論是 David Estlund 2008 *Democratic Authority* 主張民主正當性的核心是「程序合理性」而非「人格性表達」<sup>24</sup>。AI 代理只要遵守程序就有正當性。本文回應已見第 2 章末段；程序合理性是必要條件而非充分條件。

## 4. Proxy voting 法律類比：親自要件強度光譜 + 演算法規模化風險

從第 3 章微觀真實性的演繹基礎，本章建立 proxy voting 類比的雙軸論證。

### 4.1 第一軸：親自要件強度光譜

各國選舉法對「親自要件」（personal presence requirement）的強度不同，可被歸為三類。

**強強度**包含德國、台灣、日本。德國 Bundeswahlgesetz §14 規定投票限親自，聯邦憲法法院 2 BvC 4/13（2014 投票自由判決）確立投票權的「親自行使原則」（Grundsatz der persönlichen Wahlausübung）<sup>25</sup>。台灣《公職人員選舉罷免法》第 18 條規定「選舉人應於規定之投票時間，親自到指定之投票所投票」，《總統副總統選舉罷免法》同<sup>26</sup>。大法官釋字第 468 號（公職人員候選人候選資格連署制度）對連署「親自簽名」要件提供憲法解釋基礎；釋字第 290 號（公職候選人學歷限制）提供選罷法合憲性的延伸論據<sup>27</sup>。日本《公職選挙法》第 44 条規定「投票は、選挙の当日、自ら投票所に行き」（投票須當日親自前往投票所），不在者投票（第 49 条）的條件嚴格<sup>28</sup>。

**中強度**包含美國各州。美國 Voting Rights Act 1965 Section 208 允許「needs assistance to vote by reason of blindness, disability, or inability to read or write」的選民由其選擇的人協助（不包括選民的雇主或工會代表）<sup>29</sup>。*Crawford v. Marion County Election Board* 553 U.S. 181 (2008) 確立 voter ID 要求的合憲性，間接強化親自要件<sup>30</sup>。各州規範差異大，但整體屬中強度。

**較弱**包含英國。英國 *Representation of the People Act 1983* 設定基本投票框架，*Representation of the People Act 1985* 對海外公民、軍人配偶允許 proxy voting<sup>31</sup>。英國的 proxy voting 設計允許特定條件下「特定人代特定人」的代投。

### 4.2 第二軸：演算法規模化風險

AI 代理因可被同步部署於 N 個使用者（N 可達百萬），規模化偽冒風險顯著高於傳統 proxy voting。傳統 proxy voting 受到時間 / 地理 / 委任關係的自然限制；一個人類 proxy 在物理上不能同時為 1000 個委任者投票。AI 代理不受這些限制；同一個 model 可以在毫秒內為任意數量的使用者執行行動。

Sarah Birch 2011 *Electoral Malpractice* 對選舉舞弊規模化風險的論證直接適用<sup>32</sup>。Birch 指出選舉舞弊的危害程度與「規模化能力」呈非線性關係；個案舞弊的危害有限，規模化舞弊會破壞選舉的合法性基礎。Pippa Norris 2014 *Why Electoral Integrity Matters* 補充了選舉誠信（electoral integrity）的指標體系<sup>33</sup>。AI 代理的「演算法規模化風險」屬於 Norris 體系中的高風險指標。

### 4.3 兩軸交集的特別保護

兩軸論證的交集（弱親自要件 + 高規模化風險）需要特別保護。即使在允許 proxy voting 的法域（如英國），AI 代理執行 L3 行動仍應被禁止；因為 AI 代理打破了傳統 proxy voting 的自然限制（時間 / 地理 / 委任關係），使「規模化偽冒」變為可能。

### 4.4 反論處理

第一個反論主張 proxy voting 與 AI 代理的類比可能斷裂；前者是「特定人代特定人」（人對人關係），後者是「演算法代群體模式」（演算法對群體關係）。本文回應：兩軸論證已內建此區分。第一軸保留各國 proxy voting 法律差異；第二軸專門處理 AI 代理的規模化風險。即使類比在「人對人」層次斷裂，「規模化規範必要性」這個獨立論證仍成立。

第二個反論主張部分民主國家允許 proxy voting，AI 代理可被類比為新型 proxy 而非全面禁止。本文回應：英國的海外公民、軍人配偶 proxy voting 設計依賴於「特定委任關係」（如配偶、直系親屬），AI 代理不具備這個關係性條件。

第三個反論主張 AI 代理的稽核紀錄可能比傳統 proxy voting 更可信賴。本文回應：技術稽核能力不能取代民主正當性的微觀真實性（第 3 章已論證）。即使 AI 代理的稽核完整，行動的人格性已被替代；這是不可被技術修補的規範缺口。

第四個反論主張印度、巴西等大規模民主國家已採用 e-voting + electronic voting machine，AI 代理的進一步介入是「自然演化」。本文回應：e-voting 屬「電子化親自投票」（電子投票機仍須選民親自操作），並非「AI 代理執行投票」。兩者的微觀真實性條件不同。

## 5. L1/L2/L3 三層分類與灰色情境邊界

從第 3 章微觀真實性判準 + 第 4 章雙軸論證，本章建立 L1/L2/L3 三層分類與 7 個灰色情境的邊界判定。

### 5.1 L1 完全允許

L1 行動不涉及微觀真實性。具體 use case 包含資訊查詢、文件預填、簡單登入、便利接入、行政流程通知五類。例如健保資料查詢、稅務狀態確認、稅務申報預填、就業保險申請預填、政府服務 SSO、e-petition 平台登入、無障礙轉接服務、多語介面切換、投票提醒、選舉公報摘要、政策諮詢公告等。

L1 標準參考含 OpenID Foundation GAS draft 2024-2025（scope claim 章節）<sup>34</sup>、NIST AI Agent concept paper 2024<sup>35</sup>、W3C AI agent identity discussion<sup>36</sup>、EU EUDI Wallet ARF 2024 對 AI agent 的 multi-tenant 規格<sup>37</sup>、各 wallet 廠商 Responsible AI 政策（Microsoft Responsible AI Standard 2023、Anthropic Responsible Scaling Policy 2024、OpenAI Model Spec 2024、Google DeepMind Responsible AI Practices 2024）<sup>38</sup>。

### 5.2 L2 條件允許

L2 行動部分涉及微觀真實性，但本質性表達由人類保留。具體 use case 包含申訴提交（消費爭議、勞工申訴、行政訴願）、行政程序協助（社會福利申請、退休金申請、長照給付請領）、法律文件起草（合約檢視、法務諮詢、勞工權益申訴）。

「條件」具體化為四項。第一項是人類即時覆寫權；無時間延遲，覆寫不需理由，覆寫後 AI 代理立即停止行動。第二是完整稽核紀錄；時間戳 + 行動內容 + 覆寫紀錄 + 模型版本 + 訓練資料來源都須保留。第三是範圍限定；禁止 wildcard 委任，每次行動須對應具體 scope（如「為 X 服務的 Y 流程」）。第四是即時撤銷；無延遲撤銷，撤銷後立即停止所有相關行動。

L2 標準參考含 EU AI Act Art 13 transparency + Art 14 human oversight<sup>39</sup>、NIST AI RMF 1.0<sup>40</sup>、ISO/IEC 42001 AI Management Systems<sup>41</sup>。

### 5.3 L3 絕對禁止

L3 行動是公民意志的本質性表達。具體 use case 包含投票、政治連署、聽證發言、宣誓證詞、政治參選、選民登記、公投連署、罷免連署。這些行動的法理基礎含 UDHR Art 21（政治參與權）、ICCPR Art 25（投票權與被選舉權）、CRPD Art 29（失能者政治參與權）<sup>42</sup>。

### 5.4 七個灰色情境的邊界判定

灰色情境需要明確判定機制，避免 L2 與 L3 的邊界模糊。

**線上連署**（如 We the People、台灣公共政策網路參與平台、英國 e-petition）屬 L3。連署簽名是公民意志的表達，須親自完成。即使連署的法律效力較弱（如不直接觸發法案，僅提案政府回應），其本質仍是公民意志的表達<sup>43</sup>。

**公投連署**（台灣《公民投票法》、加州 ballot initiative、瑞士聯邦公投）屬 L3。公投連署涉及法律後果（觸發公投程序），須親自完成。AI 代理批量代為連署有偽造風險，違反《公民投票法》第 7-11 條對連署人「親自簽名」的要求<sup>44</sup>。

**政府滿意度調查**屬 L2。調查屬諮詢性質，無直接法律後果，AI 代理可協助但人類須最終確認結果。

**地方議會直播留言**屬 L2。留言屬非正式意見表達，可由 AI 協助起草但須人類發送並承擔內容責任。

**AI 諮詢服務**屬 L1。純資訊性質，無公民意志表達，可完全由 AI 代理執行。

**行政聽證旁聽**屬 L1。旁聽屬被動接收資訊，無表達，可由 AI 代理整理紀錄。

**行政聽證發言**屬 L3。發言屬意志表達，須親自完成。

### 5.5 三層分類的跨法域承載

L1 / L2 / L3 為「分析性類型學」（analytical typology），非單一法域法律術語的直接移植。普通法系（英美）對應 procedural / substantive / institutional due process 三層；大陸法系（特別是德國基本法傳統）對應 formelle / materielle Rechtsstaatlichkeit / Schutzpflicht 三層；東亞憲政（含台灣）採「制度的保障」傳統<sup>45</sup>。本文採三層分類時須明示為類型學工具，跨法域承載不同。

### 5.6 反論處理

第一個反論主張分類邊界在不同情境會不同；「線上連署 X」與「投票 Y」之間有大量灰色地帶。本文回應：5.4 節已明確處理 7 個灰色情境的邊界判定。雖然完全消除灰色地帶不可能，但提供具體案例的判定機制已是政策可操作的最小要求。

第二個反論主張 L2 條件允許可能退化為實質禁止（覆寫成本太高）或實質允許（覆寫機制不被使用）；L2 中間狀態不穩定。本文回應：四項條件的設計就是為了穩定 L2 中間狀態。條件 1 + 4（覆寫即時 + 撤銷即時）防止退化為實質禁止；條件 2 + 3（稽核 + scope 限定）防止退化為實質允許。

第三個反論主張分類過於僵化，未考慮跨情境組合（如「先用 AI 預填申訴 → 人類覆寫 → 線上聽證」這類混合流程）。本文回應：混合流程在每個階段適用對應層級；預填屬 L1、申訴提交屬 L2、聽證發言屬 L3。組合本身不改變各階段的分類。

第四個反論主張 L1 / L2 / L3 分類在不同法域有不同承載結構，不是普遍適用。本文已在 5.5 節明示這個分類為「分析性類型學」。

第五個反論主張有些「人格性表達」場景（如線上民主）本身就是用工具增強，劃定 L3 絕對禁止可能阻礙民主數位化。本文回應：L3 絕對禁止指的是「AI 代理完整執行」，不是「禁止任何 AI 工具」。L3 場景下使用者可以用 AI 工具輔助準備（如查詢候選人資料、整理發言重點），但執行必須由人類親自完成。

## 6. 失能者反例與 supported decision-making 對齊的雙重認證

第 3-5 章建立了「人格性表達」判準與 L1/L2/L3 三層分類；本章用失能者反例補強這個分類的合理性。

嚴重肢體障礙、視障、漸凍症患者、自閉譜系障礙者、學習障礙者等已長期依賴他人或輔具進行投票、聽證、簽名<sup>46</sup>。AI 代理可能比傳統人類助理更可信賴；；更難被誘導、有完整稽核紀錄、不受個人偏好影響。如果 L3 絕對禁止無例外，會對失能者構成歧視。

### 6.1 CRPD Art 29 + Art 12 + Art 9 三向法理

UN CRPD（Convention on the Rights of Persons with Disabilities, 2006）Article 29 規定締約國須確保失能者「能與其他人在平等基礎上有效並完整地參與政治和公共生活」，含「保障失能者透過自由選擇的人協助投票」的義務<sup>47</sup>。Article 12 規定失能者「在法律之前享有與其他人平等的承認」，且擁有「在生活各方面與其他人在平等基礎上的法律行為能力」<sup>48</sup>。Article 9 規定 accessibility 義務<sup>49</sup>。

CRPD Committee General Comment No. 1（2014）對 Art 12 的解釋特別重要。締約國須「廢除替代決策機制」（substituted decision-making），代之以「支援決策機制」（supported decision-making）。General Comment 明確指出，失能者擁有完整法律行為能力，不論其決策能力的程度（締約國須以支援決策機制 must replace 替代決策機制）。<sup>50</sup>

CRPD Committee General Comment No. 2（2014）對 Art 9 accessibility 的解釋強調，accessibility 不僅是物理環境，也包括資訊與通訊技術的可及性<sup>51</sup>。General Comment No. 7（2018）對 Art 4(3) 與 Art 33(3) 的解釋強調 disability advocacy 組織的參與權<sup>52</sup>。

### 6.2 雙重認證設計

intake 原版用「受認證的醫療資格判定」作為例外設計的核心。這個措辭與 CRPD Art 12 supported decision-making 原則直接衝突；醫療資格判定本質上是替代決策的延續。本文修訂為「supported decision-making 對齊的雙重認證」。

**認證 1（disability advocacy 主導的能力對應）**，由 disability advocacy 組織（不是醫療機構）主導，確認 AI 代理是 supported decision-making 工具（依 UN Special Rapporteur 2017 報告 A/HRC/34/58 對 supported decision-making 的論證）而非 substituted decision-making 工具。「能力對應」（capability mapping）的具體內容含：使用者的偏好結構是否能透過 AI 代理被穩定表達；AI 代理的決策是否能被使用者隨時撤銷與重新確認；AI 代理是否引入新的限制或操控可能性。

**認證 2（獨立技術 audit 的工程性質確認）**，由獨立技術 audit 確認 AI 代理符合三項條件。Transparency；決策過程可被使用者與 advocacy 組織理解。Explainability；每個具體行動可被追溯與解釋。Non-manipulation；不引入認知偏誤或情緒操控。

雙重認證設計同時回應兩個反論。第一個反論是 paternalism；「受認證」程序可能變成新型的監護式干預。本文回應如下。認證 1 由 disability advocacy 主導（非醫療機構），確保失能者自主權；認證 2 是工程性質審查而非能力判定，不評估「失能者是否有能力」而屬於評估「AI 工具是否符合 supported decision-making 條件」。第二個反論是分類滑坡；「受認證」可能變成虛假取得 L3 例外的後門。本文回應：雙重認證設立明確門檻（disability advocacy 認證 + 技術 audit），非失能者不可虛假取得。

### 6.3 失能者組織內部立場分歧

需要誠實處理失能者組織內部的立場分歧。部分組織主張「inclusion through technology」，認為 AI 代理是賦能工具，應廣泛應用於失能者公民行動。部分組織主張「inclusion through institutional change」，認為應廢除醫療判定與制度排除，而非靠技術補救。第三種立場主張「混合策略」，認為技術賦能與制度改革並行。

本文不假設單一 disability advocacy 立場。雙重認證的「disability advocacy 主導」應理解為「相關失能者組織之間的協商機制」，而非單一組織的權威判定。

### 6.4 ECtHR 失能者法律行為能力判例

ECtHR 在 *Alajos Kiss v. Hungary* (38832/06, 2010) 判決中認定，匈牙利憲法對「監護下失能者」的全面投票禁令違反 ECHR Protocol 1 Article 3<sup>53</sup>。法院強調投票權的個別評估原則；不能以「失能」為由全面剝奪。*Stanev v. Bulgaria* (36760/06, 2012) 進一步確立失能者法律行為能力的個別評估原則<sup>54</sup>。這兩個判例為 supported decision-making 對齊的雙重認證提供了法律先例支撐；例外設計必須是個別評估，不能是群體性禁令。

## 7. 委任機制四件式與責任分配三層

第 5 章建立了 L1/L2/L3 三層分類；第 6 章用失能者反例補強；本章合成 L2 條件允許的具體委任機制與責任分配模型。

### 7.1 委任機制四件式

L2 條件允許的「條件」具體化為四件式：

**Scope（範圍限定）**，每次委任須對應具體 use case（如「為 X 服務的 Y 流程」），禁止 wildcard 委任。標準起點為 OpenID Foundation GAS draft 2024 §5（scope claim）<sup>55</sup>。實作不確定性在於灰色情境的 scope 邊界判定；「申訴 + 補件 + 結案通知」是否屬同一 scope。

**Revocation（即時撤銷）**，使用者可隨時撤銷委任，無延遲。撤銷後 AI 代理立即停止所有相關行動。標準起點為 W3C DID Core 1.0 §5.2.6（verification methods + key revocation）<sup>56</sup> 與 EU EUDI Wallet ARF 2024 revocation registry<sup>57</sup>。實作不確定性在於「即時」的程度；毫秒、秒、還是分鐘？

**Audit（完整稽核）**，每個行動須有時間戳 + 行動內容 + 覆寫紀錄 + 模型版本 + 訓練資料來源。標準起點為 NIST AI RMF 1.0、ISO/IEC 42001、EU AI Act Art 12（automated logging）<sup>58</sup>。實作不確定性在於隱私保護與稽核完整性的張力；稽核紀錄越完整，使用者隱私風險越大。

**Override（人類覆寫）**，使用者隨時可覆寫 AI 代理的決策，無時間延遲，覆寫不需理由。標準起點為 EU AI Act Art 14（human oversight）<sup>59</sup> 與 Microsoft Responsible AI Standard 2023<sup>60</sup>。實作不確定性在於覆寫的「即時」與「可實踐」程度；在大規模 AI 自動化場景，使用者無法持續監督每個決策。

### 7.2 責任分配三層

責任歸屬模型「連帶責任 + 預設使用者保護」採三層分配。

**Tier 1（模型提供者 / wallet 廠商）承擔嚴格責任 + 強制責任保險**。法理依據含 EU AI Liability Directive 提案 2022（COM(2022) 496，已於 2025-02 由 EU Commission 撤回）+ Directive (EU) 2024/2853 修訂後的 EU Product Liability Directive（部分取代 AI Liability Directive 功能）<sup>61</sup>。台灣依據含《消費者保護法》第 7-10 條商品責任 + 《電子簽章法》信賴保護<sup>62</sup>。日本依據含 1995 年《製造物責任法》<sup>63</sup>。Tier 1 廠商承擔嚴格責任的論據如下，其為基礎設施提供者，最有能力預防風險，且最能承擔保險成本。

**Tier 2（開發者 / 整合商）承擔過失責任 + 舉證倒置**。法理依據含 Crootof 2019 *The Internet of Torts*<sup>64</sup>、Selbst 2020 *Negligence and AI's Human Users*<sup>65</sup>、CJEU 對 *Bilbao Vizcaya Argentaria* 銀行責任判決的延伸。舉證倒置的設計使受害公民不需證明開發者過失，由開發者證明已盡注意義務。

**Tier 3（委任者 / 使用者）承擔限縮責任**。僅在「明知 AI 越界仍委任」時承擔。法理依據含 US Restatement (Third) of Torts: Products Liability §2<sup>66</sup>、Lemley & Casey 2019 *Remedies for Robots*<sup>67</sup>。

### 7.3 三項 caveat

第一個 caveat：責任比例（嚴格 vs 過失 vs 限縮）的具體數字無實證來源。本文提案的三層分配（如 Tier 1 60% / Tier 2 30% / Tier 3 10%）為政策建議數，須立法協商 + 保險業精算 + 跨境爭議統計支撐<sup>68</sup>。

第二個 caveat：強制責任保險的成本可能傳導為 AI agent 服務漲價，反向排除弱勢公民；第 6 章 supported decision-making 對齊的雙重認證可能因此被破壞。本文建議將「失能者 AI 代理服務」列為強制保險的政府補助項目，避免單一政策削弱另一政策。

第三個 caveat：「連帶責任」對中小開發者可能造成退出市場壓力，導致市場集中於少數大廠商。本文借用 article 14（cross-jurisdictional-redress-gap）的廠商三層分類；Tier 3 中介廠商（純通訊轉送角色）免責，避免市場集中<sup>69</sup>。

### 7.4 反論處理

第一個反論主張責任比例的具體數字無實證來源，整個三層分配是空中樓閣。本文回應：caveat 1 已明示這個限制。三層分配的「結構」是規範必然（依風險預防能力分配責任），具體比例則須立法協商。

第二個反論主張強制責任保險的成本傳導會破壞 inclusion 條件。本文回應：caveat 2 已提出「失能者 AI 代理服務」的政府補助方案。

第三個反論主張連帶責任會造成中小開發者退出市場。本文回應：caveat 3 已透過 Tier 3 免責設計處理。

第四個反論主張「預設使用者保護」可能造成道德風險；使用者放鬆對 AI 代理的監督。本文回應：預設使用者保護的範圍僅限於「AI 黑盒失誤」（如模型訓練偏誤、scope 邊界誤判），並未涵蓋「使用者誤用」（如明知違規仍委任）。Tier 3 限縮責任的設計已內建這個區分。

第五個反論主張四件式委任機制在實作中不容易同時滿足；特別是 audit 與 revocation 的時間性張力（即時撤銷 vs 完整稽核保留）。本文回應：兩者可同時滿足；撤銷指「停止未來行動」，稽核指「保留過去紀錄」，兩者不衝突。

第六個反論主張人類即時覆寫權在大規模 AI 自動化場景不切實際；使用者無法持續監督。本文回應：覆寫權的設計重點並非「持續監督」（不可能）；其核心為「能在必要時即時覆寫」（覆寫權的存在本身即是規範約束）。Selbst 2020 對「meaningful human review」的論證直接適用<sup>70</sup>。

第七個反論是 cyber-libertarian 立場；自願性合約 + 市場監督就足夠，不需強制連帶責任。本文回應：cyber-libertarian 立場低估了 AI 代理的「演算法支配」風險（Pettit 共和主義論證，見第 3 章），且忽略 article 15 已論證的 civic proof inclusion rights 對國家義務的要求。市場主導無法滿足 inclusion 條件。

## 8. 案例與反事實壓力測試

第 7 章合成的政策路徑須通過具體案例與反事實的壓力測試。

### 8.1 2024 美國 Alabama 選民登記 AI 案

2024 年美國 Alabama 州出現 AI 自動代填選民登記表格的爭議事件<sup>71</sup>。AI 工具被部分公民團體用來協助選民登記，但被州政府質疑為「假帳號生成」。對應分類為 L3（選民登記）。法理基礎為 US NVRA 1993 + Voting Rights Act Section 208。政策合成的回應為：選民登記須親自完成，AI 僅可承擔 L1 資訊查詢功能（如查詢登記資格、查詢登記截止日期）。如果使用 AI 工具預填表格但由公民本人最終提交簽名，可歸入 L2，須含 4 件式委任機制。

### 8.2 2024 Michigan 政府滿意度調查 AI 案

2024 年美國 Michigan 州出現 AI 代理批量提交政府滿意度調查的事件<sup>72</sup>。對應分類為 L2（諮詢性質）。法理基礎為美國各州行政法。政策合成的回應為：AI 可協助但人類須最終確認結果。如未含人類確認流程，視為 L2 違規，須適用責任分配三層模型。

### 8.3 台灣公投連署系統假想 CF1

台灣《公民投票法》第 7-11 條規定公投連署人須親自簽名。若台灣公投連署系統允許「AI 代理為使用者預填連署資料 + 使用者數位簽章確認」，這個流程屬 L2 還是 L3？依本文判準，數位簽章確認屬於「人類最終親自完成連署簽名」，符合《公投法》親自要件，可歸入 L2。但 4 件式委任機制必須完整；特別是 scope 限定（每次連署須對應具體公投提案）+ audit（完整稽核避免偽冒）。

### 8.4 地方議會線上聽證 AI 混合流程假想 CF2

若一個地方議會的線上聽證採「AI 代理代為提出書面意見 + 委任者線上口頭確認」混合流程，應如何分類？依本文判準，行政聽證發言屬 L3，但「線上口頭確認」是否足以構成 L2 的人類覆寫權？關鍵在於確認的「實質性」；如果口頭確認僅是 1 秒鐘的「同意」按鈕，不足以構成有意義的覆寫；如果口頭確認包含具體論點重述與修改機會，可歸入 L2。

### 8.5 漸凍症患者眼動追蹤 + AI 公投連署假想 CF3

若一位漸凍症患者透過眼動追蹤 + AI 代理代為填寫公投連署，當 AI 因模型訓練偏誤誤解使用者意圖（例如對「同意」與「不同意」誤判），責任如何分配？依第 6 章 supported decision-making 對齊的雙重認證 + 第 7 章責任分配三層，此情境須通過雙重認證才能進入 L3 例外。若已通過認證但仍發生誤判，責任主要由 Tier 1（模型提供者）承擔嚴格責任 + 強制保險賠付；Tier 2（開發者 / 整合商）承擔過失責任 + 舉證倒置；委任者（漸凍症患者）承擔限縮責任，僅在明知認證失效仍使用時承擔。

### 8.6 5000 件 AI 公投連署偽造假想 CF4

若一個 AI 代理在台灣公投連署中為 5000 個使用者完成連署，事後發現其中 200 件涉及偽造（AI 自編個資 + 違反 scope 限制），依本檔責任歸屬模型如何分配？此屬於 L3 違反 + 規模化偽冒。依《公民投票法》+ 《刑法》偽造文書，Tier 1（模型提供者 / wallet 廠商）承擔嚴格責任 + 強制保險賠付受害公民；Tier 2（開發者 / 整合商）承擔過失責任；Tier 3（委任者）依「明知 AI 越界仍委任」原則，若無明知則限縮責任。中央選舉委員會須宣告該 200 件連署無效，並可能觸發整體連署有效性的審查。

### 8.7 EU EUDI Wallet 廠商退出市場假想 CF5

若 EU EUDI Wallet 在 2027 年強制納入 AI agent 委任機制，但保加利亞或希臘的 wallet provider 因強制責任保險成本過高選擇退出市場，造成大量公民失去 AI 代理服務，EU Commission 應如何處理？依第 7 章 caveat 3 + article 14 廠商三層分類，可採三條路徑。第一是分層免責；Tier 3 中介廠商免責；第二是政府補助；對中小廠商提供保險補貼；第三是市場整合；透過 EU 共同基金集中承擔風險。EU Commission infringement procedure 是政治可行性最高的執行機制。

### 8.8 假想 CF6 失智長者 AI 代為公投連署

若失智長者由家屬代行使用 AI 代理完成公投連署，這個情境如何分類？依第 6 章雙重認證，失智長者連署本質不可被代行；連署是公民意志的本質性表達，AI 代理代行不符合 supported decision-making 對齊（CRPD General Comment No. 1 已論證失智者保有完整法律行為能力）。家屬代行屬 substituted decision-making，違反 CRPD Art 12。此情境應依《公民投票法》認定為無效連署。

## 9. 與博論章節的接合

本文是博論 Ch9 的核心，特別涉及 9.2 段落「AI 代理在公民行動的制度極限」。

對 Ch9.1 既有 article 2026-04-01-agentic-id-governance（enterprise / institutional 路徑）的接合：本文是其 civic 補集。Enterprise context 的關鍵價值是「商業效率 + 法人責任」，civic context 的關鍵價值是「民主正當性 + 微觀真實性」。兩者不可直接外推。本文「委任機制四件式」與既有 article 的「enterprise agent identity 五件式」（identity、scope、audit、accountability、interoperability）有結構相似性，但 civic 補集多了「微觀真實性」判準，少了「商業效率」考量。

對 Ch9.3 段落「證據鏈與 civic receipts」的接合。本文「委任機制四件式」中的 audit 條件（完整稽核紀錄保留）會餵給 Ch9.3 + prompt 17（civic-receipts-provenance）的後續研究。具體問題如下。稽核紀錄如何在 civic context 保存？保存期限多長？由誰保管？是否須與 wallet 廠商分離？

對博論 Ch10 平台化呈現層的接合：本文 Tier 1 廠商嚴格責任 + 強制保險的論點，與 Ch10 wallet / OS / browser as gatekeeper 直接連動。Tier 1 廠商被認定為 essential facility 是 prompt 11（wallet-as-essential-facility）的核心，本文補充其在 AI agent 場景的具體責任結構。

對博論 Ch14 政策議程章的接合：本文 supported decision-making 對齊的雙重認證直接餵給 Ch14.4 civic-proof inclusion rights（既有 article 2026-05-10），補充失能者在 L3 例外情境下的具體實作。

與 article 序列的橫向連動。與 article 01（accountability without identification）的接合在於 accountable pseudonymity 對 civic AI delegation 場景的特殊應用；當 AI agent 代為執行 L2 行動時，委任者的問責結構如何維持。與 article 14（cross-jurisdictional-redress-gap）的接合在於跨境 AI agent 失誤的責任分配；本文 Tier 1 嚴格責任 + 強制保險的設計，在跨境場景下須對應 article 14 的「規範遞延需雙邊同意」條件。與 article 15（civic-proof-inclusion-rights）的接合在於失能者無障礙例外與 wallet 三重預設（ownership / identification / key custody）的協調；supported decision-making 對齊的雙重認證是 multi-tenant + delegated key custody 的具體實作。與 prompt 17（civic-receipts-provenance）的接合在於四件式中 audit 條件的延伸研究。

## 10. 誠實邊界與開放問題

本文的論證需要明示邊界。

論證強度差異。演繹（第 3 章，強，但「微觀真實性」三項條件的整合架構屬本文合成）、類比（第 4 章，強，但 AI 代理與傳統 proxy voting 的相似性須兩軸論證才成立）、溯因（第 5 章，中強，但跨法域承載不同）、反例（第 6 章，中，但「雙重認證」具體實作仍待 disability advocacy 組織共識）、政策合成（第 7 章，建議性，責任比例與保險成本傳導為政策建議數）。

時間性。OpenID GAS draft 仍在演進；EU AI Liability Directive 2022 (COM(2022) 496) 已於 2025-02 撤回；其部分功能由 Directive (EU) 2024/2853 (修訂後 Product Liability Directive) 取代；CoE Framework Convention on AI 2024 各國批准狀態不一；台灣國科會 AI 行動計畫 2.0 對 civic context 的具體規範未明。這些會在未來 2-3 年內改變本文的證據基礎。

地理性。本文證據以歐盟、美國、英國、德國、台灣、日本為主，對拉丁美洲、非洲、東南亞（除新加坡）、中東的覆蓋有限。

主要開放問題。

(Q1) AI 代理的「無障礙例外」應由誰判定資格？disability advocacy 組織內部如何形成共識？

(Q2) 訓練 AI 代理使其「拒絕」越界行動是技術可行還是政策強制？refusal training 的可審計性？

(Q3) L2 與 L3 邊界在「線上連署 vs 公投連署」的具體判定機制？

(Q4) 人類覆寫權在大規模 AI 自動化場景的可實踐性？

(Q5) Tier 1 / Tier 2 / Tier 3 責任比例的實證基礎？

(Q6) 強制責任保險的成本傳導如何避免反向排除弱勢？

(Q7) 中小開發者退出市場壓力與分層免責設計的協調？

(Q8) 「supported decision-making 對齊的雙重認證」具體實作（誰主導 disability advocacy 認證？誰主導技術 audit？）？

(Q9) Floridi 2023 augmentation vs replacement 區分在 L2 場景的工程化邊界？

(Q10) 演算法規模化規範必要性如何在不同法域被立法承認？

訪談需求含 OpenID Foundation GAS Working Group 主席、NIST AI Agent concept paper 主筆、EU Commission DG CONNECT AI Unit、CRPD Committee 成員、失能者組織（台灣失智症協會、漸凍人協會）、UN Special Rapporteur on freedom of opinion and expression、Lloyd's of London 承保部門、主要 AI 廠商法務（OpenAI、Anthropic、Google DeepMind、Microsoft）、台灣中央選舉委員會。

## 11. 條件性學術結論

本文的核心命題為，AI 代理在公民行動中的角色須分三層處理。L1 完全允許（資訊查詢、文件預填、簡單登入）、L2 條件允許（申訴提交、行政程序協助，須四件式委任機制 scope / revocation / audit / override）、L3 絕對禁止（投票、政治連署、聽證發言、宣誓證詞、政治參選、選民登記、公投連署、罷免連署）。三層分類的判準是「微觀真實性」（micro-authenticity），由三項條件構成；Arendt plurality + Arendt natality + Habermas Verständigungsorientierung。即使在允許 proxy voting 的法域，演算法規模化風險使 AI 代理執行 L3 行動仍應被禁止。失能者保留 supported decision-making 對齊的雙重認證例外，含 disability advocacy 主導的能力對應 + 獨立技術 audit。責任歸屬採三層分配（Tier 1 嚴格責任 + 強制保險、Tier 2 過失責任 + 舉證倒置、Tier 3 限縮責任）。

這個結論是條件性的。其成立依賴於：(i) 各國立法承認「微觀真實性」判準的規範力道；(ii) AI 代理技術不出現「無法被工程驗證 audit」的根本變動；(iii) disability advocacy 組織能就 supported decision-making 對齊的雙重認證形成可運作的共識；(iv) wallet 廠商與模型提供者願意接受 Tier 1 嚴格責任 + 強制保險的法律框架。任一假設失敗都會大幅修改政策路徑。

對博論的貢獻是建立 Ch9 核心，補完既有 article 2026-04-01-agentic-id-governance 的 civic 補集，並為 Ch9.3（civic receipts）+ Ch10（platform layer）+ Ch14（policy agenda）三個章節提供 AI agent 維度的規範基礎。

對民主理論的貢獻是把「微觀真實性」概念引入民主正當性論述。Estlund 程序合理性 + Gutmann-Thompson 審議民主 + Pettit 共和主義 + Habermas 溝通行動的整合，建立一個可在 AI agent 場景下運作的民主正當性分析架構。

對工程實作的指引是 wallet 廠商與模型提供者需在系統設計階段就考慮 L1 / L2 / L3 三層分類，特別是 L2 條件允許的四件式委任機制（scope / revocation / audit / override）必須在 OpenID GAS、NIST AI Agent、W3C AI agent identity 三大標準中被同步實現。

對台灣讀者的關鍵警示是現行法律框架對 AI 代理在公民行動中的角色尚無明文規範。《公職人員選舉罷免法》第 18 條與《公民投票法》第 7-11 條雖然要求親自，但對 AI 代理的具體界定仍待立法。中央選舉委員會、數位發展部、衛福部三方應協調建立明確的 AI 代理委任規範，特別是對失能者的雙重認證機制。

## 參考資料

1. OpenID Foundation Generalized Agentic Sub-protocol (GAS) draft 2024-2025. 來源等級 A。
2. NIST AI Agent concept paper 2024 + NIST AI Risk Management Framework 1.0 (2023) + NIST Generative AI Profile 2024. 來源等級 A。
3. W3C AI agent identity discussion 2024 + W3C Verifiable Credentials Working Group reports 2024. 來源等級 A。
4. Regulation (EU) 2024/1689 (EU AI Act), OJ L, 12.7.2024，特別是 Articles 5, 6, 13, 14, 26-29. 來源等級 A。
5. EU EUDI Wallet Architecture Reference Framework 2024. 來源等級 A。
6. 既有 article 2026-04-01-agentic-id-governance（enterprise / institutional AI agent governance）. 來源等級 A（內部文件）。
7. 「微觀真實性」（micro-authenticity）三項條件為本文合成定義，借自 Arendt 1958 *The Human Condition* §24-28 + Habermas 1981 *Theorie des kommunikativen Handelns* Vol I §III. 來源等級 A（學理合成）。
8. UN CRPD (2006), Articles 9, 12, 29 + General Comment No. 1 (2014) Equal recognition before the law. 來源等級 A。
9. Arendt, H. (1958). *The Human Condition*. University of Chicago Press, §24-28（action 含 speech and action）+ §4（labor / work / action）. 來源等級 A。
10. Arendt, H. (1958), 同來源 #9，§24 natality 與 action 的不可預測性。
11. Habermas, J. (1981). *Theorie des kommunikativen Handelns* (兩冊). Suhrkamp / Beacon Press, Vol I §III. 來源等級 A。
12. Estlund, D. (2008). *Democratic Authority*. Princeton University Press, Ch 6-8 程序合理性論證. 來源等級 A。
13. Arendt, H. (1958), 同來源 #9，labor / work / action 三層拆解。
14. Arendt, H. (1958), 同來源 #9，§32 speech and action 對「在他人面前顯現」的論證。
15. Habermas, J. (1981), 同來源 #11，communicative action vs strategic action 區分。
16. Habermas, J. (1992 Suhrkamp / 1996 MIT trans). *Faktizität und Geltung* / *Between Facts and Norms*. MIT Press, §3-4 discourse theory of democracy. 來源等級 A。
17. Pettit, P. (1997). *Republicanism: A Theory of Freedom and Government*. Oxford University Press, Ch 2-3 + Ch 7 freedom as non-domination + civic virtue. 來源等級 A。
18. Gutmann, A. & Thompson, D. (1996). *Democracy and Disagreement*. Belknap Press, reciprocity 原則章節. 來源等級 A。
19. Young, I. M. (2000). *Inclusion and Democracy*. Oxford University Press. 來源等級 A。
20. Floridi, L. (2023). *The Ethics of Artificial Intelligence*. Oxford University Press, augmentation vs replacement 論證. 來源等級 A。
21. Posner, E. & Vermeule, A. (2010). *The Executive Unbound*. Oxford University Press. 來源等級 A。
22. List, C. & Pettit, P. (2011). *Group Agency*. Oxford University Press, Ch 1-2 + Ch 4 collective intentionality. 來源等級 A。
23. Lessig, L. (1999). *Code and Other Laws of Cyberspace*. Basic Books. 來源等級 A。
24. Estlund, D. (2008), 同來源 #12。
25. 德國 Bundeswahlgesetz §14（投票自由與親自原則）+ Bundeswahlordnung + 聯邦憲法法院 2 BvC 4/13 (2014) 投票自由判決. 來源等級 A。
26. 台灣《公職人員選舉罷免法》第 18 條 + 《總統副總統選舉罷免法》同條款. 來源等級 A。
27. 台灣大法官釋字第 468 號（公職人員候選人連署制度）+ 釋字第 290 號（公職候選人資格限制）. 來源等級 A。
28. 日本《公職選挙法》第 44 条（投票所での投票）+ 第 49 条（不在者投票）+ 最高裁判所 2005-09-14 大法廷判決（在外日本人投票權）. 來源等級 A。
29. US Voting Rights Act of 1965, Section 208（disability assistance）. 來源等級 A。
30. *Crawford v. Marion County Election Board* 553 U.S. 181 (2008). 來源等級 A。
31. UK Representation of the People Act 1983 + 1985（海外公民、軍人配偶 proxy voting）+ 2000 修正案. 來源等級 A。
32. Birch, S. (2011). *Electoral Malpractice*. Oxford University Press, 選舉舞弊規模化風險章節. 來源等級 A。
33. Norris, P. (2014). *Why Electoral Integrity Matters*. Cambridge University Press. 來源等級 A。
34. OpenID Foundation GAS draft 2024，同來源 #1，§5（scope claim）.
35. NIST AI Agent concept paper 2024，同來源 #2。
36. W3C AI agent identity discussion 2024，同來源 #3。
37. EU EUDI Wallet ARF 2024，同來源 #5，AI agent multi-tenant 規格章節。
38. Microsoft Responsible AI Standard 2023 + Anthropic Responsible Scaling Policy 2024 + OpenAI Model Spec 2024 + Google DeepMind Responsible AI Practices 2024. 來源等級 A/B。
39. EU AI Act，同來源 #4，Article 13 transparency + Article 14 human oversight。
40. NIST AI RMF 1.0 (2023)，同來源 #2。
41. ISO/IEC 42001 (AI Management Systems) 2023. 來源等級 A。
42. UDHR (1948) Art 21 + ICCPR (1966) Art 25 + UN CRPD (2006) Art 29. 來源等級 A。
43. We the People（已下線）+ 台灣公共政策網路參與平台（join.gov.tw）+ UK e-petition 系統官方文件. 來源等級 A/B。
44. 台灣《公民投票法》第 7-11 條 + 中央選舉委員會公投連署資料管理規定. 來源等級 A。
45. 普通法系 / 大陸法系 / 東亞憲政三層分類的比較憲法學文獻含 Mauro Cappelletti、Bruce Ackerman 等的比較憲法論述. 來源等級 A。
46. Schur, L. & Kruse, D. (2014). Disability and Election Policies and Practices. In *The Oxford Handbook of American Elections and Political Behavior* + Schur, L., et al. (2017). Disability and Voter Turnout in the 2016 Elections. *American Journal of Public Health*. 來源等級 A。
47. UN CRPD (2006), Article 29 政治參與權. 來源等級 A。
48. UN CRPD (2006), Article 12 法律之前的平等承認 + 完整法律行為能力. 來源等級 A。
49. UN CRPD (2006), Article 9 Accessibility. 來源等級 A。
50. CRPD Committee General Comment No. 1 (2014) on Equal recognition before the law (Article 12). 來源等級 A。
51. CRPD Committee General Comment No. 2 (2014) on Accessibility (Article 9). 來源等級 A。
52. CRPD Committee General Comment No. 7 (2018) on participation of persons with disabilities. 來源等級 A。
53. ECtHR *Alajos Kiss v. Hungary* (38832/06, 2010). 來源等級 A。
54. ECtHR *Stanev v. Bulgaria* (36760/06, 2012). 來源等級 A。
55. OpenID Foundation GAS draft 2024，同來源 #1，§5 scope claim。
56. W3C DID Core 1.0 §5.2.6 verification methods + key revocation. 來源等級 A。
57. EU EUDI Wallet ARF 2024 revocation registry，同來源 #5。
58. NIST AI RMF 1.0，同來源 #2 + ISO/IEC 42001，同來源 #41 + EU AI Act Art 12（automated logging），同來源 #4。
59. EU AI Act Art 14（human oversight），同來源 #4。
60. Microsoft Responsible AI Standard 2023，同來源 #38。
61. EU AI Liability Directive proposal 2022 (COM(2022) 496, withdrawn 2025-02) + Directive (EU) 2024/2853 (revised Product Liability Directive, partial replacement). 來源等級 A。
62. 台灣《消費者保護法》第 7-10 條 + 《電子簽章法》全文. 來源等級 A。
63. 日本《製造物責任法》（PL 法，1995）. 來源等級 A。
64. Crootof, R. (2019). The Internet of Torts. *Duke Law Journal* 69(3). 來源等級 A。
65. Selbst, A. (2020). Negligence and AI's Human Users. *Boston University Law Review* 100(4). 來源等級 A。
66. US Restatement (Third) of Torts: Products Liability §2 (1998). 來源等級 A。
67. Lemley, M. & Casey, B. (2019). Remedies for Robots. *University of Chicago Law Review* 86(5). 來源等級 A。
68. 責任比例（Tier 1 60% / Tier 2 30% / Tier 3 10%）為政策建議數，須保險業精算 + 跨境爭議統計支撐. 來源等級 A（政策建議）。
69. 既有 article 2026-05-09-cross-jurisdictional-redress-gap，廠商三層分類 + Tier 1/2/3 設計. 來源等級 A（內部文件）。
70. Selbst, A. (2020)，同來源 #65，"meaningful human review" 論證。
71. 2024 美國 Alabama 選民登記 AI 自動代填爭議事件，新聞調查與司法部初步調查報告. 來源等級 B（待文獻補強具體判決或結案紀錄）。
72. 2024 美國 Michigan 政府滿意度調查 AI 批量提交事件，新聞報導與州政府處理紀錄. 來源等級 B（待文獻補強）。
