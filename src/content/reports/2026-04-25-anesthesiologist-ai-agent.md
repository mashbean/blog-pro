---
title: "下班還在當醫師的人——麻醉科把 AI Agent 放回它真正能做的位置"
description: "麻醉科的累，比起工時，更核心的是身分下不了班。我把這幾個月讀的麻醉 burnout 研究、ambient AI 文獻、Watson 與 Epic Sepsis 兩個翻車案例擺在一起，整理出一個自己用得下手的判斷——AI Agent 在麻醉科真正能做的，是把四類結構化雜務切走；它做不到、也不該做的，是臨床判斷與情感勞動。雜務切走之後，反而會把那些不能外包的時刻照得更亮。"
pubDate: 2026-04-25
date: 2026-04-25
tags: ["anesthesiology", "ai-agent", "burnout", "healthcare-ai", "phi", "ambient-ai", "clinical-decision-support", "taiwan-healthcare"]
category: "醫療與科技"
aiModel: "Claude Opus 4.7"
aiPrompt: "麻醉科醫師長期 burnout 的結構是什麼？AI Agent 在這個結構裡能做什麼、不能做什麼？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-04-25-anesthesiologist-ai-agent"
aiGeneratedDate: 2026-04-25
humanReviewed: true
lang: "zh-TW"
---

凌晨兩點，腦袋還在跑今天那台刀的麻醉誘導參數。

身體已經回到家、燈也關了，那條血壓曲線還在閃。明天清晨七點半的肝臟移植要確認血品交叉。後天那位高齡髖部骨折病人，前一晚的抗凝血劑要不要橋接，還沒下定論。手機沒響、沒人 page 你，這顆腦袋根本沒下班。

麻醉科談累，外人聽到的版本通常是工時、值班、人力。這些都對，只是沒抓到最痛的那塊。耗損人的，是身分切換不掉這件事。離開醫院、回到家、躺在床上，「我還是個麻醉醫師」這件事下不了班。

於是我想，乾脆動動嘴巴，把這幾個月讀的東西梳理一遍，順便回答自己被反覆問到的一個大哉問——AI Agent 在這個結構裡，到底能做什麼、不能做什麼。

先講清楚一件事，免得有人讀到一半翻臉。下面對麻醉科工作型態的觀察，是我把美國與台灣文獻、業界敘事、一線醫師的個人陳述拼起來的合成圖像，比較像田野雜記，不要當代表性調查或統計樣本看。台灣那層的量化資料其實很缺，這個缺口我會在文章裡反覆標出來（純以誌之）。

---

## 一、累的不是開刀房

文獻對醫師「身分難以下班」處理得相當清楚。Epstein 那篇 *Mindful Practice* 把醫師長年「在場、警覺、可被呼叫」的精神狀態講得很到位<sup>1</sup>。Maslach 與 Leiter 的 burnout 三維模型（情緒耗竭、去人格化、個人成就感低落）提醒過這層長期警覺已經超過單純疲勞，會發展成精神結構上的耗損<sup>2</sup>。

麻醉科尤其危險。Sun 等人 2019 年發在 *Anesthesiology* 的長期橫斷面調查指出，美國麻醉住院醫師與第一年主治的 burnout 盛行率長年高於整體醫師平均，主要壓力源是 workload 與 lack of control<sup>3</sup>。De Hert 2020 年的系統性綜述把三大壓力源拆得更清楚，分別是 on-call、production pressure、文書負擔<sup>4</sup>。

台灣這邊資料相對稀薄，方向倒是一致。台灣麻醉醫學會（TSA）近年年會與公開聲明多次處理人力缺口，衛福部醫事司「專科醫師人力供需分析」歷年把麻醉科列為人力相對不足的專科<sup>5</sup>。健保麻醉給付偏低是業界長期反映，公開層級文件不足以支撐近五年的單一時序數字。Threads、PTT medstudent、Dcard 醫療版的氣氛跟學術文獻指向一致，但只能當氛圍佐證，不能拿來算數字。

把這些湊起來，麻醉科的負擔結構就浮出來。我依 De Hert 框架延伸整理，至少六層疊在一起，包含術中執業、術前訪視、術後紀錄與恢復室、值班 on-call、CME 與換照、跨科會診。

