"""受控詞彙定義：主題（topic）與標籤（tags）。

為什麼要這份表：654 個自由標籤裡有 554 個只用過一次，點進去只有一篇文章，
不是導覽面向而是索引註解。這裡把它收斂成兩層——
  topic  一篇一個，8 個，導覽主軸
  tags   一篇 3-8 個，約 45 個受控詞，跨主題篩選
原始標籤不刪，遷移時整批搬進 keywords 欄位，繼續餵搜尋與相關文章。
"""

import re

# ── 主題（一篇一個）──────────────────────────────────────────────
# id 用英文（URL 用），label 用中文（版面用）。order 決定面向列順序。
TOPICS = [
    ("digital-identity", "數位身分", "從公民證明系列到各國皮夾政策——這個站最厚的一塊"),
    ("democracy-theory", "民主與政治理論", "參與、審議、流亡社群，以及權力在哪裡沒有移動"),
    ("ai", "AI：勞動、治理與倫理", "AI 進到工作與公共基礎設施之後的實證與規範問題"),
    ("open-government", "開放政府與公共採購", "採購如何變成政策工具，預算如何被看見"),
    ("platform-media", "平台、媒體與產業", "內容審核、媒體營收，與看不見的商品化路徑"),
    ("organizations", "組織與資金", "非營利、基金會、新創——誰在付錢，錢怎麼改變工作"),
    ("international", "國際政治與安全", "核裁軍、情資賽局、弱國的國際參與"),
    ("institutions-culture", "制度、教育與文化", "文化法人、教學法、研究機構如何衰變或存活"),
]

TOPIC_IDS = {t[0] for t in TOPICS}

