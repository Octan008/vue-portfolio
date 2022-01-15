(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);h&&h(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4106a83c"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"5e4294cd"}[t]+".css",i=l.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],u=c.getAttribute("data-href");if(u===a||u===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],h.parentNode.removeChild(h),n(o)},h.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}i[t]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var h=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Header",{attrs:{views:t.views,snss:t.snss}}),n("v-content",[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("router-view",[n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.views,(function(t){return n("v-tab-item",{key:t})})),1)],1)],1)],1),n("v-footer",{attrs:{app:"",dark:"",color:"#00331b"}},[n("v-flex",{attrs:{"text-center":""}},[n("h4",{staticClass:"font-weight-light"},[t._v("© 2021 - Hatsuki Takahashi")])])],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",color:"#00331b",dark:"","elevate-on-scroll":""},scopedSlots:t._u([{key:"extension",fn:function(){return[a("v-tabs",{attrs:{"align-with-title":"",glow:"false"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("v-tabs-slider"),t._l(t.views,(function(e){return a("v-tab",{key:e.title,attrs:{to:e.path}},[t._v(" "+t._s(e.title)+" ")])}))],2)]},proxy:!0}])},[a("v-toolbar-title",[a("v-avatar",{staticClass:"mr-2"},[a("v-img",{attrs:{src:n("cf05")}})],1),t._v(" Hatsuki Takahashi ")],1),a("v-spacer"),t._l(t.snss,(function(t){return a("v-btn",{key:t.title,attrs:{icon:"",href:t.path,target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{attrs:{icon:["fab",t.icon],size:"2x"}})],1)}))],2)},s=[],l={props:{views:Array,snss:Array},data:function(){return{active:"tabA",position:{tabA:null,tabB:null}}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.position[this.active]=window.scrollY}},watch:{active:function(){var t=this.position[this.active]||0;setTimeout((function(){window.scroll(0,t)}),200)}}},c=l,u=n("0c7c"),p=n("6544"),h=n.n(p),f=n("40dc"),v=n("8212"),d=n("8336"),b=n("adda"),g=n("2fa4"),m=n("71a3"),w=n("fe57"),_=n("9a96"),y=n("2a7f"),C=Object(u["a"])(c,o,s,!1,null,null,null),x=C.exports;h()(C,{VAppBar:f["a"],VAvatar:v["a"],VBtn:d["a"],VImg:b["a"],VSpacer:g["a"],VTab:m["a"],VTabs:w["a"],VTabsSlider:_["a"],VToolbarTitle:y["a"]});var A={name:"App",components:{Header:x},data:function(){return{views:[{title:"About",icon:"dashboard",path:"/",external:!1},{title:"DevelopMentWorks",icon:"account_circle",path:"/works",external:!1}],snss:[{title:"github",icon:"github",path:"https://github.com/octan008"}]}}},k=A,j=n("7496"),V=n("a75b"),P=n("0789"),S=n("0e8f"),T=n("553a"),E=n("c671"),O=n("aac8"),M=Object(u["a"])(k,r,i,!1,null,null,null),B=M.exports;h()(M,{VApp:j["a"],VContent:V["a"],VFadeTransition:P["a"],VFlex:S["a"],VFooter:T["a"],VTabItem:E["a"],VTabsItems:O["a"]});n("d3b7"),n("3ca3"),n("ddb0");var L=n("8c4f"),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{staticClass:"mt-5"},[n("h2",{staticClass:"display-1 font-weight-medium"},[t._v("Profile")]),n("v-container",[n("p",{staticClass:"font-weight-light"},[t._v(" 東京大学大学院 総合文化研究科の学生。コンピュータグラフィックスを研究しており、演劇サークルでプロジェクションマッピングの制作や、メディアアート制作も行っている。 "),n("code",[t._v("octan8888(at)gmail.com")])])])],1),n("v-container",[n("h2",{staticClass:"display-1 font-weight-medium"},[t._v("Skills")]),n("v-container",[n("v-layout",{attrs:{column:""}},[n("v-layout",{staticClass:"title font-weight-light",attrs:{row:"","align-baseline":""}},[n("div",{staticClass:"title mx-3 font-weight-light"},[t._v("C++")]),n("div",{staticClass:"subtitle-2 ml-5 font-weight-light"},[t._v(" 研究にて使用 ")])]),n("v-layout",{staticClass:"title font-weight-light",attrs:{row:"","align-baseline":""}},[n("div",{staticClass:"title mx-3 font-weight-light"},[t._v("Unity C#")]),n("div",{staticClass:"subtitle-2 ml-5 font-weight-light"},[t._v(" インターンシップ、個人開発で使用 ")])]),n("v-layout",{staticClass:"title font-weight-light",attrs:{row:"","align-baseline":""}},[n("div",{staticClass:"title mx-3 font-weight-light"},[t._v("Python")])]),n("v-layout",{staticClass:"title font-weight-light",attrs:{row:"","align-baseline":""}},[n("div",{staticClass:"title mx-3 font-weight-light"},[t._v("PHP")])]),n("v-layout",{staticClass:"title font-weight-light",attrs:{row:"","align-baseline":""}},[n("div",{staticClass:"title mx-3 font-weight-light"},[t._v("HTML/CSS, Javascript, Vue.js")])])],1)],1)],1),n("v-container",[n("h2",{staticClass:"display-1 font-weight-medium"},[t._v("Education")]),n("v-container",[n("v-layout",{attrs:{"align-left":""}},[t._v("Apr. 2021 - Current")]),n("p",{staticClass:"font-weight-light"},[t._v(" 東京大学 "),n("br"),t._v("大学院 総合文化研究科 広域科学専攻 修士課程 ( "),n("a",{attrs:{href:"https://graphics.c.u-tokyo.ac.jp/hp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("金井崇 研究室")]),t._v(") ")]),n("v-layout",{attrs:{"align-left":""}},[t._v("Apr. 2018 - Mar. 2020")]),n("p",{staticClass:"font-weight-light"},[t._v(" 東京大学 "),n("br"),t._v("教養学部 学際科学科 総合情報学コース ")]),n("v-layout",{attrs:{"align-left":""}},[t._v("Apr. 2016 - Mar. 2018")]),n("p",{staticClass:"font-weight-light"},[t._v(" 東京大学 "),n("br"),t._v("文科3類 ")])],1)],1),n("v-container",[n("h2",{staticClass:"display-1 font-weight-medium"},[t._v("Internship")]),n("v-container",[n("v-layout",{attrs:{"align-left":""}},[t._v("Oct. 2021 - Current")]),n("p",{staticClass:"font-weight-light"},[n("a",{attrs:{href:"https://ambr.co.jp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ambr")]),n("br"),t._v("Part-time job as BizDev ")])],1),n("v-container",[n("v-layout",{attrs:{"align-left":""}},[t._v("Jul. 2021 - Aug. 2021")]),n("p",{staticClass:"font-weight-light"},[n("a",{attrs:{href:"https://www.team-lab.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("teamLab")]),n("br"),t._v("Unity Interactive Engineer ")])],1),n("v-container",[n("v-layout",{attrs:{"align-left":""}},[t._v("Sep. 2021")]),n("p",{staticClass:"font-weight-light"},[n("a",{attrs:{href:"https://www.ntt-east.co.jp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NTT 東日本")]),n("br"),t._v("DX/Security Engineer ")])],1)],1),n("v-container",[n("h2",{staticClass:"display-1 font-weight-medium"},[t._v("Publication/Awards")]),n("v-container",[n("v-container",{staticClass:"title font-weight-medium"},[t._v(" Full Paper "),n("p",{staticClass:"subtitle-1 font-weight-light mt-2 mb-auto"},[n("b",{staticClass:"font-weight-bold"},[t._v("髙橋 初来")]),t._v(", 金井 崇: Projective Dynamics におけるスモールステップ法の計算量削減, 画像電子学誌 第50巻 第4号 ")])]),n("v-container",{staticClass:"title font-weight-medium"},[t._v(" Digital Art Award "),n("p",{staticClass:"subtitle-1 font-weight-light mt-2 mb-auto"},[n("b",{staticClass:"font-weight-bold"},[n("a",{attrs:{href:"https://octan008.github.io/portrait_a/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 肖像A ")])]),t._v(" : "),n("a",{attrs:{href:"https://campusgenius.jp/news/cgc27/632/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 第27回学生CGコンテスト アート部門 ノミネート")])])])],1)],1)],1)},N=[],D={components:{},data:function(){return{items:[{text:"Computer Vision × CG",style:"display-3 font-weight-thin mb-3 white--text",src:n("86a7")},{text:"Computer Vision × CG",style:"display-3 font-weight-thin mb-3   white--text",src:n("ea52")},{text:"Computer Vision × CG",style:"display-3 font-weight-thin mb-3  white--text",src:n("e3c0")},{text:"Computer Vision × CG",style:"display-3 font-weight-thin mb-3 white--text",src:n("96ee"),prg:"dd"}]}}},H=D,I=n("a523"),G=n("a722"),R=Object(u["a"])(H,F,N,!1,null,null,null),J=R.exports;h()(R,{VContainer:I["a"],VLayout:G["a"]}),a["a"].use(L["a"]);var W=new L["a"]({routes:[{path:"/",name:"About",component:J},{path:"/works",name:"Works",component:function(){return n.e("about").then(n.bind(null,"1822"))}},{path:"/projectionmapping",name:"ProjectionMapping",component:function(){return n.e("about").then(n.bind(null,"3c50"))}},{path:"/Vtuber",name:"Vtuber",component:function(){return n.e("about").then(n.bind(null,"aa4b"))}},{path:"/Portrait_A",name:"Portrait_A",component:function(){return n.e("about").then(n.bind(null,"eb5e"))}},{path:"/PerspectiveFish",name:"PerspectiveFish",component:function(){return n.e("about").then(n.bind(null,"6cdc"))}},{path:"/BoidsMeshAnimator",name:"BoidsMeshAnimator",component:function(){return n.e("about").then(n.bind(null,"c0bb"))}},{path:"/ARFish",name:"ARFish",component:function(){return n.e("about").then(n.bind(null,"0ae8"))}},{path:"/ARNengajo",name:"ARNengajo",component:function(){return n.e("about").then(n.bind(null,"d5ca"))}},{path:"/WifiMonitor",name:"WifiMonitor",component:function(){return n.e("about").then(n.bind(null,"7fcd"))}},{path:"/SlackAttend",name:"SlackAttend",component:function(){return n.e("about").then(n.bind(null,"ac39"))}},{path:"/ChatAgent",name:"ChatAgent",component:function(){return n.e("about").then(n.bind(null,"1c06"))}}]}),$=n("f309"),U=n("fcf4"),q=n("ecee"),z=n("ad3d"),K=n("f2d1");a["a"].component("font-awesome-icon",z["a"]),q["c"].add(K["b"]),q["c"].add(K["a"]),q["c"].add(K["c"]),a["a"].use($["a"]);var X=new $["a"]({theme:{primary:U["a"].indigo.base,secondary:U["a"].purple.base,accent:U["a"].cyan.base,error:U["a"].red.base,warning:U["a"].orange.base,info:U["a"].lightBlue.base,success:U["a"].green.base},icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,new a["a"]({router:W,vuetify:X,render:function(t){return t(B)}}).$mount("#app")},"86a7":function(t,e,n){t.exports=n.p+"img/path.8841c9db.jpg"},"96ee":function(t,e,n){t.exports=n.p+"img/modeling.7e62b9ba.png"},cf05:function(t,e,n){t.exports=n.p+"img/logo.017afab9.png"},e3c0:function(t,e,n){t.exports=n.p+"img/ARcity.3f9795ac.png"},ea52:function(t,e,n){t.exports=n.p+"img/vtuber.806a1c33.jpg"}});
//# sourceMappingURL=app.bd435c25.js.map