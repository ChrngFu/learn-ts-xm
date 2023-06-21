<template>
  <div class="xm-content">
    <div v-for="item in 100" :key="item" class="xm-content__item">
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  @include b(content) {
    flex: 1;
    overflow-y: auto;
    @include e(item) {
      margin: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }
</style>
