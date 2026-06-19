---
title: "投誠者的資訊安全賽局"
description: "以 NSB「中國民眾聯繫窗口」為例，把投誠者、監控者與吸收單位放進同一個資訊安全賽局，分析初始接觸、情資洩漏、人身安全與可信承諾。"
pubDate: 2026-06-19
updatedDate: 2026-06-19
tags: ["數位安全", "匿名通報", "投誠", "情資", "SecureDrop", "GlobaLeaks", "CoverDrop", "AWS WAF", "數位人權"]
category: "數位安全"
aiModel: "Codex GPT-5"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-06-19-defector-security-game-revision"
aiGeneratedDate: 2026-06-19
humanReviewed: true
lang: "zh-TW"
slug: "2026-06-19-nsb-report-window-security"
---

若把 `report.nsb.gov.tw` 當成一般民眾聯絡表單，評價標準大致是 HTTPS 是否正常、表單是否能防濫用、輸入是否清理、服務是否穩定。若把它放進「中國民眾聯繫窗口」這個語境，且服務對象可能包含身處中國境內、港澳，或其他高壓監控環境中的資訊提供者，評價標準會立刻變得更嚴格。此時問題不只在訊息送出後是否加密，也在使用者尚未提交前，是否已留下足以被關聯的接觸信號。

更進一步說，若有人把這個窗口理解成投誠或高風險情資接觸的入口，它面對的就不是單純的網站安全題。投誠者、監控者、吸收單位三方都在不完全資訊下行動。投誠者不知道通道能否保護他。監控者不需要讀到完整留言，只要掌握足以識別接觸意圖的信號，就能提高威懾。吸收單位想取得高價值情資，也要防假投誠、反滲透、惡意檔案與濫用。三方 payoff 彼此牽制，入口設計本身就是賽局規則的一部分。

這篇文章是前一版 NSB 窗口安全評估的第二版。上一版已經確認，現行可見設計比較像一般 HTTPS 聯絡表單加 AWS WAF CAPTCHA。這一版保留那個證據邊界，並加入賽局分析、情資洩漏場景、人身安全場景、國際歷史案例與相關文獻。結論也因此更清楚。現行公開入口可以承接低風險聯絡，但不足以讓高風險投誠者合理相信，它已經把來源保護放在服務設計的第一順位。

## 先把證據放穩

2026 年 6 月 18 日的低侵入測試只涵蓋公開頁面、DNS/TLS/headers、前端程式碼、瀏覽器點擊流程與通過 CAPTCHA 後畫面狀態。測試沒有提交留言，沒有繞過 CAPTCHA，也沒有做漏洞掃描。外部測試無法確認 NSB 後端保存哪些日誌、保存多久、誰可讀取，也無法確認是否另有非公開高風險通道<sup>1</sup>。

可觀察事實是，`report.nsb.gov.tw` 的公開前端使用 CloudFront/S3、AWS WAF CAPTCHA、cdnjs 依賴與前端 JSON 表單流程。留言頁載入 AWS WAF CAPTCHA SDK，完成 CAPTCHA 後送出表單時會帶 `X-Aws-Waf-Token`。先前瀏覽器測試也觀察到 AWS WAF 的 `inputs?client=browser`、`mp_verify`、`telemetry`、`verify`、`voucher` 與 `challenge.js` 等端點<sup>1</sup>。

AWS 官方文件說，AWS WAF token 會 fingerprint client session，內容包含 client identifiers、client-side signals、browser interrogation。在部分 client integration 情境下，token 也可能包含 end user 與頁面的 interactivity，例如 mouse movements、key presses、HTML form interactions。AWS 同頁也說這些資訊 non-unique，不能 map to an individual human being，且 token 完整內容與加密程序不公開<sup>2</sup>。

所以文章不能寫成 NSB 網站已證明能讀取 MAC address、硬體序號或硬體層級的「機器碼」。現有證據支持的說法較窄。使用者在送出內容前，可能已產生網路、瀏覽器、WAF token 與 CAPTCHA 相關足跡。對一般網站，這是常見防濫用配置。對高風險投誠入口，它會變成需要被公開說明的制度風險。

