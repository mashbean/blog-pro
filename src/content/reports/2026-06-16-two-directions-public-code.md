---
title: "公共程式的兩種方向"
description: "公共程式政策可分為公共成果開源與採購端降低鎖定兩條路線。文章比較各國政策、SBOM 與供應鏈標準，並以賽局理論提出台灣推動順序。"
pubDate: 2026-06-16
tags: ["公共程式", "開源政策", "公共採購", "SBOM", "數位治理"]
category: "數位治理"
aiModel: "AI 協作"
aiPrompt: "公共程式的兩種方向"
aiPipelineStage: "final"
aiPipelineId: "2026-06-16-two-directions-public-code"
aiGeneratedDate: 2026-06-16
humanReviewed: true
---

## 一、導論

公共程式政策常被濃縮成一句話，公共出資的程式應該公開。這句話有規範力量，也容易讓政策討論失焦。實際推動時，至少要拆成兩條方向。第一條面向社會，處理公共資金形成的公共資訊服務，如何成為可檢視、可重用、可協作、可長期維護的公共資本。第二條面向政府內部，處理政府作為軟體與服務買方時，如何降低長期經常性支出、供應鏈不透明與 vendor lock-in。

前者接近 Public Money Public Code 的政策想像。Foundation for Public Code 對 public code 的說明，已把開放原始碼、政策、協作、重用與治理放在同一概念群中<sup>1</sup>。FSFE 的 Public Money Public Code 則是民間倡議語言，主張公帑開發的公共部門軟體預設採自由與開源授權<sup>2</sup>。這個語言適合說明公共成果歸屬，但不能直接等同各國現行法律。

後者則更接近採購與供應鏈治理。政府採購 SaaS、商用套件、雲端服務、付費元件或委外維運時，核心控制點通常落在資料、介面、授權、元件、資安責任、移轉成本與退出能力。SBOM、開放格式、API 文件、資料可攜、移交訓練、修補 SLA 與退出演練，都是這條路線的工具。

這兩條方向可以互補，卻不能混用。公共成果開源回答公共投資如何累積為公共資本。採購端降低鎖定回答政府如何避免在持續付費的資訊服務中失去議價能力。若政策設計把兩者混成單一口號，就容易讓支持者高估開源的立即效果，也讓反對者把每一項開放要求都說成對產業的打擊。

## 二、公共成果開源的國際趨勢

公共成果開源的基本推論並不複雜。政府用公共資金委託開發非機敏公共資訊服務時，若源碼、部署知識、文件、測試與維護能力全由單一廠商掌握，公共部門取得的是服務外觀，沒有取得可重用能力。源碼公開與開放授權可以降低重複開發，增加第三方檢視與跨機關重用的機會；但安全與品質仍需要維護責任、漏洞通報、測試、文件與治理預算支撐。

英國把這個問題放進服務交付標準。GOV.UK Service Standard 第 12 點要求新的 source code 應該開放且可重用，例外情形需要提出理由<sup>3</sup>。GOV.UK 另有 source code guidance，處理第三方開發程式碼、權利歸屬、授權、安全檢查與維護責任<sup>4</sup>。這代表 open by default 需要被放進服務交付規格，不能停在 repository 上網。

歐盟走的是技術主權、互通與公共行政能力路線。EU Open Source Strategy 把開源連到技術主權、公共行政、採購、標準化與長期維護，且頁面在 2026 年 6 月仍維持更新<sup>5</sup>。歐盟委員會 2021 年的開源授權與重用決定，建立 Commission 或代其製作軟體的開源條件<sup>6</sup>。Interoperable Europe Act 則以跨境公共服務互通與公共數位資產重用為核心，替公共程式的重用創造制度基礎<sup>7</sup>。

