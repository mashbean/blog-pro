// 首頁的檢索介面。
//
// 原本這裡預設是散落卡片牆——好看，但 64 篇文章互相遮擋、要滾四千多像素，
// 而且卡片正面最大的字是生成模型名，對「找出某一篇」毫無幫助。
// 現在預設換成密集索引 + 面向篩選，散落牆降級成 scatter 檢視留著逛。

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Post } from "../../lib/reports-to-posts";
import { themeFor, themeForMono, hashSeed, mulberry } from "../../lib/theme-generator";
import type { Theme } from "../../lib/theme-generator";
import { irisNavigate, useIrisReset } from "../../lib/iris";
import { TOPICS, topicLabel, sortTags, seriesMeta } from "../../lib/taxonomy";
import PatternArt from "./PatternArt";

type View = "index" | "cards" | "scatter";
type Sort = "new" | "old" | "long" | "short";
type Palette = "rainbow" | "mono";

type Position = { x: number; y: number; rot: number; z: number };

type Filters = {
  q: string;
  topic: string | null;
  tags: string[];
  series: string | null;
  lang: string | null;
};

const EMPTY: Filters = { q: "", topic: null, tags: [], series: null, lang: null };

function filtersActive(f: Filters): boolean {
  return !!(f.q || f.topic || f.tags.length || f.series || f.lang);
}

// ── URL 同步 ─────────────────────────────────────────────────────
// 篩完的狀態要能貼給別人、按上一頁要能回去，所以進網址列。

function readFilters(): Filters {
  if (typeof window === "undefined") return EMPTY;
  const p = new URLSearchParams(window.location.search);
  return {
    q: p.get("q") ?? "",
    topic: p.get("topic"),
    tags: p.getAll("tag"),
    series: p.get("series"),
    lang: p.get("lang"),
  };
}

function writeFilters(f: Filters) {
  const p = new URLSearchParams();
  if (f.q) p.set("q", f.q);
  if (f.topic) p.set("topic", f.topic);
  for (const t of f.tags) p.append("tag", t);
  if (f.series) p.set("series", f.series);
  if (f.lang) p.set("lang", f.lang);
  const qs = p.toString();
  const next = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
  window.history.replaceState(null, "", next);
}

