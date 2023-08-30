import * as localforage from "localforage";
const LocalData = localforage.createInstance({
  name: "LocalData",
});
// 将强制使用 INDEXEDDB 作为存储驱动，即使其他驱动可用。
// 可用配置代替 `setDriver()`。
LocalData.config({
  driver: localforage.INDEXEDDB,
});

export default LocalData;
