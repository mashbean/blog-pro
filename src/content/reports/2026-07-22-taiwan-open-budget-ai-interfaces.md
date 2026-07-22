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

這篇報告回答三個問題。OpenBook 從 Sutton 到台灣經歷了什麼；台北以外哪些縣市適合接著做；OpenFun、TwinkleAI 與官方平台現有的 API、MCP 或相近接口，究竟能支援到哪一層。

先說結論。全台 22 縣市都能立即做同口徑總覽，因為行政院主計總處已有一份涵蓋所有縣市的正式彙編。若要做逐機關、逐計畫與跨年度深度頁，第一波最適合接入新北、桃園、台中、台南與高雄。雲林、金門、連江和新竹市的機器接口較弱，單位預算明細卻有特殊價值，也應列入第二波。AI 接口已經存在，OpenFun 提供可直接下載的預算資料與 AI 使用說明，Twinkle Hub 提供通用開放資料 MCP。官方目前的強項仍是目錄、詮釋資料、檔案與地方 API；截至 2026 年 7 月 22 日，本次掃描沒有發現公開的官方政府預算 MCP。

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
- `budget-detail` 提供中央、全國與 22 縣市的詳細靜態 CSV／JSON，包含計畫名稱、用途文字與金額等欄位，而且免 token 下載<sup>11</sup>

