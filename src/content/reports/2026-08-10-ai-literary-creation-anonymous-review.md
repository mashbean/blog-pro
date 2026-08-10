---
title: "讓作品先說話　AI 文學創作與匿名互評的國際案例"
description: "國際上的人機共寫、文學盲讀、匿名同儕回饋與單次生成活動，已經提供一批可組合的課程元件。本文整理這些案例，並提出一套讓創作者兼任評讀者、分階段揭露作品來源與評論來源的課程原型。"
topic: ai
tags: ["假名與匿名", "AI 治理", "AI 倫理", "教育", "研究方法"]
keywords:
  [
    "AI creative writing",
    "anonymous peer review",
    "blind evaluation",
    "one-shot prompting",
    "single-call generation",
    "human-AI co-writing",
    "literary criticism",
    "course design",
  ]
pubDate: 2026-08-10
draft: false
lang: "zh-TW"
aiModel: "OpenAI GPT-5"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-08-10-ai-literary-creation-anonymous-review"
aiGeneratedDate: 2026-08-10
humanReviewed: false
category: "AI 與文化"
slug: "2026-08-10-ai-literary-creation-anonymous-review"
---

_本文由 OpenAI GPT-5 協助蒐集資料、整理案例與產生初稿，依公開研究、機構文件與活動規則交叉查核。文章提出的是待試辦的課程原型，尚無資料證明整套設計已在真實課堂中產生預期效果。_

可以先想像這樣一門課。一群創作者各自寫出一份提示，只能送給 AI 一次。模型回傳的散文或短篇不能重試，也不能修改。作品隨後交給其他創作者匿名評讀，評語中又混入一份 AI 評論。所有人先讀作品，再看提示與生成紀錄，最後才知道作者與評論者是誰。

這個構想包含了幾個已經在不同地方出現的做法。人機共同寫作有成熟的研究工具，機器作品與人類作品的盲讀實驗也做過多輪，匿名同儕回饋在寫作教育中累積了實證，民間活動甚至發展出驗證單次模型呼叫的程序。只是，在本次可查證的公開資料中，還找不到一個把「創作者兼評讀者、雙向匿名、AI 協作、單次生成、人類與 AI 評論來源暫不揭露」全部放在一起的成熟課程。

## 人機共寫通常是反覆選擇

史丹佛大學的 CoAuthor 是目前最完整的人機寫作過程資料之一。研究團隊找了 63 名寫作者，在 1,445 次工作階段中完成創意故事與議論文章。寫作者按下按鍵後會收到五個 GPT-3 建議，可以接受、修改或捨棄，系統則保存游標移動、刪改、取用建議與時間戳。資料集含 830 篇由 58 名寫作者完成的創意故事<sup>1</sup>。

CoAuthor 的價值不只在最後寫出了什麼。它把作者何時求助、選了哪一句、拒絕了什麼都留了下來。研究團隊發現，寫作者與 AI 合作的程度差異很大，差異更多來自個別寫作者，較少取決於題目。AI 提高了部分產出效率，也帶來新的人名與情節材料；較高的模型參與，有時會降低寫作者對成品的所有感。

Google 的 Wordcraft 把焦點放到已出版的專業作者。13 名來自不同創作背景的作者受邀使用內建 AI 輔助的文字編輯器寫故事，並以訪談與日誌記錄過程。作者較常把工具用於腦力激盪、補充故事細節、世界建構與資料查找<sup>2</sup>。Google DeepMind 的 Dramatron 則從一句故事梗概開始，依序產生人物、情節節點、場景與對白。15 名劇作家與編劇在兩小時研究中試用系統，有人把四份大量改寫的劇本搬上舞台。參與者也直說生成內容可能公式化，多數人偏好把它用在世界建構、替代情節與發想<sup>3</sup>。

麻省理工學院媒體實驗室 2017 年推出的 Shelley 採公開接龍。系統每小時在 Twitter 發出恐怖故事開頭，任何人都能接下一段，AI 再回覆續寫。它把 AI 放在輪流創作的位置，參與者共同把故事往前推<sup>4</sup>。這個案例很接近文學工作坊的即興互動，作者沒有匿名，作品也沒有經過同儕批評。

