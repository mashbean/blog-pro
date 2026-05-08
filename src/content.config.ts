import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const reportSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  lang: z.string().default("zh-TW"),

  // AI generation metadata
  aiModel: z.string().optional(),
  aiPrompt: z.string().optional(),
  aiPipelineStage: z.string().optional(),
  aiPipelineId: z.string().optional(),
  aiGeneratedDate: z.coerce.date().optional(),
  humanReviewed: z.boolean().default(false),

  // Reading experience
  category: z.string().optional(),
  series: z.string().optional(),
  seriesOrder: z.number().int().positive().optional(),
  slug: z.string().optional(),
});

const reports = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/reports" }),
  schema: reportSchema,
});

// ── Argument maps (one per report) ─────────────────────────────
// 結構化的論證地圖資料。每個 argmap 對應一篇文章（slug 對應）。
//
// v2 — 邏輯符號公式化的核心骨架：
//   - coreThesis.formal：主公式 + 變數 legend（用 Unicode 邏輯符號）
//   - transitions：區塊之間的接連描述（為何下一段）
//   - pillar.role / pillar.formal：每條 pillar 的「為什麼放進來」+ 對核心公式的貢獻
//   - border.pivot：反論為何 flips to support
//   - condition.formal：條件的邏輯謂詞
//   - conclusion.formalCoda：結尾的公式總結
//
// 公約（civic-proof 系列共用）：
//   ∧ ∨ ¬ ⇒ ⇔ ∀ ∃ ⊆ ∈
//   合取必要條件：T = T₁ ∧ T₂ ∧ T₃
//   合取最大化不可達：¬∃S [φ₁(S) ∧ φ₂(S) ∧ φ₃(S)]
//   條件機率：Pr(φ | c) ≥ θ

const formalLegendItem = z.object({
  symbol: z.string(),
  meaning: z.string(),
});

const formalBlockSchema = z.object({
  expression: z.string(),
  caption: z.string().optional(),
  legend: z.array(formalLegendItem).default([]),
});

const transitionSchema = z
  .object({
    beforeDistinction: z.string().optional(),
    beforePillars: z.string().optional(),
    beforeChain: z.string().optional(),
    beforeBorders: z.string().optional(),
    beforeConditions: z.string().optional(),
    beforeConclusion: z.string().optional(),
  })
  .default({});

const argmapSchema = z.object({
  slug: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),

  coreThesis: z.object({
    text: z.string(),
    summary: z.string().optional(),
    formal: formalBlockSchema.optional(),
  }),

  transitions: transitionSchema,

  distinction: z
    .object({
      rejected: z.object({
        label: z.string(),
        title: z.string(),
        body: z.string(),
        formal: z.string().optional(),
      }),
      accepted: z.object({
        label: z.string(),
        title: z.string(),
        body: z.string(),
        formal: z.string().optional(),
      }),
    })
    .optional(),

  pillars: z
    .array(
      z.object({
        section: z.string(),
        title: z.string(),
        body: z.string(),
        role: z.string().optional(),
        formal: z.string().optional(),
        finding: z.string().optional(),
      })
    )
    .default([]),

  chain: z
    .object({
      title: z.string(),
      legend: z
        .array(
          z.object({
            kind: z.enum(["deterministic", "probabilistic"]),
            label: z.string(),
          })
        )
        .default([]),
      steps: z.array(
        z.object({
          tag: z.string(),
          kind: z.enum(["deterministic", "probabilistic"]).default("deterministic"),
          text: z.string(),
        })
      ),
    })
    .optional(),

  borders: z
    .array(
      z.object({
        label: z.string(),
        title: z.string(),
        flip: z.string(),
        pivot: z.string().optional(),
      })
    )
    .default([]),

  conditions: z
    .object({
      title: z.string().optional(),
      formalPrelude: z.string().optional(),
      items: z.array(
        z.object({
          title: z.string(),
          body: z.string(),
          formal: z.string().optional(),
        })
      ),
    })
    .optional(),

  conclusion: z
    .object({
      paragraphs: z.array(z.string()),
      formalCoda: z.string().optional(),
    })
    .optional(),
});

const argmaps = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/content/argmaps" }),
  schema: argmapSchema,
});

export const collections = { reports, argmaps };
