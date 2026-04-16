---
title: "以兒童安全為名的年齡驗證法規，將如何改寫數位身分與數位人權的版圖"
pubDate: 2026-04-16
description: "當全球至少二十五個國家在三年內推動年齡驗證立法，「證明你幾歲」這件事正在催生一套全民數位身分基礎設施。技術選擇決定它落在保護工具還是監控基礎設施的哪一端，而政治急迫性正把多數國家推向高風險端。"
tags: ["age-verification", "digital-identity", "privacy", "children-safety", "online-safety", "digital-rights"]
category: "數位人權"
aiModel: "Claude Opus 4.6"
aiPrompt: "各國以保護兒童為由推動的年齡驗證法規，其數位身分驗證機制將帶來哪些數位人權風險？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-04-16-age-verification-digital-rights"
aiGeneratedDate: 2026-04-16
humanReviewed: true
---

# 以兒童安全為名的年齡驗證法規，將如何改寫數位身分與數位人權的版圖

2024 年 11 月，澳洲聯邦議會以壓倒性票數通過了 Online Safety Amendment (Social Media Minimum Age) Act 2024，禁止十六歲以下未成年人使用社群媒體。<sup>1</sup> 法律 12 月獲得皇家批准，生效日期訂在 2025 年 12 月 10 日。然而，負責技術評估的 ACCS 最終報告要到 2025 年 6 月才出爐。法律已經通過，但要用什麼技術來確認「你幾歲」這個問題，答案還在測試中。

澳洲的時間倒錯並非特例。同一波浪潮中，英國 Online Safety Act 2023 授權 Ofcom 從 2025 年 7 月起強制平台執行「高度有效」的年齡確認<sup>2</sup>，法國 Loi SREN 讓 Arcom 取得封鎖色情網站的權力<sup>3</sup>，美國至少二十一州在三年內通過了年齡驗證法<sup>4</sup>，巴西 Digital ECA 在 2026 年 3 月生效<sup>5</sup>，印尼 PP TUNAS 同月上路<sup>6</sup>，馬來西亞 Online Safety Act 2025 與阿聯酋 Federal Decree-Law No. 26/2025 都在 2026 年 1 月啟動<sup>7</sup>。從坎培拉到倫敦到奧斯汀到雅加達，至少二十五個國家或地區在三年內推動了年齡驗證立法。

這波浪潮的政治邏輯高度一致。兒童安全是跨黨派的「政治不可反對議題」，沒有民選官員會站在「反對保護兒童」的位置上。這使得立法速度遠超技術評估與人權影響分析的節奏。挪威 2025 年推出社群媒體十五歲門檻法案時，政府自承「目前沒有完全有效的年齡驗證方案」，但仍決定推進。<sup>8</sup> 兒童需要保護，這點無人質疑。真正的問題是「證明你是成年人」所需的數位身分基礎設施，其設計選擇將決定它落在風險光譜的哪一端。多數已上路的方案，因為政治急迫性，選擇了高風險端。

## 政治急迫性如何壓縮技術慎議

要理解這個落差，可以回溯到 1998 年的美國 COPPA。COPPA 要求網站在蒐集十三歲以下兒童資料前取得「可驗證的家長同意」，但沒有規定具體的年齡確認技術，結果產業界用最低成本回應——勾選「我已滿十三歲」的方框。這做法維持了二十多年。<sup>9</sup>

從 COPPA 到 2023 年的英國 Online Safety Act，中間的轉折在於社群媒體的內容危害爭議。2020 年代初期，多國針對兒童在社群平台遭受的傷害展開聽證與調查，「平台應為兒童安全負責」的政治共識迅速形成。年齡驗證從技術細節升級為政治議程——立法者需要可見的行動，而「確認年齡」是最直觀的政策槓桿。

ISO/IEC 27566-1 是全球第一個針對年齡確認系統的國際標準，定義了驗證、估算、推斷三種核心方法，並建議隱私優先設計與分層方法。<sup>10</sup> 這份標準到 2025 年 12 月才正式發布。但在它問世之前，美國已有二十一州立法、英國已開始執法、澳洲法律已經生效。技術標準追不上政治週期，各國在沒有共同技術基準的情況下各自選擇方案。

