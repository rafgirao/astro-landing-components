import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: false,
  clean: true,
  external: ['astro'],
  outDir: 'dist',
  splitting: false,
  sourcemap: false,
  minify: false,
  target: 'es2022',
});
