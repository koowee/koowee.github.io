// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://koowee.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Repovahti was first published as Revontulet (koowee/Apps#363): keep the old addresses working.
  redirects: Object.fromEntries(
    ['', 'fi/'].flatMap((lang) =>
      ['', 'guide/', 'support/', 'privacy/'].map((page) => [`/${lang}revontulet/${page}`, `/${lang}repovahti/${page}`]),
    ),
  ),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fi'],
    routing: { prefixDefaultLocale: false },
  },
});
