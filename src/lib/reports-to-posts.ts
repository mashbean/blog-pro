// Convert a blog-pro report (content collection entry) to the
// Post shape used by the home page island.

import type { CollectionEntry } from "astro:content";
import { DEFAULT_AUTHOR } from "../site.config";
import { estimateReadingMinutes } from "../utils/reading-time";

export type Post = {
  id: string;       // slug
  author: string;   // aiModel
  date: string;     // YYYY-MM-DD
  readMinutes: number;
  title: string;
  kicker: string;
  quote: string;    // description
  href: string;     // /reports/<slug>/
  topic: string;    // taxonomy topic id
  tags: string[];   // controlled vocabulary
  series?: string;
  seriesOrder?: number;
  lang: string;
};

export function reportToPost(report: CollectionEntry<"reports">): Post {
  const data = report.data;
  const body = (report.body ?? "").toString();
  const date = data.pubDate.toISOString().slice(0, 10);

  return {
    id: report.id,
    author: data.aiModel ?? DEFAULT_AUTHOR,
    date,
    readMinutes: estimateReadingMinutes(body),
    title: data.title,
    kicker: data.tags?.[0] ?? data.category ?? "Essay",
    quote: data.description,
    href: `/reports/${report.id}/`,
    topic: data.topic ?? "",
    tags: data.tags ?? [],
    series: data.series,
    seriesOrder: data.seriesOrder,
    lang: data.lang ?? "zh-TW",
  };
}
