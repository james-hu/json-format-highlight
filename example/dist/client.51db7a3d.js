webpackJsonp([0],[,function(r,e,t){"use strict";var n=t(11);e.a={data:function(){return{code:Object(n.a)({a:"string",b:111,c:!1,d:!0,e:null,f:{ww:"kkk",qq:[1,2,3],rr:{t:"awt"}},g:"<p>hello world</p>"},{falseColor:"#f66578"})}}}},function(r,e,t){r.exports=t(3)},function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(4),o=t(8);new n.a({el:"#app",render:function(r){return r(o.a)}})},,,,,function(r,e,t){"use strict";function n(r){t(9)}var o=t(1),l=t(12),a=t(10),u=n,s=a(o.a,l.a,!1,u,"data-v-52d35145",null);e.a=s.exports},function(r,e){},,function(r,e,t){"use strict";function n(r){return String(r).replace(/[&<>"'`=]/g,function(r){return a[r]})}function o(r){return JSON.parse('{"a": "'+r+'"}').a}var l={keyColor:"dimgray",numberColor:"lightskyblue",stringColor:"lightcoral",trueColor:"lightseagreen",falseColor:"#f66578",nullColor:"cornflowerblue"},a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#x60;","=":"&#x3D;"};e.a=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r){"string"!=typeof r&&(r=JSON.stringify(r,null,2));var t=Object.assign({},l,e);return r=r.replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">"),r.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+]?\d+)?)/g,function(r){var e=t.numberColor,l="";return/^"/.test(r)?/:$/.test(r)?e=t.keyColor:(e=t.stringColor,r='"'+n(o(r.substr(1,r.length-2)))+'"',l="word-wrap:break-word;white-space:pre-wrap;"):e=/true/.test(r)?t.trueColor:/false/.test(r)?t.falseColor:/null/.test(r)?t.nullColor:e,'<span style="'+l+"color:"+e+'">'+r+"</span>"})}}},function(r,e,t){"use strict";var n=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{attrs:{id:"app"}},[t("pre",[t("code",{domProps:{innerHTML:r._s(r.code)}})])])},o=[],l={render:n,staticRenderFns:o};e.a=l}],[2]);
//# sourceMappingURL=client.51db7a3d.js.map