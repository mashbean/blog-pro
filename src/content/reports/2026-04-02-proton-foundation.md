---
title: "Proton Foundation -- 從 CERN 走出的隱私帝國，還是基金會外衣下的商業機器？"
description: "三位 CERN 物理學家建立的加密郵件服務，十二年後膨脹為估值上億的隱私產品帝國。2024 年成立的 Proton Foundation 究竟是使命鎖定機制，還是一層精心維護的敘事？從瑞士法律、基金會治理到五種組織模式的比較，一次完整拆解。"
pubDate: 2026-04-02
tags: ["privacy", "proton", "foundation", "governance", "switzerland", "cern"]
category: "數位治理"
aiModel: "Claude Opus 4"
aiPrompt: "Proton Foundation 如何在商業獲利與隱私理念之間取得平衡？其基金會模式相比 Signal、Ethereum 等有何異同？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-04-02-proton-foundation"
aiGeneratedDate: 2026-04-02
humanReviewed: true
---

# Proton Foundation -- 從 CERN 走出的隱私帝國，還是基金會外衣下的商業機器？

2013 年夏天，三位在 CERN 大型強子對撞機工作的物理學家，被史諾登揭露的全球監控體系震動。Andy Yen、Jason Stockman 和 Wei Sun 在 CERN 一號餐廳開始構想一個加密電子郵件服務，用自己的研究對象「質子」為它命名。[^1] 十二年後，Proton 已經從一個眾籌專案膨脹為擁有一億帳號、橫跨郵件、VPN、雲端硬碟、密碼管理器、錢包的隱私產品帝國，估計年營收達七千萬至一億美元。[^2]

Yen 是哈佛訓練的物理學家，在 CERN ATLAS 實驗從事超對稱搜尋。共同創辦人 Stockman 和 Sun 也是 CERN 研究人員。CTO Bart Butler 是 ATLAS 實驗校友。CERN Courier 2019 年的報導指出，10-15% 的 Proton 員工是前 CERN 科學家。[^1] 這種科學文化體現在對同儕審查的承諾——所有客戶端應用在 GitHub 上開源、安全審計報告公開[^3]——以及方法論上的嚴謹度。

2014 年的 Indiegogo 眾籌創下了當時的軟體眾籌紀錄——10,576 名支持者貢獻 550,377 美元。[^4] 期間 PayPal 凍結了 251,721 美元，Yen 經常引用這個事件作為十年後推出 Proton Wallet 比特幣整合的動機。

但三位共同創辦人中，只有 Yen 仍然公開活躍。Stockman 參與了 2024 年的基金會股份捐贈，但似乎已退出營運多年。Wei Sun 的現狀完全不明。從一個強調科學協作文化的組織來看，創辦團隊的實質縮減值得關注——尤其是在 Yen 同時掌控基金會和公司的情境下。

Proton 維護的 OpenPGP.js 加密庫被廣泛用於自身產品之外，這是對開源生態系的實質貢獻，也是 CERN 合作文化的延伸。隱私增強技術市場預計以 25% 的年複合成長率增長至 2030 年的 121 億美元[^5]，但 Proton 必須面對擁有數十億行銷預算和每支智慧型手機預裝優勢的巨頭——Apple 的隱私定位日益強化，Google 選擇性地推出隱私功能。從 CERN 走出的隱私帝國能否在這個競技場長期存活，取決於基金會模式是否真的能讓它做出大公司無法做的承諾。

2024 年 6 月，Proton 走了一步引人注目的棋。三位創辦人將股份捐贈給新成立的 Proton Foundation，一個受瑞士民法典約束的 Stiftung（基金會），章程目的是「推進隱私、自由與民主」。[^6] Proton 宣稱這讓公司的隱私使命獲得了法律層級的永久保障。

這個基金會模式到底有多堅固？跟 Signal、Mozilla、Wikimedia、Ethereum 這些組織比起來，Proton 的架構真的特別嗎？瑞士法律是隱私的銅牆鐵壁，還是一層精心維護的敘事？

---

## 一個擁有公司的基金會

