import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    // 配置代理
    proxy: {
      "/uas": {
        target: "http://119.3.44.143:10000",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/uas/, "/uas"),
      },
    },
    host: "0.0.0.0",
    port: 7411,
  },
  resolve: {
    // 路径别名配置
    alias: {
      "@": "/src",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/bem.scss";`,
      },
    },
  },
});
