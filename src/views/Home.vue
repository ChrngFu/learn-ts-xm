<template>
  <div class="xm-home" ref="listDom" :style="{ height: realHeight + 'px', translate: '0px ' + offset + 'px' }">
    <!-- <div>Home</div> -->
    <div class="xm-home__item" v-for="item in renderList" :key="item">{{ item }}</div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from "vue";

  const realList = new Array(100).fill(0).map((_r, i) => i);

  const renderList = ref();

  let start = 0,
    end = 0,
    count = 10,
    itemHeight = 53,
    visibleHeight = 0,
    scrollTop;

  const realHeight = ref(realList.length * itemHeight + 10);

  const parentDom = ref();
  const listDom = ref();
  const offset = ref();
  const scrollEvent = (event: Event): void => {
    scrollTop = (event.target as HTMLElement).scrollTop;
    offset.value = scrollTop - (scrollTop % itemHeight);
    start = Math.floor(offset.value / itemHeight);

    renderFn();
  };

  const renderFn = () => {
    end = start + count;
    console.log(start, "startIndex");
    console.log(end, "endIndex");

    renderList.value = realList.slice(0, 16);
  };

  onMounted(() => {
    parentDom.value = listDom.value.parentElement;
    parentDom.value.onscroll = scrollEvent;
    visibleHeight = parentDom.value.clientHeight;
    count = Math.floor(visibleHeight / itemHeight);

    renderFn();
  });
</script>

<style scoped lang="scss">
  @include b(home) {
    @include bfc;
    padding: 10px 10px 0;
    overflow-y: auto;
    @include e(item) {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 10px;
    }
  }
</style>
