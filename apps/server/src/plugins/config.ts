import fp from 'fastify-plugin';
import fastifyEnv, { FastifyEnvOptions } from '@fastify/env';
import envSchema from '../schemas/config.ts';

/*
 * This plugin connects the .env files for different environments
 * to the fastify applicaion
 * @see https://github.com/fastify/fastify-env
 */

export default fp<FastifyEnvOptions>(async (fastify) => {
  await fastify.register(fastifyEnv, {
    confKey: 'config',
    schema: envSchema,
    dotenv: {
      path: `.env.${process.env.NODE_ENV}`,
    },
  });
});
