import * as path from 'node:path';
import AutoLoad from '@fastify/autoload';
import fastify from 'fastify';
import { fileURLToPath } from 'node:url';
import { loggerConfig } from './utils';
import { EnvOptions } from './types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const env = (process.env.NODE_ENV as EnvOptions) ?? 'DEV';

const app = fastify({
  logger: loggerConfig[env] ?? true,
});

async function main() {
  await app.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    forceESM: true,
  });

  await app.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    forceESM: true,
  });

  app.listen({ port: app.config.PORT }, function (err, address) {
    if (err) {
      app.log.error('Error when starting server');
      process.exit(1);
    }

    app.log.info(`Pocket is up and running 🚀 on PORT: ${app.config.PORT}`);
  });
}

main();
