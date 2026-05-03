---
title: "公共鏈被身分基建請出去了嗎？一條 SSI 的去鏈化路徑"
description: "DID/VC 早期確實有公共鏈基因，但十年下來規格、法規、撤銷時效、營運責任四道力量把信任根擠回 PKI 與聯盟鏈。這篇盤點這條去鏈化路徑、QuarkID 與不丹 NDI 等邊角實證，並收束在公共鏈在身分基建仍能站的五個位置。"
pubDate: 2026-05-02
date: 2026-05-02
tags: ["did", "vc", "ssi", "digital-identity", "blockchain", "eidas", "digital-wallet", "w3c", "trust-list"]
category: "數位身分與信任"
aiModel: "Claude Opus 4.7"
aiPrompt: "DID/VC 標準源於公共區塊鏈的抗審查信念，為何 trust list 反而沒被硬綁在公共鏈上？部署 DID/VC 的政府與企業，真正使用公共區塊鏈的為何這麼少？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-01-did-vc-public-blockchain"
aiGeneratedDate: 2026-05-02
humanReviewed: true
lang: "zh-TW"
---

去年某個下午我手癢去翻 W3C DID Specification Registries，本來只是想找一條漂亮的 method 直接套到一個小實驗，結果讀著讀著有點愣住。整份清單上掛著 did:btcr、did:ethr、did:ion、did:sov，每一條 method 都是從某條公共鏈長出來的；但同年我去盤點各國政府數位身分計畫，能找到把 trust root 或信任清單放在無許可公共鏈上的案例，扣著手指算到三隻——阿根廷布宜諾斯艾利斯的 QuarkID 跑在 ZKsync L2 上<sup>3</sup>，不丹 NDI 在 2025 年 10 月正式遷至 Ethereum 主網、成為全球第一個把人口規模國家身分錨在公共鏈主網的國家<sup>28</sup><sup>37</sup>，台灣數位發展部的數位憑證皮夾把可信任的憑證發行者清單記錄在公共區塊鏈上<sup>24</sup><sup>36</sup>。

剩下的歐盟 EBSI、ISO mDL、新加坡 Singpass、印度 Aadhaar、巴西 gov.br、日本マイナンバー数字認証アプリ（My Number 數位認證 App）、台灣 FidO 快速身分識別連線，幾乎清一色選了聯盟鏈、政府 PKI，或乾脆完全無鏈。

三隻反例擺著、二十多隻主流走 PKI/聯盟鏈，這個比例本身就值得多看兩眼。技術社群當年那一批熱血十大原則，跟十年後的部署清單對不上的差距為什麼這麼大？而 2025 年下半開始浮出水面的這幾個公共鏈反例，又是怎麼長出來的？我一開始的猜測是某種陰謀論（某些大公司在標準制定時偷偷把公共鏈擠出去 XD），但讀完規格、判決、ARF 文件，這個劇本撐不太住。

比較像的描述是一條歷史路徑。DID/VC 走出了一條去鏈化的演化軌跡，沿途由幾道彼此沒對齊的力量輪流推擠。要把它說清楚，只能慢慢從基因講起，再走到規範、政策、技術、實證五層。最後我才有點底氣盤點公共鏈在身分基建還能做什麼。

## 早期 DID 真的有公共鏈基因

2015 到 2018 年那一批 SSI 與 DID 文件，公共區塊鏈被當成預設舞台，談不上邊角假設。Christopher Allen 2016 年那篇〈The Path to Self-Sovereign Identity〉裡，「Existence」「Control」「Persistence」這幾條原則直接把無許可帳本當成 SSI 默認的承載體<sup>1</sup>。

W3C DID Specification Registries 早期收的 method，did:btcr 由 Allen 等人 2017 年設計、did:ethr 在 2018 年由 uPort/ConsenSys 提出、did:ion 由 Microsoft 2019 年揭曉、did:sov 對應 Sovrin 與 Hyperledger Indy<sup>2</sup>。這些 method 在「公共」與「許可」之間分布有差，整體傾向卻是清楚的，公共鏈派那時候講話最大聲。

但同一條時間軸上，妥協已經先發生過一次。Sovrin Foundation 2017 年的 Trust Framework 把目標寫成「全球公共實用工具」（global public utility），實作底層卻挑了 Hyperledger Indy 的許可式聯盟鏈<sup>4</sup>。這已經是 SSI 社群在「公共可讀、許可可寫」之間的早期讓步，預告了後面更大幅度的去鏈化。同個時期 did:web 與 did:key（2019 年起逐步成形）<sup>2</sup>也已經存在。所以「公共鏈基因」更像一種設計取向的共同預設，並非單一執行模式。

