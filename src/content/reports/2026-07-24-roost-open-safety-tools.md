---
title: "把安全工具開源成公共財：ROOST 的啟示與華語世界的缺口"
description: "ROOST 把大平台的信任與安全工具開源成公共財。本文盤點它的緣起、經費與實際影響，切開全球生態系的兩個治理域，檢視華語世界的缺口，並提出一條以工具泛用化為地基的佈建路徑。"
pubDate: 2026-07-24
tags: ["信任與安全", "開源", "平台治理", "ROOST", "內容審核", "公民科技", "TWNIC", "Matters"]
category: "數位治理"
aiModel: "Claude Opus 4.8"
aiPipelineStage: "final"
aiPipelineId: "2026-07-23-roost-open-safety-tools"
aiGeneratedDate: 2026-07-24
humanReviewed: false
lang: "zh-TW"
slug: "2026-07-24-roost-open-safety-tools"
---

當一個網路平台談「內容安全」，它往往同時在做兩件被混為一談的事。一件是保護使用者，攔詐騙、擋垃圾訊息、下架兒少性影像、給被誤刪的人一個申訴管道。另一件是執行管制，依法規或商業考量決定哪些話能留在平台上。這兩件事共用同一套技術棧，卻朝相反的方向優化，而讓它們分岔的關鍵，往往在於誰出錢養這套工具、對誰問責。

2025 年 2 月，一個名為 ROOST 的美國非營利在巴黎 AI Action Summit 上發表，主張把信任與安全（Trust and Safety）工具做成免費、可自架、開源的公共財。它由 Discord、OpenAI、Google、Roblox 等產業側，加上 Knight、Patrick J. McGovern 等慈善基金會共同支持，四年起步資金逾 2,700 萬美元<sup>1</sup>。一年半後的今天，它已有可驗證的產出，也累積了足夠的爭議，值得華語世界仔細端詳。

這篇報告回答四個問題。ROOST 的緣起、經費與實際影響是什麼；它在全球信任安全工具生態系中處於什麼位置；華語世界有沒有對應物；如果要在華語世界佈建類似的開放安全工具生態系，該從哪裡開始。討論會把 Matters 在 TWNIC 網路社群計畫支持下做出、且原始碼與紀錄全數公開的治理工具（平台清道夫、spam 偵測服務、守望相助隊），當成華語圈少見的參照座標。

## 執行摘要

- ROOST 證明「機構化的產業加慈善混合資金」能把原本鎖在大平台內部的安全能力外部化成開源公共財，但它的「公共財」性質帶有明顯保留。出資比例從未公開，治理與工具來源都偏向產業。
- 全球生態系該切成兩個治理域來看。兒少性影像與暴力極端內容有法定通報體制，骨幹是封閉的會員制訊號共享，開源工具在這裡是配角。垃圾訊息與詐騙沒有統一體制，開源公共財在這裡才站上主位，這一域也和華語世界最相關。
- 決定一個安全公共財能不能活下去的，是資金結構而非技術。與 ROOST 同月發表的 fediverse 非營利 IFTAS，因每年約 120 萬美元的預算湊不齊而在一個月後關閉兒少影像掃描服務。
- 華語圈在事實查核與防詐端工具密集，且已長出一個以 Cofacts 開放資料為核心的部分共用層。但平台內容治理工具端近乎空白，沒有跨平台共用層。Matters 與 TWNIC 合作的開源治理 stack 是目前最接近 ROOST 模式的種子。
- 中文化 ROOST 的技術與授權幾乎全綠燈，卡關的是繁體在地語料、持續維運的資金與第二個採用平台。可行的佈建以工具泛用化為地基，接軌 ROOST 上游為低成本並行，跨平台聯盟則列為需要驗證的實驗。

## ROOST 的緣起與現狀

ROOST 的種子早於巴黎峰會 16 個月。它的研究源頭是哥倫比亞大學 SIPA 的 Institute of Global Politics 在 2023 年底起舉辦的一系列開放與安全論壇，Mozilla 提供了早期的一筆小額種子資助，臨門一腳則來自 Eric Schmidt 創立的 Special Competitive Studies Project（SCSP）等 Schmidt 系機構，它們協助把哥倫比亞大學的探索性研究，快速法人化為獨立的 501(c)(3) 非營利組織<sup>2</sup>。2025 年 2 月的巴黎 AI Action Summit 提供了發表舞台與「開放即安全」的政策框架，同場法國宣布了 4 億美元的公共利益 AI 基金<sup>3</sup>。

