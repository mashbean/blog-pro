---
title: "Civic Receipts 與證據鏈：條件可委任區的可審計工程原語"
description: "civic-proof 系列第 17 篇 (F2)。承接 article 16 (F1) §5.4 DeliberationRecord schema 與 §7.3.1 civic-action-receipt envelope，把可區分性需求落地為四個可標準化密碼學原語——SA1 SD-JWT-VC baseline 加 BBS+ 條件性高階混合策略、SA2 holder-controlled 加 qualified preservation service 雙軌保存（30 年下限對應 CRPD 給付請領訴訟時效）、SA3 對接 FRE 901(b)(9) 與 eIDAS 2024/1183 Chapter III §7-8 與台灣電子簽章法第 4/10 條的法庭可採性、SA4 透過 G_recognition^A 軟法層 5/10/15 年三段推進的跨境互認。形式骨架為 14 欄位群（含 23 leaf field）civic-action-receipt schema、V_receipt 函數 C1-C6 六道條件、定理 T1-T4。四原語對 F1 5×3 矩陣 9-✓ 與 4-△ cell 在 Z₂ 範圍內覆蓋（定理 T1）；對 Z₃-intrinsic 兩 cell（RT-ℬ ✗、AA-ℬ ✗）為密碼學原語不可達邊界（定理 T2）。CF1-CF5 反事實壓力測試含 CRPD §12 反向使用議題、台灣陸配 / 台商 / 兩岸投資人三場景在 CF4 觸發下的結構性斷裂。working thesis 與 strengthened thesis 嚴格區分；後者透過 crypto-agility by design、第三方 trusted preservation service 對接、G_recognition^A 多軌備援三大緩解 critical path 在五 CF 全觸發下保留核心功能。"
pubDate: 2026-05-11
tags: ["civic-proof", "civic-receipts", "verifiable-credentials", "selective-disclosure", "SD-JWT-VC", "BBS-cryptosuite", "ZK-SNARK", "EUDI-Wallet", "long-term-preservation", "qualified-preservation-service", "eIDAS-2024-1183", "FRE-902-14", "FRE-901-b-9", "Mata-v-Avianca", "Apostille", "Hague-PIL", "CETS-225", "OECD-AI-Principles", "APEC-CBPR", "CRPD-Article-12", "supported-decision-making", "threshold-signatures", "PQC-migration", "crypto-agility", "Estonia-X-Road", "BankID", "Toeslagenaffaire", "TW-DIW", "cross-strait-recognition"]
category: "數位身分與民主理論"
aiModel: "Claude Opus 4.7"
aiPrompt: "civic-proof series 第 17 篇 F2，承接 article 16 §5.4 DeliberationRecord schema 與 §7.3.1 civic-action-receipt envelope 與 §10 預告。跨境 selective disclosure 應採 SD-JWT-VC、BBS+ 還是混合策略？civic receipts 長期保存責任如何在 holder-controlled 與第三方公證人間雙軌分配？保存時長下限 30 年（對應 CRPD 給付請領訴訟時效）如何成立？法庭可採性如何對接 US FRE 902(14) 與 eIDAS 2024/1183 Chapter III §7-8 與台灣電子簽章法第 4/10 條？跨境互認透過 G_recognition^A 軟法層（OECD AI Principles 補充指引 + CETS 225 補充協議 + Hague PIL e-Apostille extension）5-10-15 年三段如何階段化推進？四原語在 Z₂ 條件可委任區的覆蓋邊界與 Z₃-intrinsic 不可達結構為何？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-11-civic-receipts-provenance"
aiGeneratedDate: 2026-05-11
humanReviewed: false
lang: "zh-TW"
---

# 一、導論——從 article 16 (F1) 留下的三件未完成議題出發

civic-proof 系列至 article 16（以下簡稱 F1）已建立兩條相互依存的論證主軸。其一，supported decision-making 與 substituted decision-making 在 LLM-agent 介入後的「行為層幾乎不可區分」（F1 §5.3 W4），必須由密碼學層的工程修正（audit-by-design、chooser_signature、revocation_endpoint）拉回可區分性。其二，FTLA-Agent 四層治理在 G_recognition^A 軟法層留下時程不確定的縫隙（F1 §7.8），跨境互認非由單一條約完成。F1 §10 為此預告系列下一篇（F2）處理三件議題——跨境 selective disclosure 應採何種密碼學族、長期保存責任如何分配、法庭可採性如何對接既有電子證據規則。本文即 F2 主文。

F1 §5.4 給出 DeliberationRecord 11 欄位 schema、§7.3.1 給出 `AgentDelegationProof2026` + `AgentDelegationCapability` envelope，皆是「規範性草版」——它們指出 supported/substituted 可區分性需要哪些工程欄位，但未論述這些欄位如何在四個層次（cryptosuite 選擇、長期保存、法庭可採性、跨境互認）逐次落地、彼此之間又構成何種依賴鏈。本文的工作即此落地。

本文核心命題（working thesis）採如下形式——civic receipts 是條件可委任區 Z₂ 中 supported/substituted 可區分性的密碼學承載；落地需四原語——(1) baseline SD-JWT-VC 加上條件性高階 BBS+ Cryptosuite，由 verifier policy 反向約束 issuer 與 holder 選擇的混合策略；(2) holder-controlled 為主搭配第三方 qualified preservation service 加密 backup 的雙軌保存設計，保存時長下限為 30 年（為「分析性建議數」而非「規範性硬約束」）；(3) 法庭可採性對接 US FRE 901(b)(9)、eIDAS Regulation 2024/1183 Chapter III §7-8（前身為 910/2014 Art 25 + Art 35）、台灣電子簽章法第 4/10 條，跨境承認透過 Hague e-APP；(4) 跨境互認透過 G_recognition^A 軟法層 5/10/15 年三段推進（OECD AI Principles 補充指引、CETS 225 補充協議、Hague PIL e-APP digital identity extension）。四原語構成 verification 依賴的線性閉包 SA1 → SA2 → SA3 → SA4，同時系統設計層存在 SA4 → SA1 反饋環路。

本文章節安排如下。

第二章交代概念基礎並接合 F1，含 W3C VCDM v2.0、IETF SD-JWT-VC、W3C BBS CRD、EUDI ARF rolling iteration、eIDAS 條號重排五項標準化進度修訂，並建立 Z₂ / Z₃ 邊界與 ESI / ediscovery 區分。

第三章給出形式骨架——civic-action-receipt 14 欄位 data model、四原語在 F1 5×3 矩陣的對應 cell、receipt-validity 函數 V_receipt 的完整形式定義，含 C1-C6 六道條件、定理 T1-T4，並指出 critical path 與 SA4 → SA1 反饋環路。

第四至第七章依序展開四個原語。第四章處理 SD-JWT-VC / BBS+ / ZK-SNARK 三族比較、verifier policy 三時點決策（issuance / presentation / verification）、hardware key custody 工程現實、PQC migration 與 30 年保存的張力。第五章處理 30 年下限的三窗口推導（CRPD 給付請領訴訟時效 + 失能監護宣告爭議 + Toeslagenaffaire 級事後追溯期）、holder-controlled 三場景失效模式、設計 A / B / C 三種雙軌方案比較。第六章處理三法域可採性對接（FRE 901(b)(9)、eIDAS Chapter III §7-8、電子簽章法 §4-§10）、ESI 類比限制、Mata v Avianca 負面先例、Daubert 五因子在 BBS+ 與 ZK-SNARK 上的對位、hearsay 三條應對路徑、Apostille 公私文書區分破口。第七章處理 5/10/15 年三段時程的條件性估計、軟法歷史轉化軌跡、非 OECD 並行軌。

第八章以六個案例做 process tracing。

第九章是反事實壓力測試，含 CF1-CF5 五個 counterfactual、likelihood × impact 矩陣、CRPD §12 反向使用議題、CF4 對台灣陸配 / 台商 / 兩岸投資人三場景的特殊衝擊、working vs strengthened thesis 存活評估、三大緩解 critical path。

第十章接合系列 forward-links 並預告 F3。

第十一章揭示誠實邊界、列出 41 條 open questions（O1-O41）、給出 fact-check 階段高風險主張查證義務清單。

第十二章給出條件性學術結論——四原語落地、跨境治理時間階段化、working vs strengthened thesis 嚴格區分，含對 CRPD Committee 的回應立場與對三組目標讀者（工程社群、政策研究者、CRPD 學者）的分立建議。

---

# 二、概念基礎與 article 16 forward-link 承接

## 2.1 civic-action-receipt 不是 VC Presentation 本身

W3C Verifiable Credentials Data Model v2.0 已於 2025-05-15 升為 Recommendation<sup>1</sup>，其 §4.12 處理 securing mechanisms（含 JOSE、COSE、SD-JWT、Data Integrity 四種），§5.7 處理 zero-knowledge proofs，§7.1 給出 verification algorithm。VC Presentation（VP）是 holder 在出示時刻由其私鑰簽署、向 verifier 揭露部分屬性的訊息物件。civic-action-receipt 與 VP 的形式位置不同——VP 是 `Subject → Verifier` 方向的 disclosure 物件，receipt 是 `(Subject, Verifier) → Audit` 方向的 commitment 物件，由 verifier 端產出、holder 端與 audit trail 端各保留一份。本文採此區分（SA0 §1 修訂），與 ISO/IEC 18013-5:2021 §9.1.2.4 Mobile Security Object 的 verifier-side dual 結構近，但承載資訊更豐富——含 deliberation hash、agent delegation envelope、revocation pointer、jurisdictional profile。

混淆 VP 與 receipt 會帶來兩個論證代價。其一，W3C VCDM v2.0 §5.7 對 ZKP 採「合成自原始 verifiable credentials 但不含原始資料」的表述；倘若把 receipt 視為 VP，audit trail 對「可被 court order 解開的 content_hash 對位」這條需求即無從成立，這正面違反 CRPD General Comment No. 1 §29「regular review by a competent, independent and impartial authority」的程序要求<sup>2</sup>。其二，US Federal Rules of Evidence 902(14) 的 `process of digital identification` 在 Advisory Committee Note 中以「hash value comparison」為典型例<sup>3</sup>；VP 本身不含 hash 對位欄位，receipt 必須含 `content_hash` 才能符合 902(14) 的工程化條件。

## 2.2 standardisation timeline 的四項修訂

本文撰寫時點為 2026-05-11，與 intake 階段假設的 known_sources 已有四項落差，須先行修訂。

第一，W3C VCDM v2.0 已升 Recommendation；引用條號從 WD 階段的 §5.8 / §6.3.1 改為 §4.12 / §5.7 / §7.1<sup>1</sup>。此處須對「IETF SD-JWT-VC」與「W3C VC v2.0 內的 SD-JWT secured credentials profile」兩條獨立標準軌道做顯式區分——IETF SD-JWT-VC（OAuth WG draft-16）為 credential format，定義 issuer/holder/verifier 三方之 token 結構、KB-JWT 與 selective disclosure 機制；W3C VCDM v2.0 §6.3.3 JWT secured credentials 則為 securing mechanism，提供 W3C VCDM 之內承載 JWT secured credentials 的格式對位。兩者透過 §6.3.3 整合，但規範主體與維護組織獨立，本文後續所有 SD-JWT-VC 相關討論均以 IETF 軌道為主、以 W3C §6.3.3 為承載介面。第二，IETF SD-JWT-VC 已推進至 draft-16（2026-04-24），cnf claim（§2.2.2.2）與 KB-JWT（§2.4）已穩定，selective disclosure 機制承接 RFC 9901<sup>4</sup><sup>5</sup>。第三，W3C Data Integrity BBS Cryptosuites v1.0 已於 2026-04-07 進入 Candidate Recommendation Draft（CRD）<sup>6</sup>，IRTF CFRG `draft-irtf-cfrg-bbs-signatures-07` 於 2025-08 通過 Last Call<sup>7</sup>；W3C VC WG 2025-10 charter renewal 的字眼為「target Candidate Recommendation Q3 2026, Recommendation best-effort Q4 2026 / Q1 2027」<sup>8</sup>。換言之，BBS Cryptosuite 在本文發表時點仍是 CRD 而非 Recommendation，本文對「BBS+ 為高階」的分層採條件成立論述。第四，EUDI Wallet ARF 自 2025-Q4 起改採 Cooperation Group rolling iteration（reference 2025-12-02 meeting）<sup>9</sup>，引用須改為「EUDI ARF 2025-12 iteration」而非 v1.5 靜態版號。

## 2.3 eIDAS 條號重排

Regulation (EU) 2024/1183 修正 eIDAS（前身 Regulation (EU) 910/2014），將原 Art 34 qualified preservation service、Art 35 qualified electronic signature 證據效力等條文重排為 Chapter III Section 7（preservation）與 Section 8（signature evidentiary effect）<sup>10</sup>。本文引用 eIDAS 處皆改採新編號，並於首次出現處附舊條對應，避免讀者誤引舊條號。

## 2.4 與 F1 / A15 / A14 / A8 的 forward-link 承接

F1 §5.4 已將 audit-by-design、chooser_signature、revocation_endpoint 確立為三項工程修正；F1 §7.3.1 給出 `AgentDelegationProof2026` + `AgentDelegationCapability` 雙簽結構；F1 §10 預告 F2 處理跨境 SD、長期保存、法庭可採性三議題<sup>11</sup>。F2 在此延續，不重複論證 supported/substituted 區分的規範必要性（已由 F1 §5.4 與 CRPD GC1 §26-29 承擔）。

article 15 §6.2 已建立「wallet 三重預設」（個人擁有 + 個人識別 + 個人私鑰）的退化路徑——三項預設無法同時成立，否則 supported 將退化為 substituted<sup>12</sup>。本文 §3.1 schema 設計直接承接此論證：`preservation_layer` 鬆綁「個人擁有」、`coexistentSubjects` 透過 DID extension 鬆綁「個人識別」、`chooser_signature` 與 `agent_delegation_capability_hash` 雙簽結構鬆綁「個人私鑰」。article 14 §Q10a/Q10b 已將 authority transfer 與 accountability allocation 拆為密碼學層與跨境層兩個歸責問題<sup>13</sup>，本文 §3.2 將 Q10a 對應到 SA1 + SA3、Q10b 對應到 SA3 + SA4 兩條 critical path。article 8 已建立 FTLA 四層治理<sup>14</sup>，本文 §7 將 G_recognition^A 拆為三段時程。

## 2.5 holder-controlled 並非 self-sovereign

接續 article 15 §6.2，本文採如下用語約定：self-sovereign 是身分學派立場（reject 任何第三方對 identity assertion 的中介）；holder-controlled 是 custody 設計（holder 在 capacity 內主導，但允許 fallback）。前者已被 article 15 §6.2 證偽——三重預設不可同時成立。本文後續 §5「雙軌保存」即採 holder-controlled 為主、QPSP 為 backup 的光譜化方案，不滑入 self-sovereign maximalism。

## 2.6 Z₂ 條件可委任區與 Z₃ 常駐型不可委任的邊界

F1 §3.3 已建立 Z₁（永久可委任）/ Z₂（條件可委任）/ Z₃（常駐型不可委任）三區帶分劃；civic-action-receipt 工程的作用範圍止於 Z₂，超出 Z₂ 進入 Z₃ 的兩個 cell（RT-ℬ ✗ 責任承擔需 first-personal mens rea、AA-ℬ ✗ contestation bearer 需 Pettit active-stance）為定理 T2 不可達。本文於此明示——任何宣稱 civic-action-receipt 可「解決 AI 代理根本責任問題」的論述都違反此邊界。具體影響——agent-mediated receipts 在 RT-ℬ ✗ 或 AA-ℬ ✗ 範圍內的 admissibility 嘗試在法庭層面會遇到 Mata v Avianca（負面先例）式高度警戒；本文 §6.4 於此處理。

## 2.7 ESI 與 ediscovery 的區分

民事程序電子證據（Electronically Stored Information, ESI）與 electronic discovery（ediscovery）在本文須嚴格區分。ESI 是「電子形式存在的證據資料」之客體概念，由 FRE 901、902、803 與台灣民訴法 363、363-1 等程序規則處理可採性與真偽問題。ediscovery 是「在訴訟前置與訴訟中蒐集、保存、揭露電子證據」之程序過程，由 FRCP 26(f)、34(b)、Sedona Principles 等處理蒐集程序之合理性與比例性。civic-action-receipt 主要對位 ESI 客體層而非 ediscovery 程序層——receipts 在生成時點已是 holder + verifier 共有結構，不存在傳統 ediscovery 中 producing party 與 requesting party 對「應否揭露」「揭露範圍」的爭執。本文 §6.3 ESI 類比表的限制即此區分的工程表現——Sedona Principles 6（producing party 最熟悉自己資料）對 holder 在 receipt-set 揭露範圍的控制權有結構同構，但 Sedona Principles 11（不要求 metadata 全披露）對 receipt 的 chooser_signature 詳細 trace 揭露邊界須另案討論。

---

# 三、形式骨架——civic-action-receipt schema（14 個欄位群 / 23 個 leaf field）、四原語對應 cell、V_receipt 函數

## 3.1 civic-action-receipt data model（14 個欄位群、含巢狀展開共 23 個 leaf field）

把 F1 §5.4 DeliberationRecord（11 個欄位群）與 §7.3.1 enabling envelope（`AgentDelegationProof2026` + `AgentDelegationCapability`）合併，得到本文 schema。為避免「欄位數」歧義，本文採兩層計數規約——「欄位群（field group）」為 schema 最上層命名單元，「leaf field」為展開至基本型別（UUID、ISO8601、Enum、Hash 等）之終端條目。合併後 schema 為 14 個欄位群，巢狀展開後合計約 23 個 leaf field。後續 §3.5 與 §10.1 對 F1 接合敘述中之「14」皆指欄位群層級；schema block 中可見之 leaf 數對位 23。標註「DR」者繼承自 DeliberationRecord、「ENV」者繼承自 §7.3.1 envelope、「F2」者為本文新增。