Proton Foundation 在日內瓦登記，受瑞士民法典第 80 至 89 條規範。這套法律將基金會定義為獨立法律實體，資產永久服務於特定目的。一旦章程經過公證，變更目的必須取得瑞士聯邦基金會監管局的同意。[^7] 這比美國 501(c)(3) 的結構性鎖定更強，美國的非營利組織理事會通常可以透過投票修改章程。

不過有幾個細節值得留意。

基金會是「主要股東」，但並非唯一股東。員工透過股票選擇權持有少數股權，日內瓦創新基金會 FONGIT 和少數用戶也有持股。基金會的確切持股比例和投票權門檻從未公開。[^6] Proton AG 並非像 Mozilla Corporation 那樣的全資子公司，而是一間基金會控股、但存在少數股東的商業公司。少數股東的利益在理論上可能與基金會章程產生衝突。

五人基金會理事會的組成也值得審視。兩位內部人——Yen（同時是 AG 的執行長）和第一號員工 Dingchao Lu（工程總監）——佔了四成席次。三位外部理事分別是 Tim Berners-Lee（全球資訊網發明人）、Carissa Veliz（牛津大學倫理學教授）和 Antonio Gambardella（FONGIT 總監）。[^8] 外部理事提供了信譽和獨立性，但他們缺乏營運層面的資訊，這種不對稱在需要做出實質決策時可能成為問題。

而 Proton AG 本身的董事會另有面貌，成員包括 Greylock Partners 榮譽合夥人 Bill Kaiser 和連續創業者 Alisee de Tonnac。[^9] 商業實體保留了一個以成長為導向的治理結構，與基金會的使命優先章程形成微妙的張力。

最關鍵的透明度問題在於，瑞士基金會法要求向監管局提交年報和經審計的財務報表，但這些文件不對公眾開放。相比之下，Signal 和 Wikimedia 的 IRS Form 990 在 ProPublica 上公開可查。[^10] Arrivillaga 和 von Schnurbein 在 2014 年《國際非營利法期刊》的研究中，將瑞士基金會透明度制度定性為「極簡主義」（minimalist），指出自律性的瑞士基金會準則雖有改善實務，但無法替代強制性揭露。[^11]

---

## Freemium 訂閱的獨特性

要理解 Proton 基金會模式的特殊之處，最有效的方法是把它放在同類組織的光譜上。

**Signal Foundation** 代表了捐贈依賴的極端。2018 年以 WhatsApp 共同創辦人 Brian Acton 的 1.05 億美元貸款成立，Signal 的 501(c)(3) 結構在非營利純度上無可挑剔，但財務上岌岌可危。IRS 990 申報顯示，2024 年淨資產已轉為負數（-470 萬美元），年支出 3,800 萬美元，程式服務收入僅 640 萬美元。[^12] Acton 持續減免貸款，等於每年補貼 Signal 一千萬到三千萬美元。約 50 名員工服務七千萬到一億月活用戶，效率驚人——但在推出付費產品或獲得永續慈善資金之前，沒有自給自足的路徑。Signal 總收入約三千萬美元（含貸款減免），跟它的用戶規模相比少得驚人。

**Mozilla Foundation / Corporation** 是結構上與 Proton 最接近的類比，501(c)(3) 擁有營利子公司。但 Mozilla 的故事是商業依賴壓倒使命治理的警世案例。Mozilla Corporation 2023 年產生 6.53 億美元營收，其中約 76%（4.95 億美元）來自 Google 搜尋合約。2020 年這個比例曾高達 86%，略有下降，但依賴結構沒有根本改變。[^13] 一個以開放網路為使命的組織，財務上依賴最積極封閉網路的公司——這是科技治理中最深刻的諷刺。執行長 Mitchell Baker 的薪酬在 2022 年膨脹至 690 萬美元，同期 Firefox 市佔率從 2009 年的 32% 崩跌至 2025 年不到 3%。2024 年 11 月，基金會裁撤了整個倡議部門。[^14] 理論上基金會控制公司，實際上同一批領導層在兩個實體之間旋轉，Google 營收的引力場壓過了使命對齊。

