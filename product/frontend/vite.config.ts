import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "product",
      filename: "product.js",
      exposes: {
        "./Product": "./src/components/Product/index.ts",
        "./utils": "./src/utils.ts"
      },
      shared: ["react"],
    }),
  ],
  base: "http://localhost:5001/",
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
