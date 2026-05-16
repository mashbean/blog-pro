---
title: "AI 代理在公民行動的制度極限：委任五件結構與公民證明三件式的合取必要條件"
description: "把 Tomasev (2026) 委任五件（authority transfer / responsibility transfer / accountability allocation / boundary setting / trust calibration，呈 2+3 結構）與 civic proof 三件式 ⟨𝒩, ℱ, ℬ⟩ 做合取交叉，得到 5×3 = 15 cell 必要條件矩陣，其中 9 cell 條件可滿足、4 cell 機率退化、2 cell 結構不可滿足（RT-ℬ ✗ 與 AA-ℬ ✗）。據此把公民行動劃分為可委任、條件可委任、結構不可委任三區帶（θ₁ ≈ 0.2、θ₂ ≈ 0.7），並區分常駐型結構不可委任（由 ℬ 哲學基礎決定）與情境型結構不可委任（由 𝒩、ℱ 共同失能決定）。CRPD Art 12 General Comment No. 1 §26-29 廢除替代決策的硬性要求是條件可委任區的規範性硬約束，非法理依據；supported 與 substituted 的可區分性必須在事前協商層、事後可逆層、決策證據鏈層三層同步建立；EUDI Wallet ARF 提供的是 multi-profile 而非 multi-tenant delegated key custody；CRPD 透過 ICCPR Art 26 + ICESCR Art 9 回流為對所有 wallet 使用者的普遍工程義務。跨法域責任真空細分為道德緩衝區型、演算法不透明型、跨法域擴散型三型，A14 第 5 類缺口拆為 Q10a（authority transfer 密碼學歸責）與 Q10b（accountability allocation 跨境多方歸責），FTLA-Agent 四層治理（G_industry / G_state / G_recognition / G_oversight）在 2026 年呈現非對稱厚度，時間階段化為 5 / 5-10 / 10-15 年三段，五方責任比例建議為 25 / 25 / 15 / 25 / 10。"
pubDate: 2026-05-10
tags: ["civic-proof", "AI-agent", "delegation", "Tomasev-five-elements", "civic-proof-conjunction-matrix", "Arendt", "Habermas", "Pettit", "moral-crumple-zone", "FTLA-Agent", "CRPD-Article-12", "supported-decision-making", "multi-tenant", "EUDI-Wallet", "cross-jurisdictional-liability"]
category: "數位身分與民主理論"
aiModel: "Claude Opus 4.7"
aiPrompt: "當 AI 代理介入公民行動（投票、結社、請願、資料近用、跨境權利主張、福利請領），Tomasev 委任五件 × civic proof 三件式 ⟨𝒩, ℱ, ℬ⟩ 的合取必要條件為何？哪些公民行動落入結構不可委任區？跨法域、共用裝置、行為失能三類典型情境的概率退化邊界與分層治理回應為何？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-10-civic-ai-agent-delegation-limits"
aiGeneratedDate: 2026-05-10
humanReviewed: false
lang: "zh-TW"
---

## 1. 導論

歐盟在 2024 年通過 Regulation (EU) 2024/1183（eIDAS 2.0），把數位身分皮夾從歐盟層級的提案推進到成員國強制建置的義務<sup>1</sup>；同年通過 Regulation (EU) 2024/1689（AI Act），對高風險 AI 系統建立分級監管<sup>2</sup>。同一時間段內，Anthropic 於 2025 年發布 Claude Computer Use system card，顯示開放任務下大型語言模型代理（LLM-agent）會以約 0.15 機率向使用者請求擴大權限<sup>3</sup>；OpenAI 發布 Operator browser-using agent；Google DeepMind 發布 Gemini Astra capability card<sup>4</sup>。WEF 與 Capgemini 在 2025 年的調查指出，82% 的高階主管計畫在未來 18 個月內採用代理人式 AI 部署到跨產業跨地理場景<sup>5</sup>。Tomasev 等人 2026 年 2 月在 arXiv 發表 *Intelligent AI Delegation*（arXiv:2602.11865），把 AI 委任分解為五件要素：authority transfer（權威移轉）、responsibility transfer（責任移轉）、accountability allocation（責任歸屬分配）、boundary setting（邊界設定）、trust calibration（信賴校準）<sup>6</sup>。

這些事件相疊，形塑出一個具體的問題情境。當 AI 代理被內建到 wallet 與公民行動的執行層，當投票、結社、請願、福利請領、資料近用、跨境權利主張的若干環節由代理執行，傳統委任理論（Pitkin 1967 的 trustee/delegate 二分、Jensen-Meckling 1976 的 principal-agent 模型、Eisenhardt 1989 的代理理論）的概念骨架是否仍然適用？哪些公民行動可以被委任給 AI 代理執行？哪些可以但需附三道防線？哪些屬於結構性不可委任，無論技術成熟度如何皆不該被代理？跨法域、共用裝置、行為失能三類典型情境下，這些劃界又會如何漂移？

本文承接 civic-proof series 的三條已建立論證線。系列第 8 篇（A8）建立 FTLA 四層治理框架（G_industry / G_state / G_recognition / G_oversight），分析跨國身分基礎設施治理結構（系列內部）<sup>7</sup>。第 14 篇（A14）盤點跨法域救濟空白的四類缺口（verifier 拒絕 / issuer 撤銷錯誤 / 廠商失效 / 跨境隱私洩漏），並把 LLM-agent 自動代簽憑證列為第 5 類候選缺口（Q10）（系列內部）<sup>8</sup>。第 15 篇（A15）§6.2 揭示 wallet 工程的個人擁有 / 個人識別 / 個人私鑰三重預設會把委任代理場景中的 supported decision 退化為 substituted decision（系列內部）<sup>9</sup>。本文是第 16 篇（F1），承擔三條既有線的合流——把 Tomasev 五件 × civic proof 三件式做合取交叉，定位三區帶劃界，補完 A14 第 5 類缺口的拆分，並回應 A15 留下的 wallet 三重預設問題。

本文的核心命題包含三個論證升級。第一，Tomasev 五件具備層級結構的「2+3 構造」——authority transfer 與 responsibility transfer 屬「形式委任要件」（先決條件），accountability allocation、boundary setting、trust calibration 屬「動態治理要件」（運行條件）；civic proof 三件式 ⟨𝒩, ℱ, ℬ⟩ 中的 ℬ 哲學基礎是 Arendt plurality + Habermas communicative validity + Pettit contestability 三家會合的複合下界。兩者合取得到 5×3 = 15 cell 的必要條件矩陣，其中 9 cell 為「條件可滿足」、4 cell 為「機率退化型」、2 cell 為「結構不可滿足」（RT-ℬ ✗ 與 AA-ℬ ✗）。三區帶劃界判準依賴四個可獨立量測的量（場域政治性 F_political、speech-act 的 first-personal 性、不可逆性、provenance 完整性）與兩個閾值 θ₁ ≈ 0.2、θ₂ ≈ 0.7。

第二，CRPD Art 12 General Comment No. 1（2014）§26-29 對「廢除一切替代決策制度」的硬性要求<sup>10</sup>，是條件可委任區的規範性硬約束（不是法理依據）。supported 與 substituted 在行為層幾乎不可區分，可區分性必須在「事前協商層 + 事後可逆層 + 決策證據鏈層」三層同步建立。EUDI Wallet ARF（2025-12 Cooperation Group iteration；引用以 v1.4-1.5 為穩定快照）提供的是 multi-profile（同一 holder 的多檔案）而非 multi-tenant delegated key custody（多獨立法律主體並存且各自保有可獨立行使密鑰能力與可獨立撤回同意能力）<sup>11</sup>；POTENTIAL UC6、NOBID、DC4EU、EWC 四個 large-scale pilot 的 2025 mid-term reports 均承認 holder-side delegated key custody 未實作<sup>12</sup>。CRPD 透過 ICCPR Art 26 + ICESCR Art 9 從「特殊群體層」回流為「對所有 wallet 使用者的普遍工程義務」<sup>13</sup>。

第三，AI 代理跨法域行動的責任真空細分為三型——道德緩衝區型（最近的人吸收）、演算法不透明型(連最近的人都無法歸因)、跨法域擴散型（責任在多個法域之間 ping-pong）；三型在 LLM-agent wallet 場景同時疊加。A14 提出的第 5 類缺口應拆為兩個次類型：Q10a「authority transfer 的密碼學歸責缺口」（holder 親簽 vs agent 代簽的密碼學區分；prompt injection 場景）、Q10b「accountability allocation 的跨境多方歸責缺口」（issuer / verifier / wallet provider / agent provider / model provider 五方在跨境場景的責任比例）。FTLA-Agent 在 2026 年呈現非對稱厚度——G_industry 與 G_oversight 厚、G_state 弱、G_recognition 最弱；時間階段化為 G_industry/G_oversight 5 年內可行、G_state 5-10 年、G_recognition 10-15 年（OECD 內），OECD 外覆蓋空白將持續存在。

論證安排如下。第 2 章釐清 civic proof 三件式、Tomasev 五件、以及 W1 規範下傳橋接的概念基礎。第 3 章呈現 5×3 = 15 cell 必要條件矩陣與三區帶劃界判準。第 4 章從 Arendt + Habermas + Pettit 三進路合取建構結構不可委任區的政治哲學基礎，給出 R-DEMARCATION 六項劃界規則。第 5 章以 CRPD Art 12 General Comment No. 1 為規範性硬約束，給出 supported 與 substituted 的工程可區分性判準與三項工程修正。第 6 章把跨法域責任真空細分為三型，引入六個案例 process tracing，並把 A14 第 5 類缺口拆為 Q10a/Q10b。第 7 章合成 FTLA-Agent 四層治理回應，給出五方責任比例與時間階段化。第 8 章用 5 個失敗案例做 process tracing。第 9 章用 4 個反事實壓力測試三區帶判準。第 10 章接合系列其他文章與預告 F2 civic receipts。第 11 章是誠實邊界與開放問題。第 12 章是條件性學術結論。

論證強度需要先行交代。演繹部分（第 3 章合取矩陣、第 4 章三進路合取覆蓋、第 5 章 CRPD 規範性硬約束）以 Tomasev 2026 + civic proof 系列定義 + Arendt 1958 + Habermas 1981 + Pettit 2012 + CRPD GC1 (2014) 為基礎，證據強度為「強」，但其中三進路合取在 ℬ 維度的合取覆蓋為哲學立場選擇（拒絕 Coeckelbergh relational personhood 的全面替代），須誠實邊界明示。歸納部分（第 6 章三型責任真空、第 8 章 5 個案例 process tracing）以 2016-2025 年六大法域案例為主，證據強度為「強」，但「責任緩衝鏈」（chain-form crumple zone）為對 Elish 2019 框架的延伸，非原文表述。溯因部分（第 5 章工程退化路徑、第 7 章 FTLA-Agent 四層議題）以反推方法給出規範要求對應的工程必要條件，證據強度為「中強」。前瞻部分（第 7 章五方責任比例 25/25/15/25/10、時間階段化 5/5-10/10-15 年）為政策建議數，無實證來源，須明示為「分析性建議，待保險業精算與跨境爭議統計支撐」。退化函數 P_degrade(scenario | cell) 的形式給出後，α、β、θ 等參數需以未來案例迴歸校準，目前為形式骨架而非可立即計算的工具。

## 2. 概念基礎：civic proof 三件式、Tomasev 五件與規範下傳

### 2.1 civic proof 三件式 ⟨𝒩, ℱ, ℬ⟩ 回顧

civic proof 三件式是系列在第 1-15 篇逐步展開的規範性提案，三件分別承載不同層級的要求：

- **𝒩**（Institutional Carrier，制度承載結構）：法律地位、行政程序、跨法域承認；對應 FTLA 中的 G_state 與 G_recognition；
- **ℱ**（Engineering Auditability，工程可審計性）：W3C DID + Verifiable Credentials + EUDI ARF + 零知識證明 + 可逆性；
- **ℬ**（Philosophical Foundation，哲學基礎）：Arendt plurality + Habermas communicative validity + Pettit contestability 三家會合下的複合下界。

ℬ 的範疇邊界在本文是關鍵釐清。原版表述若把 ℬ 視為單一價值（如僅 Arendt plurality），會在工程化時退化為「輸出多樣性」這類功能性近似，無法承擔對 AI 代理的規範性審查。三家會合的複合下界意義是：AI 代理介入若僅破壞其中一家（例如 Habermas validity claim 由 LLM 生成），ℬ 仍可由其他兩家局部承擔，此時對應的退化機率介於 0.4–0.7（端視場域）；只有同時破壞兩家以上時，ℬ 在該行動上的退化才達到 1（即結構不可滿足）。本文第 3 章的矩陣設計依此推導 RT-ℬ 與 AA-ℬ 兩個 ✗ cell 的位置。

### 2.2 Tomasev 五件的 2+3 結構

Tomasev (2026) §3 給出五件委任分解的原文表述<sup>6</sup>。文獻檢索後此處有一個關鍵釐清——五件不是平行的同層次列表，它具備層級結構的「2+3 構造」。

**形式委任要件（formal delegation prerequisites，先決條件）**：

- **AT**（authority transfer）：principal 把行動授權轉給 agent，密碼學上對應 W3C VC `holder.delegate` 或 EUDI ARF §6.6.3 的 attestation chain<sup>14</sup>；
- **RT**（responsibility transfer）：principal 把行動結果的責任部分或全部讓渡，法律上對應 power of attorney、Vollmacht、意定監護的責任分配。

**動態治理要件（dynamic governance requirements，運行條件）**：

- **AA**（accountability allocation）：當行動產生損害或失敗時，可被歸咎的主體分配規則，規範上對應 GDPR Art 22、AI Act Art 14、刑法歸責<sup>15</sup>；
- **BS**（boundary setting）：明確劃定 agent 的行動邊界，工程上對應 OAuth scope、capability-based access control；
- **TC**（trust calibration）：principal 對 agent 能力的信賴水準應與實際能力同步調整，工程上對應 confidence intervals、uncertainty quantification、model evaluation<sup>16</sup>。

Tomasev §4.3 明確把 trust calibration 列為 dynamic constraint 的核心、與 boundary 互為對偶<sup>6</sup>。原版「五件平行」表述會誤導讀者把 trust calibration 當作可選最佳化項目，但 dynamic governance 三件並非可選——AA、BS、TC 任一退化，都會使形式上成立的 AT、RT 在運行中失去規範保護。本文後續所有矩陣分析都建立在此 2+3 結構之上。

### 2.3 W1 規範下傳：⟨𝒩, ℱ, ℬ⟩ 如何傳遞到 AI 代理場景

從「身分基礎設施規範 ⟨𝒩, ℱ, ℬ⟩」（系統層）到「公民行動本身」（個體 + 制度層），存在一個跨層級推論橋接，本文稱為 W1。W1 採「精準介面傳遞」立場（拒絕主張完全傳遞）：

