declare module 'fastify' {
  interface FastifyInstance {
    config: {
      PORT: string;
    };
    someSupport(): string;
  }
}
