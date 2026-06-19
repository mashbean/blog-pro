---
title: "投誠者的資訊安全賽局"
description: "以 NSB「中國民眾聯繫窗口」為例，把投誠者、監控者與吸收單位放進同一個資訊安全賽局，並用 PRISM、WikiLeaks、Snowden、Manning 與國家監控型窗口補強初次投遞分析。"
pubDate: 2026-06-19
updatedDate: 2026-06-19
tags: ["數位安全", "匿名通報", "投誠", "情資", "SecureDrop", "GlobaLeaks", "CoverDrop", "PRISM", "WikiLeaks", "AWS WAF"]
category: "數位安全"
aiModel: "Codex GPT-5"
aiPipelineStage: "final"
aiPipelineId: "pipeline-verified"
aiGeneratedDate: 2026-06-19
humanReviewed: true
lang: "zh-TW"
slug: "2026-06-19-nsb-report-window-security"
---

若把 `report.nsb.gov.tw` 當成一般民眾聯絡表單，評價標準大致是 HTTPS 是否正常、表單是否能防濫用、輸入是否清理、服務是否穩定。若把它放進「中國民眾聯繫窗口」這個語境，且服務對象可能包含身處中國境內、港澳，或其他高壓監控環境中的資訊提供者，評價標準會立刻變得更嚴格。此時問題不只在訊息送出後是否加密，也在使用者尚未提交前，是否已留下足以被關聯的接觸信號。

更進一步說，若有人把這個窗口理解成投誠或高風險情資接觸的入口，它面對的就不是單純的網站安全題。投誠者、監控者、吸收單位三方都在不完全資訊下行動。投誠者不知道通道能否保護他。監控者不需要讀到完整留言，只要掌握足以識別接觸意圖的信號，就能提高威懾。吸收單位想取得高價值情資，也要防假投誠、反滲透、惡意檔案與濫用。三方 payoff 彼此牽制，入口設計本身就是賽局規則的一部分。

這是第三版分析。第一版做低侵入網站測試，第二版加入投誠者、監控者與吸收單位的三方賽局。第三版保留前兩版的證據邊界，再加入三組對照。第一組是 PRISM 與 Section 702，它提醒我們，雲端與電子通訊服務商可能成為監控制度的一部分。第二組是 Snowden、Manning 與 WikiLeaks，它們都發生在民主陣營內部，適合分析吹哨者第一次找誰、如何被接收、何時開始暴露。第三組是中國 12339 與 12377 類型的國家監控型窗口，它們把舉報、實名、獎勵、分類與法律責任寫進制度設計，可作為反面類型。

這三組案例不能被混成同一種情境。民主陣營內部吹哨者、跨境投誠者、威權治理中的檢舉者，面對的法律關係、敵手能力與人身風險都不同。它們有一個共同節點值得比較。第一次投遞一旦發生，來源就已經把某種意圖交給接收方、監控者與基礎設施。這個信號往往不可逆。

## 先把證據放穩

2026 年 6 月 18 日的低侵入測試只涵蓋公開頁面、DNS/TLS/headers、前端程式碼、瀏覽器點擊流程與通過 CAPTCHA 後畫面狀態。測試沒有提交留言，沒有繞過 CAPTCHA，也沒有做漏洞掃描。外部測試無法確認 NSB 後端保存哪些日誌、保存多久、誰可讀取，也無法確認是否另有非公開高風險通道<sup>1</sup>。

可觀察事實是，`report.nsb.gov.tw` 的公開前端使用 CloudFront/S3、AWS WAF CAPTCHA、cdnjs 依賴與前端 JSON 表單流程。留言頁載入 AWS WAF CAPTCHA SDK，完成 CAPTCHA 後送出表單時會帶 `X-Aws-Waf-Token`。先前瀏覽器測試也觀察到 AWS WAF 的 `inputs?client=browser`、`mp_verify`、`telemetry`、`verify`、`voucher` 與 `challenge.js` 等端點<sup>1</sup>。

