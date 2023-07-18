import './mouseClickBubble'
/**
 * 根据指定的格式格式化当前日期和时间。
 * @param fmt - 格式化字符串。默认为 "yyyy-MM"。
 * @returns 格式化后的日期和时间。
 */
Date.prototype.format = function(fmt: string = "yyyy-MM"): string {
  const date = this as Date;
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");
  return fmt
    .replace("yyyy", year)
    .replace("MM", month)
    .replace("dd", day)
    .replace("hh", hour)
    .replace("mm", minute)
    .replace("ss", second);
};
