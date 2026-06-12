---
title: "蓋吉斯之戒的市場定價：Zcash Orchard 漏洞與「增發多少」的道德量尺"
description: "Zcash 2026 年 6 月披露 Orchard 屏蔽池潛伏四年的偽造漏洞，市場替「無法證明池內存糧是否被動過」即時定價、ZEC 暴跌近五成。本文以蓋吉斯之戒思想實驗為主軸，論證「增發多少」這把道德量尺零點量決策規則、零點以上量傷害規模，中途換了單位。它量得到對非人格化信任的正直，量不到完整人格，最終真正在量的是制度，穩態量制度、窗口量人。"
pubDate: 2026-06-12
tags: ["密碼貨幣治理", "政治哲學", "機制設計", "Zcash", "資訊揭露倫理"]
category: "政治哲學"
lang: "zh-TW"
aiModel: "Claude Opus 4.8"
aiPrompt: "當一個價值系統的正當性建立在『無人能私自增發』的假設上，而這個假設被證明四年內不可驗證時（Zcash Orchard 2022-2026），『一個人會私自增發多少』能否作為道德量尺？這把尺量的是品格還是傷害規模？制度設計應如何讓這把尺失去用武之地？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-06-12-zcash-gyges-moral-yardstick"
aiGeneratedDate: 2026-06-12
humanReviewed: false
---

## 一枚被市場標了價的戒指

柏拉圖在《理想國》第二卷借 Glaucon 之口丟出一個至今沒被馴服的問題。牧人蓋吉斯撿到一枚能讓自己隱形的戒指，從此可以為所欲為而不被任何人察覺。Glaucon 要問的不是蓋吉斯做了什麼，他問的更尖銳：若把名聲、報酬、懲罰全部剝除，正義是否還值得選？他甚至斷言，凡是「非神性格」的人，戴上這枚戒指終將屈服於誘惑<sup>1</sup><sup>2</sup><sup>4</sup>。

兩千四百年來，這枚戒指只能當哲學家的思想道具。現實裡沒有真正完美、永久、無痕的隱形。

2026 年 6 月，它第一次接近被造出來，並且被市場即時標了價。

Zcash 是一條主打「可驗證稀缺」的隱私公鏈，整套價值論述建立在一個構成性承諾上：總量受 21M 上限約束，沒有人能私自增發。2026-06-05，受 Shielded Labs 委託的安全研究者 Taylor Hornby 公開披露，Orchard 屏蔽池自 2022 年 5 月啟用起，電路裡就帶著一個 under-constrained 的橢圓曲線乘法 gadget 缺陷，理論上允許不被察覺地偽造 ZEC。這個缺陷潛伏了四年<sup>14</sup><sup>15</sup><sup>23</sup>。

官方的措辭極其精確：沒有證據顯示漏洞曾被利用，但因為 Orchard 的隱私性質，密碼學上無從證明它沒被利用<sup>23</sup><sup>34</sup>。Grayscale 的 Craig Salm 補了一句業界判斷，被利用「seems unlikely」，但他同樣無法把機率講到零<sup>15</sup>。

披露當天 ZEC 單日跌約 38%，把窗口拉到 48 小時看，最深下挫近五成（依 BitMEX 的事後覆盤，價格從 6 月 4 日修補後反彈的 $624 高點墜到 $303 一帶）<sup>30</sup><sup>32</sup><sup>35</sup>。最重要的機構背書者 Arthur Hayes 清倉全部持倉。他明說自己認定被偷的機率極低，清倉的理由是另一回事：「無法以密碼學證明它不可能（cannot be cryptographically proven impossible）」，而「隱私敘事要求的是完美（perfection），不是『大概沒事（probably fine）』」<sup>31</sup><sup>36</sup>。

這篇文章想處理的問題，比 Zcash 的盤勢遠為古老。當一個價值系統的正當性建立在「無人能私自增發」這個假設上，而這個假設被證明四年內不可驗證時，「一個人會私自增發多少」能不能拿來當道德量尺？這把尺量的是品格，還是傷害規模？而制度設計又該如何讓這把尺失去用武之地？

我會先把哲學討論的骨架立起來（四種選擇、被遺漏的選項零、量尺中途換了單位），再用 Zcash 2026 這個實證錨點貫穿全程。先把結論放在桌面上：這把尺有效，但它中途換了單位；它量得到的是「對非人格化信任的正直」，量不到完整人格；而它最終真正在量的，是制度。

## 把問題改寫：從「會不會」到「會多少」

原始的蓋吉斯之問是「你會不會拿來增發、佔為己用」。但這樣問對人性太樂觀。更有診斷力的改寫是把它連續化，在「無論增發多少都絕不會被發現」的前提下，你會增發多少（以美金計）、又會如何使用？由此展開四種選擇，依序是完全不增發、增發一點點而不危害生態系、增發到逼近總量上限、增發到遠超上限。

這個量化轉向有它的道理。它符合經濟學「顯示性偏好」的邏輯，把選擇當成偏好的讀數，而非聽人怎麼說<sup>10</sup>；它也接住了一個樸素卻牢固的直覺，認為規模本身具有道德意義。

但往下走之前，有一個前置釐清得先擺正。「無人能察覺」消除的是懲罰與信任崩解這類**後果**，它消除不了**傷害**。增發從來不創造任何新財富，它只是一筆移轉。貨幣經濟學把這件事寫成一條嚴格的會計恆等式：印鈔不生產任何真實資源，鑄幣稅（seigniorage）的收益必然等於其他持幣者購買力的折損，這就是通膨稅的歸宿（inflation tax incidence）<sup>21</sup><sup>33</sup>。被增發稀釋掉的價值，分文不少地等於增發者拿走的價值。隱形戒指改變的是「誰被認定拿走了它」，改變不了借貸雙方的總額。

這條恆等式在 Zcash 身上有一個工程化的對應物，後面會看到它如何把整個思想實驗收緊。

## 四種選擇，與選單漏掉的那一個

### 選擇一：不增發，內部其實藏著三種不同的人

「完全不增發」這個讀數是零，但生成這個零的動機結構至少有三種，彼此道德含義天差地別。

第一種是**原則型**。依康德的普遍化公式，「在我認為正當時偷偷增發」這條格律無法被普遍化，一旦人人如此，「無人能增發」這條構成性規則自我瓦解；而把全體持幣者的購買力折損拿來替自己融資，又違反了「人是目的而非僅僅手段」<sup>53</sup><sup>11</sup>。

第二種是**自我同一型**。這正是柏拉圖對 Glaucon 的回答：不義在行為者內部製造失序，與外界是否察覺無關<sup>4</sup>。他在《理想國》第十卷先在後果全被剝離下證明正義本身為善，之後才把名聲與神人報酬「還給」正義，這個兩段式安排本身就承認了後果軸與見證軸是兩條軸<sup>3</sup>。東方文本給了更精準的版本，待會細談。

第三種是**審慎懷疑型**。他不增發，只是因為不相信「永遠無人能察覺」這張支票能兌現。

第三種人在 Zcash 的技術史裡找到了最完整的辯護。Zcash 的可驗證性從來不是一蹴可幾：2016 年的 trusted setup 仰賴六人三大洲的儀式，靠「至少一人誠實銷毀有毒廢料」這個假設兜底<sup>54</sup><sup>55</sup>；2019 年 Sapling 的 BCTV14 漏洞，本身就是一次「四年前的證明系統允許無限偽造」<sup>8</sup><sup>50</sup>；turnstile 共識規則在 2019 年上線稽核；Halo 在 2022 年移除了 trusted setup<sup>9</sup><sup>43</sup>。對讀過這段歷史的人來說，「無人能察覺」永遠只是「目前無人能察覺」。

