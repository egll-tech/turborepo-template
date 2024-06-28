import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/index.ts"],
  format: ["cjs", "esm"],
  clean: true,
  dts: true,
  minify: !options.watch,
  sourcemap: true,
  ...options,
}));
