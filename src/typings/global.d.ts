export {}

// 扩展声明类型
declare global {
  interface Date {
    format(fmt?: string): string;
  }
}
