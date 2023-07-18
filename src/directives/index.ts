import { App, Directive } from "vue";

// 只有当所需功能只能通过直接的 DOM 操作来实现时，才应该使用自定义指令。

import example from "./example";
import move from "./elementMove";

const directives: Record<string, Directive> = {
  // 指令对象
  example,
  move,
};

/**
 * 在应用程序上安装指令。
 *
 * @param app - 应用程序实例。
 * @param directives - 要安装的指令。
 */
export default {
  install(app: App) {
    Object.keys(directives).forEach((key: string) => {
      app.directive(key, directives[key]);
    });
  },
};