法國、德國與瑞士呈現不同政策密度。法國 DINUM 的自由軟體與數位公地行動計畫，把程式碼公開、SILL 目錄、政府貢獻與行政體系結合<sup>8</sup>。德國 ZenDiS 與 openCode 則把公共行政開源平台化，目標是降低關鍵依賴並促進跨層級共用<sup>9</sup>。瑞士更進一步，聯邦政府自製或委託軟體原則上公開，並保留第三方權利與安全例外<sup>10</sup>。這些案例顯示趨勢正在收斂，但強制程度從倡議、行政指引、平台治理到法律義務都有差異。

台灣也已經有公共成果開源的政策入口。數位部公共程式網站在 2024 年上線，政策語言是釋出不涉機敏的政府程式碼，供公眾與機關檢視、運用與協作。code.gov.tw 的 API 是動態資料，截至查核日的公開資料集約為百餘筆，因此較適合作為政策入口與資料快照，不宜當成制度成熟度指標<sup>11</sup>。數位部 2026 年公部門開源軟體應用參考手冊，則涵蓋導入評估、治理、開發驗收、成果釋出與永續經營<sup>12</sup>。這些材料足以說明台灣已有起點，但還不足以說明台灣已有全政府預設開源義務。

## 三、採購端降低鎖定的國際趨勢

採購端降低鎖定的政策邏輯不同。政府買到的可能是 SaaS 帳號、雲端平台、商用套件、付費元件、系統整合服務或長期維運。此時若要求整套 SaaS 開源，往往不具可行性；更務實的要求是風險分級、供應鏈透明、資料可攜、開放介面、授權盤點、退出權與可替代性。

美國軟體供應鏈政策近年的變化提供重要提醒。OMB M-26-05 在 2026 年改採風險導向的軟硬體安全 assurance，撤回前版統一 attestation 路線，但仍允許機關透過契約在需要時要求 current SBOM<sup>13</sup>。CISA 2025 SBOM Minimum Elements 仍處於 voluntary draft guidance 與 RFI 脈絡，並明確不創設新的聯邦範圍 SBOM 要求；它延伸 NTIA 2021 年 minimum elements 的基準，討論 component hash、license、tool name 與 generation context 等欄位<sup>14</sup><sup>15</sup>。這顯示美國仍保留 SBOM，並將其放回風險分級與契約治理。

NIST SSDF 提供安全開發與採購溝通的共同語彙，可協助政府把安全開發實務轉成供應商承諾與驗收項目<sup>16</sup>。NIST SP 800-161 Rev.1 則提供網路安全供應鏈風險管理框架，涵蓋產品與服務供應鏈的識別、評估、緩解、政策與風險評估<sup>17</sup>。這些文件的共同訊號，是政府資訊採購不能只買功能，也要買可驗證的風險控制。

SBOM 格式標準也在成熟中。截至 2026 年 6 月 17 日，SPDX 2.2.1 對應 ISO/IEC 5962:2021，SPDX 3.0 仍在標準化流程中；CycloneDX 由 ECMA-424 標準化，ECMA 頁面已列出 2025 年第二版<sup>18</sup>。採購文件若引用標準，應標明版本與日期，避免把格式狀態寫成永久固定。更重要的是，格式只是容器。有效條款需要要求 SBOM 綁定 release、列出 transitive dependency、提供 license 與 hash、可被工具解析，並接上漏洞通報、VEX 或可利用性判斷、修補 SLA。

歐盟在供應鏈安全與雲端退出上形成另一組制度工具。Cyber Resilience Act 對數位產品導入生命週期資安要求，主要義務預定自 2027 年 12 月 11 日適用，通報義務自 2026 年 9 月 11 日適用<sup>19</sup>。Data Act 則處理 data processing services 的 cloud switching、machine-readable export、open interfaces 與 switching charges，直接回應雲端服務鎖定<sup>20</sup>。前者讓產品資安與供應鏈透明進入法規視野，後者把資料可攜與退出權變成反鎖定工具。

