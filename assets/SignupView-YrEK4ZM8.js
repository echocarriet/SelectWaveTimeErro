import{_ as p,c as b,d as s,f,a as i,w as l,j as d,v as n,b as o,r as g,o as x}from"./index-QIBMWXqj.js";const h="/selectwaveCarrie/images/signupCover.png",_={data(){return{user:{email:"",password:"",confirmPassword:""}}},methods:{signup(){this.$http.post("https://select-wave-backend.onrender.com/api/auth/register",this.user).then(e=>{if(e.data.status){const{token:c}=e.data.result;document.cookie=`selectWaveToken=${c};`,this.$swal({title:`${e.data.message}`}),this.user.email="",this.user.password="",this.user.confirmPassword=""}}).catch(e=>{this.user.email="",this.user.password="",this.user.confirmPassword="",this.$swal({title:`${e.response.data.message}`})})}}},y={class:"max-w-screen-lg mx-auto py-7 md:py-20 px-3 min-h-full grid"},w={class:"flex justify-center items-center h-full"},v=s("div",{class:"basis-1/2 hidden md:block"},[s("img",{src:h,alt:"註冊頁面"})],-1),k={class:"basis-full md:basis-1/2"},V={class:"mb-4"},P=s("h2",{class:"text-2xl md:text-4xl font-bold mb-2 text-gray-1"},"註冊",-1),q=s("span",{class:"text-gray-1"},"已經有帳號嗎？",-1),C={class:"mb-4"},B=s("label",{for:"email",class:"block mb-2 text-base font-medium text-gray-1"},"Email",-1),N={class:"mb-4"},T=s("label",{for:"password",class:"block mb-2 text-base font-medium text-gray-1"},"密碼",-1),U={class:"mb-4"},$=s("label",{for:"passwordAgain",class:"block mb-2 text-base font-medium text-gray-1"},"再次輸入密碼",-1),j={class:"flex items-start mb-6"},A=s("div",{class:"flex items-center h-5"},[s("input",{id:"remember",type:"checkbox",value:"",class:"w-4 h-4 border border-gray-300 text-primary rounded bg-gray-50 focus:ring-3 focus:ring-primary-light",required:""})],-1),E={for:"remember",class:"ms-2 text-sm font-medium text-gray-900"},M=s("button",{type:"submit",class:"text-white bg-gray-1 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-light font-medium rounded-3xl text-base w-full sm:w-auto px-5 py-2.5 text-center"}," 註冊帳號 ",-1);function S(u,e,c,D,r,m){const a=g("router-link");return x(),b("div",y,[s("div",w,[v,s("div",k,[s("form",{class:"max-w-sm mx-auto",onSubmit:e[3]||(e[3]=f((...t)=>m.signup&&m.signup(...t),["prevent"]))},[s("div",V,[P,q,i(a,{class:"text-gray-2 hover:text-primary",to:"/login"},{default:l(()=>[o("前往登入")]),_:1})]),s("div",C,[B,d(s("input",{type:"email",id:"email",class:"bg-white border border-gray-3 text-sm rounded-3xl focus:ring-primary focus:border-primary block w-full px-3 py-4",placeholder:"請輸入信箱",required:"","onUpdate:modelValue":e[0]||(e[0]=t=>r.user.email=t)},null,512),[[n,r.user.email]])]),s("div",N,[T,d(s("input",{type:"password",id:"password",class:"bg-white border border-gray-3 text-sm rounded-3xl focus:ring-primary focus:border-primary block w-full px-3 py-4",placeholder:"請輸入密碼",required:"","onUpdate:modelValue":e[1]||(e[1]=t=>r.user.password=t)},null,512),[[n,r.user.password]])]),s("div",U,[$,d(s("input",{type:"password",id:"passwordAgain",class:"bg-white border border-gray-3 text-sm rounded-3xl focus:ring-primary focus:border-primary block w-full px-3 py-4",placeholder:"請再次輸入密碼",required:"","onUpdate:modelValue":e[2]||(e[2]=t=>r.user.confirmPassword=t)},null,512),[[n,r.user.confirmPassword]])]),s("div",j,[A,s("label",E,[o(" 同意 "),i(a,{class:"text-gray-2",target:"_blank",to:"/terms"},{default:l(()=>[o("使用規範")]),_:1}),o("、 "),i(a,{class:"text-gray-2",target:"_blank",to:"/privacy"},{default:l(()=>[o("隱私權政策")]),_:1})])]),M],32)])])])}const z=p(_,[["render",S]]);export{z as default};