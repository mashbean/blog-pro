---
title: "我那小小多山、卻可能滿目瘡痍的家鄉：台灣作為 PRF 民主前線壓力測試案例（civic-proof 系列第 24 篇）"
description: "civic-proof 系列第 24 篇。承接系列第 19 篇（A2）所建立的 PRF 規範下界 ⟨plurality, validity, contestation, agonism⟩，以台灣為案例分析主軸進行 case-tracing。Working thesis：台灣不是 PRF 之統計樣本上的典型案例，而是 PRF 在民主前線條件下之『條件性典型 + 存在性壓力案例』；其四條件並存——強公民社會、高頻選舉、地震／海纜物理基礎設施情境、跨海峽認知作戰與灰色入侵——提供 PRF 四分量於最嚴苛條件邊界附近之 existence proof，但不主張其結論對其他單一民主政體有外推力。文章八章內含：§1-§2 導論與形式骨架（PRF 合取下界於台灣語境之再述、T_PRF1-T_PRF5 適用邊界、LegitimacyDegrade 分析性閾值身分、本文限制五項）；§3 制度史（民主轉型 1991-1996 / 首次政黨輪替 2000 / eID 撤案 2018-2021 / 數位部成立 2022 / TW DIW 信任清單 2024-2026 上公共鏈）；§4 TW DIW × LLM-agent 界面（對照 EUDI ARF 2025-12 + W3C VCDM v2.0、F1 delegation_chain、F2 14 欄位群 issuer 對應、F3 繁中 selective disclosure UX、likelihood-by-mechanism 五機制）；§5 民間備援 vs 政府單一棧（『有備而來』民間倡議文本四項設計直觀之 PRF 對映、設計直觀 vs 規範主張分離原則、雙分量承擔與 A2 §3.2 不可化約性之內部矛盾誠實處理）；§6 三重壓力 case-tracing（α 認知作戰 / β 海纜中斷 / γ 灰色入侵 × PRF 四分量 likelihood 評估表）；§7 六條反論壓力測試（sui generis / 分量耦合 / 序級偷渡 / litepaper 引用層級 / 浪漫例外論 / 憲政地位）+ anti-mythologization clause；§8 對系列 A1/A2/A14/A15/F1/F2/F3/E1/E3 九篇修正方向 + 三條普適性主張之 universal-conditional 區分；§9 結論與三條 future work。本文嚴守紀律：『有備而來』litepaper 為民間推測性實作專案文本（speculative civilian implementation document），引用稱『民間倡議文本』不採學術引用格式；不主張其為政策推薦或規範主張之根據；LegitimacyDegrade 採方向性 + likelihood-by-mechanism 四級（low / medium / medium-high / high），不出具體機率小數；jurisdictional scope 採功能性 demos 操作定義避開主權承認問題。誠實標明：本文為 illustrative anchor 不是 universal generalization；不替代 A2 之 PRF 規範論。"
pubDate: 2026-05-16
tags: ["civic-proof", "taiwan", "PRF-stress-test", "democratic-frontline", "case-tracing", "civic-proof-series", "PRF-normative-floor", "plurality-validity-contestation-agonism", "T_PRF1-T_PRF5", "LegitimacyDegrade", "likelihood-by-mechanism", "TW-DIW", "TW-FidO", "moda", "trust-list-on-chain", "EUDI-ARF-2025-12", "W3C-VCDM-v2", "BBS-Cryptosuite-CRD", "eIDAS-2024-1183", "eID-recall-2018-2021", "civil-society-contestation", "democratic-transition-1991-1996", "first-party-rotation-2000", "Constitutional-Court-judgment-13-of-2022", "PIPC", "individual-data-protection", "LLM-agent-delegation", "civic-action-receipt-schema", "selective-disclosure-UX", "have-readiness-litepaper-civilian-advocacy", "interoperable-yet-unlinkable", "antifragile-design-intuition", "trust-rotation-multi-issuer", "preparedness-offline-fallback", "design-intuition-vs-normative-claim-separation", "PRF-component-non-reducibility-internal-tension", "Matsu-submarine-cable-2023", "Doublethink-Lab-China-Index", "IORG", "Taiwan-FactCheck-Center", "INDSR-gray-zone-research", "CNAS-Taiwan-contingency", "V-Dem-Democracy-Report-2025", "Freedom-House-Freedom-on-the-Net-2024", "sui-generis-counterargument", "component-coupling-counterargument", "ordinal-overclaim-counterargument", "litepaper-citation-level-counterargument", "Taiwan-romantic-exceptionalism-counterargument", "constitutional-status-undefined-counterargument", "anti-mythologization-clause", "functional-demos-operational-definition", "universal-conditional-distinction", "Taiwan-vs-Estonia-vs-Bhutan-cross-case-comparison", "dissertation-case-chapter", "capstone-overview-forward-link", "GPT-55-pro-second-audit-Phase-4a", "audit-output-H5-T0-revision", "overclaim-batch-1-to-5", "anti-overclaim-discipline"]
category: "數位身分與民主理論"
aiModel: "Claude Opus 4.7"
aiPrompt: "civic-proof series 第 24 篇。承接 article 19 (A2) PRF 規範下界 ⟨plurality, validity, contestation, agonism⟩ 與 T_PRF1-T_PRF5 形式定理；承接 article 16 (F1) LLM-agent delegation；承接 article 17 (F2) civic-action-receipt schema；承接 article 18 (F3) selective disclosure UX；承接 article 14 (A14/E4) 跨法域救濟；承接 article 15 (A15/E5) precursor right；承接 article 7 (B2) quant method pilot 定位 Phase 0d Revision Note。台灣作為 PRF 在民主前線條件下之 case study：制度史四階段對 PRF 四分量之系統性涵養與壓力為何？假設將 LLM-agent 接入 TW DIW 之 F1/F2/F3 工程承擔差距為何？『有備而來』民間倡議文本四項設計直觀（interoperable yet unlinkable / antifragile / trust rotation / preparedness）對 PRF 四分量之承擔對映為何？設計直觀 vs 規範主張之分離原則如何嚴守？α 認知作戰 / β 海纜中斷 / γ 灰色入侵三重壓力下 PRF 四分量之 likelihood-by-mechanism 評估為何？六條反論壓力測試（sui generis / 分量耦合 / 序級偷渡 / litepaper 引用層級偷渡 / 浪漫例外論 / 憲政地位未定）如何形式化退讓？對系列 A1/A2/A14/A15/F1/F2/F3/E1/E3 九篇之修正方向為何？三條普適性主張之 universal-conditional 區分為何？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-16-taiwan-civic-proof-deep-dive"
aiGeneratedDate: 2026-05-16
humanReviewed: false
lang: "zh-TW"
series: "civic-proof"
seriesOrder: 24
slug: "2026-05-16-taiwan-civic-proof-deep-dive"
---

## §1 導論

2017 年 1 月，中華民國內政部依行政院核定推動新型晶片身分證（eID）案，預計於 2020 年完成全面換發。試辦於 2020 年 8 月在新竹市啟動；2021 年 1 月行政院以公文中止全面換發；2021 年 9 月立法院內政委員會決議要求重啟前須完成個資保護專法。這段四年週期的進入、停滯與中止之間，台灣公民團體（公民監督國會聯盟、台灣人權促進會、開放文化基金會、婦女新知、勞工陣線、地球公民基金會等十餘團體）、學界（資安、憲法、人權法學者連署兩波）、大法官釋憲威脅、立法院內政委員會質詢、行政院內部部會爭議共構出一段民主前線之數位身分制度形成—中止過程<sup>[ref-1]</sup>。

2022 年 8 月，數位發展部（moda）正式掛牌；其下 TW FidO 行動自然人憑證進入逐步部署；2024 年 moda 啟動 TW DIW（Taiwan Digital Identity Wallet）試點，2025 年 6 月正式啟動，並把信任清單上鏈於以太坊主網與其他公共鏈基礎設施<sup>[ref-2]</sup>。2025 年 11 月，民間倡議文本《有備而來——通向互通卻不可連結的數位身分之路》於 2025-11 公開徵詢版發布，提出「反脆弱、備援性、信任輪替」三設計原則之民間備援提案；該文本在 2026 年此刻為提案層級（PoC / 倡議階段），未進入大規模驗證<sup>[ref-3]</sup>。同期，moda 路徑圖預估於 2026 至 2028 年間把 TW DIW 與健保、長照、退休金、教育、報稅五大政府服務連結。連結方式為「強制」或「自願加上服務強連結」之 ambiguity，尚未消解。

這五件事——eID 2017–2021 中止案、moda 2022 成立、TW DIW 2024–2025 試點與啟動、2025–11 民間倡議文本、2026–2028 強制連結時程——在表層各自處理「身分證如何設計」「政府部會如何重組」「皮夾如何上線」「民間如何提出替代方案」「服務如何整合」之具體議題。在規範層共指一個尚未被正面承擔的問題：當民主前線（democratic frontline）國家以高數位治理能力推動單一信任根之數位身分基礎設施，且面對混合威權—民主鄰接、跨境承認薄弱、弱勢近用挑戰之共構壓力，公共領域規範下界（PRF，per A2 [ref-A2]）之四分量——plurality / validity / contestation / agonism——如何被具體承擔或退化？哪些 civic-proof 系列既有定理（T_PRF1–T_PRF5）可直接於此場景使用？哪些需要 caveat？

本文是 civic-proof 系列第 24 篇。系列前 23 篇於不同層面建立規範下界（A2 [ref-A2]）、雙錨點問責（A1 [ref-A1]）、wallet 三重預設邊界（A15）、LLM-agent 委任邊界（F1）、receipts 證據鏈（F2）、UX 三層分離（F3）等承擔結構，並於十一篇中分別嵌入台灣 anchor（A1 TW DIW 上鏈、B1 g0v 社運、C3 TW DIW 320–480 萬實質排除推估、D2 護照根、E3 結構性滑坡、E4 跨法域救濟空白、E5/A15 弱勢近用、F1 LLM-agent 階段、F3 supporter UI 三層分離與意定監護承載、A2 朱雲漢/Wang Hui/儒家「諫議」「諍友」四線華人本土化承載）<sup>[ref-A1, ref-A2]</sup>。本文之任務在於以台灣為案例分析主軸匯流前 23 篇之台灣 anchor，並以《有備而來》民間倡議文本為民間備援提案核心素材，於 PRF 框架下完成一次具體場景之 case-tracing。

任務範圍含三項邊界。其一，本文為 case-tracing，不是普適主張；以單一場域之四維壓力測試結果，外推至「結構相近之 OECD 內外場域」之 generalizability 為條件性蘊涵，不採決定論語式。其二，本文之 working thesis 為「台灣作為 PRF 民主前線壓力測試之典型場景（typical stress-test scenario），不是特殊例外（exceptional case）」；命名遵循 GPT-5.5-pro 二輪 audit 推薦（per civic-proof series Phase 4a 命名紀律）。typical stress-test 之意涵在於：高數位治理能力 + 民主前線 + 跨境承認薄弱 + 弱勢近用四重條件之合取在 OECD 內罕見但非獨有；波羅的海三國（Estonia / Latvia / Lithuania）、韓國、烏克蘭、摩爾多瓦於結構上面對類似之四重壓力，使台灣壓力測試結果具備跨法域 generalizability 之 working hypothesis 立場。其三，本文於系列規範下界（PRF）之外，不承擔新規範下界之提出；既有 T_PRF1–T_PRF5 為論證骨架，其適用邊界以本案例之 caveat 標明。

本文章節組織如下：第二章給出形式骨架，含定義域、scope clause、PRF 合取下界於台灣語境之再述、T_PRF1–T_PRF5 適用邊界、LegitimacyDegrade 之分析性閾值身分、本文限制；第三章給出台灣數位身分制度史（自然人憑證 1998 → 健保 IC 卡 2004 → eID 2017–2021 中止 → TW FidO 2022+ → TW DIW 2024–2026 試點）與 PRF 四分量之承擔對應；第四章處理 TW DIW × LLM-agent 階段之 A15 + F1 + F3 三層承擔；第五章處理民間備援（《有備而來》倡議）與政府單一系統之張力；第六章處理三重壓力（兩岸 + 跨境承認薄弱 + 弱勢近用）之 case-tracing；第七章處理反論壓力測試；後續第八至第十章為系列接合、誠實邊界、條件性結論。

---

## §2 形式骨架

### 2.1 定義域與 scope clause

定義 2.1（民主前線壓力測試之四條件並存）：

```
DemocraticFrontlineStressTest(s) ≜
    DigitalFrontline(s)
  ∧ MixedAuthoritarianDemocraticAdjacency(s)
  ∧ HighDisinformationPenetration(s)
  ∧ HybridPublicPrivateDIStack(s)
  ∧ StrongCivilSociety(s)

其中
  DigitalFrontline                    ≜ 高數位治理能力之民主政體
  MixedAuthDemAdjacency               ≜ 鄰接混合 / 威權政體且承受其
                                       cyber / cognitive / 基礎設施攻擊面
  HighDisinformationPenetration       ≜ 跨平台資訊侵蝕之系統性壓力
  HybridPublicPrivateDIStack          ≜ 政府軌 + 民間軌 + 信任清單上鏈
                                       三方共構之數位身分堆疊
  StrongCivilSociety                  ≜ 司法 / 釋憲 / 社運 / 公民科技
                                       四層 contestation 承擔成熟
```

定義 2.1 之 scope clause 含三項邊界。其一，四條件之並存為「壓力測試之充分豐富性條件」，不是「特殊例外之充要條件」；OECD 內波羅的海三國、韓國、烏克蘭、摩爾多瓦於結構上同樣承擔四條件之子集合，使本案例之 generalizability 落於「壓力測試之 generalizable 場景」而非「孤例描述」。其二，四條件為描述性（descriptive）盤點，不採規範性（normative）排序；本文不主張「具備此四條件之國家比其他國家更需要 PRF 之承擔」。PRF 為系列規範下界，跨場域普適適用，於本案例僅顯示其於壓力極致場景下之承擔結構。其三，StrongCivilSociety 一條為本文 working hypothesis 之 enabling condition；若此條件不成立，本案例之 contestation 承擔結構（§2.3 T_PRF3 適用）退化為他國場景，不在本文承擔範圍。

台灣於 2026–05 時刻同時承擔此四條件（DigitalFrontline：高數位治理能力含 TW FidO + TW DIW + 信任清單上鏈；MixedAuthDemAdjacency：兩岸地緣與 PRC 攻擊面；HighDisinformationPenetration：2024 選舉前後 deepfake 流通 [ref-A2 ref-3]；HybridPublicPrivateDIStack：moda 政府軌 + g0v / Bonds / Numbers Protocol / Sphereon 民間軌 + 信任清單上鏈三方共構；StrongCivilSociety：2017–2021 eID 中止案 + 大法官釋憲機制 + g0v / vTaiwan 公民科技 + 司法獨立性）。四條件之並存於本文 §3 至 §7 各章詳述其結構承擔。

### 2.2 PRF 合取下界於台灣語境的再述

定義 2.2（forward-link 自 A2 §3.1 [ref-A2]）：

```
PRF ≜ ⟨plurality, validity, contestation, agonism⟩

PRF_violated(d) ⇔ ∃ i ∈ {plurality, validity, contestation, agonism}
                  : violation(d, PRF_i)
```

PRF 為合取下界（conjunctive normative floor）：四分量任一被違反即 PRF 整體於本框架下被視為違反；本框架內不採以另一分量補強被違反分量之 trade-off 讀法（per A2 定義 3.2 [ref-A2]）。本文不重複 A2 §4–§7 對四分量之原著錨點論證；以 forward-link 摘要其於台灣語境之承擔者位置。

plurality 之台灣承擔結構含五大承載者（per A2 §4.5 案例一之 318 太陽花運動承擔結構之延伸 [ref-A2]）：街頭（318 / 反送中聲援 / 反核 / 反萊豬等社運場域）、議會（立法院之質詢、公聽會、釋憲聲請）、線上（PTT / Dcard / Facebook / Threads / g0v 共筆平台之 plurality 承載）、公投（2018–2021 多次公投之 institutional 承擔）、社運（公投盟、台少盟、勞陣、環保聯盟、婦女新知、地球公民基金會、台灣人權促進會、開放文化基金會等之長期 plurality 承擔網絡）<sup>[ref-4]</sup>。multiple *who* 之共在於台灣 institutional 承擔結構下分佈於五大承載者；任一承載者單獨無法承擔 plurality 之整體性。

validity 之台灣承擔結構含三層：規範層（電子簽章法 2001 / 2024、個資法 1995 / 2010 / 2023、TW DIW 規範草案）、institutional 層（NCC / moda / 法務部 / 國家通訊傳播委員會 / 個資保護委員會籌設中），與 Sluice 層（非正式意見形成於公民團體與媒體之 Geltungsansprüche 三聲稱承擔）<sup>[ref-5]</sup>。三層之承擔者位置於 LLM-agent 階段（per F1 [ref-F1]）面對 informed consent 與 reciprocal recognition 雙重退化風險；具體機制由 §4 處理。

contestation 之台灣承擔結構含四層：司法獨立性（最高法院 / 最高行政法院之審級結構）、釋憲機制（憲法法庭—2022 修法後之大法官審理機制）、社運網絡（前段五大承載者之 active stance 承擔）、公民科技（g0v 提案制度、vTaiwan 政策共筆、公投盟釋憲聲請紀錄、開放文化基金會）<sup>[ref-6]</sup>。2017–2021 eID 中止案為 contestation 在台灣之成功運作案例：多層承擔（公民團體 + 學界連署 + 大法官釋憲威脅 + 立法院反對 + 部會內部爭議）共構而成，不可化約為「單一團體成就」或「政策插曲」<sup>[ref-1]</sup>。此案例於 §3 詳述其制度史承擔。

