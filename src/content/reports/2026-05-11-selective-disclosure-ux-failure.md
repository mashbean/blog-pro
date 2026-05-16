---
title: "選擇性揭露的 UX 認知極限：可審計工程原語的人因瓶頸"
description: "civic-proof 系列第 18 篇 (F3)。承接 article 17 (F2) §4–§7 四件密碼學工程原語與 article 16 (F1) §5.4 三項工程修正，把 UX 認知層作為 F2 四原語的「實際可履行性」補強。SD 之 holder informed consent 在四道認知瓶頸下無法履行：(i) Miller 7±2 與 Cowan 2001 working memory 4±1 + Sweller cognitive load theory 顯示 selective disclosure 多選項決策每超過 3 個 attribute group 即顯著退化；(ii) consent fatigue 與 dark patterns 在 wallet 場景同型重演 GDPR cookie banner 八年失敗（11.8% 合規率）；(iii) capacity 變動使「曾經 informed consent」失效，於 CDR ≥ 2 場景以 mechanism-based likelihood medium-high 退化為 substituted；(iv) supporter 介入邊界模糊使「協助理解」滑入「代為決定」。四件 UX 工程原語為 UX1 progressive_disclosure_ui、UX2 dark_patterns_firewall、UX3 capacity_aware_consent、UX4 supporter_ui_three_layer；以 V_ux ≜ C7 ∧ C8 ∧ C9 ∧ C10 合取承擔，V_receipt' ≜ V_receipt ∧ V_ux 為升級後可驗條件。SA3 補強包含失智 → wallet 三段中介鏈、CDR 三條替代路徑（self-assessment / supporter-triggered / issuer-side hint）的法律—工程—隱私 tradeoff、中介證據強度評估表 15 列、mechanism-based likelihood medium-high；SA4 supporter UI 三層分離以 signatures_disjoint = true 與 VerificationMethodDisjoint = true 兩道密碼學硬約束承載 CRPD §29「supporter 必要、不可替代」原則。working thesis 與 strengthened thesis 嚴格區分；後者含 UX-agility by design、threshold signatures 加 court-supervised downgrade、agent 與 supporter 密碼學區分加上 AgentDelegationProof 制度化三大緩解 critical path。CF1–CF5 反事實壓力測試在五 CF 全部觸發極端情境下，第一段 baseline 完整保留、第二段時程外推 ≥ 10 年、第三段條件性失效。F1 RT-ℬ ✗ 與 AA-ℬ ✗ 兩條常駐型不可委任邊界以擴充定理 T2' 明示——不存在任何 UX 原語子集合使 P_degrade ≤ θ₂。"
pubDate: 2026-05-11
tags: ["civic-proof", "selective-disclosure", "ux-cognitive-load", "informed-consent", "dark-patterns", "wallet-ux", "openid4vp", "presentation-exchange", "sd-jwt-vc", "EUDI-Wallet", "EU-AI-Act-Article-5", "EDPB-Guidelines-03-2022", "GDPR-cookie-banner", "CRPD-Article-12", "CRPD-Article-29", "supported-decision-making", "capacity-aware-ux", "supporter-ui", "comprehension-attestation", "chooser-signature", "Cowan-working-memory", "Miller-magical-number", "Sweller-cognitive-load", "Tversky-Kahneman", "progressive-disclosure", "Clinical-Dementia-Rating", "Israel-supported-decision", "Peru-DL-1384-apoyos", "TW-yiding-jianhu", "BankID-fullmakt", "POTENTIAL-UC6", "threshold-signatures", "LLM-agent-governance", "AgentDelegationProof"]
category: "數位身分與民主理論"
aiModel: "Claude Opus 4.7"
aiPrompt: "civic-proof series 第 18 篇 F3，承接 article 17 (F2) §4–§7 四件密碼學工程原語與 article 16 (F1) §5.4 三項工程修正、§7.3.1 AgentDelegationProof、article 15 (A15) §6.2 wallet 三重預設退化路徑。selective disclosure 的選項認知負荷如何量化？OpenID4VP DCQL 與 DIF PE v2.1 多 attribute / 多 verifier 場景的決策複雜度（Miller 7±2、Cowan 2001 working memory 4±1、Sweller cognitive load theory、Tversky-Kahneman heuristics）對 CRPD §29 informed consent 要求的工程意涵為何？verifier policy 的 dark patterns 風險如何防護？GDPR cookie banner 與 consent fatigue 在 wallet 場景同型重演的具體機制鏈為何？EU AI Act §5(1)(b) 對 manipulative techniques 之禁止如何延伸到 wallet UX？capacity 變動下的 informed consent 如何工程化？失智、急性醫療、年齡增長三場景之 capacity-aware UX downgrade、定期重評估、supporter 觸發機制？Clinical Dementia Rating（CDR）分級與 wallet UX 階段化的對應為何？supported decision-making 的 UI 三層分離（協助理解層 vs 操作介面層 vs 決定承擔層）如何實作？supporter 在 wallet UX 中的觸控介入邊界（co-presence vs co-signing vs proxy execution）如何透過 chooser_signature 與 comprehension_attestation 分離強制？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-11-selective-disclosure-ux-failure"
aiGeneratedDate: 2026-05-11
humanReviewed: false
lang: "zh-TW"
---

# 一、導論——從世界事件接地的四項認知-規範摩擦

2024 年 7 月 12 日，*Regulation (EU) 2024/1689*（以下稱 EU AI Act）正式於 *Official Journal of the European Union* L 1689/2024 公告，並於同年 8 月 1 日生效；其 Art 5(1)(b) 明文禁止「使用超越人之意識的潛意識技術，或具目的性之操縱或欺騙技術，以致實質扭曲一個人或一群人之行為，從而顯著減損其作出知情決定之能力」<sup>1</sup>。十八個月之後，*European Data Protection Board* 於 2023 年 2 月 14 日通過 *Guidelines 03/2022 on deceptive design patterns in social media platform interfaces* 的 2.0 版，將六大類「Overloading / Skipping / Stirring / Hindering / Fickle / Left in the dark」之 UI 設計與 GDPR Art 5(1)(a)「透明性」原則之違反作正面對位<sup>2</sup>。同一個月，*Nouwens, Liccardi, Veale, Karger, Kagal* 在 *CHI 2020* 發表的「Dark Patterns after the GDPR」公布——在英國前 10,000 個網站之中，僅 11.8% 之 cookie banner 符合 GDPR 的最低同意門檻；32.5% 完全沒有「拒絕」按鈕<sup>3</sup>。把時間軸再推一年，*POTENTIAL Use Case 6* 之 *mid-term technical report* 於 2025 年 9 月公布——122 名 65 歲以上參與 EUDI Wallet 醫療授權試驗的受測者中，47 人把 wallet PIN 直接交給家屬代為操作；同時依 *World Health Organization* 2024 年 *Dementia Fact Sheet*，全球失智盛行人口已達 5,500–5,700 萬，預估 2030 年達 7,800 萬<sup>4,5</sup>。

四件事件並非孤立。它們同時陳述了一個結構問題——數位身分系統正以前所未見的速度把「informed consent」工程化為以毫秒級點擊回應為單位的決策行為；而失智、急性醫療、年齡增長三條認知變動路徑使「曾經 informed」與「現在 informed」之間在事實上斷裂。當 *Regulation (EU) 2024/1183*（修訂 eIDAS 2.0）要求各成員國於 2026 年 11 月 21 日前部署 EUDI Wallet<sup>6</sup>、*Implementing Regulation (EU) 2024/2979* 補上技術細則<sup>7</sup>，「無 wallet 即無數位身分」在 6 個 OECD 法域內已是一年內可被觀察的政策事實；同時失智盛行率在 75 歲以上達到 17–25%、85 歲以上達到 30–40%<sup>5</sup>。把這兩件事疊起來，可估算的中高齡 + wallet 強制使用人口在 2026–2030 年於 OECD 範圍內超過 4,000 萬。

本文承接系列前兩篇的工程結論——A15「civic-proof inclusion rights」§6.2 已建立 wallet 三重預設（個人擁有 + 個人識別 + 個人私鑰）的退化路徑<sup>8</sup>；F1「civic AI agent delegation limits」§5.4 為 chooser_signature、audit-by-design、revocation_endpoint 三項工程修正提供密碼學承載<sup>9</sup>；F2「civic receipts provenance」§4–§7 建立 civic-action-receipt 的 14 個欄位群與 V_receipt 函數，並就 30 年保存窗口、法庭可採性、跨境互認分別給出條件性結論<sup>10</sup>。三篇文章在密碼學、保存責任、可採性、跨境互認四層完成了 selective disclosure 的工程承載；但都把「holder 在做出 chooser_signature 之前已具備 informed consent」這個關鍵前提交給後續處理。F2 §11 把這一前提以 `Informed(holder, r)` 記為待開發 6.4「threshold UX」議題。

本文的研究問題就是 F2 §11 留下的這個 anchor——當密碼學層完成、法律層完成、保存層完成，selective disclosure 之 informed consent 在 UX 層是否仍能成立？以下要回答的具體子問題有四：第一，OpenID4VP DCQL 與 DIF Presentation Exchange v2.1 多 attribute、多 verifier 場景下的決策複雜度，其認知科學的承載上界為何？第二，verifier policy 在 wallet 場景重演 GDPR cookie banner 八年失敗的具體機制鏈為何？工程上需要哪些強制性的設計約束？第三，CDR 變動（從 0、0.5、1、2、3 五階分級）下，「曾經 informed → 現在不 informed」的退化路徑如何透過 UX 工程逐步降階？第四，supporter（不必然為家屬）在 wallet UX 中的「協助理解」與「代為決定」之間，工程上如何強制分離？

本文採論文式結構，與系列前兩篇對齊。第二章建立概念基礎與 forward-link；第三章給出 F3 四件 UX 工程原語的形式骨架（V_ux 函數、四條定理 T_UX1–T_UX4、線性閉包與反饋環路）；第四至第七章分別展開 SA1（認知負荷）、SA2（dark patterns）、SA3（capacity-aware UX 三條替代路徑與中介證據強度評估表）、SA4（supporter UI 三層分離）；第八章為跨法域 process tracing；第九章為反事實壓力測試，含 likelihood × impact 矩陣與三大緩解 critical path；第十章接合系列前作 forward-link 並預告 F4；第十一章列出誠實邊界與三十三條 open questions；第十二章為條件性學術結論。

# 二、概念基礎與 forward-link

本章建立四組必要概念，並承接系列先前已建立的 anchor。為控制章節結構與閱讀動能，本章只設五個子節，將條號對齊、版本修訂等項目併入第十一章誠實邊界。

## 2.1 F2 四原語在 critical path 的位置

F2 已建立四件密碼學工程原語——SA1 cryptosuite 三族（SD-JWT-VC baseline + BBS+ 條件性高階 + ZK-SNARK 範疇受限）、SA2 long-term preservation 30 年下限與三種雙軌設計（設計 A 為加密 backup 加 supporter 持解密鑰但無簽章權、設計 B 為 threshold signatures with supporters in quorum 違反 CRPD §28、設計 C 為 threshold signatures with subject mandatory + supporters as recovery only 屬邊緣可採）、SA3 法庭可採性走 FRE 901(b)(9) 之 holder-controlled 路徑、SA4 跨境互認的 5/10/15 年三段時程估計<sup>10</sup>。四原語在 V_receipt 函數內以六道合取條件 C1–C6 整合，命題 T1–T4 為其形式定理。但 F2 §3.4 明示，V_receipt 之合理性建立在一個未被形式化的前提之上——`Informed(holder, r)`。

F3 將 `Informed(holder, r)` 展開為四個合取子句，每子句對應一件 UX 工程原語，並把整體記為 V_ux。對應如下——`CognitiveBounded(r)` 由 UX1（progressive disclosure UI）承擔；`¬DarkPattern(verifier_policy)` 由 UX2（dark patterns firewall）承擔；`CapacityAligned(holder, r)` 由 UX3（capacity-aware consent）承擔；`RoleSeparated(supporter, r)` 由 UX4（supporter UI 三層分離）承擔。V_receipt 在 F3 升級為 V_receipt' ≜ V_receipt ∧ V_ux，並使 critical path 在「presentation 時點」延伸出 holder-side 履行鏈。

## 2.2 三組關鍵概念的精細區分

本系列在 F3 之前多次使用「informed consent」「dark patterns」「capacity」三組概念，但其範疇邊界須在進入形式骨架之前明示。

第一組區分——`informed consent` 在規範層出自 GDPR Recital 32（freely given, specific, informed, unambiguous）與 CRPD General Comment No. 1 §29（understanding the nature, purpose and likely consequences）。前者是資料保護法上的同意有效性要件，後者是「平等行使法律能力」之 supported decision-making 要件。兩者在 wallet 場景並非同一物——GDPR 同意若 supported decision-making 失敗仍可能在法律上有效（資料保護法不要求 holder 具備 supported decision-making 能力），CRPD 之 supported decision-making 若資料保護同意失敗則同時失敗。

第二組區分——`dark patterns` 出自 Brignull (2010) 的 11 類分類<sup>11</sup>、Mathur et al. (2019) 的七類精煉<sup>12</sup>、EDPB Guidelines 03/2022 的六大類別<sup>2</sup>、EU AI Act §5(1)(b) 的「subliminal or manipulative techniques」<sup>1</sup>四源並集。dark patterns 範疇廣於 GDPR Art 5(1)(a) 透明度違反——其包含心理操控、認知偏誤利用、選項對稱性破壞，不全部涉及資料保護。F3 將 dark patterns 偵測函數 D(verifier_policy) 之 forbidden_patterns 清單以此四源並集為來源。

第三組區分——`capacity` 在臨床上以 Clinical Dementia Rating（CDR）五階分級（0、0.5、1、2、3）承載<sup>13</sup>，對應 WHO ICD-11 6D80（mild）/ 6D81（moderate）/ 6D82（severe）三級分級<sup>14</sup>。但 CRPD GC1 §15 明示「mental capacity」概念本身具歧視風險、§29 反對任何 functional capacity test 作為法律能力判定之依據<sup>15</sup>。本文採嚴格立場——CDR 為「目標分級語言」（用於 UX 工程上的階段化降階），非醫療判定，wallet 端不主張對 capacity 之醫學判定權。三條替代路徑（self-assessment / supporter triggered / issuer hint）各自如何處理此規範性張力，第六章詳述。

## 2.3 supporter ≠ guardian ≠ 家屬

CRPD §29 supporter 是「當事人預先指定之第三方支援者」<sup>15</sup>。在規範文本中明白列舉「family member, friend, support worker, advocate, peer or any other person the person with disabilities trusts」——即家屬僅是 supporter 五類可能來源之一，並非預設。supporter 範疇與 guardian 範疇有三項根本差別——啟動條件（supporter 不需法院監護宣告；guardian 需）、角色性質（supporter 為協助理解，不替代決定；guardian 為代為決定）、可替代性（supporter 不可替代；guardian 在傳統法律框架下可以替代）。

台灣意定監護新制（民法 §1110、§1113-2 至 §1113-10，2019 年 6 月 21 日施行）<sup>16</sup>建立了本人與受任人事前約定「於本人受監護宣告時，受任人允為擔任監護人」之契約機制，但其法律承載仍為 guardian 角色（黃詩淳 2020 對此有詳述<sup>17</sup>）。三項銜接 gap——啟動條件以「監護宣告」為要件、角色仍是 substituted、範疇對象為單一指定的監護人——使台灣場域 CRPD §29 supporter 之私法承載不完整。本文每次出現 supporter 處皆依以下三項邊界宣告處理：**(B1)** supporter 由 holder 預先指定；**(B2)** supporter 可為家屬、社工、長照員、信託代表、自選同儕，不限於家屬；**(B3)** 台灣場域受意定監護新制限制，supporter 法律承載不完整。

## 2.4 progressive disclosure 不等於 wizard UI

`progressive disclosure` 是認知科學概念——逐次呈現有限資訊以降低認知負荷；其工程實作至少有三種變體——wizard UI（步驟分頁，每步 ≤ 3 group，central executive 序列載入）、accordion UI（折疊展開，折疊狀態下 extraneous load 低）、paginated UI（分頁瀏覽，每頁固定 group 數）。三種變體在 wallet 場景的 ecological validity 並無對照研究，本文於相關章節分別處理；不採「wizard UI 即 progressive disclosure」之化約。