最值得注意的是順序。使用者通過真人測試後記錄到六步安全指引。頁面先問是否位於中國大陸含港澳，再問是否使用中國大陸品牌手機或平板、外國品牌國行版或陸版手機或平板。接著才要求匿名取得外國品牌國際版手機或平板並恢復出廠設置，連接不需要實名認證的公共 Wi-Fi、使用 VPN、避免雲同步輸入法，並使用西方廠商瀏覽器與無痕或隱身視窗<sup>3</sup>。

這些提醒說明營運方知道風險不只在內容，也包括裝置、網路、輸入法、瀏覽器與所在地。可是使用者必須先進入一般網域、載入第三方資源、完成 AWS WAF CAPTCHA，才看得到這些提醒。高風險情境中的批判重點就在這裡。安全教育放在某些接觸足跡形成之後，會讓使用者承擔過早發出信號的成本。

## 三方賽局

投誠入口可以被建模成三方不完全資訊賽局。投誠者握有私有資訊，包含情資真偽、可驗證程度、個人身分、風險承受度、是否已被監控。監控者握有另一組私有資訊，包含可見範圍、網路與實體監控能力、懲罰能力、誤判容忍度、是否能布建假訊號。吸收單位握有收件流程、驗證能力、內部權限、保護能力、資料保留政策與反滲透能力。

三方的目標不同。投誠者希望被可信吸收、降低報復與誤判、保留談判籌碼。監控者希望及早辨識接觸意圖、提高威懾、污染吸收單位判斷。吸收單位希望取得高價值情資、辨識假投誠、保護來源、避免入口被濫用。這些目標彼此衝突，於是形成三個階段。

第一是接觸前。吸收單位用公開入口、公開 threat model、資料政策、稽核紀錄與語氣發出制度信號。投誠者根據這些信號估算是否接觸。監控者也會觀察同一個公開入口，並思考哪些行為可被當成可疑信號。

第二是初始接觸。投誠者一旦接觸，通常會同時交出內容信號與 metadata 信號。內容信號幫助吸收單位判斷價值。metadata 信號可能讓監控者或第三方做關聯。對監控者而言，不需要讀到完整留言。只要知道某人曾在特定時間、特定環境中接觸特定入口，就可能足以改變處置。

第三是接觸後。吸收單位如何回應、保護、驗證或拒絕，會影響後續來源信任。監控者若對已暴露者報復、公開懲罰或製造示警效果，也會改變其他潛在投誠者的預期。這就是為什麼投誠入口的安全性不能只看「送出表單時有沒有 HTTPS」。入口設計會改變賽局中的預期收益。

資訊經濟學可以幫忙命名這個問題。Akerlof 的資訊不對稱模型提醒，買方無法分辨品質時，高品質供給者可能退出市場。投誠入口也有類似風險。吸收單位難以一開始分辨真投誠、假投誠與低品質通報；投誠者也難以分辨入口是否真能保護他。若保護承諾不可查，高價值來源可能選擇沉默或改走非制度路徑，留下較多低風險、低品質或惡意訊號<sup>4</sup>。

Spence 的信號理論也有用。投誠者可能用可驗證片段顯示情資價值。吸收單位也應用公開 threat model、第三方稽核、資料最小化與收件端隔離來顯示自己能承擔保護責任。可信承諾還涉及時間不一致問題。吸收單位在接觸前承諾保護來源，接觸後可能因政治成本、反滲透疑慮、內部權限或法律限制改變行動。若承諾缺少外部可查性與流程約束，理性的投誠者會把承諾折價<sup>4</sup>。

## 相關文獻的定位

國安洩密與 whistleblowing 文獻能補上另一層背景。Pozen 對美國國安洩密治理的分析指出，政府一方面正式譴責未授權揭露，一方面在實務上長期容忍某些匿名洩漏，並以非正式社會控制補上正式紀律的不足<sup>15</sup>。這篇文獻不能直接證明 NSB 個案，卻提醒我們，高敏感資訊流動通常由法律、組織文化、非正式懲罰、政治成本與媒體環境共同塑造。

