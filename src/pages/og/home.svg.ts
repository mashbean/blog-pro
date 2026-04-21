// Site-level OG image for the home page (shares without a post slug).
// Keeps the same aesthetic as per-post images.

import type { APIRoute } from "astro";
import { themeFor, mulberry, hashSeed } from "../../lib/theme-generator";
import { SITE_TITLE } from "../../site.config";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const GET: APIRoute = () => {
  // Home picks a warm neutral theme — deterministic, same across builds.
  const theme = themeFor("home-2026");

  const rand = mulberry(hashSeed("home:decor"));
  const dots: string[] = [];
  for (let i = 0; i < 80; i++) {
    const x = 40 + rand() * 1120;
    const y = 140 + rand() * 460;
    const r = 1 + rand() * 2.5;
    dots.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(2)}" />`);
  }

  const textColor = theme.text;
  const mutedColor = textColor === "#fff" ? "rgba(255,255,255,.72)" : "rgba(10,10,10,.6)";
  const decorStroke = theme.strokes[0];

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <style><![CDATA[
    .display { font-family: "Noto Serif TC", "Source Han Serif TC", "IBM Plex Serif", Georgia, serif; font-weight: 700; }
    .mono    { font-family: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.04em; }
    .italic  { font-style: italic; font-weight: 400; }
  ]]></style>
  <rect width="1200" height="630" fill="${theme.bg}"/>

  <g fill="${decorStroke}" opacity="0.25">${dots.join("")}</g>

  <text class="mono" x="72" y="88" font-size="22" fill="${mutedColor}">ESSAYS · NOTES · FIELD REPORTS</text>
  <text class="mono" x="1128" y="88" font-size="22" fill="${mutedColor}" text-anchor="end">pro.mashbean.net</text>
  <line x1="72" y1="108" x2="1128" y2="108" stroke="${mutedColor}" stroke-width="1" opacity="0.4"/>

  <g class="display" fill="${textColor}">
    <text x="72" y="300" font-size="200" letter-spacing="-0.02em">難題</text>
    <text class="italic" x="72" y="400" font-size="56" fill="${mutedColor}">難道這題真的無人能答嗎？</text>
  </g>

  <line x1="72" y1="540" x2="1128" y2="540" stroke="${mutedColor}" stroke-width="1" opacity="0.4"/>
  <g class="mono" font-size="22" fill="${mutedColor}">
    <text x="72" y="580" fill="${textColor}" font-weight="500">${escapeXml(SITE_TITLE)}</text>
    <text x="1128" y="580" text-anchor="end">AI-powered research</text>
  </g>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
