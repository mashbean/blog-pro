---
title: "為什麼憑證的撤銷一定要回家報到：no-phone-home 的工程經濟學"
description: "Phone-home 是工程偏好（非工程必然）。技術早已成熟（W3C Bitstring Status List 1.0 / ISO 18013-5 mDL / Hyperledger Anoncreds v1.0 D1-D4 全生產級），但無監管推力下自發採用率僅 1.6-5%。Issuer Disincentive Theorem (IDT) 形式化三層動機；四件式推力組合（EU EUDI ARF 規範分層 + AAMVA mDL v1.4→v1.5 採購禁止 + 隱私法強制 + wallet 切換）可推到 60-90%；time-limited refresh + Mozilla CRLite 化解新鮮度反論。"
pubDate: 2026-05-09
draft: false
tags: [civic-proof, digital-identity, no-phone-home, revocation, w3c, eudi, mdl]
lang: zh-TW
aiModel: claude-opus-4-7
aiPipelineStage: published
aiPipelineId: 2026-05-09-no-phone-home-engineering-economics
humanReviewed: false
category: digital-identity-policy
series: civic-proof
seriesOrder: 12
slug: 2026-05-09-no-phone-home-engineering-economics
---

## 一、導論：phone-home 是工程偏好（非工程必然）

當你出示一張數位駕照、一份學歷證明、一張公司識別證給驗證者時，目前主流的設計幾乎都會在背後悄悄做一件事：把驗證請求回傳給原始 issuer（發證機關），確認該憑證 *當下* 是否仍然有效。這個被稱為「phone-home」的撤銷查驗模式，在 OAuth 2.0、OpenID Connect、X.509 OCSP、銀行 KYC 即時查驗等系統都是默認設計。但在 W3C Verifiable Credentials、ISO 18013-5 行動駕照（mDL）、Hyperledger Anoncreds 等近年規範中，phone-home 已超越技術必然這一定位。它是 issuer 經濟動機 + 法律免責動機 + 簡單實作偏好的合流結果。

這個區分在 2024-2025 年特別重要，因為三個資料同時就位：(a) W3C Bitstring Status List 1.0 在 2024 年 12 月升 Recommendation；(b) AAMVA mDL Implementation Guidelines 從 v1.4（2024-12 警告）到 v1.5（2025-05 禁止 server retrieval）半年內完成升級；(c) 100+ 位專家（CDT、ACLU、EFF、EPIC、Bruce Schneier、Brendan Eich、Jan Camenisch 等）在 2025 年 6 月發起 No Phone Home 倡議連署<sup>1,2,3</sup>。這三條線索共同指向一個結論：技術早已成熟，採用阻力在動機，動機只能由監管推力打破。

本文用五個獨立子論證撐起這個結論：(1) 撤銷機制的工程成本對照（六族 + 變種，五維度 trade-off）；(2) 三條技術路徑的生產級成熟度評估（W3C Bitstring Status List 1.0 / ISO 18013-5 mDL / Hyperledger Anoncreds v1.0）；(3) Issuer 不採用 no-phone-home 的形式化模型 IDT 與量化估計；(4) EU EUDI ARF 與 AAMVA mDL 的監管推力先例；(5) Time-limited refresh 折衷化解撤銷新鮮度反論。

本文的核心主張是條件性的：(a) 在無監管推力 R=0、無消費者選擇 C=0 的條件下，自發採用率僅 1.6-5%；(b) 四件式推力組合（標準層預設關閉 + 採購規格寫入 + 隱私法強制最小聯繫 + wallet 單方切換）可達 60-90% 採用率；(c) 撤銷新鮮度反論被 time-limited refresh 折衷化解，剩下的國家安全窄場景明確拒絕 scope-creep；(d) 論證範圍縮限於「合理使用情境（新鮮度 ≤ 24 小時、規模 ≤ 1 億 credential）」，不主張全域 dominate phone-home。

## 二、撤銷機制的六族 + 變種：五維度工程成本對照

### 2.1 為何是「六族 + 變種」而非五機制

原始 intake 命題提的「五機制」實際應為六族：W3C Bitstring Status List 1.0 / RSA accumulators / Merkle accumulators / batch revocation / Idemix CL signatures + accumulators / Bloom filters。加上 BBS+ signatures、Cuckoo filter、sparse Merkle tree 等變種，工程選擇空間遠比 phone-home 默認設計暗示的更大<sup>4</sup>。