Fischer 與 Gollwitzer 對 whistleblowing 研究方法的回顧也提醒，實際揭露行為在真實組織中相對罕見且難以觀察，研究常以 scenario studies、autobiographical recall、immersive behavioral paradigms 與 economic games 近似測量，且 whistleblowing intention 與實際行為應被視為不同構念<sup>16</sup>。因此，把一般 whistleblowing 研究外推到跨境投誠時必須保守。它能支撐「報復預期會影響接觸意願」這種方向性判斷，不能直接預測特定入口會造成多少人使用或放棄。

政策史材料則把問題拉回吸收單位。FRUS 1967 年美國國務院文件討論 Soviet defectors 的處理政策時，同時列出情報目標、未來蘇方如何對待美國投誠者、人道考量，以及避免美蘇關係不必要複雜化等因素<sup>17</sup>。Riehle 對冷戰早期英美投誠政策與實務演化的研究，也可作為後續閱讀，說明投誠者處理本身就是政策與實務的制度史題目<sup>18</sup>。這些材料共同支持一個較謙抑的結論。高風險入口的問題不只在表單技術，也在吸收單位能否提出可理解、可檢視、可約束的制度承諾。

## 情資洩漏的場景

討論情資洩漏時，容易把注意力放在內容是否被第三方讀取。高風險投誠場景中，洩漏不一定指完整文字外流。較常見、也更早發生的風險，是接觸意圖、時間、裝置環境、網路環境、第三方服務互動、檔案 metadata、內部流轉紀錄或後續聯絡方式被關聯。

第一類是前段接觸信號。使用者進入公開網域、載入 CDN/WAF/第三方腳本、完成 CAPTCHA，這些都可能產生時間與環境足跡。外部文章無法確認監控者能否取得這些足跡，也不能確認 NSB 後端如何保存它們。可確認的是，這些足跡在訊息內容送出前已經形成。對高風險投誠者，順序本身就會影響風險估算。

第二類是第三方處理者與雲端邊界。CloudFront、S3、AWS WAF、cdnjs 都可能有正當工程目的。問題在於，匿名或投誠入口需要說明第三方能看見什麼、不能看見什麼、資料保存多久、是否會產生 WAF token 或 telemetry、誰能調閱。若沒有公開說明，使用者只能猜測。

第三類是內容與附件 metadata。即使傳輸安全，訊息本身也可能帶有地點、時間、文件作者、截圖環境、語氣習慣、組織內部資訊等識別線索。GlobaLeaks threat model 特別提醒，檔案 metadata 可能暴露作者或 whistleblower；系統也承認不會預設自動清理所有 metadata，因為 metadata 有時也是原始證據的一部分<sup>5</sup>。這對情資入口尤其重要。保護來源與保留證據價值常常相衝突，需要制度化 triage。

第四類是內部處理與後續回應。誰能讀取留言、是否分級、是否記錄處理者、是否允許複製、如何隔離惡意檔案、如何清理可識別資訊、如何處理誤報與敵方滲透，這些問題都在網站前端之外。外部測試看不到答案，所以文章應把它們列為要求公開或至少公開原則的事項，而非自行推斷。

## 人身安全的場景

投誠者的風險也不會在送出表單後結束。可分成幾種情境。

第一種是接觸前被辨識。監控者若能把某個人與某個入口的早期接觸關聯，可能還不需要知道內容，就足以提高盤查、威懾或人際壓力。這是 CoverDrop 論文強調初始接觸安全的原因。該論文指出，許多 whistleblower 先用不夠安全的方法接觸，再升級到 SecureDrop 等安全通道，屆時可能已經太晚。CoverDrop 的設計則把一般新聞 app 使用者產生的 cover traffic 納入保護，讓真實接觸較不易被單獨標記<sup>6</sup>。

第二種是吸收單位反應延遲。Gouzenko 1945 年帶出蘇聯文件後，最初接觸媒體與政府並不順暢。加拿大 Parks Canada 的歷史頁明確寫到，他知道任何延誤都可能對他致命；蘇方後來試圖抓回他未果，他與家人取得政治庇護，並以新身份在警察保護下生活到 1982 年<sup>7</sup>。這個案例提醒，投誠入口不是客服工單。若涉及高風險者，接案、升級、保護與安置的時間窗很短。

