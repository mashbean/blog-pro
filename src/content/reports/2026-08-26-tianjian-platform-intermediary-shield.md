---
title: "平台中介者如何成為保護獨立記者的屏障——在田間學講稿"
description: "2026 年 8 月 26 日「在田間學」線上活動講稿書面版。從平台服務業者的視角，看發表者從查資料到收款會留下哪些數位足跡、可連結性為何比單一紀錄更接近實際風險，以及隱私金流三代演化如何把問題從技術轉為治理。"
pubDate: 2026-08-26
tags: ["privacy", "digital-safety", "journalism", "platform-governance", "privacy-money", "matters"]
category: "數位治理"
series: "演講講稿"
aiModel: "Claude Opus 4.8"
aiPrompt: "以 safety.matters.town 安全指南與〈風暴鈔、隱の池與軌道炮〉一文為素材，為田間 8/26 線上活動撰寫書面語氣講稿：平台視角的數位足跡、發表者的數位衛生、隱私金流。"
aiPipelineStage: "final"
aiGeneratedDate: 2026-07-22
humanReviewed: true
---

> 這份講稿書面版由 AI 協作完成研究整理與初稿，我提供演講架構、論證方向、風格要求與最後校對，文中較高風險的引用與推論經過額外查核。

這篇是 2026 年 8 月 26 日「在田間學」線上活動的講稿書面版。田間專門報導全球華文媒體議題，螢幕另一端坐的多是獨立記者與自媒體經營者，所以我決定講一個平常很少有機會講的視角。市面上的數位安全指南，幾乎都站在使用者那一側，教你裝這個、開那個。但系統實際記錄了什麼，最清楚的莫過於平台自己。我在 Matters 做平台治理，每天面對的就是這些紀錄，於是這場演講從一個告解式的問題開始——如果我是平台，我看得到你的什麼？

## 一張旅程地圖，三種角色

要回答這個問題，我想先請各位在腦中畫一張「使用者旅程地圖」。地圖上有三種角色。

第一種是行動者，也就是記者本人。你查資料、聯絡受訪者、寫稿、發布、收款，每一步都是為了讓一篇報導活下來。

第二種是服務提供者。你的裝置、家裡的網路服務商、你用的平台、幫你處理付款的支付商、承載交易的公開區塊鏈。這些中介者各自替你完成一小段工作，也各自留下一小段紀錄。沒有任何一家看得到全貌，每一家都握有一塊拼圖。

第三種是監視者。政府、廣告商、駭客、幣流分析公司。這裡有個常被誤解的地方，監視者多數時候並沒有駭進任何系統。他們做的事情是向不同的服務提供者調資料、買資料，或者等其中一家外洩，然後把拼圖拼起來。

沿著這條線索走下去，整張地圖上最值得警惕的東西浮現了，也就是紀錄之間的「可連結性」，每一筆單獨的紀錄反倒沒那麼可怕。單獨一筆 IP 紀錄、一張照片的 EXIF、一次信用卡付款，都不足以指認一個人；但把網路服務商的連線時間、平台的上線習慣、支付商的法定身分三張拼圖放在一起，輪廓就出來了。這件事有扎實的實證研究背書。2008 年 Narayanan 與 Shmatikov 拿公開的 IMDb 影評當背景知識，從 Netflix 釋出的五十萬名訂戶的「匿名」評分資料中重新識別出具體使用者，連帶暴露了政治傾向這類敏感資訊<sup>1</sup>。監管機關後來也把這個認識寫進了規範。歐盟資料保護委員會 2025 年的假名化指引明講，只要存在可合理取得的額外資訊能把資料重新連回本人，資料就仍然是個資，而且那份額外資訊未必要跟資料放在同一個人手上<sup>2</sup>。額外資訊散落在不同服務商手裡，正是各位每天的處境。

帶著這三種角色，我們把記者的旅程走一遍。一共五站。

## 第一站，查資料

