(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>C});var r=t(601),a=t.n(r),o=t(314),i=t.n(o),d=t(417),c=t.n(d),s=new URL(t(322),t.b),l=new URL(t(109),t.b),u=new URL(t(813),t.b),p=new URL(t(279),t.b),m=new URL(t(58),t.b),h=new URL(t(908),t.b),f=i()(a()),g=c()(s),b=c()(l),v=c()(u),x=c()(p),y=c()(m),w=c()(h);f.push([e.id,`@font-face {\n    font-family: 'myFont';\n    src: url(${g});\n    font-weight:600;\n    font-style: normal;\n}\n\n\n\n.overlay{\n    position: absolute;\n    z-index: 1;\n    border-image-source:url(${b});\n    border-image-slice: fill 1;\n    opacity: 0.4;\n    width: 100%;\n    height: 100%;\n    \n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image:linear-gradient( 90deg,rgba(0,0,0,1),rgba(0,0,0,0.5)), url(${v}); \n    background-size: cover;\n    height: 100vh;  \n    \n}\n.home{\n    position: relative;\n    z-index: 2;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: space-between;\n    padding-top:40px;\n    \n    \n}\n.content{\n    \n    width: 100vw;\n    height: 100vh;\n}\n.menuCont,.aboutCont{\n    position: relative;\n    z-index: 2;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-left: 20%;\n    margin-right: 20%;\n    \n}\n.menuBox,.aboutBox{\n    display: flex;\n    width:100%;\n    height: 80%;\n    background-color: rgba(0, 0, 0,0.6);\n    border-radius: 10px;\n}\n.aboutBox{\n    padding: 30px;\n}\n.menuImg{\n    width:50%;\n    display: flex;\n    align-items: flex-end;\n    flex-direction: column;\n    justify-content: space-evenly;\n    padding-right:100px;\n}\n.img1{\n    background-image: url(${x});\n    background-size: cover;\n    border-radius: 50%;\n    height: 100px;\n    width: 100px;\n}\n.img2{\n    background-image: url(${y});\n    background-position: center;\n    background-size: cover;\n    border-radius: 50%;\n    height: 100px;\n    width: 100px;\n}\n.img3{\n    background-image: url(${w});\n    background-size: cover;\n    border-radius: 50%;\n    background-position: center;\n    height: 100px;\n    width: 100px;\n}\n.menuName{\n    font-size: 20px;\n    width:50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    padding-left: 100px;\n    color: white;\n    align-items: flex-start;\n   \n}\n.leftDiv{\n    \n    padding-left: 80px;\n}\nheader{\n    position: relative;\n    z-index: 2;\n    width: 100vw; \n    display: flex;\n    justify-content: flex-end;\n    padding: 40px 0px 40px 0px;\n    \n    \n\n}nav{\n    \n    padding: 10px 40px 10px 0px;\n    \n}\n.homeBtn,.menuBtn,.aboutBtn{\n    opacity: 0.8;\n    border: none;\n    width: 100px;\n    padding: 20px;\n    border-radius: 20px;\n    background-color: yellow;\n}\n.homeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.rName {\n    font-family: 'myFont';\n    font-size: 70px;\n    background: -webkit-linear-gradient(rgb(227, 251, 105), rgb(61, 78, 2));\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    \n  }\n.menu1{\n\n    height: 100px;\n    width: 100px;\n    background-position: center;\n    background-image:url(${x});\n   \n    \n}\nh3{\n    opacity: 0.7;\n    padding-bottom: 40px;\n    font-size: 20px;\n    color: white;\n    font-family:Arial, Helvetica, sans-serif;\n    font-style: italic;\n    letter-spacing: 3px;\n\n\n}\n.hBtn{\n    padding: 20px;\n    border-radius: 5px;\n    border: none;\n    background-color: rgb(158, 18, 18);\n    color:white;\n    opacity: 0.7;\n    font-size: 20px;\n}.aboutText{\n    color: white;\n    font-size: 18px;\n}\n\n\n@media only screen and (max-width:600px){\n\n    body{\n        height: auto;\n        background-size: contain;\n    \n    }header{\n        padding:0px;\n        align-items: center;\n        justify-content: center;\n    \n    }.homeBtn,.menuBtn,.aboutBtn{\n        \n        padding: 10px;\n    }.rName{\n        font-size: 50px;\n    }.home{\n        flex-direction: row;\n        align-items: center;\n        justify-content: center;\n    }\n    .leftDiv{\n        padding-left: 10px;\n    }nav{\n        padding: 10px 10px 10px 10px;\n    }.overlay{\n        height: auto;\n    }.menuCont,.aboutCont{\n        height: auto;\n        margin-left: 0%;\n        margin-right: 0%;\n        \n    }\n}\n\n`,""]);const C=f},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],d=0;d<e.length;d++){var c=e[d],s=r.base?c[0]+r.base:c[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=a(m,r);r.byIndex=d,n.splice(d,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var d=t(o[i]);n[d].references--}for(var c=r(e,a),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},322:(e,n,t)=>{e.exports=t.p+"8412ae43491e9a71f699.ttf"},279:(e,n,t)=>{e.exports=t.p+"b9484a7a5f2680cba441.jpeg"},813:(e,n,t)=>{e.exports=t.p+"29290526071ab22652fa.jpg"},908:(e,n,t)=>{e.exports=t.p+"e0d4ff9ba4233822b938.jpg"},109:(e,n,t)=>{e.exports=t.p+"da4a3df7cd9ffb041ef4.jpg"},58:(e,n,t)=>{e.exports=t.p+"2460c06af30c45189017.png"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}function r(){const e=document.createElement("div");e.classList.add("home");const n=document.querySelector(".content"),t=document.createElement("div"),r=document.createElement("h3"),a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div");i.classList.add("imgContR"),a.appendChild(i),o.classList.add("leftDiv"),a.classList.add("imgRight"),t.textContent="Putragis Restaurant",t.classList.add("rName"),r.textContent='"ENJOY EXOTIC CUISINES!"';const d=document.createElement("button");d.classList.add("hBtn"),d.textContent="Reserve Seat Now!",o.appendChild(t),o.appendChild(r),o.appendChild(d),e.appendChild(o),e.appendChild(a),n.appendChild(e)}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var a=t(72),o=t.n(a),i=t(825),d=t.n(i),c=t(659),s=t.n(c),l=t(56),u=t.n(l),p=t(540),m=t.n(p),h=t(113),f=t.n(h),g=t(208),b={};b.styleTagTransform=f(),b.setAttributes=u(),b.insert=s().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=m(),o()(g.A,b),g.A&&g.A.locals&&g.A.locals;const v=document.querySelector(".content"),x=document.querySelector(".menuBtn"),y=document.querySelector(".homeBtn"),w=document.querySelector(".aboutBtn");function C(){let e=v.lastElementChild;for(;e;)v.removeChild(e),e=v.lastElementChild}r(),x.addEventListener("click",(()=>{C(),function(){const e=document.querySelector(".content"),n=document.createElement("div");n.classList.add("menuCont");let t=document.createElement("div");t.classList.add("menuBox");let r=document.createElement("div");r.classList.add("menuName");let a=document.createElement("div"),o=document.createElement("h4");o.textContent="Bug Menu 1";let i=document.createElement("p");i.textContent='"Exotic bug bites on a stick"',a.appendChild(o),a.appendChild(i);let d=document.createElement("div"),c=document.createElement("h4");c.textContent="Bug Menu 2";let s=document.createElement("p");s.textContent='"Exotic bug salad on a fork"',d.appendChild(c),d.appendChild(s);let l=document.createElement("div"),u=document.createElement("h4");u.textContent="Bug Menu 3";let p=document.createElement("p");p.textContent='"Beef cake (with bugs inside!)"',l.appendChild(u),l.appendChild(p),r.appendChild(a),r.appendChild(d),r.appendChild(l);let m=document.createElement("div"),h=document.createElement("div"),f=document.createElement("div"),g=document.createElement("div");h.classList.add("img1"),f.classList.add("img2"),g.classList.add("img3"),m.classList.add("menuImg"),m.appendChild(h),m.appendChild(f),m.appendChild(g),t.appendChild(r),t.appendChild(m),n.appendChild(t),e.appendChild(n)}()})),y.addEventListener("click",(()=>{C(),r()})),w.addEventListener("click",(()=>{C(),function(){const e=document.querySelector(".content"),n=document.createElement("div");n.classList.add("aboutCont");const t=document.createElement("div");t.classList.add("aboutBox");const r=document.createElement("p");r.classList.add("aboutText"),r.textContent="\"Welcome to Putragis Restaurant: Where Bugs Become Bites!\n    \n    Greetings, adventurous eaters, and welcome to the buzzing world of Putragis Restaurant!\n    \n    At Putragis Restaurant, we're on a mission to revolutionize your taste buds one tiny leg at a time. Nestled in the heart of Bugsville, our restaurant offers a dining experience that's anything but ordinary. If you've ever wondered what a cricket croquette or a mealworm medley tastes like, you've come to the right place!\n    \n    Founded by a team of bug-enthusiasts-turned-chefs, Putragis Restaurant is not your average eatery. We believe that insects aren't just pests—they're culinary pioneers waiting to be explored. Our menu features a delightful array of dishes crafted from the finest locally sourced bugs, prepared with care and a dash of whimsy.\n    \n    Whether you're a seasoned bug-eater or a curious newcomer, our friendly staff is here to guide you through our menu. From crispy fried grasshoppers to savory silkworm stir-fry, each dish promises a delightful crunch and a burst of protein-packed flavor. And don't worry, we've mastered the art of making bugs look as appetizing as they taste!\n    \n    Join us at Putragis Restaurant, where every meal is an adventure and bugs are more than just friends—they're delicious! So grab your fork, summon your courage, and prepare to savor the unexpected. After all, life's too short to stick to the same old menu.\n    \n    See you soon at Putragis Restaurant—where bugs become bites that bite back!\n    \n   \n    \n   \"",t.appendChild(r),n.appendChild(t),e.appendChild(n)}()}))})();