```
civic-action-receipt {
  // Core identity & temporal block
  receipt_id:                     UUID                          // F2
  decision_id:                    UUID                          // DR
  timestamp_proposed:             ISO8601                       // DR
  timestamp_decided:              ISO8601                       // DR
  timestamp_presented:            ISO8601                       // F2

  // Party identifiers
  subject_did:                    DID                           // DR
  supporter_did:                  DID | null                    // DR
  agent_did:                      DID | null                    // ENV
  verifier_did:                   DID                           // F2

  // Deliberation evidence
  options_presented_hash:         OptionHashTree                // DR (升 Merkle root)
  option_chosen_hash:             OptionHash                    // DR
  comprehension_attestation_hash: HashOfVC | null               // DR

  // Cryptographic binding (SA1)
  chooser_signature:              Signature                     // DR (subject 私鑰簽)
  holder_binding_method:          Enum {sd-jwt-kbjwt, bbs-2023-proof, mdoc-deviceauth, jose-cose}
  cryptosuite_id:                 URI                           // F2
  agent_delegation_proof:         Proof | null                  // ENV
  agent_delegation_capability_hash: HashOfVC | null             // ENV

  // Preservation (SA2)
  preservation_layer:             Enum {holder-controlled, qualified-preservation-service, dual}
  preservation_endpoint:          URL | null                    // F2
  retention_floor:                Duration                      // F2 (建議 ≥ 30 年)
  timestamp_token:                RFC3161Token | null           // F2

  // Admissibility (SA3)
  content_hash:                   Hash                          // F2
  qualified_person_attestation:   VC | null                     // F2
  jurisdictional_profile:         Enum {us-fre-901b9, eu-eidas-art25-35, tw-esign-art4-10, other}

  // Recognition (SA4)
  recognition_chain:              List<RecognitionAnchor>       // F2
  cross_border_envelope:          Envelope | null               // F2

  // Revocation & lifecycle
  revocation_window:              Duration                      // DR
  revocation_endpoint:            URL                           // DR
  audit_release_policy:           Policy                        // F2
}
```

在欄位群層級，繼承自 DR / ENV 共 11 群、新增 9 群（合計 14 群為「合併後欄位群總數」，計數時將部分跨原語複用欄位以最強歸屬計）；在 leaf field 層級，合計約 23 個。比例上欄位群為 1.22 比 1，與 leaf 層級展開後的工程化條目數對位一致；F2 是 F1 的工程落地，並非另起新框。設計四要點如下。

其一，`chooser_signature` 仍是 supported / substituted 區分的密碼學基石，直接繼承 F1 §5.4 規範。其二，`holder_binding_method` 採 enum，保留 SD-JWT-VC（draft-16）、BBS-2023 cryptosuite（CRD）、ISO/IEC 18013-5 mdoc、JOSE/COSE 四條路徑並行的可能。其三，`agent_delegation_*` 兩欄位在「agent 未介入」場景為 null，是 RT-ℬ ✗ 與 AA-ℬ ✗ 兩 cell 在 Z₂ 內合法表現的密碼學區分基礎。其四，`audit_release_policy` 是「hash 與內容分離」設計的政策載體，對齊 EDPB Statement 1/2024 對 EUDI Wallet 的 holder-controlled audit 要求<sup>15</sup>。

## 3.2 四原語在 F1 5×3 矩陣的對應 cell

F1 §3.1 矩陣以 Tomasev 五件（AT, RT, AA, BS, TC）為 i 軸、civic-proof 三元（𝒩, ℱ, ℬ）為 j 軸，15 cell 中有 9 ✓、4 △、2 ✗<sup>11</sup>。F2 四原語 SA1-SA4 分別錨定下列 cell（★ 為主要錨定、☆ 為次要支撐）：

| cell | 𝒩（規範承載） | ℱ（工程可審計） | ℬ（哲學基礎） |
|---|---|---|---|
| AT 權威移轉 | SA1 ★ + SA4 ☆ | SA1 ★ | （F1 ✓） |
| RT 責任移轉 | SA3 ★ | SA2 ★ + SA3 ☆ | ✗（不可克服） |
| AA 課責分配 | SA4 ★ + SA3 ☆ | SA2 ★ + SA3 ★ | ✗（不可克服） |
| BS 邊界設定 | （F1 ✓） | SA1 ☆ + SA2 ☆ | （F1 △） |
| TC 信任校準 | SA4 ☆ | SA1 ★ + SA3 ☆ | （F1 △） |

定理 T1（Z₂ 包覆引理）：對矩陣中所有 9 個 ✓ cell 與 4 個 △ cell，存在 SA1-SA4 的某個子集合 σ ⊆ {SA1, SA2, SA3, SA4} 使該 cell 的 P_degrade（F1 §3.2 概率退化函數）被壓制在 θ₂ ≈ 0.7 之下。F2 四原語對 F1 §3.3 定義的 Z₂ 區帶是覆蓋的。

定理 T2（Z₃-intrinsic 不可達引理）：對 RT-ℬ ✗ 與 AA-ℬ ✗ 兩個 cell，不存在 σ 使 P_degrade ≤ θ₂。RT-ℬ ✗ 是「責任承擔需 first-personal mens rea」的存在論失能，AA-ℬ ✗ 是「contestation bearer 需 Pettit active-stance」的存在論失能。密碼學原語不變更存在論結構。T2 構成 F2 的誠實邊界硬條件——任何宣稱 civic-action-receipt 可「解決 AI 代理根本責任問題」的論述都違反此引理。

## 3.3 critical path 與反饋環路

四原語構成驗證依賴的線性閉包：

```
SA1 ─[D1]─▶ SA2 ─[D2]─▶ SA3 ─[D3]─▶ SA4
(cryptosuite) (preservation) (admissibility) (recognition)
```

依賴 D1（SA1 → SA2）的形式條件——SA2 的長期保存有意義（preservation 對 30 年後的 verifier 仍可驗證），iff SA1 選擇的 cryptosuite 的 hash function 與 signature algorithm 在 retention_floor 期間內未被破解，或有 qualified preservation service 執行 timestamp 重簽以延長 trust：

```
∀ r : V_preservation(r) ⇒ Crypto_Robust(r.cryptosuite_id, r.retention_floor)
                          ∨ TimestampReseal(r.timestamp_token, r.retention_floor)
```

依賴 D2（SA2 → SA3）的形式條件——SA3 的法庭可採性要求 receipt 在訴訟發生時可被「再現 + 驗證」。SA2 是 SA3 的前置條件，若 receipt 在訴訟提起前已被竄改或遺失，FRE 902(14) 的 `process of digital identification` 不成立：

```
∀ r : V_admissibility(r) ⇒ V_preservation(r) ∧ ContentHashMatch(r.content_hash, retrieved_content)
                            ∧ QualifiedPersonCertification(r.qualified_person_attestation)
```

依賴 D3（SA3 → SA4）的形式條件——SA4 的跨境互認要求 receipt 在來源法域 J₁ 已具備 admissibility，且目標法域 J₂ 透過 recognition mechanism 承認 J₁ 的 admissibility：

```
∀ r, J₁, J₂ : V_recognition(r, J₁, J₂) ⇒ V_admissibility(r) under J₁
                                        ∧ Recognize(J₂, J₁, r.jurisdictional_profile)
                                        ∧ ∃ ra ∈ r.recognition_chain : ra.target = J₂
```

反饋環路 SA4 → SA1 同樣存在——`jurisdictional_profile` 反向約束 `cryptosuite_id` 的可選集合（某些法域只認 NIST-approved algorithm，BBS+ over BLS12-381 不在 FIPS 186-5 範圍）。本文於主文標明此反饋環路為「設計階段約束」，不改變驗證階段順序；其形式語義（lattice over `(cryptosuite, jurisdiction)` 對）歸入第十一章 open questions O1。

## 3.4 receipt-validity 函數 V_receipt 的完整形式定義

```
V_receipt : Receipt → Bool

V_receipt(r) ≜
  // C1 — cryptosuite robustness
  ( r.cryptosuite_id ∈ AcceptedSuites(τ) ∧
    SigVerify(r.chooser_signature, r.subject_did) = true ∧
    HolderBind(r.holder_binding_method, r.cryptosuite_id) = true
  ) ∧
  // C2 — agent-vs-holder distinguishability
  ( (r.agent_did = null) ∨
    ( r.agent_delegation_proof ≠ null ∧
      VC_Verify(r.agent_delegation_capability_hash, r.subject_did) = true
    )
  ) ∧
  // C3 — preservation
  ( r.preservation_layer ∈ {holder-controlled, qualified-preservation-service, dual} ∧
    (now − r.timestamp_decided) ≤ r.retention_floor ∧
    (r.preservation_layer ≠ holder-controlled → r.timestamp_token ≠ null)
  ) ∧
  // C4 — admissibility
  ( ContentHashMatch(r.content_hash, retrieved_content) ∧
    ( (r.jurisdictional_profile = us-fre-901b9 → r.qualified_person_attestation ≠ null)
      ∧ (r.jurisdictional_profile = eu-eidas-art25-35 → r.timestamp_token ≠ null)
      ∧ (r.jurisdictional_profile = tw-esign-art4-10 → r.chooser_signature 符合電子簽章法 §4)
    )
  ) ∧
  // C5 — recognition
  ( ∀ J₂ ∈ targetJurisdictions(r) :
      ∃ ra ∈ r.recognition_chain : ra.target = J₂ ∧ Anchor_Valid(ra)
  ) ∧
  // C6 — revocability
  ( r.revocation_window ≠ null ∧ r.revocation_endpoint 可達 ∧
    Reachable(r.audit_release_policy) under {subject, court_order}
  )
```

τ 為 receipt 被驗證的當下時間；`AcceptedSuites(τ)` 是 τ 時點仍未被破解且仍在 SDO 認可清單內的 cryptosuite 集合。`AcceptedSuites(τ)` 的演化規則（誰、依何程序維護這個集合）屬 SDO 機制設計，歸 G_industry^A 層，本文不展開。

定理 T3（critical path 串接定理）：

```
V_receipt(r) ⇔ V_cryptosuite(r) ∧ V_preservation(r) ∧ V_admissibility(r) ∧ V_recognition(r)
            ⇔ Crypto_Robust(r) ∧ Pres_Intact(r) ∧ Admis_Cert(r) ∧ Recog_Anchor(r)
```

定理 T4（V_receipt 與 F1 三層可區分性的對應）：V_receipt(r) 蘊涵 supported / substituted 可區分性，可拆解為 ex_ante_deliberation(r) ∧ ex_post_reversibility(r) ∧ decision_trace(r) 三個子句，分別由 C1+C2、C6、C3+C4+C5 承擔。此定理把 F1 §5.3 工程可區分性條件「翻譯」為 F2 receipt-validity 函數的子句結構，是 F2 接合 F1 的核心橋接。

## 3.5 反論——schema 從 11 個欄位群擴張至 14 個欄位群（含 23 個 leaf field）是否過度膨脹？

對於 schema 從 DeliberationRecord 11 個欄位群擴張至 14 個欄位群（leaf 層級約 23 條）的「膨脹」反論，本文回應如下。其一，比例核查——欄位群層級繼承自 F1 §5.4 / §7.3.1 的為 11、F2 新增為 9（部分欄位群可分組到多原語，計數以最強歸屬計）；leaf 層級展開後合計約 23 條，與欄位群層級的 1.22：1 比例對位一致，F2 是 F1 的工程落地、非另起新框。其二，每個新增欄位都對應一個具體 sub-arg 工程需求——`cryptosuite_id` 對應 SA1 mixed strategy 三時點協商、`preservation_layer` 與 `retention_floor` 對應 SA2 雙軌設計、`content_hash` 與 `qualified_person_attestation` 對應 SA3 FRE 901(b)(9) 對接、`jurisdictional_profile` 對應 SA3 三法域分軌、`recognition_chain` 與 `cross_border_envelope` 對應 SA4 軟法層三段、`audit_release_policy` 對應 GDPR Art 5(1)(b)(c) 比例性原則與 EDPB Statement 1/2024<sup>15</sup>。其三，schema 採 enum 而非 free-text 約束 `holder_binding_method` 與 `jurisdictional_profile`，保留語義邊界、避免實作偏移。schema 不過度膨脹的另一個工程指標——對 ISO/IEC 23220 系列（mobile eID architecture, issuing / wallet / verification 三方架構）的 cross-format 承載完整——同一 receipt 在 SD-JWT-VC、BBS-2023、ISO 18013-5 mdoc、JOSE/COSE 四條 binding 路徑下都可生成，不要求 schema 為每條路徑單獨建版本。

---

# 四、SA1 密碼學選擇——SD-JWT-VC baseline、BBS+ 條件性高階、verifier policy 三時點決策

## 4.1 三族技術的工程現實比較

截至 2026-Q1，selective disclosure on Verifiable Credentials 的工程版圖分為三族：SD-JWT-VC 系列、BBS+ Cryptosuite 系列、ZK-SNARK on VC 系列。三族在規範成熟度、簽章與證明大小、驗證成本、unlinkability、quantum-safe 路徑、hardware-backed key custody 支援上有實質差異。

SD-JWT-VC 屬於 IETF OAuth WG 軌道；底層 SD-JWT 已於 2025-04 達 Proposed Standard（RFC 9901）<sup>5</sup>，SD-JWT-VC 已推進至 draft-16（2026-04-24）<sup>4</sup>。EUDI Wallet ARF 2025-12 iteration §2.3.1 明文要求 wallet 必須支援 SD-JWT-VC（MUST）<sup>9</sup>，屬於 baseline 中的 baseline。技術特徵——簽章方案是 JOSE 簽章（ES256 / EdDSA / RS256），不支援 unlinkability（每次出示時 issuer signature 相同，verifier 可 correlate），但 hardware key custody 全面支援（iOS Secure Enclave、Android StrongBox、Windows TPM、HSM）<sup>16</sup>，PQC 遷移路徑直接（換 ML-DSA / Falcon 即可）。

BBS+ Cryptosuite 屬於 W3C Verifiable Credentials Working Group 軌道；IRTF CFRG draft-irtf-cfrg-bbs-signatures-07 已於 2025-08 通過 Last Call<sup>7</sup>，W3C `vc-di-bbs` 已於 2026-04-07 進入 Candidate Recommendation Draft<sup>6</sup>。W3C VC WG 2025-10 charter renewal 對 Recommendation 時程的字眼為「best-effort Q4 2026 / Q1 2027」<sup>8</sup>。技術特徵——BBS+ over BLS12-381 pairing-friendly curve，原生支援 multi-message selective disclosure 與 unlinkable proof generation；presentation proof 不可在多次出示間 correlate。但 hardware key isolation 在 Apple Secure Enclave、Android StrongBox、Windows TPM 皆不原生支援（Secure Enclave 僅支援 P-256），須在 application memory 執行 BBS+ prover，holder binding 的硬體錨點較弱<sup>17</sup>。BLS12-381 pairing 在量子電腦下不安全，目前無近期 PQC 替代路徑（lattice-based unlinkable signature 仍在 IACR ePrint 研究級階段<sup>18</sup>）。

ZK-SNARK on VC 屬於廠商實作為主軌道；W3C `VC Data Integrity ZKP Cryptosuites Explorer Note`（2024-09）明文標示不在 Recommendation track，僅作為設計空間探索<sup>19</sup>。實作端 Polygon ID / Privado ID 使用 Iden3 protocol（Groth16 + Circom），Anon Aadhaar 使用 RSA + Groth16，World ID 使用 Semaphore<sup>20</sup>。證明生成成本在複雜 predicate 場景上手機上為 5–300 秒；驗證成本 3–50ms（視證明系統）。ZK-SNARK 在 civic-action-receipt 場景定位為「complex predicate 專用之 advanced narrow profile」，不替代 SD-JWT-VC 或 BBS+ 作為 baseline。

## 4.2 mixed strategy 是 verifier policy 反向約束結構

把「mixed strategy」翻成「混合方案」並當作中性 marketing 詞會錯失工程結構。本文採如下定位——mixed strategy 是 verifier policy 反向約束 issuer 與 holder 選擇的工程結構，並由三個獨立決策時點承擔。

(a) issuance-time decision——issuer 在發 credential 時選擇 cryptosuite，一張 credential 用一族；
(b) presentation-time decision——holder 從 wallet 多份 credentials 中挑選符合 verifier policy 的呈現方式；
(c) verification-time decision——verifier 接受或拒絕特定 cryptosuite，並向 holder 回傳 fallback 提示。

換言之，mixed strategy 並非「同一份 credential 同時用三族簽章」，而是「issuer/holder/verifier 三方在不同時點各自選 cryptosuite，整個 receipt 鏈條由 verifier policy 反向約束 issuer 與 holder 的選擇」。協商通道為 OpenID for Verifiable Presentations（OpenID4VP）draft-23 的 `client_metadata.vp_formats_supported` 機制<sup>21</sup>，搭配 DIF Presentation Exchange v2.1 的 `input_descriptors[].format` 與 `submission_requirements`<sup>22</sup>。draft-24 預計 2026 Q2 完成；本文以 draft-23 為穩定錨點。

## 4.3 三族對照表與 verifier-policy 三時點

