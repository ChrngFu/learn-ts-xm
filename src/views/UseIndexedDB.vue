<template>
  <div id="use-indexDB">
    IndexedDB
    <br />
    <div class="file-list">
      <el-upload
        style="margin-bottom: 8px"
        ref="uploadRef"
        v-model:file-list="fileList"
        action=""
        multiple
        :auto-upload="false"
        :show-file-list="false"
        :on-change="handleChange"
      >
        <template #trigger>
          <el-button type="primary">选择文件</el-button>
        </template>

        <el-button type="success" style="margin-left: 12px" @click="submitUpload">点击上传文件</el-button>
      </el-upload>
      <div v-if="fileList.length === 0">
        <p>暂无文件</p>
      </div>
      <div v-for="item in fileList" :key="item.uid" class="file-list-main">
        <img src="../assets/img/file.svg" alt="file" />
        <span>{{ item.name }}</span>
        <svg
          class="icon-del"
          @click="hadnleDelete(item)"
          t="1693400162714"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7129"
          width="200"
          height="200"
        >
          <path
            d="M720.298667 768c-12.714667 0-23.850667-4.778667-33.408-14.293333L270.293333 337.066667c-19.072-19.114667-19.072-49.322667 0-66.816 19.114667-19.072 49.322667-19.072 66.816 0l416.597334 415.018666c19.072 19.072 19.072 49.28 0 66.773334-9.557333 11.136-22.272 15.914667-33.408 15.914666z"
            fill="var(--icon-del)"
            p-id="7130"
          ></path>
          <path
            d="M303.701333 768c-12.714667 0-23.850667-4.778667-33.408-14.293333-19.072-19.114667-19.072-49.322667 0-66.816l415.018667-416.597334c19.072-19.072 49.28-19.072 66.773333 0 19.114667 19.114667 19.114667 49.322667 0 66.816l-414.976 416.597334a45.781333 45.781333 0 0 1-33.408 14.293333z"
            fill="var(--icon-del)"
            p-id="7131"
          ></path>
        </svg>
        <img class="icon-success" src="../assets/img/success.svg" alt="√" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, toRaw } from "vue";
  import type { UploadProps, UploadUserFile, UploadFile, UploadFiles, UploadInstance } from "element-plus";
  import anime from "animejs";
  import { findLastIndex } from "lodash";
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
    const lastIndex = findLastIndex(files, (f: UploadFile) => f.name === file.name);
    // 检查是否有重复文件，有的话删除新选择的文件f
    if (index !== lastIndex) {
      files.pop();
      showMessage({ message: "文件重复，已取消该文件此次上传", type: "warning" });
    }
    fileList.value = files;
  };
  // 删除文件列表项
  const hadnleDelete = (item: UploadUserFile) => {
    const index = fileList.value.findIndex(file => file.uid === item.uid);
    const el = document.querySelectorAll(".file-list-main")[index];
    anime({
      targets: el,
      translateY: -el.clientHeight,
      opacity: 0,
      complete: () => {
        fileList.value = fileList.value.filter(file => file.uid !== item.uid);
      },
    });
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
      @media (prefers-color-scheme: dark) {
        & {
          border: 1px dashed dimgray;
        }
      }
      &-main {
        width: 100%;
        padding: 4px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        position: relative;
        img {
          width: 1em;
          height: 1em;
        }
        span {
          display: inline-block;
          width: calc(100% - 3em);
          text-indent: 0.4em;
          // 文字超出限制部分显示省略号
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          vertical-align: bottom;
        }
        .icon-success {
          position: absolute;
          right: 0.5em;
        }
        --icon-del: #333333;
        .icon-del {
          transition: all 1s;
          display: none;
          width: 1em;
          height: 1em;
          position: absolute;
          right: 0.5em;
          &:hover {
            --icon-del: #409eff;
          }
        }
        &:hover {
          color: #409eff;
          cursor: pointer;
          background-color: #e3e3e3;
          @media (prefers-color-scheme: dark) {
            & {
              background-color: #3e3e3e;
            }
          }
          .icon-success {
            display: none;
          }
          .icon-del {
            display: inline;
          }
        }
      }
    }
    .el-upload__tip {
      font-size: 18px;
    }
  }
</style>
