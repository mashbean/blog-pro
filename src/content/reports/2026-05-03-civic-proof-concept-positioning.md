---
title: "Civic Proof 是什麼，又不是什麼：與既有數位身分概念的區辨"
description: "Civic proof 是規範性概念而非工程容器。透過既有概念地景的層級錯置分析、Nissenbaum contextual integrity 的 non-derivability 推導、Marshall 公民權三層的啟發式類比、與四需求型態的溯因論證，將 civic proof 定位為一個合格的概念工程提案，是規範條件束的整合命名，而非已驗證的最佳上位概念。"
pubDate: 2026-05-03
tags: ["civic-proof", "concept-engineering", "contextual-integrity", "verifiable-credentials", "digital-identity", "citizenship-theory", "privacy-theory", "marshall", "nissenbaum", "cohen", "hildebrandt", "cappelen"]
category: "數位身分與概念工程"
aiModel: "Claude Opus 4.7"
aiPrompt: "為什麼需要 Civic Proof 這個新詞？它與既有概念的關係為何？是工程概念還是規範概念？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-03-civic-proof-concept-positioning"
aiGeneratedDate: 2026-05-03
humanReviewed: false
lang: "zh-TW"
---

## 一、導論：拒絕兩個極端誤讀

當「civic proof」這個詞被引入學術、政策與工程社群時，會立刻面臨兩個方向相反的誤讀。第一個方向把它當成 marketing 詞，視為對既有工程概念（verifiable credential、attribute proof、proof of personhood、SBT）的重新包裝，懷疑它除了製造術語膨脹（terminology proliferation）以外沒有其他內容。第二個方向走到反方向，把它當成 conceptual realism，視為描述某個獨立存在的「公民證明客觀範疇」，彷彿命名工作只是發現一個已在那裡的事實。

這兩個誤讀都會錯過本概念的真正定位。Civic proof 是一個合格的概念工程提案（concept-engineering proposal），它的學術合法性既不來自命名的新穎，也不來自對某個客觀範疇的指稱對應。它的正當性建立在對既有概念地景中一組具體缺口的整合命名，而這組缺口本身可被經驗檢驗。Cappelen 在 *Fixing Language* 裡為這類提案訂定了四個判準（含蓋度、區辨力、政策溝通、可承繼性）<sup>1</sup>，這些判準提供具體的評估標準。底下要做的工作有兩件，一是把這四個判準的當前通過狀況講清楚，二是把可受質疑、待後續案例驗證的那一條（政策溝通）誠實標出，避免把一個提案性命題包裝成已驗證命題。

要能做到這件事，必須先把「概念是否存在」與「概念是否被廣泛採用」區分開來，並把「規範條件層」與「資料模型／密碼學原語／載體／協議層」分開處理。Verifiable credential 文獻在工程社群存在已久，這個事實不證明 civic action 場景的規範條件已被涵蓋；anonymous credential 構造已存在 30 餘年，這個事實也不證明 civic proof 規範框架已被建立。為避免這類滑移，必須在概念盤點之前先建立層級判準，然後才能進入正式論證。

下文分七節展開。第二節盤點既有概念地景，採用「五層抽象表」處理「層級錯置」與「存在 vs 採用」的雙重區分，把 verifiable credential 等概念安放到它們所屬的抽象層。第三節討論隱私哲學基礎，沿用 Nissenbaum *contextual integrity* 的多元性前提推出 non-derivability 形式論證，再以 Cohen 的脈絡性自我形構與 Hildebrandt 的 agonistic legality 補強，並標示三位學者之間的概念差異。第四節處理 Marshall 公民權三層作為啟發式類比的限制與用途，並引入 Sen 與 Anderson 兩條補強路徑。第五節以四需求型態的溯因論證（abductive normative concept-engineering）整合前三節，給出 M1–M4 的形式化結構。第六節給出 civic proof 的形式定義、最小必要條件與最大允許範圍。第七節說明本概念與本系列第一篇文章「accountability without identification」的整合。第八節為結語，明確標示尚待 Ch5 case study 驗證的開放部分與後續章節的對接。

---

## 二、既有概念地景：層級錯置與「存在 vs 採用」

### 2.1 兩個常見誤讀的拆解

第一種誤讀說「verifiable credential 已經夠了，不需要再造詞」。第二種誤讀說「anonymous credential 是 1985 年就被 Chaum 提出的概念<sup>2</sup>，現在這個詞只是把舊技術換個名字」。兩種說法都漏掉了一個重要區分。

「概念是否存在」與「概念是否被廣泛採用」必須分開處理。Anonymous credential 的學術文獻已存在 30 餘年，從 Chaum 1985<sup>2</sup>、Camenisch 與 Lysyanskaya 2001/2002 的 CL signature 構造<sup>3</sup>，到 BBS+ 的部署落地，技術鏈條完整。但 ISO 18013-5 mDL（mobile driving licence，2021）<sup>4</sup>預設 *未* 啟用 unlinkability across presentations；W3C VC Data Model 2.0（2025-05-15 Recommendation）<sup>5</sup>把 selective disclosure 列為可選 cryptosuite 而非 normative 必選；EUDI Wallet ARF（2025-12 Cooperation Group iteration；歷史上以 v1.4 為穩定快照）<sup>6</sup>對 unlinkability 條款的最終立場仍在 implementing regulations 層級擺盪。也就是說，工程能力存在，產品規格採用度有限。把「文獻存在」當作「規範條件已滿足」是常見的滑移。

第二個錯位更深一層。Verifiable credential 是「資料模型」（data model），attribute proof 是「密碼學原語」（cryptographic primitive），proof of personhood 是「Sybil 抵抗的子問題」，claim 是 VC 內部的語意單位，pseudonym 是身分指稱形式，soulbound token 是鏈上資料結構提案<sup>7</sup>。這些概念分屬不同抽象層，把它們並列為「同類候選詞」本身就是範疇錯誤。Civic proof 作為規範上層不參與層級競爭，它規定上述工程／規範元件在「支撐公民行動」目的下必須共同滿足的條件束。這個立場的價值，在於把「應該選哪一個工程詞當概念招牌」這類爭論移出論證軸心。爭論的真正焦點，是規範條件層需要什麼樣的命名，才能讓下層四個工程／載體／協議層的選擇可以被同一套規範語彙評估。

### 2.2 五層抽象表

把這個層級分布攤開為一張表格，能讓後續論證有一個可被指認的位置感。

