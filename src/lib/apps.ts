import { getCollection, getEntry } from 'astro:content';
import { validateContent, type AppMeta, type PageKind } from './apps-core.ts';
import type { Locale } from './i18n.ts';

export * from './apps-core.ts';

let cached: Promise<AppMeta[]> | undefined;

/** All apps sorted by `order`; throws (failing the build) when content is incomplete. */
export function getApps(): Promise<AppMeta[]> {
  cached ??= (async () => {
    const apps = (await getCollection('apps')).map((e) => e.data as AppMeta).sort((a, b) => a.order - b.order);
    const pages = await getCollection('pages');
    const dates = Object.fromEntries(pages.map((p) => [p.id, p.data.lastUpdated]));
    const errors = validateContent(apps, pages.map((p) => p.id), dates);
    if (errors.length) throw new Error(errors.join('\n'));
    return apps;
  })();
  return cached;
}

export async function getAppPage(slug: string, locale: Locale, kind: PageKind) {
  const entry = await getEntry('pages', `${slug}/${locale}/${kind}`);
  if (!entry) throw new Error(`Missing page ${slug}/${locale}/${kind}`);
  return entry;
}
