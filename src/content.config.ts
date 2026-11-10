import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { PLATFORMS } from './lib/apps-core.ts';

const apps = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/apps' }),
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      name: z.string(),
      tagline: z.object({ en: z.string(), fi: z.string() }),
      platforms: z.array(z.enum(PLATFORMS)).min(1),
      status: z.enum(['coming-soon', 'released']),
      appStoreUrl: z.url().optional(),
      accent: z.string().regex(/^#[0-9a-fA-F]{6}$/),
      icon: image(),
      order: z.number().int(),
      iconStyle: z.enum(['ios', 'mac']).default('ios'),
    }),
});

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  lastUpdated: z.coerce.date().optional(),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: pageSchema,
});

const site = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/site' }),
  schema: pageSchema,
});

export const collections = { apps, pages, site };
