import fp from 'fastify-plugin';
import 'reflect-metadata';
import dbConn from 'typeorm-fastify-plugin';
import { DataSource } from 'typeorm';

export default fp(async (fastify) => {
  const connection = new DataSource({
    host: fastify.config.DB_HOST,
    port: fastify.config.DB_PORT,
    type: 'postgres',
    database: fastify.config.DB_NAME,
    username: fastify.config.DB_USER,
    password: fastify.config.DB_PASS,
  });

  await fastify.register(dbConn, { connection });
});