台灣採購端的制度入口已比一般想像更具體。行政院 2023 年政府資訊服務採購革新指出，政府資訊服務委外採購每年超過新台幣 300 億元，並將資安要求納入資訊服務採購契約範本<sup>21</sup>。資通安全管理法與施行細則要求委外建置、維運或服務時，應選任適當受託者並簽訂書面契約；客製化系統開發需提供安全性檢測證明，涉及非自行開發系統或資源時也需標示內容、來源並提供授權證明<sup>22</sup>。

工程會資訊服務採購契約範本要求使用開源軟體時，依授權範圍授權機關利用，並交付執行檔、原始碼與開源軟體清單<sup>23</sup>。資訊雲端服務採購契約範本的共通性資安要求，已納入更新程式時提供 SBOM 與安全測試報告等要求<sup>24</sup>。政府軟體採購網對套裝軟體共同供應契約投件，也要求軟體產品元件表，列明外購商用軟體與開源軟體，若已有 SBOM 可一併提供<sup>25</sup>。資安署與資安院也已把 SBOM 定位為軟體成分清單與漏洞追溯工具，並預告實務參考指引<sup>26</sup>。

這條路線的缺口在驗收。若 SBOM 只是一份 PDF 清單，沒有 release 綁定、沒有 transitive dependency、不能被工具解析、沒有漏洞脈絡與修補流程，政府在事故時仍難以判斷影響範圍。若資料匯出格式專屬、API 文件不完整、移轉協助另收不可預期費用，政府依然被鎖住。

## 四、亞洲路徑與產業生態

亞洲案例說明，公共程式政策不一定從全面公開源碼起步。日本 Government Interoperability Framework 用共通資料模型提升跨系統資料互通，重點在降低資料孤島與系統孤島<sup>27</sup>。韓國 eGovFrame 以電子政府標準框架降低特定廠商依賴、提升重用、互通性與中小型軟體業者競爭力<sup>28</sup>。印度 2015 年開源採用政策要求政府電子治理系統優先考慮 OSS，RFP 需要求供應商同時考慮 OSS 與閉源方案，排除 OSS 時需提出理由<sup>29</sup>。

這些案例的政策重點在於路徑選擇。公共成果開源、資料互通、標準框架、開源優先與採購例外說明，都能降低鎖定，只是處理的層次不同。台灣若要降低阻力，可以先把可重用公共元件、低敏感前端服務、資料轉換工具、文件模板與地方政府共用模組列為示範案，再逐步提高預設開源與採購驗收要求。

產業生態也正在改變。歐盟委託研究估計，2018 年 EU OSS 投資約 10 億歐元，經濟影響約 650 億至 950 億歐元；這個估計基於歐盟與 2018 年資料，不能直接外推到台灣<sup>30</sup>。較穩健的讀法是，開源生態不宜被當成無償資源池，仍需要維護者、企業服務、合規工具、資安修補、託管服務、標準工具鏈與公共採購共同支撐。

這也意味著資訊服務業者的反彈有其經濟背景。若原本收入依賴專屬碼、文件落差、部署知識壟斷與續約依賴，公共成果開源、第三方維護、SBOM 與退出權都會改變議價結構。政策若只壓低建置費，會讓業者把開源視為斷財路。政策若把維護、資安、託管、遷移、合規、文件與開源治理列為可採購服務，反而能把市場誘因導向專業服務。

## 五、開源政策也會失靈

正面案例之外，政府也要面對失靈條件。UK National Audit Office 2025 年針對政府技術供應商的報告指出，數位商務能力不足、採購準備不足與合約設計問題，會傷害數位交付並強化既有供應商優勢<sup>32</sup>。這個教訓可用於公共程式政策。開源條款、SBOM 條款與退出條款若沒有採購能力承接，只會變成投標文件裡的合規段落。