# ── 每篇文章的主題指派 ───────────────────────────────────────────
POST_TOPIC = {
    "2026-03-28-gov-it-procurement-monopoly-or-innovation": "open-government",
    "2026-03-28-who-funds-public-action": "organizations",
    "2026-03-30-bottleneck-migration-ai-agent-cognition": "ai",
    "2026-03-30-nonprofit-platform-sustainability": "platform-media",
    "2026-03-30-startup-runway-downsizing-or-shutdown": "organizations",
    "2026-03-31-nlnet-transformation": "organizations",
    "2026-04-01-agentic-id-governance-en": "digital-identity",
    "2026-04-01-agentic-id-governance": "digital-identity",
    "2026-04-02-proton-foundation": "organizations",
    "2026-04-03-youth-international-participation": "international",
    "2026-04-15-revolution-intellectuals-exile": "democracy-theory",
    "2026-04-16-age-verification-digital-rights-en": "digital-identity",
    "2026-04-16-age-verification-digital-rights": "digital-identity",
    "2026-04-19-ai-public-infra-governance": "ai",
    "2026-04-20-harvard-asml-keyring-digital-identity": "digital-identity",
    "2026-04-21-media-revenue-experiments": "platform-media",
    "2026-04-22-diaspora-social-movements": "democracy-theory",
    "2026-04-24-exile-network-state-coordination": "democracy-theory",
    "2026-04-25-anesthesiologist-ai-agent": "ai",
    "2026-04-26-inclusive-design-public-policy": "institutions-culture",
    "2026-05-01-did-vc-public-blockchain": "digital-identity",
    "2026-05-02-accountability-without-identification": "digital-identity",
    "2026-05-03-civic-proof-concept-positioning": "digital-identity",
    "2026-05-03-digital-association-empirical-test": "digital-identity",
    "2026-05-04-pseudonymous-participation-legal": "digital-identity",
    "2026-05-05-civic-burden-redistribution": "digital-identity",
    "2026-05-05-passport-rooted-paradox": "digital-identity",
    "2026-05-05-sybil-resistance-cost-benefit": "digital-identity",
    "2026-05-06-dns-vs-identity-trust-roots": "digital-identity",
    "2026-05-07-bankid-nordic-monopoly-democracy": "digital-identity",
    "2026-05-08-digital-identity-civic-action-quant": "digital-identity",
    "2026-05-08-wallet-as-essential-facility": "digital-identity",
    "2026-05-09-cross-jurisdictional-redress-gap": "digital-identity",
    "2026-05-09-no-phone-home-engineering-economics": "digital-identity",
    "2026-05-09-structural-slippage-prevention": "digital-identity",
    "2026-05-10-civic-ai-agent-delegation-limits": "digital-identity",
    "2026-05-10-civic-proof-inclusion-rights": "digital-identity",
    "2026-05-11-civic-receipts-provenance": "digital-identity",
    "2026-05-11-selective-disclosure-ux-failure": "digital-identity",
    "2026-05-12-public-realm-political-philosophy": "digital-identity",
    "2026-05-16-civic-proof-series-capstone": "digital-identity",
    "2026-05-16-small-org-high-agency": "organizations",
    "2026-05-16-taiwan-civic-proof-deep-dive": "digital-identity",
    "2026-05-17-civic-proof-foundations": "digital-identity",
    "2026-05-19-danielle-allen-power-sharing-civic-proof-bridge": "digital-identity",
    "2026-05-20-danielle-allen-dci-power-sharing": "digital-identity",
    "2026-06-02-magnifica-humanitas-explainer": "ai",
    "2026-06-04-open-culture-foundation-intro": "organizations",
    "2026-06-05-santa-fe-institute-complexity-intro": "institutions-culture",
    "2026-06-06-pedagogy-half-life": "institutions-culture",
    "2026-06-10-clab-kongkong-transformation": "institutions-culture",
    "2026-06-12-zcash-gyges-moral-yardstick": "democracy-theory",
    "2026-06-13-ai-work-anxiety-reality": "ai",
    "2026-06-16-two-directions-public-code": "open-government",
    "2026-06-17-ai-work-agency-reading": "ai",
    "2026-06-19-nsb-report-window-security": "international",
    "2026-06-24-soviet-nuclear-disarmament": "international",
    "2026-07-06-ukraine-defense-procurement-innovation": "open-government",
    "2026-07-22-taiwan-open-budget-ai-interfaces": "open-government",
    "2026-07-23-california-digital-id-ecosystem": "digital-identity",
    "2026-07-24-roost-open-safety-tools": "platform-media",
    "2026-07-29-vpn-esim-kol-ad-economics": "platform-media",
    "2026-07-30-china-participatory-governance-rise-fall": "democracy-theory",
    "2026-08-26-tianjian-platform-intermediary-shield": "platform-media",
}

# ── 受控標籤 ─────────────────────────────────────────────────────
# 一律中文，一個概念一個詞。原始標籤靠下面的規則映射過來。
CONTROLLED_TAGS = [
    # 數位身分叢集
    "公民證明", "數位皮夾", "可驗證憑證", "信任根與信任清單", "年齡驗證",
    "假名與匿名", "密碼學", "隱私", "共融與可及性", "使用者經驗",
    # 平台與媒體
    "平台治理", "內容審核與安全", "媒體與新聞", "產業經濟",
    # 開放政府
    "公共採購", "開放資料", "公民科技", "開源",
    # 組織
    "非營利與基金會", "創業與公司治理", "組織管理",
    # AI
    "AI 治理", "AI 倫理", "AI 代理人", "勞動與工作",
    # 政治
    "民主理論", "審議與參與", "公民社會", "流亡與離散", "威權與民主衰退",
    "國際關係", "國防與安全", "網路治理", "法律與救濟",
    # 制度文化
    "教育", "複雜科學", "文化政策", "醫療", "區塊鏈與加密貨幣", "研究方法",
    # 地區
    "台灣", "歐盟", "美國", "北歐", "中國",
]

