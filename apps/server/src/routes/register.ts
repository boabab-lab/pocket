import { FastifyPluginAsync, FastifyRequest } from 'fastify';
import { User } from '../entity/user';

interface RegisterRequestBody {
  firstName: string;
  email: string;
  lastName: string;
  passwordHash: string;
}

const register: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const userTable = fastify.orm.getRepository(User);

  fastify.get('/register', async function (request, reply) {
    return `Register system is up and roaring 🦁\n`;
  });

  fastify.post(
    '/register',
    {
      preValidation: (
        request: FastifyRequest<{ Body: RegisterRequestBody }>,
        reply,
        done,
      ) => {
        const { firstName, email, passwordHash, lastName } = request.body;
        fastify.log.error({ firstName, email }, 'Error with input entered:');
        done(
          firstName.length &&
            email.length &&
            passwordHash.length &&
            lastName.length
            ? undefined
            : reply
                .code(400)
                .send('Either your firstname or email or password is invalid.'),
        );
      },
    },
    async function (
      request: FastifyRequest<{ Body: RegisterRequestBody }>,
      reply,
    ) {
      const { firstName, email, passwordHash, lastName } = request.body;
      try {
        const user = new User();
        user.email = email;
        user.first_name = firstName;
        user.last_name = lastName;
        user.password_hash = passwordHash;
        const alreadyExists = await userTable.findOne({ where: { email } });

        if (alreadyExists) {
          reply
            .status(400)
            .send({ error: 'User with that email already exists' });
        }

        const newlyCreatedUser = await userTable.save(user);
        reply.code(200).send({
          message: 'User succesfully registered.',
          data: newlyCreatedUser,
        });
      } catch {
        reply.code(500).send({ message: 'Issue registering User' });
      }
    },
  );
};

export default register;