agonism 之台灣承擔結構之特殊性在於：legitimate adversary 結構於國內承擔（朝野政黨、政府/民間/商業三方）與跨境承擔（兩岸地緣 + 國際空間限制）兩層具有結構差異。國內 agonism 承擔成熟，朝野政黨之 legitimate adversary 地位於 1996 年首次總統直選後逐步制度化；跨境 agonism 承擔薄弱，於數位主權之國際法理論爭與身分基礎設施跨境承認層面臨結構性限制。本文於 §6 case-tracing 對此差異作分析性處理；不涉及兩岸政治關係之規範性主張。

### 2.3 T_PRF1–T_PRF5 在本案例的適用邊界

A2 §3.4 [ref-A2] 給出四條形式定理 T_PRF1（plurality 必要性）、T_PRF2（validity 必要性）、T_PRF3（contestation 必要性）、T_PRF4（agonism 必要性），與 T_PRF5（既有工程設計層之 PRF 下界不可達引理）。本文於台灣案例之適用邊界分述如下。

T_PRF1（plurality 必要性）在台灣案例可直接使用，無 caveat。台灣五大承載者（街頭、議會、線上、公投、社運）於 plurality 維度之 institutional 承擔成熟，本案例之 plurality 違反通過 enrollment 條件（TW DIW 強制連結時程下，無 wallet 者退出公共領域服務）而非通過五大承載者之缺失發生。違反 mechanism 之具體形式由 §4 處理。

T_PRF2（validity 必要性）在台灣案例可直接使用，需於 LLM-agent 階段標明 caveat。台灣電子簽章法 2001 / 2024 對 validity 之規範層承擔成熟；但 LLM-agent 介入 wallet 操作之場景下，Habermas Wahrhaftigkeit 聲稱之承擔者位置失能（per F1 [ref-F1]）；validity 之 institutional 承擔需與 F1 RT-ℬ ✗ 邊界共擔。caveat 之具體形式由 §4 處理。

T_PRF3（contestation 必要性）在台灣案例需 caveat。國內 contestation 承擔成熟（2017–2021 eID 中止案為直接驗證），但跨境 contestation 承擔近乎全無（per A14 / E4 跨法域救濟空白）<sup>[ref-E4]</sup>。T_PRF3 於跨境場景之承擔退化為「跨法域救濟空白完全空白之典型場景」（per GPT-5.5-pro 二輪 audit D-3 對應）。本案例之 contestation 承擔結構於國內與跨境兩層需分別處理；混用一層之結論至另一層為論證錯誤。

T_PRF4（agonism 必要性）在台灣案例需 caveat。國內 agonism 承擔成熟（朝野政黨 legitimate adversary 結構），政府/民間/商業三方共構於 TW DIW 場景之 agonism 承擔由 §5 處理。跨境 agonism 承擔薄弱，於數位主權之國際法理論爭與身分基礎設施跨境承認層面之 legitimate adversary 結構不完備；APEC CBPR 為主要 fallback。caveat 之具體形式由 §6 處理。

T_PRF5（既有工程設計層之 PRF 下界不可達引理）在台灣案例可直接使用，無 caveat。任何工程設計（含 TW DIW schema、信任清單上鏈、《有備而來》民間備援架構提案）不可繞道 PRF 下界。F1 RT-ℬ ✗ 與 AA-ℬ ✗ 邊界於 TW DIW × LLM-agent 階段適用；F3 supporter UI 三層分離之 UX 層不可達邊界於 TW DIW supporter 場景適用。具體機制由 §4 處理。

### 2.4 LegitimacyDegrade(d) ≥ θ_dem 於台灣案例的分析性閾值身分

A2 §3.2 [ref-A2] 給出 LegitimacyDegrade 函數定義：

```
LegitimacyDegrade(d) ≜ σ( β₁·violation_intensity(d, plurality)
                        + β₂·violation_intensity(d, validity)
                        + β₃·violation_intensity(d, contestation)
                        + β₄·violation_intensity(d, agonism) )
```

定理 T_PRF0：`PRF_violated(d) ⇒ LegitimacyDegrade(d) ≥ θ_dem ≈ 0.5`。

本文於 LegitimacyDegrade 函數之台灣場景使用採嚴格分析性閾值身分立場，遵循 B2 Phase 0d Revision Note 紀律（per [ref-B2] Revision Note 2026–05–16）。具體蘊涵含四項。

第一項蘊涵：θ_dem 為分析性建議數，未經實證校準。本文不出具體機率小數（如「TW DIW 強制連結場景下 LegitimacyDegrade(d) = 0.75」），不出具體相關係數（如「強制連結與 PRF 違反之相關 r = 0.6」）。任何具體量化於本案例之主張為「方向性 + 量級語言」，不為「精確小數」。

第二項蘊涵：LegitimacyDegrade 之承擔限於「條件性蘊涵」而非「實證描述」。本文採「若違反 PRF 任一分量，則 LegitimacyDegrade(d) ≥ θ_dem」之條件式，不採「TW DIW 已造成民主合法性退化」之完成式預測。台灣場景之 PRF 違反為「可能發生於 2026–2028 強制連結時程下之退化路徑」之 working hypothesis，需後續實證研究校準。

第三項蘊涵：β₁ = β₂ = β₃ = β₄ ≈ 1.0 之四家等權重為先驗設定。本文於台灣場景不主張任何 β 之偏移；不主張「在民主前線壓力測試下 plurality 之權重應提升」或「在跨境承認薄弱場景下 agonism 之權重應提升」之 ad hoc 調整。等權重立場之保留為本案例之分析性紀律。

第四項蘊涵：本案例之 LegitimacyDegrade 評估為「閾值身分檢驗」而非「精確值預測」。本文於 §4 至 §7 各章對 PRF 違反訊號之描述採「可觀察之違反訊號」語式（如「TW DIW 強制連結下無 wallet 者之 plurality 退出為可觀察訊號」），不採「違反強度為 0.6」之精確描述。閾值身分之意涵在於：跨越 θ_dem 為退化警示之觸發點；本文之承擔限於觸發點之檢驗，不主張具體退化幅度。

### 2.5 本文限制

本文之承擔限制含五項。其一，本文為 illustrative anchor，不是 universal generalization。台灣案例之四維壓力測試結果於 OECD 內外結構相近場域（波羅的海三國、韓國、烏克蘭、摩爾多瓦）之外推為條件性蘊涵，需後續案例追蹤驗證。外推之 working hypothesis 為「結構相近場域承擔相近之 PRF 違反風險分佈」；驗證需多案例 process tracing 與 QCA（Qualitative Comparative Analysis）跨案例研究。

其二，本文不替代 A2 [ref-A2] 之 PRF 規範論。PRF 之四家錨點原著閱讀、合取與綜合方法論區分、四條形式定理之證明草案，皆於 A2 完成；本文以 forward-link 援引，不重複論證。本文新增之承擔限於台灣場景之 case-tracing 與 T_PRF1–T_PRF5 適用邊界之 caveat。

其三，本文之《有備而來》民間倡議文本援引為民間備援提案層級之素材，不為「已驗證」民間備援方案。litepaper 於 2025–11 發布，於 2026–05 此刻為 PoC / 倡議階段；本文於 §5 對其作學術距離處理，明示作者立場（民間備援倡議）與本文 PRF 框架（系列規範下界）之區分；不把 litepaper 作為定理級論證來源。litepaper 之引用以「民間倡議文本」名義稱之，不以學術引用格式表達<sup>[ref-3]</sup>。

其四，本文之兩岸地緣處理限於「事實層描述」與「技術—法律層議題」兩層。PRC 攻擊面（DDoS / 海底電纜剪斷 / 認知作戰 / 假訊息散布）為事實層描述，不採政治宣傳語言；agonism 在兩岸關係之承擔僅限於「數位主權之國際法理論爭」與「身分基礎設施跨境承認」兩個技術—法律層議題，不涉及兩岸政治關係之規範性主張。此限制為本文承擔紀律。

其五，本文之弱勢近用議題（失智長者 30 萬 / ARC 移工 ~5000 / 失能群體 / 偏鄉長輩）處理採 A15 三層保障結構（程序 / 實質 / 制度）之分析性類型學處理<sup>[ref-A15]</sup>；不採「政府未盡善意」之歸因語式，亦不採「服務必然包容」之樂觀預設。本案例之承擔限於分佈結構之描述與工程承載之檢驗；具體政策建議於 §8 系列接合處理。

---

## §References (SA0)

- [ref-1] 中華民國行政院（2021）。「身分證明文件晶片化（New eID）」相關公文（2021-01 中止全面換發決定）；立法院內政委員會（2021-09）決議。公民監督國會聯盟、台灣人權促進會、開放文化基金會等公民團體 2020–2021 連署聲明（含學界兩波連署）。來源等級 A/B。
- [ref-2] 數位發展部 moda（2022-08 掛牌至 2026-05 公開資訊）：TW FidO 行動自然人憑證、TW DIW 試點公告（2024）、TW DIW 啟動公告（2025-06）、信任清單上鏈說明。來源等級 A。
- [ref-3] 「有備而來」litepaper（民間倡議文本，2025-11-13 公開徵詢版），https://blog.bonds.tw/litepaper/，取用日期 2026-05-16。本文以「民間倡議文本」名義引用，不採學術引用格式。[NOTE: integration step will strip author list from any inline ref usage]
- [ref-4] 朱雲漢（2012）《高思在雲》；林宗弘（2020）《島嶼浮塵》；范雲（2024）對婦運與台灣公民社會二十年觀察（reused from A2 ref-29, ref-30, ref-31）。
- [ref-5] 中華民國電子簽章法（2001-11 立法 / 2002-04 施行 / 2024 修正）；個人資料保護法（1995 → 2010 → 2023）；TW DIW 規範草案（moda 公開資料）。來源等級 A。
- [ref-6] 司法院大法官釋字機制（含 §384 / §396 / §418 / §436 / §709 / §762 / §805 等系列）；憲法法庭（2022 修法後審理機制）；g0v 零時政府（2012–）+ vTaiwan 開放政策共筆平台。來源等級 A/B。


---

本章處理台灣數位身分制度的「政府／法律／組織」層歷史。對應 §1 命題提出的 PRF（civic proof）四分量；plurality、validity、contestation、agonism；本章關注的是這四分量在制度史中被「準備」的程度與壓力痕跡。本章嚴格區分 L1 描述（已發生的制度事實）與 L2 解釋（為何此演進）。L2 部分在每節末以「制度史解讀」段落獨立呈現，避免與 L1 混用。

## §3.1 民主轉型期（1991–1996）：plurality 的制度基礎

L1 描述。1990 年 3 月野百合學運後，1990 年 6 月 21 日司法院大法官作成釋字第 261 號解釋，要求第一屆未定期改選之中央民意代表於 1991 年 12 月 31 日以前終止行使職權，由中央政府適時辦理全國性次屆中央民意代表選舉 [ref-1]。1991 年 12 月 21 日辦理第二屆國民大會代表選舉；1991 年 12 月 31 日資深第一屆國代、立委、監委全數退職；1992 年 12 月 19 日辦理第二屆立法委員選舉；1993 年 2 月 1 日第二屆立法院與第二屆監察院組成 [ref-1][ref-2]。1996 年 3 月 23 日舉行首次總統、副總統直接民選，投票率 76.04%，由國民黨提名之李登輝、連戰當選 [ref-3]。

L2 制度史解讀。1991–1996 年的兩個關鍵事件（萬年國會終結、總統直選）為後續所有「身分制度可被公開異議」的政治空間奠基。在 PRF 四分量中，plurality（多元持有者可同時提出有效身分主張）需要的不是技術前提而是政治前提：政治社群必須有「異議者也是合法成員」的共識。這個共識在 1991 年以前的中華民國體制（萬年國會 + 戒嚴 + 黨禁）下不存在，1996 年以後才在制度層次穩定。台灣後續所有數位身分爭議（含 §3.3 eID 撤案）能在「政府推 → 公民社會異議 → 政府退」的迴路中運作，前提是 1991–1996 已把這個迴路本身合法化。

## §3.2 2000 年首次政黨輪替：validity 的程序穩定化

L1 描述。2000 年 3 月 18 日第十任總統選舉，民主進步黨陳水扁、呂秀蓮以 39.30% 得票勝出，宋楚瑜 36.84%、連戰 23.10%，為中華民國憲政史首次政黨輪替，終結中國國民黨在台 55 年連續執政 [ref-4]。軍方領導階層於選舉結果明朗後公開發表效忠憲法、政治中立聲明，未發生軍事或行政抵制 [ref-4]。2008 年第二次政黨輪替（馬英九當選），2016 年第三次政黨輪替（蔡英文當選），2024 年第四次總統選舉延續民進黨執政但立法院少數，三十年間共完成多次和平政權轉移。

L2 制度史解讀。validity（成員資格證明可被獨立驗證且不被單一主權者操弄）在電子化前就需要「選舉名冊」「身分證明」「投票程序」三層的程序信任。2000 年的關鍵不是「換黨」本身，而是「政府交接時，戶政與身分基礎設施的行政連續性未被政治化」。後續所有數位身分政策能夠跨黨派執行（戶政司晶片身分證從 2005 年的構想到 2018 年的 New eID 採購，橫跨三任總統），仰賴的就是這層程序連續性。但這個 validity 的承載者是「戶政司／內政部」這個行政體，而非獨立監督機關；這個結構在 §3.3 之後變成壓力點。

## §3.3 eID 撤案（2018–2021）：contestation 的成功案例

L1 描述。2018 年 12 月 27 日行政院第 3632 次院會通過國家發展委員會「智慧政府發展藍圖」，將「數位身分識別連結政府服務」列為兩大基礎建設之一，預計 2020 年全面換發數位身分識別證（New eID）[ref-5][ref-6]。2020 年 6 月 15 日中華電信得標「新一代國民身分證換發系統建置及維護案」，承包數位身分管理系統、戶政系統、自然人憑證系統功能擴充及與中央印製廠卡片製卡中心系統整合 [ref-7]。2020 年同期東元電機得標數位身分證 PC 晶片卡與印製設備標案，因子公司資格、合作廠商 Idemia（捷克廠）與 Entrust Datacard（美英廠）等問題引發爭議 [ref-7]。

2020 年 2 月起，學界資安專家公開質疑此計畫。林宗男（台大電機）與李忠憲（成大電機）聯名於自由評論網投書，指出集中式設計的單點失效資安風險，以及在缺乏「資安許可身家調查」與明確制度下貿然實施屬不負責任的政策措施 [ref-8]。李忠憲進一步以「eID 是數位獨裁的基礎建設」「公鑰能匯出則私鑰亦能匯出」等技術論點質疑內政部「私鑰絕不外洩」宣稱 [ref-9]。台灣人權促進會、民間司法改革基金會等公民團體呼籲制定專法、要求監察院介入調查 [ref-10]。

2021 年 1 月 21 日，行政院長蘇貞昌同意內政部提出之「暫緩數位身分證發行計畫」，並由副院長沈榮津專責召集相關部會，集思廣益、蒐集各方意見，待完善法制（制定數位身分專法）後再推動 [ref-11][ref-12]。台灣人權促進會於 2021 年另循行政訴訟途徑訴請確認原政策違法，主張仍有訴之利益 [ref-13]。截至 2026 年 5 月，New eID 換發計畫未重啟，相關專法亦尚未通過。

L2 制度史解讀。2018–2021 年的 eID 撤案在 PRF 四分量中最直接涵養的是 contestation（成員資格可被異議、撤案、重新議定）。三個結構性特徵值得標示：（i）異議來源是學界 + 公民社會 + 監察體系的合取，不是單一菁英呼籲；（ii）異議的正當性論據是「集中式設計的單點失效」與「缺乏專法授權」，這兩個論據的技術理由與法治理由是分離但互補的；（iii）行政部門的退讓不是司法強制而是政策自主決定，這意味退讓本身可被下一任政府逆轉。第三點是後續 §3.4 DIW pivot 必須處理的隱性壓力：撤案的勝利是「程序性勝利」，不是「規範性鎖死」。台灣的 contestation 機制因此運作但脆弱，需要持續性的公民社會在場。

## §3.4 DIW pivot（2019–2024）：agonism 的組織重構

L1 描述。2021 年 12 月 28 日立法院三讀通過《數位發展部組織法草案》及相關組織法草案 [ref-14]。2022 年 1 月 19 日總統令公布該法。2022 年 8 月 5 日行政院長蘇貞昌核定人事，由政務委員唐鳳出任首任部長。2022 年 8 月 27 日數位發展部（moda）正式掛牌成立，主管數位事務之最高機關，由原本分散於行政院各部會之業務單位整併而成；任務涵蓋協助公部門數位轉型、促進數位產業、推動國家資訊基礎建設與資訊安全 [ref-15][ref-16]。

eID 撤案後，行動自然人憑證（TW FidO）由內政部主導發展，採 FIDO 標準與自然人憑證機制，提供生物辨識綁定的身分驗證（PKI 路徑）[ref-17]。2024 年起，數位發展部規劃並啟動「數位憑證皮夾」（Taiwan Digital Identity Wallet, TW DIW）計畫，採 W3C Verifiable Credentials、OpenID4VCI、SD-JWT 等國際標準，2025 年 3 月進入沙盒實驗，2025 年 4 月進入封測，2025 年 12 月起試營運 [ref-18][ref-19][ref-20]。架構上採「分散式」設計，無單一中央資料庫儲存使用者資料 [ref-17][ref-19]。