| 抽象層 | 元件範例 | 角色 |
|---|---|---|
| 規範條件層（normative） | civic proof, accountable pseudonymity, contextual integrity | 規定組合必須滿足什麼 |
| 資料模型層（data model） | W3C VC, claim, mDoc, SD-JWT VC | 規定資料結構與三方流通 |
| 密碼學原語層（cryptographic primitive） | BBS+, CL, ECDSA, BLS, accumulator, KVAC, ZK-SNARK | 提供可組合的數學保證 |
| 儲存／載體層（storage / carrier） | SBT (ERC-5114/5192/5484), DID document, on-chain registry | 規定資料放在哪裡 |
| 協議層（protocol） | OpenID4VCI/4VP, Privacy Pass (RFC 9576/77/78) | 規定資料如何流動 |

這個表的功能有兩層。對工程社群，它防止把規範條件層降階到密碼學原語層的討論。例如把 civic proof 寫成「某種特定 ZK schema」，等於把它變成可被一條更新的 cryptosuite 取代的中間品；這既低估了規範條件層的獨立性，也可能讓論述被綁定在特定密碼學選擇上。對隱私研究與政治哲學社群，它防止把規範條件層升階為 ontological 範疇。例如把 civic proof 寫成「公民證明的本質」，會引入 conceptual realism 的負擔，使提案性質的命名變成 metaphysics 主張。Civic proof 的位置在最上層，其他既有概念在它們各自的層；五層之間是組合關係而非取代關係。一個成功的 civic action 場景部署，會同時涉及五層的選擇，但這些選擇對應的爭論種類各異，規範條件層的爭論屬於「為什麼要組合這些功能」，協議層的爭論屬於「在 OpenID4VP 與 mdoc presentation flow 之間如何取捨」，兩者不該被混在一起評估。

「擴展 VC 規格即可」這條反論在五層抽象表裡可被準確定位。它假設只要 W3C VC 在 v2.x 把 selective disclosure、accountability extension、pseudonymous identifier extension 全部 normatively 內建，civic proof 就成為冗餘命名。這個假設混合了兩個動作，把規範條件層的功能要求清單寫進資料模型層的 normative 章節，與把「為什麼這個清單長這樣」的規範論證內嵌入工程規格。前者技術上可行；後者不在 W3C 工作組的任務範圍，W3C 規格文件不負責論證「為什麼隱私是 informational norms 的條件相宜性」這類規範性源頭<sup>10</sup><sup>11</sup>。把兩個動作混為一談會讓「規範條件已被工程內化」的錯覺取代規範論證。

### 2.3 「最接近候選」的覆蓋估算

把 anonymous credential with selective disclosure 視為 civic proof 的最接近候選，是文獻盤點過程中合理的對照。Camenisch-Lysyanskaya 的 CL 構造<sup>3</sup>支援屬性的 selective disclosure；Boneh-Boyen-Shacham 的 short group signatures with opening<sup>8</sup>提供事後可究責的工程基礎；BBS+ 與 SD-JWT 把這些構造帶到生產可用的距離<sup>9</sup>。這組工程能力對 civic action 的四條件（anonymity / unlinkability / verifiability / accountability）覆蓋率以綜合分析估算約為八成。剩下的兩成屬於規範框架層的缺口，不在工程層。既有概念告訴我們「能做什麼」，沒有告訴我們「為什麼這些功能需要被組合在一起、組合條件由誰決定、什麼樣的場景該強制什麼樣的子集」。這個八成覆蓋的估算本身就佐證了規範缺口的實在性。

「八成」是綜合分析估算而非實證測量，未涵蓋的兩成主要落在 accountability 的事後可控啟封結構與 anonymity 在 uniqueness 場景下的「強建議」屬性。這兩塊的工程原語存在（accountable group signatures、threshold pseudonyms、designated-verifier proofs），但它們之間的整合命名缺位，使政策論述難以單一指稱整組需求。命名缺口（naming gap）是規範缺口的具體表現之一。

### 2.4 SBT 提案的場域定位

Soulbound token（Buterin-Ohlhaver-Weyl 2022）<sup>7</sup>提出鏈上不可轉讓憑證的構想，ERC-5114 / 5192 / 5484 是相應的標準提案。把 SBT 與 civic proof 對照時，要區分兩個層次。SBT 是「鏈上載體層」的提案，與 civic proof 的「規範條件層」不在同一抽象層次。即便 SBT 在 2027–2028 採用率上升並補上 selective revelation 與 selective linkability 機制，也不會吸收 civic proof 的位置。

底下用未來條件式處理 SBT 的擴張情境。若 SBT 場域擴張，公開鏈預設仍與 unlinkability 衝突。即使 SBT 內建 ZK selectivity，鏈上「該地址持有某 SBT」仍是公開事實，除非整條鏈是 privacy chain，這又引出另外一組治理問題。Civic proof 的條件不應預設執行載體是鏈或非鏈，否則它就降階為工程偏好而非規範層概念。鏈上與鏈下的差異屬於部署差異，並非規範差異；部署差異不應決定規範條件層的內容。此外，DeSoc 對「decomposable rights」與「community recovery」的政治哲學主張可獨立爭論，civic proof 不承載這些主張，只承載規範條件，因此即便 SBT 普及，civic proof 仍是與 DeSoc 平行而非從屬的概念。

---

## 三、隱私哲學基礎：CI、Cohen、Hildebrandt 三段式論證

### 3.1 CI 多元性主張作為前提

Nissenbaum 的 *contextual integrity*（CI）框架以 informational norms 為核心。每一個 social context 對「什麼資訊在誰之間以什麼原則流動」有它自己的規範，這組規範由 actors（sender / subject / recipient）、attributes（資訊類型）、transmission principles（傳遞原則）四元組界定<sup>10</sup>。CI 的內部結構已經蘊含「不同 context 不可互推」的多元性命題，Nissenbaum 在 *Daedalus* 2011 文章中以「no privacy 'in general'」一句把這個立場標注得很清楚<sup>11</sup>。

把 CI 當成已驗證的萬靈丹會錯過幾個重要的內部質疑。Solove 對 CI 過度依賴 norm 的批評、Mulligan-Koopman-Doty 把 privacy 標為 essentially contested concept 的結構性質疑<sup>12</sup>、Benthall-Gürses-Nissenbaum 自己對 CI operationalization 的爭議承認，都應在引用 CI 時被併同處理。這些質疑不全部成功，Solove 的「contextual approach 過度依賴規範存在」批評在 Nissenbaum 2010 第 8 章已部分回應，Mulligan-Koopman-Doty 的 essentially contested 結構並不取消 CI 的分析力，只是要求論者明示 CI 是哪一階概念。CI 作為前提，要求論者標出合理的使用範圍，而非主張其全面有效性。