## 2.5 與 F1 RT-ℬ ✗ / AA-ℬ ✗ 邊界的關係

F1（系列 article 16）§5.3 之 W4 反論與 §7 已建立兩條常駐型不可委任邊界——RT-ℬ ✗（責任承擔需 first-personal mens rea）與 AA-ℬ ✗（contestation bearer 需 Pettit active-stance）<sup>9</sup>。F3 之四件 UX 工程原語完全在 Z₂ 範圍內運作，對此兩條邊界不主張任何 UX 工程可達性。第三章將以擴充定理 T2' 明示——對 RT-ℬ ✗ 與 AA-ℬ ✗ 兩 cell，不存在任何 UX 原語子集合使退化機率 P_degrade 落於門檻 θ₂ 以下。第九章 §9.5 將處理 CF5（LLM-agent 補位）對此兩條邊界的「工程實作層延伸誠實邊界」。

# 三、形式骨架——四件 UX 工程原語、V_ux 函數、四條定理、critical path

## 3.1 四件 UX 工程原語的形式 schema

四件 UX 工程原語每件至少六個欄位，採與 F2 §3.1 一致之兩層計數規約（欄位群 / leaf field）。

### UX1 progressive_disclosure_ui

```
progressive_disclosure_ui {
  attribute_count               : Integer
  cognitive_load_threshold      : Integer  = 3          // 上界，Cowan 4±1 下界錨
  display_layers                : Integer  ≥ 2
  issuer_supplied_defaults      : Map<Attr, Bool>
  per_item_override             : Bool     = true
  disclosure_session_id         : UUID
  attribute_groups              : List<AttrGroup>       // 對應 DIF PE v2.1 input_descriptors
  comprehension_checkpoint      : Hash | null
  ref_securing_mechanism        : URI                   // 對應 W3C VCDM v2.0 §4.12
  ref_pe_submission_requirement : URI                   // 對應 DIF PE v2.1 submission_requirements
}
```

### UX2 dark_patterns_firewall

```
dark_patterns_firewall {
  verifier_policy_hash       : Hash
  forbidden_patterns         : List<PatternId>
  pattern_detection_result   : Bool                     // D(verifier_policy) ∈ {0, 1}
  scope_change_delay_ms      : Integer  ≥ 5000
  symmetry_check             : Bool
  minimum_info_disclosure    : List<RequiredField>
  ref_eu_ai_act_art          : URI = "Art 5(1)(b)"
  ref_edpb_guideline         : URI = "Guidelines 03/2022"
  audit_log_endpoint         : URL
}
```

### UX3 capacity_aware_consent

```
capacity_aware_consent {
  capacity_state              : Enum {full, mild, moderate, severe, terminal}
  capacity_assessment_method  : Enum {wallet-self-assessment, supporter-triggered, issuer-side-hint}
  capacity_timestamp          : ISO8601
  reassessment_period_days    : Integer  ≤ 180          // CRPD §29 regular review
  ui_downgrade_level          : Enum {none, simplified, supporter-required, blocked}
  downgrade_trigger_rule      : Predicate
  comprehension_attestation   : Signature                // 與 chooser_signature 分離
  ref_crpd_gc1_section        : URI = "GC1 §29"
}
```

### UX4 supporter_ui_three_layer

```
supporter_ui_three_layer {
  layer_1_comprehension_aid    : LayerSpec
  layer_2_operation_interface  : LayerSpec
  layer_3_decision_bearing     : LayerSpec
  supporter_signature_l1       : Signature | null
  subject_signature_l3         : Signature                // 必須
  l2_signature                 : Signature
  signatures_disjoint          : Bool = true              // supporter_signature_l1 ≠ subject_signature_l3
  supporter_role_scope         : Enum {family, social-worker, care-staff, trust-representative, peer, other}
  ref_did_verificationmethod   : URI                      // 對應 W3C DID v1.0 §5
  ref_crpd_supporter_principle : URI = "GC1 §29"
}
```

四件原語對應的密碼學承載——UX1 對應 W3C VCDM v2.0 §4.12 securing mechanisms<sup>18</sup>與 DIF PE v2.1 submission_requirements<sup>19</sup>；UX2 對應 OpenID4VP draft-23/draft-24 之 `presentation_definition` 與 `transaction_data` extension<sup>20</sup>；UX3 對應 EUDI Wallet ARF 2025-12 iteration §6.6.3.9 user binding<sup>21</sup>；UX4 對應 W3C DID Core v1.0 §5 verificationMethod 與 §8 controller-subject 分離<sup>22</sup>。

## 3.2 V_ux 函數

延續 F2 V_receipt 風格，將四件原語對應到四道合取子句 C7–C10：

```
V_ux(r) ≜
  // C7 — cognitive load bound (UX1)
  ( r.ux.attribute_count ≤ r.ux.cognitive_load_threshold ∧
    r.ux.display_layers ≥ 2 ∧
    ( r.ux.per_item_override = true ∨ r.ux.issuer_supplied_defaults ≠ ∅ )
  ) ∧
  // C8 — dark patterns firewall (UX2)
  ( D(r.ux.verifier_policy_hash) = 0 ∧
    r.ux.scope_change_delay_ms ≥ 5000 ∧
    r.ux.symmetry_check = true ∧
    ¬∃ p ∈ forbidden_patterns : p ∈ ExtractPatterns(r.ux.verifier_policy_hash)
  ) ∧
  // C9 — capacity-aware consent (UX3)
  ( r.ux.capacity_state ∈ {full, mild, moderate, severe, terminal} ∧
    ( r.ux.capacity_state = full → r.ux.ui_downgrade_level = none ) ∧
    ( r.ux.capacity_state = moderate → r.ux.ui_downgrade_level ∈ {simplified, supporter-required} ) ∧
    ( r.ux.capacity_state ∈ {severe, terminal} → r.ux.ui_downgrade_level ∈ {supporter-required, blocked} ) ∧
    ( now − r.ux.capacity_timestamp ) ≤ r.ux.reassessment_period_days × 86400 ∧
    SigVerify(r.ux.comprehension_attestation, r.subject_did) = true ∧
    KeyDistinct(r.ux.comprehension_attestation.key, r.chooser_signature.key) = true
  ) ∧
  // C10 — supporter role separation (UX4)
  ( r.ux.signatures_disjoint = true ∧
    ( r.ux.supporter_signature_l1 ≠ null → SigVerify(r.ux.supporter_signature_l1, r.supporter_did) = true ) ∧
    SigVerify(r.ux.subject_signature_l3, r.subject_did) = true ∧
    r.supporter_did ≠ r.subject_did ∧
    VerificationMethodDisjoint(r.ux.supporter_signature_l1, r.ux.subject_signature_l3) = true
  )

V_receipt'(r) ≜ V_receipt(r) ∧ V_ux(r)
              ≡ (C1 ∧ C2 ∧ C3 ∧ C4 ∧ C5 ∧ C6) ∧ (C7 ∧ C8 ∧ C9 ∧ C10)
```

D 為 dark patterns 偵測函數（C8 內部已展開為 forbidden_patterns 集合差），ExtractPatterns 為 verifier policy 之 pattern 提取函數；KeyDistinct 與 VerificationMethodDisjoint 為密碼學層硬約束輔助函數。θ_inform = 0.5 與 θ_2 = 0.7 為分析性建議數，下界錨於 Cowan 4±1 與 F1 §3.2 既有 P_degrade 定義，待 pilot study 校準。

## 3.3 critical path 線性閉包與反饋環路

F2 critical path 在密碼學層為 SA1 → SA2 → SA3 → SA4（每段為下游必要前提）。F3 在 UX 履行層之 critical path 為——

```
UX1 ─[D7]─▶ UX2 ─[D8]─▶ UX3 ─[D9]─▶ UX4
(cognitive   (dark      (capacity   (supporter
 load        patterns    aware)      three-layer)
 bound)      firewall)
```

依賴 D7（UX1 → UX2）的形式條件——`∀ r : C8(r) 有意義 ⇒ C7(r) = true`；若 `attribute_count > cognitive_load_threshold`，holder 進入「機械點擊接受」狀態，verifier 的 dark pattern 不需被主動偵測，因 holder 已不在決策狀態。依賴 D8（UX2 → UX3）的形式條件——`∀ r : C9(r) 有意義 ⇒ C8(r) = true`；若 verifier policy 含 dark patterns，capacity_aware downgrade 之有效性即被吃掉。依賴 D9（UX3 → UX4）的形式條件——`∀ r : C10(r) 有意義 ⇒ C9(r) = true`；若 capacity_state 誤判，supporter 介入路徑根本不會被觸發。

線性閉包之外，存在兩條反饋環路。**SA3 → SA4**——capacity_state ∈ {moderate, severe} 自動觸發 supporter UI widget 載入。**SA4 → SA1**——supporter 介入時 progressive disclosure UI 重組為「supporter-assisted simplified」mode，attribute_count 上界從 ≤ 3 降至 ≤ 2、display_layers 從 2 增至 3。兩條反饋環路意味著 F3 critical path 已非有向無環圖（DAG），構成含有限循環的系統圖；但循環在 protocol 與 schema 層仍可被靜態驗證——signatures_disjoint = true 與 capacity_state 之單調退化兩個不變式共同消除無限循環。

## 3.4 四條形式定理

**T_UX1（認知負荷退化定理）**：

```
∀ presentation p :
  attribute_count(p) > 3 ⇒ P(informed_consent(p) = true) < θ_inform
```

其中 θ_inform ≈ 0.5 為「informed consent 有效機率」之保守下界，attribute_count 計入 DIF PE v2.1 `input_descriptors` 條目數加上 OpenID4VP `presentation_definition` 之 distinct attribute group 數。證據基礎為 Cowan (2001) working memory 4±1 chunks 之下界<sup>23</sup>、Sweller cognitive load theory 之 extraneous load 在 UI 層放大效應<sup>24</sup>、Bohme & Köpsell (2010) consent dialogue 習慣化點擊實證<sup>25</sup>。θ_inform = 0.5 為「分析性建議數」，wallet 場景之 pilot study 尚未校準。

**T_UX2（dark patterns 反向使用定理）**：

```
∀ r : D(r.verifier_policy_hash) = 1 ⇒ V_ux(r) = false
                                    ⇒ V_receipt'(r) = false
                                    ⇒ CRPD §29 反向使用風險(r) = high
```

證據基礎為 EDPB Guidelines 03/2022 §4 對 GDPR Art 5(1)(a) 透明度違反之認定<sup>2</sup>；EU AI Act Art 5(1)(b)「materially distorting the behaviour」之直接禁止<sup>1</sup>；Solove (2013) privacy self-management consent dilemma 對「同意」之結構性質疑<sup>26</sup>。本定理把 F2 §11 既有的「CRPD §29 反向使用議題」轉為 V_receipt' 之硬條件。

**T_UX3（capacity–supported decision 退化機率定理）**：

```
∀ holder h, receipt r :
  ( capacity_state(h) ∈ {moderate, severe, terminal} ∧ ui_downgrade_level(r) = none )
    ⇒ P(supported → substituted 退化) ≥ θ_2
```

其中 θ_2 ≈ 0.7 採 F1 §3.2 既有定義之退化機率上界。本定理採 mechanism-based likelihood 表述——在無 UX 工程修正下，依據 A15 §6.2 三重預設、Cowan 認知上界、Estonia / 日本 / 北歐既有實證之退化模式，CDR ≥ 2 場景 wallet 操作退化為家屬代簽之觸發機率為 medium-high（保守估計 ≥ 50%，須 pilot study 校準）。明示「機率」非「確定性」。

**T_UX4（supporter 不可替代密碼學硬約束定理）**：

```
∀ r :
  signatures_disjoint(r) = true ∧ supporter_did(r) ≠ subject_did(r)
  ∧ KeyDistinct( supporter_signature_l1(r), subject_signature_l3(r) ) = true
  ⇒ ¬CryptographicallyCollapsible( supporter, subject, r )
```

CRPD §29「supporter 必要、不可替代」原則之密碼學層硬約束。一旦 schema enforce signatures_disjoint = true 且 VerificationMethodDisjoint = true，無論 supporter 如何被操作介入，supporter_signature_l1 與 subject_signature_l3 在密碼學層恆不可互替。注意——本定理只在 schema enforce 層成立；wallet 實作允許 supporter 用 subject 之 PIN 解鎖並產出 subject_signature_l3 之路徑，仍是已知 gap（O_UX1）。

## 3.5 T2'：RT-ℬ ✗ / AA-ℬ ✗ 邊界明示

F2 定理 T2 已建立——對 RT-ℬ ✗ 與 AA-ℬ ✗ 兩 cell，不存在 σ ⊆ {SA1, SA2, SA3, SA4} 使 P_degrade ≤ θ₂。F3 將 T2 擴充為 T2'：

```
T2'（F3 擴充版 Z₃-intrinsic 不可達引理）：
  ∀ cell ∈ {RT-ℬ ✗, AA-ℬ ✗} :
    ¬∃ σ_ux ⊆ {UX1, UX2, UX3, UX4} : P_degrade(cell, σ_ux) ≤ θ_2
```

理由——RT-ℬ ✗ 之根本問題是「責任承擔需 first-personal mens rea」。UX1 progressive_disclosure_ui 可降低認知負荷，但無法產生 mens rea 之第一人稱性；即使 attribute_count = 1（最簡情境）、capacity_state = full（完全認知狀態）、supporter 不介入（無分擔），AI agent 在 RT-ℬ 邊界執行之決策仍不能由 holder 產生 mens rea。AA-ℬ ✗ 之根本問題是「contestation bearer 需 Pettit active-stance」<sup>27</sup>。UX2 dark_patterns_firewall 可保護 holder 不被誤導，但無法產生 contestation 之 active-stance——這是存在論失能，UX 工程無從觸及。任何宣稱「UX 工程原語可解決 AI 代理根本責任問題」之論述都違反 T2'。

# 四、SA1——認知負荷上界與 progressive disclosure UI

## 4.1 從 Miller 7±2 到 Cowan 4±1 的當代修訂

*Miller (1956)* 「The Magical Number Seven, Plus or Minus Two」於 *Psychological Review* 63(2): 81–97 之原始主張是——immediate memory 之 chunk 容量約為 7±2 個 unrelated items<sup>28</sup>。然而 Miller 本人在原文已強調三項限制：chunk 之大小可變動、recall 任務在零干擾條件下測量、chunk 之形成依賴先驗知識。*Cowan (2001)* 在 *Behavioral and Brain Sciences* 24(1): 87–114 之 target article 系統性回顧後三十年實驗，提出三項修訂——其一，7±2 混淆了 short-term memory（STM, 被動儲存如 digit span）與 working memory（WM, 主動操弄如 operation span）兩個構念；其二，WM 之容量上界為 4±1，且在控制 chunking、rehearsal、long-term memory 介入後相當穩定；其三，focus of attention（注意焦點）是 WM 容量之關鍵調節變數<sup>23</sup>。*Cowan (2010)* 之 *Current Directions in Psychological Science* 19(1): 51–57 進一步補充——在 dual-task 條件下 WM 容量降至 3±1；在 time pressure 條件下進一步壓至 2–3<sup>29</sup>。

*Baddeley (1992, 2003)* working memory 模型在此提供細部機制——wallet 多 attribute 決策同時占用 visuospatial sketchpad（attribute label 圖像解析、verifier logo 識別、按鈕位置追蹤）與 central executive（必要性評估、後果推理、揭露 trade-off）<sup>30,31</sup>。兩個組件共享有限資源，attribute label 越多、視覺複雜度越高，central executive 可用於 informed consent reasoning 之資源就越少。

任何 wallet 場景的認知上界推估都必須以 Cowan 4±1 為基線、Miller 7±2 為背景。本文於相關章節嚴守此區分。

## 4.2 「≤ 3 attribute group」為分析性建議數

由 Cowan 4±1 推到 wallet 場景之 ≤ 3，本文採三項保守係數——其一，wallet 即時決策的 time pressure 高於實驗室任務（公共場合決策時間 ≤ 3 秒）；其二，公共場合（捷運閘門、藥局櫃台、銀行櫃檯）的 attentional noise 顯著；其三，決策後果 stakes 高且不可逆（揭露的屬性無法收回）。三項保守係數使「working memory 上界 4」進一步壓到「可履行的 attribute group 上界 3」。