# ── 映射規則 ─────────────────────────────────────────────────────
# (正則, 受控標籤)。對每個原始標籤依序比對，可命中多條。
# 用 pattern 而不是列舉 654 筆，是因為長尾大多是同一概念的變體拼法。
RULES: list[tuple[str, str]] = [
    # 數位身分
    (r"civic-proof|公民證明|PRF|civic-burden|civic-receipt|personhood-proof|sybil", "公民證明"),
    (r"wallet|皮夾|EUDI|eudi|TW-DIW|MOICA|FidO|mdl|mDL|MOSIP|Aadhaar", "數位皮夾"),
    (r"verifiable-credential|可驗證憑證|\bvc\b|VCDM|\bdid\b|\bDID\b|ssi|SSI|w3c|W3C|sd-jwt|SD-JWT|credential|OpenID4|openid4|revocation|no-phone-home|mdoc", "可驗證憑證"),
    (r"trust-list|trust-root|trust-anchor|trust-architecture|trust-governance|信任清單|信任根|信任基礎設施|FTLA|DNS|ICANN|TWNIC", "信任根與信任清單"),
    (r"age-verification|年齡驗證|children-safety|Paxton", "年齡驗證"),
    (r"pseudonym|anonym|假名|匿名|whistleblower|投誠|sealed-indictment|John-Doe|WITSEC|SecureDrop|GlobaLeaks|CoverDrop", "假名與匿名"),
    (r"crypt|密碼學|zk|ZK|BBS|threshold|zero-knowledge|PQC|split-key|signature", "密碼學"),
    (r"privacy|隱私|unlinkab|selective-disclosure|contextual-integrity|GDPR|PIPC|data-protection|PRISM", "隱私"),
    (r"inclusi|共融|disability|CRPD|accessib|supported-decision|EAA\b|\bADA\b|NDIS|capability-approach|stateless|shared-device", "共融與可及性"),
    (r"\bux\b|UX|cognitive-load|dark-pattern|informed-consent|progressive-disclosure|supporter-ui|supporter-UI|working-memory|chooser", "使用者經驗"),
    # 平台與媒體
    (r"platform|平台|enshittification|fediverse|Bluesky|Matters|matters|cooperativism", "平台治理"),
    (r"online-safety|內容審核|ROOST|信任與安全|moderation|digital-safety|數位安全", "內容審核與安全"),
    (r"媒體|journalism|訂閱制|分潤|新聞", "媒體與新聞"),
    (r"產業經濟|KOL|聯盟行銷|財報|電信監管|信任商品|VPN|eSIM|商業策略|資本市場|antitrust|dma|\bDMA\b|essential-facility", "產業經濟"),
    # 開放政府
    (r"採購|procurement", "公共採購"),
    (r"開放資料|開放預算|open-data|地方政府|OpenBook|OpenFun", "開放資料"),
    (r"civic-tech|公民科技|g0v|TwinkleAI|public-interest-technology", "公民科技"),
    (r"open-source|開源|公共程式|SBOM|digital-commons|public-code", "開源"),
    # 組織
    (r"非營利|nonprofit|foundation|基金會|fiscal-sponsor|NLnet|EU-NGI|資助|funding|proton|open-culture", "非營利與基金會"),
    (r"新創|創業|公司治理|裁員|startup|runway", "創業與公司治理"),
    (r"organizational|team-topology|coase|brooks-law|conway-law|minimum-viable-team|self-determination|能動性|agency", "組織管理"),
    # AI
    (r"AI-governance|ai-governance|AI 治理|EU-AI-Act|Anthropic|OpenAI|AI-public|準公共", "AI 治理"),
    (r"ai-ethics|AI 倫理|human-dignity|moral-crumple|encyclical|catholic|magnifica|just-war|autonomous-weapons|pope", "AI 倫理"),
    (r"ai-agent|AI-agent|agent-identity|delegation|delegat|\bMCP\b|ambient-ai|Tomasev", "AI 代理人"),
    (r"勞動|工作|後工作|入門職位|生產力|labor|deskilling|Acemoglu|Susskind|Srnicek|burnout|焦慮", "勞動與工作"),
    # 政治
    (r"democracy|民主|political-philosophy|政治哲學|political-theory|republican|Arendt|Habermas|Pettit|Mouffe|Rawls|Allen|liberalism|legitimacy|non-domination|public-realm|公共領域|citizenship|Marshall|plurality", "民主理論"),
    (r"參與式預算|審議|deliberat|participatory|社區營造|基層治理|voice-to-influence|input-to-action", "審議與參與"),
    (r"civil-society|公民社會|social-movement|結社|association|assembly|counterpublic", "公民社會"),
    (r"diaspora|exile|流亡|hong-kong|tibet|iran|uyghur|network-state|離散", "流亡與離散"),
    (r"hybrid-regime|威權|v-dem|V-Dem|democratic-frontline|Freedom-House|democracy-report|revolution|Sunflower|slippage|path-dependency", "威權與民主衰退"),
    (r"國際關係|嚇阻|不擴散|核安全|geopolit|international-participation|public-diplomacy|冷戰|nuclear|disarm", "國際關係"),
    (r"國防|軍事|無人機|情資|defense|INDSR|CNAS|gray-zone|submarine-cable|national-security", "國防與安全"),
    (r"internet-governance|multistakeholder|multi-stakeholder|開放網路|網路治理", "網路治理"),
    # 不用裸的「法」——會命中行政法人、方法論、想法
    (r"法規|法理|法律|法域|立法|司法|憲法|legal|\blaw\b|litigation|due-process|redress|Brussels-I|Rome-II|Hague|UNCITRAL|court|judgment|FRE-|v-California|v-Alabama|v-Ohio|Jarkesy|SCHUFA|Avianca|Apostille|CETS|contract-spec|Article-\d|eIDAS-2024", "法律與救濟"),
    # 制度文化
    (r"pedagog|教學|education|learning|deskill|faculty", "教育"),
    (r"complexity|complex-system|emergence|santa-fe|Santa Fe|\bSFI\b|Krakauer|interdisciplinary", "複雜科學"),
    (r"文化|C-LAB|行政法人|空總|cultural", "文化政策"),
    (r"anesthesi|healthcare|clinical|醫療|phi\b|Dementia", "醫療"),
    (r"blockchain|web3|Zcash|密碼貨幣|Ethereum|ZKsync|on-chain|DAO|worldcoin|gitcoin|brightid|Rarimo|QuarkID", "區塊鏈與加密貨幣"),
    (r"process-tracing|quantitative|historical-sociology|case-tracing|doctoral-research|methodolog|方法|hermeneutic|reflexivity|case-study|Bayesian|dissertation", "研究方法"),
    # 地區
    (r"taiwan|台灣|TW-|MOICA|moda|TWNIC|Matsu|IORG|Doublethink|g0v|空總|C-LAB", "台灣"),
    (r"eIDAS|eidas|EU-|EUDI|歐盟|GDPR|EDPB|dma|\bDMA\b|Brussels|Toeslagen|Estonia|X-Road", "歐盟"),
    (r"california|California|美國|\bADA\b|ACLU|\bEFF\b|FRE-|NIST|Utah|SEC-v|WikiLeaks|AWS", "美國"),
    (r"bankid|BankID|nordic|Nordic|北歐|Bjorgo|Norway|Sweden|fullmakt", "北歐"),
    (r"中國|China|溫嶺|Wang-Hui|cross-strait", "中國"),
]

