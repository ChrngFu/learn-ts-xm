<template>
  <div id="real-network-requests">
    <ul class="query-bar">
      <li class="query-bar-item">
        <div>选择时间：</div>
        <el-date-picker
          v-model="time"
          type="date"
          format="YYYY-MM-DD"
          value-format="YYYY-MM-DD"
          placeholder="选择日期时间"
        ></el-date-picker>
      </li>
      <div class="query-btn">
        <el-button type="primary" @click="handleQuery">查询</el-button>
      </div>
    </ul>
    <v-chart class="daily-carbon-emissions-chart" :loading="isLoading" :option="option" autoresize />
    <br />
    <el-button type="primary" @click="openDialog">查看详情</el-button>
    <div>
      <el-radio-group v-model="siteType">
        <el-radio-button label="1">电</el-radio-button>
        <el-radio-button label="3">热</el-radio-button>
        <el-radio-button label="3">冷</el-radio-button>
      </el-radio-group>
    </div>
    <el-dialog title="查看详情" v-model="showDetail" width="80%">
      <v-chart class="dialog-chart" autoresize :option="dialogChartOption"></v-chart>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import VChart from "vue-echarts";
  import Multi from "@/api/interface";
  import { queryCarbonEmissionEveryDay, getOneSiteForecast } from "@/api/modules/multi";
  const time = ref(new Date().format());
  const isLoading = ref(false);
  const option = ref({
    tooltip: {
      trigger: "axis",
    },
    grid: {
      top: "10%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      axisLabel: {
        interval: 0,
        formatter: (name: string) => {
          const length = name.length;
          if (length > 10) {
            const start = name.substring(0, 10);
            const end = name.substring(10, length);
            return start + "\n" + end;
          } else {
            return name;
          }
        },
      },
      data: [] as string[],
      // data: curve.map(r => r.siteName),
    },
    yAxis: {},
    series: [
      {
        name: "站点日碳排放量",
        type: "bar",
        data: [] as number[],
        // data: curve.map(r => r.value),
      },
    ],
  });

  const handleQuery = async () => {
    isLoading.value = true;
    const res = await queryCarbonEmissionEveryDay({ time: time.value });
    if (res.code === 0) {
      const { carbonEmissions: curveData } = res.data;
      option.value.xAxis["data"] = curveData.map(r => r.siteName);
      option.value.series[0].data = curveData.map(r => r.value);
    }
    isLoading.value = false;
  };
  onMounted(handleQuery);
  const showDetail = ref(false);
  const siteType = ref(1);
  const dialogChartOption = ref({
    tooltip: {
      trigger: "axis",
    },
    grid: {
      top: "10%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      data: [] as string[],
    },
    yAxis: {},
    dataZoom: {
      start: 0,
      end: 30,
    },
    series: [] as echarts.SeriesOption[],
  });
  const openDialog = async () => {
    showDetail.value = true;
    const params: Multi.ISingleSiteForecastReq = {
      type: siteType.value,
      uuid: "d6dca475-b6e1-4481-afa1-58377ec3f51b",
    };
    const res = await getOneSiteForecast(params);
    if (res.code === 0) {
      const { getSiteDownCurve, getSiteSupplyEnergyCurve, getSiteTypeCurve, getSiteUpCurve } =
        res.data.SiteLoadForecastDayResponse;
      dialogChartOption.value.xAxis.data = getSiteDownCurve.map(r => r.time);
      dialogChartOption.value.series.push({
        name: "基础负荷",
        type: "line",
        data: getSiteTypeCurve.map(r => r.forecastPower),
      });
      dialogChartOption.value.series.push({
        name: "可上调负荷",
        type: "line",
        data: getSiteUpCurve.map(r => r.forecastPower),
      });
      dialogChartOption.value.series.push({
        name: "可下调负荷",
        type: "line",
        data: getSiteDownCurve.map(r => r.forecastPower),
      });
      dialogChartOption.value.series.push({
        name: "最大供给能力",
        type: "line",
        data: getSiteSupplyEnergyCurve.map(r => r.forecastPower),
      });
    }
  };
</script>

<style scoped lang="scss">
  #real-network-requests {
    width: 100%;
    height: 100%;
    font-size: 16px;
    background: url("@/assets/img/mihuan26.jpg") no-repeat center / 100% 100%;
    ul,
    li {
      box-sizing: border-box;
    }
    .query-bar {
      width: 100%;
      height: 40px;
      padding: 0 12px;
      @include flex();
      position: relative;

      &-item {
        @include flex();
      }

      .query-btn {
        position: absolute;
        right: 12px;
      }
    }
    .daily-carbon-emissions-chart {
      width: 600px;
      height: 400px;
      margin: 0 auto;
      border: 1px dashed red;
      box-sizing: border-box;
    }
    .dialog-chart {
      width: 100%;
      height: 600px;
      margin: 0 auto;
      border: 1px dashed orange;
      box-sizing: border-box;
    }
  }
</style>