失靈通常發生在三個環節。第一，規格寫得太抽象，只要求公開源碼或提供 SBOM，沒有要求乾淨環境可建置、授權掃描、release 綁定與工具解析。第二，驗收只看文件，沒有資料匯出還原、API 相容性測試、migration runbook 與退出演練。第三，預算仍以一次性建置為中心，沒有維護、修補、文件、移轉、託管與治理項目。這三個環節若沒有補上，公共程式政策會停在形式合規。

## 六、用賽局理論看四方關係

公共程式政策的阻力來自採購賽局。政府希望降低重複開發、長期維運與鎖定成本，但也面臨承辦風險、驗收能力不足與責任歸屬不清。資訊服務業者希望保留可回收投資的專屬優勢，特別是專屬碼、部署知識、文件落差與續約依賴。SaaS 與付費元件提供者希望維持訂閱、授權、資料、API 與平台控制。使用者則承擔品質、轉換與服務中斷風險。

principal-agent 問題在政府資訊採購中很明顯。政府作為委託人，通常難以觀察廠商真實成本、軟體品質、依賴風險與維護能力。廠商作為代理人，掌握更多技術資訊。Laffont 與 Tirole 的採購與管制理論，提供資訊不對稱與誘因設計的基本框架<sup>31</sup>。若政府缺乏驗收能力，開源與 SBOM 條款會被轉化為最低成本文件交付。

hold-up problem 說明另一層風險。政府一旦投入資料轉換、流程調整、使用者訓練與內部制度配合，既有供應商就取得再議價能力。Klein、Crawford 與 Alchian 對 appropriable rents 與競爭性契約過程的分析，可用來理解特定投資完成後的被套牢風險<sup>33</sup>。資料可攜、API 文件、原始碼可建置、移交訓練與退出演練，必須在採購初期寫進契約。

switching costs 進一步說明廠商為何有誘因維持鎖定。Klemperer 的 switching costs 綜述指出，既有市占會影響未來獲利，廠商可在吸引用戶與收割鎖定客戶之間調整策略<sup>34</sup>。在政府採購中，初期低價、後續加價、資料移轉費、API 限制、維護知識缺口與授權升級費，都是轉換成本的具體形式。

簡化後，政府驗收能力與廠商策略會形成四種均衡。

| 政府能力與廠商策略 | 廠商轉向維護、整合、資安、託管服務 | 廠商維持專屬碼、資訊不對稱與續約依賴 |
|---|---|---|
| 強驗收，含源碼可建置、SBOM 可解析、資料可攜、退出可演練 | 政府取得較高重用與議價能力，守規廠商取得可持續服務收入，使用者得到較高服務連續性 | 短期爭議升高，長期鎖定下降，政府仍須編列轉換成本 |
| 弱驗收，只收文件與清單 | 守規廠商被低價競爭壓迫，政府取得有限透明度 | 形成鎖定均衡，既有廠商與高鎖定 SaaS 取得較高租金，使用者承受品質與移轉風險 |

這個模型說明，政策不能停在要求開源或要求 SBOM。強驗收會改變廠商 payoff，讓維護、資安、託管、遷移與合規服務變成可持續收入。弱驗收會懲罰守規廠商，鼓勵形式文件與低價搶標。使用者也需要 issue 流程、服務標準、可用性測試與回應 SLA，否則公共程式對體驗的改善不會自然發生。

## 七、台灣的推動順序

台灣較合適的推動方式，是把兩條政策線分流，再逐步提高要求。

第一步是定義適用範圍與例外。公共成果開源適用於公共出資形成、非機敏、可重用的公共資訊服務與共用元件。採購端降低鎖定適用於 SaaS、商用元件、雲端服務、系統整合與委外維運。高敏感系統可採受控揭露、第三方審查、延遲公開或例外審查，避免把個資、國安、防弊模型與弱點細節公開。