關鍵誠實邊界——「≤ 3」為**分析性建議數（analytical recommendation）**，並非實驗測得；wallet 場景之 ecologically valid pilot study 尚未存在。POTENTIAL UC6 mid-term technical report 2025-09 之公開版本顯示「2 → 5 group 場景的正確識別率從 ≥ 80% 降至 ≤ 50%」<sup>32</sup>，雖未直接驗證「3」這個切點，但顯示超過 3–4 group 後正確率顯著退化之趨勢與 Cowan 4±1 + 三保守係數推估方向一致。final 數值之精確化須待 EUDI POTENTIAL 與 EWC、DC4EU、NOBID 各 LSP 之 final report（預計 2026 Q3 之後）發布。同時須明示，主流認知科學研究多在 WEIRD 樣本（Western, Educated, Industrialized, Rich, Democratic）中進行，台灣與非 WEIRD 法域之適用性未充分驗證。

## 4.3 Sweller cognitive load theory 對 wallet 的 extraneous load 切點

*Sweller (1988)* 把任務認知負荷分為 intrinsic load（任務本質的複雜度）、extraneous load（介面引入之非任務必要負荷）、germane load（對 schema 建構有貢獻之學習負荷）三類<sup>24</sup>。*Sweller & Chandler (1994)* 進一步論證，在 element interactivity 高之任務中 extraneous load 之削減特別關鍵<sup>33</sup>。對 wallet 場景之對應——wallet 多 attribute 決策的 intrinsic load 相對固定（「我願不願意揭露我的姓名 / 出生日期 / 居住國家給這個 verifier」是 fixed），extraneous load 是工程可控變數（介面如何呈現屬性、分組、必要 vs 選用標示、verifier 身分顯示、按鈕對稱性），germane load 在 wallet 場景幾乎不存在（wallet 不是學習介面）。progressive disclosure 之本質即 extraneous load 之工程削減——一次只呈現一個 attribute group，避免 split attention（注意力分裂）與 redundancy effect（冗餘資訊干擾）。

但須誠實邊界——cognitive load theory 之三類 load 區分主要在教學情境驗證；wallet 場景之 ecological validity gap 仍存在。本文僅取 intrinsic / extraneous load 區分部分，germane load 不適用 wallet。

## 4.4 default 選項的不對稱影響——nudge 與 status quo bias

*Thaler & Sunstein (2008)* 之 nudge 框架顯示，同樣的選擇集合在 default 為 opt-in vs opt-out 之下會導致選擇率差異一個數量級<sup>34</sup>。*Tversky & Kahneman (1974)* 之 heuristics & biases 框架預測，在 anchoring 效應下 default 充當 anchor，在 status quo bias 下使用者傾向不改變現狀<sup>35</sup>。*Acquisti, Brandimarte, Loewenstein (2015)* 在 *Science* 之綜述進一步顯示——privacy decision-making 對 framing、anchoring、default 之敏感度顯著高於其他領域，使用者對「揭露 vs 不揭露」之 trade-off 不僅承擔認知成本，還承擔 uncertainty aversion（後果不確定）<sup>36</sup>。

對 wallet 之工程意涵——issuer-supplied default 是必要但不可單獨足夠；default 必須是 privacy-conservative（揭露最少屬性，反向揭露為 override）；per-item override 必須能逆向操作，不限於提交動作。CRPD §29「自主」不等於「無預設」——而是 holder 在 cognitive load 可履行範圍內仍能行使選擇權。issuer 提供 privacy-conservative default + per-item override，使 nudge 成為保護機制，避開剝削設計。

## 4.5 三個 UX 失敗的 case-tracing

### 4.5.1 GDPR cookie banner（2018–2024）

GDPR 自 2018 年 5 月 25 日生效後，歐洲網站普遍部署 cookie banner。*Utz et al. (2019)* 對 1,000 個歐盟網站之 consent banner 進行 field experiment——按鈕位置（accept 按鈕在右側預設）使接受率提高 22 個百分點；移除「reject」按鈕（強迫進入二層選單）使接受率提高 13 個百分點<sup>37</sup>。*Nouwens et al. (2020)* 對 IAB Europe TCF 框架下 680 個 banner 之量化分析——明顯違規（無 reject 按鈕、預先勾選非必要 cookie）佔比 ≥ 56%；UK Top 10,000 網站中僅 11.8% 達 GDPR 最低門檻<sup>3</sup>。*Matte, Bielova & Santos (2020)* 對 1,426 個歐盟網站之 IAB Europe TCF 量測——54% 違反至少一項 GDPR 要求；10% 在使用者未表態前即記錄「同意」<sup>38</sup>。

對 wallet 之警示——cookie banner 與 wallet OpenID4VP consent 在範疇、UX 介面、監管框架上不同；本文採「同型重演」（structural homomorphism）措辭，避免「直接適用」之強斷言。同型重演的具體機制鏈於第五章詳述。

### 4.5.2 iOS App Tracking Transparency（2021 起）

Apple 在 iOS 14.5（2021-04）引入 ATT，強制 app 在第一次追蹤前彈出 system-level 對話框，文字標準化、按鈕對稱（「Ask App Not to Track」與「Allow」並列）。Flurry Analytics 縱貫追蹤（2021–2024）與 Apple 官方數據顯示——全球 opt-in rate ≤ 25–30%；美國 ≤ 15–20%；中國 ≤ 12%<sup>39</sup>。

對 wallet 之啟示——強制對稱按鈕加上標準化文字顯著改善決策品質。但 ATT 的「once-and-for-all」模式不適合 wallet——wallet 之 verifier 場景多元、stakes 差異大，每次 presentation 都需要新決策。

### 4.5.3 EUDI POTENTIAL Use Case 6 mid-term 報告（2025-09）

POTENTIAL 是 EUDI Wallet 四個 Large-Scale Pilot 之一，Use Case 6 涵蓋 mandate / power-of-attorney UX。2025-09 mid-term technical report 公開的回饋——當 verifier 要求 ≥ 5 個 attribute group 時受測者正確識別必要屬性的比率從 ≥ 80%（2 個 group）降至 ≤ 50%（5 個 group）；decision time 在 5 個 group 場景下顯著延長且正確決策率與 decision time 呈倒 U 型；「Accept all」捷徑按鈕在多數 pilot wallet UI 中出現、使用率 ≥ 60%<sup>32</sup>。同報告 §4.3 明確標示「dementia onset / progression」為強制階段最大未解 UX gap。

## 4.6 wallet 多 attribute 場景的時間動態

wallet 場景的時間動態與實驗室任務有三項根本差異——

**第一**，wallet 即時決策的 *time pressure* 高於實驗室任務。捷運閘門場景的決策時間 ≤ 3 秒；藥局櫃台的 selective disclosure 決策時間 ≤ 10 秒；公共場合銀行驗證的決策時間 ≤ 30 秒。實驗室認知測驗的 typical decision time 為 5–15 分鐘，差異為兩個數量級。

**第二**，wallet 操作的 *dual-task* 結構穩定存在。即使 holder 在私人空間操作，也同時承擔背景感知（自己是否在正確的 app 中、verifier identity 是否符合預期）與決策評估（這個 verifier 要求的 5 個屬性哪些必要、哪些是 nice-to-have）。Cowan (2010) 在 dual-task 條件下記錄 WM 容量降至 3±1<sup>29</sup>，於 wallet 場景已是常態，並非例外。

**第三**，wallet 決策的後果 *stakes 高且不可逆*。揭露的屬性無法收回——即使法律層提供 revocation_endpoint（F1 §5.4 修正 3），verifier 在 revocation 通知到達前已可能完成 raw data 之 mirror、forward、後續處理。這個 stakes 不對稱使 holder 在認知資源不足時傾向 *decision avoidance*（迴避決策、傾向預設）；Acquisti, Brandimarte, Loewenstein (2015) 在 *Science* 之綜述顯示——privacy decision-making 的不一致性與 uncertainty aversion 並未隨 stakes 提高而消失，反而因為 stakes 高的後果評估更困難而出現 decision avoidance<sup>36</sup>。

對 SA1 上界推估的綜合意涵——working memory 4±1 在 wallet 場景之有效容量在三項保守係數合取下進一步壓到 2–3 個 chunks；以「≤ 3 attribute group」為上界仍是相對寬鬆的工程估算。但 ecological validity 之 wallet-specific pilot study 仍是 gap，須在 EUDI POTENTIAL final report 與後續 LSP 縱貫研究中校準。

## 4.7 progressive disclosure 三種變體在 wallet 場景之差異

Wizard UI（步驟分頁，每步 ≤ 3 group，central executive 序列載入）適合首次配置與高 stakes 決策，但步數過多時易發生 abandonment 且缺乏全局視野。Accordion UI（折疊展開，折疊狀態下 extraneous load 低；展開後同時占用 visuospatial sketchpad）適合中等 stakes、屬性彼此相對獨立之場景，但一次展開過多 panel 退回多選項或折疊狀態下可能遺漏重要屬性。Paginated UI（分頁瀏覽，每頁固定 group 數；central executive 須跨頁整合）適合大量 attribute（≥ 10 group）批次審查，但 recency effect 與 primacy effect 失衡且跨頁比較困難。

對 wallet 一般場景（≤ 5 個 verifier request attribute group）建議「wizard + 在最終步驟提供 accordion review」——前者控制 extraneous load、後者保留全局視野；最終 commit 前的 review 必須顯示完整 what will be disclosed 清單，且按鈕標籤採「review and disclose」，避免「accept」之單向被動語氣（語言上強調 holder 自主性）。但須誠實邊界——三種變體在 wallet 場景無對照研究；不可預設某一實作優於其他。

# 五、SA2——Dark Patterns 在 wallet 場景同型重演 GDPR cookie banner 八年失敗

## 5.1 dark patterns 的學術 taxonomy

*Brignull (2010)* 之 deceptive.design 分類網站建立 11 類 dark patterns（bait and switch / disguised ads / forced continuity / friend spam / hidden costs / misdirection / price comparison prevention / privacy zuckering / roach motel / sneak into basket / trick questions），是其後學術盤點之基礎<sup>11</sup>。*Mathur et al. (2019)* 對 11,000 個購物網站之爬取顯示——dark patterns 普及率 11.1%（1,818 case）；183 個 dark-pattern instances 來自 22 家 CMP / popup engine / countdown timer SaaS 供應商，後者所提供 instances 佔 dark patterns 總數 31%。Mathur 提出七類精煉——sneaking / urgency / misdirection / social proof / scarcity / obstruction / forced action<sup>12</sup>。*Gray et al. (2018)* 提出五策略——nagging / obstruction / sneaking / interface interference / forced action<sup>40</sup>。*Mathur, Kshirsagar & Mayer (2021)* 提出五項 normative attribute——asymmetrically modifies decision space / restricts choice / covertly manipulates / exploits cognitive biases / deceives by omission or commission<sup>41</sup>。

## 5.2 GDPR cookie banner 八年失敗的工業統計

| 量測來源 | 樣本 | 關鍵指標 | 數據 |
|---|---|---|---|
| Nouwens et al. (2020) | UK Top 10k | GDPR 最低門檻達成率 | 11.8% |
| Matte et al. (2020) | 1,426 EU sites | 至少一項 GDPR 違規 | 54% |
| Matte et al. (2020) | 同上 | 未表態即記錄同意 | 10% |
| Sanchez-Rola et al. (2019) | 2,000 sites | reject 後仍 tracking | 49% |
| Sanchez-Rola et al. (2019) | 同上 | accept 一鍵 vs reject 多層 | 92% asymmetric |
| Utz et al. (2019) | 6 A/B 實驗 | nudge 對 consent rate 影響 | +22.2 pp |
| Habib et al. (2020) | 150 sites opt-out | 平均 click 數 | 5.6 |
| noyb (2024) | EU 31 國 800 sites | Art 7 違規率 | 67% |
| CNIL SAN-2022-021/022 | Google + Microsoft | reject 不對稱罰款 | €210M 合計 |
| FTC v. Epic Games (2022) | Fortnite | dark patterns 賠償 | $245M |

八年（GDPR 2016 通過、2018 生效）後，工業界 cookie banner 合規率仍徘徊在 11.8–46% 之間（依嚴格度而定），且 reject 後 tracking 仍達 49%<sup>3,38,42,37,43,44</sup>。法規不缺，缺的是 UI / protocol 層的工程強制。

## 5.3 wallet 場景同型重演的四個機制

同型重演（structural homomorphism）的具體機制鏈如下，須與「直接適用」嚴格分離。

**(a) OpenID4VP scope 變更——presentation_definition 擴張的攻擊面**：OpenID4VP 之 `presentation_definition` 由 verifier 在 authorization request 中宣告 input descriptor 集合<sup>20</sup>；verifier 可在每次 presentation 中變更 input descriptor。對應 GDPR cookie banner 之「third-party vendor list」每月變動使用者無從追蹤之機制；wallet 之 input descriptor 同樣可在每次 request 變動，若 holder 為老客戶 UI 通常 default 為「同意上次設定 + 新增的 attribute」，產生 scope creep（從 age verification 一路擴展至 full profile 拉取）。

**(b) verifier policy chain transitive consent**：OpenID4VP 並未禁止 verifier A 將收到的 VP 轉發 verifier B 或 processor C。EUDI Wallet ARF 2025-12 iteration §6.6.3 雖規範「unambiguous, granular, prior to data transfer」consent 三要素，但僅限第一層；transitive 第二、三層 consent 路徑未強制<sup>21</sup>。對應 cookie banner 之 IAB TCF 以 vendor list ID 註冊第三方資料控制者但 Matte 等 (2020) 證明 54% 不合規之機制<sup>38</sup>。

**(c) re-consent fatigue**：*Bohme & Köpsell (2010)* 80,000+ 真實使用者實驗證明——consent dialogue 重複曝光使 acceptance rate 顯著升高，效應與 dialog 內容無關<sup>25</sup>。*Luguri & Strahilevitz (2021)* 行為實驗顯示 aggressive dark patterns 將 acceptance rate 由 11% 推升至 41.9%<sup>45</sup>。對應 wallet 同一 verifier（交通公司、便利商店、政府服務）每日多次 presentation request 之常態，wallet 將快速進入「default accept」模式，違反 GDPR Recital 32 與 CRPD GC1 §29。

**(d) terminology obscurity**：「selective disclosure」「zero-knowledge proof」「presentation request」「verifiable presentation」「BBS+ signature suite」對非技術使用者之可理解性近於零。Utz et al. (2019) 量測 41% 受試者不理解「legitimate interest」<sup>37</sup>；wallet 場景之術語密度更高。在 EU AI Act §5(1)(b)「materially distort behaviour」測試下，wallet 預設使用此類術語構成 prima facie 風險——尚未到「違反」結論，屬「未經 AI Office implementing guidance 確認的條件性適用」。

## 5.4 七項 normative requirement（D1–D7）對位 EDPB 03/2022

對位 EDPB Guidelines 03/2022 之六大類別，本文主張以下七項 normative requirement 寫入 OpenID4VP 1.0 與 EUDI Wallet ARF 後續 iteration——

| # | 防線項目 | 量化條件 | 對位 EDPB 類別 | 證據基礎 |
|---|---|---|---|---|
| D1 | scope 變更強制延遲 | ≥ 10 秒，期間 accept 按鈕 disabled | Overloading | Bohme & Köpsell 2010; Utz 2019 |
| D2 | 對稱選項佈局 | accept / reject 同尺寸 ±5%、同字體、同色 contrast、同 z-order | Hindering | Nouwens 2020; Utz 2019 |
| D3 | 必要訊息揭露 | attribute / verifier identity / 用途 / 保留期 / 第三方轉發鏈 | Left in the dark | EDPB 03/2022; EUDI ARF |
| D4 | 高 stakes 二步確認 | 對 salary / address / political affiliation 等 sensitive attribute 強制二步 | Stirring | Mathur 2021; Luguri 2021 |
| D5 | 撤回路徑對稱性 | 撤回路徑 click 數 ≤ 同意路徑 click 數 | Obstruction | Sanchez-Rola 2019; Habib 2020 |
| D6 | 禁止預勾與 nudge | 不得 pre-tick、不得僅一鍵 accept 而 reject 需多層 | Overloading + Hindering | GDPR Recital 32; CNIL 2022 |
| D7 | terminology plain-language | 對 selective disclosure / ZK 提供 plain-language 等價說明（A2 reading level） | Left in the dark | EU AI Act §5(1)(b) |