只有第一層真正在開刀房裡。

把麻醉科的辛苦全歸因到「開刀」是觀察錯誤。壓人的反而是開刀房外那五層。「AI Agent 能做什麼」這個問題，答案就從這個結構去看，能動的是開刀房外那幾層雜務，動不到的是麻醉本身的臨床判斷。

---

## 二、先把誤區拿掉，AI 不會幫你聰明地做臨床判斷

過去十年醫療 AI 行銷論述最大的問題，是把價值主張壓在「臨床決策支援」這個方向。有兩個翻車案例，每一份談醫療 AI 的文件都該寫進去。

**IBM Watson for Oncology。** 2013 年啟動，曾被行銷成腫瘤治療建議的旗艦 AI，與 MD Anderson、Memorial Sloan Kettering、印度 Manipal Hospitals 等機構合作。MD Anderson 內部審計揭露專案問題，*STAT News* 取得內部文件指出 Watson 給出 "unsafe and incorrect" 的治療建議；*IEEE Spectrum* 做了完整事後拆解<sup>6</sup>。失敗有三層，訓練資料以 MSK 假想病例為主而非真實病歷、行銷超前實際能力、系統建議與當地臨床實作脫節。Watson Health 2022 年被出售給 Francisco Partners，改名 Merative。

**Epic Sepsis Model。** Wong 等人 2021 年在 *JAMA Internal Medicine* 的外部驗證，在密西根大學醫療中心約 27,000 名病人測試，AUC 約 0.63，廠商宣稱的 0.76–0.83 完全沒重現；偵測到的 sepsis 多為臨床早已辨識的病例，alert fatigue 嚴重<sup>7</sup>。關鍵詞是 distribution shift，內部訓練資料與外部部署環境的差距足以讓商業 AI 效能崩盤。Zech 等人 2018 年在 *PLoS Medicine* 對肺炎 X 光 AI 的跨機構驗證是更早的經典案例<sup>8</sup>。

兩個案例合起來，AI 在臨床決策這層的失敗模式很穩定，包含訓練分布偏差、外部驗證不足、廠商行銷與真實能力的落差、黑箱導致的責任真空，反覆出現（這個列表唸出來像在背國高中歷史的「列強瓜分中國」，有點悲傷）。

這當然不代表所有臨床 AI 都會失敗。FDA 批准的窄任務系統（例如糖尿病視網膜病變的 IDx-DR）有自己的位置。但把「AI 能幫醫師做更聰明的臨床判斷」當成 AI Agent 的核心價值主張，就是把工具放錯位置。麻醉科尤其要把這條紅線畫清楚，包括術中血流動力的判讀、誘導劑量的微調、突發呼吸道困難的處置，是法律上、倫理上、實務上都不該外包的事。

那麼，AI Agent 在麻醉科可以動到的是什麼？

---

## 三、四類雜務，三條紅線

當前 LLM 與 Agent 能力配合各國監管現實，能落地且風險可控的醫療場景集中在幾個特徵，分別是結構化、可模板化、低決策權重、有明確人類校對節點。對麻醉科而言，符合特徵的雜務大致四類。進入細節之前要先講清楚三條紅線，這四類雜務不能用同一種方式處理。

### 三條紅線

**完全去識別化的草稿模板。** 醫師家己寫一份通用的「全身麻醉同意書術前說明」框架，丟給通用 LLM 修語氣、調順序，沒有具體病人資訊，PHI 紅線沒有被觸碰。

**醫院 IRB 核可的本地部署系統。** 例如院內導入的 ambient scribe，或經 BAA 簽署的企業級 LLM API（Anthropic Claude for Enterprise、OpenAI Enterprise 等）。在這個情境下處理可識別病人資料才合規<sup>9</sup>。

**個人生活管理。** 排班、家庭聯絡、進修排程、報稅，完全不涉及 PHI，用任何個人化工具都可以。

三層搞混代價很大。台灣《個資法》與衛福部食藥署的 AI 醫材軟體查驗登記指引對醫療 PHI 處理有明確要求<sup>10</sup>，美國 HIPAA Privacy Rule 在 45 CFR Part 164 規範了 BAA 條款<sup>11</sup>。一旦把含病人姓名、病歷號、生日、身份證、手術日期與診斷組合的資料丟進通用公有 LLM（例如沒有 enterprise 合約的 ChatGPT 個人帳號），就已經越線。下面四類雜務都會碰到「會不會誤踩」這個問題。

