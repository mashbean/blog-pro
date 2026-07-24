---
title: "加州數位身分生態系：DMV Wallet 與 Career Passport 的政策分析"
description: "加州在沒有國家級身分計畫、甚至沒有一部框架法的條件下，靠 DMV Wallet 與 Career Passport 兩條制度上分立的軌道，以預算附帶法案、行政框架與既有教育資料基礎設施，拼接出政府可驗證憑證生態系。本文考據其政治、預算、法制譜系、招標實務與民間回應，並與台灣由數位發展部主導的數位憑證皮夾做條件性對照。「生態系」是分析者事後的讀法，非加州政府的自我框架。"
pubDate: 2026-07-24
draft: false
tags: ["digital-identity", "california", "mDL", "career-passport", "verifiable-credentials", "procurement-as-policy", "taiwan-comparison", "no-phone-home", "policy-analysis"]
lang: "zh-TW"
aiModel: "Claude Opus 4.8"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-07-23-california-digital-id-ecosystem"
aiGeneratedDate: 2026-07-24
humanReviewed: false
category: "數位身分政策"
slug: "2026-07-23-california-digital-id-ecosystem"
---

## 一、兩條軌道與一個分析者的框架

2026 年 7 月的加州同時進行著兩件表面無關的事。7 月 13 日，州長 Gavin Newsom 簽署 SB 169，把行動駕照（mobile driver's license, mDL）的試辦人口上限從 15% 一舉拉到 60%，涵蓋約當六成、逾一千六百萬名加州駕照持有人<sup>1</sup>。往前推不到一個月，6 月 17 日，加州社區大學體系啟動 California Career Passport 的十週試辦，讓學習者把學歷、軍旅、職訓與志工等紀錄裝進可驗證憑證（Verifiable Credentials, VC），組成一份可攜帶、可選擇性出示的學習與就業紀錄（Learning and Employment Records, LER）<sup>2</sup>。一邊是駕照的數位化，一邊是學習就業紀錄的數位化，分屬兩個部會、兩套經費、兩條法源。

把這兩件事讀成同一個「數位身分生態系」，是本文分析者的建構，屬於湧現而非設計。查閱州長辦公室（gov.ca.gov）先後發布的多份新聞稿可見一個一致的現象，談 Career Passport 的稿件從不提 DMV Wallet<sup>3</sup>，談 DMV 數位轉型的稿件也從不提 Career Passport<sup>1</sup>。兩者起源不同、時間序不同、主管機關不同，加州政府從未把它們綁進同一敘事。本文採用「生態系」這個視角來對照兩條軌道，同時把這個視角標明為外部觀察，避免製造一個並不存在的統一大戰略。

承重的機制同樣值得先講清楚。加州長出這批政府可驗證憑證，靠的是一連串預算附帶法案（budget trailer bill）加上一套沒有框架母法的行政框架，把它歸因於州長的統一意志會失準。行文一路會區分「輸入端」與「產出端」、「軟規範層」與「已生效法律層」這幾組層級，因為加州模式的成敗、優勢與批評，多半就落在這些層級的落差上。

時間定位也需要說明。本文寫於 2026 年 7 月下旬，此刻 Career Passport 的 Phase 2 試辦（6 月 17 日至 8 月 24 日）正在進行、決標預定 10 月初；SB 169 才剛簽署十餘日。整套生態系仍在進行式中，以下是一次中途快照，而非結案報告。

## 二、政治與預算：兩條軌道各自的推力

Career Passport 這一端，州長議程確實是直接的觸發近因。2023 年 8 月 31 日的行政命令 N-11-23（Executive Order N-11-23）指示發展職涯教育總體規劃（Master Plan for Career Education），首度引入「career passport」概念<sup>4</sup>；框架於 2024 年 12 月預告、2025 年 4 月正式發布，配上一籃子上看一億美元的投資語言<sup>3</sup><sup>6</sup>。這條軌道有兩項限定。其一，行政命令的前言自陳，它是在收攏過去五年既有的數十億美元投資、重新品牌化於 Master Plan 旗下，議程的「命名」晚於「經費」。其二，加州社區大學總監辦公室（California Community Colleges Chancellor's Office, CCCCO）的 Vision 2030 早已把 Career Passport 與先前學習抵免列為社區大學主導項目，校長 Sonya Christian 於 2023 年 6 月上任後即以此為方向<sup>12</sup>；而 Cradle-to-Career（C2C）跨機關資料系統則由 2021 年的 AB 132 設立，構成 LER 在技術上得以依附的資料骨幹<sup>13</sup>。就 Career Passport 而言，較準確的因果分層是資料基礎設施為結構前置、行政命令為觸發與命名、社區大學體系為共同作者、一次性預算為節奏與存續的調節閥。

DMV 這一端的起源完全不同。加州車輛管理局（California Department of Motor Vehicles, DMV）的現代化起於 2019 年的服務崩潰危機，當時民眾排隊數小時、REAL ID 換發壅塞、選民登記誤登，Newsom 因此成立改造專案小組、延攬矽谷出身的局長主導轉型<sup>5</sup>。mDL 於 2021 至 2022 年度預算取得約一千萬美元開發經費、2023 年 8 月上線，整條時間序都早於職涯教育行政命令。州長議程對 DMV 軌道的作用是收割與加速器，SB 169 把上限拉到 60% 即為此類收割<sup>1</sup>，而非 DMV 數位身分的起源。把 DMV 納入「Newsom 職涯教育議程」的推力，屬於過度歸因。

一次性撥款帶來脆弱性，這點大致成立，但脆弱度分佈不均，取決於錢坐落於哪個池。DMV 的 mDL 坐落於自給自足的機動車輛基金（Motor Vehicle Fund，DMV 年收逾一百二十億美元）並帶有使用者採用飛輪，結構上最耐<sup>15</sup>。Career Passport 與學習抵免錨定於憲法保障中小學與社區大學最低經費的 98 號提案（Proposition 98），比裁量型一般基金更耐，但仍是一次性<sup>8</sup>。真正處於「錢用完就停」風險的，是勞動側的裁量型工作力補助，相關經費已從 2022 至 2023 年度的約二十二億美元降到 2026 至 2027 年度提列的約二點五億美元，部分補助恐於下任州長上任時停擺<sup>9</sup>。加州立法分析辦公室（Legislative Analyst's Office, LAO）連兩年以「largely unproven」評語建議否決 Career Passport 相關撥款，計畫仍因 98 號提案錨定而以縮水版存活<sup>7</sup>。