## W3C 把選擇權交還給 method

W3C DID Core v1.0 在 2022 年 7 月 19 日成為 Recommendation。文件 §1 Introduction 寫得很乾脆，「This specification does not require any specific blockchain or distributed ledger technology」<sup>5</sup>。method 設計成可插拔，DID 解析交給各 method 各自負責。規格本身對 ledger 中立。

這個中立看起來像務實，背後其實有真實的派系角力。同年 6 月 30 日 W3C Director 對 DID 1.0 的 Formal Objections 做出裁決，紀錄顯示 Mozilla 與 Google 提出反對，質疑在沒有 method 評選機制的情況下就把規格升級為 Recommendation；Director 最終批准了規格，並要求工作組後續處理 method 選型疑慮<sup>6</sup>。

所以「中立化是妥協性共識」這句話有旁證。並非全體一致認為 ledger 議題已經解決，而是工作組把這個爭議留到 method 層去處理，先讓核心規格過關。

我對這個說法的把握度想留個開口。把 method 中立化讀成「公共鏈派與無鏈派妥協的結果」屬於溯因推理，講白了是目前可得的最佳解釋之一，不到演繹結論的強度。要把它再抬高一個層級，得逐條盤點 W3C DID WG 的 GitHub issue 與 mailing list 紀錄；那層 primary source 我手上還缺<sup>7</sup>。

換句話講，中立化也可能僅僅是「不同 use case 需求不同」的工程務實。我這邊採用的是「最佳解釋之一」的論證強度，留下被推翻的空間。

## 四道壓力把信任根擠離公共鏈

規格層留下的可插拔接口，到了部署層被法規與營運責任填上具體的選型。這個跨層級的接力，是整條去鏈化路徑最承重的環節。

如果只有規格中立，現實部署應該還是會有相當比例選公共鏈。把 trust root 一路推離無許可帳本的力量，更直接的來源是四道彼此疊加的法規與營運壓力。（我知道這段很硬，撐住）

第一道是 GDPR。歐盟資料保護機關裡，最先把問題端上枱面的是法國 CNIL，2018 年發布的〈Blockchain – Solutions for a Responsible Use〉明確指出公共區塊鏈與 GDPR 第 17 條被遺忘權的衝突，並建議鏈下儲存個資、鏈上只放 hash<sup>8</sup>。EDPB 後續多份意見延續這條立場。「不可變」這個原本被當成公共鏈優點的特性，在歐洲個資治理框架下成了直接負擔。

想像一下你的駕照被撤銷，但區塊鏈上還寫著它有效。撤銷不是刪除這份紀錄，是要在另一個地方公告作廢。整個動作有點像把過期食材從廚房架上拿下來，但收據還在某個資料庫躺著（這個比喻可能 stretch 了，但讓我繼續）。這個落差遇上 GDPR，個資自然沒辦法直接寫上鏈。

第二道來自 eIDAS。Regulation (EU) 2024/1183（俗稱 eIDAS 2.0）2024 年 4 月正式公告，Article 5a 與 5b 規定 European Digital Identity Wallet 與 QEAA（Qualified Electronic Attestation of Attributes）的 issuer 必須是 Qualified Trust Service Provider，並由會員國指定的監督機構審查<sup>9</sup>。EUDI Architecture and Reference Framework v1.4.0 的 §6 Trust Model 描述 Trusted List 沿用 eIDAS 1.0 的 Commission Implementing Decision (EU) 2015/1505 與 ETSI TS 119 612，仍是 XML Trusted List 模型<sup>10</sup><sup>11</sup><sup>12</sup>。ARF 是否有明文「為什麼不選公共鏈」，公開資料看起來是「沿用」而非「拒斥」的論述方式。

第三道來自 KYC/AML。FATF Recommendation 16（Travel Rule）對 VASP 與發行者的 KYC、紀錄保存要求<sup>13</sup>，加上各國洗錢防制法的舉證鏈，使得「可撤銷」「可追究法人」的需求高過「演算法保證」。當監管者要找人問責時，無許可鏈上沒有對應的責任主體。

第四道是公部門部署裡再尋常不過的「營運責任」。政府計畫需要明確的負責機關、預算來源、操作合約、申訴管道，這些東西在無許可鏈上沒有對應角色，能上鏈的只有節點，節點承擔不了行政責任。

四道力量彼此之間能不能單獨成立？我試著拿掉一道道做反事實。

