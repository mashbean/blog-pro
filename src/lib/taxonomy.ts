// 導覽用的受控詞彙。定義來源是 scripts/taxonomy.py（遷移腳本共用同一份），
// 改動時兩邊要一起改。
//
// 為什麼分兩層：原本 654 個自由標籤裡有 554 個只用過一次，點進去只有一篇，
// 那不是導覽面向，是索引註解。現在 topic 當主軸（一篇一個），
// tags 當跨主題篩選（受控 45 個），原始標籤搬到 keywords 只餵搜尋。

export type TopicId =
  | "digital-identity"
  | "democracy-theory"
  | "ai"
  | "open-government"
  | "platform-media"
  | "organizations"
  | "international"
  | "institutions-culture";

export type Topic = {
  id: TopicId;
  label: string;
  blurb: string;
  /** 面向列與主題頁的識別色（OKLCH 色相，實際亮度交給 CSS）。 */
  hue: number;
};

export const TOPICS: Topic[] = [
  {
    id: "digital-identity",
    label: "數位身分",
    blurb: "從公民證明系列到各國皮夾政策——這個站最厚的一塊",
    hue: 255,
  },
  {
    id: "democracy-theory",
    label: "民主與政治理論",
    blurb: "參與、審議、流亡社群，以及權力在哪裡沒有移動",
    hue: 25,
  },
  {
    id: "ai",
    label: "AI：勞動、治理與倫理",
    blurb: "AI 進到工作與公共基礎設施之後的實證與規範問題",
    hue: 155,
  },
  {
    id: "open-government",
    label: "開放政府與公共採購",
    blurb: "採購如何變成政策工具，預算如何被看見",
    hue: 205,
  },
  {
    id: "platform-media",
    label: "平台、媒體與產業",
    blurb: "內容審核、媒體營收，與看不見的商品化路徑",
    hue: 320,
  },
  {
    id: "organizations",
    label: "組織與資金",
    blurb: "非營利、基金會、新創——誰在付錢，錢怎麼改變工作",
    hue: 60,
  },
  {
    id: "international",
    label: "國際政治與安全",
    blurb: "核裁軍、情資賽局、弱國的國際參與",
    hue: 15,
  },
  {
    id: "institutions-culture",
    label: "制度、教育與文化",
    blurb: "文化法人、教學法、研究機構如何衰變或存活",
    hue: 285,
  },
];

const TOPIC_BY_ID = new Map(TOPICS.map((t) => [t.id, t]));

export function topicOf(id: string | undefined): Topic | undefined {
  return id ? TOPIC_BY_ID.get(id as TopicId) : undefined;
}

export function topicLabel(id: string | undefined): string {
  return topicOf(id)?.label ?? "未分類";
}

/**
 * 受控標籤，依叢集排列。版面上照這個順序顯示，同一叢集才會排在一起。
 */
export const TAG_CLUSTERS: { label: string; tags: string[] }[] = [
  {
    label: "身分與信任",
    tags: ["公民證明", "數位皮夾", "可驗證憑證", "信任根與信任清單", "年齡驗證",
           "假名與匿名", "密碼學", "隱私", "共融與可及性", "使用者經驗"],
  },
  {
    label: "平台與產業",
    tags: ["平台治理", "內容審核與安全", "媒體與新聞", "產業經濟"],
  },
  {
    label: "開放政府",
    tags: ["公共採購", "開放資料", "公民科技", "開源"],
  },
  {
    label: "組織",
    tags: ["非營利與基金會", "創業與公司治理", "組織管理"],
  },
  {
    label: "AI 與勞動",
    tags: ["AI 治理", "AI 倫理", "AI 代理人", "勞動與工作"],
  },
  {
    label: "政治",
    tags: ["民主理論", "審議與參與", "公民社會", "流亡與離散", "威權與民主衰退",
           "國際關係", "國防與安全", "網路治理", "法律與救濟"],
  },
  {
    label: "制度與知識",
    tags: ["教育", "複雜科學", "文化政策", "醫療", "區塊鏈與加密貨幣", "研究方法"],
  },
  {
    label: "地區",
    tags: ["台灣", "歐盟", "美國", "北歐", "中國"],
  },
];

export const CONTROLLED_TAGS: string[] = TAG_CLUSTERS.flatMap((c) => c.tags);

const TAG_ORDER = new Map(CONTROLLED_TAGS.map((t, i) => [t, i]));

export function sortTags(tags: string[]): string[] {
  return [...tags].sort(
    (a, b) => (TAG_ORDER.get(a) ?? 999) - (TAG_ORDER.get(b) ?? 999),
  );
}