COMPILED = [(re.compile(p), t) for p, t in RULES]

# 刻意不映射的原始標籤：意思已經由 topic 承擔，再變成標籤只是重複。
# 列在這裡是為了讓遷移腳本的「沒對到」清單只剩真正的漏網之魚。
ABSORBED = re.compile(
    r"^(digital-identity|數位身分|數位治理|數位轉型|治理與民主|公共政策|公共議題|"
    r"digital-rights|數位人權|Digital Governance|Digital Rights|AI|ai|"
    r"digital-civic-infrastructure|digital-public-infrastructure|DCI)$"
)


def map_tag(tag: str) -> list[str]:
    """一個原始標籤 → 零到多個受控標籤。"""
    if ABSORBED.match(tag):
        return []
    return [t for rx, t in COMPILED if rx.search(tag)]


def is_absorbed(tag: str) -> bool:
    return bool(ABSORBED.match(tag))


# ── 人工補正 ─────────────────────────────────────────────────────
# 有些文章的原始標籤本身就標錯或太稀疏，規則救不回來，直接指定。
# add = 補上去，drop = 規則誤判要拿掉。
MANUAL_TAGS = {
    # 原始標籤只有「文化科技」，但這篇談的是 AI 代理人作為人的延伸
    "2026-03-30-bottleneck-migration-ai-agent-cognition": {
        "add": ["AI 代理人", "勞動與工作", "民主理論"], "drop": ["文化政策"],
    },
    # 「信任商品」是經濟學術語，不是身分信任根
    "2026-07-29-vpn-esim-kol-ad-economics": {
        "add": ["平台治理", "媒體與新聞"], "drop": ["信任根與信任清單"],
    },
    # 「行政法人」不是法律救濟議題
    "2026-06-10-clab-kongkong-transformation": {
        "add": ["非營利與基金會", "台灣"], "drop": ["法律與救濟"],
    },
    "2026-06-24-soviet-nuclear-disarmament": {"add": ["國防與安全", "威權與民主衰退"]},
    "2026-06-13-ai-work-anxiety-reality": {"add": ["AI 治理", "研究方法"]},
    "2026-04-21-media-revenue-experiments": {"add": ["平台治理", "產業經濟"]},
    "2026-03-28-who-funds-public-action": {"add": ["公民社會", "勞動與工作"]},
    "2026-03-28-gov-it-procurement-monopoly-or-innovation": {"add": ["產業經濟", "開源"]},
    "2026-04-02-proton-foundation": {"add": ["密碼學", "產業經濟"]},
    "2026-05-07-bankid-nordic-monopoly-democracy": {"add": ["數位皮夾", "民主理論", "產業經濟"]},
    "2026-06-05-santa-fe-institute-complexity-intro": {"add": ["非營利與基金會", "研究方法"]},
    "2026-06-06-pedagogy-half-life": {"add": ["AI 治理", "研究方法"]},
    "2026-06-16-two-directions-public-code": {"add": ["公民科技", "台灣"]},
    "2026-06-12-zcash-gyges-moral-yardstick": {"add": ["密碼學", "隱私"]},
    "2026-03-30-startup-runway-downsizing-or-shutdown": {"add": ["組織管理"]},
    "2026-05-09-structural-slippage-prevention": {"add": ["數位皮夾", "法律與救濟"]},
}


