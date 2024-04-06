import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['setup-test.js'],
    testMatch: ['./**/*.test.jsx'],
  },
});