### 第一類，術前評估文書草擬

這層是麻醉科最日常的文書負擔之一。標準麻醉同意書、ASA physical status 風險說明、特殊族群（高齡、心血管、肝腎功能、預期困難氣道）的個別化條目，結構穩定、模板可複用，每個病人又需要小幅客製。

合理用法是醫師先建立去識別化的標準框架，由 Agent 草擬不同情境的版本，醫師簽核前做最後修訂。「Agent 起草、醫師簽核」可以；「Agent 直接給病人」絕對不行，因為後者牽涉法律責任歸屬、衛教正確性、病人理解確認，目前沒有任何台灣法規架構支持。

證據強度中等。Tierney 等人 2024 年於 *NEJM Catalyst* 記錄 Permanente Medical Group 在約一萬名醫師上部署 Abridge 與 DAX Copilot 的成果，醫師自陳 documentation time 顯著下降、burnout 量表分數改善<sup>12</sup>。但只能在嚴格範疇內援引，因為 Permanente 的部署條件包含 BAA 企業級 scribe、Epic 閉環工作流、醫師團體與保險方共擔治理、英語門診工作流。平移到「台灣麻醉醫師個人在手機上用 ChatGPT 草擬術前評估」，中間至少有規模、責任、PHI、語言、工作流五層落差。Permanente 最多能說明，合適條件下，ambient AI 對結構化文書有實效。

額外警示是 content drift。Liu 等人 2024 年在 ambient scribe 評估中提到，醫師對 AI 生成內容的修改率不足，會把錯誤鎖進病歷<sup>13</sup>。簽核如果只是橡皮圖章，這個模式就壞了（聽起來好像廢話 XD，但這事真的反覆出現）。

### 第二類，家屬說明腳本

麻醉科與家屬的溝通有兩個高密度時間點，包含術前風險告知與術後甦醒期衛教。資訊內容高度結構化，差異主要在病人風險特徵與家屬理解能力。AI Agent 在這層可以生成不同識讀程度的版本，例如對醫療背景家屬用較高密度的語言、對長輩用日常比喻、對焦慮型家屬調整語氣節奏。

PHI 紅線在這層比較容易守。腳本可以完全寫成「全身麻醉的常見風險」「半身麻醉後 24 小時內注意事項」這類通用內容，再由醫師依個案手動補上。一旦要客製到含特定病人名字、病歷號或手術細節，就要切到院內合規工具，或者老老實實手動處理。

### 第三類，隨身知識助手

這層處理麻醉科特有的知識更新負擔，包括藥物交互作用查詢、guideline 摘要、罕見併發症 SOP。麻醉藥理更新雖然不像腫瘤學劇烈，ASA、ESA、TSA 每年都有更新；麻醉科又常處理跨科病人，會碰到自己不熟的藥物。AI Agent 在這層的價值是檢索式的，把已知 guideline 與藥物資料庫做成 RAG 知識庫，由 Agent 做查詢與摘要的前置工作。

要警覺的失敗模式是 LLM 幻覺。Goodman 等人 2023 年在 *JAMA Network Open* 評估 GPT 系列在開放醫療問答上的表現，指出藥物互動、劑量問題上的幻覺出錯不可忽略；具體百分比依研究設計、模型版本、prompt 條件差異極大，給單一數字會誤導讀者<sup>14</sup>。這層必須走 RAG 而非單純詢問模型，因為 RAG 能讓來源固定、檢索可追、引用可核；沒有 RAG 接駁的問答，用藥場景上不能信任（這就跟住院醫師查 UpToDate 而不是憑印象開藥是同一個道理，只是現在多了一個會講人話的中間人）。

### 第四類，值班生活管理

這層完全不涉及 PHI，是 AI Agent 最容易上手、風險最低、最常被忽略的層次。排班整理、家庭聯絡模板（「今天要值班，請小孩晚餐自理」這種重複訊息）、CME 學分追蹤、報稅與保險理賠文件。每一件都不大，加起來在精神能量上是真實的拖累。