底下使用 CI 的方式有具體限制。CI 不直接給出 civic proof 的規範條件，CI 給出的是「context 多元性」與「norms 的 context-relative ends 證成」結構。從這個結構推導 commercial / government identity 的 norms 不蘊含 civic-specific norms，需要再一個橋接前提，即 civic action 是一個獨立 context 且具備可被 CI 結構分析的 informational norms。CI 框架本身對 civic action 是不是獨立 context 沒有明文表態（Nissenbaum 2010 與 2011 處理的主要案例為醫療、教育、金融），這個橋接前提是論證自行引入的，並借自共和主義政治哲學傳統<sup>11</sup><sup>13</sup>。把這個借用顯式標出，是維持論證透明度的必要動作。

### 3.2 Non-derivability 的形式論證

把上述前提形式化，可以得到一個三段論結構：

> **Premise 1**　CI 框架下，每個 context 有自己的 informational norms，且這些 norms 由該 context 的 context-relative ends 證成<sup>10</sup>。
>
> **Premise 2**　Commercial context 的 ends 是交易效率與契約問責；government identity context 的 ends 是法律效力與行政互通。兩者皆不蘊含「低門檻政治參與」與「權力 contestability」這兩個 civic-specific ends。
>
> **Premise 3**　從 X 的 ends 推出 Y 的 norms，需要 X 的 ends 蘊含 Y 的 ends。
>
> **Conclusion**　從 commercial / government identity context 的 norms 不能推出 civic action context 的 norms。

形式上是演繹，但 Premise 2 的成立依賴規範性論證，要說明為什麼 civic action 的 ends 與 commercial / government 的 ends 不重疊。Mill 1859 *On Liberty* 第 3 章<sup>30</sup>、Tocqueville 1840 *Democracy in America* 第 2 卷<sup>31</sup>、Pettit 1997 *Republicanism* 第 6 章<sup>32</sup>提供「civic context 的特殊規範性源頭」之歷史與哲學脈絡。當代隱私研究中，Mulligan-Koopman-Doty 2016<sup>12</sup>、Pasquale 2015<sup>13</sup>對 commercial 與 civic 兩端規範分歧的描述也支撐 Premise 2。

這條推論的限制要明確。從「context 多元性」推到「civic 場域具備某組特定規範條件」，中間經過了一個橋接前提，即 civic action 的 ends 是低門檻政治參與與權力 contestability。這個前提本身借自共和主義政治哲學傳統，並非 CI 框架自帶。一個徹底反對共和主義 ends 的論者（例如某些 minimalist liberal）會質疑 Premise 2，CI 框架本身對此沒有立場。底下承認此處借用了外部規範資源，並把這個借用顯式標出，避免讓論證表面看似純粹從 CI 推得，實則暗藏共和主義承諾。

### 3.3 Cohen 與 Nissenbaum 的概念差異

引用 Cohen 與 Nissenbaum 並列時必須處理兩位學者的概念取徑差異。Nissenbaum 的核心關注是 *information flow* 的脈絡相宜性（contextual appropriateness）；Cohen 的核心關注是 *self-formation* 的脈絡前提<sup>14</sup>。兩者重疊但不等同，混用會導致論證承擔過多本體論負擔。

Cohen 在 *Configuring the Networked Self*（2012）裡承認 CI 是「目前最有力的 contextual norm 框架」<sup>14</sup>，並在三點上做了實質補強。第一是 *semantic discontinuity*。脈絡之間的不可穿透性是自我形構的必要條件，當技術系統把所有 context 接通，semantic discontinuity 即被抹除。第二是 *playspace*。政治意見的 *形構* 需要時間與空間，不能在尚未成形的階段就被 cross-context 監視吸納為穩定 identity attribute。第三是 *configuring vs constituting*。networked self 的「自我」是被網絡 configuration 持續生成，而非 prior to 網絡的本體。這個動態形構立場在 Cohen 2019 *Between Truth and Power* 第 2 章被推到對 Nissenbaum 的批判性繼承<sup>15</sup>。Cohen 主張 informational capitalism 的「data refineries」結構性地溶解了 contextual norms 賴以存活的 social arrangements，CI 的規範框架在當代條件下需要 *制度性升級*。

對 civic proof 而言這個概念差異有具體後果。在 Nissenbaum 框架中，unlinkability 是 informational norm 的一條規範約束，要求工程設計符合既有 norm。在 Cohen 框架中，unlinkability 是人格自由的本體論前提，要求工程設計參與 norm 賴以存活的制度重構。借用 Cohen 的補強來支撐「unlinkability 屬於規範必要而非優化選項」這條子論點時，必須同時承認兩者的內部張力，不寫成同一立場。

Cohen 2019 對 Nissenbaum 的批判性繼承在 ch. 2 較簡略，此處的處理方式是把「制度性升級」當作對 civic proof 規範條件層命名工作的支援論點，承認其具體工程化方案需要後續研究。

### 3.4 Hildebrandt 的 agonistic legality 延伸

Hildebrandt 在 *Smart Technologies and the End(s) of Law*（2015）<sup>16</sup>提出 *agonistic legality* 概念。法律規範必須在 contestability 的條件下才能稱為法律；當自動化決策壓縮 contestability，法律規範本身的存在條件就被擠壓。在 *Privacy as Protection of the Incomputable Self*（2019）<sup>17</sup>中，她進一步把 incomputable self 視為法律主體性的本體論前提。

Hildebrandt 的論證主要對象是自動化決策（algorithmic decision-making），並非 civic proof 的工程設計。把 agonistic legality 延伸到 civic proof 設計層級需要詮釋性轉譯，把「自動化決策對 contestability 的擠壓」轉譯為「civic proof 設計對 ex-post contestability 的支援需求」。這是 *延伸應用* 而非 *Hildebrandt 直接主張*。轉譯只在 civic action 的 accountability 條件下成立。Civic proof 在 ex-post 司法程序下提供 conditional unmasking 的工程支援，特別對應 *Doe v. Cahill* (2005) 式的 conditional unmasking 結構。Hildebrandt 對「technological normativity 取代 legal normativity」的批判（與 Cohen 2012 並讀）<sup>16</sup><sup>14</sup>是綜合詮釋而非單一文本明文。

對 Hildebrandt 的引用以 2015 與 2019 為主。Hildebrandt 領銜的 Cohubicol 計畫 2023–2024 deliverables 對 W3C VC 與 EUDI Wallet 規格的具體評論在當前文獻盤點中未直讀，相關推論若需強化可改以 Mulligan-Koopman-Doty 2016<sup>12</sup>支撐。

把 Cohen 與 Hildebrandt 兩條補強合起來看，它們提供的是「為什麼 civic action 場景的隱私要求不能被簡化為 informational norm 的工程實現」這個更深的本體論論點。Cohen 提供「自我形構的脈絡前提」這條 ontological 路徑，Hildebrandt 提供「contestability 的法律條件」這條 jurisprudential 路徑。兩者都不直接給出 civic proof 的工程規格，但都提示工程規格設計需要回應規範條件層而非僅密碼學原語層的要求。這個提示與 § 2.2 五層抽象表的層級分布一致，規範條件層的爭論不能被工程層的進步取代。