**Wikimedia Foundation** 證明純捐贈模式可以達到可觀規模——2024-25 財年 2.086 億美元，來自 800 萬名捐助者。但 Wikimedia 受惠於 Wikipedia 這個不可複製的文化資產，隱私工具無法套用同樣的模式。Wikimedia 的治理也是這個群體中最透明的——19 份連續的 KPMG 審計報告、1.44 億美元的捐贈基金、16 人理事會包含社群選舉席次。[^15] 這構成了一個 Proton 目前遠遠未及的揭露基準。

**Ethereum Foundation** 與 Proton 同為瑞士 Stiftung，但經濟基礎截然不同。EF 的 9.7 億美元國庫（2024 年 10 月）幾乎全由創世時取得的 ETH 代幣構成，價值隨加密市場波動。年支出 1 到 1.35 億美元用於生態系開發。2024-2025 年的領導危機——社群指控治理無效、研究人員接受 EigenLayer 代幣分配的利益衝突醜聞、長達 2.5 年的財報空窗——說明了瑞士 Stiftung 身份本身並不保證問責。[^16]

把這五個組織並列，Proton 的獨特定位立刻浮現。

| 組織 | 收入模式 | 年收入 | 核心依賴 | 財務透明度 |
|------|---------|--------|---------|-----------|
| Proton | Freemium 訂閱 | ~$70-100M（2024 估算）[^2] | 用戶付費意願 | 無公開財報 |
| Signal | 捐贈 + Acton 貸款 | ~$30M（2024，含貸款減免）[^12] | 單一億萬富翁 | IRS 990 公開 |
| Mozilla | Google 搜尋合約 | $653M（2023 審計）[^13] | 76% 來自 Google（2023） | 審計年報公開 |
| Wikimedia | 小額捐贈 | $208.6M（FY2024-25）[^15] | 捐助者參與 | 19 份 KPMG 審計 |
| Ethereum | 加密國庫消耗 | 支出 ~$100-135M/年 [^16] | ETH 幣價 | 不定期自行報告 |

Proton 是唯一不依賴外部資金來源的案例。freemium 訂閱讓它避開了 Signal 的捐助者危機、Mozilla 的企業附庸狀態、OTF 的政治脆弱性和 Ethereum 的幣價賭局。Hansmann 和 Thomsen 在 2021 年《法律分析期刊》發表的研究中，分析了 110 家丹麥基金會控股企業，發現這類公司的平均獲利能力大致與投資人或家族控股企業相當。[^17] Schröder 和 Thomsen 在 2025 年《公司金融期刊》的後續研究進一步發現，Novo Nordisk、Carlsberg、Robert Bosch 等基金會控股企業以長期視角經營，在永續績效上表現更佳。[^18]

但這些研究有一個重要但書。被研究的北歐和德國基金會企業都有數十年歷史。Proton 的基金會治理尚不足兩年，從未經歷過嚴重的外部壓力測試。Ebrahim、Battilana 和 Mair 在 2014 年《組織行為研究》的經典論文中指出，混合組織的理事會必須「排序和對齊潛在衝突的目標」。他們區分了「整合型」混合組織（商業和社會活動不可分割）和「分化型」（可以在組織上分離）。Proton 屬於整合型——隱私使命就是產品本身——理論上使命偏移風險較低。[^19] 但 Cornforth 在 2014 年《社會企業期刊》的綜述中警告，偏移壓力可以來自市場競爭、國家合規成本上升、消費者對隱私重視程度下降等方向。[^20]

Shoshana Zuboff 在《監控資本主義時代》中提出，終結監控資本主義需要三個舞台的配合——公眾輿論轉變、監管行動，以及競爭替代方案。Proton 將自己定位為第三個舞台的代表。[^21] Schreiner 和 Hess 在 2015 年 ECIS 發表的實證研究確認消費者願意為隱私型 freemium 模式付費，但金額有限。[^22] 這跟 Proton 可能僅有 2-5% 的 freemium 轉換率一致（基於行業基準估算，Proton 從未公開此數據）。

---

## 三種失敗模式，定義了 Proton 的結構優勢邊界

隱私科技組織的失敗可以歸納為三種模式——司法管轄脆弱性、資金依賴、信任背叛。Proton 的架構針對前兩種提供了回應，但對第三種的防禦取決於技術透明度。

