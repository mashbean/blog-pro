// Site-level OG image for the home page.
// Mirrors the home hero: mesh background + 難題 title + tagline subtitle,
// plus a small "stack" of themed mini-cards on the right to echo the homepage piles.

import type { APIRoute } from "astro";
import { themeFor } from "../../lib/theme-generator";
import { SITE_SHORT, SITE_SUBTITLE, SITE_TAGLINE } from "../../site.config";
import { escapeXml, scatterDots, meshBg } from "../../lib/og-svg";

export const GET: APIRoute = () => {
  // Three mini-cards with distinct per-seed themes (stable across builds),
  // evoking the pile layout on the homepage.
  const seeds = ["home-a", "home-b", "home-c"];
  const cards = seeds.map((id, i) => ({
    theme: themeFor(id),
    rot: [-8, 4, -3][i],
    x: [820, 860, 900][i],
    y: [120, 170, 220][i],
    dots: scatterDots(id + ":og", {
      count: 26, x: 0, y: 0, w: 260, h: 360, minR: 1, maxR: 2.6,
    }),
  }));

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <style><![CDATA[
    .display { font-family: "Noto Serif TC", "Source Han Serif TC", "IBM Plex Serif", Georgia, serif; font-weight: 700; }
    .mono    { font-family: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.04em; }
  ]]></style>
  ${meshBg()}

  <!-- Stack of 3 tilted themed cards (echoing homepage piles) -->
  ${cards
    .reverse()
    .map((c) => `
  <g transform="rotate(${c.rot} ${c.x + 130} ${c.y + 180})">
    <rect x="${c.x}" y="${c.y}" width="260" height="360" rx="20" ry="20"
          fill="${c.theme.bg}" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>
    <g transform="translate(${c.x} ${c.y})" fill="${c.theme.strokes[0]}" opacity="0.75">${c.dots}</g>
  </g>`)
    .join("")}

  <!-- Top chrome -->
  <g fill="rgba(10,10,10,0.55)">
    <text class="mono" x="72" y="88" font-size="20">ESSAYS · NOTES · FIELD REPORTS</text>
    <text class="mono" x="72" y="112" font-size="14" opacity="0.7">pro.mashbean.net</text>
  </g>

  <!-- Giant 難題 headline + subtitle -->
  <g class="display" fill="#0e0e0e">
    <text x="72" y="330" font-size="220" letter-spacing="-0.02em">${escapeXml(SITE_SHORT)}</text>
  </g>
  <g class="display" fill="#1a1a1a" font-weight="700">
    <text x="72" y="400" font-size="36">${escapeXml(SITE_TAGLINE)}</text>
  </g>

  <!-- Bottom meta -->
  <line x1="72" y1="558" x2="1128" y2="558" stroke="rgba(10,10,10,0.28)" stroke-width="1"/>
  <g class="mono" font-size="20" fill="rgba(10,10,10,0.7)">
    <text x="72" y="596"><tspan fill="#0e0e0e" font-weight="500">${escapeXml(SITE_SHORT)}</tspan>｜${escapeXml(SITE_SUBTITLE)}</text>
    <text x="1128" y="596" text-anchor="end">AI-powered research</text>
  </g>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