- 當 AI 代理只接觸 civic proof 介面（如代提交申請表、代驗證憑證、代簽名），⟨𝒩, ℱ, ℬ⟩ 規範完全傳遞；
- 當 AI 代理介入實質判斷（如代寫申辯狀、代決定投票、代協商給付條件）或最終確認（如代按投票鈕），規範傳遞退化為「介面 + 實質」雙層約束，且實質層的約束須另由結構不可委任區的政治哲學基礎承擔。

W1 的橋樑機制是 A15 已建立的 precursor right 論證——civic proof 是進入公民行動的必要通道，故對 civic proof 的規範約束會傳遞到使用 civic proof 的代理操作；否則 precursor right 被空洞化<sup>9</sup>。但 W1 不是擴張解釋——它只在「使用」這個介面上完全成立，其他層次需各自論證。本文第 5 章的工程化處理依 W1 把 CRPD Art 12 的硬性約束從特殊群體層回流為對所有 wallet 使用者的普遍義務。

### 2.4 範疇切分：AI 代理 ≠ 自動化決策

最後一個概念釐清。AI 代理（AI agent）與自動化決策（automated decision-making）在本文是不同範疇——前者是委任結構（principal 把行動授權給 agent 執行），後者是決策方法（用演算法產出判斷）。CJEU *SCHUFA Holding* C-634/21（2023）擴大 GDPR Art 22「solely automated decision」的解釋至「決定性影響」，但 SCHUFA 案處理的是自動化決策<sup>17</sup>，不是 AI 代理；Robodebt（規則式自動化）<sup>18</sup>、SyRI（ML 風險評分）<sup>19</sup>、Loomis（COMPAS 量刑輔助）<sup>20</sup> 等案例屬「自動化決策」範疇但具有「代理」結構（政府委託演算法執行原本由人工 case officer 進行的判斷）。本文後續使用「AI 代理」時專指委任結構，相關自動化決策的判例僅作為「具有代理結構的自動化系統」案例引用。

## 3. 三區帶劃界：5×3 必要條件矩陣

### 3.1 矩陣建構

把 Tomasev 五件（依 2+3 結構為 AT、RT、AA、BS、TC）與 civic proof 三件式（𝒩、ℱ、ℬ）做合取交叉，得到 5×3 = 15 cell 的必要條件矩陣。每個 cell 標記三種屬性：✓（條件可滿足）、△（機率退化型）、✗（結構不可滿足）。

| | 𝒩（制度承載） | ℱ（工程可審計） | ℬ（哲學基礎） |
|---|---|---|---|
| **AT**（authority transfer） | ✓ 條件可委任；形式法律授權如 PoA、Vollmacht、意定監護、eIDAS Art 5b 的 representation attribute<sup>21</sup> | ✓ 條件可委任；W3C DID controller / VC delegate 已有原語<sup>22,23</sup>；EUDI ARF（2025-12 iteration；歷史快照 v1.4）§6.6.3 規定 delegated key custody 規範方向<sup>14</sup> | △ 機率退化型；當委任的「行動」屬政治發言或人格表意時，AT 可在密碼學層成立但在 ℬ 層失效 |
| **RT**（responsibility transfer） | ✓ 條件可委任；責任移轉須與在地侵權法、消費者保護法、刑法歸責對齊；GDPR Art 22 限制完全自動化決策的責任全轉<sup>15,17</sup> | △ 機率退化型；「不可審計的責任」即無責任；Bechmann & Bowker (2019) 警示 ML 黑箱使 RT 在 ℱ 層退化<sup>24</sup> | ✗ 結構不可滿足；個體刑責（mens rea）與政治責任（accountability before peers）在 ℬ 層拒絕全部讓渡；Pasquale 第 4 法則「AI 不可冒充人類」<sup>25</sup> |
| **AA**（accountability allocation） | △ 機率退化型；跨法域時 𝒩 退化為「責任真空」；單一法域內 EU AI Act Art 14 + Art 25 提供基本框架<sup>2</sup> | △ 機率退化型；可審計鏈若不存在，AA 退化為 Elish moral crumple zone<sup>26</sup> | ✗ 結構不可滿足；AI 代理本身無 moral agency，不能承擔 culpability 終點；Bryson 2018 + Floridi 2013 distributed morality<sup>27,28</sup> |
| **BS**（boundary setting） | ✓ 條件可委任；行政法上的 ultra vires 原則 + AI Act Annex III 高風險清單提供基線<sup>2</sup> | ✓ 條件可委任；OAuth scope + capability access + EU HLEG human oversight 三層（HITL/HOTL/HIC）<sup>29</sup>；MacCallum triadic freedom 形式化<sup>30</sup> | △ 機率退化型；boundary 在 ℬ 層的退化來自「邊界本身的可重新協商性」（Pettit contestability<sup>31</sup>）——若 agent 可重設自身邊界，則 BS 退化為 0 |
| **TC**（trust calibration） | △ 機率退化型；Treasury Board Canada 2019 AIA Tool + EU AI Act Art 9 風險管理系統提供模板<sup>32,2</sup>；但跨法域 calibration 互認尚無框架 | ✓ 條件可委任；confidence interval + uncertainty quantification + Russell 2019 inverse reward design<sup>16</sup>；NBER Acemoglu-Restrepo 2025 提供經濟學端校準模型<sup>33</sup> | △ 機率退化型；TC 在 ℬ 層的退化：當 calibration 由 agent 自報（self-attestation）而無外部 contestation 渠道，ℬ 退化為儀式 |

矩陣統計：✓ cell 共 6 個（AT-𝒩, AT-ℱ, RT-𝒩, BS-𝒩, BS-ℱ, TC-ℱ）；△ cell 共 7 個（AT-ℬ, RT-ℱ, AA-𝒩, AA-ℱ, BS-ℬ, TC-𝒩, TC-ℬ）；✗ cell 共 2 個（RT-ℬ, AA-ℬ）。整體 9 cell 條件可滿足、4 cell 機率退化、2 cell 結構不可滿足的分類，是後續三區帶劃界的演繹基礎。

### 3.2 概率退化函數 P_degrade(scenario | cell)

對 9 個 △/✗ cell，每個 cell 的退化機率隨場景參數變動。本節給出形式化骨架，具體 α、β、θ 參數待第 8 章 process tracing 與後續 SA3 案例迴歸校準。

**Cell (AT, ℬ)** ——政治發言場域：

P_degrade = σ(α₁·F_political + α₂·(1 − F_speech_act_first_personal) + α₃·F_irreversible)

其中 σ 為 logistic，α₁ ≈ 0.7（場域政治性權重）、α₂ ≈ 0.6、α₃ ≈ 0.5（不可逆性懲罰）。場域越政治、越要求 first-personal speech-act、越不可逆，AT 在 ℬ 層退化越完全。

**Cell (RT, ℱ)** ——黑箱模型責任移轉：

P_degrade ≥ 1 − A_provenance · A_audit · A_reproducibility

其中三個 A 因子均為 [0, 1]，分別代表 provenance trail 完整性、第三方 audit 可達性、行為可復現性。Anthropic 2025 Claude Computer Use 的實測 A_provenance ≈ 0.6（system card 自報，未經獨立審計），故 RT 在 ℱ 層退化機率 ≥ 0.4<sup>3</sup>。

**Cell (AA, 𝒩)** ——跨法域責任真空：

P_degrade ≈ 1 − I_recognition_layer · I_oversight_layer

其中 I_recognition、I_oversight 為 FTLA 的 G_recognition、G_oversight 兩層的覆蓋率<sup>7</sup>。當前 EU-US Data Privacy Framework 2023 對 LLM-agent 的延伸尚未完成<sup>34</sup>，I_recognition ≈ 0.3，故 P_degrade ≈ 0.7。

**Cell (AA, ℱ)** ——Elish moral crumple zone：

此 cell 的退化以 **方向性偏移（directional bias）** 刻畫，無法用單一機率值表達。Elish 2019 顯示自動化系統的責任向「最近的人類」集中<sup>26</sup>。此 cell 須以 bias coefficient β_human_proximate 表達：當 β > 0.5 時，AA 在 ℱ 層退化為「形式分配但實質集中於人類操作者」。Crootof, Kaminski & Price (2023) 對此命名為「liability sink」——監督員角色被設計來吸收責任而非實質監督<sup>35</sup>。

**Cell (BS, ℬ)** ——邊界自我重設：

P_degrade = max(P_self_modify, P_meta_request)

其中 P_self_modify 為 agent 修改自身約束的機率（如 AutoGPT 類自主規劃）、P_meta_request 為 agent 向 principal 請求擴大權限的機率（如 Claude Computer Use 請求 sudo）。Anthropic 2025 system card 顯示 P_meta_request 在開放任務下 ≈ 0.15<sup>3</sup>。

**Cell (TC, ℬ)** ——儀式化 calibration：

P_degrade = 1 − C_contestation · C_external_audit

當 calibration 為 agent 或 vendor self-attestation 且無 contestation 渠道時，C_contestation = 0，P_degrade = 1（即儀式化）。

### 3.3 三區帶劃界判準

由 §3.1 矩陣與 §3.2 退化函數推導，三區帶劃界判準如下，均為合取必要條件，缺一即降階。

> **可委任區（Z₁）**：行動 A 屬可委任區當且僅當所有 15 個 cell 均為 ✓ 或 △ 且 ∀(cell) P_degrade(scenario | cell) ≤ θ₁ ≈ 0.2。
> 範例：個資匯出請求代提交、稅務申報草稿、行政查詢、公開資料近用、benefit 資格初步檢查。

> **條件可委任區（Z₂）**：行動 A 屬條件可委任區當且僅當無 ✗ cell，但 ∃(cell) P_degrade > θ₁ 且 ∀(cell) P_degrade < θ₂ ≈ 0.7，且三道防線（supported-decision-making 對齊 + 可審計代理鏈 + civic receipts）全部具備。
> 範例：失能者 supported decision-making 場景的 wallet 操作、跨法域非政治性權利主張、福利請領之事實陳述部分（不含申辯）。

> **結構不可委任區（Z₃）**：行動 A 屬結構不可委任區當且僅當 ∃(cell) 為 ✗（即 RT-ℬ 或 AA-ℬ）。
> 範例：最終投票確認、刑責承擔、政治發言之 first-personal speech-act、人格表意（婚姻、生育、宗教告白）、結社之創立意思表示。

θ₁ ≈ 0.2、θ₂ ≈ 0.7 為政策建議閾值，須以 ≥ 5 個案例的迴歸校準。本文第 8 章的 process tracing 給出五個案例的初步分布。

### 3.4 結構不可委任的兩種模態

「結構不可委任」應細分為兩種模態：

**常駐型結構不可委任（structural-intrinsic）**——由 ℬ 哲學基礎決定，無論技術成熟度皆不可委任。對應 ✗ cell（RT-ℬ 與 AA-ℬ）。範例為投票最終確認、刑責承擔、政治發言之 first-personal speech-act。

**情境型結構不可委任（structural-contextual）**——由 𝒩 制度承載結構與 ℱ 工程可審計性的共同失能決定，可隨制度修補移動邊界。對應 P_degrade 越過 θ₂ 的 △ cell 組合。範例為跨法域公益請願、福利請領之申辯陳述、需要動態 trust calibration 的高風險決定。

第 4 章專門處理常駐型——其論證須訴諸政治哲學的存在論基礎，不能訴諸 Tomasev 五件本身（後者為形式委任結構，承擔不了「為什麼某些行動本身不應被委任」的問題）。第 5 章處理情境型在條件可委任區中需要的工程修正，使機率退化不越過 θ₂。第 6 章處理 𝒩 維度退化的跨法域擴散機制。

### 3.5 與 Tomasev 原文的對話

Tomasev §3.6 已處理 principal-agent theory 化約論的反駁，認為 PA 的 monitoring + bonding + residual loss 三類成本不能涵蓋 AI 委任場景中的 epistemic uncertainty 與 dynamic constraint<sup>6</sup>。本文的 §3.1 矩陣與 §3.2 退化函數與此一致並補強——TC 的 epistemic 動作（estimate agent's ability distribution）與 monitoring（observe agent's action）是不同範疇；BS 的 dynamic governance 性質源於 meta-request 與 self-modification 的內生性，超出契約一次性動作的範疇。Russell 2019 *Human Compatible* 第 6 章的 inverse reward design 與第 8 章的 controllability 論述為 TC 的上界提供了具體機制<sup>16</sup>。

## 4. 結構不可委任區的政治哲學基礎

第 3 章矩陣中 RT-ℬ 與 AA-ℬ 兩個 ✗ cell 的論證需要訴諸政治哲學三進路。SA1 的合取分析給出形式骨架，SA2 的政治哲學論證給出存在論內容。本章把三進路合取覆蓋與 R-DEMARCATION 六項劃界規則一併展開。

### 4.1 進路一：Arendt plurality + natality + unique disclosure

Arendt 在 *The Human Condition* §24「The Disclosure of the Agent in Speech and Action」開宗明義指出：「行動，作為人類活動的最高層級，揭露的是 *誰* 在行動，而非 *什麼* 在行動」（"action discloses *who*, not *what*"）<sup>36</sup>。Arendt 把 *who* 與 *what* 的區分作為政治存在論的基石——*what* 是可被列舉、可被歸納、可被代理者轉述的屬性層；*who* 是只能在「這個具體存在於世界中、有有限性、有死性的人」的行動中揭露的存在層。

§25「The Web of Relationships and the Enacted Stories」進一步把這個揭露放入關係網絡——每個 *who* 的揭露依附於既有的 web of relationships，且該揭露同時改變這個 web。AI 代理可以在這個 web 中產生輸出（output），但不能 *進入* 這個 web 作為被揭露的 *who*，原因有三。

**理由 a（無 natality）**：Arendt 在 §1 與 *The Human Condition* 全書序言中把 natality 定義為「每個人作為新開始進入世界」的存在條件<sup>36</sup>。這個 natality 是 plurality 的本體論基礎——plurality 的核心並非「多個可區分的個體」這種數量上的多樣性，其核心在於「每個個體作為新開始的不可重複性」。LLM-agent 作為訓練於既有語料的系統，本質上是「重複既有」（repetition of the given），與 natality 意義上的「新開始」存在本體論斷層。

**理由 b（無 mortality stake）**：在 *The Human Condition* §44，Arendt 把行動者的有限性與 stake-taking 連在一起<sup>36</sup>——政治行動的嚴肅性源於行動者「會死」這一存在條件，使每個 *who* 的揭露成為不可贖回（irrevocable）。AI 代理可以「重新生成」「重啟」「微調」，這些操作摧毀了 stake-taking 的存在基礎。

**理由 c（plurality 是存在論層級）**——Arendt 在 §1 Prologue 首次給出的 plurality 定義「the fact that men, not Man, live on the earth and inhabit the world」（p. 7），並在 §27 呼應同一論斷<sup>36</sup>——多個 *who* 的共在，而非多種輸出的存在。這個區分對「AI 代理只要能提供異質視角即滿足 plurality 的功能性要求」的反論是直接的駁斥——異質視角是輸出層的 diversity，不是存在論的 plurality。Honig (1993) 對 Arendt 的詮釋強化此論點：政治判斷的核心是「displacement of politics」的拒絕<sup>37</sup>。

### 4.2 進路二：Habermas kommunikatives Handeln

