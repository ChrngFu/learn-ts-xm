import { post } from "@/api/axios";
import Multi from "@/api/interface";

// 登录
export const login = (data: Multi.ILoginReq) => post<Multi.ILoginRes>("/uas/v1/default/login", data);
// 查询站点日碳排放量
export const queryCarbonEmissionEveryDay = (data: Multi.ICarbonEmissionEveryDayReq) =>
  post<Multi.ICarbonEmissionEveryDayRes>("/uas/v1/admin/resourceAnalysis/queryCarbonEmissionEveryDay", data);
// 单个站点负荷预测
export const getOneSiteForecast = (data: Multi.ISingleSiteForecastReq) =>
  post<Multi.ISingleSiteForecastRes>("/uas/v1/admin/site/forecast/oneSite", data);
