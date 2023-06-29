<template>
  <div class="home">
    <div>Home</div>
    <div v-for="item in 100" :key="item" class="xm-home__item">
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  @include b(home) {
    @include bfc;
    display: flex;
    @include e(item) {
      margin: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }
</style>