三種人讀數都是零，道德結構卻完全不同。這是量尺的第一道裂縫：同一個輸出，對應著三條不可通約的決策規則。

### 慎獨：戒指清得空房間，刪不掉「己所獨知」

把「自我同一型」講到底，得回到一個常被誤讀的中文概念。《大學》誠意章說「所謂誠其意者，毋自欺也」「此謂誠於中，形於外，故君子必慎其獨也」；《中庸》首章說「莫見乎隱，莫顯乎微，故君子慎其獨也」<sup>5</sup><sup>6</sup>。

通行的理解把「慎獨」讀成「在獨處的房間裡也要謹慎」。但出土文獻的訓詁研究指出，這個「獨」在郭店楚簡與帛書《五行》的脈絡裡，原義指向「未發之中、內心之誠」，而非通常理解的「獨處的空間」。鄭玄訓為「獨處時的行為」其實偏離了原義，朱熹把「獨」詮釋為「人所不知而己所獨知之地」，補回了那個內在通道<sup>7</sup><sup>56</sup><sup>57</sup>。

這個區分對蓋吉斯是決定性的。隱形戒指能讓房間空無一人，那只是後果軸的缺席；它刪不掉「己所獨知」，那是一個在構成上無法對外關閉的自我知識通道。內部見證者從來不是「可能在場的旁人」這種東西，它是那個無法登出的自我。慎獨於是不是一句道德訓誡，它是對「不可察覺」這個算子射程的精確界定：這個算子只作用在後果軸上，它碰不到傷害軸（守恆律保護），也碰不到見證軸（己獨知）。

這裡需要一個誠實的限定。把見證軸說成「不義者靈魂必然失序、因而不幸福」，是一個經驗心理預測，而當代道德心理學的「道德許可效應」與自我合理化研究，恰恰質疑人類是否真的會因不義而睡不安穩，人極善於把不義重述為正當<sup>58</sup><sup>59</sup>。這些證據本身也是雙面的：同一批文獻指出該效應被發表偏誤誇大、且「被觀察」會抑制它<sup>59</sup>，而「己獨知」恰恰是一種無法關閉的自我觀察。穩妥的做法是把主張從「必然失序」撤回到「己獨知這個通道在構成上無法被外部隱形關閉」，這是規範結構層的主張，不是心理因果的預測。撤退是真的撤退，主張的射程因此縮小，但留下來的部分更穩。

### 選項零：選單本身漏了一格

四種選擇有一個共同的隱藏預設：能力可以安靜地存在。但構成性規則的分析顯示這個預設站不住。Rawls 區分了規約性規則與構成性規則，Searle 把後者寫成「X 在脈絡 C 中算作 Y」，並論證制度事實（包括貨幣）依賴集體接受<sup>12</sup><sup>13</sup>。「無人能增發」不是一條外加在 Zcash 上的規約，它是定義「這些單位算作有價值的貨幣」的構成條件。於是，持有「可不可察覺地增發」這個能力，本身就已經讓「X 算作 Y」的條件為假，立國假設在能力存在的那一刻就不成立了。

所以選單裡漏了「選項零」：揭露並銷毀能力。

它的義務基礎是構成性的，而非單純的「不對個人說謊」。倫理學嚴格區分「披露義務」與「不說謊義務」<sup>17</sup>。一個發現自己有能力卻從不使用的人，確實沒有主動斷言任何假命題。但在「系統正當性公開地、構成性地建立在『無人能增發』之上」這個語境裡，沉默不是中性的，它讓整個社群繼續相信一個持有者明知為假的立國命題，並據此定價、交易、信任。這落在「默許的不實陳述」一側。邊界也要說清楚：若一個系統從未公開承諾「無人能增發」，選項零的義務就消解了，它的根據是制度的公開承諾，不是能力本身。

而選項零不是道德高調，它在資安領域早已是一套有國際標準的工序。ISO/IEC 29147 規定如何接收與回應漏洞報告，ISO/IEC 30111 規定內部如何驗證、排序、修補<sup>24</sup>，CERT/CC 的指南把整個生命週期拆成發現、報告、驗證、修補、披露五個相位<sup>20</sup><sup>37</sup><sup>38</sup><sup>40</sup>。而當持有能力的是一個多方治理結構，FIRST 的多方協同披露指引正好接手「集體蓋吉斯」該如何協調揭露<sup>25</sup>。

Hornby 的處置正是這套工序被執行的樣子。他在 2026-05-29 發現漏洞當晚就向 ZODL 核心工程師負責任披露，Daira-Emma Hopwood、Kris Nuttycombe、Jack Grigg 數小時內確認，6 月 1 日緊急修補，6 月 5 日才公開<sup>23</sup><sup>30</sup><sup>44</sup>。「揭露並銷毀能力」這個道德直覺，被翻譯成了 RFC 級的可重複流程。

### 選擇二、三、四：滑坡、寄生與前提自毀

剩下三種選擇各自暴露量尺的問題。

「增發一點點而不危害生態系」聽起來最溫和，卻最不穩。它依賴一個感知閾值的幻覺，而連續性會反咬它一口。sorites 悖論證明，如果「每多增發一單位都不構成從可接受到不可接受的質變」，連續歸納會一路推到「增發到上限也可接受」的荒謬<sup>60</sup>。連續軸上根本找不到一個有原則的停損點。經驗上它也不是穩定均衡：挪用公款的研究顯示「合理化先於犯行」，而行為一旦開始就傾向升級<sup>61</sup><sup>62</sup>。FTX 是這條路的終局對照。SBF 透過會計後門讓 Alameda 借用客戶資產（實質就是增發無擔保的帳面餘額），靜默運行到流動性枯竭才被迫曝光，John Ray 接手後稱之為他職業生涯中從未見過的徹底失控<sup>63</sup>。

「增發到逼近上限」是理性寄生者。他要的是最大化抽取，同時讓宿主勉強活著。他和「增發一點點」之間究竟是程度差還是類別差，正是量尺必須回答的問題。

「增發到遠超上限」則會自毀前提。價格本身就是一條偵測通道，一旦增發大到衝擊幣價，「無人能察覺」就降格為「無法歸因於我」。Zcash 的工程結構把這件事坐得更實，後面會看到，turnstile 讓大規模盜竊在聚合層幾乎無所遁形。若一個人明知會被察覺仍選擇遠超上限，他的動機已經越出竊取，落到毀滅或支配那一邊，這時量尺發生了範疇錯誤，因為攻擊者根本不在「竊賊」這個座標系裡。

## 池內隱形，但有一道全體共同的出口配額

到這裡，思想實驗與 Zcash 實案之間有一道必須誠實面對的落差。蓋吉斯之戒是完美、永久、無痕的隱形；Orchard 漏洞不是。

文獻檢索把「完美蓋吉斯情境」這個前提證偽了一半。而這個證偽是禮物不是損失，它讓 Zcash 案比理想化的思想實驗更有哲學張力。思想實驗本就可能「inherently conservative」、容易把既有偏見當成直覺，把實案的工程細節補回去，恰好替它劃出可靠性邊界<sup>22</sup>。

關鍵在於可察覺性必須切成三層。Zcash 的 turnstile 機制（ZIP-209，2019 年為防範 BCTV14 類漏洞而引入的共識規則）規定，任何使某個屏蔽池餘額變負的區塊都會被共識拒絕<sup>41</sup><sup>47</sup>。漏洞本身則落在 Orchard 協議規範（ZIP-224）所定義的 action 電路與 note commitment 邏輯裡<sup>42</sup>。於是：

