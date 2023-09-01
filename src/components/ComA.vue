<template>
  <div class="com-a">
    ComA
    <h2>MSG : {{ props.msg }}</h2>
    <div class="user-info-list">
      <div v-for="item in userInfo" :key="item.id" class="user-info-item">
        {{ item.name }}
      </div>
    </div>
    <br />
    <el-button type="primary" size="default" @click="changeComB">修改子组件暴露出来的属性</el-button>

    <com-b ref="comBRef"></com-b>
  </div>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import { getRandomChineseWord } from "@/utils/getRandomCN";
  import ComB from "@/components/ComB.vue";
  const props = defineProps(["msg", "userInfo"]);
  const comBRef = ref<InstanceType<typeof ComB>>();
  const changeComB = () => {
    if (comBRef.value) {
      comBRef.value.name = getRandomChineseWord(2);
    }
  };
</script>
<style scoped lang="scss">
  .com-a {
    border: 5px outset orange;
    margin-top: 8px;
    padding: 8px;
  }
  .user-info-list {
    width: 200px;
    max-height: 400px;
    padding: 18px;
    border: 1px inset #ccc;
    .user-info-item {
      width: 100%;
      height: 30px;
      font-size: 18px;
      line-height: 30px;
      text-align: center;
      border: 1px dashed darkcyan;
      &:not(:last-child) {
        margin-bottom: 4px;
      }
    }
  }
</style>
