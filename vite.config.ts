import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { htmlPrerender } from "vite-plugin-html-prerender";
import path from "path";
import vitePrerender from "vite-plugin-prerender";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      svgr(),
      htmlPrerender({
          /**
           * Required: Output directory of `vite build`.
           */
          staticDir: path.join(__dirname, "dist"),

          /**
           * Required: List of routes to pre-render.
           */
          routes: ["/", "/share"],

          /**
           * Optional: Query selector to wait for. Defaults to `#root`.
           */
          selector: "main",

          /**
           * Optional: To minify html. Uses https://github.com/kangax/html-minifier.
           */
          minify: {
              collapseBooleanAttributes: true,
              collapseWhitespace: true,
              decodeEntities: true,
              keepClosingSlash: true,
              sortAttributes: true
          }
      })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