| 層級 | 可察覺性 | 機制 |
|---|---|---|
| 網路總供給（所有池之和 vs 發行排程） | 可察覺 | turnstile 拒絕負餘額區塊，總量受 21M 上限與發行曲線約束 |
| 跨池邊界（離開 Orchard 池的總額） | 可察覺（聚合層） | 能離開某池的總額不超過曾進入該池的總額，偽造幣無法淨流出而不被拒絕 |
| 屏蔽池內部（誰持有多少、誰偷了誰） | 不可察覺 | 隱私性質隱藏內部餘額，偽造一張 note 或竊取池內他人存款在池內完全不可見 |

所以 Orchard 漏洞的真實威脅落在「在池內竊取其他存款人的份額」這一層，而非「對網路無限增發」。官方定性精確區分了這一點：漏洞可能允許 Orchard 池內的雙花，但沒有能力膨脹 ZEC 總供給，後者受 turnstile 保護<sup>44</sup>。攻擊者偽造的每一枚 ZEC，都必須擠在「全池曾經存入的真實總額」這個天花板底下出池，於是每一筆成功的偽造出池，數學上都對應到某個誠實存款人未來無法全額提領。

換成糧倉的比喻最清楚。蓋吉斯戴上戒指偷走的是城邦糧倉裡定量的存糧，並非憑空之物。偷越多，越多人到糧倉時會發現自己的份額不翼而飛，但在他們各自走到糧倉之前，沒有人能指認是誰偷的，甚至沒有人能確認被偷過。這枚戒指的精確刻畫是「隱形但受全體共同承擔的出口配額約束」，並非「隱形且無限」。市場定價的對象因此被精確化了，它定的是「四年內無人能證明池內存糧是否被動過」這個狀態的價，而非「一枚無限隱形的戒指」。

這個工程事實還把「不可察覺性是會復發的工程屬性」坐成了歸納證據。BCTV14（2018/19）與 Orchard（2022/26）是同一種 soundness 失效在兩套完全不同證明系統裡的結構性重複，都潛伏多年、都由刻意的審查而非攻擊暴露、披露時都「無證據被利用但無法用密碼學證明沒有」<sup>8</sup><sup>23</sup>。Halo 在 2022 年消滅了 trusted setup 那一類戒指，Orchard 又長出了電路 bug 這一類，Ironwood 預計在 7 月再消滅之<sup>43</sup><sup>49</sup>。蓋吉斯問題不是被一次解決的，它是被一代代工程連續逼退的。

至於「四年裡到底有沒有人偷過」，鏈上統計只能給機率答案。屏蔽 ZEC 在 Orchard 時代成長約八倍、達約 5M 的歷史高，池子在被提領而非膨脹的相反方向；總發行約 16.75M、符合排程、遠低於上限；關鍵可利用窗口（5/28–6/2）每日淨流入僅約 11,000 ZEC<sup>46</sup>。這些足以排除大規模盜竊，卻排除不掉一個拉出 5–10 萬 ZEC、分散數日、藏在約 25,000 ZEC 日常波動底下的耐心小偷；而未出池的偽造幣則永久不可偵測<sup>46</sup>。真正的蓋吉斯讀數（偵測機率為零時的選擇）在池內原理上不可觀測。鏈上數據證實了這個哲學結論，而不是推翻它。

## 量尺中途換了單位

現在可以正面處理量尺本身。義務論會說，唯一的道德跳變發生在 0→ε，從「函數從未越界」到「函數已越界，只是輸出小」<sup>64</sup>；後果論會說，傷害與數額成正比，整段連續、沒有自然門檻<sup>65</sup>。多數人的直覺是兩者的混合。問題出在這個混合掩蓋了一件事：這把尺在不同區段量的根本不是同一個物理量。

更精確的講法是，同一台儀器零下量溫度、零上量重量。零點量的是決策規則是否生成「不踰越」這個輸出，那是一個關於函數的二值判斷，對應義務論的 perfect duty 違反與否；零點以上量的是函數一旦越界後產出的後果規模，那是一個連續標量，對應後果論的程度排序。這一步換掉的是被測量本身，不是攝氏換華氏那種換刻度。

由此推出一個分界。行為比較是合法的（零上的傷害規模可以排序），品格比較是不合法的（不能用零上的讀數反推品格），因為品格住在生成讀數的函數裡，不住在讀數裡。這正是 moral luck 文獻的警告：結果受運氣污染，control principle 要求我們只評價可控的那部分<sup>19</sup>。

這裡有一個容易被錯放立場的細節：sorites 的連續性其實站在義務論這一側，是它最漂亮的盟友。後果論用連續性主張「沒有自然門檻」；但 sorites 證明，正因為連續軸上找不到任何非武斷的停損點，所以如果要有一個門檻，它只能落在零點（規則層），而不能落在某個 ε（後果層）<sup>60</sup><sup>65</sup>。後果論的連續性不是對「零點特殊」的反駁，它反而逼出了這個結論。零上並沒有第二個質變門檻；真正換量綱的地方，就落在零點本身。

接著是更深的一層。「能輕易從行為判讀品格」這句話太樂觀了。顯示性偏好假設「選擇等於偏好」<sup>10</sup>，但「不增發」這個讀數至少有三個生成源：正直、風險趨避、缺乏機會。展望理論告訴我們，損失帶來的痛約是同等收益的兩倍，所以「不動手」很可能只是對「被抓」這個小機率大損失的標準反應，而不是品格<sup>16</sup>。三者讀數都是零，品格結構迥異。

於是真正的蓋吉斯讀數（偵測機率嚴格為零下的選擇）在原理上不可觀測。一旦偵測機率真為零，所有可觀測的行為都來自偵測機率大於零的世界，與目標分布系統性錯配。這不是可以靠加大樣本去除的雜訊，這是識別不足（under-identification）。Zcash 的市場恰好把這件事演成了現實：市場連讀數都讀不到（沒人知道有沒有人偷），它只能替「規則是否可信」標價。

把問題改成動態版本會更有診斷力：第一次之後，什麼擋住第二次？挪用公款的升級曲線（合理化先於犯行、月損失隨時間上升）支持「動態問法比靜態快照更有診斷力」這個方法論主張<sup>62</sup><sup>27</sup>。但這裡必須踩一道剎車。ACFE 的升級曲線是「已被偵測」的樣本，它描述的是那些最終敗露的案子如何升級，而不是所有越界者中有多少比例會升級，擋住了第二次的人根本不在樣本裡。從群體升級曲線推到「這個人選二必滑向三」，是 Robinson 意義上的生態謬誤<sup>66</sup>。動態版本能描述滑坡的形狀，量不到滑坡的機率。

### 一段必要的反身性

談「用行為量誠實」時，有一個讓人不舒服的事實必須擺到前景：量誠實的工具，正被工具製造者的不誠實污染。

研究「誠實」的明星學者親手偽造了數據。Dan Ariely 的 2012 年保險里程表實驗數據造假、2021 年 PNAS 撤稿，Francesca Gino 多篇論文撤稿、2025 年被哈佛撤銷終身職<sup>67</sup><sup>68</sup>。更直接的是，被廣泛引用的 Mazar-Amir-Ariely(2008) 自我概念維持理論，其 Experiment 1 在 25 場直接重複的註冊報告（Verschuere et al. 2018）中得到了方向相反的微小效應<sup>69</sup><sup>70</sup>。所以這裡每引用一條行為倫理學的讀數，都得同段標注它的複製狀況，否則就是用一把自身校準存疑的尺去校準別人的尺。

這層反身性本身就是一個蓋吉斯讀數：一群擁有「學術不可察覺性」近似戒指的人，在低偵測機率下交出的行為讀數。它同時是方法論的誠實，也是這篇文章對自己的慎獨。

### 三項校準

量尺有效，但要校準三件事，才不會把它誤用。