---

## 四、公民權三層的啟發式類比

### 4.1 Marshall 結構作為啟發式 framing

Marshall 在 *Citizenship and Social Class*（1950）<sup>18</sup>提出公民權的三層分化結構，即 civil rights（18 世紀）、political rights（19 世紀）、social rights（20 世紀）。每一層的擴張依賴前一層的鞏固，且各層的規範內容不可化約。把這個三層分化作為 civic proof 三型（legal proof、political-pseudonymous proof、attribute proof）規範上層性的 framing 是有用的，但必須限縮為 *啟發式類比* 而非 *結構同構*。

類比的非對稱性必須先講清楚。Marshall 處理的是「不同類型 *權利*」之間的本體分化，civil、political、social 各自指向不同的規範客體（自由、參政、社會保障）。Civic proof 處理的是「同類 *證明形式* 的不同條件配置」，legal、attribute、uniqueness、pseudonymous 各自指向不同的條件子集，但它們都是「證明」這個同類客體。權利分化與證明條件分化是不同類型的結構，把前者當後者的同構模型會把規範客體誤讀為條件配置。把 Marshall 結構降階為啟發式 framing，是對這個非對稱性的誠實回應。

### 4.2 啟發式類比承擔的工作

雖然不是同構，Marshall 結構仍對 civic proof 提供三項 framing 工作。

其一，*分化的歷史合理性*。Marshall 把公民權分化過程描述為，每一層的擴張回應特定歷史條件下的特定規範需求，新層不取代舊層而是疊加。這個結構讓 civic proof 四型可被理解為「不同需求型態的條件配置疊加」。Legal proof 不被 attribute proof 取代，pseudonymous proof 不被 uniqueness proof 取代；它們各自對應不同的規範必要性。新型態的引入（例如 uniqueness proof 對應的 PoP 場域擴張）應理解為四型在不同場景下的並列配置，並非對舊型態的取代。

其二，*不可化約規範條件*。Marshall 的關鍵主張是 social rights 不能化約為 civil rights 的延伸，它有自己的規範來源（經濟安全、教育機會），需要不同的制度安排（社會保險、公共教育）。對 civic proof 而言，pseudonymous proof 不能化約為 attribute proof 的延伸，它有自己的規範來源（結社自由、表達自由<sup>19</sup>），需要不同的工程機制（accountable group signatures、threshold opening）。這個不可化約性與 § 5 四需求型態矩陣中的「規範必要而非偏好」立場相互呼應。

其三，*規範擴張不對稱*。Marshall 的三層分化在歷史上呈現非線性發展。civil 與 political rights 在 20 世紀後半穩定，social rights 在 1980 年代起反向退縮。Joppke 2010<sup>20</sup>觀察當代公民權呈現 *退化* 而非進步擴張，特別在跨境身分管制、難民資格、雙重國籍等議題上。這個不對稱對 civic proof 的提示在於，四型的條件配置不會自動向「最強保護」收斂，制度路徑與政治力量會壓制特定型態，pseudonymous proof 在當前監控資本主義條件下尤其面臨壓力。把 Marshall 結構作為 framing 同時繼承了它的不穩定性。這項不穩定性本身對 civic proof 的工程設計提出警示，預設啟用最弱保護的規格選擇，會在政治壓力下變成事實標準。

具體而言，當 civic proof 規範條件層的 anonymity 與 unlinkability 條款在工程規格中被標為「可選」而非「必選」，實際部署傾向接受預設值，即工程實作中的「弱保護」配置。Marshall 結構的歷史教訓在於，規範條件需要制度配套（工程規格的 normative 強度標示、跨司法管轄區的 conformance 要求協調、對「不持有 wallet」者保留回退路徑的法律承諾）才能落實。任一項缺位都會使命名工作停在書面。

### 4.3 Sen 與 Anderson 的補強及其張力

把 Sen capability approach<sup>21</sup>與 Anderson relational equality<sup>22</sup>並列為補強時，必須明示兩者的內部張力，不能把它們寫成同一立場。

Sen 的 capability approach 從 *資格 → 能力 → 功能* 路徑提供目的論補強。對 civic proof 而言，擁有 wallet 與正確的 credential 只是 *資格*；能在不被 surveillance 的情況下實際參與政治結社是 *能力*；實際達成的政治表達與集體決策是 *功能*。把 civic proof 的工程設計目標放在「支撐能力轉化」而非「提供資格憑證」這個 framing 直接借自 Sen<sup>21</sup>，把評估指標從工程指標推到結果指標。

Anderson 的 relational equality 從 *關係性平等* 路徑提供另一向度補強<sup>22</sup>。她對 luck egalitarian distributive 思維的批評對 civic proof 設計的提示在於，「無 wallet / 無智慧型手機者不被 systematically 排除」並非「再分配多一份 wallet」就能解決的問題，而是制度設計是否避免結構性次等地位的問題。Anderson 立場推出的設計提示是，civic proof 的部署必須保留非數位回退路徑，使「不持有 wallet」不會被結構性地等同於「不行使公民權」。

兩者的張力在於，Sen 保留 distributive 框架，需要評估誰擁有什麼能力；Anderson 批判 distributive luck egalitarian 思維，質疑能力分配的測量框架本身。底下借 Sen 的目的論結構與 Anderson 的關係性平等批判作為不同向度的補強，不主張兩者構成統一理論。讀者若採 Sen 立場可推出較細緻的能力評估設計；若採 Anderson 立場則可推出較強的反排除制度設計。Civic proof 的規範條件對這兩個方向都開放。這樣的開放性可被視為規範上層概念應有的特質，並非論證上的弱點。它規定條件束的滿足要求，不規定條件束底下具體政治哲學的選擇。

### 4.4 類比強度的等級

把這條啟發式類比的證據強度標為 D 級（中強推理），不應作為 civic proof 規範上層性的 *獨立證據*，僅作為 *支撐性 framing*。獨立證據由 § 2 既有概念地景的盤點與 § 3.2 non-derivability 推論承擔；Marshall 類比提供論證合成時的概念位置感，協助讀者理解 civic proof 四型結構的歷史對照與規範必要性，但不取代論證軸。把類比降為啟發式 framing 的處理方式，回應的是文獻檢索後對類比強度的修正，避免把概念位置感誤讀為結構同構。

---

## 五、四需求型態的溯因論證

### 5.1 規範差異矩陣

把 civic action 的需求型態形式化為四元集合 N = { N_legal, N_attribute, N_uniqueness, N_pseudonymous }，把規範條件形式化為四元集合 C = { anonymity, unlinkability, verifiability, accountability }。每一個需求型態對應 C 的一個（或多個）子集 f(N_i) ⊆ C，這個對映體現該型態的「必要規範條件」。