2025 年 6 月 27 日，美國最高法院在 Free Speech Coalition v. Paxton 案作出 6 比 3 的裁定，宣告德州年齡驗證法合憲。<sup>11</sup> 大法官 Thomas 撰寫多數意見，採用「中度審查」標準，明確表示「成年人沒有避免年齡驗證的第一修正案權利」。這個裁定可以說是全球轉折點——在 Paxton 案之前，美國多州年齡驗證法被聯邦地方法院以初步禁令擋下，理由是可能違反第一修正案。Paxton 案後，年齡驗證從「推定違憲」翻轉為「推定合憲」，隨後九個州在 2025 年內完成立法，速度明顯加快。

Kagan、Sotomayor、Jackson 三位大法官的異議意見警告，多數意見的推理框架可能適用於遠超色情網站的範圍。<sup>12</sup> 這個警告在加州已經成真——AB1043 將年齡驗證框架擴展為「數位年齡確認模型」（Digital Age Assurance），適用於任何「可能被未成年人存取」的線上服務。<sup>13</sup>

歐盟走了另一條路。eIDAS 2.0 選擇「先建基礎設施再推應用」，計劃在 2026 年底前讓每個成員國提供至少一個 EUDI Wallet。<sup>14</sup> 法國 Arcom 2024 年 10 月發布的「雙重匿名」技術標準，是少數在政治壓力下仍嘗試平衡隱私的案例。<sup>3</sup> 但這些反例之所以引人注目，正是因為稀少。

## 技術光譜——從自我宣告到全民實名制

年齡驗證的技術方案構成一道光譜。一端是幾乎不蒐集資料的自我宣告，另一端是將每個使用者與政府數據庫即時連動的全民實名制。各國因為政治脈絡、技術基礎設施和治理傳統的差異，落在光譜上不同的位置。三組對照可以勾勒出這道光譜的全貌。

**高監控端——中國的防沉迷系統 vs 美國多州的 ID 上傳**

中國的防沉迷系統是光譜最高監控端的實作。自 2021 年「嚴格版」實施以來，所有線上遊戲使用者必須經過 NPPA 的實名驗證，系統與國家人口數據庫即時連動，輔以臉部辨識抽查。<sup>15</sup> 未成年人每週僅能在週五、六、日及法定假日的 20:00 至 21:00 上線，合計三小時。這套基礎設施已擴展到遊戲之外的線上服務。

然而，根據一項發表於 PMC 的學術研究（問卷數據，可能有抽樣偏差），約 77% 的未成年人透過借用親屬帳號成功規避了實名驗證。<sup>16</sup> 覆蓋全民的身分基礎設施建成了，目標對象的規避率卻極高。後續中國加強了人臉辨識抽查力度，規避行為依然持續。

在美國，至少二十一州要求色情網站執行年齡驗證，多數方案要求使用者上傳政府核發的身分證件。<sup>4</sup> 路易斯安那州的 LA Wallet 使用數位駕照作為驗證工具，比直接上傳駕照影本更進一步，但仍與政府 ID 綁定。印度 Digital Personal Data Protection Act 要求平台取得「可驗證的家長同意」才能讓十八歲以下者使用服務，技術路線分為 Aadhaar 集中式和 DigiLocker token-based 兩條。<sup>17</sup> 據 Medianama 報導，Andhra Pradesh 邦正在探索用 DigiLocker 的年齡 token 限制十三至十六歲的社群媒體存取，但目前僅為計畫階段，尚無獨立來源驗證實施進度。<sup>18</sup>

**中間地帶——英國 Ofcom 的多元方案 vs 德國的認證制**

英國 Ofcom 核准了多種年齡確認方案並列——臉部年齡估算、信用卡或銀行驗證、數位 ID、電信商驗證、官方證件掃描——但明確排除自我宣告。<sup>2</sup> 截至 2025 年 10 月，Ofcom 已啟動五個執法計畫、二十一項調查，12 月對 AVS Group 罰款一百萬英鎊。<sup>19</sup> 這個模式的優點是技術彈性，風險在於缺乏統一的隱私標準——平台可以選擇最便宜的方案，而最便宜的通常不是最隱私友善的。

Yoti 的臉部年齡估算是目前商業部署規模最大的方案，已執行超過十億次驗證。NIST 2024 年評估顯示，Yoti 在十三至十七歲區間的平均絕對誤差為 1.1 年，排名第一。<sup>20</sup> 但 NIST 的測試使用標準化照片，現實環境的光線、角度和種族多樣性可能顯著影響準確度。

