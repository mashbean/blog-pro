---
title: "斷網時，讓數位皮夾互相離線驗證"
description: "有備而來以 iPhone 持卡、iPad 查驗，完成兩種卡片與 SD-JWT-VC、零知識證明的離線對照。本文記錄信任資料準備、藍牙傳輸、中文姓名電路、三組成功與一組失敗的實測結果，並提出離線服務與隱私治理建議。"
topic: digital-identity
tags: ["數位皮夾", "可驗證憑證", "密碼學", "隱私", "信任根與信任清單", "共融與可及性", "公共採購", "開源", "台灣"]
keywords: ["有備而來", "BOND", "離線驗證", "SD-JWT-VC", "零知識證明", "ZKP", "OpenAC", "zkID", "MyData", "數位身分證", "門號驗證卡", "姓名相等證明", "Bluetooth Low Energy", "Spartan2", "Circom", "備援"]
pubDate: 2026-09-06
draft: false
lang: "zh-TW"
aiModel: "OpenAI GPT-6 / Codex"
aiPrompt: "依離線驗證開發紀錄、Swift 與 Rust 原始碼、兩台裝置的去識別化測試紀錄及使用者提供的六張截圖，撰寫開發報告、線上與離線比較、兩種卡片與兩種驗證方法的實測對照，以及政策建議。沿用專案文章與圖片格式，以專業客觀的繁體中文表述，區分觀察、推論與尚未完成的驗收。"
aiPipelineStage: "final"
aiGeneratedDate: 2026-09-06
humanReviewed: false
category: "數位政府與數位身分"
series: "ready-digital-government"
seriesOrder: 6
slug: "2026-09-06-offline-wallet-verification"
---

有備而來已在 iPhone 與 iPad 之間完成三組離線姓名查驗。政府皮夾來源的門號驗證卡，以及 MyData 數位身分證的自發衍生卡，都能透過 SD-JWT-VC 對照路徑完成查驗。自發卡也完成零知識證明查驗。門號卡的零知識證明仍在持卡端失敗，原因尚待進一步定位。

這一階段將證明接收與驗證移入 iPad，讓兩台裝置利用 QR 碼建立查驗要求，再以低功耗藍牙傳輸回應。自發卡的零知識證明，從 iPad 顯示查驗碼到顯示結果共 27.493 秒，其中原生證明驗證耗時 1.691 秒。這是單次實機觀察，尚不足以推估大量使用時的速度與可靠度。

本文是有備而來開發報告第六篇，承接[線上零知識證明的開發](../2026-09-05-zero-knowledge-age-proof-from-phone-to-cloudflare/)與 [MyData 資料保險箱](../2026-09-05-mydata-vault-in-the-digital-wallet/)。範圍限定於數位身分證與門號驗證卡，未涵蓋保險箱中的其他文件。

## 從備份證件走向斷網查驗

