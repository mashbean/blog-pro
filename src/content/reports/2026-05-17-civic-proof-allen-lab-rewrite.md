---
title: "從直覺到形式化：以 PRF 規範下界重訪 2026-04-17 Allen Lab Fellow Meeting 簡報（civic-proof 系列起源回望）"
description: "本文是 2026-04-17 我在 Harvard Kennedy School Ash Center 的 Allen Lab Fellow Meeting 所做簡報「從國家發行憑證到公民證明自己——數位身分如何轉化數位公民建設」的回望式重寫。原稿提出「公民證明」（civic proof）作為數位公民建設（DCI）核心、把數位身分拆為「證件發行的正當性 + 交換架構」兩層、列出四種公民證明需求型態（法律身分 / 屬性證明 / 唯一性證明 / 假名式參與）與四個規範條件（匿名 / 不可連結 / 可驗證 / 可問責）、提出『可問責並不需要以實名為前提』之核心命題、以台灣 MOICA + TW DIW 為主案例 + PTT/g0v Summit 兩個小案例、把年齡驗證視為國家數位身分政策壓力測試、討論公民與次國家實驗（Vocdoni / Rarimo / QuarkID）、處理公共區塊鏈定位、收於五條政策議程（隱私底線 / 開放皮夾 / 採購沙盒 / 試驗場網絡 / AI 代理授權）。原稿之後一個月內，我把這些直覺寫成 civic-proof 系列 23 篇主文 + 4 retrofits + article 24 Taiwan deep-dive + article 25 capstone overview，並在第 19 篇（A2）正面承擔了公共領域規範下界（PRF ≜ ⟨plurality, validity, contestation, agonism⟩ 四家合取）作為系列規範根基，把「公民證明」精細化為 PRF 之 operational concept；同時建立五項方法論工具（likelihood-by-mechanism / working-strengthened thesis / universal-conditional / anti-mythologization clause / 設計直觀-規範主張分離）。本文以原稿之十一個段落為骨架，每段補上「一個月後的形式化升級」inline 註記與 forward-link 至系列對應篇章，並在文末新增一段「不變與改變」之回望段——不變的是核心問題（如何讓公民在數位空間中低門檻、低暴露、可救濟地行動），改變的是論證的嚴謹度、形式化程度、誠實邊界的明示。本文承擔 capstone 已建立的對外引用紀律：working thesis 語式 / likelihood inline caveat / universal-conditional 區分 / anti-mythologization clause / 設計直觀-規範主張分離。本文不是 civic-proof 系列之 article 26（系列已於 article 25 capstone 收束），而是系列起源之回望文獻，連結原稿（mashbean.net/blog/2026/0417-1trens/）與形式化後的系列。"
pubDate: 2026-05-17
tags: ["civic-proof", "civic-proof-series-origin", "Allen-Lab-Fellow-Meeting-rewrite", "Harvard-Kennedy-School-Ash-Center", "digital-civic-infrastructure", "DCI", "digital-public-infrastructure", "DPI", "PRF-normative-floor", "plurality-validity-contestation-agonism", "civic-proof-operational-concept", "issuance-legitimacy", "exchange-architecture", "two-layer-model", "legal-identity", "attribute-proof", "uniqueness-proof", "pseudonymous-participation", "anonymity-unlinkability-verifiability-accountability", "accountability-without-real-name", "TW-DIW", "MOICA", "moda", "TW-FidO", "eIDAS-2.0", "EUDI-Wallet", "BankID-Sweden", "MOSIP", "Aadhaar", "Bhutan-NDI", "California-AB1043", "California-OpenCred", "Utah-digital-identity", "age-verification", "ISO-IEC-27566-1", "Free-Speech-Coalition-v-Paxton", "EFF", "ACLU", "Access-Now", "Vocdoni", "Rarimo-Freedom-Tool", "QuarkID", "zkPassport", "PTT-ZK-blue-check", "g0v-Summit-2026", "public-blockchain-trust-list", "trust-list-anchoring", "federated-trust-list-alliance", "DNS-vs-identity-trust-roots", "no-phone-home", "selective-disclosure", "minimal-proof", "F1-agent-delegation-limits", "F2-civic-action-receipt-schema", "F3-supporter-UI-three-layer", "A2-public-realm-political-philosophy", "A1-accountability-without-identification", "A15-civic-proof-inclusion-rights", "A14-cross-jurisdictional-redress-gap", "article-24-Taiwan-deep-dive", "article-25-capstone-overview", "civilian-backup-have-readiness-litepaper", "design-intuition-vs-normative-claim-separation", "anti-mythologization-clause", "universal-conditional-distinction", "working-strengthened-thesis-discipline", "likelihood-by-mechanism-four-level", "Tomasev-AI-delegation-five-elements", "Mueller-Ruling-the-Root", "Marshall-citizenship-three-layers", "CRPD-Article-29", "structural-slippage-prevention", "MVSR-three-layer", "Danielle-Allen", "DPI-three-fold-data-payment-identity", "Jeremy-McKey", "OpenID4VC-OpenID4VP", "W3C-VC-2.0", "W3C-DID", "Digital-Credentials-API", "NIST-SP-800-63-4", "client-side-proving", "zkID", "Ethereum-Foundation-PSE", "civic-proof-series-origin-retrospective"]
category: "數位身分與民主理論"
aiModel: "Claude Opus 4.7"
aiPrompt: "重寫 2026-04-17 Allen Lab Fellow Meeting 簡報「從國家發行憑證到公民證明自己」一文。整合過去一個月完成的 civic-proof 系列 23 篇主文 + R1-R4 retrofits + article 24 Taiwan deep-dive + article 25 capstone overview 之 PRF 規範下界形式化框架、五條 contribution claims、五項方法論工具。保留原文 mashbean 個人語氣與十一個段落骨架；每段補上一個月後的形式化升級 inline 註記與 forward-link；文末加一段不變與改變的回望段。"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-17-civic-proof-allen-lab-rewrite"
aiGeneratedDate: 2026-05-17
humanReviewed: false
lang: "zh-TW"
series: "civic-proof"
slug: "2026-05-17-civic-proof-allen-lab-rewrite"
---

## §0 寫作緣起：一個月後的回頭

