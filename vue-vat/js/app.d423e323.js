(function(e){function t(t){for(var n,a,i=t[0],c=t[1],s=t[2],f=0,p=[];f<i.length;f++)a=i[f],o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(u.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},u=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-vat/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=c;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("c21b"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"app"}},[r("h1",{staticClass:"title"},[e._v(e._s(e.title))]),r("form",{on:{submit:function(t){t.preventDefault(),e.submitted()}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],staticClass:"input",attrs:{type:"text",id:"searchTerm",name:"searchTerm",placeholder:"Enter VAT number..."},domProps:{value:e.searchTerm},on:{input:function(t){t.target.composing||(e.searchTerm=t.target.value)}}})]),r("section",[e.result?r("div",[r("table",{staticClass:"table is-bordered"},[r("tbody",e._l(e.result,function(t,n){return r("tr",{key:t.VATNumber},[r("td",[e._v(e._s(n))]),r("td",[e._v(e._s(t))])])}))])]):e._e(),e.error?r("div",{staticClass:"notification is-danger"},[e._v("\n       "+e._s(e.error)+"\n ")]):e._e()])])},u=[],a=(r("386d"),"https://vat.erply.com/numbers"),i={search:function(e){var t="".concat(a,"?vatNumber=").concat(e);return fetch(t).then(function(e){return e.json()})}},c={name:"app",data:function(){return{title:"VAT number check",searchTerm:"",result:null,error:null}},methods:{submitted:function(){var e=this;i.search(this.searchTerm).then(function(t){t.error?(e.result=null,e.error=t.error):(e.result=t,e.error=null)})}}},s=c,l=(r("034f"),r("2877")),f=Object(l["a"])(s,o,u,!1,null,null,null);f.options.__file="App.vue";var p=f.exports;r("92c6");n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(p)}}).$mount("#app")},c21b:function(e,t,r){}});
//# sourceMappingURL=app.d423e323.js.map