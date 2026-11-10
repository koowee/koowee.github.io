import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(import.meta.dirname, '..', 'dist');

export function readPage(relPath: string): string {
  return readFileSync(join(DIST, relPath, 'index.html'), 'utf8');
}

test('home pages carry their language', () => {
  assert.match(readPage(''), /<html lang="en"/);
  assert.match(readPage('fi'), /<html lang="fi"/);
});

const ORDER = ['cadence', 'kirjanpainaja', 'revontulet', 'hilpertti'];
const HOME = {
  en: { dir: '', prefix: '/', hero: 'Apps for iPhone, iPad and Mac', status: 'Coming soon' },
  fi: { dir: 'fi', prefix: '/fi/', hero: 'Sovelluksia iPhonelle, iPadille ja Macille', status: 'Tulossa' },
};
const PLATFORM_TAGS: Record<string, string> = {
  cadence: 'iPhone · iPad',
  kirjanpainaja: 'Mac · iPhone',
  revontulet: 'iPhone',
  hilpertti: 'iPad · iPhone',
};

test('home lists all apps in order', () => {
  for (const h of Object.values(HOME)) {
    const html = readPage(h.dir);
    assert.ok(html.includes(h.hero), `hero in ${h.dir || 'en'}`);
    const positions = ORDER.map((slug) => html.indexOf(`href="${h.prefix}${slug}/"`));
    assert.ok(positions.every((p) => p >= 0), `all app links in ${h.dir || 'en'}: ${positions}`);
    assert.deepEqual([...positions].sort((a, b) => a - b), positions, 'cards in order');
    for (const slug of ORDER) {
      const card = html.slice(html.indexOf(`href="${h.prefix}${slug}/"`), html.indexOf('</a>', html.indexOf(`href="${h.prefix}${slug}/"`)));
      assert.ok(card.includes(PLATFORM_TAGS[slug]), `${slug} platforms`);
      assert.ok(card.includes(h.status), `${slug} status`);
    }
  }
});

test('app pages exist and link support and privacy', () => {
  for (const h of Object.values(HOME)) {
    for (const slug of ORDER) {
      const base = `${h.dir ? h.dir + '/' : ''}${slug}`;
      const intro = readPage(base);
      assert.ok(intro.includes(`href="${h.prefix}${slug}/support/"`), `${base} → support`);
      assert.ok(intro.includes(`href="${h.prefix}${slug}/privacy/"`), `${base} → privacy`);
      assert.ok(readPage(`${base}/support`).includes('mailto:valkama.apps@gmail.com?subject='), `${base} support mailto`);
      const privacy = readPage(`${base}/privacy`);
      assert.match(privacy, /<time datetime="\d{4}-\d{2}-\d{2}"/, `${base} privacy lastUpdated`);
    }
  }
});

test('404 links to both home pages', () => {
  const html = readFileSync(join(DIST, '404.html'), 'utf8');
  assert.ok(html.includes('href="/"'));
  assert.ok(html.includes('href="/fi/"'));
});

test('site privacy exists in both languages', () => {
  assert.match(readPage('privacy'), /<html lang="en"/);
  assert.match(readPage('fi/privacy'), /<html lang="fi"/);
});