第三種是成功接觸後的長期追索。Litvinenko 已在英國取得庇護與公民身分，仍於 2006 年因 polonium-210 中毒死亡。英國官方 inquiry 找到強烈 circumstantial evidence 支持 Russian State responsibility，並認為 Lugovoy 與 Kovtun 在 FSB direction 下行動具有 strong probability<sup>8</sup>。Skripal 案也顯示，投誠多年後仍可能成為境外攻擊目標。英國政府表示 OPCW 確認 Salisbury 使用的毒性化學物質是 military grade nerve agent Novichok，英國並評估俄羅斯高度可能負責<sup>9</sup>。

第四種是家屬與第三方風險。Gordievsky 案與 Mitrokhin 案都顯示，高價值來源常牽涉家屬、檔案、長期身份與安置。Churchill Archives Centre 記載，Mitrokhin 與家人及其檔案由英國 SIS 帶出；館方也清楚標明部分原始手稿仍關閉與機密，且不能自行確認所有資訊真實性<sup>10</sup>。這說明吸收單位要處理的不只是「收到資料」，還包括人與證據的長期治理。

第五種是近期戰爭情境中的投誠後安全。AP 2024 年報導，西班牙警方懷疑在 Alicante 一帶發現的槍擊遺體可能是俄羅斯飛行員 Maksim Kuzminov，他 2023 年駕 Mi-8 軍用直升機投向烏克蘭。烏克蘭軍情代表向當地媒體確認這名前俄羅斯飛行員在西班牙死亡，但當時仍不清楚他如何以及為何前往西班牙<sup>11</sup>。這個案例適合提示風險，不適合把未完成司法歸因寫成定論。

這些案例不能用來指控 NSB 或台灣政府會造成相同後果。它們的價值在於提醒，投誠者風險是一個生命週期。接觸前、接觸中、接觸後、家屬、第三方、公開曝光、長期居留，都需要進入 threat model。

## 相關系統怎麼處理這個問題

SecureDrop、GlobaLeaks、OnionShare Receive Mode、CoverDrop 代表不同方向。SecureDrop 的重點是媒體組織安全接收匿名來源文件與訊息。官方文件說 SecureDrop application 不記錄來源 IP address、browser、computer 或 operating system，也不嵌第三方內容或 persistent cookies。它也有 Tor/onion、專用基礎設施、記者端工作站與離線檢視流程<sup>12</sup>。SecureDrop threat model 明列 Nation State、Law Enforcement、Global Adversary 等敵手，也列出 source 取得真實 Tails 或 Tor Browser、設備正確執行等假設<sup>13</sup>。

GlobaLeaks 更像可部署的組織化 whistleblowing platform。官方 threat model 說，不同使用場景需要在安全與可用性之間平衡，平台會告知使用者目前匿名狀態，並提供經 Tor Browser 匿名存取的最佳實務提示。管理員可依情境強制 whistleblower 使用 Tor Browser 送件<sup>5</sup>。這種文件的重點不只在技術功能，也在讓部署者與使用者知道系統承諾防什麼、無法防什麼。

OnionShare Receive Mode 則是低門檻工具。它可讓收件方在自己的電腦上啟動 Tor onion service，讓他人透過 Tor Browser 匿名提交檔案或訊息。它適合短期、低流量、臨時研究收件，但不等於政府級長期投誠通道。可用性、惡意檔案處理、長期收件、案件管理、人身安全與內部治理都要另行補上<sup>14</sup>。

CoverDrop 提供另一種值得注意的方向。它把 secure messaging 嵌入一般新聞 app，利用所有 app 使用者產生 cover traffic，避免讓真實來源被導向另一個高風險入口，也降低初始接觸被單獨標記的風險。論文明確設定 global passive adversary 與對 infrastructure providers 發 warrants 的威脅模型<sup>6</sup>。這對政府入口有一個重要啟發。若初始接觸本身就是風險，入口設計應該先保護「開始接觸」這件事。

這些工具都不能直接複製成政府投誠制度。政府接收情資還要面對反滲透、假投誠、濫用、法律責任與跨機關協調。可是它們共同顯示一件事。高風險通道需要公開 threat model、metadata 最小化、第三方可見面說明、收件端隔離與安全承諾。現行 NSB 公開窗口尚未在接觸前提供這些資訊。

## 對 NSB 網站服務的批判性評價