| 需求型態 | 典型場景 | 必要規範條件子集 | 既有工程容器 / 密碼學原語 | 規範缺口 |
|---|---|---|---|---|
| Legal proof | 報稅、遺產繼承、不動產契約、跨境身分驗證 | verifiability（強）+ accountability（強）；anonymity 不必要、有時禁止；unlinkability 通常不要求 | VC + 國家根 PKI、eIDAS QES、NIST IAL3/AAL3<sup>23</sup> | 既有概念覆蓋充分；缺口在跨域承認，不在規範本身 |
| Attribute proof | 年齡驗證、居住地證明、會員資格、學歷驗證 | verifiability + unlinkability（避免 issuer-verifier collusion）+ anonymity（弱）+ accountability（取決於場景） | BBS+ 選擇性揭露、AnonCreds、mDL with SD-JWT-VC | 部分覆蓋；現有工程強調最小揭露，但「unlinkability + 事後 accountability」並存的條件未充分整合 |
| Uniqueness proof | 一人一票電子投票、UBI 領取、空投反 Sybil、社群一帳號 | verifiability + uniqueness（context-bound）+ unlinkability between contexts；anonymity 強建議（保護政治參與） | proof of personhood（Worldcoin、BrightID、Idena、Proof of Humanity）<sup>24</sup> | Sybil resistance 視角主導，缺「為何 anonymity 是規範要求而非可選優化」的論證 |
| Pseudonymous proof | 吹哨揭弊、敏感醫療諮詢、政治結社、家暴受害者求助、記者來源保護 | anonymity（強）+ unlinkability（強）+ accountability（事後可控啟封 / threshold opening） | accountable group signatures<sup>8</sup>、threshold pseudonyms、designated-verifier proofs | 工程上有原語但無整合命名；規範上沒有橫向整合詞，是命名缺口（naming gap） |

四型（或可能三型，若 uniqueness 在某些論證下被 pseudonymous 涵蓋，仍保留四型結構的分析合法性，因為各型對應的威脅模型與失敗代價有實質差異）的差異具備規範必要性而非使用者偏好性質，原因有三。

第一是 *權利支撐*。Pseudonymous proof 支撐結社自由與表達自由<sup>19</sup>；uniqueness proof 支撐政治平等（one person, one vote）；legal proof 支撐契約問責；attribute proof 支撐脈絡性最小揭露。權利的差異使條件的差異成為規範必要。Marshall 結構（§ 4.2）對這條提供啟發式 framing 的支援，新權利的進入會帶來新的條件配置要求。

第二是 *威脅模型差異*。Legal proof 的威脅模型是「冒充」；pseudonymous proof 是「去匿名化加事後報復」；attribute proof 是「過度揭露」；uniqueness proof 是「Sybil 攻擊加政治壓制」。不同威脅模型強制不同條件子集，也直接決定密碼學原語選擇。

第三是 *失敗代價的不對稱*。Legal proof 失敗代價在交易層；pseudonymous proof 失敗代價可能是身體安全。代價不對稱使「條件缺漏」在不同型態間具有不同的規範權重。一個對 uniqueness proof 場景可接受的弱 anonymity 預設值，搬到 pseudonymous proof 場景會造成不可逆的去匿名化。這個不對稱不能被「給使用者選項」消解，因為實際使用者面對的是預設規格而非高階配置空間。

需要進一步強調，矩陣是分析工具，實際場景常跨型。例如「匿名舉報但需要居住證明」涵蓋 pseudonymous + attribute 兩型；「投票需要居住資格 + 一人一票 + 不可關聯選票與選民」涵蓋 attribute + uniqueness + pseudonymous 三型。Accountability 在不同型態下含義也分裂，legal 中是「責任歸屬到自然人」，pseudonymous 中是「責任歸屬到假名加事後可啟封」，attribute 中是「issuer 對屬性正確性負責」。這個含義分裂本身就支持「需要規範上層整合」這個論點，因為若沒有上層整合詞，accountability 的不同含義會在不同社群被拿來互相反駁，造成規範誤譯。

需要補充的是，§ 5.1 矩陣中 pseudonymous proof 一行的「accountable group signatures」對應的是 Boneh-Boyen-Shacham 2004<sup>8</sup>所建立的 short group signatures with opening 框架；Camenisch-Lysyanskaya 的 CL 構造<sup>3</sup>則對應 attribute proof 場景的 selective disclosure，兩者所屬的密碼學原語家族不同，不應混為同一構造。

把矩陣與 NIST SP 800-63-4<sup>23</sup>的 assurance levels 對照能看到既有分類學的限制。NIST 框架以 IAL / AAL / FAL 三軸分類「強度」，這套分類在 legal proof 場景下覆蓋良好，對 pseudonymous proof 場景則缺乏框架。Solove 2008<sup>28</sup>的 privacy taxonomy 以 *invasions* 為分類單位，目標與本矩陣不同。Pfitzmann-Hansen 2010<sup>27</sup>的 anonymity terminology 提供形式定義，屬於術語清單而非規範整合。三組既有分類學各自有用，都不取代規範條件層的整合命名工作。

### 5.2 M1–M4 形式化結構

把溯因論證的結構形式化：

> **(M1) 規範差異經驗事實**　存在從 N 到 P(C)（C 的冪集）的對映 f，使得 f(N_legal)、f(N_attribute)、f(N_uniqueness)、f(N_pseudonymous) 在規範必要性層面非空地有差異。
>
> **(M2) 既有概念覆蓋不足**　對任何單一既有概念 X ∈ { VC, attribute proof, proof of personhood, anonymous credential, federated identity, … }，X 不能同時涵蓋四個 f(N_i) 的規範必要條件。
>
> **(M3) 整合需求**　政策溝通、工程規格設計、跨領域合作三場域，缺乏上位整合詞會帶來實際成本（範疇混淆、規範誤譯、治理缺口）。
>
> **(M4) 上位概念候選**　在所有候選中，「civic proof」作為規範性（而非工程或密碼學）上層概念，是最佳解釋。

從 M1 ∧ M2 ∧ M3 推到 M4，採取的是 *inference to the best explanation*（IBE）<sup>25</sup>。這是溯因論證，次強，不必然。M1 由 § 5.1 規範差異矩陣與第三、四節的規範來源論證提供；M2 由 § 2 既有概念地景盤點提供；M3 由跨領域案例觀察支撐，W3C VC 工作組對 Conformance Profile 的討論、EUDI ARF 對 unlinkability 條款的爭議、台灣 DIW 政策過程中對「為何要組合這些工程詞」缺乏單一指稱的觀察。

