(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c89f2ef"],{"0b3b":function(t,e,i){},"20fb":function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),a=i("d282"),u=i("a142"),r=i("ea8e");function o(){return!u["e"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var c=i("a8c1"),l=o();function h(){l&&Object(c["c"])(Object(c["a"])())}var m=i("1325");function d(t,e,i){var n=t.indexOf(e);return n>-1?t.slice(0,n+1)+t.slice(n).replace(i,""):t}function p(t,e){t=e?d(t,".",/\./g):t.split(".")[0],t=d(t,"-",/-/g);var i=e?/[^-0-9.]/g:/[^-0-9]/g;return t.replace(i,"")}var f=i("90c6"),b={inject:{vanField:{default:null}},watch:{value:function(){var t=this.vanField;t&&(t.resetValidation(),t.validateWithTrigger("onChange"))}},created:function(){var t=this.vanField;t&&!t.children&&(t.children=this)}},v=Object(a["a"])("stepper"),g=v[0],y=v[1],S=600,w=200;function C(t,e){return String(t)===String(e)}function P(t,e){var i=Math.pow(10,10);return Math.round((t+e)*i)/i}e["a"]=g({mixins:[b],props:{value:null,theme:String,integer:Boolean,disabled:Boolean,inputWidth:[Number,String],buttonSize:[Number,String],asyncChange:Boolean,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,decimalLength:[Number,String],name:{type:[Number,String],default:""},min:{type:[Number,String],default:1},max:{type:[Number,String],default:1/0},step:{type:[Number,String],default:1},defaultValue:{type:[Number,String],default:1},showPlus:{type:Boolean,default:!0},showMinus:{type:Boolean,default:!0},longPress:{type:Boolean,default:!0}},data:function(){var t=Object(u["b"])(this.value)?this.value:this.defaultValue,e=this.format(t);return C(e,this.value)||this.$emit("input",e),{currentValue:e}},computed:{minusDisabled:function(){return this.disabled||this.disableMinus||this.currentValue<=this.min},plusDisabled:function(){return this.disabled||this.disablePlus||this.currentValue>=this.max},inputStyle:function(){var t={};return this.inputWidth&&(t.width=Object(r["a"])(this.inputWidth)),this.buttonSize&&(t.height=Object(r["a"])(this.buttonSize)),t},buttonStyle:function(){if(this.buttonSize){var t=Object(r["a"])(this.buttonSize);return{width:t,height:t}}}},watch:{max:"check",min:"check",integer:"check",decimalLength:"check",value:function(t){C(t,this.currentValue)||(this.currentValue=this.format(t))},currentValue:function(t){this.$emit("input",t),this.$emit("change",t,{name:this.name})}},methods:{check:function(){var t=this.format(this.currentValue);C(t,this.currentValue)||(this.currentValue=t)},formatNumber:function(t){return p(String(t),!this.integer)},format:function(t){return t=this.formatNumber(t),t=""===t?0:+t,t=Object(f["a"])(t)?this.min:t,t=Math.max(Math.min(this.max,t),this.min),Object(u["b"])(this.decimalLength)&&(t=t.toFixed(this.decimalLength)),t},onInput:function(t){var e=t.target.value,i=this.formatNumber(e);if(Object(u["b"])(this.decimalLength)&&-1!==i.indexOf(".")){var n=i.split(".");i=n[0]+"."+n[1].slice(0,this.decimalLength)}C(e,i)||(t.target.value=i),this.emitChange(i)},emitChange:function(t){this.asyncChange?(this.$emit("input",t),this.$emit("change",t,{name:this.name})):this.currentValue=t},onChange:function(){var t=this.type;if(this[t+"Disabled"])this.$emit("overlimit",t);else{var e="minus"===t?-this.step:+this.step,i=this.format(P(+this.currentValue,e));this.emitChange(i),this.$emit(t)}},onFocus:function(t){this.disableInput&&this.$refs.input?this.$refs.input.blur():this.$emit("focus",t)},onBlur:function(t){var e=this.format(t.target.value);t.target.value=e,this.currentValue=e,this.$emit("blur",t),h()},longPressStep:function(){var t=this;this.longPressTimer=setTimeout((function(){t.onChange(),t.longPressStep(t.type)}),w)},onTouchStart:function(){var t=this;this.longPress&&(clearTimeout(this.longPressTimer),this.isLongPress=!1,this.longPressTimer=setTimeout((function(){t.isLongPress=!0,t.onChange(),t.longPressStep()}),S))},onTouchEnd:function(t){this.longPress&&(clearTimeout(this.longPressTimer),this.isLongPress&&Object(m["c"])(t))}},render:function(){var t=this,e=arguments[0],i=function(e){return{on:{click:function(){t.type=e,t.onChange()},touchstart:function(){t.type=e,t.onTouchStart()},touchend:t.onTouchEnd,touchcancel:t.onTouchEnd}}};return e("div",{class:y([this.theme])},[e("button",s()([{directives:[{name:"show",value:this.showMinus}],attrs:{type:"button"},style:this.buttonStyle,class:y("minus",{disabled:this.minusDisabled})},i("minus")])),e("input",{ref:"input",attrs:{type:this.integer?"tel":"text",role:"spinbutton",disabled:this.disabled,readonly:this.disableInput,inputmode:this.integer?"numeric":"decimal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.currentValue},class:y("input"),domProps:{value:this.currentValue},style:this.inputStyle,on:{input:this.onInput,focus:this.onFocus,blur:this.onBlur}}),e("button",s()([{directives:[{name:"show",value:this.showPlus}],attrs:{type:"button"},style:this.buttonStyle,class:y("plus",{disabled:this.plusDisabled})},i("plus")]))])}})},"943e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"movie-item"},[i("div",{staticClass:"photo"},[t.movie.poster_path?i("img",{attrs:{src:"https://image.tmdb.org/t/p/w500/"+t.movie.poster_path,alt:""}}):i("img",{attrs:{alt:"找不到該圖片",src:"https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}})]),i("div",{staticClass:"info"},[i("h3",{staticClass:"title"},[t._v(t._s(t.movie.title))]),i("p",{staticClass:"time"},[t._v("上映日期："+t._s(t.movie.release_date))]),i("p",{staticClass:"desc"},[t._v(t._s(t.movie.overview))]),i("div",{staticClass:"count"},[i("span",[t._v("數量：")]),i("van-stepper",{attrs:{step:"1"},model:{value:t.buyNum,callback:function(e){t.buyNum=e},expression:"buyNum"}})],1),i("van-button",{attrs:{type:"warning"},on:{click:t.addCart}},[t._v("加入購物車")])],1)]),i("Footer")],1)},s=[],a=(i("f06a"),i("20fb")),u=(i("e7e5"),i("d399")),r=i("fd2d"),o=i("2b0e");o["default"].use(u["a"]),o["default"].use(a["a"]);var c={data:function(){return{movie:{},buyNum:1}},components:{Footer:r["a"]},created:function(){var t=this,e=this.$axios.create({});e.interceptors.request.use((function(t){return u["a"].loading({mask:!1,duration:0,forbidClick:!0,message:"加載中..."}),t}),(function(t){u["a"].clear(),Object(u["a"])("請求錯誤, 請稍後重試request"),console.log(t)})),e.interceptors.response.use((function(t){return u["a"].clear(),t.data}),(function(t){u["a"].clear(),Object(u["a"])("請求錯誤, 請稍後重試responce2"),console.log(t)})),e.get("https://api.themoviedb.org/3/movie/".concat(this.$route.params.movieID),{params:{api_key:"ccc4da600602f73cf752066796a150b0",language:"zh-TW"}}).then((function(e){return t.movie=e})).catch((function(t){console.log(t)}))},computed:{},methods:{addCart:function(){this.$store.commit("ADD_MOVIE",{id:this.movie.id,name:this.movie.title,movieImg:this.movie.poster_path,price:50,Quantity:this.buyNum,totalPrice:50*this.buyNum})}}},l=c,h=(i("d4a7"),i("2877")),m=Object(h["a"])(l,n,s,!1,null,null,null);e["default"]=m.exports},d4a7:function(t,e,i){"use strict";var n=i("0b3b"),s=i.n(n);s.a},f06a:function(t,e,i){"use strict";i("68ef"),i("fb6c")},fb6c:function(t,e,i){}}]);
//# sourceMappingURL=chunk-1c89f2ef.935fde8b.js.map