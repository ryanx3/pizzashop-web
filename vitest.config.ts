/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ["./test/setup.ts"],
    environment: "happy-dom",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
