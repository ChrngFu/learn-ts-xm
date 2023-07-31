import { onMounted, nextTick, onBeforeUnmount } from "vue";
import * as echarts from "echarts";
import { EChartParams } from "@/typings/interfaces";
// useEcharts方法
export default function (params: EChartParams) {
  /**
   * @param options charts配置
   * @param id dom-id
   * @param isInit 是否初始化调用
   * @param isResize 窗口变化是否允许重画charts
   */
  const { id, options, isInit = true, isResize = true } = params;

  let myChart: echarts.ECharts | null = null;

  // 初始化options
  let initOptions = { ...options };

  // 初始化Chart
  const initChart = () => {
    const el = document.getElementById(id);
    if (el && !myChart) {
      console.log("init");
      myChart = echarts.init(el);
      myChart.setOption(initOptions, true);
    }
  };
  // 重绘Chart
  const resizeChart = () => {
    if (myChart) {
      console.log("resize");
      myChart.resize();
    }
  };

  // 销毁Chart
  const destroyChart = () => {
    if (myChart) {
      myChart.dispose();
      myChart = null;
      console.log("dispose");
    }
  };

  if (isResize) window.addEventListener("resize", resizeChart);

  onMounted(() => {
    nextTick(() => {
      isInit && initChart();
    });
  });
  onBeforeUnmount(() => {
    destroyChart();
    if (isResize) window.removeEventListener("resize", resizeChart);
  });
}