### 司法管轄脆弱性

**Lavabit** 是最典型的案例。2013 年，FBI 調查 Snowden 帳號時要求創辦人 Ladar Levison 交出主 SSL 金鑰——這把金鑰可以解密全部 41 萬用戶的通訊，而非只有調查標的。美國法律沒有給 Levison 任何可行的防禦空間。他因提交 11 頁 4 號字體打印的金鑰被判藐視法庭，每天罰款 5,000 美元。最後他選擇關閉服務。[^23]

**Tutanota（現 Tuta）** 揭示了德國管轄權的特定弱點。2020 年 11 月，科隆法院命令 Tuta 為一個涉及勒索案件調查的帳號開發監控功能——要求在加密應用之前攔截並交付未加密的未來收發郵件。德國法律允許這樣做，因為電子郵件服務可被歸類為電信提供商。瑞士法院在 2021 年 10 月明確拒絕了對 Proton 的同一分類。[^24] Tuta 共同創辦人 Matthias Pfau 稱裁決「荒謬」並提起上訴，這家公司抗爭了大約 75% 收到的命令（相比 Proton 的 6-11% 異議率），但約 40 名員工和遠低於 Proton 的營收意味著法律資源有限。

Proton 透過瑞士管轄和端到端加密的技術架構回應了這類失敗。Proton VPN 拒絕了 100% 的法律命令（2019-2025 年超過 400 件），因為在技術上確實不存在可交付的日誌。[^25] 但 Proton Mail 的故事截然不同——88% 的合規率（累計 45,667 件命令）反映了一個根本事實，電子郵件的中繼資料（metadata）必然存在於加密範圍之外。[^26]

### 資金依賴

**開放技術基金（OTF）** 展示了資金依賴如何直接轉化為政治脆弱性。OTF 資助了 Signal、Tor 等關鍵隱私工具，但完全仰賴美國政府撥款（2025 財年 4,350 萬美元）。2020 年，一位 Trump 任命者解僱了 OTF 執行長並更換理事會。2025 年 3 月，資金被完全終止。兩次都靠法院介入挽救，但組織差點被摧毀。[^27]

Signal 的故事是另一種資金依賴——依賴單一億萬富翁。Acton 的 1.05 億美元貸款在逐年減免，等於在燒完之前不斷延長保質期。2024 年淨資產已轉負，如果 Acton 的慈善意願或財務狀況改變，Signal 沒有 Plan B。[^12]

Proton 的 freemium 自給模式迴避了這兩種陷阱。但商業壓力因此直接傳導到使命層面——如果付費轉換率下降，Proton 必須在擴大用戶基數（可能稀釋付費意願）和維持利潤率之間抉擇。

### 信任背叛

**Crypto AG** 是所有案例中最令人不安的。1970 年，CIA 和 BND（德國聯邦情報局）以 575 萬美元秘密收購了這家瑞士加密公司。此後 50 年，Crypto AG 向 120 多個國家出售蓄意弱化的加密設備，瑞士當局知情並從中受益。2020 年 2 月，《華盛頓郵報》和 ZDF 的聯合調查揭露了一切。[^28]

Crypto AG 案例粉碎了「瑞士管轄自動等於可信隱私」的假設。關鍵差異在於架構層面——Crypto AG 出售的是專有硬體，沒有公開審計；Proton 的客戶端程式碼全部開源，經過 10 次獨立安全審計（Cure53、SEC Consult、Securitum、Schellman 等機構執行），2024 年 5 月取得 ISO 27001 認證，2025 年 7 月通過 SOC 2 Type II 認證。[^29] Securitum 自 2022 年起每年進行 VPN 無日誌審計，確認 Proton VPN 運行在完全由 Proton AG 自有的 bare-metal 伺服器上，未發現用戶活動記錄。[^30]

但 2018 年 Nadim Kobeissi 的分析提出了一個更根本的質疑——web-based 的 ProtonMail 依賴伺服器遞送的 JavaScript，理論上無法完全保證端到端加密。[^31] Proton 承認了這個限制，同時指出這適用於「現存幾乎所有端到端加密服務」。這個回應雖然準確，卻繞過了問題的核心。對於面臨國家級威脅的用戶，架構層面的保證比「同行也一樣」更重要。