AWS 官方文件說，AWS WAF token 會 fingerprint client session，內容包含 client identifiers、client-side signals、browser interrogation。在部分 client integration 情境下，token 也可能包含 end user 與頁面的 interactivity，例如 mouse movements、key presses、HTML form interactions。AWS 同頁也說這些資訊 non-unique，不能 map to an individual human being，且 token 完整內容與加密程序不公開<sup>2</sup>。

所以文章不能寫成 NSB 網站已證明能讀取 MAC address、硬體序號或硬體層級的「機器碼」。現有證據支持的說法較窄。使用者在送出內容前，可能已產生網路、瀏覽器、WAF token 與 CAPTCHA 相關足跡。對一般網站，這是常見防濫用配置。對高風險投誠入口，它會變成需要被公開說明的制度風險。

最值得注意的是順序。使用者通過真人測試後記錄到六步安全指引。頁面先問是否位於中國大陸含港澳，再問是否使用中國大陸品牌手機或平板、外國品牌國行版或陸版手機或平板。接著才要求匿名取得外國品牌國際版手機或平板並恢復出廠設置，連接不需要實名認證的公共 Wi-Fi、使用 VPN、避免雲同步輸入法，並使用西方廠商瀏覽器與無痕或隱身視窗<sup>3</sup>。

這些提醒說明營運方知道風險不只在內容，也包括裝置、網路、輸入法、瀏覽器與所在地。可是使用者必須先進入一般網域、載入第三方資源、完成 AWS WAF CAPTCHA，才看得到這些提醒。高風險情境中的批判重點就在這裡。安全教育放在某些接觸足跡形成之後，會讓使用者承擔過早發出信號的成本。

## 初次投遞是不可逆信號

投誠入口可以被建模成三方不完全資訊賽局。投誠者握有私有資訊，包含情資真偽、可驗證程度、個人身分、風險承受度、是否已被監控。監控者握有另一組私有資訊，包含可見範圍、網路與實體監控能力、懲罰能力、誤判容忍度、是否能布建假訊號。吸收單位握有收件流程、驗證能力、內部權限、保護能力、資料保留政策與反滲透能力。

三方的目標不同。投誠者希望被可信吸收、降低報復與誤判、保留談判籌碼。監控者希望及早辨識接觸意圖、提高威懾、污染吸收單位判斷。吸收單位希望取得高價值情資、辨識假投誠、保護來源、避免入口被濫用。這些目標彼此衝突，於是形成三個階段。

第一是接觸前。吸收單位用公開入口、公開 threat model、資料政策、稽核紀錄與語氣發出制度信號。投誠者根據這些信號估算是否接觸。監控者也會觀察同一個公開入口，並思考哪些行為可被當成可疑信號。

第二是初始接觸。投誠者一旦接觸，通常會同時交出內容信號與 metadata 信號。內容信號幫助吸收單位判斷價值。metadata 信號可能讓監控者或第三方做關聯。對監控者而言，不需要讀到完整留言。只要知道某人曾在特定時間、特定環境中接觸特定入口，就可能足以改變處置。

第三是接觸後。吸收單位如何回應、保護、驗證或拒絕，會影響後續來源信任。監控者若對已暴露者報復、公開懲罰或製造示警效果，也會改變其他潛在投誠者的預期。這就是為什麼投誠入口的安全性不能只看「送出表單時有沒有 HTTPS」。入口設計會改變賽局中的預期收益。

資訊經濟學可以幫忙命名這個問題。Akerlof 的資訊不對稱模型提醒，買方無法分辨品質時，高品質供給者可能退出市場。投誠入口也有類似風險。吸收單位難以一開始分辨真投誠、假投誠與低品質通報；投誠者也難以分辨入口是否真能保護他。若保護承諾不可查，高價值來源可能選擇沉默或改走非制度路徑，留下較多低風險、低品質或惡意訊號<sup>4</sup>。

Spence 的信號理論也有用。投誠者可能用可驗證片段顯示情資價值。吸收單位也應用公開 threat model、第三方稽核、資料最小化與收件端隔離來顯示自己能承擔保護責任。可信承諾還涉及時間不一致問題。吸收單位在接觸前承諾保護來源，接觸後可能因政治成本、反滲透疑慮、內部權限或法律限制改變行動。若承諾缺少外部可查性與流程約束，理性的投誠者會把承諾折價<sup>4</sup>。

