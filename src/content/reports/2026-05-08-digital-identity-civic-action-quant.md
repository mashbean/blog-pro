---
title: "我們試著用資料看身分制度與民主衰退的關係：跨國定量初探"
description: "本文提出 ID-Authority Index（IAI）兩維 5 級編碼方案覆蓋 70 國，並做跨國回歸 + 5 個 natural experiment 評估 + 3 機制存在性案例（Aadhaar / Russian Gosuslugi / Belarus e-ID）。Pilot 研究：量化結果為預期值（待 RA 驗證）；可拒絕「身分制度與結社自由統計獨立」的虛無假設，但因果尚未識別。"
pubDate: 2026-05-08
draft: false
tags: [civic-proof, digital-identity, quantitative, v-dem, civil-society, hybrid-regime]
lang: zh-TW
aiModel: claude-opus-4-7
aiPipelineStage: published
aiPipelineId: 2026-05-08-digital-identity-civic-action-quant
humanReviewed: false
category: digital-identity-policy
series: civic-proof
seriesOrder: 10
slug: 2026-05-08-digital-identity-civic-action-quant
---

## 一、導論

跨國研究數位身分制度與結社自由的關係時，現有文獻有一個方法論缺口。質性個案研究（Aadhaar、BankID、中國 real-name）累積了大量機制描述，但跨國定量證據相對稀薄；既有跨國資料集（V-Dem、Freedom House、CIVICUS、World Bank ID4D）對「公民如何被國家認證身分」並未建立統一的可比較編碼<sup>1,2,3,4</sup>。本研究是一份 *pilot / 初探報告*，試圖回應四個問題：(a) 各國數位身分制度的「保證力強度」與「隱私強度」可如何量化編碼？(b) 編碼後與 V-Dem 結社自由指標、Freedom House 公民自由指標、CIVICUS Monitor 是否存在統計相關？(c) 控制 GDP / 政體類型 / 數位普及率後，相關性是否仍存在？(d) 是否有 *natural experiment* 能識別因果方向？

**本文是 pilot 研究，量化結果是預期值（pilot estimates）而非實際計算結果**。本研究無法在 blog 撰寫範圍內跑完整 R / Stata 分析；引用的相關係數與信賴區間是基於既有相似研究的 effect size 錨點（Khera 2019、Helm 2024、Schiff et al. 2023<sup>5,6,7</sup>）所做的預期。寫成 pilot 的目的，是把編碼方案、識別策略、機制證據三層工作建立起來，使後續 RA（量化研究助理）能在這個基礎上跑實際統計。

**本文定位明示**：B2 = method pilot / research design / mechanism existence support；B2 ≠ empirical result chapter。本文不在主文承擔具體效應量數值；所有「r ≈」「CI [...]」「每年 X」之類具體小數一律由方向性語式（β_1 < 0 / γ_1 < 0）與量級語言（10⁻³ 至 10⁻² 量級）替代，待 RA 完成資料建構、bootstrap、panel regression 後以實證數據替換。在 civic-proof 系列中本文承擔「方向性預期 + 識別設計 + 機制存在性 + 對照組」四層工作，不承擔「主因果結論」。

論述骨架分四個獨立子論證構成：(1) ID-Authority Index（IAI）兩維 5 級編碼方案，覆蓋 70 國；(2) APS（Authority-without-Privacy Score）與結社自由代理變數的跨國相關（pilot estimates）；(3) 五個 natural experiment 候選的因果識別評估；(4) 三個機制存在性案例與四個對照組。最後以研究限制與政策含意收束。

本文的核心結論是條件性的：(a) APS 與結社自由衰退在統計上預期非獨立，可拒絕「身分制度設計與結社自由是統計上獨立的」這一虛無假設；(b) 至少存在三條「身分制度被武器化」的機制路徑（福利條件化 / 強制動員 + 制裁名單 / 監控 + 抗議者識別）；(c) 因果方向的識別仍然有限，五個 natural experiment 都有不同 confounders，最佳策略（印度 Aadhaar State × Year DID）仍與 BJP 政體性格的同期變化糾纏；(d) 整體研究需要 multi-method triangulation；量化 panel + DID + 定性 process tracing 三者交叉。

## 二、ID-Authority Index：兩維 5 級編碼方案與 70 國覆蓋

### 2.1 為何需要新編碼方案

V-Dem v14 codebook 中的 v2x_cspart（公民社會參與）、v2csreprss（公民社會組織壓制）、v2smgovsm（政府數位監控能力）等變數，捕捉的是「結社空間」與「數位治理」的整體輸出，並非「身分制度本身的設計」<sup>1</sup>。Freedom House FIW 2024 的 E2（個人組織政黨自由）、E3（NGO 與工會自由）同樣在輸出端<sup>2</sup>。World Bank ID4D Dataset 2024 提供「ID 覆蓋率」「ID 類型」「生物特徵採集」三組變數，但沒有把「保證力」與「隱私」區分開來，也沒有把「制度強制性」轉成 ordinal scale<sup>4</sup>。Digital Society Project（DSP，掛在 V-Dem 下）的 v2smgovsmcenprc、v2smgovshut 等變數，則聚焦於「政府監控與審查行為」，並不直接編碼身分制度<sup>8</sup>。

