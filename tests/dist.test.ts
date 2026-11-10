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
      assert.ok(readPage(`${base}/support`).includes('mailto:valkama.app@gmail.com?subject='), `${base} support mailto`);
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

import { readdirSync, existsSync, statSync } from 'node:fs';
import { counterpartPath, stripLocale } from '../src/lib/i18n.ts';

function listHtml(dir: string, base = ''): string[] {
  return readdirSync(join(dir, base)).flatMap((name) => {
    const rel = base ? `${base}/${name}` : name;
    if (statSync(join(dir, rel)).isDirectory()) return listHtml(dir, rel);
    return rel.endsWith('.html') ? [rel] : [];
  });
}

const GUIDES = ['cadence', 'revontulet'];

const EXPECTED_PATHS = [
  '/', '/privacy/',
  ...ORDER.flatMap((s) => [`/${s}/`, `/${s}/support/`, `/${s}/privacy/`]),
  ...GUIDES.map((s) => `/${s}/guide/`),
].flatMap((p) => [p, p === '/' ? '/fi/' : `/fi${p}`]);

const toFile = (p: string) => `${p.slice(1)}index.html`;

test('exactly the expected pages', () => {
  const files = listHtml(DIST).sort();
  const expected = [...EXPECTED_PATHS.map(toFile), '404.html'].sort();
  assert.equal(expected.length, 33);
  assert.deepEqual(files, expected);
});

test('head is correct', () => {
  for (const p of EXPECTED_PATHS) {
    const html = readFileSync(join(DIST, toFile(p)), 'utf8');
    const lang = p.startsWith('/fi/') ? 'fi' : 'en';
    assert.match(html, new RegExp(`<html lang="${lang}"`), p);
    const canon = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map((m) => m[1]);
    assert.deepEqual(canon, [`https://koowee.github.io${p}`], p);
    const base = stripLocale(p);
    for (const [hl, href] of [['en', base], ['fi', base === '/' ? '/fi/' : `/fi${base}`], ['x-default', base]]) {
      assert.ok(html.includes(`<link rel="alternate" hreflang="${hl}" href="https://koowee.github.io${href}"`), `${p} ${hl}`);
    }
  }
});

test('switch points to counterpart', () => {
  for (const p of [...EXPECTED_PATHS, '/404.html']) {
    const html = readFileSync(join(DIST, p === '/404.html' ? '404.html' : toFile(p)), 'utf8');
    for (const l of ['en', 'fi'] as const) {
      const m = html.match(new RegExp(`<a href="([^"]+)" hreflang="${l}"[^>]*data-lang="${l}"`));
      assert.ok(m, `${p} has ${l} switch`);
      assert.equal(m![1], counterpartPath(p, l), `${p} → ${l}`);
    }
  }
});

test('internal links resolve and end with /', () => {
  for (const file of listHtml(DIST)) {
    const html = readFileSync(join(DIST, file), 'utf8');
    for (const [, href] of html.matchAll(/href="(\/[^"]*)"/g)) {
      if (href === '/favicon.svg' || href.startsWith('/_astro/')) continue;
      const [path, anchor] = href.split('#');
      assert.ok(path.endsWith('/'), `${file}: ${href} ends with /`);
      assert.ok(existsSync(join(DIST, toFile(path))), `${file}: ${href} resolves`);
      if (anchor) assert.ok(readFileSync(join(DIST, toFile(path)), 'utf8').includes(`id="${anchor}"`), `${file}: #${anchor} exists`);
    }
  }
});

