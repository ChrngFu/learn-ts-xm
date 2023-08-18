import { onMounted, nextTick, onBeforeUnmount } from "vue";
import * as echarts from "echarts";
import { EChartParams } from "@/typings/interfaces";
import { merge } from "lodash";
// useEcharts方法
/**
 * @param options charts配置
 * @param id dom-id
 * @param isInit 是否初始化调用
 * @param isResize 窗口变化是否允许重画charts
 */
export default function (params: EChartParams) {
  const { id, options, isInit = true, isResize = true } = params;

  let myChart: echarts.ECharts | null = null;
  // 默认option
  const defaultOptions: echarts.EChartsOption = {
    title: {},
    tooltip: {
      trigger: "axis",
    },
    legend: {},
    xAxis: {
      type: "category",
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          // 虚线
          type: [5, 5],
        },
      },
    },
    series: [],
  };

  // 初始化options
  const initOptions = merge(defaultOptions, options);

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