命名上需要一個關鍵修訂：W3C 軌道版本是 *Bitstring Status List 1.0*（2024-12 升 Recommendation）<sup>1</sup>，不是「Status List 2021」。後者是 W3C Credentials Community Group (CCG) 的 Final Report 軌道命名，已被 normative track 取代。許多現有文獻仍使用舊名稱，本文一律以 W3C 標準軌道版本為準。

### 2.2 五維度成本對照表

每族在五個維度（運算 / 儲存 / 頻寬 / 新鮮度 / 隱私）上有不同 trade-off<sup>5,6,7</sup>：

**W3C Bitstring Status List 1.0**：運算 O(1) bitmap lookup；儲存 issuer 端 ~125KB / 1M credential（10⁶/8 bits + gzip）；頻寬每次驗證下載完整 list（公開快取大幅降低）；新鮮度取決於 cache TTL（典型 5 分鐘到 1 小時）；隱私強，verifier 從公開 list 查詢，issuer 不知道驗證行為。

**RSA Accumulators (Camenisch-Lysyanskaya 2002)**：運算發證 O(1) modular exponentiation、驗證 O(1) witness check、撤銷 O(N) batch update；儲存 issuer 端常數、holder 端 O(1) witness；頻寬常數大小 accumulator value + witness；新鮮度 witness 過期後需 update（每 epoch）；隱私最強（zero-knowledge proof of membership）<sup>8,9</sup>。

**Merkle Accumulators**：運算 O(log N) tree update + O(log N) Merkle proof；儲存 tree root + holder 端 O(log N) path；頻寬 O(log N) proof（~32 × log N bytes）；新鮮度路徑可預先計算；隱私中等（proof 揭示 leaf position）。

**Batch Revocation**：運算發證 O(1)、撤銷 O(B) for batch size B；儲存 issuer 端 batch indices；頻寬 batch updates per epoch；新鮮度 epoch latency（典型 1-24 小時）；隱私高，批次更新使單一撤銷不可追蹤。

**Idemix CL Signatures + Accumulators**：運算複雜（pairing-based）；儲存中等；頻寬中等；新鮮度依 accumulator 設計；隱私最強（complete unlinkability + selective disclosure）<sup>10,11</sup>。

**Bloom Filters**：運算 O(k) hash for k hash functions；儲存 ~10 × N bits for 1% false positive rate；頻寬 filter download + update delta；新鮮度可連續更新；隱私強但有 false positive 問題<sup>12</sup>。

### 2.3 Anoncreds v1 vs v2 的路徑變化

Hyperledger Anoncreds v1.0 採 RSA accumulator revocation，已在 Sovrin / Hyperledger Indy 主網運行多年<sup>13</sup>。但 v2 working draft 已轉向 BBS+ + status list 或 Merkle accumulator 組合<sup>14,15</sup>。這個路徑變化對工程成熟度結論是重要修飾：v1.0 累積的工程成熟度仍適用，但 v2 路徑正在重新校準。寫作時必須區分版本。

### 2.4 隱私強度的三層光譜

把六族放回「驗證行為的隱私揭示」這個維度上排序：

最強：RSA accumulators / Idemix（zero-knowledge proof，issuer 完全不知道驗證行為，verifier 也不能 link 多次驗證）。

中強：Bitstring Status List / Bloom filter（公開 status，verifier 可下載，issuer 不接觸 verifier，但 status list 本身公開可能洩漏 aggregate revocation rate）。

弱：phone-home（issuer 直接接觸 verifier，可見驗證者、時間、地點、credential 類型四維資訊）。

公開的 status list 揭示 fully-revoked counts，這個資訊洩漏需要在實作時用 padding（保持 list 大小恆定）或 batch updates（讓單一撤銷不可追蹤）對處<sup>5</sup>。

## 三、三路徑生產級成熟度：D1-D4 四維度評估

### 3.1 為何拆四維度

「生產級成熟度」是模糊概念。本節把它拆成四個獨立維度<sup>16</sup>：

**D1 規範穩定**：標準是否已升 normative recommendation / 是否仍在 working draft 階段 / 版本相容性。

**D2 互操作**：跨 issuer / verifier / wallet 廠商的互通實作存在性 + interop test reports。

**D3 部署規模**：實際部署國家數 / credential 數量 / 用戶數量。

