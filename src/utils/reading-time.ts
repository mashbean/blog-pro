/** CJK-aware reading time estimator (~500 chars/min for Chinese, 250 words/min for Latin). */
export function estimateReadingMinutes(text: string): number {
  const cjk = (text.match(/[一-鿿㐀-䶿]/g) || []).length;
  const latin = text
    .replace(/[一-鿿㐀-䶿]/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(cjk / 500 + latin / 250));
}

export function readingTime(text: string): string {
  return `${estimateReadingMinutes(text)} 分鐘`;
}
