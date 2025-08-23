import { test, expect } from 'vitest';
import { build } from 'helper';

test('ping route', async () => {
  const app = await build();

  const res = await app.inject({
    method: 'GET',
    url: '/ping',
  });

  expect(res.statusCode).toBe(200);
  expect(res.json()).toEqual({ status: 'ok' });
});
