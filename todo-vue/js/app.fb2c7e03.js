(function(t){function e(e){for(var o,c,s=e[0],l=e[1],a=e[2],u=0,f=[];u<s.length;u++)c=s[u],i[c]&&f.push(i[c][0]),i[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,a||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},r=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var a=0;a<s.length;a++)e(s[a]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("c21b"),i=n.n(o);i.a},"52af":function(t,e,n){"use strict";var o=n("bf4d"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("img",{attrs:{alt:"ToDo logo",src:n("cf05"),height:"200px"}}),o("Todo")],1)},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"input",attrs:{type:"text",placeholder:"What next?"},domProps:{value:t.newTodo},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null},input:function(e){e.target.composing||(t.newTodo=e.target.value)}}}),t.todos.length?n("div",{staticClass:"top-bar"},[n("button",{class:{active:"all"===t.filter},on:{click:function(e){t.filter="all"}}},[t._v("All")]),n("button",{class:{active:"active"===t.filter},on:{click:function(e){t.filter="active"}}},[t._v("Active")]),n("button",{class:{active:"done"===t.filter},on:{click:function(e){t.filter="done"}}},[t._v("Done")])]):t._e(),!t.todosFiltered.length&&t.todos.length?n("div",{staticClass:"empty"},[t._v("Nothing here...")]):t._e(),t._l(t.todosFiltered,function(e,o){return n("div",{key:o,staticClass:"item"},[n("div",{staticClass:"item-left",on:{dblclick:function(n){t.editTodo(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.done,expression:"item.done"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.done)?t._i(e.done,null)>-1:e.done},on:{change:function(n){var o=e.done,i=n.target,r=!!i.checked;if(Array.isArray(o)){var c=null,s=t._i(o,c);i.checked?s<0&&t.$set(e,"done",o.concat([c])):s>-1&&t.$set(e,"done",o.slice(0,s).concat(o.slice(s+1)))}else t.$set(e,"done",r)}}}),e.editing?n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"item.title"},{name:"focus",rawName:"v-focus"}],staticClass:"item-edit",attrs:{type:"text"},domProps:{value:e.title},on:{blur:function(n){t.doneEditing(e)},keyup:[function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.doneEditing(e)},function(n){if(!("button"in n)&&t._k(n.keyCode,"esc",27,n.key,"Escape"))return null;t.cancelEditing(e)}],input:function(n){n.target.composing||t.$set(e,"title",n.target.value)}}}):n("div",{staticClass:"item-label",class:{done:e.done}},[t._v(t._s(e.title))])]),n("div",{staticClass:"close",on:{click:function(e){t.removeTodo(o)}}},[t._v("✖")])])}),t.todos.length?n("div",{staticClass:"bottom-bar"},[n("div",[n("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:t.noneRemaining},on:{change:function(e){t.checkAll(e)}}}),t._v("Check all")]),n("div",[t.showDone?n("button",{staticClass:"clear-done",on:{click:function(e){t.clearDone()}}},[t._v("Clear done")]):t._e()]),n("div",[t._v(t._s(t.remaining))])]):t._e()],2)},s=[],l=(n("ac6a"),{name:"todo-list",data:function(){return{filter:"all",newTodo:"",editCache:"",todos:[]}},computed:{remaining:function(){var t=this.todos.filter(function(t){return!t.done}).length;return 1===t?"Last item remaining!":t?"".concat(t," items remaining"):"All done!"},noneRemaining:function(){return 0===this.todos.filter(function(t){return!t.done}).length},showDone:function(){return this.todos.filter(function(t){return t.done}).length},todosFiltered:function(){return"all"===this.filter?this.todos:"active"===this.filter?this.todos.filter(function(t){return!t.done}):"done"===this.filter?this.todos.filter(function(t){return t.done}):this.todos}},directives:{focus:{inserted:function(t){t.focus()}}},methods:{addTodo:function(){this.newTodo.trim()&&(this.todos.push({title:this.newTodo,done:!1,editing:!1}),this.newTodo="")},removeTodo:function(t){this.todos.splice(t,1)},editTodo:function(t){this.editCache=t.title,t.editing=!0},doneEditing:function(t){t.title.trim()&&(t.editing=!1)},cancelEditing:function(t){t.title=this.editCache,t.editing=!1},checkAll:function(t){this.todos.forEach(function(e){e.done=t.target.checked})},clearDone:function(){this.todos=this.todos.filter(function(t){return!t.done})}},mounted:function(){localStorage.todos&&localStorage.todos.length>2&&(this.todos=JSON.parse(localStorage.todos))},watch:{todos:{handler:function(){localStorage.todos=JSON.stringify(this.todos)},deep:!0}}}),a=l,d=(n("52af"),n("2877")),u=Object(d["a"])(a,c,s,!1,null,null,null);u.options.__file="Todo.vue";var f=u.exports,p={name:"app",components:{Todo:f}},h=p,v=(n("034f"),Object(d["a"])(h,i,r,!1,null,null,null));v.options.__file="App.vue";var g=v.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(g)}}).$mount("#app")},bf4d:function(t,e,n){},c21b:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.9817b42b.png"}});
//# sourceMappingURL=app.fb2c7e03.js.map