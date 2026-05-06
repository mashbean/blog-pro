---
title: "一人一帳號的代價：從 Worldcoin 到 zkPassport 的唯一性證明矩陣"
description: "把 Sybil resistance 形式化為不可能三角 IT' = ¬∃ S [ U(S) = max ∧ D(S) = min ∧ I(S) = max ]，配 9 條子維度與 5 條邊界條件，逐一拆解 Worldcoin、BrightID、Gitcoin Passport、zkPassport、Proof of Humanity 在唯一性、揭露成本、包容性三軸的 corner 取捨。CAP-IT' 中強類比給設計指引（不給形式化推論），PACELC 引申 IS-AUEL-D 弱級別方法論，與 article 03（H1' 三道牆）、article 04（T 三件式）在合取結構上同構但用於不同層級。"
pubDate: 2026-05-05
tags: ["civic-proof", "sybil-resistance", "personhood-proof", "worldcoin", "zkpassport", "brightid", "gitcoin-passport", "proof-of-humanity", "impossibility-triangle", "doctoral-research"]
category: "公民證明工程比較"
aiModel: "Claude Opus 4.7"
aiPrompt: "Worldcoin、BrightID、Gitcoin Passport、zkPassport、Proof of Humanity 在公民層 attack model 下各自表現？Sybil resistance 的『夠用就好』原則如何分層？每種方案的政治代價（資料集中、不可逆生物特徵、社交圖暴露、平台依賴、包容性）為何？是否存在『唯一性 ↔ 揭露 ↔ 包容性』的不可能三角？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-05-sybil-resistance-cost-benefit"
aiGeneratedDate: 2026-05-05
humanReviewed: false
lang: "zh-TW"
---


# 一人一帳號的代價：從 Worldcoin 到 zkPassport 的唯一性證明矩陣

## 一、引言：Sybil resistance 為什麼是一個光譜問題

2002 年，John Douceur 在 IPTPS 論文中把 Sybil 攻擊定義為「單一實體於 peer-to-peer 系統中冒充多重身分以扭曲多數決」<sup>1</sup>。二十多年後，這個分散式系統角落裡的小命題，被反覆搬到 Web3、DAO 治理、UBI 試點與跨國公益分配的場景，並推動 Worldcoin、BrightID、Gitcoin Passport、zkPassport、Proof of Humanity 等五種代表性 personhood proof 方案的工程競爭<sup>2</sup>。

這場競爭的核心爭議並非「哪個方案最強」；「該不該用同一把鑰匙鎖所有的門」才是真正的爭點。Worldcoin 由 Tools for Humanity（TFH）於 2019 年啟動，主張以虹膜辨識建立 universal proof of personhood，並把同一份 World ID 用於登入、UBI 領取、社群應用、政治連署等廣譜場景<sup>3</sup>。這個 universal 取向引出 2023 年肯亞資料保護專員辦公室（ODPC）的暫停命令<sup>4</sup>、2024 年西班牙 AEPD 的 Resolución PS/00120/2024<sup>5</sup>、2025 年巴西 ANPD 的暫停指令<sup>6</sup>，以及香港 PCPD、葡萄牙 CNPD、巴伐利亞 BayLDA 等多國的並行調查<sup>7</sup>。同一時期，Aadhaar 在印度的 13 億人口涵蓋率被 2017 年 Drèze、Khera、Somanchi 對賈坎德邦 PDS 排除錯誤的實證研究戳出 12-37% 的縫隙<sup>8</sup>，2018 年 Puttaswamy II 判決限定 Aadhaar 的私部門使用<sup>9</sup>，2023 年 PDS 排除率改革後仍在 5-10% 之間徘徊<sup>10</sup>。Gitcoin Passport 的 GG18 / GG19 兩輪四千萬美元規模公共財分配，因 5,427 至 30,000 個 sybil 地址而落入 Trusta Labs 與 Nansen 的鏈上分析報告<sup>11</sup>。印尼 e-KTP 弊案則在 2018 年以 Setya Novanto 被判 15 年徒刑作結<sup>12</sup>。

把這些案例放在一張地圖上，「Sybil resistance」就不再是一個單一目標。它在論壇藍勾勾、政治連署、一人一票、補貼分配等不同場景下，需要的「唯一性強度」、「揭露成本」、「包容性覆蓋」三軸截然不同。本文的核心命題是，personhood proof 的設計選擇，受一個經驗加規範性歸納的不可能三角 IT' 約束；在規範前提集 P 下，無法找到一個方案同時把唯一性 U 拉到極大、揭露 D 壓到極小、包容性 I 拉到極大。這個三角的形式化結構與 article 03（H1' 三道牆）、article 04（T 三件式）同樣是合取結構，只是用於不同層級。本文進一步主張，IT' 與後 PACELC 修正版的 CAP theorem 在「對抗 adversary 容忍前提下的設計權衡」這層結構上同構，類比強度評為中強，足以做設計指引但不足以做形式化推論。Worldcoin orb 模式的問題在於它聲稱不必選；它選了強 U 的 corner 並無錯，錯在隱蔽該選擇<sup>13</sup>。

本文以八章開展。第二章盤點五方案，明示子配置與威脅模型偏差。第三章橫向歸納五項政治代價。第四章把不可能三角形式化為 IT'，列出九條子維度，並聲明與 article 03 H1' / article 04 T 的層級差異。第五章建立 CAP-IT' 的中強類比並引申 PACELC 的弱級別方法論。第六章拆解 Worldcoin 過度通用化的六步因果鏈與三條反事實。第七章列出五條邊界條件、七案例對照、六法域承認光譜，論證場景分層方案的工程義務。第八章收束於與 article 03 / 04、prompt 11 / 15 的接合。

## 二、五方案盤點：子配置、威脅模型、攻擊面

在進入個別方案之前，先把一個容易混淆的範疇問題講清楚。Sybil resistance 證明的是「同一人類」這個事實，與「實名身分」沒有必然關聯；KYC（Know Your Customer）則是金融機關的法律合規程序，目的是識別客戶並建立持續監控，與本文討論的 personhood proof 在目的、受規範主體與制度結構上不同。下文五個方案中，僅 Civic、Holonym 等少數變體把 KYC 直接內化為信任根；其餘方案是以生物特徵、社交圖、政府文件、推薦影片等為根，目標只是「同一人類」的不變量，沒有實名揭露的內建義務。

### 2.1 Worldcoin：v1 orb / v2 SMPC + IrisCode 2.0 / Document Verification

把 Worldcoin 寫成一個方案，已經誤導了討論。2024 年 8 月之後 TFH 公告 SMPC 三方治理 + IrisCode 2.0，2024 年 11 月又啟動 Document Verification 作為非 orb 的補充入口<sup>14</sup>。實際運作中至少有三條子配置共存：v1 orb（傳統虹膜採集 + iris template orb 端銷毀）、v2 SMPC + IrisCode 2.0（多方計算分散 iris template 持有，演算法可旋轉）、Document Verification（NFC 讀取 ICAO Doc 9303 護照晶片，類似 zkPassport）<sup>15</sup>。三條子配置的 disclosure 與 inclusion 表現完全不同。把「Worldcoin」當作單一物件比較，會把 v1 的不可逆性錯誤外推到 v2，或反過來把 v2 的演算法可旋轉性誤算為解決了物理層問題。

工程上 World ID 採用 Semaphore zk-SNARK + nullifier per app 的 unlinkability 設計<sup>16</sup>。同一個 World ID 在 Reddit、Discord、Match Group、Stripe Connect 等不同 app 中產生不同 nullifier，工程上達到應用間不可關聯。這條路徑的問題在於它預設「應用間隔離」就足以遏制資料集中。但 World ID Cloud Verifier、World App、World Chain 構成的 token 經濟綁定，把使用者拉回單一治理實體 TFH 的範圍內<sup>17</sup>。隔離的是 verifier 層，不是 issuer 層。

Worldcoin 的核心威脅模型是 issuer collusion；orb 廠商串通、TFH 內部資料外洩、SMPC 三方退出機制都是攻擊面<sup>18</sup>。這與下一節 BrightID 的核心威脅（social graph attack）完全不同。把不同方案拉到同一張 attack model 表格上比較時，必須明示這個威脅模型偏差，否則容易得出虛假對稱的結論。

