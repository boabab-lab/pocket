import helper from 'fastify-cli/helper.js';
import * as test from 'node:test';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

export type TestContext = {
  after: typeof test.after;
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const AppPath = path.join(__dirname, '..', 'src', 'app.ts');

function config() {
  return {
    skipOverride: true, // Register our application with fastify-plugin
  };
}

async function build(t: TestContext) {
  const argv = [AppPath];

  const app = await helper.build(argv, config());

  t.after(() => void app.close());

  return app;
}

export { config, build };
