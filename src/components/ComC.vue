<template>
  <div id="com-c">
    ComC
    <div class="box" v-move></div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
  .box {
    width: 100px;
    height: 100px;
    border: 2px dashed pink;
    background-color: skyblue;
  }
  .drop-box {
    width: 400px;
    height: 400px;
    background-color: lightblue;
  }
</style>