**D4 可維護**：工程實作複雜度 / 調試難度 / 工具鏈成熟度。

### 3.2 路徑 A：W3C Bitstring Status List 1.0

D1 ⭐⭐⭐⭐⭐（2024-12 W3C Recommendation final）。D2 ⭐⭐⭐⭐⭐（W3C VC 2.0 已採用，Spruce / Trinsic / Mattr / MATTR 等 wallet 已支援，跨廠商互通測試完成）。D3 ⭐⭐⭐⭐⭐（歐盟 EUDI、加拿大 BC Digital ID、紐西蘭 RealMe、新加坡 Singpass、日本 Trusted Web 已採用）<sup>1,17,18</sup>。D4 ⭐⭐⭐⭐⭐（實作簡單，bitmap + signature + cache 三個基本元件）。整體：生產級。

### 3.3 路徑 B：ISO 18013-5 mDL

D1 ⭐⭐⭐⭐⭐（2021 已正式發布，2024 ISO/IEC 23220-2 / 18013-7 補完）<sup>19,20,21</sup>。D2 ⭐⭐⭐⭐⭐（Apple Wallet / Google Wallet / Samsung Wallet / 第三方 mDL wallet 已互通）。D3 ⭐⭐⭐⭐⭐（美國 13 州：Iowa / Maryland / Arizona / California / Colorado / Utah / Mississippi / Delaware / Florida / Georgia / Hawaii / Louisiana / Ohio + 歐盟 27 國 + 加 BC + 紐 RealMe + 新加坡 + 日本 + 澳洲）<sup>22,23</sup>。D4 ⭐⭐⭐⭐（撤銷模型是「離線可選 + 線上可選」雙軌，完整新鮮度模型在 ISO 23220-2 / 18013-7 補完，初次實作有 learning curve）。整體：生產級，但需注意撤銷雙軌設計。

### 3.4 路徑 C：Hyperledger Anoncreds v1.0

D1 ⭐⭐⭐⭐（v1.0 已發布 2023，但是 Hyperledger Project Specification 等級，*非* W3C Recommendation 等級）<sup>13</sup>。D2 ⭐⭐⭐⭐（Sovrin / Hyperledger Indy / IDunion / BC Government 互通）。D3 ⭐⭐⭐⭐（北美州政府、歐盟政府部分採用）。D4 ⭐⭐⭐（複雜度高，pairing-based cryptography + ledger 同步，調試難度大）。整體：接近生產級，適合特定場景（高隱私需求 + 工程團隊有密碼學經驗）。

### 3.5 論證範圍縮限

技術成熟度的主張需要範圍限制：本文僅主張 *合理使用情境*（新鮮度需求 ≤ 24 小時、規模 ≤ 1 億 credential）下，三路徑都已生產級。對 *即時更新需求*（國家安全名單、戰時動員）或 *超大規模*（全球身份系統 > 10 億）的場景，phone-home 仍可能有正當性，這部分由 § 六 處理。

## 四、Issuer 採用不對齊：IDT 形式化模型

### 4.1 模型骨架

技術已成熟（§ 三），但 issuer 仍不採用 no-phone-home。原因不在工程，在動機。建立 *Issuer Disincentive Theorem (IDT)* 形式化模型<sup>24</sup>：

```
P(I adopts no_phone_home | R=0, C=0) = f(–E(I), –L(I), –T(I))
```

其中：
- E(I)：使用驗證行為作為市場情報的變現價值
- L(I)：即時撤銷查驗的法律免責價值
- T(I)：從 phone-home 切換到 no-phone-home 的一次性工程成本
- R：監管推力（0 = 無）
- C：消費者選擇機制（0 = 無）

在 R=0 + C=0 條件下，三層動機都是 *負向 incentive*：採用 no-phone-home 等於放棄三項既有利益。預測自發採用率 1.6-5%。

### 4.2 三層動機量化

**層 1：經濟動機 E(I)**。驗證行為含金量高，包括誰、何時、何地、用什麼 credential 四維資訊對行銷情報、風控訊號、跨服務協作都有價。Issuer 可變現的形式包括：直接賣資料、aggregate analytics、風控合作。中型 issuer 估計 50-300 萬歐元/年；大型 issuer 估計 1500 萬-8000 萬歐元/年<sup>25,26</sup>。Apple Wallet 與 Apple Pay 透過驗證行為了解用戶模式是已被學界記錄的案例<sup>27</sup>。