[有備而來的早期專案網站](https://bonds.tw/)提出備份政府證件、隨身攜帶並離線驗證、建立互信網路與保護隱私等目標。此次開發處理其中的離線查驗環節。證件已經存入手機後，查驗工作仍須在沒有網際網路的條件下完成。

<figure>
  <a href="/images/reports/offline-wallet-verification/bonds-original-goals.jpg" target="_blank" rel="noopener noreferrer" aria-label="開啟大圖，有備而來早期專案目標">
    <img src="/images/reports/offline-wallet-verification/bonds-original-goals.jpg" alt="有備而來早期網站列出備份政府證件、隨身攜帶離線驗證、建立互信網路，以及絕對隱私無法追蹤等目標" width="1600" height="1441" loading="lazy" />
  </a>
  <figcaption><em>圖一。早期專案目標，圖片由開發者提供。圖中的完整相容與絕對隱私屬於倡議目標，本次實測的完成範圍與限制另於下文說明。</em></figcaption>
</figure>

最初的比較條件沿用年齡驗證，但本次門號卡未提供可用的生日欄位。為了比較同一項查驗工作，兩條路徑統一改為確認已簽署的姓名是否等於「黃彥霖」。缺少生日的卡片因此被排除於年齡測試，未替卡片補入生日，也未將欄位缺失算成年齡查驗失敗。

兩種卡片的信任來源不同。門號卡沿用從政府皮夾體系取得的已簽署憑證，以事先核對的發卡者信任資料查驗。此處的政府皮夾來源是卡片取得途徑，不能據此將各種卡片視為具有相同的身分保證。

MyData 路徑則由手機上的數位身分證資料與每卡金鑰建立一張只包含所需姓名的 SD-JWT 衍生卡。原本的 `vc+moica` 封套與本次衍生卡具有不同的格式與驗證邊界。後者由持有人控制的金鑰簽署，查驗結果保留自發來源標示；本次證明沒有把原始資料的政府來源一併證明給 iPad。這項限制同時適用於 SD-JWT 與零知識證明。[卡片選取與衍生實作](https://github.com/bonds-tw/backupTW-iOS/blob/2a9e864/backupTW/Presentation/AgePredicateCredential.swift)

## 把查驗所需的依賴留在裝置上

離線流程分成事前準備、建立要求、持卡人回應與本機判定四個環節。iPhone 保存卡片並產生回應，iPad 保存公開的查驗資料。iPad 不需要匯入持卡人的證件。

連網時，兩台裝置各自取得發卡者公開資料，再與 Arbitrum 上的紀錄核對並保存快照。更新必須完成整批核對才替換舊資料；更新失敗時保留原來的核對日期。斷網後，查驗只能依賴這份快照，無法保證後續發生的撤銷或金鑰變更已經反映在裝置上。

零知識證明另需預先安裝電路與金鑰。持卡端需要產生證明的素材，也會在送出前自行驗證；查驗端僅需公開驗證金鑰。依本次素材清單計算，iPhone 壓縮下載約 77.7 MB，安裝後約 1.25 GB；iPad 壓縮下載約 24.3 MB，安裝後約 437 MB。這些數字採十進位單位，未包含下載暫存、App 本體與執行期記憶體。程式分別核對壓縮檔與解壓後檔案的 SHA-256，防止錯誤版本或不完整檔案混用。[素材清單與建置紀錄](https://github.com/bonds-tw/backupTW-iOS/blob/2a9e864/Native/OpenACAge/RELEASE-openac-field-v2.md)

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/offline-wallet-verification/offline-preparation.jpg" target="_blank" rel="noopener noreferrer" aria-label="開啟大圖，離線查驗準備畫面">
    <img src="/images/reports/offline-wallet-verification/offline-preparation.jpg" alt="離線查驗準備畫面提供儲存信任資料、準備 iPhone 證明檔案與 iPad 查驗檔案，狀態顯示已儲存 41 個發卡者資料" width="900" height="1948" loading="lazy" />
  </a>
  <figcaption><em>圖二。連網準備畫面。截圖顯示 41 個發卡者資料，最早核對時間為 9 月 6 日上午 11 點 11 分。此狀態只表示信任資料已保存，無法單憑這一行判定所有證明素材均已安裝。</em></figcaption>
</figure>

準備完成後，iPad 選定卡片來源與驗證方式，建立包含目標姓名、期限、一次性隨機挑戰值與藍牙服務識別碼的 QR 碼。iPhone 掃碼並取得持卡人同意，再建立回應。回應透過低功耗藍牙傳給 iPad，最後由 iPad 以本機資料判定。離線建證與收到回應後的查驗都禁止臨時下載素材，缺檔時停止流程。[要求、證明封裝與本機驗證](https://github.com/bonds-tw/backupTW-iOS/blob/2a9e864/backupTW/Presentation/AgePredicateProof.swift)

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/offline-wallet-verification/name-request-qr.jpg" target="_blank" rel="noopener noreferrer" aria-label="開啟大圖，姓名查驗 QR 碼與方法選項">
    <img src="/images/reports/offline-wallet-verification/name-request-qr.jpg" alt="查驗畫面選擇 SD-JWT-VC 與 MyData 數位身分證，下方顯示完整 QR 碼、等待證明及建立新查驗要求按鈕" width="900" height="1948" loading="lazy" />
  </a>
  <figcaption><em>圖三。繁體中文查驗介面，以一張 QR 碼建立要求，回應由藍牙傳送。這張截圖攝於恢復連線後，呈現介面配置，未作為斷網成功的證據。</em></figcaption>
</figure>

## 線上與離線改變了驗證位置與信任時點

前一階段的線上零知識驗證，由手機送出證明，網站管理查驗工作，Cloudflare 容器執行原生密碼運算。本階段將接收與原生驗證移入 iPad，查驗期間不需要遠端服務。憑證的簽章原理與證明的數學關係仍然相同，執行位置、通訊方式與可取得的即時資訊則不同。下列表格在窄螢幕可左右捲動。

<table class="offline-comparison-table" tabindex="0" aria-label="線上與離線流程比較，可左右捲動">
<thead><tr><th scope="col">比較項目</th><th scope="col">前一階段線上流程</th><th scope="col">本次離線流程</th></tr></thead>
<tbody>
<tr><td>查驗端</td><td>瀏覽器、Worker 與原生驗證容器</td><td>iPad 上的 App 與原生驗證器</td></tr>
<tr><td>回應傳輸</td><td>經網際網路提交到查驗服務</td><td>QR 建立要求，藍牙傳送回應</td></tr>
<tr><td>信任資訊</td><td>可在服務運作時查詢外部來源</td><td>使用事先核對的本機快照</td></tr>
<tr><td>證明素材</td><td>手機與伺服器各自準備所需檔案</td><td>iPhone 與 iPad 在斷網前分別準備</td></tr>
<tr><td>網路中斷的影響</td><td>提交或服務查詢可能無法完成</td><td>素材齊備時可持續本機查驗</td></tr>
<tr><td>新增責任</td><td>維運伺服器與遠端服務</td><td>管理本機儲存、時鐘與快照有效期間</td></tr>
</tbody>
</table>

連網只提供查詢最新狀態的機會，實際保證仍取決於系統是否取得並查核該狀態。離線查驗則必須顯示最後核對時間與目前未知的項目。本次沒有以相同卡片、姓名條件與計時起點重新測量線上流程，因此不以兩階段的秒數計算速度倍率。

SD-JWT 對照路徑交出姓名 disclosure、發卡者簽署內容及持有人金鑰綁定證明。查驗端核對姓名、簽章、要求的挑戰值、接收對象與出示摘要。這些基本機制可對照 [RFC 9901](https://www.rfc-editor.org/rfc/rfc9901.html)。本次卡片承襲 TWDIW 的巢狀憑證資料形狀，外層採 App 自訂的藍牙封裝。文中的 SD-JWT-VC 是介面與比較路徑名稱，現有結果不構成標準符合性認證，也未證明任意廠商皮夾可互通。[SD-JWT 對照實作](https://github.com/bonds-tw/backupTW-iOS/blob/2a9e864/backupTW/Presentation/SDJWTAgePresentation.swift)

零知識路徑沿用 [zkID 的 OpenAC 設計](https://github.com/ethereum/zkID/blob/main/specs/1-openac/README.md)。Prepare 階段處理已簽署的憑證與隱藏欄位，Show 階段建立符合本次要求的證明，兩份證明以共同承諾連結。每次出示重新隨機化，查驗端核對發卡者金鑰、一次性挑戰值與姓名相等條件。可重用的 Prepare 資料保留在持卡端，其快取包含敏感的見證材料，須隨卡片刪除或本機清除操作一併移除。

## 開發過程處理了準備、中文與裝置限制

第一個實機障礙發生在信任資料準備。最初一次送出大量 RPC 請求，公共服務回覆 HTTP 429，兩台裝置都顯示準備失敗。修正後每批處理三個發卡者，批次間隔半秒，保留原有交易、收據與合約狀態核對。錯誤訊息也區分請求過量、逾時與素材問題。此後取得 41 筆相符的發卡者資料；畫面上的完成狀態與原始核對時間分別保存。[首輪問題與修正紀錄](https://github.com/bonds-tw/backupTW-iOS/blob/2a9e864/docs/offline-verification-2026-09-05.md)

第二個障礙是 iPad 視窗尺寸。早期 QR 碼超出浮動視窗，邊緣遭裁切，iPhone 因而無法掃描。介面改依實際可用寬度配置 QR 碼、保留白邊並按像素對齊，查驗碼上限為 260 點。這項修正處理了掃碼入口；舊版結果截圖中，底部分頁仍遮住部分計時文字，因此本文以裝置診斷紀錄取值。[視窗修正](https://github.com/bonds-tw/backupTW-iOS/commit/20433de)

第三項工作是中文姓名電路。既有短字串欄位不足以直接承載本次姓名，實作新增 UTF-8 姓名格式，將完整位元組與長度一起納入 Poseidon 雜湊後比較，避免截斷姓名。此格式目前接受 1 至 31 個 UTF-8 位元組，並限制欄位名稱、JSON 表示法與 disclosure salt。這是已審查的實驗範圍，尚未涵蓋所有姓名長度與編碼形式。[原生姓名處理](https://github.com/bonds-tw/backupTW-iOS/blob/2a9e864/Native/OpenACAge/predicate.rs)

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/offline-wallet-verification/holder-creating-proof.jpg" target="_blank" rel="noopener noreferrer" aria-label="開啟大圖，iPhone 建立姓名證明">
    <img src="/images/reports/offline-wallet-verification/holder-creating-proof.jpg" alt="iPhone 的姓名證明畫面顯示正在這支手機上建立證明，素材準備進度為百分之百" width="900" height="1948" loading="lazy" />
  </a>
  <figcaption><em>圖四。持卡端建立證明的過程。素材準備達到百分之百與證明建立完成是不同階段，這張畫面本身不表示查驗成功。</em></figcaption>
</figure>

新增電路後，原生綁定、電路與金鑰必須一起更新。建置過程亦處理 Circom 見證載入器的版本與快取一致性，將大型暫存陣列移到堆積記憶體，降低 iOS 工作執行緒堆疊耗盡的問題。建置端以合成憑證完成正確姓名接受、錯誤姓名拒絕的檢查。這組檢查驗證程式與素材一致性，與真實門號卡是否相容屬於不同的驗收項目。

兩台裝置曾顯示驗證檔案下載失敗。本輪新的姓名素材尚未發布到 App 設定的下載位置，最終實測採用本機建置並安裝的檔案。此次成功證明了素材齊備時的離線流程；一般使用者能否從公開下載入口完成準備，仍需在素材發布後另行驗收。本文發布也不代表新版 App 或原生素材已完成對外發行。

最後將零知識證明區域的操作名稱、卡片選項、進度與結果說明改為繁體中文。這項更新在本輪計時之後完成，沒有將新介面的畫面混入舊版測試紀錄推估效能。

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/offline-wallet-verification/wallet-use-localized.jpg" target="_blank" rel="noopener noreferrer" aria-label="開啟大圖，繁體中文零知識證明選單">
    <img src="/images/reports/offline-wallet-verification/wallet-use-localized.jpg" alt="使用分頁的零知識證明區域已改為繁體中文，包含離線查驗準備、回應姓名查驗及以零知識證明或 SD-JWT-VC 驗證姓名" width="900" height="1948" loading="lazy" />
  </a>
  <figcaption><em>圖五。計時測試後的繁體中文選單。截圖保留當時的實際介面，文中不以進度提示或宣傳文字替代驗證紀錄。</em></figcaption>
</figure>

## 四組對照中，三組完成查驗

本輪資料來自 2026 年 9 月 6 日上午 11 點 22 分至 11 點 24 分的裝置紀錄。iPhone 14 擔任持卡端，iPad mini A17 Pro 擔任查驗端，卡片均留在 iPhone。兩端紀錄均為 App 1.0、build 1，作業系統為 iOS／iPadOS 27.0 測試版本。後續繁體中文安裝版的 build 為 2026090602，未納入這組計時。

操作條件為兩台開啟飛航模式、關閉 Wi-Fi 並保留藍牙。此條件依操作回報記載，iPad 成功截圖亦顯示飛航圖示；診斷紀錄確認成功回應走藍牙，但未記錄完整無線電狀態，也沒有封包擷取紀錄。中午恢復連線後補拍的介面圖只用於說明操作。

下表以 iPad 的最終判定作為成功依據。查驗全程從 iPad 顯示 QR 碼開始，到顯示判定為止，包含掃碼、同意、持卡端處理與傳輸。驗證時間採 App 記錄的本機查驗區間，ZKP 為原生連結證明驗證，SD-JWT 則涵蓋解析、簽章、信任與姓名核對，兩者的內部工作範圍並非完全一致。傳輸資料量是應用層回應封包大小，不含藍牙協定額外開銷。

<table class="offline-comparison-table" tabindex="0" aria-label="兩種卡片與兩種驗證方式的實機結果，可左右捲動">
<thead><tr><th scope="col">卡片與方式</th><th scope="col">觀察結果</th><th scope="col">iPad 查驗全程</th><th scope="col">本機驗證</th><th scope="col">回應資料量</th></tr></thead>
<tbody>
<tr><td>門號驗證卡 × SD-JWT-VC</td><td>成功 1 次</td><td>13.400 秒</td><td>20 毫秒</td><td>3,044 bytes</td></tr>
<tr><td>MyData 自發卡 × SD-JWT-VC</td><td>成功 1 次</td><td>7.845 秒</td><td>15 毫秒</td><td>1,977 bytes</td></tr>
<tr><td>門號驗證卡 × ZKP</td><td>持卡端失敗 2 次</td><td>未進入 iPad 判定</td><td>無紀錄</td><td>未送出</td></tr>
<tr><td>MyData 自發卡 × ZKP</td><td>成功 1 次</td><td>27.493 秒</td><td>1,691 毫秒</td><td>213,199 bytes</td></tr>
</tbody>
</table>

三組成功各只有一筆，門號卡 ZKP 有兩次失敗。這些原始值可描述本輪操作，無法代表成功率、平均效能或尾端延遲。失敗耗時未混入成功樣本，iPhone 與 iPad 對同一次查驗的紀錄也未重複計算為兩次成功。可下載[本輪去識別化計時資料](../../data/offline-wallet-verification/measurements.csv)及[欄位定義](../../data/offline-wallet-verification/README.txt)。

自發卡 ZKP 的持卡端細分如下。Prepare 快取未命中，因此這筆資料包含建立 Prepare 的成本，不能用來代表快取命中後的速度。

<table class="offline-comparison-table" tabindex="0" aria-label="自發卡零知識證明的持卡端計時，可左右捲動">
<thead><tr><th scope="col">持卡端階段</th><th scope="col">本輪時間</th></tr></thead>
<tbody>
<tr><td>Prepare</td><td>8.298 秒</td></tr>
<tr><td>Show</td><td>0.630 秒</td></tr>
<tr><td>Prepare 與 Show 合計</td><td>8.928 秒</td></tr>
<tr><td>iPhone 記錄的藍牙傳送區間</td><td>7.522 秒</td></tr>
</tbody>
</table>

這四列沒有構成全部流程的時間分解，合計列也不能再次相加。iPad 的全程還包含使用者操作、素材核對、持卡端自行驗證及介面處理。iPad 診斷欄位中的傳輸時間，實際涵蓋顯示 QR 到收完回應的等待區間，不能解讀為純藍牙傳送時間。

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/offline-wallet-verification/ipad-mydata-zkp-success.jpg" target="_blank" rel="noopener noreferrer" aria-label="開啟大圖，iPad 在飛航模式完成 MyData 自發卡零知識姓名驗證">
    <img src="/images/reports/offline-wallet-verification/ipad-mydata-zkp-success.jpg" alt="iPad 狀態列顯示飛航模式，App 選擇 ZKP 與 MyData digital ID，結果顯示姓名黃彥霖驗證通過，來源說明標示自發衍生卡且無政府背書" width="1200" height="1827" loading="lazy" />
  </a>
  <figcaption><em>圖六。iPad 的自發卡 ZKP 成功畫面，保留飛航模式圖示與自發來源說明。底部計時文字部分被分頁遮住，表格數值取自裝置紀錄。</em></figcaption>
</figure>

門號卡 ZKP 的兩次嘗試分別在 1.687 秒與 1.644 秒結束，均記為持卡端本機失敗，沒有回應資料量、Prepare／Show 分段時間或 iPad 結果。可以確認的失敗位置在藍牙送出之前，現有診斷不足以確定是哪一項原生檢查拒絕了輸入。

程式提供幾個待驗證的方向。原生輸入處理限制 JWT 簽署內容與編碼後 payload 的長度，也限制 salt、JSON 跳脫表示與姓名欄位形狀。自發衍生卡可依這些條件產生，門號卡則須保留發卡者已簽署的原始內容，因此相容性不同。SD-JWT 路徑成功表示一般查驗可以接受該卡，無法由此推定零知識電路也能處理同一份輸入。

尤其不能將 3,044 bytes 的 SD-JWT 回應封包直接與 2K 電路限制比較。前者包含外層封裝、揭露資料與持有人綁定證明，後者限制的是特定電路輸入。沒有實際輸入長度與保留的原生錯誤碼，容量不足只能列為假說。後續應先新增不含憑證內容的階段錯誤與長度診斷，再決定是否擴大電路。

## 一般證件查驗補充了來源與狀態的說明

開發者另提供一般證件出示流程的結果頁。畫面將持有人回應挑戰值、簽署者身分、欄位內容與撤銷資料時效分開說明。這有助於辨識另一種常見的信任關係，即自然人憑證可用於辨認簽署者，但持有人簽署的資料內容仍需另有查核依據。

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/offline-wallet-verification/general-verification-limits.jpg" target="_blank" rel="noopener noreferrer" aria-label="開啟大圖，一般證件查驗的期限與撤銷提示">
    <img src="/images/reports/offline-wallet-verification/general-verification-limits.jpg" alt="一般證件查驗結果顯示持有人用手機金鑰簽署本次挑戰，並提示本機撤銷名單已超過三天、欄位由持有人簽署，以及證件未記載有效期限" width="900" height="1948" loading="lazy" />
  </a>
  <figcaption><em>圖七。一般證件查驗結果，攝於中午 12 點 9 分。畫面列出本機撤銷資料已過期等限制。這張截圖缺少可配對的測試紀錄，顯示的 1.02 秒未納入四組姓名查驗比較。</em></figcaption>
</figure>

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/offline-wallet-verification/general-verification-source.jpg" target="_blank" rel="noopener noreferrer" aria-label="開啟大圖，一般證件的簽署者與揭露內容">
    <img src="/images/reports/offline-wallet-verification/general-verification-source.jpg" alt="一般查驗結果說明憑證由政府憑證機構簽發給黃彥霖，該憑證辨認簽署者，欄位內容由持有人主張，畫面揭露姓名並保留其他五個欄位" width="900" height="1948" loading="lazy" />
  </a>
  <figcaption><em>圖八。一般出示結果中的簽署者與欄位說明。畫面也提示簽署憑證可能揭露法定姓名、形成跨次關聯，並說明出示時間依持卡端時鐘記載。</em></figcaption>
</figure>

這兩張圖呈現既有一般查驗流程的結果語意，未新增本輪 ZKP 或 SD-JWT 姓名測試樣本。畫面中的本機查驗提示也不能單獨證明裝置整體斷網。政策驗收可沿用這種分層說明，要求系統明示已完成的檢查與仍待確認的狀態，降低使用者將單一通過標示理解成完整身分保證的風險。

## 姓名證明與完整身分保證仍有距離

本次 ZKP 證明的條件，是已簽署姓名與查驗方指定的姓名相等。查驗方在發出要求前已經知道「黃彥霖」，成功結果會確認這項猜測。查驗要求與回應封裝也含有目標姓名。它減少傳送原始 disclosure 與憑證內容，卻沒有隱藏這個已公開的查驗條件；其隱私效果不能直接等同於只揭露成年與否的年齡區間證明。

重新隨機化可以降低證明物件本身的可關聯性，但目前自發卡回應仍攜帶固定的發卡者 DID，可形成穩定假名。姓名、時間與周邊互動資訊也可能被關聯。早期網站的絕對隱私目標，在本次成果中尚未達成。SD-JWT 本身亦有重複出示可被關聯的限制，詳見 [RFC 9901 的隱私考量](https://www.rfc-editor.org/rfc/rfc9901.html#section-10)。

目前的藍牙封裝尚未提供應用層加密，也未完成查驗方身分認證。一次性挑戰值與期限限制可約束舊回應的使用，仍不足以排除現場轉送要求或未授權查驗方。本次沒有完成通訊攻擊與重播攻擊的雙機實測，不將正常流程成功視為完整安全驗收。

有效期限也有兩層差異。SD-JWT 對照路徑在本機檢查憑證期限；目前 ZKP 的期限檢查發生在持卡端輸入處理，尚未納入查驗方可獨立驗證的電路條件。兩條離線路徑均無法確認斷網後最新的撤銷狀態。因此，姓名相等、簽章通過、發卡者快照相符與證件目前仍有效，應分開呈現。

本輪亦未對調 iPhone 與 iPad 的角色，未測試 Android 或其他廠商皮夾，也未取得可供統計的重複樣本。這些限制界定了成果可外推的範圍。

## 政策與後續開發應採分層驗收

**將離線能力列為明確的服務需求。** 需要在災害或通訊中斷時持續運作的服務，應訂定事前準備、可持續離線時間、裝置儲存需求與失敗替代流程。採購驗收應直接測量斷網後從掃碼到判定的完整操作，並涵蓋低階裝置、平板小視窗與輔助使用需求。紙本或人工替代程序仍需保留，避免數位備援形成新的使用門檻。

**為離線信任資料訂定有效期間與責任。** 機關與發卡者宜提供可驗證、可攜帶的信任資料，明確標示版本、核對時間、金鑰輪替與撤銷資訊。服務方依風險決定快照過舊時要拒絕、轉人工或提供有限服務，並讓民眾看見判定依據。本輪保存 41 個發卡者的結果，說明事前核對可移入裝置，但沒有解決長時間斷網的狀態落差。

**把卡片格式相容性納入公開測試資料。** 姓名欄位、Unicode 表示、salt 長度、簽章演算法與憑證大小，都可能影響既有零知識工具能否使用卡片。發卡端宜提供不含真實個資的測試向量與格式說明，讓第三方皮夾先完成可重現的相容性檢查。格式規劃也應容納長姓名與多語文字，避免將本次 31 位元組的實驗限制變成服務資格限制。

**按查驗目的選擇揭露方式。** 只需判定年齡區間或資格是否成立時，述詞證明較有機會減少不必要資料。姓名相等查驗則應說明目標姓名已為查驗方所知，並評估查驗必要性。部署要求還應涵蓋通道加密、查驗方認證、固定識別資訊、紀錄保存與刪除，不能僅以使用 ZKP 作為隱私合格條件。

**分開描述政府憑證與持有人衍生資料。** 應用程式可讓兩種來源使用相近的操作流程，但結果必須說明由誰簽署、證明哪些欄位，以及何種來源關係已被查驗。MyData 資料若要在第三方查驗時保有機關來源保證，需要可延續驗證的簽章或正式憑證交付機制。自行衍生的姓名證明無法補足這一制度條件。

下一階段的工作宜先以診斷門號卡 ZKP 失敗為起點，取得可重現的輸入限制證據，再評估電路擴充成本。對外發行前，另須完成公開素材下載、通訊保護、查驗方認證、期限與撤銷語意、負向測試及多裝置重複測量。這些項目應各有獨立的通過條件，讓已完成的離線功能與尚未取得的保證都能被持續追蹤。