德國走認證制。KJM 僅認可經其核准的年齡驗證系統，要求身分確認、最小資料蒐集、加密傳輸及 GDPR 合規。2025 年 12 月修訂的 JMStV 生效後，認證要求進一步加嚴。<sup>21</sup>

法國 Arcom 的方案值得單獨說明。2024 年 10 月發布的技術標準要求「雙重匿名」——銀行或電信商驗證使用者年齡，色情網站收到的只是「已成年或未成年」的判定結果，不知道使用者身分；同時，中介方也不知道使用者訪問的是哪個網站。<sup>3</sup> 這是在既有法律框架內實現隱私友善方案的嘗試，但範圍僅限於色情網站，過渡期只有三個月，且尚未擴展到社群媒體。

馬來西亞 Online Safety Act 2025 要求社群媒體禁止十六歲以下用戶，並實施 eKYC 驗證，MCMC 建立了監管沙盒測試年齡確認技術。<sup>7</sup> 泰國正在考慮「雙鎖」制度——e-ID 加上每日兩小時使用上限——但仍在草案階段。<sup>22</sup>

**低侵入端——零知識證明與 token-based 方案**

西班牙 Cartera Digital Beta 於 2024 年 9 月開始測試，使用零知識證明確認使用者是否達到法定年齡。<sup>23</sup> 核心設計是「網站只收到有效或無效的結果，不接觸使用者的姓名、生日或任何憑證資訊」。這個方案已被選為歐盟 white-label 年齡驗證 app 的基礎技術。

歐盟 age verification blueprint 於 2025 年 7 月發布，整合零知識證明，丹麥、法國、希臘、義大利、西班牙五國進行先導測試，預計 2026 年初發布各國客製化 app。<sup>24</sup> euCONSENT 的 AgeAware 系統使用 token-based 架構搭配匿名化服務。<sup>25</sup> Google 與德國儲蓄銀行聯盟 Sparkassen 的合作方案結合 Credential Manager API 和零知識證明，預計 2026 年上半年公開可用。<sup>26</sup> W3C Verifiable Credentials 2.0 在 2025 年 5 月成為正式標準，TruAge 產品已將核心技術整合，自 2021 年起在零售端使用加密一次性 token 進行年齡驗證。<sup>27</sup>

**已被推翻或暫停的案例**

韓國遊戲宵禁法是重要的反面教材。2011 年實施，禁止十七歲以下在午夜至早上六點玩線上遊戲，搭配實名認證；2021 年 8 月廢除，原因包括手機遊戲興起使法律失效、替代方案可用、社會共識認為政策無正面效果。<sup>28</sup> 韓國案例證明，即使是高強制性的年齡驗證政策，在效果不彰時可以被撤回。但撤回的前提是政體允許政策逆轉——這個條件並非所有國家都具備。

日本 Information Distribution Platform Act 於 2025 年 4 月生效，特意不包含強制年齡驗證。<sup>29</sup> 加拿大 Bill C-63 在國會解散時死亡，Bill S-209 雖已重新提出，聯邦層級目前尚無生效的年齡驗證法。<sup>30</sup> 新加坡 Online Safety Code 自 2023 年 7 月生效，包含 App Store 層級的年齡確認，但未走到政府 ID 驗證。<sup>31</sup>

## 結構性滑坡——從兒童保護到全民身分閘門

為保護兒童而建的年齡驗證基礎設施，會擴展為全民數位身分閘門嗎？這個命題描述的是一種結構傾向——基於基礎設施可擴展性與政策路徑依賴的交互作用——而已經發生的案例提供了歸納基礎。

加州 AB1043 將原本針對色情網站的年齡驗證擴展為「數位年齡確認模型」，適用於任何「可能被未成年人存取」的線上服務。<sup>13</sup> 伊利諾州的 Digital Age Assurance Act 更進一步，立法理由明確提到要將年齡驗證「編入數位基礎設施本身」。從色情網站到全網，擴展路徑一目瞭然。

愛爾蘭政府推動 Public Services Card 從社會福利服務擴展到銀行、信用合作社和公用事業的身分驗證用途，並增加出生日期欄位以進行年齡驗證。<sup>32</sup> 雖然 PSC 的擴展可能有獨立於年齡驗證的政策驅動力（數位政府效率化），且目前僅有倡議型媒體報導，但年齡驗證功能被嵌入既有擴展過程這件事本身，印證了基礎設施的多用途傾向。

