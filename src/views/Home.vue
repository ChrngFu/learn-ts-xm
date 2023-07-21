<template>
  <div class="xm-home">
    <div>Home</div>
    <div class="xm-home__item" v-for="item in 100" :key="item">{{ item }}</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  @include b(home) {
    @include bfc;
    padding: 10px 10px 0;
    overflow-y: auto;
    @include e(item) {
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 10px;
    }
  }
</style>
