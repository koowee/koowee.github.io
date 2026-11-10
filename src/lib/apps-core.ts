// Pure helpers with no astro:* imports, so plain `node --test` can load them.

export const PLATFORMS = ['iPhone', 'iPad', 'Mac', 'Apple Watch', 'Apple TV', 'Vision Pro', 'Android', 'Web'] as const;
export type Platform = (typeof PLATFORMS)[number];
export const PAGE_KINDS = ['intro', 'support', 'privacy'] as const;
export type PageKind = (typeof PAGE_KINDS)[number];
export const LOCALES = ['en', 'fi'] as const;

export type AppMeta = {
  slug: string;
  name: string;
  tagline: { en: string; fi: string };
  platforms: Platform[];
  status: 'coming-soon' | 'released';
  appStoreUrl?: string;
  accent: string;
  icon?: unknown;
  order: number;
};

/** Returns human-readable problems; an empty list means the content is complete. */
export function validateContent(
  apps: AppMeta[],
  pageIds: string[],
  privacyDates: Record<string, Date | undefined>,
): string[] {
  const ids = new Set(pageIds);
  const errors: string[] = [];
  for (const app of apps) {
    for (const locale of LOCALES) {
      for (const kind of PAGE_KINDS) {
        const id = `${app.slug}/${locale}/${kind}`;
        if (!ids.has(id)) errors.push(`Missing page src/content/pages/${id}.md`);
        else if (kind === 'privacy' && !privacyDates[id]) errors.push(`${id}.md needs lastUpdated in its frontmatter`);
      }
    }
    if (app.status === 'released' && !app.appStoreUrl) {
      errors.push(`${app.slug}: status "released" needs an appStoreUrl`);
    }
  }
  return errors;
}
