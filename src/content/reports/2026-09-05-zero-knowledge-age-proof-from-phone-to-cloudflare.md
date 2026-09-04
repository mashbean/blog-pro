---
title: "只回答「已滿 18 歲」：把零知識年齡證明從手機做到 Cloudflare"
description: "以有備而來與 OpenAC 電路做出不揭露生日的年齡證明，從 Mac 驗證、Cloudflare 容器部署到 Prepare 快取，記錄實測秒數、費用、與 SD-JWT-VC 的隱私權衡及政策建議。"
topic: digital-identity
tags: ["數位皮夾", "可驗證憑證", "年齡驗證", "假名與匿名", "密碼學", "隱私", "開源", "台灣"]
keywords: ["零知識證明", "ZKP", "OpenAC", "zkID", "Spartan2", "有備而來", "SD-JWT VC", "選擇性揭露", "年齡證明", "不可關聯性", "Cloudflare Containers", "Workers Builds", "MyData", "自然人憑證", "請出示皮夾"]
pubDate: 2026-09-05
draft: false
lang: "zh-TW"
aiModel: "Anthropic Claude Fable 5.1"
aiPrompt: "依有備而來 iOS 原始碼、twdiw-vp-verifier-lite 原始碼與部署紀錄、zkID 論文與 README 效能表、Cloudflare 官方文件、以及 2026 年 9 月 4 至 5 日在 iPhone 14、Mac 與 Cloudflare 容器上的實測秒數，撰寫零知識年齡證明的開發報告、三路徑對照與政策建議。"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-09-05-zero-knowledge-age-proof-from-phone-to-cloudflare"
aiGeneratedDate: 2026-09-05
humanReviewed: false
category: "數位政府與數位身分"
series: "ready-digital-government"
seriesOrder: 4
slug: "2026-09-05-zero-knowledge-age-proof-from-phone-to-cloudflare"
---

_這是「有備而來，理想的政府數位身分與資料 App 開發報告」第四篇。本文依 2026 年 9 月 4 日至 5 日的原始碼、Cloudflare 部署與實機操作撰寫。所有秒數來自 App 與驗證器自動記錄的單機樣本，數量很少，只報原始值與中位數，不稱為 p95。測試用真實卡片時只記錄階段、結果、耗時與錯誤類型；本文與程式碼都不收錄出生日期、統一編號或任何揭露欄位。_

前三篇做的是「出示」：把政府卡片與 MyData 資料收進手機，再以選擇性揭露交給查驗方核對姓名、門號末五碼或駕照種類。這一篇往前再走一步，回答一個更小、也更難的問題：能不能連生日都不給，只回答「已滿 18 歲」，而查驗方仍然能用數學確認這個回答沒有作假？

答案是能，而且已經在 iPhone、Mac 與 Cloudflare 容器上跑通。代價是手機要算幾秒、驗證端要養一個吃半 GB 記憶體的程式。這篇報告把過程、數字與取捨寫下來。

## 先用三十秒說清楚零知識證明

去便利商店買酒，店員要確認你成年。有三種做法。

第一種是把身分證整張給看。店員得到姓名、住址、統一編號和生日，只為了知道一個是非題。

第二種是數位皮夾的選擇性揭露，也就是前幾篇用的 SD-JWT-VC。卡片裡每個欄位各自加密封存，出示時只打開「生日」那一欄。店員看不到姓名住址，但生日本身還是交出去了，而且是真實的那一天。

第三種是零知識證明。手機不交出生日，而是產生一份數學證明，內容只有一句話：「有一張發卡者簽過章的卡，上面的生日不晚於 2008 年 9 月 5 日。」店員的系統驗證這份證明沒有偽造，就知道你已滿 18 歲，但從頭到尾沒看見那一天是哪一天。

它之所以重要，是因為資料最少化走到了盡頭。查驗方拿不到的資料不會外洩、不會被留存、不會被拿去和別的資料庫比對。更進一步，每次出示的證明都重新隨機化，兩個查驗方把各自收到的證明放在一起，也湊不出「這是同一個人」。