## PRISM 帶來的制度提醒

PRISM 不能拿來證明 NSB 網站有相同監控流程，也不能拿來說 AWS WAF 正在讀取投稿內容。它在這裡的用處比較窄，卻很重要。PRISM 讓讀者看到，電子通訊服務商、選擇器與法定協助，可以在國家安全制度中形成監控介面。

PCLOB 2023 年 Section 702 報告說，Section 702 授權美國政府在符合條件下，以美國電子通訊服務提供者的 compelled assistance，target 合理相信在美國境外的 non-U.S. persons。報告也說，Section 702 的 collection 包含 upstream、telephony 與 downstream，downstream collection 過去稱為 PRISM。若 NSA 要求，FBI 可向電子通訊服務提供者送達 702 directive，例如 email provider，要求提供 identified selector 的通訊。這裡的 selector 可以是 email address 這類通訊識別符<sup>5</sup>。

這段制度背景對 NSB 窗口的啟發，不在「誰正在監控誰」的指控。它提醒我們，當一個高風險投遞入口依賴雲端交付、防濫用、瀏覽器端驗證與第三方前端資源時，使用者需要知道哪些基礎設施可以看見他的連線、時間、裝置環境、token 或互動訊號。即使內容有 HTTPS，接觸前後的 metadata 還是可能成為制度與技術共同處理的對象。

這也是 NSB 公開窗口的核心缺口。服務沒有公開 threat model，使用者無法知道 CloudFront、S3、AWS WAF、cdnjs、後端服務與內部收件端各自能看見什麼。對一般聯絡表單，這也許只是隱私政策細節。對投誠入口，這是接觸前必須知道的風險邊界。

## Snowden 案中的接收者能力

Snowden 案常被放在監控揭露與新聞自由的框架下討論。若聚焦初次投遞，重點會變成接收者能力。Greenwald 在回憶錄節錄中寫到，他在 2012 年 12 月 1 日收到一封來自 Cincinnatus 的第一封信。對方的目的，是要求他開始使用 PGP 加密，因為找不到 Greenwald 的 public key。這個來源指出，沒有提供加密選項會讓與 Greenwald 溝通的人承擔風險<sup>6</sup>。

這個片段的啟發很直接。來源保護不是來源單方能完成的事。若接收者沒有準備好加密溝通、身份驗證、文件接收與安全處理流程，高價值來源的第一次接觸就可能卡住。Snowden 後續透過 Laura Poitras 與 Greenwald 建立聯絡，在香港會面，並選擇公開身份。Guardian 報導中，Snowden 說自己沒有打算躲在陰影裡，且希望焦點放在文件與公共辯論<sup>7</sup>。

這與跨境投誠不同。Snowden 是民主陣營內部國安吹哨者，最終選擇公開曝光與政治辯護。可是初次投遞賽局相通。來源會根據接收者的能力與反應速度，判斷是否繼續。接收者若讓來源先跨過高風險門檻，再才提供安全建議，就等於把前段成本推給來源。

## Manning、WikiLeaks 與入口可及性

Manning 案補上另一種失敗。Guardian 2013 年報導，Manning 在軍事審判陳述中表示，曾先嘗試把資料交給 Washington Post、New York Times 與 Politico，最後才轉向 WikiLeaks。報導寫到，Manning 在 2010 年 1 月休假期間聯絡 Washington Post，對方說需要由資深編輯審核。他又嘗試 New York Times 的 public editor 與其他電話，但只留下語音，沒有人回覆<sup>8</sup>。

這個案例說明，來源不只評估「哪個通道最安全」，也會評估「哪個接收者真的可達」。若主流機構入口不可及、回覆不明或缺少可理解的高風險流程，來源可能改走平台化、激進或非傳統入口。ACLU 的時間線也提醒，Manning 2010 年被捕，後來被控 aiding the enemy，2013 年該項罪名獲判無罪，但仍因其他罪名被判 35 年<sup>9</sup>。

