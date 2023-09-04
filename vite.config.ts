import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// 导入对应包
import ElementPlus from "unplugin-element-plus/vite";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 路径别名配置
    alias: {
      "@": "/src",
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue"],
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
    }),
    ElementPlus({
      useSource: true,
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
    host: true,
    port: 7411,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use '@/styles/mixin.scss' as *;
        @use '@/styles/element/index.scss' as *;
          `,
      },
    },
  },
  base: "./",
  // vite打包配置
  build: {
    // 打包文件夹
    outDir: "docs",
    sourcemap: false,
    minify: "terser",
    // 启用/禁用 CSS 代码拆分。
    cssCodeSplit: true,
    terserOptions: {
      compress: {
        drop_console: true, // 删除所有日志语句
        drop_debugger: true, // 删除所有debugger语句
      },
    },
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        },
        chunkFileNames: chunkInfo => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split("/") : [];
          const fileName = facadeModuleId[facadeModuleId.length - 2] || "[name]";
          return `assets/js/${fileName}/[name].[hash].js`;
        },
      },
    },
  },
});