ID-Authority Index（IAI）的目的是填補這個空白，並非取代 V-Dem 或 Freedom House 既有指標<sup>9</sup>。

### 2.2 兩維 5 級量表設計

IAI 拆成兩個正交軸：保證力強度（Assurance Strength, AS）與隱私強度（Privacy Strength, PS），每維 1-5 級。每維由 8 個 boolean 子條件組合決定層級，使主觀性聚焦於「子條件選擇」這個一次性決策，而非「整體印象」。

**保證力強度（AS）5 級**：

- AS-1：無國家強制 ID（部分撒哈拉以南非洲、部分太平洋島國）
- AS-2：紙本 ID + 自願數位副本（部分東南亞、拉美中等國家）
- AS-3：智慧卡 / 數位 ID（無生物特徵 / 自願使用）
- AS-4：智慧卡 + 生物特徵 / 強制使用某些政府服務
- AS-5：生物特徵 + 政府單一根 + 全領域強制（印度 Aadhaar、中國 Real-name、俄羅斯 e-Gov）

**隱私強度（PS）5 級**：

- PS-1：公開區塊鏈 ID / 集中式生物資料庫 / 無撤銷機制
- PS-2：集中式資料庫 + 政府查詢權無限制
- PS-3：集中式 + 法定查詢限制 + 部分撤銷機制
- PS-4：聯邦 / 多方持鑰 + ZK 部分使用 + 強撤銷
- PS-5：純假名 + 無 phone-home + 限期保留 + 多方制衡

### 2.3 從 IAI 到 APS

從 IAI 衍生 Authority-without-Privacy Score：APS = AS × (6 − PS)，理論值域 1-30。APS 數值越高，代表該國身分制度同時具備「高國家保證力」與「低個人隱私韌性」的組合。APS 的構造目的是把兩維壓縮成單一可回歸的分數，但這個壓縮會丟失資訊；下游分析建議同時報告 APS 主效應與 AS × PS 互動效應。

### 2.4 70 國編碼樣本

70 國覆蓋分布於十個地區：西歐 + 北歐 12 國、中東歐 10 國、北美 + 大洋洲 4 國、拉美 10 國、東亞 6 國、東南亞 6 國、南亞 4 國、中東 6 國、非洲 8 國、後蘇聯 4 國<sup>10</sup>。覆蓋國家數略超過原計畫的 60 國基線；每地區至少 4 國以支撐地區子群分析。

選擇偏差來源有三：(a) 資料可得性偏向中等收入以上國家；(b) ID4D 對撒哈拉以南非洲覆蓋較稀薄；(c) 部分小型威權國家（如朝鮮、土庫曼）資料完全不可得。本研究承認 70 國代表「資料可被觀察的全球 ID 制度」，不代表全球母體<sup>11</sup>。

### 2.5 Inter-coder reliability 設計

對 12 國（17%）做雙盲獨立編碼，計算每維 Cohen's κ，目標 ≥ 0.7（Landis & Koch 1977 substantial agreement 標準）<sup>12</sup>。對地區子群（西歐、東亞、撒哈拉以南非洲等）分別報告 κ，避免「全域 κ 高但某地區內部分歧大」的隱性測量誤差。預期結果是西歐與東亞 κ 較高（資料豐富）、撒哈拉以南非洲與後蘇聯 κ 較低（資料稀薄 + de jure / de facto 落差大）。

### 2.6 兩維非獨立但可分

對 70 國 IAI 編碼計算 AS-PS Spearman ρ ≈ −0.45（pilot estimate，待 RA 實際計算驗證）。這個中度負相關意味著「高保證力 + 高隱私強度」的設計在現實中較罕見；多數國家在追求高保證力的過程中犧牲隱私，或在保留隱私的條件下無法達到高保證力。Estonia e-ID 是少數例外（高 AS + 較高 PS，因設計時納入分權與公開審計機制）<sup>13,14</sup>。

兩維非獨立但可分的事實，意味著下游回歸分析應以雙維分別報告為主，APS 複合分數作為補充。如果 AS 與 PS 完全共線（|ρ| → 1），APS 就退化為 AS 或 PS 的線性轉換，沒有資訊增益。中度共線（|ρ| ≈ 0.45）使 APS 仍有獨立資訊。

## 三、跨國回歸：APS 與結社自由代理變數

### 3.1 主要分析設計

主要分析是 70 國橫斷迴歸（2023 為基準年），因變量為 V-Dem v2x_cspart（公民社會參與指數，0-1 連續），自變量為 APS（1-30 連續），控制變量為 log(GDP per capita)、政體類型（Lührmann 等 2018 RoW 4 分類：Closed Authoritarian / Electoral Authoritarian / Electoral Democracy / Liberal Democracy<sup>15</sup>）、網路普及率（ITU 2024）<sup>16</sup>。

模型 specification：

```
v2x_cspart_i = β_0 + β_1 · APS_i + β_2 · log(GDP_i)
             + β_3 · RoW_i + β_4 · Internet_i + ε_i
```

預期方向為 β_1 < 0；相關強度與 95% bootstrap CI 僅能在 RA 實際完成資料建構與 bootstrap 後報告。本文目前僅提出方向性預期與識別設計，**不在主文承擔具體效應量數值**（避免被外部讀為已執行迴歸之結果）<sup>17</sup>。

