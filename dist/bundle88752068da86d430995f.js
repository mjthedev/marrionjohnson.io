(()=>{"use strict";var n={13:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const A=a},539:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const A=a},144:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,'body{margin:0px;background-color:#25292d}.header{color:#fff;font-size:14px;text-align:center;margin-bottom:60px;font-family:"JetBrains Mono",monospace}.divHeader{color:#fff;font-size:40px;text-align:left;font-family:"JetBrains Mono",monospace}.divText{color:#fff;font-size:16px;text-align:center;margin-top:50px;font-family:"JetBrains Mono",monospace;text-align:left}.navBar{height:100px;text-align:center;border:#fff;border-style:solid;position:sticky;top:0;width:100%;background-color:#191c1f}.commonDiv{display:flex;justify-content:space-between;width:1200px;height:530px;margin:auto;margin-bottom:30px;background-color:#25292d;text-align:center}.contentHeaders{display:flex;justify-content:space-between;width:1200px;margin:auto;margin-bottom:30px;background-color:#25292d;font-size:20;color:#fff;font-family:"JetBrains Mono",monospace}.viewAll{display:inline;width:80px;padding:20px;font-size:8px;text-align:right}.latestReadsDiv{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;width:1200px;height:530px;margin:auto;margin-bottom:30px;background-color:#25292d}.lrd{border:#fff;border-style:solid;border-radius:4px;background-color:#191c1f}.nestedDiv{text-align:center;width:620px}.commonDivHeaderImage{width:200px;height:200px;margin:100px}.nameIcon{margin-right:20px;height:0px;display:inline;border:#fff;border-style:solid}ul{margin-top:50px;font-size:20px;text-align:center}li{display:inline;margin-right:40px}a{color:#fff;text-decoration:none;font-family:"JetBrains Mono",monospace}a:hover{color:#ffdab9;text-decoration:underline}',"",{version:3,sources:["webpack://./src/styles/main.scss"],names:[],mappings:"AAMA,KACI,UAAA,CACA,wBANY,CAUhB,QACI,UAAA,CACA,cAAA,CACA,iBAAA,CACA,kBAAA,CACA,sCAbkB,CAiBtB,WACI,UAAA,CACA,cAAA,CACA,eAAA,CACA,sCArBkB,CAyBtB,SACI,UAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,sCA9BkB,CA+BlB,eAAA,CAKJ,QAEI,YAAA,CACA,iBAAA,CACA,WAAA,CACA,kBAAA,CACA,eAAA,CACA,KAAA,CACA,UAAA,CACA,wBAAA,CAKJ,WACI,YAAA,CACA,6BAAA,CACA,YAAA,CACA,YAAA,CACA,WAAA,CACA,kBAAA,CACA,wBA3DY,CA4DZ,iBAAA,CAKJ,gBACI,YAAA,CACA,6BAAA,CACA,YAAA,CACA,WAAA,CACA,kBAAA,CACA,wBAvEY,CA0EZ,YAAA,CACA,UAAA,CACA,sCA1EkB,CA6EtB,SAEI,cAAA,CACA,UAAA,CACA,YAAA,CACA,aAAA,CACA,gBAAA,CAOJ,gBACI,YAAA,CACA,iCAAA,CACA,QAAA,CACA,YAAA,CACA,YAAA,CACA,WAAA,CACA,kBAAA,CACA,wBApGY,CA6GhB,KACI,WAAA,CACA,kBAAA,CACA,iBAAA,CACA,wBAhHc,CAoHlB,WACI,iBAAA,CACA,WAAA,CAKJ,sBACI,WAAA,CACA,YAAA,CACA,YAAA,CAOJ,UACI,iBAAA,CACA,UAAA,CACA,cAAA,CACA,WAAA,CACA,kBAAA,CAKJ,GACI,eAAA,CACA,cAAA,CACA,iBAAA,CAIJ,GACI,cAAA,CACA,iBAAA,CAEJ,EACI,UAAA,CACA,oBAAA,CACA,sCA5JkB,CA8JtB,QACI,aAAA,CACA,yBAAA",sourcesContent:["\n@import 'variables.scss';\n$primary-color: #25292d;\n$secondary-color: rgb(25,28,31);\n$primary-font-family: \"JetBrains Mono\",monospace;\n\nbody {\n    margin: 0px;\n    background-color: $primary-color;\n}\n\n\n.header{\n    color: white;\n    font-size: 14px;\n    text-align: center;\n    margin-bottom: 60px;\n    font-family: $primary-font-family;\n\n}\n\n.divHeader{\n    color: white;\n    font-size: 40px;\n    text-align: left;\n    font-family: $primary-font-family;\n}\n\n\n.divText{\n    color: white;\n    font-size: 16px;\n    text-align: center;\n    margin-top: 50px;\n    font-family: $primary-font-family;\n    text-align: left;\n\n}\n\n\n.navBar{\n\n    height: 100px;\n    text-align: center;\n    border: white;\n    border-style: solid;\n    position:sticky;\n    top:0;\n    width: 100%;\n    background-color: rgb(25,28,31);\n\n}\n\n\n.commonDiv{\n    display: flex;\n    justify-content: space-between;\n    width: 1200px;\n    height: 530px;\n    margin: auto;\n    margin-bottom: 30px;\n    background-color: $primary-color;\n    text-align: center;\n    // border: wheat;\n    // border-style: solid;\n}\n\n.contentHeaders  {\n    display: flex;\n    justify-content: space-between;\n    width: 1200px;\n    margin: auto;\n    margin-bottom: 30px;\n    background-color: $primary-color;\n    // border: wheat;\n    // border-style: solid;\n    font-size: 20;\n    color: white;\n    font-family: $primary-font-family;  \n}\n\n.viewAll {\n    // display: inline;\n    display: inline;\n    width: 80px;\n    padding: 20px;\n    font-size: 8px;\n    text-align: right;\n    // border: wheat;\n    // border-style: solid;\n    // float: right;\n    \n}\n\n.latestReadsDiv {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 20px;\n    width: 1200px;\n    height: 530px;\n    margin: auto;\n    margin-bottom: 30px;\n    background-color: $primary-color;\n    // border: wheat;\n    // border-style: solid;\n}\n\n\n\n\n\n.lrd {\n    border: white;\n    border-style: solid;\n    border-radius: 4px;\n    background-color: $secondary-color;\n    \n}\n\n.nestedDiv{\n    text-align: center;\n    width: 620px;\n    // border: aqua;\n    // border-style: solid; \n}\n\n.commonDivHeaderImage {\n    width: 200px;\n    height: 200px; \n    margin: 100px;   \n    // border: aqua;\n    // border-style: solid;\n}\n\n\n\n.nameIcon {\n    margin-right: 20px;\n    height: 0px;\n    display: inline;\n    border: white;\n    border-style: solid;\n\n}\n  \n\nul{\n    margin-top: 50px;\n    font-size: 20px;\n    text-align: center;\n\n}\n\nli{\n    display: inline;\n    margin-right: 40px;\n}\na{\n    color: white;\n    text-decoration: none;\n    font-family: $primary-font-family;\n}\na:hover{\n    color:peachpuff;\n    text-decoration: underline;\n}\n\n"],sourceRoot:""}]);const A=a},215:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"@media only screen and (min-width: 320px)and (max-width: 667px)and (orientation: portrait){body{background-color:aqua}}","",{version:3,sources:["webpack://./src/styles/mobile.scss"],names:[],mappings:"AAIA,2FAII,KACI,qBAAA,CAAA",sourcesContent:["\n\n\n\n@media only screen \nand (min-width: 320px) \nand (max-width: 667px)\nand (orientation: portrait){\n    body {\n        background-color: aqua;\n    }\n}"],sourceRoot:""}]);const A=a},853:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const A=a},821:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const A=a},480:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const A=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],A=0;A<n.length;A++){var s=n[A],c=r.base?s[0]+r.base:s[0],l=i[c]||0,d="".concat(c," ").concat(l);i[c]=l+1;var p=t(d),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=o(u,r);r.byIndex=A,e.splice(A,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var A=t(i[a]);e[A].references--}for(var s=r(n,o),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),A=t(565),s=t.n(A),c=t(216),l=t.n(c),d=t(589),p=t.n(d),u=t(480),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;var C=t(144),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(C.Z,m),C.Z&&C.Z.locals&&C.Z.locals;var g=t(13),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;var y=t(821),x={};x.styleTagTransform=p(),x.setAttributes=s(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=l(),e()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals;var b=t(853),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),e()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;var w=t(215),B={};B.styleTagTransform=p(),B.setAttributes=s(),B.insert=a().bind(null,"head"),B.domAPI=o(),B.insertStyleElement=l(),e()(w.Z,B),w.Z&&w.Z.locals&&w.Z.locals;var I=t(539),Z={};Z.styleTagTransform=p(),Z.setAttributes=s(),Z.insert=a().bind(null,"head"),Z.domAPI=o(),Z.insertStyleElement=l(),e()(I.Z,Z),I.Z&&I.Z.locals&&I.Z.locals,t.p,console.log((function(){return"I dont trust stairs, thier always up to something"}))})()})();
//# sourceMappingURL=bundle88752068da86d430995f.js.map