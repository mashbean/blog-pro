import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPublishedReports } from "../utils/reports";
import { SITE_TITLE, SITE_DESCRIPTION, DEFAULT_AUTHOR } from "../site.config";
import { withBase } from "../utils/paths";

export async function GET(context: APIContext) {
  const reports = await getPublishedReports();

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!.href,
    xmlns: { dc: "http://purl.org/dc/elements/1.1/" },
    items: reports.map((report) => ({
      title: report.data.title,
      pubDate: report.data.pubDate,
      description: report.data.description,
      link: withBase(`/reports/${report.id}/`),
      customData: `<dc:creator>${DEFAULT_AUTHOR}</dc:creator>`,
    })),
  });
}