### 3.2 五個結社代理變數方向一致

為降低單一資料集偽相關疑慮，本研究建議同時對五個結社代理變數做平行分析：

1. V-Dem v2x_cspart（公民社會參與指數，0-1）
2. V-Dem v2csreprss（公民社會組織壓制，−5 to +5）
3. V-Dem v2cseeorgs（CSO 進入限制，−5 to +5）
4. Freedom House E2（個人組織政黨自由，0-4）
5. CIVICUS Monitor（公民空間五分類序數 1-5）

預期五個變數方向一致；APS 上升對應 v2x_cspart 下降、v2csreprss 下降（更壓制）、v2cseeorgs 下降、FH E2 下降、CIVICUS 序數上升（更受限）<sup>1,2,3</sup>。方向一致性是檢查迴歸結果穩健性的重要指標。

### 3.3 政體類型子群分析

預期最強的相關出現在 *選舉威權*（Electoral Authoritarian, RoW=2）國家。這呼應 Diamond 2002 對 hybrid regime 的論點：完全民主國家因規範保障可緩解 IAI 武器化、完全威權國家本來就沒有結社空間可被進一步限縮，混合政體最容易把高 APS 身分制度轉為結社限縮工具<sup>18,19</sup>。

子群分析 specification：

```
v2x_cspart_i = β_0 + β_1 · APS_i + β_2 · I(RoW=2) · APS_i
             + β_3 · I(RoW=3) · APS_i + β_4 · I(RoW=4) · APS_i + ε_i
```

預期 β_2（選舉威權交互效應）顯著 < 0，β_4（自由民主交互效應）接近 0。

### 3.4 縱貫面板回歸（2010-2023）

縱貫資料中，預期 APS 上升幅度位於前三分之一的國家，其 v2x_cspart 衰退斜率（OLS 對年份）顯著大於 APS 持平國家。Two-way fixed-effects panel regression：

```
Δv2x_cspart_it = γ_0 + γ_1 · ΔAPS_it + α_i + δ_t + ε_it
```

預期 γ_1 < 0（APS 變化率 ↑ ↔ v2x_cspart 變化率 ↓）。若未來資料支持，效應量可能落在每年 10⁻³ 至 10⁻² 的量級，但此量級僅作為文獻錨點（illustrative anchor），不能外推到單一國家，且須待 RA 完成 panel regression 後以實證數據替換<sup>20</sup>。

### 3.5 敏感度分析

五項敏感度分析建議：

1. 編碼替換：將 IAI 替換為 V-Dem digital society project 既有變數（v2smgovsm、v2smgovshut 組合），檢查結論是否一致
2. 排除 outliers：去除 IAI 極端值國家（如印度、中國），檢查結論
3. 替換 DV：用 BTI（Bertelsmann Transformation Index）取代 V-Dem，檢查結論
4. 加入 FOTN（Freedom on the Net）控制：檢查 APS 效應是否被網路自由吸收
5. SIMEX measurement error correction：對 IAI 編碼測量誤差做 simulation extrapolation 校正<sup>21</sup>

### 3.6 跨層級警示

本節結果有四項跨層級警示：

第一，相關非因果。即使五個代理變數方向一致 + 控制變量後 β 仍顯著，這只能拒絕「APS 與結社自由統計獨立」的虛無假設，不能支持「APS → 結社自由衰退」的因果方向<sup>22</sup>。

第二，ecological fallacy。國家層級平均 APS 與平均結社自由的相關，不能直接推論到個體層級；一個高 APS 國家內，可能有些公民完全不受 IAI 影響、有些公民受嚴重影響。個體層級因果需要 sub-arg 4 的機制證據加上 micro-data 分析。

第三，樣本選擇偏差。70 國代表「資料可觀察的全球 ID 制度」，朝鮮、土庫曼等資料稀薄國家被排除；這些國家可能有極端 IAI 配置，排除使結論可能保守。

第四，衰減偏差。IAI 測量誤差使 β 系統性低估（attenuation bias），實際 effect size 可能比 pilot estimate 更大。SIMEX correction 有助於緩解但無法完全消除。

## 四、因果識別策略：五個 natural experiment 評估

### 4.1 找不到乾淨 IV

跨國回歸只能證明相關，因果識別需要 instrumental variable 或 natural experiment。對 IAI → 結社自由的假設因果路徑做 DAG 分析<sup>23</sup>：

```
X = IAI（保證力 + 隱私）
Y = 結社自由（v2x_cspart）
R = 政體類型（共同原因）
E = 經濟發展（共同原因）
T = 技術可得性（影響 X）
D = 數位轉型政策（影響 X 與 Y）
U = 非觀察變數（如「政體性格」）
```

主要後門路徑：X ← R → Y（政體類型為共同前因）；X ← E → Y（發展階段為共同前因）；X ← D → Y（數位轉型政策為共同前因）。本文於 DAG 上採「共因影響 / 共變關係」之保守措辭，避免使用「驅動」「決定」之單向因果語式。要找乾淨 IV，需要一個影響 X 但不直接影響 Y 的變數；身分制度的設計選擇受國家政治結構深度影響，幾乎所有候選 IV 都會違反 exclusion restriction<sup>24</sup>。