WikiLeaks 的角色因此要小心處理。WikiLeaks 官方 About 頁自稱提供 secure and anonymous way for sources to leak information，並稱有匿名電子投遞箱、會分析與驗證材料、可能移除或延後公布某些足以危及生命的識別細節。它也自稱跨多法域操作伺服器且不保留 logs<sup>10</sup>。另一份 submissions 說明則描述了文件檢查、metadata 清理、leak descriptor、embargo 與 publication delay 等流程<sup>11</sup>。

這些材料有兩層意義。第一，WikiLeaks 把來源保護、文件接收、出版治理與政治論述包成同一個制度承諾。第二，這些多半是平台自述，不能當成外部審計結論。更重要的是，部分 WikiLeaks 來源指引包含具體操作建議，公共文章不應重述那些步驟。這裡只取制度層面的比較。它提醒我們，高風險入口不能只說「請留言」。它必須回答來源如何被接收、如何被驗證、如何避免 metadata 傷害、何時會發布或移交、誰可以碰到材料。

Benkler 對 WikiLeaks 與 networked fourth estate 的分析也能避免簡化。Benkler 指出，2010 年外交電報事件常被媒體敘述成一次性傾倒大量資料，但實際上包含分階段公開、傳統媒體合作、編輯選擇與風險處理<sup>12</sup>。這對 NSB 入口的提醒是，投遞不是送出表單的單點事件。後續處理制度會回頭影響來源一開始願不願意接觸。

## 國家監控型窗口的反面類型

中國 12339 與 12377 可以作為國家監控型窗口的反面類型。這裡的「反面」不是道德標籤，指的是制度目標相反。來源保護型入口要降低高風險提供者的可識別性，讓接收者在必要時也盡量少拿到來源 metadata。國家監控型窗口則常把舉報者納入治理網絡，透過分類、實名、獎勵與法律責任讓舉報可被處理、追蹤與動員。

12339 官方「國家安全機關舉報受理平台」說，它受理個人和組織發現的危害中華人民共和國國家安全情況線索。其舉報指南列出勾結境外機構、組織、個人，組織或煽動顛覆國家政權、投敵叛變、叛逃境外、間諜活動等類型。流程頁也說平台提供實名和匿名舉報方式，為了更好受理，建議實名舉報；提交後會產生查詢編碼<sup>13</sup>。

12339 的獎勵辦法更清楚地展現制度邏輯。它規定公民可以透過電話、網站、信函、當面、其他國家機關或所在單位等方式舉報。公民可以實名或匿名舉報，官方提倡並鼓勵實名。辦法同時說，相關機關與知情組織及個人應為舉報人保密；若舉報人或近親屬人身安全面臨危險，可以請求保護；符合條件者可獲精神或物質獎勵<sup>14</sup>。

12377「違法和不良信息舉報中心」則是網路治理型入口。官方指南要求舉報者依類別選擇入口，類別錯誤可能導致舉報無效；每位舉報主體 24 小時內原則上最多舉報 30 次；侵權類須實名；虛假、誣告、偽造證據或以舉報製造事端者要承擔法律責任。頁面標示其屬於中央網信辦，亦即國家互聯網信息辦公室<sup>15</sup>。

這些窗口與 NSB 的「中國民眾聯繫窗口」不在同一個法域，也不是同一個任務。它們的比較價值在於提醒，入口的語言與欄位會塑造使用者身份。SecureDrop 這類入口把人視為需要保護的 source。GlobaLeaks 把人視為可被匿名或具名配置的 reporting person。12339/12377 把人視為治理體系中的舉報主體。NSB 若希望服務高風險情資來源，公開入口就不能只讓使用者猜自己到底是一般留言者、檢舉者、潛在投誠者，還是會被納入後續保護流程的 source。

## 情資洩漏與人身安全場景

討論情資洩漏時，容易把注意力放在內容是否被第三方讀取。高風險投誠場景中，洩漏不一定指完整文字外流。較常見、也更早發生的風險，是接觸意圖、時間、裝置環境、網路環境、第三方服務互動、檔案 metadata、內部流轉紀錄或後續聯絡方式被關聯。

