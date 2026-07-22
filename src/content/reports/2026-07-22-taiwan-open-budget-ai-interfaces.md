---
title: "從 Sutton OpenBook 到全台 22 縣市"
description: "逐一盤點台灣 22 縣市的預算資料條件，檢查 OpenFun、TwinkleAI 與官方 API、MCP 現況，並提出一套可維護、可追溯的全台 OpenBook 架構。"
pubDate: 2026-07-22
updatedDate: 2026-07-22
tags: ["開放預算", "地方政府", "開放資料", "公民科技", "OpenFun", "TwinkleAI", "MCP", "台灣"]
category: "數位治理"
aiModel: "Codex GPT-5"
aiPipelineStage: "final"
aiPipelineId: "2026-07-22-taiwan-open-budget-ai-interfaces"
aiGeneratedDate: 2026-07-22
humanReviewed: true
lang: "zh-TW"
slug: "2026-07-22-taiwan-open-budget-ai-interfaces"
---

政府說「預算已經公開」時，常見的意思是一疊 PDF 已經放上網站。居民想知道教育、社福、道路或資訊系統花了多少錢，仍得先找到正確年度、辨認總預算與單位預算、理解歲入歲出分類，再從數百頁表格中找答案。公開完成了法定程序，查詢成本卻可能依然很高。

美國麻州 Sutton 的 OpenBook 提供另一種產品想像。它把歲出、歲入、資本計畫、準備金、預算文件與居民問答放在同一個城鎮入口，並保留 CSV、Excel 上傳和管理後台。2026 年 7 月，我把這個公開原始碼專案移植到台北市，先做中英文與美元顯示，再把首頁擴充成全台 22 縣市共同總覽。實作過程很快碰到核心問題。介面可以移植，地方政府資料的欄位、年度、粒度、連結與責任邊界無法一起複製。

這篇報告回答三個問題。OpenBook 從 Sutton 到台灣經歷了什麼；台北以外哪些縣市適合接著做；OpenFun、TwinkleAI 與官方平台現有的 API、MCP 或相近接口，究竟能支援到哪一層。更新版另外用 OpenFun 與 Twinkle 對 22 縣市逐一實測，不再只比較服務文件。

## Executive Summary／執行摘要

- **全台共同總覽已可實作。** 行政院主計總處 115 年度彙編讓 22 縣市可用同一口徑比較歲入、歲出、融資、政事別與資本支出，歲出合計約 1.738 兆元。
- **OpenFun 適合做批次資料層，但文件中的涵蓋仍需逐檔驗證。** 22 縣市實測得到 21 份可讀工作計畫 CSV，共 45,505 列；彰化縣 URL 回傳 404，只有 11 個縣市的詳細歲出 JSON 實際含有計畫文字，澎湖最新只到民國 110 年。
- **Twinkle 適合做 AI 資料發現與 schema 探索，搜尋結果不能直接當成預算答案。** 22 縣市的 MCP 呼叫全部成功，21 個最佳結果命中同一縣市，嚴格符合「全縣市歲出總預算」的只有 8 個。精確 dataset ID 的讀取很可靠，廣泛語意搜尋仍會選到稅務局、消防局、法院或預算員額資料。
- **OpenBook 應以官方資料作建置底座，把兩個民間服務設計成可替換加速層。** 下一版要加入來源登錄、資料階段、城市轉接器、跨來源對帳、異常提問與 AI 回答引用契約。OpenFun 適合預先批次匯入，Twinkle 適合互動式發現與臨時查詢。

## OpenBook 的始末

