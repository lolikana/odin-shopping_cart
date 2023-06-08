/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
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
    alias: {
      '@': './src',
      '@components': './src/components'
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./__tests__/setup.ts']
  },
  server: {
    port: 3000
  }
});
