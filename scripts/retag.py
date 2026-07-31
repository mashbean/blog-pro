#!/usr/bin/env python3
"""把 reports 的 frontmatter 遷移到受控詞彙。

  python3 scripts/retag.py          # 只印計劃，不動檔案
  python3 scripts/retag.py --apply  # 實際寫入

做三件事：
  1. 加 topic（一篇一個，見 taxonomy.TOPICS）
  2. tags 換成受控詞彙（3-8 個，依全站頻次排序，最好篩的排前面）
  3. 原始 tags 整批搬到 keywords（不刪，繼續餵搜尋與相關文章）
另外補齊 civic-proof 的 series 欄位——原本 24 篇帶標籤只有 11 篇標了 series。
"""

from __future__ import annotations

import argparse
import collections
import glob
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from taxonomy import (  # noqa: E402
    POST_TOPIC, TOPICS, TOPIC_IDS, CONTROLLED_TAGS, map_tag, is_absorbed,
    MANUAL_TAGS, SERIES_ID, KNOWN_ORDER,
)

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
REPORTS = os.path.join(ROOT, "src", "content", "reports")

# 受控詞彙只有 45 個，一篇掛到十來個仍然可讀，也才篩得準。
# 上限只是防呆——真正跨很多面向的文章（例如系列收束篇）本來就該掛滿。
MAX_TAGS = 12


def parse_tags(fm: str) -> list[str]:
    m = re.search(r"^tags:\s*\[(.*?)\]", fm, re.M | re.S)
    if m:
        return [x.strip().strip("\"'") for x in m.group(1).split(",") if x.strip()]
    m = re.search(r"^tags:\s*\n((?:[ \t]*-[ \t]*.*\n)+)", fm, re.M)
    if m:
        return [x.strip().lstrip("-").strip().strip("\"'") for x in m.group(1).strip().split("\n")]
    return []


def yaml_inline(items: list[str]) -> str:
    return "[" + ", ".join('"' + s.replace('"', '\\"') + '"' for s in items) + "]"


def drop_field(fm: str, key: str) -> str:
    """移掉 key 的整段（含 block list 續行）。"""
    fm = re.sub(rf"^{key}:\s*\[.*?\]\s*\n", "", fm, flags=re.M | re.S)
    fm = re.sub(rf"^{key}:\s*\n(?:[ \t]*-[ \t]*.*\n)+", "", fm, flags=re.M)
    fm = re.sub(rf"^{key}:.*\n", "", fm, flags=re.M)
    return fm


