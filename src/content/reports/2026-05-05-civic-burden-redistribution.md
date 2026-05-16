---
title: "數位皮夾把民主成本下放給誰：Civic Burden 的分配正義分析"
description: "把 Civic burden 形式化為 CB-Justice 雙重判準（D1* Rawls 差別原則 ∧ D2* Anderson 關係平等），與 article 03 H1' 三道牆、article 04 T 三件式、article 05 IT' 不可能三角同樣是合取結構但用於不同層級。MOICA 到 TW DIW 的設計轉換把成本在四面向重新分配，無補強條件下台灣中位 320-480 萬人實質排除（13.7-20.5%）；三項分層強制補強（C1 軟強制 UX、C2 硬強制 verifier 認證、C3 雙軌強制爭議裁決）齊備可降至 65-110 萬（72.5-83.8% 降幅）。配 5 條邊界條件、跨國七案例對照與商業 vs 政府 wallet 義務規範類別差異，提出三道法律修訂工程與三項機關建構的具體政策建議。"
pubDate: 2026-05-05
tags: ["civic-proof", "civic-burden", "digital-wallet", "TW-DIW", "MOICA", "Rawls", "Anderson", "distributive-justice", "doctoral-research", "Ch6-Taiwan"]
category: "公民證明分配正義"
aiModel: "Claude Opus 4.7"
aiPrompt: "從 issuer-centric (MOICA) 轉向 holder-centric (TW DIW)，哪些成本（理解、授權、驗證、申訴、責任）被從哪一方轉移到哪一方？這些成本轉移是否符合分配正義？特別是針對年長者、低數位識讀能力者、無智慧型手機者、流動人口？哪些成本可以被技術設計（auto-defaults / wallet UX / 監管預設值）吸收，哪些必須由制度補強（消費者保護法、verifier 認證、申訴機關）？商業 wallet 廠商與政府 wallet 的成本承擔義務是否應有差異？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-05-civic-burden-redistribution"
aiGeneratedDate: 2026-05-05
humanReviewed: false
lang: "zh-TW"
---

# 數位皮夾把民主成本下放給誰：Civic Burden 的分配正義分析

## 一、引言：皮夾上線之後該想的事

台灣的行動自然人憑證（TW Digital Identity Wallet, TW DIW）2024 年起進入試辦階段，預計 2027 年全民可用<sup>1</sup>。從 1990 年代末以 IC 卡為核心的內政部憑證管理中心（MOICA）<sup>2</sup>，到以智慧型手機與 Trusted Execution Environment（TEE / Secure Enclave）為核心的 TW DIW，台灣的數位身分基礎建設正在進行一次設計範式的轉換。這次轉換在歐盟 eIDAS 2.0（Regulation (EU) 2024/1183）<sup>3</sup>、NIST SP 800-63-4 ipd<sup>4</sup>、W3C Verifiable Credentials Data Model 2.0<sup>5</sup>、ISO/IEC 18013-5 mDL<sup>6</sup> 等規範體系中已是國際趨勢，被概括為從 issuer-centric 走向 holder-centric。憑證簽發者（issuer）原本承擔的中央化儲存、信任分發、爭議受理職責，被部分移轉給憑證持有者（holder）所控制的 wallet，再延伸到驗證者（verifier）的整合與合規<sup>7</sup>。

這項設計轉換在規範文獻中往往以「自主、最小揭露、可組合」三項允諾被引介<sup>8</sup>。允諾本身具有強規範正當性。本文承認這項規範正當性，並且要追問一個更具體的分配正義問題：當民主社會把「擁有與使用合法身分證明」這件事所附帶的成本（理解、授權、驗證、申訴、責任）從制度移到個人身上，這些成本在誰身上？是否符合分配正義？特別是針對年長者、低數位識讀能力者、無智慧型手機者、流動人口（移工、新住民、街友、災民），他們有沒有能力承接被下放的負擔？

本文的核心命題是：holder-centric 設計在規範上有強正當性（自主、最小揭露、可組合），若沒有對應的權利配套，會把民主成本系統性下放給最弱勢的使用者。Civic burden 在四個面向重新分配，分別是理解負擔（朝向 holder）、驗證接入負擔（朝向 verifier）、信任判斷負擔（同時朝向 holder 與 verifier）、爭議責任歸屬（朝向不明確）。如果沒有預設安全的 UX、預設的 verifier 認證制度、統一的爭議裁決機關，holder-centric 設計實際上是把民主成本從制度轉嫁給個人。

這個命題與本系列其他三篇博論文章共同構成一個合取必要條件的分析框架。Article 03（digital-association-empirical-test）以三道牆假設 H1' 處理結社自由的工程結構條件<sup>9</sup>；article 04（pseudonymous-participation-legal）以 T 三件式（Trigger / Authority / Remedy）處理「假名 + 事後問責」的法律制度層條件<sup>10</sup>；article 05（sybil-resistance-cost-benefit）以 IT' 不可能三角處理 sybil resistance 的工程張力上限<sup>11</sup>。本文在這個系列中承擔規範前提的位置，提出 CB-Justice 雙重判準 D1* ∧ D2*，要求最弱勢者的基本益品與民主公民身分都不被剝奪。CB-Justice 與 H1' 三道牆、T 三件式、IT' 不可能三角同樣是合取結構，僅是用於不同層級。

文章後續結構如下。第二章把四面向 civic burden 細分為 7 項操作化指標，並以 MOICA 與 TW DIW 對照展示成本如何重新分配，同時論證 issuer-centric 與 holder-centric 是責任分配光譜，並非二元對立。第三章把前述觀察提升為形式化的 CB-Justice 雙重判準（D1* ∧ D2*），並以 Hayek-Sowell 反論吸收 + 必要非充分聲明處理規範性主張的限制。第四章提出三項分層強制補強條件（C1 軟強制 UX / C2 硬強制 verifier 認證 / C3 雙軌強制爭議裁決）+ C4 政治選擇，並把老人友善預設值拆解為認知 / 感官 / 操作三層（具體引用 WCAG 2.2 條款）。第五章以三層門檻（A 設備 / B 數位識讀 / C 認知與身體）量化估計台灣 TW DIW 部署若無補強的排除人口為 320-480 萬（13.7-20.5%），並以反事實情境 D（紙本 + 客服 + 委任三補強齊備）顯示降幅可達 72.5-83.8%。第六章引入跨國七案例（北歐 BankID、Estonia、Singapore、印度 Aadhaar、法國 FranceConnect、美國 Login.gov、韓國 모바일 신분증），歸納出 5 條邊界條件（B1 商業 vs 政府義務規範類別差異 / B2 公民教育投資 / B3 KYC 銜接路徑 / B4 數位落差多維交叉 / B5 替代路徑法律地位）。第七章提出對應的法律修訂、制度設計、教育投資政策建議，並處理與 article 04 / 05 + prompt 11 / 15 的接合。第八章以本系列三篇文章共同的合取結構視角收束。

## 二、四面向 Civic Burden 重新分配

### 2.1 光譜論：issuer-centric 與 holder-centric 並非二元對立

把 issuer-centric 與 holder-centric 寫成二元對立會誤導政策判斷。實情是責任分配光譜<sup>12</sup>。MOICA 的私鑰雖然由內政部憑證管理中心簽發，私鑰實體仍由持卡人保管於 IC 卡內<sup>13</sup>；TW DIW 的私鑰雖然由 holder 控制於手機 Secure Enclave，信任清單仍由公部門法定授權，並錨定於公共鏈<sup>14</sup>。EU EUDI 框架下的 wallet provider 受 Regulation (EU) 2024/1183 Article 5a 強制規範，承擔接近受規範角色的義務<sup>15</sup>；NIST SP 800-63-4 ipd 採 SHOULD 而非 MUST 的中立立場<sup>16</sup>；Apple Wallet 服務條款 § 8 採 as-is no warranty 的市場契約結構<sup>17</sup>。同一個 holder-centric 詞彙，覆蓋了義務基礎相異的四種制度安排。

這項光譜論有兩個直接結論。其一，比較分析的單位應當細化到「在哪個面向、轉了多少、誰承擔被釋放的義務」這個層級；單純問「是否轉向 holder-centric」會錯失關鍵變因。其二，holder-centric 規範優越的證據在經驗層面薄弱。Singapore SingPass + Myinfo 是高度 issuer-centric 的設計，仍取得 97% 涵蓋率與高使用者體驗滿意度<sup>18</sup>，這是 holder-centric 必然優越論的反例。NIST SP 800-63-4 ipd 在 subscriber-controlled wallet 模型上採 SHOULD 而非 MUST，反映該文件起草者對規範優越的審慎立場<sup>19</sup>。

### 2.2 四面向 7 操作化指標

把 civic burden 從四面向細分為 7 項操作化指標，便於量化比較與政策設計<sup>20</sup>。

**(1) 理解負擔：跨平台可攜學習**。MOICA 體系下，民眾只需學習一套讀卡機 + 戶政臨櫃流程；TW DIW 體系下，民眾必須學習 wallet UX、信任清單概念、selective disclosure 控制、撤銷恢復流程。國發會 2024 公開簡報顯示 TW DIW Q4 試辦階段 65 歲以上使用者 onboarding 失敗率達 22%<sup>21</sup>。ENISA 2024 mDL Trust Framework Report 第 4 章提到 65+ onboarding 中位數時間是 18-44 歲對照組的 4.2 倍<sup>22</sup>。