GDPR 沒有第 17 條的世界裡，eIDAS 的 QTSP 問責要求依然是 1999 年電子簽章指令的延續、依然會逼出 Trusted List 模型；eIDAS 不存在的世界裡，Sovrin 案例顯示營運責任主體本身已經把社群推向聯盟鏈<sup>4</sup>。

把 FATF Travel Rule 整個拿掉呢？歐洲的 QTSP 問責與被遺忘權早在 FATF 把虛擬資產納管之前就已經把架構框死，公共鏈作為信任根的選項在那個時間點就已經很難談。把 KYC 拿掉，去鏈化的力道會弱一些，但弱不到讓公共鏈翻盤。

最後這一道（營運責任）的反事實最有意思。假設整個部署都是純民間、政府完全沒進場，責任主體的壓力會不會就消失？Sovrin 的紀錄給了反向答案。即使在沒有政府問責的純民間場景，只要服務承擔了一定規模的身分發行，運維方仍然會被資金來源、SLA、申訴流程逼到去找一個有法人主體的節點集合<sup>4</sup>。聯盟鏈仍是最自然的著陸點。

四道壓力擺在一起看，更接近一個多重共因的均衡，並非哪一道單獨拍板。

## 撤銷時效跟不可變帳本的吵架

撇開法規不談，純粹從工程角度，公共鏈跟 VC 撤銷需求之間還有一層獨立的不對齊。

VC 撤銷需要即時、可重複改寫、可批次更新；公共鏈的高 finality 延遲與寫入成本，跟這組需求對不上。Microsoft ION 採 Sidetree 在 Bitcoin 上做 batch anchoring，每筆寫入仍然受 Bitcoin block time（自 2009 年至今穩定在約 10 分鐘）的節制<sup>14</sup>。把每張 VC 的撤銷狀態都直接上鏈，成本與延遲都不切實際。

W3C 在規格層也做了相容的選擇。Bitstring Status List v1.0 規格刻意把撤銷狀態當成「資源可發佈於任何 URL」的中立模型（HTTPS、IPFS、鏈上錨定皆可），避免綁死特定基礎設施<sup>15</sup>。VC Data Model v2.0 §5.4 對撤銷機制中立<sup>16</sup>。這些設計選擇本身就是工程社群面對「鏈上即時撤銷不可行」的具體回應。

這條技術論點有開口。Layer 2 與 ZK rollup 把 finality 與寫入成本顯著壓低之後，「公共鏈不適合即時撤銷」的論斷會被改寫一部分；阿根廷 QuarkID 上 ZKsync 的選擇，正是站在這個技術變遷的前緣<sup>3</sup>。我這條論證的範圍鎖在「目前主流公共鏈基底層」，並對 L2/ZK 路線保留開口。L2 finality 跌破 1 秒之後，撤銷時效這條論點需要重新檢驗。

## 把案例攤平來看

把目前可公開蒐集的政府級身分計畫攤開排排站，trust root 在無許可公共鏈上的案例仍然稀少，但 2024–2026 年陸續浮出幾個重要的反例，整張盤點圖比 2022 年那時複雜得多。

歐盟層級的 EBSI 是聯盟鏈，使用 Hyperledger Besu 或 Quorum 變體，由會員國節點維護<sup>17</sup>。ISO/IEC 18013-5:2021 mDL 是 PKI 加上設備本地的設計，完全無鏈；AAMVA 美國駕照數位化指南沿用此架構<sup>18</sup><sup>19</sup>。新加坡 Singpass 以 NRIC 為核心、搭配政府 PKI<sup>20</sup>。印度 Aadhaar 是中央化生物特徵資料庫加 API<sup>21</sup>。巴西 gov.br 採聯邦 PKI<sup>22</sup>。日本マイナンバー数字認証アプリ 2023 年推出，仍以 PKI 為信任根<sup>23</sup>。台灣的 FidO 快速身分識別連線、自然人憑證、內政部憑證管理中心則是清一色 PKI 路線<sup>24</sup>。

失敗與受阻案例也得算進來，否則就會變成倖存者偏差。德國 ID Wallet 2021 年上線後因技術穩定性與安全性問題被 BMI 撤回，背後 IDunion 體系採 Hyperledger Indy 變體<sup>25</sup>。肯亞 Huduma Namba 2021 年遭高等法院裁定資料保護不足、部署受阻，這是中央化資料庫架構的失敗，跟鏈上鏈下無關<sup>26</sup>。Sovrin Foundation 2021 年進入重整，旗艦基金會的資金模式無法支撐基礎設施運作；這個失敗應該與「SSI 路線整體」分開理解<sup>27</sup>。