// ── 系列 ─────────────────────────────────────────────────────────
export const SERIES = {
  "civic-proof": {
    label: "公民證明 Civic Proof",
    labelEn: "Civic Proof",
    blurb:
      "一套把「證明自己是公民」從國家發證翻轉成公民自證的長篇論證，" +
      "從概念區辨、法理支柱、工程比較一路走到規範下界與台灣案例。",
    blurbEn:
      "A long-form argument for flipping citizen verification from state-issued " +
      "credentials to citizen-held proofs — from conceptual distinctions and legal " +
      "pillars to engineering comparisons and Taiwan case studies.",
    /** 系列入口（第 0′ 版），列表固定排最前面。 */
    entry: "2026-05-17-civic-proof-foundations",
    /** 系列專站；有專站的系列在首頁只留一張卡片外連過去。 */
    site: "https://civic-proof.mashbean.net",
  },
  演講講稿: {
    label: "演講講稿",
    labelEn: "Talks",
    blurb: "現場講稿整理。",
    blurbEn: "Edited talk transcripts.",
    entry: undefined as string | undefined,
  },
  "ready-digital-government": {
    label: "有備而來，理想的政府數位身分與資料 App 開發報告",
    labelEn: "Ready for It: Government Identity and Data App Reports",
    blurb:
      "從有備而來的真機開發出發，逐一檢查理想的政府數位身分、資料皮夾與公共服務，" +
      "把政策倡議寫成可測試、可採購、也可追究責任的系統需求。",
    blurbEn:
      "Hands-on iPhone prototypes for better government identity, data wallets, and public services — " +
      "turning policy proposals into testable, procurable, and accountable system requirements.",
    entry: "2026-09-01-natural-person-certificate-official-documents",
  },
  "dns-rpz": {
    label: "DNS RPZ",
    labelEn: "DNS RPZ",
    blurb:
      "台灣每半年有三萬八千餘個網域被停止解析，其中 99.95% 出自行政處分。" +
      "從制度盤點走到用機關自己公開的資料做實證檢查。",
    blurbEn:
      "Taiwan suspends DNS resolution for over 38,000 domains every six months, " +
      "99.95% of them by administrative disposition rather than court order. " +
      "From institutional mapping to empirical audit using the agencies' own open data.",
    /** 系列入口（第 1 篇，制度全貌）。 */
    entry: "2026-08-06-taiwan-dns-rpz-governance",
  },
} as const;

export type SeriesId = keyof typeof SERIES;

export interface SeriesMeta {
  label: string;
  labelEn?: string;
  blurb: string;
  blurbEn?: string;
  entry?: string;
  site?: string;
}

// ── 專題 ─────────────────────────────────────────────────────────
// 長出自己網站（或自己入口）的研究線。nav 的「專題」導流到這裡。
export interface Special {
  id: string;
  title: string;
  titleEn: string;
  blurb: string;
  blurbEn: string;
  /** 外部專站；沒有的話用 href 走站內。 */
  url?: string;
  href?: string;
  /** 對應的 series id，用來算篇數。 */
  series?: string;
}

export const SPECIALS: Special[] = [
  {
    id: "civic-proof",
    title: "公民證明 Civic Proof",
    titleEn: "Civic Proof",
    blurb:
      "把「證明自己是公民」從國家發證翻轉成公民自證。24 篇論證、" +
      "論證地圖與台灣案例，整個專題已獨立成站。",
    blurbEn:
      "Flipping citizen verification from state-issued credentials to citizen-held proofs. " +
      "24 essays, an argument map, and Taiwan case studies — now a standalone site.",
    url: "https://civic-proof.mashbean.net",
    series: "civic-proof",
  },
  {
    id: "ready-digital-government",
    title: "有備而來，理想的政府數位身分與資料 App 開發報告",
    titleEn: "Ready for It: Government Identity and Data App Reports",
    blurb:
      "我把政策提案真的做進 iPhone，再從每一次成功與失敗回頭追問法規、資安、" +
      "無障礙、公共採購和政府該承擔的共同基礎設施。第一篇從自然人憑證與電子公文開始。",
    blurbEn:
      "I build public-service proposals into a real iPhone app, then use every success and failure " +
      "to examine law, security, accessibility, procurement, and shared public infrastructure. " +
      "The first report starts with citizen certificates and official digital mail.",
    href: "/?series=ready-digital-government",
    series: "ready-digital-government",
  },
  {
    id: "dns-rpz",
    title: "DNS RPZ：台灣的網域停止解析機制",
    titleEn: "DNS RPZ: Taiwan's Domain Blocking Regime",
    blurb:
      "台灣每半年有三萬八千餘個網域被停止解析，處分相對人是電信業者，" +
      "而真正被封的網域持有人不在任何一段程序裡。這條研究線從制度盤點" +
      "走到用機關自己公開的資料做實證檢查，資料集與分析腳本全部公開。",
    blurbEn:
      "Taiwan suspends DNS resolution for over 38,000 domains every six months. " +
      "The disposition names the ISP as its addressee, while the domain holder who " +
      "bears the cost is party to no part of the procedure. This line of work runs from " +
      "institutional mapping to an empirical audit built entirely on the agencies' own " +
      "open data, with datasets and analysis scripts published.",
    href: "/?series=dns-rpz",
    series: "dns-rpz",
  },
];

export function seriesMeta(id: string | undefined): SeriesMeta | undefined {
  if (!id) return undefined;
  return (SERIES as Record<string, SeriesMeta>)[id];
}