並行的個資治理面：依憲法法庭 111 年憲判字第 13 號判決，國家應於 2025 年 8 月以前建立個人資料保護獨立監督機制。2023 年 12 月 5 日，個人資料保護委員會（PIPC）籌備處掛牌為中央三級機關 [ref-21]。2025 年立法院三讀通過個資法部分條文修正草案，賦予個資會執法權限（個資事故通報、安全維護辦法）[ref-21]。

L2 制度史解讀。數位部成立 + 個資會籌備處掛牌兩件事，從 PRF 角度看是對 agonism 分量的組織重構嘗試：把「數位基礎設施的政策推動」從內政部戶政司（業務單位）分離，讓「個資合規的獨立監督」從附屬於目的事業主管機關提升到憲法法庭明示之獨立機關層級。但兩個結構性瑕疵必須明示：（i）TW FidO 與 TW DIW 由不同部會（內政部、數位部）並行運作，職權分工的法律基礎仍仰賴跨部會協議而非專法；（ii）個資會自籌備到正式成立之間的過渡期，agonism 的執法槓桿仍弱，與北歐 BankID 系列文章 [ref-22] 所示之「商業壟斷 + 無救濟程序 → infrastructural tyranny」三條件溯因結構的第三條件（救濟失能）有結構性相似的風險。

數位部成立到 DIW 落地中間，唐鳳部長未獲新內閣留任的政治節點亦需標明：2024 年總統選舉後內閣改組，數發部歷經人事交接，DIW 沙盒進度在政權交接中維持，這既反映 §3.2 提及之行政連續性，也意味 DIW 的政策合法性仍部分仰賴個人聲望累積（personalistic legitimacy）而非完整法律授權。

## §3.5 2024–2026 信任清單上公共鏈：技術選型與治理結構

L1 描述。TW DIW 的核心設計區分為四層：（i）wallet 應用程式（行動裝置端）；（ii）發行者（issuer）端的 verifiable credentials 簽發；（iii）驗證者（verifier）端的選擇性揭露驗證；（iv）信任清單（trust list），即「可信任的 credential 發行者與 wallet 提供者名單」之公開可驗證紀錄。第（iv）層為本系列文章關注的關鍵：數位部公開資料與技術論述指出，TW DIW 信任清單「放在公共區塊鏈上」，目的是「沒人能改、任何人都可以透過不同的區塊鏈服務提供商取得資料」[ref-19][ref-23]。

關於具體鏈別、合約位址、DID method、issuer 名單管治程序等技術細節，截至 2026 年 5 月在 wallet.gov.tw 開發者頁面與行政院公報層級尚未對外完整揭示；圈內資訊與媒體報導（區塊勢、iThome）指向 Ethereum 系公共鏈，但未取得官方文件直接記載的鏈 ID 與合約地址（待補一手來源）[ref-23][ref-17]。

與 EUDI ARF（European Digital Identity Architecture and Reference Framework）的對齊與差異：歐盟 ARF 對「Trusted Lists」的定義為「特定法律或契約脈絡下提供權威實體當前與歷史狀態之資訊儲存庫」，且 ARF 明示「可能存在多個信任清單」，舉例至少九種類型 [ref-24]。EU 採 LoTL（List of Trusted Lists）架構，trust root 由成員國 supervisory body 簽發、由歐盟層 LoTL 聚合，技術載體以 XML / XAdES 為主，未強制錨定於公共區塊鏈。TW DIW 選擇把信任清單錨定到公共鏈，與 EU 路徑構成「規範同構、技術選型不同」的對照：兩者皆以「可信任名單之公開可驗證」為核心，但 EU 透過 supervisory body 的層級簽章鏈確保 tamper-evident，TW DIW 在此之外加入公共鏈作為共同可審計層 [ref-19][ref-23][ref-24]。

關鍵的「混合架構」事實：TW DIW 的法定授權（who can issue, who is trusted）仍由數位發展部與內政部憑證管理中心（GCA / MOICA）承擔；公共鏈僅承擔「信任清單錨定」這一可審計層 [ref-17]。這意味著 trust root 之政治主權仍是國家，公共鏈是 visibility 機制而非權威來源。此點與不丹 NDI（將 credential 與 DID resolution 整體錨於 Ethereum 主網）為不同程度的部署 [ref-25]。

L2 制度史解讀。信任清單上公共鏈的技術選擇本身是治理選擇。把可信發行者名單放在不可竄改的公共記帳本上，等於宣告「政府不能秘密改變 trust root，必須對全網公開變更歷史」。這在 PRF 四分量中對 validity 與 contestation 兩者產生雙向強化：validity 的驗證可被任一第三方獨立完成（不需信任數位部的 API），contestation 的證據基礎被公開化（公民社會可審計「政府何時加入或移除某個 issuer」）。但 plurality（多元 trust root 並存）並未因此被涵養：信任清單仍是單一國家機關決定的單一名單，與 §4（SA2）將處理之 LLM-agent 場景下「多個信任源同時主張」的 plurality 壓力，存在結構性緊張。

## §3.6 制度史對 PRF 四分量的系統性涵養與壓力

合成上五節，台灣制度史對 PRF 四分量的涵養度差異可被結構化為下表（評等為本文整合呈現之相對強度，非引用既有官方分級）：

| 分量 | 涵養度 | 壓力來源 | 對應節 |
|---|---|---|---|
| Plurality | 中 | trust root 仍由單一國家機關決定；多元 issuer 在制度層尚未獨立 | §3.5 |
| Validity | 中—強 | 信任清單錨定公共鏈提升 tamper-evident 強度；專法仍缺 | §3.2、§3.5 |
| Contestation | 中—強 | eID 撤案證明異議迴路可運作；勝利屬程序性而非規範性鎖死 | §3.3 |
| Agonism | 中—弱 | 個資會自籌備到完整執法槓桿之間有過渡期；跨部會職權仍仰賴協議 | §3.4 |

四個分量的涵養並非均衡。Validity 與 contestation 因 1990s 民主轉型與 2018–2021 eID 撤案兩個正面歷史事件被相對強化；plurality 因 trust root 仍集中於國家機關而未被結構性處理；agonism 因 PIPC 籌備期 + 跨部會分工的「組織重構未完成」而最為脆弱。這個非均衡分布即為 §6（SA4）將檢驗之關鍵問題：當 LLM-agent 場景到來，需要 PRF 四分量同時就位時，台灣制度史準備度的「強項」與「弱項」如何決定壓力承載能力。

需要誠實標明三點論證限制。其一，TW DIW 信任清單上鏈的技術細節（鏈 ID、合約位址、DID method）尚未取得一手政府文件層的完整揭示，本章對該選型的詮釋強度被限定為「中強」，後續更新需追蹤 wallet.gov.tw 開發者頁面與行政院公報。其二，「制度史涵養」與「分量強度」之間的因果鏈為歷史路徑依賴推論，無法以可控實驗證實；本章採用的是 path dependency 與 critical juncture 框架 [ref-22]，論證強度上限為中強。其三，個資會自 2023 年 12 月籌備到 2025 年正式運作之間的執法強度仍在演進，本章對 agonism 的「中—弱」評等是 2026 年 5 月的快照，可能因 2025–2026 年的個資法執法案例而修訂。

---

## §References (SA1)

[ref-1] 司法院釋字第 261 號解釋（1990-06-21）。憲法法庭網站；法律白話文〈再見了！萬年國會〉。https://cons.judicial.gov.tw/docdata.aspx?fid=100&id=310442 ；https://plainlaw.me/2016/09/08/jy_interpretation_no_261/
[ref-2] 維基百科〈中華民國國會在臺灣之全面選舉與罷免〉。1991-12-21 第二屆國代選舉；1992-12-19 第二屆立委選舉；1993-02-01 第二屆立院與監院組成。
[ref-3] 1996 年中華民國總統選舉。維基百科。投票率 76.04%。
[ref-4] 2000 年中華民國總統選舉。維基百科。陳水扁 39.30%、宋楚瑜 36.84%、連戰 23.10%。
[ref-5] 行政院第 3632 次院會（2018-12-27）議案〈數位身分識別證–打開智慧政府的關鍵鑰匙〉。https://www.ey.gov.tw/Page/448DE008087A1971/12ffc708-1b40-450a-b50a-0114b479e079
[ref-6] 國家發展委員會〈智慧政府規劃報告〉（2018-12-27）。
[ref-7] 中華電信〈新一代國民身分證換發系統建置及維護案得標公告〉（2020-06-23）；〈eID 標案爭議 得標廠東元再澄清〉工商時報 2020-09-08。
[ref-8] 林宗男、李忠憲〈自由共和國／數位身分證的資安風險〉，自由評論網。https://talk.ltn.com.tw/article/paper/1318140
[ref-9] 李忠憲〈eID 是數位獨裁的基礎建設〉，大紀元；〈剖析數位身分證資安爭議〉iThome。
[ref-10] 〈人權團體憂數位身分證成政府控制人民工具 要求監院調查〉中時 2019-09-10；〈從被迫喊卡的數位身分證政策〉報導者。https://www.twreporter.org/a/e-id-in-taiwan-2021-failed
[ref-11] 行政院〈暫緩數位身分證發行計畫 蘇揆：完善法制後再推動〉（2021-01-21）。https://www.ey.gov.tw/Page/9277F759E41CCD91/e80e55a2-0102-4031-b6d3-a7c40f4cac6a
[ref-12] 行政院〈數位身分識別證（New eID）換發檢討評估〉院會議案。
[ref-13] 〈行政院暫緩數位身分識別證 台權會提告爭仍有訴之利益〉聯合新聞網。
[ref-14] 中華民國數位發展部組織法（2021-12-28 立法院三讀；2022-01-19 總統令公布）。
[ref-15] INSIDE〈數位發展部本月 27 日正式成軍！政院：首任部長唐鳳〉。
[ref-16] 數位發展部官網〈歷任部長｜關於 moda〉。https://moda.gov.tw/aboutus/ministers-since-2022/1527
[ref-17] iThome〈數位憑證皮夾打造數位環境的信任基石〉。https://www.ithome.com.tw/news/173833
[ref-18] CIO Taiwan〈數位憑證皮夾 3 月底沙盒測試 開源且採分散式架構〉。https://www.cio.com.tw/86785/
[ref-19] CIO Taiwan〈數位憑證皮夾開跑 奠定臺灣數位基石〉。https://www.cio.com.tw/93520/
[ref-20] Civic Tech Taiwan〈What Is the Taiwan Digital Identity Wallet?〉。
[ref-21] 個人資料保護委員會籌備處官網；〈個資保護委員會籌備處揭牌〉行政院新聞（2023-12-05）；憲法法庭 111 年憲判字第 13 號判決。https://www.pdpc.gov.tw/
[ref-22] 本系列前文：2026-05-07〈北歐商業身分基礎設施的代價〉（D1）；2026-05-06〈DNS vs identity trust roots〉（D3）；2026-05-09〈跨轄區〉（A14）。
[ref-23] 區塊勢（許明恩）〈為什麼數位憑證皮夾不能用 Apple Wallet 就好？ft. 數位部智庫 Denken〉。https://www.blocktrend.today/p/ep312
[ref-24] EUDI Architecture and Reference Framework，Trusted Lists 章節。https://eudi.dev/2.4.0/architecture-and-reference-framework-main/
[ref-25] /Users/mashbean/Documents/AI-Agent/.claude memory：did-vc-public-chain-deployments.md。Bhutan NDI 2025-10-13 遷 Ethereum 主網之對照；TW DIW 採「信任清單錨定」混合架構。


---

# §4 台灣 DIW × LLM-agent 界面：civic-action-receipt schema 在台灣語境的落地差距

> 範疇宣告：本節為 civic-proof 系列第 24 篇之 SA2 章節，承接 F1 (article 16)、F2 (article 17)、F3 (article 18)、B2 (article 14) 之框架，處理「假設將 LLM-agent 接入台灣數位憑證皮夾（TW DIW）」之工程—規範界面。**本節屬 method illustration，非 empirical claim**——依 B2 Revision Note 紀律（[ref-1]），likelihood 採 low / medium / medium-high / high 四級方向性表述，不出具體小數。

---

## §4.1 TW DIW 當前 issuer 範疇與資料模型——對照 EUDI ARF 2025-12 與 W3C VCDM v2.0

### §4.1.1 L1 描述：可公開查得的要素

依數位發展部、內政部憑證管理中心與 wallet.gov.tw 開發者頁可公開查得之資訊（[ref-2]、[ref-3]、[ref-4]），台灣現行身分基建分兩層並行：

- **TWFidO（行動自然人憑證）**——內政部憑證管理中心承擔 trust root，技術為 PKI（FIDO2 / WebAuthn + X.509）。屬鏈下根認證。
- **TW DIW**——數位發展部主政，2024 年起逐步釋出。採 OpenID4VCI 與 SD-JWT VC 為主規格（[ref-2]）。trust list 錨定於公共區塊鏈；圈內資訊指向 Ethereum 系，但具體 chain ID、合約位址、DID method 在 wallet.gov.tw 開發者頁與一手政府文件層尚未對外完整揭示（[ref-5]）。trust root 法定授權仍由數發部與內政部承擔，公共鏈僅承擔「信任清單錨定」此有限角色——混合架構（hybrid）。

預期將進入 trust list 之 issuer 範疇包括：內政部（戶政證明、印鑑）、中央選舉委員會（選民資格、罷免連署）、財政部（所得、納稅證明）、衛生福利部（健保、長照、身障證明）、勞動部（勞保、職安訓練）、教育部（學歷、教師資格）、司法院／法務部（民訴電子文書）、金管會（透過授權金融機構作為 attribute provider）。

### §4.1.2 L1 描述：對照 EUDI ARF 2025-12 iteration

F1 §5.4 與 §7.3.1 已將 ARF §6.6.3 delegated key custody、Annex 2 representation 寫成 wallet 工程現實的對照軸（[ref-7]）。TW DIW 與 ARF 2025-12 主要對位與差異（L1 描述層）：

| 元素 | EUDI ARF 2025-12 | TW DIW（2026-05 可查得） | 差距類型 |
|---|---|---|---|
| Wallet Instance attestation | PID + Wallet Instance Attestation | 待 wallet.gov.tw 揭示 | 揭示 gap |
| Credential 主要格式 | SD-JWT VC + ISO/IEC 18013-5 mdoc 雙軌 | SD-JWT VC 主軌；mdoc 軌道未明示 | 規格分支 |
| Holder binding | §6.6.3 device-bound + cloud-bound | TWFidO + 行動裝置雙因素 | 揭示 gap |
| Trust framework | EU Trusted List Browser | trust list 上公共鏈 + 數發部承擔 | 結構分支（hybrid） |
| Representation | §6.6.3.9 user binding + Annex 2 single-shot | 未對外明示有 representation 規格 | 規範 gap |
| Selective disclosure | SD-JWT-VC 主、BBS+ CRD 條件性高階 | SD-JWT-VC；BBS+ 未明示 | 規格分支 |
| Cross-border | eIDAS 2.0 Art 12 條約性互認 | 雙邊 MoU 為主 | 結構 gap |

W3C VCDM v2.0（2025-05-15 Rec）§4.12 在四條 securing mechanism 路徑中為皮夾留下 cryptosuite 抽象層（[ref-8]）；TW DIW 走 SD-JWT VC 主軌已落在合法子集內。

### §4.1.3 L2 解釋：四項揭示 gap

- **G1**——wallet instance attestation 規格未公開，無法判定 wallet 端在 receipt 生成時可否提供 `agent_did ≠ subject_did` 之密碼學區分（對應 F2 §3.1 schema `agent_delegation_proof`、`agent_delegation_capability_hash` 兩欄位承載條件）（[ref-9]）；
- **G2**——representation / mandate 規格未明示，缺對應 F1 §5.4 三項工程修正之直接承載（特別是 multi-tenant delegated key custody）（[ref-7]）；
- **G3**——trust list 上鏈但 chain ID 未揭示，使「跨境 verifier 透過鏈上資料解析 TW issuer 認可狀態」之路徑停在工程未驗證階段（影響 F2 §3.4 C5 recognition 子句）；
- **G4**——TW DIW 與 TWFidO trust root 分屬兩條法定授權，holder binding 與 chooser_signature 之密鑰歸屬對應 F2 schema `holder_binding_method` 之四 enum 選擇（sd-jwt-kbjwt / bbs-2023-proof / mdoc-deviceauth / jose-cose）目前公開資訊不足以判定。

四項揭示 gap 為 §4.5 likelihood 評估之事實基礎之一。

## §4.2 假設將 LLM-agent 接入——F1 §5.4 delegation_chain + presentation_origin 在台灣情境之挑戰

### §4.2.1 範疇切分

F1 §2.4 已明示 AI 代理 ≠ 自動化決策（[ref-7]）。本節討論限於「holder 透過 LLM-agent 對 wallet 發出操作指令、由 agent 代為產出或代為出示 VC presentation」之情境，**不**包含 (a) 政府方主動以 LLM 自動裁決（屬 GDPR Art 22 / EU AI Act Annex III）；(b) verifier-side LLM 受理判斷；(c) issuer-side LLM 屬性確認。聚焦於 F1 Q10a「authority transfer 之密碼學歸責缺口」在 TW DIW 之具體形態。

### §4.2.2 L1 描述：delegation_chain 在 TW DIW 之實作落點

F1 §7.3.1 已確立 `AgentDelegationProof2026`（agent 端 attestation）+ `AgentDelegationCapability`（holder 親簽 envelope）兩件套（[ref-7]）。在 TW DIW 之具體落點：

