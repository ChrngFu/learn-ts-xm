import{b as e,E as t,c as a,a as s,d as r}from"../element-plus/element-plus.6191f723.js";import{B as o}from"../vue-echarts/vue-echarts.882808d5.js";import{a as i}from"../axios/axios.a8ee11a1.js";import{i as l}from"../echarts/echarts.1f070262.js";import{f as n,G as u,n as d,u as p,C as c,r as m,e as v,c as f,a as y,S as g,Q as b,o as h,a4 as j,ab as w,ac as x}from"../@vue/@vue.b042f052.js";import{_ as L}from"../../index-9e4422b5.js";import"../dayjs/dayjs.ad630e9f.js";import"../@element-plus/@element-plus.8ad2767f.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../@vueuse/@vueuse.869b1add.js";import"../lodash-es/lodash-es.4ce650f4.js";import"../@popperjs/@popperjs.b78c3215.js";import"../resize-detector/resize-detector.dc7d4e8f.js";import"../tslib/tslib.a4e99503.js";import"../zrender/zrender.b10a920b.js";import"../autofit.js/autofit.js.7791d2f0.js";import"../vue-router/vue-router.9ce4f50f.js";const _=i.create({baseURL:"",timeout:5e3});_.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),_.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));const z=async(e,t)=>(await _.post(e,t,{headers:{"platform-type":"MULTI"}})).data;const C=e=>(w("data-v-406456e7"),e=e(),x(),e),D={id:"real-network-requests"},V={class:"query-bar"},E={class:"query-bar-item"},S=C((()=>y("div",null,"选择时间：",-1))),Y={class:"query-btn"},q=C((()=>y("br",null,null,-1))),A=L(c({__name:"RealNetworkRequests",setup(i){const c=m((new Date).format()),w=m(!1),x=m({tooltip:{trigger:"axis"},grid:{top:"10%",left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{axisLabel:{interval:0,formatter:e=>{const t=e.length;if(t>10){return e.substring(0,10)+"\n"+e.substring(10,t)}return e}},data:[]},yAxis:{},series:[{name:"站点日碳排放量",type:"bar",data:[]}]}),L=async()=>{w.value=!0;const e=await(t={time:c.value},z("/uas/v1/admin/resourceAnalysis/queryCarbonEmissionEveryDay",t));var t;if(0===e.code){const{carbonEmissions:t}=e.data;x.value.xAxis.data=t.map((e=>e.siteName)),x.value.series[0].data=t.map((e=>e.value))}w.value=!1};n(L);const _=m(!1),C=m(1),A=m(null),P=v();let R=null;const U=async()=>{const{getInstance:e}=function(e,t=null,a=!0,s=!0){let r=null;const o=()=>{const t=p(e);t&&p(t)&&(r=l(t))},i=()=>{null==r||r.resize()},c=()=>{s&&(e.value.style.transition="width 1s, height 1s"),new ResizeObserver((e=>{const{clientWidth:t,clientHeight:a}=e[0].target;0!==t&&0!==a&&i()})).observe(e.value)},m=()=>{r||o(),null==r||r.hideLoading()};return t?(window.addEventListener("resize",i),a&&c()):n((()=>{window.addEventListener("resize",i),a&&c()})),u((()=>{window.removeEventListener("resize",i)}),t),{setOption:e=>{d((()=>{(r||(o(),r))&&(r.setOption(e),m())}))},getInstance:()=>(r||o(),r),showLoading:()=>{r||o(),null==r||r.showLoading()},hideLoading:m}}(A,P);!R&&(R=e()),null==R||R.clear(),null==R||R.showLoading();const t={type:C.value,uuid:"d6dca475-b6e1-4481-afa1-58377ec3f51b"},a=await(s=t,z("/uas/v1/admin/site/forecast/oneSite",s));var s;if(0===a.code){const{getSiteDownCurve:e,getSiteSupplyEnergyCurve:t,getSiteTypeCurve:s,getSiteUpCurve:r}=a.data.SiteLoadForecastDayResponse,o={tooltip:{trigger:"axis"},grid:{top:"10%",left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{data:e.map((e=>e.time))},yAxis:{},dataZoom:[{type:"slider",start:0,end:30,showDetail:!1}],series:[{name:"基础负荷",type:"line",data:s.map((e=>e.forecastPower))},{name:"可上调负荷",type:"line",data:r.map((e=>e.forecastPower))},{name:"可下调负荷",type:"line",data:e.map((e=>e.forecastPower))},{name:"最大供给能力",type:"line",data:t.map((e=>e.forecastPower))}]};null==R||R.setOption(o)}null==R||R.hideLoading()};return(i,l)=>{const n=e,u=t,d=r,m=a,v=s;return h(),f("div",D,[y("ul",V,[y("li",E,[S,g(n,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=e=>c.value=e),type:"date",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",placeholder:"选择日期时间"},null,8,["modelValue"])]),y("div",Y,[g(u,{type:"primary",onClick:L},{default:b((()=>[j("查询")])),_:1})])]),g(p(o),{class:"daily-carbon-emissions-chart",loading:w.value,option:x.value,autoresize:""},null,8,["loading","option"]),q,g(u,{type:"primary",onClick:l[1]||(l[1]=e=>_.value=!0)},{default:b((()=>[j("查看详情")])),_:1}),y("div",null,[g(m,{modelValue:C.value,"onUpdate:modelValue":l[2]||(l[2]=e=>C.value=e)},{default:b((()=>[g(d,{label:1},{default:b((()=>[j("电")])),_:1}),g(d,{label:2},{default:b((()=>[j("热")])),_:1}),g(d,{label:3},{default:b((()=>[j("冷")])),_:1})])),_:1},8,["modelValue"])]),g(v,{title:"查看详情",modelValue:_.value,"onUpdate:modelValue":l[3]||(l[3]=e=>_.value=e),onOpened:U,width:"80%"},{default:b((()=>[y("div",{ref_key:"dialogChartRef",ref:A,class:"dialog-chart"},null,512)])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-406456e7"]]);export{A as default};
