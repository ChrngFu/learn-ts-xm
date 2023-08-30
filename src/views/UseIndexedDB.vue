<template>
  <div id="use-indexDB">
    IndexedDB
    <br />
    <div class="file-list">
      <el-upload
        ref="uploadRef"
        v-model:file-list="fileList"
        action=""
        multiple
        :auto-upload="false"
        :on-change="handleChange"
      >
        <template #trigger>
          <el-button type="primary">选择文件</el-button>
        </template>

        <el-button type="success" style="margin-left: 12px" @click="submitUpload">点击上传文件</el-button>

        <template #tip>
          <div class="el-upload__tip">jpg/png files with a size less than 500KB.</div>
        </template>
      </el-upload>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, toRaw } from "vue";
  import type { UploadProps, UploadUserFile, UploadFile, UploadFiles, UploadInstance } from "element-plus";
  import LocalData from "@/utils/indexDB";
  import showMessage from "@/utils/message";

  const uploadRef = ref<UploadInstance>();

  const fileList = ref<UploadUserFile[]>([]);

  // 获取文件列表
  const getFileList = () => {
    LocalData.getItem("fileList").then(value => {
      if (value) {
        (value as UploadUserFile[]).forEach(file => {
          fileList.value.push(file);
        });
      }
    });
  };
  getFileList();

  // 文件列表改变时 - 文件列表去重
  const handleChange: UploadProps["onChange"] = (file: UploadFile, files: UploadFiles) => {
    const index = files.findIndex(f => f.name === file.name);
    const lastIndex = files.findLastIndex(f => f.name === file.name);
    // 检查是否有重复文件，有的话删除新选择的文件f
    if (index !== lastIndex) {
      files.pop();
      showMessage({ message: "文件重复，已删除", type: "warning" });
    }
    fileList.value = files;
  };
  const submitUpload = () => {
    const files: UploadUserFile[] = [];
    fileList.value.forEach(file => {
      files.push(toRaw(file));
    });
    LocalData.setItem("fileList", files)
      .then(() => {
        showMessage({
          message: "文件上传成功！",
          type: "success",
        });
      })
      .catch(() => {
        showMessage({
          message: "文件上传失败！",
          type: "error",
        });
      });
    // uploadRef.value!.submit();
  };
</script>

<style scoped lang="scss">
  #use-indexDB {
    width: 100%;
    height: 100%;
    padding: 20px;
    .file-list {
      width: 400px;
      max-height: 700px;
      padding: 12px;
      border: 1px dashed lightpink;
    }
    .el-upload__tip {
      font-size: 18px;
    }
  }
</style>
