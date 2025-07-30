import test from 'node:test';
import { build } from 'helper';
import * as assert from 'node:assert';

test('ping route', async (t) => {
  const app = await build(t);

  const res = await app.inject({
    method: 'GET',
    url: '/ping',
  });

  assert.equal(res.statusCode, 200);
  assert.deepStrictEqual(res.json(), { status: 'ok' });
});
