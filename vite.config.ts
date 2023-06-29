import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/bem.scss";`,
      },
    },
  },
  server: {
    host: "0.0.0.0",
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
