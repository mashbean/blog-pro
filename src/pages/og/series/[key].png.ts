import type { APIRoute } from "astro";
import { SERIES } from "../../../lib/taxonomy";
import { renderPng } from "../../../lib/og-png";
import { seriesScene } from "../../../lib/og-series";
export function getStaticPaths() {
  return [...Object.keys(SERIES), "specials"].flatMap(id => ["zh", "en"].map(locale => ({params: {key: `${locale}-${id}`}, props: {id, locale}})));
}
export const GET: APIRoute = async ({props}) => {
  const png = await renderPng(seriesScene(props.id, "en"));
  return new Response(new Uint8Array(png), {headers: {"Content-Type": "image/png"}});
};
