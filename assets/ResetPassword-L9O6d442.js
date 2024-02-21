import{N as _,_ as f}from"./NavbarEl-pfEMtUYb.js";import{_ as x,c as b,a as o,d as s,w,F as h,r,o as g,n as i}from"./index-uMCFFkfm.js";const y={components:{Navbar:_,ComponentFooter:f},data(){return{user:{password:"",confirmPassword:""},showPassword:!1}},methods:{resetPassword(){}}},v={class:"pt-6 pb-12"},P={class:"flex calcHeight"},V={class:"basis-full px-3"},F={class:"flex justify-center items-center h-full"},k=s("div",{class:"mb-6"},[s("h2",{class:"text-2xl md:text-4xl font-bold mb-2 text-gray-1"},"重設密碼")],-1),C={class:"mb-4"},N=s("label",{for:"password",class:"block mb-2 text-base font-medium text-gray-1"},"密碼",-1),z=s("p",{class:"mt-2 text-sm text-gray-2"}," 請具備 1 個數字， 1 個大寫英文， 1 個小寫英文， 1 個特殊符號，且長度至少為 8 個字元",-1),B={class:"mb-4"},E=s("label",{for:"confirmPassword",class:"block mb-2 text-base font-medium text-gray-1"},"再次輸入密碼",-1),q={class:"flex items-start mb-6"},A={class:"flex items-center h-5"},M=s("label",{for:"showPassword",class:"ms-2 text-sm font-medium text-gray-1"},"顯示密碼",-1),S=s("button",{type:"submit",class:"text-white bg-gray-1 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-light font-medium rounded-3xl text-base w-full sm:w-auto px-5 py-2.5 text-center mb-6"}," 確認 ",-1);function U(Z,t,j,H,e,c){const m=r("Navbar"),n=r("VField"),l=r("ErrorMessage"),u=r("VForm"),p=r("ComponentFooter");return g(),b(h,null,[o(m),s("div",v,[s("div",P,[s("div",V,[s("div",F,[o(u,{class:"min-w-96 mx-auto",onSubmit:c.resetPassword},{default:w(({errors:d})=>[k,s("div",C,[N,o(n,{id:"password",name:"密碼",type:e.showPassword?"text":"password",class:i(["bg-white border border-gray-3 text-sm rounded-3xl focus:ring-primary focus:border-primary block w-full px-3 py-4",{"is-invalid":d.密碼}]),placeholder:"請輸入密碼",rules:"required|min:8|regex:(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\da-zA-Z])",modelValue:e.user.password,"onUpdate:modelValue":t[0]||(t[0]=a=>e.user.password=a)},null,8,["type","class","modelValue"]),z,o(l,{name:"密碼",class:"text-red-600 text-sm"})]),s("div",B,[E,o(n,{id:"confirmPassword",name:"再次輸入密碼",type:e.showPassword?"text":"password",class:i(["bg-white border border-gray-3 text-sm rounded-3xl focus:ring-primary focus:border-primary block w-full px-3 py-4",{"is-invalid":d.再次輸入密碼}]),placeholder:"請再次輸入密碼",rules:"required|confirmed:@密碼",modelValue:e.user.confirmPassword,"onUpdate:modelValue":t[1]||(t[1]=a=>e.user.confirmPassword=a)},null,8,["type","class","modelValue"]),o(l,{name:"再次輸入密碼",class:"text-red-600 text-sm"})]),s("div",q,[s("div",A,[s("input",{id:"showPassword",type:"checkbox",class:"w-4 h-4 border border-gray-300 text-primary rounded bg-gray-50 focus:ring-3 focus:ring-primary-light",onClick:t[2]||(t[2]=a=>e.showPassword=!e.showPassword)})]),M]),S]),_:1},8,["onSubmit"])])])])]),o(p)],64)}const G=x(y,[["render",U]]);export{G as default};