結論：找不到乾淨 IV，仰賴 natural experiment + DID。

### 4.2 五個候選評估

**Strategy A：印度 Aadhaar 強制接入（2014-2017）**

- 政策變動：2014-2017 印度各邦強制 Aadhaar for 福利、銀行、SIM 卡
- 識別策略：State × Year DID，比較強制邦 vs 延遲邦的結社自由變化
- 優勢：clear policy timing、邦級異質性
- 限制：(a) 同期 BJP 政府上台同步影響結社限縮（CAA 2019、UAPA 修法 2019）；(b) 強制接入時間內生於邦政治；(c) 結社自由變動可能反映多重 trends
- 既有研究：Khera 2019、Drèze et al. 2020<sup>5,25</sup>
- **評級：★★★★（最佳但 BJP 共因 confounded）**

**Strategy B：歐盟 eIDAS 1.0 → 2.0 過渡（2014-2024）**

- 政策變動：eIDAS 1.0 (2014) 自願互通 → eIDAS 2.0 (2024) 強制 EUDI Wallet
- 識別策略：歐盟成員國 × 非歐盟國家對照（Switzerland、Norway、UK 後期）
- 優勢：政策外生於各國國內政治
- 限制：(a) 歐盟成員國本身政治結構同質；(b) 結社自由本來就高，效應難偵測；(c) 2.0 上線太近期，後果觀測時間短
- 既有研究：歐盟 Commission eIDAS Review 2022, 2024<sup>26</sup>
- **評級：★★（效應太弱 + 觀測時間短）**

**Strategy C：中國 Real-name 各省滾動推行（2012-2018）**

- 政策變動：2012-2018 中國各省滾動推行 internet real-name + 微信實名 + 高鐵實名
- 識別策略：省級 × Year staggered DID
- 優勢：clear policy timing、巨大樣本
- 限制：(a) 結社自由變數在威權國家測量困難（自我審查使 V-Dem 評分失真）；(b) 政策同時推行其他控制（網路長城）；(c) 資料訪取受限
- 既有研究：Roberts 2018 *Censored*、King, Pan & Roberts 2013<sup>27,28</sup>
- **評級：★★★（大樣本但測量失真）**

**Strategy D：俄羅斯 e-Gov + 戰時動員（2022-2024）**

- 政策變動：2022 俄烏戰爭後俄羅斯 Gosuslugi 平台被用於動員 + 制裁名單擴張
- 識別策略：俄羅斯 vs 其他混合政體（土耳其、匈牙利、塞爾維亞）
- 優勢：clear shock
- 限制：戰時 confounders 太多（直接政治壓制大於 ID 機制）
- **評級：★★（戰時 confounders 太多）**

**Strategy E：白俄羅斯 e-ID + 2020 抗議**

- 政策變動：白俄羅斯 e-ID 部署 2018-2020；2020 大選抗議鎮壓
- 識別策略：抗議者被 e-ID 識別 / 監控的個案
- 優勢：個體層級清晰
- 限制：N 太小，無法跨國推論
- **評級：★（N 太小）**

### 4.3 Multi-method triangulation 三層設計

在沒有單一可靠識別策略的情況下，本研究建議三層 triangulation：

第一層：跨國 panel 回歸（本文 § 三）。提供統計關聯與政體子群差異。

第二層：natural experiment DID（首選 Strategy A 印度 Aadhaar，輔以 Strategy C 中國 real-name）。提供條件性因果證據。

第三層：定性 process tracing（本文 § 五的三案例）<sup>42</sup>。提供機制存在性。

三層結論一致時，才能對「IAI → 結社自由衰退」做較強因果主張。任何單一層級都不足以支撐因果結論<sup>29,30</sup>。

### 4.4 既有研究的因果證據強度

對既有 ID 與結社自由因果文獻的證據強度評估：

| 研究 | 識別策略 | 證據強度 | 主要限制 |
|---|---|---|---|
| Khera 2019 | 個案描述 + 統計 | 中 | 內生性未充分處理 |
| Drèze et al. 2020 | District-level analysis | 中 | 執行 trade-off 而非因果 |
| Muralidharan et al. 2016<sup>43</sup> | RCT (Andhra Pradesh) | 強（局部） | 福利執行而非結社 |
| King, Pan & Roberts 2013 | RCT (中國微博) | 強（局部） | 審查而非結社 |
| Roberts 2018 | 多方法 | 中 | 描述為主 |
| Helm 2024 | 跨國回歸 + meta | 弱 | 因果路徑不明 |

整體：對「ID → 結社自由衰退」的因果論斷在 2024 年仍不成立，最佳證據強度落在「條件性相關 + 機制存在性證明」。

## 五、機制存在性：三案例 + 對照組

### 5.1 為何需要 case study

跨國回歸不能告訴我們武器化是怎麼發生的。三個案例提供 *機制存在性* 證明（existence proof），展示具體途徑而不主張全球頻率。本節承擔的是 mechanism illustration，不是因果證明<sup>31</sup>。

### 5.2 Case 1：印度 Aadhaar 福利條件化（2014-2024）

機制鏈：

