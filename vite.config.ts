/// <reference types="vitest" />
import { loadEnv, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { codecovVitePlugin } from "@codecov/vite-plugin";
import dotenv from "dotenv";
import path from "path"

dotenv.config();

const env = loadEnv("", process.cwd(), "VITE_");


export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    codecovVitePlugin({
      enableBundleAnalysis: env.VITE_CODECOV_TOKEN !== undefined,
      bundleName: "testing-with-react",
      uploadToken: env.VITE_CODECOV_TOKEN,
    }),
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