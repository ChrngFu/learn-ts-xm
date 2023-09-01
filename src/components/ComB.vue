<template>
  <div class="com-b">
    ComB
    <br />
    <h2>姓名：{{ name }}</h2>
    <com-c></com-c>
  </div>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import ComC from "@/components/ComC.vue";
  const name = ref("张三");
  defineExpose({
    name,
  });
</script>
<style scoped lang="scss">
  .com-b {
    border: 5px inset brown;
    margin-top: 8px;
    padding: 8px;
  }
</style>
