<template>
  <el-button type="primary" @click="visitable = true">打开对话框</el-button>
  <el-dialog v-model="visitable" width="80%" @opened="openDialog">
    <div id="chart-demo" ref="chartDemo">useCharts</div>
    <template #footer>
      <span>
        <el-button @click="visitable = false">Cancel</el-button>
        <el-button type="primary" @click="updata">更新数据</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import echarts from "@/plugins/echarts";

  const visitable = ref(false);
  const chartDemo = ref<HTMLDivElement | null>(null);

  const randomArr = () => {
    let arr: number[] = [];
    arr = new Array(6).fill(0).map(() => Math.floor(Math.random() * 100) + 50);
    return arr;
  };

  let yData = randomArr();

  const options = {
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
        data: yData,
      },
    ],
  };
  let myChart: echarts.ECharts | null = null;
  const updata = () => {
    yData = yData.map(_r => Math.floor(Math.random() * 100) + 50);
    options.series[0].data = yData;
    myChart ? null : (myChart = echarts.init(chartDemo.value as HTMLDivElement));
    myChart.clear();
    myChart.setOption(options);
  };
  const openDialog = () => {
    myChart ? null : (myChart = echarts.init(chartDemo.value as HTMLDivElement));
    myChart.setOption(options);
  };
</script>
<style scoped lang="scss">
  #chart-demo {
    width: 700px;
    height: 400px;
    border: 1px dashed red;
  }
</style>