**(2) 撤銷與恢復**。MOICA 體系下，遺失或竊用透過 24 小時失效機制 + 戶政臨櫃補發；TW DIW 體系下，holder 在 wallet app 內發起撤銷，信任清單同步失效，但若手機損毀或遺失，恢復路徑取決於備援機制（健保卡 + 行動電話雙因子，或重新臨櫃）。撤銷恢復是 holder 而非 issuer 主動發起，holder 需具備判斷「何時該撤銷」的能力。

**(3) 驗證接入：verifier 整合合規負擔**。MOICA 體系下，verifier 透過簽約取得 SAM 卡，由內政部統一認證；TW DIW 體系下，verifier 透過 OpenID4VP / OpenID4VCI 整合<sup>23</sup>，目前暫無強制 verifier 認證。EU EUDI ARF（2025-12 Cooperation Group iteration；引用以 v1.4.1 / 2024-12 為穩定快照）第 5 章估計 relying party 的整合成本為 3-12 萬歐元<sup>24</sup>，在台灣脈絡下對中小型 verifier（如地方政府單一窗口、小型醫療院所、社區藥局）構成顯著進入門檻。

**(4) 信任判斷：holder 判斷 verifier 真偽**。MOICA 體系下，民眾不需判斷 verifier 是否合法；TW DIW 體系下，holder 在揭露身分屬性前必須判斷 verifier 是否在信任清單上、是否符合目的最小必要原則。對低數位識讀者，這是接近不可能的負擔。

**(5) 第三方責任空白**。EU EUDI 在 Regulation (EU) 2024/1183 Article 5a 對 wallet provider 訂有 fiduciary 性質的義務<sup>25</sup>；台灣 TW DIW 修法中，wallet provider 與 verifier 的責任分配尚未明文。Apple Wallet 服務條款 § 8 採 as-is no warranty<sup>26</sup>，把責任空白留給 holder 自行承擔。

**(6) 跨境 fallback**。MOICA 不支援跨境互通；TW DIW 雖支援 W3C VC 2.0 + ISO/IEC 18013-5 mDL 規格<sup>27</sup>，但跨境信任 anchor 與 trust list 互通仍在草案階段，holder 在跨境場景下需自行判斷 fallback 路徑。

**(7) 失能人工救濟**。MOICA 體系下，戶政臨櫃 + 內政部監督機關提供清楚的人工救濟管道；TW DIW 體系下，當 wallet 失靈、verifier 拒絕、申訴無門時，民眾的人工救濟管道分散在消保官、個資會、數發部之間，缺乏專責受理機關。

### 2.3 MOICA / TW DIW 對照表

把上述 7 項操作化指標還原到具體的 MOICA / TW DIW 對照（表 1），可以看出這次設計轉換在哪些面向釋放了哪些義務、由誰承接。

**表 1：MOICA / TW DIW 在四面向的成本對照**

| 面向 | MOICA（issuer-centric） | TW DIW（responsibility-distributed） |
|---|---|---|
| 理解負擔 | 中央教育 + 戶政臨櫃 | wallet UX + 個人摸索（試辦 65+ 失敗率 22%） |
| Onboarding 路徑 | 戶政臨櫃領卡 + 讀卡機 | 自然人憑證 + 健保卡 + 行動電話雙因子 |
| 私鑰保管 | 持卡人 IC 卡 | TEE / Secure Enclave |
| 撤銷 | 24h 失效 + 戶政臨櫃 | wallet app 內發起 + trust list 同步 |
| Verifier 接入 | 簽約 + SAM 卡 | OpenID4VP + 信任清單錨定公共鏈 |
| Verifier 認證 | 內政部統一 | 開放（暫無強制 verifier 認證） |
| 信任清單 | 樹狀 PKI（GRCA → MOICA） | 法定授權仍由數發部 + 公共鏈錨定 |
| 信任判斷 | 民眾不需做判斷 | holder 需判斷 verifier 合法性 |
| 爭議受理 | 內政部 + 監督機關 | 暫無專責機關（消保官 / 個資會 / 數發部模糊） |
| 涵蓋率 | 自然人憑證約 800 萬張（戶籍人口 1/3） | 試辦階段（2024-2026），目標 2027 全民可用 |

### 2.4 三軸不平等的系統性放大

成本轉移在現實條件下並非對稱<sup>28</sup>。當理解負擔從中央教育移到 wallet UX，能吸收這項負擔的群體是已有智慧型手機、有數位識讀能力、在年齡光譜中段的使用者；不能吸收的是年齡偏高、智慧型手機普及率低、數位識讀偏低的群體。台灣 60 歲以上智慧型手機普及率 73.4%，70 歲以上 56.1%，80 歲以上 31.2%<sup>29</sup>；教育部 2023 年成人數位機會與素養調查顯示 60-69 歲行政 APP 操作能力 51.8%，70 歲以上 22.4%<sup>30</sup>。這三個維度（年齡、數位識讀、設備可得性）交叉在同一群人身上。設計轉換把成本下放，分配並非平均；下放給三軸交叉最低點的份量遠高於下放給其他位置。

這項三軸不平等的觀察接到 article 03 的工程結構分析（H1' 三道牆是工程設計缺陷如何把社運匿名空間關閉的條件）<sup>31</sup>，與 article 05 的工程張力分析（IT' 不可能三角是 sybil 抵抗無法同時拉滿三件事的證明）<sup>32</sup>。本文承擔的是規範前提的位置：當工程結構與工程張力都不能保證最弱勢者不受傷害時，需要外部的規範判準把這些觀察轉成可操作的政策條件。

## 三、規範前提：CB-Justice 雙重判準 D1* ∧ D2*

### 3.1 從直覺命題到形式化判準

直覺命題（「設計轉換不應讓最弱勢者更弱勢」）在政策辯論中容易被消化為一句口號，被證據強度不足的訴求稀釋。把它形式化為合取判準，是為了讓判斷依據在後續章節可以被逐項檢驗、被反駁、被修正<sup>33</sup>。

CB-Justice 命題形式如下。

> **CB-Justice (final form)**
> 設 S 為設計轉換，t₀ 為前狀態，t₁ 為後穩態（含配套），G_w 為最弱勢者群組。
>
> **D1*（Rawls 差別原則，辭典序版本）**：S 通過 D1* iff
> (i) S 不違反第一原則（基本自由）；
> (ii) S 不違反公平機會原則（fair equality of opportunity, FEO）；
> (iii) S 後 G_w 之基本益品（含 social bases of self-respect）長期期望不低於 t₀。
>
> **D2*（Anderson 關係平等，民主公民身分版本）**：S 通過 D2* iff
> (i) S 不在任何群體間產生結構性壓迫；
> (ii) S 不剝奪任何群體之共同公民身分；
> (iii) S 不削弱任何群體在社會交往中的對等地位。
>
> **CB-Justice 合取判準**：S 在規範上可接受 **僅當** D1* ∧ D2* 成立。此判準是 *必要而非充分* 條件。

D1* 採 Rawls 1971 兩原則辭典序架構<sup>34</sup>，並把「最不利處境者」操作化為持有最少基本益品的群組（Rawls 1971 § 16；Rawls 2001 § 17）<sup>35</sup>，把社會交往的自尊基礎納入差別原則的覆蓋（Rawls 1971 § 67）<sup>36</sup>。D2* 採 Anderson 1999 關係平等的三面向操作化（不結構性壓迫 / 不剝奪共同公民身分 / 不削弱對等地位）<sup>37</sup>，並援引 Anderson 1999 對 luck egalitarianism 的攻擊作為 D2* 與 D1* 不可化約的論據<sup>38</sup>。

G_w 在本文脈絡下操作化為以下交叉群組：年長者（65+）、低數位識讀能力者、無智慧型手機者、流動人口（移工、新住民、街友、災民）、disability（視 / 聽 / 手 / 認知 / 語言）、低收入戶、原住民族<sup>39</sup>。G_w 的識別在不同政策情境會有變動，這正是 Hayek-Sowell 反論需要被吸收的地方（見 § 3.3）。

### 3.2 與 article 03 / 04 / 05 同樣是合取結構

CB-Justice 與 article 03 H1' 三道牆<sup>40</sup>、article 04 T 三件式<sup>41</sup>、article 05 IT' 不可能三角<sup>42</sup> 同樣是合取結構，僅是用於不同層級。

article 03 H1' 是工程結構層的合取必要條件（缺一道牆就無法達成結社自由的真實兌現）；article 04 T 是法律制度層的合取必要條件（缺一件就無法支撐「假名 + 事後問責」的雙重允諾）；article 05 IT' 是工程張力層的合取最大化不可達（無法同時拉滿 sybil resistance、隱私、可審計三件事）；本文 CB-Justice 是規範前提層的合取必要條件（缺 D1* 或缺 D2* 都不足以讓設計轉換在規範上可接受）。

四個合取結構在分析框架上同構，但承擔的工作性質不同。article 03 / 04 處理工程與法律的失敗模式；article 05 處理工程選擇的 frontier 形狀；本文 CB-Justice 處理規範可接受性的判準形式。把四篇文章串聯起來，是要讓「保護最弱勢者」這個直覺命題，在不同層級的分析中都有可被檢驗的具體形式。

### 3.3 必要非充分；Hayek-Sowell 反論吸收

D1* ∧ D2* 是必要非充分條件。即便雙重判準同時成立，仍可能在以下層面失敗。

