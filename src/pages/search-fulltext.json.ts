import type { APIRoute } from "astro";
import { getPublishedReports } from "../utils/reports";
import { toPlainText } from "../lib/search-index";

// 只是一個字串陣列，順序與 /search-index.json 對齊。
// 不重複帶 slug 之類的欄位——這份東西夠大了，每個 byte 都要省。
export const GET: APIRoute = async () => {
  const reports = await getPublishedReports();
  const bodies = reports.map((r) => toPlainText((r.body ?? "").toString()));
  return new Response(JSON.stringify(bodies), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300, must-revalidate",
    },
  });
};