歐噴資料庫的 [`llms.txt`](https://data.openfun.tw/llms.txt) 另外提供資料集搜尋、每個資料集的 `skill.md` 與 REST `/api/v1` 說明<sup>12</sup>。搜尋和文件可以公開讀取，多數 records 與 aggregation 查詢需要 Bearer token。它已經非常接近「AI 可讀的公共資料目錄」，協定仍是 REST 與文件，不是 MCP。

OpenBudget 網頁另有可讀取的 `/api/counties`。本次測試可以取得縣市與年度資訊，公開文件中未看到版本與穩定性承諾。正式管線應優先依賴已公開說明的 bulk CSV／JSON，未文件化端點只用於探索或交叉驗證。

OpenFun 還維護 `pcc-api.openfun.app`，可查招標、決標與廢標。這是採購接口。決標金額是契約資訊，可能經過變更，也不等同會計付款。OpenBook 若未來納入採購資料，UI 和 schema 都要保留「預算、決算、採購、支付」四個階段，避免使用者把相近金額誤認為同一件事。

## TwinkleAI 的 MCP 能做什麼

[Twinkle Hub](https://hub.twinkleai.tw/en) 是民間的 MCP-as-a-Service。API 文件提供 Streamable HTTP 端點 `https://api.twinkleai.tw/mcp/`，以長效 Bearer token 認證<sup>13</sup>。OpenData 類別提供五個工具。

| MCP 工具 | 用途 | 放在 OpenBook 的位置 |
| --- | --- | --- |
| `opendata-list_domains` | 列出資料主題 | 來源發現 |
| `opendata-search_datasets` | 搜尋資料集 | 來源發現 |
| `opendata-get_dataset` | 取得 schema 與 metadata | 轉接器設計 |
| `opendata-query_rows` | 查詢資料列 | 探索與原型 |
| `opendata-materialize_dataset` | 將遠端檔案正規化成可查詢資料 | 檔案解析與暫存 |

Twinkle 的資料目錄把預算、決算、債務和會計報告放在 `public_finance` 類別<sup>14</sup>。官方文件描述平台可處理 data.gov.tw 的大量 CSV、JSON、XML、Excel 與部分文件，並主張每日更新。這些是服務方說明，本次沒有使用私有 API key 對地方預算做端到端驗收。正式採用前仍要測試年度選擇、欄位型別、PDF 表格、來源回鏈、錯誤處理與資料更新延遲。

Twinkle 的價值是幫 AI agent 統一「找資料、看 schema、查資料、物化檔案」的操作。它無法消除來源差異，也不會自動決定「歲出總額」「單位預算」「決算數」是否可以比較。語意模型、驗證規則與最後責任仍應留在 OpenBook 自己的資料層。

## 一份接口清冊

| 介面 | 身分 | 協定 | 認證 | 最適用途 | 主要界線 |
| --- | --- | --- | --- | --- | --- |
| data.gov.tw 目錄與 metadata | 官方 | CSV、REST | 讀取免 token | 發現資料與取得官方資源 | 沒有跨縣市預算語意 |
| data.gov.tw M2M | 官方 | REST | 發布端 API Key、IP | 機關發布與詮釋資料同步 | 不是預算查詢 API |
| 主計總處地方彙編 | 官方 | XLSX、ODS、PDF | 無 | 22 縣市共同總覽 | 未到逐計畫與付款 |
| 地方政府資料平台 | 官方 | API 或各式檔案 | 多數無 | 城市深度頁的正式來源 | 欄位與版本不一致 |
| OpenFun budget bulk | 民間 | CSV、JSON | 無 | 標準化明細與 AI 載入 | 需標示整理責任與年份 |
| OpenFun REST | 民間 | REST、skill.md | 部分 Bearer | 搜尋、查列、聚合 | 協定不是 MCP |
| Twinkle Hub | 民間 | MCP | Bearer | 通用 agent 資料工具 | alpha，需端到端驗收 |
| 政府電子採購網 | 官方 | 網頁、開放資料 | 查詢免登入 | 招標與決標證據 | 契約不等於付款 |
| OpenFun PCC API | 民間 | REST | 公開 | 採購程式查詢 | 不能證明預算執行 |

## 全台 OpenBook 應該怎麼蓋

![全台 OpenBook 四層架構](/images/reports/taiwan-open-budget-architecture.svg)

第一層是官方證據。主計總處共同彙編提供全台基準，各地方政府的原始預算書、決算書、機器檔與表註提供深度。任何頁面、CSV 或 AI 回答都應保留來源 URL、年度、抓取時間、內容雜湊與原始單位。

第二層是來源登錄與城市轉接器。每個縣市都要有來源清冊、欄位對照、年度解析、版本差異、健康檢查與失敗告警。官方 API 可直接接入，Excel 與 ODS 經欄位驗證後轉換，PDF 則保留頁碼與人工抽查。OpenFun 可補正規化資料與歷史，Twinkle 可協助發現及 materialize；兩者都不能取代官方證據欄。

第三層是共同預算模型。最低限度需要 `government`、`fiscal_year`、`budget_stage`、`organization`、`function`、`program`、`account`、`amount`、`currency`、`source` 與 `version`。預算案、法定預算、追加減預算、決算、採購契約與支付必須是不同 `budget_stage` 或資料實體。

第四層是居民與 AI 介面。網站先回答固定而可驗證的問題，包含總額、配置、年度差異、機關與計畫搜尋、CSV 和原始文件。AI gateway 只在使用者需要自然語言探索時出場，回覆應附數值、年度、資料階段與官方回鏈。查不到時要說明缺口，避免以相近資料補成看似完整的答案。

## repo 已經更新了什麼

[Open-Book repo](https://github.com/mashbean/Open-Book) 的全台版已新增一條可重建的資料管線。`npm run refresh:national` 會下載主計總處 XLSX，驗證 22 縣市完整性、八類政事別加總與經資門加總，再生成前端使用的 `cities.json`。22 縣市成熟度清冊放在版本控制內，前端與方法文件共用同一來源。

頁面預設進入全台總覽，可依區域、A／B／C 級與關鍵字篩選。每張城市卡顯示歲入、歲出、融資、債務還本、資本支出、前三大政事別、官方機器資料、歷年覆蓋、單位明細與介面類型。中文使用新台幣，英文使用固定匯率的美元估算，CSV 保留來源幣別與換算資訊。台北原有的 114、115 年度深度頁仍可切換。

這個版本刻意沒有把 OpenFun 或 Twinkle 放進建置時的必要依賴。GitHub Pages 可以單靠主計總處官方檔案重建。民間服務可以提高深度與開發速度，即使服務改版，22 縣市基本總覽仍能繼續更新。

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

台灣已經具備全台 OpenBook 的最低資料條件。主計總處的地方總預算彙編提供 22 縣市共同底圖，地方平台提供不同深度的正式來源，OpenFun 提供目前最完整的民間預算整理與 AI-ready bulk，Twinkle Hub 則示範如何用 MCP 讓 agent 操作台灣開放資料。

目前的主要缺口是一份穩定的跨縣市預算語意契約。資料發布者、整理者、視覺化網站與 AI 服務目前各自解決一段問題。全台 OpenBook 的工作，是把這些段落接起來，又保留每筆數字的來源、年度、階段與責任。

接下來最值得做的工程有兩條。第一條用五都完成結構化城市轉接器，證明共同模型能跨平台運作。第二條用雲林、金門、連江和新竹市完成單位預算與計畫文字搜尋，證明網站能從總覽進到居民真正想問的細節。官方若未來提供預算 API 或 MCP，也能接到同一個來源登錄與驗證層，不必重做居民介面。

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
