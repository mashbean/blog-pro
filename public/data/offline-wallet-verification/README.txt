離線姓名查驗資料說明

資料區間為 2026 年 9 月 6 日台灣時間上午 11 點 22 分至 11 點 24 分。
本檔與 measurements.csv 對應〈斷網時，讓數位皮夾互相離線驗證〉。

共五次嘗試、八筆端點紀錄。N1、N2、N4 各有一筆 holder 與一筆 verifier，
N3 有兩筆失敗的 holder 紀錄，未到達 verifier。成功統計以 verifier 為準。
N1 為門號驗證卡 SD-JWT-VC，N2 為 MyData 自發卡 SD-JWT-VC，
N3 為門號驗證卡 ZKP，N4 為 MyData 自發卡 ZKP。

recordedAt 採 UTC；其餘日期解讀請參照文章。所有 Milliseconds 欄位單位為毫秒。
空欄代表未記錄或未發生，不能當作零。succeeded 表示該端點流程結果。
deviceModel 是裝置機型識別，不是裝置序號。appBuild 為測試紀錄的版本，
不能用後續繁體中文更新的 build 2026090602 取代。

endToEndMilliseconds
  verifier 是 iPad 顯示要求 QR 到顯示判定，包含掃描、同意、持卡端處理與等待。
  holder 是持卡端接受操作後的流程區間，起點不同，不能與 verifier 相加。

verificationMilliseconds
  ZKP 是原生 linked proof 驗證區間，不含所有 App 處理。
  SD-JWT 是解析、簽章、信任、持有人綁定與姓名查核的本機區間。
  兩者內部工作範圍不同，不能據此計算密碼演算法速度倍率。

transportMilliseconds
  verifier 是 QR 顯示到收完 payload，包含人工作業、建證與藍牙等待。
  holder 是送出回應的藍牙傳送區間。不要將 verifier 欄位當成純藍牙效能。

preparationMilliseconds、proofPrepareMilliseconds、proofShowMilliseconds
  ZKP 的準備合計與 Prepare、Show 分段，合計不可再次加上分段。
  verifier 的 Prepare／Show 數字由 holder 傳入，屬測試遙測，非信任判定條件。
proofPrepareWasCached 是本次 Prepare 是否實際重用，False 表示未命中。
payloadBytes 是應用層回應封包位元組數，不含藍牙協定額外開銷。

離線條件由操作者回報，iPad 成功截圖有飛航圖示。裝置紀錄可確認藍牙路徑，
未包含無線電設定或網路封包觀察。原始單次值未進行推估、平均或百分位計算。

公開檔已移除個別執行識別碼、配對關聯碼與行程識別碼，未包含原始憑證、
disclosure、持有人金鑰或完整歷史紀錄。
