import path from "node:path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { InlineConfig } from "vitest/node"
import type { UserConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom'
  }
} as UserConfig & {
  test: InlineConfig
})