黨派歸因需要大幅節制。數位身分擴散並非民主黨議程的專屬產物。路易斯安那州（Louisiana）的 LA Wallet 於 2018 年即為全美首發，2024 年獲聯邦運輸安全管理局（Transportation Security Administration, TSA）全國機場接受<sup>10</sup>；猶他州（Utah）2025 年以共和黨州長簽署的 SB 260 建立州背書數位身分，走隱私優先路線並獲 ACLU 肯定<sup>11</sup>；LER 概念本身有聯邦跨黨派根源，可上溯商務部 2020 年的白皮書<sup>12</sup>。加上 REAL ID 與 TSA 的聯邦推力，數位身分更接近一場跨黨派的技術治理擴散。Newsom 議程解釋的是加州版本的包裝、節奏與政績收割，而非數位身分是否發生。

## 三、法制譜系：沒有框架法的拼接

加州不存在一部統包型的數位身分或信任框架法律。最接近框架法的立法嘗試，是 2021 至 2022 會期的 SB 1190（California Trust Framework），該案於 2022 年 11 月 30 日「From committee without further action」死於委員會，從未成為法律<sup>18</sup>。與此對照，同屬聯邦體制的猶他州卻以專法建立了統包式、政策先行的州背書數位身分框架<sup>11</sup>。加州選擇窄授權，因此是一個可對照、可質疑的制度選擇，而非美國聯邦體制的必然。

窄授權的載體是預算附帶法案。mDL 的法源並非一部獨立的數位駕照法，其獨立政策版 AB 1503 死於委員會<sup>16</sup>；真正把加州車輛法第六條（Vehicle Code Article 6，§13020 起）寫進法典的，是 2021 年交通預算附帶法案 AB 149（Chapter 81, Statutes of 2021）<sup>17</sup>。其後每一次放寬試辦人口上限也都搭預算附帶法案過關，0.5% 起於 AB 149、5% 來自 2023 年的 SB 125<sup>19</sup>、其後一次交通預算附帶法案調到 15%（該次修法的確切法案編號在現行法典沿革中尚待鎖定，此處不逕行指定）、60% 則由 2026 年的 SB 169 完成<sup>14</sup><sup>20</sup>。Career Passport 的法定身分同理，寫在 2025 年高教預算附帶法案 AB 123（Chapter 9, Statutes of 2025）裡，撥付一次性兩千五百萬美元一般基金，並刻意設計為 CCCCO、Cradle-to-Career 資料辦公室與勞動與勞動力發展署（Labor and Workforce Development Agency, LWDA）三頭共管<sup>21</sup>。窄授權、預算夾帶、分散主管機關，是同一枚硬幣的三面。

值得單獨標記的，是「沒有框架法」與「沒有框架」的差別。加州在行政層確實長出了一個自我宣稱為 comprehensive 的數位身分框架，由加州數位科技廳（California Department of Technology, CDT）主理，含跨機關中介的加州身分閘道（California Identity Gateway）。它在功能上逼近框架，法律位階卻只靠州資訊長的首長權與預算撥款項目支撐，其數位身分試辦與法定報告義務的授權出自預算法的撥款項目 7502-001-0001<sup>22</sup>。框架的功能存在，框架的法律不存在。加州靠行政首長權與預算撥款項目撐起數位身分，始終沒有一部母法，這件事本身就是加州特徵的核心。

窄授權的限制需要拆成兩面看。一面是治理限制，碎片化帶來互通與續命的難題，法典上 §13020 至今仍是 pilot、要求 DMV 提交評估報告，實務上卻已是準常態基礎設施，形成「永久試辦」現象<sup>14</sup>；部分二手來源稱該試辦「至 2026 年 6 月 30 日止」，但現行法典文本並無明確落日條款，落日狀態待確認。另一面則是隱私策略。窄授權恰好是電子前哨基金會（Electronic Frontier Foundation, EFF）等隱私倡議者積極主張的方向，他們反對把 mDL 養成國民身分資料庫、反對發證方回呼追蹤、反對把身分需求擴張到原本無須出示身分的場景<sup>47</sup>。一部賦予廣泛強制使用權的統包框架法，對隱私未必更好。窄授權因此部分是深思熟慮的護欄，而非單純的缺陷。

## 四、DMV Wallet 軌道：供給側平台化，需求側落後

DMV 這條軌道須拆三層來看，第一層在供給端已呈現清楚的平台化。發證側的憑證已推上四個錢包，除自營的 CA DMV Wallet<sup>23</sup> 外，還接上 Google Wallet（2024 年 8 月）<sup>24</sup>、Apple Wallet（2024 年 9 月）<sup>25</sup>與 Samsung Wallet（2026 年 4 月）<sup>26</sup>。自營錢包由 SpruceID 以開源元件打造<sup>27</sup>，DMV 另釋出開源驗證器 OpenCred，支援可驗證憑證 API、OpenID for Verifiable Presentations（OID4VP）與 ISO/IEC 18013-5 根憑證<sup>28</sup>。生態動員也具體，年齡驗證工具 TruAge 整合進錢包、於沙加緬度便利店驗齡並轉為匿名 token<sup>29</sup>，DMV 更以兩場社群黑客松聚攏公私部門開發者<sup>30</sup>。就建置與意圖而言，「把 mDL 養成平台」這個判斷成立。

第二層在需求與驗證端明顯落後。實際可用的高頻場景高度集中在 TSA 機場安檢與少數零售驗齡，媒體與產業分析一致指出發證數遠大於受理端<sup>34</sup><sup>35</sup>。規模數字須標明時點與口徑，四種口徑不可互換。截至 2026 年 7 月，累計逾三百五十萬名加州人「已申請」mDL<sup>1</sup>；2026 年 4 月官方稱「有效」mDL 約一百七十至一百八十萬張，其中約九十萬張在自營錢包<sup>26</sup>；2025 年底供應商稱「已發證」逾兩百萬張<sup>27</sup>。即便以最寬鬆的申請數計，對比 SB 169 之前的上限與加州約兩千八百萬駕照人口，滲透率仍在個位數到十幾個百分點之間。試辦上限已非主要瓶頸，瓶頸轉移到 verifier 稀薄與隱私治理爭議。