現狀是一個小核心、重外部貢獻的精實組織。執行團隊約五人，總裁 Camille François 出身哥大與 Google 的 Jigsaw；董事會十席在 2025 年底定案，主席是 Discord 法務長，副主席出身 Schmidt 系智庫，成員還包括 Google 兒少安全主管、Mozilla 總裁，以及台灣首任數位發展部長唐鳳<sup>4</sup>。這份名單本身透露了 ROOST 的重心所在，也留下了華語圈進入其治理層的一個現成接點。

值得注意的是出資結構。ROOST 對外只公布「四年逾 2,700 萬美元」的總額，而且這個數字有三個略微打架的版本，官方新聞稿、總裁的公開信與百日回顧分別寫成 2,700 萬、2,800 萬與含實物捐助的 2,850 萬<sup>5</sup>。落差來自把 Discord 捐贈的軟體這類非現金貢獻算進帳面。至於產業與慈善各出多少、每一筆金額多少，ROOST 從未逐筆揭露，媒體也查不到。一個以透明與可稽核為使命的組織，對自己的金流組成恰恰不透明，這本身就是一項發現。

## 三條產品線與它們的真實影響

ROOST 的產出是真的，而且不只一條線。它的安全堆疊由三塊組成，外加一份工具目錄。規則引擎 Osprey 以 Apache 2.0 授權釋出，來自 Discord 內部系統，用來即時處理事件流、判定與標記濫用行為。審核台 Coop 同樣是 Apache 2.0，內建兒少影像雜湊比對與美國 NCMEC 通報流程，源頭是 ROOST 收購新創 Cove 的智財再開源。第三塊是 ROOST Model Community，聚合了 OpenAI、Mila、Zentropi 等釋出的開放安全模型<sup>6</sup>。

把這個模式講精確，它是一種混合體，捐贈加上收購智財，再加上承接維運與模型聚合。Osprey 是 Discord 捐的，Coop 是買下 Cove 重寫的，承接自 Meta 的雜湊比對工具則是接手了原本由科技聯盟維護的社群支援<sup>7</sup>。ROOST 的實質角色，與其說是從零打造共用層，不如說是把散落在各家的既有安全資產，用一個中立非營利收編、上文件、續維護。

實際影響要分線看，避免把媒體聲量當成部署量。Osprey 的採用已達生產級，在 Bluesky 的生產環境每日處理數千萬事件，Discord 後來把開源版本重新併回自用，Matrix 也在使用並回饋程式碼<sup>8</sup>。這談不上「初步」。但 Coop 與模型線就薄得多，Coop 的 GitHub 上有超過 150 個未解 issue，顯示它仍在高速迭代、尚未穩定沉澱，具名採用者只有寥寥數家。更關鍵的是，ROOST 官方在 2026 年 5 月的路線圖裡白紙黑字寫著，收到許多社群貢獻，但尚未為開發團隊聘任全職工程師<sup>9</sup>。一個志在把安全能力變成穩定公共財的組織，維護永續性上有一道沒有補起來的缺口，而它把最難驗證影響的兒少安全線放在最顯眼的「世界首個」宣稱位置。

開源安全工具還有一個繞不開的質疑，規則公開會不會變成繞過手冊。ROOST 的回應分兩層，一是它遵循強制程式碼審查等資安實務，二是它開源的是引擎而非各平台私有的規則權重與訊號來源，看得到怎麼跑規則，看不到某個平台實際用哪些規則<sup>10</sup>。這個切分有道理，但兒少安全線牽涉分類器閾值與雜湊比對，一旦平台把自訂規則提交回公開協作，就可能洩漏可繞過的資訊。開源解決了買不起，卻未必解決用不動，也未必解決守得住。

## 資金結構決定存續：ROOST 與 IFTAS 的分岔

要看清 ROOST 補的是什麼缺口，最好的方法是看一個補同樣缺口卻失敗的組織。IFTAS 是一個為 fediverse，也就是 Mastodon 這類聯邦式社群，提供信任安全共用層的非營利。它與 ROOST 同在 2025 年 2 月成為新聞，方向卻相反。IFTAS 宣布陷入資金危機，年度預算約 120 萬美元只有約四分之一有著落，前一年的社群募款僅得約一萬美元，於是在 3 月關閉了每年成本僅逾 6 萬美元的兒少影像掃描服務，縮編為 IFTAS 2.0<sup>11</sup>。

