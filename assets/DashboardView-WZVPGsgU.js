import{_,e as c,r,o as d,c as l,a as u,b as o,w as a,d as e,F as p}from"./index-F6TJ8Brw.js";var h={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_NAME:"jslong",BASE_URL:"/week7work",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:m}=h,f={methods:{checkUser(){const t=`${m}/v2/api/user/check`;c.post(t).then(n=>{console.log("成功",n.data.success)}).catch(()=>{this.$router.push("/login")})}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");c.defaults.headers.common.Authorization=t,this.checkUser()}},k=u("h2",null,"這是後台",-1);function $(t,n,v,x,E,V){const s=r("RouterLink"),i=r("router-view");return d(),l(p,null,[k,u("nav",null,[o(s,{to:"/admin/products"},{default:a(()=>[e("產品列表")]),_:1}),e(" | "),o(s,{to:"/admin/order"},{default:a(()=>[e("訂單列表")]),_:1}),e(" | "),o(s,{to:"/"},{default:a(()=>[e("回到前台")]),_:1}),e(" | "),o(s,{to:"/login"},{default:a(()=>[e("登出")]),_:1})]),o(i)],64)}const R=_(f,[["render",$]]);export{R as default};