第三層是與 REAL ID 的關係，兩者互補而非取代。官方明文要求使用者繼續攜帶實體證件，mDL 於機場之所以可用，是因為它是 REAL ID 相容憑證的數位鏡像<sup>32</sup>。憑證也開始向外生長到其他政府服務，例如社區大學透過 CCCCO 把「以 CA DMV Wallet 核驗」併入招生與助學金身分核驗管線，符合美國國家標準暨技術研究院（NIST）身分保證等級二（IAL2），用於打擊冒名詐領<sup>33</sup>。平台化敘事有一個隱性的單點依賴，自營錢包僅承載約九十萬張有效憑證，其餘增量高度依賴 Apple、Google、Samsung 三大平台錢包的分發，以及 TSA 這一個最高頻的受理端<sup>26</sup>。分發引擎是外借的，這是策略的結構性風險。

2026 年 6 月 24 日，DMV 與 CCCCO 在沙加緬度合辦 California Digital Identity (mDL) and Wallet Showcase，以全日活動展示公私部門的憑證應用<sup>31</sup>。官方頁面未載出席人數，亦未見獨立媒體報導其規模，故現場人數在此不做量化陳述。

這場活動的共同主辦本身值得記上一筆。DMV 屬駕照軌道，CCC 數位創新中心（負責 Career Passport 的單位）屬學習就業紀錄軌道，兩者同台辦一場數位身分展示，是兩條在官方敘事裡各走各的軌道，在示範與生態層面公開交會的少數可查證跡象<sup>31</sup>。這種交會不改變兩者法源與經費各自獨立的事實，卻透露出一件事，生態系的向外生長往往先發生在示範活動與人際網絡，其後才可能反映到正式的政策文件。

<!-- 待補第一手：mDL Showcase 現場的 verifier 到位程度與示範場景觀察（勿寫出席者名單/人數） -->

## 五、Career Passport 軌道：採購作為政策工具

Career Passport 的落地載體是一份挑戰式採購。CCCCO 把州級計畫掛在 Foothill-De Anza 社區大學學區（Foothill-De Anza Community College District, FHDA）的採購權下，由 FHDA 擔任會計代理，以 RFP #1980 執行三階段採購；此案由 CCCCO、勞動與勞動力發展署與 Cradle-to-Career 資料辦公室三方共同推動<sup>40</sup>。Phase 1 為概念書、Phase 2 為約十週的現場試辦、Phase 3 依試辦發現提出正式的 production 提案，合約最長五年<sup>36</sup>。這份採購文件把政策目標寫成門檻式的通關閘與計分條件，因此本身成為執行政策的載體。

輸入端的政策工具化證據充分。RFP 明列 W3C 可驗證憑證資料模型 2.0（Verifiable Credentials Data Model 2.0）與 Open Badges 3.0 為必要標準，僅用專有交換協定的提案不予考慮<sup>37</sup>；互通性被列為現場試辦中的硬性通關項，State 端簽發的憑證須在真實學習者面前由 District 端成功驗證，失敗僅一次補救否則出局<sup>36</sup>。選擇性揭露（selective disclosure）與不可連結性（unlinkability）被寫成門檻條件，系統不得在持有人不知情或不能控制下，建立憑證於何處出示、揭露了什麼的紀錄；無障礙定為 WCAG 2.1 AA<sup>37</sup>。特別值得標記的是時點，W3C VC 2.0 遲至 2025 年 5 月 15 日才成為正式建議（Recommendation）<sup>41</sup>，採購等於在標準剛定案時就以之為硬門檻，是以採購推動標準採用。開放標準（Open Badges 3.0 亦建於 W3C VC 之上<sup>42</sup>）因此被落成可被淘汰的技術閘門。

RFP #1980 的評選採跨階段技術評審，評審依 RFP 明訂的門檻與計分條件審閱各階段文件<sup>36</sup>。四家入選廠商（Auth9／Certree、Infosys、SpruceID／Spruce Systems、Territorium）經 FHDA 董事會 6 月 8 日公開議程與媒體報導具名，董事會通過上限五十萬美元的試辦合約、每家約十二點五萬美元<sup>38</sup><sup>39</sup>。就投標家數，主要媒體報導稱收到 41 件投標，此數字由 FHDA 董事會紀錄與媒體報導交叉支持，取其保守讀法可寫「逾四十家」<sup>39</sup>。新創與系統整合巨頭同場競逐，市場多元化是這個採購設計的可觀察產出。

採購把可驗證憑證的技術判準前移到評選階段，本身就對評審提出很高的門檻。要判斷一份標案是否真正符合 W3C VC 2.0、OID4VP 與 ISO 18013-5，需要熟悉這批仍在演進的標準，而這類專業多半集中在 W3C、去中心化身分基金會（Decentralized Identity Foundation, DIF）、OpenID Foundation 與各國憑證計畫所構成的社群。挑戰式採購因此帶有雙重性格，既是行政程序，也把標準社群的判斷力借進了政府採購。

<!-- 待補第一手：RFP 技術評審視角，跨國評審團在公開評選架構下如何協作（勿寫個別分數/標書內容/排名/淘汰理由） -->

產出端的因果效力則未證，必須正面標註兩道限定。第一道是層級限定，採購精巧只證明政策意圖被有效編碼進輸入端，並不等於全州規模化與真實就業結果會實現。Phase 2 的每個學習者群組約五十人、在無輔助的條件下受測，這與 production 階段「服務數百萬加州人、對接所有發證方、跨所有驗證方」之間隔著數量級，pilot 到 production 的死亡谷真實存在，RFP 自己也保留在任一階段中止採購之權<sup>36</sup>。第二道是財政限定，計畫的法定資源是 AB 123 的一次性兩千五百萬美元、用於開發而非長期營運<sup>21</sup>，州端的持續資金尚未確立。

Phase 2 的十週試辦讓真實學習者在入選廠商的錢包中實測憑證的取得與出示，涵蓋學術成績、學位與職業類憑證等真實學習者會用到的類型<sup>36</sup>。四家入選廠商各自提供受測介面，實際的錢包操作體驗與憑證類型，留待真正用過的人來描述。

<!-- 待補第一手：以 User Cohort 身分實測入選廠商錢包 claim 憑證的 UX 心得（掃 QR、OTP、跨站傳遞的摩擦；勿引用未公開的 Phase 2 內部技術文件或 Live Demo 各廠商未公開細節） -->

