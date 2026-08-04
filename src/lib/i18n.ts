// 站架雙語（zh 預設、/en/ 鏡像）。
//
// 只翻「站的骨架」：導覽、首頁介面、列表頁、關於。文章內容維持
// 各自的語言（絕大多數是中文，少數 EN 篇目自帶 lang: en）——
// 64 篇裡只有兩三篇英文，硬開一個只列兩篇的英文站沒有意義，
// 所以 /en/ 列出全部文章、介面用英文、中文篇目讀者自行判斷。

export type Locale = "zh" | "en";

export const LOCALES: Locale[] = ["zh", "en"];

/** 把站內路徑掛上語言前綴；zh 是預設、不加前綴。 */
export function localePath(locale: Locale, path: string): string {
  return locale === "en" ? `/en${path}` : path;
}

type NavItem = { href: string; label: string };

export interface UIStrings {
  htmlLang: string;
  brand: string;
  nav: NavItem[];
  search: string;
  backToMain: string;
  /** 語言切換鈕：顯示的是「切過去」的那個語言。 */
  langSwitch: { label: string; href: string; title: string };
  footerLine: string;
  hero: {
    kickerSuffix: string;
    title: string;
    tagline: string;
    posts: string;
    topics: (n: number, total: number) => string;
    updated: string;
  };
  home: {
    searchPlaceholder: string;
    searchAria: string;
    clearAria: string;
    fulltext: string;
    sortAria: string;
    sortNew: string;
    sortOld: string;
    sortLong: string;
    sortShort: string;
    viewAria: string;
    viewIndex: string;
    viewCards: string;
    viewScatter: string;
    all: (n: number) => string;
    filtered: (shown: number, total: number) => string;
    clear: string;
    minutes: (n: number) => string;
    emptyMsg: string;
    emptyClear: string;
    series: string;
    seriesCount: (n: number) => string;
    goSite: string;
    onlySeries: string;
  };
}

export const UI: Record<Locale, UIStrings> = {
  zh: {
    htmlLang: "zh-TW",
    brand: "豆泥關心的難題",
    nav: [
      { href: "/", label: "文章" },
      { href: "/fiction/", label: "小說" },
      { href: "/specials/", label: "專題" },
      { href: "/about/", label: "關於" },
      { href: "/topics/", label: "主題" },
    ],
    search: "搜尋",
    backToMain: "← 回到豆泥部落格",
    langSwitch: { label: "EN", href: "/en/", title: "English version" },
    footerLine: "AI-powered research",
    hero: {
      kickerSuffix: "Essays · Notes · Field reports",
      title: "難題",
      tagline: "許多問題還沒有正解，但是要有人開始問。",
      posts: "篇",
      topics: (n, total) => `${n} / ${total} 個主題`,
      updated: "最近更新",
    },
    home: {
      searchPlaceholder: "篩選標題與標籤……",
      searchAria: "篩選文章",
      clearAria: "清除篩選字串",
      fulltext: "全文搜尋",
      sortAria: "排序方式",
      sortNew: "新到舊",
      sortOld: "舊到新",
      sortLong: "最長篇",
      sortShort: "最短篇",
      viewAria: "檢視方式",
      viewIndex: "索引",
      viewCards: "卡片",
      viewScatter: "散落",
      all: (n) => `全部 ${n} 篇`,
      filtered: (shown, total) => `篩出 ${shown} / ${total} 篇`,
      clear: "清除條件",
      minutes: (n) => `${n} 分鐘`,
      emptyMsg: "這組條件下沒有文章。",
      emptyClear: "清除所有條件",
      series: "Series",
      seriesCount: (n) => `${n} 篇`,
      goSite: "前往系列專站 →",
      onlySeries: "只看這個系列",
    },
  },
  en: {
    htmlLang: "en",
    brand: "Open Questions",
    nav: [
      { href: "/en/", label: "Essays" },
      { href: "/en/fiction/", label: "Fiction" },
      { href: "/en/specials/", label: "Specials" },
      { href: "/en/about/", label: "About" },
      { href: "/en/topics/", label: "Topics" },
    ],
    search: "Search",
    backToMain: "← mashbean.net",
    langSwitch: { label: "中文", href: "/", title: "中文版" },
    footerLine: "AI-powered research",
    hero: {
      kickerSuffix: "Essays · Notes · Field reports",
      title: "Open Questions",
      tagline: "Most of these questions have no settled answer yet. Someone has to start asking.",
      posts: "essays",
      topics: (n, total) => `${n} / ${total} topics`,
      updated: "Updated",
    },
    home: {
      searchPlaceholder: "Filter by title or tag…",
      searchAria: "Filter essays",
      clearAria: "Clear filter",
      fulltext: "Full-text search",
      sortAria: "Sort order",
      sortNew: "Newest",
      sortOld: "Oldest",
      sortLong: "Longest",
      sortShort: "Shortest",
      viewAria: "View",
      viewIndex: "Index",
      viewCards: "Cards",
      viewScatter: "Scatter",
      all: (n) => `All ${n} essays`,
      filtered: (shown, total) => `${shown} / ${total} essays`,
      clear: "Clear filters",
      minutes: (n) => `${n} min`,
      emptyMsg: "Nothing matches these filters.",
      emptyClear: "Clear all filters",
      series: "Series",
      seriesCount: (n) => `${n} essays`,
      goSite: "Visit the series site →",
      onlySeries: "This series only",
    },
  },
};
