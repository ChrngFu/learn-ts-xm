<template>
  <div class="learn-com">
    <el-input v-model="message" placeholder="请输入MSG" style="width: 120px"></el-input>
    <el-button type="primary" size="default" @click="updataList">更新数组</el-button>
    <br />
    <com-a :msg="message" :user-info="userList"></com-a>
  </div>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import ComA from "@/components/ComA.vue";
  import CNFonts from "@/assets/style/cn.ts";
  const message = ref("hello world");
  console.time("test");
  const fonsList: number[] = [];
  const getFontList = async () => {
    CNFonts.split(",").forEach(r => fonsList.push(parseInt(r, 16)));
  };
  getFontList();
  console.timeEnd("test");
  /** 随机中文 */
  const getRandomChineseWord = () => {
    const lng = fonsList.length;
    const index = Math.floor(Math.random() * lng);
    return String.fromCharCode(fonsList[index]);
  };
  const randomList = new Array(10).fill(null).map((_r, i) => {
    let str = "";
    for (let i = 0; i < 3; i++) {
      str += getRandomChineseWord();
    }
    return {
      id: i + 1,
      name: str,
    };
  });
  const userList = ref(randomList);
  const updataList = () => {
    userList.value = userList.value.map(r => {
      let str = "";
      for (let i = 0; i < 3; i++) {
        str += getRandomChineseWord();
      }
      return {
        ...r,
        name: str,
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
  }
</style>
