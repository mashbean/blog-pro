export function formatDate(date: Date, locale: "zh" | "en" = "zh"): string {
  return date.toLocaleDateString(locale === "en" ? "en-GB" : "zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Taipei",
  });
}