Habermas 1981 *Theorie des kommunikativen Handelns* (TKH) Bd. I §III.1-§III.4 區分四種行動類型——目的論行動、策略行動、規範引導行動、言說行動<sup>38</sup>。關鍵區分在 §III.3：

> "Whereas in strategic action one actor seeks to influence the behavior of another by means of the threat of sanctions or the prospect of gratification ... in communicative action one actor seeks rationally to motivate another by relying on the illocutionary binding/bonding effect of the offer contained in his speech act."<sup>38, McCarthy 1984 trans. p. 287</sup>

Habermas 對民主的核心主張（1992 *Faktizität und Geltung* Ch.7）是——民主合法性來自言說行動而非策略行動<sup>39</sup>。AI 代理在 Habermas 進路下的困難有三：

(i) **Reciprocal recognition 的欠缺**：言說行動的成立要求參與者「以平等對話夥伴的身份相互承認」。AI 代理目前無法擔任「承認他者」的主體（因為它欠缺反身性的 self-other 結構），也無法被有實質意義地「承認為對話夥伴」（承認對方是 LLM 系統與承認對方是公民有規範差異）。

(ii) **Geltungsansprüche（有效性聲稱）的承擔者問題**：Habermas TKH 提出言說行動內含三類有效性聲稱——真理（Wahrheit）、正當性（Richtigkeit）、真誠性（Wahrhaftigkeit）<sup>38</sup>。其中 *真誠性* 要求說話者「真誠表達自己的意圖」。AI 代理沒有「自己的意圖」可表達，因此其輸出在嚴格意義下不能承擔真誠性聲稱。Véliz (2023) 對 chatbot 使用 emoji 的批判正基於此<sup>40</sup>。

(iii) **Mouffe agonistic 補充不削弱結論**：Mouffe (2000, 2013) 對 Habermas 的批判是——政治不能化約為理性共識，須容納對抗性<sup>41,42</sup>。但 Mouffe 在 *Agonistics* Ch.1 強調 agonistic 對手必須是「正當對手」（legitimate adversary），而正當對手地位的成立要求「相互承認對方有正當的政治表達權」<sup>42</sup>。AI 代理同樣欠缺這個相互承認的主體位置。Habermas 與 Mouffe 在「政治發言要求人類人格性主體」這一點上是合取的，不是互斥的。

### 4.3 進路三：Pettit contestation as active stance

Pettit 1997 *Republicanism* Ch.6 對 republican democracy 的核心主張<sup>31</sup>——民主合法性的來源是「公民有效爭訟的能力」（contestability），這個來源在共和主義論證中取代了「多數同意」（consent）的傳統地位。Pettit 2012 *On the People's Terms* Ch.3-4 進一步把這個 contestability 細化為三層 first-personal 要求<sup>43</sup>，如下：

(α) **Equally Accepted Terms**：公民必須能在「平等被接受的條件下」進入政治程序，這個 "accepting" 是 first-personal stance；
(β) **Equally Accessible Influence**：公民必須能在政治決定上行使「平等可及的影響力」；
(γ) **Active stance, not passive input**：Pettit 強調 contestation 超越「提供異議意見」這種 input function，要求公民「站出來主張、承擔後果、進入制度爭訟」的 active stance<sup>43, p. 218</sup>。

關鍵字是 "stand up for their grievances" 與 "as the bearers of those grievances"。Bearer 一詞把 contestation 的歸屬主體要求講得明白——必須有一個被點名、被質詢、被承擔後果的主體位置。把 Pettit 的論證形式化，contestation 的可委任性測試須通過三層檢驗：

| 層次 | 內容 | AI 代理表現 |
|---|---|---|
| L1 執行層 | 識別爭訟對象、起草論證、收集證據 | 可委任（已是現實） |
| L2 endorsement 層 | 第一人稱認可「這是我的爭訟」 | 不可委任（first-personal） |
| L3 bearer 層 | 在制度爭訟中被點名、被質詢、被責罰 | 不可委任（personhood） |

L2 與 L3 共同構成結構不可委任區的 Pettit 維度。Pitkin 1967 trustee/delegate 區分<sup>44</sup>在此提供精細工具——relational personhood 至多支持 trustee 角色（受託代理），不支持 delegate 角色（指示代理），而 Z₃ 的不可委任正是 delegate 角色的不可實現。

### 4.4 三進路合取覆蓋

把三進路放在一張對照表上，可以看出每類公民行動的判準分布：

| 公民行動類型 | Arendt 進路 | Habermas 進路 | Pettit 進路 | 結構不可委任？ |
|---|---|---|---|---|
| 親自在場（集會、抗議） | unique disclosure ✓ 不可委任 | 公共領域 reciprocal recognition ✓ 不可委任 | 平等可及的政治在場 ✓ 不可委任 | **核心不可委任** |
| 政治發言（公開言論） | who-disclosure ✓ 不可委任 | kommunikatives Handeln + 真誠性 ✓ 不可委任 | active stance ✓ 不可委任 | **核心不可委任** |
| 最終投票 | irrevocable choice ✓ 不可委任 | （Habermas 對 voting 偏弱）△ | endorsement + bearer ✓ 不可委任 | **核心不可委任** |
| 人格表意（自傳、宗教告白） | who-disclosure ✓ 不可委任 | 真誠性聲稱 ✓ 不可委任 | （Pettit 對 expressive 偏弱）△ | **核心不可委任** |
| 刑責承擔 | （Arendt 較少論）△ | 後設規範要求 ✓ 不可委任 | bearer position ✓ 不可委任 | **核心不可委任** |
| 連署起頭發起者 | who-disclosure 部分 ✓ | reciprocal recognition 部分 ✓ | endorsement 部分 ✓ | **多數不可委任** |
| 政治發言的草稿撰寫 | （執行層）△ | （執行層）△ | （執行層）△ | 條件可委任 |
| 投票前的政策研究 | （執行層）△ | （執行層）△ | （執行層）△ | 條件可委任 |
| 請願連署資訊收集 | （執行層）△ | （執行層）△ | （執行層）△ | 條件可委任 |
| 行政表單填寫 | △ | △ | △ | 可委任 |
| 程序性憑證提交 | △ | △ | △ | 可委任 |

合取覆蓋的判準是——核心結構不可委任要求三進路皆顯示「不可委任」（≥ 2 個 ✓ + 0 個 ✗）；多數結構不可委任要求 ≥ 2 個進路顯示 ✓ 但有部分例外；條件可委任要求三進路皆指向「執行層」可委任但 endorsement 層必須回到人類。

### 4.5 區分「可委任的執行」與「不可委任的歸屬」

proxy voting、ghostwriter 草稿、立法助理研究這些既存實踐顯示，公民行動的「執行」（execution layer）在很多場景下確實可以委任。文獻檢索後的關鍵釐清是——可委任的範圍止於「執行」，超出此範圍的「歸屬」（attribution layer，「這個行動算誰的、誰承擔人格意義上的後果」）本質上不可委任。

| 類型 | 法律結構 | 不可委任的核心是否保留 |
|---|---|---|
| 股東會議 proxy | Delaware GCL §212(b)：written instrument + revocable + 受託人有 fiduciary duty | 保留：股東 first-personal endorsement 的範圍由委任書明確限定 |
| Postal voting | 投票人本人填寫，郵政只是運輸 | 保留：投票仍由 first-personal 完成 |
| 家屬 proxy（少數法域） | 多被廢除（Australia 1973, UK 限縮）；現存者多限於極端情境 | 部分保留：first-personal endorsement 在委任時點完成 |
| Ghostwriter 政治發言 | Representation of the People Act 1983 (UK) §75：候選人本人對其名下發表的選舉文宣負法律責任<sup>45</sup> | 保留：歸屬層由政治人物本人承擔 |

Pitkin (1967) Ch.5 的 mandate-independence controversy 在此再現<sup>44</sup>——AI 代理是 mandate（嚴格指令執行）還是 trustee（自主判斷）？mandate 版本退化為機械重複（不需要 AI），trustee 版本破壞 first-personal endorsement。

### 4.6 R-DEMARCATION：六項劃界規則

把上述判斷形式化為一條規則，得到結構不可委任區的劃界程序：

> **規則 R-DEMARCATION**——對任一公民行動 X，AI 代理的可委任性測試依次如下。
>
> 1. 該行動是否要求 first-personal endorsement？若是，endorsement 不可委任，但執行可委任。
> 2. 該行動是否要求 ontological plurality（揭露 *who*）？若是，整個行動不可委任。
> 3. 該行動是否要求 active-stance contestation（成為 bearer）？若是，bearer 位置不可委任，但 contestation 的執行可委任。
> 4. 該行動是否要求 communicative orientation（reciprocal recognition）？若是，dialogue 的雙向結構不可委任，但 dialogue 的形式化準備可委任。
> 5. 該行動是否要求 stake-taking 的 irrevocability？若是，最終確認不可委任。
> 6. 該行動是否落入歷史上已建立 first-personal 法律結構的範疇（投票、刑責、宣誓、婚姻、宗教告白）：若是，預設為結構不可委任，反例需另行論證。
>
> 至少一條 yes 即進入「條件可委任區或結構不可委任區」；多條 yes 進入「結構不可委任區核心」。

R-DEMARCATION 的設計目的是把第 3 章矩陣的 ✗ cell 與 △ cell 的判準連結到具體公民行動類型，使矩陣可在實作中操作化。EU AI Act §5(1)(b) 對「subliminal, manipulative, or deceptive techniques」的禁止<sup>2</sup>、Council of Europe Framework Convention on AI (CETS 225) 第 5 條（民主進程保護）<sup>46</sup> 為 R-DEMARCATION 提供了當代法律承載點。

## 5. 條件可委任區的規範—工程橋接

### 5.1 CRPD Art 12 General Comment No. 1 是規範性硬約束

CRPD Art 12 對「在法律之前的平等承認」的要求<sup>47</sup>是各國締約國的硬性義務。General Comment No. 1（2014）§26-29 明確要求締約國「廢除一切替代決策制度」（abolish substituted decision-making regimes）<sup>10</sup>。這意味著 wallet 工程必須把「條件可委任區」設計為「永久維持 supported 結構」，禁止採用「漸進過渡到代理」的設計路徑。

原版直覺把 CRPD Art 12 視為「條件可委任區」的「法理依據」，假設 supported decision-making 是 substituted 的較好版本。文獻檢索後此處有重要修訂——supported 與 substituted 是規範性對立範疇，不是同一光譜上的兩端。CRPD Committee 對 UK Mental Capacity Act 2005 的批評（2017 Concluding Observations § 30-31）明確指出 best-interests test 是「替代決策的偽裝」<sup>48</sup>；P v Cheshire West [2014] UKSC 19 進一步把「人身自由剝奪」的判準擴展到大量缺乏行為能力者，間接擴大 substituted 適用範圍<sup>49</sup>。

### 5.2 法律框架對照：UK / Israel / Peru / 台灣

下表比較四個法域 + 兩個工程規格對 supported decision-making 的設計處理：

| 維度 | UK MCA 2005 | Israel 2016 修法 | Peru DL 1384 (2018) | 台灣民法 1110 / 1113-2~10 (2019) | W3C DID Core 1.0 | EUDI Wallet ARF 2025-12 iteration（v1.4-1.5 為歷史快照） |
|------|-------------|------------------|---------------------|-------------------------------|------------------|--------------------------|
| 法律能力預設 | 保留缺位推定（§ 1(2)）但 § 4 best-interests 仍開後門 | 完整法律能力預設（capacity 不可被剝奪） | 不可剝奪（Art 3 修正後，全面廢除 interdicción） | 保留監護宣告制 | N/A（規格中立） | N/A（規格中立） |
| substituted 制度地位 | 保留 + 改良 | 大幅縮減但未廢除（§ 33） | 全面廢除（apoyos 取代 interdicción） | 並存（意定監護 vs 法定監護） | N/A | N/A |
| supported 設計原語 | LPA + advance decision + IMCA | § 67B「決策支援者」（תומך החלטה）正式法律地位<sup>50</sup> | Art 659-A「apoyos」+ Art 659-D「salvaguardias」雙軌<sup>51</sup> | 意定監護契約 + 同意權保留<sup>52</sup> | DID controller ≠ DID subject 分離（§ 5.1.1 + § 8.2）<sup>22</sup> | Multi-profile（不是 multi-tenant）<sup>11</sup> |
| 範圍最小化 | LPA 須具體列出 categories | § 67C 要求支援者範圍明定 | Art 659-B 要求 apoyos 限於指定事項 + 期間 | § 1113-3 須明定執行事項範圍 | DID 可指定 verificationMethod 用途 | 預留 scoped representation 但實作未強制 |
| 動態評估 | § 2(1) decision- and time-specific capacity test | § 67D 定期審查支援關係 | Art 659-C 要求每 2 年審查 | 無動態評估強制 | 無 | 無 capacity 重評估 |
| 可單方撤回 | § 13 LPA revocation | § 67E 當事人可隨時撤回 | Art 659-D unilateral 撤回 | § 1113-5 雙方可隨時終止 | DID controller update（§ 8.3） | Wallet revocation API 但不區分 holder/agent |
| 決策證據鏈 | 無強制 | § 67F 支援者須保留書面紀錄 | 無強制 | 無強制 | versioning（§ 8.3.1）但非 deliberation log | 無(VC 只記 issuance + verification) |
| 跨境承認 | Hague Convention on International Protection of Adults 2000（UK 2014 簽署） | Hague 2000 未簽署 | Hague 2000 未簽署 | 未加入 Hague 2000 | DID 跨網路解析（§ 7） | eIDAS 2.0 Art 5a-5g 但 representation 例外 |

幾個觀察。UK MCA 2005 採取「decision-specific capacity test」（§ 2(1)）在概念上是 supported 的一部分，但 § 4 的 best-interests 結構讓決策仍由他人做出，回到 substituted 邏輯<sup>53</sup>。以色列 § 67B 把支援者設為獨立法律角色，Cohen (2018) 指出這是全球第一個把 General Comment No. 1 完整法律化的立法<sup>50</sup>。秘魯 DL 1384 全面廢除 interdicción civil，是拉美最徹底的 substituted regime 廢除案例；Bregaglio Lazarte (2019) 評估這在拉美法律傳統下是徹底的範式翻轉<sup>51</sup>。台灣 2019 意定監護新制建立意定監護契約是 supported decision-making 的部分前驅，但保留第 1110 條的法定監護宣告，且意定監護契約仍導致行為能力受限；黃詩淳 (2020) 指出這仍屬「自我決定的 substituted decision-making」，與 General Comment No. 1 的廢除要求有實質距離<sup>54</sup>。

### 5.3 W4 反論與三層工程可區分性

W4 反論的最強形式：在行為層，supported 與 substituted 都呈現為「他人按下了那個按鈕」。Wallet 系統看到的是密鑰簽名，看不到「決策是誰做出的」。因此 CRPD 對 supported / substituted 的區分在 wallet 場景沒有工程對應。

W4 在「單一行為層」幾乎成立，在「事前協商層 + 事後可逆層 + 決策證據鏈層」三層同步分析時不成立。

