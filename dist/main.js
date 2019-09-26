// ==UserScript==
// @name Inline Math for Notion.so
// @version 0.2.1
// @match https://www.notion.so/*
// @grant GM_addStyle
// @require https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.js
// ==/UserScript==
!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o=function(){const t=document.querySelectorAll('span[style*="monospace"]');Array.prototype.slice.call(t).filter(t=>t.textContent.startsWith("math:")).forEach(t=>{const e=t.textContent.slice(5).trim();t.style.color=null,t.style.background=null,katex.render(e,t,{throwOnError:!1,font:"mathit"})})};var r=function t(){if(function(){const t=document.querySelectorAll('span[style*="monospace"]');return Array.prototype.slice.call(t).filter(t=>t.textContent.startsWith("math:"))}().length<1)return setTimeout(t,500),!1;o()};let i="",l=[],a={x:0,y:0};function c(){l.forEach(t=>t.remove());const t=document.getElementById("tooltip-inline-math");t&&t.remove(),l=[]}var u=function(t){"F2"!=t.key||t.ctrlKey||t.shiftKey||t.altKey||o()},d=function(t){const e=t.target.querySelectorAll('span[style*="monospace"]'),n=Array.prototype.slice.call(e).filter(t=>t.textContent.startsWith("math:"));if(n.length<1)return!1;c();let o=function(){let t=document.createElement("div");return t.setAttribute("id","tooltip-inline-math"),t.classList.add("tooltip"),t.style=`top: ${a.y}px; left: ${a.x}px;`,t.innerHTML="<div>Math Inline Preview</div>",t}();n.forEach(t=>{const e=t.textContent.slice(5).trim();let n=document.createElement("div");n.classList.add("tooltip__preview"),l.push(n),o.appendChild(n),katex.render(e,n,{throwOnError:!1,font:"mathit"})}),document.body.appendChild(o)},s=function(t){c(),o()},p=function(t){const e=document.getElementById("tooltip-inline-math");if(null===e)return!1;a.x=t.clientX,a.y=t.clientY,e.style=`top: ${a.y}px; left: ${a.x}px;`},f=function(t){(function(t){return"polygon"===t.target.nodeName||"triangle"===t.target.classList[0]||void 0!==t.target.attributes.role})(t)&&setTimeout(o,500),window.location.href!==i&&(i=window.location.href,r())};GM_addStyle("\n  .notion-frame span .katex {\n    padding-right: 0 !important;\n  }\n\n  .tooltip {\n    color: white;\n    background-color: rgb(55, 53, 47);\n    border-radius: 8px;\n    padding: 10px;\n    position: absolute;\n    z-index: 999;\n  }\n\n  .tooltip__preview {\n    background-color: #eee;\n    color: black;\n    padding: 5px;\n    border-radius: 8px;\n    margin-top: 10px;\n  }\n"),window.addEventListener("keydown",u),window.addEventListener("keyup",d),window.addEventListener("focusout",s),window.addEventListener("mousemove",p),window.addEventListener("click",f),r()}]);