- **envelope L1**：holder 用 TWFidO（自然人憑證簽章金鑰）對 `AgentDelegationCapability` VC 親簽，明示授權範圍——對應 F1 §5.4 minimal delegation 四維度（任務、時間、次數、同意）（[ref-7]）；
- **envelope L2**：agent 在 presentation 時於 `proof.type` 加入 `AgentDelegationProof2026`，verifier 須同時驗證 agent attestation 與 holder delegation capability；
- **presentation_origin**：F2 §3.1 schema 之 `verifier_did` 與 `timestamp_presented` 在 presentation 時點固定 origin，承擔 audit 鎖點（[ref-9]）。

### §4.2.3 L2 解釋：三項實作挑戰

**挑戰一——TWFidO 金鑰與 wallet 端金鑰之雙層綁定 gap**。TWFidO 走 PKI、自然人憑證根憑證由內政部承擔；TW DIW wallet 端裝置綁定走 SD-JWT VC 的 KB-JWT。當 LLM-agent 介入，holder 親簽的 `AgentDelegationCapability` 必須在「自然人憑證金鑰」層完成（具法律承載），但 agent 後續出示 presentation 之 KB-JWT 來自 wallet 端裝置金鑰（不具同等法律承載）。兩層金鑰缺明示工程橋接，是 G2 揭示 gap 在 F1 Q10a 路徑上的具體形態。

**挑戰二——agent_did 在台灣 trust list 之承載問題**。若 agent 屬境外 model provider（OpenAI、Anthropic、Google DeepMind），verifier 在台灣場域缺 trust anchor。觸發 F1 §6.1 三型責任真空之 (iii) 跨法域擴散型（[ref-7]）——agent / model provider 多在境外，台灣 verifier 拒絕受理時亦無境外可訴對象。

**挑戰三——presentation_origin 之繁中 UX 承載**。verifier 端以繁中呈現「請求屬性、拒絕後果、持續時間」三段。F3 UX1 之 attribute_count ≤ 3 上界（[ref-10]）在繁中之資訊密度與法律精確度需求下偏緊。當 agent 介入並把 verifier policy 摘為「請點擊同意」一句時，holder 失去原政策文字之知情條件。延展至 §4.4。

### §4.2.4 L3 規範：對映 PRF 軸

article 19（A2）已將 PRF ≜ ⟨plurality, validity, contestation, agonism⟩ 定為系列規範下界（[ref-11]）。挑戰一觸及 **validity**（雙層金鑰未橋接使 chooser_signature 之 validity 在跨層級評估時出現未定義行為）；挑戰二觸及 **contestation**（境外 agent provider 缺 trust anchor）；挑戰三觸及 **plurality 之 disclosure 條件**（繁中 UX 之語言摩擦弱化發聲通道）。

## §4.3 civic-action-receipt schema 在台灣語境的最小可行實作

### §4.3.1 L1 描述：F2 schema 14 欄位群之 issuer 對應

依 F2 §3.1（[ref-9]），把 14 欄位群之 issuer 承載對映到台灣現有部會：

| 欄位群 | 承載 issuer | 新建程度 |
|---|---|---|
| receipt_id / decision_id / timestamps | wallet + verifier 雙端 | 不需新建 |
| subject_did | TWFidO 自然人憑證金鑰→DID mapping | 需新建（mapping spec） |
| supporter_did | 意定監護登記之受任人自然人憑證（民法 §1113-2 至 §1113-10）（[ref-12]） | 半新建（法律備、工程未備） |
| agent_did | 境外 model provider 或國內 agent provider（待 G_state^A 認證） | 全新建 |
| verifier_did | 各部會（trust list 內 issuer DID 對應） | 需新建（issuer→verifier 同人雙重用法明示） |
| options/option hash | wallet + verifier（DIF PE v2.1） | 不需新建 |
| comprehension_attestation_hash | 衛福部失智醫療端 + 長照中心 + 社工 | 半新建 |
| chooser_signature | TWFidO 金鑰簽（電子簽章法 §4）（[ref-13]） | 不需新建 |
| holder_binding_method | wallet 端 SD-JWT KB-JWT 為預設 | 不需新建 |
| cryptosuite_id | wallet.gov.tw 公告 | 需新建（公告） |
| agent_delegation_proof / capability_hash | TWFidO 親簽 + agent provider attestation | 全新建 |
| preservation_layer / endpoint / retention_floor / timestamp_token | 國發會檔案管理局 + qualified preservation service 雙軌（檔案法 §13、§22 + 電子簽章法 §10） | 半新建 |
| content_hash / qualified_person_attestation | wallet + 律師／會計師／公證人 attestation | 半新建 |
| jurisdictional_profile | 預設 `tw-esign-art4-10`（F2 enum 已提供） | 不需新建 |
| recognition_chain / cross_border_envelope | 外交部 + 數位部 + 各部會雙邊 MoU | 全新建 |
| revocation_window / endpoint | wallet.gov.tw + issuer（OpenID4VCI Status List） | 不需新建（須明示） |
| audit_release_policy | 個資法 §5、§19（[ref-14]）+ PDPC（2025 設立）（[ref-15]） | 不需新建（須執行細則） |

### §4.3.2 L2 解釋：critical path 之未閉合段

從上表抽出「全新建」三組——`agent_did` trust anchor、`agent_delegation_proof / capability_hash`、`recognition_chain / cross_border_envelope`——構成 TW DIW × LLM-agent 場景的 critical path 未閉合段。即使 §4.1 G1–G4 全部消除，三組仍需 G_industry^A（W3C / DIF / IETF）+ G_state^A（數位部 + 立法院）+ G_recognition^A（外交部 + 雙邊 MoU + 條約性互認）三層協作補齊。

「半新建」群（supporter_did、comprehension_attestation_hash、preservation_layer、content_hash / qualified_person_attestation）有規範但無工程載體。意定監護新制（[ref-12]）已給 supporter_did 預備了法律承載；但黃詩淳 (2020) 之「自我決定的 substituted」詮釋為單一學者立場（[ref-16]），啟動條件、角色性質、範疇對象三項銜接 gap 使台灣場域 supporter 法律承載不完整（與 F3 §11.1 第六項誠實邊界一致）（[ref-10]）。

### §4.3.3 L3 規範：對映 PRF

- 全新建三組欄位之未閉合段，對應 **contestation**（agent_did 缺 trust anchor → holder 在 substituted 退化後缺密碼學歸責的 contestation 載體）；
- 半新建 supporter_did 之法律承載 gap，對應 **plurality**（意定監護工程未跟上 → supporter 介入被退回家屬代簽）；
- 不需新建 chooser_signature 之 TWFidO 金鑰承載，對應 **validity**（電子簽章法 §4 已給法律效力）。

## §4.4 Selective Disclosure UX 在繁中 + 消保法環境的本地化挑戰——F3 §10 接合

### §4.4.1 L1 描述：消保法 §11-1 與個資法 §5、§19

消費者保護法第 11-1 條規定企業經營者與消費者訂立定型化契約前應有合理審閱期間（[ref-17]）。Wallet 場景之「verifier policy 揭示」雖未在法理上等同定型化契約，但「事前資訊揭示」+「按下同意視為承諾」之結構同型於消保法 §11-1 所欲規範之資訊不對稱（structural homomorphism，非直接適用）。

個資法第 5 條規範「不得逾越特定目的之必要範圍」（minimal disclosure 之法理基礎）；第 19 條規範非公務機關蒐集 PII 之法定要件（[ref-14]）。2025 年成立的 PDPC 為主管機關（[ref-15]）。

### §4.4.2 L2 解釋：三項本地化挑戰

**挑戰 A——繁中語意密度與 attribute_count ≤ 3 上界之張力**。F3 UX1 attribute_count ≤ 3 之下界錨於 Cowan (2001) 4±1 chunks，本身來自 WEIRD 樣本（[ref-10]）。繁中常需「形容詞 + 名詞 + 條件子句」之組合方能傳達精確法律語意（如「自申請日起 90 日內」「除緊急情況外」），同一 attribute group 在繁中呈現的字數可能高於英語 1.3–1.6 倍。當 verifier 為了壓在 ≤ 3 上界內精簡描述時，可能丟失法律精確度——與消保法 §11-1 合理審閱要求之張力。likelihood-by-mechanism: **medium**。

**挑戰 B——「同意」一鍵化與消保法 §11-1 結構同型衝突**。F3 SA2 dark patterns firewall 之 D 函數（[ref-10]）需執法主管。但台灣 wallet 場景目前無對應 EDPB Guidelines 03/2022（[ref-10]）的專門指引；公平交易委員會、PDPC、消保處三者中無單一機關被指定為 wallet UX dark patterns 執法主管。當 LLM-agent 把 verifier policy 摘為「請點擊同意」時，holder 是否仍處於 informed consent 狀態，在台灣現行法律下無清楚 enforcement 對應。likelihood-by-mechanism: **medium-high**。

**挑戰 C——individual choice 與華人家庭文化張力**（與 F3 O23 對齊）（[ref-10]）。CRPD §29 supporter 必要、不可替代原則（[ref-10]）在華人家庭文化中常被「家屬代行」吸收。當 wallet 顯示 supporter_did 欄位時，若 UI 未明示「supporter 非家屬，是經登記之意定監護受任人或社工」，繁中介面在預設語境下會被解讀為「家屬」。此項與 supporter_did 欄位之半新建狀態（§4.3.1）疊加，會把 F3 UX4 supporter_ui_three_layer 之三層分離（[ref-10]）在台灣場域退化為「家屬代鍵」單層介面。likelihood-by-mechanism: **high**。

### §4.4.3 L3 規範：對映 V_ux 子句

挑戰 A 退化 C7（cognitive load bound）；挑戰 B 退化 C8（dark patterns firewall）；挑戰 C 退化 C10（supporter role separation）。三項同時退化即 V_ux 整體不成立，依 F3 §3.4 T_UX2 推論，V_receipt'(r) = false（[ref-10]）。

## §4.5 LegitimacyDegrade 在 TW DIW × LLM-agent 場景之方向性 + 量級估計

### §4.5.1 評估方法

採 B2 Revision Note 紀律（[ref-1]）——不出具體小數，採 likelihood-by-mechanism 四級語式。LegitimacyDegrade 之形式定義繼承自 F1 §3.2 P_degrade（[ref-7]），但本節僅給方向性 + 量級之 mechanism-based 評估，**不**外推至單一憑證、單一案件、或單一年度之具體機率。

### §4.5.2 五項機制方向性評估

| 機制 | 內容（mechanism-based） | PRF 軸 | likelihood | 對應子句 |
|---|---|---|---|---|
| M1 揭示 gap | §4.1.3 G1–G4 任一未補齊時 verifier–holder 資訊不對稱放大 | validity + contestation | medium | C1 + C2 + C5 |
| M2 agent_did 缺 trust anchor | F1 Q10a 在 TW 場域之 contestation 真空 | contestation | medium-high | C2 + C5 |
| M3 supporter_did 退化家屬代行 | §4.4.3 挑戰 C × §4.3.1 半新建狀態 | plurality | high | C10 |
| M4 繁中 UX 張力 | §4.4.2 挑戰 A，attribute_count ≤ 3 上界在繁中偏緊 | plurality + validity | medium | C7 |
| M5 dark patterns 執法真空 | §4.4.2 挑戰 B，無單一主管機關 | validity | medium-high | C8 |

**方向性結論**：M3 為主要驅動機制（high 級）；M2 + M5 為次要驅動機制（medium-high 級）。三項機制疊加觸發時，V_receipt'（= V_receipt ∧ V_ux）在系統層之退化機率落入 medium-high 級量級區間。**本節不出具體小數，亦不就單一憑證或年度給機率值**。

### §4.5.3 對 §6（SA4 三重壓力）之 forward link

M1–M5 將在 SA4（§6）以三重壓力進一步測試：(α) 兩岸法律框架不對稱（陸配、台商在 cross_border_envelope 之承載 gap）；(β) 數位部與 PDPC 雙軌主管機關協調 gap；(γ) 境外 model provider 之 G_state^A 認證程式空白。三重壓力 × 五機制交叉矩陣由 SA4 開展。

## §4.6 quant method caveat——本節屬 method illustration 之 B2 紀律宣告

依 B2 Revision Note（2026-05-16）（[ref-1]）：

**紀律一範疇限縮**——本 §4 屬 method illustration，承擔範圍為「方向性預期 + 識別設計 + 機制存在性 + 對照組」四層，**不**承擔「主因果結論」。

**紀律二撤主文具體小數**——§4.5 不出具體機率值，likelihood 採四級語式。F1 §3.2 P_degrade 之 α / β / θ 參數在 TW DIW 場景之具體值待經驗校準，本節僅給形式骨架而非可立即計算之工具。

**紀律三禁用語式**——禁用「將會」「必然」「實證顯示」三類絕對句式；採「在當前可查得資訊下」「依 mechanism-based 評估」「likelihood-by-mechanism: medium-high」三類條件性句式。所有 likelihood 評估皆明示為 mechanism-based 推論，**非** pilot study 校準結果。

本節強形式立場——「我們有理由相信 TW DIW × LLM-agent 場景之 LegitimacyDegrade 在五項機制疊加下會落入 medium-high 級量級區間，但具體機率值需後續 wallet.gov.tw 開發者頁揭示 + 在地化 pilot study + 跨法域 case-tracing 三項實證工作支撐」。

---

## §SA2 接合說明

**接合 §5（SA3 = 民間備援棧）**：本 §4 之 G1–G4 揭示 gap 與 §4.3.1 「全新建」三組欄位（agent_did trust anchor、agent_delegation_proof / capability_hash、recognition_chain / cross_border_envelope）構成「政府 DIW 棧」未閉合段。SA3 應展開民間備援棧（含 OpenWallet Foundation 在台節點、Numbers Protocol 影像存證、FAB DAO 鏈上投票實驗（[ref-18]）、社造 NGO supporter 配發）在補齊「半新建」與「全新建」欄位上的承擔範圍。特別是 supporter_did 之半新建狀態—— SA3 應評估「民間意定監護顧問服務」「社工 wallet」「peer supporter network」三條替代路徑各自之承載深度與工程化障礙。

**接合 §6（SA4 = 三重壓力下 receipt schema 韌性）**：§4.5.3 已預告 SA4 將以三重壓力（α / β / γ）對 M1–M5 進行壓力測試。SA4 應給出 F2 schema C1–C6 + F3 V_ux C7–C10（[ref-9]、[ref-10]）共十條合取子句在三重壓力下之韌性矩陣，並於 critical path 反饋環路（SA4 → SA1）明示繁中環境之 cryptosuite 子集限制——特別是當 jurisdictional_profile = tw-esign-art4-10 時 BBS+ over BLS12-381 是否在台灣電子簽章法 §4 認可演算法範圍之 open question。

**§SA2 自身誠實邊界**：(1) wallet.gov.tw 開發者頁與一手政府文件對 chain ID、合約位址、DID method、wallet instance attestation 規格未對外完整揭示；(2) 黃詩淳 (2020) 對意定監護「自我決定的 substituted」詮釋為單一學者立場；(3) §4.5.2 五項機制之 likelihood 評估為 mechanism-based 推論，非 pilot study 校準。三項限制與系列誠實邊界紀律一致，須在第 11 章以 series-level open questions 形式登錄。

---

## §References（SA2 範圍）

[ref-1] mashbean. "ID-Authority Index：身分制度結社自由武器化的跨國回歸與案例證據." Civic Proof Series, article 14 (B2), 2026-05-08. §Revision Note (2026-05-16)。系列內部 cross-reference。來源等級 B。

[ref-2] 數位發展部. 數位憑證皮夾官方網站. https://wallet.gov.tw/（查閱日期 2026-05-16）。OpenID4VCI / SD-JWT VC 規格依公開揭示；具體實作細節待補。來源等級 A（揭示部分）/ 暫缺（未揭示部分）。

[ref-3] 內政部憑證管理中心. 行動自然人憑證 TWFidO 規格頁. https://moica.nat.gov.tw/（查閱日期 2026-05-16）。PKI / FIDO2 雙路線。來源等級 A。

[ref-4] 數位發展部. 數位部官網 + 政策說明頁. https://moda.gov.tw/（查閱日期 2026-05-16）。來源等級 A。

[ref-5] mashbean. "公共鏈被身分基建請出去了嗎？一條 SSI 的去鏈化路徑." Civic Proof Series, article 01, 2026-05-02。trust list 上公共鏈、Ethereum 系、chain ID 未對外完整揭示之事實判定。來源等級 B（系列內部）。

[ref-6] EUDI Architecture Reference Framework, 2025-12 iteration. European Commission, DG CNECT. https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework（查閱日期 2026-05-16）。§6.6.3、§6.6.3.9、Annex 2。來源等級 A。

[ref-7] mashbean. "公民 AI 代理委任的結構性界線." Civic Proof Series, article 16 (F1), 2026-05-10。§2.4、§3.2、§3.3、§5.4、§6.1、§6.2、§7.3.1。系列內部 cross-reference。來源等級 B。

[ref-8] W3C Verifiable Credentials Data Model v2.0 Recommendation. W3C, 2025-05-15. §4.12 securing mechanisms. https://www.w3.org/TR/vc-data-model-2.0/ 來源等級 A。

[ref-9] mashbean. "civic-action-receipt schema 與四原語：F2 工程落地." Civic Proof Series, article 17 (F2), 2026-05-11。§3.1 schema、§3.2 矩陣對應、§3.4 V_receipt C1–C6、§5.3、§6.1、§7.1。系列內部 cross-reference。來源等級 B。

