<template>
  <div id="chart-demo">useCharts</div>
</template>
<script setup lang="ts">
  import { EChartsOption } from "echarts";
  import useEchart from "@/hooks/useEcharts.ts";
  const options: EChartsOption = {
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "服装销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };
  useEchart({
    id: "chart-demo",
    options,
  });
</script>
<style scoped lang="scss">
  #chart-demo {
    width: 50%;
    height: 50%;
    border: 1px dashed pink;
  }
</style>