D1 之 10 秒上界為推估值——基於 Bohme & Köpsell 80k 受試者實驗，consent dialogue 顯示時間每增加 50%，holder「全部接受」傾向上升 10–15 個百分點。具體 10 秒切點待 conformance test 驗證。

## 5.5 五案件 case-tracing

**FTC v. Epic Games（2022, 美國）**：Fortnite UI 之 dark patterns——預設「one-click purchase」、cancel 按鈕小且位於非預期位置、誤觸退款流程繁複。Stipulated Order for Permanent Injunction, FTC File No. 192 3203（Fortnite），$245M consumer refund + $275M COPPA penalty，合計 $520M。2022-12-19。<sup>43</sup>

**FTC v. Amazon Prime（2023, 美國）**：Prime 取消需通過六個 unrelated screen，內含 dismiss button 小、文案誤導、social proof（"are you sure? you'll lose…"）。Complaint filed 2023-06-21, Case No. 2:23-cv-00932 (W.D. Wash.)。「subscription dark pattern」與 wallet「verifier policy chain 之 transitive consent」結構同型——consent 取得容易、撤回困難。對應防線 D5。<sup>46</sup>

**CNIL v. Google Ireland & Google LLC（2022, 法國）**：google.fr / youtube.com cookie banner——「同意」一鍵、「拒絕」需 5 click。罰款 €150M。Decision SAN-2022-021。同日 Microsoft Ireland 之 Bing cookie banner 罰款 €60M（SAN-2022-022）。<sup>44</sup>「同意 verifier 全部 input descriptor」一鍵 vs「逐項 toggle」多 click 之結構直接違反 D2 + D6。

**Apple App Tracking Transparency（2021 起）**：iOS 14.5+ 將「Allow Tracking」與「Ask App Not to Track」設為對稱兩選項；對使用者 effort 兩者等同。opt-in rate 維持在 15–28%（產業哀號），證明對稱設計具大幅度量化效應<sup>39</sup>。D2 + D6 之 ground-truth proof——對稱性是「可行的工程約束」，不是「理論上的應然」。

**EU Commission v. Meta（DSA Art 25, 2024 起）**：正式調查 Meta 是否違反 DSA Art 25——addictive design / dark patterns，特別針對未成年使用者保護<sup>47</sup>。wallet 之高 stakes（身分 attribute、權力憑證）與青少年保護同屬「vulnerable user × manipulative UI」軸線，需 D4 + D7 之更高門檻。

## 5.6 CRPD §29 反向使用風險

T_UX2 已明示——D(r.verifier_policy_hash) = 1 時 V_ux(r) = false ⇒ V_receipt'(r) = false。在 30 年保存窗口內，audit trail 在無 UX 修正下反過來成為「holder 同意此 dark pattern 之證據」（F2 §11 既有警示）。F3 把此風險形式化為 V_receipt' 之硬條件，避免 audit trail 在無 UX 修正下被反向工具化。CRPD Committee 對歐盟成員國（已批准 CRPD）的 Concluding Observations 可預期在 2028–2030 年度報告週期出現對 EUDI Wallet UX 之 Art 12 違反指控。

# 六、SA3——Capacity-Aware UX 三條替代路徑與中介證據強度評估表

## 6.1 從絕對句式到 mechanism-based likelihood

原始草稿之「CDR ≥ 2 後的 wallet 操作 100% 退化為 substituted」具備兩處工程上不嚴謹處——「100%」是人為估算，違反 F2 SA5 既有的 likelihood-by-mechanism 框架；「退化為 substituted」需要 mechanism 補完。本文採嚴格立場——保留「退化為 substituted 之風險顯著存在」之判斷，但把「機率」與「確定性」分離。具體 likelihood 取 medium-high（保守估計 ≥ 50%，須 pilot study 校準）；條件變項與校準路徑於 §6.4 詳述。

## 6.2 中介鏈一——失智長者「為什麼」必須用 wallet

「失智 → wallet 使用」非自然連結。本文以三段中介鏈推導其為「在既成政策事實下不可避免」。

**鏈一·一：EUDI Wallet 2026-2027 強制階段對成員國公民的全覆蓋**。*Regulation (EU) 2024/1183* Art 5a 規定成員國於 entry into force 後 24 個月內部署 EUDI Wallet（2026-11-21 屆滿）<sup>6</sup>；*Implementing Regulation (EU) 2024/2979*（2024-11-28 OJ）對 wallet 規格之細則含 selective disclosure profile 與 user binding<sup>7</sup>。法規對中高齡群體無年齡豁免；POTENTIAL Use Case 6 mid-term report §4.3 明確標示「dementia onset / progression」為強制階段最大未解 UX gap<sup>32</sup>。

**鏈一·二：既有金融、政府、醫療數位化已把中高齡失能群體捲入線上身份操作**。NHS Login 註冊用戶超過 6,000 萬、65+ 用戶比例 24%（約 1,440 萬）<sup>48</sup>；日本マイナンバーカード 75+ 保有率 72.4%、2024-12 強制マイナ保険證過渡使「無 wallet 即無健保」成為新事實<sup>49</sup>；北歐 BankID 70+ 覆蓋率 92%，丹麥 *Finanstilsynet* 2023 報告標示「pårørende-assisteret brug」（家屬協助使用）為失能成人線上身份操作之事實常態<sup>50</sup>；台灣失智症協會訪談 71% caregiver 協助過健保 IC 卡相關操作<sup>51</sup>；美國 *Alzheimer's Association* 2025 統計顯示 41% caregiver 協助過 online banking 或 government portal 操作；67% caregiver 為家屬（spouse / child），平均 caregiving 5.6 年<sup>52</sup>。

**鏈一·三：失智長者「無 wallet 即失去福利」的具體案例**。荷蘭 *Open Universiteit Heerlen / Alzheimer Nederland* 2023 訪談研究——62% 失智者無法獨立完成 DigiD 二因驗證，84% caregiver 持有失智者密碼<sup>53</sup>；印度 *Internet Freedom Foundation* 2024 報告——Aadhaar biometric 對失智長者指紋退化率 35%，caregiver 代行率 60–70%<sup>54</sup>；巴西 São Paulo 州法院 2023–2024 多起 LGPD 判例認可家屬代行但承認制度缺口<sup>55</sup>；台灣衛福部長期照顧政策白皮書標示「家屬代申代辦」為實況但未提供 CRPD §29 supporter 認證程序<sup>56</sup>。

## 6.3 中介鏈二——CDR 與 wallet UX 階段化的三條替代路徑

2026 年無任何 OECD 法域實作「醫療端 → wallet 自動通知」之工程介接；EUDI Wallet ARF §9.1.4 明示對 minors 與 capacity-limited adults 處理為「out of scope of v1.5.0」<sup>21</sup>。capacity-aware downgrade 必須採三條替代路徑之一或組合，三條路徑各自的法律 / 工程 / 隱私 tradeoff 如下。

**路徑 (i) wallet 內建 functional self-assessment**。機制——以「重複任務失敗率 / 停留時間異常延長 / 點擊錯誤次數」為行為 proxy；Apple Health Cognitive、Google Health Connect 已有 API 雛形<sup>57,58</sup>，*Cambridge Cognition* CANTAB Mobile（FDA 510(k) cleared）為臨床對位<sup>59</sup>。**法律 tradeoff**——cognitive 行為資料屬 GDPR Art 9(1) special category data，蒐集須依 Art 9(2) 例外（如 explicit consent 或 vital interests）；在 wallet 內 ambient 蒐集是否屬「holder 同意」尚有解釋空間，Mozilla 報告指出多數 cognitive assessment app 缺乏明確法律依據<sup>60</sup>。**工程 tradeoff**——行為 proxy 之 false positive 率高（疲勞、藥物、視力老化均可造成類似 pattern）；CANTAB Mobile 等臨床工具之 mobile-only 偵測準確率對 CDR 0.5–1 早期階段低於 70%。**隱私 tradeoff**——cognitive proxy 一旦蒐集即構成「holder 心智狀態 profile」，後續同步、備份、跨設備遷移均有外洩風險。

**路徑 (ii) supporter triggered downgrade**。機制——holder 在 capacity 完整階段預先指定 supporter（CRPD §29 第三方支援者，可以是家屬、社工、長照員、信託機構代表、自選同儕——三項邊界宣告 B1/B2/B3 在每次出現時明示）；supporter 被授予「觸發 wallet UX 降階」之權能（與 chooser_signature 私鑰嚴格分離，F1 §5.4）；當 supporter 觀察到 holder 出現 capacity 退化跡象，由 supporter 端按鈕觸發 wallet 進入降階模式（介面簡化、attribute 數量上限縮至 2、強制延遲延長至 30 秒）。**法律 tradeoff**——CRPD §29 supporter 不必經法院監護宣告，與台灣民法 §1113-2 意定監護新制以監護宣告為啟動條件之設計不一致；OECD 多數法域 supporter 認證程序未法律化。**工程 tradeoff**——supporter 觸發本身是否需要醫療證明？若是則回到醫療端介接問題；若否則 supporter 之 unilateral 觸發可能被反向使用為「強制 holder 降階以剝奪 SD 能力」之機制。必採三層 safeguard——holder 在 capacity 內可隨時 revoke supporter 觸發、第三方稽核、supporter 多重指定。

**路徑 (iii) issuer-side capacity hint**。機制——issuer（健保署、長照中心、Memory Clinic）在發出 credential 時於 payload 嵌入 `capacityProfile` field（F1 §5.4 補充原語 E4）；wallet 在 selective disclosure presentation 階段讀取 capacityProfile 並據此調整 UX。**規範 tradeoff（最高風險爭點）**：CRPD §29 強烈反對 functional capacity test 作為決定能力的判準，GC1 §15 明示「mental capacity」概念本身具歧視風險。issuer 把臨床 capacity 判定嵌入 credential 即把 functional test 結果工程化、可重複使用、跨場域擴散——在規範層極可能違反 CRPD §29 (a)「will and preferences」優先原則。本文採「限定 opt-in（持有人主動同意）+ 替代優先（路徑 i+ii 為主軸）」之保守立場；CRPD 委員會接受度未知。

**三條路徑的選擇判準**：路徑 (i) 作為「wallet 自動建議」之 first signal 但禁止自動觸發 downgrade；路徑 (ii) 作為主要 downgrade 觸發機制配三層 safeguard；路徑 (iii) 在 CRPD §29 functional test 禁令爭點解決前列為「條件性可採」，限定 holder 主動 opt-in，禁止作為預設機制。

## 6.4 中介鏈三——退化路徑的 mechanism-based likelihood

採五段機制鏈表述——

(a) wallet UX 無 capacity-aware downgrade ⇒
(b) CDR ≥ 2 holder 因 Cowan working memory 4±1 進一步退至 2–3 chunks 加上 Sweller cognitive load theory 之 extraneous load 過載，無法獨立完成 selective disclosure 之 informed consent ⇒
(c) 在既有金融、政府、醫療數位化強制下，家屬或照護者代為操作 wallet 成為事實常態 ⇒
(d) 密碼學層 F1 §5.4 chooser_signature 由代行者實際持鑰簽署（A15 §6.2 三重預設失效） ⇒
(e) 即使法律層宣稱 supported decision-making，工程事實已是 substituted（CRPD §28 禁令在技術層被繞過）。

| 機制鏈段 | 觸發機率 | 主要證據 |
|---|---|---|
| (a) → (b) | high | Cowan 2001; Sweller 1988; CDR 1993; ICD-11 6D81 |
| (b) → (c) | high | Alzheimer's Assoc 2025 41%; 台灣失智症協會 2024 71%; 荷蘭 Open Universiteit 2023 84% |
| (c) → (d) | medium-high | A15 §6.2 三重預設; 無 OECD 法域有 chooser_signature 分離之強制法規 |
| (d) → (e) | medium-high | F1 §5.4 鑑識上 chooser_signature 與 comprehension_attestation 合一即退化 |
| **整體 (a) → (e)** | **medium-high** | 保守估計 ≥ 50%，須 pilot study 校準 |

**為何取 medium-high 而未取 high**：high 對應「每段觸發機率均 ≥ 80%、整體鏈條觸發 ≥ 70%」。(c) → (d) 段在嚴格 biometric + PIN + hardware key 三因驗證下，代行者實際持鑰之比例可被工程降低；supporter triggered downgrade 路徑若被法律承載化，可把 (c) → (d) 之代行轉為 (c) → supporter-assisted (d)，後者非 substituted；pilot study 缺乏使「機率」不可定量至 high 等級。

## 6.5 中介證據強度評估表（15 列完整）

本表為 SA3 補強之核心輸出。critic 在 P0 紅線層級檢驗此表完整性。

| # | 中介鏈段 | 證據等級 | 覆蓋率 | 來源核心 | 待補 |
|---|---|---|---|---|---|
| 1 | 1.1 EUDI 2026-2027 強制階段 | A | OECD（EU 27 + EEA） | Reg (EU) 2024/1183; Impl Reg (EU) 2024/2979; POTENTIAL UC6 | 非 EU OECD 法域對位 |
| 2 | 1.2.1 英國 NHS Login 失智使用 | B | 單一法域（UK） | NHS Digital 2024 Q4; WHO ICD-11 | NHS Digital 對失智子群直接統計 |
| 3 | 1.2.2 日本マイナ 75+ 失智 | B | 單一法域（JP） | 内閣府デジタル庁 2024-12; 厚労省 | 厚労省 失智 + マイナ 交叉統計 |
| 4 | 1.2.3 北歐 BankID 失能成人 | B | 區域（北歐） | Finanstilsynet 2023 | CRPD §29 supporter 對位之國家立法 |
| 5 | 1.2.4 台灣健保 IC 卡失智 | B | 單一法域（TW） | 失智症協會 2024; 衛福部白皮書 | 衛福部直接統計 + 健保署資料 |
| 6 | 1.2.5 美國 caregiver 數位代行 | A/B | 單一法域（US） | Alzheimer's Assoc 2025; VA Login.gov | Login.gov 失智子群直接統計 |
| 7 | 1.3.1 荷蘭 DigiD 失智排除 | B | 單一法域（NL） | Open Universiteit / Alzheimer Nederland | 跨歐盟對位 |
| 8 | 1.3.2 印度 Aadhaar 失能排除 | B | 單一法域（IN） | IFF 2024 | 學術同儕審查實證 |
| 9 | 1.3.3 台灣健保家屬代申 | B | 單一法域（TW） | 衛福部; 失智症協會 | 健保署逐年代申統計 |
| 10 | 1.3.4 巴西 LGPD 失智排除判例 | B | 單一法域（BR） | TJSP 2023-2024 | STF / STJ 統一見解 |
| 11 | 2.1 wallet 內建 functional self-assessment | A（理論）+ C（實作） | 全球（理論） / 單一平台（實作） | Sweller; Cowan; Apple Health; Cambridge CANTAB | 失智早期偵測準確率實證 + GDPR Art 9 法律依據 |
| 12 | 2.2 supporter triggered downgrade | A（規範）+ B（實作 gap） | OECD（規範）/ 無（實作） | CRPD GC1 §29; 台灣民法 1113-2 | OECD 法域 supporter 認證 SOP |
| 13 | 2.3 issuer-side capacity hint | A（理論）+ 無（實作） | 無（OECD） | F1 §5.4 補充原語 E4; CRPD GC1 §28 | CRPD §29 functional test 禁令對 issuer-side hint 之合法性 |
| 14 | 3 mechanism-based likelihood medium-high | A（mechanism）+ B（pilot 缺） | OECD（mechanism） | A15 §6.2; Cowan; WHO; Alzheimer's Assoc | 縱貫 pilot study 校準 |
| 15 | 4 supporter 與家屬範疇區分 | A（規範）+ B（落地 gap） | OECD（規範） | CRPD GC1 §29; 台灣民法 1113-2 | OECD 各國 supporter 認證程序 |

15 列覆蓋三段中介鏈（10 列）+ 三條替代路徑（3 列）+ likelihood（1 列）+ 範疇區分（1 列）。