[ref-10] mashbean. "selective disclosure UX failure：四件 UX 工程原語與 V_ux." Civic Proof Series, article 18 (F3), 2026-05-11。§3.1 schema、§3.2 V_ux C7–C10、§3.4 T_UX1–T_UX4、§10、§11.1、O11／O15／O19／O23。系列內部 cross-reference。來源等級 B。

[ref-11] mashbean. "PRF：plurality, validity, contestation, agonism." Civic Proof Series, article 19 (A2), 2026-05-12。§3.3 32 cell 承擔矩陣。系列內部 cross-reference。來源等級 B。

[ref-12] 中華民國民法第 1113-2 條至第 1113-10 條（意定監護新制，2019 增訂）。法務部全國法規資料庫 https://law.moj.gov.tw/（查閱日期 2026-05-16）。來源等級 A。

[ref-13] 中華民國電子簽章法第 4 條、第 10 條。經濟部主管。https://law.moj.gov.tw/（查閱日期 2026-05-16）。§4 規範電子文件之書面效力；§10 規範電子簽章與簽名蓋章等同效力。來源等級 A。

[ref-14] 中華民國個人資料保護法第 5 條、第 19 條。https://law.moj.gov.tw/（查閱日期 2026-05-16）。§5 誠實信用 + 特定目的必要範圍；§19 非公務機關蒐集 PII 之法定要件。來源等級 A。

[ref-15] 個人資料保護委員會（PDPC）. 2025 成立. https://www.pdpc.gov.tw/（建置中，查閱日期 2026-05-16）。來源等級 A。

[ref-16] 黃詩淳. "意定監護制度下之自我決定權與其界限." 月旦法學雜誌, 2020. 對民法 §1113-2 至 §1113-10 之「自我決定的 substituted」詮釋。來源等級 B（單一學者立場，須意定監護學術社群擴大檢驗）。

[ref-17] 中華民國消費者保護法第 11-1 條（合理審閱期間原則）。消費者保護處主管。https://law.moj.gov.tw/（查閱日期 2026-05-16）。來源等級 A。

[ref-18] FAB DAO. https://fab.community/（查閱日期 2026-05-16）。鏈上投票實驗、NFT 募款。來源等級 B。


---

## §5.1 政府單一棧的結構脆弱性

台灣現行公民證明治理路徑（TW DIW、TW FidO、MyData 三件套）之核心發行者（issuer）信任根單一鎖定於數位部及其下屬「信任清單服務」（trust list service）。此一架構於 D3 已建立其「身分天然涉及主權」之 P1''-P4'' 失敗條件——身分領域不可能複製 DNS 治理史之 P1（Postel jar 社群文化）、P2'（美國策略性放手）、P3'（技術中立論述）、P4'（IANA-equivalent 過渡機制）四前提<sup>D3:§3</sup>。同篇 §5 之 FTLA 四層治理框架（G_industry / G_state / G_recognition / G_oversight）明示：當 G_state 層之 issuer trust 在子領域複製中**唯一**承擔信任根之 anchor 位置，G_industry 與 G_recognition 兩層失去獨立 contestation 槽位，治理結構於本框架下從合取退化為以 G_state 為主導的多層結構<sup>D3:§5.1, §5.3</sup>。

此單一棧之結構脆弱性對 PRF 四分量之承接點問題如下。

**對 plurality 分量**：A2 §4.1 已明示 Arendt plurality 為存在論層級之「multiple *who* 共在」，三層存在條件含 natality、mortality、uniqueness<sup>A2:§4.1</sup>。當 issuer 信任根單一鎖定於 G_state，無 wallet enrollment 條件（如無自然人憑證之難民、流亡者、無國籍者，或拒絕進入單一棧之政治少數）之 *who* 即從公共領域之 enrollment 條件層被前置排除——plurality 之 enrollment 邊界由國家壟斷劃定。A15 §6.2 之「wallet 三重預設」退化路徑（個人擁有、個人識別、個人私鑰同時成立）於此處由單一 issuer 結構強化為一條退化軌跡<sup>A15:§6.2</sup>。

**對 validity 分量**：A2 §5.1 之 Habermas Sluice 模型要求非正式意見形成層與 formal decision-making 層之間有可運作之溝通管道<sup>A2:§5.1</sup>。當 G_state 同時承擔 issuer 與最終驗證權威，Wahrhaftigkeit 聲稱（持證者真誠表達意圖）之承擔者位置與 Richtigkeit 聲稱（成員資格主張之規範正當性）之承擔者位置在 institutional 層**合而為一**；Sluice 兩層之區分（非正式意見形成—formal decision-making）退化為單向通道。F2 V_receipt 條件中之「audit trail 多元化」承擔者亦失能（無第二信任根可供獨立稽核）<sup>F2:§6</sup>。

**對 contestation 分量**：E1 §2.3 已把 wallet 四層級分別檢驗 essential facility doctrine 四條件（控制必要設施、競爭者無法合理重複、設施被拒絕、提供可行）；其中 issuer trust 層被列為四條件最強滿足者<sup>E1:§2.3</sup>。此正面意味：當 issuer trust 唯一鎖定於數位部，公民欲行使 Pettit active-stance contestation（A2 §6.1 三層 first-personal 要求<sup>A2:§6.1</sup>）時，無第二信任根作為「可挑戰之 fallback bearer」——contestation 之 institutional 條件（editorial democracy 四項條件）退化為「向唯一 issuer 申訴」之單向通道。E1 §5.1-5.2 之 wallet portability spec 四項可遷移性與四項禁令在此處為民間備援之**前置條件**，無 portability 則無 contestation 之物質基礎<sup>E1:§5.1-5.2</sup>。

**對 agonism 分量**：A2 §7（Mouffe agonism）之 legitimate adversary 三條件——相互承認、共享規則、爭議框架——預設**至少兩個**正當對手位置。當 issuer trust 鎖定於 G_state 單一棧，agonistic pluralism 之 institutional 槽位於 issuer 層級為**空集合**；公民相對於 issuer 之關係從「正當對手間之爭議」退化為「申請—駁回」之 administrative dyad，已不在 agonism 之適用射程內。Mouffe 2000 Ch.4 明示，agonism 失能之兩種退化方向之一即「post-political consensual」——對手地位被吸收為共識，contestation 退化為儀式<sup>Mouffe2000:Ch.4</sup>。

forward-link：以上四分量之承接點問題並非 D3、E1、A15 任一篇單獨承擔；本文 §5.1 之貢獻在於把三篇之既有邊界**橫向接合**為「政府單一棧之 PRF 四分量同時脆弱性」之合成主張。此合成主張為 §6（SA4）三重壓力下民間備援之承載能力分析之前置條件。

## §5.2 民間備援的可能形態：「有備而來」litepaper 設計直觀摘述

「有備而來」litepaper（民間倡議文本，2025-11 公開徵詢版；https://blog.bonds.tw/litepaper/，取用日期 2026-05-16）自我定位為「面向台灣脈絡之民間數位身分備援提案」。下列摘述為**該倡議文本提出之設計直觀**，不轉換為規範主張；該文本之規範語言（如「應」「必須」「正當性」）僅作為描述對象引述，不採為本文承擔。

### §5.2.1 「互通卻不可連結」（interoperable yet unlinkable）之設計直觀

該倡議文本之副標即「通向互通卻不可連結的數位身分之路」，其第 2.2 節主張身分系統應同時滿足三條件：能互通（Interoperability，以開放標準如 DID/VC、OpenID for Verifiable Credentials 定義格式與介面）、不可連結（Unlinkability，即便同一套開放協議支援跨場景互通，亦不允許任何人把使用者在不同場景之足跡串接）、不主動回傳（No Phone Home，預設協議場景間不自行回傳資料或啟動）<sup>litepaper:§2.2</sup>。文本主張此三條件構成其技術設計之「底線」。

該文本進一步在 §4.3.2 引用 W3C BBS+ 密碼套件規格作為「不可連結之選擇性揭露」之技術參照；§6.1.6 將此三條件分別對應到 SD-JWT（提供選擇性揭露但非 ZK 證明）、BBS+（不可連結之選擇性揭露主流）、AnonCreds（謂詞證明原生支援）三條技術路線之取捨<sup>litepaper:§4.3.2, §6.1.6</sup>。E2 之「no phone home engineering economics」已對該文本提出之 No Phone Home 原則進行獨立工程經濟分析<sup>E2:全文</sup>，此處不重複。

### §5.2.2 反脆弱（antifragile）之 civic-proof 變形

該倡議文本於 §1.2 與 §6.1 兩次援引「反脆弱（Anti-fragile）策略」，並將其核心拆解為三面向：強固（Robustness，基礎設施抵禦衝擊）、備援（Backup，部分節點受損時整體仍能持續運作）、最小揭露（Minimal Disclosure，盡量降低不必要的個資收集）<sup>litepaper:§1.2, §6.1</sup>。

該文本未正面引述 Taleb 2012 *Antifragile* 之原始定義。Taleb 原書界定 antifragile 為「不僅在衝擊下不壞、且因衝擊而強化」之系統屬性，與 robustness（在衝擊下不壞）、resilience（在衝擊後復原）形成三階遞進<sup>Taleb2012:Prologue</sup>。該倡議文本之用法把 antifragile 化約為「robustness + backup + minimal disclosure」三件組合，**已偏離 Taleb 原義**——Taleb 之 antifragile 預設「由衝擊取得正凸性」（positive convexity from disorder），而該文本之三件組合僅承擔「由衝擊不退化」之 robustness 與 resilience 兩階。本文於 §5.5 將此偏離標明為「設計直觀之術語借用」（design intuition）而非「規範主張之承擔」。

### §5.2.3 信任輪替（trust rotation）之多 issuer 並列模型

該倡議文本於 §1.2 主張「備援機制，正是指『可輪換的信任清單與其背後的信任架構』」<sup>litepaper:§1.2</sup>，並於 §5.2 技術架構提出具體之「信任清單承諾值」上鏈設計：「平時，信任清單載明何人或何機構得以簽發何種憑證、撤銷的條件與程序；緊急時，治理節點可在鏈上發佈新的清單承諾值，宣告鏡像簽發者接手，驗證端只需接受新承諾即可在離線條件下延續驗證」<sup>litepaper:§5.2</sup>。

該設計直觀之三個結構元素：第一，**信任清單**為「meta-issuer 結構」（不是單一 issuer，而是「哪些 issuer 可發行哪類憑證」之 manifest）；第二，**承諾值上鏈**將 manifest 之版本變更記錄於公共區塊鏈，使 manifest 之輪替本身可被外部稽核；第三，**鏡像簽發者接手**設計於 issuer 失效時容許「同類型憑證之發行權威」在線上熱切換，holder 持有之憑證在新信任清單下重獲驗證能力。

可比擬之既有案例：GPG/PGP web of trust 在 1990s 提出之「無中心 CA、由 holder 之間互相背書」之 trust 結構，承擔了 trust 多元化之早期實驗，但 scalability 不足以承擔公民身分規模<sup>Zimmermann1995</sup>；Let's Encrypt 自 2016 年起對商業 CA 之並列補位，使 Web PKI 之 CA 信任根從少數商業壟斷擴張為「商業 + 公益 + 政府」三類並列，提供 issuer 多元化在實證上可達之佐證<sup>Aas2019</sup>。「有備而來」litepaper 之 trust rotation 設計在概念上更接近 Let's Encrypt 模型（並列補位 + 標準化撤銷清單），而非 GPG 的 peer-to-peer 結構。

### §5.2.4 備援性（preparedness）之離線與跨網段 fallback

該倡議文本於 §1.2、§2.2、§3.2 等多處主張「即便完全離線，公民的手機仍能夠點對點（P2P）完成身分驗證」<sup>litepaper:§2.2</sup>，並於 §5.2.7 提出具體之離線驗證技術通道：「驗證者與憑證持有者將在離線情境下（譬如：以 Wi-Fi Aware、藍牙或 NFC 交換資料），驗證者僅需持有最新的信任清單承諾與撤銷清單承諾，即可對收到的 VP 進行一致性檢查」<sup>litepaper:§5.2.7</sup>。

該文本之「跨網段 fallback」直觀進一步區分三層信任場域：地方（local）、跨域（cross-domain）、離散（diaspora）<sup>litepaper:§6.1</sup>，分別對應於台海情境下三類退化情境——地方層因實體設施受損之區域性網段斷裂、跨域層因國家間互認失效之跨境驗證斷裂、離散層因主體被迫外移之線上大使館承載。該文本主張上述三層信任場域「即便實體基礎設施受損或主體被迫外移，法理與技術的連續性仍可維持」<sup>litepaper:§5.2.7</sup>。

## §5.3 設計直觀對 PRF 四分量之承擔對映

下列對映為**本文之獨立論證**，不採該倡議文本自身之規範語言。每一對映明示三項：對映之 mechanism、承擔強度（主貢／副貢／間接支撐）、承擔之邊界條件。

| 設計直觀 | plurality | validity | contestation | agonism |
| --- | --- | --- | --- | --- |
| §5.2.1 interoperable yet unlinkable | 間接 | 副貢 | 副貢 | 間接 |
| §5.2.2 antifragile 三件組合 | 間接 | 間接 | 間接 | 副貢 |
| §5.2.3 trust rotation 多 issuer 並列 | 間接 | 副貢 | **主貢** | **主貢** |
| §5.2.4 preparedness 離線／跨網段 fallback | **主貢** | 間接 | 副貢 | 副貢 |

**對 agonism 之主貢**：§5.2.3 trust rotation 多 issuer 並列模型直接承擔 Mouffe agonism 之 legitimate adversary 三條件——多個 issuer 並列即「至少兩個正當對手位置」之 institutional 滿足；信任清單之版本變更上鏈即「共享規則」之具體 mechanism；鏡像簽發者接手即「爭議框架」之 institutional 槽位。此對映之 mechanism 為「issuer 層之多元化把 agonism 之 institutional 槽位從空集合擴張為非空集合」。承擔強度為主貢之邊界條件：multi-issuer 設計僅在 issuer 之間具實質可分離性（不是同一治理結構下之名義分離）時成立；若多個 issuer 在 governance 上同屬 G_state 之子單位，agonism 槽位實質仍為空。

**對 contestation 之主貢**：§5.2.3 trust rotation 直接承擔 Pettit contestation 之「Eyeball Test 平等可及之影響」——當 issuer 不唯一，公民欲挑戰某 issuer 之撤銷決策時，可訴諸鏡像簽發者重新發行，contestation 之 active-stance 取得物質基礎。此對映之 mechanism 為「issuer 多元化把 contestation 之 fallback bearer 從零變為非零」。承擔強度為主貢之邊界條件：active-stance 仍須由人類 first-personal 承擔（F1 §4.3<sup>F1:§4.3</sup>），multi-issuer 僅承擔 contestation 之物質基礎，不替代 bearer 位置本身。

**對 plurality 之主貢**：§5.2.4 preparedness 離線／跨網段 fallback 直接承擔 Arendt plurality 之「multiple *who* 共在」之 enrollment 邊界擴張——當 wallet 在無網路、無集中資料庫情境下仍可驗證，無 enrollment 條件之 *who*（如無自然人憑證者）之公共領域進入條件由 G_state 之 enrollment 規則擴張為 P2P 之社群背書。此對映之 mechanism 為「離線可驗證把 plurality 之 enrollment 邊界從『有 wallet 者』擴張為『有社群背書者』」。承擔強度為主貢之邊界條件：P2P 背書本身需信任清單之離線可驗版本，若信任清單之發布權威單一，plurality 之擴張仍受該權威之 enrollment 規則限制。

**對 validity 之副貢**：§5.2.1 interoperable yet unlinkable 與 §5.2.3 trust rotation 共同承擔 Habermas validity 之 Wahrhaftigkeit 與 Richtigkeit 兩聲稱——選擇性揭露承擔 Wahrhaftigkeit（持證者只揭露其真誠願意表達之最小集合），multi-issuer 承擔 Richtigkeit（成員資格主張可在多個 institutional 通道被檢驗）。承擔強度為副貢而非主貢，因 validity 之 Wahrheit 聲稱（對外部世界之真假主張，即憑證內容之真實性）仍依賴上游 source-of-truth（如 MyData 之政府資料來源），此處 multi-issuer 設計未承擔 source-of-truth 之多元化。

## §5.4 內部矛盾：plurality + agonism 雙分量承擔是否違反 A2 §3.2 不可化約性？

A2 §3.2 之 PRF 合取下界定義明示：「四家任一分量被違反即 PRF 整體於本框架下被視為違反；在本文的 PRF 合取設定下，不採以另一分量補強被違反分量的 trade-off 讀法」<sup>A2:§3.2 定義 3.2</sup>。同篇 §3.4 定理 T_PRF1-T_PRF4 進一步把「各自必要、難以由其他分量完全補位」形式化為四條獨立必要性定理。

§5.3 之承擔對映把 trust rotation 設計**同時**列為 contestation 與 agonism 之主貢，preparedness 設計列為 plurality 主貢，把 plurality 主貢與 agonism 主貢之承擔指派給**同一設計簇**（民間備援整體）。此處浮現之矛盾為：當民間備援以單一設計簇同時承擔 plurality 與 agonism（或 contestation 與 agonism）雙分量，是否在實作層上**化約**了 A2 §3.2 之合取下界？

**矛盾之精確化**：A2 §3.2 之不可化約性條款適用於**分量本身**（plurality 不可被 validity / contestation / agonism 補位），不適用於**承擔者**（同一設計可同時為兩分量之承擔者）。此區分對應於 A2 §3.3 之 32 cell 矩陣，矩陣本身允許 F1 為四分量全核心承擔者<sup>A2:§3.3</sup>——「同一篇承擔多分量」之 cell 在矩陣中已被認可，並未違反不可化約性。

