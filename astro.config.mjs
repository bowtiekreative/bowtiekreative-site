import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://bowtiekreative.com',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    format: 'file',
  },
  server: {
    port: 4321,
    host: true,
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});