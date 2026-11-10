// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://koowee.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fi'],
    routing: { prefixDefaultLocale: false },
  },
});
