<template>
  <div id="com-c">
    ComC
    <div class="box" v-move>按住拖动</div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
  .box {
    width: 200px;
    height: 200px;
    font-size: 24px;
    font-family: "站酷庆科黄油体";
    border: 5px dashed orangered;
    background-color: pink;
    line-height: 200px;
    text-align: center;
    user-select: none;
    position: absolute;
    right: 0;
    top: 64px;
  }
</style>
