import{d as c,an as i,z as n,W as f,aq as d,ar as x,as as L}from"./BOJdJLsb.js";const a=d({...x,componentName:"NuxtLinkLocale"}),m=c({name:"NuxtLinkLocale",props:{...a.props,locale:{type:String,default:void 0,required:!1}},setup(t,{slots:o}){const l=i(),r=n(()=>{const e=t.to??t.href;return e!=null?l(e,t.locale):e}),u=n(()=>{if(t.external||t.target&&t.target!=="_self")return!0;const e=t.to??t.href;return typeof e=="object"?!1:e===""||e==null||L(e,{acceptRelative:!0})}),s=()=>{const e={...t};return u.value||(e.to=r.value),delete e.href,delete e.locale,e};return()=>f(a,s(),o.default)}});export{m as _};
