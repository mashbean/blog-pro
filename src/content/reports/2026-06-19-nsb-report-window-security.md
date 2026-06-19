---
title: "通報入口的安全性不是只有 HTTPS"
description: "以 NSB「中國民眾聯繫窗口」為例，從 AWS WAF、第三方腳本與通過 CAPTCHA 後安全指引，分析一般 HTTPS 表單與 SecureDrop、GlobaLeaks、OnionShare Receive Mode 的差異。"
pubDate: 2026-06-19
tags: ["數位安全", "匿名通報", "SecureDrop", "GlobaLeaks", "OnionShare", "AWS WAF", "數位人權"]
category: "數位安全"
aiModel: "Codex GPT-5"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-06-19-nsb-report-window-security"
aiGeneratedDate: 2026-06-19
humanReviewed: true
lang: "zh-TW"
slug: "2026-06-19-nsb-report-window-security"
---

如果一個通報入口面向的是一般民眾，HTTPS、雲端防護、驗證碼、表單清理，大致可以算是合理的網站安全配置。可是當入口的對象包含中國境內、港澳，或其他可能面臨通訊監控與人身風險的人，問題就會超出「連線有沒有加密」。更重要的是，使用者在尚未送出任何內容之前，已經留下了哪些網路與瀏覽器足跡。

我在 2026 年 6 月 18 日對 `https://report.nsb.gov.tw` 做了一輪低侵入測試。測試範圍限於公開頁面抓取、DNS/TLS/headers、前端程式碼、瀏覽器點擊流程與通過 CAPTCHA 後的畫面狀態。沒有提交留言，沒有嘗試繞過 CAPTCHA，也沒有做漏洞掃描。這篇文章只討論公開面與可觀察證據能支持的判斷。服務端實際保存哪些日誌、保存多久、誰可讀取，外部測試無法確認。

## 先說結論

NSB「中國民眾聯繫窗口」目前比較像一般 HTTPS 聯絡表單加 AWS WAF CAPTCHA。它有 TLS、CloudFront、S3、AWS WAF、前端 CAPTCHA 與輸入清理，能提供基本傳輸安全與反機器人能力。可是它沒有呈現 SecureDrop 類型匿名通報系統的典型特徵，例如 onion service、公開 no-log 政策、避免第三方資源、公開威脅模型、可驗證的收件端加密與離線檢視流程。

最需要大眾知道的是，使用者在看到表單並完成 CAPTCHA 前後，瀏覽器已經連到 NSB 網域、AWS WAF CAPTCHA/token/challenge 端點，以及 Cloudflare cdnjs。AWS 官方文件明確說，AWS WAF token 會 fingerprint client session，包含 client identifiers、client-side signals、browser interrogation，並且在部分整合情境下可能包含滑鼠、按鍵與 HTML 表單互動資訊<sup>1</sup>。AWS 官方部落格也說 Challenge/CAPTCHA 流程會以 client-side script 詢問 client environment，產生 fingerprint，並用來建立可區分 client session 的 token<sup>2</sup>。

本地證據未支持 NSB 網站能讀取 MAC address、硬體序號或硬體層級的「機器碼」。較準確的描述是，這個流程會產生可被 AWS WAF 與雲端邊界觀察到的瀏覽器、請求與 CAPTCHA 足跡。對一般網站，這是常見反濫用設計。對高風險通報入口，它就是需要被公開說明的風險。

## 我們實際看到什麼

DNS 解析回 AWS CloudFront 位址，TLS 憑證由 Amazon 簽發。首頁、留言頁與 `script.js` 的 headers 顯示 Amazon S3 與 CloudFront；`/official/report` 的 OPTIONS 回應帶有 `x-amzn-waf-action: captcha`，顯示 API 前方有 AWS WAF CAPTCHA action<sup>3</sup>。

留言頁載入 Cloudflare cdnjs 的 DOMPurify、elliptic、crypto-js，也載入 AWS WAF CAPTCHA SDK。前端程式用 `AwsWafCaptcha.renderCaptcha` 顯示 CAPTCHA，驗證成功後取得 token，送出表單時以 `fetch("/official/report")` 傳送 JSON，header 包含 `X-Aws-Waf-Token`<sup>4</sup>。