查一個敏感題目的時候，裝置、網路服務商、網站與 CDN 各自看到一小段。IP、DNS 查詢、連線時間、瀏覽器特徵。HTTPS 會加密傳輸的內容，但「你在什麼時間連向哪裡」這件事本身，網路上的觀察者仍然可能看見。對監視者來說，連線的節奏往往比內容更有用。一個化名帳號固定在深夜連向某家境外媒體的資料庫，這個模式本身就是線索。

## 第二站，聯絡與互動

追蹤、留言、按讚與上線時間放在一起，就能看出你常和誰往來。就算換了名字，頭像、自介、語氣與活動時間也可能把化名接回日常身分。用化名發稿，只處理了名字。你在化名帳號沿用了日常帳號的頭像、慣用的開場白、同一個時區的作息，這些片段每一個都在替監視者省力。

## 第三站，上稿

照片的定位資訊、文件的作者欄位、修改紀錄與發稿時間都是線索。這一站的紀錄大多由行動者自己親手放上去，也因此最有機會由自己親手拿掉。上傳前清中繼資料、檢查畫面背景有沒有露出地點，是整張地圖上少數完全操之在己的環節。

## 第四站，發布之後

這一站常被忽略，因為稿子發出去了，行動者以為旅程結束了。其實紀錄的旅程才剛開始。

文章一旦進入 IPFS、搜尋引擎快取或別人的備份，刪除原頁也收不回所有副本。這是雙面刃。對抗審查的時候，副本讓「單一前端被封鎖」不等於「內容消失」；對想撤回內容的人來說，同一個機制意味著發布是一個很難反悔的動作。

發布之後，平台端還會發生一件行動者看不到的事，就是政府資料調閱。平台收到公文時可以做的事，依序是形式審查（這份公文有沒有法律效力、管轄權及不及於平台註冊地）、範圍最小化（只回應法律要求的最小範圍，拒絕釣魚式調閱）、資料盤點（平台實際持有什麼），以及在法律允許下公開透明度統計。這套流程在業界已經有相當成熟的實作。Google 從 2010 年起每半年公布一次政府調閱請求的數量與遵從率<sup>3</sup>，Meta 也有對應的定期報告<sup>4</sup>，而我認為做得最徹底的是 Cloudflare。它的透明度報告逐類列明「哪一類資料，需要哪一種法律程序才會提供」，並維持著俗稱金絲雀條款的聲明，用「某句話還在」來間接告訴你「某類事還沒發生」<sup>5</sup>。要誠實補一句，透明度報告揭露的是量，看不到個案；附保密令的請求也只能靠金絲雀間接示警。它是誠實揭露的下限，還稱不上完整的保護。

回頭數這四步，我最想請各位記住的是第三步的盤點。沒有記錄的東西，任何公文都調不走。這聽起來像廢話，但它是架構設計層次的決定，要在寫第一行程式之前就想好，事後的法務再強都補不回來。而且資料最小化也寫進了法律。歐盟 GDPR 把它列為明文的法定原則，蒐集處理必須「適當、相關、以必要為限」<sup>6</sup>。

