import { Type, Static } from '@sinclair/typebox';

const envSchema = Type.Object({
  PORT: Type.Required(Type.Number({ readOnly: true, default: 8080 })),
});

export type Config = Static<typeof envSchema>;
export default envSchema;
