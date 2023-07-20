import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes";
import "@/assets/style/common.scss";
import "./utils";
// 引入自定义指令
import directives from "./directives";

createApp(App)
  .use(router)
  .use(directives) // 调用安装指令

  .mount("#app");