def get_field(fm: str, key: str) -> str | None:
    m = re.search(rf"^{key}:\s*(.*)$", fm, re.M)
    return m.group(1).strip().strip("\"'") if m else None


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    args = ap.parse_args()

    files = sorted(glob.glob(os.path.join(REPORTS, "*.md")))
    plans = []
    unmapped: collections.Counter = collections.Counter()

    # 第一輪：算出每篇的受控標籤，順便統計全站頻次
    freq: collections.Counter = collections.Counter()
    raw = {}
    for f in files:
        slug = os.path.basename(f)[:-3]
        text = open(f, encoding="utf-8").read()
        m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
        if not m:
            print(f"!! 沒有 frontmatter: {slug}")
            return 1
        fm, body_at = m.group(1), m.end()
        old = parse_tags(fm)
        mapped: list[str] = []
        for t in old:
            hits = map_tag(t)
            if not hits and not is_absorbed(t):
                unmapped[t] += 1
            for h in hits:
                if h not in mapped:
                    mapped.append(h)

        manual = MANUAL_TAGS.get(slug, {})
        for t in manual.get("drop", []):
            if t in mapped:
                mapped.remove(t)
        for t in manual.get("add", []):
            if t not in mapped:
                mapped.append(t)

        for t in mapped:
            freq[t] += 1
        raw[slug] = (f, text, fm, body_at, old, mapped)

    # 第二輪：依頻次排序後裁到 MAX_TAGS，組出新 frontmatter
    overflow: list[tuple[str, int, list[str]]] = []
    for slug, (f, text, fm, body_at, old, mapped) in raw.items():
        topic = POST_TOPIC.get(slug)
        if topic is None:
            print(f"!! 沒有指派 topic: {slug}")
            return 1
        if topic not in TOPIC_IDS:
            print(f"!! topic 不在詞彙表: {slug} -> {topic}")
            return 1

        # 超過上限才裁，裁的時候留頻次高的（比較好當篩選面向用）
        keep = sorted(mapped, key=lambda t: (-freq[t], t))[:MAX_TAGS]
        if len(mapped) > MAX_TAGS:
            overflow.append((slug, len(mapped), [t for t in mapped if t not in keep]))
        # 排完再照詞彙表順序擺，版面上同一叢集的標籤才會排在一起
        new_tags = [t for t in CONTROLLED_TAGS if t in keep]

        nfm = fm
        nfm = drop_field(nfm, "tags")
        nfm = drop_field(nfm, "keywords")
        nfm = drop_field(nfm, "topic")

        block = [f"topic: {topic}", f"tags: {yaml_inline(new_tags)}"]
        if old:
            block.append(f"keywords: {yaml_inline(old)}")

        # 放在 description 後面；沒有的話擺 pubDate 後面
        anchor = re.search(r"^description:.*\n", nfm + "\n", re.M) or \
            re.search(r"^pubDate:.*\n", nfm + "\n", re.M)
        insert_at = anchor.end() if anchor else len(nfm)
        nfm = nfm[:insert_at] + "\n".join(block) + "\n" + nfm[insert_at:]

        # civic-proof：帶標籤就算系列成員，補上 series
        is_series = "公民證明" in new_tags or "civic-proof" in old
        if is_series and not get_field(nfm, "series"):
            nfm = drop_field(nfm, "series")
            nfm = nfm.rstrip("\n") + f"\nseries: {SERIES_ID}\n"
        if slug in KNOWN_ORDER and not get_field(nfm, "seriesOrder"):
            nfm = nfm.rstrip("\n") + f"\nseriesOrder: {KNOWN_ORDER[slug]}\n"

        nfm = re.sub(r"\n{3,}", "\n\n", nfm).strip("\n")
        new_text = "---\n" + nfm + "\n---\n" + text[body_at:]
        plans.append((f, slug, topic, old, new_tags, is_series, new_text, text))

    # ── 計劃 ─────────────────────────────────────────────────────
    print(f"檔案數：{len(plans)}\n")
    by_topic = collections.Counter(p[2] for p in plans)
    print("主題分佈")
    for tid, label, _ in TOPICS:
        print(f"  {by_topic.get(tid, 0):3d}  {label}  ({tid})")
    print()

    print("受控標籤使用次數")
    used = collections.Counter()
    for p in plans:
        for t in p[4]:
            used[t] += 1
    for t in CONTROLLED_TAGS:
        n = used.get(t, 0)
        flag = "  ← 沒用到" if n == 0 else ("  ← 只有 1 篇" if n == 1 else "")
        print(f"  {n:3d}  {t}{flag}")
    print(f"\n受控標籤：{len(CONTROLLED_TAGS)} 個定義 / {len(used)} 個實際用到")
    print(f"原始標籤：654 個 → 全部保留在 keywords")

    thin = [(p[1], p[4]) for p in plans if len(p[4]) < 3]
    if thin:
        print(f"\n標籤少於 3 個的文章（{len(thin)} 篇，可能要手動補）")
        for slug, tags in thin:
            print(f"  {slug}: {tags}")

    if overflow:
        print(f"\n超過 {MAX_TAGS} 個受控標籤被裁掉的文章（{len(overflow)} 篇）")
        for slug, n, cut in overflow:
            print(f"  {slug}（{n} 個）裁掉：{', '.join(cut)}")

    if unmapped:
        print(f"\n沒對到任何受控標籤的原始標籤：{len(unmapped)} 個"
              f"（僅保留在 keywords，仍可被全文搜尋命中）")
        for t, n in unmapped.most_common(12):
            print(f"  {n}×  {t}")
        if len(unmapped) > 12:
            print(f"  …其餘 {len(unmapped) - 12} 個")

    n_series = sum(1 for p in plans if p[5])
    print(f"\ncivic-proof 系列：{n_series} 篇（原本只有 11 篇標了 series）")

    if not args.apply:
        print("\n（乾跑，沒有寫入。加 --apply 實際套用）")
        return 0

    changed = 0
    for f, slug, _t, _o, _n, _s, new_text, old_text in plans:
        if new_text != old_text:
            open(f, "w", encoding="utf-8").write(new_text)
            changed += 1
    print(f"\n已寫入 {changed} 個檔案。")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