**其一，歸一化。** 用美金絕對值會混淆財富水位與品格。富人增發 100 萬（其財富的萬分之一）與窮人增發 100 萬（其畢生不可得），讀數相同卻不可比。應以「改變一生的金額」為單位。代價要誠實說：這犧牲了跨人的絕對排序。但被犧牲的可比性本來就是假的，歸一化後得到的是結構可比而非標量可比，這把尺從橫向排名工具降級為縱向自我診斷工具，而這恰好與「真正的蓋吉斯讀數不可觀測、本就不該拿來做人際排名」的結論一致。

**其二，用途第二軸。**「為善而增發」不能折疊進單一的傷害軸，它仍然是一筆未經同意的隱形課稅，外加一層自利偏誤。康德的兩條公式已經把這條路封死：自定義的「正當時刻」無法普遍化，而用全體持幣者的折損替自己的善舉融資，是把他們僅當手段<sup>53</sup><sup>11</sup>。

**其三，動態版本取代靜態快照。** 問「第一次之後什麼擋住第二次」，比問「這一次會增發多少」更有診斷力，只是它繼承了前述的不可觀測性，能描述滑坡形狀，量不到滑坡機率。

校準之後，這把尺量的是「對非人格化信任的正直」，現代社會真正稀缺、真正承重的一種公共德性，但它不是全人格量尺。

## 市場替不可證偽的懷疑定了價

回到 Zcash 的盤面。把哲學結論落到實證上，需要先回答一個方法論問題：6 月 5 日的暴跌，有多少是 Zcash 自己的事，有多少只是大盤拖累？

那一天確實有宏觀衝擊。美國 5 月非農新增 172,000（預期僅 85,000），降息預期翻轉，Nasdaq 100 單日跌 5%，BTC 跌破 $60,000、全市場 24 小時清算逾 17 億美元<sup>28</sup><sup>29</sup>。在這個 risk-off 背景下，BTC 當日跌約 7%，而最接近的隱私幣對照組 XMR（門羅）該週跌約 14%，且其跌因被獨立歸為宏觀與監管逆風、而非 Zcash 傳染<sup>29</sup><sup>52</sup>。ZEC 卻跌了約 50%。

把整個 risk-off beta 用 XMR 估算扣掉之後，ZEC 仍剩下約 35 到 40 個百分點的特異性下跌，無法用大盤解釋。這裡要把估算的性質講清楚：這個數字來自 beta 扣除的定性分離，不是一場正式的 CAPM 事件研究，精確分解仍待逐筆清算數據與帶信賴區間的 abnormal return 估計。但方向是穩的，BitMEX 自家的覆盤也下了同樣結論，稱這次衝擊是 Zcash 特異的，而非全行業傳染<sup>32</sup>；競品分析也指出隱私協議的漏洞沒有正向外溢，別的隱私幣不會因 ZEC 出事而受惠<sup>51</sup>。所以「特異性下跌存在」這一步，歸因強度是高的。

這段特異性下跌的內容是什麼？三方證據收斂指向「供給可信度折價」。第一手定價者 Hayes 親口給出的論證結構落在「無法以密碼學證明沒被偷，而我的敘事要求完美」，他明確排除了「我認為被偷了」這個版本<sup>31</sup><sup>32</sup>；分析師一致把跌勢歸給「不確定性本身」這一項、刻意撇開漏洞本身<sup>71</sup>；官方則把「無證據被利用、但因隱私特性密碼學上無從確定」直接寫進披露文<sup>23</sup><sup>34</sup>。三者都是定價端的直接陳述，不是替散戶讀心。所以「市場在替供給承諾的可信度折價」這個詮釋，強度是中高的。

最鋒利的證據來自兩個天然對照組。

其一是跨期。2019 年披露的 BCTV14 也是一個無限偽造漏洞，但披露時 ZEC 市場反應溫和、未見恐慌<sup>50</sup><sup>39</sup>。兩次漏洞種類其實相同（都是無限偽造），分水嶺落在披露時不確定性是否已被封閉。2019 年修補到披露隔了 122 天、官方已監測 Sprout 池總量確認無偽造足跡；2026 年只隔了 4 天、且 Orchard 是隱私池、無從事後監測<sup>8</sup><sup>23</sup>。

其二是同期。2026 年 3 月 Sprout 池也爆過一個漏洞，但 Sprout 較透明、可在帳本追蹤，市場把它當成有界的歷史事件，ZEC 反而回升約 10%<sup>32</sup>。同樣是漏洞，透明的可定價、不透明的崩盤。被定價的是「不確定性的開放性」，不是漏洞本身。

至於「這是蓋吉斯之戒第一次被市場即時定價」，這句強斷言必須降級。市場當然不是在讀柏拉圖，它在替一個結構同構於蓋吉斯情境的事實狀態（能力曾存在、行使與否原理上不可驗證）標價。穩妥的說法是：這是**已知最乾淨的一次**「對一個受約束供給系統、在無任何被盜證據、純粹因『無法證明沒被盜』而發生的價格重定價」。把這個價格讀數再上推到「社會信任」，是分析者的層級轉換，必須明示，不能假裝市場價格直接等於集體信念。

最後一個對照，回頭給選項零一個純市場的論證。Bitcoin 的 21M 上限靠「可驗證的不可能」承重，數千節點獨立驗證、改規則在經濟上幾近不可能<sup>48</sup>；法幣的鑄幣權則靠另一條路承重，央行天天增發，靠的是問責：央行獨立性、通膨目標、透明，把「會不會濫發」綁成可監督的承諾<sup>72</sup><sup>73</sup>。Zcash 走的是密碼學那條路，它沒有可問責的發行人。當披露證明這條路在過去四年原理上失效、且無從事後驗證，承諾的可信度就落入真空。

市場替這個真空定價，下挫；又在 6 月 12 日自低點回升約 85%，時間上對齊 Ironwood 計畫定案<sup>35</sup><sup>45</sup>。市場一邊替不可證偽性折價、一邊替「重新變得可驗證」的路徑圖溢價，兩個方向都指向同一個標的：供給承諾的可信度。

這也照出 FTX 那條反事實的終點。披露的 50% 折價是可回升的（85% 已經回來），隱瞞被揭穿的折價可能不可回升。前者折的是技術不確定性，可由 Ironwood 修；後者折的是發行方誠信，沒有 turnstile 可修。隱瞞不是消除戒指，它只是把折價從「可修的技術項」遞延、並轉換成「不可修的誠信項」。選項零於是不只是倫理義務，也是市場上的最優策略。

## 量尺最終量的是制度：穩態量制度，窗口量人

如果這把尺量得到的是「對非人格化信任的正直」，那麼一個好制度的工作，就是讓這個讀數盡量不必被依賴。蓋吉斯思想實驗的正確結論，是用「多大程度上不需要這道假想題答得漂亮」替制度分級，而非用假想增發額替人類分級。

「替制度分級」有明確的可操作意義。一個系統的制度等級，等於它把蓋吉斯困境工程掉的程度：選項零是否已流程化（CVD 是否就緒）、靜默窗口是否壓到最短、剩餘那些無法靠披露銷毀的戒指（管理金鑰、trusted setup、稽核者的特權視角）是否被分權且可驗證。

這背後是三條共用的設計邏輯。可驗證性把「沒有任何個人持有可偽造的祕密」從信任假設變成數學事實（Halo 移除 trusted setup）<sup>9</sup><sup>43</sup>；分權把「一個人就能動用金鑰」設計成不可能（門限簽章、分散式金鑰生成、NIST 的 split knowledge 與 dual control）<sup>74</sup><sup>75</sup><sup>76</sup>；資訊隔離牆把「同時握有內線資訊與交易權」的人結構性拆開<sup>77</sup>。

這背後正是 Hume 那句著名的原則，設計制度時應假設每個人都是無賴，用利益的對沖讓公開行為的結果如同他們沒有惡念<sup>78</sup>。它幾乎是 Kant「即使是魔鬼民族，只要有理智也能建國」的逐字回響<sup>18</sup>。North 把它一般化：好制度降低交易成本、減少對交易對手善意的依賴<sup>79</sup>。