兩者的使命幾乎重疊，命運卻天差地別，而決定性的差異在於綁不綁得到矽谷平台的錢。ROOST 每年約 700 萬美元量級的現金跑道，對比 IFTAS 湊不齊的 120 萬，落差約在六到二十倍之間。這個對照直接改寫了問題的重心。開源公共財能不能存活，關鍵落在資金結構是否穩固，以及這個結構背後的依賴與代價，技術優劣反而是其次。ROOST 今日的能打，某種程度上是用治理被產業滲透換來的。去掉產業出資換回獨立性，很可能換回的就是 IFTAS 那樣的脆弱。這個兩難，正是華語世界若要複製時必須先想清楚的。

## 生態系裡的兩個治理域

把 ROOST 放進全球地圖，會發現生態系該切成兩個治理域來看，混層比較會誤判缺口的位置。

第一個域是兒少性影像與暴力極端內容。這裡有法定的違禁定義、強制通報體制與權威雜湊名單，所以產業的骨幹是封閉的會員制訊號共享，例如科技聯盟的 Lantern 計畫、GIFCT 的雜湊資料庫、微軟 PhotoDNA 與 Google 的比對服務。這些機制刻意封閉，且明文排除非政府組織、研究者與政府加入，理由是法律責任與信任查核，而非吝嗇<sup>12</sup>。在這一域，開源工具是消費封閉訊號的軟體殼，與資料層互補而非競爭，重要性要降一級。

第二個域是垃圾訊息、詐騙與一般濫用。這裡沒有統一法定體制，沒有權威名單，也沒有會員俱樂部。商業方案只服務付得起的平台，開源專案零散且維護不穩。這一域才是開源公共財的主場，也和華語世界最相關。ROOST 的價值主要落在這裡。

生態系裡還有兩個值得記住的教訓。其一，免費有三種，免費且開源的可自架工具、免費但專有的大廠 API、以及開放權重但附使用限制的模型，三者抗風險能力差很多。Google 的 Perspective API 曾是上千個平台依賴的免費毒性偵測服務，卻已宣布在 2026 年底日落<sup>13</sup>，證明大廠免費隨時可被單方撤回，只有開源可自架才是抗撤回的公共財。其二，模型層的安全防護正在興起，Llama Guard、ShieldGemma、Granite Guardian 這類開放模型看似會讓傳統分類器過時，但它們取代的是獨立分類器，不是規則編排、案件管理與可稽核留證這些工作，而後者恰恰是 ROOST 押注的位置<sup>14</sup>。

## 華語世界有沒有對應物

把目光轉回華語世界，答案是有半個，而且長在查核端，不在平台治理端。

台灣的事實查核與防詐生態密度全球罕見。Cofacts 真的假的是 g0v 社群的開源專案，把眾包查核資料以 CC0 與 CC BY-SA 4.0 對外開放；台灣事實查核中心、MyGoPen 都通過國際事實查核聯盟認證；Gogolook 更把防詐的 Whoscall 做成上市公司，旗下的美玉姨直接接取 Cofacts 的開放資料，趨勢科技防詐達人與 LINE 訊息查證也共用同一份公共查核庫<sup>15</sup>。這是華語圈唯一實證的自發共用層，只不過它只覆蓋查核事實這一種訊號，且集中在台灣的防詐場景。

問題在另一端。平台內容治理工具，例如垃圾訊息分類器、共享黑名單、審核主控台與申訴系統，在華語圈近乎空白，且完全沒有跨平台共用層。PTT、Dcard、中文 Mastodon、Telegram 與 Discord 上的華語社群各自為政，沒有共享分類器，也沒有共享訊號機制。事實查核處理的是一則訊息的真假，這與平台治理處理的「某個帳號是不是垃圾帳號集團、某則留言該不該下架、被下架的人如何申訴」是兩個不重疊的環節。台灣的查核生態再世界級，也補不上平台治理工具的洞。

這裡必須劃清一條界線。中國有全球規模最大的中文內容處理基礎設施，數美、網易易盾、阿里雲與騰訊天御四家商業 API，數美一家的日均風控就逾 30 億次<sup>16</sup>。但它們在《網絡信息內容生態治理規定》下運作，把「涉政」列為預設風險類目，優化目標是合規與言論管制，問責對象是監管者而非使用者。把它們當成華語版 ROOST 的對應物，等於把審查工具充當安全工具。這些 API 技術能力再強，也只能當反面對照組，提醒我們，欠缺的從來就不是開源這個形式。缺的是一個以使用者安全、而非政權安全為念的開放生態，能不能長出來。

