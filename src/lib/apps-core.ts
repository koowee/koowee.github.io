// Pure helpers with no astro:* imports, so plain `node --test` can load them.

export const PLATFORMS = ['iPhone', 'iPad', 'Mac', 'Apple Watch', 'Apple TV', 'Vision Pro', 'Android', 'Web'] as const;
export type Platform = (typeof PLATFORMS)[number];
export const PAGE_KINDS = ['intro', 'support', 'privacy'] as const;
/** Pages an app has only when its JSON says so (`guide: true`). */
export const OPTIONAL_PAGE_KINDS = ['guide'] as const;
export type PageKind = (typeof PAGE_KINDS)[number] | (typeof OPTIONAL_PAGE_KINDS)[number];
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
  iconStyle?: 'ios' | 'mac';
  /** The app has a user guide page (`/<slug>/guide/`). */
  guide?: boolean;
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
    for (const locale of LOCALES) {
      const id = `${app.slug}/${locale}/guide`;
      if (app.guide && !ids.has(id)) errors.push(`Missing page src/content/pages/${id}.md`);
      if (!app.guide && ids.has(id)) errors.push(`${id}.md exists, so ${app.slug}.json needs guide: true`);
    }
    if (app.status === 'released' && !app.appStoreUrl) {
      errors.push(`${app.slug}: status "released" needs an appStoreUrl`);
    }
  }
  return errors;
}

export const CONTACT_EMAIL = 'valkama.apps@gmail.com';

const SUPPORT_WORD = { en: 'support', fi: 'tuki' } as const;

/** mailto: link with a ready subject, e.g. "Kirjanpainaja tuki". */
export function supportMailto(appName: string, locale: 'en' | 'fi'): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${appName} ${SUPPORT_WORD[locale]}`)}`;
}