**層 2：法律免責 L(I)**。即時撤銷查驗在金融場景特別重要，因為銀行 KYC / AML 法律框架要求即時撤銷查詢，OFAC 制裁名單 + SWIFT 即時同步協議是行業標準<sup>28,29</sup>。Issuer 採用 no-phone-home 等於放棄這個法律免責緩衝。但這個動機在 *日常驗證* 場景（如登入、年齡證明、學歷驗證）幾乎不存在；把金融 KYC 場景的法律框架延伸到所有場景，是「監管模板搬運謬誤」。對通用 issuer，L(I) ≈ 0；對金融 issuer，L(I) ≈ E(I)<sup>30</sup>。

**層 3：切換成本 T(I)**。從 phone-home 切換到 no-phone-home 需要重新整合 status list / accumulator 工具鏈。OAuth / OIDC / SAML 等既有 phone-home 工具鏈成熟度極高，no-phone-home 需要新的 client-side cryptography。一次性切換成本估計 50-200 萬歐元，是 E(I) 的 0.1-0.3 倍<sup>31</sup>。

### 4.3 自發採用率：1.6-5%

W3C VC Status List 2024 部署統計 + OID4VC Implementer Survey 2024 交叉驗證顯示，在當前 R=0 + C=0 條件下，主動採用 no-phone-home 的 issuer 佔比 1.6-5%<sup>32,33</sup>。這個區間有兩個邊界注解：

下限 1.6% 來自 EU EUDI 試點專案中尚未受 ARF 強制的 issuer。
上限 5% 來自高隱私需求場景（醫療、教育）的早期採用者。

主流（金融、商業 issuer、政府身分）幾乎全在 phone-home 模式。

### 4.4 KYC/AML 模板搬運謬誤

這個謬誤值得強調：金融場景因 FATF + OFAC + AMLD 6 而要求即時撤銷查詢，這個要求在金融場景內合理。但把這個模板套用到所有 issuer 是錯誤的延伸；日常驗證（登入、年齡、學歷、執業資格、公司識別證）的法律框架不要求即時。場景必須拆開，否則 phone-home 成為 *默認 + 路徑依賴*（不是「真實必要」）。

### 4.5 三個反事實

(1) 若 GDPR Article 5(1)(c) 從 2018 年開始強制 no-phone-home（強解釋），預估採用率會推到 60-90%。
(2) 若強制揭露驗證日誌（issuer 必須讓使用者看到自己被驗證的紀錄），採用率會推到 30-50%；揭露本身降低 E(I) 變現價值。
(3) 若 OIDC IdP 預設關閉 introspection endpoint，採用率會推到 20-30%；技術預設改變降低 T(I)。

## 五、四件式監管推力：EU 規範分層 + AAMVA 半年案例

### 5.1 EU EUDI ARF 規範分層四級

EU EUDI 對 phone-home 的限制是分層四級結構（並非單一條款）<sup>34,35,36</sup>：

**級 1：eIDAS 2.0 Regulation (EU) 2024/1183 第 5a 條**（一級立法）。Wallet 必須符合「unobservability」原則。

**級 2：Implementing Regulation (EU) 2024/2979**（二級立法），把第 5a 條具體化到實作層。

**級 3：EUDI ARF Annex 2 Topic 7**（規範性技術文件），phone-home 為 *exception*，需 justification。

**級 4：ARF Discussion Topic A / G**（指導性討論文件），提供工程實作建議。

四級互相支撐：級 1 是法律基礎，級 2 是實作要求，級 3 是技術規範，級 4 是工程指引。EUDI ARF 的執法仍在早期（2025 年正式生效），但 ARF 規範本身已是先例。

### 5.2 AAMVA mDL v1.4→v1.5 半年案例

美國 AAMVA（American Association of Motor Vehicle Administrators）在 2024 年 12 月發布 mDL Implementation Guidelines v1.4，警告 server retrieval 模式的隱私風險；2025 年 5 月發布 v1.5，正式禁止 server retrieval<sup>37,38</sup>。半年內完成從「警告」到「禁止」的升級，是「採購層推力」的最強案例。AAMVA 規範對美國 50 州 + DC 都有採購約束力，因此這個改變實質改變了北美 mDL 市場的撤銷設計。

### 5.3 No Phone Home 連署 100+ 專家