**但矛盾並未完全消解**。在 A2 §3.3 矩陣中，F1 為四分量全核心承擔者是因為 F1 之**規範主張**（AI agent 委任邊界）橫跨四家政治哲學之概念基礎；而本文 §5.3 把 trust rotation 同時列為 contestation 與 agonism 之主貢，是因為 multi-issuer 之**單一 mechanism**（issuer 多元化）同時擴張了兩個 institutional 槽位。前者為「規範主張橫跨多分量」，後者為「單一 mechanism 承擔多分量」——後者之矛盾風險更高，因為若該 mechanism 失效（例如 multi-issuer 在 governance 上同屬 G_state），兩個分量之承擔**同時**崩塌。

**誠實處理**：本文不宣稱此矛盾已被消解。三項處理如下。

第一，§5.3 對映之承擔強度標記（主貢／副貢／間接）本身已部分承載此矛盾——當單一 mechanism 同時承擔兩分量，至少其中一分量之承擔強度應降為副貢；本文於 §5.3 未作此降級，是因為在 issuer 多元化之實質可分離性條件下，contestation 與 agonism 兩槽位之擴張屬不同 mechanism 層（contestation 是 fallback bearer 之物質基礎、agonism 是 legitimate adversary 之 institutional 槽位）。但若該邊界條件失效，主貢／副貢之劃分需重審。

第二，A2 §3.2 定理 T_PRF3 與 T_PRF4 之證明草案明示，contestation 與 agonism 在缺乏對方時各自退化方向不同——contestation 缺失退化為「無挑戰管道之共識」，agonism 缺失退化為「antagonism」或「post-political consensual」<sup>A2:§3.4</sup>。multi-issuer 對兩分量之承擔在退化時並非同步——若 issuer 之間在 governance 上實質同屬一體，contestation 退化先於 agonism（fallback bearer 失能比 legitimate adversary 槽位坍縮更早觸發）。兩分量之承擔在退化動態學上仍可分離，部分緩解但不消解矛盾。

第三，本文 §5.3 之承擔對映**僅為設計直觀層之初步對映**，不主張為規範層之 final 承擔。最終 PRF 規範層之承擔分配需由 §6（SA4）三重壓力測試下之 case-by-case 檢驗承擔；若某一壓力場景下民間備援之 multi-issuer 設計在 issuer 實質可分離性上失敗，該場景下 contestation 主貢與 agonism 主貢之雙重指派需被重新分配（其中之一降為副貢或失能）。

## §5.5 設計直觀 vs 規範主張之分離

「有備而來」litepaper 提出之四項設計直觀（§5.2.1-5.2.4）為**民間倡議文本之 design intuition**，不可直接搬用為 PRF 規範主張。本文嚴格遵守此分離，理由有三。

**理由一：文本性質之分離**。該倡議文本自我定位為「公開徵詢版」（2025-11-13 初版），徵詢各式意見；其性質為 speculative civilian implementation document，不是同儕審查文獻，不是 standardization body 之 specification，不是 institutional 政策文件。該文本之 §2.2、§5.1、§6.1 等多處使用「應」「必須」「正當性」等規範語式，但這些語式為**該倡議文本作者之規範倡議**，不是民主合法性下界 PRF 之規範承擔。本文引述該文本時統一以「該倡議文本提出之設計直觀」「該文本主張」標明，避免規範語言之搬用。

**理由二：術語偏離之分離**。§5.2.2 已明示該文本對 Taleb antifragile 之術語使用偏離 Taleb 原義（化約為 robustness + backup + minimal disclosure 三件組合，未承擔 positive convexity from disorder）。該文本之 antifragile 為「術語借用」，不是 Taleb 之 antifragile 概念的承擔。若把該文本之 antifragile 直接搬用為 PRF 規範主張，將同時承載術語偏離與規範擴張兩重風險。

**理由三：規範對映需獨立論證**。§5.3 之承擔對映**已是**本文之獨立論證——對映之 mechanism、承擔強度、邊界條件皆不採該倡議文本自身語言，而以 A2 §3-§7 之 PRF 四家錨點原著（Arendt §1+§24+§44、Habermas TKH §III.3、Pettit 2012 Ch.5-6、Mouffe 2000 Ch.4）為對映之規範錨。換言之，本文承擔之 PRF 規範對映**不依賴**該倡議文本之規範語言；該文本僅作為設計材料被引述，規範層之承擔由 A2 框架獨立完成。

**分離之操作後果**：本文不會出現「litepaper 主張 X，所以 PRF 規範下 Y」之推論句式；本文出現之推論句式為「litepaper 提出之設計直觀 X，本文獨立對映其在 PRF 規範下對應 Y 分量之 Z mechanism」。後一句式之兩端（設計直觀 X 與規範對映 Y）分屬不同論證層。

---

## §References (SA3)

- A2: civic-proof 系列 article 19 (2026-05-12 public-realm-political-philosophy)
- D3: civic-proof 系列 D3 (2026-05-06)
- E1: civic-proof 系列 E1 (2026-05-08 wallet-as-essential-facility)
- E2: civic-proof 系列 E2 (2026-05-09 no-phone-home-engineering-economics)
- E3: civic-proof 系列 E3 (2026-05-09 structural-slippage-prevention)
- F1: civic-proof 系列 F1 (2026-05-10 civic-ai-agent-delegation-limits)
- F2: civic-proof 系列 F2 (2026-05-11 civic-receipts-provenance)
- F3: civic-proof 系列 F3 (2026-05-11 selective-disclosure-ux-failure)
- A15: civic-proof 系列 A15 (2026-05-10 civic-proof-inclusion-rights)
- 「有備而來」litepaper：民間倡議文本，2025-11 公開徵詢版。https://blog.bonds.tw/litepaper/，取用日期 2026-05-16
- Taleb, Nassim Nicholas (2012). *Antifragile: Things That Gain from Disorder*. Random House
- Zimmermann, Philip R. (1995). *The Official PGP User's Guide*. MIT Press
- Aas, J., et al. (2019). "Let's Encrypt: An Automated Certificate Authority to Encrypt the Entire Web." *Proceedings of ACM CCS 2019*
- Mouffe, Chantal (2000). *The Democratic Paradox*. Verso
- Arendt, Hannah (1958). *The Human Condition*. University of Chicago Press
- Habermas, Jürgen (1981). *Theorie des kommunikativen Handelns*. Suhrkamp
- Pettit, Philip (2012). *On the People's Terms*. Cambridge University Press
- Mueller, Milton L. (2002). *Ruling the Root*. MIT Press


---

> **本節範圍與性質宣告**。本節為「機制性 likelihood 評估」(likelihood-by-mechanism)，不出具體機率小數，不作完成式預測；採用 likelihood 四級語式（low / medium / medium-high / high）描述「在特定壓力機制下，PRF 某分量承擔之失效負荷」的相對量級。所有評估皆以「截至 2026-05 公開資料」為時點。「有備而來」litepaper 之引用，僅限於描述民間倡議文本對備援棧的工程性準備度，不援引其規範性主張。

## §6.1 認知作戰滲透下 issuer trust 之可塑性 (α)

認知作戰壓力 (α) 對台灣 PRF 棧的衝擊面，不在憑證的密碼學層，而在「issuer 公信力作為 validity 之公共理性根據」這一層。當 issuer (例如內政部、衛福部、民政事務所) 在公民認知中被框定為「政治機器之一部」，validity 分量所需之「公共理性對 issuer 程序之低門檻信任」即在文化層面被掏空，即使憑證本身未被偽造。

**機制 α₁ — 議題前置定錨**。Doublethink Lab 自 2022 年起的 *Annual China Index* 持續顯示，台灣在「資訊環境」(media) 維度受到的境外影響操作密度，常年位居樣本國前段；IORG 與 Taiwan FactCheck Center 在 2024 大選週期記錄之「結合 LLM 生成之高速合成內容」事件，相較 2020 大選週期顯著上升[ref-1][ref-2]。在 PRF 結構上，這類操作不直接攻擊單一憑證，而是在 wallet 普及前先把「政府發行之數位憑證」定錨為政治符號 (例如將「TW DIW」與某一執政黨綁定敘事)，使 issuer trust 的「分量基底」在被使用前先承擔污染。

**機制 α₂ — LLM 生成內容稀釋公共理性**。V-Dem 2025 年度報告之 *Digital Society Survey* 子指標已將 *misinfo by foreign actors* 與 *online media polarization* 拆分為獨立軸；Freedom House *Freedom on the Net 2024* 對台灣的評估，將 LLM 自動化敘事生產列為 emerging concern 而非 stable threat[ref-3][ref-4]。此時 validity 所需之「公共理性根據」遭遇結構性稀釋：當任一憑證使用情境之爭議都可在 24 小時內被 LLM 操作為「兩造皆有 talking point」的對沖噪音，PRF 的 contestation 分量在資訊面被 *淹沒* 而非 *壓制* — 異議者不是被禁聲，而是被淹沒在合成回應中。

**接合 A14 / A15**。A15 §5.2 程序保障所要求之「替代路徑不被歧視性對待」，在 α 壓力下會被反向操作為「紙本路徑被認知作戰標記為『不信任數位治理者之政治表態』」，使替代路徑的中性性質被政治化。A14 §3.2 之缺口 (b) (issuer 撤銷錯誤無單一資料保護機關可投訴) 在 α 情境下被加劇 — 即使法理上具救濟路徑，受害公民之投訴在合成噪音中喪失辨識度，jurisdictional redress 在「能否被聽見」這一前置條件即先失效。

**likelihood-by-mechanism (α 對應 PRF 四分量)**

| 分量 | likelihood | 機制理由 |
|---|---|---|
| validity | medium-high | issuer 公信力先於使用被政治符號化，公共理性根據在文化層被掏空 |
| plurality | medium | 認知作戰壓抑替代敘事但未刪除工程備援；plurality 的工程層被部分保留 |
| contestation | medium-high | 異議者被合成噪音淹沒，contestation 之「能被聽見」前置條件失效 |
| agonism | medium | agonism 之長期承載依賴民間社會韌性，認知作戰壓力之短期穿透不必然瓦解結構性異議能力 |

## §6.2 海纜中斷下 offline fallback 之可用性 (β)

β 壓力的具體歷史錨點為 2023 年 2 月馬祖地區海纜中斷事件 — 中華電信公告之兩條馬祖海纜先後於 2023-02-02 與 2023-02-08 中斷，當地網路恢復至備援微波鏈路水準歷時約 35 天[ref-5]。國家通訊傳播委員會 (NCC) 與中華電信於 2023 年下半年陸續發布之事後檢討顯示，馬祖之 backup 路徑容量遠低於正常海纜，OTT 視訊、行動支付、wallet 類服務在事件期間出現顯著降級。

**機制 β₁ — 海纜結構脆弱性**。台灣對外連線高度依賴包含 APCN-2、SJC、SJC2、FASTER、TSE-1、TPE、EAC-C2C、ASE、APG 在內之多條國際海纜，本島環島光纖與離島連線之冗餘度遠低於海纜段[ref-6]。2026 年初台澎連線之新增備援 (含 TASA 國家太空中心自研 LEO 計畫之第一階段、Chunghwa Telecom 與多家 LEO 供應商之合作協議) 仍在部署期，承載量與正常海纜之比仍處於 medium 量級。Starlink 來台之政策性協商截至 2026-05 公開資料仍卡在「在地股權比例」議題，未進入大規模商轉。

**機制 β₂ — Wallet offline 模式的 graceful degradation**。EUDI Wallet ARF v1.5 與 ISO/IEC 18013-5 mDL 標準提供之 offline presentation 模式，理論上可在無網路情境下完成 verifier — wallet — issuer 三方密碼學驗證之子集 (限制條件下之屬性出示 + selective disclosure)。但「撤銷狀態驗證」(revocation status check) 在 offline 模式下依賴 status list 之預先快取，當預先快取已過期或 issuer 端 status list 未更新到 wallet，wallet 端會落入「以舊狀態驗證」之降級模式 — 此時 PRF 的 validity 分量在工程層被「降階」而非「失效」，但分階後的 validity 性質不同於原始設計。

**機制 β₃ — 異議通道之 plurality**。當主海纜中斷，異議者所需之「跨境平台 + 加密通訊」依賴 LEO 衛星備援、Mesh 網絡 (例如 Bridgefy / Briar / Meshtastic 類應用之社區部署)、以及短波電台等更早期之備援階。「有備而來」litepaper 在民間倡議文本層級已對 mesh + LEO + 紙本三段備援的工程性準備度有具體規劃，但此屬民間自發倡議，與政府單一棧之結構性備援義務不可混為一談。

**接合 E3 之 structural slippage prevention**。E3 §5.5 之 MVSR 組合 (sunset + scope-bound + split-key + opt-out) 在 β 壓力下展現一個非顯而易見之性質 — scope-bound infrastructure 之「audience binding」在海纜中斷情境下，限縮了 verifier 串謀重組屬性的可能空間 (因為跨境 verifier 無法聯網查驗)；但同樣的 audience binding 也阻擋了「臨時授權跨境 verifier」之 graceful fallback。換言之，scope-bound 對 β 壓力是 *雙向中性*：它保護 validity 同時限縮 plurality。

**likelihood-by-mechanism (β 對應 PRF 四分量)**

| 分量 | likelihood | 機制理由 |
|---|---|---|
| validity | medium | offline 模式可保留密碼學驗證子集，但撤銷狀態之新鮮度承擔降階風險 |
| plurality | medium-high | 主管道中斷時備援棧之工程性可用度直接決定 plurality 載量；LEO + mesh 備援在 2026-05 量級仍處於 medium 承載 |
| contestation | medium-high | 異議通道在海纜中斷下需依賴跨境備援；備援之政治性 (例如 LEO 供應商之政治選擇) 反向影響 contestation 中立性 |
| agonism | medium | agonism 結構之長期生存對單一中斷事件之敏感度低於 contestation 即時面 |

## §6.3 灰色地帶入侵下 institutional revocation latency (γ)

γ 壓力涵蓋「准戰爭狀態」(below-threshold conflict) 之灰色地帶 — 國防部 2025 國防報告書、國防安全研究院 (INDSR) 之灰色地帶系列研究、CNAS 之 Taiwan gray zone reports 共同描述之情境包括：海空中線壓縮、海警船民事執法、海纜「意外」拖斷、針對關鍵基礎設施之網路侵擾、選舉週期內之合成媒體 surge[ref-7][ref-8][ref-9]。對 PRF 棧的影響面不是「issuer 完全停擺」而是「issuer / verifier / revocation 機制承擔部分延遲與不可預期之局部失效」。

**機制 γ₁ — Revocation list 推送延遲**。當 issuer 端 (政府部會) 之網路出口因 DDoS / 路由劫持 / 海纜物理擾動而出現持續性降級，撤銷清單 (status list) 從 issuer 發佈到 wallet / verifier 端之傳播時延，可能從正常之分鐘量級延長至小時甚至日量級。在 PRF 框架下，這直接影響 contestation 分量之「救濟機制存活」 — 一張已撤銷之憑證若仍能在 verifier 端被當作有效憑證使用，受害公民之撤銷請求即使被 issuer 受理，其救濟在實際生效時序上承擔顯著遲滯。

**機制 γ₂ — Issuer / verifier 之間之半失效狀態**。灰色地帶之核心特徵不是「全有 / 全無」而是「持續性局部降級」。某些業務系統可能仍能線上驗證，某些則退回 offline 預快取模式；同一張 wallet 在不同 verifier 端可能得到不一致之 verification 結果。此時 PRF 的 agonism 分量承擔結構性挑戰 — agonism 所需之「持續異議結構」要求救濟管道在「半失效狀態」下仍可被進入；但行政救濟之既有程序 (例如訴願法之程序時程) 並非為「issuer 部分可達 + 部分不可達」之灰色狀態而設計。

**機制 γ₃ — 信任清單 (trust list) 之政治性擺盪**。台灣數位憑證皮夾之信任清單部分上鏈於公共鏈 (Ethereum) — 此屬已知事實 (見 *did-vc-public-chain-deployments* 記憶條目)。公共鏈承載之優勢在於「即使 issuer 端被癱瘓，trust list 之歷史狀態可被任意第三方驗證」；但當灰色入侵製造之政治壓力使政府考慮緊急修改 trust list (例如撤銷某境外 verifier)，公共鏈上之變更亦會被任意觀察者記錄，trust list 之政治擺盪在 chain-of-custody 上被永久留痕 — 這對 PRF 的 contestation 分量是雙向的：歷史可被審計，但「為何在某時點改變 trust list」之政治理由不上鏈，仍可被質疑。

**接合 A14 jurisdictional redress**。A14 §3.2 (issuer 撤銷錯誤無單一資料保護機關可投訴) 與 §3.3 (廠商失效救濟路徑) 在 γ 情境下複合：當 wallet 廠商之伺服器位於台灣境內，撤銷錯誤發生時，跨境受害公民 (例如外籍移工、跨境商務人士) 之投訴在准戰爭狀態下會遭遇「lead supervisory authority 機制完全不適用 + 在地 DPA 注意力被分流到網安事件」之雙重瓶頸。A14 §6 之「規範遞延」對 γ 壓力之承載能力，依賴於被遞延法域 (例如歐盟、日本、ASEAN 成員國) 對台之雙邊同意條件是否在准戰爭狀態下仍能執行 — 此屬政治可行性層而非規範邏輯層。

**likelihood-by-mechanism (γ 對應 PRF 四分量)**

