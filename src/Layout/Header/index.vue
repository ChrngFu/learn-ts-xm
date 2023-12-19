<template>
  <div class="xm-header">
    <div class="title">Learn TS Demo</div>
    <el-button :dark="isDark" :icon="isDark ? Moon : Sunny" circle size="large" @click="toggleDark()" />

    <div class="more-info">
      <iframe
        allowtransparency="true"
        frameborder="0"
        width="400"
        height="64"
        scrolling="no"
        style="background-color: white; border-bottom: 1px solid grey"
        src="//tianqi.2345.com/plugin/widget/index.htm?s=2&z=3&t=1&v=2&d=2&bd=0&k=000000&f=&ltf=009944&htf=cc0000&q=1&e=1&a=1&c=54511&w=400&h=64&align=center"
      ></iframe>
      <div class="time">{{ nowTime }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onBeforeUnmount, ref } from "vue";
  import { Moon, Sunny } from "@element-plus/icons-vue";
  import { isDark, toggleDark } from "@/utils/toggleDark";

  const nowTime = ref("");
  let timer: NodeJS.Timeout | null = null;
  const getTime = () => {
    nowTime.value = new Date().format("现在时间：yyyy年MM月dd日星期w，hh时mm分ss秒");
    timer = setTimeout(getTime, 1000);
  };
  getTime();
  onBeforeUnmount(() => {
    timer && clearTimeout(timer);
  });
</script>

<style scoped lang="scss">
  .xm-header {
    width: 100%;
    min-width: 1000px;
    height: 64px;
    padding: 0 12px;
    border-bottom: 1px solid grey;
    font-family: "站酷庆科黄油体";
    @include flex();
    position: relative;
    .title {
      width: 300px;
      height: 100%;
      padding: 0 20px;
      font-size: 36px;
      line-height: 64px;
      text-align: center;
    }
    .more-info {
      width: 800px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      right: 12px;
      .time {
        flex: 1;
        height: 100%;
        line-height: 64px;
        font-size: 18px;
        text-align: center;
      }
    }
  }
</style>