通過 CAPTCHA 後的瀏覽器資產清單觀察到 AWS WAF 的 `problem`、`verify`、`inputs?client=browser`、`mp_verify`、`telemetry`、`voucher` 與 `challenge.js` 等端點<sup>4</sup>。空表單按下提交只觸發本機必填錯誤，畫面顯示「留言為必填」，工具沒有觀察到完整留言內容被送出的請求。這不等於所有邊界都沒有紀錄，因為 CAPTCHA、頁面載入與 OPTIONS/驗證流程本身仍會形成請求足跡。

前端程式碼中雖然載入 crypto-js 與 elliptic，但可見送出路徑是把 DOMPurify 清理後的 `formValue` 以 JSON 送到 `/official/report`。本地可見程式碼沒有顯示把留言用收件端公開金鑰做應用層端對端加密。這不代表後端完全沒有任何加密。它代表外部使用者看不見可驗證的前端 E2EE 邊界。

## 安全指引透露出的矛盾

使用者通過真人測試後記錄到六步安全指引。頁面先問使用者是否位於中國大陸含港澳，再問是否使用中國大陸品牌手機或平板、外國品牌國行版或陸版手機或平板。接著要求匿名取得外國品牌國際版手機或平板並恢復出廠設置。第四步要求連接不需要實名認證的公共 Wi-Fi，使用 VPN，並避免雲端同步輸入法。第五步要求使用西方廠商的瀏覽器並開啟無痕或隱身視窗。最後才引導使用者提供資訊<sup>5</sup>。

這些提醒本身是合理的。它們也說明營運方知道風險不只在訊息內容，還包括裝置、網路、輸入法、瀏覽器與所在地。問題在於，使用者必須先進入一般網域、載入第三方腳本、通過 AWS WAF CAPTCHA，才會看到這些安全指引。也就是說，風險教育出現在某些足跡已經形成之後。

如果營運方認為公共 Wi-Fi、VPN、輸入法與無痕視窗重要到需要逐步提示，入口本身也應該說清楚 CloudFront、AWS WAF、cdnjs、CAPTCHA token、browser interrogation 與服務端日誌會如何處理。沒有這些說明，使用者缺少判斷入口定位的資訊。

## AWS WAF 到底收什麼

AWS 官方文件提供了足夠清楚的邊界。CAPTCHA JavaScript API 文件說，CAPTCHA script 會自動載入 intelligent threat integration script，並在頁面載入時背景取得 token<sup>6</sup>。Token characteristics 文件說，token 儲存在 `aws-waf-token` cookie，內容加密，並以 sticky granular identifier fingerprint client session。文件列出的內容包括 silent challenge timestamp、CAPTCHA timestamp、client identifiers、client-side signals、browser interrogation。若使用 client application integration SDK，token 還會包含 end user 與頁面的 interactivity，例如 mouse movements、key presses、HTML form interactions<sup>1</sup>。

AWS 同頁也說，這些資訊 non-unique，不能 map to an individual human being，且 AWS 基於安全理由不提供 token 完整內容或 token encryption process 細節<sup>1</sup>。因此文章不能寫成 AWS WAF 直接識別真人身份。可是對敏感通報者來說，client session fingerprint、請求時間、IP、User-Agent、CAPTCHA 解題事件與瀏覽器互動訊號已經足以構成「可關聯足跡」。

這就是此類防護工具在匿名場景的兩難。它能提高自動化濫用成本，也能讓營運方擋掉攻擊與灌水。可是它的設計目標是區分 client session 與判斷人機互動。匿名通報入口若使用它，就應把這個取捨公開，不能只把使用者責任放在 VPN、公共 Wi-Fi 與無痕視窗。

## SecureDrop 提供的是另一種邊界

