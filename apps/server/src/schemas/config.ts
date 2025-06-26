import { Type, Static } from '@sinclair/typebox';

const envSchema = Type.Object({
  PORT: Type.Required(Type.Number({ readOnly: true, default: 8080 })),
  ENV: Type.Required(Type.String({ readOnly: true, default: 'dev' })),
  DB_HOST: Type.Required(Type.String({ readOnly: true, default: 'localhost' })),
  DB_PORT: Type.Required(Type.Number({ readOnly: true, default: 5432 })),
  DB_USER: Type.Required(Type.String({ readOnly: true, default: 'postgres' })),
  DB_PASS: Type.Required(
    Type.String({ readOnly: true, default: 'yourpassword' }),
  ),
  DB_NAME: Type.Required(
    Type.String({ readOnly: true, default: 'pockets_db' }),
  ),
});

export type Config = Static<typeof envSchema>;
export default envSchema;