| 分量 | likelihood | 機制理由 |
|---|---|---|
| validity | medium | 密碼學層在 γ 壓力下大致仍可運作；validity 之退化主要在撤銷狀態時序面 |
| plurality | medium | plurality 之工程備援與 β 重疊，但 γ 額外承擔「政治擺盪使備援之中立性受質疑」 |
| contestation | high | 救濟機制存活在 γ 是最脆弱面 — revocation latency + 行政救濟程序之非為灰色狀態設計，雙重打擊 contestation |
| agonism | medium-high | 持續異議結構在「半失效狀態」下承擔「程序進入難度」之結構性挑戰 |

## §6.4 三重壓力複合 (α + β + γ 同時發生)

α + β + γ 同時發生情境並非純假設 — INDSR 之灰色地帶研究與 CNAS 之 Taiwan contingency planning 都已將「資訊戰 + 物理基礎設施擾動 + 准戰爭狀態」之複合情境視為一個合理分析錨點[ref-8][ref-9]。複合情境下，PRF 四分量同時承擔多向壓力，民間備援棧 (SA3 範圍) 與政府單一棧 (SA1 / SA2 範圍) 之承載差異此時最為顯著。

**複合機制之非線性放大**。三重壓力之效應並非簡單疊加。當 α 之認知作戰已先把 issuer 公信力定錨為政治符號，β 之海纜中斷會被認知作戰快速吸收為「政府失能」敘事 (而非中性物理事件)；γ 之 revocation latency 在 α 之噪音環境下無法被公民有效辨識為「行政延遲」還是「行政選擇性對待」。複合情境下，contestation 分量在「能否被聽見 (α) + 救濟通道存活 (β) + 救濟時序可接受 (γ)」三條件同時受擊。

**民間備援棧之比較承載能力**（**inline caveat per §7.4 anti-overclaim**：以下比較限於 §5.5 已明示之**設計直觀比較範圍**，不主張規範性方案優位性；民間倡議文本僅為設計直觀來源，任何將其讀為政策推薦或規範主張之引用本文預先撤回）。「有備而來」litepaper 在民間倡議文本層級描述之多重備援 (含 mesh 網絡、LEO 接力、紙本 fallback、跨境信任錨點) 在複合壓力下，其承載性質與政府單一棧不同 — 民間棧在設計直觀層之優勢在於「不依賴單一信任根 + 不承擔政治化壓力之集中點」，劣勢在於「規模化承載量級遠低於政府棧」。在 PRF 框架下，民間備援棧之具體價值在 plurality 與 contestation 分量上之**設計覆蓋**：當政府棧因政治化或物理擾動而局部失效，民間棧可承擔「最小可用 civic proof」之承載 (對應 A15 §5.3 實質保障三軸並行)，但不承擔 validity 之公共理性根據 (此仍屬國家義務範圍)。

需明示限制：民間備援棧之 likelihood 評估，是「在已部署且具一定使用基數之假設下」之機制性評估；若民間棧仍處於倡議文本階段而未實際部署，其在複合壓力下之承載能力不可被高估。截至 2026-05，台灣民間 wallet / DID 生態之實際部署仍處於 small-scale pilot 階段，承載百萬量級使用者之能力尚未實證。

**SA1 / SA2 政府單一棧之比較**。政府單一棧在複合壓力下承擔之主要風險，是「單點故障風險」與「政治化定錨之先發劣勢」。SA1 / SA2 範圍 (對應全文先前章節已論述之政府治理結構) 之核心優勢仍在於「規範上之 jurisdictional 救濟管道明確」與「規模化承載已就位」，劣勢在於 α 壓力下無法快速去政治化、β 壓力下備援不在政府治理直接掌控、γ 壓力下行政程序非為灰色狀態設計。

## §6.5 機制性 likelihood 評估表 (分析性，非實證預測)

> **表頭性質宣告**：本表為機制性 likelihood 評估，非統計預測；不對應實際發生機率小數；四級語式 (low / medium / medium-high / high) 為相對量級。每 cell 之單句機制理由為本節 §6.1–6.4 機制分析之壓縮表述。**per §7.3 anti-overclaim**：此四級語式為設計直觀之相對排序語式，**不主張對應任何機率分布**；任何將四級讀為機率區間之引用，本文預先撤回。

| | validity | plurality | contestation | agonism |
|---|---|---|---|---|
| **α 認知作戰** | medium-high — issuer 公信力先於使用被政治符號化 | medium — 工程備援未被破壞但敘事空間被壓縮 | medium-high — 異議者被合成噪音淹沒而非禁聲 | medium — 長期承載依賴民間社會韌性，短期穿透不必然瓦解 |
| **β 海纜中斷** | medium — offline 模式可保留驗證子集，但撤銷新鮮度降階 | medium-high — 備援棧工程性可用度直接決定 plurality 載量 | medium-high — 異議通道依賴跨境備援，備援政治選擇反向影響中立 | medium — 單一中斷事件對長期結構之敏感度低 |
| **γ 灰色入侵** | medium — 密碼學層仍運作，退化在撤銷時序面 | medium — 工程備援與 β 重疊，疊加政治擺盪疑慮 | high — revocation latency + 行政程序非為灰色狀態設計，雙重打擊 | medium-high — 「半失效狀態」之程序進入難度結構性升高 |

**單元解讀注意事項**：
1. 同一列 (同一壓力對應四分量) 之分布顯示「該壓力之主要傷害面」；α 主要打擊 validity 與 contestation，β 主要打擊 plurality 與 contestation，γ 主要打擊 contestation 與 agonism。三重壓力之共同主要受害分量是 **contestation**。
2. 同一行 (同一分量對應三壓力) 之分布顯示「該分量之主要脆弱面」；contestation 在三種壓力下皆承擔 medium-high 以上之 likelihood，是 PRF 四分量中之結構性最脆弱項。
3. validity 在 γ 之 likelihood 為 medium 而非 high — 此為刻意收斂：密碼學層在准戰爭狀態下大致仍可運作，validity 之主要傷害在 α 之公共理性根據面，非 γ 之密碼學面。
4. agonism 整體 likelihood 偏低於 contestation — 此反映 agonism 之長期結構性質：單一壓力事件即使顯著，對「持續異議結構之長期存活」之短期穿透有限。

**複合情境下之表格讀法**：α + β + γ 同時發生時，不對個別 cell 之 likelihood 做加總；而是讀為「contestation 整列同時承擔三個 medium-high 以上之壓力，承載瓶頸在此分量集中」。複合壓力下民間備援棧之主要價值，在於 plurality 與 contestation 兩列之承載分散。

---

## §References (SA4)

- [ref-1] Doublethink Lab, *China Index 2024 — Taiwan Country Report*, 2024
- [ref-2] Taiwan FactCheck Center & IORG, 2024 大選週期 LLM 合成內容監測年報，2024–2025
- [ref-3] V-Dem Institute, *Democracy Report 2025* + *Digital Society Survey 2024–2025 data*
- [ref-4] Freedom House, *Freedom on the Net 2024 — Taiwan*
- [ref-5] 中華電信公告 / NCC 公告，馬祖海纜中斷事件 (2023-02-02 第一段中斷、2023-02-08 第二段中斷、約 35 天恢復至備援水準)
- [ref-6] TeleGeography Submarine Cable Map 2024–2025；NCC 國際海纜資料
- [ref-7] 中華民國國防部，《2025 國防報告書》
- [ref-8] 國防安全研究院 (INDSR)，灰色地帶系列研究 (2023–2025)
- [ref-9] Center for a New American Security (CNAS), *Taiwan Gray Zone* 與 *Taiwan Contingency Planning* 系列報告 (2023–2025)
- [ref-A14] Cross-Jurisdictional Redress Gap (本系列 A14)
- [ref-A15] Civic-Proof Inclusion Rights (本系列 A15)
- [ref-E3] Structural Slippage Prevention (本系列 E3)
- [ref-10] 「有備而來」litepaper (民間倡議文本，2025-11 公開徵詢版；本文僅在工程性備援準備度層級援引，不援引其規範性主張)


---

## §7 反論壓力測試

本節對前 §1-§6 提出六條獨立反論。每條反論的設計原則是：(a) 不是稻草人——若採信，反論能拆解 §1-§6 之某一具體承擔；(b) 自我攻擊強度需高於 80%——即在反論方主場條件下，本文 working thesis 須退讓至「條件性典型案例」立場，而非保留原貌。本節之目的不是把反論駁倒，而是把它們所要求的退讓**形式化**，並標示哪些退讓本文確實接受、哪些拒絕、哪些懸置 [ref-1] [ref-2]。

### §7.1 反論 A：「台灣是 sui generis 例外，不是典型壓力測試案例」

**反論陳述**。本文 §1-§3 主張台灣是「PRF 在民主前線的 stress-test 案例」(working thesis)。但若 stress-test 之定義要求「條件分布上具有代表性」，則台灣同時並存四項條件——(i) 強公民社會（g0v / 公民科技社群 / 結社密度）、(ii) 四年一週期的高頻選舉、(iii) 地震與海纜中斷的物理基礎設施情境、(iv) 跨海峽軍事壓力與 grey-zone 認知作戰——之國家極少。Estonia 缺 (iii)(iv)，Ukraine 缺 (i) 之相同質地，Israel 與 South Korea 各缺 (i) 或 (iii) 之一。結論：台灣是 **sui generis 並存組合**，作為 PRF 壓力測試案例時，其結論對任何其他單一民主政體均無外推力。

**自我攻擊強度評估**。此反論若成立，本文 §6 之普適性推論幾近全部失效；本文 working thesis 自「條件性典型」退為 **illustrative anchor**（示例性錨點而非典型）；A2 §11 已明示「條件性閾值身分」一條，與此一致。攻擊面覆蓋 §1（定位）、§2（PRF 四分量在台灣場景之具體化）、§6（普適化推論），近似 100%。

**本文之回應方向**。

1. 接受「sui generis 並存組合」之描述為真；
2. 但 stress-test 之邏輯功能不要求樣本代表性，要求**存在性壓力**——即若一個民主政體在四條件並存下，PRF 四分量仍可被同時違反、同時恢復、同時被經驗化追蹤，則「PRF 在民主前線條件下可被工程化追蹤」此一存在命題成立；
3. 因此本文 working thesis 改為「**條件性典型 + 存在性壓力**」雙語式：台灣不是統計樣本上的典型，但其並存組合提供 PRF 在最嚴苛條件邊界附近之 existence proof。
4. **退讓**：本文 §6 對「普適性推論」之強度，下調為「在較弱條件子集上可外推之假設」，留待跨案例比較章（dissertation 路徑）回填。

### §7.2 反論 B：「PRF 分量在台灣案例違反不可化約性」

**反論陳述**。A2 §3.2 之核心承擔之一是：PRF 四分量（plurality / validity / contestation / agonism）「在合取下界框架內各自必要」，且「難以由其他分量完全補位」[ref-3]。但本文 §4-§5 描述的台灣民間備援，包括 g0v 之事實查核網絡、公民科技社群之選舉協作、地震／海纜中斷情境下之民間訊息走廊——同一組民間機制**同時承擔** plurality（多元行動者進場）與 agonism（對抗式異議公開化）。若同一機制能同時承擔兩分量，則此兩分量在台灣場景之**可區辨性（distinguishability）失效**，PRF 「各自必要」之承擔在本案例內變為「兩兩耦合」。這對 A2 §3.2 是**內部威脅**而非外部反論：它不否認 PRF，但否認 PRF 在台灣場景下保持四分量結構。

**自我攻擊強度評估**。攻擊面覆蓋 §4（PRF 分量具體化）+ §5（民間／政府混合棧之 PRF 對映），約 70-80%。若反論成立，A2 §3.3 之 92 cell 承擔矩陣須在 Taiwan 案例 column 增列「分量耦合度標記」，且 A2 T_PRF1 「合取下界形式定理」對 Taiwan 場景退化為較弱版本。

**本文之回應方向**。

1. **區分機制承擔與規範分量**。同一機制承擔多分量，不等於兩分量在規範上化約為一。Habermas Geltungsansprüche 與 Mouffe agonism 在原典中已多次同 institutional locus 共存（Fraser counterpublics 即是）[ref-4]。
2. **承認可區辨性弱化**。本文 §5 明示：台灣場景下「plurality 之 agonistic 承擔」與「agonism 之 pluralistic 承擔」需在分析時做**配對拆解**（pairwise disambiguation），而非預設彼此獨立。
3. **退讓**：A2 §3.2 「各自必要」之強形式在台灣案例改寫為「**在合取下界內各分量保持可區辨之規範身分，但其機制承擔可耦合**」。此條退讓回寫入 §8.1 對 A2 之修正方向。

### §7.3 反論 C：「LegitimacyDegrade ≥ θ_dem 閾值在 SA2 §4.5 仍偷渡了實證主張」

**反論陳述**。A2 已將 LegitimacyDegrade(d) ≥ θ_dem ≈ 0.5 全部加 inline caveat「分析性建議數，未經校準，需 ≥ 5 案例迴歸校準」[ref-5]。本文 SA2 §4.5 採用「likelihood-by-mechanism 四級」表述以避開實證閾值之偷渡。**但**：四級之間的判分本身仍依附於「某機制違反某分量之機率分布」，而該機率分布在 Taiwan 場景之經驗基礎，**目前不存在**（B2 已被 GPT-5.5-pro 二輪 audit 限定為 method pilot，撤回所有具體小數）[ref-6]。結論：四級語言只是把實證主張**從尺標降為序級**，但**未消除實證依賴**。SA2 §4.5 仍偷渡了一個「mechanism-conditional 機率序」之實證假設。此為對 B2 Phase 0d Revision Note 的**延伸質詢**：B2 撤了小數，但 Taiwan 案例仍使用序級——序級的合法性同樣需要實證根據。

**自我攻擊強度評估**。攻擊面覆蓋 SA2 §4.5（閾值處理）+ §5（風險分布敘述），約 85%。這是六條反論中對「方法論誠實邊界」攻擊強度最高的一條。

**本文之回應方向**。

1. **承認序級仍是實證依賴的弱形式**。四級之間（rare / low / moderate / elevated）若被理解為機率區間映射，則需要實證錨；若被理解為**設計直觀的排序語言**，則不需要實證錨，但對讀者必須明示。
2. **採設計直觀解讀**：本文 SA2 §4.5 之四級僅指**設計風險的相對排序**，不主張對應任何機率分布。任何把四級讀為機率區間的引用，**本文預先撤回**。
3. **退讓**：SA2 §4.5 開頭新增警語（已寫入 §5 修訂版）：「本文四級語言為設計直觀排序語式，不主張對應機率分布。對映到 LegitimacyDegrade ≥ θ_dem 之形式時，僅作為條件性語式之質性錨。」此條退讓回寫入 §8.1 對 A2 與 B2 之修正方向。

### §7.4 反論 D：「『有備而來』民間倡議文本引用層級被偷渡上升」

**反論陳述**。本文 §5.5 明寫「設計直觀 vs 規範主張之分離原則」，即引用之民間倡議文本僅作為設計直觀之來源，不作為規範主張之根據。**但**：§6.4「民間備援 vs 政府供給之 PRF 承載能力比較」一段，若採信民間備援在 plurality 與 agonism 上「承載能力較高」之相對判斷，則該判斷之根據實際上落在民間倡議文本之設計直觀上——換言之，§6.4 在做**規範性比較**時，隱含了民間倡議文本之**方案優位性**。這正是 Phase 2 Overclaim Log §「倡議文件當實證」類錯誤之內部複犯 [ref-7]。**內部審查**：§6.4 應對承載能力比較加強限制，否則「設計直觀／規範主張」之分離原則在 §6.4 失守。

**自我攻擊強度評估**。攻擊面集中於 §6.4，約 80%。對其餘章節影響為間接。

**本文之回應方向**。

1. **接受 §6.4 措辭過強之指控**。原 §6.4 表述「民間備援之承載能力較高」改寫為「在 §5.5 已明示之設計直觀比較範圍內，民間備援對 plurality 與 agonism 之**設計覆蓋**較全面；本文不主張此差異等同規範性優位」。
2. **強化分離原則之邊界用語**。§6.4 全段加 inline caveat：「民間倡議文本僅為設計直觀來源；任何將其讀為政策推薦或規範主張之引用，本文預先撤回。」
3. **退讓**：§6.4 結論不再支撐「方案優位性」之普適化推論。此條退讓回寫入 §8.1 對 E1（wallet essential facility）之修正方向，因 E1 對「民間替代供給」之描述同源於此處風險。

### §7.5 反論 E：「台灣浪漫例外論的修辭風險」

**反論陳述**。國際媒體在 2014-2024 年間已多次將 g0v、Audrey Tang、台灣公民科技社群、開放政府實踐——加上民間倡議文本之韌性敘事——組合成**台灣浪漫例外論**（Taiwan romantic exceptionalism）敘事：把台灣描述為「**民主數位治理的全球範本**」。本文 §1-§6 雖未直接使用此修辭，但其結構（「stress-test 案例」+「民間備援 PRF 對映」+「國際借鑑」）易被讀者重新組裝為浪漫例外論。**反論之核心**：本文若不對此明示拒絕，將被外部引用為浪漫例外論之學術背書，此為**敘事被劫持**之風險。

**自我攻擊強度評估**。攻擊面為**敘事層**而非命題層，覆蓋全文閱讀效果，約 80%。命題層之強度不受此反論影響，但學界與政策界之引用實踐可能因此偏離本文立場。

**本文之回應方向（anti-mythologization clause）**。