第二步是更新採購範本。公共成果開源案件應明定 IP 歸屬、開源授權、第三方權利清理、可建置源碼、部署文件、測試資料、security contact、維護責任與成果釋出流程。採購端降低鎖定案件應明定 SPDX 或 CycloneDX 格式 SBOM、資料匯出、欄位字典、OpenAPI 或相當 API 文件、版本政策、退出協助、移交訓練、授權證明、漏洞修補 SLA 與續約透明度條件<sup>18</sup><sup>20</sup><sup>23</sup><sup>24</sup>。

第三步是建立可分工的中央驗收與諮詢能力。這不必假設台灣已經有單一中央 OSPO 權限。較可行的做法，是由數位部負責公共程式平台與開源治理指引，工程會負責契約範本與採購條款，資安署與資安院負責資安驗收、SBOM 解析、漏洞追蹤與測試工具，跨部會機制負責例外審查、爭議諮詢與示範案選案。這樣能降低承辦人員採用新條款時的個人風險，也能避免各機關重複發明驗收流程。

第四步是從示範案建立市場訊號。可先選低敏感公共服務前端、資料轉換工具、共用元件、表單流程、文件模板與地方政府可重用模組。政府應把維護費、資安修補費、移轉費、文件費、託管費與開源治理費列為正當支出，讓資訊服務業者知道政策目標應避免被理解成單純壓低利潤，重點在把收入從鎖定租金導向專業服務。

第五步是用全生命週期成本評選。採購評分不應只看建置價，也要看授權費、維護費、轉換成本、資料可攜性、替代供應商接手難度、SBOM 品質、漏洞修補速度、文件完整性與使用者支援。若某個方案初期便宜，但退出成本高、資料格式封閉、API 文件缺漏、付費元件授權不清，總成本就應反映在評分中。

第六步是把驗收從文件改成可操作證據。源碼要能在乾淨環境重建並產生版本標記。SBOM 要能被工具解析並綁定 release。授權要能自動掃描並人工抽查。資料匯出要能還原。API 要有相容性測試。退出權要有 migration runbook 與演練紀錄。維護責任要有 issue tracker、security contact 與修補 SLA。這些要求把公共程式政策從宣示推進到可採購、可驗收、可預算化。

## 八、條件性結論

公共程式政策要成立，必須承認它同時面對兩種制度問題。公共成果開源處理公共投資如何轉成可重用公共資本。採購端降低鎖定處理政府作為買方時，如何掌握供應鏈、資料、介面、授權與退出能力。兩者都會碰到既有市場租金與行政驗收能力的限制。

台灣已經有可用起點，包括公共程式平台、開源參考手冊、資安入規、資訊服務採購契約範本、雲端服務 SBOM 條款與軟體產品元件表。下一步應離開理念辯論，把源碼、SBOM、資料可攜、API、授權、移交與退出演練，全部變成可寫入契約、可檢查、可編預算、可由廠商報價的交付物。

政策成敗取決於政府是否能改變賽局。若政府只要求公開與清單，市場會回到形式合規與續約依賴。若政府能提供明確範本、共用工具、驗收能力、示範案與合理維護預算，資訊服務業者就有誘因從專屬交付轉向維護、資安、託管、遷移與治理服務。公共程式因此同時是開源議題，也是一套公共採購、資安治理與產業轉型政策。

## 參考資料