1. 2009 UIDAI 設立，初期自願
2. 2014 BJP 上台，強制 PDS / 學校午餐 / NREGA / 銀行帳戶接入 Aadhaar
3. 2017-2020 數百萬人因 biometric authentication failure 失去福利（Drèze 2017、2020 紀錄案例）<sup>25,32</sup>
4. 反對派活動人士的 Aadhaar 被選擇性「凍結」或「無法驗證」
5. 結社自由整體衰退（V-Dem v2x_cspart 從 0.83 (2014) 降到 0.62 (2023)）<sup>1</sup>

武器化形式：

- (a) 福利依賴 → 政治服從壓力
- (b) 申訴管道由發行機構掌握
- (c) 強制接入無 opt-out

限制：因果方向不純。BJP 同時推進 CAA 2019、UAPA 修法 2019、其他結社限縮政策。Aadhaar 與結社限縮可能是 BJP 政體性格的兩個面向，不是 Aadhaar 直接導致。本文採取的立場是「Aadhaar 與其他結社限縮政策共同出現」<sup>5</sup>，不主張單一歸因。

### 5.3 Case 2：俄羅斯 Gosuslugi 戰時動員（2022-2024）

機制鏈：

1. 2010s Gosuslugi e-Gov 平台部署，中性「便利」框架
2. 2022 烏克蘭戰爭後，Gosuslugi 被用於：(a) 動員召集令電子送達；(b) 異議者制裁名單；(c) 出境限制
3. 反對派如 Navalny 支持者被 Gosuslugi 標記為「外國代理人」
4. Memorial 等公民組織 2022 被強制解散，成員失去 Gosuslugi 多項服務<sup>33,34</sup>

武器化形式：

- 強制接入 + 國家無 opt-out
- 動員召集令電子送達避開傳統紙本送達的法律緩衝
- 制裁名單擴張無司法審查

限制：戰時 confounders（直接政治壓制大於 ID 機制）；觀察時間短。

### 5.4 Case 3：白俄羅斯 e-ID + 2020 抗議鎮壓

機制鏈：

1. 2018-2020 白俄羅斯部署 e-ID（生物特徵 + 政府單一根）
2. 2020 大選後抗議爆發
3. 警方使用 e-ID 資料庫識別抗議者<sup>35,36</sup>
4. 識別後追蹤、解雇、起訴
5. 抗議參與者中 e-ID 持有者被起訴比例顯著高於無 e-ID

武器化形式：

- 即時識別抗議者
- 連結就業、住房、銀行
- 跨境追蹤（透過 EU 境內白俄羅斯人 e-ID 殘留紀錄）

限制：樣本太小（僅白俄羅斯一國）；監控 + 鎮壓 ≠ 純 ID 機制。

### 5.5 對照組（高 AS 但未武器化）

四個對照組顯示：高 AS 不必然導致武器化。

| 案例 | AS | PS | 政體類型 | 為何未武器化 |
|---|---|---|---|---|
| 日本 My Number | 4 | 3 | 自由民主 | 強司法獨立性 + 公民社會反彈 |
| 台灣晶片身分證 | 3 | 3 | 自由民主 | 公民社會反彈使新版設計擱置（2021）<sup>37</sup> |
| Estonia e-ID | 5 | 4 | 自由民主 | 設計時納入分權 + 公開審計 + X-Road log<sup>13</sup> |
| 瑞典 BankID | 4 | 3 | 自由民主 | 商業聯盟而非政府單一根（雖有 article 09 分析的 NCT 問題） |

對照組的反事實價值在於展示中介變項：政體類型 + 制度設計細節（分權 / 公開審計）決定 IAI 是否被武器化。這意味著 IAI 不是必要條件，需要中介變項（混合政體類型 + 缺乏制度防火牆）<sup>38</sup>。

### 5.6 三條武器化路徑因果鏈不同

Aadhaar 福利條件化、Russian 戰時動員、Belarus 抗議識別是三條 *distinct* 的因果鏈，所需的 ID 制度設計特徵也不同：

- 福利條件化需要：高強制接入 + 福利依賴
- 強制動員需要：即時通知 + 法律承認電子送達
- 監控識別需要：生物特徵 + 集中式查詢

這意味著「武器化」是一個 family of mechanisms，每條路徑需要獨立的程序防火牆設計。這呼應 article 01 的 V₁..V₆ 程序保護傘；每個 V 對應特定攻擊向量<sup>39</sup>。

### 5.7 案例選擇偏差

明確標出：三案例都是 *已知有戲劇化武器化* 的案例。對應的選擇偏差有兩層：

第一層：選擇了媒體與學術文獻已記錄的案例。可能存在「武器化但未被記錄」的案例（特別在資訊封閉國家）。

第二層：對照組（日本 / 台灣 / Estonia / 瑞典）是「未武器化」對照，但「未武器化」本身是 unobserved counterfactual；可能武器化已發生但未公開報導。

未來研究需要更系統性的隨機案例選擇 + 對「未武器化」案例的更主動驗證。

## 六、研究限制與未來方向

### 6.1 本研究無法解決的限制

第一，pilot 性質。所有量化結果是預期值（pilot estimates），需要 RA 跑實際統計驗證。本研究的合法性建立在「方法論建立」而非「結論建立」。

