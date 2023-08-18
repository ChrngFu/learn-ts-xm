import { EChartsOption } from "echarts";

export interface EChartParams {
  id: string;
  options: EChartsOption;
  isInit?: boolean;
  isResize?: boolean;
  loading?: boolean;
}

export interface LoadConfig {
  type?: string;
  opts?: {
    text: string;
    color: string;
    textColor: string;
    maskColor: string;
    zlevel: number;

    // 字体大小。从 `v4.8.0` 开始支持。
    fontSize: number;
    // 是否显示旋转动画（spinner）。从 `v4.8.0` 开始支持。
    showSpinner: boolean;
    // 旋转动画（spinner）的半径。从 `v4.8.0` 开始支持。
    spinnerRadius: number;
    // 旋转动画（spinner）的线宽。从 `v4.8.0` 开始支持。
    lineWidth: number;
    // 字体粗细。从 `v5.0.1` 开始支持。
    fontWeight: string;
    // 字体风格。从 `v5.0.1` 开始支持。
    fontStyle: string;
    // 字体系列。从 `v5.0.1` 开始支持。
    fontFamily: string;
  };
}
