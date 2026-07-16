// Build-time per-story OG PNG. Mirrors ../[slug].png.ts but keyed on the
// fiction collection: the meta line carries 主角 · 體制 instead of 模型 · 日期.
import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { renderPng, postScene } from "../../../lib/og-png";

export const getStaticPaths: GetStaticPaths = async () => {
  const stories = await getCollection("fiction");
  return stories
    .filter((s) => !s.data.draft)
    .map((story) => ({
      params: { slug: story.id },
      props: { story },
    }));
};

export const GET: APIRoute = async ({ props }) => {
  const { story } = props as { story: Awaited<ReturnType<typeof getCollection>>[number] };
  const d = story.data as {
    title: string;
    series: string;
    seriesOrder: number;
    protagonist: string;
    institution: string;
    framedBy: string;
    aiModel?: string;
  };

  const png = await renderPng(
    postScene({
      title: d.title,
      kicker: `${d.series} · 第 ${String(d.seriesOrder).padStart(2, "0")} 篇`,
      author: d.protagonist,
      date: d.institution,
      path: "fiction",
      footRight: `${d.series}｜框架 ${d.framedBy}・文字 ${d.aiModel ?? "AI"}`,
    }),
  );

  // renderPng hands back a node Buffer; Response only accepts a plain view.
  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