證據強度其實最弱，目前沒有 RCT 在量測「醫師使用個人 AI 工具是否改善 burnout」。能援引的是兩個側面證據。Maslach 與 Leiter 對 burnout 介入的核心觀點是「清空負荷與恢復時間」<sup>2</sup>。Scullin 等人 2018 年在 *Journal of Experimental Psychology: General* 的研究指出，把未完事項寫下來可以縮短入睡時間（健康成人樣本，非醫師樣本）<sup>15</sup>。兩個合起來能支撐「外部化未完事項對精神品質有幫助」這個方向，撐不起「使用個人 AI Agent 改善麻醉醫師 burnout」這個更強主張，這條因果鏈的限制留到文末「誠實邊界」一段一起講。

四類點完。AI Agent 在麻醉科的可外包面，集中在「結構化、可模板化、低決策權重、有明確人類校對節點」這條線內。越過這條線進入臨床判斷，就回到第二節那兩個翻車案例的範疇。一旦模糊，雜務外包的好處會被臨床決策外包的災難抵消（這個比喻可能 stretch 了，但讓我繼續）。

---

## 四、美國經驗的成功與限制

Permanente 研究是目前 ambient AI 在臨床端最強的單一證據，也最容易被過度外推。範疇限制要講清楚四層。

主要在門診端。麻醉科特有的工作流包含術前訪視、術中監測、術後 PACU 紀錄，沒有等規模證據。麻醉科有自己的 AIMS 系統，但「LLM 自動生成術後麻醉總結」還處於院內試點，缺 RCT 級資料。

自陳量表的因果鏈仍弱。documentation time 下降是客觀可測的，但「下降」到「burnout 改善」之間，還有 Hawthorne effect、新工具蜜月期、自陳偏誤等因素未被排除。要升級成「改善 burnout」需要更長期、更多控制條件的縱貫資料。

部署條件無法直接平移。Permanente 是美國最大的整合型醫療系統之一，醫師團體與保險端共擔治理；BAA、Epic 整合、IRB 核可、英語語料這些前提，台灣端目前沒有等價架構。把這份研究直接套到台灣，有點像把麥當勞的點餐機 SOP 整套搬到傳統市場的麵攤，前後流程根本不是同一個物種（遠目）。

最後，它能證明的範圍只到「結構化雜務可以被 AI scribe 切走」。延伸到「AI 可以取代醫師判斷」就是錯誤推論。Permanente 的研究本身對範疇有節制；問題出在外部援引時，論者經常省略這層節制，把「ambient scribe 改善文書」放大為「AI 改善醫療」。這層滑移在這份論述清單上排第一。

美國經驗的價值在於提供一個範疇清楚的成功樣本，亦即在合適的部署條件下，ambient AI 對結構化文書有實效。它不能被援引成「所以台灣麻醉醫師個人使用 ChatGPT 也會有效」。後者需要自己的證據基礎，目前沒有。

---

## 五、把 AI Agent 想成「個人交班員」

第三節第四類背後藏著一個更大的概念，那就是個人 AI Agent 在生活外部化這個位置上，能不能扮演「個人交班員」？這在這裡明確標示為比喻層級的修辭，不是實證主張。下文如果讀起來很像 RPG 設定，那是因為它本來就是一個角色比喻。

住院醫師之間的交班是一個有具體儀式的動作。值班醫師把今天還在進行的事、待追蹤的報告、需要 follow up 的指令逐項口頭交給接班的同事。接班的人接住，責任就轉移過去了。這個動作的精神作用超過資訊傳遞本身，它還承擔了責任暫時放下的功能；下班的人能下班，是因為有人接住了。

問題是，麻醉科醫師下班之後沒有人接住生活面的待辦。今天還沒整理的 CME 學分、明天要回家屬的訊息、後天的 TSA 年會論文摘要、下週的所得稅、每月小孩疫苗。這些東西沒有交班對象，就跟著醫師回家。

Maslach 與 Leiter 提醒 burnout 介入的核心是清空負荷與恢復時間<sup>2</sup>，Scullin 等人的睡前 to-do list 研究提供側面機制，把未完事項寫下來能縮短入睡時間<sup>15</sup>。個人 AI Agent 在「外部化未完事項」這個位置上，可以扮演弱意義的交班角色。你把今天還沒放下的事丟給它，它幫你整理、提醒、規劃明天，於是你才能下班。

