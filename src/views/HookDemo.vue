<template>useCharts</template>
<script setup lang="ts">
  import { onMounted } from "vue";
  const test = () => {
    console.log("onMounted");
  };
  onMounted(test);
</script>
<style scoped lang="scss"></style>
