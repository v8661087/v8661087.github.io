!function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=4)}({4:function(e,o,t){e.exports=t(5)},5:function(e,o){for(let e=0;e<$(".works-item").length;e++)$(".works-item")[e].onclick=function(){$(".modal")[e].style.display="block",$("body").css("overflow","hidden")};for(let e=0;e<$(".modal__close").length;e++)$(".modal__close")[e].onclick=function(){$(".modal")[e].style.display="none",$("body").css("overflow","auto")};$(document).click((function(e){for(let e=0;e<$(".modal").length;e++)event.target===$(".modal")[e]&&($(".modal")[e].style.display="none",$("body").css("overflow","auto"))})),$(document).keyup((function(e){if(27===e.keyCode)for(let e=0;e<$(".modal").length;e++)$(".modal")[e].style.display="none",$("body").css("overflow","auto")}))}});