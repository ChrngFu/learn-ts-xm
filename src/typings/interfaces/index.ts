import { EChartsOption } from "echarts";

export interface EChartParams {
  id: string;
  options: EChartsOption;
  isInit?: boolean;
  isResize?: boolean;
}