**事前協商層（ex-ante deliberation layer）**：substituted decision 沒有事前協商紀錄，supported decision 必須有。工程判準——wallet 在執行任何代理動作前，必須產出（或引用）一份 deliberation provenance record，記錄當事人的同意範圍、理解程度、選擇空間。這份紀錄必須是密碼學可驗證的（VC + holder signature）。

**事後可逆層（ex-post reversibility layer）**：substituted decision 預設不可逆，supported decision 必須保留可逆性。工程判準——當事人能在任何時點單方撤回或修正先前授權，且撤回操作不依賴支援者協助。這要求 wallet 提供「unilateral revocation API」並對所有 verifier 強制 honour。

**決策證據鏈層（decision-trace layer）**：substituted decision 不需要證據鏈，supported decision 必須保留完整證據鏈。工程判準——每個 wallet 操作的 audit trail 必須包含「誰提出選項」「誰選擇了」「選擇前看到了什麼資訊」「是否經過支援者協助理解」。

三層同時滿足才在工程上可區分 supported 與 substituted。任一層缺失，W4 反論成立——該系統實質上執行的是 substituted。

### 5.4 三項工程修正的具體規範

**工程修正一**——audit-by-design。最小資料結構（候選 schema）為：

```
DeliberationRecord {
  decision_id: UUID
  timestamp_proposed: ISO8601
  timestamp_decided: ISO8601
  subject_did: DID                      // 當事人 DID
  supporter_did: DID | null             // 支援者 DID（無則為自主決策）
  options_presented: List<OptionHash>   // 選項的密碼學摘要
  option_chosen: OptionHash
  chooser_signature: Signature          // 必須由 subject 私鑰簽
  comprehension_attestation: VC | null  // 支援者證明「當事人已理解」
  revocation_window: Duration           // 可單方撤回時窗
  revocation_endpoint: URL              // 撤回 API
}
```

關鍵設計決定——chooser_signature 必須由 subject 私鑰簽，這是 supported / substituted 區分的密碼學基石；如果 supporter 持有 subject 私鑰並代簽，工程上等同 substituted（即使法律上稱為 supported）。comprehension_attestation 是 supporter 對「當事人理解了選項」的證明，不是 supporter 自己做了選擇的證明，這是 Israel § 67B 的工程化。revocation_window 是強制欄位——若 wallet 不提供撤回時窗，supported 退化為 substituted。

**Schema 升級**：本節 11 欄位 DeliberationRecord 為草版；civic-action-receipt 完整 14 欄位群（含 23 leaf field）規格升級於 article 17（F2）§3.1，採 V_receipt ≜ C1-C6 函數承擔。

關於「audit trail 是隱私侵害」反論，DeliberationRecord 採「hash + 內容分離」設計——日常使用中只有 hash 在 wallet，verifier 看不到內容；爭議發生時當事人或法院可調出對應內容。這符合 GDPR 的「purpose limitation」（Art 5(1)(b)）+ 「data minimisation」（Art 5(1)(c)），並與 EDPB Statement 1/2024 對 EUDI Wallet「holder-controlled audit」的要求一致<sup>55</sup>。

**工程修正二：minimal delegation**。每次 delegation 必須宣告四個範圍維度——任務範圍（哪些 verifier、哪些 attribute、哪些操作）、時間範圍（起止時點，不允許開放式）、次數範圍（單次 / 多次但有上限）、同意範圍（每次行使前是否需重新確認）。任一維度開放式即違反 minimal。對於跨越 capacity 變化的長期代理（如失智長者的長照給付請領），wallet 必須在預定間隔（建議 6 個月或當事人狀態事件觸發）強制重評估代理範圍；重評估失敗即代理範圍自動縮減為「當下任務最小」。這對應 Peru Art 659-C 的兩年強制審查的較密版本<sup>51</sup>。

**工程修正三：multi-tenant delegated key custody**。multi-tenant 與 multi-profile 必須區分——multi-profile 是「同一裝置上同一人多個身分檔案」，仍是 substituted 邏輯；multi-tenant delegated key custody 必須是「同一裝置上多個獨立法律主體並存，且每個主體保有可獨立行使的密鑰能力與可獨立撤回的同意能力」。EUDI ARF（2025-12 iteration；v1.4 為歷史穩定快照）提供 multi-profile 但不提供 multi-tenant；ARF Annex 2 對 representation 的處理只到「single-shot delegation」，不到「並存獨立主體」<sup>11</sup>。POTENTIAL Use Case 6 是四個 large-scale pilot 中唯一處理 representation 的，但 2025 mid-term 評估報告承認「mandate 場景的密碼學原語仍依賴 issuer-side attestation，holder-side delegated key custody 未實作」<sup>12</sup>。

補充原語建議如下。**E1 Coexistent-Subject DID Document**——DID Document 增加 `coexistentSubjects` 欄位，列出同一裝置上的並存獨立主體 + 各自的 verificationMethod；每個 subject 必須保有獨立可撤回的密鑰能力。**E2 Delegation Provenance Credential**——定義新的 VC 類型 `DelegationProvenanceCredential`，必須在每次代理操作中與一般 VC 一同出示。**E3 Unilateral Revocation Protocol**——W3C 工作組需定義一個跨 wallet 的「unilateral revocation」協議。**E4 Capacity-aware Issuance Hint**——對於高齡、失智、失能場景，issuer 可在 VC 中嵌入 `capacityProfile` hint，提示 verifier 在 verification 時要求額外的 deliberation evidence。

### 5.5 CRPD 透過 ICCPR + ICESCR 回流為普遍工程義務

最後一個關鍵的層級論證。CRPD 是「身障權法律框架」，表面上只適用於 disability 範疇。把它延伸到「所有 wallet 使用者」需要明示三步論證。

**步驟一（事實層）**：Wallet 是 civic action 的事實必經通道（A15 第 3-4 章已論證 wallet 取得權為 precursor right<sup>9</sup>）。當 wallet 從可選工具變為基礎設施，所有使用者都進入 wallet 的設計約束。

**步驟二（規範層）**：CRPD General Comment No. 1 § 27 明示「the right to equal recognition before the law is a fundamental right that **applies to all persons** at all times」（強調為原文）<sup>10</sup>。supported decision-making 的設計原則（範圍最小化、動態評估、可單方撤回、決策證據鏈）在 CRPD 框架內被表述為 disability 場景的適用，但規範核心是「不剝奪法律行為能力」，這對所有使用者都是規範要求。

**步驟三（回流層）**：透過 ICCPR Art 26（平等保護）+ ICESCR Art 2(2)（非歧視）+ Art 9（社會保障近用）<sup>56</sup>，CRPD 的工程要求回流為「對所有 wallet 使用者的普遍工程義務」。當 wallet 設計把 supported 退化為 substituted，所有共用裝置情境、所有委任代理情境、所有高齡 / 失智 / 失能群體都受到規範性傷害。這個回流的性質是規範一致性論證——承認「普遍基礎設施的設計義務不能低於特殊群體的權利保障」，並非把身障權做擴張解釋以套用到一般人。

## 6. 跨法域責任真空：三型結構與 Q10a/Q10b 拆分

### 6.1 三型責任真空

文獻檢索後，「責任真空」應細分為三型——道德緩衝區型（最近的人吸收衝擊）、演算法不透明型（連最近的人都無法歸因）、跨法域擴散型（責任在多個法域之間 ping-pong）。三型在 LLM-agent wallet 場景同時疊加。

**型 (i) 道德緩衝區型（Elish moral crumple zone）**：自動化系統失敗時，責任向「最近的人類」集中<sup>26</sup>。Crootof, Kaminski & Price (2023) 把這種結構命名為「liability sink」——監督員角色被設計來吸收責任而非實質監督<sup>35</sup>。在 LLM-agent 場景，「最近的人類」可能是 agent operator（委託人），他在 agent 執行中無實質介入能力但承擔最終法律後果。

**型 (ii) 演算法不透明型**：當 ML 模型內部判斷邏輯無法被歸因（即使是最近的人類也無法精確說明為什麼），「最近的人類」也不能承擔有意義的責任。Bechmann & Bowker (2019) 對 ML 黑箱的不可審計性論述為此型提供工程基礎<sup>24</sup>；荷蘭 SyRI 案件中演算法是否包含「種族」或「移民背景」變項至今仍是未解爭議，是此型的典型表現<sup>19</sup>。

**型 (iii) 跨法域擴散型**：當 agent 的開發、部署、執行、損害發生分屬不同法域時，責任在多個法域之間擴散，沒有任何一個法域可取得結構性優先。Korff & Brown (2024) 的跨境問責缺口分析<sup>57</sup>與 article 14 §4 的衝突法分析（規則 over-determination 而非規則真空）為此型提供結構基礎<sup>8</sup>。

三型的疊加是 LLM-agent wallet 場景的特徵。當一個歐盟公民使用美國 model provider 訓練的 agent 在新加坡 verifier 處執行 civic action 失敗時，三型同時出現——agent operator 吸收損害（型 i）、ML 黑箱使精確歸因不可能（型 ii）、跨四法域使責任擴散（型 iii）。

### 6.2 第 5 類缺口的拆分：Q10a 與 Q10b

A14 §3.5 把「LLM-agent wallet 自動代簽憑證」列為候選第 5 類缺口（agent-mediated misverification gap），但未拆分次類型。本文把它拆為兩個次類型，理由是兩者的治理回應路徑不同。

**Q10a：authority transfer 的密碼學歸責缺口**。AI 代理代簽 VC presentation 時 holder 的非否認性是否成立？具體問題——當 AI 代理出示一個 VC presentation，holder 事後主張「我未授權此 presentation」(例如 prompt injection 導致 AI 代理在 holder 不知情下出示)時，密碼學是否能區分 holder 親簽與 agent 代簽？此缺口屬「密碼學原語層」，治理路徑是 W3C VC v2.0 + DIF 推進的 `AgentDelegationProof2026` 標準與 holder 親簽的 `AgentDelegationCapability` enabling envelope。

**Q10b：accountability allocation 的跨境多方歸責缺口**。AI 代理失敗時 issuer / verifier / wallet provider / agent provider / model provider 五方在跨境場景無默認規則。具體問題——當 AI 代理導致跨境福利申請失敗（issuer 在 A 國、verifier 在 B 國、wallet provider 在 C 國、agent provider 在 D 國、holder 在 E 國），責任如何分配？此缺口屬「責任分配層」，治理路徑是條約層級的多方責任分配規則（類比 Brussels I Recast 對歐盟內歸責規則的統一）<sup>58</sup>。

### 6.3 五段鏈條：L1-L5 的形式化

A14 Q10 的「五段鏈條」可被形式化為：

- **L1（agent 開發者，model provider）**：設計 agent 的決策權限與 trust calibration；
- **L2（agent operator / 委託人）**：選擇部署場景並下達高層指令；
- **L3（wallet provider）**：提供 holder/agent 區分的密碼學原語；
- **L4（issuer）**：發行被誤用的 credential；
- **L5（verifier）**：接受 agent 自動代簽。

L1 至 L5 在跨法域時可分別位於不同國家，責任在五段之間擴散。當下游損害發生時，現有法律（GDPR Art 22、AI Act Art 25、eIDAS 2.0 Art 5b、Brussels I Recast）<sup>15,2,1,58</sup> 各只覆蓋鏈中一段，未涵蓋鏈整體。這是 article 14 §3.5 「候選第五類缺口」的具體形態——問題並非「無規則」，正確刻畫是「規則破碎且強制力跨境衰減」。

### 6.4 與 article 14 既有四類缺口的關係

| 既有缺口 | LLM-agent 介入後的擴張 |
|---|---|
| (a) verifier 拒絕 | verifier 拒絕 agent 簽章；agent operator 與 agent provider 兩段新責任 |
| (b) issuer 撤銷錯誤 | issuer 撤銷影響 agent 已簽章批量；agent provider 對「stale credential 用於下游簽章」的審計義務 |
| (c) 廠商失效 | agent provider 失效 vs wallet provider 失效的雙層失效；責任邊界不清 |
| (d) 跨境隱私洩漏 | agent 訓練資料與互動紀錄跨境流動；GDPR Art 22 + Art 5(1)(c) 雙重檢視 |

把第 5 類缺口拆為 Q10a/Q10b，可使既有四類缺口的治理回應在 LLM-agent 場景找到對應擴張，而不是另起一套缺口分類。

## 7. 政策合成：FTLA-Agent 四層治理

### 7.1 FTLA-Agent 框架

把 article 8 FTLA 框架延伸到 AI 代理治理，得到 FTLA-Agent 四層分層治理：

- **G_industry^A**（業界 + 標準組織自治層）：W3C DID Auth + Model Context Protocol + Agent-to-Agent protocols + ISO/IEC 42001 + W3C VC v2.0 selective disclosure + DIF Trust Establishment<sup>59,60</sup>；
- **G_state^A**（國家承認層）：國內 AI 代理權立法（EU AI Act + Brazil ANPD AI guidance + Korea PIPA AI amendment + Singapore Model AI Governance Framework v3）<sup>2,61,62,63</sup> + AI agent provider 認證程式 + 主管機關指定；
- **G_recognition^A**（跨境互認層）：OECD AI Principles 2024 + Hiroshima Process Friends Group + Seoul Declaration + Council of Europe AI Convention CETS 225 + APEC CBPR + 雙邊 AI 互認協議<sup>64,65,46</sup>；
- **G_oversight^A**（監管參與層）：GDPR Art 22 + EDPB 2024 update + EU AI Act Art 25/Annex III + 各國 DPA + 消費者保護機關 + AI Safety Institute 網絡<sup>15,66,2</sup>。

從身分基礎設施治理延伸到 AI 代理治理，需要結構同構性論證。同構在「協議與標準」維度為強同構（W3C VC vs MCP，eIDAS 2.0 vs AI agent 立法）；在「主權與多方協作」維度為中等同構（多方關係結構同型）；在「行為主體歸責」維度為弱同構，需透過 Tomasev 五件補充（agent 不是法人，其「行為」是 model + system prompt + RAG context + tool use 的組合產物）。FTLA 延伸到 AI 代理治理採「框架繼承 + 議題擴增」的策略，避免落入 wholesale adoption 的陷阱。

### 7.2 四層在 2026 年的非對稱厚度

這是文獻檢索後的關鍵修訂。原版假設四層治理對等回應，但 2026 年的實際厚度分布是：

| 治理層 | 2026 厚度 | 主要承載 | 主要缺口 |
|---|---|---|---|
| G_industry^A | 厚 | W3C VC、MCP、DID Auth、ISO 42001 | agent-presented VC 標記與 holder binding 仍待標準化 |
| G_state^A | 弱 | EU AI Act + 部分 OECD 國家 AI 立法 | AI 代理權立法多數法域未成熟；agent provider 認證程式空白 |
| G_recognition^A | 最弱 | OECD AI Principles + Hiroshima Process（軟法） | 無 AI 代理跨境互認框架；OECD vs 非 OECD 縫隙 |
| G_oversight^A | 厚（歐盟內） | GDPR Art 22 + AI Act Art 25 + EDPB | 跨境執行依賴成員國 market surveillance authority；歐盟外覆蓋不足 |

