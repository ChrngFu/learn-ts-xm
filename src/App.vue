<script setup lang="ts">
  import { onMounted } from "vue";
  import { ElConfigProvider } from "element-plus";
  import autofit from "autofit.js";
  import Layout from "./Layout/index.vue";
  onMounted(() => {
    // 默认参数为1920*929（即去掉浏览器头的1080）, 直接在大屏启动时调用即可
    // autofit.init();
    autofit.init(
      {
        dw: 1920,
        dh: 911, // 默认是 929 ，如果项目以全屏展示，则可以设置为1080
        el: "#app",
        resize: true,
      },
      true, // 可选择关闭控制台运行提示输出
    );
  });
</script>

<template>
  <el-config-provider size="default" :z-index="2000">
    <Layout></Layout>
  </el-config-provider>
</template>

<style lang="scss">
  #app {
    @include bfc;
  }
</style>
