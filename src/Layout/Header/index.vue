<template>
  <div class="xm-header">
    <div class="title">Learn TS Demo</div>
    <el-button v-if="isDark" dark :icon="Moon" circle @click="toggleDark()" />
    <el-button v-else :icon="Sunny" circle @click="toggleDark()" />

    <div class="time-info">
      <iframe
        allowtransparency="true"
        frameborder="0"
        width="317"
        height="28"
        scrolling="no"
        src="//tianqi.2345.com/plugin/widget/index.htm?s=3&z=1&t=1&v=0&d=1&bd=0&k=000000&f=&ltf=009944&htf=cc0000&q=1&e=0&a=1&c=70447&w=317&h=28&align=center"
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
    height: 64px;
    padding: 0 12px;
    border-bottom: 1px solid grey;
    font-family: "站酷庆科黄油体";
    @include flex();
    position: relative;
    .title {
      width: 200px;
      height: 100%;
      font-size: 32px;
      line-height: 64px;
      text-align: center;
    }
    .time-info {
      min-width: 320px;
      height: 100%;
      font-size: 16px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 12px;
      .time {
        margin-top: 4px;
      }
    }
  }
</style>