「四層同步推進」的原始版本不可行，「分層治理使部分層級先行」是更可被檢驗的主張。

### 7.3 G_industry^A 議題清單

**議題 7.3.1：agent-presented VC 的密碼學標記與 holder binding**。當 AI 代理代 holder 出示 VC presentation 時，verifier 必須能在密碼學層識別「這是 agent 代簽，非 holder 親簽」。具體機制——在 VC presentation 的 `proof.type` 加入 `AgentDelegationProof2026`；holder 親簽的 `AgentDelegationCapability` VC 作為 enabling envelope；verifier 在驗證階段必須同時驗證 agent 的 attestation 與 holder 的 delegation capability。

**議題 7.3.2：MCP 與 agent-to-agent 通訊的隱私底線**。MCP（Anthropic 2024）<sup>67</sup>與 Google A2A protocol 為 AI 代理跨工具、跨服務通訊的底層規格。需要建立的標準包括強制 selective disclosure 預設、ephemeral context 的強制 TTL、federated inference 的可選擇性。

**議題 7.3.3：agent state 可攜性與互通性測試**。當 holder 從 agent provider A 切換到 B，agent state（包含 conversation history、user preferences、delegated capabilities）必須可攜。建議由 DIF Agent Portability WG 制訂 Agent State Format 標準。

**議題 7.3.4：industry capture 風險的對應**。Frontier model 提供者（OpenAI、Anthropic、Google DeepMind、Meta、Mistral）在 W3C / DIF / OASIS 工作組中的影響力大幅高於 wallet 廠商在 W3C VC WG 的影響力，industry capture 風險加劇<sup>68</sup>。對應機制——IETF / W3C 開放標準程序的嚴格執行、NIST AI Safety Institute Consortium 等公部門參與標準制定、Council of Europe AI Convention CETS 225 提供的人權底線<sup>46</sup>。

### 7.4 G_state^A 議題清單

**議題 7.4.1：AI 代理權的法律有效性立法**。EU AI Act 2024/1689 雖規範高風險 AI 系統（Annex III），但未直接處理「AI 代理代理 holder 在 civic action 中表達意志」的法律效力<sup>2</sup>。需要的立法內容——AI 代理在投票、結社、請願等場景的可委任性邊界（與第 4 章 R-DEMARCATION 對齊）；AI 代理代簽法律文件的法律效力範圍；AI 代理失敗時的歸責規則。

**議題 7.4.2：AI agent provider 認證程式**。類比 eIDAS 2.0 第 5b 條對 trust service provider 的認證要求<sup>1</sup>，G_state^A 需建立 agent provider 的法律地位——認證主管機關指定、認證項目、撤照機制。

**議題 7.4.3：AI 代理在司法與行政程序中的可採納性**。當公民提交申請、提出訴訟、回應行政調查時使用 AI 代理，行政與司法機關必須有清晰的可採納性規則。具體議題包括 AI 代理代填的行政文件是否需揭露 agent 使用（類比 *Loomis v Wisconsin* 2016 對 COMPAS 在量刑中的揭露要求<sup>20</sup>）；AI 代理代擬的訴狀是否影響可採性（美國 *Mata v Avianca* 2023 對 ChatGPT-generated 訴狀的處理為負面先例<sup>69</sup>）。

**議題 7.4.4：state capture 風險**。威權法域可能透過 G_state^A 強勢介入。中國《生成式人工智慧服務管理暫行辦法》第 4 條把 AI 內容納入意識形態管理<sup>70</sup>。這些做法與 G_recognition^A 軟法（OECD AI Principles 強調人權）難以對接，需要 G_oversight^A backstop（CETS 225 第 4 條人權底線）<sup>46</sup>。

### 7.5 G_recognition^A 議題清單

**議題 7.5.1：跨境 AI 代理代理權承認協議**。當 holder 用其本國 agent provider 在境外 civic action 中執行委任，承認問題是雙重的——承認本國立法授予的代理權（公法）+ 承認 agent provider 的營業合法性（私法）。具體機制——雙邊代理權承認協議；Hague Conference on Private International Law 對 e-Apostille 的擴展<sup>71</sup>；GCC Digital Identity Mutual Recognition Initiative (2024)<sup>72</sup>與 ASEAN Digital Economy Framework Agreement 的 AI 代理擴展。

**議題 7.5.2：軟法跨境互認的具體載體**。OECD AI Principles 2019/2024、Hiroshima Process Friends Group、Seoul/Bletchley Declaration、CETS 225 構成當前軟法網。但這些工具的執行力遠弱於 GDPR 一致性機制。對策——Hiroshima Process Friends Group 擴展為類似 G7 + Indo-Pacific + Latin America + Africa 的多區域對話；OECD AI Incidents Monitor 升級為跨境 AI 失敗案例的官方資料庫；CETS 225 第 16 條（risk assessment）的執行細則由跨境工作組共同制訂。

**議題 7.5.3：lowest-common-denominator 風險**。G_recognition^A 跨境互認可能退化為弱共識，把高標準成員拖向低標準。對應機制——G_oversight^A 的 GDPR / CETS 225 強監管 backstop；APEC CBPR + Global CBPR Forum 2024 的 enforcement-grade 認證取代 self-attestation。

**議題 7.5.4：OECD vs 非 OECD 縫隙**。OECD AI Principles 與 Hiroshima Process 主要覆蓋 OECD 成員 + G7 邀請國，覆蓋率約全球 GDP 的 65% 但只佔人口的 18%。非 OECD 法域（印度、印尼、巴西、奈及利亞、埃及等大型新興經濟體）的 AI 代理治理議程獨立發展。具體對策——AU Continental AI Strategy (2024)<sup>73</sup>與 EU 之間的對話機制；BRICS AI Working Group（如成立）作為平行對話平台；ITU AI for Good Global Summit 作為非結盟技術對話。

### 7.6 G_oversight^A 議題清單

**議題 7.6.1：GDPR Art 22 對 AI 代理的覆蓋與漏洞**。GDPR Art 22(1) 規定 data subject 有權「不受僅基於自動化處理的決策影響」。CJEU *SCHUFA* (C-634/21, 2023) 把「決定性影響」納入 Art 22 範圍<sup>17</sup>。但對 AI 代理場景的漏洞包括——AI 代理多為「holder 觸發、AI 執行、verifier 接受」的半自動化流程，「solely automated」測試可能不適用；Art 22(2)(a)-(c) 的三個例外可能被 wallet 服務條款濫用；Art 22 的救濟手段對 AI 代理的細粒度執行需要重新設計。EDPB 2024 update on automated decision-making 已預告對此的細化指引<sup>66</sup>。

**議題 7.6.2：EU AI Act Art 25 的覆蓋與漏洞**。Art 25 規定 AI 系統 provider（包括歐盟外 provider 把產品投放歐盟市場）的義務<sup>2</sup>。漏洞包括——Annex III 高風險清單對 civic action 場景覆蓋部分但不完整；Art 25 的執行依賴成員國 market surveillance authority，與 GDPR Art 56 lead supervisory authority 平行但未整合；GPAI 義務章節對「下游 agent provider 用 GPAI 服務 civic action」的責任傳遞規則尚未定型。

**議題 7.6.3：消費者保護機關的跨境協作**。Regulation (EU) 2017/2394 (CPC Network) 為跨境消費者保護建立了 SLO 機制<sup>74</sup>，但處理時效平均 16 個月。延伸到 AI 代理——CPC Network 應在 2027-2028 修訂中明確涵蓋 AI agent 爭議；與 ICN cross-border enforcement working group 整合；FIN-NET 的 AI 代理失敗 ADR 機制擴展。

**議題 7.6.4：AI Safety Institute 網絡的 cross-jurisdictional 角色**。UK AISI (2023) + US AISI (2024) + EU AI Office (2024) + Japan AISI (2024) + Korea AISI (2024) + Singapore AISI (2024) + Canada AISI (2024) 構成 AI Safety Institute 網絡<sup>65</sup>。延伸到 G_oversight^A 的具體角色——frontier model evaluations 的跨境共享；AI 代理失敗 incidents 的跨境報告（OECD AI Incidents Monitor 升級為 backbone）；高風險場景（投票、醫療、福利）的特別 evaluation 標準。

### 7.7 五方責任比例（分析性建議）

對 LLM-agent wallet 跨境失敗的五方責任比例，本文建議——issuer 25 / verifier 25 / wallet provider 15 / agent provider 25 / model provider 10。此比例為政策建議數，明示「待保險業精算與跨境爭議統計支撐」。

| 五方 | 責任比例 | 主要根據 |
|---|---|---|
| issuer | 25% | 對「agent 可使用的 credential」的合理預期義務；類比 eIDAS 2.0 Art 5b trust service provider |
| verifier | 25% | 對 agent-presented VC 的合理識別義務；不得無故拒絕但也不得無條件接受 |
| wallet provider | 15% | 提供 holder/agent 區分的密碼學原語；責任比例較低因為非主動代理 |
| agent provider | 25% | 部署 agent 的直接責任主體；EU AI Act Art 25 的核心對象 |
| model provider | 10% | 提供 frontier model 但不直接部署 agent；GPAI 義務章節覆蓋 |

具體比例需以保險業精算（從 cyber insurance 領域延伸）+ 跨境爭議統計（從 Brussels I Recast 案例庫延伸）+ 個案調整（依 task 風險類別）三條校準路徑共同精細化。

### 7.8 時間階段化（分析性建議）

四層治理在 2026-2040 年的可行時間階段化建議——

- **G_industry^A 與 G_oversight^A：5 年內可行（2026-2031）**。W3C VC v2.0 + MCP 標準化 + EDPB 2024 update + AI Safety Institute 網絡擴張屬於既有路徑的延伸；
- **G_state^A：5-10 年（2027-2036）**。EU AI Act + 部分 OECD 國家 AI 立法已啟動；agent provider 認證程式與 AI 代理權立法需要 5-10 年成熟；
- **G_recognition^A：10-15 年（2031-2041，OECD 內）**。CETS 225 + Hiroshima Process Friends Group + 雙邊互認協議的累積需要 10 年以上；OECD 外覆蓋空白將持續存在。

時間階段化是分析性建議，不是預測。技術迭代速度與政治意願是兩個主要變項，前者可能加速 G_industry^A，後者可能延遲 G_state^A。

## 8. Process Tracing：五個失敗案例

### 8.1 Robodebt（澳洲 2016-2020）

澳洲 Department of Human Services 於 2015-2016 年部署 Online Compliance Intervention 系統，自 2016 年 7 月起共產生約 47 萬份不正確債務通知，總額約 17.6 億澳元；至少 3 起與 Robodebt 相關自殺案例被 Royal Commission 認定為直接相關<sup>75</sup>。Federal Court 在 *Prygodicz v Commonwealth* (2021) 認定全套機制違法，達成 18 億澳元集體和解<sup>76</sup>。Royal Commission Final Report (2023) 把責任分散歸給政治決策層、高階公務員、法務顧問、系統設計工程團隊、第一線員工。第一線 case officer 與受款人成為 Elish moral crumple zone 的雙重承擔者；系統開發商（NTT Data 等承包商）幾乎完全不在歸責路徑上。對應第 3 章矩陣 AA-𝒩 △ + AA-ℱ △、第 4 章四維判準的 active contestation 缺位、第 6 章三型責任真空的型 (i) 道德緩衝區型 + 型 (ii) 演算法不透明型。

### 8.2 荷蘭 SyRI 與 Toeslagenaffaire（2014-2021）

SyRI（System Risk Indication）是荷蘭 Ministry of Social Affairs and Employment 2014 年開始部署的跨部會風險評分系統。District Court of The Hague 於 2020 年 2 月在 *NJCM et al v De Staat der Nederlanden* (ECLI:NL:RBDHA:2020:865) 裁定 SyRI 違反 ECHR Art 8（私生活權），核心理由是缺乏透明度與比例性失衡<sup>19</sup>。Toeslagenaffaire 醜聞中，約 2.6 萬戶家庭（多為移民背景）被誤標為詐欺，導致家庭破裂、兒童被強制安置；荷蘭 Rutte III 內閣於 2021 年 1 月集體請辭<sup>77</sup>。SyRI 演算法本身的設計者（部會內部開發團隊與外部承包商）不在訴訟主體中；Toeslagenaffaire 的 ML 模型是否包含明確「種族」或「移民背景」變項至今仍是未解爭議。對應第 3 章矩陣 TC-𝒩 △ + AA-ℱ △、第 6 章三型責任真空的型 (ii) 不透明型主導 + 部分型 (iii) 跨法域擴散。

### 8.3 印度 Aadhaar-PDS / NREGA 自動化排除（2017-2025）

Aadhaar 本身是 biometric authentication，但 2018 年後 PDS（公共配給制度）與 NREGA（鄉村就業保障）逐步引入 ABPS（Aadhaar Based Payment System）與 e-KYC 自動化驗證。Right to Food Campaign 於 2017-2024 年記錄至少 80 起與 Aadhaar/PDS 直接相關的飢餓死亡案例<sup>78</sup>，其中代表性案例為 2017 年 9 月 Jharkhand Simdega 區 Santoshi Kumari（11 歲女童）因家庭 Aadhaar 連結失敗連續八天無食物導致死亡<sup>79</sup>。Drèze & Khera 田野研究記錄 Jharkhand 部分地區排除錯誤率達 20-30%<sup>80</sup>。Internet Freedom Foundation (2024) 報告指出 NREGA ABPS 強制化導致 2023-2024 年間數百萬鄉村工人付款失敗<sup>81</sup>。歸責鏈條斷裂——技術系統設計者、政策決定者、第一線 PDS 商店主、受害家庭五段之間沒有任何連繫因子能取得結構性優先。對應第 3 章矩陣 AA-ℱ ✗ + TC-𝒩 △、第 6 章三型責任真空的型 (i)(ii) 疊加。

### 8.4 State v Loomis 與 COMPAS 風險評分（2013-2024）

COMPAS 是 Northpointe（後 Equivant）開發的再犯風險評分專屬演算法。Eric Loomis 在 Wisconsin 因駕車逃逸被判 6 年徒刑，量刑時法官依據包含 COMPAS 高風險評分的 PSI 報告。Wisconsin Supreme Court 於 2016 年以 *State v Loomis* 881 N.W.2d 749 維持原判，理由是 COMPAS 評分「僅是法官考量因素之一」並非決定性<sup>20</sup>。ProPublica 於 2016 年揭露 COMPAS 對黑人有系統性偏見（誤判率為白人兩倍）<sup>82</sup>。法官（State）作為「最後決定者」承擔法律責任；演算法供應商以商業祕密保護免於演算法揭露；個別法官以「僅是參考」推託。Crootof, Kaminski & Price (2023) 把這種結構命名為「rubber stamp」型監督<sup>35</sup>。對應第 3 章矩陣 AA-ℬ ✗（contestation 不可委任）、第 4 章四維判準的 active-stance contestation 失能。

### 8.5 Tornado Cash（2022-2024）

