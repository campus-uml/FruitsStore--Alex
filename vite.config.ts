/// <reference types="vitest" />
import {  defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from "path"


export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
  
  ],

  test: {
    // @ts-expect-error - vite-test-runner types are not available
    global: true,
    environment: 'jsdom',
    setupFiles: ['./setupTest.ts'],
    coverage: {
      provider: 'v8'
    }
  },
})