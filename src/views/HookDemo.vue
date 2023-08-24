<template>
  <div id="chart-demo" ref="chartDemo">useCharts</div>
  <el-button type="primary" @click="distroyed">销毁echarts</el-button>
  <el-button type="primary" @click="buildChart">重建echarts</el-button>
</template>
<script setup lang="ts">
  import { Ref, nextTick, onMounted, ref } from "vue";
  import { EChartsOption } from "echarts";
  import { useEcharts } from "@/hooks/useEcharts.ts";

  const chartDemo = ref<HTMLElement | null>(null);
  const { setOption, showLoading, getInstance } = useEcharts(chartDemo as Ref<HTMLElement>);

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
  let instance: echarts.ECharts | null = null;
  const distroyed = () => {
    instance?.clear();
  };

  const buildChart = () => {
    showLoading();
    setTimeout(() => {
      setOption(options);
    }, 1000);
  };

  onMounted(() => {
    nextTick(() => {
      buildChart();
      instance = getInstance();
    });
  });
</script>
<style scoped lang="scss">
  #chart-demo {
    width: 50%;
    height: 50%;
    border: 1px dashed red;
  }
</style>