// Final review: privacy and intro texts must match what the apps actually do.
const text = (rel: string) => readPage(rel).replace(/<[^>]+>/g, ' ').replace(/&#39;|&#x27;|&rsquo;|’/g, "'").replace(/\s+/g, ' ');

test('no internal notes in published HTML', () => {
  for (const file of listHtml(DIST)) {
    assert.doesNotMatch(readFileSync(join(DIST, file), 'utf8'), /DRAFT|Kalle/, file);
  }
});

test('Cadence privacy covers ride start locations and Apple geocoding', () => {
  assert.match(text('cadence/privacy'), /start location/);
  assert.match(text('cadence/privacy'), /Apple['’]s geocoding/);
  assert.match(text('fi/cadence/privacy'), /lähtöpaik/);
});

test('Hilpertti languages are Finnish, English and Swedish', () => {
  assert.match(text('hilpertti'), /Finnish, English and Swedish/);
  assert.match(text('fi/hilpertti'), /suomeksi, englanniksi ja ruotsiksi/);
  assert.doesNotMatch(text(''), /Finnish learning games/);
});

test('Hilpertti privacy mentions parent-started sharing', () => {
  assert.match(text('hilpertti/privacy'), /share/i);
  assert.match(text('fi/hilpertti/privacy'), /jaa/i);
});

test('Revontulet privacy covers reverse geocoding of current location', () => {
  assert.match(text('revontulet/privacy'), /Apple Maps.{0,80}current location/);
});

test('files in the user\'s own folder are said to stay after deleting the app', () => {
  for (const p of ['cadence/privacy', 'kirjanpainaja/privacy']) assert.match(text(p), /stay there until you delete them/, p);
  for (const p of ['fi/cadence/privacy', 'fi/kirjanpainaja/privacy']) assert.match(text(p), /säilyvät siellä, kunnes poistat ne/, p);
});

// #362: Cadence user guide and Q&A.
const GUIDE_TOPICS = {
  en: ['Getting started', 'Bikes and parts', 'Wear and service intervals', 'Services, receipts and warranties', 'Rides',
    'Shopping list', 'Reminders, widget and background refresh', 'Backup and spreadsheet export', "If something doesn't work"],
  fi: ['Aloitus', 'Pyörät ja osat', 'Kuluminen ja huoltovälit', 'Huollot, kuitit ja takuut', 'Ajot',
    'Ostoslista', 'Muistutukset, widget ja taustapäivitys', 'Varmuuskopio ja taulukkovienti', 'Jos jokin ei toimi'],
};

test('Cadence guide has the nine in-app topics with a table of contents', () => {
  for (const [lang, topics] of Object.entries(GUIDE_TOPICS)) {
    const rel = lang === 'en' ? 'cadence/guide' : 'fi/cadence/guide';
    const html = readPage(rel);
    const toc = html.match(/<nav class="toc"[\s\S]*?<\/nav>/);
    assert.ok(toc, `${rel} has a toc`);
    const ids = [...toc![0].matchAll(/href="#([^"]+)"/g)].map((m) => m[1]);
    assert.equal(ids.length, 9, `${rel} toc entries`);
    for (const id of ids) assert.ok(html.includes(`<h2 id="${id}"`), `${rel} heading #${id}`);
    const plain = text(rel);
    for (const topic of topics) assert.ok(plain.includes(topic), `${rel}: ${topic}`);
    assert.ok(plain.includes('localhost'), `${rel} has the Strava steps`);
  }
});

// Revontulet guide: the same nine topics as Settings → Ohje in the app.
const REVONTULET_TOPICS = {
  en: ['Getting started', 'Reading the estimate', 'How the estimate is computed', 'Juuri nyt', 'Notifications',
    'Widgets', 'Sighting log', 'Data sources', "If something doesn't work"],
  fi: ['Aloitus', 'Arvion lukeminen', 'Miten arvio lasketaan', 'Juuri nyt', 'Ilmoitukset',
    'Widgetit', 'Havaintoloki', 'Tietolähteet', 'Jos jokin ei toimi'],
};

test('Revontulet guide has the nine in-app topics and its support page links to it', () => {
  for (const [lang, topics] of Object.entries(REVONTULET_TOPICS)) {
    const prefix = lang === 'en' ? '/' : '/fi/';
    const rel = `${prefix.slice(1)}revontulet/guide`;
    const html = readPage(rel);
    const toc = html.match(/<nav class="toc"[\s\S]*?<\/nav>/);
    assert.ok(toc, `${rel} has a toc`);
    assert.equal([...toc![0].matchAll(/href="#([^"]+)"/g)].length, 9, `${rel} toc entries`);
    const plain = text(rel);
    for (const topic of topics) assert.ok(plain.includes(topic), `${rel}: ${topic}`);
    assert.ok(readPage(`${prefix.slice(1)}revontulet/support`).includes(`href="${prefix}revontulet/guide/`), `${rel} support → guide`);
  }
});

test('only apps with a guide link to one', () => {
  for (const h of Object.values(HOME)) {
    for (const slug of ORDER) {
      const base = `${h.dir ? h.dir + '/' : ''}${slug}`;
      const has = readPage(base).includes(`href="${h.prefix}${slug}/guide/"`);
      assert.equal(has, GUIDES.includes(slug), `${base} guide link`);
    }
  }
});

test('Cadence support has a Q&A that links to the guide', () => {
  for (const [rel, prefix] of [['cadence/support', '/'], ['fi/cadence/support', '/fi/']]) {
    const html = readPage(rel);
    assert.ok(html.includes(`href="${prefix}cadence/guide/"`), `${rel} → guide`);
    assert.ok((html.match(/<details>/g) ?? []).length >= 10, `${rel} has at least 10 questions`);
  }
  assert.doesNotMatch(text('cadence/support'), /Merkitse huolletuksi|Vaihda uuteen|Asetukset/, 'English labels in English');
  assert.doesNotMatch(text('cadence/support') + text('cadence'), /in Finnish for now|The app is in Finnish/);
  assert.match(text('cadence/support'), /English/);
});

test('the old contact address is gone everywhere', () => {
  for (const file of listHtml(DIST)) {
    assert.ok(!readFileSync(join(DIST, file), 'utf8').includes('valkama.apps@'), file);
  }
});
