import{C as e,r as a,f as s,c as t,a as l,M as r,a3 as i,V as o,o as u,O as v,U as n}from"../@vue/@vue.b042f052.js";import{_ as c}from"../../index-05880b8f.js";import"../autofit.js/autofit.js.7791d2f0.js";import"../vue-router/vue-router.4e942391.js";import"../echarts/echarts.1f070262.js";import"../tslib/tslib.a4e99503.js";import"../zrender/zrender.b10a920b.js";const m=c(e({__name:"VirtualList",setup(e){const c=a(),m=a(),f=new Array(1e5).fill(0).map(((e,a)=>a+1)),p=a(0),d=a(0);p.value=45*f.length;const j=a(),h=()=>{let e,a,s;s=c.value.scrollTop,e=Math.floor(s/45),a=Math.ceil(c.value.clientHeight/45)+2,j.value=f.slice(e,e+a),d.value=45*e,m.value.style.transform=`translateY(${d.value}px)`};return s((()=>{h()})),(e,a)=>(u(),t("div",{id:"virtual-list",ref_key:"viewDom",ref:c,onScroll:h},[l("div",{class:"list-container",ref_key:"listDom",ref:m,style:o({height:p.value-d.value+"px"})},[(u(!0),t(r,null,i(j.value,(e=>(u(),t("div",{class:v(["list-item",e%2==0?"bg01":"bg02"]),key:e},n(e),3)))),128))],4)],544))}}),[["__scopeId","data-v-e5d0a6ef"]]);export{m as default};