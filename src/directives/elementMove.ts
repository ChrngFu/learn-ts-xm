import { Directive } from "vue";

// 使 v-drag 在所有组件中都可用
const move: Directive = {
  mounted(el: HTMLElement) {
    el.style.position = "absolute";
    el.style.cursor = "move";
    el.onmousedown = e => {
      const { pageX, pageY } = e;
      const innerTop = pageY - el.offsetTop;
      const innerLeft = pageX - el.offsetLeft;
      document.onmousemove = e => {
        const { pageX, pageY } = e;
        const newLeft = pageX - innerLeft;
        const newTop = pageY - innerTop;
        el.style.left = `${newLeft}px`;
        el.style.top = `${newTop}px`;
      };
    };
    el.onmouseup = () => {
      document.onmousemove = null;
    };
  },
};

export default move;
