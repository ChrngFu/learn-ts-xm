import { Directive } from "vue";
function getScale(el: HTMLElement) {
  const transform = window.getComputedStyle(el, null).getPropertyValue("transform");
  // matrix( scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY() )
  const transformMatrix = transform.slice(7, transform.length - 1).split(", ");
  const scaleX = parseFloat(transformMatrix[0]);
  const scaleY = parseFloat(transformMatrix[3]);
  return {
    scaleX,
    scaleY,
  };
}
// 使 v-drag 在所有组件中都可用
const move: Directive = {
  mounted(el: HTMLElement) {
    const root = document.getElementById("app") as HTMLElement;
    let { scaleX, scaleY } = getScale(root);
    window.addEventListener("resize", () => {
      scaleX = getScale(root).scaleX;
      scaleY = getScale(root).scaleY;
    });
    //元素鼠标按下事件
    //当鼠标在这个元素身上按下的时候 就会触发回调函数
    el.onmousedown = function (event) {
      // 获取元素起始位置
      const eleX = el.offsetLeft;
      const eleY = el.offsetTop;
      // 鼠标按下的坐标
      const startX = event.clientX;
      const startY = event.clientY;

      //鼠标抬起事件
      document.onmousemove = function (event) {
        console.log("移动");
        // 获取鼠标移动后的位置
        const endX = event.clientX;
        const endY = event.clientY;

        // 鼠标距离差 = 鼠标移动后位置 - 鼠标按下的位置
        const disX = (endX - startX) / scaleX;
        const disY = (endY - startY) / scaleY;
        // 元素最终的位置 = 元素初始位置 + 鼠标距离差
        let lastX = eleX + disX;
        let lastY = eleY + disY;

        // 吸附距离
        const ADSORPTION_DISTANCE = 20;
        // 边界值判断  (吸附效果)
        const maxWitdh = root.clientWidth - el.offsetWidth - ADSORPTION_DISTANCE;

        const maxHeight = root.clientHeight - el.offsetHeight - ADSORPTION_DISTANCE;

        // 边界值判断逻辑 大于最大值等于最大值 小于最小值等于最小值
        if (lastX > maxWitdh) {
          lastX = root.clientWidth - el.offsetWidth;
        } else if (lastX < ADSORPTION_DISTANCE) {
          lastX = 0;
        }
        if (lastY > maxHeight) {
          lastY = root.clientHeight - el.offsetHeight;
        } else if (lastY < ADSORPTION_DISTANCE) {
          lastY = 0;
        }
        // 设置元素移动位置
        el.style.left = lastX + "px";
        el.style.top = lastY + "px";
      };

      //鼠标抬起事件
      document.onmouseup = function () {
        document.onmousemove = null;
      };
      return false;
    };
  },
};

export default move;
