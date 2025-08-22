import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  plugins: [
    svelte({ hot: false, compilerOptions: { runes: true, generate: "dom" } }),
  ],
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
  test: {
    environment: "jsdom",
  },
});
