// Build-time SVG OG image per published report.
// Same OKLCH palette + Plex/Noto typography hint as the site itself.
// 1200×630; Twitter/Discord/Slack/Threads render SVG og:image correctly.

import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { themeFor, patternFor, mulberry, hashSeed } from "../../lib/theme-generator";
import { DEFAULT_AUTHOR, SITE_TITLE } from "../../site.config";

export const getStaticPaths: GetStaticPaths = async () => {
  const reports = await getCollection("reports");
  return reports
    .filter((r) => !r.data.draft)
    .map((report) => ({
      params: { slug: report.id },
      props: { report },
    }));
};

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Rough-but-CJK-aware character "width" in title units.
// Latin letters ≈ 0.55 of a CJK glyph; punctuation ≈ 0.35.
function visualWidth(ch: string): number {
  if (/[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]/.test(ch)) return 1; // CJK + fullwidth
  if (/[A-Za-z0-9]/.test(ch)) return 0.55;
  return 0.4;
}

// Greedy line-break a title to fit within `maxUnits` per line, up to `maxLines`.
function wrapTitle(title: string, maxUnits: number, maxLines: number): string[] {
  const lines: string[] = [];
  let buf = "";
  let w = 0;
  for (const ch of title) {
    const cw = visualWidth(ch);
    if (w + cw > maxUnits && buf.length > 0) {
      lines.push(buf);
      buf = "";
      w = 0;
      if (lines.length >= maxLines) break;
    }
    buf += ch;
    w += cw;
  }
  if (buf && lines.length < maxLines) lines.push(buf);
  // If we truncated, add an ellipsis to the last line.
  if (lines.length === maxLines) {
    const remaining = title.slice(lines.join("").length);
    if (remaining.length > 0) {
      const last = lines[lines.length - 1];
      lines[lines.length - 1] = last.replace(/.$/, "") + "…";
    }
  }
  return lines;
}

// Deterministic tiny pattern decoration per post id (echoes the card art).
function decorationDots(id: string): string {
  const rand = mulberry(hashSeed(id + ":og-decor"));
  const pts: string[] = [];
  for (let i = 0; i < 60; i++) {
    const x = 40 + rand() * 1120;
    const y = 180 + rand() * 410;
    const r = 1 + rand() * 2.5;
    pts.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(2)}" />`);
  }
  return pts.join("");
}

export const GET: APIRoute = ({ props }) => {
  const { report } = props as { report: Awaited<ReturnType<typeof getCollection>>[number] };
  const d = report.data;
  const theme = themeFor(report.id);

  const kicker = (d.tags?.[0] ?? d.category ?? "Essay").toUpperCase();
  const author = d.aiModel ?? DEFAULT_AUTHOR;
  const date = d.pubDate.toISOString().slice(0, 10);
  const site = SITE_TITLE;

  // Title line-wrap — roomy enough for ~16 CJK chars / line, up to 3 lines.
  const lines = wrapTitle(d.title, 16, 3);
  const titleSize = lines.length >= 3 ? 72 : lines.length === 2 ? 82 : 96;
  const titleLeading = Math.round(titleSize * 1.18);

  const titleBlockHeight = lines.length * titleLeading;
  const titleStartY = 280 + (lines.length === 1 ? 30 : lines.length === 2 ? 0 : -30);

  const textColor = theme.text;
  const mutedColor = textColor === "#fff" ? "rgba(255,255,255,.72)" : "rgba(10,10,10,.6)";
  const strongColor = textColor;

  // Use the first stroke from the theme for decoration so pattern dots match the post.
  const decorStroke = theme.strokes[0];

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <style><![CDATA[
    .display { font-family: "Noto Serif TC", "Source Han Serif TC", "IBM Plex Serif", Georgia, serif; font-weight: 700; }
    .mono    { font-family: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.04em; }
    .italic  { font-style: italic; font-weight: 400; }
  ]]></style>
  <rect width="1200" height="630" fill="${theme.bg}"/>

  <!-- Paper grain: two thin repeating line sets -->
  <defs>
    <pattern id="grain-h" width="2" height="2" patternUnits="userSpaceOnUse">
      <rect width="1" height="1" fill="rgba(0,0,0,0.02)"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#grain-h)"/>

  <!-- Subtle pattern-dot decoration -->
  <g fill="${decorStroke}" opacity="0.28">${decorationDots(report.id)}</g>

  <!-- Top chrome: kicker + brand -->
  <text class="mono" x="72" y="88" font-size="22" fill="${mutedColor}">${escapeXml(kicker)}</text>
  <text class="mono" x="1128" y="88" font-size="22" fill="${mutedColor}" text-anchor="end">${escapeXml(site)}</text>
  <line x1="72" y1="108" x2="1128" y2="108" stroke="${mutedColor}" stroke-width="1" opacity="0.4"/>

  <!-- Title -->
  <g class="display" fill="${strongColor}" font-size="${titleSize}">
    ${lines
      .map(
        (line, i) =>
          `<text x="72" y="${titleStartY + i * titleLeading}" letter-spacing="-0.01em">${escapeXml(line)}</text>`
      )
      .join("\n    ")}
  </g>

  <!-- Bottom meta: author · date -->
  <line x1="72" y1="540" x2="1128" y2="540" stroke="${mutedColor}" stroke-width="1" opacity="0.4"/>
  <g class="mono" font-size="22" fill="${mutedColor}">
    <text x="72" y="580"><tspan fill="${strongColor}" font-weight="500">${escapeXml(author)}</tspan>  ·  ${escapeXml(date)}</text>
    <text x="1128" y="580" text-anchor="end">pro.mashbean.net</text>
  </g>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