真正接近 ROOST 模式的華語實體，是 Matters 與 TWNIC 合作的開源治理 stack。它由三塊組成，平台清道夫把審查、排序與抗審查機制對公眾科普並分層揭露；spam-detection-scaffold 是可重訓的開源垃圾偵測服務，以多語模型加 LoRA 微調，在未見模板的評估上召回率約 0.88、誤殺約 0.33%；community-watch 讓受信任公民移除垃圾留言，全程公開審計，AI 只提示不自動移除<sup>17</sup>。它覆蓋了垃圾偵測、守望相助、處置、申訴與科普五個環節，程式以 Apache 或 MIT 授權真開源。

這套 stack 的存在本身，說明了一個關鍵變數。它的開源直接是 TWNIC 資助契約的產出要求，而非純自發。spam 偵測模型只有兩顆星，商業上開源它幾乎沒有回報，沒有公部門資助，商業公司通常把 spam 模型當競爭資產藏起來，正如 Whoscall 與中國四家 API 都閉源。換句話說，決定華語開放安全工具能不能成立的，同樣是資助模式而非技術能力。如果 TWNIC 下一期不續、又無其他資助方接手，這套 stack 很可能停在種子狀態，甚至隨計畫結案而停止維護，那會是 IFTAS 故事的華語版預演。

## 中文化與佈建路徑

假設要認真在華語世界佈建這樣一個生態，該怎麼做。研究把問題拆成技術、授權、載體與順序四層，得到一個略微反直覺的結論，容易的那幾層真的容易，難的地方不在工程。

技術與授權幾乎全綠燈。Osprey 的規則引擎與 Coop 的雜湊比對本質上語言中立，要改的並非引擎本身，而在規則書怎麼寫。roostorg 底下各專案以 Apache 2.0、MIT 或 CC BY 4.0 授權，明文允許 fork、修改與再散布<sup>18</sup>。需要中文語料的只有分類器層，而盤點下來，泛中文安全語料其實不缺，COLD、SWSR、ShieldLM 等資料集都可取用。卡關的是兩重錯配，這些語料幾乎全是簡體，且場景集中在攻擊性語言與大型語言模型對話安全，而平台最燒錢的環節，其實落在繁體在地的垃圾廣告、詐騙話術與盜帳號<sup>19</sup>。這批「繁體乘以平台治理場景」的標註資料，在公開學界資源裡幾乎是一片空白，而 Matters 的守望相助隊與 spam 偵測服務正好在生產這種資料。TAIDE 提供了懂台灣繁體的基座模型，可以當底層編碼器，但它的安全對齊著墨薄，尚未見到現成的內容審核模型<sup>20</sup>。

難的是載體與順序這兩層。沒有單一資助者能獨力撐起建置加維運。TWNIC 網路社群計畫單案上限新台幣 150 萬元，是單年期、專案型的結構，適合一次性建置與研究，卻沒有多年期承諾<sup>21</sup>。而政府與社群資助的開源專案在計畫結束後死亡，是有本地前例的，g0v 公民科技創新獎助金就在 2020 年因募款不如預期而停辦<sup>22</sup>。這指向一個設計原則，資金必須採起步加畢業路徑的雙段結構，把長期維運交給已經在付這筆錢的人，例如平台自身的工程預算，或是把軟體維護外部化給 ROOST 上游，而不是假設單年期計畫年年續。

於是佈建順序有三軌。第一軌是工具泛用化，把 spam-detection-scaffold 與 community-watch 從 Matters 專用抽象成任何平台可接的服務與資料格式。這是成本最低、也是後兩軌的前置，可驗收的產出是一份不含平台專有欄位的通用偵測 API 契約，加上一份去識別的繁體平台標註資料集。第二軌是接軌 ROOST 上游，它授權全綠、明確接受外部貢獻，又缺在地化，先送出繁體採用案例與工具目錄條目的成本只是文件與翻譯，槓桿卻是國際能見度與長期軟體維護的外部化，而唐鳳在董事會提供了一個現成的接觸點。第三軌是跨平台聯盟，價值在訊號跨平台共享的網路效應，但它依賴第二、第三個華語平台實際接入，風險最高，宜列為實驗而非承諾。

