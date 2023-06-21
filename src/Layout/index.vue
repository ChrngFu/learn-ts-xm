<template>
  <div class="xm-layout">
    <div>
      <Menu></Menu>
    </div>
    <div>
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
  }
</style>
