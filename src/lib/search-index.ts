// 搜尋索引的建置期組裝。分兩層輸出，因為全文有 168 萬字元——
// 一次全載會讓手機首開搜尋卡住，但只索引標題摘要又搜不到內文。
//
//   tier 1 /search-index.json     標題/摘要/標籤/關鍵詞/各級標題，約 60KB gzip
//   tier 2 /search-fulltext.json  純內文，約 1.3MB gzip，開啟搜尋後才在背景抓
//
// 前端先用 tier 1 出結果，tier 2 到齊再把內文命中併進來。

import type { CollectionEntry } from "astro:content";
import { estimateReadingMinutes } from "../utils/reading-time";

export type SearchDoc = {
  /** slug */
  s: string;
  /** title */
  t: string;
  /** description */
  d: string;
  /** topic id */
  tp: string;
  /** controlled tags */
  tg: string[];
  /** legacy free tags — 不上版面，只讓搜尋搜得到 */
  kw: string[];
  /** headings, 用 \n 串起來 */
  h: string;
  /** date YYYY-MM-DD */
  dt: string;
  /** reading minutes */
  m: number;
  /** series id */
  sr?: string;
  /** series order */
  so?: number;
  /** lang */
  l: string;
};

/**
 * 把 markdown 洗成給搜尋用的純文字。
 * 目標不是完美還原排版，是讓子字串比對不要被語法符號打斷。
 */
export function toPlainText(md: string): string {
  return (
    md
      // 圍欄程式碼整段丟掉——搜尋內文時命中程式碼多半是雜訊
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/~~~[\s\S]*?~~~/g, " ")
      // HTML 標籤與註腳標記
      .replace(/<sup>[\s\S]*?<\/sup>/g, " ")
      .replace(/<[^>]+>/g, " ")
      // 圖片與連結：留下文字，丟掉 URL
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, " $1 ")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
      // 參考式連結定義
      .replace(/^\s*\[[^\]]+\]:\s*\S+.*$/gm, " ")
      // 標題、引用、清單符號
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/^\s*>\s?/gm, "")
      .replace(/^\s*[-*+]\s+/gm, "")
      .replace(/^\s*\d+\.\s+/gm, "")
      // 表格分隔線
      .replace(/^\s*\|[\s|:-]+\|\s*$/gm, " ")
      .replace(/\|/g, " ")
      // 行內強調與程式碼
      .replace(/[*_`~]/g, "")
      .replace(/\s+/g, " ")
      .trim()
  );
}

/** 抽出所有 markdown 標題文字（含層級順序）。 */
export function extractHeadings(md: string): string[] {
  const out: string[] = [];
  const withoutCode = md.replace(/```[\s\S]*?```/g, "");
  for (const m of withoutCode.matchAll(/^#{2,6}\s+(.+)$/gm)) {
    out.push(
      m[1]
        .replace(/<[^>]+>/g, "")
        .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
        .replace(/[*_`~]/g, "")
        .trim(),
    );
  }
  return out;
}

export function buildSearchDoc(report: CollectionEntry<"reports">): SearchDoc {
  const d = report.data;
  const body = (report.body ?? "").toString();
  return {
    s: report.id,
    t: d.title,
    d: d.description,
    tp: d.topic ?? "",
    tg: d.tags ?? [],
    kw: d.keywords ?? [],
    h: extractHeadings(body).join("\n"),
    dt: d.pubDate.toISOString().slice(0, 10),
    m: estimateReadingMinutes(body),
    sr: d.series,
    so: d.seriesOrder,
    l: d.lang ?? "zh-TW",
  };
}
