// Playwright smoke run against `astro preview` (see npm run test:e2e).
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import assert from 'node:assert/strict';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const BASE = process.env.BASE_URL ?? 'http://localhost:4321';
const OUT = new URL('./out/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

const results = [];
async function check(name, fn) {
  try { await fn(); results.push(['ok', name]); }
  catch (e) { results.push(['not ok', name, e.message]); }
}

const browser = await chromium.launch();

async function noHorizontalScroll(page) {
  // body has overflow-x: hidden (for the aurora), so also look for any element that sticks out.
  const { sw, iw, wide } = await page.evaluate(() => {
    const iw = document.documentElement.clientWidth;
    const wide = [...document.querySelectorAll('main *, header *, footer *')]
      .filter((el) => el.getBoundingClientRect().right > iw + 0.5)
      .map((el) => `${el.tagName.toLowerCase()}.${el.className}: ${el.textContent.trim().slice(0, 30)}`);
    return { sw: document.documentElement.scrollWidth, iw, wide };
  });
  assert.ok(sw <= iw, `scrollWidth ${sw} > ${iw}`);
  assert.deepEqual(wide.slice(0, 3), [], 'elements wider than the viewport');
}

for (const path of ['/', '/fi/']) {
  for (const [w, h] of [[320, 640], [390, 844], [1440, 900]]) {
    await check(`no horizontal scroll ${path} @${w}`, async () => {
      const page = await browser.newPage({ viewport: { width: w, height: h } });
      await page.goto(BASE + path);
      await page.screenshot({ path: `${OUT}${path === '/' ? 'en' : 'fi'}-${w}.png`, fullPage: true });
      await noHorizontalScroll(page);
      await page.close();
    });
  }
}

await check('app cards are visible without scrolling', async () => {
  for (const [w, h] of [[1440, 900], [1280, 720], [390, 844]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto(BASE + '/');
    const top = await page.locator('.app-card').first().evaluate((el) => el.getBoundingClientRect().top);
    // The first row of cards must start in the upper half (55 %) of the first screen.
    assert.ok(top < h * 0.55, `first card at ${Math.round(top)} px on ${w}x${h}`);
    await page.close();
  }
});

await check('long Finnish words fit at 320 px', async () => {
  const page = await browser.newPage({ viewport: { width: 320, height: 640 } });
  for (const p of ['/fi/kirjanpainaja/privacy/', '/fi/kirjanpainaja/support/', '/fi/revontulet/privacy/']) {
    await page.goto(BASE + p);
    await noHorizontalScroll(page);
  }
  await page.close();
});

await check('keyboard reaches header links, then the four cards in order', async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE + '/');
  const seen = [];
  for (let i = 0; i < 7; i++) {
    await page.keyboard.press('Tab');
    seen.push(await page.evaluate(() => document.activeElement?.getAttribute('href')));
  }
  assert.deepEqual(seen, ['/', '/', '/fi/', '/cadence/', '/kirjanpainaja/', '/revontulet/', '/hilpertti/']);
  await page.close();
});

await check('reduced motion stops the aurora', async () => {
  const ctx = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.goto(BASE + '/');
  const name = await page.evaluate(() => getComputedStyle(document.body, '::before').animationName);
  assert.equal(name, 'none');
  await ctx.close();
  const page2 = await browser.newPage();
  await page2.goto(BASE + '/');
  assert.equal(await page2.evaluate(() => getComputedStyle(document.body, '::before').animationName), 'aurora');
  await page2.close();
});

await check('works without JavaScript', async () => {
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto(BASE + '/cadence/support/');
  await page.click('a[data-lang="fi"]');
  await page.waitForURL(BASE + '/fi/cadence/support/');
  const details = page.locator('details').first();
  assert.equal(await details.evaluate((d) => d.open), false);
  await details.locator('summary').click();
  assert.equal(await details.evaluate((d) => d.open), true);
  await ctx.close();
});

await browser.close();
for (const [s, n, m] of results) console.log(`${s} - ${n}${m ? `\n  ${m}` : ''}`);
const failed = results.filter((r) => r[0] !== 'ok').length;
console.log(`# pass ${results.length - failed}\n# fail ${failed}`);
process.exit(failed ? 1 : 0);