第一類是前段接觸信號。使用者進入公開網域、載入 CDN/WAF/第三方腳本、完成 CAPTCHA，這些都可能產生時間與環境足跡。外部文章無法確認監控者能否取得這些足跡，也不能確認 NSB 後端如何保存它們。可確認的是，這些足跡在訊息內容送出前已經形成。對高風險投誠者，順序本身就會影響風險估算。

第二類是第三方處理者與雲端邊界。CloudFront、S3、AWS WAF、cdnjs 都可能有正當工程目的。問題在於，匿名或投誠入口需要說明第三方能看見什麼、不能看見什麼、資料保存多久、是否會產生 WAF token 或 telemetry、誰能調閱。若沒有公開說明，使用者只能猜測。

第三類是內容與附件 metadata。即使傳輸安全，訊息本身也可能帶有地點、時間、文件作者、截圖環境、語氣習慣、組織內部資訊等識別線索。GlobaLeaks threat model 特別提醒，檔案 metadata 可能暴露作者或 whistleblower；系統也承認不會預設自動清理所有 metadata，因為 metadata 有時也是原始證據的一部分<sup>16</sup>。這對情資入口尤其重要。保護來源與保留證據價值常常相衝突，需要制度化 triage。

第四類是初始接觸被單獨標記。CoverDrop 論文指出，許多 whistleblower 先用不夠安全的方法接觸，再升級到 SecureDrop 等安全通道，屆時可能已經太晚。CoverDrop 的設計把 secure messaging 嵌入一般新聞 app，利用其他使用者產生 cover traffic，讓初始接觸不容易成為單獨可見事件<sup>17</sup>。

人身安全也不是提交表單後才開始。Gouzenko 1945 年帶出蘇聯文件後，最初接觸媒體與政府並不順暢。加拿大 Parks Canada 的歷史頁寫到，他知道任何延誤都可能對他致命；蘇方後來試圖抓回他未果，他與家人取得政治庇護，並以新身份在警察保護下生活到 1982 年<sup>18</sup>。Litvinenko 已在英國取得庇護與公民身分，仍於 2006 年因 polonium-210 中毒死亡。英國官方 inquiry 找到 strong circumstantial evidence 支持 Russian State responsibility，並認為 Lugovoy 與 Kovtun 在 FSB direction 下行動具有 strong probability<sup>19</sup>。

Skripal 案與 Mitrokhin 案也顯示，投誠者風險可以延伸到多年後、家屬與資料治理。英國政府表示 OPCW 確認 Salisbury 使用的毒性化學物質是 military grade nerve agent Novichok，英國並評估俄羅斯高度可能負責<sup>20</sup>。Churchill Archives Centre 記載，Mitrokhin 與家人及其檔案由英國 SIS 帶出；館方也標明部分原始手稿仍關閉與機密，且不能自行確認所有資訊真實性<sup>21</sup>。AP 2024 年報導，西班牙警方懷疑在 Alicante 一帶發現的槍擊遺體可能是 2023 年駕 Mi-8 投向烏克蘭的俄羅斯飛行員 Maksim Kuzminov，但當時仍有未明之處<sup>22</sup>。

這些案例不能用來指控 NSB 或台灣政府會造成相同後果。它們的價值在於提醒，投誠者風險是一個生命週期。接觸前、接觸中、接觸後、家屬、第三方、公開曝光、長期居留，都需要進入 threat model。

## 相關系統怎麼處理這個問題

SecureDrop、GlobaLeaks、OnionShare Receive Mode、CoverDrop 代表不同方向。SecureDrop 的重點是媒體組織安全接收匿名來源文件與訊息。官方隱私政策樣本說 SecureDrop application 不記錄來源 IP address、browser、computer 或 operating system，也不嵌第三方內容或 persistent cookies。它也有 Tor/onion、專用基礎設施、記者端工作站與離線檢視流程<sup>23</sup>。SecureDrop threat model 明列 Nation State、Law Enforcement、Global Adversary 等敵手，也列出 source 取得真實 Tails 或 Tor Browser、設備正確執行等假設<sup>24</sup>。

