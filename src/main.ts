import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/index.scss";
import "./utils";
// 引入自定义指令
import directives from "./directives";
// 按需引入echarts
import "@/plugins/echarts";
createApp(App)
  .use(router)
  .use(directives) // 调用安装指令

  .mount("#app");