### 2.2 BrightID：社交圖根的承諾與限制

BrightID 是 2018 年啟動的社交圖型 personhood proof。使用者通過實體聚會（connection party）建立鄰居關係，再用 SybilGuard / SybilLimit 系列演算法檢測異常子圖<sup>19</sup>。Yu et al. 2006 / 2008 的兩篇奠基論文證明，若 honest 區域的混合時間（mixing time）優於 sybil 區域，則可在多項式時間內偵測<sup>20</sup>。但 Mohaisen & Hopper 2013 NDSS 的實證研究指出，現實社交圖的混合時間遠大於理論假設，純社交圖防禦的攻擊容忍度因此被高估<sup>21</sup>。

BrightID 的核心威脅是 social graph attack；攻擊者投入時間建立看似自然的社交圖，最終讓 sybil 子圖的混合時間接近 honest 區域<sup>22</sup>。BrightID Aura 引入 verifier 制度作為 mitigation，卻同時把判斷權力集中到一小群 verifier 手上，與「社交圖民主化」的初衷形成張力<sup>23</sup>。Stamper 2022 MIT thesis 進一步指出，meta-graph 攻擊（觀察 connection 模式而非個別連線）是 BrightID 防禦不到的維度<sup>24</sup>。

BrightID 的 disclosure 表現相對於 Worldcoin 較好（不上傳生物特徵），但社交圖本身就是長期暴露的隱私載體；這項代價在第三章再展開。

### 2.3 Gitcoin Passport（Human Passport）：multi-signal 與 stamp 治理

Gitcoin Passport 採 multi-signal 路徑，使用者收集 BrightID stamp、ENS stamp、Holonym stamp、POAP、GitHub 帳號等多源驗證點，平台依加權門檻判定<sup>25</sup>。這個取向的優點是攻擊面分散，攻擊者必須同時繞過多個獨立來源；缺點是 stamp schema 治理本身成為單點。2024 年 9 月 Holonym 收購 Gitcoin Passport 並更名為 Human Passport，下游 dApp 的 stamp 過渡期影響至今未有完整公開資料<sup>26</sup>。

Gitcoin GG18 與 GG19 兩輪 sybil 攻擊是 multi-signal 路徑的壓力測試。Trusta Labs 2023 第三季的 Gitcoin Passport sybil 分析指出 5,427 個 sybil 地址通過初版閾值<sup>27</sup>；Nansen 2024 的 GG19 鏈上分析將數字擴大到約 30,000 地址<sup>28</sup>。這次失靈的結構性原因並非某一條 stamp 被破解；攻擊者用 Holonym KYC stamp 漏洞作為主入口，再以 ENS / POAP 補強分數，才是核心路徑<sup>29</sup>。Multi-rooted 不等於 multi-secure；攻擊面也是 multi-rooted 的。

Gitcoin Passport 的核心威脅是 stamp schema 治理；schema 的變動會讓所有依賴它的 dApp 同步升級<sup>30</sup>。這條威脅在 2024-09 收購事件後變得更清晰；governance 變動就是攻擊面變動。

### 2.4 zkPassport：政府文件根與全球 8.5 億的排除

zkPassport 採政府護照晶片（ICAO Doc 9303 標準）作為信任根，使用者用 NFC 讀取護照，產生 zk-SNARK 證明「我持有 X 國護照、年齡 ≥ 18」之類的選擇性揭露<sup>31</sup>。Andolfo et al. 2024 IACR ePrint 2024/1377 提供完整的密碼學設計與 CSCA（Country Signing Certificate Authority）信任根分析<sup>32</sup>。

zkPassport 的 D 邊表現是五方案中最強的，選擇性揭露、不依賴生物特徵、不暴露社交圖、不依賴 stamp schema 治理。但它的 I 邊代價也是五方案中最重的；World Bank ID4D 2024 Global Dataset 顯示，全球約 8.5 億人沒有任何法律身分文件，其中 47% 在撒哈拉以南非洲、25% 在南亞、10% 在東南亞<sup>33</sup>。對這群人，zkPassport 完全不可及；這是設計選擇的結構性後果，並非「未來補丁」可以修補的工程議題。

zkPassport 的核心威脅是 issuer collusion 與 CSCA 維護碎片化。某些國家的 CSCA 信任根更新頻率低、撤銷機制不完整<sup>34</sup>；國家層級的偽造（state-level Sybil）對 zk 驗證者完全不可區分<sup>35</sup>。這條威脅與 Worldcoin 的 issuer collusion 同類但範圍不同，前者以 192 個 ICAO 成員國為信任邊界，後者以單一公司為信任邊界。

### 2.5 Proof of Humanity：影片 + 推薦的瓶頸

Proof of Humanity（PoH）2021 年由 Kleros 啟動，使用者上傳自介影片 + 已驗證者的推薦（vouching），由 Kleros juror 池仲裁爭議<sup>36</sup>。2024 年 6 月 PoH v2 上線，引入新一輪治理結構<sup>37</sup>。

PoH 的特徵是公開臉永久；影片是公開的，個資不可撤回。Disclosure 軸的代價極重，但工程設計簡單、不依賴生物特徵硬體、不依賴社交圖演算法。它的核心威脅有二：Kleros juror 池中心化質疑（Allen et al. 2023 preprint 指出 juror 池的 token 持有集中於少數錢包<sup>38</sup>），以及仲裁瓶頸（爭議案件處理時間長）。

### 2.6 五方案是「代表」非「窮盡」

五方案不是 personhood proof 設計空間的窮舉。Idena 採回合制驗證（同步解 captcha + 對等驗證）、Civic 採 KYC 驗證商模型、Anon Aadhaar 把印度 Aadhaar 加上 zk 包裝、Sismo 採 attestation 集合、Holonym 採 KYC stamp、Humanity Protocol 採 palm scan，都是該設計空間的代表延伸<sup>39</sup>。本文以五方案為比較骨架，是因為它們覆蓋了「強生物特徵 / 弱生物特徵 / 無生物特徵」、「強政府根 / 弱政府根 / 無政府根」、「強平台依賴 / 弱平台依賴」三軸的 corner case。

## 三、五項政治代價的橫向歸納

### 3.1 資料集中

資料集中與信任根集中是兩件事。Worldcoin v1 把虹膜資料的物理上 hash 集中於 TFH 與 World Foundation 的數位基礎設施內<sup>40</sup>；zkPassport 把信任根集中於 192 個 ICAO 成員國的 CSCA 系統，但個別使用者的護照資料留在自己裝置；BrightID 把社交圖資料分散在去中心化儲存，驗證權力卻集中於 verifier；Gitcoin Passport 把 stamp 來源分散，schema 治理則集中於收購方 Holonym<sup>41</sup>。「集中於誰」的問題比「是否集中」更具體。任何「去中心化即安全」的口號都需要拆到 issuer / verifier / data store / governance 四層分別檢視。

### 3.2 不可逆性

不可逆性的譜系，由弱到強：BrightID（社交圖可重建）< Gitcoin Passport（stamp 可重設）< zkPassport（護照可換發）< Proof of Humanity（公開臉永久存在區塊鏈）< Worldcoin（虹膜本體不可換）<sup>42</sup>。Daugman 2004 的 iris recognition 經典論文證實，單眼虹膜熵值約 200+ bits，且 iris 的 minutiae 模式在成年後穩定數十年<sup>43</sup>。Bowyer et al. 2008 CVIU 整理 iris biometrics 的物理層特性<sup>44</sup>。Hill 2023 的 *Your Face Belongs to Us* 從新聞調查角度，紀錄了 Clearview AI 等公司如何把人臉資料外溢到無法回收的範圍<sup>45</sup>。

iris 不可逆性必須切成三層：軟體層（nullifier 設計可撤銷單一應用的關聯）、制度層（World Foundation 治理可選擇刪除特定使用者紀錄）、物理層（虹膜本身不可換）<sup>46</sup>。三層的撤銷成本完全不同；模糊三層差異會放大或縮小代價評估。