SecureDrop 是 Freedom of the Press Foundation 維護的開源 whistleblower submission system，主要供媒體組織安全接收匿名來源文件與訊息<sup>7</sup>。官方文件說，source 使用 Tor Browser 或 Tails 存取 Source Interface，也就是 public onion service；提交內容上傳時會在 Application Server 加密<sup>7</sup>。

SecureDrop 的差異不只在「使用 Tor」。官方文件明確說 SecureDrop application 不記錄來源 IP address、browser、computer 或 operating system，也不嵌第三方內容或 persistent cookies。伺服器只保存每個 source 最新訊息的日期與時間，新的訊息會覆蓋前一次訊息時間<sup>7</sup>。它的記者端也有更重的隔離流程，包含 Journalist Workstation、Transfer Device，以及 air-gapped Secure Viewing Station。提交內容在離線機器上解密與檢視，降低惡意檔案與外洩風險<sup>7</sup>。

這些承諾依賴正確部署、硬體隔離、訓練與操作紀律。SecureDrop 官方文件也提醒，沒有任何工具能保證百分之百安全。它的代價很高，部署需要兩台伺服器、防火牆、多個 USB、air-gapped computer，也需要系統管理員、記者訓練、2FA 憑證與長期維運<sup>7</sup>。這類系統無法靠加個表單完成。它是一整套組織安全流程。

因此 SecureDrop 適合高風險調查報導、NGO 與需要長期可信匿名投遞的組織。它未必是每個政府入口能立即採用的低成本方案，但它清楚展示了匿名優先系統應該有哪些公開承諾與操作邊界。

## GlobaLeaks 比 SecureDrop 更像平台

GlobaLeaks 是另一個開源 whistleblowing platform。它比 SecureDrop 更接近組織化表單與案件管理系統。官方安全文件說，GlobaLeaks 設計上避免記錄可能識別 whistleblowers 的敏感 metadata<sup>8</sup>。使用者匿名性由 Tor technology 提供，系統實作 Onion Service v3，並建議使用 Tor Browser<sup>8</sup>。

GlobaLeaks 也有一組值得注意的安全設計。官方文件說系統不使用 cookies 或 persistent local storage 來處理 authentication 或 session handling<sup>8</sup>。它以 GlobaLeaks EncryptionProtocol 加密 submission data、file attachments、messages 與 metadata<sup>8</sup>。在反濫用上，它使用 proof-of-work、session rate limiting、reports 與 attachments rate limiting。文件也提到 cache no-store、AppArmor、iptables、SQLite secure delete，以及高風險情境下搭配 PGP 與 air-gapped visualization 的建議<sup>8</sup>。

這種設計對公共機構很有啟發。若 NSB 需要結構化表單、收件者分流、案件管理與長期維運，GlobaLeaks 類平台比 SecureDrop 更接近政府窗口的日常需求。可是平台也不會自動解決治理問題。營運方仍要決定 log retention、收件者權限、資料保存期限、檔案隔離、濫用處理、誤報處理與法律請求流程。

## OnionShare Receive Mode 是輕量工具

OnionShare Receive Mode 的設計更輕。官方文件說 OnionShare 會在使用者自己的電腦啟動 web server，並透過 Tor onion service 提供給他人存取<sup>9</sup>。Receive Mode 可以讓其他人透過 Tor Browser 匿名提交 files and messages 到收件方電腦，官方把它描述成 anonymous dropbox<sup>9</sup>。

在沒有額外 webhook，且 onion address 與 private key 傳遞安全的前提下，OnionShare 的第三方依賴很少。官方說，因為使用者自己的電腦就是 web server，第三方無法接觸 OnionShare 中發生的內容，連 OnionShare 開發者也無法接觸；Tor onion services 也保護匿名性<sup>9</sup>。可是它的限制也很明確。收件方要安全分享 onion address 與 private key。服務可用性取決於收件方電腦是否開機連網。Receive Mode 不替收件方防護惡意檔案，官方把這類風險比擬成惡意 email attachments，並建議若要長期運作 anonymous dropbox，使用獨立、專用、常時開機的電腦<sup>9</sup>。

