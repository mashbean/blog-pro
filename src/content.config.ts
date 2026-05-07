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
// 結構化的論證地圖資料：core thesis + distinction + pillars + chain + borders + conditions + conclusion。
// 每個 argmap 的 slug 對應 reports collection 中的一篇文章。

const argmapSchema = z.object({
  slug: z.string(), // 對應 reports collection 的 id
  title: z.string(),
  subtitle: z.string().optional(),

  coreThesis: z.object({
    text: z.string(), // 主張全文
    summary: z.string().optional(), // 中文短摘
  }),

  distinction: z
    .object({
      rejected: z.object({
        label: z.string(),
        title: z.string(),
        body: z.string(),
      }),
      accepted: z.object({
        label: z.string(),
        title: z.string(),
        body: z.string(),
      }),
    })
    .optional(),

  pillars: z
    .array(
      z.object({
        section: z.string(), // 例：§2 — Political Philosophy
        title: z.string(),
        body: z.string(),
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
          tag: z.string(), // 例：T0, T1
          kind: z.enum(["deterministic", "probabilistic"]).default("deterministic"),
          text: z.string(),
        })
      ),
    })
    .optional(),

  borders: z
    .array(
      z.object({
        label: z.string(), // 例：Objection 1
        title: z.string(),
        flip: z.string(),
      })
    )
    .default([]),

  conditions: z
    .object({
      title: z.string().optional(),
      items: z.array(
        z.object({
          title: z.string(),
          body: z.string(),
        })
      ),
    })
    .optional(),

  conclusion: z
    .object({
      paragraphs: z.array(z.string()),
    })
    .optional(),
});

const argmaps = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/content/argmaps" }),
  schema: argmapSchema,
});

export const collections = { reports, argmaps };