第一，Hayek 1945 / 1960 / 1973-1979 的知識分散反論<sup>43</sup>，加上 Sowell 1980 的知識在地化分析<sup>44</sup>，提出兩項對 CB-Justice 操作化的限制。其一，G_w 的識別本身有資訊問題。一個由中央規劃的 G_w 操作化清單，可能漏掉只有在地知識才能辨識的弱勢群組（如某地區某教派某語族的特殊處境）。其二，中央設計的補強路徑可能扼殺替代方案；政府 wallet 強制單軌時，社區自組的紙本與口頭協助網絡可能因為制度資源被吸納而萎縮。

這兩項限制需要被吸收進 CB-Justice 的操作版本。修訂方式有兩條。第一，G_w 操作化必須動態化，隨資料更新、隨地方申訴、隨爭議裁決機關的判決樣本而調整。第二，D1*-(iii) 增加「保留 fallback」要求；基本益品的長期期望不低於 t₀，意味著 fallback 路徑必須持續存在，並非過渡安排<sup>45</sup>。

第二，Hayek-Sowell 反論的限制也必須被指出，避免反論被誤讀為對 CB-Justice 整體的駁斥。其一，反論主要針對中央規劃式的分配（central planning），對「規範性判準作為政策設計的限制條件」並無直接駁力。其二，反論假設市場能自然產生 G_w 不被傷害的結果，這項假設已被金融排除、健保排除等經驗反證；市場在身分證明領域歷來是排除而非包容的力量<sup>46</sup>。其三，knowledge-localization 反過來支持基線並行；正因中央無法窮盡 G_w，基線（紙本、臨櫃、人工）的並行義務應當更嚴格<sup>47</sup>。

第三，CB-Justice 在 Sen capability、Fraser 認可正義、跨世代維度仍可能失敗<sup>48</sup>。Sen 的 capability 進路強調「有效自由」而不僅是基本益品分配；Fraser 的認可正義強調身分政治而不僅是再分配；跨世代正義則要求現在的設計選擇不為下一代留下難以撤回的路徑依賴。這三項在本文範圍內不展開，列入後續研究議程，並作為 D1* ∧ D2* 「必要非充分」的具體例證。

### 3.4 雙重判準對四面向的逐項檢驗

把 D1* ∧ D2* 套用到 § 2 的四面向 civic burden，可以看到無補強條件下的設計轉換在每個面向都有違反項（表 2）<sup>49</sup>。

**表 2：CB-Justice 雙重判準對四面向 civic burden 的逐項檢驗**

| 面向 | 從誰下放給誰 | D1* 檢驗 | D2* 檢驗 |
|---|---|---|---|
| 理解負擔 | issuer → holder | 違反 D1*-iii（基本益品 + 自尊基礎受損） | 違反 D2*-iii（社會交往對等地位削弱） |
| 驗證接入負擔 | issuer → verifier | 對 G_w 影響間接 | 違反 D2*-i（結構性 marginalization） |
| 信任判斷負擔 | issuer → holder + verifier | 違反 D1*-iii（資訊與保護下降） | 違反 D2*-i（結構性壓迫） |
| 爭議責任歸屬 | 不明確（潛在 → holder） | 違反 D1*-iii（申訴能力不足吸收損失） | 違反 D2*-ii（共同公民身分被剝奪） |

每一格的違反並非無法挽回，這是補強條件被引入的位置。第四章接著討論補強條件如何把上述違反項逐格中和。


## 四、補強條件：三項分層強制 + C4 政治選擇

### 4.1 從「三項條件齊備」到「分層強制」

直覺命題往往把補強條件寫成「三項齊備」。文獻檢索後可以看到，這三項條件的法律強度並不一致；把它們寫成同一強度會誤導政策設計。SA-3 的修訂版本把補強條件分為三層強制：C1 為軟強制（依靠規範性 nudge + 標準化設計守則），C2 在 EU eIDAS 2.0 已是硬強制（受 conformity assessment body 認證），C3 在台灣脈絡下落在消保法、個資法、行政訴訟法、訴願法的雙軌強制<sup>50</sup>。三層強制的邏輯各異，配套的法律工具也不同。

這項分層是必要非充分。三項條件同時到位仍不能保證設計轉換在規範上可接受；C4（單一入口的政治選擇）作為跨國比較的關鍵變因會在 § 6 處理，但因為涉及主權選擇與治理史路徑依賴，C4 不納入溯因論證的核心三項條件。把 C4 拉進核心會讓論證掉入「沒有單一入口就一定失敗」的錯誤推論；Estonia 與北歐 BankID 的單一入口是歷史機緣，並非規範性必要條件。

### 4.2 C1 — 預設安全 UX（軟強制）

C1 的規範依據是 GDPR Article 25(2) 對 data protection by design and by default 的強制性<sup>51</sup>，配上 Cavoukian 2009 *Privacy by Design* 的七項原則<sup>52</sup>。Sunstein 2014 *Why Nudge?* 第二章指出 default rules 不可能中性，問題只在於 nudge 哪一邊<sup>53</sup>；Madrian & Shea 2001 對 401(k) 計畫的實證顯示低收入群組對預設值的繼承率最高<sup>54</sup>。如果預設揭露是「最大」而非「最小」，G_w 將是最大受害者。

工程對應上，W3C VC Data Model 2.0<sup>55</sup>、ISO/IEC 18013-5 mDL<sup>56</sup>、BBS+ signature、SD-JWT 都支援 selective disclosure。選項並不等於預設；wallet UX 把哪個選項作為「預設按鈕」是設計者的政策選擇<sup>57</sup>。Hartzog 2018 *Privacy's Blueprint* 把這層稱為 design-as-law：UX 預設值的法律地位應當被視為類似法律規範<sup>58</sup>。

老人友善預設值在這個架構下需要被拆解為三層，並且具體引用 W3C WCAG 2.2（2023-10 Recommendation）<sup>59</sup>的對應條款。

**(a) 認知預設值**。預設揭露採最小必要原則；揭露前提供大字體確認頁；揭露前提供語音摘要 + 選擇性朗讀<sup>60</sup>。這層處理「我看了不知道在簽什麼」這個 G_w 最直接的負擔。

**(b) 感官預設值**。WCAG 2.2 SC 1.4.3 要求文字與背景對比度至少 4.5:1；SC 1.4.4 要求文字可放大至 200%；SC 1.4.10 要求 reflow 在 320 CSS pixels 寬度下無水平滾動<sup>61</sup>。WHO 2019 *World Report on Vision* 估計 65 歲以上中度以上視力受損者比例在 30% 上下<sup>62</sup>。如果 wallet UX 不滿足這三條 SC，視力受損者實際上被排除在自主使用之外。

**(c) 操作預設值**。WCAG 2.2 SC 2.5.7 要求避免 dragging movements 作為唯一操作方式；SC 2.5.8 要求互動元素的目標尺寸至少 24×24 CSS pixels<sup>63</sup>。Carmeli, Patish & Coleman 2003 對老年人精細動作的研究顯示 70 歲以上手指操作精度顯著下降<sup>64</sup>。這層處理「我手指點不到那個按鈕」這項看似瑣碎、但對 G_w 構成決定性障礙的設計選擇。

把 C1 寫進法律的方式有兩種。其一，行政命令層級的 wallet UX 標準（類似 GDS *Service Manual* 之於英國）<sup>65</sup>。其二，數位平權專法層級的 universal design 強制條款。台灣現行身心障礙者權益保障法第 52 條已經提供 universal design 的部分基礎；數位部草擬的數位平權專法應當把 WCAG 2.2 + Section 508<sup>66</sup> 的對應條款明文納入。

### 4.3 C2 — Verifier 認證制度（硬強制）

C2 在 EU 已從軟性建議變為硬強制。Regulation (EU) 2024/1183（eIDAS 2.0）修正 Regulation (EU) 910/2014（eIDAS 1.0），Article 5a 對 wallet 功能訂出強制要求，Article 6a 對 relying party（即 verifier）訂出註冊要求<sup>67</sup>。這是 eIDAS 1.0 到 2.0 的關鍵突破——把 verifier 也納入義務主體。歐盟層級 ETSI EN 319 401（General Policy Requirements for Trust Service Providers）<sup>68</sup>、EN 319 411-1<sup>69</sup>、EN 319 411-2<sup>70</sup>、TS 119 471 / 472（2024 起草中）構成 verifier 認證的技術規範鏈；ISO/IEC 27701:2019 PIMS<sup>71</sup>、ISO/IEC 29115:2013 LoA 1-4<sup>72</sup> 構成跨域認證的補充。在這個體系下，verifier 不能自由選擇是否驗證使用者是否合規，conformity assessment body 強制執行 audit trail。

C2 的強制性是分級的。德國 BSI 與法國 ANSSI 在歐盟框架下採分級強制<sup>73</sup>；北歐 BankID 是事實壟斷下的自然強制<sup>74</sup>。台灣脈絡下，TW DIW 部署若採 EU 模式（修訂《電子簽章法》或制定《數位身分法》並設置 verifier 認證機構），則 C2 將是硬強制；若採 NIST 模式（SHOULD 而非 MUST），則 C2 會回退到軟強制，並把信任判斷負擔留給 holder 與市場。

