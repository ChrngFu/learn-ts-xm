<template>
  <el-image
    v-loading.fullscreen.lock="fullscreenLoading"
    style="width: 0px"
    :src="imgUrl"
    :preview-src-list="[imgUrl]"
    :zoom-rate="1.2"
    :initial-index="0"
    fit="cover"
    hide-on-click-modal
    @close="close"
  />
</template>

<script setup lang="ts">
  import { ref, nextTick } from "vue";

  const fullscreenLoading = ref(false);

  // 图片预览
  const imgLoading = () => {
    fullscreenLoading.value = true;
  };

  const emits = defineEmits(["close"]);
  const imgUrl = ref("");
  const open = (url: string) => {
    imgUrl.value = url;
    nextTick(() => {
      const el = document.querySelector(".el-image__inner.el-image__preview") as HTMLElement;
      fullscreenLoading.value = false;
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