| 維度 | SD-JWT-VC | BBS+ Cryptosuite | ZK-SNARK on VC |
|---|---|---|---|
| 規範成熟度（2026-05） | RFC 9901 + draft-16 | W3C CRD（2026-04-07） | Explorer Note，無 Rec track |
| 簽章/證明大小 | 600–800 bytes | 500–1200 bytes | 200 B–4 KB |
| 驗證成本（mobile） | ~1ms | ~50–150ms | ~3–50ms |
| 證明生成成本 | 即時 | 100–500ms | 5–300 秒 |
| 撤銷支援 | Status List 2021 | Accumulator + SL | Sparse Merkle |
| unlinkability | 無 | 原生 | 原生（更強） |
| Predicate proofs | 屬性篩選 | range / set | 任意電路 |
| Quantum-safe 路徑 | 換 JOSE alg | 無近期路徑 | STARK 過渡 |
| iOS Secure Enclave | 原生 | 不支援 | 不支援 |
| Android StrongBox | 原生 | 不支援 | 不支援 |
| EUDI ARF 2025-12 地位 | MUST baseline | optional advanced | 未列入 |

## 4.4 規範性硬約束與條件成立的分層

「BBS+ 為高階」採規範性的、條件成立的分層論述（非當下既成事實）。條件為 W3C BBS Cryptosuite 達 Recommendation。本文採如下 fallback 表述——若 2027 Q1 前 W3C 未發布 BBS Cryptosuite Recommendation，baseline 退回到只用 SD-JWT-VC，BBS+ 分層推遲到 2028。EU Wallet Consortium Phase 2 部署統計顯示，dual-issuance 策略（issuer 端同時發 SD-JWT-VC baseline 與 BBS+ presentation-ready credential，視 verifier 支援度漸進切換）已在 DE、NL、SE 三個成員國試行<sup>23</sup>。

CRPD GC1 §29 的 audit trail 義務在密碼學層的具體履行路徑並非唯一，BBS+ unlinkability 是其中之一而非唯一<sup>2</sup>。F1 §5.4 建立的「具名 trigger / 匿名 reception 兩段區分」意味著 unlinkability 只在 reception 端條件需要——civic action 在 trigger 端往往具名（如殘障人士透過代理人聯署一個公民倡議），在 reception 端（後續多 verifier 反覆出示同一張 civic credential）才有 unlinkability 需求；對 receipt 已具名場景（如 EU EUDI Wallet 在公務員身分驗證），unlinkability 確實次要。

## 4.5 對 SA2–SA4 的接合預告

SA1 cryptosuite 選擇對下游三原語都產生工程約束。其一，SD-JWT-VC 的 JOSE 簽章在 30 年內可重新驗證（issuer 公鑰可取即可），BBS+ 在 BLS12-381 公鑰的 30 年保存上有額外要求（accumulator 狀態須持續維護）；SA2 需在「holder-controlled + 第三方公證人」雙軌設計中對應 cryptosuite 差異。其二，US FRE 902(14) 自證真實性對「數位簽章」的承認以 NIST-approved algorithm 為前提——SD-JWT-VC 的 ES256 / EdDSA 屬於 NIST-approved，BBS+ over BLS12-381 不在 FIPS 186-5 範圍，902(14) 自證真實對 BBS+ 屬未確定（無判例）<sup>24</sup>。SA3 因此改走 FRE 901(b)(9)「process or system 描述 + accuracy 證明」較重路徑。其三，mixed strategy 三層分工對應 G_recognition^A 5-10-15 年三段——5 年期 SD-JWT-VC、10 年期 BBS+、15 年期含 ZK-SNARK 的完整 stack。

## 4.6 hardware key custody 的工程現實

BBS+ 在 mobile wallet 上無 hardware key isolation 是工程上的根本限制。Apple iOS Secure Enclave 截至 2025 Q2 公開技術文件僅支援 P-256（NIST secp256r1）<sup>16</sup>，Google Android StrongBox 截至 2025 Q2 公開文件同樣以 P-256 為主要支援曲線<sup>17</sup>，Windows TPM 2.0 標準算法清單以 NIST 認證之 ECC 與 RSA 為主，BLS12-381 不在原生支援範圍。BBS+ over BLS12-381 必須在 application memory 中執行 prover——這意味私鑰在執行期間離開 hardware-protected memory，holder binding 的硬體錨點較 SD-JWT-VC 弱。

工程上的緩解路徑有三條。其一，ARM TrustZone-based BBS+ prover——把 prover 移入 TrustZone 的 Trusted Execution Environment（TEE）內執行；Bhattacharya et al. 2025 USENIX Security 給出初步實作，效能折扣 3-5 倍但功能可行<sup>17</sup>。其二，部分高階 HSM（Thales Luna 7、Utimaco SecurityServer Se Gen2）提供 BLS12-381 加速模組，屬選購功能；企業端 verifier 可採此路徑，但 holder 端 mobile wallet 不適用。其三，MPC（Multi-Party Computation）分散 BBS+ secret key——holder + wallet provider 共同持有 key share、共同產生簽章；此路徑與 holder-controlled 預設衝突，被本文 §5.3 設計 B 等同對待，不採。三條緩解路徑中，TrustZone 是最有承載力的工程方向，歸 §11 open question O9。

verifier 端 OpenID4VP 的 conformance 測試在 EUDI Wallet conformance suite（Sphereon、Mattr、IDnow 合作開發）中尚無「mixed cryptosuite negotiation」案例。EWC Phase 2 計劃 2026 Q3 補上<sup>23</sup>，但目前是 manual interop testing。SA1 thesis 在 conformance 路徑成熟前都帶實作不確定性，這是 strengthened thesis 在 §11 誠實邊界明示的工程現實。

## 4.7 PQC migration 與 30 年保存的張力

PQC migration 是 SA1 cryptosuite 選擇與 SA2 30 年保存窗口之間最深的張力。本文於此明示誠實邊界（對應 §11 第六項）。NIST FIPS 203（ML-KEM, Kyber）、FIPS 204（ML-DSA, Dilithium）、FIPS 205（SLH-DSA, SPHINCS+）已於 2024-08 完成標準化<sup>78</sup><sup>79</sup><sup>80</sup>；NSA CNSA 2.0（2022, 2024 update）對國家安全系統設定 2030-2035 PQC 遷移時程<sup>76</sup>。Mosca's theorem 指出——若資訊保存年限與 PQC migration 時程之和超過第一台 cryptographically relevant quantum computer 出現年限，則該資訊已不安全<sup>77</sup>。對 civic receipts 而言，30 年保存年限加上 5-10 年 PQC migration 時程為 35-40 年；若 quantum computer 在 2035-2045 出現（主流估計區間），則 2026-2035 期間生成的 civic receipts 在 2045-2055 期間的 verification 不安全。

工程上的緩解路徑有三條。其一，crypto-agility by design——W3C VCDM v2.0 已預留 cryptosuite 抽象層（securingMechanism 概念）<sup>1</sup>，IETF PQUIP WG 2024-2025 drafts 對 hybrid signing 設計提供具體路徑<sup>82</sup>，本文 §3.1 schema 的 `cryptosuite_id` 欄位即此抽象層的承載。其二，hybrid signing during transition——每個 civic receipts 同時帶傳統簽章（Ed25519）與 PQC 簽章（ML-DSA）；傳統簽章保證向後相容、PQC 簽章保證向前安全。Hybrid 期間 receipts 體積膨脹 2-3 倍，但 wallet 與 verifier 工程可承受。其三，archive re-anchoring 自動化——對長期保存（30 年）的 receipts，採 archive operator 每 5-7 年用最新 PQC hash function 對 content 重新 anchor、產生新版 chain-of-custody hash log entry；RFC 8392 CWT 與 RFC 5816 TSP 的組合可承載此設計<sup>72</sup>。BBS+ 的 PQC 替代（lattice-based unlinkable signature）目前仍在 IACR ePrint 研究級階段（Bootle et al. 2024 後續）<sup>18</sup>，是 §11 open question O8 議題。本文不主張此議題在 5 年期內可解；strengthened thesis 透過 crypto-agility 抽象層為這個未解預留承載介面。

---

# 五、SA2 長期保存——30 年下限的三窗口推導、三種雙軌設計與 holder-controlled 失效模式

## 5.1 30 年下限的三窗口推導

「30 年下限」採規範性與經驗性兩類證據的下限均衡推導（非邏輯必然性）。其推導採三個規範性窗口的最大值聚合——CRPD 給付請領訴訟時效、失能監護宣告爭議的回溯期、Toeslagenaffaire 級別事後追溯期。

第一窗口——CRPD 給付請領訴訟時效。CRPD 本文沒有對「給付請領」直接設定時效，但 Art 12 GC1 §29 要求 supported decision-making 配置「safeguards including independent review」——「independent review」蘊含「事後可審查」，事後審查窗口至少要長於請求權的時效<sup>2</sup>。各締約國對失能相關給付的時效實踐有所不同：德國《民法典》§197(1) Nr. 1 對「確定判決所確認之退休給付請求權」明文 30 年<sup>25</sup>，社會法典 SGB I §45 對「未告知」情況下可延長至同樣量級；台灣《全民健康保險法》第 71 條對溢領給付請求時效原則 2 年，但《民法》第 125 條 15 年一般時效在失能監護宣告爭議下無明文上限；英國《Mental Capacity Act 2005》框架下 LPA 終身有效；法國《Code civil》art 2224 一般時效 5 年，但部分家庭事件達 30 年<sup>26</sup>。取窗口最大值為 30 年。

第二窗口——失能監護宣告爭議的回溯期。《民法》§14 與各國對應制度允許在 capacity 重新評估時撤銷或調整既有監護宣告。台灣監護宣告平均維持 8-15 年，但極端案例（30 歲首次宣告、60 歲爭議）可達 30 年<sup>27</sup>。

第三窗口——Toeslagenaffaire 級別事後追溯期。荷蘭兒童撫養補貼追溯（2013-2019 案件）顯示行政決定的不正義可能在事發 5-8 年後才進入公共審議，受害者後續救濟仍需 5-10 年才能完成，部分家庭至 2026 仍未獲全額補償<sup>28</sup>。兒少安置決定的事後爭議窗口在 OECD 平均落在 15-25 年；極端案例（澳洲 Stolen Generations、加拿大 Sixties Scoop）達 30-50 年。本文取「Toeslagenaffaire 級別」下限為 22 年（事後 8 年發現 + 14 年救濟長尾，自行推估）。

三窗口聚合後的下限均衡落在 22-30 年區間。本文採 30 年為下限，理由有三——對齊德國退休給付實踐（現有保存基礎設施已驗證的時長）、涵蓋大多數失能監護宣告爭議、是 Toeslagenaffaire 級別事件被完整 resolve 所需的窗口。本文必須強調此下限的條件性質——它是「分析性建議數」而非「規範性硬約束」；規範性下限應引自 eIDAS implementing acts 或國內法。30 年下限亦不在所有法域普適——印度 DPDP Act 2023 對 retention 採 right to erasure 優先<sup>29</sup>、中國 PIPL 強制境內存儲且不對 disabled persons 區別處理、Aadhaar UIDAI 採 6 個月主動 + 2 年歸檔的階梯式 retention<sup>30</sup>。本文採如下限縮：30 年下限在「無聲明保留之 OECD 與 CRPD 締約國」範圍內成立。

## 5.2 holder-controlled 在三場景的失效模式

holder-only 設計把可訪問性與 holder 的認知 + 物理 + 生存 capacity 綁定，當三類 capacity 隨時間退化時，audit trail 也隨之失效。WHO 2024 估算 2023 全球失智症患者約 5,500 萬人，2050 年預估 1.39 億人；Alzheimer's Association 2025 估算美國 65+ 失智症患者約 730 萬人，其中 30% 進入 stage 5（severe cognitive decline）<sup>31</sup><sup>32</sup>。失智症 moderate-to-severe（Clinical Dementia Rating ≥ 2）後，holder 無法記住助記詞、無法判斷 phishing、無法 PIN 解鎖裝置。對採 holder-only 設計的 wallet 而言，這意味該 holder 的所有 civic receipts 在進入 CDR ≥ 2 後變為不可訪問。

第二類失效是裝置遺失、損壞、被盜或 OS 強制更新。業界實踐顯示 hardware wallet 遺失或損壞率不到 5%/年，但 OS 強制更新（如 iOS 強制升級停用舊版 Secure Enclave、Android 工廠重置覆寫 keystore）導致 wallet key 不可恢復的事件每年發生<sup>33</sup>。EUDI Wallet ARF 2025-12 iteration 對「key recovery」採 holder 須在 onboarding 時設定 recovery anchor 的設計，但 recovery anchor 本身的長期可訪問性又是另一個遞迴問題。

第三類失效是死亡後 digital estate。US Revised Uniform Fiduciary Access to Digital Assets Act (RUFADAA, 2015) 採三層 access——user's online tool（如 Google 不在線管理員）優先、user's will / trust 次之、terms-of-service 兜底<sup>34</sup>。但 RUFADAA 假設 fiduciary 能拿到 access credentials——對 self-custody wallet，credentials 即助記詞，助記詞若沒有以 continuing instructions to fiduciary 格式預先寫入信託，fiduciary 無法取得。Pew Research 2023 估計美國 65+ 立有遺囑比例約 46%，立有數位資產指示比例不到 10%<sup>35</sup>。

三個失效模式合取下，CRPD GC1 §29 的 audit trail 義務在 supported decision-making 30 年長尾內難以履行。在 §9.2 / §9.3 機制鏈滿足下（cognitive endorsement 工程缺口、長照人員代簽常態化、法定代理人空窗，外加裝置遺失與 digital estate 兩條獨立鏈），holder-only 設計觸發 audit trail 退化的條件機率為 medium-high；退化的表現是 supported 在密碼學層退化為 substituted，audit trail 同步消失，§29 義務在 30 年窗口內進入「實證上難以履行」狀態。本文 §5.3 三種雙軌設計與 §9.3 三大緩解皆為對此 likelihood 的工程化壓制路徑（非絕對句式之必然性結論）。

## 5.3 三種雙軌設計比較（A / B / C）

| 維度 | 設計 A：第三方持加密 backup | 設計 B：multi-sig escrow with court override | 設計 C：threshold signatures (t-of-n) |
|---|---|---|---|
| 第三方持有的 key material | 加密 ciphertext + 完整性證據鏈 | 一份可獨立行使之私鑰 + court override 規則 | 一份 threshold share（無 unilateral 能力）|
| 解密 / 簽署能力 | 須由 holder 提供解密鑰 | 法院命令啟動後第三方獨立行使 | 須 t-1 個其他 share 配合 |
| W3C DID Core §8.2 對應 | controller = holder；subject = holder | controller ≠ subject（第三方為 backup controller）| controller 是 t-of-n 集合 |
| holder-controlled 預設是否破壞 | 否 | 是 | 部分（取決於 t 與 n 配置）|
| CRPD §28 substituted 禁令 | 通過 | 違反 | 邊緣（須額外保證 t-1 trustees 不被同時收編）|
| 失能場景可恢復性 | 弱（仍需 holder 行使解密鑰）| 強 | 中 |
| 死亡場景可恢復性 | 中（需 estate fiduciary 拿到解密鑰）| 強 | 強 |
| 抗第三方收編 | 強 | 弱 | 中-強 |
| 工程複雜度 | 低 | 中 | 高 |
| 既有標準支援 | eIDAS 2024/1183 Chapter III §7（QPSP）| 部分支援（trust frameworks）| W3C VC + GG18 / FROST（學術）|

設計 B 直接違反 CRPD §28 對 substituted 的禁令——「court override 啟動後第三方獨立行使私鑰」即是 substituted decision-making 的技術層化身。本文不採設計 B。設計 A 與設計 C 都通過 §28 檢驗，但工程取捨不同。本文建議混合採用——設計 A 作為公證人層的 cold storage（QPSP 提供加密 backup，holder 持唯一解密鑰）、設計 C 作為 hot storage 的日常 supported decision-making 簽署（holder + supported decision-maker(s) 的 threshold signature，建議起點配置 t=2 / n=3，並開放配置空間）。

第三方公證人在雙軌設計下採「保存代理」定位（避用「中介信任」措辭）——QPSP 在設計 A 下持加密 backup 與完整性證據鏈，不持解密鑰，不替代 holder。這個區分對應 CRPD §29 audit trail 的「independent review」要求——零第三方信任本來就與 CRPD 義務矛盾，self-sovereign maximalism 已被 article 15 §6.2 證偽<sup>12</sup>。

## 5.4 案例見證——Estonia X-Road 與北歐 BankID

Estonia X-Road 自 2001 年運作至 2026 已 25 年；e-Residency 自 2014 年推出 12 年。X-Road 對 service-to-service 通訊採 chained timestamp + log replication，所有 transaction log 由 RIA（Riigi Infosüsteemi Amet）保存<sup>36</sup>。Estonia 在 2007 cyber attack 後把 log 保存基礎設施擴展至 data embassy（盧森堡 backup），證明跨境 redundancy 在實踐上可行。X-Road 至今已歷經多代密碼學參數升級，ISO 14721 OAIS 對「representation information migration」的要求<sup>37</sup>在 Estonia 實踐中得到驗證。但 Estonia 的具體 hash 函數遷移時程未在公開文獻完整紀錄，本文對「SHA-1 → SHA-256 → SHA-3 三代遷移」採「多代密碼學參數升級」的非具體描述。

挪威 BankID 對死亡持卡人的處理：家屬須提供死亡證明 + 繼承資格證明（skifteattest）+ 既存 BankID 之識別資料，BankID consortium 才會撤銷既有憑證並核發新憑證<sup>38</sup>。BankID 不保存個別 transaction 內容——它只保存 authentication / signature event 的元資料；transaction 內容由 relying parties 保存。這對應本文的「責任分層」——BankID 層只負責 key custody + audit log of signatures，具體 supported decision 內容（civic receipts 明文）保存在 relying parties。BankID 死亡救濟流程證明「第三方公證人不需直接持有私鑰」也能在死亡場景提供 audit trail 重建。但 BankID 也有失效案例——當持卡人在死亡前已撤銷既有憑證（如為了避免被詐騙），家屬無法重新核發；當 relying parties 已超過自身 retention 期限刪除 transaction 內容，audit trail 部分缺失。這警示——QPSP 保存義務必須與 relying parties 義務同步，否則 30 年下限會被最短的那一層限制。