文學創作中的 AI 多半以反覆互動、挑選、重組與改寫進入作品。這些研究能證明 AI 可以在哪些位置協助創作者，也提醒課程保存選擇過程的重要性。它們沒有證明一次生成比較好。

## 民間計畫把生成方法變成作品的一部分

全國小說生成月（National Novel Generation Month, NaNoGenMo）自 2013 年起在每年 11 月進行。參與者寫程式產生五萬字以上的小說，月底至少分享一部生成作品及原始碼。主辦方對「小說」採極寬定義，五萬次重複同一個字也符合形式規則<sup>5</sup>。這使活動的核心落在方法公開。讀者看到小說，也能追查生成它的程式。

日本的日經「星新一賞」從第一屆起就接受人類以外的投稿者，官方在 2026 年的介紹中仍明確提到 AI 可以參賽。2016 年的 AI 小說創作計畫由多所大學研究者合作，當時由人類提供故事框架，系統把框架轉為文字。團隊的長期目標才是讓 AI 自行完成創作與選稿<sup>6</sup>。這段歷史很適合提醒學生，公開說明人類與 AI 各自做了什麼，比把作品簡化為「AI 寫的」更精確。

NaNoGenMo 與星新一賞都沒有採用創作者互相匿名評讀的制度。它們提供的是另一個元件，生成方法可以成為作品須附帶的材料，讀者也有權知道作品如何完成。

## 拿掉作者身分後，文學判斷仍會分歧

達特茅斯學院 Neukom Institute 在 2015 年啟動創意圖靈測試，讓評審把機器產生的詩、故事與人類作品放在一起判讀。2017 年的詩歌類別有人得獎，短篇故事類別則沒有參賽者，主辦方將原因記為類別難度<sup>7</sup>。到 2018 年，規則開始從「像不像人」加入「作品是否有趣」的質性評價。這個改動指出兩個不同問題。來源辨識測的是模仿與讀者預期，文學批評還要處理作品如何運作。

2024 年，Brian Porter 與 Edouard Machery 在《科學報告》（Scientific Reports）發表兩項詩歌實驗。第一項讓 1,634 名美國非專業讀者閱讀十位知名英語詩人的作品與 ChatGPT 3.5 依其風格生成的詩，判斷來源的整體正確率為 46.6%。第二項另找 696 人，分成「被告知全由人類寫」「被告知全由 AI 生成」與「不告知來源」三組，再評估詩作的十四個面向<sup>8</sup>。研究顯示，來源標示會改變讀者的評價，AI 詩較容易理解的主題與情緒也可能被非專業讀者偏好。

另一組研究得到不同的畫面。2024 年 CHI 論文 Art or Artifice 先請八名創意寫作專家發展十四項創意寫作檢核，再由十名創意寫作者評估 48 篇專業作家或大型語言模型產生的故事。人類作品通過的檢核項目明顯較多，研究使用的大型語言模型也無法重現專家評價<sup>9</sup>。

ACL 2025 的 The Reader is the Metric 彙整五個公開資料集，涵蓋 1,471 篇故事與 101 名評論者。研究者把讀者偏好分成兩群。非專業讀者較常重視易讀性與文字豐富度，專業讀者較重視主題發展、修辭變化與情感動態<sup>10</sup>。這個結果對課程設計很直接。匿名可以先遮住名氣與來源資訊，評讀者帶進作品的文學觀仍會影響判斷。評讀表需要保留多個面向和文字說明，不能只留下「像不像人」或一個總分。

## 最接近構想的案例由 AI 互相審稿