最重的反論來自 LER 十年的歷史。跨機構文獻一致指出，LER 的瓶頸長期在需求端的雇主採用，技術早已存在卻未被雇主一致地、有效地使用<sup>44</sup>；智庫分析亦指出承諾與落地之間的落差<sup>44</sup>。Jobs for the Future 自己的示範路線圖坦承「所有計畫都比原預算需要更多時間讓利害關係人轉用 VC」<sup>43</sup>。而 RFP 恰恰把採用推廣、雇主端整合明文劃為 State 與發證方責任、置於錢包廠商範圍之外<sup>37</sup>。政策工具化在它管得到的地方很強，在決定成敗的雇主採用這一環卻使不上力。挑戰式採購另有一種常見失敗態，即「pilot purgatory」，試辦成功後仍要重跑招標與立約，對中小廠商是雙重競賽的負擔<sup>46</sup>。Career Passport 接上既有的 eTranscript California 成績單交換與 C2C 縱貫資料系統<sup>45</sup><sup>13</sup>，這降低了資料層的重造成本，卻無法憑空生出需求端的採用。

## 六、民間回應與標準：批評與建構的共構

加州 mDL 周圍的民間場域，較準確的描述是批評者與建構者高度重疊、循環往復，而非外部倡議施壓、標準機構被動讓步。批評者如 EFF、ACLU、電子隱私資訊中心（EPIC）與民主與科技中心（Center for Democracy & Technology），與建構者如 Kaliya Young、Phil Windley、SpruceID 及 W3C／OpenID 標準社群，長期共聚於同一個場域，即 Kaliya 與 Windley 共同創辦的 Internet Identity Workshop（IIW）。EFF 早在 2024 年 3 月的專文即要求離線可驗證、反對發證方回呼、批評相關標準由封閉團體制定<sup>47</sup>。

規範文字確有實際變動，這一點是最硬的一手證據。美國汽車管理局協會（American Association of Motor Vehicle Administrators, AAMVA）於 2025 年 4 月 17 日發布的 mDL 實作指引 r1.5，把伺服器取回法（server retrieval，即「phone home」回呼）從「選用」改為「禁止」，其版本變更表原文載明此一改動，並要求把 ISO 標準中的相關條文刪除<sup>48</sup>。W3C VC 2.0 於同年 5 月成為正式建議、把資料最小化與選擇性揭露寫入規範層<sup>41</sup>；猶他州 SB 260 更把「不得 phone home」升格為具約束力的州法<sup>11</sup>。

因果關係必須誠實降級。AAMVA 的禁令（4 月 17 日）早於公開的 No Phone Home 運動（6 月 2 日）約六週，後發的運動不可能造成先發的禁令<sup>49</sup><sup>50</sup>。較準確的讀法是，一個運作逾十年、批評者與建構者高度重疊的社群，其隱私共識在 2025 年上半集中外顯為規範文字，而 6 月的公開運動加以命名、鞏固，並向具約束力的州法推進<sup>51</sup>。把 mDL 走向反追蹤歸功於某一場公民運動，會倒果為因；運動的邊際貢獻在於把既成的軟規範公開化，並推動它升級為州法與守住線上通道。

真正尖銳的批評來自層級落差。AAMVA 指引是自我認證的建議，發證機關只需自行聲明未實作伺服器取回，並無獨立稽核，對五十州也無強制力<sup>48</sup>。隱私保障因此停留在軟規範層。反觀把數位身分推進日常的立法動能，卻集中在已生效的法律層且力道更強。聯邦最高法院在 Free Speech Coalition v. Paxton 案（606 U.S. ___，2025 年 6 月 27 日，6 比 3）以中度審查維持德州年齡驗證法，為二十餘州的線上年齡驗證法背書<sup>52</sup>；加州 AB 1043（Digital Age Assurance Act，2025 年 10 月簽署、2027 年生效）要求作業系統層提供年齡訊號<sup>53</sup>；更早的 AB 2273（Age-Appropriate Design Code）雖部分條款在 NetChoice v. Bonta 一案遭第九巡迴上訴法院以模糊性續禁，仍屬同一波把身分驗證推進日常上網的立法<sup>54</sup>。隱私保障停在軟規範層，身分擴張落在已生效法律層，這個層級落差是全文最有力的批評。

年齡驗證立法潮同時打開了一條被 proximity 禁令關上的側翼。伺服器取回禁令只涵蓋近距離情境，線上與無人值守情境走的是 ISO/IEC 18013-7 加 OID4VP 的通道，其可信驗證方清單與繫結尚未定義完整<sup>55</sup>。EFF 指出即使有零知識證明與選擇性揭露，仍無法阻止驗證方過度索取，也無法消除 IP 與裝置後設資料的蒐集<sup>58</sup>；學術研究則指出現行 mDL 實作會讓跨驗證方的交易被關聯，存在可連結性與後設資料洩漏風險<sup>57</sup>。加州若當年選了伺服器取回架構而非裝置取回與開源路線，這一大批已發出的憑證會憑空多出一條運作中的追蹤軌道，隱私之戰就會從預防變成拆除。同一套在 mDL 場域打磨出的反追蹤規範，會被建於 W3C VC 之上的 Career Passport 繼承，一張會回呼的學習就業憑證等於讓州政府看見持有人每一次求職出示的紀錄，治理風險與 mDL 同構。ACLU 因此把猶他州列為唯一在問對問題的州，凸顯多數州仍停在自我認證的軟規範<sup>11</sup>。

## 七、台灣對照：制度位置決定風險型態

台灣數位憑證皮夾與加州同採 W3C 可驗證憑證路線、同面對隱私倡議壓力，但制度位置的差異導致風險型態不同。這組結構性類比要成立，須先更正一項時程前提。數位發展部（Ministry of Digital Affairs, moda）主導的數位憑證皮夾，其「試營運暨應用體驗記者會」在 2025 年 12 月 17 日舉行，App 同步上架，官方一律稱「試營運」而非正式上線，目前開放的憑證以三大電信門號電子卡為主<sup>56</sup>。任何把啟動時點寫成 2025 年年中的說法皆與官方一手來源不符，此處以 moda 新聞稿為準。（本節台灣事實均以官方與媒體一手來源查證，不援引任何個人既有報告的數字。）