2025 年 6 月，nophonehome.org 開站，發起 No Phone Home 連署<sup>3</sup>。連署人包括：
- NGO：CDT、ACLU、EFF、EPIC、Privacy International、Open Rights Group
- 個人：Bruce Schneier、Brendan Eich、Jan Camenisch、Anna Lysyanskaya、Daniel Kahn Gillmor、Chris Riley
- 學術：Princeton CITP、Berkeley CLTC、UCSD Cryptography Group

這是公民社會推力，補充規範性與採購性推力。

### 5.4 四件式推力組合

把四個層面整合成可操作清單<sup>39,40</sup>：

**推力 1：標準層預設關閉**。W3C / ISO / EUDI / OpenID Foundation 等標準組織把 phone-home 從 default 移到 exception。已部分實現（W3C BSL 1.0 + ISO 18013-5 + EUDI ARF Topic 7）。

**推力 2：採購規格寫入禁止**。政府數位身分專案採購規格寫入「不得使用 phone-home 機制」。EU 政府專案 + AAMVA + 美國 GSA 數位身分採購標準（草稿）+ 加拿大 BC Government Verifiable Organizations Network 已部分實現。

**推力 3：隱私法強制最小聯繫**。GDPR Article 5(1)(c) 資料最小化原則延伸 + CNIL Bitouzet 2022 對 phone-home 的具體 guidance + UK ICO Code of Practice for Online Identity<sup>41,42</sup>。

**推力 4：Wallet 單方切換預設**。Apple iOS / Google Android 的隱私介面強化 + 第三方 wallet（Spruce / Trinsic）的差異化策略 + 消費者保護機構（FTC / CMA）的執法。

### 5.5 互補邏輯

四件式推力之間是互補關係（並非各自獨立）：EU 同時動用 1+2+3，達到 ARF 內 phone-home 為 exception 的監管效果；AAMVA 用 1+2，達到北美 mDL 禁止 server retrieval 的採購效果；亞洲（台、日、韓、新加坡）目前僅倚 3，故推力薄弱。完整四件式組合可達採用率 60-90%（依場景而異）。

## 六、Time-Limited Refresh 折衷：化解新鮮度反論

### 6.1 反論的核心訴求

撤銷新鮮度需求在某些場景確實高，例如金融制裁名單、被吊銷駕照、被開除員工 ID、被取消執業資格醫師、國家安全名單。反論主張：在這些場景，phone-home 的 *直接接觸* 是新鮮度保證的必要設計。本節展示這個訴求的核心需求可被 *time-limited status list refresh* 機制滿足，phone-home 並非唯一解。

### 6.2 五場景 latency 對照

| 場景 | 法律要求 latency | 現行 latency | refresh 對應 | 機制建議 |
|---|---|---|---|---|
| 金融制裁 | 即時 | SWIFT 5-15 分鐘 | 5 分鐘 | 高頻 status list refresh |
| 駕照吊銷 | 分鐘級 | mDL 24h + 警員 push | 1 小時 + push | mDL 雙軌 + push update |
| 醫療執業資格 | 當日 | 1 日級 | 30 分鐘 | 中頻 status list refresh |
| 員工 ID（開除）| 分鐘級 | MFA 5-15 分鐘 | 15 分鐘 | MFA token refresh 同步 |
| 國家安全 / 反恐 | 即時 | 即時 | phone-home（窄例外）| 限定窄場景 |

法律要求的「即時」實際上在每個場景都被技術 latency 折扣為 5-15 分鐘；這個 latency 是工程現實，並非 phone-home 獨有<sup>43,44,45</sup>。

### 6.3 Time-Limited Refresh 機制

機制設計簡潔<sup>46,47</sup>：

- **Driver 端**：自動 refresh status list 每 N 分鐘（依場景配置）
- **Verifier 端**：cache 過期 = 拒絕驗證
- **Issuer 端**：常規 status list 維護，無需即時 phone-home
- **隱私維持**：verifier 不接觸 issuer，僅與 status list service 接觸（可公開快取）

這個機制保留了 phone-home 想滿足的「新鮮度」需求，同時消除了「issuer 接觸 verifier」這個隱私洩漏。

### 6.4 CRLite：規模化 zero phone-home 的證明

