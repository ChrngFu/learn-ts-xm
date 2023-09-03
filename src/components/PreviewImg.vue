<template>
  <el-image
    style="width: 0px"
    :src="imgUrl"
    :preview-src-list="[imgUrl]"
    :zoom-rate="1.2"
    :initial-index="0"
    fit="cover"
    @close="close"
  />
</template>

<script setup lang="ts">
  import { ref, nextTick } from "vue";
  import { ElLoading } from "element-plus";

  const loading = ref();
  // 图片预览
  const imgLoading = () => {
    loading.value = ElLoading.service({
      lock: true,
      text: "Loading",
    });
  };

  const emits = defineEmits(["close"]);
  const imgUrl = ref("");
  const open = (url: string) => {
    imgUrl.value = url;
    nextTick(() => {
      const el = document.querySelector(".el-image__inner.el-image__preview") as HTMLElement;
      loading.value && loading.value.close();
      el.click();
    });
  };
  const close = () => {
    emits("close");
  };

  defineExpose({
    imgLoading,
    open,
  });
</script>

<style scoped></style>
