import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";
// const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/bem.scss";`,
      },
    },
  },
  server: {
    host: true,
    port: 7411,
  },
  resolve: {
    // 路径别名配置
    alias: {
      // "@": path.resolve(__dirname, "./src/*"),
      "@": "/src",
    },
  },
});