---

## 瑞士悖論——程序性保護，而非豁免權

三個公開記錄的案例界定了瑞士隱私管轄的實際邊界。

**2021 年法國活動人士案。** 巴黎第十區一群 Youth for Climate 活動人士佔據房產，法國警方透過 Europol 向瑞士當局遞交請求，後者發出具約束力的命令，要求 Proton 前瞻性記錄目標帳號的 IP 位址。Proton 合規，因為——如 Yen 所說——「沒有申訴或對抗這項特定請求的可能」。[^32] 這個事件迫使 Proton 從首頁刪除了「我們不記錄任何 IP」的宣傳語，並加強推廣 Tor 洋蔥站點。[^33]

**2024 年加泰隆尼亞獨立案。** Proton 僅提供了一個恢復電郵地址（一個用戶自行添加的 iCloud 帳號），西班牙當局透過 Apple 識別了嫌疑人身份。[^34] 即使 Proton 本身的加密沒有被突破，用戶自行綁定的第三方服務成為了身份識別的入口。

**2024 年 Stop Cop City 案。** FBI 透過正式的《司法互助條約》（MLAT）請求取得了一個信用卡付款識別碼。[^35] 這個案例將支付基礎設施標記為中繼資料洩漏點——也為 Proton 2024 年 7 月推出比特幣錢包提供了脈絡，儘管比特幣的公開區塊鏈本身就是可追蹤的（Proton 直到 2025 年 9 月才透過第三方中介接受以隱私為導向的門羅幣 Monero）。

這些案例共同說明了一件事。**瑞士法律提供的是程序性保護，而非豁免權。** 每一個外國請求都必須通過瑞士司法審查、滿足雙重犯罪標準，並最終通知當事人。但這套系統在運作——外國政府以越來越高的頻率成功通過瑞士法律管道取得數據。

Proton 透明度報告的數字講述了這個趨勢。法律命令從 2017 年的 26 件增長至 2024 年的 11,023 件，增幅 423 倍。這裡面有基數極低的因素（2017 年 Proton 還很小），但 2024 年的跳升也與瑞士採用統一費率補償模型有關，降低了執法機構提交請求的摩擦。異議率從 2021 年的高峰 21.2% 下降至 2024 年的 5.9%。[^26]

新聞自由基金會（Freedom of the Press Foundation）在 2025-2026 年的分析中得出了一句被廣泛引用的結論——「使用 Proton 時，大多數人應該假設自己是可被識別的。」[^36]

這並非安全失敗。在所有已知案例中，電子郵件內容從未被洩露——只有中繼資料（IP、恢復信箱、付款識別碼）被提供。但 Proton 的行銷歷史上模糊了隱私（privacy，控制什麼數據存在）和匿名性（anonymity，防止身份被識別）之間的界線。這個落差侵蝕的是信任——而信任正是 Proton 最核心的資產。

---

## 治理風險——雙重角色、透明度赤字，以及 Mozilla 的前車之鑑

對 Proton 基金會模式最嚴肅的批評，指向的並非欺詐，而是**結構性地未經測試且不透明**。

Andy Yen 同時控制基金會（受託人）和公司（執行長），這恰恰是導致 Mozilla 治理失敗的同一種雙重角色安排。Mozilla 的 Mitchell Baker 在基金會和公司之間旋轉，薪酬膨脹至 690 萬美元，Firefox 市佔崩至不到 3%，2024 年 11 月裁撤了整個倡議部門。[^14] Proton 的三位外部理事提供了制衡，但基金會理事會的動態在瑞士法律下完全不透明。如果 Yen 想推動一個違反章程精神但不明顯違法的方向——比如接受廣告收入或同意策略性收購——外部理事需要阻止他，瑞士監管局需要介入。這套機制是否真能運作，從未被測試過。

瑞士基金會法下，基金會不能以傳統意義「被收購」——它沒有可以被買斷的所有者。但 Proton AG 作為獨立法律實體，理論上可以發行新股稀釋基金會持股，或者基金會理事會可以批准實質移轉控制權的交易。瑞士監管局有權介入偏離章程的行為，但 Arrivillaga 和 von Schnurbein 的研究將這種監督定性為「反應式」（reactive）而非「主動式」（proactive）。[^11]