這個比喻要附三個限制。Agent 沒有法律地位，這層交班只能處理生活面，臨床的責任主體永遠是有執照的人。Agent 容易引入 work creep，把更多事情丟給它，反而拉長「在工作」的總時數。這個概念也缺直接 RCT 驗證，能援引的證據都是側面的（這就是我前面說的，主張要按證據強度繳稅）。

值得問一個反事實。如果一個麻醉醫師完全不用 AI Agent，但醫院有強組織層面介入（值班減量、文書外包人力、合理人力配置），他的 burnout 會不會比一個有 Agent 卻沒組織介入的同事來得低？依 Maslach 框架推測，答案是肯定的。組織介入是 burnout 的本體解，個人工具是次要解。把 AI Agent 當成 burnout 的解藥會搞錯位階，它真正的角色，是個人在等不到組織解之前能做的精神損害控制。這個定位要寫清楚，否則整個論述會落入「給個人工具就能解決系統問題」的誤導，那是把皮克敏當成國軍在用。

---

## 六、雜務切走之後，照亮的是不能外包的部分

當 AI Agent 把四類結構化雜務切走，醫師的工作日剩下兩件不能外包的事，臨床判斷與情感勞動。

臨床判斷這層，前面用 Watson 與 Epic Sepsis 兩個案例論證過，AI 不能也不該承擔。情感勞動這層更尖銳。麻醉科醫師面對家屬的時間不長，密度卻極高，包含術前的不安、術後的擔心、極端情況下的告知壞消息。這些時刻需要在場、需要法律可承擔的人、需要醫師作為「能夠被看著眼睛說話」的對象。AI 在這個位置上幫不上忙，連扮演都不適合扮演。即使未來 LLM 真的達到 expert-level 臨床判斷（純假設），剩下的也不會只是情感勞動的殘餘；情感勞動的核心是承擔，承擔需要一個有名字、有執照、有責任的人。

於是會發生一件有點諷刺的事。雜務被切走之後，醫師原本以為自己會輕鬆，卻發現臨床判斷與情感勞動的精神密度反而更明顯，它們原本被埋在文書與雜事的噪音之下，現在被照得很亮。

這未必是壞事。它讓「為什麼累」終於有了具體答案。過去說自己累，外人聽起來像在抱怨工時。文書時間真的下降之後，醫師會發現累的根源從來與文書無關；耗損的是那些不能外包的時刻，那台血壓掉到 60 mmHg 的瞬間、那位家屬眼睛紅著問還有沒有希望的瞬間。這些時刻原本就在，只是被雜務的噪音蓋住了。

AI Agent 真正的價值可能就在這裡。它不會讓醫師重新成為人，醫師本來就是人。它能做的是把噪音切掉，讓醫師看清自己的精神能量花在哪裡。

最後留三個誠實邊界。台灣本地麻醉醫師個人使用 AI Agent 的量化資料缺乏，2025–2026 年 TSA 或衛福部如果有相關調查再回來補。麻醉科特有的 ambient scribe 同儕審查論文稀少，多數研究在門診端。PHI 在台灣本地（個資法加上衛福部 AI 醫材指引）的邊界，在「醫師個人助手」這個場景尚未被充分測試，相關監理討論可能要到 2026–2028 才逐步成形。整篇文章從第二節起多處限定語都是踩著這層缺口走的，跌跌撞撞地寫，已經是目前能誠實做到的版本。

AI Agent 切不掉那台 60 mmHg 的血壓，也接不住那位家屬紅著的眼睛。它如果能把噪音切走，讓醫師知道自己累的是這兩件事，而知道之後還剩一點力氣去面對它們，那就夠了。

純以誌之，下班後這篇就是個人交班。

---

## 參考資料

