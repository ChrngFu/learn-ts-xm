import { Ref, nextTick, onMounted, onUnmounted, unref } from "vue";
import * as echarts from "echarts";

/**
 * hook 封装 echarts 函数
 * @param elRef ref-DOM节点
 * @param [animation=true] 是否添加过渡效果
 * @param [isResize=true] 是否更新大小
 */
export function useEcharts(elRef: Ref<HTMLElement>, isResize = true, animation: boolean = true) {
  // echarts实例
  let instance: echarts.EChartsType | null = null;

  // 初始化echarts
  const initChart = () => {
    const el = unref(elRef);
    if (!el || !unref(el)) return;
    instance = echarts.init(el);
  };

  // 更新/设置配置
  const setOption = (option: echarts.EChartsOption) => {
    nextTick(() => {
      if (!instance) {
        initChart();
        if (!instance) return;
      }

      instance.setOption(option);
      hideLoading();
    });
  };

  // 获取echarts实例
  const getInstance = (): echarts.ECharts | null => {
    if (!instance) {
      initChart();
    }
    return instance;
  };

  // 更新echarts
  const resize = () => {
    console.log("resize");

    instance?.resize();
  };

  // 监听dom元素
  const watchElement = () => {
    // 给元素添加过渡效果
    if (animation) {
      elRef.value.style.transition = "width 1s, height 1s";
    }
    const resizeObserver = new ResizeObserver(_entries => resize());
    resizeObserver.observe(elRef.value);
  };

  // 显示加载中
  const showLoading = () => {
    if (!instance) {
      initChart();
    }
    instance?.showLoading();
  };

  // 隐藏加载中
  const hideLoading = () => {
    if (!instance) {
      initChart();
    }
    instance?.hideLoading();
  };

  onMounted(() => {
    window.addEventListener("resize", resize);
    if (isResize) watchElement();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", resize);
  });

  return {
    setOption,
    getInstance,
    showLoading,
    hideLoading,
  };
}
