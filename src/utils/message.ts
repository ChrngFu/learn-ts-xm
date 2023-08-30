import { ElMessage } from "element-plus";
import type { MessageOptions } from "element-plus";
function showMessage(params: MessageOptions) {
  const { message, type = "info", duration = 2000 } = params;
  ElMessage({
    message,
    type,
    duration,
  });
}
export default showMessage;
