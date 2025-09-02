import fp from 'fastify-plugin';
import 'reflect-metadata';
import dbConn from 'typeorm-fastify-plugin';
import { DataSource } from 'typeorm';
import { User } from '../entity/user';
import { Pocket } from '../entity/pocket';
import { Contribution } from '../entity/contribution';

/*
 * This plugin connects fastify to a database
 */

export default fp(async (fastify) => {
  const connection = new DataSource({
    host: fastify.config.DB_HOST,
    port: fastify.config.DB_PORT,
    type: 'postgres',
    database: fastify.config.DB_NAME,
    username: fastify.config.DB_USER,
    password: fastify.config.DB_PASS,
    entities: [User, Pocket, Contribution],
    synchronize: fastify.config.ENV === 'dev',
    logging: fastify.config.ENV === 'dev',
  });

  try {
    await fastify.register(dbConn, { connection });
    fastify.log.info('Connection to DB successful 🚀');
  } catch (err) {
    fastify.log.error('Unable to connect to DB ⚠️');
    fastify.log.error(`Error: ${err}`);
  }
});
