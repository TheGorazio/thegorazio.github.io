!function(e){function n(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var r={};return n.m=e,n.c=r,n.i=function(e){return e},n.d=function(e,r,a){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s="./app.js")}({"../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./css/main.sass":function(e,n,r){n=e.exports=r("../node_modules/css-loader/lib/css-base.js")(),n.push([e.i,"[type=range]{-webkit-appearance:none;margin:12px 0;width:100%}[type=range]:focus{outline:0}[type=range]:focus::-webkit-slider-runnable-track{background:#fbfbfc}[type=range]:focus::-ms-fill-lower{background:#eceff1}[type=range]:focus::-ms-fill-upper{background:#fbfbfc}[type=range]::-webkit-slider-runnable-track{cursor:pointer;height:8px;transition:all .2s ease;width:100%;box-shadow:1px 1px 1px rgba(0,0,0,.2),0 0 1px hsla(0,0%,5%,.2);background:#eceff1;border:2px solid #cfd8dc;border-radius:5px}[type=range]::-webkit-slider-thumb{box-shadow:4px 4px 4px rgba(0,0,0,.2),0 0 4px hsla(0,0%,5%,.2);background:#607d8b;border:2px solid #eceff1;border-radius:12px;cursor:pointer;height:24px;width:24px;-webkit-appearance:none;margin-top:-10px}[type=range]::-moz-range-track{cursor:pointer;height:8px;transition:all .2s ease;width:100%;box-shadow:1px 1px 1px rgba(0,0,0,.2),0 0 1px hsla(0,0%,5%,.2);background:#eceff1;border:2px solid #cfd8dc;border-radius:5px}[type=range]::-moz-range-thumb{box-shadow:4px 4px 4px rgba(0,0,0,.2),0 0 4px hsla(0,0%,5%,.2);background:#607d8b;border:2px solid #eceff1;border-radius:12px;cursor:pointer;height:24px;width:24px}[type=range]::-ms-track{cursor:pointer;height:8px;transition:all .2s ease;width:100%;background:transparent;border-color:transparent;border-width:12px 0;color:transparent}[type=range]::-ms-fill-lower{background:#dde3e6}[type=range]::-ms-fill-lower,[type=range]::-ms-fill-upper{box-shadow:1px 1px 1px rgba(0,0,0,.2),0 0 1px hsla(0,0%,5%,.2);border:2px solid #cfd8dc;border-radius:10px}[type=range]::-ms-fill-upper{background:#eceff1}[type=range]::-ms-thumb{box-shadow:4px 4px 4px rgba(0,0,0,.2),0 0 4px hsla(0,0%,5%,.2);background:#607d8b;border:2px solid #eceff1;border-radius:12px;cursor:pointer;height:24px;width:24px;margin-top:0}*{padding:0;margin:0;font-family:Droid Sans,sans-serif}h1,h2,h3{color:#000}p{color:#7a7677;font-size:1em}header{display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:center}header .header_top{background-color:#2d97d4;width:100%;height:100px;z-index:1}header .header_top *{color:#fff}header .header_top .menu{position:relative}header .header_top .menu .menu__el{text-transform:uppercase;font-weight:700;display:none;margin:20px}header .header_top .menu .menu__el.active{display:block}header .header_top .menu .menu__el i{background-color:#fff;color:#2c97d4;margin:10px}header .header_avatar{width:120px;height:120px;border-radius:50%;border:5px solid #2d97d4;background-image:url("+r("./assets/avatar.jpg")+");background-color:#fff;background-size:cover;transform:translateY(-60px);z-index:5;overflow:hidden}header .header_avatar img{height:150px;width:120px;border-radius:50%}header .header_bot{text-align:center;transform:translateY(-40px);margin-bottom:30px}.main{width:80%;margin:0 auto;display:flex;flex-direction:column;justify-content:space-between}.main .main__col:first-child{flex:1}.main .main__el{background-color:#fbfbfb;border-bottom:1px solid #d3d3d3;padding:25px;margin:25px;position:relative}.main .main__el h3{margin-bottom:15px}.main .main__el .el__icon{position:absolute;top:10px;right:10px;border-radius:50%}.main .main__el li{list-style:none;margin-top:15px}.main .main__el li i{margin-right:15px}.main .main__el ul.el__contacts li,.main .main__el ul.el__skills li{display:flex;align-items:center}.main .main__el ul.el__skills li .skill__icon{width:10%;margin-right:15px}.main .main__el ul.el__skills li .skill__info,.main .main__el ul.el__skills li .skill__info input[type=range]{width:90%}.main .main__el ul.el__languages{display:flex;justify-content:space-around}.main .main__el ul.el__languages li{display:flex;flex-direction:column;align-items:center;flex:1;margin-right:15px;margin-left:15px}.main .main__el ul.el__languages li .flag{flex:1;background-size:cover}.main .main__el ul.el__languages li .flag img{height:100px}.main .main__el ul.el__languages li .language .language__name{width:100%;margin-top:10px;margin-bottom:10px;text-align:center}.main .main__el ul.el__languages li .language .language__level{align-items:center;width:100%;display:flex;justify-content:space-around}.main .main__el ul.el__languages li .language .language__level i{flex:1}.main .main__el ul.el__languages li .language .language__level i.golden{color:gold}.main .main__cols{flex:3;display:flex;flex-direction:row;justify-content:space-between}.main .main__cols .main__col{display:flex;flex-direction:column;justify-content:space-between;flex:3}.main .main__cols .main__col:last-child{flex:2;justify-content:flex-start}i.fa:not(.fa-star){width:40px;height:40px;line-height:40px;font-size:20px;text-align:center;border-radius:50%;background-color:#2d97d4;color:#fff}@media (max-width:900px){p{font-size:.8em}.main{width:90%}.main .main__el{flex:1}.main .main__el ul.el__skills li{display:flex;align-items:center}.main .main__el ul.el__skills li .skill__icon{width:10%;margin-right:35px}.main .main__el ul.el__skills li .skill__info{width:80%}.main .main__el ul.el__skills li .skill__info input[type=range]{width:90%}.main .main__cols,.main .main__el ul.el__languages{flex-direction:column}}",""])},"../node_modules/css-loader/lib/css-base.js":function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var r=this[n];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(n,r){"string"==typeof n&&(n=[[null,n,""]]);for(var a={},t=0;t<this.length;t++){var i=this[t][0];"number"==typeof i&&(a[i]=!0)}for(t=0;t<n.length;t++){var o=n[t];"number"==typeof o[0]&&a[o[0]]||(r&&!o[2]?o[2]=r:r&&(o[2]="("+o[2]+") and ("+r+")"),e.push(o))}},e}},"../node_modules/style-loader/addStyles.js":function(e,n){function r(e,n){for(var r=0;r<e.length;r++){var a=e[r],t=c[a.id];if(t){t.refs++;for(var i=0;i<t.parts.length;i++)t.parts[i](a.parts[i]);for(;i<a.parts.length;i++)t.parts.push(s(a.parts[i],n))}else{for(var o=[],i=0;i<a.parts.length;i++)o.push(s(a.parts[i],n));c[a.id]={id:a.id,refs:1,parts:o}}}}function a(e){for(var n=[],r={},a=0;a<e.length;a++){var t=e[a],i=t[0],o=t[1],l=t[2],s=t[3],d={css:o,media:l,sourceMap:s};r[i]?r[i].parts.push(d):n.push(r[i]={id:i,parts:[d]})}return n}function t(e,n){var r=g(),a=x[x.length-1];if("top"===e.insertAt)a?a.nextSibling?r.insertBefore(n,a.nextSibling):r.appendChild(n):r.insertBefore(n,r.firstChild),x.push(n);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(n)}}function i(e){e.parentNode.removeChild(e);var n=x.indexOf(e);n>=0&&x.splice(n,1)}function o(e){var n=document.createElement("style");return n.type="text/css",t(e,n),n}function l(e){var n=document.createElement("link");return n.rel="stylesheet",t(e,n),n}function s(e,n){var r,a,t;if(n.singleton){var s=_++;r=h||(h=o(n)),a=d.bind(null,r,s,!1),t=d.bind(null,r,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=l(n),a=u.bind(null,r),t=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=o(n),a=p.bind(null,r),t=function(){i(r)});return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else t()}}function d(e,n,r,a){var t=r?"":a.css;if(e.styleSheet)e.styleSheet.cssText=b(n,t);else{var i=document.createTextNode(t),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(i,o[n]):e.appendChild(i)}}function p(e,n){var r=n.css,a=n.media;if(a&&e.setAttribute("media",a),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function u(e,n){var r=n.css,a=n.sourceMap;a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var t=new Blob([r],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(t),i&&URL.revokeObjectURL(i)}var c={},f=function(e){var n;return function(){return"undefined"==typeof n&&(n=e.apply(this,arguments)),n}},m=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=f(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,_=0,x=[];e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},"undefined"==typeof n.singleton&&(n.singleton=m()),"undefined"==typeof n.insertAt&&(n.insertAt="bottom");var t=a(e);return r(t,n),function(e){for(var i=[],o=0;o<t.length;o++){var l=t[o],s=c[l.id];s.refs--,i.push(s)}if(e){var d=a(e);r(d,n)}for(var o=0;o<i.length;o++){var s=i[o];if(0===s.refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete c[s.id]}}}};var b=function(){var e=[];return function(n,r){return e[n]=r,e.filter(Boolean).join("\n")}}()},"./app.js":function(e,n,r){r("./css/main.sass"),Array.from(document.querySelectorAll("input[type=range]")).map(function(e){e.disabled=!0})},"./assets/avatar.jpg":function(e,n,r){e.exports=r.p+"1dd9318c578eda196bc32c6ac5f32c4a.jpg"},"./css/main.sass":function(e,n,r){var a=r("../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./css/main.sass");"string"==typeof a&&(a=[[e.i,a,""]]);r("../node_modules/style-loader/addStyles.js")(a,{});a.locals&&(e.exports=a.locals)}});