1. Epstein RM. (1999). "Mindful Practice." *JAMA*, 282(9): 833–839. 醫師「身分難以下班」的精神負荷概念性框架。
2. Maslach C. & Leiter MP. (2016). "Understanding the burnout experience: recent research and its implications for psychiatry." *World Psychiatry*, 15(2): 103–111. burnout 三維模型；burnout 介入的核心是清空負荷與恢復時間，組織介入優於個人韌性訓練。
3. Sun H., Warner DO., Macario A., et al. (2019). "Repeated Cross-Sectional Surveys of Burnout, Distress, and Depression among Anesthesiology Residents and First-Year Graduates." *Anesthesiology*, 131(3): 668–677. 美國麻醉住院醫師 burnout 盛行率長期高於整體醫師平均；主要 stressor 為 workload 與 lack of control。
4. De Hert S. (2020). "Burnout in Anesthesiology: A Call to Action." *Local and Regional Anesthesia*, 13: 171–183. 系統性綜述；on-call、production pressure、文書是麻醉科三大壓力源。
5. 台灣麻醉醫學會（TSA）公開聲明與年會主題（2022–2024）；衛生福利部醫事司「專科醫師人力供需分析」歷年報告。麻醉科長期被列為人力相對不足的專科。具體百分比與健保麻醉給付近五年變動數據暫無公開時序資料可單一引用，待查核。
6. Strickland E. (2019). "How IBM Watson Overpromised and Underdelivered on AI Health Care." *IEEE Spectrum*；Ross C. & Swetlitz I. (2018). "IBM's Watson supercomputer recommended 'unsafe and incorrect' cancer treatments, internal documents show." *STAT News*. Watson for Oncology 在 MD Anderson、Memorial Sloan Kettering 等的失敗紀錄。
7. Wong A., Otles E., Donnelly JP., et al. (2021). "External Validation of a Widely Implemented Proprietary Sepsis Prediction Model in Hospitalized Patients." *JAMA Internal Medicine*, 181(8): 1065–1070. 密西根大學醫療中心約 27,000 病人外部驗證 AUC ≈ 0.63；alert fatigue 嚴重。
8. Zech JR., Badgeley MA., Liu M., et al. (2018). "Variable generalization performance of a deep learning model to detect pneumonia in chest radiographs: A cross-sectional study." *PLoS Medicine*, 15(11): e1002683. 醫療影像 AI 在跨機構資料 performance drop 顯著，distribution shift 經典案例。
9. Anthropic "Claude for Enterprise" / "Trust Center"；OpenAI Enterprise / API HIPAA compliance 頁面。處理 PHI 需 BAA。
10. 中華民國《個人資料保護法》（最新修正版，全國法規資料庫）；衛生福利部食品藥物管理署「人工智慧／機器學習技術之醫療器材軟體（AI/ML-based SaMD）查驗登記指引」。
11. 美國 HIPAA Privacy Rule, 45 CFR Part 164. Business Associate Agreement 條款。
12. Tierney AA., Gayre G., Hoberman B., et al. (2024). "Ambient Artificial Intelligence Scribes to Alleviate the Burden of Clinical Documentation." *NEJM Catalyst Innovations in Care Delivery*. Permanente Medical Group 在約一萬名醫師上部署 Abridge / DAX Copilot；醫師自陳 documentation time 下降、burnout 自陳量表改善。範疇限制：主要為門診端、英語語料、BAA + Epic 整合的部署條件。
13. Liu SS., et al. (2024). 多篇 ambient scribe 評估文獻指出醫師對 AI 生成內容修改率不足，產生 content drift（錯誤被鎖進病歷）。具代表性者包括 *JAMA Network Open* 與 *NEJM Catalyst* 上的 ambient scribe 部署評估系列文章。具體個別文章引用待查核。
14. Goodman RS., Patrinely JR., Stone CA., et al. (2023). "Accuracy and Reliability of Chatbot Responses to Physician Questions." *JAMA Network Open*, 6(10): e2336483. GPT 系列在開放醫療問答上的幻覺出錯率不可忽略；具體百分比依任務、模型、prompt 條件差異極大，不適合給單一數字。
15. Scullin MK., Krueger ML., Ballard HK., et al. (2018). "The Effects of Bedtime Writing on Difficulty Falling Asleep: A Polysomnographic Study Comparing To-Do Lists and Completed Activity Lists." *Journal of Experimental Psychology: General*, 147(1): 139–146. 把未完事項寫下來能縮短入睡時間。健康成人樣本，非醫師樣本。