## 5.5 反論回應——self-sovereign 與 holder-controlled 的混淆風險

反論方常以 self-sovereign identity 的「無第三方信任假設」立場反對引入 QPSP——任何第三方信任假設都退回 federated identity 模式，破壞數位主權承諾。本文於 §2.5 已建立 self-sovereign 與 holder-controlled 不是同義詞——前者是身分學派立場、後者是 custody 設計；前者已被 article 15 §6.2 三重預設論證證偽<sup>12</sup>。設計 A 的 trust assumption 是「第三方不勾結（與其他 trustees 或解密鑰持有者）」，這比 federated identity 的「第三方不濫權」要弱得多——第三方在沒有解密鑰的情況下無法獨立解密。CRPD §29 audit trail 義務本身就要求 independent review，這已蘊含「不只有 holder 自己知道」——零第三方信任本來就與 CRPD 義務矛盾。

針對「30 年時程過長、技術已過時」的工程反論。ISO 14721 OAIS 已明文 representation information migration 義務，30 年保存的工程目標為「保存可解讀的資訊」（非「保存原始 bit」），技術變遷由 QPSP 負責 migrate<sup>37</sup>；ISO/IEC 27040 §7 建議 storage media 5-10 年 re-encryption 週期（屬建議性質），30 年保存須執行 3-5 次密碼學參數升級，屬已知工程要求；eIDAS 修正後 Chapter III §7 已要求 QPSP 對保存格式變遷負義務。針對「30 年下限在 OECD 之外不普適」的批評——本文已於 §5.1 限定為「無聲明保留之 OECD 與 CRPD 締約國」，§7 並行軌已為 OECD 外覆蓋空白設計承載結構。針對「QPSP 集中化導致單點故障」的批評——緩解路徑包括跨法域 redundancy（Estonia data embassy 模式）、設計 A 加密 backup 結構（即使被收編也無法解密）、設計 C threshold signatures 在多個 trustees 之間分散風險三條。針對「自動更新義務破壞 immutability」的批評——OAIS 已建立「preservation 的工程目標是保存可解讀的資訊鏈而非原始 bit」，每次 migration 須附 provenance 證據鏈，整條 chain 仍 immutable；eIDAS 修正後 Chapter III §7 對 QPSP 義務即包含「保存證據鏈完整性 across migrations」。

---

# 六、SA3 法庭可採性——三法域對接、ESI 類比、Mata v Avianca 負面先例、Apostille 公私文書區分

## 6.1 三法域對接表

| 維度 | US (FRE) | EU (eIDAS, 修正後 2024/1183) | 台灣（電子簽章法 + 民訴）|
|---|---|---|---|
| 基礎條文 | FRE 901, 902(14), 803(6) | Reg 2024/1183 Chapter III §7-8（前身 910/2014 Art 25, 33-35）| 電子簽章法第 4/10 條；民訴法 363 / 363-1 |
| 自證真實 (self-authentication) 結構 | 902(14): qualified person certification + hash + chain of custody | QES 自動等同手寫簽章（前 Art 35 / 修正後 §8）| 第 10 條要件齊備時電子簽章等同手寫；非當然自證 |
| 演算法可靠性測試 | Daubert v Merrell Dow 五因子<sup>39</sup> | 無相當判例；交由 trust service provider conformity assessment 取代 | 無；實務以鑑定意見處理 |
| holder-controlled 結構支援度 | 中等（須走 901(b)(9) process description） | 低（eIDAS 預設 issuer-side TSP） | 中等（10 條未明限 holder-side） |
| agent-mediated 結構支援度 | 低（Mata v Avianca（負面先例）後高度警戒） | 低（QES 必須 sole control 由 signatory 持有） | 未表態 |
| business records / hearsay 路徑 | FRE 803(6) regularly conducted activity | 各成員國 national law | 民訴法 363 條（私文書） |
| chain of custody 標準 | Sedona Principles 4th ed.<sup>40</sup> + ISO 27037<sup>41</sup> | ETSI TS 119 511 / 512 + ARF audit trail | 行政機關電子文件作業要點（不完整） |

## 6.2 holder-controlled 走 FRE 901(b)(9) 而非 902(14)

FRE 902(14) 設計目的是讓 ISP 或 cloud provider 等「中性第三方」用 certification 取代到庭作證。902(14) 文義要求 certification of a qualified person，Advisory Committee Notes 將 qualified person 對位到 person familiar with the procedures of regularly conducted business activity<sup>3</sup>。Lorraine v Markel American Insurance（D.Md. 2007）第 540-543 頁強調 ESI authentication 須通過「the process is consistent and reliable」測試<sup>42</sup>，holder 自己對自己的行為作 receipt，難通過此測試。

本文採如下定位——civic-action-receipt 不主張走 902(14) 自證真實，而走 FRE 901(b)(9)「process or system 描述 + accuracy 證明」這條較重路徑。chooser_signature、audit-by-design、revocation_endpoint 三件套提供 process description 與 accuracy 的客觀證據。對應 F1 §5.4 三項工程修正——audit-by-design 提供時序證據，chooser_signature 提供 holder presence，revocation_endpoint 提供 currency。

eIDAS 修正後 Chapter III Section 8（前身 Art 35）對 QES 與手寫簽名等同證據效力的承認，預設 issuer-side trust service provider；holder-controlled receipts 因此須對接 Section 7（preservation；前身 Art 33-34），由 qualified preservation service 提供 long-term reliability 的獨立證據鏈<sup>10</sup>。台灣電子簽章法第 4 條對電子文書效力、第 10 條對電子簽章與手寫簽章等同的條件，搭配民訴法 363 條（私文書）與 363-1 條（電子文書準用），構成國內法承載；行政院 2026 修正草案對齊 eIDAS 引入 qualified electronic signature 與 trust service provider 概念，惟尚在立法院審議中、條文版本變動<sup>43</sup>。

## 6.3 ESI 類比的限制

| ESI 原則 | 對應到 civic receipts |
|---|---|
| FRCP 26(f) ESI conference<sup>44</sup> | receipts schema 須在發證時定義 disclosure format |
| FRCP 34(b) producing party 選擇 form | holder 主張 receipt 格式優於 verifier 強加 |
| Sedona Principle 6（producing party 最熟悉自己資料）| holder 對 receipt-set 揭露範圍有控制權 |
| Sedona Principle 11（不要求 metadata 全披露）| receipts 預設不揭露 chooser_signature 詳細 trace |
| ISO/IEC 27037 chain of custody | receipts 須有 issuer-signed + holder counter-signed + revocation_endpoint 三段 |
| Lorraine 五步測試 | (1) relevance、(2) authentication 採 holder-key + issuer-key 雙重、(3) hearsay 視為 business record 或 verbal act、(4) original writing 視 hash 為 duplicate、(5) probative 由 chooser_signature 抗衡 prejudicial |

ESI 框架預設「enterprise records」（公司在做業務時自然產生），civic receipts 預設 holder-controlled assertion（公民主動聲明）。FRE 803(6) 明示業務紀錄須 kept in the course of a regularly conducted activity，若 the source of information or the method or circumstances of preparation indicate a lack of trustworthiness 則不採；美國各巡迴上訴法院（如 5th Circuit, *US v Foster*, 711 F.3d 657 (2013)）排除為訴訟目的特別準備的記錄<sup>45</sup>。receipts 在 hearsay rule 適用上有兩條替代路徑——其一改走 verbal act（不屬 hearsay）或 present sense impression（FRE 803(1)）路徑，繞過 803(6) hearsay exception 的「規律性業務活動」舉證壓力；其二把 receipts 框架為「行為之發生」（act of consent / authorization），落出 hearsay rule 對「事實之證明」（assertion of truth）之適用範圍。兩條替代路徑在美國聯邦法院對 VC-style consent token 是否屬 verbal act 尚無明確判例，本文視為「初步主張」並列入第十一章 open questions。

## 6.4 Mata v Avianca 是負面先例

Mata v Avianca, 22-cv-1461 (S.D.N.Y. 2023) 中，Castel J 對律師提交 ChatGPT 虛構判例處以 $5,000 制裁，並要求未來 AI-generated filings 必須明示揭露<sup>46</sup>。本文對此案的引用立場必須明確——Mata v Avianca 是**負面先例 / 反面教材**，不是合法樣板。任何 agent-mediated receipt 若無 chooser_signature 明示 holder 在場簽署，可能被法院視為 ChatGPT-style 幻覺紀錄，整批 receipts 不可採。本文 §3.1 schema 將 `agent_did` 設計為 nullable，並要求 `agent_did ≠ null` 時 `agent_delegation_proof` 與 `agent_delegation_capability_hash` 兩欄位皆非 null 且可驗證至 `subject_did`，正是回應此負面先例的工程修正。

EU AI Act (Regulation (EU) 2024/1689) Annex III 將「司法行政中使用的 AI 系統」列為高風險，需 conformity assessment<sup>47</sup>。Texas State Bar 2024 規則與 Oklahoma Supreme Court 2025 Order 強制律師揭露 AI 涉入<sup>48</sup>。CJEU SCHUFA Holding C-634/21（2023）對 automated decision-making 在 GDPR Art 22 下的 solely automated 認定範圍，間接設定「holder 必須 meaningfully 參與決策路徑」的可採性下限<sup>49</sup>。本文於文獻檢索階段曾擬引 CJEU C-300/22 (2024)，惟案號可信度不足，主文撤回該引用，CJEU 引用收束至 SCHUFA C-634/21 一案。

## 6.5 Apostille 公私文書區分破口

Hague Convention on Apostille (1961) 與 e-Apostille Pilot Program 處理的是「公文書」（public documents）的跨境承認<sup>50</sup>。e-APP 由 2006 啟動，2024 統計約 5.1 million e-Apostilles 全球發行<sup>51</sup>；2024 Berlin Working Group 報告顯示締約國數已接近 36 國<sup>52</sup>，但確切數字本文採「待 final 稿核對」處理。

civic receipts 是否屬 public document 是 Apostille 對接層的核心未解問題。傳統 Apostille 認證的是「文件上簽名」，receipts 是「結構化資料 + 簽章鏈」；前者由公權力機關出具（如戶政、地政、法院），後者由 holder 端與 verifier 端共同生成。若 civic receipt 由公權力機關（如健保署、長照管理中心）為 issuer，且 receipt 內含的 chooser_signature 用以證明 holder 在公權力服務交付場景的同意行為，則 receipt 可主張屬廣義 public document 範疇——但這個主張在 HCCH 既有實踐上尚無先例。若 receipt 由私人 issuer（如商業 wallet provider）出具，則屬私文書，Apostille 不適用，跨境承認須改走 1965 服務公約、1970 取證公約或個案外交認證。本文採如下立場——civic receipts 是否屬 public document 須補論，否則跨境承認層有破口；具體分類規則歸 §7 G_recognition^A 軟法層第三段（Hague PIL e-APP digital identity extension）議題。

台灣非 Hague Apostille 締約國，e-APP 不適用；civic receipts 跨境可採性僅在 US ↔ EU 之間透過 Apostille / e-APP 有快速通道。台灣 holder 短期須透過第三國中介（如新加坡、日本 Apostille 締約國）橋接，長期路徑為等待台灣加入 Apostille 或透過雙邊 MOU。

## 6.6 Daubert reliability 在 BBS+ 與 ZK-SNARK 的張力

*Daubert v. Merrell Dow Pharmaceuticals, Inc.*, 509 U.S. 579 (1993) 為演算法產出證據可採性設定五因子——testability、peer review、known or potential error rate、existence of standards controlling the technique's operation、general acceptance in the relevant scientific community<sup>39</sup>。SD-JWT-VC 在五因子上的對位相對直接——RFC 9901 提供 standards、IETF 工作組與多 implementer report 提供 testability 與 peer review、ECDSA / EdDSA 在 federal courts 與 NIST FIPS 186-5 已有 general acceptance。BBS+ Cryptosuite 在 Daubert 五因子上的對位則對應第 §4.2 BBS+ 高階分層的條件成立性質——IRTF CFRG draft-irtf-cfrg-bbs-signatures-07 提供 algorithm-level standard，但 W3C `vc-di-bbs` CRD 在 2026-05 尚未達 W3C Recommendation；BLS12-381 在學術社群（IRTF CFRG、IEEE、ACM）已有 general acceptance，但 FIPS 186-5 未列入 federal standards 範圍。換言之，Daubert 第四、第五因子在 BBS+ 上仍有舉證壓力，法庭專家證人須援引 Tessaro-Zhu（2023）EUROCRYPT 對 BBS 的 tight reduction 與 Camenisch-Drijvers-Lehmann（2016）TRUST 對 BBS+ 的 strong DH 假設安全證明<sup>85</sup>，把 standards / general acceptance 從 federal-recognised 層級擴張到 international cryptographic community 層級。

ZK-SNARK on VC 在 Daubert 五因子上的壓力更大——廠商實作（Iden3 + Circom、Semaphore、Anon Aadhaar）構成 testability，但 W3C VC Data Integrity ZKP Cryptosuites Explorer Note (2024-09) 明文標示「not on Recommendation track，僅作為設計空間探索」<sup>19</sup>，第四因子 standards 嚴重不足；第五因子 general acceptance 在 cryptocurrency / DeFi 社群已建立，但在 federal civic-action 場景未建立。本文 §4.1 將 ZK-SNARK 定位為「complex predicate 專用之 advanced narrow profile」即此 Daubert 評估的工程化結論——在 civic-action-receipt 場景不主張作為 baseline 或高階，留待 §11 open question O10 在 5-10 年後重評。

## 6.7 hearsay rule 對 receipts 的三條應對路徑

FRE 803(6) business records exception 對 receipts 的適用存在 hearsay rule 適用上的根本緊張。enterprise records 預設「在 regularly conducted activity 過程中自然產生」，civic receipts 預設「holder 為了未來舉證主動產生」，後者帶有訴訟動機。Sedona Principles 4th edition (2018) 與 ISO/IEC 27037:2012 chain of custody 標準都建立在 enterprise records 預設下<sup>40</sup><sup>41</sup>。本文採三條應對路徑——

第一條：verbal act 路徑。receipts 之證據功能採「行為之發生」（act of consent / authorization）框架——其定位落出 hearsay rule 適用範圍；此框架下 receipts 並非作為「事實之證明」（assertion of truth）使用。VC-style consent token 是否屬 verbal act 在美國聯邦法院尚無明確判例；類比參照為合約簽署本身的 verbal act 性質（簽署行為本身即構成法律行為，不需要透過 hearsay 規則作為事實宣稱之證明）。此路徑在台灣民事訴訟法 363-1 條（電子文書準用私文書規定）框架下相對直接——私文書真正性爭執回應由 chooser_signature 與 chain-of-custody hash log 承擔，無 hearsay rule 對位問題。

第二條：present sense impression 路徑（FRE 803(1)）。receipts 在 holder 經歷 supported decision-making 過程的「當下」生成，可主張屬於「the declarant's statement, describing or explaining an event or condition, made while or immediately after the declarant perceived it」。此路徑要求 receipts 生成時點與 deliberation 時點高度接近——本文 §3.1 schema 的 `timestamp_proposed`、`timestamp_decided`、`timestamp_presented` 三個時點欄位即支援此主張的工程化承載。

第三條：803(6) 擴張路徑。FRE 803(6) 對 regularly conducted activity 的解讀可擴張至 individual's regularly conducted personal record-keeping。Paul Grimm 與合著者於 *Authenticating Digital Evidence*（2017 Baylor Law Review）及 2019 ABA Section of Litigation 補述中主張，個人在 supported decision-making 過程中的 regularly conducted record-keeping 屬於 803(6) 擴張範圍<sup>86</sup>；Daniel J. Capra 2022 *Electronic Evidence and the Federal Rules of Evidence* 對此擴張立場持保留態度<sup>87</sup>。本文採如下立場——803(6) 擴張路徑為輔助、verbal act 與 present sense impression 為主路徑；三條路徑在不同訴訟類型（民事侵權、行政訴訟、繼承糾紛）有不同適用力。具體選擇歸 SA3 admissibility 在訴訟戰術層的個案決定，本文不展開。

## 6.8 chooser_signature 的法律層界線

F1 §5.3 W4 主張 supported decision-making 與 substituted decision-making 在行為層幾乎不可區分；F2 §3 V_receipt C1+C2 條件以 chooser_signature 把這個區分拉回到密碼學層。但 SA3 必須誠實——chooser_signature 仍無法區分「holder 在自由意志下簽署」與「holder 在強迫下簽署」，後者屬法律層的 coercion defense，非密碼層問題。即便 chooser_signature 存在，agent 在 holder 心理脅迫下取得簽署仍能在民事程序中撤銷。本文於 §11 誠實邊界明示——密碼學三件套未解決所有歸責問題，意定監護、capacity assessment 等法律制度仍是不可省略的程序保障。

---

# 七、SA4 跨境互認——5/10/15 年三段時程的條件性估計與非 OECD 並行軌

## 7.1 三條軟法路徑與條件性時程

跨境互認在 article 8 FTLA 四層治理下落在 G_recognition^A 層<sup>14</sup>。G_recognition^A 在 F1 §7.8 既有用法為 10-15 年總體估計；F2 於此把該層拆為三段，每段對應一條軟法路徑與一個可驗證的中介里程碑。所有時程為條件性估計、order of magnitude，不採「將於 2031 達成」之絕對句式。

