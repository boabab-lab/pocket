import { FastifyPluginAsync } from 'fastify';

const ping: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  let pingCount = 0;

  fastify.get('/ping', async function (request, reply) {
    pingCount++;
    return `pong 🏓\nThis is ping number ${pingCount} \n`;
  });
};

export default ping;