C2 的副作用必須被指出。白名單機制存在反向風險，誰決定誰能進白名單？Hartzog 2018 design-as-law 警示：認證制度本身可能變成排除性工具<sup>75</sup>。對中小型 verifier（社區藥局、小型醫療院所、地方政府單一窗口），整合成本 3-12 萬歐元<sup>76</sup> 是顯著進入門檻。政策設計需要在「verifier 義務」與「verifier 進入門檻」之間取得平衡，建議路徑是分級認證（按 verifier 規模與處理資料敏感度分級）+ 公部門補貼整合成本。

### 4.4 C3 — 統一爭議裁決機關（雙軌強制）

C3 在台灣脈絡下落在既有的雙軌救濟體系。商業 wallet 走消保法 + 個資法 + 民法的私法軌道；政府 wallet 走訴願法 + 行政訴訟法 + 國家賠償法的公法軌道。

消費者保護法 1994 制定 / 2015 修法第 43-47 條設立申訴 → 調解 → 團體訴訟三段式架構<sup>77</sup>；個人資料保護法 2010 / 2023 修法第 28-31 條設立每人每事件 500 元至 2 萬元法定賠償<sup>78</sup>。這兩條法律並非為 wallet 場景設計，但 Solove & Hartzog 2014 對 FTC 累積判例法的分析<sup>79</sup>顯示，把既有消保 + 個資的判例法疊加適用，比新立專法更可行；新立專法的代價是立法時間長、學術社群尚未對 wallet 爭議形成穩定共識。

EU ADR Directive 2013/11<sup>80</sup> + Council of Europe Convention 108+<sup>81</sup> 提供另一條跨域 ADR 路徑。Directive 2013/11 把 alternative dispute resolution 的覆蓋範圍擴張到所有消費契約，並要求成員國指定權責 ADR 機關。北歐瑞典的 ARN（Allmänna reklamationsnämnden）就是在這個架構下運作<sup>82</sup>。台灣若要建立對應機關，可以採三條建構路徑。其一，現有消保官 + 個資會 + 數發部之間訂定行政協議（MOU）。其二，立法設置數位身分爭議調解委員會。其三，把 wallet 爭議疊加到既有金融消費評議中心（金融消費者保護法第 13 條已有先例）。

ENISA 2024 mDL Trust Framework Report 把三方責任配置寫得更精確<sup>83</sup>：issuer 負憑證內容真實性，wallet 負存儲與出示安全性，verifier 負驗證行為合法性與目的相符性。這三方責任在不同爭議類型下各自承擔的份量不同，C3 機關需要有能力區分。

把 C3 寫進政策的具體建議：(1) 行政程序法增訂專條，明定數位身分爭議的受理機關層級；(2) 個資法增訂條款，把「拒絕同意數位身分驗證不得成為拒絕服務的理由」明文化；(3) 數位部、消保處、個資會三方訂定 MOU，明確分案標準。

### 4.5 嚴禁把消保法等同於監管打壓

把消保法寫成「監管打壓」會誤導政策辯論<sup>84</sup>。消保法的設計目標是補正資訊不對稱與議價能力差距，這兩項條件在 wallet 場景下成立的程度高於一般消費契約。一般消費契約有「不購買」這個 exit option；wallet 場景下，當 wallet 成為使用公共服務的事實前提，exit 並非可行選項。把消保法理解為對廠商的友善限制（廠商也得益於穩定的法律預期），而不是限制創新的監管門檻，更貼近台灣消保法 1994 立法的原意<sup>85</sup>。

同樣地，把消保法既有框架忽略掉、把所有爭議都丟給「未來新立專法」，會在 TW DIW 上線後留下 3-5 年的法律空窗。在這段空窗期，G_w 的爭議救濟管道將實際上不存在；違反 D2*-ii（共同公民身分被剝奪）的程度遠高於既有框架下的不完美適用。

## 五、量化排除：台灣三層門檻

### 5.1 三層門檻的操作化

把「無補強條件下 TW DIW 部署的排除人口」量化為一個區間，需要把排除這個概念拆解為可估計的層次。本文採三層門檻設計（表 3）<sup>86</sup>，操作化定義如下。

**A 層 — 設備門檻**：無智慧型手機者；或有智慧型手機但無 NFC 功能者；或設備已被認定為不符 wallet 最低要求（例如過時的作業系統版本）。

**B 層 — 數位識讀門檻**：有設備但無法獨立完成 wallet onboarding 五步驟（下載 app、KYC、生物特徵設定、PIN 設定、首次憑證載入）。

**C 層 — 認知與身體門檻**：視力 / 聽力 / 手部精細動作 / 認知功能 / 語言識讀的障礙，使得即便設備齊全與識讀達標，仍無法完成 wallet 操作。

**表 3：三層門檻互不重疊估計**

| 層次 | 中位估計 | 範圍 | 操作型定義 |
|---|---|---|---|
| A 設備門檻 | 340 萬 | 290-400 萬 | 無智慧型手機 + 無 NFC 手機 |
| B 數位識讀門檻 | 165 萬 | 100-220 萬 | 無法獨立完成 wallet onboarding 五步驟 |
| C 認知與身體門檻 | 95 萬 | 60-140 萬 | 視 / 聽 / 手 / 認知 / 語言障礙 |
| 合計（嚴格加總） | 600 萬 | 450-760 萬 | 不重疊 |
| **保守通報（中位）** | **400 萬** | **320-480 萬** | 重疊調整 |

### 5.2 三情境量化估計

A 層的計算依據：NCC 2023 通訊使用調查顯示 12 歲以上智慧型手機普及率 87.5%<sup>87</sup>；分齡資料顯示 60-69 歲 73.4%、70-79 歲 56.1%、80 歲以上 31.2%<sup>88</sup>；GfK 2023 / Counterpoint 2024 顯示智慧型手機 NFC 普及率 75%<sup>89</sup>。把這三項交叉計算後，A 層中位 340 萬，範圍 290-400 萬。

B 層的計算依據：教育部 2023 年成人數位機會與素養調查顯示 60-69 歲行政 APP 操作能力 51.8%、70 歲以上 22.4%<sup>90</sup>；國發會 2022 年數位機會調查顯示 60 歲以上 PIN 設定能力 47.6%<sup>91</sup>。把「五步驟全部能獨立完成」設為門檻後，B 層中位 165 萬，範圍 100-220 萬。

C 層的計算依據：衛福部 2021 年身心障礙者生活狀況調查顯示身心障礙手冊持有人 121 萬<sup>92</sup>；台灣失智症協會 2023 年推估失智症人口 35 萬，中度以上 22 萬<sup>93</sup>；勞動部 2024 年移工統計顯示移工 75 萬，移民署 2024 年新住民統計顯示新住民 58 萬<sup>94</sup>。把「視 / 聽 / 手 / 認知 / 語言」中至少一項達到障礙等級設為門檻後，C 層中位 95 萬，範圍 60-140 萬。

三層相加在嚴格加總意義下為 600 萬（450-760 萬），考慮層次間重疊（如同一人同時觸 A、B、C 多層）後保守通報為中位 400 萬（320-480 萬），佔台灣總人口 17.1%（13.7-20.5%）<sup>95</sup>。內政部戶政司 2025 年 3 月人口統計月報顯示 65 歲以上人口比例 17.0%<sup>96</sup>，與本估計區間中位接近，這項比例支撐排除人口估計的合理性。

### 5.3 量化估計的限制聲明

量化估計與精確預測有性質差異。本估計提供的是區間分布而非點預測。三層門檻的操作型定義在實際 TW DIW 上線後會被使用者實驗校準；65+ 失敗率 22% 是國發會 2024 公開簡報資料<sup>97</sup>，但分齡 / 分地理 / 分語言的細部失敗率資料目前並未公開，這是後續研究的核心議程。

排除與自然淘汰也有性質差異。把 320-480 萬人寫成「無法跟上時代的少數」是錯誤的政策解讀。Khera 2017 對印度 Aadhaar PDS 的研究<sup>98</sup>顯示，排除是設計選擇與制度配套不到位的後果，並非自然分布。Anderson 1999 關係平等的論點<sup>99</sup>也指向同一結論：共同公民身分的剝奪是設計選擇，並非個人能力的線性結果。

### 5.4 反事實情境 D：三補強齊備

如果三項補強條件齊備，排除人口會降到多少？本文設計三項反事實情境（A 紙本不限期、B 客服 + 遠距協助、C 合法委任路徑）並合計為情境 D（表 4）<sup>100</sup>。

**表 4：反事實情境的剩餘排除估計**

| 反事實 | 設計 | 剩餘排除（萬） | 佔總人口 | 降幅 |
|---|---|---|---|---|
| 基線（無補強） | 三項補強都不到位 | 400 | 17.1% | 0% |
| A — 紙本不限期 | 強制保留紙本永久並行 | 50-80 | 2.1-3.4% | 80-87.5% |
| B — 客服 + 遠距協助 | 24/7 多語客服 + 視訊 + 社區據點 | 190 | 8.1% | 52.5% |
| C — 合法委任路徑 | 家屬 / 看護 / 社工書面授權 + audit log | 190 | 8.1% | 52.5% |
| **D — 三條合計** | A + B + C 同時到位 | **65-110** | **2.8-4.7%** | **72.5-83.8%** |

反事實 D 的剩餘排除人口分布如下<sup>101</sup>：重度認知障礙 + 無家屬可委任 + 非機構照顧的高齡獨居者 25-40 萬；偏遠地區 + 無社區據點 + 無客服可達 + 家屬亦失能的家戶 15-25 萬；制度規範模糊地帶的新住民、移工 20-30 萬；試辦期信任不足而拒用 10-15 萬。