如果目標是一般聯絡，NSB 現行窗口有基本工程合理性。HTTPS、WAF、CAPTCHA、輸入清理與雲端交付都能降低網站攻擊與自動化濫用。國家機關也有防垃圾訊息、防惡意檔案、防敵方大量測試與保護後端服務的正當需求。文章不應把所有 WAF 或 CDN 使用都寫成錯誤。

如果目標包含高風險投誠或情資接觸，現行公開設計就有明顯缺口。

第一，安全指引出現太晚。高風險使用者應在接觸前就看到風險分級、適用對象、資料政策與替代通道，而不是完成 WAF CAPTCHA 後才看到公共 Wi-Fi、VPN、輸入法與瀏覽器提醒。

第二，低風險表單與高風險入口沒有分流。留言、email、稱呼、電話、地區在同一個流程中呈現，即使只有留言必填，UI 仍然容易讓使用者把可識別聯絡方式視為正常欄位。對投誠場景，聯絡方式本身可能是高度敏感資訊。

第三，第三方可見面沒有公開說明。CloudFront、S3、AWS WAF、cdnjs 可以有合理用途，但高風險入口應說明哪些第三方會參與、會產生哪些 token 或遙測、哪些 log 可能存在、保存多久、誰能取得。若不能公開細節，也至少應公開原則與風險分級。

第四，缺少公開 threat model。服務應說明它預期保護誰、抵抗哪些對手、哪些情境不建議使用、哪些資料無法避免產生、哪些內容會被保留、何時會轉入人工或高風險流程。沒有 threat model，投誠者無法判斷通道是否值得冒險，公共監督者也無法評價安全承諾是否可置信。

第五，可信承諾不足。投誠入口不是單純把資料收進來。吸收單位必須處理收件權限、情資驗證、來源保護、家屬風險、惡意檔案隔離、誤報處理、反滲透與長期保護。公開網站不需要揭露保護細節，但應給出可被外部理解的制度邊界。

因此，這篇文章對 NSB 網站的評價不是「安全」或「不安全」的單一標籤。較精準的學術評價是，現行服務的可見部分符合低風險聯絡表單的常見工程配置，尚未達到高風險投誠入口應有的可置信來源保護標準。

## 建議

對潛在使用者來說，最保守的理解是把目前公開窗口視為會留下網路與瀏覽器足跡的一般 HTTPS 聯絡表單。低風險訊息可以依一般資料最小化原則處理。中高風險資訊提供者不應把無痕模式、VPN 或網站 CAPTCHA 理解成匿名保護。高風險投誠者或身處高度監控環境者，不宜在缺乏可信 threat model 與替代通道資訊時，把公開表單當成來源保護優先的接觸管道。

對營運方來說，第一步應該是把入口分級，而非急著宣稱安全。低風險聯絡表單可以保留。高風險接觸應有接觸前風險頁，頁面應低足跡、靜態、可公開查閱，先說明適用情境與不建議使用情境，再讓使用者選擇是否進入一般表單。

第二，公開 threat model。至少說明服務保護誰、抵抗哪些對手、第三方服務清單、metadata 可見範圍、log retention、資料保存期限、刪除流程、內部可讀角色、法律請求處理、惡意檔案隔離與安全事件回應。無法公開的部分，也應說明無法公開的類型與理由。

第三，降低第三方可觀察面。前端依賴應自託管或 bundle 到同源資產。若保留 CDN/WAF，應加入 SRI、CSP 與清楚的第三方處理說明。高風險流程應評估 onion service、GlobaLeaks、SecureDrop、CoverDrop 類思路或其他經審計方案，但要先完成政府情資場景的 threat model，而不是把媒體工具直接套用。

第四，建立可信承諾。可信承諾不是一句「我們會保護你」。它包含版本化政策、外部安全審計、security.txt、漏洞通報窗口、資料最小化、收件人權限、稽核紀錄、例外處理與責任鏈。投誠者面對的是生命週期風險，吸收單位也應用生命週期承諾回應。

最後，公共討論應避免兩種簡化。第一種是把一般網站安全誤解成匿名保護。第二種是把任何雲端或 WAF 使用都直接判為惡意。較負責的評價，是要求高風險通道公開自己的賽局假設。投誠者、監控者、吸收單位都在看同一個入口。若入口只對低風險使用者友善，卻讓高風險者在資訊不足時先跨過可觀察門檻，這個設計就還沒有達到它的政治與安全重量。

