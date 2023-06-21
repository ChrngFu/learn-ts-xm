<template>
  <div class="xm-layout">
    <div>
      <Menu></Menu>
    </div>
    <div class="xm-layout__right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Header from "./Header/index.vue";
  import Menu from "./Menu/index.vue";
  import Content from "./Content/index.vue";
</script>

<style scoped lang="scss">
  @include b(layout) {
    @include bfc;
    display: flex;
    @include e(right) {
      display: flex;
      flex: 1;
      flex-direction: column;
    }
  }
</style>