1. Foundation for Public Code。*Standard for Public Code, Glossary*。https://standard.publiccode.net/glossary.html。來源等級 B。查閱 2026-06-16。
2. Free Software Foundation Europe。*Public Money? Public Code!*。https://fsfe.org/activities/publiccode/publiccode.en.html。來源等級 B。查閱 2026-06-16。
3. GOV.UK Service Manual。*Service Standard 12, Make new source code open*。https://www.gov.uk/service-manual/service-standard/point-12-make-new-source-code-open。來源等級 A。查閱 2026-06-16。
4. GOV.UK Service Manual。*Making source code open and reusable*。https://www.gov.uk/service-manual/technology/making-source-code-open-and-reusable。來源等級 A。查閱 2026-06-16。
5. European Commission。*The EU Open Source Strategy*。https://digital-strategy.ec.europa.eu/en/policies/open-source-strategy。來源等級 A。查閱 2026-06-16。
6. EUR-Lex。*Commission Decision on the open source licensing and reuse of Commission software, 2021/C 495 I/01*。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021D1209%2801%29。來源等級 A。查閱 2026-06-16。
7. EUR-Lex。*Regulation EU 2024/903, Interoperable Europe Act*。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R0903。來源等級 A。查閱 2026-06-16。
8. DINUM。*Action plan for Free Software and Digital Commons*。https://code.gouv.fr/en/action-plan-for-free-software-and-digital-commons/。來源等級 A。查閱 2026-06-16。
9. ZenDiS。*The ZenDiS sovereignty package*。https://www.zendis.de/en/what-we-offer。來源等級 A。查閱 2026-06-16。
10. Swiss Federal Chancellery。*Open-Source-Software OSS*。https://www.bk.admin.ch/de/open-source-software-oss。來源等級 A。查閱 2026-06-16。
11. 數位發展部。〈數位部公共程式網站上線 攜手六都開箱政府程式碼〉。https://moda.gov.tw/press/press-releases/12522。code.gov.tw。*PublicProgramInfoData CSV API*。https://code.gov.tw/api/OpenDataSet/PublicProgramInfoData/csv。來源等級 A/B。查閱 2026-06-17。
12. 數位發展部。〈公部門開源軟體應用參考手冊〉。https://moda.gov.tw/digital-affairs/democracy-network/services/19352。來源等級 A。查閱 2026-06-16。
13. White House OMB。*M-26-05 Adopting a Risk-based Approach to Software and Hardware Security*。https://www.whitehouse.gov/wp-content/uploads/2026/01/M-26-05-Adopting-a-Risk-based-Approach-to-Software-and-Hardware-Security.pdf。來源等級 A。查閱 2026-06-17。
14. CISA。*2025 Minimum Elements for a Software Bill of Materials SBOM*。https://www.cisa.gov/sites/default/files/2025-08/2025_CISA_SBOM_Minimum_Elements.pdf。Federal Register。*Request for Comment on 2025 Minimum Elements for a Software Bill of Materials*。https://www.federalregister.gov/documents/2025/08/22/2025-16147/request-for-comment-on-2025-minimum-elements-for-a-software-bill-of-materials。來源等級 A。查閱 2026-06-17。
15. NTIA。*The Minimum Elements for a Software Bill of Materials SBOM*。https://www.ntia.gov/report/2021/minimum-elements-software-bill-materials-sbom。來源等級 A。查閱 2026-06-16。
16. NIST。*SP 800-218 Secure Software Development Framework SSDF Version 1.1*。https://csrc.nist.gov/pubs/sp/800/218/final。來源等級 A。查閱 2026-06-16。
17. NIST。*SP 800-161 Rev.1 Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations*。https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final。來源等級 A。查閱 2026-06-16。
18. ISO。*ISO/IEC 5962:2021 Information technology, SPDX Specification V2.2.1*。https://www.iso.org/standard/81870.html。Ecma International。*ECMA-424 CycloneDX Bill of materials specification*。https://ecma-international.org/publications-and-standards/standards/ecma-424/。來源等級 A。查閱 2026-06-17。
19. European Commission。*Cyber Resilience Act*。https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act。來源等級 A。查閱 2026-06-16。
20. European Commission。*Data Act explained*。https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained。來源等級 A。查閱 2026-06-17。
21. 行政院。〈政府資訊服務採購革新－資安入規及採購指引〉。https://www.ey.gov.tw/Page/448DE008087A1971/cfbfda39-98aa-4dc4-ac50-3c7b6413b797。來源等級 A。查閱 2026-06-16。
22. 數位發展部主管法規共用系統。〈資通安全管理法〉。https://law.moda.gov.tw/LawContent.aspx?id=FL088622。數位發展部主管法規共用系統。〈資通安全管理法施行細則〉。https://law.moda.gov.tw/LawContent.aspx?id=FL089964。來源等級 A。查閱 2026-06-16。
23. 行政院公共工程委員會。〈資訊服務採購契約範本〉。https://www.pcc.gov.tw/content/index?eid=9819&type=C。來源等級 A。查閱 2026-06-16。
24. 行政院公共工程委員會。〈資訊雲端服務採購契約範本〉。https://www.pcc.gov.tw/DL.aspx?icon=.pdf&n=6LOH6KiK6Zuy56uv5pyN5YuZ5o6h6LO85aWR57SE56%2BE5pysXzExMzA1MTcucGRm&nodeid=2712&sitessn=297&u=LzAwMS9VcGxvYWQvMjk3L2NrZmlsZS9hYmY5Y2Q2Ny0yMjhlLTRiN2EtOWNhMy00Njc3NGVhNzQyODEucGRm。來源等級 A。查閱 2026-06-16。
25. 數位發展部數位產業署。〈政府軟體採購網公告，115 年第一次電腦軟體共同供應契約採購〉。https://gsmarket.adi.gov.tw/portal/%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF/%E8%A9%B3%E7%B4%B0%E8%B3%87%E6%96%99?id=587。來源等級 B。查閱 2026-06-16。
26. 數位發展部資通安全署。〈資安署與資安院共同舉辦 SBOM 工作坊〉。https://moda.gov.tw/ACS/press/news/press/19580。來源等級 B。查閱 2026-06-16。
27. Digital Agency, Government of Japan。*Government Interoperability Framework*。https://www.digital.go.jp/en/policies/data_strategy_government_interoperability_framework。來源等級 A。查閱 2026-06-16。
28. eGovFrame。*Introduction of The eGovernment Standard Framework*。https://www.egovframe.go.kr/eng/sub.do?menuNo=2。來源等級 A。查閱 2026-06-16。
29. Ministry of Electronics and Information Technology, Government of India。*Policy on Adoption of Open Source Software for Government of India*。https://www.meity.gov.in/static/uploads/2024/02/policy_on_adoption_of_oss.pdf。來源等級 A。查閱 2026-06-16。
30. European Commission。*Study about the impact of open source software and hardware on technological independence, competitiveness and innovation in the EU economy*。https://digital-strategy.ec.europa.eu/en/library/study-about-impact-open-source-software-and-hardware-technological-independence-competitiveness-and。來源等級 A。查閱 2026-06-16。
31. Laffont, Jean-Jacques, and Jean Tirole。*A Theory of Incentives in Procurement and Regulation*。MIT Press, 1993。https://mitpress.mit.edu/9780262121743/a-theory-of-incentives-in-procurement-and-regulation/。來源等級 A。查閱 2026-06-16。
32. UK National Audit Office。*Government’s approach to technology suppliers, addressing the challenges*。https://www.nao.org.uk/wp-content/uploads/2025/01/governments-approach-to-technology-suppliers-addressing-the-challenges.pdf。來源等級 A。查閱 2026-06-16。
33. Klein, Benjamin, Robert G. Crawford, and Armen A. Alchian。“Vertical Integration, Appropriable Rents, and the Competitive Contracting Process。” *Journal of Law and Economics*, 1978。https://ideas.repec.org/a/ucp/jlawec/v21y1978i2p297-326.html。來源等級 A。查閱 2026-06-16。
34. Klemperer, Paul。“Competition when Consumers have Switching Costs。” *Review of Economic Studies*, 1995。https://academic.oup.com/restud/article-abstract/62/4/515/1544107。來源等級 A。查閱 2026-06-16。
