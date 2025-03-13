import path from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup-tests.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/**',
        'src/**/*.stories.{js,jsx,ts,tsx}',
        'src/**/*.test.{js,jsx,ts,tsx}',
        'src/test/**',
        'storybook-static/**',
        'dist/**',
        'src/global.d.ts',
        'src/main.ts',
        '.storybook/**',
        'vite.config.ts',
        'vitest.config.ts',
        'src/vite-env.d.ts',
        'src/components/ui'
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