# ── civic-proof 系列 ─────────────────────────────────────────────
# frontmatter 裡只有 11 篇標了 series，但帶 civic-proof 標籤的有 24 篇。
# 已知的 seriesOrder（9-13、19、24-27）與 pubDate 完全同序，
# 未標號的就照 pubDate 落在已知錨點之間，不另外編號（見 SERIES_ORDER_UNKNOWN）。
SERIES_ID = "civic-proof"
SERIES_LABEL = "公民證明 Civic Proof"
SERIES_ENTRY = "2026-05-17-civic-proof-foundations"  # 第 0' 版，系列入口

# 標題或 frontmatter 明確寫出篇號的才填；其餘留空由 pubDate 決定排序。
KNOWN_ORDER = {
    "2026-05-07-bankid-nordic-monopoly-democracy": 9,
    "2026-05-08-digital-identity-civic-action-quant": 10,
    "2026-05-08-wallet-as-essential-facility": 11,
    "2026-05-09-no-phone-home-engineering-economics": 12,
    "2026-05-09-structural-slippage-prevention": 13,
    "2026-05-12-public-realm-political-philosophy": 19,
    "2026-05-16-taiwan-civic-proof-deep-dive": 24,
    "2026-05-16-civic-proof-series-capstone": 25,
    "2026-05-19-danielle-allen-power-sharing-civic-proof-bridge": 26,
    "2026-05-20-danielle-allen-dci-power-sharing": 27,
}
