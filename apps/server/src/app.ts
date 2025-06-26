import * as path from 'node:path';
import AutoLoad from '@fastify/autoload';
import fastify from 'fastify';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = fastify({ logger: true });

app.register(AutoLoad, {
  dir: path.join(__dirname, 'plugins'),
  forceESM: true,
});

app.register(AutoLoad, {
  dir: path.join(__dirname, 'routes'),
  forceESM: true,
});

app.listen({ port: 8080 }, function (err, address) {
  if (err) {
    app.log.error('Error when starting server');
    process.exit(1);
  }

  app.log.info(`Server is up and running 🏃‍♂️ on PORT: ${address}`);
});
