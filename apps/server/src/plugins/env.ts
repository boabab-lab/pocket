import fp from 'fastify-plugin';
import fastifyEnv, { FastifyEnvOptions } from '@fastify/env';
import { FromSchema } from 'json-schema-to-ts';

const schema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: {
      type: 'number',
      default: 8080,
    },
  },
} as const;

export type Config = FromSchema<typeof schema>;

export default fp<FastifyEnvOptions>(async (fastify) => {
  await fastify.register(fastifyEnv, {
    confKey: 'config',
    schema,
    dotenv: true,
  });
});
