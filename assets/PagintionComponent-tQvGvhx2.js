import{_ as c,o as n,c as i,a,p as o,F as r,h as d,t as g}from"./index-hNtX3aDT.js";const _={props:["pages","getProducts"],methods:{updatePage(l){this.$emit("emitPages",l)}}},u={"aria-label":"Page navigation example"},p={class:"pagination"},m=a("span",{"aria-hidden":"true"},"«",-1),h=[m],k=["onClick"],P=a("span",{"aria-hidden":"true"},"»",-1),v=[P];function x(l,s,e,C,b,f){return n(),i("nav",u,[a("ul",p,[a("li",{class:o(["page-item",{disabled:!e.pages.has_pre}])},[a("a",{class:"page-link","aria-label":"Previous",onClick:s[0]||(s[0]=t=>e.getProducts(e.pages.current_page-1))},h)],2),(n(!0),i(r,null,d(e.pages.total_pages,t=>(n(),i("li",{class:o(["page-item",{active:t===e.pages.current_page}]),key:t+123},[a("a",{class:"page-link",onClick:B=>e.getProducts(t)},g(t),9,k)],2))),128)),a("li",{class:o(["page-item",{disabled:!e.pages.has_next}])},[a("a",{class:"page-link","aria-label":"Next",onClick:s[1]||(s[1]=t=>e.getProducts(e.pages.current_page+1))},v)],2)])])}const F=c(_,[["render",x]]);export{F as P};