「中央統包對多入口」的二分，經實證後應降為程度差異。台灣在皮夾之前早已是多入口，內政部的自然人憑證與行動自然人憑證（TW FidO）<sup>63</sup>、衛福部的健保快易通、台北市的台北通各自並存。moda 皮夾的定位是把既有多入口收斂進單一載具的事後整合器，而非從零建立的單一入口。加州側同理有中央成分，DMV 是無全國身分證的美國事實上的身分機關，CCCCO 也統籌上百校共用同一核驗管線。差異因此在重心與風險型態，而非有無。

台灣的風險精確措辭是強制同意加上數位總歸戶。公民團體的具體憂慮來自台北通前例，即把公共服務綁進單一 App、以概括授權蒐集個資，一度引發近萬人連署<sup>64</sup>；以及 2021 年晶片身分證（New eID）因缺專法喊卡的創傷記憶，行政院於當年 1 月宣布暫緩、要求完善法制後再推動<sup>61</sup>。台灣人權促進會（Taiwan Association for Human Rights, TAHR）2026 年 2 月領銜的聯合聲明直指皮夾缺乏法律保障基本權，恐淪為下一個台北通<sup>60</sup>。這些批評指向制度層的三個缺口，即缺專法、缺個資衝擊評估與缺獨立監督，技術架構本身並非爭點。憲法法庭 111 年憲判字第 13 號（健保資料庫案）早已指出欠缺獨立監督機制的違憲問題，在皮夾脈絡重演<sup>62</sup>。目前皮夾並無專法，法源落在電子簽章法與個人資料保護法，立法院的法制研析亦記錄了這個專法缺口<sup>68</sup>。

技術架構有一處須存疑標記。技術媒體描述政府信任清單記錄在區塊鏈上以防竄改<sup>66</sup>，但 moda 面向民眾的一手材料只講「分散式」「選擇性揭露」「國際標準」，刻意不凸顯區塊鏈一詞<sup>59</sup>；沙盒階段的技術報導亦以「分散式」「開放原始碼」描述其架構<sup>65</sup>。官方稱分散式，技術媒體描述上鏈，鏈別為公有或聯盟在可存取的一手來源中未載明，此點列為查證缺口，不逕行斷言。制度基底的差異則必須明列，台灣是主權單一制、有戶政與自然人憑證傳統，任何全國性數位憑證都直接繼承 New eID 的政治創傷；加州是聯邦制下一州、無戶籍、DMV 是因缺乏全國身分而長出的代償機關。同樣叫數位身分，台灣的參照點是身分證，加州的參照點是駕照，公民想像與政治敏感度並不相同。類比只能做條件性對照。

台灣另有一條加州所無的第三路。g0v 社群在 2026 年 Summit 展示由民間自架發行、驗證、持有三方的開源實作<sup>67</sup>，構成不只批評、還自建系統的建設性倡議路徑，與加州以 EFF 為代表的純倡議路線形成對照。這條民間自架路線在加州的對照物相對稀薄。加州的公民社會力量集中在倡議與標準端，較少見到公民團體自建一整套發行與驗證基礎設施來與政府版本並存。台灣的民間自架之所以長得出來，一部分來自 g0v 十餘年累積的公民科技社群動能，一部分則來自對政府單一信任根的戒心，寧可讓發行、驗證、持有三方能由不同主體分持。以架構分權回應政治不信任，與加州以窄授權、多入口分散風險，指向同一個問題的兩種答法。

<!-- 待補第一手：moda 皮夾與民間自架方案三方伺服器的實測對照（發行/驗證/持有的落地細節） -->

## 八、生態系佈局的優勢與困境

把兩條軌道並置，可以看到加州模式向外生長的證據與反證同時存在。優勢一是碎片化保住了場景創新的自由，DMV 與教育端各自用採購與敏捷迭代塑形生態，若當年通過統包框架法，Career Passport 很可能被要求接入中央身分層與其供應商標準，反而壓縮採購自由度。優勢二是既有資料基礎設施降低了重造成本，eTranscript California 與 C2C 提供了 LER 得以依附的管道<sup>45</sup><sup>13</sup>。優勢三是標準先行，加州在 W3C VC 2.0 剛定案時就以之為採購硬門檻，取得先行者紅利<sup>41</sup>。

困境同樣清楚。四象限盤點可見兩類反證。學術與智庫層面，可連結性研究指出現行 mDL 實作的追蹤風險<sup>57</sup>，LER 落地文獻指出雇主採用的長期瓶頸<sup>44</sup>，LAO 連兩年以「largely unproven」評估 Career Passport 撥款<sup>7</sup>。真實案例層面，SB 1190 框架法死於委員會<sup>18</sup>、verifier 端稀薄<sup>35</sup>、自營錢包分發依賴外部平台<sup>26</sup>，都是向外生長受阻的證據。生態系向外生長是一個進行中的假設，而非已完成的事實。

採購把生態動員也寫進了流程，例如以工作坊形式盤點「採用」這一最難的環節，把雇主與發證方的上線問題攤開討論<sup>36</sup>。這類動員能改善供給端的選商品質與規格一致性，卻改變不了需求端由雇主決定的採用曲線。

<!-- 待補第一手：主持 Design Day「採用之牆」工作站的現場觀察，生態動員時 verifier/雇主端的真實阻力（勿寫未公開的廠商細節或內部技術文件） -->

四象限的收束是一個不對稱。加州在它能控制的輸入端很強，把政策編碼進採購規格、把反追蹤寫進標準；在它控制不了的產出端很弱，雇主採用、平台分發、聯邦受理都不在州端手中。這個不對稱貫穿兩條軌道，也貫穿民間場域的軟規範與硬法律落差。

## 九、誠實邊界與條件性結論

本文的判斷受幾道邊界限制。其一是時間，Phase 2 試辦尚未決標、SB 169 剛簽署十餘日，任何關於成敗的結論都是中途快照。其二是層級，輸入端的政策工具化有充分證據，產出端的規模化與就業結果則未證，兩者不可混為一談。其三是口徑，mDL 的申請、有效、發證數各有時點與定義，滲透率的樂觀讀法多半來自口徑混用。其四是歸因，數位身分是跨黨派、跨州、部分跨國的技術治理擴散，Newsom 議程是加州版本的加速器而非唯一因。

