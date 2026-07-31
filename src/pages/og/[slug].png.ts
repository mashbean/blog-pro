// Build-time per-post OG PNG.
import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { renderPng, postScene } from "../../lib/og-png";
import { DEFAULT_AUTHOR } from "../../site.config";

export const getStaticPaths: GetStaticPaths = async () => {
  const reports = await getCollection("reports");
  return reports
    .filter((r) => !r.data.draft)
    .map((report) => ({
      params: { slug: report.id },
      props: { report },
    }));
};

export const GET: APIRoute = async ({ props }) => {
  // 不寫死成所有 collection 的聯集，否則 d.tags / d.pubDate 這些欄位在型別上不存在
  const { report } = props as { report: CollectionEntry<"reports"> };
  const d = report.data;

  const png = await renderPng(
    postScene({
      title: d.title,
      kicker: d.tags?.[0] ?? d.category ?? "Essay",
      author: d.aiModel ?? DEFAULT_AUTHOR,
      date: d.pubDate.toISOString().slice(0, 10),
    }),
  );

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
