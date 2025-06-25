import fp from 'fastify-plugin';
import fastifyEnv, { FastifyEnvOptions } from '@fastify/env';
import { Type, Static } from '@sinclair/typebox';

const schema = Type.Object({
  PORT: Type.Required(Type.Number({ readOnly: true, default: 8080 })),
});

export type Config = Static<typeof schema>;

export default fp<FastifyEnvOptions>(async (fastify) => {
  await fastify.register(fastifyEnv, {
    confKey: 'config',
    schema,
    dotenv: true,
  });
});