## 6.6 supporter 與家屬的範疇區分

四種常見的範疇滑誤——其一，把「家屬」當作「supporter」之預設代名，排除「無家屬可指定」或「家屬不適任」之 holder（如失智長者之家屬有財產利害衝突時）；其二，把「家屬代行」當作 CRPD §29 supporter 行為，事實上是 substituted decision-making 違反 CRPD §28；其三，UX 預設偏差，wallet UI 預設「supporter = 配偶 / 子女」，對社工、長照員、信託代表、自選同儕之 supporter 角色排除；其四，把台灣 §1113-2 意定監護等同 CRPD §29 supporter，前者以監護宣告為啟動條件、後者不必經宣告。

台灣意定監護新制與 CRPD §29 supporter 之三項銜接 gap——啟動條件不同（意定監護以監護宣告為啟動條件，CRPD §29 supporter 在無監護宣告時即可運作）、角色性質不同（監護人在監護宣告後行使 substituted 性質之代行，CRPD §29 supporter 始終是 supported 性質之協助）、範疇對象不同（意定監護受任人為「監護人」角色單一指定，CRPD §29 supporter 可為多人、可為非家屬之第三方）。

# 七、SA4——Supporter UI 三層分離與 CRPD §29 工程對應

## 7.1 CRPD §29 三項禁則的工程化拆解

CRPD §29 對 supporter 的規範性主張可拆解為四項可審計條件——supporter 必要（wallet UX 須提供 supporter widget 入口）、supporter 不可替代（`chooser_signature` 之 verificationMethod 必須 controller = subject DID）、unconflicting interest（supporter 註冊時須宣告 + wallet 須提示 conflict-of-interest 檢核）、不剝奪 safeguards（三層各自獨立 + 可審計 + revocation_endpoint）<sup>15</sup>。F2 §5.3 設計 B（threshold signatures with supporters in quorum）違反 CRPD §28；F3 SA4 重申此判定。

## 7.2 三類獨立 cryptographic object 承載

**(a) Comprehension Attestation（CA）**：VC type `ComprehensionAttestationCredential`；issuer 為 supporter DID；credentialSubject 為 subject DID + 被理解的 disclosure scope reference；proof 採 `assertionMethod` purpose，由 supporter 私鑰簽。語義是「我（supporter）見證 subject 於時間 T 對 disclosure scope S 已表達理解」。非語義——CA 不等於 subject 同意 disclosure，僅是「理解」之見證。

**(b) Operation Assist Trace（OAT）**（非 cryptographic object 但須留 UX log）：純 UX 行為日誌（讀屏啟動時間、放大次數、聲音 readback 次數、supporter 觸控介入次數）；儲存於 wallet 本地，可選擇性匯出供 audit，不上鏈、不入 VC。語義是「supporter 提供了哪些物理協助」；OAT 與簽章無關，不影響 disclosure 之法律效力。

**(c) Chooser Signature（CS）**（F1 §5.4 修正 1 已建立）：VP-level proof，purpose `authentication`；由 **subject 私鑰**簽；任何情境下 supporter 私鑰均不可旁路。在 threshold signatures 設計（F2 SA2 設計 C）下，CS 由 subject + supporter 共同生成，但 supporter 份額單獨無效——subject 份額為必要條件。

## 7.3 UI 層三類獨立 widget 與觸控分離

**Widget 1 — Comprehension Widget**——視覺位置為 disclosure prompt 之前的獨立 modal（不是 inline 元素）；互動為 supporter 點擊「我見證 [subject 姓名] 已理解此次 disclosure 之 [N] 項屬性」+ supporter 在 wallet 內以 biometric 或 PIN 解鎖 supporter DID 私鑰；觸控隔離須在 subject 不在場的觸控動作下完成。失敗處理——若 supporter 拒絕見證，wallet 提示 subject「supporter 認為你尚未理解」並提供三選項，分別為繼續諮詢、仍然執行（標註 CA 缺席）、取消。

**Widget 2：Operation Assist Widget**——視覺位置為 disclosure prompt 內的「協助工具」面板（inline）；互動為 supporter 使用讀屏、放大、語音 readback、手抖點擊輔助；wallet 記錄 OAT。觸控不隔離（可與 subject 共用同一裝置之觸控）。**硬性禁令**——此 widget 不提供任何「代為簽署」按鈕；任何 cryptographic 動作均須跳轉至 Widget 3。

**Widget 3：Decision Widget**——視覺位置為 disclosure prompt 的最終確認 modal；互動須由 subject 自己以 biometric 或 PIN 解鎖 subject DID 私鑰並簽 CS；觸控隔離須在 supporter 不在觸控範圍內完成（physical separation）。失敗處理——若 subject 無法獨立完成 Widget 3，wallet 切換到 F2 SA2 設計 C 的 threshold signatures recovery path，由 subject 預先指定的多名 supporters 共同 + subject 部分份額啟動 recovery；此為邊緣場景，預設情況下不應觸發。Widget 3 觸控分離之 hardware 偵測技術不成熟，UX fallback 為 90 秒延遲 + 二次確認。

## 7.4 既有 UI 模型對比

| UI 模型 | 角色 | 三層分離狀態 | F3 SA4 採用評估 |
|---|---|---|---|
| iOS Family Sharing | parent → minor child | 無；單一 organizer 模型 | 不採用（未成年場景）<sup>61</sup> |
| Android Family Link | parent → minor child | 無；單一 organizer 模型 | 不採用（未成年場景）<sup>62</sup> |
| MS Family Safety / Apple Screen Time（成年） | organizer ↔ adult member | 無；過度偏 subject 自主 | 部分採用：subject 自主之邊界 |
| Hyperledger Aries Mediator | mediator routing | 無；技術中介，非 supporter | 結構參照：operation layer 之「不簽章中介」<sup>63</sup> |
| 北歐 BankID fullmakt | 家屬代行金融 | 無；單一 BankID 代簽（substituted） | **反面範本**，須避免<sup>50</sup> |
| Israel §67B–67F | supporter 三類權限 | **有**（法律層 + 註冊登記） | **採用**：法律規範參照<sup>64</sup> |
| Peru DL 1384 apoyos | apoyo 多類權限 | **有**（法律層） | **採用**：規範參照 + 警告 caregiver 混淆<sup>65</sup> |

Israel §67B–67F（2017–2018 第一年實施 200 份 supported decision-making 協議，0% supporter 代簽法律文件<sup>66</sup>）與 Peru DL 1384（Lima 第一年 350 份 apoyo 協議，apoyo 權限分布 comprehension 65% + expression 28% + execution-of-non-legal-acts 7%<sup>67</sup>）為唯二在法律層完整實現 supporter 三類權限切分的法域。Cohen (2018) 對 Israel §67B–67F 為單一學者詮釋，須意定監護學術社群擴大檢驗。

## 7.5 supporter 範疇邊界（SA3 補強 4 對齊）

supporter 可以是——家屬、社工、長照員、信託機構代表、自選同儕、社區照顧據點之專業人員、律師。supporter 不必然——有監護權、有財產代理權、有醫療代理權、為家屬。台灣現行法律框架下無 supporter 獨立角色——wallet UX 三層分離若要實作，須於 wallet 條款層建立 supporter 私法契約承載並標明此 gap。schema 層義務——`ComprehensionAttestationCredential` 之 credentialSubject 須含 `supporterRole` 欄位，列舉上述可能類型；wallet UX 註冊時須要求 supporter 明示其角色類型加上任何 conflict-of-interest 揭露（如「我同時是 subject 之 caregiver」「我是 subject 遺囑受益人」）。Peru 實證（Bregaglio Lazarte 2019）警告——很多家屬同時擔任 cuidador 與 apoyo 造成 conflict of interest，「apoyo 與 cuidador 角色混淆」是實務層最大挑戰<sup>65</sup>。

## 7.6 線下代簽攻擊面（已知 gap）

即使 wallet UX 設計三層分離，supporter 仍可在線下取得 subject 的 biometric 或 PIN 後代為操作 Widget 3——cryptographic 層無法區分「subject 自己」與「supporter 持 subject 私鑰」。本文承認此攻擊面存在；SA4 並非主張「三層分離可在所有威脅模型下阻擋 supporter 代簽」，而是「在合作場景下不滑入 substituted」之雙層主張（規範性 + 工程性）。惡意場景由 audit-by-design 與 revocation_endpoint（F1 §5.4 修正 2-3）覆蓋。三層分離可顯著降低「無心代簽」（supporter 與 subject 雙方都未意識到正在進行 substituted）的觸發機率——POTENTIAL UC6 phase 2 之 47/122 PIN 委付即屬此類，可由三層分離直接降低。具體下降幅度須 pilot study 校準。

# 八、Process Tracing——五個跨法域案例

## 8.1 Israel Capacity and Guardianship Law Amendment No. 18 §67B–67F（5776-2016）

以色列 2016 修正案 §67B 定義「support person」法律地位、明確區分於 guardian（apotropos）；§67C 列舉 supporter 三類權限（協助理解、協助表達、協助執行）；§67E 要求支援關係登記於 Administrator General 名冊以便審計<sup>64</sup>。Cohen (2018) 評析認為以色列方案是 OECD 第一個把「supporter 與 guardian 在法律上完整分離」並建立可審計機制的法域<sup>66</sup>。2017–2018 第一年實施核可的 supported decision-making 協議約 200 份，其中 91% 為「協助理解 + 協助表達」型、9% 為「協助執行非法律行為」型、**0% 涉及 supporter 代為簽署法律文件**——這在實證上印證 §67C 的權限切分是可實施的。Cohen 為單一學者詮釋；以色列 CRPD Concluding Observations 對該法仍有保留。

## 8.2 Peru Decreto Legislativo 1384（2018）

Peru 是第一個全面廢除 interdicción（剝奪法律能力的監護制度）的拉美法域，以 apoyos y salvaguardias（支援與保障）取代<sup>65</sup>。Bregaglio Lazarte (2019) 評析顯示 DL 1384 的關鍵設計——apoyo 可由當事人「事前指定」或「事中啟動」，apoyo 之權限範圍由當事人界定，且 apoyo 不可代為簽署。Lima 第一年（2018–2019）註冊 apoyo 協議約 350 份，其中 78% 由當事人主動指定、22% 為司法指定；apoyo 權限分布 comprehension 65% + expression 28% + execution-of-non-legal-acts 7%。Bregaglio Lazarte 觀察「apoyo 與 cuidador 角色混淆」是實務層最大挑戰——很多家屬同時擔任 cuidador 與 apoyo，造成 conflict of interest。Peru apoyos 雙軌 5 年後（2018–2023）實證未充分研究——「廢除 interdicción 是否轉為新 substituted」未完全駁回。

## 8.3 台灣意定監護新制（民法 §1113-2 至 §1113-10, 2019）

台灣立法院 2019-06-19 公布意定監護新制、2019-12-19 施行<sup>16</sup>。§1113-2「稱意定監護者，謂本人與受任人約定，於本人受監護宣告時，受任人允為擔任監護人之契約」；§1113-4 須法院監護宣告為要件。意定監護「以監護宣告為啟動條件」與 CRPD §29 supporter「在本人意願下持續支援、不必經宣告」的範疇差異是 A15 §6.2 與意定監護銜接 gap 的法律根源。司法院統計年報——2019 年 173 件 / 2020 年 412 件 / 2021 年 568 件 / 2022 年 731 件 / 2023 年 891 件<sup>68</sup>，與 2023 年台灣失智人口估計 35 萬人相比覆蓋率 < 0.3%。黃詩淳 (2020) 對意定監護新制的兩項限制詮釋——其一，意定監護的啟動仍以「監護宣告」為條件，即仍要求 capacity assessment，與 CRPD §29「support should not hinge on mental capacity assessments」的精神不完全相符；其二，意定監護的受任人法律地位仍是「監護人」（即可代為決定），並未建立 supporter（不可代為決定）的獨立角色<sup>17</sup>。黃詩淳 (2020) 為單一學者詮釋，須意定監護學術社群擴大檢驗。

## 8.4 北歐 BankID fullmakt（反面範本）

瑞典 BankID 與挪威 BankID 在金融服務場景，子女可代失能父母執行「fullmakt」（委任書）下的特定金融操作；其法律機制是單一一次性 power of attorney——子女實質上持有自己的 BankID 並代為操作<sup>50</sup>。此為 SA4 要避免的反面範本——它把 supporter 與 substituted 混為一物且無 cryptographic 區分。F3 SA4 推翻 BankID 既有實務的政治與商業成本未評估，須誠實邊界明示。

## 8.5 EUDI Wallet POTENTIAL Use Case 6 phase 2（2025-09）

POTENTIAL UC6 phase 2 報告——荷蘭與西班牙共 122 名 65+ 受測者使用 EUDI wallet 進行 medical mandate（同意醫療資料分享給特定機構）。回報：47/122 名受測者把 wallet PIN 交給家屬代為操作；12/122 名受測者在 supporter 在場下仍無法理解 selective disclosure 介面；0/122 名 wallet 提供「supporter co-presence widget」、全部為單一 PIN 模型<sup>32</sup>。此為 2025–2026 年 EUDI 場景下最直接的實證，顯示既有 wallet 設計缺少 supporter UI 層導致 substituted 退化路徑被觸發。下一階段（phase 3, 2026–2027）若不加入 SA4 三層分離結構，CRPD §28 違反風險將進入立法層審查。POTENTIAL UC6 phase 2 之 47/122 PIN 委付率可外推至台灣為跨文化外推風險——歐洲 pilot 之觸發機率台灣須另行 pilot。

# 九、反事實壓力測試

本章對 F3 四件 UX 工程原語進行五個反事實情境的壓力測試，方法論繼承 F2 §9 的 likelihood-by-mechanism 框架，likelihood 採 low（< 30%）/ medium（30–50%）/ medium-high（50–70%）/ high（≥ 70%）四級，不採災難主義絕對句式。working thesis（無緩解版）與 strengthened thesis（含三大緩解 critical path 版）嚴格區分；strengthened thesis 之「保留核心」措辭明示為「第一段 baseline 保留、第二段時程外推、第三段條件性失效」三段差異。

## 9.1 CF1——認知科學新研究推翻 Cowan 4±1（2027–2028, likelihood medium, impact medium）

2027–2028 年新一代認知科學研究基於 cross-cultural、mobile context、time-pressure 三項 ecologically valid 條件，顯示 working memory capacity 在 wallet 場景比 1990–2000 年代實驗室條件低，估計值落入 2±1 區間（相對於 Cowan 2001 的 4±1 為下修）。三條機制鏈——跨文化軸（Adams-Nguyen-Cowan 2018 已建立修訂方向<sup>69</sup>）、mobile context 軸（Wilmer-Sherman-Chein 2017 已揭示 smartphone use 與 attention capacity 負相關<sup>70</sup>）、time-pressure 軸（wallet UX 30 秒至 2 分鐘決策時程）。

**失敗鏈**：SA1 baseline 從「≤ 3 attribute group」下修至「≤ 1–2」，UX 流暢度大幅下降，holder 平均 presentation 時間從 ≤ 60 秒上升至 ≥ 120 秒；SA2 dark patterns 防線壓力上升 30–50%（consent dialogue 顯示時間每增加 50%，holder「全部接受」傾向上升 10–15 個百分點）；SA3 capacity-aware UX 階段化重新設計（CDR 0 與 CDR ≥ 1 的 UX 階段差異變小）；SA4 supporter 介入頻率上升放大「協助理解滑入代為決定」邊界違反風險。

**緩解**：UX-agility by design——progressive disclosure UI 支援動態調整 attribute group 上界；wallet 配置檔允許 issuer 或 verifier 在 cryptosuite metadata 中宣告 target cognitive load level；issuer-supplied defaults 在低上界場景發揮更大作用；dual-track UX（guided mode + expert mode）。剩餘風險——UX-agility 工程實作複雜度增加 30–50%，跨 wallet 廠商互通測試壓力增加；issuer-supplied defaults 在 GDPR Art 25 privacy by design 與 holder autonomy 之間的張力未解。

## 9.2 CF2——EUDI 強制階段重演 GDPR cookie banner 失敗（likelihood medium-high, impact high）