### 3.3 社交圖暴露

社交圖暴露不是 BrightID 獨家問題。Gitcoin Passport 的多 stamp 累加，本身就構成跨平台社交身分指紋<sup>47</sup>。如果一個使用者同時持有 BrightID stamp、ENS、Lens Protocol、Farcaster、POAP，這些 stamp 的時間序列與內容組合，足以重建出該使用者在 Web3 社交圖中的位置。Stamper 2022 與 Borge et al. 2017 都從不同角度論證，社交圖的長期暴露效應遠大於單次驗證<sup>48</sup>。

### 3.4 平台依賴

平台依賴與治理脆弱性連動。Gitcoin Passport 在 2024 年 9 月被 Holonym 收購為 Human Passport，下游 dApp 必須適應新的 stamp schema 與治理流程<sup>49</sup>。Worldcoin 的 World Foundation 註冊於 Cayman Islands，治理透明度與法律問責的法域選擇本身就是設計選擇<sup>50</sup>。zkPassport 依賴各國 CSCA 的維護週期；某國若發行有缺陷的 CSCA 簽章，所有依賴該國的 zk proof 都受影響。任何 personhood proof 的長期可用性，都受其依附的治理實體之政治穩定性、法律承認光譜、商業模式可持續性影響。

### 3.5 包容性：第五項政治代價

把包容性（inclusion）列為與資料集中、不可逆性、社交圖暴露、平台依賴並列的第五項政治代價。它並非前四項的衍生效應，是 SA-1 文獻檢索後的核心修訂之一<sup>51</sup>。zkPassport 對全球 8.5 億無法律身分人口完全不可及，並非「未來推廣後改善」可以解決的工程議題；它是設計選擇的結構性後果<sup>52</sup>。Worldcoin 在多國暫停命令下，實際採集集中於肯亞、阿根廷等 ID 涵蓋率較高但監管能力相對弱勢的地點，呈現出 Crawford & Joler 2018 *Anatomy of an AI System* 所描述的「資源採集鏈條」結構<sup>53</sup>。BrightID 對沒有實體聚會能力的長者、disability 群體、language minorities 的覆蓋有限；Gitcoin Passport 的 multi-signal 模式對沒有 Web3 預先參與經驗的使用者門檻偏高<sup>54</sup>。

包容性也不是「發展中國家問題」。Pew Research 2023 顯示，美國家戶共用裝置比例為 16%，低收入家戶達 27%；UNICEF 2022 開發中國家共用比例為 30-45%<sup>55</sup>。UK ONS 2024 對英國連網使用者的調查也記錄了高齡與 disability 人口的數位落差<sup>56</sup>。Sen 1999 *Development as Freedom* 的 capability approach 與 Nussbaum 2011 *Creating Capabilities* 提供 inclusion 軸的規範基礎；任何剝奪個體基本能力（包括身分被承認的能力）的設計，都需要在其他軸上提出充分對價<sup>57</sup>。

## 四、不可能三角 IT' 形式化

### 4.1 IT' 命題

把第三章的五項政治代價收束為三軸後，提出以下命題。

> **不可能三角 IT'**
> 在規範前提集 P = { 現實根分布不均、訊息理論下界非零、工程資源有限、fallback 路徑必須存在 } 下，
> IT' = ¬∃ S [ U(S) = max ∧ D(S) = min ∧ I(S) = max ]
> 其中 S 為任一 personhood proof 方案；U 為唯一性強度；D 為揭露成本；I 為包容性覆蓋。

這個命題是經驗加規範性歸納，並非定理；嚴禁假借 CAP 定理權威把它寫成可形式證明的不可能性<sup>58</sup>。它與 Gilbert & Lynch 2002 對 Brewer's Conjecture 的形式化證明形成強度差距<sup>59</sup>；後者有形式語言、模型、定理、證明步驟，前者只有文獻歸納加規範性論證。

### 4.2 九條子維度

三項變量各帶子維度。

**U（uniqueness）**：

- per-identity cost；攻擊者偽造一個額外身分的邊際成本（從 BrightID 的「組織一場聚會」到 Worldcoin orb 的「找一顆眼球」）
- detection latency；sybil 帳號從建立到被偵測的時間延遲（GG18 / GG19 從輪次結束到 Trusta Labs 報告約 3-6 個月）
- collusion resistance；issuer / verifier / juror 多方串通的容忍上限

**D（disclosure 最小化）**：

- enrollment-time disclosure；註冊時必須上傳的資料（虹膜 vs 社交圖 vs 護照晶片）
- verification-time disclosure；驗證時揭露的資料（zk proof vs 全資料 vs 部分資料）
- observer-side disclosure；第三方觀察者可推知的資訊（meta-graph、stamp 組合、時間序列）
- future leakage risk；未來資料外洩的代價（虹膜不可換 vs 護照可重發）

**I（inclusion）**：

- document gap；無法律身分文件人口（World Bank ID4D 8.5 億）
- biometric exclusion；生物特徵採集失敗率（Buolamwini & Gebru 2018 *Gender Shades* demographic 偏差）<sup>60</sup>
- technology gap；無智慧型手機 / 不穩定網路 / 無 NFC 硬體
- language and disability gap；介面語言、視障 / 聽障 / 認知障礙、長者數位落差

九條子維度逐項列出後，三角的具體張力才有共同尺度。任何宣稱「我的方案三邊都好」的設計，都必須對九條子維度提出具體量化或邊界證明。

### 4.3 兩兩高張力與 D-I 退化路徑

兩兩高張力，但不蘊含邏輯互斥。

**U-D 衝突**：要證明唯一性，issuer 在某個時間點必須持有「同一人類」的不變量；零知識協議可以把驗證時的揭露壓到極小，卻無法消除註冊時的揭露<sup>61</sup>。zk 把衝突從 verifier 轉移到 issuer，未消除衝突本身。

**U-I 衝突**：根分布不均；單一根（如護照、Aadhaar、orb）無法覆蓋 100% 人口；多重根降低 collusion resistance（GG18 / GG19 的攻擊面分散就是攻擊面的線性相加）<sup>62</sup>。

**D-I 退化路徑**（最被低估的張力）：zk 系統失敗時，fallback 路徑通常退化為高揭露<sup>63</sup>。當 zkPassport 的 NFC 讀取在低端手機上失敗，使用者被引導到「人工驗證」路徑，等同於完整 KYC；當 World ID Cloud Verifier 在離線環境失敗，使用者要拿出護照補件。失敗率在弱勢群體（高齡裝置、不穩定網路、disability）顯著高於一般群體。D 軸的成本，最終落在 I 軸最弱處。

### 4.4 與 article 03 H1' / article 04 T 的層級差異

IT' 與 article 03 數位結社三道牆 H1'（不可被切斷、不可被穿透、不可被癱瘓）、article 04 假名參與 T 三件式（unlinkability ∧ accountability ∧ recoverability）同樣是合取結構，但用於不同層級<sup>64</sup>。

article 03 H1' 與 article 04 T 都是合取必要條件；三條任缺其一，制度即敗。article 03 講的是數位結社權的三道法律保障，缺一即憲政層級失守；article 04 講的是假名參與的三件式工程契約，缺一即制度失效。兩者都是「合取必要」，違反任一邊的方案根本無法上線。

IT' 是合取最大化不可達；三邊都要拉到極大不可同時達成，但任何一邊都可拉到中等以上。它的結構並非「缺一即敗」；「無法同時拉滿」才是核心。Worldcoin 把 U 拉到 5、D 壓到 1、I 落到 2，方案仍可運作；BrightID 把 U 落到 2、D 拉到 4、I 拉到 3，方案也仍可運作。差別在於每個方案的 corner 落點，以及該 corner 的政治代價。

這個層級差異重要，因為它界定了 IT' 的規範地位；它是「設計選擇框架」而非「資格門檻」。

## 五、CAP 類比（中強）與 PACELC 引申

### 5.1 對應方式 B

