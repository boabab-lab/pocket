import fp from 'fastify-plugin';
import fastifyEnv, { FastifyEnvOptions } from '@fastify/env';
import envSchema from '../schemas/config.ts';

export default fp<FastifyEnvOptions>(async (fastify) => {
  await fastify.register(fastifyEnv, {
    confKey: 'config',
    schema: envSchema,
    dotenv: {
      path: `.env.${process.env.NODE_ENV}`,
    },
  });
});