透明度赤字是最根本的矛盾。Proton 要求用戶將最敏感的通訊託付給它，同時拒絕公開經審計的財務報表、詳細的基金會治理紀錄，或任何接近 Wikimedia 標準的揭露。商業競爭是 Proton 不公開財務的合理理由之一。作為私人公司，揭露轉換率和利潤率可能給競爭對手帶來優勢。瑞士監管機構也確實在進行非公開審查。但對一個以信任為核心資產的組織而言，「法律不要求我公開」和「我選擇不公開」之間的差距，正是信譽風險的來源。

---

## 產品擴張與使命張力

Proton 的產品線擴張遵循了一個連貫的生態系策略——Mail（2014）、VPN（2017）、Calendar（2020）、Drive（2022）、Pass（2023）、Wallet（2024）、Docs（2024）、Sheets（2025）、Meet（2025）、Lumo AI（2025），加上收購的 SimpleLogin（2022）和 Standard Notes（2024）。[^37] 每個產品都增加留存和交叉銷售潛力，提高對 Google Workspace 的轉換成本。目標是捆綁訂閱（Proton Unlimited 約每月 10-13 美元）的整體變現。

但兩個新產品引入了與隱私使命的張力。

Proton Wallet（2024 年 7 月）引入了比特幣——一個公開區塊鏈、本質上可追蹤的支付系統。Stop Cop City 案中，信用卡識別碼正是讓用戶被辨識的漏洞。Proton 直到 2025 年 9 月才透過第三方中介接受以隱私為導向的門羅幣 Monero，且僅限間接途徑。

Lumo AI（2025）則面臨更根本的架構問題。AI 處理本質上需要伺服器端運算，與端到端加密的零知識架構存在結構性衝突。Lumo 託管在德國[^38]——這是 Proton 第一個移出瑞士管轄的產品，而 Tutanota 的案例已經示範了德國法院可以命令電子郵件服務開發監控功能。[^24]

這些擴張決策反映了 Proton 面臨的核心張力。作為基金會控股的商業公司，成長是維持自給自足的必要條件。但每一次產品線延伸都可能稀釋隱私承諾的純度，而隱私承諾正是用戶願意為 Proton 付費的理由。Cornforth 警告的市場壓力在此具體化了——競爭定價和用戶期待驅動的產品擴張，可能逐步推動使命偏移。[^20]

---

## 真正的治理創新，與尚未解決的透明度缺口

Proton Foundation 代表了建立商業可持續、使命鎖定的隱私科技公司最有前景的嘗試。freemium 訂閱模式避開了 Signal 的捐助者依賴、Mozilla 的企業附庸、OTF 的政治脆弱和 Ethereum 的幣價賭局。瑞士 Stiftung 結構提供了比美國 501(c)(3) 更強的目的鎖定保障。根植於 CERN 的開源透明文化和獨立審計，創造了 Crypto AG 這類專有替代方案無法匹配的問責機制。

但三個未解決的張力將決定 Proton 的走向。

**透明度赤字。** Proton 要求用戶信任它處理最敏感的通訊，同時拒絕公開達到 Wikimedia 標準的財務和治理揭露。[^15] 「法律不要求」和「我們選擇不公開」之間的差距，在一個以信任為核心資產的組織中尤其刺眼。

**治理集中。** Yen 的 CEO 兼受託人雙重角色是一個單點失敗風險，基金會章程在結構上沒有防止它。三位外部理事是制衡機制，但他們的效能在瑞士法律的不透明治理下無法被外界評估。[^11]

**行銷與現實的落差。** Proton 的品牌承諾隱私，但透明度報告顯示 88% 的法律命令合規率、異議率降至 5.9%[^26]，而中繼資料揭露在至少三個記錄案例中導致活動人士被辨識。加密從未被破解——但行銷敘事和營運現實之間的落差侵蝕了信任，而信任是 Proton 最核心的資產。