### 7.1.1 OECD AI Principles 補充指引（5 年期：2026-2031）

OECD AI Principles 2019（OECD/LEGAL/0449）於 2024-05 修訂，引入 generative AI 條款並強化 accountability<sup>53</sup>。OECD AI Incidents Monitor 於 2024-04 啟動，將 AI incident 與 hazard 公開資料庫化<sup>54</sup>，提供 civic-action-receipt 接入軟法層的具體 hook——incident 申報可附 receipt 作為證據材料。Hiroshima Process International Code of Conduct（2023-10 G7 通過）第 7 條要求對 watermarking / provenance 機制投資<sup>55</sup>，是 civic receipts 之上位軟法依據。

里程碑（條件性估計）：2026-2027 OECD AI Working Party 將 civic receipts 列入 provenance and accountability mechanisms 工作項；2027-2029 OECD 發布 supplementary guidance 將 receipt 標準化為 incident 申報附件；2029-2031 OECD AI Principles 第二輪修訂，將 receipt-based audit trail 寫入 Principle 1.5 accountability 之 implementation guidance。條件變項——OECD 內政治意願不中斷、至少一個 leading member（候選：日本、加拿大、韓國）在國內法域率先採納、G7 Hiroshima Process Friends Group 不中斷。

### 7.1.2 CETS 225 補充協議（10 年期：2026-2035）

Council of Europe Framework Convention on AI (CETS 225) 於 2024-09-05 在 Vilnius 開放簽署<sup>56</sup>。Art 4 設定人權底線、Art 15 透明度與監督、Art 16 risk and impact management framework（civic receipts 之直接上位依據）、Art 26 提供補充協議（additional protocol）機制。已知簽署國包括 EU、US、UK、Japan、Israel、Canada 等。

補充協議假設路徑：2027-2028 Conference of Parties 啟動 civic-action-receipt 議題（先以 expert report 形式）；2028-2030 Drafting Committee 草擬補充協議文本；2030-2032 Committee of Ministers 通過並開放簽署；2032-2035 第 N 個批准書遞交、補充協議生效。條件變項——CETS 225 簽署國維持簽署地位（US 不退出）、Conference of Parties 採多數決推進（中俄目前非簽署國，影響力低）。10 年內補充協議生效屬 optimistic 估計——CoE 補充協議起草歷史平均耗時 5-8 年，CETS 225 本身從草擬到開放簽署費時約 5 年。

### 7.1.3 Hague PIL e-Apostille extension（15 年期：2026-2041）

Hague Convention on Apostille (1961) 至 2025 約 125 個締約國，是少數涵蓋 OECD 外大量法域（含中國 2023 加入、印度、巴西、印尼、俄羅斯、土耳其、CIS 國家）之程序公約<sup>50</sup>。e-APP 已運作 20 年但仍是 pilot 性質；formal extension 至 wallet-borne digital identity 之 cross-border 承認須跨越「public document」概念之擴展。

里程碑（條件性估計）：2026-2028 HCCH Special Commission on the Apostille Convention 將 wallet-borne credentials 列入工作項；2028-2031 HCCH Permanent Bureau 發布 preliminary document 與 questionnaire；2031-2034 Special Commission 通過 Recommendations on e-APP extension to verifiable credentials；2034-2038 各國國內法 implementation；2038-2041 全面運作。條件變項——HCCH 政治意願、至少美國、EU、日本、印度四個大法域之內國立法配合、中國作為締約國參與而非杯葛。Apostille 概念之根本擴展（從「文件」到「結構化資料」）可能不適合 HCCH 之保守風格，亦可能改走另一條 HCCH 公約（如 1965 服務公約之數位化）。本路徑是「最有可能」而非「唯一可能」。

## 7.2 OECD 涵蓋空白與非 OECD 並行軌

OECD 涵蓋全球 GDP 約 65% 但人口僅約 18%（F1 §7.5.4 已建立）<sup>11</sup>。三條軟法路徑均存在 OECD 外覆蓋空白。本文採如下立場——OECD 外覆蓋空白為「承認」而非「預測」，並非透過 SA4 可消除的不可消除邊界。並行軌設計：

(a) AU Continental AI Strategy 2024（AU Executive Council 2024-07 通過）<sup>57</sup>。對非洲法域而言，mobile money（M-Pesa、Airtel Money、MTN MoMo）與 foundational ID（如奈及利亞 NIN、肯亞 Huduma Namba、衣索比亞 Fayda）整合是核心；wallet-borne credentials 不是 AU 主要假設。civic receipts 在 AU 法域須以 mobile-money receipt 結構並行設計。

(b) APEC CBPR + Global CBPR Forum 2024。APEC CBPR 自 2011 運作；Global CBPR Forum 2022-04 由 US、Japan、Singapore、Canada、ROK、Philippines、Chinese Taipei 啟動，2024 Declaration 擴展至非 APEC 成員與 wallet 場景<sup>58</sup>。對台灣特別重要——台灣非 OECD、非 CoE、非 EU；APEC CBPR 是台灣可承接 civic receipts 跨境承認之主要軌道。

(c) 印度 DPDP Act 2023 + DEPA。DPDP Act 2023-08-11 公布；DEPA 由 NITI Aayog 2020 提出，採 consent manager 模式<sup>29</sup><sup>59</sup>。DEPA consent artefact 與 civic-action-receipt 結構同構（均為 selective disclosure + audit trail），但跨境互認需另案處理；schema-level functional equivalence 尚待 DEPA 規範文本進一步公開。

(d) 巴西 LGPD + ANPD adequacy（Resolução CD/ANPD nº 19/2024）<sup>60</sup>、印尼 PDP Law 2022（UU No. 27/2022）<sup>61</sup>、GCC Digital Identity Mutual Recognition Initiative 2024（六國 wallet 與 e-ID 互認）<sup>62</sup>、ASEAN DEFA（2023 啟動談判、2025 簽署目標）<sup>63</sup>。

## 7.3 EUDI 強制階段為 OECD 5 年路徑 accelerator

Regulation (EU) 2024/1183 Art 5a 要求會員國 2026-12 起強制提供 EUDI Wallet，Art 14 要求 cross-border 承認（限於 EU 內）<sup>10</sup>。2026-2027 EUDI 全面上路將產生 EU 內跨境 receipt 流通需求，EU 與非 EU 互認將是 2027-2030 之主要工程壓力來源。EUDI 壓力是 OECD 5 年路徑之 accelerator——若 EUDI 順利，OECD AI Principles 補充指引可能提前至 2028-2029 達成。

## 7.4 軟法的結構限制

OECD AI Principles、CoE 補充協議、Hague extension 均屬軟法或程序性公約，不具直接強制力。本文未主張軟法即強制力。軟法是時間階段化的承載框架——在強制條約缺位時，軟法提供國家間預期收斂之機制。eIDAS 2.0 之 EU 內強制力與 OECD 軟法之間，正是 G_state^A 與 G_recognition^A 兩層的分工。歷史上軟法多次轉化為硬法——1980 OECD Privacy Guidelines → 2018 GDPR 經 38 年；1990 OECD Cryptography Guidelines → 2001 Cybercrime Convention 經 11 年；2019 OECD AI Principles → 2024 CETS 225 經 5 年。轉化路徑存在，但變項是政治意願與時間。即使軟法不轉化為硬法，軟法搭配 bilateral MoU（如 EU-US Data Privacy Framework 2023）仍可形成 functional equivalence<sup>64</sup>。

## 7.5 軟法轉化的歷史軌跡

軟法在歷史上多次轉化為硬法，但轉化路徑非確定函數。1980 OECD Privacy Guidelines（OECD/LEGAL/0188）建立資料保護八項原則，1995 EU Data Protection Directive 部分繼承，2018 EU GDPR 完整承載 38 年的演化路徑；該轉化的成立條件包括 EU 內部治理意願、技術環境演變（網際網路普及）、社運倡議（European Digital Rights 等）三條件持續支撐<sup>88</sup>。1990 OECD Cryptography Guidelines（OECD/LEGAL/0289）建議成員國對 cryptography 採 user choice 立場，2001 Budapest Cybercrime Convention（CETS 185）部分轉化為條約義務，經歷 11 年；該轉化的成立條件主要是 OECD 與 CoE 兩個治理體系的接合。2019 OECD AI Principles（OECD/LEGAL/0449）至 2024 CETS 225 經歷 5 年，是三條歷史中最快的轉化；該轉化的成立條件是 EU AI Act 立法壓力對 CoE 公約結構的反向激勵。

對 F2 而言，OECD AI Principles 補充指引 2029-2031 寫入 civic-action-receipt 後，是否可能 5-10 年內進一步轉化為條約義務？本文採如下立場——轉化路徑取決於 (a) EU 內部對 civic-action-receipt 工程的硬法化（eIDAS 2.0 + AI Act 是否引入 civic receipts 強制條款）、(b) CoE Conference of Parties 對 CETS 225 補充協議的政治意願、(c) 美國對 CETS 225 之地位變化。三個條件中，(a) 在 2026-2028 EUDI Wallet 強制階段可觀察、(b) 在 2027-2030 Drafting Committee 工作可觀察、(c) 在 2024-2028 美國行政更替後可觀察。本文不對此轉化做時程預測，僅指出其結構性可能。

## 7.6 對中國 / 俄羅斯不阻擋路徑的承認

CETS 225 Conference of Parties 不採全體一致決——中俄即使加入也不能阻擋補充協議；目前非簽署國，影響力低。Hague Apostille Convention：中國 2023 加入、俄羅斯 1992 加入。Hague extension 之難點落在「公約修正之根本門檻」這一程序障礙上（非「中俄阻擋」）——中俄目前在 HCCH 內並非阻擋方。對「中國杯葛」之具體案例：中國在 ISO/IEC JTC 1/SC 27 內持續推進其密碼學標準（SM2 / SM3 / SM4），這不阻擋 BBS+ 與 SD-JWT-VC 在西方法域之採納，但確實構成 receipts 在中國境內之 functional incompatibility。CRPD（中國已批准）之 audit trail 要求在中國境內透過《個人信息保護法》(PIPL, 2021) 部分實施<sup>65</sup>，但 wallet-borne receipts 不是中國路徑。威權法域之 civic receipts 採納不在 SA4 可預測範圍內，本文採 OECD + 並行軌 + 威權法域外部性的三分模型。

---

# 八、Process Tracing——五個案例

## 8.1 Estonia X-Road / e-Residency 二十年保存實踐

Estonia 2001 起部署 X-Road、2014 起推 e-Residency；至 2026 已運作 25 年與 12 年<sup>36</sup>。2007 cyber attack 後擴展至盧森堡 data embassy；已歷經多代密碼學參數升級；transaction log 由 RIA 保存並受 Estonia data retention 法律規範。X-Road 對 SA2 30 年下限的工程可行性給出單一案例證據，但 SHA 函數遷移時程未公開驗證，本文採概括表述。教訓——QPSP 不應集中於單一法域；ISO 14721 OAIS 對 representation information migration 的要求在 Estonia 實踐中得到驗證；data embassy 模式可作為跨境 redundancy 的工程範例。

## 8.2 北歐 BankID 雙軌保存與死亡救濟

挪威 BankID、瑞典 BankID、丹麥 MitID、芬蘭 Trust Network、冰島 Auðkenni 五國 BankID 透過 NOBID Consortium 銜接 eIDAS<sup>38</sup>。挪威 BankID 對死亡持卡人處理——家屬須提供死亡證明 + skifteattest + 既存識別資料，consortium 撤銷既有憑證並核發新憑證；BankID 不保存個別 transaction 內容，只保存 authentication / signature event 元資料。教訓——「第三方公證人不需直接持有私鑰」也能在死亡場景提供 audit trail 重建；但 QPSP 保存義務必須與 relying parties 義務同步，否則 30 年下限會被最短的那一層限制。

## 8.3 EUDI POTENTIAL UC6 mandates pilot

EUDI Wallet POTENTIAL Consortium Use Case 6（Mandates）2025-09 mid-term technical report 顯示，2025 Q3 pilot 中只有 3/11 wallet vendor 完成 BBS+ 互通測試；5/11 wallet 仍以 verifier 預先公布支援列表、holder 手動選擇的非自動化方式運作 OpenID4VP draft-23<sup>23</sup>。教訓——F1 §4 已建立的 ARF multi-profile 而非 multi-tenant delegated key custody 區分在 2025-2026 仍未解決；mixed strategy 在 EUDI 框架下實際依賴 OpenID4VP 而非 DIF Presentation Exchange（後者在 ARF 為 informative reference）。本案例對 SA1 verifier policy 三時點決策的工程現實提供具體 baseline。

## 8.4 印度 Aadhaar UIDAI 保存政策

Aadhaar 自 2010 起運作至 2026 為 16 年；UIDAI 對 authentication log 採 6 個月主動保存 + 2 年歸檔的階梯式 retention<sup>30</sup>。這遠短於本文 30 年下限——但印度雖簽署 CRPD 但保留聲明排除部分條款；DPDP Act 對 retention 採 right to erasure 優先。Aadhaar 是「非 OECD 法域 30 年下限不必然成立」的具體 case。教訓——本文 SA2 30 年下限的成立範圍須限縮為「無聲明保留之 OECD 與 CRPD 締約國」；非 OECD 並行軌的設計須容納短時效法域。

## 8.5 Toeslagenaffaire 與 22 年遲滯窗口

荷蘭兒童撫養補貼追溯 2013-2019 案件構成 SA2 30 年下限第三窗口（事後追溯期）的關鍵歸納證據。荷蘭議會調查最終報告（2020-12 Tweede Kamer）顯示行政決定在 2013-2019 期間累積錯誤判定，至 2018 年才進入公共審議，部分家庭至 2026 仍未獲全額補償<sup>28</sup>。本文對「22 年遲滯窗口」的具體數字（事後 8 年發現 + 14 年救濟長尾）採「自行推估」標示——荷蘭官方未公布此聚合數字。教訓有三——其一，事後追溯期由四條鏈條（行政程序、司法救濟、立法回應、政治意願）的最長者決定，單一立法時效並非唯一決定因素；其二，audit trail 在事件爆發前後的可訪問性差異極大，receipts 工程須對「事前不被需要、事後突然需要」的工作負載建模；其三，30 年下限的設計目標是「在 95% 以上類似 Toeslagenaffaire 級別事件」可被完整 resolve，並非以單一案例之「足夠長」為設定基準。對 F2 SA2 的工程影響——`audit_release_policy` 必須允許在「事前」狀態下保持嚴格 access control（避免被作為個人監控基礎設施），同時在「事後」狀態下可被 court order 解開（避免救濟程序受 access denial 阻擋）。

## 8.6 Process tracing 綜合對照

| 案例 | sub-arg 對位 | 對 F2 原語的證據意義 | 對 strengthened thesis 的修訂貢獻 |
|---|---|---|---|
| Estonia X-Road / e-Residency | SA2 | 30 年保存可行性的單一案例證據 | 多代密碼學參數升級 + 跨境 data embassy redundancy |
| 北歐 BankID | SA2 + SA4 | 雙軌保存與跨境互認的成熟參照 | 第三方公證人「不持私鑰」的工程範例 |
| EUDI POTENTIAL UC6 | SA1 + SA2 | mid-term technical report 顯示 multi-tenant gap 未解決 | mixed strategy 依賴 OpenID4VP 而非 PE 的工程現實 |
| Aadhaar UIDAI | SA2 + SA4 | 6 個月主動 + 2 年歸檔的短時效實踐 | 30 年下限在非 OECD 法域不普適、限縮為「無聲明保留之 OECD + CRPD 締約國」 |
| 台灣 TW DIW 預警 | SA2 + SA3 | LLM-agent 階段前的工程準備需求 | 對台灣的具體建議——DIW v1.0 spec 應明文 QPSP 對接條款 + 30 年保存承諾 |
| Toeslagenaffaire | SA2 + SA3 | 22 年遲滯窗口（自行推估）構成事後追溯期下限 | `audit_release_policy` 須區分事前嚴格 / 事後 court-order 可達兩態 |

## 8.7 台灣 TW DIW 預警

台灣數位憑證皮夾（TW DIW）2025 起 pilot，信任清單上公共鏈<sup>66</sup>。DIW 若進入 LLM-agent 階段而未具備 civic receipts 工程，supported decision 證據鏈無法在民事訴訟 30 年窗口內被重建——《民法》§125 一般時效 15 年加上監護宣告爭議窗口共可達 30 年，超過 receipts 工程目前的 retention 規劃。本文對 TW DIW 的具體建議——應在 DIW v1.0 spec 中明文 QPSP 對接條款 + 30 年保存承諾。台灣數位憑證皮夾信任清單上公共鏈一事維持「上公共鏈」framing；不丹 NDI 為 EVM-compatible private chain（非 Ethereum L1 直接寫入）<sup>67</sup>。

---

# 九、反事實壓力測試——五個 CF、likelihood × impact 矩陣、三大緩解 critical path

## 9.1 方法論對接 F1 §9

F1 §9 對 FTLA-Agent 治理層四個 CF 採 likelihood-by-mechanism 推論——對每個 CF 除了問「萬一發生」之外，更追問「在什麼機制鏈下會發生」、「該機制鏈的前置條件目前是否已部分滿足」、「即使發生整套主張是否還能站住」。本章對 F2 cryptographic substrate 層的五個 CF 嚴格沿用此方法論。本文採三條原則——禁災難主義（不把可能發生偷渡成必然發生）、禁可緩解假象（不把緩解設計提得太完美）、區分 working thesis 與 strengthened thesis（前者無緩解、後者含三大緩解 critical path）。

## 9.2 CF1：BBS+ 標準化延後到 2029

