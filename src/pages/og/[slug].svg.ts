// Build-time per-post OG image.
// Visual language matches the home page: mesh mesh-gradient bg + a tilted
// themed card accent on the right, serif title + mono meta on the left.

import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { themeFor, mulberry, hashSeed } from "../../lib/theme-generator";
import { DEFAULT_AUTHOR, SITE_SHORT, SITE_SUBTITLE } from "../../site.config";
import { escapeXml, wrapTitle, scatterDots, meshBg } from "../../lib/og-svg";

export const getStaticPaths: GetStaticPaths = async () => {
  const reports = await getCollection("reports");
  return reports
    .filter((r) => !r.data.draft)
    .map((report) => ({
      params: { slug: report.id },
      props: { report },
    }));
};

export const GET: APIRoute = ({ props }) => {
  const { report } = props as { report: Awaited<ReturnType<typeof getCollection>>[number] };
  const d = report.data;
  const theme = themeFor(report.id);

  const kicker = (d.tags?.[0] ?? d.category ?? "ESSAY").toUpperCase();
  const author = d.aiModel ?? DEFAULT_AUTHOR;
  const date = d.pubDate.toISOString().slice(0, 10);

  // Content area (title zone) is 72–780 px → 708 px wide.
  const { lines, fontSize, leading } = wrapTitle(d.title, 708);

  // Top-align so the first line clears the top-chrome row (y ≈ 112) regardless
  // of how many lines the title wraps to. `baseline0` is the first line's
  // baseline; SVG text draws above that.
  const chromeBottom = 112; // baseline of top meta line
  const topPadding = 22;
  const baseline0 = chromeBottom + topPadding + fontSize * 0.85;
  const titleTop = Math.round(baseline0);

  // Themed card accent on the right (echoes the homepage card): 320×440,
  // tilted ~-6deg, with pattern dots and a small label.
  const cardX = 820;
  const cardY = 95;
  const cardW = 320;
  const cardH = 440;
  const rotCx = cardX + cardW / 2;
  const rotCy = cardY + cardH / 2;
  const strokeForDots = theme.strokes[0];

  const dots = scatterDots(report.id + ":og", {
    count: 38,
    x: cardX + 20, y: cardY + 80,
    w: cardW - 40, h: cardH - 120,
    minR: 1, maxR: 3,
  });

  // Small secondary decoration dots on the canvas under the mesh (very subtle).
  const canvasDots = scatterDots(report.id + ":og-canvas", {
    count: 22,
    x: 56, y: 120, w: 720, h: 420,
    minR: 0.8, maxR: 1.8,
  });

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <style><![CDATA[
    .display { font-family: "Noto Serif TC", "Source Han Serif TC", "IBM Plex Serif", Georgia, serif; font-weight: 700; }
    .mono    { font-family: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.04em; }
  ]]></style>
  ${meshBg()}

  <!-- Faint canvas decoration dots under typography -->
  <g fill="rgba(15,15,15,0.16)">${canvasDots}</g>

  <!-- Tilted themed card accent (mirrors the homepage post cards) -->
  <g transform="rotate(-6 ${rotCx} ${rotCy})">
    <rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" rx="22" ry="22"
          fill="${theme.bg}"
          stroke="rgba(255,255,255,0.55)" stroke-width="1" />
    <!-- paper-grain hint: two very faint repeating lines via rects -->
    <g clip-path="inset(0 round 22px)"></g>
    <!-- pattern dots inside the card -->
    <g fill="${strokeForDots}" opacity="0.75">${dots}</g>
    <!-- small author label at card top -->
    <text class="mono" x="${cardX + 22}" y="${cardY + 36}" font-size="16"
          fill="${theme.text}" opacity="0.9">${escapeXml(author)}</text>
    <!-- pill tag bottom of card -->
    <rect x="${cardX + 22}" y="${cardY + cardH - 50}" width="${Math.min(cardW - 44, 14 * 14 + 36)}" height="30"
          rx="15" ry="15"
          fill="${theme.text === "#fff" ? "rgba(255,255,255,0.18)" : "rgba(10,10,10,0.12)"}" />
    <text class="mono" x="${cardX + 40}" y="${cardY + cardH - 30}" font-size="14"
          fill="${theme.text}">${escapeXml(kicker.slice(0, 18))}</text>
  </g>

  <!-- Top chrome: kicker + brand -->
  <g fill="rgba(10,10,10,0.55)">
    <text class="mono" x="72" y="88" font-size="20">${escapeXml(kicker)}</text>
    <text class="mono" x="72" y="112" font-size="14" opacity="0.7">pro.mashbean.net / reports</text>
  </g>

  <!-- Title (serif, wrapped) -->
  <g class="display" fill="#0e0e0e">
    ${lines
      .map(
        (line, i) =>
          `<text x="72" y="${(titleTop + i * leading).toFixed(0)}" font-size="${fontSize}" letter-spacing="-0.01em">${escapeXml(line)}</text>`
      )
      .join("\n    ")}
  </g>

  <!-- Bottom meta -->
  <line x1="72" y1="558" x2="1128" y2="558" stroke="rgba(10,10,10,0.28)" stroke-width="1"/>
  <g class="mono" font-size="20" fill="rgba(10,10,10,0.7)">
    <text x="72" y="596"><tspan fill="#0e0e0e" font-weight="500">${escapeXml(author)}</tspan>  ·  ${escapeXml(date)}</text>
    <text x="1128" y="596" text-anchor="end">${escapeXml(SITE_SHORT)}｜${escapeXml(SITE_SUBTITLE)}</text>
  </g>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