這裡有一個最危險的推論跳躍要標明。從「Matters 能做」推到「任意華語平台都能採用」並不成立。Matters 有工程團隊、創辦人親自投入治理、既有生產級模型與審計基礎設施，還把透明可稽核當核心價值，這些條件多數華語社群並不具備。工具泛用化要把部署門檻降到近乎零，但它解決不了治理意願的問題，一個平台願不願意把處置權部分下放給公民並公開審計，是價值選擇而非技術選擇；也解決不了資料主權的問題，跨平台共享敏感訊號牽涉隱私、法遵與競爭考量，遠比技術接入難。任何路線圖若只講把工具中文化、開源、放上去，而不處理量能、意願與主權這三個社會技術條件，就是把 Matters 的特例誤當成通例。

## 從單平台透明開盒到共用層

把上面的分析收束回 Matters 與 TWNIC 這條線，會看到一個清楚的銜接故事。2026 年度的 TWNIC 網路社群計畫做的是單平台的透明開盒，把 Matters 一家的審查演算法、處置手段與治理史對公眾攤開，交出平台清道夫、spam 偵測服務與守望相助隊三個組件，簡報、原始碼與公開站台都可以查考<sup>17</sup>。它的價值不只在成果本身，更在於把 Matters 從一個平台，變成一個有可驗證治理資產、能對外輸出方法論的行動者。

順著 ROOST 的鏡子看，下一步的公共議題呼之欲出。把攤開的東西泛用化，讓它從 Matters 一家可用，變成任何華語平台可用，並掛進國際上游的開放安全工具生態。這條路徑的說服力，恰恰建立在這個平台已經對自己開過刀這件事上，那是憑空提案抄不走的信任資本。ROOST 走的是先有大平台捐工具的順序，華語世界缺少願意捐出成熟安全工具的大平台，更可能走的是相反順序，由既有平台先自建，再透過公部門資助開源化為共用層。認清這個順序的差異，比照搬 ROOST 的組織形態重要得多。

## 結論

ROOST 是一個值得華語世界端詳的案例，但端詳的方式不該是照抄。它示範了機構化混合資金如何把安全能力變成開源公共財，也暴露了這條路的代價，治理被產業滲透、金流不透明、四年後的續資仍是問號。它最結實的一課，是把 IFTAS 的倒閉擺在旁邊看出來的，一個安全公共財能不能活，取決於資金結構，而非技術。

華語世界要不要走類似的路，答案傾向於要，因為平台治理工具端的空白確實存在，而且沒有共用層。但怎麼走，得順著自己的條件。技術與授權不是障礙，繁體在地語料、持續維運的資金與第二個採用平台才是。可行的起手式，是把 Matters 這類既有種子泛用化、接軌 ROOST 上游、把聯盟當實驗，並且從一開始就用畢業路徑而非續命補助來設計資金。留待回答的問題還有不少，第二個採用平台會是誰，繁體平台場景的語料除了 Matters 自有資料還能從哪裡來，以及官方的打詐訊號能不能開放給公民社會接取。這些問題的答案，會決定華語開放安全工具生態究竟停在一份願景，還是長成一片可以互通的地基。

*筆者為 SCSP International Strategy Forum Global Fellow 2026，並實際參與文中所述 Matters 開源治理工具與 TWNIC 計畫的建置。本文對該案例的描述以公開資料為準，並含第一手參與經驗。*

## 參考資料