但這裡必須加一個時間下標，否則就會把穩態的結論誤用到窗口期。

「制度讓道德讀數不重要」這句話只在**穩態**成立，也就是 turnstile 已部署、Halo 已涵蓋、bounty 已運轉的時候。在**窗口期**，漏洞潛伏、升級之間、新驗證空隙打開的時候，它是假的，而且此時道德讀數反而是唯一可用的資訊。

Orchard 的四年窗口就是窗口期的極端樣本。那四年裡 turnstile 不涵蓋 Orchard 電路的這兩處邏輯，沒有任何可驗證機制能偵測偽造，Zcash 是一枚貨真價實的蓋吉斯之戒，戴在所有能讀懂 Orchard 電路的人手上。而把戒指摘下來的不是制度，是 Hornby 個人。在面對灰市對「完整鏈、零點擊」級漏洞 250 萬美元量級公開報價（這是同等級漏洞的市場行情類比，不是 Orchard 漏洞的實際報價）的情況下，他選擇了報酬遠低的披露路徑<sup>26</sup><sup>30</sup>。

所以正確的命題是分工，不是替代：制度負責穩態下的賠率，品格負責窗口期的決斷。穩態量制度，窗口量人。

而「靠人」這件事，bug bounty 的經濟學把它去神話化了。以 HackerOne 資料建模的研究發現，安全研究者的供給價格彈性只有 0.1 到 0.2，賞金高低幾乎不影響參與，他們主要被非金錢因素驅動<sup>80</sup><sup>81</sup>。這意味著「為什麼好人選披露而非黑市」其實是一組可被制度設計的非價格變數在運作，而非純粹的品格之謎：聲譽、合法的白帽身分、把披露變成圈內預設行為的規範。Hornby 後續把 Monero 也加進稽核清單，正是這套身分、聲譽、規範結構在運作的證據；他是制度養出的穩定角色，而非一次性的道德閃光<sup>49</sup>。制度設計恰恰是在設計「讓更多人更穩定地做 Hornby 之事」的賠率結構。

### 兩個反對，與兩道誠實邊界

這個分工命題還能擋住兩個常見的反對。

一個是無窮回歸：稽核者誰來稽核？turnstile 的供給稽核仍依賴 Ironwood 實作正確，驗證 Halo 證明需要驗證器，驗證器又需被驗證。形式驗證文獻直言，我們從未獲得 100% 保證，只有漸近趨近的正確機率<sup>82</sup>。這是真的，但它取消的是「絕對」這個形容詞，不是分級本身。每加一層獨立且互相對沖的驗證，殘餘的信任假設就單調收斂；quis custodiet 的古典答案從來都是讓看守者互相看守，而非去找一個不需被看守的看守者<sup>83</sup>。分級量的正是「你把回歸推進了幾層、每層是否獨立」。

另一個更深，是道德擠出效應。把「不增發」全交給驗證機制，會不會讓「不增發因為不可能」悄悄取代「不增發因為不對」，等到下一個驗證空隙打開，那個本該擋住你的內在「不對」已經被擠空？這是對整個主張最深的內在威脅，因為主張若成功，似乎會挖空它在窗口期賴以兜底的那個東西。

但擠出的觸發條件是特定的。Gneezy 與 Rustichini 著名的托兒所實驗裡，引入遲到罰款後遲到反而增加，是「把道德義務明碼標成可購買的價格」這個動作擠出了規範<sup>84</sup><sup>85</sup>。可驗證性工程不給偷竊定價，它讓偷竊結構上不可能或必被偵測。「不可能」與「便宜地可購買」對內在動機的作用恰好相反，前者不提供「我付了代價就可以」的心理許可。所以主張要倖存，得收窄成這樣，制度應消滅機會（讓戒指退場），而不是替戒指明碼標價。bug bounty 的證據甚至顯示擠入而非擠出。若金錢誘因會擠出白帽動機，供給彈性早該是負的，實測卻是低彈性、非金錢動機主導<sup>80</sup>。代價是必須承認一件事，制度與德性是一個需要共同維護的耦合系統，並非此消彼長；好制度不只壓窗口，還要在穩態持續演練披露規範，讓「做 Hornby 之事」成為被反覆操作、不致荒廢的肌肉。

最後留兩個誠實邊界。它們是這套結論的真實限度，不是修辭的謙詞。

其一，靜默窗口本身是一種家長主義。在 Orchard 那一週、Bitcoin CVE-2018-17144 那 36 小時、Zcash 2019 那數月裡，不知情的持有者持續在「供給完整」的錯誤前提上交易；CVD 替一小群知情者決定了「你們暫時不該知道真相」<sup>86</sup><sup>87</sup>。這個代價無法工程掉，只能被減輕。它的另一端是「公開即武器化」，窗口是在兩種傷害之間求最小總和；而國際標準要求披露時程有依據、可事後審視，把這個家長主義從黑箱裁量變成有紀錄的判斷；劑量在歷史上也單調下降（數月到一週）。制度沒有消滅蓋吉斯困境，它把困境從「要不要增發」搬到了「要不要、以及多久，替別人決定他們暫時不該知道真相」。

其二，向前可驗證不等於向後可證偽。Ironwood 與 turnstile 都是向前的供給稽核，它們保證未來離開池的總額不超過進入的總額，卻對 2022 到 2026 那四年池內是否曾被偽造永遠無法事後證偽。市場一邊替向前的可驗證性溢價、一邊仍替向後的不可證偽性折價，這兩者並存的技術基礎正在於此。任何說 Ironwood「解決」了歷史不確定性的講法都是錯的，它解決的是未來；那段過去的池內讀數，原理上將永遠停在「seems unlikely，但無法證明」。

於是這篇文章可以收在一個帶時間下標的結論上。「增發多少」這把尺有效，但它中途換了單位，零點量決策規則、零上量傷害規模；它量得到的是對非人格化信任的正直，量不到完整人格；而它真正在量的，最終是制度，量的是把窗口壓多窄、選項零是否流程化、剩餘的戒指是否分權可驗證。一個好制度的標誌，是參與者的道德讀數變得不太重要；一把好的道德量尺，最終是用來量制度的。但在窗口被壓到零之前，而 Orchard 的四年提醒我們，窗口永遠不會被壓到零，它仍然量人。

## 參考資料

