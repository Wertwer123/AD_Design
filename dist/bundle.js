(()=>{"use strict";var e={598:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,".heroSection\n{\n    height: 3000px;   \n}\n\n.heroSection div\n{\n    position: sticky;\n    top: 0;\n    height: 100vh;\n}\n\n.heroSectionHeader\n{\n    font-size: 90px;\n    position: absolute;\n    transform-origin: center;\n    left: 50%; /* Move 50% from the left */\n    top: 25%;\n    transform: translateX(-50%);\n    color: black;\n}\n\n.heroSectionSubHeader\n{\n    font-size: 65px;\n    position: absolute;\n    transform-origin: center;\n    left: 55%; /* Move 50% from the left */\n    top: 32%;\n    transform: rotateZ(-5deg) translateX(-43%);\n    color: bisque;\n}\n\n.heroSectionVideo\n{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n",""]);const c=i},198:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,".adSection\n{\n    background: black;\n    height: 1000px;\n    border: solid;\n    border-bottom: 2px;\n    border-color: whitesmoke;\n}\n\n.adSectionOverlayFade\n{\n    position: relative;\n    background: green;\n    width: 100%;\n    height: 100%;\n    \n    \n}\n\n.adSectionOverlayFade.hidden\n{\n    animation: fadeOut 1.0s ease-in;\n    opacity: 0;\n}\n\n.adSectionImage\n{\n    position: absolute;\n    left: 10%;\n    top: 10%;\n}\n\n@keyframes fadeOut\n{\n    0%\n    {\n        opacity: 1;\n    }\n    100%\n    {\n        opacity: 0;\n    }\n\n}",""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},178:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/TestVideo.mp4"},825:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var r=t(72),o=t.n(r),a=t(206),i=t.n(a),c=t(659),s=t.n(c),d=t(56),l=t.n(d),u=t(540),p=t.n(u),f=t(113),h=t.n(f),v=t(598),m={};m.styleTagTransform=h(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=p(),o()(v.A,m);const g=v.A&&v.A.locals?v.A.locals:void 0},781:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var r=t(72),o=t.n(r),a=t(206),i=t.n(a),c=t(659),s=t.n(c),d=t(56),l=t.n(d),u=t(540),p=t.n(u),f=t(113),h=t.n(f),v=t(198),m={};m.styleTagTransform=h(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=p(),o()(v.A,m);const g=v.A&&v.A.locals?v.A.locals:void 0},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},206:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},974:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0});const t=document.querySelectorAll(".adSectionOverlayFade");console.log(t);const r=new IntersectionObserver(((e,n)=>{e.forEach((e=>{e.isIntersecting&&(e.target.classList.add("hidden"),n.unobserve(e.target))}))}),{threshold:.3});t.forEach((e=>{r.observe(e)}))},875:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0});const t=document.getElementById("heroSection"),r=document.getElementById("heroSectionVideo");t&&r.pause();const o=()=>{if(!t)return;let e=(window.scrollY-t?.offsetTop)/(t.clientHeight-window.innerHeight);e=Math.max(0,e),e=Math.min(e,1),r.duration>0&&(r.currentTime=r.duration*e)};o(),window.addEventListener("scroll",o)}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,t(825),t(178),t(875),t(781),t(974)})();