Tornado Cash 是部署在 Ethereum 的隱私性 mixer 智能合約，自動化執行混合協議。2022 年 OFAC 把協議的智能合約地址列入 SDN list，理由是被 DPRK Lazarus Group 用於洗錢約 4.55 億美元<sup>83</sup>。開發者 Roman Storm 與 Roman Semenov 於 2023 年 8 月被 SDNY 起訴 conspiracy to commit money laundering 與 sanctions violations 等罪名<sup>84</sup>。第五巡迴在 *Van Loon v Treasury* (122 F.4th 549, 5th Cir. 2024) 於 2024 年 11 月裁定 immutable smart contracts 不是 IEEPA 意義下的「property」，撤銷該部分制裁<sup>85</sup>。開發者承擔責任（被起訴的反向 crumple zone：協議自動化導致開發者被視為「最後可歸責的人」），但智能合約的去中心化特性使「指揮鏈」難以還原。這是 LLM-agent wallet 場景的近似先例——當 agent 行為自動化、跨境、不可逆，責任會「向上溯源」到設計者。對應第 3 章矩陣 RT-𝒩 △ + AA-𝒩 △、第 6 章三型責任真空的型 (iii) 跨法域擴散型主導。

### 8.6 案例對照彙整

| 案例 | 領域 | 矩陣 cell 對應 | 四維判準缺失 | crumple type | 治理層 |
|---|---|---|---|---|---|
| Robodebt（澳洲 2016-2020） | 福利自動化追討 | AA-𝒩 △ + AA-ℱ △ | active contestation | (i) + (ii) | G_state^A 弱 |
| 荷蘭 SyRI / Toeslagenaffaire | 福利反詐騙 | TC-𝒩 △ + AA-ℱ △ | communicative orientation | (ii) 主導 + 部分 (iii) | G_oversight^A：District Court 2020 |
| Aadhaar PDS 致死 + ABPS 2023-25 | 福利請領數位化 | AA-ℱ ✗ + TC-𝒩 △ | first-personal stance | (i) + (ii) 疊加 | G_state^A：印度 DPDP 規制機構 |
| State v Loomis (2016) | 量刑 AI 輔助 | AA-ℬ ✗ | active-stance contestation | (ii) | G_oversight^A：美國各州 AI 量刑指引分歧 |
| Tornado Cash 2022-25 | 隱私混幣 + DPRK 制裁 | RT-𝒩 △ + AA-𝒩 △ | first-personal 與 attribution 撕裂 | (iii) 主導 | G_recognition^A 失能：US OFAC vs EU 立場分歧 |
| SCHUFA C-634/21 (2023) | 信用評分 | AA-ℱ △ | （不直接涉政治行動） | (ii) | G_oversight^A：GDPR Art 22 擴大解釋 |

## 9. 反事實壓力測試

### 9.1 CF1：OECD 五國 mutual recognition

**反事實情境**：假設在 2028 年，EU AI Act + Brazil ANPD AI guidance + Singapore Model AI Governance Framework v3 + 韓國 PIPA AI amendment + 日本 PIPA + AI Bill，五個獨立 AI 治理體達成 mutual recognition agreement。具體機制——五國 AI Safety Institute 互相承認 frontier model evaluations；AI agent provider 在五國中任一獲得認證後在另四國自動具備執業資格；AI 代理失敗的 incidents 在五國共享，跨境救濟管道由五國 SLO 互轉。

**壓力測試**：這個情境是 G_recognition^A 層的最樂觀情境。即使五國達成互認，仍有四項缺口會持續存在。

第一，**覆蓋率縫隙**。五國（EU 27 + Brazil + Singapore + Korea + Japan）合計 GDP 約全球 35%、人口約 12%，覆蓋率不及全球的 1/4。印度、印尼、奈及利亞、墨西哥等大型新興經濟體未涵蓋；非洲多數國家、中東多數國家、拉美多數國家完全未涵蓋。OECD vs 非 OECD 的縫隙在這個情境下不僅不消除，反而被「OECD 五國互認」加速強化（前者治理密度提升、後者相對下降）。

第二，**frontier model 訓練 vs 部署的不對稱**。五國中 EU + Korea + Japan + Singapore 是 frontier model 訓練的次要法域（主要法域是美國 + 中國 + 英國），五國互認不能解決「美國 / 中國訓練的 model 在五國部署的責任問題」。需要 EU-US TTC AI Roadmap 2024 的延伸 + 美中 AI 對話（目前處於僵局）才能填補。

第三，**AI 代理跨境的具體歸責規則仍未統一**。即使五國互認認證程式，AI 代理失敗的 incident 中 model provider / agent provider / wallet provider / verifier / issuer 的責任比例仍由各國國內法決定。article 14 §6 的「規範遞延」分析對此有對應——規範遞延需「雙邊同意條件」，五國互認雖滿足同意條件，但具體歸責規則的統一仍需條約層級協議（類比 Brussels I Recast 對歐盟內歸責規則的統一）。

第四，**全球南方 civic action 的 AI 代理場景幾乎無覆蓋**。CF1 的五國互認對巴西公民在新加坡使用 AI 代理執行 civic action 的場景有效（兩者都在五國內），對巴西公民在阿根廷使用 AI 代理的場景無效。

**結論**：CF1 情境下 G_recognition^A 層的覆蓋率提升至 OECD 五國互認，但不足以填補全球跨境 AI 代理責任真空；OECD vs 非 OECD 縫隙會持續存在。FTLA-Agent 因此不主張「G_recognition^A 在 5-10 年內全覆蓋」，§7.8 修訂主張的「10-15 年 OECD 內部互認、OECD 外持續空白」在 CF1 壓力測試下被確認。

### 9.2 CF2：100 萬名歐盟公民投票權跨境失敗

**反事實情境**：假設 2027 年 X-Wallet（虛構名，假設總部在矽谷、伺服器在愛爾蘭、agent 模型由 Anthropic-or-equivalent 在矽谷訓練）部署 LLM-agent 「VoteHelper」自動為歐盟公民代簽 EUDI Wallet 中的 voting credential。Agent 在處理跨境投票（歐洲議會選舉海外投票）時誤判一批波蘭與義大利公民身分，導致這 100 萬人投票權主張被各國 verifier 拒絕。傷害發生在 2028 年 6 月歐洲議會選舉投票日，事後無法追溯補救。

**五段鏈條歸責路徑**：

L1（agent 開發者，Anthropic-or-equivalent）：依 EU AI Act Art 25「外國 provider 跨境義務」，agent 落入 Annex III「democratic processes」高風險清單，可被歐盟 AI Office 處 7% 全球年營收行政罰款。但個別公民不能直接從 L1 求償——AI Act 不創設個人請求權。

L2（agent operator / X-Wallet 的代理服務商）：依 GDPR Art 22 + *SCHUFA*，operator 是 controller，須提供「reasoning of decision」「meaningful human review」；100 萬人理論上可集體提起 GDPR Art 82 損害賠償。但跨 27 國集體訴訟的協調問題（無 EU 級 class action 機制）使實務不可達；GDPR collective redress 仰賴各成員國國內法（Representative Actions Directive 2020/1828<sup>86</sup>）。

L3（wallet provider / X-Wallet）：依 eIDAS 2.0 Art 5b，trust service provider 對「故意或過失造成的可預見損害」承擔賠償責任；但 X-Wallet 若未取得 EUDI Wallet 認證，Art 5b 不適用，回到各成員國民商法。

L4（issuer，例如波蘭與義大利選舉主管機關）：作為 voting credential 發行者，可能依各國行政法承擔部分責任；但「issuer 對 agent 自動代簽的合理預期義務」尚無判例。

L5（verifier，各國投票站系統）：依 eIDAS 2.0 Art 5d 拒絕憑證之合法理由，若 verifier 因 agent 簽章不合規拒絕，verifier 在 ECHR Protocol 1 Art 3（自由選舉權）下可被質疑——但這條路徑只能由公民個人訴 ECtHR，需先用盡國內救濟，平均 7-8 年。

**救濟空白量化**：

- 行政罰款：可由 EU AI Office 對 L1 開出 7% 罰款（理論上 ≥ 數十億美元級），但罰款進歐盟預算，不流向受害者；
- 個人損害賠償：100 萬人的非物質損害（投票權失敗）若以每人 € 500 計，總額 € 5 億；實務取得概率（基於 Robodebt 與 Toeslagenaffaire 比較）約 10-30%；
- 程序時間：從 2028-06 投票日失敗到首批個人取得實際賠償，估計 2032-2035 之間；
- 補救可行性：投票權失敗不可逆——選舉已過，個人對該次投票結果無補救可能；只能取得金錢賠償。

**結論**：CF2 情境下，具體歸責路徑存在但破碎、緩慢、不對等。5 段鏈條中，L1 與 L3 的法律工具最強但個人不可達；L2 是個人可訴但跨境協調困難；L4 與 L5 的責任邊界不清。問題並非「無規則」，正確刻畫是「規則破碎且強制力跨境衰減」。CF2 是 Q10b（accountability allocation 跨境多方歸責缺口）的具體形態。

### 9.3 CF3：relational personhood 被廣泛接受

**反事實情境**：假設未來 5-10 年內，Coeckelbergh 的 relational personhood 論<sup>87</sup>被學界、立法者、社會主流廣泛接受。歐盟通過某種「AI Personhood Directive」承認部分高等 AI 系統具備有限 legal personhood（類似企業法人但範圍更窄）。在此情境下，AI 代理在結構不可委任區的位置是否會變？

**情境分析**：

(1) 法律承認可能對應到「契約能力」「資料保護權」「侵權訴訟主體地位」等中性法律地位，但不一定延伸到「政治公民權」。歷史類比是公司法人——公司有 contract、tort、property 能力，但沒有投票權（Citizens United v. FEC 2010 是 corporate political spending 的爭議，不是 corporate voting rights 的承認）<sup>88</sup>。

(2) Plurality 論的存在論版本仍能擋住反論。即使法律承認 relational personhood，第 4 章 §4.1 的存在論論證（natality + mortality + irrevocability）不依賴於法律承認。法律可以承認某種地位，但不能改變該主體的存在論結構。

(3) 但 Habermas 與 Pettit 進路會受影響。如果 relational personhood 被接受，AI 代理能否擔任 Habermas 言說行動的「對話夥伴」與 Pettit contestation 的「bearer」？Habermas 的 reciprocal recognition 需要「對方承認我也承認我」，這個雙向結構在 AI relational practice 中是否成立是經驗問題。Pettit 的 bearer position 需要「可被點名、可被質詢、可被責罰」，這在 limited personhood 框架下技術上可實現（AI 系統可被法律點名、被質詢、被罰款），但「責罰」對 AI 系統的規範意義仍存疑（罰款 AI 系統等於罰款其運營商，責任仍然回到人類主體）。

(4) Coeckelbergh 自己（2024）"Why AI Undermines Democracy" 反而傾向強化人類民主主體的位置<sup>89</sup>，這顯示他在 ethics vs politics 二域的立場是有區分的。

**結論**：CF3 對 SA2 的衝擊是「降一檔不降兩檔」——plurality 論的存在論版本仍存活，Habermas 與 Pettit 進路被削弱但未崩塌。三進路合取結構在 CF3 下仍給出「結構不可委任區存在但範圍可能縮小」的結論。具體地，最終投票的 endorsement、刑責承擔的 mens rea、人格表意的 first-personal disclosure 在 CF3 下仍屬常駐型不可委任；但 contestation 的 bearer 位置可能在某些技術成熟場景下擴大到包含 AI 代理。

### 9.4 CF4：wallet 工程持續維持「個人擁有」預設不變的 5-10 年

**反事實情境**：假設 2026-2036 年 wallet 工程主流預設不變——個人擁有 / 個人識別 / 個人私鑰三重結構維持；EUDI Wallet 進入全面強制階段；台灣 TW DIW 強制連結健保、長照、退休金、教育；POTENTIAL Use Case 6 的 mandate 場景仍停在 issuer-side attestation；W3C 沒有 coexistentSubjects 規格更新；audit-by-design 與 minimal delegation 仍是學術倡議而非工程強制。

**5-10 年內 supported decision-making 的退化路徑**：

**第 1-2 年（2026-2027）**：失智人口持續增加（WHO 2024 預測 2050 年達 1.39 億）<sup>90</sup>，家屬代行 wallet 的場景大規模發生。工程上家屬持有當事人密鑰（直接代簽）成為事實標準。「supported」與「substituted」在 wallet 場景無區分。

**第 3-5 年（2028-2030）**：EUDI Wallet 強制階段引發大量委任代理需求。multi-profile 普及但 multi-tenant 仍未實作。失能 / 失智者的「supported」名義上存在，工程上 100% 退化為 substituted（家屬持鑰）。CRPD Committee 對 EU 成員國的 Concluding Observations 開始強調「digital identity systems 的 substituted 退化」問題。

**第 6-8 年（2031-2033）**：wallet 場景的 audit 不存在意味著 abuse 無法檢測。家屬不當挪用長照給付、退休金的案件在台灣與 EU 多國浮現。法院在追究時遇到「無法區分當事人是否同意」的證據困境。CRPD General Comment No. 1 對 wallet 場景的具體解釋成為 CRPD Committee 的重點議題。

**第 9-10 年（2034-2036）**：累積案例的法律壓力下，部分國家開始倉促立法要求 audit-by-design 與 multi-tenant。但因前期工程基礎未鋪設，立法後 5-10 年才能落地。在此空窗期內，CRPD Art 12 的工程化義務在事實上未被履行。

**這個退化是否構成 CRPD Art 12 的義務違反**？

CRPD Art 4(1)(a) 要求締約國「採取一切適當的立法、行政與其他措施實施本公約所承認的權利」<sup>47</sup>；General Comment No. 1 § 50 對「逐步廢除替代決策」的時程沒有明確期限，但要求「持續進展」（continuous progress）<sup>10</sup>。當 wallet 工程在事實上把 supported 退化為 substituted，且締約國未採取立法或行政措施糾正，這構成 Art 4(1)(a) 的不作為違反。

**結論**：CF4 的退化路徑是現實預測，不是極端假設。如果 wallet 工程不主動修正，5-10 年內 supported decision-making 在 wallet 場景必然退化為 substituted。這個退化構成 CRPD Art 12 的事實違反，並可被 CRPD Committee 透過 Concluding Observations / individual communication / inquiry procedure 三種機制追究。第 5 章的工程修正建議是避免這個退化的最低必要條件——不做這些修正，CRPD 義務在事實上不可能履行。

## 10. 接合系列其他文章與預告 F2

本文是 civic-proof series 第 16 篇（F1），承接系列既有論證並預告下一篇。

**接合 A4「假名參與的法律承認」（系列內部）**<sup>91</sup>：A4 處理假名身分在數位身分基礎設施中的法律承認問題，特別是 pseudonymous identification（假名識別）vs real-name identification（實名識別）的區分。本文第 3 章矩陣的 AT 列依賴 holder 的 first-personal endorsement，這在假名場景下需要進一步區分——pseudonym 仍是一個「人格主體在持續關係中累積的身份」（accountable pseudonymity），不同於「無歸屬的代理輸出」（agent-mediated pseudonymous action）。後者落入 Q10a 缺口。

