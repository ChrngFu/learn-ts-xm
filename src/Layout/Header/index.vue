<template>
  <div class="xm-header">
    <div
      v-for="item in routerList"
      :key="item.name"
      class="xm-header__item"
      :class="item.name === currentRoute.name ? 'active' : ''"
      @click="routeJump(item)"
    >
      {{ toUpperCase(item.name) }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter, RouteRecordName, useRoute, RouteRecordRaw } from "vue-router";
  import { ElMessageBox } from "element-plus";

  const router = useRouter();
  const currentRoute = useRoute();
  // 获取当前路由表
  const routerList = ref(router.getRoutes());
  const mode = import.meta.env.MODE !== "development";

  // 首字母转大写
  const toUpperCase = (str: RouteRecordName | undefined): string =>
    typeof str === "string" ? `${str.charAt(0).toUpperCase()}${str.slice(1)}` : "";

  // 路由跳转
  const routeJump = (item: RouteRecordRaw) => {
    if (item.meta?.userLevel === "dev" && mode) {
      ElMessageBox.alert("抱歉，您的权限等级不够，暂时无法查看！", "", {
        confirmButtonText: "OK",
        type: "warning",
      });
      return;
    }
    router.push(item.path);
  };
</script>

<style scoped lang="scss">
  @include b(header) {
    @include flex();
    height: 64px;
    padding: 0 12px;
    border-bottom: 1px solid grey;
    @include e(item) {
      height: 100%;
      line-height: 64px;
      padding: 0 12px;
      cursor: pointer;
    }
    .active {
      color: cadetblue;
    }
  }
</style>