它比 SD-JWT-VC 更能保護隱私，差在兩件事。選擇性揭露給的是原值，生日就是生日；零知識給的是述詞，只有真假。選擇性揭露的卡片有一把穩定的持有人金鑰與 DID，每次出示都帶著同一個識別子；零知識證明每次重新遮罩，識別子不再穩定。

劣勢也要先講。手機要花幾秒算證明，第一次更久。驗證端跑不進一般的無伺服器函式，要一個能載入四百多 MB 驗證金鑰的程式。證明本身 155 KB，是一般出示的二十倍。電路只認特定形狀的欄位，卡片沒有生日欄就做不了年齡證明。工具鏈還年輕，論文是 2025 到 2026 年的東西。最後，它不是魔法：證明的可信度仍然來自誰簽了那張卡。自己簽的生日做出來的年齡證明，隱藏的是自己填的日期，不會因此變成政府背書。

<figure>
  <a href="/images/reports/zero-knowledge-age-proof/wallet-use-zk.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖，有備而來使用分頁的零知識證明區">
    <img src="/images/reports/zero-knowledge-age-proof/wallet-use-zk.png" alt="有備而來使用分頁，零知識證明區有建立隱私年齡證明與查驗隱私年齡證明兩列" width="780" height="1688" loading="lazy" />
  </a>
  <figcaption><em>圖一。有備而來「使用」分頁的零知識證明區。這次把舊的 MOICA 持有證明從選單移除，只留年齡述詞證明的建立與查驗兩列，避免兩種零知識證明並列造成混淆。</em></figcaption>
</figure>

## 這次做了什麼

三個目標，三個都跑通。