CAP theorem 由 Brewer 2000 PODC keynote 提出，由 Gilbert & Lynch 2002 形式化證明<sup>65</sup>，再由 Brewer 2012 *CAP twelve years later* 與 Abadi 2012 *Consistency Tradeoffs in Modern Distributed Database System Design* 修正為 PACELC 框架<sup>66</sup>。本文採對應方式 B，以「對抗 adversary 的容忍前提」為主軸。

| CAP（分散式系統） | IT'（Sybil resistance） | 對應理由 |
|---|---|---|
| C, Consistency | U, Uniqueness | 全域同一性保證 |
| A, Availability | I, Inclusion | 不漏單元 |
| P, Partition tolerance | D, Disclosure 最小化 | 對抗 adversary 的不可放棄前提 |

P 對應 D 的關鍵理由如下。分散式系統中 partition tolerance 是不可放棄的工程前提（網路分區會發生），系統設計者只能在 C 與 A 之間選；Sybil resistance 中 disclosure 最小化是不可放棄的政治前提（隱私威脅是客觀存在），設計者只能在 U 與 I 之間做主軸權衡<sup>67</sup>。

### 5.2 四層強度評估

- **強度 A（對抗性目標）：強**；CAP 與 IT' 都以「對抗某種 adversary」為設計目標（前者 partition、後者 surveillance + sybil）；adversarial impossibility 結構深度相似。
- **強度 B（形式化結構）：弱**（紅線）；CAP 是定理（有 Gilbert-Lynch 形式證明），IT' 是經驗加規範性歸納，無形式證明。嚴禁等同地位。
- **強度 C（失敗模式）：中強**；兩者都是「拒絕承認權衡 → 崩盤」的結構：CAP 的 split-brain 是技術 cascade（資料不一致導致應用層錯誤累積），IT' 的「universal 設計目標」是政治 cascade（單一方案外推到所有場景，引發跨法域監管反彈）。
- **強度 D（設計選擇教育意涵）：強**；兩者都把工作者從「找完美方案」拉向「明示權衡」；這是類比的最強層。

整體強度評為「中強」。可作規範指引，不可作形式化推論。對應方式 B 的選擇，與 article 04 SA-3 「設計選擇」框架共用同一姊妹結構<sup>68</sup>。

### 5.3 PACELC 引申：IS-AUEL-D 弱級別方法論

PACELC 把 CAP 從靜態三角擴張為動態結構：If Partition, then choose between Availability and Consistency; Else, choose between Latency and Consistency<sup>69</sup>。把這個結構引申到 IT'，得到一個弱級別方法論提示。

> **IS-AUEL-D**：If Surveillance attack, then choose between Uniqueness and Inclusion; Else, choose between Ergonomics and Uniqueness.

這個引申是弱級別的；它不是定理也不是嚴格類比，只是把 IT' 從靜態三軸擴張為「攻擊強度分級」的動態結構，為第七章的場景分層提供規範語言<sup>70</sup>。它的主要用途，是讓場景設計者在 surveillance 威脅高的場景（如政治連署、人權倡議）優先 disclosure，在威脅低的場景（如論壇藍勾勾）優先 ergonomics。

### 5.4 與 Mundell-Fleming / Buterin trilemma 的元類比

IT' 不是孤立的不可能三角。Mundell-Fleming 三難（資本流動、固定匯率、獨立貨幣政策三選二）<sup>71</sup>、Buterin 區塊鏈三難（去中心化、安全性、可擴展性）<sup>72</sup>、Tinbergen rule（政策工具數須等於政策目標數）<sup>73</sup>都是經濟學或工程學的不可能三角家族。把 IT' 放進這個家族，能看出三角結構的共同特性：對抗性目標 + 規範前提 + 兩兩高張力 + 合取最大化不可達。但每個三角的形式化強度差異極大，從 Tinbergen rule 的數學定理到 Buterin trilemma 的經驗歸納分散在光譜兩端；IT' 落在中段。

## 六、Worldcoin 過度通用化的六步因果鏈

### 6.1 因果鏈 M1-M6

```
[M1] universal proof of personhood（設計目標明示）
        TFH whitepaper + World ID 文件 + SDK 整合
        ↓
[M2] iris hash 物理層不可逆（生物特徵特殊性）
        Daugman 2004 + Hill 2023 + 三層撤銷區分
        ↓
[M3] 同一 iris hash 涵蓋多場景（M1 + M2 結合）
        identity creep + WLD token 經濟綁定
        ↓
[M4] 跨平台連結性 + 持續監控（zk 隔離 vs 側資訊現實）
        三層側通道：裝置層 / 服務層（World ID Cloud Verifier）/ Token 層
        ↓
[M5] 集中於單一公司 → 資訊不對稱、退場成本極高
        TFH + Worldcoin Foundation 治理 + ODPC Kenya 2023 / AEPD Spain 2024
        ↓
[M6] 採集優先順序 → 經濟誘因驅動發展中國家優先（中強相關性）
        Rest of World 報導 + Crawford & Joler 2018 + ID4D 報告
        ↓
[結論] 把不可逆生物特徵集中化的政治代價，外推到不需要它的場景與沒有能力 opt-out 的人口
```

M1：universal proof of personhood 的設計目標在 TFH whitepaper（2023 / 2025 兩版）與 World ID 2.0 docs 中明示；SDK 整合 Reddit、Discord、Match Group、Stripe Connect 等廣譜應用<sup>74</sup>。

M2：iris hash 物理層不可逆。Daugman 2004 證實單眼虹膜熵值 200+ bits，且 minutiae 模式成年後穩定數十年<sup>75</sup>；Hill 2023 從新聞調查角度，紀錄不可逆生物特徵的長期外溢<sup>76</sup>。三層撤銷區分（軟體層 / 制度層 / 物理層）已在第三章列出。

M3：M1 與 M2 結合產生 identity creep。Hoofnagle et al. 2012 *Behavioral Advertising: The Offer You Cannot Refuse* 描述 identity creep 一般機制<sup>77</sup>；Worldcoin 加上 WLD token 經濟綁定後，使用者一旦註冊即難以退出<sup>78</sup>。

M4：World ID Cloud Verifier 的服務層側通道、World App 的裝置層側通道、WLD token 的鏈上行為痕跡，構成三層側資訊路徑<sup>79</sup>。zk 證明的應用間隔離（nullifier per app）只覆蓋驗證資料層，不覆蓋這三層側通道。

M5：集中於 TFH + Worldcoin Foundation 的單一治理結構。多國暫停命令呈現 M5 的後果；肯亞 ODPC 2023-08-02、西班牙 AEPD 2024-03、巴西 ANPD 2025-01、葡萄牙 CNPD 2024-03、香港 PCPD 2024-05、巴伐利亞 BayLDA 2023-12 等構成「明確暫停 / 調查中 / 軟監管」三組監管反應<sup>80</sup>。把這三組化約為「壓制」會抹除各法域的具體法律邏輯（GDPR Art. 9 特殊類別生物特徵 / Convention 108+ / EDPB Guidelines 05/2022 facial recognition）<sup>81</sup>。

M6：採集優先順序與發展中國家分布的中強相關性。Rest of World 系列報導記錄 Worldcoin orb 在肯亞、阿根廷、印尼、越南等地的密集部署<sup>82</sup>；Crawford & Joler 2018 *Anatomy of an AI System* 提供 AI 系統政治經濟學分析框架<sup>83</sup>。中強相關性，不升級為單向因果；肯亞政府 2023 年的主動暫停，是發展中國家政府主體性的反例<sup>84</sup>。

### 6.2 三條反事實

**反事實 A**：Worldcoin 限定跨國 UBI 場景。在 UBI 場景下，唯一性的政治正當性遠強於論壇藍勾勾，使用 iris 作為強根的代價可承受；但仍需審計 iris 是否真必要。hybrid 路徑（zkPassport-style 護照根 + PoH-style 推薦補強）可達相近效果，且不引入物理層不可逆性。

**反事實 B**：採用撤銷性生物特徵（face / voice hash + 演算法 rotation）。物理層不可逆性部分消失，但 face hash 在 demographic 偏差比 iris 更嚴重（Buolamwini & Gebru 2018 *Gender Shades* 三家主流系統對深膚色女性錯誤率高達 34.7%）<sup>85</sup>，且可遠距採集，整體代價未必降低。