英國 GOV.UK Verify 因效能不彰被 One Login 取代，2025 年 9 月首相宣布數位 ID 計畫，建立在 One Login 和 GOV.UK Wallet 之上。<sup>33</sup> 從一個失敗的登入系統，演進為多用途的數位身分錢包。歐盟 eIDAS 2.0 要求 2026 年底前每個成員國提供至少一個 EUDI Wallet，年齡驗證是其明確用例之一；所有大型私營企業必須在 2027 年 12 月前接受 Wallet。<sup>14</sup> 為年齡驗證而建置的錢包基礎設施，同時也是泛用數位身分基礎設施。

這些案例指向同一個邏輯——基礎設施一旦建成，邊際成本低、既有投資需要回報、新政策需求可以「搭便車」，可擴展性自然產生政策激勵。

但結構傾向並非必然擴展。法國 Arcom 的「雙重匿名」架構在設計上限制了擴展性——即使被其他領域借用，也難以改造為泛用追蹤工具。<sup>3</sup> 歐盟 EUDI Wallet 的 selective disclosure 設計讓使用者可以選擇只揭露「我超過十八歲」而非完整個人資料。<sup>14</sup> 韓國宵禁法的廢除則證明基礎設施擴展並非不可逆。<sup>28</sup>

集中式年齡驗證基礎設施作為高價值攻擊目標，是結構性滑坡的另一面向。2025 年 10 月，Discord 的外包驗證商 5CA 遭入侵，約七萬張使用者為年齡驗證上傳的政府 ID 照片遭曝露。<sup>34</sup> AU10TIX 的管理員登入憑證被曝露超過一年。<sup>35</sup> Tea App 在 2025 年 7 月洩漏了七萬兩千張照片，IDMerit 的資料庫在同年 11 月曝露。<sup>36</sup> 這些事件均發生在第三方驗證服務商，屬於集中式架構的固有風險；裝置端或零知識方案的風險特徵與此截然不同。

## 數位人權的四重衝擊

年齡驗證法規帶來的人權衝擊波及每一個需要上網的人，兒童只是最先被點名的群體。四個面向的壓力同時運作，且彼此強化。

**隱私權。** GDPR Art. 8 規定了兒童同意的年齡門檻，Art. 9 對敏感數據設定更高保護標準。<sup>37</sup> 為了執行 Art. 8 的年齡確認，往往需要蒐集 Art. 9 定義的敏感數據——用更高侵入的手段來達成保護目的。歐洲人權公約 Art. 8 保障通信隱私不受干擾<sup>38</sup>，年齡驗證要求使用者向第三方揭露身分資料，構成對通信隱私的直接干預。EDRi 聯合六十三個數位權利組織的公開信直接點名了這個矛盾——年齡驗證工具「系統性地洩漏資料，無論使用政府 ID、AI 年齡預測或其他方法，都威脅兒童和成人的隱私與資料保護權利」。<sup>39</sup>

**匿名權。** 聯合國人權理事會 A/HRC/29/32 報告明確指出，國家應促進強加密和匿名，個人有權使用匿名工具保護數位通信隱私。<sup>40</sup> 年齡驗證從根本上要求使用者在某個環節揭露年齡相關資訊，與完全匿名的瀏覽模式互斥。更深層的弔詭在於，聯合國兒童權利公約 Art. 16 保障兒童隱私權，包括使用化名和加密通訊的權利。<sup>41</sup> 為保護兒童而設計的年齡驗證，可能侵蝕的恰好是兒童自身的隱私權。Livingstone 與 Third 在 2017 年的開創性研究中已指出，兒童在數位環境中同時是需要保護的主體和享有自主權的主體，兩者之間的張力是政策設計的核心挑戰。<sup>42</sup>