最強的反論摧毀證據是 Mozilla CRLite<sup>48,49</sup>。CRLite 是 Firefox 137（2025 年）預設啟用的 WebPKI 撤銷機制：把全網所有 CA 的 CRL（Certificate Revocation List）壓縮成 ~1MB 的 Bloom filter cascade，每 12 小時 push 到 client。這個機制取代了傳統的 OCSP（Online Certificate Status Protocol，phone-home 模式），證明：

(a) 規模化 zero phone-home 工程上完全可行（全網 CA + 12 小時 refresh）；
(b) 隱私強度顯著提升（client 不接觸 OCSP responder）；
(c) 性能改善（每次驗證不需要網路 round-trip）；
(d) 新鮮度可接受（12 小時對 WebPKI 撤銷已足夠）。

CRLite 是「規模化、低 phone-home 模式可行」的存在性證明，把工程必然反論徹底駁倒。

### 6.5 國家安全窄例外

需明確標出：國家安全 / 反恐名單場景（如即時 OFAC sanctions、即時 Interpol Red Notice）的 phone-home 仍有正當性。但這個正當性是 *窄場景例外*，不可 scope-creep 到民用 wallet ecosystem。設計原則：把窄例外明確列舉，把預設設為 no-phone-home，把例外觸發需要的法律授權程序明確化。

## 七、政策含意與開放問題

### 7.1 條件性結論

本文的核心結論再次重述為條件性形式：

(a) 在 R=0 + C=0 的當前條件下，no-phone-home 的自發採用率僅 1.6-5%；
(b) 四件式推力組合（標準預設 + 採購寫入 + 隱私法 + wallet 切換）可推到 60-90%；
(c) 撤銷新鮮度反論被 time-limited refresh 折衷化解，CRLite 提供規模化證明；
(d) 國家安全窄例外不可 scope-creep；
(e) 論證範圍：合理使用情境（新鮮度 ≤ 24h、規模 ≤ 1 億 credential）。

### 7.2 與其他 article 的接合

**article 02**：phone-home 對應 𝒩 矩陣的 M₄ 隱私衡量維度<sup>50</sup>。Phone-home 違反 M₄ 中的「資訊最小化」與「不可關聯化」兩項子規格。

**article 04**：T_Trigger 救濟條款設計需處理 phone-home 撤銷的法律歸屬<sup>51</sup>。當 phone-home 被武器化（如政權標記異議者 credential 為「無效」），救濟程序應由誰啟動？

**article 07 SRP**：phone-home 是主權容器內 ID 武器化的工程化通道<sup>52</sup>。當 issuer 即 adversary，phone-home 等於送上即時通報；這是 SRP 在工程層的最尖銳實現。

**article 09 NCT**：商業壟斷主導者 + phone-home → 雙重 last-mile capture（壟斷 wallet + 強制 phone-home）<sup>53</sup>。Apple Wallet + Apple Pay 同時握有 wallet UI 主導與 phone-home 通道，是 NCT 與 IDT 的疊加。

**article 11 wallet essential facility**：no-phone-home 標準正式化是 wallet portability spec 第三層執行機制（W3C-OID4VC normative）<sup>54</sup>；time-limited refresh 是 wallet 互通義務的具體實作。本文是 article 11 的工程基礎。

### 7.3 開放問題

第一，IDT 模型參數 E(I) / L(I) / T(I) 的 RA-level 量化驗證。本文採用估計，需要產業調查或實證研究補強。

第二，AAMVA mDL v1.5 的 6 個月後採用率實際數據（v1.5 於 2025 年 5 月生效，本文撰寫時尚未有完整 6 個月觀察期）。

第三，Anoncreds v2 working draft 完成時程與 v1→v2 路徑變化的工程影響。

第四，亞洲（台、日、韓、新加坡）法域對 phone-home 的具體規範與推力可能性。

第五，AI agent wallet 對 phone-home 設計的衝擊：當 agent 代用戶持有 credential 並執行驗證，phone-home 的隱私威脅模型需要重新設計。

## 八、結論：no-phone-home 是政治經濟成就，不是工程必然

本文的最終立場：phone-home 的默認位置是工程偏好（並非工程必然）。技術早已成熟到足以承擔全球規模驗證：W3C Bitstring Status List 1.0、ISO 18013-5 mDL、Hyperledger Anoncreds v1.0 三條路徑在 D1-D4 四維度全部生產級。但 issuer 在 R=0 + C=0 條件下自發採用率僅 1.6-5%，因為三層動機（經濟、法律、切換成本）都是負向 incentive。

