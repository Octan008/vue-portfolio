(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0ac3":function(t,e,i){t.exports=i.p+"img/persfish1.a6564e2d.png"},"0e73":function(t,e,i){t.exports=i.p+"img/sign.b0fc9f47.jpg"},1822:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{fluid:"","no-gutters":""}},[t._l(t.items_int,(function(e){return n("v-flex",{key:e.title,attrs:{xs12:"",sm6:"",md3:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var r=a.hover;return n("v-card",{attrs:{tile:"",to:e.link}},[n("v-img",{attrs:{src:i("47e3")("./"+e.image),"aspect-ratio":"1.0",eager:""}},[n("div",{staticClass:"fill-height",class:r||t.$vuetify.breakpoint.xs?"bottom-gradient":"none"},[r||t.$vuetify.breakpoint.xs?n("v-card-title",{staticClass:"white--text headline font-weight-light"},[t._v(t._s(e.title))]):t._e(),r||t.$vuetify.breakpoint.xs?n("v-card-text",{staticClass:"white--text caption font-weight-light"},[t._v(t._s(e.desc))]):t._e()],1)])],1)}}],null,!0)})],1)})),t._l(t.items_ext,(function(e){return n("v-flex",{key:e.title,attrs:{xs12:"",sm6:"",md3:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var r=a.hover;return n("v-card",{attrs:{tile:"",href:e.link,target:"_blank",rel:"noopener noreferrer"}},[n("v-img",{attrs:{src:i("47e3")("./"+e.image),"aspect-ratio":"1.0",eager:""}},[n("div",{staticClass:"fill-height",class:r||t.$vuetify.breakpoint.xs?"bottom-gradient":"none"},[r||t.$vuetify.breakpoint.xs?n("v-card-title",{staticClass:"white--text headline font-weight-light"},[t._v(t._s(e.title))]):t._e(),r||t.$vuetify.breakpoint.xs?n("v-card-text",{staticClass:"white--text caption font-weight-light"},[t._v(t._s(e.desc))]):t._e()],1)])],1)}}],null,!0)})],1)}))],2)},a=[],r=(i("caad"),i("2532"),{data:function(){return{items_int:[{title:"肖像A",image:"portrait_thumbnail_2.png",desc:"東京大学制作展2021 Extra 『0 PUNK』にて出展したメディアアート作品。Unityで制作したWebアプリケーションとなっている。(リンク先で鑑賞可)",link:"Portrait_A"},{title:"PerspectiveFish",image:"persfish1.png",desc:"teamLab サマーインターンにて開発した Unityアプリケーション。インタラクティブなプロジェクションマッピングのための作品。",link:"PerspectiveFish"},{title:"Sign",image:"sign.jpg",desc:"teamLab サマーインターンにて開発した Unityアプリケーション。インタラクティブなプロジェクションマッピングのための作品。",link:"PerspectiveFish"},{title:"BoidsMeshAnimator",image:"boids.png",desc:"個人開発。Boidsでコントロールする粒子でアニメートされたメッシュを模倣するシステム。",link:"BoidsMeshAnimator"},{title:"ARFish",image:"boids.png",desc:"魚の自律遊泳プログラミングをARアプリケーションとして作成した。",link:"BoidsMeshAnimator"},{title:"WifiMonitor",image:"wifi.png",desc:"大学のアルバイトで制作した Webページ。学内の Wifi アクセスポイントの接続状況を地図上に表示し、Cookieを用いてよく使う地図をストックできる。",link:"WifiMonitor"},{title:"Slack勤怠システム",image:"attend.png",desc:"受託開発の従事先で開発した, Slackコマンドで打刻する勤怠システムとその管理webサイト。Slack認証でアカウントに紐づいたセッション管理ができる。",link:"WifiMonitor"}],items_ext:[{title:"ProjectionMappings",image:"pj.jpg",desc:"演劇サークルで制作してきた20作品のプロジェクションマッピング演出。",link:"https://www.instagram.com/octan008_008/"}]}},methods:{isExternal:function(t){return t.includes("http")||t.includes("https")},isInternal:function(t){return!t.includes("http")&&!t.includes("https")}}}),o=r,s=(i("f3f0"),i("2877")),l=i("6544"),c=i.n(l),u=(i("0481"),i("4069"),i("a9e3"),i("5530")),d=(i("615b"),i("10d2")),h=i("2b0e"),f=(i("c7cd"),i("ade3")),p=(i("6ece"),i("0789")),m=i("a9ad"),g=i("fe6c"),v=i("a452"),y=i("7560"),b=i("80d2"),w=i("58df"),_=Object(w["a"])(m["a"],Object(g["b"])(["absolute","fixed","top","bottom"]),v["a"],y["a"]),x=_.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(b["d"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(b["d"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(f["a"])(t,this.$vuetify.rtl?"right":"left",Object(b["d"])(this.normalizedValue,"%")),Object(f["a"])(t,"width",Object(b["d"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(u["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?p["a"]:p["b"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(b["d"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(b["h"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(f["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(b["d"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),k=x,C=h["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(k,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),j=i("1c87"),D=Object(w["a"])(C,j["a"],d["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(u["a"])(Object(u["a"])({"v-card":!0},j["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},d["a"].options.computed.classes.call(this))},styles:function(){var t=Object(u["a"])({},d["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=C.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}}),O=(Object(b["e"])("v-card__actions"),Object(b["e"])("v-card__subtitle"),Object(b["e"])("v-card__text")),A=Object(b["e"])("v-card__title"),$=i("0e8f"),B=h["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},n)}}}),V=i("f2e7"),S=i("d9bd"),E=Object(w["a"])(B,V["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(S["c"])("v-hover should only contain a single element",this),t)):(Object(S["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}}),z=i("adda"),P=(i("99af"),i("4160"),i("13d5"),i("4ec9"),i("b64b"),i("d3b7"),i("ac1f"),i("3ca3"),i("5319"),i("159b"),i("ddb0"),i("4b85"),i("d9f7")),L=["sm","md","lg","xl"],I=["start","end","center"];function R(t,e){return L.reduce((function(i,n){return i[t+Object(b["n"])(n)]=e(),i}),{})}var F=function(t){return[].concat(I,["baseline","stretch"]).includes(t)},T=R("align",(function(){return{type:String,default:null,validator:F}})),M=function(t){return[].concat(I,["space-between","space-around"]).includes(t)},N=R("justify",(function(){return{type:String,default:null,validator:M}})),U=function(t){return[].concat(I,["space-between","space-around","stretch"]).includes(t)},W=R("alignContent",(function(){return{type:String,default:null,validator:U}})),G={align:Object.keys(T),justify:Object.keys(N),alignContent:Object.keys(W)},K={align:"align",justify:"justify",alignContent:"align-content"};function H(t,e,i){var n=K[t];if(null!=i){if(e){var a=e.replace(t,"");n+="-".concat(a)}return n+="-".concat(i),n.toLowerCase()}}var q=new Map,Q=h["a"].extend({name:"v-row",functional:!0,props:Object(u["a"])(Object(u["a"])(Object(u["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:F}},T),{},{justify:{type:String,default:null,validator:M}},N),{},{alignContent:{type:String,default:null,validator:U}},W),render:function(t,e){var i=e.props,n=e.data,a=e.children,r="";for(var o in i)r+=String(i[o]);var s=q.get(r);return s||function(){var t,e;for(e in s=[],G)G[e].forEach((function(t){var n=i[t],a=H(e,t,n);a&&s.push(a)}));s.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},Object(f["a"])(t,"align-".concat(i.align),i.align),Object(f["a"])(t,"justify-".concat(i.justify),i.justify),Object(f["a"])(t,"align-content-".concat(i.alignContent),i.alignContent),t)),q.set(r,s)}(),t(i.tag,Object(P["a"])(n,{staticClass:"row",class:s}),a)}}),Y=Object(s["a"])(o,n,a,!1,null,"83e9c4d0",null);e["default"]=Y.exports;c()(Y,{VCard:D,VCardText:O,VCardTitle:A,VFlex:$["a"],VHover:E,VImg:z["a"],VRow:Q})},"1e8d":function(t,e){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},"332e":function(t,e,i){t.exports=i.p+"img/attend.8bdb0bae.png"},"34d1":function(t,e,i){t.exports=i.p+"img/lenticular.547a3fac.jpg"},"3d24":function(t,e,i){t.exports=i.p+"img/pj.ff590ae4.jpg"},"3f9a":function(t,e,i){t.exports=i.p+"img/wifi.e8c77da0.png"},"46e8":function(t,e,i){t.exports=i.p+"img/vtuber.806a1c33.jpg"},"47e3":function(t,e,i){var n={"./ARcity.jpg":"bf73","./attend.png":"332e","./boids.png":"b858","./elamorph.PNG":"1e8d","./lenticular.jpg":"34d1","./modeling.jpg":"c71f","./pBRDF.png":"4dfe","./path.jpg":"c62c","./persfish1.png":"0ac3","./pj.jpg":"3d24","./portrait_thumbnail_2.png":"cb53","./prism.png":"c0b2","./sakura.jpg":"db7f","./sign.jpg":"0e73","./sponza.jpg":"a229","./vtuber.jpg":"46e8","./wifi.png":"3f9a"};function a(t){var e=r(t);return i(e)}function r(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id="47e3"},"4dfe":function(t,e,i){t.exports=i.p+"img/pBRDF.bb809136.png"},"4ec9":function(t,e,i){"use strict";var n=i("6d61"),a=i("6566");t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},"560c":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[i("h1",{staticClass:"Display-3 font-weight-medium my-3 text-center"},[t._v("Cherry Blossom Viewing AR")]),i("h4",{staticClass:"font-weight-light mb-3"},[t._v("Make the cherry blossom viewing even more gorgeous")]),i("iframe",{attrs:{width:t.width,height:t.height,src:"https://www.youtube-nocookie.com/embed/ZIFrOy138ys",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),i("h1",{staticClass:"Display-3 font-weight-medium mt-3"},[t._v("What I Did")]),i("h4",{staticClass:"font-weight-light"},[t._v("AR Programming (Unity, C#, Shader, ARKit) ")])])],1)},a=[],r={components:{},computed:{width:function(){return this.$vuetify.breakpoint.smAndDown?350:560},height:function(){return this.$vuetify.breakpoint.smAndDown?197:315}}},o=r,s=i("2877"),l=i("6544"),c=i.n(l),u=i("a523"),d=i("a722"),h=Object(s["a"])(o,n,a,!1,null,null,null);e["default"]=h.exports;c()(h,{VContainer:u["a"],VLayout:d["a"]})},"615b":function(t,e,i){},6566:function(t,e,i){"use strict";var n=i("9bf2").f,a=i("7c73"),r=i("e2cc"),o=i("0366"),s=i("19aa"),l=i("2266"),c=i("7dd0"),u=i("2626"),d=i("83ab"),h=i("f183").fastKey,f=i("69f3"),p=f.set,m=f.getterFor;t.exports={getConstructor:function(t,e,i,c){var u=t((function(t,n){s(t,u,e),p(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=n&&l(n,t[c],t,i)})),f=m(e),g=function(t,e,i){var n,a,r=f(t),o=v(t,e);return o?o.value=i:(r.last=o={index:a=h(e,!0),key:e,value:i,previous:n=r.last,next:void 0,removed:!1},r.first||(r.first=o),n&&(n.next=o),d?r.size++:t.size++,"F"!==a&&(r.index[a]=o)),t},v=function(t,e){var i,n=f(t),a=h(e);if("F"!==a)return n.index[a];for(i=n.first;i;i=i.next)if(i.key==e)return i};return r(u.prototype,{clear:function(){var t=this,e=f(t),i=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete i[n.index],n=n.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,i=f(e),n=v(e,t);if(n){var a=n.next,r=n.previous;delete i.index[n.index],n.removed=!0,r&&(r.next=a),a&&(a.previous=r),i.first==n&&(i.first=a),i.last==n&&(i.last=r),d?i.size--:e.size--}return!!n},forEach:function(t){var e,i=f(this),n=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:i.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!v(this,t)}}),r(u.prototype,i?{get:function(t){var e=v(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&n(u.prototype,"size",{get:function(){return f(this).size}}),u},setStrong:function(t,e,i){var n=e+" Iterator",a=m(e),r=m(n);c(t,e,(function(t,e){p(this,{type:n,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,i=t.last;while(i&&i.removed)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),u(e)}}},"6cdc":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[i("h1",{staticClass:"Display-3 font-weight-medium my-3 text-center"},[t._v("PerspectiveFish")]),i("h4",{staticClass:"font-weight-light mb-3"},[t._v("teamLab サマーインターンにて開発")]),i("a",{attrs:{href:"https://github.com/Octan008/PerspectiveFish",target:"_blank"}},[t._v("https://github.com/Octan008/PerspectiveFish")]),i("div",{staticClass:"g-slide"},[i("iframe",{attrs:{src:"https://docs.google.com/presentation/d/1ifd7ZAgUcXSrwuHdxg-NlUq753FjLLA4/embed?start=false&loop=false&delayms=3000",frameborder:"0",width:"480",height:"284",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true"}})])])],1)},a=[],r={components:{},computed:{width:function(){return this.$vuetify.breakpoint.smAndDown?350:560},height:function(){return this.$vuetify.breakpoint.smAndDown?197:315}}},o=r,s=i("2877"),l=i("6544"),c=i.n(l),u=i("a523"),d=i("a722"),h=Object(s["a"])(o,n,a,!1,null,null,null);e["default"]=h.exports;c()(h,{VContainer:u["a"],VLayout:d["a"]})},"6d61":function(t,e,i){"use strict";var n=i("23e7"),a=i("da84"),r=i("94ca"),o=i("6eeb"),s=i("f183"),l=i("2266"),c=i("19aa"),u=i("861d"),d=i("d039"),h=i("1c7e"),f=i("d44e"),p=i("7156");t.exports=function(t,e,i){var m=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),v=m?"set":"add",y=a[t],b=y&&y.prototype,w=y,_={},x=function(t){var e=b[t];o(b,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:function(t,i){return e.call(this,0===t?0:t,i),this})};if(r(t,"function"!=typeof y||!(g||b.forEach&&!d((function(){(new y).entries().next()})))))w=i.getConstructor(e,t,m,v),s.REQUIRED=!0;else if(r(t,!0)){var k=new w,C=k[v](g?{}:-0,1)!=k,j=d((function(){k.has(1)})),D=h((function(t){new y(t)})),O=!g&&d((function(){var t=new y,e=5;while(e--)t[v](e,e);return!t.has(-0)}));D||(w=e((function(e,i){c(e,w,t);var n=p(new y,e,w);return void 0!=i&&l(i,n[v],n,m),n})),w.prototype=b,b.constructor=w),(j||O)&&(x("delete"),x("has"),m&&x("get")),(O||C)&&x(v),g&&b.clear&&delete b.clear}return _[t]=w,n({global:!0,forced:w!=y},_),f(w,t),g||i.setStrong(w,t,m),w}},"6ece":function(t,e,i){},"7fcd":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[n("h1",{staticClass:"Display-3 font-weight-medium my-3 text-center"},[t._v("Wifiモニタリングサイト")]),n("h4",{staticClass:"font-weight-light mb-3"},[t._v("大学のアルバイトで制作した Webページ。学内の Wifi アクセスポイントの接続状況を地図上に表示し、Cookieを用いてよく使う地図をストックできる。")]),n("img",{attrs:{width:"width",height:t.height,src:i("3f9a")}})])],1)},a=[],r={components:{},computed:{width:function(){return this.$vuetify.breakpoint.smAndDown?350:560},height:function(){return this.$vuetify.breakpoint.smAndDown?197:315}}},o=r,s=i("2877"),l=i("6544"),c=i.n(l),u=i("a523"),d=i("a722"),h=Object(s["a"])(o,n,a,!1,null,null,null);e["default"]=h.exports;c()(h,{VContainer:u["a"],VLayout:d["a"]})},a229:function(t,e,i){t.exports=i.p+"img/sponza.f16b608e.jpg"},a340:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[i("h1",{staticClass:"Display-3 font-weight-medium my-3 text-center"},[t._v("Realtime Path Tracing engine")]),i("h4",{staticClass:"font-weight-light mb-3"},[t._v("Production of hyper-realistic virtual world in real time")]),i("iframe",{attrs:{width:t.width,height:t.height,src:"https://www.youtube-nocookie.com/embed/NEiQNRGF-9Q",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),i("h1",{staticClass:"Display-3 font-weight-medium mt-3"},[t._v("Description")]),i("h4",{staticClass:"font-weight-light md-mx-12"},[t._v("Path tracing is a technique that can produce global illumination, refraction and reflection more faithfully in CG than conventional methods, and widely used in CG movies and games. I implement a real-time past tracing engine using "),i("code",[t._v("VK_KHR_ray_tracing")]),t._v(" extension of Vulkan. I also write shaders for ray tracing and adopt DisneyBRDF to reflect the physical properties. I include the AI denoise API of NVIDIA OptiX into my engine to solve the de-noise problem in path tracing. ")]),i("h1",{staticClass:"Display-3 font-weight-medium mt-3"},[t._v("What I Did")]),i("h4",{staticClass:"font-weight-light"},[t._v("CG Programming (C++, Vulkan, GLSL) ")])])],1)},a=[],r={components:{},computed:{width:function(){return this.$vuetify.breakpoint.smAndDown?350:560},height:function(){return this.$vuetify.breakpoint.smAndDown?197:315}}},o=r,s=i("2877"),l=i("6544"),c=i.n(l),u=i("a523"),d=i("a722"),h=Object(s["a"])(o,n,a,!1,null,null,null);e["default"]=h.exports;c()(h,{VContainer:u["a"],VLayout:d["a"]})},aa4b:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[i("h1",{staticClass:"Display-3 font-weight-medium my-3 text-center"},[t._v("Realtime Realistic VTuber engine")]),i("h4",{staticClass:"font-weight-light mb-3"},[t._v("Fusion of virtual and real world in real time")]),i("iframe",{attrs:{width:t.width,height:t.height,src:"https://www.youtube-nocookie.com/embed/QZuNY5wm7w8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),i("h1",{staticClass:"Display-3 font-weight-medium mt-3"},[t._v("Description")]),i("h4",{staticClass:"font-weight-light md-mx-12"},[t._v("I create a VTuber engine that reflects the three-axis rotation of the face in real time to a 3DCG scene by combining my path tracing engine and some image processing methods. As a future work, I intend to implement skinning so as to reflect information on facial expressions."),i("br"),t._v(" In the future, I will expect to realize comfortable telework in virtual offices, schools, etc., by mapping humans in a hyper-realistic CG space and making them feel as if they are in a real space. ")]),i("h1",{staticClass:"Display-3 font-weight-medium mt-3"},[t._v("What I Did")]),i("h4",{staticClass:"font-weight-light"},[t._v("CG Programming (C++, Vulkan, GLSL)"),i("br"),t._v(" Face Detection (OpenCV, Dlib)"),i("br"),t._v(" This engine is based on "),i("router-link",{attrs:{to:"/PathEngine"}},[t._v("my previous work")]),t._v(". ")],1)])],1)},a=[],r={components:{},computed:{width:function(){return this.$vuetify.breakpoint.smAndDown?350:560},height:function(){return this.$vuetify.breakpoint.smAndDown?197:315}}},o=r,s=i("2877"),l=i("6544"),c=i.n(l),u=i("a523"),d=i("a722"),h=Object(s["a"])(o,n,a,!1,null,null,null);e["default"]=h.exports;c()(h,{VContainer:u["a"],VLayout:d["a"]})},b858:function(t,e,i){t.exports=i.p+"img/boids.5a7b75b8.png"},bf73:function(t,e,i){t.exports=i.p+"img/ARcity.4d7c4796.jpg"},c05f:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[i("h1",{staticClass:"Display-3 font-weight-medium my-3 text-center"},[t._v("AR Modeling Kit")]),i("h4",{staticClass:"font-weight-light mb-3"},[t._v("New modeling method")]),i("iframe",{attrs:{width:t.width,height:t.height,src:"https://www.youtube-nocookie.com/embed/PE6Khf847tA",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),i("h1",{staticClass:"Display-3 font-weight-medium mt-3"},[t._v("What I Did")]),i("h4",{staticClass:"font-weight-light"},[t._v("AR Programming (Unity, C#, Shader, ARKit) ")])])],1)},a=[],r={components:{},computed:{width:function(){return this.$vuetify.breakpoint.smAndDown?350:560},height:function(){return this.$vuetify.breakpoint.smAndDown?197:315}}},o=r,s=i("2877"),l=i("6544"),c=i.n(l),u=i("a523"),d=i("a722"),h=Object(s["a"])(o,n,a,!1,null,null,null);e["default"]=h.exports;c()(h,{VContainer:u["a"],VLayout:d["a"]})},c0b2:function(t,e,i){t.exports=i.p+"img/prism.b7c39aa6.png"},c0bb:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[i("h1",{staticClass:"Display-3 font-weight-medium my-3 text-center"},[t._v("BoidsMeshAnimator")]),i("h4",{staticClass:"font-weight-light mb-3"},[t._v("個人開発")]),i("a",{attrs:{href:"https://github.com/Octan008/BoidsMeshAnimation",target:"_blank"}},[t._v("https://github.com/Octan008/BoidsMeshAnimation")]),i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/wcvwxlFzYEA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)},a=[],r={components:{},computed:{width:function(){return this.$vuetify.breakpoint.smAndDown?350:560},height:function(){return this.$vuetify.breakpoint.smAndDown?197:315}}},o=r,s=i("2877"),l=i("6544"),c=i.n(l),u=i("a523"),d=i("a722"),h=Object(s["a"])(o,n,a,!1,null,null,null);e["default"]=h.exports;c()(h,{VContainer:u["a"],VLayout:d["a"]})},c62c:function(t,e,i){t.exports=i.p+"img/path.8841c9db.jpg"},c71f:function(t,e,i){t.exports=i.p+"img/modeling.c9eb4377.jpg"},cb53:function(t,e,i){t.exports=i.p+"img/portrait_thumbnail_2.f0ebd644.png"},db7f:function(t,e,i){t.exports=i.p+"img/sakura.d8fa15b6.jpg"},eb5e:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[i("h1",{staticClass:"Display-3 font-weight-medium my-3 text-center"},[t._v("肖像A")]),i("h4",{staticClass:"font-weight-light mb-3"},[t._v("東京大学制作展2021 Extra 『0 PUNK』にて出展")]),i("iframe",{attrs:{width:t.width,height:t.height,src:"https://portrait-a-mov.s3.ap-northeast-1.amazonaws.com/index.html",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)},a=[],r={components:{},computed:{width:function(){return this.$vuetify.breakpoint.smAndDown?350:560},height:function(){return this.$vuetify.breakpoint.smAndDown?197:315}}},o=r,s=i("2877"),l=i("6544"),c=i.n(l),u=i("a523"),d=i("a722"),h=Object(s["a"])(o,n,a,!1,null,null,null);e["default"]=h.exports;c()(h,{VContainer:u["a"],VLayout:d["a"]})},f3f0:function(t,e,i){"use strict";var n=i("f42e"),a=i.n(n);a.a},f42e:function(t,e,i){},f616:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[i("h1",{staticClass:"Display-3 font-weight-medium my-3 text-center"},[t._v("AR Multiplayer City Building Game")]),i("h4",{staticClass:"font-weight-light mb-3"},[t._v("Collaborative experience in augmented reality")]),i("iframe",{attrs:{width:t.width,height:t.height,src:"https://www.youtube-nocookie.com/embed/e367xmTiOOE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),i("h1",{staticClass:"Display-3 font-weight-medium mt-3"},[t._v("Description")]),i("h4",{staticClass:"font-weight-light md-mx-12"},[t._v("We exhibited a multiplayer AR city building game at the May Festival@UTokyo. Although the demo video is a solo play, we connected at most five iPads via TCP/IP to share the condition of city building between devices in the day of exhibition. At that time, there was no API to synchronize coordinates between devices, so I implemented an original method to synchronize coordinates. ")]),i("h1",{staticClass:"Display-3 font-weight-medium mt-3"},[t._v("What I Did")]),i("h4",{staticClass:"font-weight-light"},[t._v("AR Network Programming (Unity, C#, Shader, ARKit, UNet)"),i("br"),t._v(" Game Design ")])])],1)},a=[],r={components:{},computed:{width:function(){return this.$vuetify.breakpoint.smAndDown?350:560},height:function(){return this.$vuetify.breakpoint.smAndDown?197:315}}},o=r,s=i("2877"),l=i("6544"),c=i.n(l),u=i("a523"),d=i("a722"),h=Object(s["a"])(o,n,a,!1,null,null,null);e["default"]=h.exports;c()(h,{VContainer:u["a"],VLayout:d["a"]})}}]);
//# sourceMappingURL=about.85edb0d6.js.map