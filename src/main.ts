import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes";
import "./utils";



createApp(App)
.use(router)
.mount("#app");