**言論自由。** Paxton 案裁定是言論自由衝擊的分水嶺。EFF 批評此裁定「踐踏言論自由並破壞隱私」——成年人被迫上傳敏感個人資訊才能存取合法言論。<sup>12</sup> 寒蟬效應有具體案例可循。Pornhub（母公司 Aylo）在德州、猶他、路易斯安那等已實施 ID 驗證法的州選擇完全封鎖存取。Aylo 向 CNN 表示，路易斯安那的流量在法律生效後下降了約 80%。<sup>43</sup> 這是 Aylo 的自我報告數據，缺乏獨立第三方驗證，Aylo 有動機誇大影響以遊說反對立法。但合法內容供應商退出市場、使用者轉向不受監管的管道，這個趨勢獲得多個來源佐證。加州 AB1043 將年齡驗證擴展到任何「可能被未成年人存取」的服務<sup>13</sup>，意味著資訊存取的障礙可能從特定內容擴散到一般網路服務。

**數位落差。** 年齡驗證預設使用者擁有政府核發的身分文件、銀行帳戶、智慧型手機或生物辨識裝置。缺乏這些條件的群體——無銀行帳戶者、難民、無證移民、偏遠地區居民——被排除在合法網路空間之外。<sup>44</sup> 印度的案例具體說明了這個問題。DPDP Act 要求平台取得可驗證的家長同意，但在數位素養不足的社群中，弱勢背景的兒童可能因為家長無法完成數位同意流程而被排除——為保護兒童的機制，反而成為排除弱勢兒童的閘門。<sup>17</sup>

5Rights Foundation 的立場提醒我們避免將議題簡化為零和對抗——這個兒童權利倡議組織同時主張「年齡確認是必要的」和「年齡確認必須隱私友善」。<sup>45</sup> 他們參與制定的 IEEE 2089.1 標準提供五個層級的確認架構，從最低侵入的年齡區間推斷到最高確定性的完整身分驗證，讓不同風險等級的內容匹配不同等級的驗證。<sup>46</sup> 這個框架試圖打破「要保護就必須監控」的假設。

## 好方案存在，但政治上弱勢

如果技術上更隱私友善的方案已經存在，為什麼多數國家沒有採用？

西班牙 Cartera Digital Beta 用零知識證明，網站只收到有效或無效的二元結果，不接觸個人資料。<sup>23</sup> 歐盟 blueprint 在五國測試，euCONSENT AgeAware 用 token-based 架構搭配匿名化，Google 與 Sparkassen 結合 Credential Manager API 和 ZKP，W3C VC 2.0 的 TruAge 自 2021 年起在零售端運行。<sup>24</sup><sup>25</sup><sup>26</sup><sup>27</sup> 方案不缺。

但 Brave 在 2025 年的分析精確指出了零知識證明的根本限制——ZKP 讓後續的年齡確認不再洩漏個人資料，但「第一次」確認使用者真實年齡時，某個可信方仍然需要看到身分資訊。<sup>47</sup> 如果這個可信方是政府，那政府至少在初始驗證階段掌握了使用者的活動記錄。ZKP 大幅降低了日常使用的隱私風險，但沒有完全消除。

承認這個限制後，ZKP 方案為什麼仍然比全面 ID 上傳好得多？因為差別在於資料曝露的頻率和範圍。全面 ID 上傳模式中，每一次存取都產生一筆包含完整個人資料的記錄，儲存在第三方伺服器上——Discord/5CA 外洩事件就是這個模式的後果。<sup>34</sup> ZKP 模式中，初始驗證只發生一次，之後每次存取只傳遞不可回溯的 token。即使網站被入侵，攻擊者拿到的只是無法連結到真實身分的 token。

隱私友善方案在政治上弱勢的原因至少有三個面向。時間落差是第一個。多數 ZKP 和 token-based 方案在 2025 到 2026 年才進入先導測試，但立法壓力在 2023 到 2024 年就已形成。<sup>48</sup> ISO/IEC 27566-1 到 2025 年 12 月才發布。<sup>10</sup> 立法者需要立即可部署的方案時，已商業化的高侵入方案具有先行者優勢。

利益結構是第二個。Yoti 已執行超過十億次驗證，在監管機構面前有實績。<sup>20</sup> 德國 KJM 認證的 AVS 系統已形成市場。<sup>21</sup> 新進的 ZKP 方案需要與既有利益競爭資源和監管注意力。

部署複雜度是第三個。ZKP 方案需要跨機構協作——政府 ID 發行方、匿名化中介、網站——至少三方參與。ID 上傳或臉部掃描只需單一服務商。在政治急迫性推動下，部署複雜度低的方案自然被優先選擇。

