import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import path from "path";
import vike from "vike/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), vike({ prerender: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
