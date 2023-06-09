/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: 'inline',
    minify: 'esbuild',
    emptyOutDir: true,
    copyPublicDir: true
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './__tests__/setup.ts',
    exclude: ['node_modules', './__tests__/setup.ts']
  },
  server: {
    port: 3000
  }
});
