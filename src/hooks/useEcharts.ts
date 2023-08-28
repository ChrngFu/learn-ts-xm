import { Ref, nextTick, onMounted, onUnmounted, unref, ComponentInternalInstance } from "vue";
import * as echarts from "echarts";

/**
 * hook 封装 echarts 函数
 * @param elRef ref-DOM节点
 * @param [comInstance=null] 使用该函数的组件实例
 * @param [animation=true] 是否添加过渡效果
 * @param [isResize=true] 是否更新大小
 */
export function useEcharts(
  elRef: Ref<HTMLElement>,
  comInstance: ComponentInternalInstance | null = null,
  isResize = true,
  animation: boolean = true,
) {
  /**
   * echarts实例
   */
  let echartsInstance: echarts.ECharts | null = null;

  /**
   * 初始化echarts
   */
  const initChart = () => {
    const el = unref(elRef);
    if (!el || !unref(el)) return;
    echartsInstance = echarts.init(el);
  };

  /**
   * 更新/设置配置
   */
  const setOption = (option: echarts.EChartsOption) => {
    nextTick(() => {
      if (!echartsInstance) {
        initChart();
        if (!echartsInstance) return;
      }

      echartsInstance.setOption(option);
      hideLoading();
    });
  };

  /**
   * 获取echarts实例
   */
  const getInstance = (): echarts.ECharts | null => {
    if (!echartsInstance) {
      initChart();
    }
    return echartsInstance;
  };

  /**
   * 更新echarts
   */
  const resize = () => {
    echartsInstance?.resize();
  };

  /**
   * 监听dom元素
   */
  const watchElement = () => {
    // 给元素添加过渡效果
    if (animation) {
      elRef.value.style.transition = "width 1s, height 1s";
    }
    const resizeObserver = new ResizeObserver(entries => {
      const { clientWidth, clientHeight } = entries[0].target;
      if (clientWidth === 0 || clientHeight === 0) return;
      resize();
    });
    resizeObserver.observe(elRef.value);
  };

  /**
   * 显示加载中
   */
  const showLoading = () => {
    if (!echartsInstance) {
      initChart();
    }
    echartsInstance?.showLoading();
  };

  /**
   * 隐藏加载中
   */
  const hideLoading = () => {
    if (!echartsInstance) {
      initChart();
    }
    echartsInstance?.hideLoading();
  };

  if (comInstance) {
    console.log("onMounted already");
    window.addEventListener("resize", resize);
    if (isResize) watchElement();
  } else {
    onMounted(() => {
      console.log("onMounted");
      window.addEventListener("resize", resize);
      if (isResize) watchElement();
    });
  }

  onUnmounted(() => {
    window.removeEventListener("resize", resize);
    console.log("onUnmounted");
  }, comInstance);

  return {
    setOption,
    getInstance,
    showLoading,
    hideLoading,
  };
}