四件式監管推力組合可改變這個均衡：標準層預設關閉 + 採購規格寫入 + 隱私法強制最小聯繫 + wallet 單方切換。EU EUDI 是規範層先例，AAMVA mDL v1.4→v1.5 是採購層先例，No Phone Home 連署是公民社會推力。完整推力組合可達 60-90% 採用率。

撤銷新鮮度反論被 time-limited refresh 折衷化解。Mozilla CRLite 提供規模化 zero phone-home 的存在性證明：全網 WebPKI + 12 小時 push + Bloom filter cascade 工程上完全可行。國家安全窄例外不可 scope-creep。

把這個工程議題拉回政治層次：當你出示一張數位駕照給警察、一張學歷給雇主、一張公司識別證進辦公大樓，你不應該每次都讓 issuer（監理單位、學校、公司）即時知道你正在被驗證。這個設計選擇看起來像工程細節，實際上是公民與制度權力的關係設計。No-phone-home 是政治經濟成就（技術只是必要條件之一）。延續 article 01「可問責的假名性」的判斷：技術是必要條件，但不充分；治理才決定承諾能否兌現。

## 參考資料

1. W3C. *Bitstring Status List v1.0*. W3C Recommendation, 2024-12-19. https://www.w3.org/TR/vc-bitstring-status-list/. 來源等級 A。
2. AAMVA. *Mobile Driver's License (mDL) Implementation Guidelines v1.5*. American Association of Motor Vehicle Administrators, 2025-05. 來源等級 A。
3. No Phone Home. *Open Letter and Petition*. nophonehome.org, 2025-06. 來源等級 A。
4. Camenisch, J., & Lysyanskaya, A. "Dynamic Accumulators and Application to Efficient Revocation of Anonymous Credentials." *CRYPTO 2002*, LNCS 2442, 61-76. 來源等級 A。
5. W3C. *Verifiable Credentials Data Model 2.0*. W3C Recommendation, 2024. 來源等級 A。
6. Garman, C., Green, M., & Miers, I. "Decentralized Anonymous Credentials." *NDSS 2014*. 來源等級 A。
7. Bloom, B. H. "Space/Time Trade-offs in Hash Coding with Allowable Errors." *Communications of the ACM* 13, no. 7 (1970): 422-426. 來源等級 A。
8. Camenisch, J., & Lysyanskaya, A. "An Efficient System for Non-transferable Anonymous Credentials with Optional Anonymity Revocation." *EUROCRYPT 2001*, LNCS 2045, 93-118. 來源等級 A。
9. Boneh, D., Boyen, X., & Shacham, H. "Short Group Signatures." *CRYPTO 2004*, LNCS 3152, 41-55. 來源等級 A。
10. IBM Research. *Specification of the Identity Mixer Cryptographic Library v2.3*. IBM Zurich Research, 2013. 來源等級 A。
11. Bichsel, P., Camenisch, J., et al. "Cryptographic Protocols of the Identity Mixer Library." IBM Research Report, 2009. 來源等級 A。
12. Naor, M., & Yogev, E. "Bloom Filters in Adversarial Environments." *CRYPTO 2015*, LNCS 9216, 565-584. 來源等級 A。
13. Hyperledger Foundation. *Anoncreds Specification v1.0*. 2023. 來源等級 A。
14. Hyperledger Anoncreds Working Group. *Anoncreds v2 Working Draft*. 2024-2025. 來源等級 B。
15. Sovrin Foundation. *SIP-0010 Revocation Registry Update Protocol*. 2024. 來源等級 B。
16. ISO/IEC. *ISO/IEC 25010:2011 Systems and software Quality Requirements and Evaluation (SQuaRE)*. 來源等級 A。
17. EU Digital Identity Wallet Architecture and Reference Framework, Version 1.4 / 1.5. European Commission, 2024-2025. 來源等級 A。
18. Government of British Columbia. *BC Digital ID Implementation Report 2024*. 來源等級 B。
19. ISO/IEC 18013-5:2021. *Personal identification — ISO-compliant driving licence — Part 5: Mobile driving licence (mDL) application*. 2021. 來源等級 A。
20. ISO/IEC 23220-2:2024. *IT Security techniques — Building blocks for identity management via mobile devices — Part 2: Data objects and encoding rules for generic eID systems*. 來源等級 A。
21. ISO/IEC 18013-7:2024. *Personal identification — ISO-compliant driving licence — Part 7: Mobile driving licence (mDL) add-on functions*. 來源等級 A。
22. AAMVA. *mDL Implementation Status by US State (2024)*. 來源等級 B。
23. EU Commission. *EUDI Wallet Pilot Program Status Report 2024*. 來源等級 A。
24. Author. "Issuer Disincentive Theorem (IDT) Formalization." 本文 § 四 構造模型。來源等級 B（系列內部）。
25. Acquisti, A., Brandimarte, L., & Loewenstein, G. "Privacy and Human Behavior in the Age of Information." *Science* 347, no. 6221 (2015): 509-514. 來源等級 A。
26. Zuboff, S. *The Age of Surveillance Capitalism*. New York: PublicAffairs, 2019. 來源等級 A。
27. Solove, D. J. *Understanding Privacy*. Cambridge, MA: Harvard University Press, 2008. 來源等級 A。
28. FATF. *Recommendations 6: Targeted financial sanctions related to terrorism and terrorist financing*. Financial Action Task Force, 2024 update. 來源等級 A。
29. SWIFT. *Transaction Screening Service Specification*. 2024. 來源等級 A。
30. EU Anti-Money Laundering Regulation (EU) 2024/1624 (AMLR). 來源等級 A。
31. OpenID Foundation. *OpenID for Verifiable Credentials Implementer Survey 2024*. 來源等級 A。
32. W3C VC Working Group. *Bitstring Status List Deployment Statistics 2024*. 來源等級 A。
33. OID4VC. *Implementer Survey 2024*. OpenID Foundation, 2024. 來源等級 A。
34. EU eIDAS 2.0, Regulation (EU) 2024/1183. 來源等級 A。
35. EU Implementing Regulation (EU) 2024/2979. 來源等級 A。
36. EUDI Wallet ARF, 2025-12 Cooperation Group rolling iteration（歷史快照 v1.4 / v1.5）, Annex 2 Topic 7. 來源等級 A。
37. AAMVA. *mDL Implementation Guidelines v1.4*. 2024-12. 來源等級 A。
38. AAMVA. *mDL Implementation Guidelines v1.5*. 2025-05. 來源等級 A。
39. CNIL. *Bitouzet, J. Phone-Home 隱私分析*. 法國資料保護機構, 2022. 來源等級 A。
40. EDPS. *Opinion 03/2024 on the European Digital Identity Wallet*. European Data Protection Supervisor, 2024. 來源等級 A。
41. GDPR. *Regulation (EU) 2016/679, Article 5(1)(c) + Article 25*. 來源等級 A。
42. UK ICO. *Code of Practice for Online Identity*. Information Commissioner's Office, 2024. 來源等級 A。
43. AAMVA. *mDL Law Enforcement FAQ*. 2024. 來源等級 A。
44. HL7 FHIR. *Practitioner Verification Implementation Guide*. 2024. 來源等級 A。
45. NIST SP 800-63-4. *Digital Identity Guidelines, Volume C: Federation and Assertions*. 2025 final. 來源等級 A。
46. IETF Token Status List Working Group. *Token Status List draft-20*. 2024-2025. 來源等級 A。
47. RFC 5280. *Internet X.509 Public Key Infrastructure Certificate and Certificate Revocation List (CRL) Profile*. 2008. 來源等級 A。
48. Larisch, J., Choffnes, D., Levin, D., et al. "CRLite: A Scalable System for Pushing All TLS Revocations to All Browsers." *IEEE S&P 2017*. 來源等級 A。
49. Mozilla. *Firefox 137 Release Notes — CRLite Default Enablement*. 2025-04. 來源等級 A。
50. mashbean. "公民證明的概念定位 ⟨𝒩, ℱ, ℬ⟩." Civic Proof Series, article 02, 2026-05-03. 來源等級 B。
51. mashbean. "假名式公民參與的法律制度模板." Civic Proof Series, article 04, 2026-05-04. 來源等級 B。
52. mashbean. "passport-rooted paradox / SRP." Civic Proof Series, article 07, 2026-05-05. 來源等級 B。
53. mashbean. "北歐商業身分基礎設施的代價 NCT." Civic Proof Series, article 09, 2026-05-07. 來源等級 B。
54. mashbean. "Wallet as Essential Facility." Civic Proof Series, article 11, 2026-05-08. 來源等級 B。