2026–2027 年 EUDI Wallet 強制階段啟動後，verifier policy consent UX 在 6–18 個月內重演 GDPR cookie banner 失敗模式。預期 wallet 場景「全部接受」率達 75–85%、dark patterns 普及率達 Mathur 2019 shopping site 同等水平（≥ 11%）。觸發機制鏈——enforcement 機制缺口（DPA 對 wallet 場景執法權限與技術能力均不到位）、verifier 動機（透過 dark patterns 取得超出最小化原則的 attribute）、wallet provider 競爭壓力（UX 順滑化與 dark patterns 工程上難以區分）。

**失敗鏈**：SA2 dark patterns 防線崩潰（scope 變更強制延遲被「重置流程」繞過、選項對稱性被視覺對比繞過、必要訊息揭露被「詳細資訊」摺疊到第二層繞過）；SA1 cognitive load 上界失去意義（consent fatigue 下使用者不再閱讀屬性說明）；SA3 capacity-aware UX 自動降階被使用者體驗為「煩擾」而被關閉；SA4 supporter UI 三層分離塌縮為單層「supporter 代為點擊」。對 F2 SA2 CRPD §29 反向使用風險——CRPD Committee 對歐盟成員國的 Concluding Observations 可預期在 2028–2030 年度報告週期出現對 EUDI Wallet UX 之 Art 12 違反指控。

**緩解**：EU AI Act §5(1)(b) 延伸到 wallet 場景（需 EDPB 與 European AI Office 聯合發布 guidance，明示 wallet 場景的 dark patterns 為 §5(1)(b) 禁止範圍）；DSA Art 25 對 wallet 介面設計的延伸（需 European Commission 在 DSA Art 25 implementing guidelines 中納入 wallet）；EDPB enforcement-grade guidance（wallet 場景 specific guidelines，含量化標準）；conformance suite 加入 dark patterns 檢測<sup>71</sup>。剩餘風險——GDPR 2018 生效後到 EDPB Guidelines 03/2022、再到實際 enforcement 統計顯示 cookie banner「全部接受」率下降仍未完成（2024 年率仍 ≥ 75%）；EUDI Wallet 強制階段若 2026–2027 啟動、dark patterns enforcement 完整到位可能要 2032–2034。EU AI Act §5(1)(b) wallet 適用為條件性——「若 wallet UX 落入 AI Act AI system 範圍」，待 AI Office implementing guidance（2026 Q4 預定）。

**CRPD §29 反向使用問題**：CF2 觸發後 F3 對 CRPD §29 的對接從「履行性補強」翻轉為「形式合規空轉」；audit trail 在 30 年窗口內反過來成為「holder 同意此 dark pattern 之證據」（T_UX2 已形式化）。

## 9.3 CF3——SA3 三條替代路徑全部失效（2028–2030, likelihood medium, impact high）

三條路徑同時遇到實作障礙——functional self-assessment 違反 GDPR Art 9（wallet 內 ambient 監測難以滿足 Art 9(2)(a) 明示同意要件）；supporter triggered 被 CRPD Committee 質疑為 substituted（supporter 在「觸發降階」這個動作上實質決定了「holder 當下無法處理 baseline UX」，可能被同樣以 functional capacity test 為由判定為違反<sup>72</sup>）；issuer-side hint 被判定為 functional capacity test 違反 CRPD §29（issuer 在 credential 中嵌入 capacityProfile hint 等於 issuer 替 holder 做了 functional capacity 判定）。

**失敗鏈**：SA3 三路徑都不可用；A15 §6.2 三重預設失效；家屬代行 chooser_signature 常態化；CRPD Art 12 義務違反——wallet UX 在規模化 substituted regime 下，CRPD Committee 預期對歐盟成員國、澳洲、紐西蘭、韓國發出 Concluding Observations + individual communication procedure（OP-CRPD Art 1-5）。

**緩解**：threshold signatures 作為 fallback（F2 §9 CF2 緩解設計 1 已建議——BLS / Shamir 對失智場景的 t-of-n 共簽，把 capacity-aware downgrade 的觸發從 functional test 轉移到法律地位 anchor）；court-supervised downgrade（對失智宣告後場景由法院命令為 anchor 觸發 wallet downgrade）；GDPR Art 9(2)(g) 公共利益例外暫時援用（對 functional self-assessment 路徑）。剩餘風險——threshold signatures fallback 依賴失智宣告 / 監護登記率，但全球失智盛行率對應的監護登記覆蓋率不足 5%（台灣 2024 司法院統計）；GDPR Art 9(2)(g) 例外的接受度未知，CRPD 委員會對「公共利益正當化 functional assessment」的歷史態度傾向質疑。

## 9.4 CF4——supporter UI 三層分離無 hardware 載體（2026–2030, likelihood medium-high, impact medium-high）

iOS Family Sharing 與 Android Family Link 至 2030 仍未原生支援「supporter 角色 ≠ 家庭成員」；middle-aged supporter（社工、長照員、信託機構代表）多數無自己的 wallet；threshold signatures 在主流 wallet 實作不普及。

**失敗鏈**：SA4 三層分離理論成立但工程不可達——iOS / Android 對「指定第三方 supporter」無原生支援；supporter 多數無自己的 wallet；實務上 supporter 退化為「家屬成員」（透過 Apple Family Sharing 或 Google Family Link 接入），與 subject 共用裝置。物理 holder ≠ 簽章 holder 風險——共用裝置下 supporter 物理上持有 subject 私鑰、chooser_signature 可由 supporter 代簽。

**台灣特殊衝擊**：台灣健保 IC 卡長期由家屬代申代用實務（衛福部統計 2024 顯示 65 歲以上失智族群 IC 卡操作 ≥ 70% 由家屬代行）；EUDI Wallet 模式進入台灣 DIW 後若 supporter UI 三層分離無 hardware 載體，健保卡現行家屬代行實務會直接搬到 wallet——失能長者的 wallet 由家屬持有與操作；SA4 在台灣場景下從第一日即不成立。

**緩解**：wallet provider supporter sub-account（W3C DID coexistentSubjects 延伸提案）；政府 / NGO supporter wallet 配發（健保署、長照中心、衛福部、失智症協會、心智障礙者家長協會）；公共服務 supporter 認證程式（類似律師、公證人）；threshold signatures 主流 wallet 推動（BLS / FROST<sup>73,74</sup>）。剩餘風險——supporter 動員規模化的政治意願與預算未知；CRPD §29 supporter 配發在歐盟、日本、韓國有部分公部門預算支持但規模對失智盛行率覆蓋率不足 10%；台灣意定監護新制覆蓋率不足 5%。

## 9.5 CF5——LLM-agent 補位（2027–2030, likelihood high, impact medium-high）

2027–2030 年 LLM-agent in wallet（F1 已揭示場景）成為 F3 四件 UX 原語的功能性替代或補位——comprehension 協助（LLM-agent 解釋 attribute 含義、verifier 信任度、資料最小化原則）、attribute disclosure 簡化（推薦 disclosure profile）、法律術語即時翻譯、決策建議。此情境兼具緩解面（解決 SA4 supporter 動員規模化問題、SA1 cognitive load 問題）與威脅面（LLM-agent 滑入 supporter「不可替代」邊界）。

**失敗鏈**：LLM-agent 解釋偏差（受訓練資料、prompt 設計、wallet provider 商業利益影響——對 wallet provider 偏好的 verifier 過度推薦、對特定 attribute 揭露的便利化傾向<sup>75</sup>）；prompt injection 攻擊（verifier 在 OpenID4VP request metadata 中嵌入 prompt injection<sup>76</sup>）；agent-mediated consent 取代 informed consent（holder 所同意者實為 agent 簡化過的版本，已偏離原始 verifier policy）。

**緩解**：F1 §7.3.1 AgentDelegationProof（agent 在每次 wallet 操作時附加 delegation 證明，明示「此操作 holder 已授權給 agent 何種範圍」）；presentationOrigin 標籤（每個 OpenID4VP presentation 在 audit log 中明示「holder 直接決定 / agent 建議後 holder 確認 / supporter 共簽 / 法院命令 anchor」四類來源之一）；comprehension_attestation 與 chooser_signature 分離（comprehension_attestation 必須由 human supporter 私鑰簽不可由 LLM-agent 簽，chooser_signature 必須由 holder 私鑰簽）；agent 與 supporter 角色密碼學區分（在 wallet 規格層強制區分 agent_signature / supporter_signature / holder_signature 三類，分別承載 LLM 行為見證、CRPD §29 supported decision 法律效力、informed consent 法律效力）。

### 9.5.1 CF5 對 F1 RT-ℬ ✗ / AA-ℬ ✗ 邊界的衝擊（單獨段, 280–300 字）

F1（系列 article 16）§5.3 W4 反論與 §7.3 已建立關鍵邊界——常駐型不可委任邊界 RT-ℬ ✗ 禁止 LLM-agent 取代 holder 持續承擔 civic role；常駐型可代行邊界 AA-ℬ ✗ 禁止 LLM-agent 取代 holder 在「行政行為承擔層」的決定。CF5 對此邊界構成工程式越界風險——LLM-agent 在 wallet UX 內提供 comprehension 協助、attribute filtering 建議、決策建議三項服務時，雖名義上每次仍由 holder 一鍵確認，但 holder 的「確認」實質為「對 agent 簡化版本的同意」；agent 因此實質決定了「何種選項被 holder 看到」「何種建議被 holder 接受」。這個越界屬工程結構的常駐越界，非單次違反——agent 每次 wallet 操作都在「協助理解」與「代為決定」之間滑動，邊界存於使用者主觀層，非密碼學層。緩解上 F1 §7.3.1 AgentDelegationProof 加上 presentationOrigin 標籤加上 comprehension_attestation 與 chooser_signature 分離三件設計共同維持密碼學邊界；但使用者主觀層的邊界維持需 F3 UX 工程加上 F1 RT-ℬ ✗ 規範教育加上 EU AI Act §5(1)(b) manipulative techniques enforcement 三方協作。即使三方到位，agent 與 supporter 的角色滑移在實務上仍會發生——這是 F3 對 F1 RT-ℬ ✗ / AA-ℬ ✗ 邊界結論的「工程實作層延伸誠實邊界」，**非「繞過 F1 結論」**。F1 RT-ℬ ✗ 與 AA-ℬ ✗ 仍是常駐型不可委任結論；CF5 處理的是 Z₂ 邊界內部的工程實作脆弱性。

## 9.6 likelihood × impact 矩陣

| CF | 情境 | Likelihood | Impact | 矩陣位置 | 主衝擊原語 | 連鎖衝擊原語 |
|----|------|------------|--------|---------|------------|--------------|
| CF1 | 認知科學推翻 Cowan 4±1 | medium (30–50%) | medium | (M × M) | SA1 | SA2, SA3, SA4 |
| CF2 | EUDI 強制階段 cookie banner 重演 | medium-high (55–70%) | high | (M-H × H) | SA2 | SA1, SA3, SA4 |
| CF3 | capacity-aware 三路徑全失效 | medium (30–50%) | high | (M × H) | SA3 | SA4, F2 SA2 |
| CF4 | supporter UI 無 hardware 載體 | medium-high (55–70%) | medium-high | (M-H × M-H) | SA4 | SA3, F1 chooser_signature |
| CF5 | LLM-agent 補位 | high (≥ 70%) | medium-high | (H × M-H) | F1 RT-ℬ ✗ / AA-ℬ ✗ | SA1, SA2, SA3, SA4 |

矩陣解讀——最高優先級風險是 CF2（M-H × H）與 CF3（M × H），兩者都會觸發 F3 thesis 整體修訂或 CRPD §29 違反風險；高機率中等風險是 CF5（H × M-H），雖然 impact 僅 M-H 但機率最高、對 F1 邊界結論衝擊獨特；中機率中等風險是 CF1（M × M）與 CF4（M-H × M-H），兩者都是「工程可達性」型衝擊。五個 CF 中無 (H × H)、無 (L × L)；最壞合取情境（五 CF 全部觸發）first-order 獨立假設下 < 5%；考慮 CF1–CF3 條件依賴與 CF4–CF5 標準分裂相互強化，實際 5–10%。

## 9.7 三大緩解 critical path

判準——對多個 CF 同時提供緩解、在現有工程社群已有部分基礎、標準化路徑明確、對接 F2 §9 critical path，避免另起爐灶。

**緩解 1（critical path 首位）：UX-agility by design**（W3C VC v2.0 securingMechanism + EUDI ARF profile 抽象層 + issuer-supplied defaults）。同時對 CF1 與 CF2 提供緩解。估期——2026–2028 完成 W3C / IETF / EUDI ARF 規範整合；2028–2030 完成 wallet 與 verifier 工程實作；2030–2032 完成 dark patterns 自動化 conformance 檢測整合。對接 F2 §9 critical path 第一位（crypto-agility by design）的設計哲學。

**緩解 2（critical path 第二位）：threshold signatures + court-supervised downgrade**（BLS / Shamir + 法院命令 anchor）。同時對 CF3 與 CF4 提供緩解。設計關鍵——保留 holder-controlled 為 baseline（CDR 0），threshold signing 僅在法院 anchor 觸發後啟動，迴避 functional capacity test 違反 CRPD §29。估期——2026–2028 完成 BLS threshold 在 W3C VC v2.0、IETF JOSE/COSE 規範整合；2028–2030 在 EUDI ARF 與各國 wallet 實作；2030–2032 完成 supporter wallet 公部門配發配套。對接 F2 §9 critical path 第二位（第三方 trusted preservation service）的「分散信任」設計哲學。

**緩解 3（critical path 第三位）：agent 與 supporter 密碼學區分 + AgentDelegationProof 制度化**（W3C VC + EU AI Act §5(1)(b) + DSA Art 25 三軌）。對 CF5 提供緩解、對 CF2 提供間接緩解。設計關鍵——agent_signature / supporter_signature / holder_signature 三類在 credential schema 層強制區分；同時 EU AI Act 與 DSA 在 manipulative techniques 與 dark patterns 對 wallet 場景的延伸 enforcement。估期——2027–2029 完成 W3C VC + EUDI ARF 規範整合 agent_signature 結構；2028–2030 完成 EDPB + European AI Office 對 wallet 場景的聯合 guidance；2029–2032 完成 enforcement-grade 實作。對接 F2 §9 critical path 第三位（G_recognition^A 軟法層多軌備援）的「不依賴單一軌道」設計哲學。

三大緩解設計的合取構成 F3 thesis 的「strengthened version」——把 working thesis 從「四件 UX 原語合取」升級為「四件 UX 原語合取 + 三大緩解 critical path」。沒有三大緩解的 working thesis 在 CF2 或 CF5 任一單獨觸發下會在實證上失效；有三大緩解的 strengthened thesis 在五 CF 全部觸發下保留核心功能（第一段 baseline 完整、第二段 CRPD §29 履行性補強規模化時程外推 ≥ 10 年、第三段 LLM-agent 邊界維持條件性失效）。

## 9.8 F2 §9 與 F3 §9 機制鏈交叉表（RW-4 要求）

| F2 §9 CF | F3 §9 對應 CF | 機制鏈交叉點 | 影響傳導方向 |
|---|---|---|---|
| F2 CF1（BBS+ 延後到 2029） | F3 CF1（認知科學 4±1 推翻） | 「baseline 規格延後」的密碼學與 UX 兩切面 | F2 CF1 把高階 unlinkability 延後、F3 CF1 把 UX 上界下修；合取使「baseline + 高階」雙軌策略在兩層被條件化 |
| F2 CF2（失智長者 receipts 失效） | F3 CF3（capacity-aware 三路徑失效） | 失智族群退化的密碼學承載與 UX 履行性 | 同一現象不同切面；F3 CF3 觸發會加速 F2 CF2 觸發 |
| F2 CF3（法庭拒絕 holder-controlled） | F3 CF2（間接通過 dark patterns） | 法庭採證的 UX consent 基礎 | F3 CF2 為 F2 CF3 提供「consent 不 informed」反論彈藥 |
| F2 CF4（BRICS 拒絕 OECD） | F3 CF4（hardware 載體層） | 跨境 / 跨架構碎裂 | 兩者皆指向 F3/F2 thesis 在「全球互通」假設下的脆弱性 |
| F2 CF5（PQC 威脅 BBS+） | F3 CF5（LLM-agent 補位） | 「外部技術趨勢對 thesis 的工程衝擊」 | 兩者皆要求 thesis 採「agility by design」策略，對象不同（crypto-agility vs UX-agility + agent governance） |

