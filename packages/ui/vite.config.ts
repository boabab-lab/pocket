import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
const pathToGlobalCssFile = normalizePath(resolve(__dirname, 'lib/global.css'));

export default defineConfig({
  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'pocket-ui',
      formats: ['es', 'umd'],
    },
  },
  resolve: { alias: { src: resolve('lib/') } },
  plugins: [
    react(),
    dts({ include: 'lib', insertTypesEntry: true }),
    viteStaticCopy({
      targets: [{ src: pathToGlobalCssFile, dest: './' }],
    }),
  ],
});
