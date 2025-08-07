import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setupTests.ts",
  },
  resolve: {
    alias: {
      "@atoms": path.resolve(__dirname, "./src/atoms"),
      "@molecules": path.resolve(__dirname, "./src/molecules"),
      "@organisms": path.resolve(__dirname, "./src/organisms"),
      "@apis": path.resolve(__dirname, "./src/apis"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
});