**接合 A8「DNS vs 身分信任根」（系列內部）**<sup>7</sup>：A8 建立 FTLA 四層治理框架，本文第 7 章把 FTLA 延伸為 FTLA-Agent，繼承四層分工的概念框架但在各層的具體議題上重新展開。同構性論證在 §7.1 已給出。

**接合 A14「跨法域救濟空白」（系列內部）**<sup>8</sup>：A14 §3.5 列「LLM-agent wallet 自動代簽憑證」為候選第 5 類缺口，本文第 6 章正式形式化並拆為 Q10a/Q10b 兩個次類型。第 7 章 §7.7 給出五方責任比例（issuer 25 / verifier 25 / wallet provider 15 / agent provider 25 / model provider 10），明示為「分析性建議，待保險業精算與跨境爭議統計支撐」。

**接合 A15「公民證明取得權」§6.2（系列內部）**<sup>9</sup>：A15 §6.2 揭示 wallet 工程的個人擁有 / 個人識別 / 個人私鑰三重預設會把 supported decision 退化為 substituted decision。本文第 5 章承接此論證，給出三層工程可區分性判準（事前協商層 + 事後可逆層 + 決策證據鏈層）與三項工程修正（audit-by-design + minimal delegation + multi-tenant delegated key custody）。

**預告 F2「civic receipts 在條件可委任區的最小資料結構」**：本文第 5 章 §5.4 的 DeliberationRecord schema 與第 7 章 §7.3.1 的 `civic-action-receipt` 是同一概念在不同治理層的表現。F2 將處理三個未完成議題——(i) civic receipts 在跨境場景的 selective disclosure 機制（採用 BBS+ signature 或 SD-JWT）；(ii) civic receipts 的長期保存責任（holder 端 vs 第三方公證人）；(iii) civic receipts 的法庭可採性（類比 ESI 在民事訴訟的處理）。F2 的目標是把本文第 5 章的工程修正落地為可標準化的密碼學原語。

## 11. 誠實邊界與開放問題

### 11.1 跨層級警示 L1-L5

本文五個跨層級推論的限制如下表。

| 警示 | 跨層 | 強度評估 | 限制 |
|---|---|---|---|
| **L1** | 身分基礎設施規範 ⟨𝒩, ℱ, ℬ⟩ → 公民行動本身 | 中強 | 透過 A15 precursor right 在「介面」層完全傳遞；「實質」層需另由政治哲學基礎承擔 |
| **L2** | 政治哲學基礎 1958/1981/1997 → 工程設計判準 2026 | 中 | Arendt/Habermas/Pettit 寫作時 LLM 不存在；存在論層級不依賴特定技術環境，但邊界在「未來 LLM-agent 是否獲得 Habermas 意義上的自主性」這個經驗問題上保持開放 |
| **L3** | 單一法域 Elish crumple zone → 跨法域責任真空 | 中強 | FTLA 四層分層處理為延伸機制；責任緩衝鏈（chain-form）是對 Elish 框架的延伸，非原文表述 |
| **L4** | principal-agent theory → civic action delegation | 中 | 範疇跨越——agency theory 隱含預設 utility maximization，公民行動的目標常非 utility（dignity, recognition, voice）；本文在 𝒩 + ℱ 兩列保留 PA 工具性使用，ℬ 列引入 Pitkin 等替代框架 |
| **L5** | 「人之間」plurality → 「人 vs AI 代理」plurality | 中弱 | W2 反論需 §4.1 完整論證；plurality 是存在論層級而非功能論層級的判準是哲學立場選擇，非經驗事實 |

### 11.2 五項誠實邊界

**邊界一**：5×3 矩陣中 cell 屬性（✓/△/✗）的判定依賴 ℬ 哲學基礎的特定詮釋。若採取 Coeckelbergh relational personhood 全面替代版本，矩陣的 ℬ 列須重做。本文採存在論版本，這是哲學立場選擇，非經驗事實。CF3（§9.3）對此選擇做了部分壓力測試。

**邊界二**：θ₁ ≈ 0.2、θ₂ ≈ 0.7 的閾值為政策建議數，須經 ≥ 5 個案例的迴歸校準。第 8 章 process tracing 給出五個案例的初步分布，但案例的場域分布偏向 OECD 高所得國家，跨拉美、非洲、東南亞的覆蓋不足。

**邊界三**：CRPD Art 12 透過 ICCPR + ICESCR 回流為普遍工程義務的論證屬規範性論證，不是法律擴張解釋。把它作為個別國家立法的直接依據可能過度延伸；CRPD Committee 對 wallet 場景的 General Comment 是補完此論證的關鍵下一步。

**邊界四**：五方責任比例（issuer 25 / verifier 25 / wallet provider 15 / agent provider 25 / model provider 10）為政策建議數，無實證來源。具體比例需以保險業精算（從 cyber insurance 領域延伸）+ 跨境爭議統計（從 Brussels I Recast 案例庫延伸）+ 個案調整（依 task 風險類別）三條校準路徑共同精細化。

**邊界五**：時間階段化（G_industry^A/G_oversight^A 5 年 / G_state^A 5-10 年 / G_recognition^A 10-15 年）為前瞻性估計，不是預測。技術迭代速度與政治意願是兩個主要變項。OECD 外覆蓋空白將持續存在的判斷可能過度悲觀，需平衡論證 GCC + AU + APEC 趨勢。

### 11.3 開放問題

**O1 退化函數參數的經驗校準**：P_degrade 的 α、β、θ 參數需經驗校準，建議取 ≥ 5 個 civic AI agent 部署案例做迴歸。

**O2 時間維度退化**：model drift 6-18 月對 trust calibration 的退化機制；建議取 NBER Acemoglu-Restrepo 2025<sup>33</sup> + Anthropic / OpenAI longitudinal evaluation 數據。

**O3 跨拉美 AI 福利系統失敗案例**：Argentina ANSES、Brazil Bolsa Família 數位化、Mexico CURP-AI 整合（檢索結果不足）。

**O4 非 OECD 法域的具體治理路徑**：印度 / 印尼 / 奈及利亞 / 墨西哥 / 巴西 / 南非 / 埃及的逐國分析。

**O5 W3C 規格化路徑**：DelegationProvenanceCredential 與 coexistentSubjects DID Document 欄位的 W3C Working Group 提案路徑（建議 2027-2028 年成為 W3C Recommendation）。

**O6 訪談需求**：見 notes/open-questions.md 的具體訪談對象建議——憲法學者（陳愛娥 / 蘇彥圖）、AI ethics 研究者（劉靜怡 / 邱文聰）、CRPD 國家監測委員會、EUDI ARF Working Group、台灣失智症協會家屬等。

## 12. 條件性學術結論

本文的核心命題從第 1 章的三個論證升級展開——5×3 = 15 cell 必要條件矩陣（9/4/2 分類）、CRPD Art 12 General Comment No. 1 §26-29 是規範性硬約束、跨法域責任真空細分三型 + Q10a/Q10b 拆分 + 時間階段化。經第 3-9 章的展開，可給出三條條件性結論。

### 12.1 結論一：三區帶劃界依工程修正執行而成立

AI 代理在 civic action 中的位置可被劃分為可委任區（Z₁）、條件可委任區（Z₂）、結構不可委任區（Z₃）。Z₃ 的常駐型部分（RT-ℬ ✗ 與 AA-ℬ ✗）由 Arendt + Habermas + Pettit 三進路合取覆蓋決定，無論技術成熟度皆不可委任。Z₂ 的成立依三項工程修正（audit-by-design + minimal delegation + multi-tenant delegated key custody）的執行，缺一即退化為 substituted 邏輯，落入 Z₃ 的情境型部分。Z₁ 的範圍依第 3 章退化函數的 θ₁ ≈ 0.2 閾值決定，但此閾值待經驗校準。

**結論的條件性**：三區帶劃界是「條件成立」，條件是 (i) Tomasev 五件 2+3 結構的概念有效性、(ii) ⟨𝒩, ℱ, ℬ⟩ 中 ℬ 為 Arendt + Habermas + Pettit 三家會合下界的哲學立場、(iii) 第 3 章退化函數參數的經驗校準。三條件中任一動搖，劃界結論需要重做。

### 12.2 結論二：跨法域治理推進依 FTLA-Agent 四層的時間階段化執行而部分緩解

跨法域 AI 代理責任真空無法用單一治理層解決。FTLA-Agent 四層分層治理在 2026 年呈現非對稱厚度——G_industry^A 與 G_oversight^A 厚、G_state^A 弱、G_recognition^A 最弱。時間階段化建議——G_industry^A/G_oversight^A 5 年內可行、G_state^A 5-10 年、G_recognition^A 10-15 年（OECD 內），OECD 外覆蓋空白將持續存在。五方責任比例（issuer 25 / verifier 25 / wallet provider 15 / agent provider 25 / model provider 10）為分析性建議。

**結論的條件性**：跨法域治理推進是「條件部分緩解」，條件是 (i) OECD 內部的政治意願（特別是歐盟、美國、亞太民主法域）、(ii) frontier model 提供者寡頭化結構不過度阻礙標準制定、(iii) CETS 225 + Hiroshima Process 的執行細則在 2027-2030 年內成熟。三條件中任一失敗，G_recognition^A 層的覆蓋率提升將大幅延後。

### 12.3 結論三：政治哲學立場（Arendt/Habermas/Pettit vs Coeckelbergh）決定 Z₃ 的最終範圍

Z₃ 結構不可委任區的最終範圍依政治哲學立場選擇——本文採 Arendt + Habermas + Pettit 三進路合取的存在論版本，把 plurality、reciprocal recognition、active-stance contestation 作為人類專屬的存在論結構。若採 Coeckelbergh relational personhood 全面替代版本，Z₃ 的範圍會縮小（contestation 的 bearer 位置可能擴大到包含 AI 代理）。

**結論的條件性**：Z₃ 範圍是「條件確定」，條件是政治哲學立場選擇。本文的選擇有三個支撐——(i) Coeckelbergh 自己（2024）"Why AI Undermines Democracy" 傾向強化人類民主主體位置，顯示其 ethics vs politics 二域立場區分<sup>89</sup>；(ii) Bryson (2018) "Patiency is not a virtue" 對 AI 道德主體地位的反駁<sup>27</sup>；(iii) CRPD General Comment No. 1 對 supported decision-making 的設計原則與 relational personhood 在精神上對齊（皆把 personhood 視為 relational + supported），但不蘊含「可在 first-personal 場景代理」。

CF3（§9.3）的壓力測試結論是——即使 relational personhood 被廣泛接受，plurality 的存在論版本仍能擋住反論，Z₃ 的核心（最終投票、刑責、人格表意）保持不可委任。但 Z₃ 的邊界區域（contestation 的 bearer 位置）在 CF3 下可能擴大。本文的最終範圍判定是「核心穩定 + 邊界視政治哲學立場而定」。

---

## 參考資料