**反事實 C**：Token incentive 與 personhood proof 完全分離（公共財模式）。M6 採集優先順序大幅改變，M5 資訊不對稱降低，但工程速度與規模顯著犧牲；TFH 的 venture capital + token 商業模式無法支撐分離後的開發。

### 6.3 工程公允描述與四項政策建議

把 Worldcoin 寫成詐騙是錯誤的。TFH 在五項工程努力上的投入需要公允描述：(i) Semaphore zk circuit 的應用間隔離；(ii) iris template 在 orb 端銷毀（only 雜湊上傳）；(iii) 開源 orb 規格；(iv) self-custody 路徑（使用者持有 World ID 私鑰）；(v) Privacy Documentation 公開<sup>86</sup>。這五項是真實的工程努力，不應被「universal 設計目標」的政治批評否定。

主張並非禁止 Worldcoin；禁止外推才是政策核心。本文提出四項可操作政策建議。

1. **場景門檻**：personhood proof 的強度應與場景的對抗強度匹配。論壇藍勾勾不需要 iris，UBI 試點才需要。
2. **nullifier 隔離法律契約**：nullifier per app 的工程隔離應由法律契約強化；服務商接受 World ID 時須簽署 nullifier 不對外比對的具有強制執行力的義務。
3. **退場審計**：使用者撤回授權後，World Foundation 須在約定時間內證明 iris hash 已從特定法域系統中移除，並接受第三方審計。
4. **採集場域 pre-clearance**：Worldcoin orb 進入新法域前，應取得當地資料保護機關的事前清算（pre-clearance），而非「先部署、後協商」。

這四項建議與第七章的場景分層義務形成閉環。

## 七、五條邊界條件與場景分層的工程義務

### 7.1 B1：弱身分證制度國家如何替代 L3

World Bank ID4D 2023 / 2024 update 顯示，全球 8.3 億無 ID 人口，47% 集中於撒哈拉以南非洲、25% 南亞、10% 東南亞<sup>87</sup>。對這些國家，L3（強護照根）方案不適用。L3 替代有四條路徑。

(i) multi-rooted 退路；同時接受多個弱根（社區證明、雇主證明、教育機構證明），但需面對 GG18 / GG19 攻擊面分散的代價<sup>88</sup>。
(ii) 社區根；盧安達 Umuganda 月度社區聚會、肯亞 M-Pesa 社交經濟網絡作為弱身分根<sup>89</sup>。
(iii) 跨國憑證 piggyback；UNHCR 為無國籍與難民人口發行的憑證，作為跨國 personhood proof 的替代<sup>90</sup>。
(iv) 場景分層降級服務；L3 缺席時提供降級的 L2 / L1 服務，而非完全拒絕。

### 7.2 B2：Aadhaar 教訓的四層意涵

Aadhaar 既不是全失敗也不是全成功。13 億人口涵蓋是規模化政策成就；改革有效但不徹底；排除錯誤對最弱勢個體仍是 100% 災難。這四層意涵分別對應四項實證。

**強根工程界限**：13 億規模仍每年累積重複註冊；強根的設計目標在規模壓力下無法 100% 達成<sup>91</sup>。

**排除錯誤不對稱性**：Drèze、Khera、Somanchi 2017 對賈坎德邦 PDS 排除率的研究顯示 12-37% 區間，代價由最弱勢個體承擔（Santoshi Kumari 2017 因 Aadhaar 認證失敗無法領取糧食配給後餓死的案例，是這個不對稱性的具象化）<sup>92</sup>。

**function creep**：Aadhaar 從原始的 PDS 補貼分配場景逐步擴展到電信實名、稅務、銀行、補貼、養老金、學校登記，2018 年 Puttaswamy II 判決限定私部門使用後仍持續擴張到準公共服務<sup>93</sup>。

**改革進展**：2018 年判決後，UIDAI 推出 face authentication、Virtual ID、offline Aadhaar 等 mitigation；2023 年 PDS 排除率降至 5-10%，仍非零<sup>94</sup>。

Aadhaar 的教訓並非「強根全錯」；「強根的政治代價高於工程預期，且代價不對稱地落在最弱勢個體」才是核心。這條教訓直接約束 zkPassport / Worldcoin 等 L3 方案的部署設計。

### 7.3 B3：家庭內共用裝置的反測試

Pew Research 2023 顯示，美國家戶共用裝置比例 16%，低收入家戶 27%；UNICEF 2022 開發中國家 30-45%<sup>95</sup>。共用裝置對 personhood proof 構成四類挑戰。

(i) passkey 裝置綁定衝突；當家戶共用一台手機，個人 passkey 等同家戶 passkey。
(ii) 生物特徵 enrollment 衝突；同一裝置上多人 enrollment，對 Face ID / Touch ID 系統造成精度下降。
(iii) 社交圖家庭簇；BrightID 等社交圖系統把家庭聚會視為單一家戶簇，難以區分個體。
(iv) 行為信用代理操作；家庭內由信用佳的成員代理操作其他成員的帳戶，破壞唯一性測試。

三條設計回應：家戶模式（顯式承認家戶單位、提供家戶內的個體區分機制）、場景退讓（在家戶共用場景降低唯一性要求）、社區代理人模式（弱勢個體授權社區代理人操作）。三條都不是完美方案，但拒絕承認共用裝置的存在會把 inclusion 軸的代價隱藏化。

### 7.4 B4：multi-rooted 是條件成立非全面解三角

multi-rooted 取向是 SA-2 § 7 對「三角可被某方案解決」反論的核心應對。Gitcoin Passport GG18 / GG19 攻擊面分散到 multi-stamp，攻擊者用 Holonym KYC 漏洞作為主入口、ENS / POAP 補強分數，最終 5,427 至 30,000 sybil 地址通過閾值<sup>96</sup>。Holonym KYC 漏洞指向「最弱根決定整體強度」的 multi-rooted 攻擊面結構。

PoH 的 Kleros juror 仲裁瓶頸是另一條 multi-rooted 限制；當爭議案件量超過 juror 池處理速度，仲裁延遲擴大，攻擊者可在延遲期間累積影響<sup>97</sup>。BrightID + zkPassport 雙根概念在 disclosure 軸有所改善，inclusion 軸卻更弱（同時要有護照與社交圖），是雙根的非對稱代價<sup>98</sup>。

multi-rooted 是「條件成立」的方案；條件包括各根的攻擊面獨立、最弱根不致命、根之間的組合不引入新側通道。這些條件不會自動滿足，需要設計者證明。

### 7.5 B5：跨法域承認光譜

六法域的承認表現顯著不對稱。歐盟 eIDAS 2.0（Regulation EU 2024/1183）強制成員國於 2026 年前接受 EUDI Wallet，覆蓋 L0 至 L3 全層次<sup>99</sup>。愛沙尼亞 X-Road + smart-ID 達 99% 涵蓋率，但 2017 年 ROCA 漏洞影響 75 萬張 ID 卡，揭示集中根的系統性風險<sup>100</sup>。美國 mDL（ISO/IEC 18013-5 + AAMVA Implementation Guidelines v1.4）已於 14 州部署，州際與國際互認尚不完整<sup>101</sup>。印度 DigiLocker 2024 註冊用戶超過 3.5 億，作為 Aadhaar 的補充入口<sup>102</sup>。台灣 TW DIW 路線圖 2024-2026 由國家發展委員會發布，技術上以自然人憑證為強根<sup>103</sup>。印尼 e-KTP 在 2018 年弊案後，PeduliLindungi 作為 multi-signal fallback 維持 1 億使用者規模<sup>104</sup>。

中國 e-KYC 與香港 PCPD 構成兩個對照組。中國的網路實名制把 Sybil resistance 工具直接國家化，個體不持有任何 unlinkability 工程保障；香港 PCPD 在 2024-05 對 Worldcoin 發出執行通知，採用個資保護法的軟監管路徑<sup>105</sup>。同一個工程方案，在不同法域下的政治代價量級可差距一個數量級。

