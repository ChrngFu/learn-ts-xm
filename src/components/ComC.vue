<template>
  <div id="com-c">
    ComC
    <div class="box" v-move>按住拖动</div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
  .box {
    width: 140px;
    height: 140px;
    font-size: 24px;
    font-family: "站酷庆科黄油体";
    border: 2px dashed pink;
    background-color: skyblue;
    line-height: 140px;
    text-align: center;
    user-select: none;
    position: absolute;
    right: 0;
    top: 64px;
  }
</style>