1. PR Newswire.〈Leading Technology Companies and Foundations Back New Initiative to Provide Free, Open-Source Tools for a Safer Internet in the AI Era〉2025-02-10. <https://www.prnewswire.com/news-releases/leading-technology-companies-and-foundations-back-new-initiative-to-provide-free-open-source-tools-for-a-safer-internet-in-the-ai-era-302371239.html>。來源等級 A。
2. Mozilla Blog.〈ROOST: Open source AI safety for everyone〉2025-02-10. <https://blog.mozilla.org/en/mozilla/ai/roost-launch-ai-safety-tools-nonprofit/>。來源等級 B。
3. Fortune.〈France joins tech companies and philanthropies to back a $400M foundation for public-interest AI〉2025-02-10. <https://fortune.com/2025/02/10/france-tech-companies-and-philanthropies-back-400-million-foundation-to-support-public-interest-ai/>。來源等級 B。
4. ROOST.〈ROOST Welcomes Inaugural Board of Directors to Guide Mission and Long-Term Governance〉2025-12-22. <https://roost.tools/blog/roost-welcomes-inaugural-board-of-directors-to-guide-mission-and-long-term-governance/>。來源等級 A。
5. ROOST.〈ROOST's First 100 Days: Building & Planning〉2025-06-04. <https://roost.tools/blog/roost-s-first-100-days-building-planning/>。來源等級 A。
6. ROOST.〈Coop 1.0: World's First Free, Open Source Child Safety Infrastructure for Every Platform〉2026-06-09. <https://roost.tools/blog/coop-1-0-world-s-first-free-open-source-child-safety-infrastructure-for-every-platform/>。來源等級 A。
7. ROOST.〈ROOST Announces "Coop" and "Osprey": Free, Open Source Trust & Safety Infrastructure for the AI Era〉2025-07-21. <https://roost.tools/blog/roost-announces-coop-and-osprey-free-open-source-trust-and-safety-infrastructure-for-the-ai-era/>。來源等級 A。
8. ROOST.〈How Bluesky Transformed their Safety Operations with Osprey〉2026. <https://roost.tools/blog/how-bluesky-transformed-their-safety-operations-with-osprey/>。來源等級 A。
9. ROOST Project Roadmap（官方）. <https://roostorg.github.io/community/roadmap.html>。來源等級 A。
10. Khan, Fatima Faisal（Institute for Security and Technology / Tech Policy Press）.〈ROOST Reminds Us Why Open Source Tools Matter〉2025-03-17. <https://www.techpolicy.press/roost-reminds-us-why-open-source-tools-matter/>。來源等級 B。
11. IFTAS.〈Funding Challenges and the Future of Our Work〉2025-02-06; 〈IFTAS 2.0 – Rescoping and Refocusing〉2025-03-17. <https://about.iftas.org/2025/02/06/funding-challenges-and-the-future-of-our-work/>。來源等級 A。
12. Tech Coalition.〈Lantern〉計畫頁; GIFCT.〈Hash-Sharing Database〉. <https://technologycoalition.org/programs/lantern/>。來源等級 A。
13. Perspective API（Jigsaw）官方頁（含 2026-12-31 sunset 說明）. <https://www.perspectiveapi.com/>。來源等級 A。
14. Granite Guardian 技術報告（IBM, Apache-2.0）. <https://arxiv.org/html/2412.07724>。來源等級 A。
15. Cofacts.〈rumors-api LEGAL.md〉（資料授權 CC0-1.0 / CC BY-SA 4.0）. <https://raw.githubusercontent.com/cofacts/rumors-api/master/LEGAL.md>; 數位時代〈Gogolook 美玉姨比對三資料庫〉. <https://www.bnext.com.tw/article/60154/gogolook-meiyu-line-bot-hit-fake-message>。來源等級 A / B。
16. 數美科技官網（天淨內容風控，日均逾 30 億次）. <https://www.ishumei.com/>; 國家網信辦《網絡信息內容生態治理規定》. <https://www.cac.gov.cn/2019-12/20/c_1578375159509309.htm>。來源等級 A。
17. Matters 平台治理公開成果。平台清道夫 <https://governance.matters.town>；守望相助隊 <https://community-watch.matters.town>；spam-detection-scaffold 原始碼 <https://github.com/thematters/spam-detection-scaffold>；thematters GitHub 組織 <https://github.com/thematters>；TWIGF 2026 與 g0v Summit 2026 公開簡報 <https://mashbean.net/decks/twigf-2026-matters/>、<https://mashbean.net/decks/g0v-summit-2026-matters/>。來源等級 A。
18. roostorg GitHub 組織（各 repo 授權）. <https://github.com/roostorg>。來源等級 A。
19. Deng, Jiawen 等.〈COLD: A Benchmark for Chinese Offensive Language Detection〉EMNLP 2022. <https://arxiv.org/abs/2201.06025>。來源等級 A。
20. TAIDE 推動臺灣可信任生成式 AI 發展計畫（官網）. <https://taide.tw/>。來源等級 A。
21. TWNIC.〈2026 年度網路社群計畫徵選開始收件〉（上限 150 萬、截止 2026-09-30）. <https://www.twnic.tw/blog/contents.php?id=161&lang=zh-tw>。來源等級 A。
22. g0v 公民科技創新獎助金（機制與 2020 停辦公告）. <https://grants.g0v.tw/>。來源等級 B。