W3C BBS Cryptosuite WG 2026 Q4 預定 Recommendation 順延 3 年至 2029。順延原因可拆三條機制鏈——互操作測試失敗鏈（BLS12-381 與 hardware token batch verification 不相容）、IPR 揭露鏈（IBM 2004-2009 group signature 專利族與 Microsoft anonymous credential 申請的 W3C PAG 處理時程不可預期）、政策爭議鏈（歐盟、美國、日本對 unlinkability 強度評估分歧）。第一條已部分顯現——2024 W3C BBS Cryptosuite WG 公開 issue tracker 中關於 BLS12-381 與 hardware 相容性的 issue 至 2025 中尚未關閉。三條合計觸發機率：medium。

衝擊鏈——SA1 baseline 強制回退到 SD-JWT-VC-only，高階 unlinkability 層消失；SA2 雙軌保存的高階 unlinkability 失效（SD-JWT-VC 的 salted hash disclosure 在多次 verification 下仍可被 sidechannel 統計）；SA3 法庭可採性「accuracy of process」反論強度上升 30-50%；SA4 跨境互認推遲 5 年。緩解設計——F2 thesis 明示「BBS+ 是高階目標、非 baseline 條件」；採 IETF JOSE/COSE 對 BBS 演算法獨立 RFC 路徑作為 W3C 路徑的 fallback；對醫療、長照等 high unlinkability 場景採 W3C WD + IETF Internet-Draft 雙重 reference 的 wallet 工程妥協方案。剩餘風險——BBS+ 仍有 15-20% 機率延後到 2031 後；F2 thesis 對此採條件化結構（IF baseline SD-JWT-VC OR BBS Recommendation by 2029, THEN ...）。

## 9.3 CF2：失智長者 receipts 集體失效

2030 年台灣 / EU / 日本三地同時發現 civic receipts 在失智長者場景的 substituted regime 退化問題。WHO 2024 估計全球失智人口 2030 約 7,800 萬，三地 65 歲以上失智盛行率 2030 約 7-10%；三地失智人口合計 2030 約 1,200-1,500 萬<sup>31</sup>。即使「30% 退化率」（假設值，需 pilot study 驗證）只取保守值，substituted 化 receipts 規模約 ≥ 350 萬人份。機制鏈三條——cognitive endorsement 工程缺口（wallet UX 對 cognitive load 處理普遍預設成人完全認知）、長照人員代簽常態化（外籍看護為效率代為操作 wallet，holder 端 biometric authentication 在失智者場景容易被物理引導完成，形成物理 holder 但 cognitive non-holder 狀態）、法定代理人空窗（台灣 2019 監護宣告改革雖朝 supported decision-making 方向，但「輔助宣告 + 意定監護」覆蓋率 2024 仍不足失智人口 5%）。三條機制鏈在 2026 已部分顯現，觸發機率 medium-high（50-65%）<sup>68</sup>。

衝擊鏈——SA2 holder-controlled 預設失效，cognitive holder ≠ physical holder；第三方公證人為避責會要求 holder 端 cognitive endorsement 證明，這在實務上不可行，公證人退化為 holder + supporter 共同簽署的 substituted regime 仲裁者，SA2 的 holder-sovereign 立場崩塌。緩解設計——threshold signatures（holder + 法定代理人 + 醫療機構代表三方 t-of-n 簽署）、法院命令 backup（失智宣告後 wallet 在 receipts 生成前必須有法院核可的監護人 / 輔助人簽字 anchor）、court-supervised 解密協議、cognitive endorsement 工程強制（EUDI ARF 後續版本加入失智宣告者帳戶的 micro-consent 確認延遲與 supporter co-signing 強制）。剩餘風險——threshold signatures 在失能群體規模化部署的 UX 成本高；法院命令 anchor 對偏鄉、低收入長者可近性不足。

### 9.3.1 CRPD §12 反向使用

CF2 觸發後，CRPD GC1 §29 audit trail 要求會被 Committee 反向使用為 §12 違反證據。F2 working thesis 主張 civic receipts 是 audit trail 的密碼學承載；CF2 觸發後 §29 會被反向解讀——CRPD Committee 援引 §29 指控 civic receipts 工程未能區分 supported / substituted，故 civic receipts 本身就是 Art 12 違反的證據而非合規證明。SA2 的 normative 基礎在此被翻轉。澳洲、紐西蘭、日本、歐盟皆在 CRPD 監督範圍內；CRPD Committee 對 Australia 2019 Concluding Observations 已對 Art 12 提出個別來文程序意見<sup>69</sup>。台灣未批准 CRPD 但 2014 年通過《身心障礙者權利公約施行法》自願拘束；2017、2022 兩次國家報告國際審查已對 Art 12 提出結論性意見。CF2 觸發後，台灣面對的是自願拘束力範圍內的事實違反。本文於 §11 誠實邊界明示——F2 thesis 對 CRPD 規範義務的最弱環節即在 §29 反向使用；strengthened thesis 透過三大緩解（threshold + court anchor + cognitive endorsement engineering）才能阻擋這個反向使用。

## 9.4 CF3：法庭拒絕 holder-controlled receipts 為證據

2028 年台灣高等法院或美國聯邦上訴法院某 circuit 判決 holder-controlled civic receipts 不符 FRE 902(14) reliability of generating system 要件，僅可作 supplementary evidence。判決理由可預期沿三條軸線——Lorraine v Markel 軸（holder-controlled 系統在 holder 自己控制下無 chain of custody 保障）、In re Vee Vinhnee 軸（holder-controlled 系統無法滿足記錄之原始性可被獨立稽核要件）<sup>70</sup>、台灣最高法院 110 年度台上字第 1429 號軸（要求製作過程可信、儲存過程可信、無法被製作人單方變造，holder-controlled 在第三項上失分）<sup>71</sup>。觸發機率 medium（40-55%）。

衝擊鏈——SA3 法庭可採性塌陷；SA4 跨境承認失去國內法基礎（美國法院不承認 → 美國 OECD 互認談判立場保留 → 整個 OECD 軌道延後）；SA1 + SA2 工程努力即使完美，仍無法在法庭實現可採性。緩解設計——必經 trusted preservation service（eIDAS 修正後 Chapter III §7 QPSP）、強制 third-party timestamping（IETF RFC 3161 TSP 或 RFC 5816 升級版）<sup>72</sup>、chain-of-custody hash log（IETF RFC 8392 CWT 或 W3C VC v2.0 evidence 機制）、FRE 902(14) certification 制度（促成 wallet 廠商或 W3C 對特定 cryptosuite 配置提出 902(14) qualified record-generating system 認證，類似 ISO/IEC 17025 對實驗室認證）。剩餘風險——第三方 preservation service 引入回到 SA2 的 holder vs 第三方張力；強制 preservation service 部分削弱 holder-controlled 立場。F2 thesis 對此採三層方案——日常 receipts holder-controlled、法庭用途 receipts holder + 第三方共管、爭議用途 receipts 全程第三方主管。

## 9.5 CF4：BRICS 集體拒絕 OECD AI Principles 路徑

2032 年 BRICS 擴員（中、俄、印、巴、南非、阿聯酋、伊朗、埃及、衣索比亞、沙烏地阿拉伯）集體拒絕以 OECD AI Principles 2024 update 為核心的全球 civic receipts 互認路徑，轉而推動 BRICS-led AI 治理替代框架。機制鏈三條——中國《生成式人工智慧服務管理暫行辦法》(2023-08-15) Art 4 外推（政府預審 issuer 列表、跨境 verifier 須在中國境內備案）<sup>73</sup>、BRICS Kazan Declaration 2024 + Rio 2025 對「全球南方主體性」「對等技術治理」「拒絕單極技術標準」三項立場<sup>74</sup>、資料 sovereignty 立法浪潮（印度 DPDP 2023、印尼 PDP 2022、巴西 LGPD 2018、俄 152-FZ 2022 修訂）。集體拒絕機率：medium；部分拒絕機率：high。

衝擊鏈——SA4 G_recognition^A 路徑碎裂；三條軟法路徑皆受影響；全球 civic receipts 分裂為 OECD 軌與 BRICS-AAGF 軌兩個不互通網絡。緩解設計——APEC CBPR 作為中間橋樑（中、越、台、韓、日、菲、墨、加、美、智利、紐、澳皆在 APEC）、ITU AI for Good 作為非結盟對話（ITU 193 成員，無 OECD / BRICS 軸線預設）<sup>75</sup>、Hague PIL 維持中性（91 成員含中、俄、印、巴，工作以私法為主）、台灣的對中軌道（民間中介、香港澳門跨軌中介、2010 兩岸司法互助協議框架的有限援用）。

### 9.5.1 對台灣的特殊衝擊

CF4 觸發後，兩岸跨境權利主張的 civic receipts 互認在結構上出現斷裂，具體在三個場景對台灣公民與台商工程影響顯著。

第一場景——陸配權利保護。陸籍配偶在台依親居留期間取得的長照給付、健保資格、家庭暴力庇護受理紀錄等 civic receipts，於返回大陸尋求權利主張或繼承程序時，若兩岸軌不互認，receipts 在大陸法院無證據能力；反之，陸配在大陸工作期間累積的養老保險、職業傷害認定 receipts，於回台辦理 capacity assessment、輔助宣告或財產繼承時，亦面臨同樣斷裂。現行〈臺灣地區與大陸地區人民關係條例〉§7 對大陸公證書認證採文書驗證模式，這個模式預設「紙本公文書」，對結構化 receipts 無對位點；CF4 觸發後，receipts 須降級為紙本書面或公證文書才能跨軌使用，30 年保存與密碼學簽章的工程價值在跨軌場景全部消失。

第二場景——台商長期居留產生的 civic receipts。台商在中國境內醫療（含長照、慢性病管理、職業傷害）、不動產交易、勞動爭議仲裁產生的 receipts，若中國未來部署 wallet 系統（PIPL audit trail 路徑），無法回到台灣 wallet 驗證；反之亦然。工程影響——台商家屬在台辦理失能宣告或繼承時，須對中國境內 receipts 進行個案鑑定與翻譯認證，鑑定意見成本上升、訴訟程序延長。對 SA2 30 年保存窗口的衝擊——台商生涯（典型 20-40 年跨境）正好落在 receipts 設計的核心保存窗口內，CF4 觸發後這個窗口的跨軌可採性實質喪失。

第三場景——兩岸投資人權利保護。台灣投資人在大陸投資設廠或併購交易產生的 board resolution receipts、AI-assisted 投資決策 deliberation records，若主張仲裁或司法救濟需跨軌使用，會面臨兩條困境——其一，大陸仲裁機構（如 CIETAC）對 holder-controlled receipts 之 reliability 評估缺乏先例；其二，台灣方面對大陸 PIPL audit trail 之 functional equivalence 認定亦未明朗。〈海峽兩岸投資保障和促進協議〉(2012) 的爭端解決機制以紙本書面證據為預設，未對 wallet-borne 結構化 receipts 預留承載介面。

三個場景的工程影響都指向同一個結論——CF4 對台灣的衝擊性質為「兩岸軌結構性斷裂」（嚴格超出「跨境互認時程推遲」的量級）。SA4 的緩解設計（APEC CBPR 橋樑、Hague PIL 中性軌道）對此衝擊只能提供降級互通，不能提供對等互認。本文於 §11 誠實邊界與第十二章條件性結論明示——F2 strengthened thesis 對台灣兩岸跨境權利主張場景的承諾，弱於對 OECD 內互認場景的承諾；working thesis 在 CF4 觸發下對台灣場景實證失效。換言之，working thesis 與 strengthened thesis 在台灣場景的存活差距，在 CF4 軸線上比在其他四個 CF 軸線上更顯著——這是 F2 區分 working / strengthened thesis 兩層命題後在台灣場景的最具體政策意涵。

## 9.6 CF5：Quantum Computing 威脅 BBS+ 與 SD-JWT

2035 年 NIST 發布更新指引，要求對所有政府使用的 long-lived 簽章方案在 2040 年前完成 PQC 遷移。NIST 立場參考 NSA CNSA 2.0（2022, 2024 update）對「2030-2035 年國家安全系統 PQC 遷移」的時程外推<sup>76</sup><sup>77</sup>。技術背景——2024-08 NIST FIPS 203（ML-KEM, Kyber）、FIPS 204（ML-DSA, Dilithium）、FIPS 205（SLH-DSA, SPHINCS+）已完成標準化<sup>78</sup><sup>79</sup><sup>80</sup>。Mosca's theorem——若資訊保存年限 + PQC migration 時程 > 第一台 cryptographically relevant quantum computer 出現年限，則該資訊已不安全<sup>81</sup>。對 F2 而言——civic receipts 保存年限 30 年 + PQC migration 時程 5-10 年 = 35-40 年。若 cryptographically relevant quantum computer 在 2035-2045 出現（主流估計區間，但學界估計分歧 2030-2050），則 2026-2035 期間生成的 civic receipts 在 2045-2055 期間的 verification 不安全。觸發機率：medium-high。

衝擊鏈——SA1 三族 cryptosuite 全部需更換（SD-JWT 用的 ECDSA / Ed25519 / RSA、BBS+ 的 BLS12-381 pairing、ZK-SNARK 的 Groth16 皆基於 discrete log 或 factoring 假設，Shor 演算法下不安全）；SA2 長期保存的舊 receipts 在 PQC migration 後重新驗證需要 archive 主動 re-signing 與 re-anchoring，holder-controlled 進一步退化；SA3 法庭採證的 reliability 要求變動，從 single cryptosuite reliability 改為 crypto-agility process reliability；SA4 跨境互認的 PQC migration 不對等（OECD 對齊 NIST FIPS、BRICS 可能採俄 GOST 或中 SM 後 PQC 版本）。

緩解設計——crypto-agility by design（W3C VC v2.0 已預留 cryptosuite 抽象層，IETF PQUIP WG 2024-2025 drafts 對 hybrid signing 設計）<sup>82</sup>、NIST IR 8547 PQC migration timeline 對齊（2024-2030 hybrid signing 試行、2030-2035 主流切換、2035-2040 legacy 清理）<sup>83</sup>、hybrid signing during transition（每個 receipts 同時帶傳統 Ed25519 + PQC ML-DSA 簽章，hybrid 期間 receipts 體積膨脹 2-3 倍）、archive re-anchoring 自動化（每 5-7 年用最新 PQC hash function 對 receipts content 重新 anchor）。剩餘風險——hybrid signing 工程複雜度顯著上升；archive re-anchoring 需 holder 信任 archive operator 的 PQC 工程能力；台灣、巴西、印度等 PQC 工程社群規模較小的法域，re-anchoring 服務可近性不足。

## 9.7 likelihood × impact 矩陣

| CF | 情境 | Likelihood | Impact | 主衝擊原語 | 連鎖衝擊原語 |
|----|------|------------|--------|------------|--------------|
| CF1 | BBS+ 標準化延後到 2029 | medium-low (40-50%) | medium | SA1 | SA2, SA3, SA4 |
| CF2 | 失智長者 receipts 集體失效 | medium-high (50-65%) | high | SA2 | SA3 |
| CF3 | 法庭拒絕 holder-controlled | medium (40-55%) | high | SA3 | SA4, SA1, SA2 |
| CF4 | BRICS 拒絕 OECD 路徑 | medium (集體) / high (部分) | medium | SA4 | — |
| CF5 | Quantum 威脅 cryptosuite | medium-high (2035 觸發) | medium | SA1 | SA2, SA3, SA4 |

矩陣解讀——最高優先級風險為 CF2 與 CF3（皆 high impact）；高機率中等風險為 CF5；中機率中等風險為 CF1 與 CF4。五個 CF 中無 (high × high)、無 (low × low)。最壞合取情境（五 CF 全觸發）的 first-order 獨立假設下合計機率 < 5%；考慮 CF1-CF3 條件依賴與 CF4-CF5 標準分裂相互強化，實際 5-10%。

## 9.8 working thesis vs strengthened thesis 存活評估

對五個 CF 觸發數的 working thesis 與 strengthened thesis 存活評估如下。

| CF 觸發數 | working thesis 保留 | 修訂幅度 |
|-----------|---------------------|----------|
| 0 個 | 完整保留 | 無 |
| 1 個（任一） | 主要保留 | 單原語條件化 |
| 2 個 | 部分保留 | 兩原語條件化 + 時程外推 |
| 3 個 | 結構性修訂 | thesis 表述大幅改寫 |
| 4-5 個 | 失敗 | thesis 失效、需重寫 |

| CF 觸發數 | strengthened thesis 保留 | 修訂幅度 |
|-----------|--------------------------|----------|
| 0-2 個 | 完整保留 | 無 |
| 3 個 | 主要保留 | 時程外推 5-10 年 |
| 4 個 | 結構性保留 | thesis 第二、三段時程外推 ≥ 10 年 |
| 5 個 | 部分保留 | thesis 第三段（全球互認）失敗、前兩段保留 |

對照顯示，「working thesis + 三大緩解」的存活率顯著高於「working thesis 單獨」。F2 主文採 strengthened thesis 為正式立場、working thesis 僅作為論證起點。CF1（BBS+ 延後）與 CF5（PQC 威脅）兩條機制鏈的條件依賴在 IETF JOSE/COSE WG 對 BBS 演算法獨立 RFC 路徑（W3C 路徑的 fallback）下會被部分緩解；CF4（BRICS 對立）與 CF5（PQC migration）的標準分裂相互強化，是 §11 open question O41 議題（Bayesian network 分析）。

## 9.9 三大緩解 critical path

從五個 CF 緩解設計中按 critical path 排序：

**緩解 1（首位）：crypto-agility by design**。同時對 CF1（BBS+ 延後）與 CF5（PQC 威脅）提供緩解；已在 W3C VC v2.0 securingMechanism 抽象層、IETF PQUIP WG drafts 中有基礎；F2 thesis 應升級為一階工程要求。估期 2026-2028 規範整合、2028-2030 工程實作。