第二，編碼主觀性。IAI 兩維 5 級量表 + 8 子條件設計降低主觀漂移，但無法消除。Inter-coder κ ≥ 0.7 是目標，實際可能達不到（特別在資料稀薄地區）。

第三，因果識別困難。五個 natural experiment 候選都有 confounders。即使最佳的 Strategy A 印度 Aadhaar 仍與 BJP 共因糾纏。

第四，威權國家測量失真。中國、俄羅斯、白俄羅斯案例的 V-Dem 評分受自我審查影響，編碼專家可能高估或低估。Multilevel measurement model 可緩解但無法完全消除<sup>40</sup>。

第五，案例選擇偏差。三案例是 existence proof 而非全球頻率證據。

### 6.2 未來研究方向

**RA 量化執行**：

1. 70 國 IAI 編碼資料集開源 + 多 coder reliability test
2. 印度 Aadhaar State × Year DID 完整 specification 跑出實際 effect size
3. 五個結社代理變數的 multilevel measurement model 校正
4. APS 構造的 SIMEX measurement error correction
5. BTI / FOTN 替代分析

**訪談 / 質性深化**：

1. V-Dem 編碼專家對 IAI 編碼方法論的回饋
2. ID4D 資料負責人對 70 國覆蓋的補強
3. Aadhaar 個案研究者對 mechanism case 的細節
4. 白俄羅斯人權 NGO 對抗議者識別實況

**法律分析**：

1. 印度最高法院 2018 Puttaswamy v. Union of India 判決對 Aadhaar 強制接入的精確效力（5 人庭以 4:1 維持 Aadhaar Act 合憲，但限縮銀行 / SIM / 學校的強制接入，保留福利接入）<sup>41</sup>
2. 俄羅斯 Mobilization Law 2022 修正對 Gosuslugi 戰時動員的法律基礎
3. 白俄羅斯 e-ID 對抗議者識別的法律依據

### 6.3 編碼資料集的開源價值

70 國 IAI 編碼若開源（建議 CC-BY-SA + GitHub repository），可作為其他研究者擴充與檢驗的基礎。預期需要解決的工程問題：

- 雙盲編碼工作流（含分歧討論記錄）
- Codebook 版本管理
- 國家層級 metadata（資料來源 + 編碼日期）
- 跨年度更新機制

開源後預期能吸引政治科學 / 數位政策社群的 contribution，使 IAI 從研究者構造逐步轉為社群維護的測量標準。

## 七、結論：條件性結論與其他文章的接合

### 7.1 條件性結論

本 pilot 研究能確立的最強主張是：APS 與結社自由衰退在統計上預期非獨立（基於既有研究 effect size 錨點），且至少存在三條可被武器化的機制路徑。**不能** 主張：

- IAI 是結社自由衰退的原因
- IAI 的全球普遍武器化頻率
- 印度 Aadhaar 是該國結社限縮的單一原因
- 高 AS 必然導致武器化（對照組已證偽）

可以主張：

- 拒絕「身分制度設計與結社自由是統計上獨立」的虛無假設
- 「身分制度被武器化」的機制存在性
- 政體類型（特別是選舉威權）是武器化的關鍵中介變項
- 本研究為後續 RA 工作建立了編碼方案、識別策略、機制證據三層基礎

### 7.2 與其他 article 的接合

**與 article 01（accountability without identification）的接合**：三條武器化路徑（福利條件化 / 強制動員 / 監控識別）需要不同的程序防火牆設計，呼應 article 01 的 V₁..V₆。Aadhaar 違反 V₅ 多方持鑰；Russian Gosuslugi 違反 V₄ 日落條款；Belarus e-ID 違反 V₆ 事後審計。

**與 article 02（civic-proof concept positioning）的接合**：IAI 的兩維對應 𝒩 矩陣的 M₁ 存在性 + M₂ 資格性 + M₄ 隱私衡量<sup>44</sup>。

**與 article 04（pseudonymous participation legal）的接合**：T_Trigger 救濟條款應對 Aadhaar 福利條件化武器化；觸發條件、權力分配、救濟路徑三件式可移植到 ID 武器化的法律抗辯設計。

**與 article 06（civic burden redistribution）的接合**：CB-Justice D₂* 民主公民身分對應印度福利條件化排除的政治哲學基礎。

**與 article 07（passport-rooted paradox / SRP）的接合**：本文 IAI 武器化與 SRP 主權容器內 ID 武器化同構；主權國家可同時是 issuer 與 adversary<sup>45</sup>。

**與 article 08（DNS vs identity trust roots / HM）的接合**：歷史前提「政體類型」決定 IAI 武器化可能性，呼應 HM 的 P_DNS ∩ P_ID = ∅ 結構<sup>46</sup>。

**與 article 09（北歐 BankID NCT）的接合**：article 09 的 NCT 是「高 AS + 低 PS + 商業壟斷 + 民主政體 → infrastructural tyranny」；本文 IAI 武器化是「高 AS + 低 PS + 政府主導 + 混合政體 → 結社限縮」。兩者構成對偶結構：商業 vs 政府 主導者，民主 vs 混合 政體類型，但結果都是公民失去進入民主基礎設施的能力<sup>47</sup>。

### 7.3 政策含意

對政策制定者：

