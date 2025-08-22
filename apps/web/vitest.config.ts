import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  plugins: [svelte({ hot: false, compilerOptions: { runes: true } })],
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
    conditions: ["browser"],
  },
  test: {
    environment: "jsdom",
  },
});