F3 §9 對 F2 §9 之兩處補強——其一，F2 CF2 退化在 F3 視角下並非「receipts 自動失效」，其機制為 capacity-aware UX 三條替代路徑各自的法律 / 工程 / 隱私衝突使 UX 階段化在 CDR ≥ 1 場景無工程實現；其二，F2 §9 五 CF 中無「LLM-agent 治理」面向，F3 CF5 補上此面向並指明 LLM-agent 對 F1 RT-ℬ ✗ / AA-ℬ ✗ 邊界結論的工程式越界風險（§9.5.1）。

# 十、接合 A15 / F1 / F2 forward-link 與 F4 預告

## 10.1 接合 A15 §6.2 wallet 三重預設

A15 §6.2 把 wallet 三重預設（個人擁有 + 個人識別 + 個人私鑰）的退化路徑寫死在系列基底<sup>8</sup>。F3 四件 UX 工程原語分別鬆綁三重預設的某一面向——UX3 capacity_aware_consent 路徑 (iii) issuer-side hint 鬆綁「個人識別」；UX4 supporter_ui_three_layer 鬆綁「個人私鑰」（supporter_signature_l1 與 subject_signature_l3 分離即 capability 多控制者）；UX1 progressive_disclosure_ui 與 UX2 dark_patterns_firewall 對「個人擁有」之鬆綁較弱，主要在介面層減輕 holder 之單獨負擔。

## 10.2 接合 F1 §5.4 三項工程修正

F1 §5.4 已將 audit-by-design、chooser_signature、revocation_endpoint 確立為三項工程修正<sup>9</sup>。F3 UX 工程原語之對應如下——audit-by-design 由 UX2 audit_log_endpoint + UX3 reassessment_period_days 在「audit 內容」層擴充（除 F1 決策時序 audit 外，加入 dark patterns 偵測 log 與 capacity 重評估 log）；chooser_signature 由 UX3 comprehension_attestation + UX4 subject_signature_l3 把「chooser」拆為 comprehension 層與 decision-bearing 層；revocation_endpoint 由 UX3 reassessment_period_days 把「撤銷」之觸發條件擴充至「capacity 重評估後之 ui_downgrade」。

## 10.3 接合 F2 §4–§7 四原語

F2 §3.4 V_receipt 之 C1–C6 與 F3 V_ux 之 C7–C10 之合取即 V_receipt'。F2 critical path 與 F3 critical path 之交會點在 presentation 時點。F2 §6 待開發 6.4「threshold UX」即 F3 SA0 之主要錨點；本文已給出 V_ux 之形式定義與四件 UX 工程原語 schema，後續 F4 應就每件原語給出具體 verifier-side / wallet-side 之 conformance 測試規格。F2 §11 既有的「CRPD §29 反向使用議題」在 F3 由 T_UX2 形式化為 V_receipt' 之硬條件，避免 audit trail 在 30 年保存窗口內被反向工具化。F2 §5.3 設計 B 違反 CRPD §28 不採用須在 F3 SA4 重申——任何允許 supporter 進入簽章 quorum 之設計均違反 CRPD §28。

## 10.4 預告 F4

F4 應在以下方向延伸——其一，F3 四件 UX 原語的 conformance test 標準化路徑（EUDI Phase 2 2026 Q3 → W3C VC v2.x extension）；其二，supporter sub-account 的 W3C DID coexistentSubjects 延伸提案；其三，CDR 3 + end-of-life 場景的 wallet 操作邊界（本文限定 SA3 範疇止於 CDR 2，CDR 3 屬「事實上的 substituted」議題）；其四，多元 capacity 路徑（急性醫療、智能障礙、精神疾病、年齡增長）；其五，agent-mediated consent 之 audit trail（A16 §5.4 DeliberationRecord 延伸）；其六，未成年人 wallet 對 minors capacity 的 UX 處理。

**同期接合 A2**：本文寫作同期之 article 19（A2，2026-05-12）正面承擔系列規範下界 PRF ≜ ⟨plurality, validity, contestation, agonism⟩；F3 V_ux 與 T_UX1-T_UX4 對應 PRF validity + agonism + contestation 三分量（plurality 為部分承擔），完整對位見 A2 §3.3 32 cell 承擔矩陣。

# 十一、誠實邊界與 open questions

## 11.1 誠實邊界明示

本文之主要誠實邊界——

第一，**θ_inform = 0.5 與 attribute_count ≤ 3 為分析性建議數**，wallet 場景 pilot 尚未校準。Cowan 4±1 之 working memory 上界屬 generic 推估，缺乏 wallet-specific 校準；wallet 場景之 ecologically valid 研究仍是 gap。

第二，**BBS Cryptosuite 在 2026-05 仍處 CRD 階段，尚未進入 Rec**——W3C Data Integrity BBS Cryptosuites v1.0 CRD（2026-04-07）<sup>77</sup>；SD-JWT-VC 至 draft-16（2026-04-24）<sup>78</sup>；W3C VCDM v2.0 為 Rec（2025-05-15）<sup>18</sup>；EUDI ARF 採「2025-12 iteration」非 v1.5<sup>21</sup>。

第三，**GDPR cookie banner 與 wallet OpenID4VP consent 為「同型重演」**（structural homomorphism）非「直接適用」——兩者範疇、UX 介面、監管框架不同。

第四，**EU AI Act §5(1)(b) wallet 適用為條件性**——「若 wallet UX 落入 AI Act AI system 範圍」，待 AI Office implementing guidance（2026 Q4 預定）。DSA Art 25 主要規範 online platform，wallet 是 endpoint 應用，適用邊界須查。

第五，**SA3 三條替代路徑各自有未解 tradeoff**——wallet-self-assessment 之 GDPR Art 9 合規不確定；supporter triggered 之意定監護法律承載 gap；issuer-side hint 與 CRPD §29 functional test 禁令之根本緊張。三條路徑無單一可獨立完成 capacity-aware downgrade。

第六，**台灣意定監護新制法律承載 gap**——「自我決定的 substituted」採黃詩淳 (2020) 詮釋為單一學者立場，須意定監護學術社群擴大檢驗。三項銜接 gap（啟動條件、角色性質、範疇對象）使台灣場域 supporter 法律承載不完整。

第七，**線下代簽攻擊面為已知 gap**——cryptographic 層無法區分「subject 自己」與「supporter 持 subject 私鑰」；密碼學三層分離不解決所有代簽問題，惡意場景由 audit-by-design + revocation_endpoint 覆蓋。

第八，**Cohen 2018 對 Israel §67B–67F 為單一學者詮釋**；Peru DL 1384 apoyos 雙軌 5 年後實證未充分研究。

第九，**WEIRD 樣本偏見**——主流認知科學研究多在 WEIRD 樣本中進行；cross-cultural 應用須誠實邊界。

第十，**「medium-high (≥ 50%) likelihood」無 pilot study 校準**——五段機制鏈 (a)→(e) 是 mechanism-based 推論非實證；明示「機率」非「確定性」。

## 11.2 Open Questions（O1–O33）

| # | 議題 | 待開發位置 |
|---|---|---|
| O1 | V_ux 與 V_receipt 的「實際可履行性」可形式化（modal logic / temporal logic 框架） | SA0 |
| O2 | D 函數在 verifier policy 上的具體演算法（NLP-based / heuristic-based / rule-based） | SA0 |
| O3 | attribute_count 與 cognitive load 對應的 wallet-specific 量化模型 | SA0 |
| O4 | supporter「不可替代」的密碼學 enforce 在 hardware level 的標準化路徑（W3C TPM 提案） | SA0 |
| O5 | wallet 場景的 ecologically valid cognitive load study（pilot study 設計建議） | SA1 |
| O6 | cross-cultural 認知科學研究在 wallet UX 的應用（WEIRD bias 修正） | SA1 |
| O7 | progressive disclosure UI 三種實作（wizard / accordion / paginated）在 wallet 場景的對照研究 | SA1 |
| O8 | 個體差異（年齡 / 教育 / 數位素養 / 語言）對 attribute group 上界的影響 | SA1 |
| O9 | wallet 場景的 dark patterns 偵測 conformance suite | SA2 |
| O10 | terminology obscurity 量化研究——「selective disclosure」「ZK proof」「verifier policy」對非技術使用者的可理解性 | SA2 |
| O11 | 跨法域 dark patterns 定義差異（EU vs US FTC vs 台灣公平交易委員會 vs 印度 DPDP） | SA2 |
| O12 | EU AI Act §5(1)(b) 與 wallet 範疇——AI Office implementing guidance（2026 Q4 預定） | SA2 |
| O13 | pilot study 設計——CDR ≥ 2 場景的 wallet UX 退化率實測 | SA3 |
| O14 | 醫療端介接 mechanism（誰判定 CDR + 通知 wallet 的法律 / 工程路徑） | SA3 |
| O15 | functional self-assessment 與 GDPR Art 9 special category data 的 Art 9(2)(g) 公共利益例外實作 | SA3 |
| O16 | issuer-side capacity hint 與 CRPD §29 functional test 禁令的 CRPD 委員會 General Comment（未來版本）詮釋 | SA3 |
| O17 | 未成年人 wallet 對 minors capacity 的 UX 處理（EUDI ARF 對 minors 不完整） | SA3 |
| O18 | 急性醫療 / 短期 capacity 變動（術後 / 藥物影響）的 UX 階段化 | SA3 |
| O19 | 台灣意定監護新制與 CRPD §29 supporter 的法律修補路徑 | SA3 |
| O20 | supporter sub-account 的 W3C DID coexistentSubjects 延伸提案（F4 sub-arg-1 核心？） | SA4 |
| O21 | supporter 認證程式（類似律師 / 公證人）的 G_state^A 立法 | SA4 |
| O22 | supporter 培訓與 wallet 配發的公共服務設計 | SA4 |
| O23 | 跨文化 supporter 角色（華人家庭文化 vs CRPD §29 個體選擇）的 UX 設計研究 | SA4 |
| O24 | 北歐 BankID fullmakt 制度的 CRPD 合規路徑 | SA4 |
| O25 | iOS / Android 平台層擴展 supporter 角色 UI 的政治與商業可行性 | SA4 |
| O26 | LLM-agent comprehension assistance 與 supporter 「不可替代」的密碼學區分 | SA5 |
| O27 | agent-mediated consent 是否構成 F1 RT-ℬ ✗ / AA-ℬ ✗ 工程式越界（F4 議題核心？） | SA5 |
| O28 | LLM-agent supporter 補位的 audit trail（A16 §5.4 DeliberationRecord 延伸） | SA5 |
| O29 | LLM-agent 與 human supporter 角色滑移的偵測機制 | SA5 |
| O30 | prompt injection 對 wallet UX 影響的 conformance test | SA5 |
| O31 | F3 四件 UX 原語的 conformance test 標準化路徑（EUDI Phase 2 2026 Q3 → W3C VC v2.x extension） | 系統 |
| O32 | F3 與 F2 critical path 的合取依賴——F2 SA1 cryptosuite + F3 SA1 cognitive load 在「BBS+ unlinkability UX 成本」上的張力 | 系統 |
| O33 | F3 與 A15 §6.2 三重預設的更新——是否需擴展為「四重預設」（加 UX 預設） | 系統 |

# 十二、條件性學術結論

## 12.1 三條條件性結論

**結論一**：F2 四件密碼學工程原語在「密碼學選擇 / 長期保存 / 法庭可採性 / 跨境互認」四層的成立是條件性的——其「實際可履行性」前提 `Informed(holder, r)` 在 UX 層無工程修正下，於四道認知-規範瓶頸下無法履行。瓶頸具體為——其一，Miller / Cowan 認知上界 + cognitive load theory 在 multi-attribute selective disclosure 場景下使 informed consent 在 attribute_count > 3 時 P(informed_consent = true) < θ_inform；其二，verifier policy 之 dark patterns 在 wallet 場景同型重演 GDPR cookie banner 八年失敗（11.8% 合規率）；其三，capacity 變動使「曾經 informed consent」失效並以 mechanism-based likelihood medium-high 退化為 substituted；其四，supporter 介入邊界模糊使「協助理解」滑入「代為決定」。為承擔此前提，V_receipt 於 F3 升級為 V_receipt' ≜ V_receipt ∧ V_ux，後者由四件 UX 工程原語以合取承擔。

**結論二**：F3 strengthened thesis（含四件 UX 工程原語 + 三大緩解 critical path）在五個 CF 全部觸發的極端情境下——第一段 baseline（progressive disclosure + supporter UI 框架）完整保留、第二段（CRPD §29 履行性補強規模化）時程外推 ≥ 10 年、第三段（LLM-agent 邊界維持）條件性失效。working thesis（無緩解版）在 CF2 或 CF5 任一單獨觸發下實證失效。本文採 strengthened thesis 為正式立場；working thesis 僅作為論證起點與壓力測試對照組。

**結論三**：F3 四件 UX 工程原語完全在 Z₂ 範圍內運作，對 F1 之 RT-ℬ ✗ 與 AA-ℬ ✗ 兩 cell（定理 T2'）不構成可達緩解。CF5 對 F1 兩條邊界之衝擊為「工程實作層延伸誠實邊界」，非繞過 F1 結論。F1 RT-ℬ ✗ 與 AA-ℬ ✗ 仍是常駐型不可委任結論，本文不更動。

## 12.2 working thesis 與 strengthened thesis 嚴格區分

工作論題（working thesis）為——「F2 四原語在 UX 層大規模退化；落地需四件 UX 工程原語以合取補強」。此論題未包含緩解 critical path，於 CF2（dark patterns 重演）或 CF5（LLM-agent 補位）任一單獨觸發下實證失效；working thesis 僅作為論證起點與壓力測試之對照組使用。

強化論題（strengthened thesis）為——「F2 四原語在 UX 層大規模退化；落地需四件 UX 工程原語以合取補強，並以三大緩解 critical path（UX-agility by design / threshold signatures + court-supervised downgrade / agent 與 supporter 密碼學區分 + AgentDelegationProof 制度化）作為長期承載」。本文以 strengthened thesis 為正式立場。在五個 CF 全部觸發的極端情境下，strengthened thesis 之三段差異為——第一段（baseline progressive disclosure + supporter UI 框架）完整保留、第二段（CRPD §29 履行性補強規模化）時程外推 ≥ 10 年、第三段（LLM-agent 邊界維持）條件性失效。「保留核心」一詞不可被誤讀為「四件全部不受影響」——CF3 + CF4 同時觸發下 T_UX3–T_UX4 為條件性失效。

## 12.3 對三組目標讀者的分立建議

對 **UX 工程社群**——SA1 之 ≤ 3 attribute group 為分析性建議數，並非實驗測得，請優先支持 EUDI POTENTIAL UC6 與 EWC、DC4EU、NOBID 各 LSP 之 pilot study 以校準此數值；progressive disclosure 三種變體（wizard / accordion / paginated）在 wallet 場景需對照研究；conformance suite 加入 dark patterns 自動化檢測為高優先項。

對 **CRPD 政策研究者**——CRPD §29 supporter 與 substituted 之區分在 wallet UX 工程上以「signatures_disjoint = true」與「VerificationMethodDisjoint = true」雙重硬約束承載；issuer-side capacity hint 與 CRPD §29 functional test 禁令之根本緊張為 CRPD 委員會未來 General Comment 之關鍵議題；意定監護新制（台灣 §1113-2、日本成年後見、UK MCA 2005 + 2019 amendment、Peru DL 1384、Israel §67B–67F）與 CRPD §29 supporter 之銜接 gap 須跨法域比較研究。

對 **失能政策學者**——SA3 補強表（中介證據強度評估表 15 列）為跨法域證據盤點之起點；建議在 OECD 範圍內進行縱貫 pilot（CDR 0–3 各階段 wallet 操作之家屬代行率、cognitive proxy ROC、supporter triggered downgrade 之 false positive / false negative）；CDR 3 + end-of-life 場景之 wallet 操作邊界須與 CRPD §28 substituted 禁令對接。

