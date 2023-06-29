<template>
  <div class="xm-content">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  @include b(content) {
    flex: 1;
    overflow-y: auto;
  }
</style>