Matters 目前的做法，包括把文章送進 IPFS 分散保存、提供洋蔥小站作為 Tor 匿名唯讀入口（讓高風險地區的讀者連線去向留在自己手上）、記憶吐司（把公開文章下載成可離線保存的備份），以及把「平台看得到什麼」逐項寫出來的 [safety.matters.town](https://safety.matters.town)<sup>7</sup>。誠實揭露自己看得到什麼，是平台能給發表者的第一層保護。發表者只有知道足跡長什麼樣子，才有辦法決定要藏哪裡。

## 第五站，收款

名字可以化名，信箱可以另開，但錢一定要流到一個真實的人手上。支付資料通常比顯示名稱更接近法定身分。這一站的可連結性最強，值得單獨用一整段來講，我把它留到後面的金流部分。

先把前四站收攏一下。平台位居發表者與監視者之間，它選擇記錄什麼、保存多久、給誰看，就設定了發表者的風險底線。我要小心地說，這是一個「降低風險底線」的機制性主張。沒記錄就調不走，這條因果有規範與架構的支撐；至於「平台做了這些，記者實際上就更安全」，目前沒有實證研究能直接驗證，我沒辦法替各位打包票。

## 數位衛生

講完平台這一側，接下來的功課回到發表者手上。這套功課我喜歡稱作數位衛生（digital hygiene），像刷牙一樣，無需成為資安專家，但需要每天做。

許多人一想到資安就從挑工具開始，我會建議把順序倒過來，先想清楚對手是誰。EFF 的「Your Security Plan」把這件事整理成五個問題。我要保護什麼？要防範誰？被拿到的後果多嚴重？發生的可能性多高？我願意付出多少代價來防<sup>8</sup>？五問的重點在第二問。同網路的人、雇主、平台、國家級對手，看得到的東西完全不同，VPN、Tor、HTTPS 也各自只保護一段。工具名稱不等於保護範圍。

具體的行動，我把它分成三批。

今天就處理的。替平台帳號設專用密碼，交給密碼管理器；加強註冊信箱的安全，因為帳號復原通常回到信箱，多因素驗證要開；分開化名與其他帳號的識別線索，名稱、頭像、自介、聯絡方式與公開錢包全部換一套；裝置更新裝好、磁碟加密打開<sup>9</sup>。

接著準備的。為敏感工作建立獨立瀏覽環境，別在同一個環境裡登入會說出真實身分的服務；上傳前清掉照片與文件的中繼資料，也看一眼畫面背景；準備可還原的備份，而且備份後真的試著還原一次；預先把事件聯絡方式寫下來，包括聯絡人、帳號復原、證據保存、暫停發稿的條件，別等出事才臨時決定。

找人一起看的。跨境追查、立即人身風險與進階監控，超過任何公開清單能處理的範圍，交給 Access Now 數位安全熱線或 Amnesty Security Lab 這樣的專業團隊；疑似裝置被入侵時，先別在原裝置改密碼或討論事件，換一部可信任的裝置求助<sup>9</sup>。

數位衛生的終點也需要誠實面對。它到不了零風險，只能到「知道自己接受了哪些風險」。安全是一連串知情的取捨，別把它想成一種可以一次到位的狀態。

## 隱私金流，三代演化

回到第五站。許多海外獨立記者用多國帳戶收款來分散風險，這裡要先潑一盆冷水。分散跟匿名是兩回事。多國帳戶分散的是「被凍結」的風險；每個帳戶都做過 KYC，每個帳戶都接得回你，「被指認」的風險一點也沒少。

那加密貨幣呢？很多人以為加密貨幣是匿名的，事實恰好相反。公開區塊鏈上，只要知道某人持有哪個地址，每一筆匯款、每個往來對象、每個時間點都是公開的。幣流分析如今是一個成熟產業，Chainalysis、Elliptic、TRM Labs 都以此為業；按 Chainalysis 自家的估計，2025 年經鏈上洗出的非法資金超過八百二十億美元，這是業者立場的數字，拿來說明「鏈上追蹤已經工業化」綽綽有餘<sup>10</sup>。抓詐騙洗錢有用的同一套技術，也能用來追蹤獨立記者的每一筆讀者贊助。

好消息是，隱私金流的技術這幾年演化得很快，而它的演化史剛好是一部治理史。我用三代來講。

### 第一代，混幣器

代表是 Tornado Cash。概念像一座許願池，硬幣丟進去，過一段時間從另一頭撿出來，拿到的已經是別顆硬幣，幣流就此產生斷點。池子越大、時間越久，越能藏樹於林。問題是池子不分好壞。好人想要隱私，駭客與國家級網軍也想洗錢。

它的故事要用三段弧線來講，缺一段都會講錯。2022 年 8 月，美國財政部海外資產控制辦公室（OFAC）把 Tornado Cash 列入制裁名單，指控它自 2019 年以來洗錢超過七十億美元，其中包括北韓 Lazarus Group 相關的四億五千五百萬<sup>11</sup>。2024 年 11 月，第五巡迴上訴法院在 Van Loon 案做出關鍵判決——不可變的智能合約沒有所有權人、無法被控制也無法排他，法律意義上稱不上可制裁的「財產」，OFAC 逾越了法定授權<sup>12</sup>。2025 年 3 月 21 日，OFAC 把 Tornado Cash 從制裁名單上移除<sup>13</sup>。

到這裡故事還沒完，而且沒完的部分才是重點。協定除名了，人的刑責沒有終局。開發者 Pertsev 2024 年在荷蘭被以洗錢罪判五年四個月，目前附條件釋放、上訴進行中<sup>14</sup>；另一位開發者 Storm 在協定除名之後的 2025 年 8 月，照樣被紐約陪審團就「共謀經營無照資金傳輸業務」定罪，洗錢與違反制裁兩項罪名陪審團僵局，檢方已聲請重審，到這場演講的此刻都還沒有結果<sup>15</sup>。對物的制裁與對人的刑事責任分屬兩軌，法院把前者拆了，後者還在走。第一代留下的教訓有兩層。表層是「沒有排除壞人的機制，隱私工具活不下來」；深層是就算技術層面翻案了，寫程式的人依然可能坐牢，治理的爭議遠遠沒有落幕。

### 第二代，Privacy Pools

升級的方式，是在投幣之前先出示一張「匿名良民證」。2023 年，Buterin 等五位作者提出 Privacy Pools 的構想，2024 年正式刊出<sup>16</sup>。使用者用零知識證明，證明自己的存款屬於某個被視為合法的「關聯集」（association set），證明錢不髒，同時不透露自己是誰。論文的目標是讓誠實與不誠實的使用者走向「分離均衡」，好人拿得到隱私，壞人拿不到。

請注意論文自己就承認的開放問題。關聯集由「關聯集提供者」（ASP）維護，那麼誰來當這個提供者？誰定義好人？「好人壞人」在不同政權下的定義完全不同，獨裁國家裡的運動人士，可能正是別人制裁名單上的「恐怖分子」。對在座各位，這一點都不抽象。核心問題到這裡已經從密碼學搬家到治理。

實作面也要誠實交代。0xbow 團隊的 Privacy Pools 在 2025 年 3 月底於 Ethereum 主網上線，Buterin 本人是首日存款者之一<sup>17</sup>；到 2025 年底交易量約六百萬美元、使用者一千五百多人，並完成三百五十萬美元種子輪<sup>18</sup>。它活著，它可用，但規模與當年動輒數十億的混幣器完全是兩個量級。這仍是一個早期實驗，還稱不上成熟方案。

### 第三代，Railgun

如果 Privacy Pools 走白名單，Railgun 走的就是黑名單。資金進入（shield）的時候，系統自動生成零知識證明，證明這筆代幣與預設的非法地址名單沒有關聯，整個過程只用公開資料、也不揭露使用者的餘額與活動，機制叫 Private Proofs of Innocence<sup>19</sup>。需要時可以選擇性揭露、在數學上自證清白，用不著交出全部隱私。同樣的治理追問在這裡依然成立，名單由 list provider 維護。誰維護名單，架構圖上明明白白就是一個待回答的問題。

然後是那次著名的實戰。2025 年 2 月 12 日，Starknet 上的借貸協定 zkLend 被駭，據多家媒體報導損失約九百五十萬美元<sup>20</sup>。駭客把贓款橋接到 Ethereum、試圖送進 Railgun，被 Proofs of Innocence 機制拒斥，唯一可執行的動作是把錢退回原地址。Railgun 共同創辦人 Alan Scott 對記者的說法很直白，資金來路要是不正，壞人唯一能做的就是退回來源地址；報導同時稱這是 Buterin 等人論文構想的第一次實戰應用<sup>21</sup>。

我把這件事稱為「一次成功的邊界防守」，而且必須馬上加兩個限定。其一，這是單一事件，撐得起「隱私協定有能力拒收贓款」，撐不起「聯防有效」的通則。其二，拒斥跟受害者獲救是兩回事。駭客被拒之後，那筆錢並沒有回到受害者手上——後來駭客自稱誤把兩千九百多顆 ETH 送進一個假冒 Tornado Cash 的釣魚網站，全數被釣走，只留下一句「I am devastated」<sup>22</sup>；zkLend 本身則在遭駭四個月後宣布結束營運，失款始終沒有追回<sup>23</sup>。邊界守住了，城還是丟了。把這個案例講成隱私金流的勝利宣言，對不起在座每一位要拿它做決策的人。

### 四條實務建議

回到獨立記者的處境，我的建議收斂成四條。第一，先盤點再收款。整段付款流程會經過哪些服務商，平台、支付商、銀行、公開鏈各看得到什麼，寫下來再決定能不能接受。第二，錢包分離。敏感工作別沿用日常公開錢包，地址重用是幣流分析最愛的線索。第三，記住分散跟匿名是兩回事。第四，高風險收款先找人談。隱私金流工具在各地的法律風險落差極大，同一個協定，在 A 國是合規工具、在 B 國可能構成刑事風險，Tornado Cash 開發者的遭遇就是活生生的例子。收款之前，找懂在地法律與安全的人一起判斷，別自己硬撐。

也把話說在前頭，我做平台治理，我學的是技術與制度，這一段講的是技術現況與治理爭議，它是理解問題的地圖，算不上法律建議。涉及具體司法管轄區的合規判斷，請務必諮詢執業律師。

## 回頭過來看

準備這場演講的過程，我反覆回到同一個結論。平台中介者要成為屏障，做的其實是三件不會過時的事。誠實揭露自己看得到什麼、在架構上做到資料最小化、然後和發表者站在同一邊，把足跡一起藏好。技術會一直演化，混幣器變成 Privacy Pools、Privacy Pools 之後有 Railgun，名單治理的難題也許十年後還在吵，但這三件事不會變。

風險歸零做不到，平台與發表者可以做到的，是把「發表者單方承擔」改寫成「兩邊共同管理」。這份講稿引用的資源清單整理在 [safety.matters.town](https://safety.matters.town)。八月底，田間委託我與 Toomore 合寫的數位資安小冊也會發給活動參與者。

---

## 參考資料

1. Narayanan, A., & Shmatikov, V. (2008). Robust de-anonymization of large sparse datasets. *Proceedings of the 2008 IEEE Symposium on Security and Privacy*, 111–125. https://doi.org/10.1109/SP.2008.33
2. European Data Protection Board (2025). *Guidelines 01/2025 on Pseudonymisation*. https://www.edpb.europa.eu/system/files/2025-01/edpb_guidelines_202501_pseudonymisation_en.pdf
3. Google. *Transparency Report — Requests for User Information*（2010 年起半年一期）. https://transparencyreport.google.com/user-data/overview
4. Meta. *Transparency Center — Government Requests for User Data*. https://transparency.meta.com/reports/government-data-requests/
5. Cloudflare. *Transparency Report*（半年一期，含 warrant canary 聲明）. https://www.cloudflare.com/transparency/
6. GDPR, Art. 5(1)(c)（資料最小化原則）與 Recital 26（可識別性）. EUR-Lex 32016R0679.
7. Matters. *safety.matters.town — Matters 安全指南*. https://safety.matters.town；抗審查架構另見洋蔥小站 https://github.com/thematters/matters-onion-gateway 與記憶吐司 https://lifeboat.matters.town/
8. Electronic Frontier Foundation. *Surveillance Self-Defense — Your Security Plan*. https://ssd.eff.org/module/your-security-plan
9. Committee to Protect Journalists. *CPJ Safety Kit*（物理／數位／心理安全與風險評估）. https://cpj.org/safety-kit/；事件支援另見 Access Now Digital Security Helpline https://www.accessnow.org/help/ 與 Amnesty International Security Lab https://securitylab.amnesty.org/get-help/
10. Chainalysis (2026). *Crypto Crime Report 2026*（業者估計，2025 年非法資金洗錢逾 820 億美元）. https://www.chainalysis.com/reports/crypto-crime-2026/
11. U.S. Department of the Treasury, OFAC (2022-08-08). *U.S. Treasury Sanctions Notorious Virtual Currency Mixer Tornado Cash*（Press Release JY0916）. https://home.treasury.gov/news/press-releases/jy0916
12. *Van Loon v. Department of the Treasury*, No. 23-50669 (5th Cir. Nov. 26, 2024)；律所分析見 Steptoe. https://www.steptoe.com/en/news-publications/international-compliance-blog/treasury-department-delists-tornado-cash-following-the-fifth-circuits-decision.html
13. Venable LLP (2025-04). *A Legal Whirlwind Settles: Treasury Lifts Sanctions*（OFAC 2025-03-21 除名）. https://www.venable.com/insights/publications/2025/04/a-legal-whirlwind-settles-treasury-lifts-sanctions；另見 DeFi Education Fund. https://www.defieducationfund.org/treasury-department-officially-delists-sanctions-on-tornado-cash/
14. CoinDesk (2025-02-07). *Tornado Cash Developer Alexey Pertsev Set to Be Released From Prison*. https://www.coindesk.com/policy/2025/02/07/tornado-cash-developer-alexey-pertsev-set-to-be-released-from-prison
15. Mayer Brown (2025-08). *The Tornado Cash Trial's Mixed Verdict: Implications for Developer Liability*. https://www.mayerbrown.com/en/insights/publications/2025/08/the-tornado-cash-trials-mixed-verdict-implications-for-developer-liability；後續進度見 DeFi Education Fund. *U.S. v. Storm 2026 Update*. https://www.defieducationfund.org/u-s-v-storm-2026-update/
16. Buterin, V., Illum, J., Nadler, M., Schär, F., & Soleimani, A. (2024). Blockchain privacy and regulatory compliance: Towards a practical equilibrium. *Blockchain: Research and Applications*, 5(1), 100176. https://doi.org/10.1016/j.bcra.2023.100176
17. The Block (2025-03-31). *0xbow unveils 'Privacy Pools'*. https://www.theblock.co/post/348959/0xbow-privacy-pools-new-cypherpunk-tool-inspired-research-ethereum-founder-vitalik-buterin
18. GlobeNewswire (2025-11-18). *0xbow Closes $3.5M Round for Compliant Crypto Privacy Technology Following Ethereum Foundation Integration*. https://www.globenewswire.com/news-release/2025/11/18/3190435/0/en/0xbow-Closes-3-5M-Round-for-Compliant-Crypto-Privacy-Technology-Following-Ethereum-Foundation-Integration.html
19. Railgun. *Private Proofs of Innocence*（官方文件）. https://docs.railgun.org/wiki/assurance/private-proofs-of-innocence
20. Decrypt (2025-02-12). *DeFi Lending Platform zkLend Drained of $9.5 Million in Exploit*. https://decrypt.co/305590/defi-lending-platform-zklend-9-million-exploit
21. DL News (2025-02-14). *Crypto privacy software refuses money stolen in $9.5m hack*. https://www.dlnews.com/articles/defi/crypto-privacy-software-refuses-money-stolen-in-95m-hack/
22. CCN (2025-04). *zkLend Hacker Falls Prey to Phishing Scam, Loses Stolen ETH*. https://www.ccn.com/news/crypto/zklend-hacker-prey-phishing-scam-lose-stolen-eth/
23. DL News (2025-06). *DeFi protocol zkLend shuts down four months after $9m hack*. https://www.dlnews.com/articles/defi/defi-protocol-zklend-shuts-down-four-months-after-9m-hack/