所以 OnionShare 適合短期、低流量、臨時研究收件，或作為尚未部署完整系統前的過渡工具。它不適合作為政府級長期窗口的唯一通道，因為案件管理、可用性、收件端隔離、惡意檔案處理與濫用處理都需要另外補上。

## 四種方案怎麼比較

| 方案 | 匿名性 | 第三方依賴 | 使用者負擔 | 營運成本 | 適合場景 |
|---|---|---|---|---|---|
| NSB 現行窗口 | 一般 HTTPS 表單，未見 onion service 或公開 no-log 承諾 | CloudFront、S3、AWS WAF、Cloudflare cdnjs | 表面低，但高風險使用者需自行處理網路、裝置、輸入法與瀏覽器風險 | 中低 | 低風險聯絡、一般訊息 |
| SecureDrop | Tor/onion service、no third-party、低 metadata、離線解密 | 設計上排除第三方通訊中介 | 高，需要 Tor Browser 或 Tails | 高，需要硬體、訓練、維運與離線流程 | 高風險吹哨、調查報導、NGO |
| GlobaLeaks | Onion Service v3、metadata minimization、資料加密 | 可自託管，也可依部署引入服務商 | 中，需要 Tor Browser 才有較佳匿名性 | 中，需要平台治理與收件流程 | 組織化通報、合規與公共機構 |
| OnionShare Receive Mode | Tor onion service anonymous dropbox | 預設不需第三方伺服器 | 中，需要 Tor Browser、onion address 與 private key | 低到中，長期使用需專用設備 | 臨時、低流量、短期匿名收件 |

這張表的用途在於顯示保護曲線。越接近匿名優先，越需要組織承擔營運責任。SecureDrop 要求高，是因為它把來源匿名、收件隔離、第三方排除與惡意檔案風險一起處理。GlobaLeaks 把匿名通報平台化，成本較低但仍需治理。OnionShare 把進入門檻降到最低，適合臨時收件，但不能代替長期制度。

NSB 現行窗口的問題在定位。它可以是低風險聯絡表單。它不能被包裝成足以保護高風險來源的匿名通報系統，除非營運方公開更多資訊，並提供更合適的高風險通道。

## 給潛在使用者的建議

低風險資訊提供者可以把這個窗口視為一般 HTTPS 聯絡表單。填表前請理解，CloudFront、AWS WAF CAPTCHA、cdnjs 與 NSB 後端都可能形成連線紀錄或請求足跡。若不需要回覆，避免填電話、真名、可識別 Email 或可回連身份的背景資訊。

中度敏感資訊提供者應採取資料最小化。不要把無痕模式理解成匿名。無痕模式主要降低本機瀏覽紀錄保存，不能消除 IP、DNS、SNI、User-Agent、第三方資源載入、CAPTCHA token 與 WAF 遙測。文件與截圖也可能含 metadata，提交前應先評估內容本身是否已暴露來源。

高風險人士，特別是身處中國境內、港澳或其他可能受到通訊監控與人身風險影響者，不應假設此窗口提供匿名來源保護。更穩健的作法是先暫停提交高敏感內容，尋求可信任的數位安全協助，或選擇有公開威脅模型、onion service、no-log 政策與收件安全流程的通道。

這裡不提供繞過 CAPTCHA、掃描網站、提交假通報或規避追蹤的操作教學。公共文章最該傳達的，是不要把一般網站安全誤解成匿名保護。

## 給營運方的建議

第一，公開 threat model。服務對象到底是一般民眾、海外中國人、中國境內人士、港澳人士，還是高風險吹哨者。不同對象需要不同入口。若服務對象包含高風險人士，就應公開 CloudFront、AWS WAF、後端 API、第三方 CDN、日誌保存、內部存取權限、資料保存期限與刪除流程。

第二，分流低風險與高風險通道。一般 HTTPS 表單可保留給低風險聯絡。高風險通道應考慮 onion service，或導入 GlobaLeaks、SecureDrop 類型平台。若暫時無法部署完整平台，也可以評估 OnionShare 類臨時收件工具，但必須搭配專用收件設備、惡意檔案隔離與資料刪除流程。