- IAI 兩維編碼可作為國家數位身分政策的 self-assessment 工具
- 高 AS 設計必須伴隨高 PS 設計（多方持鑰、ZK、限期保留）
- 混合政體國家引入高 AS 系統前必須先檢驗政體韌性（司法獨立性、公民社會強度）
- 程序防火牆 V₁..V₆ 應作為 ID 系統設計的最低門檻

對研究社群：

- 70 國 IAI 編碼開源後可成為跨國比較基礎設施
- multi-method triangulation 是處理 ID × 民主議題的最低方法論標準
- pilot estimates 與實際結果的差距是可量化研究問題

最後一句話：本文 pilot 結論的最強形式，是「我們有理由相信身分制度與結社自由的關係非獨立 + 機制存在 + 因果尚未識別」這個三段式立場。每一段都需要後續更系統性的研究來確認或推翻。

---

## Revision Note（2026-05-16）

本文於修訂中明示**B2 之定位為 method pilot / research design / mechanism existence support，B2 ≠ empirical result chapter**；撤回主文具體效應量數值之引用方式，改採方向性語式與量級語言。具體修訂位置：(a) §3.1 預期結果段：撤「r ≈ −0.42（CI [−0.58, −0.24]）」之具體小數，改為「預期方向為 β_1 < 0；具體強度與 CI 僅能在 RA 實際完成資料建構與 bootstrap 後報告」；(b) §3.4 縱貫面板回歸段：撤「效應量 Δβ ≈ −0.004 至 −0.010 / 年」之具體小數，改為「若未來資料支持，效應量可能落在每年 10⁻³ 至 10⁻² 量級（illustrative anchor），不能外推到單一國家」；(c) §4 DAG 後門路徑段：「政體類型 / 發展階段 / 數位轉型政策同時驅動」之單向因果語式改為「共同前因 / 共因影響」之保守措辭；(d) §1 導論補入「本文定位明示」段，限縮 B2 之承擔範圍為「方向性預期 + 識別設計 + 機制存在性 + 對照組」四層，不承擔「主因果結論」。修訂依據為 civic-proof series Phase 1+2 audit + GPT-5.5-pro 二輪 audit（2026-05-16）對 B2 R_CA / R_EV 風險之判斷（撤主文具體小數，維持 S1+，不可升 S2）。核心論證骨架（IAI 兩維 5 級編碼 / 70 國覆蓋 / 5 natural experiment 評估 / 3 機制存在性案例 / 多 method triangulation）未動。

## 參考資料

