import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateContent, type AppMeta } from '../../src/lib/apps-core.ts';

const cadence: AppMeta = {
  slug: 'cadence',
  name: 'Cadence',
  tagline: { en: 'Bike care', fi: 'Pyörän huolto' },
  platforms: ['iPhone', 'iPad'],
  status: 'coming-soon',
  accent: '#ff6a3d',
  order: 1,
};

const allIds = ['en', 'fi'].flatMap((l) =>
  ['intro', 'support', 'privacy'].map((k) => `cadence/${l}/${k}`),
);
const dates = {
  'cadence/en/privacy': new Date('2026-11-10'),
  'cadence/fi/privacy': new Date('2026-11-10'),
};

test('missing page is reported', () => {
  const errors = validateContent([cadence], allIds.filter((id) => id !== 'cadence/fi/support'), dates);
  assert.ok(errors.some((e) => e.includes('cadence/fi/support')), errors.join('\n'));
});

test('released requires appStoreUrl', () => {
  const errors = validateContent([{ ...cadence, status: 'released' }], allIds, dates);
  assert.ok(errors.some((e) => e.includes('appStoreUrl')), errors.join('\n'));
});

test('privacy needs lastUpdated', () => {
  const errors = validateContent([cadence], allIds, { ...dates, 'cadence/en/privacy': undefined });
  assert.ok(errors.some((e) => e.includes('lastUpdated')), errors.join('\n'));
});

test('complete content has no errors', () => {
  assert.deepEqual(validateContent([cadence], allIds, dates), []);
});