## 參考資料

1. 本地 NSB 低侵入實測與上一版 evidence map。revision job `raw/previous-nsb-evidence/evidence-map.md`、`raw/previous-nsb-evidence/fact-check-report.md`、`raw/previous-version/blog-pro-2026-06-19-nsb-report-window-security.md`。封存日期 2026-06-19。
2. AWS. "AWS WAF token characteristics." https://docs.aws.amazon.com/waf/latest/developerguide/waf-tokens-details.html。查閱日期 2026-06-19。
3. 使用者手動通過 CAPTCHA 後記錄的頁面文字。revision job `raw/previous-nsb-evidence/user-captcha-guide-transcript.md`。記錄日期 2026-06-19。
4. George A. Akerlof. "The Market for Lemons." DOI: https://doi.org/10.2307/1879431。Michael Spence. "Job Market Signaling." DOI: https://doi.org/10.2307/1882010。Finn E. Kydland and Edward C. Prescott. "Rules Rather Than Discretion." DOI: https://doi.org/10.1086/260580。
5. GlobaLeaks. "Threat model." https://docs.globaleaks.org/en/stable/technical/security/threat-model.html。查閱日期 2026-06-19。
6. Mansoor Ahmed-Rengers, Diana A. Vasile, Daniel Hugenroth, Alastair R. Beresford, and Ross Anderson. "CoverDrop: Blowing the Whistle Through A News App." Proceedings on Privacy Enhancing Technologies 2022(2):47-67. DOI: https://doi.org/10.2478/popets-2022-0035。
7. Parks Canada. "Gouzenko affair." https://parks.canada.ca/lhn-nhs/qc/stlaurent/culture/histoire-history/evenements-events/natcul2e。查閱日期 2026-06-19。
8. UK Home Office. "The Litvinenko inquiry: report into the death of Alexander Litvinenko." https://www.gov.uk/government/publications/the-litvinenko-inquiry-report-into-the-death-of-alexander-litvinenko。查閱日期 2026-06-19。
9. UK Government. "Novichok nerve agent use in Salisbury: UK government response." https://www.gov.uk/government/news/novichok-nerve-agent-use-in-salisbury-uk-government-response。查閱日期 2026-06-19。
10. Churchill Archives Centre. "The Papers of Vasiliy Mitrokhin (1922-2004)." https://archives.chu.cam.ac.uk/collections/mitrokhin/。查閱日期 2026-06-19。
11. Associated Press. "Spanish police suspect bullet-riddled body may be Russian who defected with army helicopter." https://apnews.com/article/f1071b2ca9a4594687d6e232a92237e8。查閱日期 2026-06-19。
12. SecureDrop. "What Is SecureDrop." https://docs.securedrop.org/en/2.12/what_is_securedrop.html。查閱日期 2026-06-19。
13. SecureDrop. "Threat Model." https://docs.securedrop.org/en/stable/threat_model/threat_model.html。查閱日期 2026-06-19。
14. OnionShare. "How OnionShare Works." https://docs.onionshare.org/2.6.1/en/features.html。查閱日期 2026-06-19。
15. David E. Pozen. "The Leaky Leviathan: Why the Government Condemns and Condones Unlawful Disclosures of Information." Harvard Law Review 127:512, 2013. https://harvardlawreview.org/print/vol-127/the-leaky-leviathan-why-the-government-condemns-and-condones-unlawful-disclosures-of-information/
16. Fischer, Moritz, and Mario Gollwitzer. "Whistleblowing Paradigms." Collabra: Psychology 9(1):87493, 2023. https://epub.ub.uni-muenchen.de/108246/1/collabra_2023_9_1_87493.pdf
17. U.S. Office of the Historian. "Telegram From the Department of State to the Embassy in the Soviet Union." FRUS 1964-1968, Volume XIV, Document 259. https://history.state.gov/historicaldocuments/frus1964-68v14/d259。查閱日期 2026-06-19。
18. Kevin P. Riehle. "Early Cold War evolution of British and US defector policy and practice." Cold War History. DOI: https://doi.org/10.1080/14682745.2018.1539079。