GlobaLeaks 更像可部署的組織化 whistleblowing platform。官方 threat model 說，不同使用場景需要在安全與可用性之間平衡，平台會告知使用者目前匿名狀態，並提供經 Tor Browser 匿名存取的最佳實務提示。該文件也說，GlobaLeaks 是為 direct Tor 或 TLS connection 到 application backend 設計，不鼓勵在前方使用 network 或 reverse proxies，因為可能干擾應用並損害 confidentiality 與 anonymity measures<sup>16</sup>。

OnionShare Receive Mode 則是低門檻工具。它可讓收件方在自己的電腦上啟動 Tor onion service，讓他人透過 Tor Browser 匿名提交檔案或訊息。它適合短期、低流量、臨時研究收件，但不等於政府級長期投誠通道。可用性、惡意檔案處理、長期收件、案件管理、人身安全與內部治理都要另行補上<sup>25</sup>。

CoverDrop 提供另一種值得注意的方向。它把 secure messaging 嵌入一般新聞 app，利用所有 app 使用者產生 cover traffic，避免讓真實來源被導向另一個高風險入口，也降低初始接觸被單獨標記的風險。論文明確設定 global passive adversary 與對 infrastructure providers 發 warrants 的威脅模型<sup>17</sup>。這對政府入口有一個重要啟發。若初始接觸本身就是風險，入口設計應該先保護「開始接觸」這件事。

這些工具都不能直接複製成政府投誠制度。政府接收情資還要面對反滲透、假投誠、濫用、法律責任與跨機關協調。可是它們共同顯示一件事。高風險通道需要公開 threat model、metadata 最小化、第三方可見面說明、收件端隔離與安全承諾。現行 NSB 公開窗口尚未在接觸前提供這些資訊。

| 類型 | 初次投遞設計 | 主要可信承諾 | 對 NSB 的啟發 |
|---|---|---|---|
| SecureDrop | Tor/onion 與專用收件流程 | 不記錄來源 IP、browser、computer、OS 的制度承諾 | 高風險入口應先交代 metadata 邊界 |
| GlobaLeaks | 可部署平台，可依情境配置匿名要求 | threat model、角色與收件治理 | 政府入口也需要公開威脅模型 |
| OnionShare Receive Mode | 收件者端 onion service | 輕量、短期、低門檻接收 | 適合臨時研究，不足以替代投誠制度 |
| CoverDrop | 嵌入一般新聞 app，以 cover traffic 保護初始接觸 | 降低第一次聯絡被標記的機率 | 初始接觸本身要被保護 |
| WikiLeaks | 平台自述的匿名電子投遞箱與出版流程 | source protection、metadata 清理與發布治理的自述 | 來源承諾需要制度化，也需要外部可查性 |
| 12339/12377 | 國家舉報分類、實名鼓勵或要求、獎勵與法律責任 | 治理、動員、查核與處置 | 入口語言會決定使用者在制度中的身份 |

## 對 NSB 網站服務的批判性評價

如果目標是一般聯絡，NSB 現行窗口有基本工程合理性。HTTPS、WAF、CAPTCHA、輸入清理與雲端交付都能降低網站攻擊與自動化濫用。國家機關也有防垃圾訊息、防惡意檔案、防敵方大量測試與保護後端服務的正當需求。文章不應把所有 WAF 或 CDN 使用都寫成錯誤。

如果目標包含高風險投誠或情資接觸，現行公開設計就有明顯缺口。

第一，安全指引出現太晚。高風險使用者應在接觸前就看到風險分級、適用對象、資料政策與替代通道。若安全建議要等到載入一般網域、第三方腳本與 WAF CAPTCHA 後才出現，初始信號已經產生。

第二，低風險表單與高風險入口沒有分流。留言、email、稱呼、電話、地區在同一個流程中呈現，即使只有留言必填，UI 仍然容易讓使用者把可識別聯絡方式視為正常欄位。對投誠場景，聯絡方式本身可能是高度敏感資訊。

第三，第三方可見面沒有公開說明。CloudFront、S3、AWS WAF、cdnjs 可以有合理用途，但高風險入口應說明哪些第三方會參與、會產生哪些 token 或遙測、哪些 log 可能存在、保存多久、誰能取得。若不能公開細節，也至少應公開原則與風險分級。