1. 查驗網站 [verifier.mashbean.net/zkp](https://verifier.mashbean.net/zkp) 多了一頁，能建立一次性的零知識年齡查驗，並顯示每一段耗時。
2. 有備而來裡的 MyData 自發身分證與政府卡片都能建立年齡證明；實際能跑完的是自發身分證，原因寫在「誠實邊界」。
3. 三條驗證路徑的秒數都被自動記錄，能和 SD-JWT-VC 出示並排比較。

過程中另外做了兩件原本沒在清單上的事。驗證端搬進 Cloudflare Containers，不再依賴一台開著的 Mac；手機端實作了論文設計的 Prepare 快取，重複出示的建證時間從 8.1 秒降到 2.7 秒。

## 用了哪些既有專案

這不是從零寫密碼學。整條鏈路靠幾個開源專案接起來，我做的是把它們對準台灣的卡片、手機與部署環境。

| 層次 | 專案 | 在這裡的角色 |
| --- | --- | --- |
| 電路與證明系統 | [ethereum/zkID](https://github.com/ethereum/zkID)（OpenAC，commit `b395e09`） | `jwt_2k` 與 `show` 兩個 Circom 電路：前者驗發卡者的 ES256 簽章並承諾隱藏的欄位，後者證明述詞並綁定查驗方 nonce |
| 證明系統 | Spartan2（`openac-sdk` 分支，Hyrax 承諾，P-256） | 無 trusted setup 的 SNARK；手機端證明省記憶體，代價是驗證端要載入整個電路 |
| 見證生成 | circom-scotia、witnesscalc_adapter | 把 SD-JWT 的位元組展開成電路輸入 |
| iOS 綁定 | Mopro 0.3.5 | 把 Rust 證明器包成 XCFramework；有備而來以 `Native/OpenACAge` overlay 加上自己的 `predicate.rs`，只開放「生日不晚於截止日」這一種述詞 |
| 手機端 | 有備而來（Swift）、Secure Enclave 每卡金鑰、行動自然人憑證、MyData | 自發身分證由自然人憑證簽署；每張卡有獨立金鑰，用來對 nonce 簽章 |
| 驗證端原生服務 | `openac-age-verifier`（Rust、axum） | 載入兩把驗證金鑰，跑 `verify_linked`，比對 6 加 156 個公開值 |
| 驗證端平台 | Cloudflare Workers、Durable Objects、Containers、Workers Builds | Worker 管 session 與信任查詢，容器跑密碼學，Workers Builds 建映像 |
| 對照路徑 | jose、@sd-jwt | SD-JWT-VC 出示的驗證，跑在 Worker 內 |
| 參考實作 | PSE 的 go-zkid-verifier、openac-rsa-x509-swift、moica-revocation-smt | 第一代 MOICA 持有證明的路線；這次刻意不走，理由在決策鏈 |
| 官方資料 | TWDIW official app 原始碼、數位發展部 DID 信任清單 API | 政府卡片的發卡者信任判斷 |

所有依賴都釘在特定 commit。手機端的 XCFramework 與電路素材放在 GitHub release `openac-age-v1`，驗證金鑰的壓縮與解壓後 SHA-256 各自釘死，映像建置與服務啟動各檢查一次，release 被重新發佈會讓建置失敗，而不是讓來路不明的金鑰上線。

## 網頁上的流程長什麼樣

查驗方在網頁選來源、填年齡門檻與目的，拿到一次性 QR。持卡人用有備而來掃碼、看到同意畫面、在手機上算證明、證明送回網站，網站顯示是非與秒數。

<figure>
  <a href="/images/reports/zero-knowledge-age-proof/zkp-builder.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖，建立零知識年齡查驗的頁面">
    <img src="/images/reports/zero-knowledge-age-proof/zkp-builder.png" alt="建立一筆零知識年齡查驗的頁面，選擇證明來源、年齡門檻與目的，列出述詞與個資告知" width="1600" height="1475" loading="lazy" />
  </a>
  <figcaption><em>圖二。查驗方只決定「至少幾歲」。頁面在 QR 出現前就寫明皮夾會回傳什麼、不會回傳什麼，並附個資告知；截止日以臺北時間往前推 N 年。</em></figcaption>
</figure>

QR 裡是一段短 JSON：一個 32 位元組的 nonce、截止日、來源、最低年齡、用途，以及證明要送回的網址。網址只接受允許清單上的 HTTPS 站台，手機在解碼時檢查一次，開連線前再檢查一次。陌生人印一張 QR，不能把證明導去別的地方。

<figure>
  <a href="/images/reports/zero-knowledge-age-proof/wallet-consent.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖，手機上的同意畫面">
    <img src="/images/reports/zero-knowledge-age-proof/wallet-consent.png" alt="有備而來的同意畫面，寫明查驗方想確認是否已滿 18 歲、目的、來源，生日與卡片不離開手機，完成的證明會送到 verifier.mashbean.net" width="780" height="1688" loading="lazy" />
  </a>
  <figcaption><em>圖三。同意畫面把四件事說完：對方問什麼、為了什麼、用哪張卡、證明會送去哪裡。這是和面對面藍牙流程唯一的差別，所以特別多一句。</em></figcaption>
</figure>

<figure>
  <a href="/images/reports/zero-knowledge-age-proof/wallet-result.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖，手機上的驗證結果">
    <img src="/images/reports/zero-knowledge-age-proof/wallet-result.png" alt="有備而來顯示網站已驗證這個證明至少 18 歲，建立證明 2,189 加 467 毫秒，網站驗證 157 毫秒，往返 814 毫秒" width="780" height="1688" loading="lazy" />
  </a>
  <figcaption><em>圖四。手機端收到網站的判定與秒數。這一筆是 Prepare 快取命中的結果，建證只花 2.7 秒。</em></figcaption>
</figure>

證明包裡有兩份證明、述詞的公開參數（欄位名稱、日期格式、截止日、門檻）、發卡者的 did:key，以及手機端的建證耗時。沒有生日，沒有姓名，沒有任何卡片欄位。Worker 核對述詞與 session 一致、解析發卡者金鑰、政府卡片另查官方信任清單，再把兩份證明轉給原生服務。Worker 自己不存證明，結果推送到瀏覽器後 session 立即刪除。

## 從 Mac 到 Cloudflare 的部署經驗

### 為什麼驗證進不了 Worker

一個 Worker isolate 上限 128 MiB，程式碼上限 10 MB。OpenAC 的 Prepare 驗證金鑰是 412 MB。這不是 Cloudflare 的限制太緊，是這套證明系統的驗證端本來就肥：Spartan2 加 Hyrax 不需要 trusted setup，手機端證明時記憶體友善，代價是驗證端得自己把整個電路（374 MB 的 R1CS）讀進來評估，驗證金鑰幾乎等於電路本身。

對照 Groth16 那類系統，驗證金鑰幾百 bytes、驗證幾毫秒，塞進 Worker 用 JavaScript 都跑得動，但每個電路要一次 trusted setup，而且手機端要拿著好幾 GB 的 zkey 產證明，手機做不到。PSE 自己的 go-zkid-verifier 也是原生程式，理由相同。

所以驗證端需要的不是「一台自己的電腦」，是「一個有 1 GiB 以上記憶體的程序」。

### 第一站：Mac 加隧道

原生服務先在 Mac 上跑。載入兩把金鑰 0.33 到 0.39 秒，常駐 429 MB；驗證一份真證明後峰值 625 MB。Bearer token 保護，未授權回 401，假證明回明確錯誤。

對外用 Cloudflare 隧道。具名隧道做不到，因為這台機器的 cloudflared 憑證屬於另一個帳號，wrangler 的 OAuth token 又沒有 DNS 寫入權限；退而用 quick tunnel，網址每次重啟都變，用腳本自動把新網址寫進 Worker secret。第一個真證明就是在這條路上驗過的。

### 第二站：Cloudflare Containers

容器需要 Workers Paid 方案，映像必須是 linux/amd64，建映像需要 Docker。這台 Apple Silicon 沒裝 Docker，我一度以為得請人裝。後來在文件裡確認 Workers Builds 的建置環境可以跑 Dockerfile，接上 GitHub 後推一個 commit 到 main，2 分 36 秒後映像建好、容器起來。過程中踩到三個坑，都值得寫下來。

第一，secret 不能和 var 同名。設定檔裡先寫了 `ZKP_VERIFIER_URL` 當 var，之後用 `wrangler secret put` 寫同名 secret 被拒絕。兩個值都改成 secret。

第二，Worker 打容器的呼叫方式。`@cloudflare/containers` 的 `containerFetch(url, init, port)` 把 `RequestInit` 當位置參數傳過 Durable Object 的 RPC 邊界，body 與 headers 到不了另一端。容器健康、Worker 卻拿到 502。改成建一個 `Request` 交給 stub 的 `fetch`，由 Container 基底類別代理到預設埠，立刻通了。

第三，規格與速度。容器選 basic（1/4 vCPU、1 GiB），因為 625 MB 峰值裝得下，而且免費額度換算下來每月約 25 小時醒著時間，是 standard-1 的四倍。代價在後面的秒數表裡：驗證從 Mac 的 0.16 秒變成 5 秒，冷啟動 24.5 秒。

容器只宣告在示範站的設定檔。開源 repo 的一鍵部署仍然留在免費方案，用 secret 指向自己的驗證服務。

### 衍生費用

| 項目 | 方案與額度 | 這次的實際 |
| --- | --- | --- |
| Cloudflare Workers Paid | 每月 5 美元，含 Durable Objects | 原本就有，示範站本來就跑在上面 |
| Containers 免費額度 | 每月 25 GiB-hours 記憶體、375 vCPU-minutes、200 GB-hours 磁碟 | basic 醒著時計 1 GiB，約 25 小時免費；閒置 10 分鐘睡，睡著不計費 |
| 超額費率 | 記憶體 0.0000025 美元/GiB-s、CPU 0.000020 美元/vCPU-s | 測試量沒有超額；basic 24 小時不睡約每月多 7 美元，standard-1 約 27 美元 |
| Mac 隧道路線 | 0 美元 | 需要一台開著的機器，網址會變 |
| GitHub release 託管 80 MB XCFramework 與金鑰 | 0 美元 | 每支手機第一次建證下載約 76 MB 素材 |
| 開發時間 | 不計價 | 這篇報告涵蓋的工作約兩個工作天 |

## 三條驗證路徑的實測

同一張自發身分證、同一個查驗網站、同一支 iPhone 14。

| 路徑 | 手機建證 | 後端驗證 | Worker 全程 | 證明大小 |
| --- | --- | --- | --- | --- |
| SD-JWT-VC 出示（Worker 內驗證） | 不需要 | 毫秒級，頁面四捨五入顯示 0 ms | 毫秒級 | 約 7 到 8 KB |
| 零知識，Mac 驗證（隧道） | 首次 12.2 秒；快取命中 2.7 秒 | 首次 1,885 ms；之後 157 到 200 ms | 586 到 907 ms | Prepare 109 KB 加 Show 46 KB |
| 零知識，Cloudflare basic 容器 | 同上 | 暖機 4,973 ms；冷啟動 24,473 ms | 暖機 5,833 ms；冷啟動 25,108 ms | 同上 |

App 端從掃碼到收到判定的全程：SD-JWT-VC 出示自發證件 0.22 秒、政府卡片 0.40 秒；零知識年齡證明 7.28 秒。差距 7.06 秒，幾乎全在手機建證。

<figure>
  <a href="/images/reports/zero-knowledge-age-proof/zkp-compare-sdjwt.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖，查驗網站的 SD-JWT-VC 與零知識證明並排比較">
    <img src="/images/reports/zero-knowledge-age-proof/zkp-compare-sdjwt.png" alt="查驗網站的比較表，SD-JWT-VC 出示各段 0 ms，零知識年齡證明皮夾建證 12,159 ms、驗證 1,885 ms、Worker 全程 4,156 ms" width="1600" height="840" loading="lazy" />
  </a>
  <figcaption><em>圖五。查驗網站把同一個瀏覽器分頁內最近一次的兩種流程並排。這一筆零知識是第一次建證（無快取）且驗證在 Mac 上，數字只存在瀏覽器的 sessionStorage，不含任何欄位值。</em></figcaption>
</figure>

<figure>
  <a href="/images/reports/zero-knowledge-age-proof/wallet-diagnostics-compare.jpg" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖，手機診斷頁的比較">
    <img src="/images/reports/zero-knowledge-age-proof/wallet-diagnostics-compare.jpg" alt="有備而來診斷頁，政府皮夾裡的卡 SD-JWT-VC 出示全程 0.40 秒、零知識尚未量測；自發 MyData 證件 SD-JWT-VC 0.22 秒、零知識 7.28 秒、手機建證 2.66 秒、網站驗證 0.16 秒、差異加 7.06 秒" width="780" height="574" loading="lazy" />
  </a>
  <figcaption><em>圖六。手機端的診斷頁也做同樣的並排，數字來自 App 自己的單調時鐘。政府卡片那一列的零知識「尚未量測」，原因見誠實邊界。</em></figcaption>
</figure>

### 容器上的兩次真證明

<figure>
  <a href="/images/reports/zero-knowledge-age-proof/zkp-result-container-cold.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖，容器冷啟動時的驗證結果">
    <img src="/images/reports/zero-knowledge-age-proof/zkp-result-container-cold.png" alt="查驗網站顯示已證明持有人至少 18 歲，後端驗證 24,473 ms，Worker 全程 25,108 ms" width="1177" height="1600" loading="lazy" />
  </a>
  <figcaption><em>圖七。切換到容器後的第一份真證明。判定正確，但後端驗證 24.5 秒，是容器剛醒加上 1/4 vCPU 的結果。</em></figcaption>
</figure>

<figure>
  <a href="/images/reports/zero-knowledge-age-proof/zkp-result-container-warm.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖，容器暖機後的驗證結果">
    <img src="/images/reports/zero-knowledge-age-proof/zkp-result-container-warm.png" alt="查驗網站顯示已證明持有人至少 18 歲，後端驗證 4,973 ms，Worker 全程 5,833 ms" width="1293" height="1600" loading="lazy" />
  </a>
  <figcaption><em>圖八。緊接著的第二份。驗證降到 5 秒，這是 basic 規格的穩態。記憶體不是瓶頸，vCPU 才是。</em></figcaption>
</figure>

Cloudflare 這一段的目標很明確：把零知識驗證模組的部署成本壓到一個示範專案付得起，並且不需要任何人開著電腦。目標達到了，代價是速度。具名規格把 vCPU 和記憶體綁在一起，要拿到 2 個 vCPU 就得買 8 GiB，而這個工作只用 625 MB；自訂小記憶體加多 vCPU 是企業方案才有。示範用途先留 basic，要在現場對人展示再升。

### Prepare 快取

年齡證明是兩份證明。Prepare 驗發卡者簽章並承諾隱藏欄位，只跟卡片有關；Show 才綁查驗方的 nonce 與截止日。zkID 論文明白寫著設計意圖：新卡加入時離線跑一次 Prepare，存下可重用的預運算狀態；出示時取用、重新隨機化、再跑 Show。

有備而來原本每次都全部重算。這次改成第一次建證後把 Prepare 的三個產物存起來，之後每次只做重新遮罩與 Show。實測：

| | 第一次（無快取） | 第二次起（命中） |
| --- | --- | --- |
| Prepare | 7,586 ms | 2,189 到 2,617 ms |
| Show | 523 ms | 467 到 542 ms |
| 手機建證合計 | 8,109 ms | 2,656 到 3,159 ms |

少掉的 5.4 秒是被跳過的 `proveJwt`。命中後剩下的 2.2 秒幾乎都是重新遮罩（reblind）。這一步每次必跑，不能省：它換上新的隨機遮罩，讓兩個查驗方拿到的證明無法對上。省掉它，速度會更快，不可關聯性就沒了。

快取的代價寫清楚。存下來的 witness 含裝置金鑰與正規化後的出生日期，敏感程度等於卡片本身。它以憑證同等的檔案保護等級存放、排除備份、最多保留 8 筆最舊先淘汰、刪卡即清、「清除所有本機資料」時整個目錄移除。手機自檢驗不過且用了快取時，丟掉那筆重建一次，不會把壞掉的快取當成卡片有問題。

### 與論文比較

zkID 論文與 README 提供 iPhone 17 的數字。這裡把三者放一起。

| 項目 | 論文 iPhone 17 | 本文 iPhone 14 | 本文驗證端 |
| --- | --- | --- | --- |
| Prepare 證明 | 2,102 到 2,987 ms（另 key setup 3,254 到 3,499 ms） | 首次含 witnesscalc 11,478 ms；無快取 7,586 ms | — |
| Prepare 重新遮罩 | 856 到 884 ms | 約 2,200 ms | — |
| Show 證明加遮罩 | 115 到 129 ms | 467 到 542 ms | — |
| Prepare 驗證 | 137 到 151 ms | — | Mac 157 到 200 ms；容器 4,973 ms |
| 證明大小 | Prepare 109.29 kB、Show 40.41 kB | Prepare 109 KB、Show 46 KB | 同左 |
| 手機證明峰值記憶體 | 2.27 GiB | 未量 | 驗證端 625 MB |

證明大小與論文一致，代表電路、金鑰與序列化沒有走樣。iPhone 14 的每一步都比 iPhone 17 慢兩到四倍，比例合理。論文說快取後每次出示約一秒，這裡是 2.7 秒，差在較舊的處理器與每次必跑的 reblind。驗證端在 Mac 上與論文的手機驗證同量級，在 1/4 vCPU 的容器上慢 25 到 100 倍，這個差距是平台規格，不是實作問題。

### 架構決策鏈

每一步都有一個被放棄的選項。

1. **不用第一代 MOICA 持有證明，改做年齡述詞。** 有備而來八月就做過另一種零知識證明：證明「一張真的自然人憑證簽了這份東西」。它的驗證金鑰 968 MB、證明 294 到 398 KB、驗證 12 到 14 秒，而且帶著六條不能拿掉的限制：簽章材料可重放、統一編號會揭露給內政部、沒有全域唯一性、nullifier 對所有查驗方相同、不證明效期、撤銷根未錨定。它證明的是持有，不是任何欄位。年齡述詞證明由查驗方先給 nonce、綁在電路的公開輸入裡，證的是一個具體問題的答案，這是使用者真正需要的形狀。
2. **查驗方先給 nonce。** 證明在收到請求之後才建，重放的問題在協定層就消失，不必靠事後比對。
3. **驗證端離開 Worker，先落在 Mac。** 128 MiB 對 412 MB 沒有討論空間。Mac 讓第一個真證明可以在自己看得到 log 的地方驗過，之後再搬。
4. **從隧道搬進容器。** 隧道網址會變、機器要開著；容器讓示範不依賴任何人的電腦，且 Workers Builds 省掉本機 Docker。
5. **basic 而非 standard-1。** 量到 625 MB 峰值才決定，並在原生服務加上同時驗證上限 2，確保兩個證明同時到也不會撐爆 1 GiB。速度的代價寫在表裡，留給示範以外的需求再升。
6. **Prepare 快取。** 論文的設計本意，實測有效，代價是手機多存一份機密，用同等保護與生命週期管理處理。
7. **兩種來源同一套電路，但結果上分開標示。** 政府卡片的證明會查官方信任清單；自發身分證的證明標示「自發、非政府背書」。隱藏生日的機制相同，信任關係不同，頁面不能讓兩者看起來一樣。

## 誠實邊界

<figure>
  <a href="/images/reports/zero-knowledge-age-proof/wallet-home.png" target="_blank" rel="noopener noreferrer" aria-label="開啟原尺寸截圖，有備而來首頁的三種卡片">
    <img src="/images/reports/zero-knowledge-age-proof/wallet-home.png" alt="有備而來首頁，國民身分證卡面欄位已遮罩，政府皮夾卡片有駕照電子卡與門號電子卡，下方是 MyData 資料保險箱" width="780" height="1688" loading="lazy" />
  </a>
  <figcaption><em>圖九。皮夾裡的三種來源。這次只有國民身分證（MyData 自發）能做年齡證明：駕照電子卡與門號電子卡都沒有揭露出生日期，電路無從證明。</em></figcaption>
</figure>

- **能做年齡證明的政府卡片目前是零張。** 實測的公路局駕照電子卡沒有 `roc_birthday` 欄位，門號電子卡也沒有。這不是有備而來的限制，是發卡端沒有把那個欄位放進卡片。診斷頁上政府卡片那一列的「尚未量測」就是這個意思。
- **自發身分證的年齡證明不是政府背書。** 它隱藏的是持卡人從 MyData 資料自己簽署的生日。頁面與 App 都標示「自發、非政府背書」，這行字不能拿掉。
- **證明包帶著發卡者 did:key。** 政府卡片那是發卡機關；自發身分證那是持卡人自己的每卡金鑰，是一個穩定假名。這是允許清單存在的理由：證明只能送去已知的站台。
- **容器的速度。** basic 規格暖機 5 秒、冷啟動 24.5 秒，後者逼近 Worker 對後端 60 秒的逾時。建立 session 時已預先喚醒容器，手機建證的二十秒剛好是暖機窗口，但 1/4 vCPU 是地板。
- **樣本很少。** 每個數字來自一到三次實機執行，只能說明量級，不能當效能規格。
- **沒有做的事。** 沒有對 OpenID4VP 或任何零知識規格跑 conformance；沒有做零揭露的「持有證明」電路（那需要改電路輸入並重建 XCFramework）；quick tunnel 路線已退場；容器同時驗證上限 2 是為了記憶體，不是為了吞吐。

## 政策建議

### 一、把資料最少化寫成階梯，用「問題」定義用途

完整出示、選擇性揭露、述詞證明，是三個台階。政策與採購規格不該只寫「要哪些欄位」，而要寫「要回答什麼問題」。年齡門檻、是否設籍某縣市、是否持有某類資格，這類是非題應該走述詞證明；需要人名核對的流程才走選擇性揭露。查驗方要的是答案，不是資料。

### 二、隱私與代價的權衡，兩邊都要算

| 面向 | SD-JWT-VC 選擇性揭露 | 零知識述詞證明 |
| --- | --- | --- |
| 查驗方得到 | 欄位原值 | 是非 |
| 跨查驗方可關聯性 | 穩定持有人金鑰與 DID，可關聯 | 每次重新遮罩，不可關聯；自發卡的發卡者 DID 是例外 |
| 手機端成本 | 毫秒 | 首次約 8 到 12 秒，快取後約 3 秒 |
| 驗證端成本 | Worker 內毫秒 | 常駐 0.4 到 0.6 GB 的程式，CPU 密集，秒級 |
| 部署成本 | 免費方案可行 | 需要容器或主機；示範可在每月 5 美元內 |
| 證明大小 | 約 7 到 8 KB | 約 155 KB |
| 適用卡片 | 任何 SD-JWT-VC | 欄位形狀要對得上電路；目前只有帶生日的卡 |
| 成熟度 | 標準已 Final | 研究專案，2025 到 2026 年 |

零知識在隱私上贏得很徹底，在成本上輸得也很具體。政策不該把它當成預設，而應該把它當成高風險用途的選項，並且讓成本落在該負擔的人身上，也就是查驗方，不是持卡人。

### 三、發卡端決定了零知識能不能發生

第三方皮夾做不出政府卡片的年齡證明，卡住的地方在發卡端。三個具體建議：

1. 政府卡片若可能用於年齡相關用途，發卡時把出生日期以電路可讀的固定格式放進可揭露欄位，並公布欄位名稱與格式。
2. 公布一份與 OpenAC 一類電路相容的 SD-JWT profile，規範 `cnf.jwk`、`_sd` 陣列與揭露的位元組形狀，讓皮夾不必逆向工程。
3. 更長期，由發卡者直接提供 ZK-ready 憑證，或參與電路的審查與金鑰發布，讓「政府背書」與「隱藏欄位」兩者不必二選一。

### 四、驗證端是公共基礎設施的候選

零知識驗證需要一個常駐半 GB、CPU 密集的程式，小型業者各自養一個並不合理。政府或公協會可以考慮：提供共用的驗證服務，讓業者以 API 呼叫；或公開釘死的驗證金鑰與容器映像，讓部署變成一鍵；或投入驗證端更輕的證明系統研究，例如以 Groth16 包裝或遞迴壓縮。沒有第二層基礎設施，零知識會停在展示。

### 五、不可關聯性要寫進規格，不是靠善意

每次出示重新隨機化、查驗方先給 nonce、不以穩定 DID 當識別子，這三件事要成為驗證者與皮夾的規範要求。這次實作證明它們在手機上做得到，代價是每次多兩秒。規格若不要求，實作者會為了那兩秒省掉它。

### 六、把秒數寫進使用者介面與採購文件

本文每一個秒數都由程式自動記錄並顯示給雙方。查驗方在頁面看見「後端驗證 4,973 ms」，持卡人在手機看見「建立證明 2,189 加 467 毫秒」。這不是工程炫技，是知情同意的一部分：使用者有權知道他為隱私付了幾秒，採購方有義務把這幾秒寫進規格，而不是在上線後才發現櫃台排隊。

### 七、治理邊界

述詞證明通過不等於政府背書，自發與發卡者簽署的結果必須在畫面上區分。驗證端零持久化、只記錄判定與秒數、不記錄證明與識別子，這些在本文的實作裡都做到了，但示範站不是正式服務，也沒有官方驗證者資格。高風險決策仍需要另一個可核對的因素。

## 接下來

1. 找到一張帶出生日期欄位的政府卡片，把「政府卡片零知識」那一列量出來；或向發卡端提出欄位需求。
2. 依現場需求決定容器規格，或改用固定後端主機；把冷啟動與 60 秒逾時的關係量清楚。
3. 做零揭露的持有證明電路，讓沒有生日欄的卡片至少能證明「這張卡是某發卡者簽的」。
4. 增加樣本，讓中位數與最大值有統計意義；把測試矩陣的 A2、G1、W1、W2 補齊。
5. 對 OpenID4VP 與 SD-JWT 跑 conformance，讓零知識路徑能與正式規格並存。
6. 把這一篇的成本表變成可重算的試算表，讓其他部署者能估自己的帳單。

零知識證明在這個專案裡從一句口號變成了三張截圖上的秒數。它能做到的事很清楚：查驗方只拿到一個是非，兩個查驗方湊不出同一個人。它做不到的事也很清楚：發卡端不給欄位就沒有述詞，驗證端不給 CPU 就沒有速度。政策的工作，是決定這些代價由誰承擔。