公共鏈反例這層最有意思的事情都在這兩三年發生。阿根廷 Buenos Aires 與 Extrimian、Matter Labs 合作的 QuarkID，2024 年部署在 ZKsync L2，是政府級 DID 真正落地在公共鏈的早期實例。第一階段已開放給布宜諾斯艾利斯市民日常使用，實際採用規模、長期維運、跨域互通仍待後續驗證<sup>3</sup>。

不丹 NDI 走了一條更激進的路。2023 年 10 月上線時用 Hyperledger Indy，2024 年 8 月遷至 Polygon，2025 年 10 月 13 日由 Druk Holding & Investments 與 GovTech 正式宣告遷至 Ethereum 主網，預計 2026 年第一季完成約 80 萬居民全部 credential 的鏈上錨定遷移<sup>28</sup><sup>37</sup>。GovTech 秘書 Jigme Tenzing 公開的選型理由是 Ethereum 的「高度去中心化使其近乎不可中斷」；Ethereum Foundation 總裁 Aya Miyaguchi 也公開稱這是「人口規模身分系統首次錨在公共網路」的里程碑。把它放在這篇文章的脈絡，等於是 thesis 的一個強反例。在 GDPR 不適用、QTSP 體系不直接約束、KYC 監管壓力相對輕的脈絡裡，公共鏈作為信任錨並非結構上不可行，更像是治理與法規條件的函數。

台灣的數位憑證皮夾是另一個近期的反例，且採取的是「混合架構」這條折衷路線。數位發展部 2024 年起逐步釋出的數位憑證皮夾（Taiwan Digital Identity Wallet, TW DIW）採 OpenID4VCI / SD-JWT 規格，把可信任的憑證發行者清單（trust list）記錄在公共區塊鏈上，讓清單本身像被刻在石碑上、無法被個別參與者單方偽造或竄改<sup>24</sup><sup>36</sup><sup>38</sup>。圈內資訊指向使用的是 Ethereum 系公共鏈，但具體 chain ID、合約位址、DID method 在 wallet.gov.tw 開發者頁與一手政府文件裡尚未對外完整揭示，這層細節仍待補。台灣的選擇跟不丹有層次上的差別。trust root 的法定授權仍由數發部、內政部憑證管理中心、各原始發證機關承擔，公共鏈僅承擔「信任清單錨定」這個有限角色，這比較貼合 thesis 中「公共鏈作為時間戳/錨定/不可變副本」的建設性位置定位。

代幣化身分這條路線是另一個值得分開看的範疇。Cheqd 把 VC 撤銷與 trust registry 與代幣經濟綁在一起<sup>29</sup>；Polygon ID、KILT、Atala PRISM 等也各有民間試點與企業採用<sup>30</sup><sup>31</sup><sup>32</sup>；Worldcoin 把生物特徵唯一性與代幣結合，遭遇西班牙、葡萄牙、肯亞、香港等地的隱私調查或暫停<sup>33</sup>。這些案例有個共同點，政府與大型受監管金融機構直接把 trust root 移交給代幣化基礎設施的實證仍接近於零。把它們一筆帶過為「失敗」並不準確。它們是另一條路線，目前在邊角試點與代幣經濟驅動的場域裡持續演化。

台灣這邊另一層民間實踐也得分清。Numbers Protocol 把影像與事件存證寫到 IPFS 與鏈上，採用方為合作媒體與 NGO，不直接承擔身分簽發角色，比較像建設性的時間戳功能<sup>34</sup>。FAB DAO 2021 年起以鏈上投票實驗、NFT 募款形式運作，屬公民倡議與 DAO 治理範疇，未承擔身分根<sup>35</sup>。把這些民間試點跟「政府身分基建」混為一談是常見誤讀。把這些民間試點與公部門的數位憑證皮夾分開看，台灣本地的鏈上身分實踐其實有兩個層級在同時推進。

把以上案例攤平排在一起看，去鏈化的故事比 2022 年那時候更不單薄。主流仍是 PKI 與聯盟鏈，但公共鏈作為信任錨或 trust root 的反例正在從「個位數零星實驗」變成「跨大洲多國試行」。不丹是把 trust root 整個搬上公共鏈主網，台灣是把信任清單錨定在公共鏈，QuarkID 是把政府級 DID 放在 L2。三條路線在三個不同強度上對 thesis 提出修正，但都還沒推翻它，因為主導市場的歐盟、東亞主要經濟體、北美仍走聯盟鏈/PKI。