歐盟的系統性做法——先通過 eIDAS 2.0 建立基礎設施框架，再嵌入年齡驗證功能——如果成功，可能成為好方案被制度性採用的範例。<sup>14</sup> 但 EUDI Wallet 的部署時程延至 2026 年底，而年齡驗證的政治壓力不會等。

## 台灣的空白與全球的窗口期

截至撰稿時，筆者未找到台灣直接相關的年齡驗證立法動態。NCC 和數位發展部尚未提出相關法案。這個空白值得注意——它既可能是慎議的結果，也可能只是時間差。當全球至少二十五個國家已經啟動年齡驗證法規，台灣遲早需要面對同樣的問題。屆時的技術選擇將在已經成形的國際實踐和標準格局中做出。

年齡驗證法規的政策意圖與技術實作之間存在結構性張力——當「證明你是成年人」需要一套數位身分基礎設施，這套基礎設施的風險等級取決於技術架構選擇。多數已上路的方案因為政治急迫性選擇了高風險端，使兒童安全機制具有向全民數位身分閘門擴展的結構傾向。

但這個傾向並非命運。法國 Arcom 的雙重匿名架構、西班牙 Cartera Digital Beta 的零知識證明、歐盟 EUDI Wallet 的選擇性揭露設計、韓國宵禁法的廢除，都證明技術設計與政策逆轉可以約束擴展傾向。兒童保護的必要性無人質疑，真正決定結局的是用什麼架構來保護。技術選擇乘以治理設計的組合，才是決定年齡驗證法規最終落在「保護工具」還是「監控基礎設施」的分界點。這個選擇正在全球各國同時發生，窗口期有限。

---

## 參考資料

