import { getCollection, type CollectionEntry } from "astro:content";

export type ReportEn = CollectionEntry<"reportsEn">;

/** 已發佈的英文譯本，key 是中文原文 id。 */
export async function getTranslationMap(): Promise<Map<string, ReportEn>> {
  const all = await getCollection("reportsEn");
  const map = new Map<string, ReportEn>();
  for (const t of all) {
    if (t.data.draft) continue;
    map.set(t.data.translationOf, t);
  }
  return map;
}

export function enReportPath(id: string): string {
  return `/en/reports/${id}/`;
}

export function zhReportPath(id: string): string {
  return `/reports/${id}/`;
}
