import type { APIRoute } from "astro";
import { getPublishedReports } from "../utils/reports";
import { buildSearchDoc } from "../lib/search-index";

export const GET: APIRoute = async () => {
  const reports = await getPublishedReports();
  const docs = reports.map(buildSearchDoc);
  return new Response(JSON.stringify(docs), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300, must-revalidate",
    },
  });
};