基金會治理的商業科技公司既非「基金會漂洗」（foundation-washing），也非純粹的使命組織。它是一種真正新穎的混合結構，擁有真實的治理優勢。問題在於 Proton 會朝 Wikimedia 級別的透明度演進，還是安於瑞士法律允許的不透明。答案將決定 Proton Foundation 模式成為使命驅動科技治理的範本，還是另一個關於善意在不透明結構中遭遇極限的警世故事。

---

## 引用來源

[^1]: CERN Courier, "From SUSY to the boardroom," 2019. https://cerncourier.com/a/from-susy-to-the-boardroom/
[^2]: 營收為多方第三方估算的綜合區間（$70-100M），Proton AG 為私人公司，從未公開經審計財務報表。
[^3]: Proton, Open Source Community. https://proton.me/community/open-source
[^4]: Indiegogo, ProtonMail 眾籌專案（2014）。目標 $100,000，實際募得 $550,377，10,576 名支持者。期間 PayPal 凍結 $251,721。
[^5]: Grand View Research, Privacy-Enhancing Technologies Market Report. 預估 25% CAGR，2030 年市場規模 $12.1B.
[^6]: Proton, "Transitioning Proton into a non-profit structure," 2024/6/17. https://proton.me/blog/proton-non-profit-foundation
[^7]: 瑞士民法典（Schweizerisches Zivilgesetzbuch）Art. 80-89bis，基金會章程與監管框架。
[^8]: Proton Foundation 官方頁面. https://proton.me/foundation
[^9]: TechCrunch, "Privacy app maker Proton transitions to non-profit foundation structure," 2024/6/17. https://techcrunch.com/2024/06/17/privacy-app-maker-proton-transitions-to-non-profit-foundation-structure/
[^10]: Signal Foundation IRS 990 Filing, ProPublica Nonprofit Explorer. https://projects.propublica.org/nonprofits/organizations/824506840
[^11]: Arrivillaga, R. & von Schnurbein, G., "Swiss foundation transparency," *International Journal of Not-for-Profit Law*, 2014. 該研究將瑞士基金會透明度制度定性為「極簡主義」（minimalist）。
[^12]: Signal Technology Foundation, IRS Form 990（2024 filing）。淨資產 -$4.7M，年支出 $38M，程式服務收入 $6.4M。via ProPublica.
[^13]: Mozilla Foundation, *2023 Financial Statements*（經審計）。Google 搜尋合約佔 2023 年 $653M 營收約 76%（$495M）；2020 年該比例為 86%. https://assets.mozilla.net/annualreport/2024/mozilla-fdn-2023-fs-final-short-1209.pdf
[^14]: TechCrunch 報導 Mozilla Foundation 2024/11 裁撤倡議部門（約 30% 人力）。Mitchell Baker 2022 年薪酬 $6.9M 來自 Mozilla Corporation 公開財報。Firefox 市佔率數據來自 StatCounter GlobalStats.
[^15]: Wikimedia Foundation Financial Reports, FY2024-25: $208.6M，800 萬捐助者，19 份連續 KPMG 審計，$144M 捐贈基金. https://wikimediafoundation.org/about/financial-reports/
[^16]: Ethereum Foundation, *Report 2024*. 國庫 $970.2M（2024/10/31 快照，其中 $788.7M 為加密資產），2023 年支出 $134.9M. https://ethereum.foundation/report-2024.pdf ; CoinDesk 報導 2024-2025 領導危機與 EigenLayer 利益衝突醜聞。
[^17]: Hansmann, H. & Thomsen, S., "The governance of foundation-owned firms," *Journal of Legal Analysis*, 13(1), 2021. 基於 110 家丹麥基金會控股企業的實證研究。
[^18]: Schröder, D. & Thomsen, S., "Foundation ownership and long-term firm value," *Journal of Corporate Finance*, 2025. 研究 Novo Nordisk、Carlsberg、Robert Bosch 等基金會控股企業的永續績效。
[^19]: Ebrahim, A., Battilana, J. & Mair, J., "The governance of social enterprises: Mission drift in hybrid organizations," *Research in Organizational Behavior*, 34, 2014. 區分「整合型」與「分化型」混合組織。
[^20]: Cornforth, C., "Understanding and combating mission drift in social enterprises," *Social Enterprise Journal*, 10(1), 2014.
[^21]: Zuboff, S., *The Age of Surveillance Capitalism*, Hachette, 2019.
[^22]: Schreiner, M. & Hess, T., "On the willingness to pay for privacy as a freemium model: First empirical evidence," *ECIS 2015 Proceedings*.
[^23]: Lavabit 案。Ladar Levison 提交 11 頁 4 號字體 SSL 金鑰被判藐視法庭，每日罰款 $5,000，最終選擇關閉服務。來源：多方報導及法院文件（United States v. Lavabit LLC, 2013）。
[^24]: Tutanota/Tuta 案。2020/11 科隆地區法院命令開發未來郵件攔截功能（涉勒索案件調查）。瑞士法院 2021/10 拒絕將 Proton 歸類為電信提供商。來源：Tutanota 官方聲明及多方報導。
[^25]: Proton VPN Transparency Report, 2019-2025. 累計超過 400 件法律命令，100% 拒絕率。Securitum 年度無日誌審計（2022 起）確認 bare-metal 自有伺服器無用戶活動記錄。
[^26]: Proton Transparency Report. 累計 45,667 件法律命令，88% 合規率（Mail）。年度趨勢：2017 年 26 件 → 2024 年 11,023 件（423x）。異議率：2021 年 21.2% → 2024 年 5.9%. https://proton.me/legal/transparency
[^27]: Open Technology Fund（OTF）。FY2025 撥款 $43.5M，完全來自美國政府。2020 年 Trump 任命者解僱執行長並更換理事會；2025/3 資金被終止。兩次均靠法院介入。來源：多方報導。
[^28]: Washington Post & ZDF, "#Operation Rubikon," 2020/2. CIA 和 BND 於 1970 年以 $5.75M 秘密收購 Crypto AG，50 年間向 120+ 國家出售蓄意弱化的加密設備。瑞士國會調查確認。
[^29]: Proton 安全審計：10 次獨立審計由 Cure53、SEC Consult、Securitum、Schellman 等執行。ISO 27001（2024/5）、SOC 2 Type II（2025/7）。來源：Proton 開源社群頁面. https://proton.me/community/open-source
[^30]: Securitum, Proton VPN no-logs audit（年度，2022 起）。確認 VPN 運行在 Proton AG 自有 bare-metal 伺服器，未發現用戶活動記錄。
[^31]: Kobeissi, N., "An analysis of the ProtonMail cryptographic architecture," 2018（自行發表）。指出 web-based 客戶端依賴 server-delivered JavaScript，無法在理論上保證端到端加密。
[^32]: TechCrunch, "ProtonMail logged IP address of French activist after order by Swiss authorities," 2021/9/6. https://techcrunch.com/2021/09/06/protonmail-logged-ip-address-of-french-activist-after-order-by-swiss-authorities/
[^33]: The Register, "ProtonMail deletes 'we don't log your IP' boast from website after French climate activist's email data retrieved by cops," 2021/9/7. https://www.theregister.com/2021/09/07/protonmail_hands_user_ip_address_police/
[^34]: 加泰隆尼亞獨立案（2024）。Proton 提供恢復信箱地址（iCloud），西班牙當局透過 Apple 識別身份。來源：多方報導。
[^35]: 404 Media, "Proton Mail Helped FBI Unmask Anonymous Stop Cop City Protester," 2026. FBI 透過 MLAT 取得信用卡付款識別碼（銀行卡識別碼）。MLAT 請求日期 2024/1/25. https://www.404media.co/proton-mail-helped-fbi-unmask-anonymous-stop-cop-city-protestor/
[^36]: Freedom of the Press Foundation, "Proton Mail is not for anonymity," 2025-2026 分析。結論：「使用 Proton 時，大多數人應該假設自己是可被識別的。」
[^37]: Proton 產品時間軸綜合自 Proton 官方網站及 Wikipedia: Proton AG 條目。SimpleLogin 收購（2022）、Standard Notes 收購（2024）。
[^38]: SwissInfo, "Proton does not trust Switzerland to host its AI servers," 2025. Lumo AI 託管在德國，為 Proton 第一個移出瑞士管轄的產品。