## 那公共鏈到底還能做什麼？

把「為何不上鏈」說完之後，更值得停下來盤點公共鏈在這個基建群裡仍能承擔哪些事。把它寫成「公共鏈被允許做的事」會洩漏一種被趕出去的氣味；換句話講，這份清單應該讀成「公共鏈在身分基建裡真正擅長的事」。回到開頭擱在心上的兩個提問（為何 trust list 沒被硬綁公鏈、為何政府實際採用這麼少），前面五節已經把壓力來源講完了，這節要回答的是公共鏈仍然可以站哪裡。

我想先講一個觀察。下面這五個位置乍看之下都是退讓，但放在治理現實裡，它們其實是公共鏈最有機會的位置。信任鏈像一棟大樓的承重牆，承重牆的位置不在門面、不在屋頂，是埋在牆裡你看不到但結構少了會塌的那幾根。公共鏈現在站的就是這幾個結構位。

第一個位置是撤銷狀態的不可變冗餘副本。Bitstring Status List 規格本身就允許把撤銷位元字串發佈到 IPFS、鏈上錨定、HTTPS 任何地方<sup>15</sup>。用公共鏈做撤銷狀態的 immutable mirror，可以在傳統 CA 或 trust list 服務商離線時提供獨立可驗證的副本。價值在「冗餘」這個關鍵詞，不要把它放成「主控」。換個畫面講，很像災備磁帶在角落安靜躺著，不出事的時候沒人想起它，出事的時候它救命。

第二個位置是跨組織信任清單的時間戳錨定。誰在何時把誰加入或移除信任清單，這個變更歷史本身值得有一個可公開稽核的時間軸。Microsoft ION 的 Sidetree on Bitcoin 路線屬於這個方向<sup>14</sup>。EBSI 過去也曾在文件中討論對 Ethereum 的可選錨定<sup>17</sup>。公共鏈承擔的是「時間軸誠實」，trust root 的治理仍由法定機構或聯盟治理結構持有。

第三個位置是跨域審計事件鎖。多個組織共同處理一條認證流程，事件序列的不可篡改性對於事後追責有用。這個角色跟 Numbers Protocol 在影像存證脈絡所做的事情同質，不承擔身分簽發，承擔事件的時間順序與內容指紋<sup>34</sup>。

第四個位置是「特定治理脈絡下直接承擔 trust root 或信任錨」。阿根廷 QuarkID（ZKsync L2 上的政府級 DID）<sup>3</sup>、不丹 NDI（2025 年 10 月遷至 Ethereum 主網的人口規模身分系統）<sup>28</sup><sup>37</sup>、台灣數位憑證皮夾（信任清單錨定於公共鏈）<sup>24</sup><sup>36</sup> 是 2024–2026 年浮出水面的三條路線。在規模較小、法規相對寬鬆、政府願意承擔技術前緣風險的脈絡裡，公共 L2 或主網仍可能直接承擔 trust root；在治理仍由法定機構承擔的脈絡裡，公共鏈也可以只承擔信任清單的不可變錨定，把法律問責與技術錨定分層。把這個位置當普遍解會誤判，當特定邊界條件下的可行解，比較準確。邊界條件包含幾項要素，包含法規面寬鬆或可分層、政權延續性可預期、L2 finality 與成本已壓到可接受區間、跨域互通在地理範圍內可控、且國家或部會願意接受 Ethereum Foundation 等海外組織與本國治理同框。這個位置最有意思的地方是它不是「邊角」而是「主流的另一條軌道」，2024 年之後上面跑的不只是民間實驗，是真正服務人民的政府部署。

第五個位置是邊角實驗的試錯空間。Cheqd、Polygon ID、KILT、Atala PRISM、Worldcoin 各自在不同假設下做實驗<sup>29</sup><sup>30</sup><sup>31</sup><sup>32</sup><sup>33</sup>。即使其中多數短期內不會被法規導向的歐盟與東亞政府部署採納，這個試錯本身對 SSI 整體規格演化有價值。L2/ZK 撤銷模型、token-driven trust registry、生物特徵唯一性協定、許可式 SSI 與公共鏈間的橋接，這些議題都需要持續跑出實證。這層試錯像皮克敏升等，每一隻死掉的小皮克敏都把後面那一群往前推了一點點。

