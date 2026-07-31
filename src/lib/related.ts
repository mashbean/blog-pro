// 相關文章。
//
// 原本這裡是 `sort(() => random() - 0.5)` 之後取三篇——純亂數，
// 讀完一篇想往下讀的人等於被丟回起點。現在改成真的算相似度：
// 同系列 > 同主題 > 共用受控標籤 > 共用舊關鍵詞。
//
// 舊的 654 個自由標籤在這裡反而是最好用的訊號：它們夠細，
// 兩篇同時掛 `Danielle-Allen` 或 `EUDI-Wallet` 幾乎一定真的相關。

import type { CollectionEntry } from "astro:content";

type Report = CollectionEntry<"reports">;

const W = {
  sameSeries: 40,
  seriesAdjacent: 25,
  sameTopic: 12,
  sharedTag: 8,
  sharedKeyword: 3,
} as const;

/** 共用關鍵詞的加分上限——避免超長標籤清單的文章洗掉其他訊號。 */
const KEYWORD_CAP = 24;

function overlap(a: string[] | undefined, b: Set<string>): number {
  if (!a) return 0;
  let n = 0;
  for (const x of a) if (b.has(x)) n++;
  return n;
}

export type Related = { report: Report; score: number; reason: string };

export function relatedTo(target: Report, pool: Report[], limit = 4): Related[] {
  const tags = new Set(target.data.tags ?? []);
  const keywords = new Set(target.data.keywords ?? []);
  const topic = target.data.topic;
  const series = target.data.series;
  const order = target.data.seriesOrder;

  const scored: Related[] = [];

  for (const r of pool) {
    if (r.id === target.id) continue;

    let score = 0;
    const reasons: string[] = [];

    if (series && r.data.series === series) {
      score += W.sameSeries;
      reasons.push("同系列");
      if (order && r.data.seriesOrder) {
        const gap = Math.abs(order - r.data.seriesOrder);
        if (gap <= 2) score += W.seriesAdjacent - gap * 5;
      }
    }

    if (topic && r.data.topic === topic) {
      score += W.sameTopic;
      reasons.push("同主題");
    }

    const tagHits = overlap(r.data.tags, tags);
    if (tagHits) {
      score += tagHits * W.sharedTag;
      reasons.push(`${tagHits} 個共同標籤`);
    }

    const kwHits = Math.min(overlap(r.data.keywords, keywords), KEYWORD_CAP);
    if (kwHits) {
      score += kwHits * W.sharedKeyword;
      reasons.push(`${kwHits} 個共同關鍵詞`);
    }

    if (score > 0) scored.push({ report: r, score, reason: reasons.slice(0, 2).join("、") });
  }

  scored.sort(
    (a, b) =>
      b.score - a.score ||
      b.report.data.pubDate.valueOf() - a.report.data.pubDate.valueOf(),
  );
  return scored.slice(0, limit);
}

/**
 * 系列成員的閱讀順序：入口篇固定第一，其餘照發表日。
 *
 * 刻意不用 seriesOrder 排序。civic-proof 這一系列的 seriesOrder 是作者
 * 在論文裡的篇號（9、10、…、27），站上只發表了其中一部分，而且 24 篇裡
 * 只有 10 篇標了號。拿它當排序鍵會把沒標號的 14 篇全部擠到後面，
 * 但那些其實是先發表的。篇號只拿來顯示，不拿來排序。
 */
export function orderedSeries(seriesId: string, pool: Report[], entry?: string): Report[] {
  return pool
    .filter((r) => r.data.series === seriesId)
    .sort((a, b) => {
      if (entry) {
        if (a.id === entry) return -1;
        if (b.id === entry) return 1;
      }
      return a.data.pubDate.valueOf() - b.data.pubDate.valueOf();
    });
}

export function seriesNeighbours(target: Report, pool: Report[], entry?: string) {
  const id = target.data.series;
  if (!id) return { prev: undefined, next: undefined, position: 0, total: 0 };

  const members = orderedSeries(id, pool, entry);
  const i = members.findIndex((r) => r.id === target.id);
  return {
    prev: i > 0 ? members[i - 1] : undefined,
    next: i >= 0 && i < members.length - 1 ? members[i + 1] : undefined,
    /** 發表順序中的位次——不是作者的篇號，顯示時要講清楚。 */
    position: i + 1,
    total: members.length,
  };
}