這個區間的政策含意是：三項補強條件齊備時，排除可從 17.1% 降到 2.8-4.7%，降幅 72.5-83.8%。剩餘的 65-110 萬仍是顯著數字，需要更細緻的個案救濟設計（如 § 7 將討論的數位身分服務員制度）。三項補強齊備並非充分條件，這項數字也支撐 D1* ∧ D2* 的「必要非充分」聲明。

### 5.5 跨國對照支撐量化估計區間

跨國資料支撐 320-480 萬區間的合理性<sup>102</sup>。丹麥 MitID 在強制三條替代管道（含 audio code reader 硬體替代）下取得 96.8% 涵蓋率<sup>103</sup>，相當於排除 < 3.2%；法國 FranceConnect 採先全面數位化、後補紙本路徑，65 歲以上排除 38%<sup>104</sup>；印度 Aadhaar 採強制單軌、無替代，PDS 排除集中於 Jharkhand / Rajasthan 鄉村貧窮邦 8-12%，並有飢餓死亡記錄<sup>105</sup>；美國低收入家戶手機共用比例 27%<sup>106</sup>，holder-centric 「一人一手機」假設不成立；Estonia e-ID + Smart-ID 雙軌 < 2% 排除<sup>107</sup>。這五國資料形成的光譜（< 2% 至 38%）覆蓋本估計區間，支撐 13.7-20.5% 中位排除的合理性。


## 六、跨國七案例 + 5 邊界條件

### 6.1 七案例的成功 / 失敗光譜

把跨國案例排成成功 / 失敗光譜，可以看到 holder-centric 的命運取決於補強條件齊備度與其他歷史變因，並非設計範式本身（表 5）<sup>108</sup>。

**表 5：跨國七案例對照矩陣**

| 國家 | 模型 | 涵蓋率 | 65+ 使用率 | 排除人口比 | C1 UX | C2 verifier | C3 爭議 | C4 入口 |
|---|---|---|---|---|---|---|---|---|
| 瑞典 BankID | holder-centric + 銀行業 | 99% | 80%+ | < 1% | 強 | 強 | 強（ARN） | 事實壟斷 |
| Estonia X-Road | holder-centric + 政府 | 99% | 90%+ | < 2% | 強 | 強 | 強（資保督察） | 統一 |
| Singapore SingPass | issuer-centric 高效版 | 97% | 85%+ | < 3% | 強 | 強 | 中 | 統一 |
| 印度 Aadhaar + DigiLocker | 混合 | Aadhaar 100% / DigiLocker 10% | 低 | 8-12%（PDS） | 弱 | 弱 | 弱 | 強制 |
| 法國 FranceConnect | issuer-centric 碎片 | 74% | 50% | 26% | 弱 | 弱 | 弱（47 天） | 多入口 |
| 美國 Login.gov | issuer-centric 碎片 | < 27% | 低 | 高 | 中 | 弱 | 弱 | 多入口 |
| 韓國 모바일 신분증 | holder-centric | 18% | 低 | 高 | 中 | 中 | 中 | 中 |

**成功 A — 北歐 BankID（瑞典 / 挪威 / 芬蘭）**。涵蓋率 96%+，65 歲以上使用率超過 80%<sup>109</sup>。瑞典 Finansinspektionen 2024 監理年度報告與 Pensionsmyndigheten 2023 *Tillgänglighet och digital inkludering* 顯示這項涵蓋率並非天然優越，它建立在四項特殊條件之上，分別是 1990 年代網路銀行普及（5-10 年公民教育投資）<sup>110</sup>、銀行業作為事實 KYC 起點（缺點是無銀行帳戶者排除）<sup>111</sup>、ARN 消費者投訴委員會運作 60 年的累積案例<sup>112</sup>、人口同質性高與行政透明文化<sup>113</sup>。Norsk Regnesentral 2021 *Digital Identity in the Nordics* 警示這四項條件移植到他國時並不必然成立<sup>114</sup>。

**成功 B — Estonia X-Road + smart-ID**：99% 公民持有 e-ID，70% 公民每日使用，X-Road 查詢留痕<sup>115</sup>。1996 年 *Tiigrihüpe* 計畫提供 5 年起步教育投資<sup>116</sup>；2007 年俄羅斯網路攻擊後資安意識躍進<sup>117</sup>；2017 年 ROCA 漏洞（CVE-2017-15361）顯示即便三項條件都到位，底層密碼學供應鏈失敗仍可能讓 C1/C2/C3 全部受影響<sup>118</sup>。ROCA 案例是「三項條件必要非充分」的具體例證。

**部分成功 C — Singapore SingPass + Myinfo**：97% 涵蓋的高效 issuer-centric 設計<sup>119</sup>。SingPass 採政府單一入口、實名綁定、強制 verifier 認證；Myinfo 提供 selective disclosure 但保留中央 trust list。這是 holder-centric 必然優越論的反例<sup>120</sup>。Singapore 案例同時也說明 issuer-centric 在特定條件下（強行政能力 + 高制度信任 + 小國規模）能取得對使用者更友善的結果。

**部分失敗 D — 印度 Aadhaar + DigiLocker**：13.8 億 Aadhaar 涵蓋的同時，PDS（公共配給體系）排除 8-12%<sup>121</sup>。Khera 2017 *EPW* 對 Jharkhand / Rajasthan 鄉村貧窮邦的研究<sup>122</sup>顯示生物特徵驗證在弱網路、磨損指紋、長者群組失敗率高；Drèze, Khalid, Khera & Somanchi 2017 / 2020 *EPW* 記錄飢餓死亡案例<sup>123</sup>。2018 年 *Justice K.S. Puttaswamy v. Union of India* 判決部分肯認排除錯誤救濟空缺<sup>124</sup>。Aadhaar 是「強制單軌、無替代」的反面教材。DigiLocker 在這個基礎上開展，採用率約 10%，相對 Aadhaar 偏低。

**失敗 E — 法國 FranceConnect**。26% 公民未啟用，65 歲以上排除 38%<sup>125</sup>。把 FranceConnect 寫成全面失敗會誤導政策辯論——對中產階級而言，FranceConnect 提供高效的單一登入體驗，並完成 dématérialisation 的部分目標<sup>126</sup>。失敗的精確描述是「分配性失敗」，成本下放給最弱勢者，而中產階級享受效益。Défenseur des Droits 2022 *Dématérialisation et inégalités d'accès aux services publics* 報告把這項分配性失敗寫得最清楚<sup>127</sup>。Cour des Comptes 2022 年公開報告把申訴管道分散與平均 47 天處理時間列為結構性問題<sup>128</sup>。

**失敗 F — 美國 Login.gov**：覆蓋率 < 27%，IRS 改採商業 vendor ID.me 引發人臉識別歧視爭議<sup>129</sup>。Brewster 2022 *Forbes* 報導 ID.me 對黑人女性人臉識別失敗率偏高<sup>130</sup>；GAO 2024 *Digital Identity: Login.gov Implementation Audit* (GAO-24-105663) 列出多項治理失敗<sup>131</sup>。美國案例是 issuer-centric 碎片化下的多入口失敗，並非 holder-centric 的反例。

**新興 G — 韓國 모바일 신분증**：行動駕照 600 萬啟用，使用記錄留痕但實際查閱比例 < 5%<sup>132</sup>。KISA 2024 모바일 신분증 정책 보고서顯示涵蓋率仍偏低（18%）<sup>133</sup>；Lee & Park 2024 *Journal of Korean Law* 24(1) 對 PIPC 留痕機制的分析<sup>134</sup>提供新興案例的法律觀察。韓國案例顯示 holder-centric 並非單向技術趨勢，受治理史與制度信任條件影響。

### 6.2 5 條邊界條件

把七案例的觀察提煉為五條邊界條件，是要讓政策設計能跨越單一案例的特殊性。

**B1 — 商業 wallet 與政府 wallet 義務應有規範類別差異**。商業 wallet 與政府 wallet 的差異屬於規範類別差異，並非程度差異<sup>135</sup>。商業 wallet 義務基礎是契約 + 消保法 + 個資法 + 公平交易法，救濟管道是仲裁、消保官、集體仲裁；政府 wallet 義務基礎是依法行政 + 公共服務 + 國家賠償法，救濟管道是訴願 + 行政訴訟 + 國賠（表 6）。把兩者寫成同一規範類別（例如把政府 wallet 義務縮減到「跟商業 wallet 一樣多」）會違反依法行政原則；把兩者規範義務拉成同一強度（例如要求商業 wallet 承擔 universal service obligation）會違反契約自由與市場誘因運用。

**表 6：商業 wallet vs 政府 wallet 義務差異**

| 維度 | 商業 wallet | 政府 wallet |
|---|---|---|
| 義務基礎 | 契約 + 消費者保護 + 個資保護 | 依法行政 + 公共服務 + 國家責任 |
| 法律性質 | EULA 私法契約 | 公法關係 |
| 設計義務 | 使用者體驗 + 個資最小化 + 透明揭露 | 普及性 + 平等使用 + 替代路徑保障 |
| 監管機關 | NCC + 公平會 + PDPC | PDPC + 監察院 + 行政法院 |
| 申訴管道 | 消費爭議調解 + 消保官 + 仲裁 | 訴願 + 行政訴訟 + 國賠 |
| 救濟典型 | 損害賠償訴訟 / ICC 仲裁 | 國家賠償 / 撤銷處分 |

