import fp from 'fastify-plugin';
import fastifyEnv, { FastifyEnvOptions } from '@fastify/env';

const schema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: {
      type: 'string',
      default: 'default',
    },
  },
};

export default fp<FastifyEnvOptions>(async (fastify) => {
  await fastify.register(fastifyEnv, {
    confKey: 'config',
    schema,
    dotenv: true,
  });
});