### 7.6 七案例的場景對照與三條工程義務

| 案例 | U 邊 | D 邊 | I 邊 | 結構性原因 |
|---|---|---|---|---|
| Aadhaar 排除 | 強（13 億） | 弱（強根 + 國家集中） | 斷裂（PDS 5-10% 排除） | L3 強根的 inclusion 不對稱 |
| Worldcoin 在肯亞 / 阿根廷 | 強 | 弱（不可逆 iris） | 弱（多國暫停） | universal 設計目標 + 物理層不可逆 |
| GG18 / GG19 sybil | 失靈（30K sybil） | 中 | 退化（修補後門檻上升） | multi-rooted = 攻擊面 multi-rooted |
| 印尼 e-KTP 弊案 | 失靈 | 弱 | 斷裂 | L3 強根 + 治理品質低 = 弱根 |
| Estonia smart-ID | 強（99%） | 中（強身分綁定） | 強 | 小國 + 政治信任 = 全民涵蓋 vs 假名空間取捨 |
| 印尼 PeduliLindungi | 中（multi-signal） | 中 | 強（fallback） | multi-rooted fallback 維持 inclusion |
| BrightID 社交圖 | 弱 | 中（社交圖長期暴露） | 中 | meta-graph 觀察攻擊不可消除 |

七案例至少呈現五種失敗 / 成功模式（Aadhaar、Worldcoin、GG18 / GG19、e-KTP、Estonia + PeduliLindungi）。場景分層方案要避免這五種模式，需要履行三條工程義務。

(i) **明示「L3 缺席時的退路」**；L3 不可達時提供具體 L2 / L1 替代，並承認替代的能力差距。
(ii) **明示「L1 inclusion 的相對性」**；L1 的低門檻不等於普及，仍須評估社交圖 / 裝置 / 語言維度的覆蓋。
(iii) **明示「家戶共用裝置的反測試」**；共用裝置情境的處理方法（家戶模式、場景退讓、代理人模式）必須在設計文件中具體化。

三條義務是「場景分層」這個取向的最低門檻；缺一即落入第七章七案例的失敗模式。

## 八、結論：三角、層級、邊界

從 Worldcoin 到 zkPassport，每一個 personhood proof 方案在不可能三角 IT' 的 U / D / I 三邊都做了取捨。這個三角與 article 03 H1' 三道牆、article 04 T 三件式同樣是合取結構，但用於不同層級；前兩者是合取必要條件「缺一即敗」，IT' 是合取最大化不可達「無法同時拉滿」<sup>106</sup>。CAP 教會工程師明示權衡，IT' 教會公民科技工作者場景分層；Worldcoin orb 模式的問題在於它聲稱不必選；它選了強 U 的 corner 並無錯，錯在隱蔽該選擇。場景分層仍受 5 條邊界條件約束（弱身分證國家可動員性、Aadhaar 強根代價、家庭內共用裝置、multi-rooted 三邊不對稱、跨法域承認光譜），缺一就會落入 Aadhaar 排除、Worldcoin 監管挫敗、Gitcoin GG18 sybil、印尼 e-KTP 弊案的失敗模式。

與 article 03（digital-association-empirical-test）的接合在於合取結構的層級差異；H1' 三道牆是憲政層級的合取必要，IT' 是工程層級的合取最大化不可達。同樣是「三條都要」，但「都要」的法律地位完全不同。與 article 04（pseudonymous-participation-legal）的接合在於設計選擇的姊妹結構；T 三件式（unlinkability ∧ accountability ∧ recoverability）是法律制度層的合取必要條件，IT' 是 Sybil resistance 工程層的合取最大化框架；CAP 類比是兩篇文章共用的設計選擇姊妹結構。

與 prompt 11（wallet-as-essential-facility）的接合在於場景強度分級的工程結論；digital wallet 作為 essential facility 不應強制單一 personhood proof；wallet 應該支援 L0 passkey、L1 社交根、L2 multi-stamp、L3 強護照根的多層服務組合，由場景動態決定強度需求<sup>107</sup>。與 prompt 15（civic-proof-inclusion-rights）的接合在於 L3 替代路徑；unbanked、undocumented、disability、長者、language minorities 各自需要的並非「降級的 L3」；與 L3 在政治正當性上等價的替代方案才是工程目標。社區根、跨國憑證 piggyback、家戶模式、社區代理人模式是這個替代清單的工程草案。

本文的限制有三項。第一，IT' 三軸的測度（U 為 false positive 率上限、D 為 k-anonymity / 差分隱私 ε、I 為人口涵蓋率）尚無形式化；五方案的三軸評分是文獻歸納的相對排序，不是絕對量化。第二，CAP-IT' 類比的中強強度是「足以做設計指引、不足以做形式化推論」的中段定位；未來若有人把 IT' 提升為定理，類比強度會升級；目前不能假借 CAP 定理權威。第三，五條邊界條件是 SA-5 七案例對照的歸納，未來新案例可能引出第六、第七條邊界條件；場景分層的工程義務清單應隨案例累積而擴展。

二十多年前 Douceur 把 Sybil 攻擊定義為單一實體冒充多重身分，是分散式系統的工程命題；二十多年後，這個命題在 Worldcoin、zkPassport、Aadhaar 的政治場景中，演化為公民科技工作者必須面對的設計選擇問題。三角不是定理，但它是設計選擇的座標軸；CAP 給工程師的，是同樣的禮物。

## 參考資料