> **明示條款（本文之 anti-mythologization clause）**：本文不主張台灣為民主數位治理之全球範本；不主張 g0v、公民科技社群、民間備援機制可獨立提供 PRF 四分量之完整承載；不主張台灣經驗可直接外推至任何其他單一民主政體。本文對「台灣浪漫例外論」之外部引用使用，預先撤回背書。任何將本文讀為「台灣是模範生」敘事之引用，本文視為對 working thesis 之**誤讀**。

此條款在文末 §References 之前獨立成段，避免被讀者跳讀漏失。

### §7.6 反論 F：「中華民國／台灣憲政地位之未定性對 PRF 適用域的衝擊」

**反論陳述**。PRF 之 jurisdictional scope 預設一個可清楚界定的**民主憲政共同體**（demos）。但中華民國／台灣之憲政地位在跨境 trust 與國際承認層面長期未定：(i) 多數國家不承認台灣為主權國家；(ii) ISO 3166 之 TW 編碼長期受制於命名爭議；(iii) 跨境 DID/VC 信任清單與 EUDI 體系之台灣身分流通在條約法層面缺乏直接基礎；(iv) 在 PRF 跨案例比較中，「demos 之邊界」此一前提在台灣場景**內生不穩定**。**結論**：在 PRF 規範下界之適用域定義環節，台灣案例首先面臨「適用域本身是否能形式化」之前置質疑——這比四分量內部之承擔問題更為基礎。

**自我攻擊強度評估**。攻擊面在**前置層級**——若反論成立，本文 §1-§6 之 PRF 對映在進入分析之前即遇到 jurisdictional scope 之形式定義缺失。覆蓋率約 90%，且為**唯一一條涉及形式定義之反論**。

**本文之回應方向**。

1. **承認 jurisdictional scope 在台灣案例之形式不穩定性**。本文不主張此問題已解。
2. **採功能性 demos 之操作定義**：在 PRF 分析範圍內，demos 定義為「實際參與台灣選舉、稅務、健保與民間結社之公民與長期居民集合」，**避開**主權承認問題。此操作定義之代價：(i) 跨境議題（陸配、台商、東南亞配偶、海外公民）之 PRF 承擔需獨立論證；(ii) 不能直接接合 A14（跨法域救濟）之歐盟內論證 [ref-8]。
3. **退讓**：本文 working thesis 之 jurisdictional scope 改寫為「**民主前線之功能性 demos**」，並在 §8.2 修正方向 (i) 明示「PRF 規範下界之 universal-conditional 區分」必須包含對 demos 形式定義之獨立論證。此為對 A2 §11 誠實邊界之 cross-paper claim 補強。

---

## §8 對系列既有結論的修正方向

本節將 §7 六條反論的退讓回寫入系列既有承擔，標示**哪一篇 / 哪一條主張 / 修正成什麼**。每條修正為 1-2 句，方便系列 capstone（article 25）統一處理 [ref-9]。

### §8.1 對系列九篇主要承擔之修正方向

- **A1（可問責不以實名）**：原承擔之 plurality 與 agonism 之雙核心，在台灣場景需新增「機制承擔可耦合但規範身分保持可區辨」之注記（回應 §7.2）。**修正**：A1 §4.1 Arendt 隱用段加腳註指向本文 §7.2。
- **A2（PRF 規範下界，article 19）**：(a) §3.2「各自必要」之強形式在民主前線案例改寫為「規範身分保持可區辨，機制承擔可耦合」（回應 §7.2）；(b) §11 誠實邊界補一條「jurisdictional scope 之形式定義需獨立論證」（回應 §7.6）；(c) §3.3 92 cell 矩陣 column 增「分量耦合度標記」之 future work（回應 §7.2）。
- **A14（跨法域救濟，E4）**：原承擔「歐盟內已部分解」+「歐盟外仍是重大缺口」之分裂結論 [ref-10]，在台灣場景以**功能性 demos 操作定義**為前提（回應 §7.6）。**修正**：A14 §11 補腳註指向本文 §7.6，明示「台灣跨海峽議題不適合直接借用歐盟內論證」。
- **A15（inclusion rights，E5）**：原 Level 1-3 權利語言三層拆分 [ref-11] 在台灣場景仍適用，但 Level 2 制度義務於「中華民國憲政地位未定性」下之具體執行路徑需獨立論證（回應 §7.6）。**修正**：A15 Revision Note 補腳註指向本文 §7.6。
- **F1（agent delegation，operational spine of the spine）**：F1 之四分量全核心承擔 [ref-12] 在台灣場景之 mapping，需配合 §7.2 之「機制承擔可耦合」做承擔結構之 pairwise disambiguation。**修正**：F1 §6 補腳註指向本文 §7.2。
- **F2（civic-action-receipt）**：F2 之 23 leaf schema 在台灣民間／政府混合棧場景之具體 instantiation，需新增 jurisdictional scope 欄位群（回應 §7.6）。**修正**：F2 §3.1 schema 之 future work 條目補一條。
- **F3（selective disclosure UX）**：F3 之認知負荷論證在台灣多語場景（國、台、客、原住民族語、新住民語）下，inclusion 設計需與 A15 Level 2 制度義務接合（回應 §7.6）。**修正**：F3 §10 forward-link 段補腳註。
- **E1（wallet as essential facility）**：原承擔之「反壟斷套用 + multi-pronged 替代供給」中，「民間替代供給」之規範性比較強度下調（回應 §7.4）。**修正**：E1 §5 對 multi-pronged 替代供給段加 inline caveat「相對承載能力比較限於設計直觀範圍」。
- **E3（結構性滑坡預防）**：MVSR 三層 + sunset / scope-bound / split-key 之預防機制，在台灣場景需新增「對 grey-zone 認知作戰之滑坡預防」一條（回應 §7.1 之條件 iv）。**修正**：E3 §6 補一條 future work。

### §8.2 凝聚為三條普適性主張之修正

- **(i) PRF 規範下界之 universal-conditional 區分**。原 A2 之 PRF 規範下界為單一 universal 陳述加民主政體預設。本文修正：PRF 之 universal 部分為**四分量結構**之必要性；conditional 部分為**機制承擔 / 分量耦合度 / jurisdictional scope 之形式定義**——後者隨案例變動。capstone 與 dissertation 路徑須在 PRF 主文層分離此兩部分（對應 §7.1、§7.2、§7.6）。
- **(ii) 民間 + 政府混合棧之 PRF 對映需獨立論證（民間倡議文本不能直接搬用）**。本文 §6.4 已將「民間備援之承載能力較高」限於設計直觀比較範圍。系列 capstone 須將此分離原則上升為**跨案例論證紀律**：任何混合棧 PRF 對映之承載能力比較，須與民間倡議文本之設計直觀**形式分離**，並標示其在 §8.1 對應篇章之修正位置（對應 §7.4、§7.5）。
- **(iii) civic-proof 在民主前線之韌性需求高於一般民主政體**。原系列預設「民主政體」為均質前提。本文修正：在民主前線（democratic frontline）條件下——即同時並存強公民社會 + 高頻選舉 + 物理基礎設施情境 + 跨境敵對壓力——civic-proof 之韌性需求比一般民主政體高一階；F1 / F2 / F3 之工程操作要求須對此差異作條件性精細化（對應 §7.1）。

---

## §9 結論

本文之 working thesis 在六條反論壓力測試下修正為以下形式：

> 台灣不是 PRF 之統計樣本上的典型案例，而是 PRF 在民主前線條件下之**條件性典型 + 存在性壓力案例**。在強公民社會偏置與 sui generis 並存組合並存之風險下，台灣為 PRF 四分量同時可被違反、可被工程化追蹤、可被民間／政府混合棧承載之 existence proof，但其 PRF 對映之普適化推論強度，下調為「在較弱條件子集上可外推之假設」。本文之 anti-mythologization clause（§7.5）明示拒絕台灣浪漫例外論之外部引用使用，並對 jurisdictional scope 之形式定義缺失（§7.6）保留獨立論證之 future work。

此 working thesis 之修正形式，與 A2 H.5「T0 revision——結構重寫 + 強度校準 + 範圍降級 + 哲學抗辯升級」之四項變化保持結構一致 [ref-13]：本文之退讓不是對 PRF 之主論證撤退，而是把原本隱含全球外推之 thesis 重寫為「**條件性典型 + 存在性壓力 + 民主前線韌性需求高一階**」三件式。

**三條 future work**：

1. **Dissertation case chapter**。本文為 dissertation 路徑之 Taiwan 章前驅；該章需在本文基礎上補上 (a) §7.2 機制承擔可耦合之 92 cell 矩陣補強；(b) §7.6 jurisdictional scope 之形式定義獨立論證；(c) §8.2 (ii) 混合棧 PRF 對映之獨立論證紀律。
2. **跨案例比較（Taiwan vs Estonia vs Bhutan）**。本文 §7.1 已標出三案例之條件分布差異。跨案例比較章須建構**最小條件變量集**（minimal conditional variable set），使三案例在 PRF 對映上之差異可被歸因到特定條件之有無，而非歸因到「文化獨特性」之黑箱。
3. **民間備援之 PRF 對映之獨立論證**。本文 §6.4 與 §8.1 對 E1 之修正方向均指向同一 future work：民間備援承擔 PRF plurality / agonism 之規範性比較強度，須與民間倡議文本之設計直觀**形式分離**地獨立論證——這需要一篇獨立論文，可在系列 capstone（article 25）之後展開。

**Forward-link to series capstone (article 25)**：本文 §8.2 三條普適性主張之修正，為 capstone 之主結構提供台灣案例之承擔輸入；capstone 須將本文之 anti-mythologization clause、§7.6 jurisdictional scope 形式定義缺失、§8.1 九篇主要承擔之修正方向，整合到系列 23+1 篇之完整修正版承擔矩陣中，並對 dissertation 路徑與 open questions agenda 做最終分流。

---

## §References (SA5)

- [ref-1] 本文之反論設計原則沿用 A2 §9「反論壓力測試——削弱但不推翻」之方法
- [ref-2] 本文之反論強度評估採 audit-output.md §H.5 之四向變化框架
- [ref-3] A2 §3.2 PRF 合取下界形式定理 T_PRF1-T_PRF4
- [ref-4] A2 §5.3 Fraser counterpublics 對 Habermas 之補正
- [ref-5] audit-output.md §I.4 Patch Pack B.3
- [ref-6] audit-output.md §I.4 Patch Pack D
- [ref-7] overclaim-batch-5.md
- [ref-8] D-3 audit observation
- [ref-9] §8 修正方向回應 audit-output.md §I.7 Phase 2 Capstone Overview 之資料需求
- [ref-10] A14 (E4) 跨法域救濟之承擔分裂結論
- [ref-11] A15 Revision Note Level 1-3 三層拆分
- [ref-12] A2 §3.3 92 cell 承擔矩陣
- [ref-13] audit-output.md §H.5 T0 revision 之四項變化框架


---

---

## §10 Revision Note (2026-05-16)

本文為 civic-proof 系列第 24 篇（Phase 4a Taiwan deep-dive），承擔以下五項紀律：

1. **「有備而來」litepaper 處理紀律**：該文本為**民間推測性實作專案文本**（speculative civilian implementation document），本文引用統一稱「『有備而來』litepaper（民間倡議文本，2025-11 公開徵詢版）」；URL https://blog.bonds.tw/litepaper/，取用日期 2026-05-16。本文不採學術引用格式；不把該文本之規範語言搬用為 PRF 規範主張；該文本內容於 §5 摘述為設計直觀（design intuition），其 PRF 對映為本文獨立論證，不依賴該文本自身規範語言。

2. **B2 Phase 0d Revision Note 紀律延伸**：本文 §6.5 之 likelihood-by-mechanism 四級評估表為**設計直觀之相對排序語式**，**不主張對應任何機率分布**。任何將四級讀為機率區間之引用，本文預先撤回（per §7.3 反論 C 之退讓）。

3. **Anti-mythologization clause**（per §7.5 反論 E 退讓）：本文不主張台灣為民主數位治理之全球範本；不主張 g0v、公民科技社群、民間備援機制可獨立提供 PRF 四分量之完整承載；不主張台灣經驗可直接外推至任何其他單一民主政體。任何將本文讀為「台灣是模範生」敘事之引用，本文視為對 working thesis 之**誤讀**。

4. **Working thesis 之三件式承擔**：「**條件性典型 + 存在性壓力 + 民主前線韌性需求高一階**」（per §9 結論）。台灣不是 PRF 之統計樣本上的典型案例；其 sui generis 並存組合提供 PRF 在最嚴苛條件邊界附近之 existence proof，普適化推論強度下調為「在較弱條件子集上可外推之假設」。

5. **Jurisdictional scope 之功能性 demos 操作定義**（per §7.6 反論 F 退讓）：本文採「實際參與台灣選舉、稅務、健保與民間結社之公民與長期居民集合」之功能性 demos 操作定義，避開主權承認問題；跨境議題（陸配、台商、東南亞配偶、海外公民）之 PRF 承擔留待獨立論證。

本文 §8.1 對系列既有九篇（A1/A2/A14/A15/F1/F2/F3/E1/E3）之具體修正方向，將於系列 capstone（article 25）統一處理。本文為 dissertation 路徑之 Taiwan 案例章前驅；後續跨案例比較（Taiwan vs Estonia vs Bhutan）與民間備援 PRF 對映之獨立論證，列為 future work。

---

## §References (Consolidated)

本文引用之 ref 編號於各章節獨立編列；統一整理請見章節末 §References 段。重要外部來源彙整如下：

**台灣制度史與 DIW 政策（§3）**
- 司法院釋字第 261 號解釋（1990-06-21）：https://cons.judicial.gov.tw/docdata.aspx?fid=100&id=310442
- 行政院第 3632 次院會議案〈數位身分識別證〉（2018-12-27）：https://www.ey.gov.tw/Page/448DE008087A1971/12ffc708-1b40-450a-b50a-0114b479e079
- 行政院〈暫緩數位身分證發行計畫〉（2021-01-21）：https://www.ey.gov.tw/Page/9277F759E41CCD91/e80e55a2-0102-4031-b6d3-a7c40f4cac6a
- 林宗男、李忠憲〈數位身分證的資安風險〉，自由評論網：https://talk.ltn.com.tw/article/paper/1318140
- 報導者〈從被迫喊卡的數位身分證政策〉：https://www.twreporter.org/a/e-id-in-taiwan-2021-failed
- 數位發展部官網〈歷任部長〉：https://moda.gov.tw/aboutus/ministers-since-2022/1527
- iThome〈數位憑證皮夾打造數位環境的信任基石〉：https://www.ithome.com.tw/news/173833
- CIO Taiwan〈數位憑證皮夾開跑〉：https://www.cio.com.tw/93520/
- 區塊勢〈為什麼數位憑證皮夾不能用 Apple Wallet 就好？〉：https://www.blocktrend.today/p/ep312
- 個人資料保護委員會籌備處：https://www.pdpc.gov.tw/

**規格與規範文件（§4）**
- EUDI Architecture and Reference Framework 2025-12 iteration：https://eudi.dev/
- W3C Verifiable Credentials Data Model v2.0（2025-05-15 W3C Recommendation）
- BBS Cryptosuite v1.0 → 2026-04-07 CRD（Candidate Recommendation Draft）
- ISO/IEC 18013-5 mDL standard
- Regulation (EU) 2024/1183（eIDAS 2.0）

**三重壓力之外部來源（§6）**
- Doublethink Lab, *China Index Annual Report* (2022-2025)
- IORG（台灣資訊環境研究中心）+ Taiwan FactCheck Center 年度監測報告
- V-Dem Institute, *Democracy Report 2025*
- Freedom House, *Freedom on the Net 2024 — Taiwan*
- 中華電信／NCC 公告：馬祖海纜中斷事件（2023-02-02 / 2023-02-08，恢復約 35 天）
- TeleGeography Submarine Cable Map（2024-2025）
- 中華民國國防部《2025 國防報告書》
- 國防安全研究院（INDSR）灰色地帶系列研究
- CNAS *Taiwan Gray Zone* + *Taiwan Contingency Planning* 系列

**民間倡議文本（§5）**
- 「有備而來」litepaper（民間倡議文本，2025-11 公開徵詢版）：https://blog.bonds.tw/litepaper/，取用日期 2026-05-16

**系列內 forward-link**
- A1 (2026-05-02)：accountability-without-identification
- A2 (2026-05-12)：public-realm-political-philosophy（PRF 規範論主文，本文承擔來源）
- A14 / E4 (2026-05-09)：cross-jurisdictional-redress-gap
- A15 / E5 (2026-05-10)：civic-proof-inclusion-rights
- B2 (2026-05-08)：digital-identity-civic-action-quant
- E1 (2026-05-08)：wallet-as-essential-facility
- E2 (2026-05-09)：no-phone-home-engineering-economics
- E3 (2026-05-09)：structural-slippage-prevention
- F1 (2026-05-10)：civic-ai-agent-delegation-limits
- F2 (2026-05-11)：civic-receipts-provenance
- F3 (2026-05-11)：selective-disclosure-ux-failure

**經典文獻**
- Arendt, H. (1958). *The Human Condition*. University of Chicago Press.
- Habermas, J. (1981). *Theorie des kommunikativen Handelns*. Suhrkamp.
- Pettit, P. (2012). *On the People's Terms*. Cambridge University Press.
- Mouffe, C. (2000). *The Democratic Paradox*. Verso.
- Taleb, N. N. (2012). *Antifragile: Things That Gain from Disorder*. Random House.
- Mueller, M. L. (2002). *Ruling the Root*. MIT Press.
- Aas, J. et al. (2019). "Let's Encrypt: An Automated Certificate Authority to Encrypt the Entire Web." *Proc. ACM CCS 2019*.
