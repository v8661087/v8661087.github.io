!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}({4:function(e,t,n){e.exports=n(5)},5:function(e,t){$(document).scroll((function(){var e=$(this).scrollTop();const t=document.querySelector(".about-content"),n=document.querySelector(".skill-content"),i=document.querySelector(".works-content"),o=document.querySelector(".contact-content");e>120&&t.classList.add("animated","slideInUp"),e<=120&&t.classList.remove("animated","slideInUp"),e>$(".main").height()+$(".about").height()-$(window).height()+81&&n.classList.add("animated","slideInUp"),e<=$(".main").height()+$(".about").height()-$(window).height()+81&&n.classList.remove("animated","slideInUp"),e>$(".main").height()+$(".about").height()+$(".skill").height()-$(window).height()+81&&i.classList.add("animated","zoomIn"),e<=$(".main").height()+$(".about").height()+$(".skill").height()-$(window).height()+81&&i.classList.remove("animated","zoomIn"),e>$(".main").height()+$(".about").height()+$(".skill").height()+$(".works").height()-$(window).height()+81&&o.classList.add("animated","fadeInLeft"),e<$(".main").height()+$(".about").height()+$(".skill").height()+$(".works").height()-$(window).height()+81&&o.classList.remove("animated","fadeInLeft")}))}});