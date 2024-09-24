import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'checkout',
      filename: 'checkout.js',
      exposes: {
        './BuyingButton': './src/components/BuyingButton.vue',
        './Cart': './src/components/Cart.vue',
        './utils': './src/utils.ts',
      },
      shared: ['vue', 'pinia']
    })
  ],
  base: 'http://localhost:5002/',
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
