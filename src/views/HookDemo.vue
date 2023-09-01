<template>
  <div class="hook-demo">
    <div class="line-chart" ref="lineChartRef"></div>
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
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref, Ref } from "vue";
  import echarts from "@/plugins/echarts";
  import { useEcharts } from "@/hooks/useEcharts";
  import type { EChartsOption, SeriesOption } from "echarts";

  const lineChartRef = ref<HTMLDivElement | null>(null);
  const { setOption } = useEcharts(lineChartRef as Ref<HTMLDivElement>);
  const colorList = ["#f00", "#0f0", "#44E2FE"];
  const seriesCommonFn = (name: string, data: number[], color: string): SeriesOption => {
    return {
      name: name,
      data: data,
      type: "line",
      smooth: true,
      showSymbol: false,
      symbolSize: 10,
      emphasis: { focus: "series" },
      animationDuration: 2500,
      animationEasing: "cubicInOut",
      lineStyle: {
        width: 6,
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0.5,
          y2: 0,
          colorStops: [
            {
              offset: 0 / 100,
              color: "rgba(83, 61, 241, 0)",
            },
            {
              offset: 50 / 100,
              color: color,
            },
            {
              offset: 100 / 100,
              color: "rgba(83, 61, 241, 0)",
            },
          ],
          global: false, // 缺省为 false
        },
      },
    };
  };

  const xData = ["07/21", "07/22", "07/23", "07/24", "07/25", "07/26", "07/27"];
  const yData2 = [
    {
      name: "红色",
      data: [100, 120, 90, 480, 130, 160, 280, 100, 220, 180, 270, 280, 375],
    },
    {
      name: "青色",
      data: [60, 80, 360, 20, 500, 100, 90, 180, 20, 140, 200, 220, 275],
    },
    {
      name: "蓝色",
      data: [20, 40, 30, 70, 380, 60, 50, 140, 120, 100, 140, 180, 220],
    },
  ];
  const chartOptions: EChartsOption = {
    // backgroundColor: '#171B34',
    color: colorList,
    legend: {
      show: true,
      right: 0,
      icon: "roundRect",
      itemHeight: 5,
      itemWidth: 10,
      itemGap: 40,
      itemStyle: {
        borderColor: "transparent",
        borderWidth: 6,
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
      },
      borderColor: "transparent",
      backgroundColor: "rgba(200, 200, 0, 0.5)",
      extraCssText: "backdrop-filter: blur(6px);",
    },
    grid: {
      top: "20%",
      left: "2%",
      right: "2.5%%",
      bottom: "0%",
      containLabel: true,
    },
    title: {
      show: true,
      text: `{text|渐变line图}\t {subtext|/ \t这是一个副标题}`,
      textStyle: {
        // color:'#fafafa',
        rich: {
          text: {
            fontSize: 16,
            fontWeight: 600,
          },
          subtext: {
            fontSize: 12,
          },
        },
      },
    },
    series: yData2.map((item, index) => {
      return seriesCommonFn(item.name, item.data, colorList[index]);
    }),
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: xData,
        axisLine: { show: false },
        axisTick: { show: false },
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: true,
          lineStyle: {
            type: [5, 5],
            dashOffset: 0,
            shadowBlur: 0,
          },
        },
      },
    ],
  };
  onMounted(() => setOption(chartOptions));

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
  .hook-demo {
    width: 100%;
    height: 100%;
    padding: 24px;
  }
  .line-chart {
    width: 50%;
    height: 50%;
    border: 1px dashed lightseagreen;
    margin-bottom: 12px;
  }
  #chart-demo {
    width: 700px;
    height: 400px;
    border: 1px dashed red;
  }
</style>
