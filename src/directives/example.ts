import { Directive } from "vue";
// 在绑定元素的 attribute 前
// 或事件监听器应用前调用
const example: Directive = {
  created(_el, _binding, _vnode, _prevVnode) {
    // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(_el, _binding, _vnode, _prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(_el, _binding, _vnode, _prevVnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(_el, _binding, _vnode, _prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(_el, _binding, _vnode, _prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(_el, _binding, _vnode, _prevVnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(_el, _binding, _vnode, _prevVnode) {},
};
export default example;
