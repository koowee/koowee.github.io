// Starts `astro preview`, runs the smoke test, stops the server.
import { spawn } from 'node:child_process';
const server = spawn('npx', ['astro', 'preview', '--port', '4321'], { stdio: ['ignore', 'pipe', 'inherit'] });
await new Promise((resolve) => server.stdout.on('data', (d) => String(d).includes('localhost') && resolve()));
const test = spawn('node', [new URL('./smoke.mjs', import.meta.url).pathname], { stdio: 'inherit' });
const code = await new Promise((r) => test.on('exit', r));
server.kill();
process.exit(code ?? 1);
