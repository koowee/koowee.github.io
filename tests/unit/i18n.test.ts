import { test } from 'node:test';
import assert from 'node:assert/strict';
import { counterpartPath, localizedPath, ui } from '../../src/lib/i18n.ts';

test('app pages switch to their counterpart', () => {
  assert.equal(counterpartPath('/cadence/privacy/', 'fi'), '/fi/cadence/privacy/');
  assert.equal(counterpartPath('/fi/cadence/privacy/', 'en'), '/cadence/privacy/');
});

test('home pages switch to each other', () => {
  assert.equal(counterpartPath('/', 'fi'), '/fi/');
  assert.equal(counterpartPath('/fi/', 'en'), '/');
});

test('site privacy switches', () => {
  assert.equal(counterpartPath('/privacy/', 'fi'), '/fi/privacy/');
});

test('404 switches to the other home page', () => {
  assert.equal(counterpartPath('/404.html', 'fi'), '/fi/');
  assert.equal(counterpartPath('/404.html', 'en'), '/');
});

test('fi prefix only counts as a whole segment', () => {
  assert.equal(counterpartPath('/finland-trip/', 'en'), '/finland-trip/');
});

test('same-locale switch keeps the path', () => {
  assert.equal(counterpartPath('/fi/cadence/', 'fi'), '/fi/cadence/');
});

test('localizedPath prefixes Finnish only', () => {
  assert.equal(localizedPath('fi', '/cadence/'), '/fi/cadence/');
  assert.equal(localizedPath('en', '/cadence/'), '/cadence/');
  assert.equal(localizedPath('fi', '/'), '/fi/');
});

test('every ui key has text in both locales', () => {
  for (const key of Object.keys(ui.en) as (keyof typeof ui.en)[]) {
    assert.ok(ui.en[key].length > 0, `en.${key}`);
    assert.ok(ui.fi[key]?.length > 0, `fi.${key}`);
  }
});