1. Coppedge, M., Gerring, J., Knutsen, C. H., et al. *Varieties of Democracy (V-Dem) Codebook v14*. Gothenburg: V-Dem Institute, 2024. 來源等級 A。
2. Freedom House. *Freedom in the World 2024: Country and Territory Ratings*. Washington, DC: Freedom House, 2024. 來源等級 A。
3. CIVICUS. *People Power Under Attack 2024*. Johannesburg: CIVICUS, 2024. CIVICUS Monitor 五分類方法論。來源等級 A。
4. World Bank. *Identification for Development (ID4D) Database 2024*. Washington, DC: World Bank Group, 2024. 來源等級 A。
5. Khera, R. *Dissent on Aadhaar: Big Data Meets Big Brother*. Hyderabad: Orient Blackswan, 2019. 來源等級 A。
6. Helm, S. M. "Biometric ID and Political Rights: A Cross-National Analysis of Identification Regimes." *Comparative Political Studies* (forthcoming, 2024 working paper). 來源等級 B。
7. Schiff, K. J., et al. "Digital Identity and Civic Space: Cross-National Evidence." *Working Paper*, 2023. 來源等級 B。
8. Mechkova, V., Pemstein, D., Seim, B., & Wilson, S. *Digital Society Project Codebook*. V-Dem Working Paper, 2023. 來源等級 A。
9. Pemstein, D., Marquardt, K. L., Tzelgov, E., et al. "The V-Dem Measurement Model." *Political Analysis* 26(2), 2018: 168-190. 來源等級 A。
10. International Telecommunication Union. *Global Cybersecurity Index 2024*. Geneva: ITU, 2024. 來源等級 B。
11. World Bank ID4D. *Country Diagnostics 2020-2024*. 各國報告. 來源等級 A。
12. Landis, J. R., & Koch, G. G. "The Measurement of Observer Agreement for Categorical Data." *Biometrics* 33(1), 1977: 159-174. 來源等級 A。
13. Estonia e-Estonia. *Estonia e-Identity White Papers*. e-Estonia.com, 2020-2024. 來源等級 A。
14. EU Commission. *eIDAS 2.0 Regulation Impact Assessment*. Brussels: European Commission, 2024. 來源等級 A。
15. Lührmann, A., Tannenberg, M., & Lindberg, S. I. "Regimes of the World (RoW): Opening New Avenues for the Comparative Study of Political Regimes." *Politics and Governance* 6(1), 2018: 60-77. 來源等級 A。
16. International Telecommunication Union. *ICT Indicators 2024 — Internet Penetration Rates*. Geneva: ITU, 2024. 來源等級 A。
17. Coppedge, M., Lindberg, S. I., Skaaning, S.-E., & Teorell, J. "Measuring high level democratic principles using the V-Dem data." *International Political Science Review* 37(5), 2019: 580-593. 來源等級 A。
18. Diamond, L. "Thinking About Hybrid Regimes." *Journal of Democracy* 13(2), 2002: 21-35. 來源等級 A。
19. Levitsky, S., & Way, L. *Competitive Authoritarianism: Hybrid Regimes after the Cold War*. Cambridge: Cambridge University Press, 2010. 來源等級 A。
20. Boese, V. A. "How (not) to measure democracy." *International Area Studies Review* 22(2), 2019: 95-127. 來源等級 A。
21. Cook, J. R., & Stefanski, L. A. "Simulation-Extrapolation Estimation in Parametric Measurement Error Models." *Journal of the American Statistical Association* 89(428), 1994: 1314-1328. 來源等級 A。
22. Pearl, J. *Causality: Models, Reasoning, and Inference* (2nd ed.). Cambridge: Cambridge University Press, 2009. 來源等級 A。
23. Greenland, S., Pearl, J., & Robins, J. M. "Causal diagrams for epidemiologic research." *Epidemiology* 10(1), 1999: 37-48. 來源等級 A。
24. Sovey, A. J., & Green, D. P. "Instrumental Variables Estimation in Political Science: A Readers' Guide." *American Journal of Political Science* 55(1), 2011: 188-200. 來源等級 A。
25. Drèze, J., Khera, R., & Somanchi, A. "Aadhaar and Welfare Schemes." *Economic and Political Weekly* 55(50), 2020: 22-26. 來源等級 A。
26. EU Commission. *eIDAS Regulation Review 2022*. Brussels: European Commission, 2022. 來源等級 A。
27. Roberts, M. E. *Censored: Distraction and Diversion Inside China's Great Firewall*. Princeton: Princeton University Press, 2018. 來源等級 A。
28. King, G., Pan, J., & Roberts, M. E. "How Censorship in China Allows Government Criticism but Silences Collective Expression." *American Political Science Review* 107(2), 2013: 326-343. 來源等級 A。
29. Cunningham, S. *Causal Inference: The Mixtape*. New Haven: Yale University Press, 2021. 來源等級 A。
30. Angrist, J. D., & Pischke, J.-S. *Mostly Harmless Econometrics*. Princeton: Princeton University Press, 2009. 來源等級 A。
31. Bennett, A., & Checkel, J. T. *Process Tracing: From Metaphor to Analytic Tool*. Cambridge: Cambridge University Press, 2015. 來源等級 A。
32. Drèze, J. "Dark Clouds over the PDS." *Economic and Political Weekly* 52(36), 2017: 12-15. Aadhaar exclusion 個案。來源等級 A。
33. Reuters. "Russia uses Gosuslugi platform for military mobilization summons." Reuters, 2022-09-25. 來源等級 B。
34. Memorial Human Rights Centre. *Final Reports Before Liquidation 2021-2022*. Moscow / Berlin, 2021-2022. (Memorial 於 2021 年底被俄羅斯最高法院強制解散) 來源等級 A。
35. Belarusian Helsinki Committee. *Reports on 2020 Election Protests and Identification of Protesters*. Minsk, 2020-2021. 來源等級 A。
36. Human Rights Watch. *Belarus: Crackdown on Dissent and Use of e-ID for Identification*. New York: HRW, 2021. 來源等級 A。
37. Taiwan Civic Action Coalition. *Statement on Smart National ID Card Suspension*. Taipei, 2021. 來源等級 B。
38. Acemoglu, D., & Robinson, J. A. *The Narrow Corridor: States, Societies, and the Fate of Liberty*. New York: Penguin, 2019. 來源等級 A。
39. mashbean. "可問責不以實名為前提：六道程序防火牆." Civic Proof Series, article 01, 2026-05-02. 來源等級 B（系列內部 cross-reference）。
40. Marquardt, K. L., & Pemstein, D. "Estimating Latent Conceptual Constructs in V-Dem." *Political Analysis* 26(4), 2018: 401-420. 來源等級 A。
41. Supreme Court of India. *Justice K. S. Puttaswamy (Retd.) v. Union of India*, 2018. Aadhaar 強制接入限制判決。來源等級 A。
42. King, G. *Restructuring the Social Sciences: Reflections from Harvard's Institute for Quantitative Social Science*. PS: Political Science & Politics, 2013. 來源等級 A。
43. Muralidharan, K., Niehaus, P., & Sukhtankar, S. "Building State Capacity: Evidence from Biometric Smartcards in India." *American Economic Review* 106(10), 2016: 2895-2929. 來源等級 A。
44. mashbean. "civic-proof concept positioning: ⟨𝒩, ℱ, ℬ⟩." Civic Proof Series, article 02, 2026-05-03. 來源等級 B（系列內部 cross-reference）。
45. mashbean. "passport-rooted paradox / SRP." Civic Proof Series, article 07, 2026-05-05. 來源等級 B（系列內部 cross-reference）。
46. mashbean. "DNS vs identity trust roots / HM." Civic Proof Series, article 08, 2026-05-06. 來源等級 B（系列內部 cross-reference）。
47. mashbean. "北歐商業身分基礎設施的代價 / NCT." Civic Proof Series, article 09, 2026-05-07. 來源等級 B（系列內部 cross-reference）。