2026 年預印本 LLM Review 幾乎畫出了「創作者同時也是評讀者」的流程。三個 AI 代理根據相同題目，各自寫一篇約 300 字的科幻故事，再交換針對性的批評。每個代理只看自己的初稿、其他代理給的意見與同儕初稿，修訂時看不到別人如何修改。研究者把這種受限制的資訊流稱為盲式同儕評閱（blind peer review），希望作品在獲得外部意見後仍保留不同發展方向<sup>11</sup>。

這項研究的預設流程有三名代理和三輪互動，與單次生成不同。它也仍是預印本，人工驗證只有九名學生評讀者，創作與互評的主體全是 AI。可以借用的是資訊結構。評論能流動，修訂後的作品先隔離，創作者不需要看著其他人的版本逐漸靠攏。

人類寫作教育對匿名互評已有較長的研究。2007 年一項 92 名大一學生的對照研究發現，匿名電子互評組提出更多批判性意見，寫作表現也較好<sup>12</sup>。東京八個大學寫作班的行動研究則發現，匿名對較低程度學生提出修訂建議的影響較明顯，各程度學生都表示匿名時比較自在<sup>13</sup>。

效果沒有單一方向。2019 年一篇涵蓋 14 項對照或組內研究的回顧指出，匿名可能增加批判性回饋與學習價值感受，現有證據數量有限，教學場域、是否有評分、評讀訓練與匿名方向都會影響結果<sup>14</sup>。2020 年的同儕評量統合分析發現，同儕評量整體有助於學習，但匿名與具名研究的平均效果沒有顯著差異<sup>15</sup>。

匿名適合被當作一項可觀察的教學變項。它可能降低熟人壓力，也可能讓評論者覺得不用負責。教師仍須提供量尺、示範、最低評論品質與申訴管道。

## 先把 one shot 的意思說清楚

提示工程裡的 one-shot prompting，常指在提示內放入一個輸入輸出示例。這門課需要的限制不同，重點是提示只送出一次，不修改、不重試、不追問。為避免術語混淆，課程文件可以稱它為「單次提交生成」（single-call generation）。

2026 年的民間 One Shot Challenge 提供了一套可借用的程序。參賽者提交一個任意長度的提示，由主辦方伺服器只呼叫模型一次。結果不能編輯、重試或串接其他呼叫，主辦方先封存提示與輸出，活動結束後公開，並提供雜湊讓外界驗證<sup>16</sup>。這個活動創作的是單頁程式作品，文學評審標準也不完整，因此只能算程序先例。

單次生成會放大偶然性，也把提示撰寫變成主要創作行為。若每個人使用不同模型，最後很難分辨差異來自提示、模型或創作者。第一次試辦宜固定同一模型版本、系統提示、輸出長度與取樣參數。參與者可以用紙筆或不連網的方式準備提示，正式送出前不再詢問其他 AI。教學端代為執行模型呼叫並保存時間戳、參數、提示與原始輸出。

作品長度也要配合限制。CoAuthor、Wordcraft 與 Dramatron 都顯示長篇創作通常需要反覆選擇與結構調整。第一次課程可用 600 至 1,200 字的散文、極短篇或短篇小說，完整長篇小說留給後續多輪單元。

## 一套可試辦的三階段課程

建議規模為 12 至 24 人，每位參與者既是創作者，也是三篇其他作品的評讀者。教師或助教持有身分對照表，系統只顯示隨機作品代碼與評論代碼。AI 評論使用同一份量尺，只接收去識別化作品，產生後與人類評語混合排序。

### 課前準備

參與者先同意四件事。作品是否只在課內使用、提示和生成紀錄何時揭露、哪些資料會送入模型、課後能否撤回公開授權。不要把尚未發表的他人作品、私人對話或可識別個資送入商業模型。聯合國教科文組織（UNESCO）的生成式 AI 教育指引要求重視資料隱私、人本與適齡設計<sup>17</sup>，美國作家協會（Authors Guild）則建議公開實質的 AI 文字生成使用，並避免刻意模仿在世作者的獨特風格<sup>18</sup>。