商業 wallet 廠商市場誘因可被政策運用<sup>136</sup>。Apple Wallet / Google Wallet 服務條款<sup>137</sup>顯示市場 wallet 提供者願意承擔「有限的儲存責任」以換取生態圈進入；政府可以透過認證制度、標籤制度、採購制度把這項市場誘因轉成公共政策槓桿。把商業 wallet 廠商寫成單純的監管對象會錯失這項槓桿。

**B2 — 公民教育投資決定理解負擔的可吸收性**。瑞典 1990 年代網路銀行普及在 BankID 之前 5-10 年完成<sup>138</sup>；Estonia 1996 *Tiigrihüpe* 計畫在 e-ID 之前 7 年完成<sup>139</sup>；法國 dématérialisation 以節省行政成本為主導，公民教育投資不足，是 FranceConnect 失敗的結構原因<sup>140</sup>；美國 Login.gov 無對應教育投資，採用率偏低<sup>141</sup>。台灣建議：TW DIW 2027 全民可用之前 2 年（2025）啟動全民數位身分識讀教育計畫，並把「能完成 wallet onboarding 五步驟」設為國民數位識讀基本能力標準<sup>142</sup>。UNESCO 2023 *Adult Digital Skills* 提供國際參考指標<sup>143</sup>。

**B3 — 既有實名 / KYC 體系與 holder-centric 銜接路徑**。各國 KYC 起點差異顯著<sup>144</sup>。北歐 BankID 銀行業為起點（缺點：無銀行帳戶者排除）；台灣 MOICA 自然人憑證為起點；Estonia e-ID + smart-ID 雙軌（建議台灣參考）；Singapore SingPass 取代既有實名管道（不適用台灣多元身分文化）。建議路徑是 MOICA 為 root credential、TW DIW 為行動延伸；當 holder 失去手機時，MOICA 仍可作為備援憑證；當 holder 升級到 TW DIW 時，MOICA 自動同步而不要求重新 KYC。

**B4 — 數位落差是世代 × 地區 × 收入 × 學歷多維交叉**。北歐 65 歲以上使用率超過 80% 反映 1990 年代網路銀行普及代際；法國 65 歲以上排除 38%，鄉村 + 65 歲以上 + 低學歷疊加組排除 70%<sup>145</sup>；印度 PDS 排除集中於 Jharkhand / Rajasthan 鄉村貧窮邦<sup>146</sup>；美國 ID.me 對黑人女性人臉識別失敗率偏高，演算法歧視 + 數位落差交叉<sup>147</sup>。台灣脈絡下，數位落差的多維交叉指向偏鄉 + 65+ + 低學歷 + 低收入家戶為最高排除風險組。政策建議包括最低排除率上限承諾（5 年內 95% 啟用率）+ 數位身分服務員制度 + 主動外展（home visit）。van Dijk 2020 *The Digital Divide* 對多維交叉的理論架構<sup>148</sup>支撐這項政策設計。

**B5 — 替代路徑的法律地位必須由立法明文保障**。瑞典 *Förvaltningslagen* 2017 修訂第 6 條保留書面申請權<sup>149</sup>；Estonia *Avaliku teabe seadus* 要求書面申請選項<sup>150</sup>；法國 2024 年仍未通過對應立法，是 FranceConnect 失敗的結構原因<sup>151</sup>；印度 Khera 2017 倡議 exclusion-by-design protections / manual override<sup>152</sup>。台灣建議：行政程序法增訂專條「公民有權選擇紙本、臨櫃、電話、委任等替代管道」+ 個資法增訂「拒絕同意數位身分驗證不得成為拒絕服務的理由」。沒有立法明文保障的替代路徑，在實際操作中會被「為節省行政成本」的壓力逐步收緊；丹麥 MitID 強制 audio code reader 硬體替代<sup>153</sup>是替代路徑法律地位的反面具體例證——當法律明文保障時，硬體 + 流程都會被同步配置。

## 七、政策建議：從規範前提到制度實踐

### 7.1 法律修訂的三道工程

把 § 4 的三項補強條件寫進台灣法律體系，需要三道修訂工程。

**第一道，行政程序法增訂專條（C3 + B5）**。建議條文方向是「公民有權選擇紙本、臨櫃、電話、委任等替代管道辦理行政事務；行政機關不得以提供數位身分驗證選項為由，限縮替代管道的可用性」。這條款回應 B5 替代路徑法律地位空缺，並把 § 5.4 反事實 D 的三條補強路徑（A 紙本、B 客服、C 委任）法律化。

**第二道，個資法增訂條款（C2 + C3）**。建議條文方向是「拒絕同意數位身分驗證不得成為拒絕服務的理由」「verifier 在收集身分屬性前，應提供最小必要替代驗證方式」。這條款回應 C2 verifier 認證制度的下游義務（驗證行為的目的相符性）<sup>154</sup>，並補強 C3 爭議裁決的法源基礎。

**第三道，數位平權專法（C1 + B4）**。建議條文方向是把 WCAG 2.2 SC 1.4.3 / 1.4.4 / 1.4.10 / 2.5.7 / 2.5.8<sup>155</sup>明文納入；把 universal design 強制適用於所有政府 wallet UX；把最低排除率上限（5 年 95% 啟用率）寫入；把數位身分服務員制度法定化。這條款回應 C1 軟強制 UX 的法律工具空缺，並把 B4 數位落差多維交叉的具體政策工具明文化。

### 7.2 制度設計的三項機關建構

**爭議裁決機關**。在 § 4.4 三條建構路徑中，本文建議路徑一 + 路徑三組合：短期內由消保官 + 個資會 + 數發部訂定行政協議（MOU）明確分案標準；中期把 wallet 爭議疊加到既有金融消費評議中心，運用其 10 年累積的 ADR 經驗。長期再評估是否需要立法設置數位身分爭議調解委員會<sup>156</sup>。

**verifier 認證機關**。建議參考 EU eIDAS 2.0 的 conformity assessment body 模式，由數位部或 PDPC 籌備處設置 verifier 認證機關；認證採分級制度（按 verifier 規模 + 處理資料敏感度）；對中小型 verifier 提供整合補貼（3-12 萬歐元的對應費用）<sup>157</sup>。

**數位身分服務員制度**。建議參考英國 GDS *Assisted Digital Strategy*<sup>158</sup>與丹麥 MitID 替代管道評估報告<sup>159</sup>，在全國 25 縣市部署數位身分服務員，提供 onboarding 協助、爭議受理、替代路徑導引；把社區據點（圖書館、活動中心、衛生所）作為服務員工作站；把服務員的法定身分寫進數位平權專法。Pensionsmyndigheten 2023 *Tillgänglighet och digital inkludering* 對瑞典退休年金管理局的數位包容服務員制度提供具體模型<sup>160</sup>。

### 7.3 教育投資的兩個時間窗

兩個時間窗的安排同等重要。

**5 年公民教育投資**。建議由教育部 + 數發部聯合主導，把「數位身分基本識讀」納入 12 年國教與終身學習課綱；把成人數位機會與素養調查<sup>161</sup>的調查項目擴充為包括 wallet onboarding 五步驟；把社區大學、樂齡學習中心、新住民家庭服務中心列為主要部署點。

**2 年密集 onboarding 期**。在 TW DIW 2027 全民可用之前 2 年（2025-2027），建議數位部主導 + 內政部協辦，採 home visit 方式為高風險組（偏鄉 + 65+ + 低學歷 + 低收入家戶）提供 onboarding 協助；公布分齡 / 分地理 / 分語言的失敗率資料；建立 onboarding 協助的 audit log，並接受監察院監督。

### 7.4 與 article 04 / 05 + prompt 11 / 15 的接合

本文的政策建議與本系列其他文章在以下接合點上彼此支撐<sup>162</sup>。

**與 article 04（pseudonymous-participation-legal）**。Article 04 T 三件式（Trigger / Authority / Remedy）處理「假名 + 事後問責」的法律制度層條件；本文 CB-Justice 是 T 三件式的規範對偶，T 處理法律制度層條件，CB-Justice 處理 holder-centric 設計轉換的規範前提。兩者合取結構同構，承擔的工作層級不同。具體接合點：article 04 的 R（Remedy）對應本文 C3（爭議裁決機關），R 與 C3 在台灣脈絡下落在同一雙軌救濟體系；article 04 的 A（Authority）對應本文 C2（verifier 認證機關），兩者都需要被 conformity assessment body 認證的義務主體。

**與 article 05（sybil-resistance-cost-benefit）**。Article 05 IT' 不可能三角處理 sybil resistance 工程張力上限（無法同時拉滿 sybil resistance、隱私、可審計三件事）；本文 CB-Justice 處理規範前提（最弱勢者基本益品 + 民主公民身分不被剝奪）。IT' 與 CB-Justice 同樣是合取結構但用於不同層級。具體接合點：article 05 SA-3 / SA-4 的「中強因果論證」上限與本文 SA-4 的「量化非預測」立場一致；article 05 的「sybil resistance 不可能拉滿」與本文「holder-centric 規範優越非工程事實」立場一致。

**與 prompt 11（wallet-as-essential-facility）**。Prompt 11 把 wallet 視為 essential facility 的工程義務基礎；本文 § 4.2 C1 預設安全 UX 為 essential facility 的 universal design 強制條款提供具體規範依據（WCAG 2.2 SC 對應條款）；§ 6.2 B1 商業 vs 政府義務規範類別差異為 essential facility 的義務分類提供論證。

