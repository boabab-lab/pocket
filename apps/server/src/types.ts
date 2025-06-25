import { Config } from './plugins/env.js';

declare module 'fastify' {
  interface FastifyInstance {
    config: Config;
    someSupport(): string;
  }
}