2026 年 4 月 17 日，我在 Harvard Kennedy School Ash Center 的 Allen Lab Fellow Meeting，做了一個三十分鐘的簡報，標題叫做〈[從國家發行憑證到公民證明自己——數位身分如何轉化數位公民建設](https://mashbean.net/blog/2026/0417-1trens/)〉。我那時候做了一件事，就是把過去一年多在台灣數位發展部推動數位皮夾的政策經驗，加上離開政府後跟離散社群、城市級民主實驗、ICANN 研究員計畫的種種觀察，丟在 Allen Lab 的會議桌上，試著拿出一個叫「公民證明」（civic proof）的詞彙，看看能不能解釋我為什麼覺得「把證件搬到手機上」是無聊的，「讓公民在數位空間中能低門檻、低暴露、可救濟地行動」才是有趣的。

那篇文章的形式我自己很滿意。它有兩層模型、有四種需求型態、有四個規範條件、有各國比較表、有台灣 MOICA 跟 TW DIW 的對照、有 PTT 跟 g0v Summit 兩個案例、有年齡驗證做為國家數位身分政策壓力測試、有公民與次國家實驗、有公共區塊鏈的定位、有五條政策議程、有結語。把該講的都講到了，把該舉的例子都舉到了，把該留給讀者的問題也留下了。

然後我就回到台灣，過了一個月。這一個月我寫了 23 篇 civic-proof 系列主文 + 4 個 retrofits + 1 篇 Taiwan deep-dive + 1 篇 capstone overview，總共加起來 29 個承擔節點，把當初在 Allen Lab 講的東西一塊一塊拆開重做。今天回頭看 4 月 17 日的那篇文章，我有一個很怪的感覺——那篇文章每一段我都還同意，但每一段背後該說的話，我那時候只說了三分之一。剩下三分之二，是這一個月撈出來的。

而最讓我覺得有趣的是，這一個月真正改變了我對「公民證明」這個詞的理解。當時我把它當成一個直覺、一個工程目標、一個能跟政策圈溝通的詞彙。我那時候不知道，這個直覺背後其實已經偷偷預設了 Arendt 的 plurality、Habermas 的 Geltungsansprüche、Pettit 的 contestation、Mouffe 的 agonism 四家政治哲學作為它的規範根基。我也不知道，「可問責並不需要以實名為前提」這句話之所以站得住腳，是因為它在 Pettit 的 republican contestability 與 Bovens accountability 二元結構底下，剛好踩在一個密碼學能承載的位置。我更不知道，當我在 Allen Lab 提出「四種需求型態必須同時成立、不能互相替代」的時候，這其實是一個合取下界（conjunctive floor）的雛形，後來會被我寫成五條形式定理。

一個月後重讀，整篇文章長得像一個還沒長毛的小動物——骨架都對，但毛還沒長出來。所以這篇重寫，不是要替換原稿（原稿值得保留作為起源文本），而是把這一個月長出來的毛，補回每一段該長毛的地方。

我把這篇重寫稱為「**起源回望**」（origin retrospective）——它不在系列正式編號內（系列已經在 article 25 capstone 收束於 25），也不是 article 26（系列已經收口）。它是 article 0 的位置感，也就是系列開始之前的那一篇，現在用系列之後的形式化重新寫一次。tag 仍掛 `civic-proof`，但 frontmatter 不設 `seriesOrder`，保留「系列起源回望文獻」之 semantic。

---

## §1 重新接入：為什麼 DCI 一定要談數位身分

上一次 Allen Lab 的會議，Jeremy McKey 從支付（Payment）的角度切進數位公共基礎設施（DPI）。我那時候想接著補上身分（Identity）這一塊，沿用常見的 DPI 三分法——資料（Data）/ 支付（Payment）/ 身分（Identity）——把最後一塊拼圖放上桌。

這個切點原稿其實寫得不錯，我這次不打算重寫。我只想補一段觀察：DCI 框架把連結（Connect）、學習（Learn）、行動（Act）視為彼此連動的公民參與入口；我那時候講了「身分在三者裡最強烈地介入行動」，這句話是對的，但我那時候沒有把「為什麼是行動，不是連結或學習」的形式根基說清楚。

一個月後我有了答案。這個答案叫做 **PRF 規範下界**——當系統開始管制行動（gate action），它就在管制「公民能不能進入公共領域」這件事。而公共領域之所以是公共領域，就是因為它同時承擔了四件事：plurality（多重身分共在）、validity（公共理性根據）、contestation（可被異議與救濟）、agonism（正當對手政治表達權）。連結階段沒有這四件事的全部壓力；學習階段也沒有；只有當系統開始管制行動，才同時把這四件事拉到桌面上。所以行動之所以是身分介入最強的地方，不是因為「行動比較重要」，而是因為**行動是公共領域 PRF 四分量同時被啟動的瞬間**。

forward-link：PRF 的形式化見 [civic-proof 系列第 19 篇 A2](https://blog.bonds.tw/reports/2026-05-12-public-realm-political-philosophy/)；行動與管制之關係見 A2 §3。

---

## §2 兩層模型的形式化升級：證件發行的正當性 + 交換架構 → PRF + civic-proof operational concept

原稿把數位身分拆成「上層：證件發行的正當性」與「下層：交換架構」兩層。這個拆分當時是出於工程直覺——前者處理法律、主權、撤銷權；後者處理憑證、皮夾、瀏覽器、信任清單。把它們拆開，討論會清楚很多。

一個月後我發現，這個兩層拆分其實對應到一個更深的兩層——**規範下界**與 **operational concept**。

原稿的上層（證件發行的正當性）→ 規範下界 PRF。原稿的下層（交換架構）→ civic-proof 作為 operational concept。前者承擔「為什麼這個 wallet / agent / receipt / UX 設計是合法的」之規範根基；後者承擔「規範根基如何被具體工程承擔」之轉譯層。

這個對位讓很多原本講不清楚的事情有了 vocabulary。

第一，原稿說「四個規範條件（匿名 / 不可連結 / 可驗證 / 可問責）必須同時成立、不能互相替代」。一個月後我把這個直覺寫成形式定理 T_PRF1-T_PRF4——PRF 四分量各自必要，難以由其他三分量完全補位。「同時成立」就是合取下界（conjunctive floor）；「不能互相替代」就是不可化約性。

第二，原稿說「對任何 d 設計，若違反 PRF 任一分量則 LegitimacyDegrade(d) ≥ θ_dem ≈ 0.5」。這是我在 A2 寫的條件性函數——θ_dem 為**分析性建議數**（非實證測量值），需 ≥ 5 案例迴歸校準。注意這裡很重要——這個閾值不是我憑空捏的具體數字，是分析性閾值身分。任何把 0.5 讀成「實證機率」的引用，我預先撤回背書。

第三，PRF 是**下界**（floor），不是**唯一標準**（unique standard）。這個區分一個月前我也沒講清楚。Rawls justice / Sen capability / Nussbaum dignity / Honneth recognition 可以作 PRF 的 ceiling 或 boundary，不取代下界本身。原稿說「公民證明能撐起 DCI 行動層」這件事，現在更精確的講法是「civic-proof 提供 PRF 之 operational 承擔，但這只是合法性下界，不是合法性最高水準」。

forward-link：T_PRF1-T_PRF5 五條形式定理見 A2 §3.4；ceiling 與 boundary 之區分見 [article 25 capstone §2.5](https://blog.bonds.tw/reports/2026-05-16-civic-proof-series-capstone/)。

---

## §3 四種需求型態的工程化：法律身分 / 屬性證明 / 唯一性證明 / 假名式參與

原稿提出四種公民證明需求型態（legal identity / attribute proof / uniqueness proof / pseudonymous participation），並列了一個對照表。這個拆分本身我很滿意，一個月後我沒有要修正它。但這個表底下還有一層東西，當時我沒寫——這四種需求對應到 civic-proof 系列的工程承擔結構。

| 需求型態 | 系列工程承擔 | 核心 mechanism |
|---|---|---|
| **法律身分** | F1 五件全核心承擔 | Tomasev 委任五件 × civic-proof 三件式 5×3 矩陣，含 Z₃-intrinsic 不可達 cell |
| **屬性證明** | F2 + F3 雙軸承擔 | F2 23 leaf schema（V_receipt C1-C6 + T1-T4 + T2'）+ F3 supporter UI 三層分離（V_ux C7-C10）|
| **唯一性證明** | C2 Sybil 不可能三角 | uniqueness vs plurality 之工程取捨；不存在三邊同時最強之設計 |
| **假名式參與** | A1 雙錨點承擔 | Bovens accountability 二元結構（answerability + enforceability）+ Pettit republican contestability，承擔「可問責不以實名為前提」 |

原稿提的「**可問責並不需要以實名為前提**」，一個月後我把它放在 A1 article 1，作為系列 spine 之第一篇命題。那篇文章引了 Talley v. California (1960)、NAACP v. Alabama (1958)、McIntyre v. Ohio Elections Commission (1995) 三案，承擔「匿名政治言論之核心保護」與「事後性可問責」之相容。這個命題不是我發明的——它有美國憲法判決史的法源、有 Bovens 2007 的政治理論承擔、有 Pettit 2012 的 republican contestability 承擔。我那時候在 Allen Lab 講「可問責並不需要以實名為前提」這句話，其實偷偷站在這三家肩膀上。

forward-link：A1 雙錨點 → [civic-proof 系列第 1 篇](https://blog.bonds.tw/reports/2026-05-02-accountability-without-identification/)；F1 委任極限 → [系列第 16 篇](https://blog.bonds.tw/reports/2026-05-10-civic-ai-agent-delegation-limits/)；F2 receipt schema → [系列第 17 篇](https://blog.bonds.tw/reports/2026-05-11-civic-receipts-provenance/)；F3 supporter UI → [系列第 18 篇](https://blog.bonds.tw/reports/2026-05-11-selective-disclosure-ux-failure/)。

---

## §4 「可問責並不需要以實名為前提」的形式化

這句話原稿有一段，我特別想再展開一次。當時我說：「在我參與新型態數位身分的各種專案中，我發現一個違反直覺、但是在密碼學（或政治哲學？）上自洽的狀態是——可問責並不需要以實名為前提。」

問號是真的，那時候我自己也不確定這句話到底是密碼學的還是政治哲學的。

一個月後我可以給確切答案——這句話**同時**是密碼學的、政治哲學的、法律的。

密碼學的部分：F2 23 leaf schema 的 V_receipt C1-C6 條件加上 SA1-SA4 四原語，可以承擔「事後可被稽核的證據鏈」而不需要「事前完整身分揭露」。這是密碼學的事實。

政治哲學的部分：Bovens 2007 accountability 二元結構（answerability + enforceability）+ Pettit republican contestability，承擔「能為自己行為負責」與「能被外部質詢」這兩件事，跟「揭露真名」是邏輯獨立的。實名是其中一條可能的 enforceability 路徑，但不是唯一的。這是政治哲學的事實。

法律的部分：Talley v. California (1960) 美國最高法院認可匿名印刷品的言論自由保護；NAACP v. Alabama (1958) 拒絕強制揭露會員名單；McIntyre v. Ohio Elections Commission (1995) 認可匿名政治言論。這是憲法判決史的事實。

三條獨立的事實線匯流到同一個命題上——「可問責不以實名為前提」不是我的發明，是我把三條既有承擔線整理出來。原稿那時候我說「違反直覺」，是因為我那時候沒看到匯流；一個月後重看，它不違反直覺，它是三條獨立譜系都指向的同一個結論。

這也是為什麼我會把 A1 放在系列第 1 篇——它是整個 civic-proof 概念的入口，沒有這個入口，後面 24 篇都不成立。

---

## §5 各國比較的方法論升級：universal-conditional 區分

原稿做了一個各國對照表（台灣 / 歐盟 / 瑞典 / 美國 / MOSIP / Aadhaar / 不丹）。這個表當時是出於 Allen Lab 簡報的呈現需求，把「上層發證正當性」與「下層交換架構」的比較放在一起。它有用，但它做了一件事我那時候沒意識到——它偷偷預設了「跨國比較有共同基準」。

一個月後我發現這個預設站不住腳。台灣的政治脈絡跟瑞典的政治脈絡不一樣，不只是「採用什麼系統」的差別，是 PRF 四分量在兩地的承擔結構根本不同。台灣有強公民社會 + 高頻選舉 + 跨海峽認知作戰；瑞典有商業壟斷 + 央行警示。這兩個情境拿來比 PRF 承擔，本來就不能用同一把尺。

所以一個月後我做了一件事，叫做 **universal-conditional 區分**。PRF 規範下界本身有兩層——universal 部分（四分量結構必要性，不隨案例變動）+ conditional 部分（機制承擔、分量耦合度、jurisdictional scope，隨案例變動）。

舉個例子。

- universal：plurality（multiple *who* 共在）為 PRF 必要分量，這個結構命題不隨案例變動。
- conditional：plurality 在台灣由街頭、議會、線上、公投、社運五類承擔者承擔；在愛沙尼亞可能由完全不同的 institutional 配置承擔。

跨案例比較必須先做這個分層，否則就是把瑞典 BankID 經驗硬套到台灣 TW DIW、或把不丹 NDI 經驗硬套到歐盟 EUDI。每個案例的 conditional 部分都不一樣，但 universal 部分共享。

原稿那個比較表，現在的我會在表底下加一段註：「本表為描述性比較，不主張 PRF 在各案例下之承擔結構共軌；跨案例 LegitimacyDegrade 之比較須先做 conditional 層之獨立論證。」這句註不只是 caveat，是方法論承擔。

forward-link：universal-conditional 區分 → [article 24 §8.2](https://blog.bonds.tw/reports/2026-05-16-taiwan-civic-proof-deep-dive/) + capstone §2.4；FTLA 四層治理框架 → [系列第 8 篇 A8/D3](https://blog.bonds.tw/reports/2026-05-06-dns-vs-identity-trust-roots/)；北歐 BankID 三條件溯因 → [系列第 9 篇 D1](https://blog.bonds.tw/reports/2026-05-07-bankid-nordic-monopoly-democracy/)。

---

## §6 台灣案例的 case study 升級：制度史 + 三重壓力 + 民間備援

原稿用了一張表比較 MOICA 和 TW DIW。這張表我很滿意，但它把「台灣」當成一個靜態快照（2026 年 4 月）。一個月後我把它寫成 14,000 字的 [Taiwan deep-dive (article 24)](https://blog.bonds.tw/reports/2026-05-16-taiwan-civic-proof-deep-dive/)，補上三個原稿沒有的東西。

**第一是制度史四階段**。台灣的數位身分制度史不是 2022 年數位部成立才開始的，是從 1991 年第二屆立委選舉、1996 年首次總統直選之民主轉型，2000 年首次政黨輪替之程序穩定化，2017-2021 eID 撤案之公民社會 contestation 成功案例（這件事我原稿有提，但沒拆開講為什麼撤案是程序性勝利而非規範性鎖死），到 2022 年 moda 成立、2024-2026 TW DIW 信任清單上公共鏈。這四階段對 PRF 四分量之系統性涵養與壓力分布不均勻——validity 與 contestation 強，plurality 中等，accountability 中弱（個資會 PIPC 籌備期 + 跨部會職權仍仰賴協議）。

**第二是三重壓力 case-tracing**。我以前談台灣只談「政府推 → 民間反對」這條線，沒有談 PRF 在台灣作為**民主前線**之具體壓力結構。article 24 §6 把三重壓力拆成 α（認知作戰滲透下 issuer trust 可塑性）、β（海纜中斷下 offline fallback；2023-02 馬祖海纜中斷 35 天為直接歷史錨點）、γ（灰色入侵下 institutional revocation latency），做了一個 12 cell 的 likelihood-by-mechanism 評估表（α/β/γ × PRF 四分量 = 12 cell）。三重壓力之共同主要受害分量是 **contestation**。

注意這個 likelihood 評估的紀律——四級（low / medium / medium-high / high）為**設計直觀排序語式**，不對應任何機率分布。任何把 medium-high 讀成「0.6-0.8」之引用，我預先撤回。

**第三是民間備援 vs 政府單一棧**。原稿那時候沒處理民間備援這個 layer。一個月後黃豆泥（也就是我）跟 Yvonne Cho、Frank Hu、Denken Chen 發布了「有備而來」民間倡議文本，提出反脆弱、備援性、信任輪替三設計原則。在 article 24 §5 我做了一個很重要的方法論動作——**設計直觀 vs 規範主張分離原則**。我作為共同作者，當然知道這個 litepaper 的所有內容；但我作為系列作者，必須處理一個 awkward 的問題——民間倡議文本提出的設計直觀，能不能直接搬用為系列的 PRF 規範主張？

答案是不能。所以 article 24 §5.5 寫了三項分離理由 + 一項操作後果：litepaper 提出的「interoperable yet unlinkable / antifragile / trust rotation / preparedness」四項設計直觀，作為**描述對象**被 article 24 引述；但其 PRF 規範對映由 article 24 獨立承擔，不依賴 litepaper 自身規範語言。這個分離原則一個月前的我絕對寫不出來，因為我那時候還沒意識到「灰色文獻引用紀律」會是規範政治理論 × 工程實作交界的具體方法論需求。

另一個補的東西是 **anti-mythologization clause**。台灣案例最容易被外部讀者組裝成「Taiwan romantic exceptionalism」敘事——g0v / Audrey Tang / 公民科技社群 / 民間備援的韌性敘事。article 24 §7.5 明示拒絕這種外部引用為學術背書：本系列不主張台灣為民主數位治理之全球範本；不主張 g0v 可獨立提供 PRF 四分量完整承擔；不主張台灣經驗可直接外推至任何其他民主政體。這個 clause 一個月前的我也寫不出來，因為我那時候還沒意識到「敘事被劫持」是案例研究的具體風險。

forward-link：制度史四階段 → article 24 §3；三重壓力 12 cell 矩陣 → article 24 §6.5；設計直觀分離原則 → article 24 §5.5；anti-mythologization clause → article 24 §7.5。

---

## §7 PTT 與 g0v Summit 案例升級

原稿提了兩個小案例，PTT 透過自然人憑證做 ZK 藍勾勾、g0v Summit 透過數位皮夾發行入場券。這兩個案例一個月後我沒有要替換它們，因為它們是真的工程實作（PTT 還在跑、g0v Summit 2026 也辦了），不是 toy example。

但我要補一個觀察。

PTT 案例的有趣之處不在「ZK 藍勾勾這個產品」，而在它示範了**「國家根憑證 + 假名式參與」之共存可能**。PTT 不需要知道用戶是誰，只需要知道用戶是「持有有效自然人憑證的某個人」（屬性證明 + 唯一性證明），而且這個人在做某些事的時候可以被事後稽核（可問責）。這個案例剛好對應到我們 §3 表格裡「屬性證明 + 唯一性證明 + 可問責不以實名為前提」三件的合取。

g0v Summit 案例則示範了**「持有者為中心生態」之非政府承擔可能**。g0v 志工團隊作為非政府第三方擔任發證者與驗證者，這證明了 TW DIW 的 holder-centric 架構不只能由政府單獨操作。這個案例對應到 D1 北歐 BankID 之反面教訓——BankID 是商業壟斷的「holder-centric」（單一商業 operator 主導），g0v Summit 是公民社群的「holder-centric」（多元發證者 + 非政府驗證者）。同一個技術架構在不同治理結構下會走向完全不同的政治結果。

這兩個案例之所以在我四月的 Allen Lab 簡報還站得住，是因為它們示範了「最小證明」與「公民控制」可以同時實現。一個月後我看到的是更多——它們也示範了 PRF 四分量之**具體 institutional 承擔形態**：PTT 案例承擔 contestation（網軍對抗，公民社群之 active stance）+ uniqueness（一人一帳）+ unlinkability（不揭露真實身分）；g0v Summit 案例承擔 plurality（非政府發證者）+ agonism（政府/民間/商業三方共構 governance 之 institutional 槽位擴張）。

---

## §8 年齡驗證作為壓力測試：結構性滑坡與三層權利語言

年齡驗證這段原稿寫得很扎實，我那時候已經把英國 / 澳洲 / 歐盟 / 美國四個法域的動向都盤好了，把帕克斯頓案（Free Speech Coalition v. Paxton）、加州 AB1043、伊利諾州法案都列出來了，也提了**結構性滑坡**這個概念。

一個月後我把結構性滑坡寫成系列第 13 篇 E3，正式提出 **MVSR 三層**（minimum viable scope reduction）+ sunset / scope-bound / split-key / opt-out 四項工程預防機制。MVSR 三層的核心想法是——任何年齡驗證設施都應該預設「最小可行範圍 + 退役條款 + 範圍邊界 + 私鑰分割 + opt-out 路徑」五件同時成立。E3 §5.5 列了具體 MVSR 組合，可以直接拿去做政策建議。

原稿那段「結構性滑坡」當時是直覺；一個月後它有了具體工程預防機制，可以拿去採購招標書、可以拿去立法說帖、可以拿去民間倡議檢核表。

另一個補的東西是 **inclusion rights 三層權利語言**——A15（系列第 15 篇）把 Marshall 1950 公民身分三層擴展為「Level 1 access interest（前法律利益）/ Level 2 institutional entitlement（國內制度義務）/ Level 3 treaty-level human right（條約層人權）」之**法源層級**分類。為什麼這個分類對年齡驗證重要？因為當你說「無證件 / 無銀行帳戶者被排除」是年齡驗證的權利風險，這句話的法律強度在不同法域不一樣。在歐盟，CRPD Art 29 + GDPR Art 5 比例性原則可能讓你達到 Level 3；在美國某些州，可能只達到 Level 2（州法位階）；在某些低度開發民主政體，可能只達到 Level 1（前法律利益）。同樣是「弱勢被排除」這個現象，在不同法域可主張的權利強度差三個 magnitude。

原稿那時候我說「無證件 / 無銀行帳戶者被排除」是隱憂；一個月後我可以說「這個隱憂的法律可主張性視法域而定，台灣案例下大致落在 Level 2（個資保護委員會籌備期）邊緣」。

forward-link：MVSR 三層 + 結構性滑坡預防 → [系列第 13 篇 E3](https://blog.bonds.tw/reports/2026-05-09-structural-slippage-prevention/)；三層權利語言 → [系列第 15 篇 A15](https://blog.bonds.tw/reports/2026-05-10-civic-proof-inclusion-rights/)；R2 age verification retrofit → [original report](https://pro.mashbean.net/reports/2026-04-16-age-verification-digital-rights/)。

---

## §9 從完整身分識別走向最小證明：F1 + F2 + F3 三層工程承擔

原稿給了一個對照表（完整身分識別 vs 最小證明）+ 一個決策樹（什麼時候需要皮夾）。這個對照與決策樹一個月後我沒有要替換，因為它仍然是政策溝通的好工具。但我要補一層——**最小證明的具體工程承擔是什麼**？

答案是 F1 + F2 + F3 三層。

**F1 layer**：當「最小證明」需要委任給 AI agent 執行時（例如 LLM-agent 幫你出示某個屬性證明），F1 §4 三進路合取覆蓋（Arendt + Habermas + Pettit；A2 §8 提升為四家）給出哪些 cell 是 Z₃-intrinsic 不可達。具體說，RT-ℬ ✗（first-personal mens rea 失能）+ AA-ℬ ✗（active stance bearer 與 legitimate adversary 失能）這兩個 cell，**不能**被密碼學承擔——它們是結構不可委任區。任何 AI agent 主張「我可以幫你完整承擔民主行動」之 product claim，先檢查它有沒有踩到這兩個 cell。

**F2 layer**：F2 §3.1 給了 23 leaf schema，作為 civic-action-receipt 的具體欄位群。每個 leaf field 對應 V_receipt C1-C6 條件中的一條。重要的是 schema 本身**不固定 issuer**——它是 holder-centric 的，所以可以容納政府發證、商業發證、社群發證、自發證多種來源。台灣 TW DIW 的 23 leaf 對應，跟歐盟 EUDI wallet 的 23 leaf 對應不一樣，跟不丹 NDI 的 23 leaf 對應也不一樣，但 schema 結構共享。

**F3 layer**：F3 §10 給了 V_ux C7-C10 四條 UX 條件 + supporter UI 三層分離。「協助理解 / 操作介面 / 決定承擔」三層必須分離承擔，不能合而為一。為什麼？因為 CRPD Art 29 之 supported decision-making 要求「協助者 ≠ 決定者」之嚴格區分；如果 supporter UI 把這三層揉成一層，協助就變成代行，supported 就變成 substituted，違反公約。

原稿說「皮夾承擔呈現、同意、憑證管理、組合邏輯」，這句話對；一個月後我可以給具體形式——「呈現」對應 F2 出示子句、「同意」對應 F3 操作介面層、「憑證管理」對應 F2 14 欄位群、「組合邏輯」對應 F1 5×3 矩陣。

forward-link：F1 5×3 矩陣 → 系列第 16 篇；F2 23 leaf schema → 系列第 17 篇；F3 supporter UI 三層分離 → 系列第 18 篇。

---

## §10 公民與次國家實驗 + 設計直觀分離原則

Vocdoni / Rarimo / QuarkID 三個案例原稿提了，作為「公民與次國家實驗」的訊號。我那時候已經有節制地說「比較適合作為需求證據，不適合作為完整替代證據」，這個 caveat 一個月後我認為仍然成立。

但我要把這個 caveat 升級為一個**方法論工具**——這就是我在 article 24 §5.5 寫的「設計直觀 vs 規範主張分離原則」之普遍化。

具體說，當你引用 Vocdoni / Rarimo / QuarkID 這類**speculative civilian implementation document**或公民實驗時，必須區分：

- **設計直觀**（design intuition）：描述對象提出的工程設計概念，可以引述、可以分析
- **規範主張**（normative claim）：本文獨立承擔的 PRF 規範對映，不依賴描述對象自身的規範語言

簡單講——Vocdoni 可以說「我們的投票工具是民主的」，這是他們的規範主張，是他們作者立場；本文可以引述「Vocdoni 提出之設計直觀 X」，但本文對 X 在 PRF 框架下對映 Y 之分析，必須由本文獨立論證，不能直接搬 Vocdoni 自己的規範語言。

這個分離原則不是要打 Vocdoni 臉，也不是說 Vocdoni 的規範主張不對。是要避免**規範語言搬用之偷渡**——把民間倡議文本的規範倡議偷渡為學術規範承擔。Phase 2 audit 在系列 63 條 overclaim entries 中，有一類就是「倡議文件當實證」之錯誤；這個分離原則是預防這類錯誤的具體紀律。

對 Vocdoni / Rarimo / QuarkID 之引用，原稿那時候做得對；一個月後我會更明確地用「該專案提出之設計直觀」之語式引述。

forward-link：設計直觀分離原則 → article 24 §5.5 + capstone §5.5；63 條 overclaim entries → `docs/handoff/artifacts/overclaim-batch-{1..5}.md`。

---

## §11 公共區塊鏈的定位：不丹 NDI 與台灣 TW DIW 之最新進展

原稿這段我寫得很節制，提了公共區塊鏈最適合的位置是「信任層 / 狀態錨定 / 跨組織共見 / 可稽核的狀態發布」，不是把個資上鏈。這個立場一個月後我仍然完全同意，沒有要修正。

但我要補三個一個月內發生的事實點。

**第一**：不丹國家數位身分 NDI 已於 2025-10-13 遷至 Ethereum 主網（per 我的內部 MEMORY 條目）。不是 L2，不是測試網，是主網。這是目前公共區塊鏈作為國家級數位身分基礎設施之最完整部署案例。

**第二**：台灣數位憑證皮夾 TW DIW 的信任清單也已上公共鏈（per moda 公開資料 + iThome 報導 + 區塊勢 podcast）。具體鏈別、合約位址、DID method 截至 2026-05 在 wallet.gov.tw 開發者頁面尚未對外完整揭示（這是一手來源 gap），但「信任清單錨定公共鏈」這件事本身已經公開。

**第三**：QuarkID（阿根廷布宜諾斯艾利斯城市級數位身分）在 ZKsync L2 部署（per 我的內部 MEMORY 條目）。這是城市級而非國家級之公共鏈部署，路線跟不丹、台灣不同。

這三個案例放在一起看，公共區塊鏈在數位身分基礎設施的角色已經不是「未來想像」，是「正在發生」。但要注意這三個案例的鏈別、層級、治理結構都不一樣——不丹用主網、台灣用主網（推測）、QuarkID 用 L2。在 PRF 框架下，這三種選擇對 validity 與 contestation 兩分量的承擔強度不同。**選哪一條鏈**就是治理選擇。

原稿提的「**聯邦式信任清單聯盟**（federated trust-list alliance）」這個概念，一個月後我仍然認為是對的方向，但我會補一句：「聯邦式信任清單聯盟之具體 instruments，是 G_recognition^A 軟法層之 future work，目前尚未有國家級案例。」（per [系列第 8 篇 A8/D3](https://blog.bonds.tw/reports/2026-05-06-dns-vs-identity-trust-roots/) §6 + capstone §8 future work #C.1）

forward-link：R4 retrofit DID/VC public chain → `external/blog-pro/src/content/reports/2026-04-22-did-vc-public-chain-deployments.md`；DNS vs identity trust roots → 系列第 8 篇 A8/D3；FTLA 四層治理 → A8 §5。

---

## §12 政策議程的升級：五條原則 × 五項方法論工具

原稿列了五條政策議程——隱私底線 / 開放皮夾 / 採購沙盒 / 試驗場網絡 / AI 代理授權。這五條一個月後我仍然完全同意，沒有要替換。但我要補上五項**方法論工具**，把這五條政策原則從「對的方向」升級為「可被外部審查的具體紀律」。

| 政策原則 | 對應方法論工具 |
|---|---|
| **隱私底線** | working / strengthened thesis 紀律——對外引用採 working 版本，避免「強隱私承擔」之偷渡為「絕對隱私保證」 |
| **開放皮夾** | universal-conditional 區分——皮夾標準化承擔之 universal 部分（schema 結構）與 conditional 部分（issuer 多元化、jurisdictional scope）分層處理 |
| **採購沙盒** | likelihood-by-mechanism 四級評估——對 vendor product claim 採設計直觀排序語式，不被「我們的方案是 99.9% 隱私安全」這類具體機率小數所誘騙 |
| **試驗場網絡** | anti-mythologization clause——試點成果不主張為其他法域之模板；台灣 PTT + g0v Summit 試點之外推必須有 conditional 條件之獨立論證 |
| **AI 代理授權** | 設計直觀 vs 規範主張分離——AI agent product 之規範語言（「我們的 agent 守護你的隱私」）不能直接搬用為政策承擔；政策承擔須由 F1 5×3 矩陣獨立論證 |

這五項方法論工具不是新政策，是**檢核既有政策**之具體紀律。任何政策建議文書、白皮書、立法說帖，可以拿這五項工具去核——你的政策主張有沒有偷渡？有沒有踩到 Z₃-intrinsic 不可達 cell？有沒有把試點當模板？

原稿提的五條政策議程仍然站得住；一個月後它們有了具體的審查工具，可以被翻成採購招標書、立法檢核表、公民倡議監督指標。這是政策設計從「對的方向」進入「可被外部審查」的關鍵差異。

forward-link：五項方法論工具 → [article 25 capstone §5](https://blog.bonds.tw/reports/2026-05-16-civic-proof-series-capstone/)。

---

## §13 結語：一個月後的不變與改變

原稿結尾我寫了一段話：「一個民主社會需要的數位身分體系，不只要證明我是誰，也要決定我在什麼時候可以不暴露超過必要的資訊，仍然能合法參與公共生活。」

這句話一個月後我完全沒有要改。它是整個 civic-proof 系列 25 篇 + 4 retrofits + 1 Taiwan deep-dive + 1 capstone 全部承擔的種子。

但這一個月發生了三件事，讓我看待這顆種子的方式有所不同。

**第一件事**，這顆種子發了芽，長成 PRF 規範下界 + civic-proof operational concept 兩層命題。原稿那時候我把「公民證明」當成一個直覺的工程目標；現在我把它當成一個有規範根基（PRF 四家合取）、有形式定理（T_PRF1-T_PRF5）、有工程承擔（F1 + F2 + F3）、有治理框架（A8 + A14 + A15）、有案例驗證（Taiwan deep-dive）、有方法論紀律（五項工具）的完整命題系統。

**第二件事**，這顆種子也露出它的邊界——PRF 為 floor 不是 unique standard、預設民主政體脈絡、不主張取代既有規範性進路（Rawls / Sen / Nussbaum / Honneth）、不主張為密碼學工程之決定性 ground truth。原稿那時候我有信心把「公民證明」推得遠一點；一個月後我更精確地知道它能推到哪裡、推不到哪裡。**知道邊界比知道內容更難**，這是這一個月最大的學習。

**第三件事**，這顆種子讓我發現了 36 條未解問題（Phase 4d open questions agenda）。其中 1 條高優先（AI agent 主動性升級下 F1 §4 三進路合取覆蓋之擴張）、2 條中高優先（θ_dem 校準 + F2 schema jurisdictional 擴張）、11 條中優先、21 條低中優先、5 條暫緩。這個未解問題清單，是這顆種子之後可能發展的方向圖。

原稿留給讀者三個問題，一個月後我有了**部分**答案，但更多是更精確的問題。

第一題：哪些公民行為真的需要法律身分，哪些其實只需要屬性證明、唯一性證明，或假名式參與？

一個月後答案是——這要看 PRF 四分量在該行為脈絡下之承擔分布。投票需要 uniqueness + accountability 但不需要 full identity；連署需要 attribute proof + unlinkability；吹哨需要 pseudonymous participation + ex post auditability；參選需要 legal identity + full accountability。每一種公民行為都有自己的 PRF 四分量配置。

第二題：皮夾、作業系統、瀏覽器若逐漸成為預設的呈現層，它們是否已經成為新的公共基礎設施？

一個月後答案是——是的，但「公共基礎設施」這個概念本身需要 universal-conditional 區分。universal 部分是「呈現層之 PRF 承擔義務」（任何呈現層都受 PRF 約束）；conditional 部分是「該呈現層在不同法域之具體治理結構」（瀏覽器在歐盟受 EUDI ARF 約束、在美國受 California AB1043 約束、在台灣受 TW DIW 規範影響）。E1 essential facility doctrine + D1 北歐 BankID 三條件溯因為此題之主要承擔。

第三題：若國家根憑證在可見未來仍是主流，那麼什麼樣的交換架構才足以支撐民主社會需要的隱私、可攜性、救濟與包容？

一個月後答案是——交換架構必須同時滿足 PRF 四分量、必須走 F1 + F2 + F3 三層工程承擔、必須處理跨法域救濟空白（A14 四類缺口）、必須採 inclusion rights 三層權利語言（A15 Level 1-3）、必須對結構性滑坡有 MVSR 三層預防（E3）。具體而言：交換架構的最小條件束就是 civic-proof 系列 25 篇承擔的合取。

---

我自己一直認為「數位結社」是台灣公民科技下一個十年最重要的議題。原稿那時候我寫過一句話——「『數位身分不夠隱私』，因此『數位身分所衍伸的秘密結社』一直無法有效實踐，更不用談數位行動主義的成效了。」這句話一個月後我仍然同意，而且現在我能講得更精確——數位結社的 PRF 承擔結構需要 plurality（多元 *who* 共在）+ agonism（legitimate adversary 之 institutional 槽位）+ contestation（active stance 之 ex post answerability）三分量同時承擔，validity 為輔助。系列第 3 篇 B1 結社三道牆已經拆過這個問題，但仍然是 medium-difficulty 的未解議題——這也是 Phase 4d open questions agenda 中 B.4 「F3 supporter UI 三層分離之跨案例驗證」與 G.3「dynamic context 之時序動態」兩條中優先 future work 的接合點。

寫到這裡我發現一件有點好笑的事——我四月去 Allen Lab，準備了三十分鐘簡報，那時候我的 thesis statement 是「公民證明能讓數位公民建設真正運作」。一個月後我同意這句話，但我會在它後面補一個從句：「**only if** PRF 四分量同時承擔、**only if** universal-conditional 區分被明示、**only if** 設計直觀不被偷渡為規範主張、**only if** anti-mythologization clause 阻止外部敘事劫持」。這個 only-if 條件束是這一個月真正的收穫。

也許這就是為什麼這篇文章我要寫成「起源回望」——起源未必比之後更深，但起源之美在於它還沒被自己嚇到，敢說大話。一個月之後我學會在大話後面補從句、補 caveat、補誠實邊界，但有時候我會懷念那個敢直接說「公民證明能讓數位公民建設真正運作」的我。

把直覺寫成形式化是長大；保留直覺的勇氣是不能忘的初心。

是以為記。

---

## §References (起源回望版)

**原稿**
- mashbean.net 原文：[從國家發行憑證到公民證明自己——數位身分如何轉化數位公民建設](https://mashbean.net/blog/2026/0417-1trens/)（2026-04-17 Allen Lab Fellow Meeting）
- 簡報投影片：[中文版](https://mashbean.net/blog/allen-lab-share-0417-zh/) ｜ [English](https://mashbean.net/blog/allen-lab-share-0417-en/)

**civic-proof 系列主要承擔（按出版序）**
- A1 (2026-05-02)：[accountability-without-identification](https://blog.bonds.tw/reports/2026-05-02-accountability-without-identification/) — 「可問責不以實名為前提」之雙錨點承擔
- A3 (2026-05-03)：civic-proof 概念地景
- B1 (2026-05-03)：結社三道牆
- C1-C3 / D1-D3 / E1-E5：supporting 10 篇
- F1 (2026-05-10)：[civic-ai-agent-delegation-limits](https://blog.bonds.tw/reports/2026-05-10-civic-ai-agent-delegation-limits/) — 5×3 矩陣 + Z₃-intrinsic 不可達
- F2 (2026-05-11)：[civic-receipts-provenance](https://blog.bonds.tw/reports/2026-05-11-civic-receipts-provenance/) — 23 leaf schema + V_receipt C1-C6
- F3 (2026-05-11)：[selective-disclosure-ux-failure](https://blog.bonds.tw/reports/2026-05-11-selective-disclosure-ux-failure/) — supporter UI 三層分離
- A15 (2026-05-10)：[civic-proof-inclusion-rights](https://blog.bonds.tw/reports/2026-05-10-civic-proof-inclusion-rights/) — 三層權利語言（Level 1-3）
- A14 (2026-05-09)：[cross-jurisdictional-redress-gap](https://blog.bonds.tw/reports/2026-05-09-cross-jurisdictional-redress-gap/) — 四類救濟缺口
- A2 (2026-05-12)：[public-realm-political-philosophy](https://blog.bonds.tw/reports/2026-05-12-public-realm-political-philosophy/) — PRF 規範下界正面承擔
- **Article 24 (2026-05-16)**：[Taiwan civic-proof deep-dive](https://blog.bonds.tw/reports/2026-05-16-taiwan-civic-proof-deep-dive/) — 民主前線案例
- **Article 25 (2026-05-16)**：[civic-proof series capstone](https://blog.bonds.tw/reports/2026-05-16-civic-proof-series-capstone/) — 系列收束

**Retrofits 4 篇（透過 civic-proof-map.astro crossLinks 形式承擔）**
- R1 agentic-id-governance (2026-04-01)
- R2 age-verification (2026-04-16)
- R3 IT procurement (2026-03-28)
- R4 DID/VC public chain (2026-04-22)

**內部規劃文件**
- `docs/handoff/artifacts/civic-proof-series-audit-output.md` — Phase 1+2+3 audit + §H Central Thesis (post-PRF) + §I GPT-5.5-pro Patch Pack
- `docs/handoff/artifacts/civic-proof-dissertation-outline.md` — Phase 4b 博論章節盤點（內部，非本文承擔）
- `docs/handoff/artifacts/civic-proof-open-questions-agenda.md` — Phase 4d 36 條未解問題優先序
- `docs/handoff/artifacts/overclaim-batch-{1..5}.md` — Phase 2 63 條 overclaim entries

**外部譜系（PRF 四家錨點）**
- Arendt, H. (1958). *The Human Condition*. University of Chicago Press.
- Habermas, J. (1981). *Theorie des kommunikativen Handelns*. Suhrkamp.
- Habermas, J. (1992). *Faktizität und Geltung*. Suhrkamp.
- Pettit, P. (2012). *On the People's Terms*. Cambridge University Press.
- Mouffe, C. (2000). *The Democratic Paradox*. Verso.

**外部譜系（規範-工程交界）**
- Mueller, M. L. (2002). *Ruling the Root*. MIT Press.
- Tomasev, N. et al. (2026). "Intelligent AI Delegation." arXiv:2602.11865.
- Bovens, M. (2007). "Analysing and Assessing Accountability."
- Cavoukian, A. (2009). *Privacy by Design: The 7 Foundational Principles*.

**Allen Lab Fellow Meeting 框架**
- Allen, D. & Allen Lab. [A Framework for Digital Civic Infrastructure](https://ash.harvard.edu/resources/a-framework-for-digital-civic-infrastructure/). Harvard Kennedy School Ash Center.

**美國憲法案例（A1 雙錨點承擔之歷史錨點）**
- *Talley v. California*, 362 U.S. 60 (1960)
- *NAACP v. Alabama ex rel. Patterson*, 357 U.S. 449 (1958)
- *McIntyre v. Ohio Elections Commission*, 514 U.S. 334 (1995)
- *Free Speech Coalition v. Paxton*, 605 U.S. ___ (2025-06-27)

**台灣 anchor（per 系列 + article 24）**
- 中華民國行政院（2021-01-21）：暫緩數位身分證發行計畫
- 林宗男、李忠憲（2020）：〈數位身分證的資安風險〉，自由評論網
- 報導者（2021）：〈從被迫喊卡的數位身分證政策〉
- 數位發展部 moda（2022-08-27 掛牌至 2026-05 公開資訊）：TW FidO + TW DIW
- 「有備而來」litepaper（民間倡議文本，2025-11 公開徵詢版）：https://blog.bonds.tw/litepaper/，取用日期 2026-05-16

---

## §14 Revision Note (2026-05-17) — 起源回望紀律

本文為 civic-proof 系列起源回望（origin retrospective），承擔以下五項紀律：

1. **本文非 article 26**：系列已於 article 25 capstone 收束。本文 frontmatter 不設 `seriesOrder`，標 `series: civic-proof` tag 但不在正式編號內；意義為「系列開始之前的那一篇，現在用系列之後的形式化重新寫一次」。
2. **保留原稿之承擔**：原稿（mashbean.net/blog/2026/0417-1trens/，2026-04-17）作為系列起源文本不被本文取代；本文僅承擔「一個月後形式化升級之 inline 註記」。
3. **沿用 capstone 紀律**：本文承擔 capstone 已建立的五項對外引用紀律（working thesis 語式 / likelihood inline caveat / universal-conditional 區分 / anti-mythologization clause / 設計直觀-規範主張分離）。
4. **「有備而來」litepaper 處理**：本文 §6 提及 litepaper 時採「民間倡議文本」格式，不採學術引用格式（per article 24 紀律）。
5. **mashbean-accent 語氣承擔**：本文採 mashbean（豆泥）個人部落格語氣，與 civic-proof 系列嚴肅學術文體有意識區分；本文之「起源回望」承擔需要這個語氣差。
