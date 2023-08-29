import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/learn-com",
    name: "learn-com",
    component: () => import("@/views/LearnCom.vue"),
  },
  {
    path: "/virtual-list",
    name: "virtual-list",
    component: () => import("@/views/VirtualList.vue"),
  },
  {
    path: "/hook-demo",
    name: "hook-demo",
    component: () => import("@/views/HookDemo.vue"),
  },
  {
    path: "/real-request",
    name: "real-request",
    component: () => import("@/views/RealNetworkRequests.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