1. Australian Parliament, *Online Safety Amendment (Social Media Minimum Age) Act 2024*, Federal Register of Legislation C2024A00127, 2024 年 12 月皇家批准; eSafety Commissioner ACCS 技術試驗最終報告預計 2025 年 6 月。來源等級 A。
2. Ofcom, "Roadmap to Regulation," 2025 年 7 月 25 日起強制年齡確認，明確排除 tick-box。來源等級 A。
3. Arcom, "Technical guidelines on age verification," 2024 年 10 月發布「雙重匿名」技術標準，過渡期至 2025 年 4 月 11 日。來源等級 A。
4. Sidley Austin LLP 分析; EFF, "Age Verification Threats Across the Globe: 2025 in Review," 美國至少 21 州通過年齡驗證法。來源等級 A。
5. Brazil.gov.br, Digital ECA (Law No. 15,211/2025)，2025 年 9 月通過、2026 年 3 月生效。來源等級 A。
6. Library of Congress; JURIST, PP TUNAS，禁止 16 歲以下開設高風險平台帳號，2026 年 3 月生效。來源等級 A。
7. Richard Wee Chambers; AVPA, Malaysia Online Safety Act 2025，2026 年 1 月生效; Baker McKenzie, UAE Federal Decree-Law No. 26/2025，2026 年 1 月生效。來源等級 A。
8. 挪威政府 regjeringen.no, "Norway moves forward with age limit for social media," 社群媒體 15 歲門檻法案。來源等級 A。
9. U.S. Congress, *Children's Online Privacy Protection Act* (COPPA), 1998。來源等級 A。
10. ISO, *ISO/IEC 27566-1:2025 -- Age assurance systems -- Part 1: Framework*, 2025 年 12 月發布。來源等級 A。
11. U.S. Supreme Court, *Free Speech Coalition, Inc. v. Paxton*, No. 23-1122, 2025 年 6 月 27 日裁定，6:3 多數意見。來源等級 A。
12. EFF, "Today's Supreme Court Decision on Age Verification Tramples Free Speech," 2025 年 6 月，含 Kagan、Sotomayor、Jackson 異議意見分析。來源等級 A。
13. BillTrack50; EFF, 加州 AB1043 將年齡驗證擴展為 Digital Age Assurance。來源等級 A。
14. European Commission, "EUDI Regulation," eIDAS 2.0; Baker McKenzie (2026/03), "EU: EUDI Wallet Harmonizes Identification and Age-Gating." 來源等級 A。
15. 中國防沉迷系統，NPPA 行政規定 + 未成年人保護法修訂 + 未成年人網路保護條例 2024/1/1 生效。來源等級 A。
16. PMC (2025), "High compliance and reduced online gaming time among Chinese adolescents after the 2021 gaming policy," 77% 規避率為問卷調查數據。來源等級 A。
17. India, *Digital Personal Data Protection Act, 2023*; Deccan Herald; Lexology 分析。來源等級 A。
18. Medianama (2026/4), Andhra Pradesh 探索 DigiLocker 年齡 token，目前為計畫階段。來源等級 C。
19. Ofcom 執法紀錄，2025/10 起 5 個執法計畫、21 項調查; 2025/12 對 AVS Group 罰款 100 萬英鎊。來源等級 A。
20. Yoti (2025/7), "Facial Age Estimation White Paper," NIST 評估 13-17 歲 MAE 1.1 年排名第一（標準化照片環境）。來源等級 A。
21. Gataca; Freshfields 分析，德國 JMStV 2025 年 12 月修訂生效，KJM 認證要求。來源等級 A。
22. Tech for Good Institute (2025), "Safeguarding the Digital Generation," 泰國「雙鎖」制度草案。來源等級 B。
23. 西班牙政府官方公告; Biometric Update, Cartera Digital Beta 2024 年 9 月起測試 ZKP 年齡驗證。來源等級 A。
24. European Commission, "Blueprint for an age verification solution," 五國 pilot，T-Scy 開發。來源等級 A。
25. euCONSENT 官方; Biometric Update, AgeAware PoC 2025 年 4 月阿姆斯特丹展示。來源等級 B。
26. ID Tech Wire, Google-Sparkassen ZKP pilot 2025 Q4，2026 H1 公開可用。來源等級 B。
27. W3C, *Verifiable Credentials Data Model v2.0*, 2025 年 5 月成為 W3C Recommendation; TruAge 產品整合 VC 2.0。來源等級 A。
28. Korea Times; Korea Herald, 韓國遊戲宵禁法 2011 年實施、2021 年 8 月廢除。來源等級 B。
29. Nippon.com; Japan Times, 日本 Information Distribution Platform Act 2025 年 4 月生效，未含強制年齡驗證。來源等級 B。
30. Parliament of Canada; OpenMedia, Bill C-63 死亡、Bill S-209 重新提出。來源等級 A。
31. IMDA 官方，新加坡 Online Safety Code 2023/7 生效。來源等級 A。
32. El-Balad; State of Surveillance, 愛爾蘭 Public Services Card 擴展報導。來源等級 B。
33. State of Surveillance (2026); GOV.UK 官方公告，One Login 到 Wallet 演進。來源等級 B。
34. NBC News (2025), "70,000 government ID photos exposed in Discord user hack," 2025 年 10 月。來源等級 B。
35. EFF; 安全研究者報告, AU10TIX 憑證曝露超過一年。來源等級 B。
36. Regula Forensics (2025), "5 Identity Verification Incidents That Shook 2025," Tea App 72,000 張照片洩漏 (2025/7)、IDMerit 資料庫曝露 (2025/11)。來源等級 B。
37. GDPR Art. 8（兒童同意年齡）與 Art. 9（敏感數據特別保護）。來源等級 A。
38. European Convention on Human Rights Art. 8。來源等級 A。
39. EDRi, "Open letter: The dangers of age verification proposals to fundamental rights online," 63 組織聯署。來源等級 A。
40. OHCHR, *A/HRC/29/32: Report on encryption, anonymity, and the human rights framework*, 2015。來源等級 A。
41. UN Convention on the Rights of the Child Art. 16。來源等級 A。
42. Livingstone, S. & Third, A. (2017). "Children and young people's rights in the digital age." *New Media & Society*, 19, 657-670。來源等級 A。
43. CNN, Aylo 自我報告路易斯安那 Pornhub 流量下降約 80%。來源等級 B（自我報告數據）。
44. EFF (2025/12), "The Year States Chose Surveillance Over Safety," 年齡驗證對無 ID 群體的排除效果。來源等級 B。
45. 5Rights Foundation, "Access restrictions to protect children and their rights." 來源等級 A。
46. 5Rights Foundation, "Age Assurance as a spectrum"; IEEE 2089.1 標準五級確認架構。來源等級 A。
47. Brave (2025), "The limits of zero-knowledge for age-verification," ZKP 不解決初始驗證問題。來源等級 A。
48. EFF (2025/04), "Digital Identities and the Future of Age Verification in Europe." 來源等級 A。
