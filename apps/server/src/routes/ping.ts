import { FastifyPluginAsync } from 'fastify';

const ping: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/ping', async function (request, reply) {
    return 'pong 🏓 \n';
  });
};

export default ping;