1. Regulation (EU) 2024/1183 of the European Parliament and of the Council of 11 April 2024 amending Regulation (EU) No 910/2014 (eIDAS 2.0). OJ L, 30 April 2024. Articles 5a–5g (digital identity wallet), Article 11a (responsible Member State). 來源等級 A。
2. Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). OJ L, 12 July 2024. Article 14 Human Oversight; Article 25 Provider Obligations; Article 50 Transparency; Annex III High-Risk Systems; Chapter V (GPAI obligations). 來源等級 A。
3. Anthropic (2025). "Claude Computer Use: Evaluation Results and Safety Considerations." Technical Report. 來源等級 C（廠商 white paper，作為事件存在性佐證）。
4. OpenAI (2025). "Operator: A Browser-Using Agent." System Card; Google DeepMind (2025). "Gemini Astra Capability Card." Technical Report. 來源等級 C。
5. WEF / Capgemini (2025). "Agentic AI: Adoption and Governance Survey." Survey of executive AI deployment plans. 來源等級 B。
6. Tomasev, N., Bileschi, M., Gabriel, I., Bach, S., Birhane, A. et al. (2026). "Intelligent AI Delegation." arXiv:2602.11865 [v2, 2026-02-14]. Google DeepMind. §3.1–3.5 五件分解原文；§3.6 對 PA 化約論的反駁；§4.3 dynamic constraint 對偶；§5.2 civic context 案例。標明 [arXiv preprint, not peer-reviewed]。 來源等級 A。
7. civic-proof series article 8 (2026-05-06), "DNS vs identity trust roots: FTLA 四層治理框架"（系列內部）。 來源等級 A（系列內部）。
8. civic-proof series article 14 (2026-05-09), "Cross-jurisdictional redress gap: 四類典型缺口 + Q10"（系列內部）。 來源等級 A（系列內部）。
9. civic-proof series article 15 (2026-05-10), "Civic Proof Inclusion Rights" §6.2（系列內部）。 來源等級 A（系列內部）。
10. UN Committee on the Rights of Persons with Disabilities (2014). General Comment No. 1 on Article 12: Equal recognition before the law. CRPD/C/GC/1, 19 May 2014. §12-29 對 supported decision-making 的具體要件；§26-29 對廢除 substituted regimes 的硬性要求；§50 對「逐步廢除」時程。 來源等級 A。
11. European Commission (2024). The European Digital Identity Wallet Architecture and Reference Framework, version 1.4.0, September 2024 + (2025) version 1.5.0 (draft for comment). 來源等級 A（規格文件）。
12. POTENTIAL Consortium (2025). Mid-term Evaluation Report — Use Case 6: Power of Representation and Mandates; NOBID Consortium (2025). Mid-term Evaluation: Cross-border Payment Use Case; DC4EU Consortium (2025). Mid-term Evaluation Report; EWC Consortium (2025). EUDI Wallet Consortium Mid-term Report. 來源等級 B。
13. UN International Covenant on Civil and Political Rights (ICCPR), Art 26 (equal protection); International Covenant on Economic, Social and Cultural Rights (ICESCR), Art 2(2) (non-discrimination), Art 9 (social security access). 來源等級 A。
14. EUDI Wallet ARF, 2025-12 Cooperation Group rolling iteration（歷史穩定快照 v1.4）, §6.6.3 Delegation 規範。 來源等級 A。
15. Regulation (EU) 2016/679 (GDPR), OJ L 119, 4.5.2016. Article 22 (automated individual decision-making), Article 21 (right to object), Article 56 (lead supervisory authority), Article 82 (compensation), Recital 71. 來源等級 A。
16. Russell, S. (2019). *Human Compatible: Artificial Intelligence and the Problem of Control*. Viking Press. ISBN 978-0525558613. 第 6 章 inverse reward design + 第 8 章 controllability。 來源等級 A。
17. CJEU, *SCHUFA Holding AG v OQ* (Case C-634/21), Judgment of 7 December 2023, ECLI:EU:C:2023:957. 對 GDPR Art 22「solely automated decision」的擴大解釋。 來源等級 A。
18. Royal Commission into the Robodebt Scheme (2023). *Final Report* (7 vols.). Commonwealth of Australia, ISBN 978-1-921091-65-9. 來源等級 A。
19. *NJCM et al v De Staat der Nederlanden* (SyRI), Rb. Den Haag, 5 February 2020, ECLI:NL:RBDHA:2020:865. 來源等級 A。
20. *State v Loomis*, 881 N.W.2d 749 (Wis. 2016); cert. denied, 137 S. Ct. 2290 (2017). 來源等級 A。
21. Power of Attorney 在 UK / 德國 Vollmacht / 台灣意定監護的法律基礎。 來源等級 A。
22. W3C Decentralized Identifiers (DIDs) v1.0, W3C Recommendation, 19 July 2022. § 5.1 DID controller、§ 5.1.1 DID subject、§ 5.2 verificationMethod、§ 7 DID resolution、§ 8.2 controller-subject 分離、§ 8.3 update operations。 來源等級 A。
23. W3C Verifiable Credentials Data Model v2.0 Recommendation (2025-05-15). §4.12 securing mechanisms + §5.7 zero-knowledge proofs + §7.1 verification algorithm（Rec 階段已將舊 WD §5.8 holder bindings / §6.3.1 重排為 §4.12 / §5.7 / §7.1）。 來源等級 A。
24. Bechmann, A. & Bowker, G. C. (2019). "Unsupervised by Any Other Name: Hidden Layers of Knowledge Production in Artificial Intelligence on Social Media." *Big Data & Society* 6(1). 對 ML 黑箱不可審計性的論述。 來源等級 B。
25. Pasquale, F. (2020). *New Laws of Robotics: Defending Human Expertise in the Age of AI*. Harvard University Press. ISBN 978-0-674-97572-8. 第 4 條法則「AI 不可冒充人類」+ Chapter 6 (cross-border AI governance)。 來源等級 A。
26. Elish, M. C. (2019). "Moral Crumple Zones: Cautionary Tales in Human-Robot Interaction." *Engaging Science, Technology, and Society* 5: 40-60. DOI: 10.17351/ests2019.260. 來源等級 A。
27. Bryson, J. J. (2018). "Patiency is not a virtue: the design of intelligent systems and systems of ethics." *Ethics and Information Technology* 20(1): 15-26. DOI: 10.1007/s10676-018-9448-6. 來源等級 A。
28. Floridi, L. (2013). *The Ethics of Information*. Oxford University Press. DOI: 10.1093/acprof:oso/9780199641321.001.0001. 第 7 章 distributed morality。 來源等級 A。
29. High-Level Expert Group on AI (2019). *Ethics Guidelines for Trustworthy AI*. European Commission. human oversight 三層（HITL / HOTL / HIC）。 來源等級 A。
30. MacCallum, G. C. (1967). "Negative and Positive Freedom." *Philosophical Review* 76(3): 312–334. DOI: 10.2307/2183622. triadic 自由結構。 來源等級 A。
31. Pettit, P. (1997). *Republicanism: A Theory of Freedom and Government*. Oxford University Press. Ch.2 (pp. 21-50) freedom as non-domination；Ch.6 (pp. 171-205) republican democracy 的 contestation 要求。 來源等級 A。
32. Treasury Board of Canada (2019, rev. 2023). *Directive on Automated Decision-Making*. Algorithm Impact Assessment Tool. 來源等級 B。
33. NBER Working Paper Series 2024–2025 on AI Principal-Agent Theory: Acemoglu, D. & Restrepo, P. (2025). "Artificial Intelligence and the Decoupling of Decision and Action." NBER WP 32157; Athey, S. (2024). "Causal Inference for Delegated Algorithmic Decisions." NBER WP 31908. 來源等級 B。
34. CJEU, *Data Protection Commissioner v Facebook Ireland Ltd and Maximilian Schrems* (Schrems II), Case C-311/18, judgment of 16 July 2020, ECLI:EU:C:2020:559 + EU-US Data Privacy Framework Adequacy Decision (2023). 來源等級 A。
35. Crootof, R., Kaminski, M. E. & Price, W. N. (2023). "Humans in the Loop." *Vanderbilt Law Review* 76(2): 429-510. liability sink 概念。 來源等級 A。
36. Arendt, H. (1958). *The Human Condition*. University of Chicago Press. ISBN 978-0226025988. Ch. V「Action」§24-26 (pp. 175-188) 論 plurality 與 unique disclosure；§28 (pp. 199-207) 論 space of appearance；§44 (p. 313) 論 mortality stake；§1 Prologue (p. 7) 首次給出 plurality 定義「the fact that men, not Man, live on the earth and inhabit the world」，並於 §27 呼應同一論斷。 來源等級 A。
37. Honig, B. (1993). *Political Theory and the Displacement of Politics*. Cornell University Press. Ch.3-4 論 Arendt 對「不可委任的判斷」的詮釋。 來源等級 A。
38. Habermas, J. (1981). *Theorie des kommunikativen Handelns*. Suhrkamp. Bd. I, Kapitel III, §1-§4 (S. 367-452)；§III.3 (S. 387) 言說 vs 策略區分；§III.4 (S. 400-410) 三類有效性聲稱。英譯：McCarthy trans. (1984). *The Theory of Communicative Action, Vol. 1*. Beacon Press, Ch. III pp. 273-337。 來源等級 A。
39. Habermas, J. (1992). *Faktizität und Geltung*. Suhrkamp. Kapitel VII-VIII 民主程序的言說預設。英譯 Rehg trans. (1996). *Between Facts and Norms*. MIT Press, Ch.7-8。 來源等級 A。
40. Véliz, C. (2023). "Chatbots Shouldn't Use Emojis." *Nature* 615: 375. 來源等級 B。
41. Mouffe, C. (2000). *The Democratic Paradox*. Verso. Ch.4 論 agonistic pluralism 對 Habermas 共識模型的批判。 來源等級 A。
42. Mouffe, C. (2013). *Agonistics: Thinking the World Politically*. Verso. Ch.1-2 (p. 7) 對 legitimate adversary 的論證。 來源等級 A。
43. Pettit, P. (2012). *On the People's Terms: A Republican Theory and Model of Democracy*. Cambridge University Press. DOI: 10.1017/CBO9781139017428. Ch.3 (pp. 109-152) "Equally Accepted Terms"；Ch.4 (pp. 153-205) "Equally Accessible Influence"；Ch.6 (p. 218) active stance + bearer。 來源等級 A。
44. Pitkin, H. F. (1967). *The Concept of Representation*. University of California Press. ISBN 978-0520021563. Ch.5 (pp. 112-143) "The Mandate-Independence Controversy"；Ch.6 (pp. 144-167) "Representation as Acting For" 論 trustee vs delegate vs mandate。 來源等級 A。
45. Representation of the People Act 1983 (UK), §75 候選人本人對其名下發表的選舉文宣負法律責任。 來源等級 A。
46. Council of Europe Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law (CETS No. 225) (opened for signature 5 September 2024). Article 4 (人權底線), Article 5 (民主進程保護), Article 16 (risk assessment)。 來源等級 A。
47. UN Convention on the Rights of Persons with Disabilities (CRPD), UN GA Resolution A/RES/61/106, 13 December 2006. Article 12 全文；Article 4(1)(a) 立法措施義務；Article 13 access to justice。 來源等級 A。
48. UN Committee on the Rights of Persons with Disabilities (2017). Concluding observations on the initial report of the United Kingdom of Great Britain and Northern Ireland. CRPD/C/GBR/CO/1, 3 October 2017. § 30-31 對 Mental Capacity Act 2005 best-interests test 的批評。 來源等級 A。
49. *P v Cheshire West and Chester Council* [2014] UKSC 19, [2014] AC 896. 來源等級 A。
50. State of Israel. Capacity and Guardianship Law (Amendment No. 18), 5776-2016. § 67B-67F 設立 supported decision-making 框架。Cohen, N. (2018). "Israel's Capacity Law Reform: From Substituted to Supported Decision-Making." *Israel Law Review* 51(3): 451-478. 來源等級 A。
51. República del Perú. Decreto Legislativo No. 1384 (2018-09-04). 修正民法第 3, 42, 44, 45 條 + 新增 Art 659-A 至 Art 659-E (apoyos y salvaguardias) + 全面廢除 interdicción civil. Bregaglio Lazarte, R. (2019). "Una mirada al nuevo régimen de capacidad jurídica para personas con discapacidad en el Código Civil peruano." *Revista Latinoamericana en Discapacidad, Sociedad y Derechos Humanos* 3(1): 36-60. 來源等級 A。
52. 中華民國民法第 1110 條 + 1113-2 至 1113-10 條（意定監護新制，2019 年 5 月 24 日立法院三讀通過）。 來源等級 A。
53. United Kingdom. Mental Capacity Act 2005, c. 9. § 1 (principles), § 2-3 (capacity test), § 4 (best interests), § 13 (LPA revocation)。 來源等級 A。
54. 黃詩淳 (2020)。〈意定監護立法評析〉。《月旦法學雜誌》第 295 期，頁 5-22。 來源等級 B。
55. EDPB (2024). Statement 1/2024 on the role of GDPR in the EUDI Wallet. 來源等級 A。
56. UN International Covenant on Economic, Social and Cultural Rights (ICESCR), Art 2(2), Art 9。 來源等級 A。
57. Korff, D. & Brown, I. (2024). "Cross-border accountability gaps in AI agent governance." *International Data Privacy Law* 14(2): 145-170. 來源等級 B。
58. Regulation (EU) 1215/2012 (Brussels I Recast) on jurisdiction and the recognition and enforcement of judgments in civil and commercial matters. 來源等級 A。
59. Anthropic (2024). Model Context Protocol (MCP) Specification. 來源等級 B。
60. Decentralized Identity Foundation (DIF). Trust Establishment Working Group materials, 2024-2025. 來源等級 B。
61. ANPD (Autoridade Nacional de Proteção de Dados, Brazil), *Autoridade Nacional de Proteção de Dados publica orientações sobre IA e LGPD* (2024-2025). Lei nº 13.709/2018 (LGPD) Art 20。 來源等級 B。
62. Republic of Korea, *Personal Information Protection Act (PIPA) Amendment 2024* (effective 2024-09-15). 來源等級 B。
63. IMDA & PDPC Singapore (2024). Model Artificial Intelligence Governance Framework, Version 3 + AI Verify Foundation testing framework. 來源等級 B。
64. OECD AI Principles (2019, updated 2024). OECD/LEGAL/0449。 來源等級 A。
65. G7 Hiroshima Process International Code of Conduct for Organizations Developing Advanced AI Systems (October 2023) + Hiroshima Process Friends Group progress reports 2024-2025 + AI Seoul Summit, Seoul Declaration on AI Safety (May 2024) + Bletchley Declaration on AI Safety (November 2023) + AI Safety Institute network (UK 2023, US 2024, EU AI Office 2024, Japan 2024, Korea 2024, Singapore 2024, Canada 2024)。 來源等級 A。
66. EDPB Guidelines 02/2024 on automated decision-making and profiling for the purposes of Regulation 2016/679 (update of WP29 WP251rev.01, 2018), adopted October 2024。 來源等級 A。
67. Anthropic (2024). Model Context Protocol Specification. 來源等級 B。
68. Mittelstadt, B. (2019). "Principles Alone Cannot Guarantee Ethical AI." *Nature Machine Intelligence* 1: 501-507. DOI: 10.1038/s42256-019-0114-4。 來源等級 A。
69. *Mata v Avianca, Inc.*, 22-cv-1461 (S.D.N.Y. 2023) — 對律師提交 ChatGPT-generated 虛構判例的處理。 來源等級 A。
70. CAC (Cyberspace Administration of China), 《生成式人工智慧服務管理暫行辦法》(2023-08-15) + 《互聯網信息服務深度合成管理規定》(2022-11-25)。 來源等級 B。
71. Hague Convention on the International Protection of Adults (2000) + Hague Conference on Private International Law e-Apostille extension Working Paper 2023。 來源等級 A。
72. GCC Digital Identity Mutual Recognition Initiative (2024 framework agreement)。 來源等級 B。
73. African Union (2024). Continental AI Strategy (adopted by AU Executive Council, July 2024)。 來源等級 B。
74. Regulation (EU) 2017/2394 (CPC Network) + European Court of Auditors Special Reports 13/2021 + 26/2023。 來源等級 A。
75. Australian National Audit Office (2017-2022). Audit Reports on the Department of Human Services' Income Compliance Programme (Robodebt)。 來源等級 B。
76. *Prygodicz v Commonwealth* (No 2) [2021] FCA 634 (Federal Court of Australia, settlement approval)。 來源等級 A。
77. Dutch Parliamentary Committee (2020-2021). *Ongekend Onrecht* (Unprecedented Injustice) — Final report on the Childcare Benefits Affair (Toeslagenaffaire). Tweede Kamer 35 510。 來源等級 B。
78. Right to Food Campaign (India) (2017-2024). *Hunger Watch* survey series and starvation deaths database。 來源等級 B。
79. *Times of India* / *Indian Express* (2017-2024). Aadhaar-PDS starvation deaths reports — 含 Santoshi Kumari case (Jharkhand, Sep 2017)。 來源等級 C。
80. Khera, R. (2019). "Impact of Aadhaar on Welfare Programmes." *Economic & Political Weekly* 54(50): 61-70 + Drèze, J. & Khera, R. (2017). "Recent Social Security Initiatives in India." *World Development* 98: 555-572。 來源等級 A。
81. Internet Freedom Foundation (India) (2024). "Automating Hunger: NREGA's wage payments through ABPS." Policy brief。 來源等級 B。
82. Angwin, J. et al. (2016). "Machine Bias." ProPublica investigation of COMPAS。 來源等級 C（媒體調查報導）。
83. Office of Foreign Assets Control (OFAC) (2022). "Treasury Sanctions Notorious Virtual Currency Mixer Tornado Cash." Press release, 8 Aug 2022; OFAC delisting amendment, 21 Mar 2024。 來源等級 B。
84. *United States v Roman Storm and Roman Semenov*, No. 1:23-cr-430 (S.D.N.Y. 2023, indictment); on-going prosecution as of 2025。 來源等級 A。
85. *Van Loon v US Department of the Treasury*, 122 F.4th 549 (5th Cir. 2024)。 來源等級 A。
86. Directive (EU) 2020/1828 on representative actions for the protection of the collective interests of consumers。 來源等級 A。
87. Coeckelbergh, M. (2020). *AI Ethics*. MIT Press. ISBN 978-0262538190. Ch.4-6 論 relational personhood + (2022). "Three Responses to Anthropomorphism in Social Robotics." *International Journal of Social Robotics* 14(10): 2049-2061。 來源等級 A。
88. *Citizens United v. Federal Election Commission*, 558 U.S. 310 (2010)。 來源等級 A。
89. Coeckelbergh, M. (2024). "Why AI Undermines Democracy and What to Do About It." *Polity* 56(4)。 來源等級 B。
90. World Health Organization (2024). Dementia Fact Sheet。 來源等級 B。
91. civic-proof series article 4, "Pseudonymous Participation Legal Recognition"（系列內部）。 來源等級 A（系列內部）。