**與 prompt 15（civic-proof-inclusion-rights）**。Prompt 15 把 inclusion rights 視為 civic proof 的核心；本文 § 5 量化估計（320-480 萬中位排除）+ § 6.2 B4 數位落差多維交叉為 inclusion rights 提供量化基礎；§ 7.3 教育投資與 home visit 為 inclusion rights 的具體政策工具。

## 八、結論

從 MOICA 到 TW DIW，從 issuer-centric 到 holder-centric，民主成本在四個面向重新分配。Rawls 差別原則 + Anderson 關係平等構成的 CB-Justice 雙重判準，與 article 03 H1' 三道牆、article 04 T 三件式、article 05 IT' 不可能三角同樣是合取結構，但用於不同層級；CB-Justice 是 holder-centric 設計轉換的規範前提，要求最弱勢者的基本益品與民主公民身分都不被剝奪。三項分層強制補強條件（C1 軟強制 UX、C2 硬強制 verifier 認證、C3 雙軌強制爭議裁決）必須同時到位；台灣量化估計顯示無補強下中位 320-480 萬人實質排除，三補強齊備可降至 65-110 萬，72.5-83.8% 降幅。Holder-centric 的規範優越並非工程事實；要讓自主、最小揭露、可組合的允諾真的兌現，配套必須先到，紙本、客服、委任三條替代路徑的法律地位必須由立法明文保障。

## 參考資料

