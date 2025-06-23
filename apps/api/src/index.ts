import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log(`🚀 Server is listening at PORT:3000`);
    console.log(`Pocket is up and running 🏃‍♂️`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
