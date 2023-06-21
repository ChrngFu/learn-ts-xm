<template>
  <div>
    <h2>HTML</h2>
    <button @click="change">change</button>
    <h2>name:{{ name }}</h2>
    <h2>{{ zhang }}</h2>
    <h2>{{ wang }}</h2>
    姓：
    <input type="text" v-model="firstName" />
    <br />
    名：
    <input type="text" v-model="lastName" />
    <h2>{{ fullName }}||{{ nameFn }}</h2>
    <button @click="changeFullName">修改</button>
  </div>
</template>

<script setup lang="ts">
  import { toRef, ref, reactive, toRefs, toRaw, computed } from "vue";

  const name = ref("张三");

  let zhang = {
    name: "zhangsan",
    age: "14",
    gender: "男",
  };

  let wang = reactive({
    name: "wanggang",
    age: "18",
    gender: "男",
  });

  const change = () => {
    name.value = "李四";

    zhang.gender = "女";
    // toRef 只能修改响应式对象的值  非响应式对象的值无法修改视图
    const age = toRef(zhang, "age");
    age.value = "22";
    // const name = toRef(wang, "name");
    // name.value = "wangfang";

    // toRefs 用于解构 reactive 中的对象
    // : 别名/重命名
    const { name: name_w, age: age_w, gender } = toRefs(wang);
    console.log(name_w, age_w, gender);
    // toRaw 将响应式数据转为普通对象
    const defaultZhang = toRaw(zhang);
    console.log(defaultZhang);
  };

  const firstName = ref("");
  const lastName = ref("");
  // 选项式 可以修改
  const fullName = computed<string>({
    get() {
      return firstName.value + "-" + lastName.value;
    },
    set(newValue) {
      [firstName.value, lastName.value] = newValue.split("-");
    },
  });
  // 函数式 不可以修改
  const nameFn = computed<string>(() => {
    return firstName.value + lastName.value;
  });
  const changeFullName = () => {
    fullName.value = "李-四";
  };
</script>

<style scoped></style>
