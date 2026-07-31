// 搜尋核心。刻意不用任何 tokenizer 或倒排索引。
//
// 理由：中文沒有詞界，一般 tokenizer 會把「數位身分」切成單字或整串，
// 搜「位身」就掛掉；而全站只有 64 篇、168 萬字元，直接子字串掃描
// 每次查詢只要幾毫秒，比維護一套 bigram 倒排索引簡單也準確得多。
// 同一套 indexOf 對中文與英文都成立，不需要分語言處理。

import type { SearchDoc } from "./search-index";
import { topicLabel } from "./taxonomy";

export type Segment = { text: string; hit: boolean };

export type SearchHit = {
  doc: SearchDoc;
  score: number;
  /** 命中的欄位名稱，給結果列顯示「為什麼是這篇」。 */
  fields: string[];
  /** 內文（或摘要）的命中片段，已切成 highlight 用的區段。 */
  snippet: Segment[];
  titleSegments: Segment[];
};

const WEIGHTS = {
  title: 20,
  tags: 10,
  topic: 8,
  description: 6,
  headings: 5,
  keywords: 4,
  body: 1,
} as const;

/** 同一欄位重複命中的邊際效益遞減，避免長文靠字數洗分。 */
const MAX_COUNT_PER_FIELD = 4;

export function normalize(s: string): string {
  return s.normalize("NFKC").toLowerCase();
}

export function parseQuery(q: string): string[] {
  return normalize(q)
    .split(/\s+/)
    .map((t) => t.trim())
    .filter(Boolean);
}

function countOccurrences(haystack: string, needle: string): number {
  if (!needle) return 0;
  let n = 0;
  let i = haystack.indexOf(needle);
  while (i !== -1 && n < 64) {
    n++;
    i = haystack.indexOf(needle, i + needle.length);
  }
  return n;
}

/** 把字串依所有 term 命中位置切成 highlight 區段。 */
export function highlight(text: string, terms: string[]): Segment[] {
  if (!terms.length || !text) return [{ text, hit: false }];
  const lower = normalize(text);
  const marks: boolean[] = new Array(text.length).fill(false);

  for (const term of terms) {
    let i = lower.indexOf(term);
    while (i !== -1) {
      for (let k = i; k < i + term.length && k < marks.length; k++) marks[k] = true;
      i = lower.indexOf(term, i + term.length);
    }
  }

  const out: Segment[] = [];
  let start = 0;
  for (let i = 1; i <= text.length; i++) {
    if (i === text.length || marks[i] !== marks[start]) {
      out.push({ text: text.slice(start, i), hit: marks[start] });
      start = i;
    }
  }
  return out;
}

/** 取一段包含命中的內文窗格。找不到就退回摘要開頭。 */
function makeSnippet(body: string, description: string, terms: string[]): Segment[] {
  const source = body || description;
  if (!source) return [];
  const lower = normalize(source);

  let at = -1;
  for (const term of terms) {
    const i = lower.indexOf(term);
    if (i !== -1 && (at === -1 || i < at)) at = i;
  }

  const WINDOW = 120;
  if (at === -1) {
    const head = source.slice(0, WINDOW);
    return [{ text: head + (source.length > WINDOW ? "…" : ""), hit: false }];
  }

  let start = Math.max(0, at - 40);
  let end = Math.min(source.length, start + WINDOW);
  // 盡量從句子邊界起頭，讀起來不會像被砍斷
  if (start > 0) {
    const boundary = source.slice(start, at).search(/[。！？；\n.!?]\s*/);
    if (boundary !== -1 && boundary < 30) start += boundary + 1;
  }

  const slice = source.slice(start, end);
  const segs = highlight(slice, terms);
  if (start > 0) segs.unshift({ text: "…", hit: false });
  if (end < source.length) segs.push({ text: "…", hit: false });
  return segs;
}

export type ScoredCorpus = {
  docs: SearchDoc[];
  /** 與 docs 同序的內文；還沒載入就是空陣列。 */
  bodies: string[];
};

/**
 * 跑一次查詢。terms 之間是 AND——每個 term 都要在某個欄位出現，
 * 這樣多打一個字會收斂結果而不是擴散，符合「我在找那一篇」的意圖。
 */
export function search(
  corpus: ScoredCorpus,
  query: string,
  limit = 40,
): SearchHit[] {
  const terms = parseQuery(query);
  if (!terms.length) return [];

  const hits: SearchHit[] = [];

  corpus.docs.forEach((doc, idx) => {
    const body = corpus.bodies[idx] ?? "";
    const fields: Record<string, string> = {
      title: normalize(doc.t),
      tags: normalize(doc.tg.join(" ")),
      topic: normalize(topicLabel(doc.tp) + " " + doc.tp),
      description: normalize(doc.d),
      headings: normalize(doc.h),
      keywords: normalize(doc.kw.join(" ")),
      body: normalize(body),
    };

    let score = 0;
    const matched = new Set<string>();

    for (const term of terms) {
      let termScore = 0;
      for (const [name, text] of Object.entries(fields)) {
        const c = countOccurrences(text, term);
        if (c > 0) {
          matched.add(name);
          termScore +=
            WEIGHTS[name as keyof typeof WEIGHTS] * Math.min(c, MAX_COUNT_PER_FIELD);
        }
      }
      // AND：任何一個 term 完全沒出現，這篇就出局
      if (termScore === 0) return;
      score += termScore;
    }

    // 標題整串命中的排前面——「我記得標題有這幾個字」是最常見的查法
    const wholeQuery = normalize(query.trim());
    if (fields.title.includes(wholeQuery)) score += 60;
    if (fields.title.startsWith(wholeQuery)) score += 30;

    hits.push({
      doc,
      score,
      fields: [...matched],
      snippet: makeSnippet(body, doc.d, terms),
      titleSegments: highlight(doc.t, terms),
    });
  });

  hits.sort((a, b) => b.score - a.score || b.doc.dt.localeCompare(a.doc.dt));
  return hits.slice(0, limit);
}

export const FIELD_LABELS: Record<string, string> = {
  title: "標題",
  tags: "標籤",
  topic: "主題",
  description: "摘要",
  headings: "小標",
  keywords: "關鍵詞",
  body: "內文",
};