1. Douceur, J. R. (2002). *The Sybil Attack*. IPTPS, LNCS 2429, 251-260. 來源等級 A。
2. Buterin, V., Ohlhaver, P., & Weyl, E. G. (2022). *Decentralized Society: Finding Web3's Soul*. SSRN 4105763. 來源等級 A。
3. Worldcoin / Tools for Humanity (2023, 2025). *Worldcoin: A New Identity and Financial Network* whitepaper（兩版）。來源等級 A。
4. Office of the Data Protection Commissioner (Kenya) (2023-08-02). Suspension order on Worldcoin。來源等級 A。
5. AEPD (Spain) (2024-03-06). Resolución PS/00120/2024。來源等級 A。
6. ANPD (Brazil) (2025-01). Worldcoin 暫停指令公告。來源等級 A。
7. PCPD (Hong Kong) 2024-05 執行通知；CNPD (Portugal) 2024-03 Deliberação 2024/124；BayLDA (Bavaria) 2023-12-20 press release on Worldcoin GDPR proceedings。來源等級 A。
8. Drèze, J., Khera, R., & Somanchi, A. (2017). *Aadhaar and Food Security in Jharkhand*. EPW 52(50), 50-59。來源等級 A。
9. Supreme Court of India (2018). *Justice K. S. Puttaswamy (Retd.) v. Union of India*, (2019) 1 SCC 1。來源等級 A。
10. UIDAI 2023 RTI 數據與 Khera (Ed.) (2019) *Dissent on Aadhaar: Big Data Meets Big Brother*. Orient BlackSwan。來源等級 A / D。
11. Trusta Labs (2023) *Gitcoin Passport Sybil Analysis Q3 2023*；Nansen (2024) *On-chain Analysis of Gitcoin GG19*。來源等級 B。
12. Reuters (2018-04-24) *Indonesia e-KTP Corruption Case: Setya Novanto Convicted*；Tempo 2017-2018 e-KTP scandal investigative reports。來源等級 B。
13. Tools for Humanity / Worldcoin Foundation (2024-2025) *Privacy Documentation*（含 self-custody、orb 端銷毀、Semaphore zk circuit 等五項工程文件）。來源等級 A。
14. Tools for Humanity (2024-08) *IrisCode 2.0 Technical Brief*；(2024-11) *World ID Document Verification Specification*。來源等級 C。
15. ICAO (2021). *Doc 9303: Machine Readable Travel Documents*, 8th edition。來源等級 A。
16. Worldcoin Foundation (2023). *Worldcoin Whitepaper v2.0*；World ID Spec。來源等級 A / C。
17. Tools for Humanity (2024) *World ID 2.0 / Cloud Verifier* technical announcement；World Chain 主網部署技術報導 (The Block / CoinDesk 2024-2025)。來源等級 A / C。
18. Worldcoin Foundation (2024) *World Whitepaper v3 draft*；Privacy International (2023) *Worldcoin: The Eye of Mass Surveillance*。來源等級 B。
19. BrightID (2024-09 snapshot) Protocol documentation 與 Yellowpaper。來源等級 C。
20. Yu, H., Kaminsky, M., Gibbons, P. B., & Flaxman, A. (2006). *SybilGuard*. SIGCOMM；Yu, H., Gibbons, P. B., Kaminsky, M., & Xiao, F. (2008). *SybilLimit*. IEEE S&P。來源等級 A。
21. Mohaisen, A., & Hopper, N. (2013). *Measuring the Mixing Time of Social Graphs*. NDSS。來源等級 A。
22. Levine, B. N., Shields, C., Margolin, N. B. (2006). *A Survey of Solutions to the Sybil Attack*。來源等級 A。
23. BrightID Forum / Discord governance discussions (2022-2024) 及 Aura 設計文件。來源等級 D。
24. Stamper, J. (2022). *Privacy Properties of Social Graph-Based Identity Systems*. MIT Master's thesis。來源等級 A。
25. Gitcoin Passport / Human Passport (2024-12 snapshot) Documentation。來源等級 C。
26. Holonym Foundation (2024-09) Acquisition of Gitcoin Passport announcement。來源等級 D。
27. Trusta Labs (2023). *Gitcoin Passport Sybil Analysis Q3 2023*。來源等級 B。
28. Nansen (2024). *On-chain Analysis of Gitcoin GG19*。來源等級 B。
29. Holonym (2024). Holonym KYC Stamp Documentation；Gitcoin (2023-2024) GG18/GG19/GG20 retro posts and sybil analysis。來源等級 B / C。
30. Allen, D. et al. (2023). *Sybil-Resistance via Subjective Verification*. Preprint。來源等級 D。
31. zkPassport (2024) Technical Whitepaper。來源等級 C。
32. Andolfo, A., Tognolini et al. (2024). *zkPassport*. IACR ePrint 2024/1377。來源等級 A。
33. World Bank ID4D (2024) *ID4D Global Dataset Update 2024*；World Bank ID4D (2023) *Identification for Development Annual Report 2023*。來源等級 A。
34. ICAO (2021). *Doc 9303: Machine Readable Travel Documents*, 8th edition；CSCA 信任根維護分析（Andolfo et al. 2024 § 4-5）。來源等級 A。
35. Andolfo, A., Tognolini et al. (2024). *zkPassport*. IACR ePrint 2024/1377（state-level Sybil 討論）。來源等級 A。
36. Proof of Humanity (2024-06) v2 launch documentation；Borge, M. et al. (2017). *Proof-of-Personhood: Redemocratizing Permissionless Cryptocurrencies*. IEEE EuroS&PW。來源等級 A / C。
37. PoH v2 launch documentation (2024-06)。來源等級 C。
38. Allen, D. et al. (2023). *Sybil-Resistance via Subjective Verification*. Preprint（Kleros juror 池中心化分析）。來源等級 D。
39. PSE Anon Aadhaar repository documentation (2024)；Rarimo Foundation (2024) *RariMe technical brief*；Privado ID (2024) Protocol whitepaper。來源等級 C。
40. Worldcoin / TFH (2024-2025) *Privacy Documentation*；Worldcoin Foundation Cayman Islands 註冊基金會的治理透明度。來源等級 A / TODO-VERIFY。
41. Holonym Foundation (2024-09) Acquisition of Gitcoin Passport announcement；Gitcoin Passport Documentation。來源等級 C / D。
42. Hill, K. (2023). *Your Face Belongs to Us*. Random House；Daugman, J. (2004). *How Iris Recognition Works*. IEEE TCSVT 14(1), 21-30。來源等級 A。
43. Daugman, J. (2004). *How Iris Recognition Works*. IEEE TCSVT 14(1), 21-30。來源等級 A。
44. Bowyer, K. W., Hollingsworth, K., & Flynn, P. J. (2008). *Image Understanding for Iris Biometrics: A Survey*. CVIU 110(2), 281-307。來源等級 A。
45. Hill, K. (2023). *Your Face Belongs to Us*. Random House；Hill, K. (2020). *The Secretive Company That Might End Privacy as We Know It*. New York Times。來源等級 A。
46. Selinger, E., & Hartzog, W. (2018). *The Inconsentability of Facial Surveillance*. Loyola L. Rev. 61(1)；Privacy International (2023) *Worldcoin: The Eye of Mass Surveillance*。來源等級 A / B。
47. Stamper, J. (2022). *Privacy Properties of Social Graph-Based Identity Systems*. MIT Master's thesis；Borge, M. et al. (2017). *Proof-of-Personhood*. IEEE EuroS&PW。來源等級 A。
48. 同上。來源等級 A。
49. Holonym Foundation (2024-09) Acquisition of Gitcoin Passport announcement；Gitcoin Passport Documentation 過渡期說明。來源等級 D / C。
50. Worldcoin Foundation Cayman Islands 註冊資料；Privacy International (2023) *Worldcoin: The Eye of Mass Surveillance*。來源等級 B / TODO-VERIFY。
51. World Bank ID4D & GSMA (2019). *Digital Identity and the Inclusive Economy*；UNHCR (2020). *Statelessness: An Analytical Framework*。來源等級 A。
52. World Bank ID4D (2024) *ID4D Global Dataset Update 2024*。來源等級 A。
53. Crawford, K., & Joler, V. (2018). *Anatomy of an AI System*. AI Now Institute & Share Lab；Rest of World 全球南方採集現場報導系列 (2023-2025)。來源等級 B / C。
54. Gitcoin (2023-2024) GG18/GG19/GG20 retro posts and sybil analysis（門檻調整討論）。來源等級 B。
55. Pew Research Center (2023). *Mobile Phone Sharing in U.S. Households*；UNICEF (2022) 全球連網報告。來源等級 B。
56. UK ONS (2024). *Internet Users in the UK 2024*。來源等級 B。
57. Sen, A. (1999). *Development as Freedom*. Knopf；Nussbaum, M. C. (2011). *Creating Capabilities*. Harvard UP；Tyler, T. R. (1990). *Why People Obey the Law*. Yale UP；Bingham, T. (2010). *The Rule of Law*. Penguin。來源等級 A。
58. Solove, D. J. (2008). *Understanding Privacy*. Harvard UP；Cohen, J. E. (2013). *What Privacy Is For*. Harvard Law Review 126；Nissenbaum, H. (2010). *Privacy in Context*. Stanford UP。來源等級 A。
59. Gilbert, S., & Lynch, N. (2002). *Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services*. ACM SIGACT News 33(2), 51-59。來源等級 A。
60. Buolamwini, J., & Gebru, T. (2018). *Gender Shades*. PMLR 81, 1-15。來源等級 A。
61. Goldwasser, S., Micali, S., & Rackoff, C. (1985). *The Knowledge Complexity of Interactive Proof Systems*. STOC；Camenisch, J., & Lysyanskaya, A. (2001). *Anonymous Credentials*. EUROCRYPT 2001。來源等級 A。
62. Trusta Labs (2023) *Gitcoin Passport Sybil Analysis Q3 2023*；Nansen (2024) *On-chain Analysis of Gitcoin GG19*。來源等級 B。
63. Ohm, P. (2010). *Broken Promises of Privacy*. UCLA Law Review 57, 1701-1777；Sweeney, L. (2002). *k-Anonymity*. IJUFKS 10(5), 557-570。來源等級 A / B。
64. 與 article 03（digital-association-empirical-test）H1' 三道牆 + article 04（pseudonymous-participation-legal）T 三件式跨文章接合。來源等級：本文與系列文章內部接合。
65. Brewer, E. (2000). *Towards Robust Distributed Systems*. PODC keynote；Gilbert, S., & Lynch, N. (2002). 同前。來源等級 A。
66. Brewer, E. (2012). *CAP twelve years later*. IEEE Computer 45(2), 23-29；Abadi, D. (2012). *Consistency Tradeoffs in Modern Distributed Database System Design (PACELC)*. IEEE Computer 45(2), 37-42。來源等級 A。
67. Lynch, N. (1996). *Distributed Algorithms*. Morgan Kaufmann；Coulouris, G., Dollimore, J., Kindberg, T., & Blair, G. (2011). *Distributed Systems: Concepts and Design* (5th ed.)。來源等級 A。
68. Hesse, M. (1966). *Models and Analogies in Science*. University of Notre Dame Press；Lakatos, I. (1970). *The Methodology of Scientific Research Programmes*. Cambridge UP；Brandom, R. (1994). *Making It Explicit*. Harvard UP；Brandom, R. (2000). *Articulating Reasons: An Introduction to Inferentialism*. Harvard UP；Gentner, D. (1983). *Structure-mapping*. Cognitive Science 7(2), 155-170。來源等級 A。
69. Vogels, W. (2009). *Eventually Consistent*. CACM 52(1)；Bailis, P. et al. (2013). *Highly Available Transactions*. VLDB；Kleppmann, M. (2015). *A Critique of the CAP Theorem*. arXiv:1509.05393。來源等級 B。
70. Cavoukian, A. (2009). *Privacy by Design: The 7 Foundational Principles*；Cameron, K. (2005). *The Laws of Identity*. Microsoft White Paper。來源等級 B。
71. Mundell, R. (1963). *Capital mobility and stabilization policy*. Canadian Journal of Economics 29(4)。來源等級 A。
72. Buterin, V. (2017). *The Scalability-Security-Decentralization Trilemma*。來源等級 B。
73. Tinbergen, J. (1952). *On the Theory of Economic Policy*。來源等級 A。
74. Worldcoin / TFH (2023, 2025). *Worldcoin: A New Identity and Financial Network* whitepaper；World ID 2.0 docs；SDK 整合公告（Reddit / Discord / Match Group / Stripe Connect）。來源等級 A。
75. Daugman, J. (2004). *How Iris Recognition Works*. IEEE TCSVT 14(1), 21-30。來源等級 A。
76. Hill, K. (2023). *Your Face Belongs to Us*. Random House。來源等級 A。
77. Hoofnagle, C. J., King, J., Li, S., & Turow, J. (2012). *Behavioral Advertising: The Offer You Cannot Refuse*. Harvard L. & Pol'y Rev. 6, 273-296。來源等級 A。
78. Bloomberg (2024-2025) Worldcoin token 經濟報導；The Block / CoinDesk (2024-2025) World Chain 主網與 L2 部署。來源等級 C。
79. Tools for Humanity (2024) *World ID 2.0 / Cloud Verifier* technical announcement；MIT Technology Review (2022-2024) Worldcoin investigative coverage。來源等級 A / B。
80. Office of the Data Protection Commissioner (Kenya) (2023-08-02)；Communications Authority of Kenya (2023-08)；Kenyan National Assembly Ad Hoc Committee (2023-09)；AEPD (Spain) PS/00120/2024 (2024-03-06)；AAIP (Argentina) (2024) 調查啟動公告；ANPD (Brazil) (2025-01)；PCPD (Hong Kong) (2024-05)；CNPD (Portugal) (2024-03) Deliberação 2024/124；BayLDA (Bavaria) (2023-12-20)。來源等級 A。
81. Council of Europe Convention 108+ (2018 修正)；EDPB Guidelines 05/2022 on facial recognition technology in law enforcement；EU Charter of Fundamental Rights, Art. 11, 47。來源等級 A。
82. Rest of World 全球南方採集現場報導系列 (2023-2025)；Wired (2023-2024) World ID 與 World App 擴張系列；Reuters (2023-2025) Worldcoin investigation series。來源等級 C。
83. Crawford, K., & Joler, V. (2018). *Anatomy of an AI System*. AI Now Institute & Share Lab。來源等級 B。
84. Kenyan National Assembly Ad Hoc Committee (2023-09). *Report on Worldcoin Activities in Kenya*。來源等級 A。
85. Buolamwini, J., & Gebru, T. (2018). *Gender Shades*. PMLR 81, 1-15；Garvie, C. (2019). *Garbage In, Garbage Out: Face Recognition on Flawed Data*. Georgetown Law Center。來源等級 A。
86. Worldcoin / TFH (2024-2025) *Privacy Documentation*；ICO (UK) Worldcoin 2023-07 公告；Buterin, V. (2023). *What do I think about biometric proof of personhood?*（個人 blog）。來源等級 A / B。
87. World Bank ID4D (2023). *Identification for Development Annual Report 2023*；World Bank ID4D (2024). *ID4D Global Dataset Update 2024*。來源等級 A。
88. Trusta Labs (2023) *Gitcoin Passport Sybil Analysis Q3 2023*；Nansen (2024) *On-chain Analysis of Gitcoin GG19*；Gitcoin (2023-2024) GG18/GG19/GG20 retro posts。來源等級 B。
89. Greenwood, D., Pentland, A. 等 MIT Connection Science SSI 系列；Allen, C. (2016). *The Path to Self-Sovereign Identity*。來源等級 D / B。
90. UNHCR (2020). *Statelessness: An Analytical Framework*。來源等級 A。
91. UIDAI 2023 RTI 數據；Banerjee, S., & Sharma, S. (2019). *Privacy Concerns with Aadhaar*. Communications of the ACM 62(11)。來源等級 A。
92. Drèze, J., Khera, R., & Somanchi, A. (2017). *Aadhaar and Food Security in Jharkhand*. EPW 52(50), 50-59；Khera, R. (Ed.) (2019). *Dissent on Aadhaar: Big Data Meets Big Brother*. Orient BlackSwan。來源等級 A。
93. Yadav, K. (2017). *Constitutionalising Aadhaar*. EPW 52(45)；Sen, R. (2018). *Aadhaar: Wrong Number, or Big Brother Calling?*. Asian Journal of Comparative Law 13(1), 85-114。來源等級 A。
94. Supreme Court of India (2018). *Justice K. S. Puttaswamy (Retd.) v. Union of India*, (2019) 1 SCC 1；Access Now (2018-2024) multiple reports on Aadhaar。來源等級 A / B。
95. Pew Research Center (2023). *Mobile Phone Sharing in U.S. Households*；UNICEF (2022) 全球連網報告；UNICEF (2023). *Birth Registration Data 2023*。來源等級 B / A。
96. 同 88。
97. Allen, D. et al. (2023). *Sybil-Resistance via Subjective Verification*. Preprint。來源等級 D。
98. zkPassport (2024) Technical Whitepaper；BrightID (2024-09 snapshot) Protocol documentation。來源等級 C。
99. Regulation (EU) 2024/1183 (eIDAS 2.0). OJ L series 2024-04-30。來源等級 A。
100. OECD (2023). *Digital Government Review of Estonia*；e-Estonia (2024). *X-Road and smart-ID Documentation*。來源等級 A / B。
101. ISO/IEC 18013-5:2021；AAMVA (2024). *Mobile Driver's License Implementation Guidelines* v1.4。來源等級 A。
102. MeitY India (2024). *DigiLocker Annual Statistics 2024*。來源等級 B。
103. National Development Council Taiwan 國發會 (2024). 數位皮夾路線圖 2024-2026。來源等級 B。
104. Reuters (2018-04-24) e-KTP Corruption Case；Tempo (Indonesia) 2017-2018 e-KTP scandal investigative reports；印尼 PeduliLindungi 系統公開資料。來源等級 B / C。
105. PCPD (Hong Kong) (2024-05) 執行通知；Privacy International *State of Privacy* country profiles (2020-2024 updates)。來源等級 A / D。
106. 與 article 03（digital-association-empirical-test）+ article 04（pseudonymous-participation-legal）跨文章合取結構接合。來源等級：本文與系列文章內部接合。
107. ISO/IEC 27701:2019；W3C Verifiable Credentials Data Model 2.0；W3C (2022). *Decentralized Identifiers (DIDs) v1.0*。來源等級 A / C。
