# Valkama Apps website

This is the source of the Valkama Apps website, built with [Astro](https://astro.build) and published on GitHub Pages at <https://koowee.github.io>. English pages sit at the root of the site and Finnish pages under `/fi/`. Each app has an intro page, a support page and a privacy page. The site's support email is `valkama.apps@gmail.com`.

This repository is public. Planning documents live in the private `koowee/apps` repository, under `Website/`.

## Local development

You need Node 22.23.4 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
npm test           # type check, build, unit tests and checks on the built site
npm run test:e2e   # Playwright smoke run against the built site (run npm test first)
```

Every push to `main` builds the site, runs the tests and deploys it. A pull request runs the same tests without deploying.

## Content

| What | Where |
|---|---|
| App details (name, tagline, platforms, status, colour, icon) | `src/content/apps/<slug>.json` |
| App texts | `src/content/pages/<slug>/<en\|fi>/<intro\|support\|privacy>.md` |
| App icons | `src/assets/icons/<slug>.png` (1024 px) |
| About text and website privacy | `src/content/site/<en\|fi>/<about\|privacy>.md` |
| Shared interface text (buttons, labels) | `src/lib/i18n.ts` |

Write the support FAQ as `<details><summary>Question</summary>…answer…</details>` blocks. Every privacy page needs `lastUpdated: YYYY-MM-DD` in its frontmatter. Change the date whenever the policy changes.

The build fails if an app is missing any of its six text files, if a privacy page has no `lastUpdated`, or if an app is marked released without an `appStoreUrl`.

### Add an app

1. Add `src/content/apps/<slug>.json`. Copy an existing file and change the values:
   - `order` sets the app's place on the home page.
   - `iconStyle` is `"mac"` for a macOS icon that already has its own shape, and `"ios"` otherwise.
2. Add the icon as `src/assets/icons/<slug>.png`.
3. Add the six Markdown files under `src/content/pages/<slug>/`.
4. Run `npm test`.

### Mark an app released

In the app's JSON, set `"status": "released"` and `"appStoreUrl": "https://apps.apple.com/…"`.

The app page then shows a "Download on the App Store" button. To use Apple's official badge on that button:

1. Download the black badge in English and Finnish from [Apple's marketing tools](https://tools.applemarketingtools.com/).
2. Save the two files as `src/assets/badges/app-store-en.svg` and `src/assets/badges/app-store-fi.svg`.

Until those files are there, the button shows plain text.

### Screenshots

Put images in `src/assets/screenshots/<slug>/`, for example `01.png` and `02.png`. They appear on the app's intro page in file name order.

## GitHub Pages settings

In the repository settings, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.

## Custom domain (valkama.app)

1. Register `valkama.app` at Cloudflare.
2. In Cloudflare DNS, add these records. Set every record to **DNS only** (grey cloud), not Proxied:
   - `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`
   - a `CNAME` record for `www` pointing to `koowee.github.io`
3. In this repository, make two changes:
   - Add the file `public/CNAME` containing the single line `valkama.app`.
   - In `astro.config.mjs`, set `site: 'https://valkama.app'`.
   - Update the expected domain in `tests/dist.test.ts`, then run `npm test` and push.
4. In **Settings → Pages**, enter `valkama.app` as the custom domain. When the DNS check passes, tick **Enforce HTTPS**.
5. Update the support and privacy URLs in App Store Connect to use `https://valkama.app/…`.
