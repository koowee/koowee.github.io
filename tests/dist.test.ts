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