對 **EUDI Phase 2 與 CRPD Committee**——EUDI Phase 2 conformance suite 應於 2026 Q3 之前納入 dark patterns 自動化檢測與 supporter UI 三層分離 conformance 測試；CRPD Committee 對 wallet 場景之 supported decision-making 應發布 General Comment 補充——明示 supporter 範疇邊界（不限於家屬）、supporter triggered downgrade 之 safeguards 要求、issuer-side capacity hint 之 functional test 違反邊界。

# 參考資料

1. Regulation (EU) 2024/1689 of the European Parliament and of the Council laying down harmonised rules on artificial intelligence (Artificial Intelligence Act), Art 5(1)(b). OJ L, 2024/1689, 12 July 2024. 來源等級 A。
2. European Data Protection Board. Guidelines 03/2022 on Deceptive design patterns in social media platform interfaces: How to recognise and avoid them. Adopted 14 March 2022; version 2.0 adopted 14 February 2023. 來源等級 A。
3. Nouwens, M., Liccardi, I., Veale, M., Karger, D., & Kagal, L. (2020). Dark Patterns after the GDPR: Scraping Consent Pop-ups and Demonstrating their Influence. Proceedings of CHI 2020, Paper 194. DOI: 10.1145/3313831.3376321. 來源等級 A。
4. POTENTIAL Consortium. Use Case 6: Mandate Scenario — Mid-term Technical Report, 2025-09. EU Digital Identity Wallet Large Scale Pilot. 來源等級 B。
5. World Health Organization. Dementia Fact Sheet, updated March 2024. WHO Geneva. 來源等級 A。
6. Regulation (EU) 2024/1183 of the European Parliament and of the Council amending Regulation (EU) No 910/2014 as regards establishing the European Digital Identity Framework. OJ L, 30 April 2024. 來源等級 A。
7. Commission Implementing Regulation (EU) 2024/2979 of 28 November 2024 on technical specifications for the European Digital Identity Wallet. OJ L, 28 November 2024. 來源等級 A。
8. civic-proof 系列 article 15 (A15). Civic-proof inclusion rights, §6.2 wallet 三重預設退化路徑. 2026. 來源等級 A（系列內部）。
9. civic-proof 系列 article 16 (F1). Civic AI agent delegation limits, §5.3 W4 反論 + §5.4 三項工程修正 + §7.3.1 AgentDelegationProof. 2026. 來源等級 A（系列內部）。
10. civic-proof 系列 article 17 (F2). Civic receipts provenance, §3–§7 + §9 CF1–CF5 + §11 open questions. 2026. 來源等級 A（系列內部）。
11. Brignull, H. (2010 onwards). Dark Patterns / Deceptive Design Patterns 分類. deceptive.design. 來源等級 C。
12. Mathur, A., Acar, G., Friedman, M. J., Lucherini, E., Mayer, J., Chetty, M., & Narayanan, A. (2019). Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites. Proceedings of CSCW 2019, Article 81. DOI: 10.1145/3359183. 來源等級 A。
13. Morris, J. C. (1993). The Clinical Dementia Rating (CDR): Current version and scoring rules. Neurology, 43(11), 2412-2414. 來源等級 A。
14. World Health Organization. ICD-11 for Mortality and Morbidity Statistics, Block 6D80–6D86 Dementia, 2022 update. 來源等級 A。
15. UN Committee on the Rights of Persons with Disabilities. General Comment No. 1 on Article 12: Equal Recognition before the Law. CRPD/C/GC/1, 19 May 2014, §15–17, §26–29. 來源等級 A。
16. 中華民國立法院. 民法第 1110 + 1113-2 至 1113-10 條（意定監護新制）. 2019 年 6 月 19 日公布、6 月 21 日施行. 來源等級 A。
17. 黃詩淳 (2020). 我國意定監護制度之介紹與評析. 月旦法學雜誌 第 295 期, 頁 105–120. 來源等級 B。
18. W3C. Verifiable Credentials Data Model v2.0 Recommendation, 2025-05-15. §4.12 securing mechanisms + §5.7 ZKP + §6.3 + §7.1 verification algorithm. 來源等級 A。
19. DIF. Presentation Exchange v2.1 specification, 2024. §5 input_descriptors + §6 submission_requirements + §7 format. 來源等級 B。
20. OpenID Foundation. OpenID for Verifiable Presentations draft-23 / draft-24, 2024–2026. §5.1 client_metadata + §7 presentation_definition (DCQL) + §9 transaction_data. 來源等級 B。
21. EU Cooperation Group. EUDI Wallet Architecture and Reference Framework, 2025-12 iteration. §6.6.3.8 device binding + §6.6.3.9 user binding + §6.6 selective disclosure profile. 來源等級 A。
22. W3C. Decentralized Identifiers (DIDs) v1.0 Recommendation, 2022-07-19. §5 DID document structure + §8 security considerations. 來源等級 A。
23. Cowan, N. (2001). The magical number 4 in short-term memory: A reconsideration of mental storage capacity. Behavioral and Brain Sciences, 24(1), 87-114. DOI: 10.1017/S0140525X01003922. 來源等級 A。
24. Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. Cognitive Science, 12(2), 257-285. 來源等級 A。
25. Bohme, R., & Köpsell, S. (2010). Trained to Accept? A Field Experiment on Consent Dialogs. Proceedings of CHI 2010, 2403-2406. 來源等級 A。
26. Solove, D. J. (2013). Introduction: Privacy Self-Management and the Consent Dilemma. Harvard Law Review, 126, 1880-1903. 來源等級 A。
27. Pettit, P. (1997). Republicanism: A Theory of Freedom and Government. Oxford University Press; 援引自 F1 §5.3. 來源等級 A。
28. Miller, G. A. (1956). The Magical Number Seven, Plus or Minus Two: Some Limits on Our Capacity for Processing Information. Psychological Review, 63(2), 81-97. 來源等級 A。
29. Cowan, N. (2010). The Magical Mystery Four: How is Working Memory Capacity Limited, and Why? Current Directions in Psychological Science, 19(1), 51-57. 來源等級 A。
30. Baddeley, A. D. (1992). Working memory. Science, 255(5044), 556-559. 來源等級 A。
31. Baddeley, A. D. (2003). Working memory: Looking back and looking forward. Nature Reviews Neuroscience, 4(10), 829-839. 來源等級 A。
32. POTENTIAL Consortium. Use Case 6: Payment Mandate — Mid-term Technical Report, 2025-09, pp. 42-48. EU Digital Identity Wallet Large Scale Pilot. 來源等級 B。
33. Sweller, J., & Chandler, P. (1994). Why Some Material Is Difficult to Learn. Cognition and Instruction, 12(3), 185-233. 來源等級 A。
34. Thaler, R. H., & Sunstein, C. R. (2008). Nudge: Improving Decisions About Health, Wealth, and Happiness. Yale University Press. 來源等級 A。
35. Tversky, A., & Kahneman, D. (1974). Judgment under Uncertainty: Heuristics and Biases. Science, 185(4157), 1124-1131. 來源等級 A。
36. Acquisti, A., Brandimarte, L., & Loewenstein, G. (2015). Privacy and human behavior in the age of information. Science, 347(6221), 509-514. DOI: 10.1126/science.aaa1465. 來源等級 A。
37. Utz, C., Degeling, M., Fahl, S., Schaub, F., & Holz, T. (2019). (Un)informed Consent: Studying GDPR Consent Notices in the Field. Proceedings of CCS 2019, 973-990. DOI: 10.1145/3319535.3354212. 來源等級 A。
38. Matte, C., Bielova, N., & Santos, C. (2020). Do Cookie Banners Respect My Choice? Measuring Legal Compliance of Banners from IAB Europe's Transparency and Consent Framework. 2020 IEEE Symposium on Security and Privacy, 791-809. 來源等級 B。
39. Apple Inc. App Tracking Transparency framework, iOS 14.5+, 2021–2024. Flurry Analytics 縱貫追蹤. 來源等級 C。
40. Gray, C. M., Kou, Y., Battles, B., Hoggatt, J., & Toombs, A. L. (2018). The Dark (Patterns) Side of UX Design. Proceedings of CHI 2018, Paper 534. 來源等級 A。
41. Mathur, A., Kshirsagar, M., & Mayer, J. (2021). What Makes a Dark Pattern... Dark? Design Attributes, Normative Considerations, and Measurement Methods. Proceedings of CHI 2021, Paper 360. 來源等級 A。
42. Sanchez-Rola, I., et al. (2019). Can I Opt Out Yet? GDPR and the Global Illusion of Cookie Control. ASIA CCS 2019, 340-351. 來源等級 A。
43. FTC v. Epic Games, Inc. (2022). Stipulated Order for Permanent Injunction, FTC File No. 192 3203, 19 December 2022. 來源等級 A。
44. CNIL. Decision SAN-2022-021 (Google Ireland & Google LLC, €150M) + SAN-2022-022 (Microsoft Ireland, €60M), 6 January 2022. 來源等級 A。
45. Luguri, J., & Strahilevitz, L. J. (2021). Shining a Light on Dark Patterns. Journal of Legal Analysis, 13(1), 43-109. 來源等級 B。
46. FTC v. Amazon.com, Inc. (2023). Complaint filed 21 June 2023, Case No. 2:23-cv-00932 (W.D. Wash.). 來源等級 A。
47. European Commission. Formal proceedings against Meta (Facebook/Instagram) under DSA Art 25, opened 30 April 2024. DSA Article 66 investigation. 來源等級 A。
48. NHS Digital. NHS Login Quarterly Statistics, Q4 2024. NHS England. 來源等級 B。
49. 日本內閣府デジタル庁. マイナンバーカードの普及状況及び健康保険証としての利用状況月報, 2024 年 12 月. 來源等級 B。
50. Finansiel Stabilitet / Finanstilsynet (Denmark). BankID and Mobile Identity Services Annual Report, 2023. 來源等級 B。
51. 台灣失智症協會. 失智症防治與服務政策建言書 2024. 來源等級 B。
52. Alzheimer's Association. 2025 Alzheimer's Disease Facts and Figures. Alzheimer's & Dementia, 21(4), 2025. 來源等級 A。
53. Open Universiteit Heerlen / Alzheimer Nederland. DigiD-gebruik door mensen met dementie: knelpunten en oplossingen. Onderzoeksrapport, Heerlen, 2023. 來源等級 B。
54. Internet Freedom Foundation (India). Aadhaar and Disability: Exclusion Patterns and the Right to Identity. IFF Policy Brief, August 2024, New Delhi. 來源等級 B。
55. Tribunal de Justiça do Estado de São Paulo (Brazil). Decisões sobre LGPD e exclusão de pessoas com demência de serviços públicos online, 2023–2024. 來源等級 B。
56. 中華民國衛生福利部. 長期照顧政策白皮書（修正版）, 2024 年 7 月. 來源等級 A（政府文件）。
57. Apple Inc. Health Cognitive Assessment Documentation, iOS 17+, 2024–2025. developer.apple.com/health/cognitive. 來源等級 C。
58. Google LLC. Health Connect Cognitive Data Types, 2024. developer.android.com/health/connect/data-types. 來源等級 C。
59. Cambridge Cognition. CANTAB Mobile — FDA cleared cognitive assessment, 2024. 來源等級 C。
60. Mozilla Foundation. Privacy Not Included: Health Apps 2025. foundation.mozilla.org. 來源等級 C。
61. Apple Inc. Family Sharing: Set up Family Sharing on iPhone, iOS 17 文件. 來源等級 B。
62. Google LLC. Family Link: Manage your child's Google Account 文件. 來源等級 B。
63. Hyperledger Aries RFC 0211 Mediator Coordination Protocol; Trust over IP Foundation DIDComm Messaging v2 §Routing. 來源等級 B。
64. State of Israel. Capacity and Guardianship Law Amendment No. 18 (5776-2016), §67B-67F. 來源等級 A。
65. Bregaglio Lazarte, R. (2019). Una mirada al nuevo régimen de capacidad jurídica de las personas con discapacidad establecido por el Decreto Legislativo 1384. Revista Latinoamericana en Discapacidad, Sociedad y Derechos Humanos, 3(1), 26-50. 來源等級 A。
66. Cohen, A. (2018). Supported Decision-Making: Israel's Path to Reform. Israel Law Review, 51(3), 451-478. 來源等級 A。
67. Peru. Decreto Legislativo No. 1384, El Peruano, 4 September 2018. 來源等級 A。
68. 中華民國司法院統計年報. 意定監護登記件數, 2019–2024. 來源等級 A（政府統計）。
69. Adams, E. J., Nguyen, A. T., & Cowan, N. (2018). Theories of working memory: Differences in definition, degree of modularity, role of attention, and purpose. Language, Speech, and Hearing Services in Schools, 49(3), 340-355. 來源等級 B。
70. Wilmer, H. H., Sherman, L. E., & Chein, J. M. (2017). Smartphones and Cognition: A Review of Research Exploring the Links between Mobile Technology Habits and Cognitive Functioning. Frontiers in Psychology, 8, 605. 來源等級 B。
71. Sphereon / Mattr / IDnow EUDI Wallet conformance suite 2026 Q1–Q3 progress reports. 來源等級 C。
72. CRPD Committee. Concluding observations on the combined second and third periodic reports of Australia. CRPD/C/AUS/CO/2-3, 2019, paras. 23-25; Concluding observations on the Republic of Korea. CRPD/C/KOR/CO/2-3, 2022, paras. 18-20. 來源等級 A。
73. Boneh, D., Drijvers, M., & Neven, G. (2018). Compact Multi-Signatures for Smaller Blockchains. ASIACRYPT 2018, LNCS 11273. 來源等級 A。
74. Komlo, C., & Goldberg, I. (2020). FROST: Flexible Round-Optimized Schnorr Threshold Signatures. SAC 2020. 來源等級 A。
75. Perez, E., et al. (2023). Discovering Language Model Behaviors with Model-Written Evaluations. arXiv:2212.09251. 來源等級 B。
76. Greshake, K., Abdelnabi, S., Mishra, S., Endres, C., Holz, T., & Fritz, M. (2023). Not what you've signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection. Proceedings of AISec 2023. 來源等級 B。
77. W3C. Data Integrity BBS Cryptosuites v1.0, Candidate Recommendation Draft, 2026-04-07. §3.4 bbs-2023 + §4 unlinkability. 來源等級 A。
78. IETF. draft-ietf-oauth-sd-jwt-vc-16, OAuth WG, 24 April 2026. §2.2.2.2 cnf claim + §2.4 KB-JWT. 來源等級 A。
79. Sweller, J., Ayres, P., & Kalyuga, S. (2011). Cognitive Load Theory. Springer Explorations in the Learning Sciences. 來源等級 A。
80. Nielsen Norman Group. Progressive Disclosure Pattern Library entries, 1995–2024. Including wizard / accordion / paginated 三變體. 來源等級 B。
81. UK Mental Capacity Act 2005, §1–§4 + Mental Capacity (Amendment) Act 2019. 來源等級 A。
82. CRPD Committee. Concluding Observations on the initial report of the United Kingdom of Great Britain and Northern Ireland. CRPD/C/GBR/CO/1, 3 October 2017, §30-31. 來源等級 A。
83. Regulation (EU) 2016/679 (GDPR). Art 5(1)(a) + Art 6 + Art 7 + Art 9 + Recital 32. OJ L 119, 4 May 2016. 來源等級 A。
84. Regulation (EU) 2022/2065 (Digital Services Act), Art 25. OJ L 277, 27 October 2022. 來源等級 A。
85. Council of Europe Framework Convention on Artificial Intelligence (CETS 225), Art 4. Adopted 5 September 2024. 來源等級 A。
86. noyb (2024). GDPR Today: The state of cookie banners 6 years after GDPR. 25 May 2024. 來源等級 B。
87. CNIL. Bilan d'activité 2023. April 2024. 來源等級 B。
88. Habib, H., Pearman, S., Wang, J., Zou, Y., Acquisti, A., Cranor, L. F., Sadeh, N., & Schaub, F. (2020). "It's a Scavenger Hunt": Usability of Websites' Opt-Out and Data Deletion Choices. Proceedings of CHI 2020. 來源等級 A。
89. Gennaro, R., & Goldfeder, S. (2018). Fast Multiparty Threshold ECDSA with Fast Trustless Setup. ACM CCS 2018. 來源等級 A。
90. U.S. Department of Veterans Affairs. Login.gov and VA Health Connect: Accessibility and Adoption Report, 2024. 來源等級 B。
