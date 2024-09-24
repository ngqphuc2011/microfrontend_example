import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 4000,
  },
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        product: "http://localhost:5001/assets/product.js",
        checkout: "http://localhost:5002/assets/checkout.js",
      },
      shared: ["react"],
    }),
  ],
});