這份清單放下來，去鏈化的故事就不再是「公共鏈在身分領域失敗」這麼單薄。比較貼切的描述更接近「信任根的治理屬性」與「公共鏈無需許可的精神」之間發生了角色再分工。信任根承擔法定問責、撤銷時效、被遺忘權，這些屬性需要法人主體與行政結構撐住；公共鏈承擔時間戳誠實、跨域審計鎖、邊角實驗、高自治場域的 trust root，這些是無許可基底真正擅長的事。兩種屬性沒必要塞進同一個架構裡彼此犧牲。講白了，是兩種秩序，一種要有人能被告，一種要沒有人能擋。

## 我自己論證裡的薄區

這份描述有幾個明顯的薄區，先擺出來給後續查核與補強用。（歹勢，這節會囉唆一下，但不寫出來會良心不安。）

W3C DID WG 內部關於 ledger 與否的辯論，目前能引到的只到 Director 裁決公告與規格主文。具體 GitHub issue ID、mailing list thread、rubric 提案的逐條盤點，這份描述還沒走到那一層<sup>7</sup>。要把「中立化是妥協」抬到更強的論證強度，得有這層 primary source 補位。

EUDI ARF 是否有明文「為什麼不選公共鏈」，公開資料看起來是「沿用 Trusted List」的論述方式，未見直接拒斥條款。這個結論應該以「沿用」與「未採」表述，並非「明文拒絕」。

不丹 NDI 在 2025 年 10 月才剛遷至 Ethereum 主網，鏈上合約位址、跨鏈撤銷機制、800K 居民全部 credential 的遷移時程細節，公開報導層級多於 Druk Holding & Investments 與 GovTech 一手公告層級<sup>28</sup><sup>37</sup>。第一年的營運資料、可用性數據、與 Polygon 階段比較的成本/時延落差也還沒有第三方審計。

台灣的部分要分兩層自陳。FidO 與內政部憑證管理中心走 PKI 是清楚的<sup>24</sup>；數位憑證皮夾（TW DIW）把信任清單放在公共區塊鏈上這件事，公開報導與圈內資訊已多處印證<sup>36</sup>，但具體 chain ID、合約位址、DID method、年度預算（NTD）、實際採用人數，在 wallet.gov.tw 開發者頁與一手政府文件層仍未對外完整揭示。這篇文章採信圈內資訊指向「Ethereum 系」這個陳述，但把鏈別與合約細節留作待查核。

QuarkID 的真實採用人數、第二階段擴展計畫、跨域互通驗證，目前報導層級多於官方文件層級<sup>3</sup>。把它當「邊緣實證」處理是恰當的；當「主流可行性證明」就會跨越樣本能支撐的強度。

L2 與 ZK 技術發展是這條論證最容易被改寫的環節。撤銷時效與不可變帳本衝突這條技術論點，如果 L2 的 finality 與成本進一步下降，並出現可大量批次撤銷的鏈上資料結構，論點強度會減弱。

寫到這裡有點感慨。我以為自己會寫一篇「公共鏈為什麼輸了身分這場仗」的檢討文，結果寫到一半發現劇本不太一樣。輸贏是太簡單的詞。比較像是技術圈花了十年才把「信任根」與「無許可基底」這兩件事拆開來，跌跌撞撞學會它們各自能扛什麼、不能扛什麼。

公共鏈沒有被請出去，它只是退到自己真正擅長的位置——時間戳、冗餘、邊角實驗、特定脈絡的 trust root。這個位置不大聲，但很穩。

回頭看 2018 年第一次讀 Christopher Allen 那十大原則時的興奮，再看 2026 年的部署地圖，這張圖比想像中混雜。歐盟、新加坡、印度、日本、巴西的主流仍是 PKI 與聯盟鏈，但不丹整個國家身分搬上了 Ethereum 主網、台灣的數位憑證皮夾把信任清單放在公共鏈、阿根廷 QuarkID 在 ZKsync 上跑——三條路線分別代表三種強度的「公共鏈作為信任錨」實踐，2025 年下半到 2026 年初突然集中現身。十年前那一批熱血十大原則沒有完全被實現，也沒有被完全推翻，比較像是被現實切片成「能做」與「不能做」兩堆，再讓不同國家依各自治理脈絡選擇站在哪一邊。

對於還在台灣這邊看數位身分規劃的我來說，這個混雜景觀反而給了一點底氣。公共鏈在身分基建能做事，題目只是長得跟十年前的願景不太一樣了。也提醒自己一件事：thesis 不是定論，只是 2026 年此刻這份地圖讀出來的方向感；下一年地圖會不會再洗一次牌，誰也說不準。

