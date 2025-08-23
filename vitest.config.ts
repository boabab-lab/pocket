import { defineConfig } from 'vitest/config';
export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['server/test/**/*.test.ts', 'client/**/*.test.{ts,tsx}'],
    environmentMatchGlobs: [['client/**/*.test.{ts,tsx}', 'jsdom']],
  },
});