1. Plato, *Republic* II 359a–360d（蓋吉斯之戒；Glaucon 的隱形挑戰原文）。提供整個思想實驗的文本錨點。來源等級 A。<https://en.wikipedia.org/wiki/Ring_of_Gyges>
2. Plato, *Republic* II 357a–367e（Glaucon 與 Adeimantus 的完整挑戰）。確立「後果剝離後仍須論證」的方法。來源等級 A。<https://iep.utm.edu/republic/>
3. Plato, *Republic* X 612b–613e（正義報酬的回收）。證明柏拉圖承認後果軸與見證軸是兩條軸。來源等級 A。<https://medium.com/the-first-philosophers/plato-17-11-the-rewards-of-justice-c0d63040313c>
4. SEP, "Plato's Ethics: An Overview" §3.1–3.2。「非神性格者終將屈服於戒指誘惑」；正義＝靈魂的健康與秩序。來源等級 A。<https://plato.stanford.edu/entries/plato-ethics/>
5. 《禮記·中庸》首章。「君子戒慎乎其所不睹……故君子慎其獨也」，內部見證者論證的東方文本依據。來源等級 A。<https://ctext.org/si-shu-zhang-ju-ji-zhu/da-xue-zhang-ju1/zh>
6. 《禮記·大學》誠意章。「所謂誠其意者，毋自欺也……此謂誠於中，形於外，故君子必慎其獨也」。來源等級 A。<https://zh.wikisource.org/zh-hant/四書章句集註/大學章句>
7. 朱熹《中庸章句》注「獨者，人所不知而己所獨知之地也」。把「獨」詮釋為外部隱形無法關閉的內在通道。來源等級 A。<https://gj.zdic.net/jingbu/20/>
8. Electric Coin Company, "Zcash Counterfeiting Vulnerability Successfully Remediated"（2019-02-05）。BCTV14 漏洞官方披露：Gabizon 發現、CVE-2019-7167、Sapling/Groth16 修補、「監測屏蔽池總額無此足跡」。來源等級 A。<https://electriccoin.co/blog/zcash-counterfeiting-vulnerability-successfully-remediated/>
9. Bowe, Grigg, Hopwood, "Halo: Recursive Proof Composition without a Trusted Setup", IACR ePrint 2019/1021。首個無 trusted setup 的遞迴證明組合，移除有毒廢料的理論基礎。來源等級 A。<https://eprint.iacr.org/2019/1021>
10. Samuelson, P. (1938) 顯示性偏好理論（標準表述）。「觀測選擇＝偏好」的經濟學公設。來源等級 A。<https://www.britannica.com/money/revealed-preference-theory>
11. Kant, *Groundwork* 4:429（人為目的本身公式 / Selbstzweck）。把他人僅當手段違反「人為目的本身」。來源等級 A。<https://sites.pitt.edu/~mthompso/readings/GroundworkII.pdf>
12. Rawls, "Two Concepts of Rules"(1955), *Philosophical Review*。規約性規則與構成性規則之分。來源等級 A。<https://peped.org/philosophicalinvestigations/summary-rawls-two-concepts-rules/>
13. Searle, "Constitutive Rules"(*Argumenta*)。「X counts as Y in context C」；制度事實依賴集體接受。來源等級 A。<https://www.argumenta.org/wp-content/uploads/2018/11/4-Argumenta-41-John-R.-Searle-Constitutive-Rules.pdf>
14. CoinDesk, "Zcash plummets 38% as Shielded Labs reveals a major bug that went undetected for four years"（2026-06-05）。事件主報導：披露時點、跌幅、官方措辭。來源等級 A。<https://www.coindesk.com/markets/2026/06/05/zcash-plummets-30-as-developer-reveals-a-major-bug-that-went-undetected-for-four-years>
15. Decrypt, "ZEC Crashes 38% as Zcash Discloses 'Critical Counterfeiting Vulnerability'"。官方「密碼學上無從確定是否被利用」措辭、Craig Salm「seems unlikely」論證。來源等級 B。<https://decrypt.co/370105/zec-crashes-38-as-zcash-discloses-critical-counterfeiting-vulnerability>
16. Kahneman, D. & Tversky, A. (1979). Prospect Theory（loss aversion、reference dependence）。損失約為同等收益的兩倍，風險趨避混淆的機制。來源等級 B。<https://en.wikipedia.org/wiki/Prospect_theory>
17. "Information Disclosure, Ethical Issues of"(Encyclopedia.com)。嚴格區分「披露義務」與「不說謊義務」。來源等級 B。<https://www.encyclopedia.com/science/encyclopedias-almanacs-transcripts-and-maps/information-disclosure-ethical-issues>
18. Kant, *Zum ewigen Frieden*（1795/96），Erster Zusatz。「魔鬼民族也能建國」德文原文。來源等級 A。<http://www.zeno.org/Philosophie/M/Kant,+Immanuel/Zum+ewigen+Frieden>
19. SEP, "Moral Luck"（Nagel 四種運氣；Williams Gauguin 案）。resultant luck 質疑「以行為讀數推斷品格」。來源等級 B。<https://plato.stanford.edu/entries/moral-luck/>
20. ISO/IEC 29147:2018, "Vulnerability disclosure"。漏洞披露的國際標準；選項零的制度化模板。來源等級 A。<https://www.iso.org/standard/72311.html>
21. "Seigniorage / inflation tax incidence"（EconomicsHelp）。印鈔＝對持幣者的隱形稅，財富移轉守恆。來源等級 B。<https://www.economicshelp.org/blog/glossary/seigniorage/>
22. SEP, "Thought Experiments"。思想實驗可能「inherently conservative」「rest on prejudice」；標出蓋吉斯實驗的可靠性邊界。來源等級 B。<https://plato.stanford.edu/entries/thought-experiment/>
23. Zcash 社群論壇, "The Orchard Counterfeiting Vulnerability—And Next Steps"（官方披露主帖，2026-06-05）。一手披露：「無法用密碼學證明是否被利用」「prior exploitation seems unlikely」、under-constrained 橢圓曲線乘法、時間線。來源等級 A。<https://forum.zcashcommunity.com/t/the-orchard-counterfeiting-vulnerability-and-next-steps/56015>
24. ISO/IEC 30111:2019, "Vulnerability handling processes"。內部驗證／修補／部署流程標準，與 29147 互補。來源等級 A。<https://www.iso.org/standard/69725.html>
25. FIRST, "Multiparty Vulnerability Coordination Guidelines v1.1"。多方協同披露指引；對應「集體蓋吉斯」反事實。來源等級 C。<https://www.first.org/global/sigs/vulnerability-coordination/multiparty/guidelines-v1-1>
26. CyberScoop, "Zerodium offers $2.5 million for Android zero-days"。「完整鏈、零點擊」漏洞市場價量級的具體錨點（同等級漏洞行情類比，非 Orchard 實際報價）。來源等級 B。<https://cyberscoop.com/zerodium-android-zero-days-bounty/>
27. ACFE, *Occupational Fraud 2024: A Report to the Nations*。median loss、median duration 12 個月、月損失上升——升級曲線的實證骨架（係已偵測樣本）。來源等級 A。<https://www.acfe.com/-/media/files/acfe/pdfs/rttn/2024/2024-report-to-the-nations.pdf>
28. crypto.news, "Bitcoin falls below $60K as hot U.S. jobs report crushes rate cut hopes"（2026-06-05）。宏觀對照組基準：非農 172k、BTC 跌破 $60k。來源等級 A。<https://crypto.news/bitcoin-price-falls-below-60k-as-hot-u-s-jobs-report-crushes-rate-cut-hopes/>
29. CoinDesk, "Bitcoin back above $61,000 after rout leads to $1.6B liquidations"（2026-06-06）。全市場 risk-off 量化（清算規模、Nasdaq −5%）。來源等級 A。<https://www.coindesk.com/markets/2026/06/06/bitcoin-back-above-usd61-000-after-rout-leads-to-usd1-6-billion-liquidations>
30. The Block, "Security researcher finds Zcash vulnerability allowing 'unlimited' counterfeit minting"。Hornby 身分、Shielded Labs 4 月委託審計、regtest 環境驗證、48 小時跌幅。來源等級 A。<https://www.theblock.co/post/403698/zcash-vulnerability-zec-drops>
31. CoinDesk, "Arthur Hayes dumps zcash holdings after Orchard Pool vulnerability revealed"（2026-06-05）。第一手定價者論證結構（「不可密碼學證明不可能」「perfection not probably fine」）。來源等級 A。<https://www.coindesk.com/markets/2026/06/05/arthur-hayes-dumps-zcash-holdings-after-orchard-pool-vulnerability-revealed>
32. BitMEX Blog, "Why Zcash Crashed Nearly 50% in 48 Hours"。事後覆盤：$624→$303、48h 近五成跌幅敘事；天然對照組 2026-03 Sprout（透明、ZEC 反升 10%）vs Orchard（不透明、崩 50%）；XMR −14% vs ZEC −50%；衝擊定性為 Zcash 特異而非全行業傳染；6/5 成交量高於 30 日均 68%。來源等級 A。<https://www.bitmex.com/blog/zec-crash-2026>
33. "Seigniorage Explained"（economicsonline）。鑄幣稅標準教科書定義。來源等級 C。<https://www.economicsonline.co.uk/definitions/seigniorage-explained.html/>
34. AMBCrypto, "Zcash says Orchard bug could have enabled undetectable counterfeit ZEC"。「undetectable」官方框架與供給不可驗證的精確語境。來源等級 B。<https://ambcrypto.com/zcash-says-orchard-bug-could-have-enabled-undetectable-counterfeit-zec/>
35. The Block, "Zcash finalizes Ironwood upgrade plan, targets July activation"。修復路徑圖：turnstile 供給稽核、formal verification、7 月啟用、回升軌跡。來源等級 A。<https://www.theblock.co/post/404065/zcash-finalizes-ironwood-upgrade-plan>
36. crypto.news, "Zcash bug raises supply doubts as Hayes exits full ZEC bag"。「供給懷疑（supply doubts）」框架命名與 Hayes 清倉。來源等級 B。<https://crypto.news/zcash-bug-raises-supply-doubts-as-hayes-exits-full-zec-bag/>
37. Householder et al., *The CERT Guide to Coordinated Vulnerability Disclosure*, CMU/SEI-2017-SR-022。CVD 的權威方法論。來源等級 A。<https://www.sei.cmu.edu/library/the-cert-guide-to-coordinated-vulnerability-disclosure/>
38. CERT/CC, *The CERT Guide to CVD*（web 版）。CVD 流程相位（discovery→reporting→validation→remediation→disclosure）。來源等級 A。<https://certcc.github.io/CERT-Guide-to-CVD/>
39. Chain Bulletin, "Zcash Revealed a Counterfeiting Vulnerability Was Fixed Last Year"（2019）。2019 披露時漏洞已修補近一年的當時報導。來源等級 B。<https://chainbulletin.com/zcash-revealed-a-counterfeiting-vulnerability-was-fixed-last-year>
40. Wikipedia, "Coordinated vulnerability disclosure"。CVD 為 white-hat 倫理核心的概覽。來源等級 C。<https://en.wikipedia.org/wiki/Coordinated_vulnerability_disclosure>
41. ZIP 209, "Prohibit Negative Shielded Chain Value Pool Balances"。turnstile 共識規則一手規格；界定 turnstile 能與不能偵測什麼。來源等級 A。<https://zips.z.cash/zip-0209>
42. ZIP 224, "Orchard Shielded Protocol"。Orchard 協議規格：note 結構、note commitment／action 電路，漏洞所在電路的規範定義。來源等級 A。<https://zips.z.cash/zip-0224>
43. Electric Coin Company, "NU5 activates on mainnet, eliminating trusted setup..."（2022）。NU5 啟用一手公告（漏洞窗口起點 2022-05-31）、Halo 2 移除 setup ceremony。來源等級 A。<https://electriccoin.co/blog/nu5-activates-on-mainnet-eliminating-trusted-setup-and-launching-a-new-era-for-zcash/>
44. Zcash Foundation, "Zebra 4.5.3 and 5.0.0: Emergency Soft Fork and NU6.2 Activation"。緊急修補一手技術紀錄：soft fork 區塊高度 3,363,426、NU6.2 hard fork 3,364,600、「無法膨脹總供給，受 turnstile 保護」官方定性。來源等級 A。<https://zfnd.org/zebra-4-5-3-and-5-0-0-emergency-soft-fork-and-nu6-2-activation/>
45. Zcash 社群論壇, "Ironwood: Verifying the Soundness of Zcash's Circulating Supply"（Ironwood 提案主帖）。turnstile 強制施加於離開 Orchard 的全部幣、節點可從共識規則直接驗證供給、7 月底目標。來源等級 A。<https://forum.zcashcommunity.com/t/ironwood-verifying-the-soundness-of-zcash-s-circulating-supply/56044>
46. Bitquery, "A Bug Could Have Printed Unlimited Zcash For Four Years. Did Anyone?"。鏈上統計分析：屏蔽 ZEC 約 5M 歷史高、關鍵窗口淨流入溫和、總發行符合排程；排除大規模盜竊、無法排除耐心小偷。來源等級 B。<https://bitquery.io/blog/was-zcash-counterfeited-orchard-bug>
47. Electric Coin Company, "Turnstile Enforcement Against Counterfeiting"。turnstile 設計理念官方說明：把「偵測偽造」做成共識層硬規則。來源等級 A。<https://electriccoin.co/blog/turnstile-enforcement-against-counterfeiting/>
48. bitbox, "How the 21 Million Bitcoin limit is actually enforced"。數位稀缺由全節點獨立驗證而非信任維繫。來源等級 C。<https://blog.bitbox.swiss/en/how-the-21-million-bitcoin-limit-is-actually-enforced/>
49. Cryptobriefing, "Security engineer Taylor Hornby adds Monero to audit queue after Zcash bug discovery"。Hornby 後續把同方法擴及 Monero，佐證「AI 輔助稽核」制度化趨勢。來源等級 B。<https://cryptobriefing.com/hornby-monero-audit-zcash-bug/>
50. Fortune, "Zcash Discloses Vulnerability That Could Have Allowed 'Infinite Counterfeit'"（2019-02-05）。2019 披露的第三方權威報導，含「相信無人知情、無偽造發生」措辭。來源等級 A。<https://fortune.com/crypto/2019/02/05/zcash-vulnerability-cryptocurrency/>
51. DEXTools News, "Zcash crashes ~40% after counterfeit vulnerability"。隱私協議漏洞無正向外溢（競品不受惠）。來源等級 B。<https://www.dextools.io/news/zcash-zec-crashes-counterfeit-vulnerability-orchard-june-2026>
52. CoinMarketCap, Monero latest updates。XMR 7 日 −14.27%、6/11 報 $351，歸因宏觀+監管而非 Zcash。來源等級 B。<https://coinmarketcap.com/cmc-ai/monero/latest-updates/>
53. Kant, *Groundwork* 4:421（普遍化公式 / Formula of Universal Law）。「只依你能同時意願其成為普遍法則的格律而行」。來源等級 A。<https://plato.stanford.edu/entries/kant-moral/>
54. Vice, "Radioactive Material From Chernobyl Will Help Secure the Next Version of Zcash"。2016 ceremony／Powers of Tau 有毒廢料的第一手敘事化記述。來源等級 B。<https://www.vice.com/en/article/power-tau-zcash-radioactive-toxic-waste/>
55. Coin Bureau, "What is the ZCash Ceremony?"。2016 六人三大洲 ceremony 細節、toxic waste 銷毀儀式。來源等級 B。<https://coinbureau.com/education/zcash-ceremony>
56. 蘇費翔（C. Soffel），〈從語言的角度分析鄭玄與朱熹對「慎獨」的解說〉。訓詁學專論，揭示鄭玄「獨處」訓與出土文獻原義的落差。來源等級 A。<http://rportal.lib.ntnu.edu.tw/bitstreams/b5d00759-73ad-4b75-88a1-46ac0db7ace5/download>
57. Tao Liang, "The Significance of *Shendu* in the Interpretation of Classical Learning and Zhu Xi's Misreading"。郭店楚簡／帛書《五行》中「獨」＝「未發之中／內心之誠」而非「獨處空間」。來源等級 A。<https://philpapers.org/rec/LIATSO>
58. "A Meta-Analytic Review of Moral Licensing"。道德許可效應的後設分析；行善後反而更可能行惡的反論證據。來源等級 B。<https://www.researchgate.net/publication/272837497>
59. Rotella et al. (2025), "Observation Moderates the Moral Licensing Effect"(*PSPB*)。觀察會調節許可效應，且文獻有發表偏誤。來源等級 B。<https://journals.sagepub.com/doi/10.1177/01461672251345512>
60. SEP, "Sorites Paradox"。連續序列上「多一個不改變謂詞適用」的歸納前提如何導致矛盾——「增發一點點」沒有原則性停損點。來源等級 A。<https://plato.stanford.edu/entries/sorites-paradox/>
61. Cressey, D. (1953). *Other People's Money*（fraud triangle：壓力／機會／合理化）。合理化先於犯行、是動機的一部分。來源等級 A。<https://www.ojp.gov/ncjrs/virtual-library/abstracts/other-peoples-money-study-social-psychology-embezzlement>
62. AGA, "The Fraud Triangle"。Cressey 假說的標準引述，rationalization 作為犯行前必要成分的權威轉述。來源等級 B。<https://www.agacgfm.org/resource/the-fraud-triangle/>
63. John J. Ray III, FTX first-day declaration（2022-12-13）。FTX 案會計結構（客戶資產經後門挪用＝實質增發無擔保帳面餘額）與「徹底的公司控制失靈」措辭。來源等級 A。<https://democrats-financialservices.house.gov/uploadedfiles/hhrg-117-ba00-wstate-rayj-20221213.pdf>
64. SEP, "Deontological Ethics"（§ Threshold Deontology；Alexander & Moore）。簡單門檻 vs sliding-scale 門檻，提供「0→ε 是否特殊跳變」的義務論側答案。來源等級 A。<https://plato.stanford.edu/entries/ethics-deontological/>
65. Norcross, A., *Morality by Degrees: Reasons without Demands*（scalar consequentialism）。對錯是連續程度、任何門檻都武斷——後果論側「連續量尺合法」的最強版本。來源等級 A。<https://academic.oup.com/book/36561/chapter/321516325>
66. Robinson, W.S. (1950). "Ecological Correlations and the Behavior of Individuals"。群體相關 ≠ 個體相關——從升級曲線推到「這個人會滑坡」的生態謬誤警示。來源等級 B。<https://www.stat.berkeley.edu/~freedman/ecofall.txt>
67. Data Colada [98] & Science 報導 Ariely 2012 保險里程表造假、PNAS 2021 撤稿。研究誠實的學者偽造誠實數據。來源等級 A。<https://www.science.org/content/article/fraudulent-data-set-raise-questions-about-superstar-honesty-researcher>
68. Francesca Gino 案（Data Colada [118]、Science 報導、Harvard 2025 撤銷終身職）。第二個「誠實研究者造假」案例。來源等級 B。<https://datacolada.org/118>
69. Mazar, N., Amir, O., & Ariely, D. (2008). "The Dishonesty of Honest People." *J. Marketing Research* 45:633–644。自概念維持理論；須與第 70 條 RRR 反向重複並讀。來源等級 A。<https://journals.sagepub.com/doi/abs/10.1509/jmkr.45.6.633>
70. Verschuere, B. et al. (2018). "Registered Replication Report on Mazar, Amir, and Ariely (2008)." *AMPPS*。25 場直接重複，Experiment 1 效應微小且方向相反。來源等級 A。<https://journals.sagepub.com/doi/10.1177/2515245918781032>
71. Decrypt, "Zcash Crash Wiped Billions…Can ZEC Recover?"。分析師 Jake Kennis：「price reaction reflects that uncertainty more than the bug itself」。來源等級 B。<https://decrypt.co/370184/zcash-crash-wiped-billions-market-cap-can-zec-recover>
72. North, D. & Weingast, B. (1989). "Constitutions and Commitment", *J. Economic History* 49(4)。可信承諾的歷史原型：靠制度問責而非不可能性維繫的「合法戒指」。來源等級 A。<http://pscourses.ucsd.edu/ps200b/North%20and%20Weingast%20-%20Constitutions%20and%20Commitment.pdf>
73. Bernanke, B., "Central Bank Independence, Transparency, and Accountability"(2010)。央行靠透明問責維繫鑄幣權合法性。來源等級 B。<https://www.federalreserve.gov/newsevents/speech/bernanke20100525a.htm>
74. NIST SP 800-57 Part 1 Rev. 5, *Recommendation for Key Management: General*。split knowledge／dual control／金鑰多方控制的國家標準。來源等級 A。<https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final>
75. NIST SP 800-57 Part 2 Rev. 1, *Best Practices for Key Management Organizations*。金鑰治理的組織分權實作規範。來源等級 A。<https://csrc.nist.gov/pubs/sp/800/57/pt2/r1/final>
76. *Threshold Signatures for Central Bank Digital Currencies*, arXiv 2506.23294。門限簽章用於央行貨幣的分權治理，對照「制度化的戒指」。來源等級 A。<https://arxiv.org/pdf/2506.23294>
77. Corporate Finance Institute, "Chinese Wall — An Information Barrier in Investment Banking"。資訊隔離牆制度的定義與運作。來源等級 C。<https://corporatefinanceinstitute.com/resources/career-map/sell-side/capital-markets/chinese-wall-definition/>
78. Hume, "Of the Independency of Parliament"（c.1741），Liberty Fund 校訂本。「every man ought to be supposed a knave」設計原則原文。來源等級 A。<https://oll.libertyfund.org/quotes/david-hume-believes-we-should-assume-all-men-are-self-interested-knaves-when-it-comes-to-politics-1777>
79. North, D., *Institutions, Institutional Change and Economic Performance*, Cambridge UP, 1990。制度降低交易成本、減少對個人善意依賴的新制度經濟學奠基。來源等級 A。<https://www.scirp.org/reference/referencespapers?referenceid=2247051>
80. Sridhar & Ng, "Hacking for good: Leveraging HackerOne data to develop an economic model of Bug Bounties", *Journal of Cybersecurity* 7(1), 2021。研究者供給彈性 0.1–0.2、非金錢動機主導。來源等級 A。<https://academic.oup.com/cybersecurity/article/7/1/tyab007/6168453>
81. "The simple economics of an external shock to a bug bounty platform", *Journal of Cybersecurity* 10(1), 2024。賞金平台受外部衝擊的經濟學模型，補強非價格機制論證。來源等級 A。<https://academic.oup.com/cybersecurity/article/10/1/tyae006/7667075>
82. *Verifier Theory and Unverifiability*, arXiv 1609.00331。形式驗證的「驗證者也需被驗證」無窮回歸，只有漸近趨近的正確機率。來源等級 A。<https://arxiv.org/pdf/1609.00331>
83. Wikipedia, "Quis custodiet ipsos custodes?"。「誰來稽核稽核者」典出 Juvenal 的背景。來源等級 C。<https://en.wikipedia.org/wiki/Quis_custodiet_ipsos_custodes>
84. Gneezy, U. & Rustichini, A. (2000). "A Fine is a Price", *Journal of Legal Studies* 29(1)。罰款使遲到增加——道德約束被換算成價格便不可逆地擠出。來源等級 A。<https://rady.ucsd.edu/_files/faculty-research/uri-gneezy/pay-enough.pdf>
85. Frey, B. & Jegen, R. (2001). "Motivation Crowding Theory: A Survey of Empirical Evidence"。界定外在誘因侵蝕內在動機的條件。來源等級 A。<https://ideas.repec.org/p/zur/iewwpx/049.html>
86. Bitcoin Core, "Disclosure of CVE-2018-17144"（2018-09-20）。「先靜默修 DoS、延後公開 inflation」決策的第一手紀錄。來源等級 A。<https://bitcoincore.org/en/2018/09/20/notice/>
87. Bitcoin Optech, "CVE-2018-17144"。該漏洞 0.15–0.16.2 為通膨漏洞、duplicate input 的權威條目。來源等級 A。<https://bitcoinops.org/en/topics/cve-2018-17144/>