下一個十年呢？等 L2 finality 跌破一秒、可大量批次撤銷的鏈上資料結構成熟、Ethereum 主網的 trust root 在不丹之外開始被其他國家複製之後，今天這份清單裡哪幾個位置會被擠出去、哪幾個會擴張，老實說我也還沒答案。台灣下一階段的數位憑證皮夾會不會像不丹那樣再走一步、把 trust root 也搬上鏈，是我自己最想盯著看的下一個訊號。

是以為記。

## 參考資料

1. Allen, Christopher. "The Path to Self-Sovereign Identity." *Life With Alacrity*, 2016-04-25. https://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html （查閱日期 2026-04-30）。來源等級 A。
2. W3C. *DID Specification Registries*. https://www.w3.org/TR/did-spec-registries/ （查閱日期 2026-04-30）。來源等級 A。
3. QuarkID（Buenos Aires + ZKsync）. https://quarkid.org/ （查閱日期 2026-04-30）。來源等級 B；政府文件層級紀錄待補。
4. Sovrin Foundation. *The Sovrin Trust Framework v1*, 2017. https://sovrin.org/library/sovrin-trust-framework/ （查閱日期 2026-04-30）。來源等級 A。
5. W3C. *Decentralized Identifiers (DIDs) v1.0*, W3C Recommendation, 2022-07-19. https://www.w3.org/TR/did-core/ （查閱日期 2026-04-30）。來源等級 A。
6. W3C Director. "Decision on Decentralized Identifiers (DIDs) v1.0 Formal Objections." 2022-06-30. https://www.w3.org/2022/06/DIDRecommendationDecision.html （查閱日期 2026-04-30）。來源等級 A。
7. W3C DID WG GitHub Issues. https://github.com/w3c/did-core/issues （查閱日期 2026-04-30）。來源等級 B；具體 issue ID 與 mailing list thread 仍待逐條查核。
8. CNIL. "Blockchain – Solutions for a Responsible Use of the Blockchain in the Context of Personal Data." 2018. https://www.cnil.fr/en/blockchain-and-gdpr-solutions-responsible-use-blockchain-context-personal-data （查閱日期 2026-04-30）。來源等級 A。
9. European Parliament & Council. Regulation (EU) 2024/1183 amending eIDAS, OJ L, 2024-04-30. https://eur-lex.europa.eu/eli/reg/2024/1183/oj （查閱日期 2026-04-30）。來源等級 A。
10. European Commission. *EUDI Architecture and Reference Framework v1.4.0*. https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework （查閱日期 2026-04-30）。來源等級 A；ARF 是否有「為何不選公共鏈」明文待查核。
11. European Commission. Commission Implementing Decision (EU) 2015/1505（XML Trusted Lists 技術規格）. https://eur-lex.europa.eu/eli/dec_impl/2015/1505/oj （查閱日期 2026-04-30）。來源等級 A。
12. ETSI. *TS 119 612 Trusted Lists*. https://www.etsi.org/deliver/etsi_ts/119600_119699/119612/ （查閱日期 2026-04-30）。來源等級 A。
13. FATF. *International Standards on Combating Money Laundering and the Financing of Terrorism & Proliferation*. https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html （查閱日期 2026-04-30）。來源等級 A。
14. Decentralized Identity Foundation. *ION（Sidetree on Bitcoin）documentation*. https://identity.foundation/ion/ （查閱日期 2026-04-30）。來源等級 B；一手技術文件。
15. W3C. *Bitstring Status List v1.0*, Candidate Recommendation Draft, 2024-12-10. https://www.w3.org/TR/vc-bitstring-status-list/ （查閱日期 2026-04-30）。來源等級 A。
16. W3C. *Verifiable Credentials Data Model v2.0*, W3C Recommendation, 2025. https://www.w3.org/TR/vc-data-model-2.0/ （查閱日期 2026-04-30）。來源等級 A。
17. European Commission. EBSI（European Blockchain Services Infrastructure）documentation. https://ec.europa.eu/digital-building-blocks/sites/display/EBSI （查閱日期 2026-04-30）。來源等級 A。
18. ISO. *ISO/IEC 18013-5:2021 Personal identification — ISO-compliant driving licence — Part 5: Mobile driving licence (mDL) application*. https://www.iso.org/standard/69084.html （查閱日期 2026-04-30）。來源等級 A。
19. AAMVA. *Mobile Driver's License Implementation Guidelines*. https://www.aamva.org/topics/mobile-drivers-license （查閱日期 2026-04-30）。來源等級 A。
20. Government of Singapore. Singpass. https://www.singpass.gov.sg/ （查閱日期 2026-04-30）。來源等級 A。
21. UIDAI India. Aadhaar Technical Architecture. https://uidai.gov.in/ （查閱日期 2026-04-30）。來源等級 A。
22. Governo do Brasil. gov.br. https://www.gov.br/ （查閱日期 2026-04-30）。來源等級 A。
23. デジタル庁. マイナンバー数字認証アプリ. https://www.digital.go.jp/ （查閱日期 2026-04-30）。來源等級 A。
24. 數位發展部 / 內政部憑證管理中心 / 數位憑證皮夾官方網站. https://moda.gov.tw/、https://moica.nat.gov.tw/、https://wallet.gov.tw/ （查閱日期 2026-05-02）。來源等級 A；FidO/自然人憑證走 PKI 路線清楚。數位憑證皮夾（TW DIW）採 OpenID4VCI / SD-JWT、信任清單錨定在公共區塊鏈上；具體 chain ID、合約位址、DID method、年度預算（NTD）等實作細節在開發者頁與一手政府文件層尚未完整揭示，待補。
25. 德國 ID Wallet 下架報導. Heise / c't, 2021. 來源等級 C；失敗案例參照。
26. 肯亞高等法院 Huduma Namba 判決報導. Daily Nation / BBC, 2021. 來源等級 C；失敗案例參照。
27. Sovrin Foundation 2021 重整公告. https://sovrin.org/ （查閱日期 2026-04-30）。來源等級 C；組織狀態參照。
28. Bhutan NDI（Druk Holding & Investments / GovTech）. "Bhutan Adopts Ethereum for National Identity: A New Chapter in Digital Sovereignty." 2025-10-13. https://www.bhutanndi.com/ （查閱日期 2026-05-02）。來源等級 A；2023-10 以 Hyperledger Indy 啟動、2024-08 遷至 Polygon、2025-10-13 正式遷至 Ethereum 主網，影響約 800K 居民、2026 Q1 完成 credential 遷移。GovTech 秘書 Jigme Tenzing 與 Ethereum Foundation 總裁 Aya Miyaguchi 公開發言為佐證。鏈上合約位址、跨鏈撤銷實作細節仍待一手揭露。
29. Cheqd Network. https://cheqd.io/ （查閱日期 2026-04-30）。來源等級 B。
30. Polygon ID. https://polygon.technology/polygon-id （查閱日期 2026-04-30）。來源等級 B。
31. KILT Protocol. https://www.kilt.io/ （查閱日期 2026-04-30）。來源等級 B。
32. Atala PRISM / Cardano. https://atalaprism.io/ （查閱日期 2026-04-30）。來源等級 B。
33. Worldcoin / World ID. https://worldcoin.org/ （查閱日期 2026-04-30）。來源等級 B；多國隱私調查與暫停見各國媒體報導。
34. Numbers Protocol. https://www.numbersprotocol.io/ （查閱日期 2026-04-30）。來源等級 B；屬影像 / 事件存證範疇，未承擔身分簽發。
35. FAB DAO. https://fabdao.com/ （查閱日期 2026-04-30）。來源等級 B；屬公民倡議 DAO，未承擔身分根。
36. 許明恩.〈數位憑證皮夾：出示證件的新方法、身分自主的隱私革命〉.《區塊勢》, 2025-03-12. https://www.blocktrend.today/p/676 （查閱日期 2026-05-02）。來源等級 B；引述數位部官員與 wallet.gov.tw 開發者頁，明文「將信任清單記錄在區塊鏈上」。圈內資訊指向 Ethereum 系，具體 chain 別仍待官方一手文件揭示。
37. Burt, Chris. "Bhutan Begins Migrating Self-Sovereign Digital ID to Ethereum." *Biometric Update*, 2025-10-14. https://www.biometricupdate.com/202510/bhutan-begins-migrating-self-sovereign-digital-id-to-ethereum （查閱日期 2026-05-02）。來源等級 B+；國際同業期刊報導，引述 GovTech 秘書 Jigme Tenzing 公開發言。亦見 Daily Bhutan、The Block、Unchained、Buddhistdoor、Fintech News Singapore 等多家報導交叉印證。
38. iThome.〈引進國際標準及技術，建立國內數憑證驗證的公共基礎：數位憑證皮夾實現資料自主權及簡化驗證的關鍵〉. https://www.ithome.com.tw/news/173834 （查閱日期 2026-05-02）。來源等級 B；台灣專業 IT 媒體報導，描述採 W3C VC + OpenID4VCI + SD-JWT + 區塊鏈信任清單組合。
