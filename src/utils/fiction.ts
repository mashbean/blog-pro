import { getCollection } from "astro:content";

/** 選集內的閱讀順序由 seriesOrder 決定，不是發表日期。 */
export async function getFictionInReadingOrder() {
  const all = await getCollection("fiction");
  return all
    .filter((f) => !f.data.draft)
    .sort((a, b) => a.data.seriesOrder - b.data.seriesOrder);
}

/** 同一選集裡的前一篇 / 下一篇，給文末的接續導覽用。 */
export async function getSeriesNeighbours(id: string) {
  const ordered = await getFictionInReadingOrder();
  const i = ordered.findIndex((f) => f.id === id);
  if (i === -1) return { prev: undefined, next: undefined };
  return { prev: ordered[i - 1], next: ordered[i + 1] };
}
