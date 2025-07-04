import { Config } from './schemas/config.js';

declare module 'fastify' {
  interface FastifyInstance {
    config: Config;
    someSupport(): string;
  }
}

export type EnvOptions = 'prod' | 'dev' | 'test';
