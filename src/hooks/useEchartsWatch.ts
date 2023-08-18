import * as echarts from "echarts";
import { onBeforeUnmount, onMounted } from "vue";

export function useEcharts(echartsInstance: echarts.ECharts) {
  const resize = () => {
    console.log("resize");
    echartsInstance.resize();
  };
  onMounted(() => {
    console.log("开始监听chart");
    window.addEventListener("resize", resize);
  });
  onBeforeUnmount(() => {
    console.log("停止监听chart");
    window.removeEventListener("resize", resize);
  });
}
