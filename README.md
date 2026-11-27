# Valkama Apps website

This is the source of the Valkama Apps website, built with [Astro](https://astro.build) and published on GitHub Pages at <https://koowee.github.io>. English pages sit at the root of the site and Finnish pages under `/fi/`. Each app has an intro page, a support page and a privacy page. The site's support email is `valkama.app@gmail.com`.

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
| Levi 3D map (standalone page, Finnish only) | `public/levi/index.html`, data in `public/levi/data/` |

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

The app page then shows Apple's official "Download on the App Store" badge. The badges are Apple's official black artwork: `src/assets/badges/app-store-en.svg` and `app-store-fi.svg`. New versions come from [App Store Marketing Tools](https://toolbox.marketingtools.apple.com/app-store/); do not edit the files.

### Levi 3D map

`/levi/` is a standalone MapLibre page, not built by Astro. It shows three fell areas in 3D from open data: Levi with Kittilä centre (`#levi`), Ylläs with Äkäslompolo and Ylläsjärvi (`#yllas`) and Pallas (`#pallas`). The area buttons swap the data in place, and the address keeps the chosen area.

- Terrain and contour lines come straight from [Mapterhorn](https://mapterhorn.com) tiles (National Land Survey of Finland 2 m elevation model, CC BY 4.0). Contours are computed in the browser with maplibre-contour.
- Weather and snow come from Open-Meteo, the Kp forecast from NOAA SWPC and measured snow depth from the nearest Finnish Meteorological Institute station within 40 km (Kittilä airport for Levi, Pallasjärvi for Pallas; Ylläs has none, so it uses the Open-Meteo model). The browser fetches all of them when the page opens, so there is no server or scheduled job.
- Each area has its own folder `data/<area>/`. Its `layers.json` holds buildings, roads, paths, water and places from the Overture Maps release 2026-11-18 (OpenStreetMap, ODbL; places CDLA-Permissive-2.0). `landcover.png` is ESA WorldCover 2021. The bounding boxes are in the `AREAS` table in the page (Levi lon 24.60–25.02, lat 67.62–67.88; Ylläs 24.05–24.42, 67.49–67.66; Pallas 23.90–24.30, 67.97–68.13). The scripts that made them are kept with the project planning files, not in this repository.
- `winter.json` holds pistes, lifts, ski tracks, winter paths and snowmobile routes straight from OpenStreetMap (Overpass query of 2026-11-27, ODbL). Pistes and lifts keep their refs (`E.1`, `GE`), which match the names levi.fi uses.
- Piste and lift status (Levi only) comes from the API behind levi.fi. The API only answers requests from levi.fi itself, so on this site the page shows a short note and draws the pistes from OSM alone. If Levi allows this origin, open and closed pistes and lifts appear without code changes. Do not route the requests through a proxy to get around this.

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