IBE 結構的弱點要明確標出。它依賴 P1 / P2 / P3 的可信度，本身不是演繹必然性。若四型壓縮為三型（例如某些論者主張 uniqueness 可被視為 pseudonymous 的特殊配置），M4 仍可成立，但 M1 的形式化表述需要調整。本論證主張對型態數目魯棒，即便型態數從四壓為三，「規範必要差異存在」與「既有概念覆蓋不足」兩條前提仍成立，最佳解釋的論證結構不變。型態數的爭論屬於矩陣的具體組織，不影響規範上層概念的命名工作必要性。

### 5.3 Concept-engineering proposal 的誠實降級

按照 Cappelen 在 *Fixing Language*<sup>1</sup>裡為概念工程提案訂定的判準（含蓋度、區辨力、政策溝通、可承繼性），civic proof 當前通過狀況如下：

| Cappelen 判準 | 通過狀況 | 說明 |
|---|---|---|
| 含蓋度（coverage） | 通過 | 四需求型態加四條件矩陣涵蓋既有 civic 場景的核心案例（吹哨、投票、結社、年齡驗證、契約、敏感諮詢） |
| 區辨力（discrimination） | 通過 | 與 VC（工程容器）、attribute proof（密碼學原語）、PoP（uniqueness 子集）、SBT（鏈上載體）有清楚邊界 |
| 政策溝通（policy uptake） | *待驗證* | 依賴 Ch5 case study 對 1–2 個 ongoing 政策過程（如 EUDI ARF v2.x、台灣 DIW 後續 specs）實證 civic proof 概念引入後是否改善溝通 |
| 可承繼性（inheritance） | 部分通過 | 與 Burgess-Plunkett conceptual ethics 框架<sup>26</sup>、Pfitzmann-Hansen anonymity terminology<sup>27</sup>相容；與 Solove privacy taxonomy<sup>28</sup>有部分重疊但目標不同 |

對「政策溝通」這一關必須誠實降級。Cappelen 嚴格判準下，這一關的通過需要實際政策過程的觀察證據。當立法者、工程社群、隱私研究者使用 civic proof 一詞時，是否確實減少了範疇混淆、規範誤譯與治理缺口？這個問題不能在概念定義階段被回答，需要 Ch5 的 case study（建議選 EUDI ARF v2.x implementing regulations 過程與台灣 DIW 後續 specs 兩個 ongoing 案例）實證。判斷準則包括立法草案是否使用 civic proof 一詞、跨領域工作組是否以其為共同指稱、學術引用是否批判性繼承而非僅陳列。

因此本概念在 Ch2 的學術主張定位限縮為，civic proof 是 *合格的概念工程提案*，在含蓋度、區辨力、可承繼性三項通過 Cappelen 判準；政策溝通一項待 Ch5 驗證。它在後續案例研究完成前不被宣稱為 *已驗證的最佳上位概念*，這個強主張被刻意保留為條件性結論。

把「最接近候選」與「次優候選」的差距也誠實標出。Anonymous credential with selective disclosure 覆蓋四維約八成。即使 W3C VC 在 v2.5 把 BBS-based selective disclosure 改成 Conformance 必選並納入 uniqueness oracle interface 與 accountable de-anonymisation 條款，civic proof 仍承擔三件事。其一是跨規格中立性，W3C VC、ISO 18013-5 mDL、IETF SD-JWT VC 三者格式不互通，civic proof 作為規範層概念可同時對三個規格家族下規範約束。其二是規範論證的接受性，法學者與政策制定者不會用 W3C 術語論述「投票需要什麼證明條件」。其三是可立法引用，立法草案中對 civic proof 的引用比對特定規格條款的引用更可在不同司法管轄區複用。

---

## 六、形式定義與邊界條件

### 6.1 形式定義

把前五節的論證合成為形式定義。

> **Civic proof** 是「為支撐公民行動（civic action）而設計的證明形式之規範上層概念」。它要求一組工程元件（VC + selective disclosure + unlinkability + revocation + uniqueness oracle + accountable de-anonymisation）在 anonymity / unlinkability / verifiability / accountability 四條件的場景特定子集上共同滿足，而這些條件子集對應四種公民行動需求型態（legal / attribute / uniqueness / pseudonymous）。

定義含三個結構性要素。其一，「規範上層概念」標示 civic proof 處於 § 2.2 五層抽象表的最上層，不參與下方四層的層級競爭。其二，「場景特定子集」標示四條件並非全有全無，而依需求型態啟用不同子集，legal proof 不要求 anonymity，pseudonymous proof 強要求 anonymity 與 unlinkability。其三，「對應四種需求型態」標示型態結構是分析工具，實際場景可跨型，但跨型本身仍可被條件子集分析所捕捉。

### 6.2 最小必要條件

Civic proof 主張的最小必要條件如下。

1. 在指定 civic action 場景下，能識別需求型態 N_i ∈ { legal, attribute, uniqueness, pseudonymous }。
2. 對應該型態的條件子集 f(N_i) ⊆ { anonymity, unlinkability, verifiability, accountability } 在工程實作中被同時滿足。
3. 條件不被 vendor lock-in、規格碎片化、或預設關閉的 cryptosuite 系統性削弱。

這三條最小條件不規定具體工程選擇。VC 或 mDL 或 SBT 都可作為實作載體，BBS+ 或 CL 或 KVAC 都可作為密碼學原語，只要組合結果滿足條件子集。Civic proof 規範條件層對下層保持中立，中立性使其規範約束在不同規格家族之間切換時不失效。

### 6.3 最大允許範圍

Civic proof 不主張的內容也要明確。

1. 它不主張 civic action 的需求型態必須限為四型；若未來實證觀察顯示有第五型（例如「集體可問責的群體證明」獨立成型），矩陣可擴張。
2. 它不主張某種特定密碼學選擇優於其他選擇；BBS+ 與 CL 的取捨是工程層問題。
3. 它不主張某種特定治理結構優於其他治理結構；wallet 競爭結構（單一國家 wallet 對多元 wallet 生態）是規範與政治問題，不在 civic proof 的條件束內部決定。
4. 它不主張本概念是命名工作的唯一解；若另一個概念在四 Cappelen 判準下表現更佳，本概念可被取代。

最小必要條件與最大允許範圍合起來看，civic proof 的學術角色被定位為 *規範層的中介概念*。它的功能是讓規範論證、工程設計、政策溝通三個社群有共同指稱。過度膨脹（規定具體工程或治理結構）與過度收縮（變成某條規格的縮寫）都會破壞中介功能。

### 6.4 核心收束句

把上述定位濃縮為一句話。

> Civic proof 不是新原語，也不是新規格——它是規範條件束（normative conjunction），給「為什麼這些工程詞要被組合在一起」一個規範名稱。