第四，缺少公開 threat model。服務應說明它預期保護誰、抵抗哪些對手、哪些情境不建議使用、哪些資料無法避免產生、哪些內容會被保留、何時會轉入人工或高風險流程。沒有 threat model，投誠者無法判斷通道是否值得冒險，公共監督者也無法評價安全承諾是否可置信。

第五，可信承諾不足。投誠入口不是單純把資料收進來。吸收單位必須處理收件權限、情資驗證、來源保護、家屬風險、惡意檔案隔離、誤報處理、反滲透與長期保護。公開網站不需要揭露保護細節，但應給出可被外部理解的制度邊界。

因此，這篇文章對 NSB 網站的評價不是「安全」或「不安全」的單一標籤。較精準的學術評價是，現行服務的可見部分符合低風險聯絡表單的常見工程配置，尚未達到高風險投誠入口應有的可置信來源保護標準。

## 建議

對潛在使用者來說，最保守的理解是把目前公開窗口視為會留下網路與瀏覽器足跡的一般 HTTPS 聯絡表單。低風險訊息可以依一般資料最小化原則處理。中高風險資訊提供者不應把無痕模式、VPN 或網站 CAPTCHA 理解成匿名保護。高風險投誠者或身處高度監控環境者，不宜在缺乏可信 threat model 與替代通道資訊時，把公開表單當成來源保護優先的接觸管道。

對營運方來說，第一步應該先做入口分級，暫緩安全宣稱。低風險聯絡表單可以保留。高風險接觸應有接觸前風險頁，頁面應低足跡、靜態、可公開查閱，先說明適用情境與不建議使用情境，再讓使用者選擇是否進入一般表單。

第二，公開 threat model。至少說明服務保護誰、抵抗哪些對手、第三方服務清單、metadata 可見範圍、log retention、資料保存期限、刪除流程、內部可讀角色、法律請求處理、惡意檔案隔離與安全事件回應。無法公開的部分，也應說明無法公開的類型與理由。

第三，降低第三方可觀察面。前端依賴應自託管或 bundle 到同源資產。若保留 CDN/WAF，應加入 SRI、CSP 與清楚的第三方處理說明。高風險流程應評估 onion service、GlobaLeaks、SecureDrop、CoverDrop 類思路或其他經審計方案，但要先完成政府情資場景的 threat model，不能把媒體工具直接套用。

第四，建立可信承諾。可信承諾不是一句「我們會保護你」。它包含版本化政策、外部安全審計、security.txt、漏洞通報窗口、資料最小化、收件人權限、稽核紀錄、例外處理與責任鏈。投誠者面對的是生命週期風險，吸收單位也應用生命週期承諾回應。

最後，公共討論應避免兩種簡化。第一種是把一般網站安全誤解成匿名保護。第二種是把任何雲端或 WAF 使用都直接判為惡意。較負責的評價，是要求高風險通道公開自己的賽局假設。投誠者、監控者、吸收單位都在看同一個入口。若入口只對低風險使用者友善，卻讓高風險者在資訊不足時先跨過可觀察門檻，這個設計就還沒有達到它的政治與安全重量。

## 參考資料