**緩解 2（第二位）：第三方 trusted preservation service 對接**。同時對 CF2（失智長者）與 CF3（法庭拒絕）提供緩解；以 eIDAS 修正後 Chapter III §7 QPSP、IETF RFC 3161/5816 TSP 為規範基礎；設計關鍵——保留 holder-controlled 主預設、第三方 preservation 為 backup 而非主軌。估期 2026-2028 EU 內整合、2028-2030 OECD 推展。

**緩解 3（第三位）：G_recognition^A 軟法層多軌備援**。對 CF4（BRICS 對立）提供緩解，亦間接緩解 CF1 與 CF3 的跨境衝擊；OECD AI Principles、APEC CBPR、Hague e-Apostille extension、ITU AI for Good 四軌並行；設計關鍵——不依賴單一軌道達成全球互認，以四軌組合對沖政治風險。估期 2026-2032 最低介面協調、2032-2040 具體互認操作。

三大緩解的合取構成 F2 strengthened thesis。F2 working thesis（無緩解版）在 CF2 或 CF5 任一單獨觸發下實證失效；F2 strengthened thesis（含三大緩解 critical path）在五 CF 全觸發下保留核心功能——第三段全球互認失敗、第二段 OECD 內互認部分保留、第一段單原語密碼學承載完整保留。

---

# 十、接合 forward-links 與預告 F3

## 10.1 系列接合圖

article 8 FTLA 四層 → article 14 Q10a/Q10b → article 15 §6.2 三重預設 → article 16 §5.4 DeliberationRecord + §7.3.1 envelope → F2 四原語落地。F2 對 forward-link 的具體回應如下。

對 article 8——FTLA 四層治理在本文 §7 G_recognition^A 層被進一步拆為三段（5/10/15 年）。OECD AI Principles 補充指引、CETS 225 補充協議、Hague PIL e-Apostille extension 構成軟法層的具體承載；非 OECD 並行軌（APEC CBPR、AU、印度 DEPA、巴西 LGPD、印尼 PDP、GCC、ASEAN DEFA）為 OECD 外覆蓋空白的承認結構。

對 article 14——Q10a（authority transfer 密碼學歸責）由本文 SA1 + SA3 承擔。V_receipt 的 C1 + C2 子句即 Q10a 的密碼學形式表達；F1 §7.3.1 enabling envelope 在本文 §3.1 schema 中以 `agent_delegation_proof` + `agent_delegation_capability_hash` 兩欄位承載。Q10b（accountability allocation 跨境多方歸責）由本文 SA3 + SA4 承擔——SA3 提供 receipts 在每個法域進入訴訟程序的對接路徑（FRE 901(b)(9) / eIDAS §7-8 / 電子簽章法 §4），SA4 提供跨境承認的時間階段化軟法承載。本文採如下定位——SA3 是 Q10b 的證據側補強而非完全解決；coercion defense 與心理脅迫等問題屬法律層而非密碼層。

對 article 15——§6.2 wallet 三重預設（個人擁有 + 個人識別 + 個人私鑰）在本文 SA2 雙軌設計與 SA1 schema 中被光譜化。個人擁有由 `preservation_layer` 鬆綁；個人識別由 DID extension 承載 `coexistentSubjects`（注意 W3C DID v1.0 Rec 2022-07-19 核心屬性為 id / controller / authentication / verificationMethod / service 五項<sup>84</sup>，`coexistentSubjects` 屬延伸提案、未進入 v1.0，須透過 DID v1.1 或 method-specific extension 承載）；個人私鑰由 `chooser_signature` 與 `agent_delegation_capability_hash` 雙簽結構承載。

對 article 16——F1 §5.4 DeliberationRecord 11 個欄位群在本文 §3.1 14 個欄位群 schema（含 23 個 leaf field）中為核心繼承；F1 §7.3.1 enabling envelope 為新增 3 個欄位群的來源；F1 §7.7 五方責任比例（issuer 25 / verifier 25 / wallet provider 15 / agent provider 25 / model provider 10）在本文 SA3 + SA4 透過 jurisdictional_profile 與 recognition_chain 對應；F1 §3 5×3 矩陣 9-✓ / 4-△ / 2-✗ 在本文 §3.2 由 SA1-SA4 對應 cell（RT-ℬ ✗ 與 AA-ℬ ✗ 兩 cell 為 Z₃-intrinsic 不可達，定理 T2）。

## 10.2 預告 F3

F3 將處理以下三件本文未完成議題。其一，`AgentDelegationProof2026` 的 SDO 標準化路徑——本文 schema 預設此 proof type 已存在，實際上 W3C VC v2.0 + DIF 尚未標準化，是 F3 sub-arg-1 的核心。其二，反饋環路 SA4 → SA1 的形式語義（lattice over `(cryptosuite, jurisdiction)` 對）——本文以「設計階段約束」掛起，F3 須給出形式定義。其三，AI Act + GDPR + eIDAS 三規範下 receipt processing 的 lawful basis——GDPR Art 6 的 contract、legal obligation、legitimate interests 三條候選路徑在本文未具體選定，F3 須在法律層 sub-arg 處理。

---

# 十一、誠實邊界與 open questions

## 11.1 誠實邊界清單

本文需明示如下邊界。其一，BBS Cryptosuite 在 2026-05 仍是 CRD 而非 Recommendation；W3C VC WG 2025-10 charter renewal 對 Recommendation 時程的字眼為 best-effort。本文「BBS+ 為高階」的分層採條件成立，條件為 W3C BBS Cryptosuite 達 Recommendation；若 2027 Q1 前未達，baseline 退回到只用 SD-JWT-VC，BBS+ 分層推遲到 2028。其二，FRE 902(14) 自證真實對 holder-controlled receipts 屬非主路徑；本文採 FRE 901(b)(9) process / system 描述 + accuracy 證明的較重路徑。CJEU C-300/22 案號無法核對，本文主文撤回該引用、CJEU 引用收束至 SCHUFA C-634/21 一案。其三，30 年下限為「分析性建議數」而非「規範性硬約束」；規範性下限應引自 eIDAS implementing acts 或國內法。30 年下限在 OECD 外覆蓋空白（印度 DPDP、巴西 LGPD、印尼 PDP、Aadhaar UIDAI 短時效）不普適。其四，跨境互認軟法層無強制力；OECD 外覆蓋空白為「承認」而非「預測」。其五，CRPD §29 audit trail 義務在 CF2 觸發後可能被 CRPD Committee 反向使用為 §12 違反證據；F2 strengthened thesis 透過三大緩解阻擋此反向使用，但 working thesis 在 CF2 觸發下實證失效。其六，密碼學三件套（chooser_signature、audit-by-design、revocation_endpoint）未解決所有歸責問題；coercion defense、capacity assessment、意定監護等法律制度仍是不可省略的程序保障。其七，Apostille 公私文書區分構成跨境承認層破口；civic receipts 是否屬 public document 須補論。其八，Estonia X-Road SHA 函數遷移具體時程未公開驗證，本文採概括表述。其九，「30% 失智退化率」為假設值，需 pilot study 驗證。其十，Mata v Avianca 是負面先例 / 反面教材，不是合法樣板。

## 11.2 41 條 open questions（O1-O41）

形式骨架層——O1 critical path SA4 → SA1 反饋環路的形式語義（lattice over `(cryptosuite, jurisdiction)` 對）；O2 `AcceptedSuites(τ)` 時點演化規則的 SDO 機制設計；O3 non-OECD 法域的 receipt 互認對位點（印度 DPDP / 巴西 LGPD / 印尼 PDP）；O4 `coexistentSubjects` 與 DID v1.0 的拼接（須 DID v1.1 或 method spec 承載）；O5 `AgentDelegationProof2026` 的 SDO 標準化路徑（F3 sub-arg-1 核心）；O6 AI Act + GDPR + eIDAS 三規範下 receipt processing 的 lawful basis（GDPR Art 6 四條路徑）。

密碼學層——O7 PQC migration timeline 與 30 年保存的張力（W3C VC WG 2027 啟動討論 vs receipt 2055 仍需驗證）；O8 BBS+ 的 PQC 替代（lattice-based unlinkable signature，Bootle et al. 2024 後續）；O9 hardware-backed unlinkability（Secure Enclave / StrongBox BLS12-381 原生支援、ARM TrustZone BBS+ prover）；O10 verifier policy 自動化協商的 conformance 測試（EWC Phase 2 2026 Q3）。

保存層——O11 PQC 過渡的具體時程與 wallet 強制升級義務（30 年內必發生至少一次過渡）；O12 threshold signatures（GG18, FROST）在 production 的工程成本（trustees 通訊 + UX）；O13 QPSP 破產處置 + eIDAS Art 24 termination plan 跨境繼承；O14 DAO / 多人共同 holding 場景（trustees 是 DAO 成員還是 DAO 本身）；O15 中國 PIPL / 俄 152-FZ / 伊朗等境內存儲法域的工程降級路徑；O16 AI-assisted supported decision-making 對 audit trail 的衝擊（LLM 內部狀態 / CoT 是否需保存）；O17 未成年人 wallet 在 capacity 變遷（成年）時 audit trail 延續；O18 Hague 2000 公約對失能成人跨境保護（截至 2025 僅 15 國批准）。

法庭可採性——O19 韓國 Constitutional Court / 大法院對 e-government 證據效力判例；O20 新加坡 Electronic Transactions Act 2010 + Cybersecurity Act 2018 對接（橋接 e-APP）；O21 CJEU C-300/22 (2024) 案號核對（若無法確認則撤回引用——本文已採此處理）；O22 行政院 2026 修正草案最終條文版本（須在 final 稿前再確認）；O23 e-APP 締約國最新名單（2024 Berlin Working Group 36 國數字待核）；O24 EUDI Wallet ARF audit trail profile 的 normative 章節；O25 Mata v Avianca 後續上訴與聯邦巡迴判決；O26 台灣最高法院 109 台上 1716 / 110 台上 1525 / 110 台上 1429 全文核對。

跨境互認——O27 AU 內 mobile-money-based receipt 結構（M-Pesa、MTN MoMo）；O28 印度 DEPA consent artefact 與 W3C VC schema mapping；O29 ASEAN DEFA wallet 互認 trust list 設計（無單一上位監管者）；O30 GCC closed-system 與 OECD 開放系統介接；O31 拉美 CAF / MERCOSUR / Pacific Alliance 路徑差異；O32 CIS / EAEU 框架下 digital ID 協定（俄烏戰後變項過多）；O33 威權法域 functional equivalent 之承認（中國 PIPL audit trail 是否足以滿足境外法院）；O34 氣候衝擊與遷徙場景下 receipts 的跨境承認（無國籍狀態）；O35 多邊承認協定 verifier 撤回機制；O36 AI-generated receipts 自證真實性（Mata v Avianca 後法院態度）。

壓力測試——O37 CF5 PQC migration 對舊 archive 可驗證性（hash 函數替換的形式化）；O38 CF2 threshold signatures 在失智長者 UX 可行性（pilot study 需求）；O39 CF3 FRE 902(14) certification 制度（W3C / ISO type-level certification）；O40 CF4 對中國軌道台灣特殊衝擊深化（陸配 / 台商 / 兩岸投資人權利保護深度個案）；O41 五個 CF 合取相關性 Bayesian network 分析。

## 11.3 高風險主張的查證義務

本文 §3-§9 含若干具體年份、案號、技術事實、立法版本之主張，依 fact-check 流程須交由下游 subagent 逐條查證。具體清單——「德國 BGB §197 對確定判決所確認之退休給付請求權 30 年」（限縮為「確定判決所確認之退休給付」+ SGB I §45「未告知」延長條款）；「30 年下限在無聲明保留之 OECD 與 CRPD 締約國成立」；「Toeslagenaffaire 22 年遲滯窗口」（自行推估，需標明）；「Alzheimer's CDR ≥ 2 後 wallet 私鑰失能」（採 Clinical Dementia Rating 而非 stage 4-5 描述）；「Estonia X-Road 多代密碼學參數升級」（具體 SHA 遷移時程未公開驗證）；「設計 B 違反 CRPD §28」（依本系列對 §28 的詮釋，CRPD Committee 未明確裁定）；「threshold signatures t=2 / n=3 為建議起點」（開放配置空間）；「QPSP 跨法域 redundancy 是緩解方向」（實踐成熟度有限）；「行政院 2026 修正草案 QPSP 條款」（立法版本變動）；「BankID 死亡持卡人處理流程」（C 級來源、開放異常案例空間）；「Aadhaar 6 個月主動 + 2 年歸檔」（UIDAI 2024-2025 最新政策待核）；「ISO/IEC 27040 §7 storage media 5-10 年 re-encryption」（建議非強制）；「e-APP 締約國 2024 達 36 個」（HCCH 數字待核）；「Mata v Avianca 為負面先例」（所有引用處須明示）；「『30% 失智退化率』為 CF2 假設值」（需 pilot study）。fact-check subagent 對以上主張應採來源驗證、條件限縮、措辭弱化三項處理之一，不得直接保留無條件主張。

---

# 十二、條件性學術結論

## 12.1 結論一——四原語落地的條件性可行性

civic receipts 作為條件可委任區 Z₂ 中 supported/substituted 可區分性的密碼學承載，在 W3C VCDM v2.0 Recommendation（2025-05-15）、IETF SD-JWT-VC draft-16（2026-04-24）、W3C BBS Cryptosuite CRD（2026-04-07）、EUDI ARF 2025-12 iteration、IRTF CFRG BBS Signatures draft-07 五條既有規範路徑下，可在 5-10 年內標準化落地。落地的形式承載為本文 §3 給出的 14 欄位 schema 與 V_receipt 函數的 C1-C6 六道條件。條件性表述如下——若 W3C BBS Cryptosuite 在 2027 Q1 前達 Recommendation，第一原語 mixed strategy 採 baseline SD-JWT-VC + 高階 BBS+ 雙層分工；否則 baseline 退回到只用 SD-JWT-VC，BBS+ 分層推遲到 2028。

## 12.2 結論二——跨境治理時間階段化

跨境互認透過 G_recognition^A 軟法層 5/10/15 年三段推進——OECD AI Principles 補充指引 2029-2031、CETS 225 補充協議 2030-2035、Hague PIL e-Apostille digital identity extension 2038-2041。時程為條件性估計、order of magnitude，不採絕對句式。OECD 外覆蓋空白為承認非預測；非 OECD 並行軌（AU、APEC CBPR、印度 DEPA、巴西 LGPD、印尼 PDP、GCC、ASEAN DEFA）以「並行」而非「替代」角度設計。對台灣的具體承載——APEC CBPR + Global CBPR Forum 為非 OECD / 非 CoE / 非 EU 之台灣可承接 civic receipts 跨境承認之主要軌道；CF4 觸發下兩岸軌結構性斷裂為 F2 thesis 對台灣場景的最弱承諾。

## 12.3 結論三——working thesis 與 strengthened thesis 的嚴格區分

F2 working thesis（無緩解版）在 CF2（失智長者退化）或 CF5（PQC 威脅）任一單獨觸發下實證失效。F2 strengthened thesis（含三大緩解 critical path——crypto-agility by design、第三方 trusted preservation service 對接、G_recognition^A 多軌備援）在五個 CF 全部觸發的極端情境下保留核心功能——第三段（全球互認）失敗、第二段（OECD 內互認）部分保留、第一段（單原語密碼學承載）完整保留。F2 主文採 strengthened thesis 為正式立場、working thesis 僅作為論證起點。

對 CRPD Art 12 GC1 §29 audit trail 義務的履行——F2 strengthened thesis 在 Z₂ 範圍內透過四原語可履行；超出 Z₂ 進入 Z₃（RT-ℬ ✗ 與 AA-ℬ ✗ 兩 cell）不可履行，這是密碼學原語對存在論結構的不可達邊界（定理 T2）。任何宣稱 civic-action-receipt 可「解決 AI 代理根本責任問題」的論述都違反此邊界。對台灣 TW DIW 進入 LLM-agent 階段前的具體警示——若未具備 civic receipts 工程，supported decision 證據鏈無法在民事訴訟 30 年窗口內被重建；具體建議——DIW v1.0 spec 應明文 QPSP 對接條款 + 30 年保存承諾。

## 12.4 對 CRPD Committee 的回應立場

F2 strengthened thesis 對 CRPD General Comment No. 1 §29 audit trail 義務的履行承諾，限定在 Z₂（條件可委任區）範圍內、並以三大緩解 critical path 為前提。對 CF2 觸發後 §29 被反向使用為 §12 違反證據的風險，本文採如下回應立場——civic receipts 工程的設計目標是「以最少限制方式提供支持」（CRPD Art 12 (3)），與 §28 substituted 禁令、§29 audit trail 義務、Art 12 (4) safeguards against abuse 三條規範要求一致；strengthened thesis 透過 threshold signatures（設計 C，建議 t=2 / n=3 為起點）、court-anchored backup（失智宣告後 wallet 受法院核可監護人 / 輔助人 anchor）、cognitive endorsement engineering（micro-consent 確認延遲、supporter co-signing 強制）三項工程修正，把 §29 audit trail 從「形式存在」推進到「對 §12 (3) supported decision-making 的實質實現」。CRPD Committee 對澳洲 2019 Concluding Observations 已要求 supported decision-making regime 之 audit trail 須含 independent review；F2 thesis 主張此 independent review 可由 V_receipt 函數的 C5 + C6 子句承載（recognition_chain 提供跨法域 anchor、audit_release_policy 提供 court order 解開條件）<sup>69</sup>。台灣未批准 CRPD 但透過《身心障礙者權利公約施行法》自願拘束，2017 與 2022 兩次國家報告國際審查已對 Art 12 提出結論性意見；F2 對台灣 TW DIW 的具體建議因此具雙重承載——對國際審查的 §29 履行證據、對國內 supported decision-making 法律改革（2019 監護宣告改革延伸）的工程基礎。