1. 數位發展部《行動自然人憑證（TW DIW）試辦計畫說明》2024。來源等級 C。
2. 內政部憑證管理中心《憑證實務作業基準》。來源等級 C。
3. Regulation (EU) 2024/1183 (eIDAS 2.0). OJ L 2024/1183. 來源等級 A。
4. NIST SP 800-63-4 ipd (2024-08). 來源等級 A。
5. W3C Verifiable Credentials Data Model 2.0 (2024-05 Recommendation). 來源等級 A。
6. ISO/IEC 18013-5:2021 mDL. 來源等級 A。
7. Allen, C. (2016). *The Path to Self-Sovereign Identity*. 來源等級 A。
8. Cameron, K. (2005). *The Laws of Identity*. Microsoft White Paper. 來源等級 A。
9. 對應本系列 article 03（digital-association-empirical-test）H1' 三道牆假設。
10. 對應本系列 article 04（pseudonymous-participation-legal）T 三件式（Trigger / Authority / Remedy）。
11. 對應本系列 article 05（sybil-resistance-cost-benefit）IT' 不可能三角。
12. SA-1 紅線 1：issuer-centric / holder-centric 是責任分配光譜。
13. 內政部憑證管理中心《憑證實務作業基準》。來源等級 C。
14. 數位發展部《行動自然人憑證（TW DIW）試辦計畫說明》2024；TW DIW 信任清單錨定公共鏈，技術細節（chain ID / 合約位址 / DID method）尚待官方公開文件補充。來源等級 C。
15. Regulation (EU) 2024/1183, Article 5a. 來源等級 A。
16. NIST SP 800-63-4 ipd (2024-08)。來源等級 A。
17. Apple Wallet 服務條款 § 8。來源等級 C。
18. GovTech Singapore 2024；World Bank ID4D 2024 *Identification for Development Global Dataset*。來源等級 A。
19. NIST SP 800-63-4 ipd (2024-08), § 4.3 Subscriber-Controlled Wallets。來源等級 A。
20. SA-1 紅線 2：四面向細分為 7 項操作化指標。
21. 國發會 2024 公開簡報；數位發展部《行動自然人憑證（TW DIW）試辦計畫說明》2024。來源等級 C。
22. ENISA 2024 *Mobile eID and mDL Trust Framework Report*, Chapter 4。來源等級 A。
23. OpenID4VCI / OpenID4VP Specifications。來源等級 A。
24. EU EUDI Wallet ARF, 2025-12 Cooperation Group iteration（歷史快照 v1.4.1, 2024-12）, Chapter 5。來源等級 B。
25. Regulation (EU) 2024/1183, Article 5a。來源等級 A。
26. Apple Wallet 服務條款 § 8。來源等級 C。
27. W3C VC Data Model 2.0；ISO/IEC 18013-5:2021 mDL；AAMVA 2024 mDL Implementation Guidelines v1.4。來源等級 A。
28. SA-1 紅線 3：成本轉移系統性放大三軸不平等。
29. NCC 2023《通訊傳播市場現況及通訊使用行為調查》。來源等級 A。
30. 教育部 2023《成人數位機會與素養調查》。來源等級 A。
31. 對應本系列 article 03 SA 結構與工程結構分析。
32. 對應本系列 article 05 IT' 不可能三角分析。
33. SA-2 紅線 A：規範性主張不是必然性主張。
34. Rawls, J. (1971). *A Theory of Justice*, § 11 + § 46。來源等級 A。
35. Rawls, J. (1971). *A Theory of Justice*, § 16；Rawls, J. (2001). *Justice as Fairness: A Restatement*, § 17。來源等級 A。
36. Rawls, J. (1971). *A Theory of Justice*, § 67。來源等級 A。
37. Anderson, E. (1999). *What is the Point of Equality?*. *Ethics* 109(2), 287-337。來源等級 A。
38. Anderson, E. (1999). *Ethics* 109(2), 287-289 (Anderson 對 luck egalitarianism 的攻擊)。來源等級 A。
39. SA-2 § 3.2 G_w 操作化清單。
40. 對應本系列 article 03 H1' 三道牆。
41. 對應本系列 article 04 T 三件式。
42. 對應本系列 article 05 IT' 不可能三角。
43. Hayek, F. A. (1945). *The Use of Knowledge in Society*. *American Economic Review* 35(4)；Hayek, F. A. (1960). *The Constitution of Liberty*；Hayek, F. A. (1973-1979). *Law, Legislation and Liberty* (Vols. 1-3)。來源等級 A。
44. Sowell, T. (1980). *Knowledge and Decisions*. Basic Books。來源等級 A。
45. SA-2 § 6 Hayek-Sowell 反論吸收結論。
46. Eubanks, V. (2018). *Automating Inequality*. St. Martin's Press；World Bank Findex (2021 / 2023) Special Module on Digital ID Inclusion。來源等級 A。
47. SA-2 § 6.2 knowledge-localization 反過來支持基線並行論點。
48. Sen, A. (1999). *Development as Freedom*. Knopf；Sen, A. (2009). *The Idea of Justice*；Fraser, N. (1995). *From Redistribution to Recognition?*. *New Left Review* I/212, 68-93；Nussbaum, M. (2011). *Creating Capabilities*. 來源等級 A。
49. SA-2 § 5.4 雙重判準對 SA-1 四面向逐項檢驗。
50. SA-3 紅線一：補強條件分層強制（C1 軟 / C2 硬 / C3 雙軌）。
51. Regulation (EU) 2016/679 (GDPR), Article 25(2)。來源等級 A。
52. Cavoukian, A. (2009). *Privacy by Design: The 7 Foundational Principles*。來源等級 A。
53. Sunstein, C. R. (2014). *Why Nudge?*. Yale UP, Chapter 2。來源等級 A。
54. Madrian, B. C., & Shea, D. F. (2001). *The Power of Suggestion*. *Quarterly Journal of Economics* 116(4), 1149-1187。來源等級 A。
55. W3C Verifiable Credentials Data Model 2.0 (2024-05 Recommendation)。來源等級 A。
56. ISO/IEC 18013-5:2021 mDL。來源等級 A。
57. IETF draft-ietf-oauth-selective-disclosure-jwt (2024)。來源等級 A。
58. Hartzog, W. (2018). *Privacy's Blueprint*. Harvard UP。來源等級 A。
59. W3C WCAG 2.2 (2023-10 Recommendation)。來源等級 A。
60. Schaub, F., Balebako, R., & Cranor, L. F. (2017). *Designing Effective Privacy Notices and Controls*. *IEEE Internet Computing* 21(3), 70-77。來源等級 A。
61. W3C WCAG 2.2 SC 1.4.3 / 1.4.4 / 1.4.10。來源等級 A。
62. WHO 2019 *World Report on Vision*。來源等級 D。
63. W3C WCAG 2.2 SC 2.5.7 / 2.5.8。來源等級 A。
64. Carmeli, Patish & Coleman (2003) 老年精細動作研究。來源等級 D。
65. UK Government Digital Service 2023 *Service Manual* + *Assisted Digital Strategy*。來源等級 D。
66. Section 508 of the Rehabilitation Act of 1973, 29 U.S.C. § 794d。來源等級 A。
67. Regulation (EU) 2024/1183, Article 5a / Article 6a。來源等級 A。
68. ETSI EN 319 401 V2.3.1 (2021-05). *General Policy Requirements for Trust Service Providers*。來源等級 A。
69. ETSI EN 319 411-1 V1.4.1 (2023-10)。來源等級 A。
70. ETSI EN 319 411-2 V2.5.1 (2023-10)。來源等級 A。
71. ISO/IEC 27701:2019. PIMS。來源等級 A。
72. ISO/IEC 29115:2013. Entity Authentication Assurance Framework。來源等級 A。
73. France Identité ANSSI Report 2025。來源等級 B。
74. Norsk Regnesentral (2021). *Digital Identity in the Nordics: Lessons and Limits*. NR Notat DART/01/2021。來源等級 B。
75. Hartzog, W. (2018). *Privacy's Blueprint*. Harvard UP, Chapter on design-as-law。來源等級 A。
76. EU EUDI Wallet ARF, 2025-12 Cooperation Group iteration（歷史快照 v1.4.1, 2024-12）, Chapter 5 (relying party 整合成本估計)。來源等級 B。
77. 中華民國消費者保護法 1994 / 2015 修法第 43-47 條。來源等級 B。
78. 中華民國個人資料保護法 2010 / 2023 修法第 28-31 條。來源等級 B。
79. Solove, D. J., & Hartzog, W. (2014). *The FTC and the New Common Law of Privacy*. *Columbia Law Review* 114(3), 583-676。來源等級 A。
80. Directive 2013/11/EU (ADR Directive)。來源等級 A。
81. Council of Europe Convention 108+。來源等級 B。
82. Allmänna reklamationsnämnden (ARN) 2023 *Årsredovisning*。來源等級 D。
83. ENISA 2024 *Mobile eID and mDL Trust Framework Report*, 三方責任配置。來源等級 A。
84. SA-3 紅線：嚴禁把消保法寫成監管打壓。
85. 中華民國消費者保護法 1994 立法理由書。來源等級 B。
86. SA-4 § 3 三層門檻互不重疊估計。
87. NCC 2023《通訊傳播市場現況及通訊使用行為調查》。來源等級 A。
88. NCC 2023 分齡資料；衛福部 2022《老人狀況調查》。來源等級 A。
89. Counterpoint Research / GfK 2024 *Taiwan Smartphone Market*。來源等級 C。
90. 教育部 2023《成人數位機會與素養調查》。來源等級 A。
91. 國發會 2022《數位機會調查》。來源等級 A。
92. 衛福部 2021《身心障礙者生活狀況及需求調查》。來源等級 A。
93. 台灣失智症協會《112 年台灣失智症人口推估報告》2024。來源等級 B。
94. 勞動部 2024《移工管理及運用調查》；移民署 2024《新住民生活需求調查》。來源等級 A。
95. SA-4 § 4 三情境量化估計。
96. 內政部戶政司《人口統計月報》2025-03。來源等級 A。
97. 國發會 2024 公開簡報；數位發展部《行動自然人憑證（TW DIW）試辦計畫說明》2024。來源等級 C。
98. Khera, R. (2017). *Impact of Aadhaar on Welfare Programmes*. *EPW* 52(50)。來源等級 A。
99. Anderson, E. (1999). *Ethics* 109(2), 287-337。來源等級 A。
100. SA-4 § 5 反事實情境設計。
101. SA-4 § 5.4 反事實 D 剩餘排除人口分布。
102. SA-4 § 6 跨國對照。
103. Digitaliseringsstyrelsen (Denmark) 2023 *MitID Alternative Channels Evaluation Report*。來源等級 D。
104. Défenseur des Droits 2022 *Dématérialisation et inégalités d'accès aux services publics*；INSEE 2023。來源等級 D。
105. Khera, R. (Ed.) (2019). *Dissent on Aadhaar*. Orient BlackSwan；Drèze, J., Khalid, N., Khera, R., & Somanchi, A. (2017 / 2020). *Aadhaar and Food Security in Jharkhand*. *EPW* 52(50) / 55(16)。來源等級 A。
106. Pew Research 2023 *Mobile Phone Sharing in U.S. Households*。來源等級 D。
107. e-Estonia 2024；OECD (2023). *Digital Government Review of Estonia*。來源等級 A。
108. SA-5 § 3 跨國七案例對照矩陣。
109. Finansinspektionen 2024 *BankID 監理年度報告*；Pensionsmyndigheten 2023 *Tillgänglighet och digital inkludering*。來源等級 D。
110. OECD (2020). *Digital Government Review of Sweden*。來源等級 A。
111. SA-5 § 3.1 北歐 BankID 銀行業 KYC 起點限制。
112. Allmänna reklamationsnämnden (ARN) 2023 *Årsredovisning*。來源等級 D。
113. OECD (2020). *Digital Government Review of Sweden*；OECD 2024 *Trust in Public Institutions*。來源等級 A。
114. Norsk Regnesentral (2021). *Digital Identity in the Nordics: Lessons and Limits*. NR Notat DART/01/2021。來源等級 B。
115. e-Estonia 2024；OECD (2023). *Digital Government Review of Estonia*。來源等級 A。
116. RIA 2023 *Cyber Security Annual Report*。來源等級 A。
117. RIA 2023 *Cyber Security Annual Report*；Estonia 2007 cyberattack response 文獻。來源等級 A。
118. CVE-2017-15361 (ROCA vulnerability). National Vulnerability Database；RIA 公告。來源等級 A。
119. GovTech Singapore 2024；World Bank ID4D 2024。來源等級 A。
120. SA-1 紅線 4 + SA-5 紅線 5.5：holder-centric ≠ 單向技術趨勢。
121. SA-5 § 3.4 印度 Aadhaar 排除統計。
122. Khera, R. (2017). *Impact of Aadhaar on Welfare Programmes*. *EPW* 52(50)。來源等級 A。
123. Drèze, J., Khalid, N., Khera, R., & Somanchi, A. (2017 / 2020). *Aadhaar and Food Security in Jharkhand*. *EPW* 52(50) / 55(16)；Anand & Mishra NIPFP 2019。來源等級 A。
124. Supreme Court of India (2018). *Justice K.S. Puttaswamy v. Union of India*, (2019) 1 SCC 1。來源等級 A。
125. DINUM 2024；INSEE 2023；ARCEP / CRÉDOC 2023 *Baromètre du Numérique*。來源等級 A/D。
126. SA-5 紅線 5.2：法國 FranceConnect 中產階級成就 + 分配性失敗。
127. Défenseur des Droits 2022 *Dématérialisation et inégalités d'accès aux services publics*。來源等級 D。
128. Cour des comptes 2022 *Rapport public annuel*。來源等級 D。
129. GAO (2024). *Digital Identity: Login.gov Implementation Audit*. GAO-24-105663。來源等級 A。
130. Brewster (2022). *ID.me Glitches Lock Out Black Americans*. *Forbes*。來源等級 D。
131. GAO (2024). *Digital Identity: Login.gov Implementation Audit*. GAO-24-105663。來源等級 A。
132. KISA 2024 모바일 신분증 정책 보고서；Korea MOIS 2024。來源等級 A。
133. KISA 2024 모바일 신분증 정책 보고서。來源等級 A。
134. Lee & Park (2024). *Mobile ID and the Limits of Privacy by Design*. *Journal of Korean Law* 24(1)。來源等級 B。
135. SA-5 紅線 5.4：商業 vs 政府 wallet 義務 = 規範類別差異而非程度差異。
136. SA-5 紅線 5.3：商業 wallet 市場誘因可運用槓桿。
137. Apple Wallet 服務條款；Google Wallet 服務條款。來源等級 C。
138. OECD (2020). *Digital Government Review of Sweden*。來源等級 A。
139. RIA 2023 *Cyber Security Annual Report*；OECD (2023). *Digital Government Review of Estonia*。來源等級 A。
140. Cour des comptes 2022 *Rapport public annuel*。來源等級 D。
141. GAO (2024). *Digital Identity: Login.gov Implementation Audit*. GAO-24-105663。來源等級 A。
142. 國發會 2023《數位包容白皮書》；數位發展部 2024《數位平權發展調查》。來源等級 C。
143. UNESCO (2023). *Adult Digital Skills*。來源等級 A。
144. SA-5 § 4.3 KYC 銜接路徑分析。
145. Défenseur des Droits 2022；INSEE 2023。來源等級 D。
146. Khera, R. (2017). *EPW* 52(50)。來源等級 A。
147. Brewster (2022). *Forbes*；GAO (2024). GAO-24-105663。來源等級 A/D。
148. van Dijk, J. (2020). *The Digital Divide*. Polity。來源等級 A。
149. Sweden *Förvaltningslagen* 2017 修訂第 6 條 (Justitiedepartementet Prop. 2016/17:180)。來源等級 A。
150. Estonia *Avaliku teabe seadus* (Public Information Act)。來源等級 A。
151. Cour des comptes 2022；Défenseur des Droits 2022。來源等級 D。
152. Khera, R. (Ed.) (2019). *Dissent on Aadhaar*. Orient BlackSwan。來源等級 A。
153. Digitaliseringsstyrelsen (Denmark) 2023 *MitID Alternative Channels Evaluation Report*。來源等級 D。
154. ENISA 2024 *Mobile eID and mDL Trust Framework Report*。來源等級 A。
155. W3C WCAG 2.2 SC 1.4.3 / 1.4.4 / 1.4.10 / 2.5.7 / 2.5.8。來源等級 A。
156. SA-3 § 5.3 三條 C3 機關建構路徑分析。
157. EU EUDI Wallet ARF, 2025-12 Cooperation Group iteration（歷史快照 v1.4.1, 2024-12）, Chapter 5。來源等級 B。
158. UK Government Digital Service 2023 *Assisted Digital Strategy*。來源等級 D。
159. Digitaliseringsstyrelsen (Denmark) 2023 *MitID Alternative Channels Evaluation Report*。來源等級 D。
160. Pensionsmyndigheten 2023 *Tillgänglighet och digital inkludering*。來源等級 D。
161. 教育部 2023《成人數位機會與素養調查》；國發會 2022《數位機會調查》。來源等級 A。
162. 對應本系列 article 04 / 05 + prompt 11 / 15 接合分析。