1. NSB 低侵入實測、人工 CAPTCHA 後流程記錄與查核紀錄。封存日期 2026-06-19。
2. AWS. "AWS WAF token characteristics." https://docs.aws.amazon.com/waf/latest/developerguide/waf-tokens-details.html。查閱日期 2026-06-19。
3. 使用者手動通過 CAPTCHA 後記錄的頁面文字。記錄日期 2026-06-19。
4. George A. Akerlof. "The Market for Lemons." DOI: https://doi.org/10.2307/1879431。Michael Spence. "Job Market Signaling." DOI: https://doi.org/10.2307/1882010。Finn E. Kydland and Edward C. Prescott. "Rules Rather Than Discretion." DOI: https://doi.org/10.1086/260580。
5. Privacy and Civil Liberties Oversight Board. "Report on the Surveillance Program Operated Pursuant to Section 702." https://documents.pclob.gov/prod/Documents/OversightReport/054417e4-9d20-427a-9850-862a6f29ac42/2023%20PCLOB%20702%20Report%20%28002%29.pdf。查閱日期 2026-06-19。
6. openDemocracy. "The Snowden saga begins." https://www.opendemocracy.net/en/snowden-saga-begins/。查閱日期 2026-06-19。
7. The Guardian. "Edward Snowden: the whistleblower behind the NSA surveillance revelations." https://www.theguardian.com/world/2013/jun/09/edward-snowden-nsa-whistleblower-surveillance。查閱日期 2026-06-19。
8. The Guardian. "Manning says he first tried to leak to Washington Post and New York Times." https://www.theguardian.com/world/2013/feb/28/manning-washington-post-new-york-times。查閱日期 2026-06-19。
9. ACLU. "The Chelsea Manning Case: A Timeline." https://www.aclu.org/news/free-speech/chelsea-manning-case-timeline。查閱日期 2026-06-19。
10. WikiLeaks. "About." https://wikileaks.org/About.html。查閱日期 2026-06-19。
11. WikiLeaks. "Understanding submissions." https://wikileaks.org/wiki/WikiLeaks%3AUnderstanding_submissions。查閱日期 2026-06-19。
12. Yochai Benkler. "A Free Irresponsible Press: Wikileaks and the Battle over the Soul of the Networked Fourth Estate." https://benkler.org/Benkler_Wikileaks_current.pdf。查閱日期 2026-06-19。
13. 國家安全機關舉報受理平台。「舉報指南」。https://www.12339.gov.cn/report/h5_guide。查閱日期 2026-06-19。
14. 國家安全機關舉報受理平台。「公民舉報危害國家安全行為獎勵辦法」。https://www.12339.gov.cn/article/h5_law_con/9。查閱日期 2026-06-19。
15. 違法和不良信息舉報中心。「舉報指南」。https://www.12377.cn/jbzn.html?tab=4。查閱日期 2026-06-19。
16. GlobaLeaks. "Threat model." https://docs.globaleaks.org/en/stable/technical/security/threat-model.html。查閱日期 2026-06-19。
17. Mansoor Ahmed-Rengers, Diana A. Vasile, Daniel Hugenroth, Alastair R. Beresford, and Ross Anderson. "CoverDrop: Blowing the Whistle Through A News App." Proceedings on Privacy Enhancing Technologies 2022(2):47-67. DOI: https://doi.org/10.2478/popets-2022-0035。
18. Parks Canada. "Gouzenko affair." https://parks.canada.ca/lhn-nhs/qc/stlaurent/culture/histoire-history/evenements-events/natcul2e。查閱日期 2026-06-19。
19. UK Home Office. "The Litvinenko inquiry: report into the death of Alexander Litvinenko." https://www.gov.uk/government/publications/the-litvinenko-inquiry-report-into-the-death-of-alexander-litvinenko。查閱日期 2026-06-19。
20. UK Government. "Novichok nerve agent use in Salisbury: UK government response." https://www.gov.uk/government/news/novichok-nerve-agent-use-in-salisbury-uk-government-response。查閱日期 2026-06-19。
21. Churchill Archives Centre. "The Papers of Vasiliy Mitrokhin (1922-2004)." https://archives.chu.cam.ac.uk/collections/mitrokhin/。查閱日期 2026-06-19。
22. Associated Press. "Spanish police suspect bullet-riddled body may be Russian who defected with army helicopter." https://apnews.com/article/f1071b2ca9a4594687d6e232a92237e8。查閱日期 2026-06-19。
23. SecureDrop. "Sample SecureDrop Privacy Policy." https://docs.securedrop.org/en/2.12/admin/deployment/sample_privacy_policy.html。查閱日期 2026-06-19。
24. SecureDrop. "Threat Model." https://docs.securedrop.org/en/stable/threat_model/threat_model.html。查閱日期 2026-06-19。
25. OnionShare. "How OnionShare Works." https://docs.onionshare.org/2.6.3/en/features.html。查閱日期 2026-06-19。
