export namespace Multi {
  // 登录
  export interface ILoginReq {
    captcha: string;
    password: string;
    userType: 1 | 2 | 3;
    username: string;
  }
  export interface ILoginRes {}

  // 查询站点日碳排放量
  export interface ICarbonEmissionEveryDayReq {
    time: string;
  }
  export interface ICarbonEmission {
    siteName: string;
    value: number;
  }
  export interface ICarbonEmissionEveryDayRes {
    carbonEmissions: ICarbonEmission[];
  }

  // 单个站点负荷预测
  export interface ISingleSiteForecastReq {
    type: number;
    uuid: "d6dca475-b6e1-4481-afa1-58377ec3f51b";
  }
  export interface ISiteCurve {
    time: string;
    forecastPower: number;
  }
  export interface ISingleSiteForecastRes {
    SiteLoadForecastDayResponse: {
      getSiteDownCurve: ISiteCurve[];
      getSiteSupplyEnergyCurve: ISiteCurve[];
      getSiteTypeCurve: ISiteCurve[];
      getSiteUpCurve: ISiteCurve[];
    };
  }
}
