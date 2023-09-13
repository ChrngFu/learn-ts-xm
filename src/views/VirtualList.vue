<template>
  <!-- 视口 -->
  <div id="virtual-list" ref="viewDom" @scroll="renderList">
    <!-- 列表 -->
    <div class="list-container" ref="listDom" :style="{ height: height - offet + 'px' }">
      <!-- 列表中的元素 -->
      <div
        class="list-item"
        :class="item % 2 === 0 ? 'bg-lime-200 dark:bg-lime-600' : 'bg-blue-200 dark:bg-blue-600'"
        v-for="item in viewList"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, onMounted } from "vue";
  // 常量
  const ItemHeight = 45;
  const viewDom = ref();
  const listDom = ref();
  const offetLength = 2;
  // 真实列表
  const list = new Array(100000).fill(0).map((_r, i) => i + 1);
  // 根据list计算容器的高度
  const height = ref(0);
  const offet = ref(0);
  height.value = list.length * ItemHeight;

  const viewList = ref();

  // 渲染虚拟列表
  const renderList = () => {
    let start, count, scrollTop;
    scrollTop = viewDom.value.scrollTop;
    start = Math.floor(scrollTop / ItemHeight);
    count = Math.ceil(viewDom.value.clientHeight / ItemHeight) + offetLength;
    viewList.value = list.slice(start, start + count);
    offet.value = start * ItemHeight;
    listDom.value.style.transform = `translateY(${offet.value}px)`;
  };
  // console.time();
  onMounted(() => {
    renderList();
    // console.timeEnd(); // 1120ms -> 1.58ms
  });
</script>
<style scoped lang="scss">
  #virtual-list {
    width: 600px;
    height: 800px;
    border: 1px dashed orange;
    overflow-y: auto;

    .list-container {
      width: 90%;
      background-color: pink;

      .list-item {
        width: 100%;
        height: 45px;
        line-height: 45px;
        text-align: center;
      }
    }
  }
</style>