這句話同時拒絕兩個誤讀。它拒絕「civic proof 是新密碼學原語」，因其工程內容已被 BBS+、CL、accountable group signatures 等既有原語提供；它也拒絕「civic proof 是新規格」，因它並非 W3C 或 ISO 或 IETF 任一規格家族的成員，而是對這些規格的規範約束。命名工作是「給組合條件一個指稱名」。

---

## 七、與「accountability without identification」的整合

本概念屬 19 篇博論研究 prompt 中的第二篇，與第一篇文章「accountability without identification」共享 *pseudonymous proof* 條件的詳細論證。第一篇文章證明了三件事。其一，在工程上，DAA（Direct Anonymous Attestation）<sup>29</sup>已部署於數億 TPM 設備但 *未* 啟用 opener，是值得觀察的 puzzle 而非已驗證的因果說明。其二，在規範上，accountable pseudonymity 要求 anonymity + unlinkability + accountability 三條件同時滿足，且 accountability 結構為 ex-post + threshold-gated 而非 ex-ante + continuous。其三，在政治經濟上，「為什麼工程上可行的 accountable opener 結構未被部署」是獨立的 governance 問題，回答它需要制度分析而非工程分析。

§ 5.1 矩陣中 pseudonymous proof 一行的條件配置直接繼承自第一篇的論證。Civic proof 規範上層概念為 pseudonymous proof 提供規範框架，第一篇文章為其提供工程與政治經濟的支撐論證；兩者構成博論前兩章的概念地基。pseudonymous proof 一型的存在使「需要橫向整合命名」這個論點成立。若僅有 legal、attribute、uniqueness 三型，verifiable credential 加 selective disclosure 已大致涵蓋。

DAA TPM 案例作為「工程上可行加規範上必要加部署上未發生」的對照觀察，標示 civic proof 涉及政治經濟與治理層的條件。引用時沿用第一篇的處理方式，把它寫為 puzzle 與觀察而非獨立支撐核心主張的因果證據。Brickell-Camenisch-Chen 2004 的 DAA 構造<sup>29</sup>在 ISO/IEC 20008-2 形式化、ISO/IEC 11889 series 整合到 TPM 規格，工程鏈條完整。但 *opener* 角色未被部署到生產 TPM 的因果解釋仍是研究問題，第一篇文章把它列為 puzzle 並交由後續 governance 研究分析。

Ch2 處理規範條件層，Ch1 處理工程可行性與部署政治經濟。Ch2 的學術角色是橋接，使後續章節（Ch3 數位結社、Ch5 政策溝通驗證、Ch11 wallet 反壟斷）可直接接續具體場域的分析，不必每次重新處理「為什麼這些工程詞要被組合在一起」的規範論證。

---

## 八、結語

### 8.1 學術定位的條件性結論

Civic proof 在 Cappelen 概念工程判準的三項（含蓋度、區辨力、可承繼性）通過，第四項（政策溝通）待 Ch5 case study 驗證。Ch2 的學術主張限縮為，civic proof 是 *合格的概念工程提案*，給「為什麼這些工程詞要被組合在一起」一個規範名稱。它不是新原語，也不是新規格——它是規範條件束（normative conjunction），是上層整合命名而非下層工程設計。

論證合成由四條軸支撐。§ 2 的既有概念盤點以歸納推理證明既有概念分屬不同層級且採用度有限；§ 3 的隱私哲學基礎以演繹推理推出 civic context 的規範條件不可從 commercial / government identity 推得；§ 4 的 Marshall 公民權三層以類比推理提供概念位置感而非獨立證據；§ 5 的需求型態矩陣以溯因推理把前三條合成為「最佳但非唯一」的命名提案。論證強度合成為中強，最強處在 § 2 的標準文獻盤點與 § 3.2 的 CI 推導；最弱處在 § 4 的類比非對稱性，已限縮為啟發式 framing。

把概念工程提案寫為條件性結論而非已驗證命題，這個寫法源於 Cappelen 判準對概念工程主張的內在要求。後續章節對 EUDI ARF 與台灣 DIW 兩個 ongoing 政策過程的觀察，將把第四項判準從「待驗證」推進到「驗證結果」，無論結果為肯定或否定，都對學術定位構成實質回饋。

### 8.2 待後續驗證的開放問題

下列問題留給後續章節與訪談研究。

第一，「政策溝通」判準的實證驗證。建議選 EUDI ARF v2.x implementing regulations 過程與台灣 DIW 後續 specs 兩個 ongoing 案例，觀察立法草案是否使用 civic proof 一詞、跨領域工作組是否以其為共同指稱、學術引用是否批判性繼承而非僅陳列。

第二，CI operationalization 到 wallet 規格的工程著力點。Benthall-Gürses-Nissenbaum 2017 之後的進展、W3C VC Working Group 在 v2.x 引入 Conformance Profile 的具體可能性，以及 Hyperledger AnonCreds、IBM Idemix 的 production-ready 路徑皆屬於這個議題。

第三，跨法域 wallet 失效與撤銷錯誤的救濟空白。Accountable pseudonymity 在 EU GDPR、台灣個資法、美國 First Amendment 案例法下的法律效力差異需要法律比較研究。

第四，PoP 派系比較研究。iris、social、vouching 三派的本體論假設與 civic proof 友善度差異，及 SBT 場域的實際部署、撤銷率、用戶感知資料補充。

第五，歷史對照。紙本時代「市民證明」（戶政謄本、出生證明、選民登記證）與數位 civic proof 的連續性研究，可避免把數位 civic proof 寫成全新發明，並協助識別哪些規範條件跨媒介一致。

第六，台灣本土脈絡。中文期刊對 contextual integrity 與 civic context 的學術討論幾乎不存在，目前僅能沿政策文件層接續，後續章節需補上本土憲政學者與公民科技社群（g0v Summit、TW DIW 政策團隊）的對話，並接入國發會數位身分證計畫 2018–2021 爭議與個資法修訂研究。

### 8.3 與後續章節的對接

底下的概念地基為後續章節提供規範框架。Article 03（digital-association-empirical-test）將以 § 5.1 四需求型態矩陣檢驗「數位結社失敗」假說，具體做法是把當代數位結社平台（Discord、Telegram、Signal、Mastodon、g0v Slack）的隱私規格與 pseudonymous proof 條件配置逐項比對，觀察規格與規範條件之間的差距是否系統性指向同一組工程缺位。Article 11（wallet-as-essential-facility）將以規範上層位置為 wallet 反壟斷論證提供規範框架，把「wallet 作為公民行動的必要設施」這個論點接到 civic proof 規範條件層的命名工作上。