第三，減少第三方資源。DOMPurify、crypto-js、elliptic 等前端依賴應自託管或 bundle 到同源資產。若保留 CDN，至少加入 Subresource Integrity 與更嚴格的 CSP。頁面應明確說明使用者送出前會連到哪些第三方端點。

第四，重新評估 AWS WAF CAPTCHA 在高風險通道中的位置。AWS WAF 適合一般網站反機器人，但匿名通報場景應優先考慮低足跡反濫用策略，例如 onion service rate limit、較少指紋化的 proof-of-work、後端節流、人工 triage 與濫用佇列。營運方需要公開說明反濫用與來源保護的取捨。

第五，修正表單風險提示。電話與 Email 應明確標示為高風險選填，並提供不填聯絡方式也能送出的正常路徑。通過 CAPTCHA 後的六步指引已經提醒使用者避免雲端輸入法、注意裝置與網路；表單欄位也應跟這個風險認知一致。

第六，公開可驗證的加密邊界。若頁面暗示「資料傳送中」或安全傳輸，應說明它指的是 HTTPS、WAF 後端、資料庫加密，還是應用層端對端加密。若要建立高風險信任，應考慮公開前端收件加密邏輯、原始碼、第三方安全審計、security.txt 與漏洞通報窗口。這是透明治理建議，不是鼓勵外部掃描。

## 最後的判斷

`report.nsb.gov.tw` 的現行窗口有一般網站安全配置。它能保護傳輸途中不被普通旁觀者直接讀取，也能透過 AWS WAF 阻擋部分自動化濫用。可是它不能提供 SecureDrop 等級的來源保護，也沒有 GlobaLeaks 類平台的匿名通報治理，還沒有 OnionShare 這類 onion-based anonymous dropbox 的低第三方依賴。

對大眾來說，最實用的判斷是把它視為會留下網路與瀏覽器足跡的 HTTPS 聯絡表單。對學術機構與公共監督者來說，重點在於要求高風險通報入口公開自己的威脅模型，並避免把一般網站安全誤解為匿名保護。當一個入口要求使用者使用公共 Wi-Fi、VPN、無痕視窗與特定瀏覽器，它也應該同樣誠實地說明自己使用的 WAF、CDN、第三方腳本與日誌政策。

## 參考資料

1. AWS. "AWS WAF token characteristics." https://docs.aws.amazon.com/waf/latest/developerguide/waf-tokens-details.html。查閱日期 2026-06-19。
2. AWS. "Protect against bots with AWS WAF Challenge and CAPTCHA actions." https://aws.amazon.com/blogs/networking-and-content-delivery/protect-against-bots-with-aws-waf-challenge-and-captcha-actions/。查閱日期 2026-06-19。
3. 本地初步報告與 evidence map。`research/nsb-report-window-security-20260618/preliminary-report.md`、pipeline job `verification/evidence-map.md`。封存日期 2026-06-18 至 2026-06-19。
4. 本地低侵入實測封存。包含 `raw/static-refresh-20260618/`、`raw/browser-run-2026-06-18T05-01-40-459Z/`、`raw/aws-waf-keyword-summary.json`、`headers-api-options.txt`、`script.js`。封存日期 2026-06-18。
5. 使用者手動通過 CAPTCHA 後記錄的頁面文字。pipeline job `raw/user-captcha-guide-transcript.md`。記錄日期 2026-06-19。
6. AWS. "Using the CAPTCHA JavaScript API." https://docs.aws.amazon.com/waf/latest/developerguide/waf-js-captcha-api.html。查閱日期 2026-06-19。
7. SecureDrop. "What Is SecureDrop." https://docs.securedrop.org/en/2.12/what_is_securedrop.html。查閱日期 2026-06-19。
8. GlobaLeaks. "Application security." https://docs.globaleaks.org/en/stable/technical/security/application-security.html。查閱日期 2026-06-19。
9. OnionShare. "How OnionShare Works." https://docs.onionshare.org/2.6.1/en/features.html。查閱日期 2026-06-19。