全班使用同一文類和字數範圍。可以提供共同的故事種子，例如一個地點、一件物品與一個必須發生的轉折，參與者自行決定敘事觀點、聲音、結構與提示寫法。提示可以包含自寫大綱和人物設定，不能放入他人的受著作權保護文本作為模仿樣本。

### 第一階段　只看作品

每份提示由教學端執行一次，原始輸出直接成為送評版本。移除檔名、帳號、文件中繼資料與明顯自我介紹後，每篇作品隨機分給三名人類評讀者，另加一份 AI 評論。評讀者只看到作品，不知道作者、提示、模型回覆紀錄或其他評語。

第一輪評論可固定回答五題。

1. 哪一段最有效，請引用一句或指出具體位置。
2. 故事或散文在哪裡發生推進，哪裡停滯。
3. 聲音、意象與句法形成了什麼效果。
4. 哪個地方最可預期、陳腔或缺乏細節。
5. 若只能改一件事，會做哪一個修訂實驗。

「這篇很好」「很像 AI」或「沒有感情」不能單獨構成評論。評讀者必須用作品中的文字說明判斷。量尺可以另記敘事推進、語言與聲音、人物或觀點、意外性與整體完成度，每項採五點量表。分數用於比較揭露前後的變化，不直接決定成績。

### 第二階段　揭露提示與單次輸出

所有人先為收到的四份評論評估實用性，仍不知道評論來自人類或 AI。之後揭露每篇作品的完整提示、模型版本、參數與原始輸出，作者身分繼續隱藏。

第二輪討論改看創作過程。提示替作品預先決定了哪些選擇，模型自行補入了哪些慣例，作品中哪些細節可能來自訓練資料的常見模式，創作者在只有一次呼叫的條件下把判斷放在哪裡。評讀者可以修改第一輪評分，並寫下改變的理由。

這一輪會把「作品好不好」與「人機如何工作」分開。前一輪的文本批評不因來源揭露而消失，後一輪則讓提示本身成為可批評的創作文件。

### 第三階段　揭露評論來源與參與者身分

最後先公布哪些評論由 AI 產生，請參與者比較自己原先對評論實用性的評分。班級可以觀察 AI 是否偏好流暢、完整與常規結構，人類評讀者是否更能指出文化語境、含混與閱讀阻力。這裡不預設人類一定比較好，也不讓 AI 評論參與成績裁決。

作者與人類評讀者的身分在討論結束後才揭露。作者只需回應哪些評論改變了自己的閱讀，不必為作品辯護。若有人不希望公開身分，可維持代碼到課程結束。匿名是延後來源線索的程序，熟悉的同學仍可能從題材與語氣猜出作者。

## 課程最後可以留下什麼

這套課程會產生四種可以分析的材料，包括單次提示、未修改的模型輸出、匿名人類與 AI 評論，以及揭露前後的評分與反思。它能回答的問題相當具體。

- 讀者看到提示後，對同一篇作品的判斷如何改變。
- 人類與 AI 評論各自在哪些面向較常被認為有用。
- 參與者能否從評論語氣猜出評論來源。
- 單次限制讓創作者更重視哪些提示選擇，又犧牲了哪些修訂能力。
- 專業經驗不同的讀者，是否採用不同的文學判準。

第一次試辦可以停在描述性比較，不需要宣稱哪一方更有創造力。若要進一步研究單次限制的效果，可在下一次課程採交叉設計，讓同一批人一回合只做單次生成，另一回合允許自由多輪協作，交換題目順序後比較作品、所有感與學習反思。

國際案例已經證明，人與 AI 的文學合作可以被記錄、盲讀、評分與公開檢視。它們也留下相當一致的提醒。作品來源會影響評價，匿名的效果受場域約束，長篇創作需要反覆判斷，評論者對文學品質也沒有單一標準。

這門課最有價值的成果，未必是選出最好的一篇。更值得保存的是揭露的次序。先讓作品說話，再讓提示說話，最後才讓身分說話。參與者因此可以看見，自己在每一層資訊出現後，究竟改變了什麼判斷。

## 參考資料