[OpenBook 原始 repository](https://github.com/Allen-Lab-for-Democracy-Renovation/Open-Book) 建於 2026 年 4 月，由 Harvard Kennedy School 的 Allen Lab for Democracy Renovation 與 Sutton Town Manager Austin Cyganiewicz 合作。README 與程式碼顯示，它是一套可由城鎮自行部署的 Next.js 與 PostgreSQL 應用，提供品牌化首頁、支出、收入、資本計畫、準備金、文件、FAQ、資料上傳與後台管理<sup>1</sup>。GitHub 沒有顯示明示授權，所以本文稱它為「公開原始碼 repo」，不把授權狀態擴張成開源保證。

[Sutton 正式網站](https://openbook.suttonma.gov/) 的重要性，在於它由地方政府承接為官方財政入口<sup>2</sup>。資料、視覺設計與組織責任放在同一個網站。這個安排比單張圖表更完整，居民可以從總額進到分類、表格、原始文件，也知道誰負責更新與回答問題。

台灣版 fork 建於 2026 年 7 月 17 日。第一版選台北市，因為台北市主計處已持續發布跨年度 XML，欄位可重建歲入、歲出、主管機關與經資門。GitHub Pages 靜態版省去資料庫與帳號系統，讓原型先上線；第二版加入完整中英文與美元估算；第三版再以主計總處 115 年度共同彙編做 22 縣市總覽。現在的[台灣地方政府 OpenBook](https://mashbean.github.io/Open-Book/)保留台北深度頁，也新增區域、資料成熟度、關鍵字篩選、縣市排名及 CSV 匯出<sup>3</sup>。

這段移植揭示三件事。

第一，居民體驗和資料工程是兩條工作線。原始 OpenBook 的資訊架構值得重用，台灣的預算語意與資料來源仍需重新建模。

第二，靜態網站很適合公共原型。它便宜、容易稽核、沒有帳號風險，也能讓每次更新留下 Git 版本。若未來要支援政府人員上傳、問答回覆或多城市後台，再啟用原專案的資料庫架構。

第三，公開預算網站只能降低查詢成本，不能直接推論信任或治理成效。25 年透明度研究的系統性回顧指出，透明度的效果會受政策領域、資訊品質、使用者能力與政治環境影響<sup>4</sup>。Open Budget Index 適合做跨國比較與倡議，指標本身也無法代替參與、監督和問責機制<sup>5</sup>。

## 22 縣市已經有共同底圖

行政院主計總處的[115 年度直轄市及縣市總預算彙編](https://www.dgbas.gov.tw/News_Content.aspx?n=1525&s=236271)提供 PDF、XLSX 與 ODS<sup>6</sup>。工作簿涵蓋 22 縣市的歲入、歲出、融資、以前年度歲計賸餘、債務還本、經常與資本支出、八類政事別，以及土地、營建工程、機械設備、資訊設備等資本用途。

本次以程式抽取 XLSX，得到 22 個縣市，歲出合計為新台幣 1,738,365,336 千元，約 1.738 兆元。每個縣市的八類政事別加總都等於歲出總額，經常支出與資本支出加總也一致。金門縣在官方彙編中是總預算案，網站已保留這項表註。

這份共同表讓「全台 OpenBook 可不可以做」有了明確答案。可以，而且現在就能做。它適合回答各縣市預算規模、教育文化、社福、經濟發展、一般政務與資本支出的相對配置。它的上限也很清楚，資料還沒有細到每個局處的工作計畫、用途說明、採購案或實際付款。

## 哪些數字值得追問

全台總覽新增「值得追問」而非「異常定罪」。訊號只用來安排回查原始預算書的順序，不能直接證明違法、浪費或政策失敗。

臺中市 115 年編列舉借 1,143.38165 億元、債務償還 1,000 億元，兩者毛額合計相當於歲出的 108.2%；新北市舉借 1,074 億元、還本 940 億元，合計為歲出的 77.3%。這類數字應先拆解換債、基金調度與淨新增債務，單看舉借總額容易誤判。

OpenFun 工作計畫顯示，新竹市「工商管理」由 7,405 萬元增至 25.08533 億元，增幅約 3,287.6%。臺南市「衛生業務」由 8.5335 億元增至 97.21517 億元，增幅約 1,039.2%，同一份表中最大的社福工作計畫則減少約 39.4%。這些變動可能來自基金移轉、中央補助、組織調整、科目重分類或一次性工程，必須回到計畫內容、用途別與原始頁碼才能判讀。

金門縣編列移用以前年度歲計賸餘 32.63661 億元，相當於歲出的 19.9%，資本支出占比又達 30.9%。值得追問的是動用是否持續、資本計畫是哪些，以及剩餘財政緩衝有多少。

資料本身也會發出訊號。彰化縣的 OpenFun 工作計畫 CSV 回傳 404；澎湖工作計畫停在 110 年；Twinkle 對新竹縣選出的 CSV 欄位出現編碼亂碼，臺中全市歲出資料集的 metadata 只記錄 2 列。網站若只顯示「有資料」，使用者會錯過真正影響可信度的缺口。

## 台北以外，哪些縣市最適合接著做

地方深度頁需要另一套判讀。本次以四個維度評估維護難度，包括官方機器格式、OpenFun 可見的歷年覆蓋、完整單位預算明細、地方 API 或穩定機器檔。這是工程成熟度，並非政府透明度排名，也不評斷地方是否依法公開。

| 縣市 | 級別 | 官方資料與歷年覆蓋 | 完整單位明細 | 接入建議 |
| --- | --- | --- | --- | --- |
| [台北市](https://data.taipei/dataset/detail?id=5d3c107e-4c8e-469c-a094-e4ebb9b0945a) | A | 完整、API、10 年 | 民代協助 | 保留深度頁，補功能別、計畫與決算 |
| [新北市](https://data.ntpc.gov.tw/datasets/b9314de2-8aa0-4080-8f37-2df0fe193f3c) | A | 完整、API、6 年 | 尚未取得 | 第一波，先接歲入、機關別與政事別 |
| [桃園市](https://opendata.tycg.gov.tw/datalist/24226c05-cb79-4d5e-bfb6-0dd277d10e29) | A | 完整、API、6 年 | 尚未取得 | 第一波，建立跨年度欄位對照 |
| [台中市](https://opendata.taichung.gov.tw/search/3d98b185-d7c7-4281-8039-fca36b900f14) | A | 完整、API／OAS、6 年 | 尚未取得 | 第一波，直接製作 OAS 轉接器 |
| [台南市](https://data.tainan.gov.tw/DataSet/Detail/e854692b-c087-4a63-b786-1d6335d9421f) | A | 完整、API、18 年 | 民代協助 | 第一波，適合趨勢與計畫文字搜尋 |
| [高雄市](https://data.kcg.gov.tw/) | A | 完整、API、10 年 | 尚未取得 | 第一波，先驗證年度資源網址規則 |
| [基隆市](https://www.klcg.gov.tw/tw/accounting/2404-308335.html) | B | 文件、12 年 | 尚未取得 | 建立 PDF 表格抽取與逐頁回鏈 |
| [新竹市](https://dep-auditing.hccg.gov.tw/ch/home.jsp?id=10123&parentpath=0%2C3%2C19) | B | 部分機器檔、9 年 | 民代協助 | 第二波，分開標示官方與協助取得資料 |
| [新竹縣](https://www.hsinchu.gov.tw/OpenDataDetail.aspx?n=902&s=181) | B | 部分機器檔、6 年 | 尚未取得 | 先接決算功能別，再抽取總預算 |
| [宜蘭縣](https://data.gov.tw/dataset/177126) | B | 部分、API、3 年 | 尚未取得 | 先做歲入與共同總覽，標示資料缺口 |
| [苗栗縣](https://opendata.miaoli.gov.tw/OpenDataDetail.aspx?n=9404&s=1745&sms=0) | B | 部分機器檔、8 年 | 尚未取得 | 組合縣級總表與局處單位預算 |
| [彰化縣](https://accounting.chcg.gov.tw/07budget/budget01_con.aspx?bull_id=418499) | B | 部分機器檔、3 年 | 尚未取得 | ODF／PDF 與 CSV 摘要雙軌接入 |
| [南投縣](https://data.nantou.gov.tw/dataset/c250773a-0202-11ef-84d4-005056bfed9c) | B | 部分機器檔、7 年 | 尚未取得 | 先接 CSV 機關別歲出 |
| [雲林縣](https://accounting.yunlin.gov.tw/News_Content.aspx?n=1100&s=573114) | B | 文件、6 年 | 官方完整 | 第二波，發展計畫與用途文字搜尋 |
| [嘉義市](https://data.chiayi.gov.tw/opendata/dataset/metadata?oid=d9303734-6e8f-4ff4-92bb-65e6caba2265) | B | 完整機器檔、6 年 | 尚未取得 | 小型城市試點，先接收入與功能別 |
| [嘉義縣](https://accounting.cyhg.gov.tw/News3.aspx?n=289&sms=12452) | B | 部分機器檔、6 年 | 尚未取得 | 整理分散附件與年份登錄表 |
| [屏東縣](https://data.gov.tw/datasets/search?p=1&size=10&s=_score_desc&rft=%E5%B1%8F%E6%9D%B1%E7%B8%A3%E9%A0%90%E7%AE%97) | B | 部分且偏舊、7 年 | 尚未取得 | 先用共同表，逐年驗證地方資料 |
| [澎湖縣](https://www.penghu.gov.tw/accounting/home.jsp?id=196) | C | 文件、3 年 | 尚未取得 | 先做文件清冊、頁碼與缺漏提示 |
| [花蓮縣](https://csa.hl.gov.tw/opendata/News_Content.aspx?n=27129&s=92599) | B | 部分機器檔、6 年 | 尚未取得 | CSV 摘要與完整 PDF 並行 |
| [台東縣](https://www.taitung.gov.tw/) | B | 文件、8 年 | 尚未取得 | 建立官方附件定位與交叉驗證 |
| [金門縣](https://kmasd.kinmen.gov.tw/MetaData.aspx?n=2C0269A6ACC76F6D&s=AC0E93C47B7649EF&sms=A2C62D68901B977C) | B | 文件、8 年 | 官方完整 | 第二波，115 年標明預算案 |
| [連江縣](https://eip.matsu.gov.tw/matsuopendata/chhtml/dataquery/4?tmpcode=07) | B | 文件、10 年 | 官方完整 | 第二波，處理老舊平台與連結健康檢查 |

最實際的接入順序可分四批。

1. 新北、桃園、台中、台南、高雄先重用台北的結構化資料路線。
2. 雲林、金門、連江、新竹市發揮完整單位預算或協助取得資料，優先建立計畫文字搜尋。
3. 嘉義市、南投、花蓮、苗栗、彰化、新竹縣與宜蘭逐表製作轉接器。
4. 基隆、嘉義縣、屏東、台東與澎湖先做文件清冊、頁碼引用和原檔回鏈。

這份盤點也提醒一個容易錯過的差異。六都的 API 條件較好，適合自動化；雲林、金門和連江的完整單位預算明細，可能更接近居民想搜尋的工作計畫。工程上「容易串」和內容上「夠深入」需要分開評估。

## 官方接口已經有什麼

政府資料開放平臺有三種不同角色。

第一是完整目錄 CSV 與 dataset metadata REST。它適合發現資料集、取得機關、授權、更新頻率和資源網址。本次下載完整目錄共檢查 53,201 筆登錄資料，地方預算資料的名稱、格式與年度差異很大。目錄能告訴程式去哪裡找，不能保證下載後有一致欄位。

第二是[機關發布與 M2M 指引](https://data.gov.tw/instruction)。發布端需要 API Key 與核准 IP，主要用途是機關間發布、同步資料集詮釋資料<sup>7</sup>。它不是面向居民或 AI 的跨縣市預算查詢 API。

第三是[資料標準 API 清單](https://data.gov.tw/dataset/172824)，其中包含政府會計等 24 個領域<sup>8</sup>。這份清單描述標準名稱、欄位與更新資訊，沒有直接提供各年度預算數值。主計總處工作簿和各縣市 CSV、JSON、XML、XLSX、ODS、PDF，才是實際證據來源。

地方平台已有一些可程式化接口。台北、新北、桃園、台中、台南與高雄都能找到機器格式，台中另有 OAS 開發介面。這些 API 仍由各縣市分別維護，資源網址、欄位與年度切換規則可能改版。正式管線需要健康檢查、內容雜湊、schema 差異警報與原始檔快照。

本次也搜尋 data.gov.tw、moda.gov.tw、gov.tw 與官方 GitHub 範圍。截至查閱日，沒有發現公開的官方政府預算 MCP。這只能描述掃描結果，不能證明某個內部試驗或尚未索引的專案不存在。數位發展部的公共服務 AI 文件開始談到 MCP 概念，距離可直接查詢正式預算的官方服務仍有一段路。

## OpenFun 已經把預算整理到哪裡

[OpenFun OpenBudget](https://budget.openfun.app/) 是目前最完整的民間預算產品層。網站涵蓋中央與 22 縣市，可做年度、政府與文字搜尋，也清楚揭露單位預算的來源差異<sup>9</sup>。官方完整公布單位預算明細者，網站列出金門、連江與雲林；台北、新竹市與台南的明細由地方民代協助取得。這項標示很重要，因為「網站查得到」不等於「政府已用穩定格式正式發布」。

OpenFun 的歐噴資料庫提供兩組值得直接採用的預算 bulk 資料。

- `budget-local` 提供地方基本預算表，涵蓋 19 縣市，缺少宜蘭、彰化與澎湖<sup>10</sup>
- `budget-detail` 文件列出中央、全國與 22 縣市的詳細靜態 CSV／JSON，包含計畫名稱、用途文字與金額等欄位，而且免 token 下載<sup>11</sup>

歐噴資料庫的 [`llms.txt`](https://data.openfun.tw/llms.txt) 另外提供資料集搜尋、每個資料集的 `skill.md` 與 REST `/api/v1` 說明<sup>12</sup>。搜尋和文件可以公開讀取，多數 records 與 aggregation 查詢需要 Bearer token。它已經非常接近「AI 可讀的公共資料目錄」，協定仍是 REST 與文件，不是 MCP。

OpenBudget 網頁另有可讀取的 `/api/counties`。本次測試可以取得縣市與年度資訊，公開文件中未看到版本與穩定性承諾。正式管線應優先依賴已公開說明的 bulk CSV／JSON，未文件化端點只用於探索或交叉驗證。

這一版直接依 `budget-detail` 的通用 URL 規則逐縣市下載 `工作計劃.csv`，再用 HEAD 檢查 `歲出分支列表.json`。22 縣市中有 21 份 CSV 可讀，共 45,505 列，20 個縣市最新到民國 115 年。彰化縣 CSV 回傳 404；澎湖雖可下載，最新年度只有 110 年。21 個成功回應的詳細 JSON 中，只有 11 個檔案大於空物件，實際含有計畫文字與用途別內容；另外 10 個檔案只有 2 bytes。

使用體驗上，OpenFun 的優勢很明確。靜態檔不需登入、下載快、欄位已統一到 `縣市`、`機關名`、`政事別`、`工作計畫`、`預算案`、`法定預算`、`調整後預算`、`決算` 與年度差異。批次載入 22 縣市、跑跨年度統計與找最大變動都很直接。限制也同樣明確。目錄涵蓋、CSV 可下載、JSON 有內容與最新年度完整是四個不同狀態，程式必須逐一檢查。金額欄位還要處理千分位與千元／元兩種單位，法定預算、預算案及決算不能混加。

OpenFun 最適合放在 OpenBook 的批次資料層。每天或每次發布版先下載、存雜湊、驗 schema、對官方總額，再把通過檢查的資料寫入共同模型。網站應顯示 OpenFun 整理責任及官方原始來源，不能讓民間正規化檔取代證據鏈。

OpenFun 還維護 `pcc-api.openfun.app`，可查招標、決標與廢標。這是採購接口。決標金額是契約資訊，可能經過變更，也不等同會計付款。OpenBook 若未來納入採購資料，UI 和 schema 都要保留「預算、決算、採購、支付」四個階段，避免使用者把相近金額誤認為同一件事。

## TwinkleAI 的 MCP 能做什麼

[Twinkle Hub](https://hub.twinkleai.tw/en) 是民間的 MCP-as-a-Service。API 文件提供 Streamable HTTP 端點 `https://api.twinkleai.tw/mcp/`，以長效 Bearer token 認證<sup>13</sup>。OpenData 類別提供五個工具。

| 文件名稱 | 正式 registry 名稱 | 用途 |
| --- | --- | --- |
| `opendata-list_domains` | `list_domains` | 列出資料主題 |
| `opendata-search_datasets` | `search_datasets` | 搜尋資料集 |
| `opendata-get_dataset` | `get_dataset` | 取得 schema、樣本與 metadata |
| `opendata-query_rows` | `query_rows` | 查詢正規化資料列 |
| `opendata-materialize_dataset` | `materialize_dataset` | 物化遠端檔案 |

Twinkle 的資料目錄把預算、決算、債務和會計報告放在 `public_finance` 類別<sup>14</sup>。本次使用有效 API key 完成 MCP initialize，正式服務回報 `opendata 1.46.0`、protocol `2025-03-26`，`tools/list` 共 52 個工具。文件中的五個 OpenData 名稱帶有 `opendata-` 前綴，正式 registry 則沒有前綴；照文件名稱呼叫會得到 `Unknown tool`。相容層應同時接受兩種名稱。

22 縣市各跑兩次搜尋，一次使用「縣市＋預算」，另一次使用「縣市＋總預算＋歲出機關別」，再對最佳命中執行 `get_dataset`。全部呼叫成功，當次 `_meta` 顯示成本 `US$0`；合併後得到 222 個不重複候選。21 個最佳結果屬於同一縣市，嚴格符合全縣市歲出總預算的只有 8 個。澎湖最佳結果落到臺灣澎湖地方法院單位預算；基隆、雲林、嘉義縣、屏東、金門等地常選到稅務局、警察局、消防局或預算員額資料。

精確 dataset ID 的表現好很多。`132907` 可取得臺北市歲出機關別總表，`132917` 可取得歲入來源別總表，`138490` 可取得 108 年後政事別預決算；`get_dataset` 會回傳欄位、樣本、授權與官方下載網址。`query_rows` 能讀正規化資料列，金額通常是字串，需要由使用端轉型。`materialize_dataset` 可成功，但實測回傳的是服務內部 canonical path，不是文件所描述的完整 CSV 內容。

內容品質仍需第二道驗收。新竹縣最佳命中的 Big5 CSV 欄位出現亂碼；臺中全市歲出資料集 metadata 只有 2 列；部分資料的 `is_normalised`、schema 與快取狀態也不完全一致。Twinkle 的價值是讓 AI agent 統一「找資料、看 schema、查資料、物化檔案」的操作，特別適合互動探索與臨時接入。正式數值仍要以 dataset ID 白名單、官方來源 URL、欄位型別檢查與總額對帳約束。

## 22 縣市雙接口驗收表

下表中的「計畫文字」表示 OpenFun 的 `歲出分支列表.json` 實際大於空物件。「Twinkle 判定」採嚴格規則，只有最佳命中同時代表整個縣市與歲出總預算，才列為全市歲出。

| 縣市 | OpenFun 工作計畫 | 計畫文字 | Twinkle 判定 | Twinkle 最佳命中 |
| --- | --- | --- | --- | --- |
| 臺北市 | 115 年／7,293 列 | 有 | 同縣市部分 | 臺北市總預算與附屬單位預算及其決算編列情形 |
| 新北市 | 115 年／1,670 列 | 無 | 全市歲出 | 115 年度新北市總預算歲出機關別預算總表 |
| 桃園市 | 115 年／1,776 列 | 無 | 全市歲出 | 桃園市總預算歲出機關別預算總表 |
| 臺中市 | 115 年／3,869 列 | 無 | 全市歲出 | 臺中市地方總預算歲出機關別（含追加預算） |
| 臺南市 | 115 年／8,501 列 | 有 | 全市歲出 | 臺南市政府地方總預算歲出機關別預算比較總表 |
| 高雄市 | 115 年／5,290 列 | 無 | 全市歲出 | 高雄市總預算歲出機關別預算總表 |
| 基隆市 | 115 年／2,685 列 | 無 | 同縣市部分 | 113 年 12 月各項稅捐實徵淨額與預算數 |
| 新竹市 | 115 年／797 列 | 有 | 同縣市部分 | 新竹市政府 115 年度歲入預算結構表 |
| 新竹縣 | 115 年／636 列 | 無 | 同縣市部分 | 114 年 6 月稅捐實徵淨額與預算數 |
| 宜蘭縣 | 115 年／330 列 | 無 | 同縣市部分 | 宜蘭縣 115 年度歲入總預算 |
| 苗栗縣 | 115 年／1,033 列 | 無 | 同縣市部分 | 苗栗縣 114 年度歲出機關別預算表 |
| 彰化縣 | CSV 404 | 無 | 同縣市部分 | 歲出機關別預算總表 |
| 南投縣 | 115 年／2,581 列 | 有 | 全市歲出 | 南投縣總預算歲入歲出簡明比較分析表 |
| 雲林縣 | 115 年／1,657 列 | 有 | 同縣市部分 | 雲林縣警察局歲出預算編列暨執行統計 |
| 嘉義市 | 115 年／997 列 | 無 | 全市歲出 | 嘉義市總預算歲出機關別預算總表 |
| 嘉義縣 | 115 年／1,587 列 | 有 | 同縣市部分 | 嘉義縣消防局各年度歲出機關別預算表 |
| 屏東縣 | 115 年／836 列 | 有 | 同縣市部分 | 屏東縣稅捐實徵淨額與預算數 |
| 澎湖縣 | 110 年／438 列 | 無 | 錯地或無精確結果 | 臺灣澎湖地方法院單位預算 |
| 花蓮縣 | 115 年／617 列 | 有 | 全市歲出 | 花蓮縣總預算歲出機關別預算比較總表 |
| 臺東縣 | 115 年／1,168 列 | 有 | 同縣市部分 | 臺東縣政府 112 年度施政計畫 |
| 金門縣 | 115 年／969 列 | 有 | 同縣市部分 | 金門縣警消單位預算員額與實際在職員額 |
| 連江縣 | 115 年／775 列 | 有 | 同縣市部分 | 107 年度連江縣總預算 |

## OpenFun、Twinkle 與官方資料的比較結論

| 面向 | 官方資料 | OpenFun | Twinkle |
| --- | --- | --- | --- |
| 權威性 | 最高，負責原始數字與表註 | 民間整理，需標注整理責任 | 民間 gateway，來源仍回到官方資料集 |
| 22 縣市共同口徑 | 主計總處彙編最好 | 工作計畫欄位較一致，實際涵蓋有缺口 | 搜尋可全跑，結果語意不保證一致 |
| 計畫與用途文字 | 分散在地方預算書 | 11 縣市有非空詳細 JSON | 依上游 dataset 與正規化狀態而定 |
| AI 操作 | 需自行下載與解析 | `skill.md`、bulk 與 REST 友善 | 原生 MCP，工具探索最方便 |
| 批次重建 | 適合，需城市轉接器 | 最方便，免 token 靜態檔 | 可做，但不宜讓 API key 成為靜態建置條件 |
| 主要風險 | 格式分散、連結與 schema 改版 | 空檔、404、年份不齊、單位差異 | 搜尋誤命中、編碼、型別、文件與正式工具差異 |

比較結論很簡單。官方資料負責「可被追責的原始證據」，OpenFun 最適合「大量而可重現的正規化匯入」，Twinkle 最適合「AI agent 的資料發現與互動查詢」。三者不能互相取代，OpenBook 應利用各自最強的部分，再用共同驗證層把結果接起來。

## 一份接口清冊

| 介面 | 身分 | 協定 | 認證 | 最適用途 | 主要界線 |
| --- | --- | --- | --- | --- | --- |
| data.gov.tw 目錄與 metadata | 官方 | CSV、REST | 讀取免 token | 發現資料與取得官方資源 | 沒有跨縣市預算語意 |
| data.gov.tw M2M | 官方 | REST | 發布端 API Key、IP | 機關發布與詮釋資料同步 | 不是預算查詢 API |
| 主計總處地方彙編 | 官方 | XLSX、ODS、PDF | 無 | 22 縣市共同總覽 | 未到逐計畫與付款 |
| 地方政府資料平台 | 官方 | API 或各式檔案 | 多數無 | 城市深度頁的正式來源 | 欄位與版本不一致 |
| OpenFun budget bulk | 民間 | CSV、JSON | 無 | 標準化明細與 AI 載入 | 21 市 CSV 可讀，11 市有計畫文字，需逐檔健康檢查 |
| OpenFun REST | 民間 | REST、skill.md | 部分 Bearer | 搜尋、查列、聚合 | 協定不是 MCP |
| Twinkle Hub | 民間 | MCP | Bearer | 通用 agent 資料工具 | 22 市呼叫成功，只有 8 市最佳命中為全市歲出 |
| 政府電子採購網 | 官方 | 網頁、開放資料 | 查詢免登入 | 招標與決標證據 | 契約不等於付款 |
| OpenFun PCC API | 民間 | REST | 公開 | 採購程式查詢 | 不能證明預算執行 |

## 全台 OpenBook 應該怎麼蓋

![全台 OpenBook 四層架構](/images/reports/taiwan-open-budget-architecture.svg)

第一層是官方證據。主計總處共同彙編提供全台基準，各地方政府的原始預算書、決算書、機器檔與表註提供深度。任何頁面、CSV 或 AI 回答都應保留來源 URL、年度、抓取時間、內容雜湊與原始單位。

第二層是來源登錄與城市轉接器。每個縣市都要有來源清冊、欄位對照、年度解析、版本差異、健康檢查與失敗告警。官方 API 可直接接入，Excel 與 ODS 經欄位驗證後轉換，PDF 則保留頁碼與人工抽查。OpenFun 可補正規化資料與歷史，Twinkle 可協助發現及 materialize；兩者都不能取代官方證據欄。

第三層是共同預算模型。最低限度需要 `government`、`fiscal_year`、`budget_stage`、`organization`、`function`、`program`、`account`、`amount`、`currency`、`source` 與 `version`。預算案、法定預算、追加減預算、決算、採購契約與支付必須是不同 `budget_stage` 或資料實體。

第四層是居民與 AI 介面。網站先回答固定而可驗證的問題，包含總額、配置、年度差異、機關與計畫搜尋、CSV 和原始文件。AI gateway 只在使用者需要自然語言探索時出場，回覆應附數值、年度、資料階段與官方回鏈。查不到時要說明缺口，避免以相近資料補成看似完整的答案。

這套架構需要六項具體產品規則。

1. 每筆數值帶上 `government`、`fiscal_year`、`budget_stage`、`amount`、`unit`、`source_url`、`retrieved_at` 與內容雜湊。
2. OpenFun 只在批次更新流程執行，下載後先檢查 HTTP 狀態、檔案大小、年度、欄位、總額與空檔，再進共同模型。
3. Twinkle 使用 dataset ID 白名單。語意搜尋只產生候選，不直接進正式數值；工具名稱同時相容有前綴與無前綴版本。
4. 每個縣市都要有來源健康頁，公開顯示最新年度、缺檔、schema 變動、編碼問題與最近成功重建時間。
5. 「值得追問」只顯示可重現訊號，旁邊固定呈現可能的重分類、基金、補助與一次性支出解釋，避免把統計離群值寫成指控。
6. AI 回答必須附官方來源與資料階段；找不到全市總預算時，不能拿局處資料、法院資料或相近縣市補答。

## repo 已經更新了什麼

[Open-Book repo](https://github.com/mashbean/Open-Book) 的全台版已有兩條可重建管線。`npm run refresh:interfaces` 逐縣市讀取 OpenFun，連接 Twinkle 正式 MCP，產生不含金鑰的接口驗收摘要。`npm run refresh:national` 下載主計總處 XLSX，驗證 22 縣市完整性、八類政事別、經資門與收支平衡，再把雙接口結果合併進前端 `cities.json`。

頁面預設進入全台比較表，上方提供全台總覽與 22 個可獨立分享的縣市分頁。比較表把官方 115 年總預算、OpenFun 資料深度、TwinkleAI 命中品質與查證問題放在同一列，不再要求使用者從大量卡片自行拼湊差異。每個縣市頁都呈現八類政事別、融資平衡式、OpenFun 最新年度與最大工作計畫、年度最大增減、TwinkleAI 最佳資料集、dataset ID、機關、列數與 schema。臺北額外的官方 XML 明細也收進單一臺北頁，不再占用歲出、歲入與資本門等上方分頁。

網站同時把三種資料明確標成不同責任。官方資料是可被追責的證據底座，OpenFun 是通過年度與總額對帳後使用的整理補充，TwinkleAI 是搜尋候選資料集的探索入口。全台頁仍保留六項值得追問訊號，完整 CSV 則包含融資、以前年度賸餘、服務命中與來源欄位。

GitHub Pages 發布仍不直接呼叫 OpenFun 或 Twinkle。服務驗收結果在本機或受保護的排程中先產生並通過檢查，再以不含秘密的 JSON 快照進版控。民間服務可以提高深度與開發速度，即使 API key、文件或服務狀態改變，22 縣市官方基本總覽仍可重建。

## 衡量下一版是否真的有用

全球 Open Budget Survey 2023 的 125 國平均透明度為 45 分，公共參與只有 15 分<sup>15</sup>。資訊公開與資訊被使用之間仍有距離。OpenBook 下一版應追蹤可觀察指標。

- 資料新鮮度，官方更新後幾天內完成重建
- 來源可追溯率，畫面數值有多少能回到原始檔與表註
- schema 穩定度，每年需人工修正多少欄位
- 查詢成功率，居民提出的具體問題有多少能由現有資料回答
- 缺口可見度，查不到時是否清楚說明缺資料或資料階段不同
- 使用與參與，CSV 下載、文件開啟、意見回報與地方議會使用案例

信任、政策品質或廉政不宜直接當成短期成效。這些結果受到政治競爭、媒體、議會能力、行政回應與社會脈絡共同影響。較務實的初期目標，是讓來源更容易被找到、比較、引用與質疑。

## 結論

台灣已經具備全台 OpenBook 的最低資料條件。主計總處的地方總預算彙編提供 22 縣市共同底圖，地方平台提供不同深度的正式來源。OpenFun 是目前最實用的批次預算整理層，21 市可讀 CSV 與 11 市非空詳細 JSON 已足以支援相當多工作計畫分析。Twinkle Hub 是目前最直接的臺灣資料 MCP，22 市呼叫全部成功，精確 dataset ID 的讀取也很可靠；語意搜尋品質仍不足以單獨決定正式資料來源。

目前的主要缺口是一份穩定的跨縣市預算語意契約。資料發布者、整理者、視覺化網站與 AI 服務目前各自解決一段問題。全台 OpenBook 的工作，是把這些段落接起來，又保留每筆數字的來源、年度、階段與責任。

接下來最值得做的工程有三條。第一條用新北、桃園、臺中、臺南與高雄完成官方結構化城市轉接器。第二條用 OpenFun 已有非空詳細 JSON 的 11 個縣市完成計畫文字與用途別搜尋。第三條建立 Twinkle dataset ID 白名單、搜尋評分與 schema 驗收，讓 MCP 成為可替換的探索 gateway。官方若未來提供預算 API 或 MCP，也能接到同一個來源登錄與驗證層，不必重做居民介面。

OpenBook 最重要的產出不只是一個更漂亮的預算網站。它也可以成為台灣地方財政資料的測試平台，持續指出哪個縣市可自動更新、哪個欄位無法比較、哪份 PDF 缺少機器格式，以及 AI 回答在哪裡必須停下來承認不知道。

## 參考資料

1. Allen Lab for Democracy Renovation. “OpenBook repository.” <https://github.com/Allen-Lab-for-Democracy-Renovation/Open-Book>。來源等級 A。
2. Town of Sutton. “OpenBook Sutton.” <https://openbook.suttonma.gov/>。來源等級 A。
3. mashbean. “Open-Book Taiwan.” <https://github.com/mashbean/Open-Book>。專案實作與方法文件。
4. Cucciniello, Maria, Gregory A. Porumbescu, and Stephan Grimmelikhuijsen. “25 Years of Transparency Research: Evidence and Future Directions.” *Public Administration Review* 77(1), 2017. <https://doi.org/10.1111/puar.12685>。來源等級 A。
5. de Renzio, Paolo, and Harika Masud. “Measuring and Promoting Budget Transparency: The Open Budget Index as a Research and Advocacy Tool.” *Governance* 24(3), 2011. <https://doi.org/10.1111/j.1468-0491.2011.01539.x>。來源等級 A。
6. 行政院主計總處。〈115 年度直轄市及縣市總預算彙編〉。<https://www.dgbas.gov.tw/News_Content.aspx?n=1525&s=236271>。來源等級 A。
7. 政府資料開放平臺。〈機關發布開發指引〉。<https://data.gov.tw/instruction>。來源等級 A。
8. 政府資料開放平臺。〈資料標準 API 清單〉。<https://data.gov.tw/dataset/172824>。來源等級 A。
9. OpenFun。〈OpenBudget〉。<https://budget.openfun.app/>。來源等級 B。
10. OpenFun。〈地方政府預算資料集 skill〉。<https://data.openfun.tw/datasets/tw.openfun~bulk~budget-local/skill.md>。來源等級 B。
11. OpenFun。〈政府預算詳情資料集 skill〉。<https://data.openfun.tw/datasets/tw.openfun~bulk~budget-detail/skill.md>。來源等級 B。
12. OpenFun。〈歐噴資料庫 llms.txt〉。<https://data.openfun.tw/llms.txt>。來源等級 B。
13. Twinkle AI. “Twinkle Hub API docs.” <https://hub.twinkleai.tw/en/docs?aud=api>。來源等級 B。
14. Twinkle AI. “Twinkle Hub data marketplace.” <https://hub.twinkleai.tw/en/data>。來源等級 B。
15. International Budget Partnership. “Open Budget Survey 2023.” <https://internationalbudget.org/open-budget-survey-2023/>。來源等級 A。
16. 臺北市政府。〈全國首創公民協力北市府預算視覺化〉。<https://www.gov.taipei/News_Content.aspx?n=F0DDAF49B89E9413&s=E16D24159022F528&sms=72544237BBE4C5F6>。來源等級 A。
17. 公共工程委員會。〈政府電子採購網〉。<https://web.pcc.gov.tw/prkms/tender/common/updated/readTenderUpdated>。來源等級 A。
18. Roelofs, Portia. “Transparency and mistrust: Who or what should be made transparent?” *Governance*, 2019. <https://doi.org/10.1111/gove.12402>。來源等級 A。
