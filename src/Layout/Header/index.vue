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
  const router = useRouter();
  const currentRoute = useRoute();
  // 获取当前路由表
  const routerList = ref(router.getRoutes());
  // 首字母转大写
  const toUpperCase = (str: RouteRecordName | undefined): string =>
    typeof str === "string" ? `${str.charAt(0).toUpperCase()}${str.slice(1)}` : "";

  // 路由跳转
  const routeJump = (item: RouteRecordRaw) => {
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
      padding: 0 12px;
      cursor: pointer;
    }
    .active {
      color: cadetblue;
    }
  }
</style>
