(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-0ffbfd91":"01b72bd6","chunk-1a4d4b5a":"eca5b721","chunk-1c89f2ef":"935fde8b","chunk-2f3ad668":"29e0289f","chunk-526df199":"fc6f7cc9","chunk-59d99301":"d46b5628","chunk-6d552c7c":"74b1307f","chunk-cee59f38":"a8c5e92e","chunk-fd288f92":"425b25da"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-0ffbfd91":1,"chunk-1a4d4b5a":1,"chunk-1c89f2ef":1,"chunk-2f3ad668":1,"chunk-526df199":1,"chunk-59d99301":1,"chunk-6d552c7c":1,"chunk-cee59f38":1,"chunk-fd288f92":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-0ffbfd91":"bde97c79","chunk-1a4d4b5a":"f026bc3c","chunk-1c89f2ef":"bc6f3309","chunk-2f3ad668":"27c1d0d8","chunk-526df199":"da8d13d9","chunk-59d99301":"879296b6","chunk-6d552c7c":"32d44a17","chunk-cee59f38":"91b31780","chunk-fd288f92":"4462832a"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2f07":function(t,e,n){},"53d0":function(t,e,n){"use strict";var r=n("2f07"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("bc3a"),o=n.n(a),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("a",{staticClass:"logo",attrs:{href:"javascript:;"},on:{click:t.goHome}},[t._v("MOVIE SHOP")]),n("div",{staticClass:"nav-right"},[n("router-link",{attrs:{to:"/"}},[t._v("首頁")]),n("router-link",{attrs:{to:"/admin/orderList"}},[t._v("後台管理")]),n("button",{staticClass:"icon"},[n("van-icon",{attrs:{name:"shopping-cart chat-o",badge:t.getNum},on:{click:t.goToCart}})],1)],1)]),n("router-view")],1)},c=[],s=(n("c3a6"),n("ad06"));r["default"].use(s["a"]);var u={data:function(){return{cartNum:0}},computed:{getNum:function(){return this.$store.getters.getCartNum}},methods:{goToCart:function(){this.$router.push("/cart/cartList")},goHome:function(){this.$router.push("/")}}},l=u,f=(n("5c0b"),n("2877")),d=Object(f["a"])(l,i,c,!1,null,null,null),h=d.exports,m=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"main"},[n("sideNav",{staticClass:"sidenav"}),n("div",{staticClass:"movie-list"},[n("div",{staticClass:"search-movie"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchTxt,expression:"searchTxt",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"搜尋電影"},domProps:{value:t.searchTxt},on:{input:function(e){e.target.composing||(t.searchTxt=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("van-button",{attrs:{type:"default"},on:{click:t.searchMovie}},[t._v("搜尋")])],1),t._l(t.renderMovie,(function(t){return n("movieitem",{key:t.id,attrs:{movie:t}})}))],2)],1),n("Footer")],1)},v=[],g=(n("66b9"),n("b650")),b=(n("5f1a"),n("a3e2")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",[n("p",{staticClass:"toggleTags",on:{click:t.toggleTags}},[t._v("展開電影分類")]),n("div",{staticClass:"tags"},t._l(t.renderTags,(function(e){return n("div",{key:e.id,staticClass:"tags-item"},[n("button",{attrs:{"data-id":e.id},on:{click:t.searchTagMovie}},[t._v(" "+t._s(e.name)+" ")])])})),0)])])},k=[],y={methods:{searchTagMovie:function(t){var e=t.target.dataset.id;console.log("id=",e),this.$store.commit("Get_Movie_TAG_List",e)},toggleTags:function(t){t.target.classList.toggle("active");var e=document.querySelector(".tags");e.classList.toggle("active")}},computed:{renderTags:function(){return this.$store.getters.getTagList}}},T=y,L=(n("e1f1"),Object(f["a"])(T,_,k,!1,null,"1e338581",null)),C=L.exports,O=n("fd2d"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"photo"},[n("a",{attrs:{href:"#/movies/"+t.movie.id}},[t.movie.poster_path?n("img",{attrs:{src:"https://image.tmdb.org/t/p/w500/"+t.movie.poster_path}}):n("img",{attrs:{alt:"找不到該圖片",src:"https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}})])]),n("div",{staticClass:"info"},[n("h3",{staticClass:"title"},[t._v(t._s(t.movie.title))]),n("p",{staticClass:"time"},[t._v("上映日期："+t._s(t.movie.release_date))]),t._m(0),n("div",{staticClass:"desc"},[""!==t.movie.overview?n("p",[t._v(t._s(t.movie.overview))]):n("p",{staticClass:"noDesc"},[t._v("無相關資料")])]),n("div",{staticClass:"btn"},[n("van-button",{attrs:{type:"warning"},on:{click:t.goPage}},[t._v("詳細內容")])],1)])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"price"},[t._v(" 售價："),n("span",[t._v("$ 50")])])}],x={props:{movie:{type:Object,required:!0}},methods:{goPage:function(){this.$router.push("/movies/".concat(this.movie.id))}}},S=x,M=(n("8892"),Object(f["a"])(S,E,w,!1,null,"3ee75bb7",null)),A=M.exports;r["default"].use(b["a"]),r["default"].use(g["a"]);var j={name:"moveList",data:function(){return{searchTxt:"",hasSearch:!1}},components:{sideNav:C,movieitem:A,Footer:O["a"]},methods:{addCart:function(){alert("已加入")},searchMovie:function(){if(console.log("searchtxt:",this.searchTxt),!this.searchTxt)return!1;this.$store.commit("SEARCH_MOVIES",this.searchTxt)}},created:function(){this.$store.commit("Get_Movie_List"),this.$store.commit("GET_TAGS"),console.log("created",this.$store.state.movieList)},computed:{renderMovie:function(){return this.$store.getters.getFilterTag}}},I=j,$=(n("53d0"),Object(f["a"])(I,p,v,!1,null,null,null)),N=$.exports;r["default"].use(m["a"]);var P=[{path:"/",name:"movieList",component:N},{path:"/login",name:"login",component:function(){return n.e("chunk-2f3ad668").then(n.bind(null,"dd7b"))}},{path:"/admin",name:"admin",component:function(){return n.e("chunk-1a4d4b5a").then(n.bind(null,"b6a5"))},children:[{path:"orderList",name:"orderList",component:function(){return n.e("chunk-6d552c7c").then(n.bind(null,"49d6"))}},{path:"editOrder/:orderID",name:"editOrder",component:function(){return n.e("chunk-526df199").then(n.bind(null,"1897"))}}]},{path:"/movies/:movieID",name:"movieDetail",component:function(){return n.e("chunk-1c89f2ef").then(n.bind(null,"943e"))}},{path:"/cart",name:"cart",component:function(){return n.e("chunk-fd288f92").then(n.bind(null,"da83"))},children:[{path:"cartList",name:"cartList",component:function(){return n.e("chunk-cee59f38").then(n.bind(null,"9bc9"))}},{path:"customerInfo",name:"customerInfo",component:function(){return n.e("chunk-0ffbfd91").then(n.bind(null,"87d2"))}},{path:"checkInfo",name:"checkInfo",component:function(){return n.e("chunk-59d99301").then(n.bind(null,"2066"))}}]},{path:"*",redirect:"/"}],G=new m["a"]({routes:P,scrollBehavior:function(t,e,n){return n||{x:0,y:0}}}),D=G,z=(n("4de4"),n("13d5"),n("a434"),n("b0c0"),n("e7e5"),n("d399")),H=n("2f62");r["default"].use(H["a"]),r["default"].use(m["a"]);var q="ccc4da600602f73cf752066796a150b0",F="https://api.themoviedb.org/3",R=o.a.create({});R.interceptors.request.use((function(t){return z["a"].loading({mask:!1,duration:0,forbidClick:!0,message:"加載中..."}),t}),(function(t){z["a"].clear(),Object(z["a"])("請求錯誤, 請稍後重試request"),console.log(t)})),R.interceptors.response.use((function(t){return z["a"].clear(),t}),(function(t){z["a"].clear(),Object(z["a"])("請求錯誤, 請稍後重試responce2"),console.log(t)}));var B=new H["a"].Store({state:{movieList:[],cartList:[],tagList:[],customerInfo:{},searchTag:"all",searchName:"",hasOrder:!1,detail:null,Authorization:localStorage.getItem("Authorization")?localStorage.getItem("Authorization"):""},mutations:{ADD_MOVIE:function(t,e){t.cartList.push(e),z["a"].success("已成功加入購物車")},Get_Movie_List:function(t){R.get("".concat(F,"/discover/movie"),{params:{api_key:q,language:"zh-TW",sort_by:"popularity.desc",page:1}}).then((function(e){t.movieList=e.data.results})).catch((function(t){console.log(t)}))},GET_TAGS:function(t){o.a.get("".concat(F,"/genre/movie/list"),{params:{api_key:q,language:"zh-TW"}}).then((function(e){t.tagList=e.data.genres})).catch((function(t){console.log(t)}))},Get_Movie_TAG_List:function(t,e){R.get("".concat(F,"/discover/movie"),{params:{api_key:q,sort_by:"popularity.desc",page:1,with_genres:e,language:"zh-TW"}}).then((function(e){t.movieList=e.data.results})).catch((function(t){console.log(t)}))},SEARCH_MOVIES:function(t,e){R.get("".concat(F,"/search/movie"),{params:{api_key:q,language:"zh-TW",query:e}}).then((function(e){t.movieList=e.data.results})).catch((function(t){console.log(t)}))},CHANGE_AMOUNT:function(t,e){t.cartList.filter((function(t){t.id===e.id&&(t.totalPrice=e.totalPrice,t.Quantity=e.Quantity)}))},DELETE_CART_ITEM:function(t,e){t.cartList.splice(e,1)},SET_CUSTOMER_INFO:function(t,e){console.log("payload=",e),t.customerInfo={name:e.name,email:e.email,phone:e.phone,time:e.time},t.cartList=[],t.hasOrder=!0},GET_TOKEN:function(t){var e=parseInt(100*Math.random());t.Authorization=e,localStorage.setItem("Authorization",e)},CANCLE_HASORDER:function(t){t.hasOrder=!1}},getters:{getCartNum:function(t){return t.cartList.length},getCartList:function(t){return t.cartList},getMovieList:function(t){return console.log("執行getter"),t.movieList},getTagList:function(t){return t.tagList},getMovieDetail:function(t){return console.log("detail geter"),t.detail},getCartListTotalPrice:function(t){return t.cartList.reduce((function(t,e){return t+e.totalPrice}),0)},getCustomerInfo:function(t){return t.customerInfo},getFilterTag:function(t){return t.movieList.filter((function(e){return"all"==t.searchTag?t.movieList:e.tag==t.searchTag}))}},actions:{},modules:{}}),U=n("5f5b"),V=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(U["a"]),r["default"].use(V["a"]),r["default"].prototype.$axios=o.a,r["default"].config.productionTip=!1,new r["default"]({router:D,store:B,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"760c":function(t,e,n){"use strict";var r=n("c3f5"),a=n.n(r);a.a},8892:function(t,e,n){"use strict";var r=n("e750"),a=n.n(r);a.a},"9c0c":function(t,e,n){},c3f5:function(t,e,n){},e1f1:function(t,e,n){"use strict";var r=n("fe33"),a=n.n(r);a.a},e750:function(t,e,n){},fd2d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[t._v(" Copyright 2020 ©電影購物作品 無商業用途 ")])},a=[],o=(n("760c"),n("2877")),i={},c=Object(o["a"])(i,r,a,!1,null,null,null);e["a"]=c.exports},fe33:function(t,e,n){}});
//# sourceMappingURL=app.a5bcea2f.js.map