<template>
  <div class="xm-menu">
    <el-button v-if="isDark" dark :icon="Moon" circle @click="toggleDark()" />
    <el-button v-else :icon="Sunny" circle @click="toggleDark()" />

    Menu
    <el-button type="primary">count</el-button>
  </div>
</template>

<script setup lang="ts">
  import { Moon, Sunny } from "@element-plus/icons-vue";
  import { isDark, toggleDark } from "@/utils/toggleDark";
</script>

<style scoped lang="scss">
  @include b(menu) {
    min-width: 200px;
    height: 100%;
    background-color: skyblue;
  }
</style>
