import { FastifyPluginAsync, FastifyRequest } from 'fastify';

interface RegisterRequestBody {
  firstName: string;
  email: string;
}

const register: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/register', async function (request, reply) {
    return `Register system is up and roaring 🦁\n`;
  });

  fastify.post(
    '/register',
    async function (
      request: FastifyRequest<{ Body: RegisterRequestBody }>,
      reply,
    ) {
      const { firstName, email } = request.body;
      fastify.log.warn({ firstName, email }, 'Registering:');
      return 200;
    },
  );
};

export default register;
