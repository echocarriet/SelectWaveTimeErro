import{_ as r,h as c,i,o as n,r as h}from"./index-uMCFFkfm.js";const u={data(){return{status:!1}},created(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)carrieHexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e,this.$http.post("https://vue3-course-api.hexschool.io/v2/api/user/check").then(t=>{console.log(t),t.data.success?this.status=!0:(this.status=!1,this.$swal({title:"登入失敗，請重新登入"}),this.$router.push("/loginhex"))}).catch(t=>{console.log(t),this.$router.push("/loginhex"),this.$swal({title:`${t.response.data.message}`})})}};function p(e,s,t,l,o,$){const a=h("router-view");return o.status?(n(),c(a,{key:0})):i("",!0)}const _=r(u,[["render",p]]);export{_ as default};