在這些邊界內，可以給出的條件性結論有三。第一，加州確實在沒有框架母法、甚至沒有一部專法的條件下，靠預算附帶法案加行政框架加既有資料基礎設施，拼接出一個政府可驗證憑證生態系；這個生態系是分析者事後的讀法，加州政府自身從未如此框定。第二，採購被有效地當成政策工具，但工具的射程止於輸入端，pilot 到 production 的死亡谷與一次性撥款的財政邊界，決定了它對真實結果的因果效力仍屬未定。第三，民間場域確有批評與建構的共構，也確有規範文字的實際變動，但隱私保障停在軟規範層、身分擴張落在已生效法律層的不對稱，使「民間成功馴服了數位身分」的敘事無法成立。加州模式對台灣的參照價值，也止於條件性對照，因為兩地的制度基底、戶政傳統與監督機關配置根本不同。生態系仍在生長，下一次快照或許會改寫其中若干判斷。

## 參考資料

1. 加州州長辦公室，〈Governor Newsom signs DMV modernization law, expands mobile driver's license access for millions of Californians〉，2026-07-13。https://www.gov.ca.gov/2026/07/13/governor-newsom-signs-dmv-modernization-law-expands-mobile-drivers-license-access-for-millions-of-californians/（A 級）
2. 加州州長辦公室，〈California's Career Passport to connect qualified workers to employment, with or without a four-year degree〉，2026-06-17。https://www.gov.ca.gov/2026/06/17/californias-career-passport-to-connect-qualified-workers-to-employment-with-or-without-a-four-year-degree/（A 級）
3. 加州州長辦公室，〈Governor Newsom releases new framework to create high-paying career pathways with and without four-year degrees〉，2024-12-16。https://www.gov.ca.gov/2024/12/16/governor-newsom-releases-new-framework-to-create-high-paying-career-pathways-with-and-without-four-year-degrees/（A 級）
4. 加州州長行政命令 N-11-23（Career Education Executive Order）原件，2023-08-31。https://www.gov.ca.gov/wp-content/uploads/2023/08/8.31.23-Career-Education-Executive-Order.pdf（A 級）
5. CalMatters，〈DMV crisis could make or break Gavin Newsom〉，2019-04。https://calmatters.org/commentary/2019/04/dmv-crisis-could-make-or-break-newsom/（A 級）
6. 加州州長辦公室，〈Newsom unveils plan to create high-paying, fulfilling careers for more Californians, college degree or not〉，2025-04-02。https://www.gov.ca.gov/2025/04/02/governor-newsom-unveils-plan-to-create-high-paying-fulfilling-careers-for-more-californians-college-degree-or-not/（A 級）
7. 加州立法分析辦公室（LAO），《The 2025-26 Budget: California Community Colleges》Report 5005（「largely unproven」、建議否決）；並見《The 2026-27 Budget: California Community Colleges》Report 5150（次年度同評語）。https://www.lao.ca.gov/Publications/Report/5005 ；https://lao.ca.gov/Publications/Report/5150（A 級）
8. 加州立法分析辦公室（LAO），《The 2025-26 California Spending Plan: Higher Education》Report 5089。https://lao.ca.gov/Publications/Report/5089（A 級）
9. CalMatters（Adam Echelman），〈Newsom promised to help Californians build new careers. Now, the money is running out〉，2026-06-18（IJPR 全文鏡像）。https://www.ijpr.org/education/2026-06-18/newsom-promised-to-help-californians-build-new-careers-now-the-money-is-running-out（A 級）
10. TSA，〈TSA expands acceptance of digital IDs to State of Louisiana〉，2024-05-23。https://www.tsa.gov/news/press/releases/2024/05/23/tsa-expands-acceptance-digital-ids-state-louisiana（A 級）
11. 猶他州 SB 260《State-Endorsed Digital Identity》條文（le.utah.gov）；並見 ACLU，〈There's Only One State That is Asking the Right Questions About Digital Identity〉，2025-11-07。https://le.utah.gov/~2025/bills/static/SB0260.html ；https://www.aclu.org/news/privacy-technology/digital-id-utah（A 級）
12. 加州社區大學 Vision 2030 官方頁與《Vision 2030 Roadmap》（校長 Sonya Christian 2023-06 上任）；LER 聯邦根源見美國商務部《Learning and Employment Records: Progress and the path forward》2020-09 白皮書。https://www.cccco.edu/About-Us/Vision-2030 ；https://www.commerce.gov/sites/default/files/2020-09/LERwhitepaper09222020.pdf（A 級／B 級）
13. 加州 Cradle-to-Career 資料系統《Governance Manual 2024》與 AB 132（Chapter 144, Statutes of 2021）設立條文。https://c2c.ca.gov/wp-content/uploads/2024/04/Governance-Manual-2024.pdf ；https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202120220AB132（A 級）
14. 加州車輛法 §13020 現行條文（含 60% 上限、Article 6 added by Stats. 2021 Ch. 81、Amended by Stats. 2026 Ch. 82）。https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=13020.（A 級）
15. 加州 ebudget《2740 Department of Motor Vehicles》預算文件（Motor Vehicle Fund 機關脈絡）。https://ebudget.ca.gov/2021-22/pdf/Enacted/GovernorsBudget/2500/2740.pdf（A 級）
16. AB 1503（Santiago, 2021–2022，獨立 mDL 政策版，死於委員會）。https://leginfo.legislature.ca.gov/faces/billHistoryClient.xhtml?bill_id=202120220AB1503（A 級）
17. AB 149（Committee on Budget, Chapter 81, Statutes of 2021，交通預算附帶法案，新增車輛法 Article 6，原始上限 0.5%）。https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202120220AB149（A 級）
18. SB 1190（Department of Technology: California Trust Framework, 2021–2022，2022-11-30 死於委員會）。https://leginfo.legislature.ca.gov/faces/billHistoryClient.xhtml?bill_id=202120220SB1190（A 級）
19. SB 125（Committee on Budget and Fiscal Review, Chapter 54, Statutes of 2023，mDL 上限 0.5%→5%）。https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB125（A 級）
20. SB 169（Committee on Budget and Fiscal Review, Chapter 82, Statutes of 2026-07-13，mDL 上限 15%→60%）。https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB169（A 級）
21. AB 123（2025–2026 高教預算附帶法案，Chapter 9, Statutes of 2025，設立 California Career Passport Program、撥 $25M General Fund、CCCCO 偕 Office of Cradle-to-Career Data 與 LWDA 共管）。https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB123（A 級）
22. 加州數位科技廳（CDT）California State Digital ID Strategy／Digital Identity Framework（自述 comprehensive、含 California Identity Gateway）；並見 CDT《Digital Identification (ID) Pilot Program Report》系列（授權出自 Budget Act item 7502-001-0001）。https://digitalidstrategy.cdt.ca.gov/（A 級）
23. 加州 DMV，〈CA DMV Wallet〉官方主頁（試辦上限、支援場景、隱私聲明、30 天更新）。https://www.dmv.ca.gov/portal/ca-dmv-wallet/（A 級）
24. 加州州長辦公室，〈Californians can now add their mobile driver's license to Google Wallet〉，2024-08-23。https://www.gov.ca.gov/2024/08/23/californians-can-now-add-their-mobile-drivers-license-to-google-wallet/（A 級）
25. Apple Newsroom，〈Apple brings California driver's licenses and state IDs to Apple Wallet〉，2024-09-19。https://www.apple.com/newsroom/2024/09/apple-brings-california-drivers-licenses-and-state-ids-to-apple-wallet/（A 級）
26. 加州州長辦公室，〈California expands mobile driver's license to Samsung Wallet, continuing DMV's digital transformation〉，2026-04-28（約 170–180 萬 active mDL、自營約 90 萬）。https://www.gov.ca.gov/2026/04/28/california-expands-mobile-drivers-license-to-samsung-wallet-continuing-dmvs-digital-transformation/（A 級）
27. SpruceID，〈SpruceID Partners with California DMV on the Mobile Driver's License〉，2023-10-25；並見 SpruceID success story〈California DMV Mobile Driver's License〉（2025 年底稱累計已發證逾 200 萬張之供應商頁，屬供應商一手敘事）。https://blog.spruceid.com/spruceid-partners-with-ca-dmv-on-mdl/ ；https://spruceid.com/success-stories/california-dmv-mobile-driver-license（A 級）
28. 加州 DMV，〈mDL for Technology Developers〉（OpenCred、VC API、OID4VP、ISO 18013-5）。https://www.dmv.ca.gov/portal/ca-dmv-wallet/mdl-for-technology-developers/ ；OpenCred 原始碼 https://github.com/stateofca/opencred（A 級）
29. 加州 DMV，〈TruAge〉頁（四項資料、匿名 token、沙加緬度零售）。https://www.dmv.ca.gov/portal/ca-dmv-wallet/truage/（A 級）
30. 加州 DMV，〈DMV Hosts First Community Hackathon〉，2024-10；並見〈DMV Hosts Second Community Hackathon〉（2024-11，聚焦公部門用例）。https://www.dmv.ca.gov/portal/news-and-media/news-releases/dmv-hosts-first-community-hackathon-to-facilitate-additional-uses-for-mobile-drivers-license ；https://qr.dmv.ca.gov/portal/news-and-media/dmv-hosts-second-community-hackathon-to-facilitate-additional-public-sector-uses-for-mobile-drivers-license/（A 級）
31. 加州 DMV，〈California Digital Identity (mDL) and Wallet Showcase〉頁（2026-06-24，沙加緬度，與 CCCCO 共辦）。https://www.dmv.ca.gov/portal/ca-dmv-wallet/mdl-for-business/mdl-showcase/（A 級）
32. TSA，〈TSA at SAN accepting California mobile driver's licenses〉，2025-03-14；並見 TSA〈REAL ID Mobile Driver's Licenses (mDLs)〉。https://www.tsa.gov/news/press/releases/2025/03/14/tsa-san-accepting-california-mobile-drivers-licenses-during-identity ；https://www.tsa.gov/realid/realid-mobile-drivers-license-mdls（A 級）
33. 加州社區大學 Digital Futures，〈DMV Wallet Goes Live: Easier Verification, Stronger Fraud Protection〉（OpenCCC 併入、NIST IAL2 身分核驗）。https://digitalfutures.cccco.edu/dmv-wallet-goes-live-easier-verification-stronger-fraud-protection/（A 級）
34. LAist，〈More than half of California drivers can now use a mobile ID〉，2026（mDL 主要在機場安檢有效、少數商店受理、不取代實體卡）。https://laist.com/news/transportation/california-mobile-drivers-license-id-expansion-newsom-2026（B 級）
35. Biometric Update，〈mDL verification moving from theoretical to practical questions〉，2024-10（發證與受理落差、verifier 端稀薄）。https://www.biometricupdate.com/202410/mdl-verification-moving-from-theoretical-to-practical-questions（B 級）
36. FHDA／CCCCO，RFP #1980《Develop a new California Career Passport Platform》全文（公開招標文件；三階段結構、Tier 1 互通性硬門檻、選擇性揭露/unlinkability 要求、里程碑付款、中止採購保留權）。FHDA PlanetBids 採購入口 https://vendors.planetbids.com/portal/24809/bo/bo-detail/141049（A 級）
37. RFP #1980 官方 Q&A Addendum（FHDA 官方答問；必要標準 W3C VCDM 2.0 與 Open Badges 3.0、僅用專有協定不予考慮、採用推廣劃為 State/發證方責任、WCAG 2.1 AA）。經 FHDA 採購程序公開發布。（A 級）
38. FHDA Board of Trustees 公開議事系統 BoardDocs（2026-06-08 例會，通過上限 $500,000 pilot 合約、授權與四家廠商協商）。https://www.boarddocs.com/ca/fhda/Board.nsf/Public（A 級）
39. Los Altos Online，〈Foothill-De Anza approves $500K career passport pilot〉，2026-06（收到 41 件投標、四家入選 Auth9/Certree、Infosys、SpruceID、Territorium、每家 $125,000）。https://www.losaltosonline.com/schools/foothill-de-anza-approves-500k-career-passport-pilot/article_1c0899e5-cbae-4465-88af-cdd532f679ab.html（A/B 級，媒體報導與 BoardDocs 交叉佐證）
40. StateScoop，〈California launches pilot for 'Career Passport' digital workforce tool〉，2026-06（CCCCO、LWDA、Office of Cradle-to-Career Data 三方）。https://statescoop.com/california-launches-pilot-for-career-passport-digital-workforce-tool/（A 級）
41. W3C，〈The Verifiable Credentials 2.0 family of specifications is now a W3C Recommendation〉，2025-05-15；規範本文《Verifiable Credentials Data Model v2.0》。https://www.w3.org/news/2025/the-verifiable-credentials-2-0-family-of-specifications-is-now-a-w3c-recommendation/ ；https://www.w3.org/TR/vc-data-model-2.0/（A 級）
42. 1EdTech，《Open Badges 3.0》標準頁（native W3C VC，2024-05 發布）。https://www.1edtech.org/standards/open-badges（A 級）
43. Jobs for the Future（JFF），〈Realizing the Potential of Learning and Employment Records as Verifiable Credentials: A Road Map for Successful Demonstrations〉。https://www.jff.org/blog/realizing-the-potential-of-learning-and-employment-records-as-verifiable-credentials-a-road-map-for-successful-demonstrations/（A 級）
44. Brookings，〈Going digital: How learning and employment records shape access to quality education and jobs〉（LER 承諾與落地落差、雇主端採用瓶頸）。https://www.brookings.edu/articles/going-digital-how-learning-and-employment-records-shape-access-to-quality-education-and-jobs/（A 級）
45. CCC Technology Center，eTranscript California 專案頁（CCCCO 出資、CCC Tech Center 營運）。https://ccctechcenter.org/projects/etranscript-california（A 級）
46. Civic Marketplace，〈What is Challenge-Based Procurement?〉（pilot purgatory、雙重競賽對中小廠商的負擔）。https://www.civicmarketplace.com/news/what-challenge-based-procurement（B 級）
47. EFF（Alexis Hancock），〈Decoding the California DMV's Mobile Driver's License〉，2024-03-18。https://www.eff.org/deeplinks/2024/03/decoding-california-dmvs-mobile-drivers-license（A 級）
48. AAMVA，《Mobile Driver's License Implementation Guidelines》r1.5，2025-04-17（版本變更表載明 server retrieval 由「選用」改為「禁止」、自我認證、對州非約束）。https://www.aamva.org/getmedia/bb4fee66-592d-4d39-813a-8fdfd910268a/MobileDLGuidelines1-5.pdf（A 級）
49. Identity Woman（Kaliya Young），〈No Phone Home: What it means and why it is important〉，2025-06-02。https://identitywoman.net/no-phone-home-what-it-means-and-why-it-is-important/（A 級）
50. DIF（Decentralized Identity Foundation），〈Nearly 100 Experts Are Saying 'No Phone Home'〉，2025-06。https://blog.identity.foundation/no-phone-home/（A 級）
51. Phil Windley，〈Let's Stop Phoning Home〉（Technometria），2025-06-03。https://www.technometria.com/p/lets-stop-phoning-home（A 級）
52. 美國聯邦最高法院，Free Speech Coalition, Inc. v. Paxton, 606 U.S. ___（2025-06-27，6–3；holding 由 ACLU 聲明、CRS 分析與律所評析交叉佐證）。https://supreme.justia.com/cases/federal/us/606/23-1122/（A 級）
53. 加州 AB 1043（Wicks，Digital Age Assurance Act，2025-10-13 簽署、operative 2027-01-01，OS 層年齡訊號）。https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB1043（A 級）
54. 加州 AB 2273（Wicks，Age-Appropriate Design Code Act，Chapter 320, Statutes of 2022，operative 2024-07-01；經 NetChoice v. Bonta 第九巡迴部分續禁）。https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202120220AB2273（A 級）
55. OpenID Foundation，《OpenID for Verifiable Presentations 1.0》（Final 2025-07-09；線上/無人值守通道走 ISO 18013-7 + OID4VP）。https://openid.net/specs/openid-4-verifiable-presentations-1_0.html（A 級）
56. moda 新聞稿 18262，〈「數位憑證皮夾」試營運暨應用體驗記者會〉，2025-12-17（試營運確切日、目前開放三大電信門號電子卡）。https://moda.gov.tw/press/press-releases/18262（A 級）
57. Mayrhofer 等，〈An Architecture for Distributed Digital Identities in the Physical World〉，arXiv:2508.10185，2025-08（ISO 18013-5 linkability、verifier-issuer collusion、metadata leakage）。https://arxiv.org/pdf/2508.10185（A 級）
58. EFF（Hancock & Collings），〈Zero Knowledge Proofs Alone Are Not a Digital ID Solution to Protecting User Privacy〉，2025-07-25。https://www.eff.org/deeplinks/2025/07/zero-knowledge-proofs-alone-are-not-digital-id-solution-protecting-user-privacy（A 級）
59. moda 重點政策頁，〈數位憑證皮夾〉1695（官方用詞「分散式」「選擇性揭露」「國際標準」，未列法源、未提專法、未凸顯區塊鏈）。https://moda.gov.tw/major-policies/wallet/1695（A 級）
60. 台灣人權促進會，〈【聯合聲明】數位皮夾缺乏法律保障基本權，將淪為下一個台北通〉，2026-02-09。https://www.tahr.org.tw/news/3845（A 級）
61. 行政院，〈暫緩數位身分證發行計畫 蘇揆:完善法制後再推動〉，2021-01-21。https://www.ey.gov.tw/Page/9277F759E41CCD91/e80e55a2-0102-4031-b6d3-a7c40f4cac6a（A 級）
62. 憲法法庭 111 年憲判字第 13 號〈健保資料庫案〉判決，2022-08-12（欠缺獨立監督機制違憲、限期修法）。https://cons.judicial.gov.tw/docdata.aspx?fid=38&id=309956（A 級）
63. 內政部，行動自然人憑證 TW FidO（FIDO 2.0、LoA3）。https://fido.moi.gov.tw/（A 級）
64. 中央社，〈台北通個資疑慮 近萬人連署拒絕強迫推銷〉，2022-01-25。https://www.cna.com.tw/news/ahel/202201250036.aspx（A 級）
65. CIO Taiwan，〈數位憑證皮夾 3 月底沙盒測試 開源且採分散式架構〉，2025-03-10（「分散式」「開放原始碼」原文）。https://www.cio.com.tw/86785/（B 級）
66. 區塊勢（許明恩），〈數位憑證皮夾：出示證件的新方法、身分自主的隱私革命〉（技術媒體描述信任清單上鏈）。https://www.blocktrend.today/p/676（B 級）
67. g0v Summit 2026 官網（民間自架發行／驗證／持有三方、開放原始碼）。https://summit.g0v.tw/2026/nan-tw/register/（A 級）
68. 立法院，陳淑敏，〈數位皮夾與數位自主權之相關法制研析〉，113 年 7 月（確認目前無專法、法源落在電子簽章法與個資法）。https://www.ly.gov.tw/Pages/Detail.aspx?nodeid=6590&pid=242217（A 級）