## 12.5 對工程社群、政策研究者、CRPD 學者的三項分立建議

本文目標讀者群體（intake.yaml audience）為三組——數位身分政策研究者、wallet/VC 工程社群、CRPD 與憲法學者。本文於此給出三組分立建議。

對工程社群——SA1 mixed strategy 的工程承載建議採 issuer 端 dual-issuance（同時發 SD-JWT-VC baseline 與 BBS+ presentation-ready credential）、verifier 端透過 OpenID4VP draft-23 `client_metadata.vp_formats_supported` 與 DIF Presentation Exchange v2.1 `submission_requirements` 雙路徑協商；hardware key custody 在 BBS+ 的工程缺口可透過 ARM TrustZone BBS+ prover（Bhattacharya et al. 2025 USENIX Security 初步實作）部分緩解<sup>17</sup>。

對數位身分政策研究者——SA4 G_recognition^A 三段時程的政策推進建議優先 EUDI 強制階段的 OECD 5 年路徑 accelerator；APEC CBPR + Global CBPR Forum 為非 OECD 國家（含台灣）的承接軌道；非 OECD 並行軌（AU、印度 DEPA、巴西 LGPD、印尼 PDP、GCC、ASEAN DEFA）的 schema-level functional equivalence 待 DEPA 規範文本進一步公開後重評；威權法域 functional equivalence 為 OECD 與 CRPD 雙重承認的最弱環節，歸 §11 open questions O33。

對 CRPD 與憲法學者——SA2 30 年下限為「分析性建議數」，規範性下限應引自 eIDAS implementing acts 或國內法；CRPD §29 audit trail 義務在密碼學層的具體履行路徑非唯一，本文採三大緩解 critical path 為 strengthened thesis 立場；CF2 觸發後 §29 反向使用為 §12 違反證據的風險，是 F2 thesis 對 CRPD 規範義務的最弱環節，需 CRPD Committee 個別來文程序的學理跟進。台灣《身心障礙者權利公約施行法》自願拘束範圍下的 Art 12 義務履行，與 2019 監護宣告改革（意定監護制度）共同構成 supported decision-making 法律基礎；F2 工程修正為此法律基礎的具體落地承載。

本文結束於此。本文不在 final 稿改寫範圍內主張新結論——所有具體技術選擇（cryptosuite、preservation 設計、jurisdictional_profile 對接、recognition_chain 構造）必須回到本文 §3 V_receipt 的 C1-C6 六道條件結構驗證。F3 將處理 `AgentDelegationProof2026` SDO 標準化、SA4 → SA1 反饋環路形式語義、AI Act + GDPR + eIDAS 三規範下 receipt processing lawful basis 三件議題。

---

# 參考資料

1. World Wide Web Consortium. *Verifiable Credentials Data Model v2.0*. W3C Recommendation, 15 May 2025. https://www.w3.org/TR/vc-data-model-2.0/. 來源等級 A。
2. UN Committee on the Rights of Persons with Disabilities. *General Comment No. 1 on Article 12: Equal Recognition before the Law*. CRPD/C/GC/1, 19 May 2014, §§ 26-29. 來源等級 A。
3. US Federal Rules of Evidence Rule 902(14), as amended December 1, 2017, with Advisory Committee Notes. https://www.law.cornell.edu/rules/fre/rule_902. 來源等級 A。
4. Internet Engineering Task Force. *SD-JWT-based Verifiable Credentials (SD-JWT-VC)*. draft-ietf-oauth-sd-jwt-vc-16, 24 April 2026. https://datatracker.ietf.org/doc/draft-ietf-oauth-sd-jwt-vc/16/. 來源等級 A。
5. Internet Engineering Task Force. *Selective Disclosure for JWTs (SD-JWT)*. RFC 9901, April 2025. 來源等級 A。
6. World Wide Web Consortium. *Data Integrity BBS Cryptosuites v1.0*. W3C Candidate Recommendation Draft, 7 April 2026. https://www.w3.org/TR/vc-di-bbs/. 來源等級 A。
7. Internet Research Task Force. *The BBS Signature Scheme* (draft-irtf-cfrg-bbs-signatures-07). CFRG, August 2025 (Last Call). 來源等級 A。
8. World Wide Web Consortium Verifiable Credentials Working Group. *Charter Renewal 2025-2027*. Approved 15 October 2025. 來源等級 A。
9. European Commission, EUDI Wallet Cooperation Group. *Architecture and Reference Framework*. Cooperation Group iteration referenced 2 December 2025. https://eudi.dev/latest/architecture-and-reference-framework-main/. 來源等級 A。
10. European Parliament and Council. *Regulation (EU) 2024/1183 amending Regulation (EU) No 910/2014 as regards establishing the European Digital Identity Framework*. OJ L, 30 April 2024, Chapter III Section 7 (preservation) + Section 8 (signature evidentiary effect). 來源等級 A。
11. civic-proof series, article 16: *Civic AI Agent Delegation Limits — Three-Layer Distinguishability and Engineering Corrections*. 2026-05-10, §3, §5.3-§5.5, §7, §10. 來源等級 A。
12. civic-proof series, article 15: *Civic-Proof Inclusion Rights*. 2026-04-xx, §6.2 wallet 三重預設退化路徑。 來源等級 A。
13. civic-proof series, article 14: *Cross-Jurisdictional Redress Gap*. 2026-xx, §Q10a/Q10b, Brussels I Recast 對接。 來源等級 A。
14. civic-proof series, article 8: *DNS vs Identity Trust Roots — FTLA Four-Layer Governance*. 來源等級 A。
15. European Data Protection Board. *Statement 1/2024 on EUDI Wallet*. EDPB, 2024. 來源等級 B。
16. Apple Inc. *iOS 18 PassKit and Wallet Cryptography Reference*. WWDC 2025 Session 10142. 來源等級 C。
17. Google. *Identity Credential API on Android 15*. Android Developers Blog, May 2025. 來源等級 C。
18. Bootle, J., et al. *Lattice-Based Unlinkable Signatures: Foundations and Constructions*. IACR ePrint 2024/378, 2024. 來源等級 B。
19. World Wide Web Consortium. *Verifiable Credential Data Integrity ZKP Cryptosuites Explorer Note*. September 2024. 來源等級 A。
20. Privado ID (formerly Polygon ID). *Cryptography Implementation Guide v3.0*. January 2025. 來源等級 C。
21. OpenID Foundation. *OpenID for Verifiable Presentations - draft 23*. 22 October 2024, including `client_metadata.vp_formats_supported` mechanism. 來源等級 A。
22. Decentralized Identity Foundation. *Presentation Exchange v2.1.1*. 17 April 2024. 來源等級 A。
23. EUDI Wallet Consortium POTENTIAL. *Use Case 6 Mandates — Mid-Term Technical Report*. September 2025. 來源等級 A。
24. National Institute of Standards and Technology. *FIPS 186-5: Digital Signature Standard (DSS)*. NIST, 2023, listing NIST-approved signature algorithms (ECDSA, EdDSA, RSA-PSS); BLS12-381 not included. 來源等級 A。
25. Bundesministerium der Justiz. *Bürgerliches Gesetzbuch (BGB) § 195, § 197, § 199*; *Sozialgesetzbuch (SGB) I § 45, SGB VI Verjährung provisions*. 來源等級 B。
26. UK Office of the Public Guardian. *Lasting Powers of Attorney: A Digital Future*. Consultation Response, October 2023; France *Code civil* art. 2224. 來源等級 B。
27. 中華民國內政部. 《監護宣告與輔助宣告爭議事件法院案件統計》. 2024. 來源等級 B。
28. Government of the Netherlands. *Toeslagenaffaire Parliamentary Inquiry Final Report*. Tweede Kamer, December 2020. 來源等級 B。
29. India Parliament. *Digital Personal Data Protection Act 2023 (DPDP Act)*, 11 August 2023; NITI Aayog *Data Empowerment and Protection Architecture (DEPA) White Paper*, 2020. 來源等級 B。
30. Unique Identification Authority of India (UIDAI). *Annual Report 2023-2024*. Government of India, 2024. 來源等級 C。
31. World Health Organization. *Dementia Fact Sheet*. WHO, 15 March 2024 update. 來源等級 A。
32. Alzheimer's Association. *2025 Alzheimer's Disease Facts and Figures*. *Alzheimer's & Dementia* 21(3), 2025. 來源等級 A。
33. Ledger / Trezor / Coinbase. *Hardware Wallet Loss and Recovery Industry Practices Survey*. 2024 (aggregated vendor user-facing documentation). 來源等級 C。
34. Uniform Law Commission. *Revised Uniform Fiduciary Access to Digital Assets Act (RUFADAA)*. 2015. 來源等級 A。
35. Pew Research Center. *Americans Wills and Estate Planning Survey*. 2023. 來源等級 C。
36. Republic of Estonia, e-Residency Programme. *e-Residency Annual Report 2023-2024*. 來源等級 B。
37. International Organization for Standardization. *ISO 14721:2012 Space data and information transfer systems — Open Archival Information System (OAIS) — Reference model*. 來源等級 A。
38. The Norwegian BankID consortium. *BankID Recovery Procedures for Deceased Account Holders*. BankID AS, 2023. 來源等級 C。
39. *Daubert v. Merrell Dow Pharmaceuticals, Inc.*, 509 U.S. 579 (1993). 來源等級 A。
40. The Sedona Conference. *Principles for ESI, 4th edition*. 2018. 來源等級 A。
41. International Organization for Standardization / IEC. *ISO/IEC 27037:2012 Identification, collection, acquisition and preservation of digital evidence*. 來源等級 A。
42. *Lorraine v. Markel American Insurance Co.*, 241 F.R.D. 534 (D. Md. 2007). 來源等級 A。
43. 行政院. 《電子簽章法》修正草案送立法院版本（2026 行政院送審版）. 來源等級 B。
44. US Federal Rules of Civil Procedure Rule 26(f), Rule 34(b). 來源等級 A。
45. *United States v. Foster*, 711 F.3d 657 (5th Cir. 2013). 來源等級 B。
46. *Mata v. Avianca, Inc.*, 22-cv-1461 (S.D.N.Y. June 22, 2023). **負面先例**. 來源等級 A。
47. European Parliament and Council. *Regulation (EU) 2024/1689 (AI Act)*. Article 6 + Annex III. 來源等級 A。
48. Texas State Bar AI-Disclosure Rule 2024; Oklahoma Supreme Court Order on AI in Court Filings 2025. 來源等級 B。
49. CJEU SCHUFA Holding C-634/21, 7 December 2023. 來源等級 A。
50. Hague Conference on Private International Law. *Convention of 5 October 1961 Abolishing the Requirement of Legalisation for Foreign Public Documents (Apostille Convention)*; *Apostille Handbook 4th ed.*, 2024. 來源等級 A。
51. Hague Conference on PIL Permanent Bureau. *e-Apostille Pilot Program 2024 Statistics*. 來源等級 B。
52. Hague Conference on PIL. *2024 Berlin Working Group on e-APP*. 來源等級 B。
53. OECD. *Recommendation of the Council on Artificial Intelligence (OECD/LEGAL/0449)*, adopted 22 May 2019, amended 3 May 2024. 來源等級 A。
54. OECD AI Incidents Monitor (AIM). https://oecd.ai/en/incidents. Launched April 2024. 來源等級 A。
55. G7 Hiroshima Process. *International Code of Conduct for Organizations Developing Advanced AI Systems*. 30 October 2023; Hiroshima AI Process Friends Group Statement, Tokyo, May 2024. 來源等級 A。
56. Council of Europe. *Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law (CETS No. 225)*. Opened for signature 5 September 2024, Vilnius. 來源等級 A。
57. African Union. *Continental AI Strategy*. AU Executive Council, July 2024. 來源等級 A。
58. APEC. *Cross-Border Privacy Rules System: Policies, Rules and Guidelines*, updated 2022; Global CBPR Forum 2024 Declaration. 來源等級 A。
59. NITI Aayog. *Data Empowerment and Protection Architecture (DEPA) Whitepaper*. Government of India, 2020. 來源等級 B。
60. Brazil. *Lei Geral de Proteção de Dados (LGPD), Lei nº 13.709/2018*; ANPD Resolução CD/ANPD nº 19/2024 on international data transfers. 來源等級 B。
61. Indonesia. *Personal Data Protection Law (UU No. 27/2022, PDP Law)*. 來源等級 B。
62. Gulf Cooperation Council Supreme Council. *Digital Identity Mutual Recognition Initiative*. 2024. 來源等級 B。
63. ASEAN Economic Ministers. *Digital Economy Framework Agreement (DEFA) Negotiations*. 2023-2025. 來源等級 B。
64. European Commission. *EU-US Data Privacy Framework Adequacy Decision*. 10 July 2023. 來源等級 A。
65. 中華人民共和國. 《個人信息保護法》(PIPL). 2021-08-20 通過, 2021-11-01 施行. 來源等級 B。
66. 中華民國數位發展部. 《數位憑證皮夾（TW DIW）信任清單與公共鏈部署規劃》. 2024-2025. 來源等級 C。
67. 不丹 NDI / Druk Holding & Investments. *Technical Architecture: EVM-Compatible Private Chain Deployment and Cryptosuite Choices*. 2024-06。不丹 NDI 採 EVM-compatible private chain 而非 Ethereum L1 直接寫入；本條標題與正文 §8.7 表述一致。來源等級 C。
68. 台灣失智症協會. 《2024 年報》; 衛福部. 《長照 2.0 給付統計 2024 年度》. 來源等級 C。
69. UN Committee on the Rights of Persons with Disabilities. *Concluding observations on the combined second and third periodic reports of Australia*. CRPD/C/AUS/CO/2-3, 2019. 來源等級 A。
70. *In re Vee Vinhnee*, 336 B.R. 437 (9th Cir. BAP 2005). 來源等級 B。
71. 中華民國最高法院. 110 年度台上字第 1429 號民事判決. 來源等級 C。
72. Internet Engineering Task Force. *Time-Stamp Protocol (TSP)*, RFC 3161; *Update to RFC 3161 for Long-Term Validation*, RFC 5816. 來源等級 A。
73. 中華人民共和國國家互聯網信息辦公室. 《生成式人工智慧服務管理暫行辦法》. 2023-08-15 施行, Art 4. 來源等級 A。
74. BRICS. *Kazan Declaration: Strengthening Multilateralism for Just Global Development and Security*. XVI BRICS Summit, 23 October 2024; BRICS Rio Declaration (draft), July 2025. 來源等級 B。
75. International Telecommunication Union. *AI for Good Global Summit 2024 Outcomes*. Geneva. 來源等級 C。
76. National Security Agency. *Commercial National Security Algorithm Suite 2.0 (CNSA 2.0)*. September 2022; 2024 update. 來源等級 C。
77. Mosca, M. "Cybersecurity in an Era with Quantum Computers: Will We Be Ready?" *IEEE Security & Privacy* 16(5), 2018, pp. 38-41. 來源等級 B。
78. National Institute of Standards and Technology. *FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard*. NIST, 13 August 2024. 來源等級 A。
79. National Institute of Standards and Technology. *FIPS 204: Module-Lattice-Based Digital Signature Standard*. NIST, 13 August 2024. 來源等級 A。
80. National Institute of Standards and Technology. *FIPS 205: Stateless Hash-Based Digital Signature Standard*. NIST, 13 August 2024. 來源等級 A。
81. Chen, L. et al. *NISTIR 8105: Report on Post-Quantum Cryptography*. NIST, 2016. 來源等級 A。
82. Internet Engineering Task Force PQUIP Working Group. *Hybrid Signing Drafts*. 2024-2025. 來源等級 B。
83. National Institute of Standards and Technology. *NIST IR 8547 (Draft): Transition to Post-Quantum Cryptography Standards*. November 2024. 來源等級 B。
84. World Wide Web Consortium. *Decentralized Identifiers (DIDs) v1.0: Core architecture, data model, and representations*. W3C Recommendation, 19 July 2022. 來源等級 A。
85. Tessaro, S. & Zhu, C. "Revisiting BBS Signatures." *EUROCRYPT 2023*, LNCS 14004, 2023; Camenisch, J., Drijvers, M. & Lehmann, A. "Anonymous Attestation Using the Strong Diffie Hellman Assumption Revisited." *TRUST 2016*, 2016. 來源等級 B。
86. Grimm, P. W., Capra, D. J. & Joseph, G. P. *Authenticating Digital Evidence*. Baylor Law Review 69(1) (2017); Grimm, P. W. *Best Practices for Authenticating Digital Evidence*. ABA Section of Litigation / Federal Lawyer commentary, 2019. 來源等級 C。卷期改採學術期刊版本而非 F.R.D. 卷期格式（後者 99 卷對應 1980 年代而非 2019 年）。
87. Capra, D. J. *Electronic Evidence and the Federal Rules of Evidence*. Fordham L. Rev., 2022. 來源等級 C。
88. OECD. *Recommendation of the Council Concerning Guidelines Governing the Protection of Privacy and Transborder Flows of Personal Data (OECD/LEGAL/0188)*, 1980; OECD *Cryptography Guidelines (OECD/LEGAL/0289)*, 1997; Council of Europe *Convention on Cybercrime (CETS 185)*, 2001. 來源等級 A。
89. ETSI. *TS 119 511 / TS 119 512 Long-term preservation services* technical standards. 來源等級 B。
90. Council of Europe. *Convention 108+ (CETS 223): Modernised Convention for the Protection of Individuals with regard to the Processing of Personal Data*, 2018. 來源等級 A。