Civic proof 作為規範條件束，學術價值在於提供一個讓工程社群、政策社群、規範哲學社群可同台對話的中介概念。一個成功的概念工程提案不在概念定義階段被宣稱為已驗證；它的驗證發生在它被反覆使用、被批判性繼承、被翻譯到不同語言與司法管轄區之後。Ch2 的工作是把這個提案以足夠嚴謹度標出，讓 Ch5 的案例觀察有具體對象可檢驗。

---

## 參考資料

1. Cappelen, H. (2018). *Fixing Language: An Essay on Conceptual Engineering*. Oxford University Press. 來源等級 A。
2. Chaum, D. (1985). "Security Without Identification: Transaction Systems to Make Big Brother Obsolete." *Communications of the ACM*, 28(10), 1030–1044. 來源等級 A。
3. Camenisch, J., & Lysyanskaya, A. (2001). "An Efficient System for Non-transferable Anonymous Credentials with Optional Anonymity Revocation." *EUROCRYPT 2001*, Springer LNCS 2045；同作者 (2002), "Dynamic Accumulators and Application to Efficient Revocation of Anonymous Credentials," *CRYPTO 2002*, Springer LNCS 2442. 來源等級 A。
4. ISO/IEC 18013-5 (2021). *Personal identification — ISO-compliant driving licence — Part 5: Mobile driving licence (mDL) application*. International Organization for Standardization. 來源等級 A。
5. W3C. (2025-05-15). *Verifiable Credentials Data Model 2.0* (W3C Recommendation). World Wide Web Consortium. 來源等級 A。
6. European Commission. *European Digital Identity Wallet Architecture and Reference Framework*, 2025-12 Cooperation Group rolling iteration（歷史快照 v1.4 / v1.5）. EUDI ARF. 來源等級 A。
7. Buterin, V., Ohlhaver, P., & Weyl, E. G. (2022). "Decentralized Society: Finding Web3's Soul." SSRN Working Paper 4105763；對應 ERC-5114 / 5192 / 5484 提案。來源等級 A（提案文本）/ B（採用率資料）。
8. Boneh, D., Boyen, X., & Shacham, H. (2004). "Short Group Signatures." *CRYPTO 2004*, Springer LNCS 3152, 41–55. 來源等級 A。
9. IETF. (2025-11). *SD-JWT-based Verifiable Credentials* (RFC 9901)；CFRG draft-irtf-cfrg-bbs-signatures；W3C VC Data Integrity BBS Cryptosuite v1.0 (2024). 來源等級 A。
10. Nissenbaum, H. (2010). *Privacy in Context: Technology, Policy, and the Integrity of Social Life*, ch. 7–8. Stanford University Press. 來源等級 A。
11. Nissenbaum, H. (2011). "A Contextual Approach to Privacy Online." *Daedalus*, 140(4), 32–48. 來源等級 A。
12. Mulligan, D. K., Koopman, C., & Doty, N. (2016). "Privacy is an essentially contested concept: a multi-dimensional analytic for mapping privacy." *Philosophical Transactions of the Royal Society A*, 374, 20160118. 來源等級 A。
13. Pasquale, F. (2015). *The Black Box Society: The Secret Algorithms That Control Money and Information*. Harvard University Press. 來源等級 A。
14. Cohen, J. E. (2012). *Configuring the Networked Self: Law, Code, and the Play of Everyday Practice*, esp. ch. 5（playspace）與 ch. 7（semantic discontinuity 與 networked self configuration），亦見 Part II 整體脈絡. Yale University Press. 來源等級 A。
15. Cohen, J. E. (2019). *Between Truth and Power: The Legal Constructions of Informational Capitalism*, ch. 2. Oxford University Press. 來源等級 A。
16. Hildebrandt, M. (2015). *Smart Technologies and the End(s) of Law: Novel Entanglements of Law and Technology*, ch. 8–10. Edward Elgar. 來源等級 A。
17. Hildebrandt, M. (2019). "Privacy as Protection of the Incomputable Self: From Agnostic to Agonistic Machine Learning." *Theoretical Inquiries in Law*, 20(1), 83–121. 來源等級 A。
18. Marshall, T. H. (1950). *Citizenship and Social Class and Other Essays*. Cambridge University Press. 來源等級 A。
19. European Convention on Human Rights, Article 11（結社自由）；International Covenant on Civil and Political Rights, Article 22（結社自由）. 來源等級 A（國際公約文本）。
20. Joppke, C. (2010). *Citizenship and Immigration*. Polity Press. 來源等級 A。
21. Sen, A. (1999). *Development as Freedom*. Knopf / Oxford University Press；同作者 (2009), *The Idea of Justice*, Harvard University Press. 來源等級 A。
22. Anderson, E. (1999). "What is the Point of Equality?" *Ethics*, 109(2), 287–337；同作者 (2017), *Private Government: How Employers Rule Our Lives*, Princeton University Press. 來源等級 A。
23. NIST. (2024). *Digital Identity Guidelines* (Special Publication 800-63-4); EU. *eIDAS Regulation* (Regulation (EU) No 910/2014; 修正版 Regulation (EU) 2024/1183 即 eIDAS 2.0)；ISO/IEC 29115 entity authentication assurance framework. 來源等級 A。
24. Buterin, V. (2023-07-24). "What do I think about biometric proof of personhood?" *vitalik.eth.limo*；Siddarth, D., et al. (2020), "Who Watches the Watchmen? A Review of Subjective Approaches for Sybil-Resistance in Proof of Personhood Protocols." 來源等級 A（學術論文）/ C（個人部落格）。
25. Lipton, P. (2004). *Inference to the Best Explanation* (2nd ed.). Routledge. 來源等級 A。
26. Burgess, A., & Plunkett, D. (2013). "Conceptual Ethics I & II." *Philosophy Compass*, 8(12), 1091–1110. 來源等級 A。
27. Pfitzmann, A., & Hansen, M. (2010). *A Terminology for Talking About Privacy by Data Minimization* (v0.34). 來源等級 A（社群維護術語表）。
28. Solove, D. J. (2008). *Understanding Privacy*. Harvard University Press. 來源等級 A。
29. Brickell, E., Camenisch, J., & Chen, L. (2004). "Direct Anonymous Attestation." *CCS 2004*, ACM；ISO/IEC 20008-2 (Anonymous digital signatures); ISO/IEC 11889 (TPM specification). 來源等級 A。
30. Mill, J. S. (1859). *On Liberty*, ch. 3. London: John W. Parker and Son. 來源等級 A（古典文本）。
31. Tocqueville, A. de (1840). *Democracy in America*, vol. 2. Paris: Librairie de Charles Gosselin. 來源等級 A（古典文本）。
32. Pettit, P. (1997). *Republicanism: A Theory of Freedom and Government*, ch. 6. Oxford University Press. 來源等級 A。