function useWindowWidth(initial = 1280) {
  const [w, setW] = useState<number>(initial);
  useEffect(() => {
    const sync = () => setW(window.innerWidth);
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);
  return w;
}

function compute(w: number): number {
  if (w < 768) return 1;
  if (w < 900) return 4;
  if (w < 1200) return 6;
  if (w < 1500) return 8;
  return 10;
}

// ── 篩選 ─────────────────────────────────────────────────────────

/** 首頁的輸入框只比對標題／摘要／標籤——全文交給 ⌘K 面板。 */
function matchesQuery(post: Post, q: string): boolean {
  if (!q) return true;
  const needle = q.toLowerCase();
  return (
    post.title.toLowerCase().includes(needle) ||
    post.quote.toLowerCase().includes(needle) ||
    post.tags.some((t) => t.toLowerCase().includes(needle)) ||
    topicLabel(post.topic).toLowerCase().includes(needle)
  );
}

function applyFilters(posts: Post[], f: Filters, skip?: keyof Filters): Post[] {
  return posts.filter((p) => {
    if (skip !== "q" && !matchesQuery(p, f.q)) return false;
    if (skip !== "topic" && f.topic && p.topic !== f.topic) return false;
    if (skip !== "tags" && f.tags.length && !f.tags.every((t) => p.tags.includes(t)))
      return false;
    if (skip !== "series" && f.series && p.series !== f.series) return false;
    if (skip !== "lang" && f.lang && p.lang !== f.lang) return false;
    return true;
  });
}

function sortPosts(posts: Post[], sort: Sort): Post[] {
  const arr = [...posts];
  switch (sort) {
    case "old":
      return arr.sort((a, b) => a.date.localeCompare(b.date));
    case "long":
      return arr.sort((a, b) => b.readMinutes - a.readMinutes);
    case "short":
      return arr.sort((a, b) => a.readMinutes - b.readMinutes);
    default:
      return arr.sort((a, b) => b.date.localeCompare(a.date));
  }
}

// ── 控制列 ───────────────────────────────────────────────────────

function Controls({
  filters, onFilters, view, onView, sort, onSort, shown, total, onShuffle,
}: {
  filters: Filters;
  onFilters: (f: Filters) => void;
  view: View;
  onView: (v: View) => void;
  sort: Sort;
  onSort: (s: Sort) => void;
  shown: number;
  total: number;
  onShuffle: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="controls">
      <div className="controls__row">
        <div className="controls__search">
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <path d="M13.5 13.5 L17.5 17.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={filters.q}
            placeholder="篩選標題與標籤……"
            aria-label="篩選文章"
            onChange={(e) => onFilters({ ...filters, q: e.target.value })}
          />
          {filters.q && (
            <button
              className="controls__clearq"
              aria-label="清除篩選字串"
              onClick={() => {
                onFilters({ ...filters, q: "" });
                inputRef.current?.focus();
              }}
            >
              ×
            </button>
          )}
        </div>

        <button className="controls__full" data-search-open type="button">
          全文搜尋 <kbd>⌘K</kbd>
        </button>

        <div className="controls__spacer" />

        <select
          className="controls__select"
          value={sort}
          aria-label="排序方式"
          onChange={(e) => onSort(e.target.value as Sort)}
        >
          <option value="new">新到舊</option>
          <option value="old">舊到新</option>
          <option value="long">最長篇</option>
          <option value="short">最短篇</option>
        </select>

        <div className="viewswitch" role="group" aria-label="檢視方式">
          {([
            ["index", "索引"],
            ["cards", "卡片"],
            ["scatter", "散落"],
          ] as [View, string][]).map(([v, label]) => (
            <button
              key={v}
              type="button"
              aria-pressed={view === v}
              onClick={() => (v === "scatter" && view === "scatter" ? onShuffle() : onView(v))}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="controls__count">
        {shown === total ? (
          <>全部 <strong>{total}</strong> 篇</>
        ) : (
          <>
            篩出 <strong>{shown}</strong> / {total} 篇
            <button className="controls__reset" onClick={() => onFilters(EMPTY)}>
              清除條件
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function TopicChips({
  posts, filters, onFilters,
}: {
  posts: Post[];
  filters: Filters;
  onFilters: (f: Filters) => void;
}) {
  // 計數要排除 topic 自己，否則選中之後其他主題全變 0，看不出還能跳去哪
  const pool = applyFilters(posts, filters, "topic");
  const counts = new Map<string, number>();
  for (const p of pool) counts.set(p.topic, (counts.get(p.topic) ?? 0) + 1);

  return (
    <div className="facets">
      <span className="facets__label">主題</span>
      <div className="facets__chips">
        {TOPICS.map((t) => {
          const n = counts.get(t.id) ?? 0;
          const on = filters.topic === t.id;
          return (
            <button
              key={t.id}
              type="button"
              className="chip chip--topic"
              data-topic={t.id}
              aria-pressed={on}
              disabled={n === 0 && !on}
              title={t.blurb}
              onClick={() => onFilters({ ...filters, topic: on ? null : t.id })}
            >
              {t.label}
              <span className="chip__n">{n}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TagChips({
  posts, filters, onFilters,
}: {
  posts: Post[];
  filters: Filters;
  onFilters: (f: Filters) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const pool = applyFilters(posts, filters, "tags");

  const counts = new Map<string, number>();
  for (const p of pool) for (const t of p.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  for (const t of filters.tags) if (!counts.has(t)) counts.set(t, 0);

  const all = sortTags([...counts.keys()]);
  const LIMIT = 14;
  // 已選的一定要看得到，不能被收合藏起來
  const visible = expanded
    ? all
    : all
        .slice()
        .sort((a, b) => (counts.get(b) ?? 0) - (counts.get(a) ?? 0))
        .slice(0, LIMIT)
        .concat(filters.tags.filter((t) => !all.slice(0, LIMIT).includes(t)));
  const ordered = sortTags([...new Set(visible)]);

  if (!all.length) return null;

  return (
    <div className="facets">
      <span className="facets__label">標籤</span>
      <div className="facets__chips">
        {ordered.map((t) => {
          const on = filters.tags.includes(t);
          const n = counts.get(t) ?? 0;
          return (
            <button
              key={t}
              type="button"
              className="chip"
              aria-pressed={on}
              disabled={n === 0 && !on}
              onClick={() =>
                onFilters({
                  ...filters,
                  tags: on ? filters.tags.filter((x) => x !== t) : [...filters.tags, t],
                })
              }
            >
              {t}
              <span className="chip__n">{n}</span>
            </button>
          );
        })}
        {all.length > ordered.length && !expanded && (
          <button className="chip chip--more" onClick={() => setExpanded(true)}>
            還有 {all.length - ordered.length} 個 ↓
          </button>
        )}
        {expanded && (
          <button className="chip chip--more" onClick={() => setExpanded(false)}>
            收合 ↑
          </button>
        )}
      </div>
    </div>
  );
}

// ── 密集索引 ─────────────────────────────────────────────────────

function IndexView({
  posts, filters, onFilters,
}: {
  posts: Post[];
  filters: Filters;
  onFilters: (f: Filters) => void;
}) {
  if (!posts.length) {
    return (
      <div className="indexlist__empty">
        <p>這組條件下沒有文章。</p>
        <button className="pill" onClick={() => onFilters(EMPTY)}>清除所有條件</button>
      </div>
    );
  }

  return (
    <ol className="indexlist">
      {posts.map((post) => (
        <li key={post.id} className="indexrow">
          <a className="indexrow__main" href={post.href}>
            <time className="indexrow__date" dateTime={post.date}>{post.date}</time>
            <span className="indexrow__title">{post.title}</span>
            <span className="indexrow__meta">
              <span className="indexrow__topic" data-topic={post.topic}>
                {topicLabel(post.topic)}
              </span>
              <span className="indexrow__mins">{post.readMinutes} 分鐘</span>
              {post.lang === "en" && <span className="indexrow__lang">EN</span>}
            </span>
          </a>
          <p className="indexrow__desc">{post.quote}</p>
          <div className="indexrow__tags">
            {post.series && (
              <button
                className="indexrow__tag indexrow__tag--series"
                onClick={() => onFilters({ ...filters, series: post.series ?? null })}
              >
                {seriesMeta(post.series)?.label ?? post.series}
                {post.seriesOrder ? ` #${post.seriesOrder}` : ""}
              </button>
            )}
            {sortTags(post.tags).slice(0, 5).map((t) => (
              <button
                key={t}
                className="indexrow__tag"
                aria-pressed={filters.tags.includes(t)}
                onClick={() =>
                  onFilters({
                    ...filters,
                    tags: filters.tags.includes(t)
                      ? filters.tags.filter((x) => x !== t)
                      : [...filters.tags, t],
                  })
                }
              >
                {t}
              </button>
            ))}
            {post.tags.length > 5 && (
              <span className="indexrow__tagmore">+{post.tags.length - 5}</span>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

// ── 系列 ─────────────────────────────────────────────────────────

function SeriesRail({
  posts, onFilters,
}: {
  posts: Post[];
  onFilters: (f: Filters) => void;
}) {
  const groups = new Map<string, Post[]>();
  for (const p of posts) {
    if (!p.series) continue;
    if (!groups.has(p.series)) groups.set(p.series, []);
    groups.get(p.series)!.push(p);
  }
  const big = [...groups.entries()].filter(([, list]) => list.length >= 3);
  if (!big.length) return null;

  return (
    <section className="serieszone">
      {big.map(([id, list]) => {
        const meta = seriesMeta(id);
        // 入口篇固定第一，其餘照發表順序。
        // 不用 seriesOrder 排——那是作者論文裡的篇號，24 篇只有 10 篇標了，
        // 拿來排會把先發表的 14 篇全擠到後面（詳見 src/lib/related.ts）。
        const sorted = [...list].sort((a, b) => {
          if (meta?.entry) {
            if (a.id === meta.entry) return -1;
            if (b.id === meta.entry) return 1;
          }
          return a.date.localeCompare(b.date);
        });
        return (
          <div key={id} className="seriesblock">
            <div className="seriesblock__head">
              <h2 className="seriesblock__title">{meta?.label ?? id}</h2>
              <span className="seriesblock__n">{list.length} 篇</span>
            </div>
            {meta?.blurb && <p className="seriesblock__blurb">{meta.blurb}</p>}
            <div className="seriesblock__actions">
              {meta?.entry && (
                <a
                  className="pill pill--solid"
                  href={sorted.find((p) => p.id === meta.entry)?.href}
                >
                  從系列入口讀起 →
                </a>
              )}
              <button
                className="pill"
                onClick={() => onFilters({ ...EMPTY, series: id })}
              >
                只看這個系列
              </button>
            </div>
            <ol className="seriesblock__list">
              {sorted.map((p) => (
                <li key={p.id}>
                  <a href={p.href}>
                    <span className="seriesblock__idx" title={p.seriesOrder ? `作者篇號 #${p.seriesOrder}` : undefined}>
                      {p.id === meta?.entry ? "0′" : p.seriesOrder ? `#${p.seriesOrder}` : "·"}
                    </span>
                    <span className="seriesblock__t">{p.title}</span>
                    <span className="seriesblock__m">{p.readMinutes} 分鐘</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        );
      })}
    </section>
  );
}

// ── 卡片（原本的散落牆，保留為次要檢視）─────────────────────────

function pilePositions(
  cards: Post[], pileCenterY: number, stageWidth: number, seedStr: string,
): Position[] {
  const CARD_W = 260, CARD_H = 364;
  const isMobile = stageWidth <= 768;
  const r = mulberry(hashSeed(seedStr));
  const left = 50, right = 50;
  const usable = stageWidth - left - right - CARD_W;
  const results: Position[] = [];

  cards.forEach((_c, idx) => {
    if (isMobile) {
      const centerX = stageWidth / 2 - CARD_W / 2;
      const offsetX = (r() - 0.5) * 60;
      const finalX = Math.max(20, Math.min(centerX + offsetX, stageWidth - CARD_W - 20));
      results.push({ x: finalX, y: pileCenterY + idx * 12, rot: (r() - 0.5) * 6, z: 1000 + idx });
    } else {
      const progress = cards.length > 1 ? idx / (cards.length - 1) : 0.5;
      const baseX = left + progress * usable;
      const offsetX = (r() - 0.5) * 70;
      const isEven = idx % 2 === 0;
      const offsetY = (isEven ? -90 : 90) + (r() - 0.5) * 50;
      const finalX = Math.max(left, Math.min(baseX + offsetX, stageWidth - CARD_W - right));
      const finalY = Math.max(40, pileCenterY - CARD_H / 2 + offsetY);
      results.push({
        x: finalX, y: finalY, rot: (r() - 0.5) * 10,
        z: 1000 + idx * 3 + (isEven ? 0 : 5),
      });
    }
  });
  return results;
}

function PostCard({
  post, theme, position, flipped, onFlip, onNavigate, draggable = true,
}: {
  post: Post;
  theme: Theme;
  position: Position;
  flipped: boolean;
  onFlip: (id: string) => void;
  onNavigate: (post: Post, theme: Theme, el: HTMLElement) => void;
  draggable?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [localPos, setLocalPos] = useState<Position | null>(null);
  const dragging = useRef<{ x: number; y: number; baseX: number; baseY: number; moved: boolean } | null>(null);
  const suppressNextClick = useRef(false);

  useEffect(() => { setLocalPos(null); }, [position.x, position.y]);
  const pos = localPos ?? position;

  const handleClick = useCallback((e: MouseEvent | React.MouseEvent) => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) { onNavigate(post, theme, ref.current!); return; }
    if (!flipped) { onFlip(post.id); return; }
    if (e.metaKey || e.ctrlKey) { window.open(post.href, "_blank"); return; }
    onNavigate(post, theme, ref.current!);
  }, [flipped, onFlip, onNavigate, post, theme]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!draggable || e.button !== 0) return;
    if (flipped) return;
    const start = { x: e.clientX, y: e.clientY, baseX: pos.x, baseY: pos.y, moved: false };
    dragging.current = start;
    const onMove = (ev: MouseEvent) => {
      const dx = ev.clientX - start.x, dy = ev.clientY - start.y;
      if (!start.moved && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
        start.moved = true;
        ref.current?.setAttribute("data-state", "dragging");
      }
      if (start.moved) setLocalPos({ x: start.baseX + dx, y: start.baseY + dy, rot: pos.rot, z: 9999 });
    };
    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      const wasMoved = dragging.current?.moved ?? false;
      dragging.current = null;
      ref.current?.setAttribute("data-state", "");
      if (wasMoved) suppressNextClick.current = true;
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  const onClickReact = (e: React.MouseEvent) => {
    if (suppressNextClick.current) { suppressNextClick.current = false; return; }
    handleClick(e);
  };

  return (
    <div
      ref={ref}
      className="card"
      data-flipped={flipped}
      style={{
        left: pos.x + "px", top: pos.y + "px",
        transform: `rotate(${pos.rot}deg)`, zIndex: pos.z, color: theme.text,
      }}
      onMouseDown={onMouseDown}
      onClick={onClickReact}
    >
      <div className="card__inner">
        <div className="card__face card__face--front" style={{ background: theme.bg }}>
          <PatternArt id={post.id} theme={theme} />
          {/* 正面掛日期與主題，而不是生成模型名——找文章時那才是有用的線索 */}
          <div className="card__label">
            {post.date} · {topicLabel(post.topic)}
            <strong>{post.title}</strong>
          </div>
        </div>
        <div className="card__face card__face--back" style={{ background: theme.bg, color: theme.text }}>
          <div className="card__back-header">
            <div className="card__label" style={{ position: "relative", top: 0, left: 0 }}>
              {post.readMinutes} 分鐘 · {post.author}
              <strong>{post.title}</strong>
            </div>
          </div>
          <div className="card__quote-wrap">
            <div className="card__quote">“{post.quote}”</div>
          </div>
          <div className="card__cta">Read essay →</div>
        </div>
      </div>
    </div>
  );
}

function Piles({
  posts, themes, onFlip, onNavigate, flippedId, cardsPerPile,
}: {
  posts: Post[];
  themes: Record<string, Theme>;
  onFlip: (id: string) => void;
  onNavigate: (p: Post, t: Theme, el: HTMLElement) => void;
  flippedId: string | null;
  cardsPerPile: number;
}) {
  const stageWidth = useWindowWidth();
  const BLOCK_H = cardsPerPile === 1 ? 440 : 620;
  const GAP = cardsPerPile === 1 ? 0 : 40;
  const piles: Post[][] = [];
  for (let i = 0; i < posts.length; i += cardsPerPile) piles.push(posts.slice(i, i + cardsPerPile));

  const rows = piles.map((pile, p) => {
    const top = p * (BLOCK_H + GAP);
    const centerY = top + BLOCK_H / 2;
    return { top, pile, positions: pilePositions(pile, centerY, stageWidth, `pile-${p}-${stageWidth}-${cardsPerPile}`) };
  });

  return (
    <div className="stage" style={{ height: rows.length * (BLOCK_H + GAP) + "px" }}>
      {rows.map((row, i) => (
        <div key={i}>
          <div className="pile-rule" style={{ top: row.top + "px" }}></div>
          <div className="pile-rule" style={{ top: (row.top + BLOCK_H) + "px" }}></div>
          {GAP > 0 && <div className="pile-gap" style={{ top: (row.top + BLOCK_H) + "px", height: GAP + "px" }}></div>}
          {row.pile.map((post, j) => (
            <PostCard
              key={post.id}
              post={post}
              theme={themes[post.id]}
              position={row.positions[j]}
              flipped={flippedId === post.id}
              onFlip={onFlip}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function GridView({
  posts, themes, onFlip, onNavigate, flippedId,
}: {
  posts: Post[];
  themes: Record<string, Theme>;
  onFlip: (id: string) => void;
  onNavigate: (p: Post, t: Theme, el: HTMLElement) => void;
  flippedId: string | null;
}) {
  const stageWidth = useWindowWidth();
  const CARD_W = 260, CARD_H = 364, gap = 24;
  const cols = Math.max(1, Math.floor((stageWidth - 80) / (CARD_W + gap)));
  const gridW = cols * (CARD_W + gap) - gap;
  const startX = (stageWidth - gridW) / 2;
  const rows = Math.ceil(posts.length / cols);

  return (
    <div className="stage" style={{ height: (rows * (CARD_H + gap) + 40) + "px" }}>
      {posts.map((post, idx) => (
        <PostCard
          key={post.id}
          post={post}
          theme={themes[post.id]}
          position={{
            x: startX + (idx % cols) * (CARD_W + gap),
            y: 20 + Math.floor(idx / cols) * (CARD_H + gap),
            rot: 0,
            z: 1000 + idx,
          }}
          flipped={flippedId === post.id}
          onFlip={onFlip}
          onNavigate={onNavigate}
          draggable={false}
        />
      ))}
    </div>
  );
}

// ── 主體 ─────────────────────────────────────────────────────────

export default function HomeApp({
  posts,
  palette = "rainbow",
}: {
  posts: Post[];
  palette?: Palette;
}) {
  useIrisReset();

  const themes = useMemo(() => {
    const map: Record<string, Theme> = {};
    for (const p of posts) map[p.id] = palette === "mono" ? themeForMono(p.id) : themeFor(p.id);
    return map;
  }, [posts, palette]);

  const [filters, setFilters] = useState<Filters>(EMPTY);
  const [view, setView] = useState<View>("index");
  const [sort, setSort] = useState<Sort>("new");
  const [shuffleKey, setShuffleKey] = useState(0);
  const [flippedId, setFlippedId] = useState<string | null>(null);

  // 從網址帶入初始條件（client:only，所以只會跑在瀏覽器）
  useEffect(() => {
    const initial = readFilters();
    if (filtersActive(initial)) setFilters(initial);
  }, []);

  useEffect(() => { writeFilters(filters); }, [filters]);

  const stageW = useWindowWidth();
  const cardsPerPile = compute(stageW);

  const filtered = useMemo(() => applyFilters(posts, filters), [posts, filters]);
  const sorted = useMemo(() => {
    const arr = sortPosts(filtered, sort);
    if (view === "scatter" && shuffleKey > 0) {
      const r = mulberry(shuffleKey + 1);
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(r() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    return arr;
  }, [filtered, sort, view, shuffleKey]);

  const handleNavigate = (post: Post, theme: Theme, el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    irisNavigate(post.href, theme.bg, {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
  };

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!flippedId) return;
      if (!(e.target as HTMLElement | null)?.closest?.(".card")) setFlippedId(null);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [flippedId]);

  const showSeries = view === "index" && !filtersActive(filters);

  return (
    <>
      <div className="browse">
        <Controls
          filters={filters}
          onFilters={setFilters}
          view={view}
          onView={setView}
          sort={sort}
          onSort={setSort}
          shown={filtered.length}
          total={posts.length}
          onShuffle={() => { setFlippedId(null); setShuffleKey((k) => k + 1); }}
        />
        <TopicChips posts={posts} filters={filters} onFilters={setFilters} />
        <TagChips posts={posts} filters={filters} onFilters={setFilters} />
      </div>

      {showSeries && <SeriesRail posts={posts} onFilters={setFilters} />}

      {view === "index" ? (
        <IndexView posts={sorted} filters={filters} onFilters={setFilters} />
      ) : view === "cards" ? (
        <GridView
          posts={sorted}
          themes={themes}
          onFlip={(id) => setFlippedId((p) => (p === id ? null : id))}
          onNavigate={handleNavigate}
          flippedId={flippedId}
        />
      ) : (
        <Piles
          posts={sorted}
          themes={themes}
          onFlip={(id) => setFlippedId((p) => (p === id ? null : id))}
          onNavigate={handleNavigate}
          flippedId={flippedId}
          cardsPerPile={cardsPerPile}
        />
      )}
    </>
  );
}