1. Lee, Mina, Percy Liang, and Qian Yang (2022). “CoAuthor: Designing a Human-AI Collaborative Writing Dataset for Exploring Language Model Capabilities.” CHI 2022. https://arxiv.org/abs/2201.06796；CoAuthor Dataset, https://coauthor.stanford.edu/
2. Ippolito, Daphne et al. (2022). “Creative Writing with an AI-Powered Writing Assistant: Perspectives from Professional Writers.” https://arxiv.org/abs/2211.05030
3. Mirowski, Piotr et al. (2023). “Co-Writing Screenplays and Theatre Scripts with Language Models: An Evaluation by Industry Professionals.” ACM CHI. https://deepmind.google/research/publications/13609/；Dramatron project, https://google-deepmind.github.io/dramatron/details.html
4. MIT News (2017). “Can artificial intelligence learn to scare us?” https://news.mit.edu/2017/can-ai-learn-to-scare-us-shelley-mit-media-lab-horror-story-1027
5. National Novel Generation Month. “The Goal” and “The Rules.” https://nanogenmo.github.io/
6. 日經「星新一賞」官方網站，https://hoshiaward.nikkei.co.jp/；Dentsu-Ho (2016), “AI Novel Creation Project Reports on Submission to Nikkei's ‘Seiichi Hoshi Award’,” https://dentsu-ho.com/en/articles/3855
7. Dartmouth Neukom Institute (2017). “Awards Announced for 2017 Turing Tests in Creative Arts.” https://neukom.dartmouth.edu/news/2017/06/awards-announced-2017-turing-tests-creative-arts
8. Porter, Brian, and Edouard Machery (2024). “AI-generated poetry is indistinguishable from human-written poetry and is rated more favorably.” Scientific Reports 14, 26133. https://www.nature.com/articles/s41598-024-76900-1
9. Chakrabarty, Tuhin et al. (2024). “Art or Artifice? Large Language Models and the False Promise of Creativity.” CHI 2024. https://arxiv.org/abs/2309.14556
10. Marco, Guillermo, Julio Gonzalo, and Víctor Fresno (2025). “The Reader is the Metric: How Textual Features and Reader Profiles Explain Conflicting Evaluations of AI Creative Writing.” Findings of ACL 2025. https://aclanthology.org/2025.findings-acl.1304/
11. Li, Weiyue et al. (2026). “LLM Review: Enhancing Creative Writing via Blind Peer Review Feedback.” arXiv 預印本。https://arxiv.org/abs/2601.08003
12. Lu, Ruiling, and Linda Bol (2007). “A Comparison of Anonymous Versus Identifiable E-Peer Review on College Student Writing Performance and the Extent of Critical Feedback.” Journal of Interactive Online Learning 6(2), 100–115. https://digitalcommons.odu.edu/efl_fac_pubs/5/
13. Garner, Joe, and Oliver Hadingham (2019). “Anonymizing the Peer Response Process: An Effective Way to Increase Proposed Revisions?” Journal of Response to Writing 5(1). https://scholarsarchive.byu.edu/journalrw/vol5/iss1/4/
14. Panadero, Ernesto, and Maryam Alqassab (2019). “An empirical review of anonymity effects in peer assessment, peer feedback, peer review, peer evaluation and peer grading.” Assessment & Evaluation in Higher Education 44(8), 1253–1278. https://doi.org/10.1080/02602938.2019.1600186
15. Double, Kit S., Joshua A. McGrane, and Therese N. Hopfenbeck (2020). “The Impact of Peer Assessment on Academic Performance: A Meta-analysis of Control Group Studies.” Educational Psychology Review 32, 481–509. https://link.springer.com/article/10.1007/s10648-019-09510-3
16. One Shot Challenge. Official rules and architecture. https://1shotchallenge.ai/
17. UNESCO (2023, updated 2026). “Guidance for generative AI in education and research.” https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research
18. Authors Guild (updated 2026). “AI Best Practices for Authors.” https://authorsguild.org/resource/ai-best-practices-for-authors/
