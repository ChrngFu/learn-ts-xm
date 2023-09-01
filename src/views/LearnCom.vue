<template>
  <div class="learn-com">
    <h2>LearnCom</h2>
    <el-input v-model="message" placeholder="请输入MSG" style="width: 120px"></el-input>
    <el-button type="primary" size="default" @click="updataList">更新数组</el-button>
    <br />
    <com-a :msg="message" :user-info="userList"></com-a>
  </div>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import ComA from "@/components/ComA.vue";
  import { getRandomChineseWord } from "@/utils/getRandomCN";
  const message = ref("hello world");

  const randomList = new Array(10).fill(null).map((_r, i) => {
    return {
      id: i + 1,
      name: getRandomChineseWord(3),
    };
  });
  const userList = ref(randomList);
  const updataList = () => {
    userList.value = userList.value.map(r => {
      return {
        ...r,
        name: getRandomChineseWord(3),
      };
    });
    console.log(userList.value);
  };
</script>
<style scoped lang="scss">
  .learn-com {
    width: 100%;
    height: 100%;
    padding: 20px;
    border: 5px dashed palegreen;
  }
</style>
