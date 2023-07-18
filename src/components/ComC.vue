<template>
  <div id="com-c">
    ComC
    <div class="demo-box" ref="demoBox"></div>
  </div>
</template>
<script setup lang="ts">
  import * as anime from "animejs";
  import { ref, onMounted } from "vue";
  let demoBox = ref(null);
  const drawAnime = (el: Element | null) => {
    let bgAnimate: anime.AnimeInstance;
    bgAnimate = anime({
      targets: el,
      translateX: "200px",
    });
  };

  onMounted(() => {
    drawAnime(demoBox.value);
  });
</script>
<style scoped lang="scss">
  .demo-box {
    width: 100px;
    height: 100px;
    background-color: pink;
  }
</style>
