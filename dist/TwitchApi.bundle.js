!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}({8:function(e,t,n){e.exports=n(9)},9:function(e,t){function n(e){$.ajax({url:"https://api.twitch.tv/helix/streams?game_id=21779&language=".concat(e),headers:{"Client-ID":"3ojsc7ffo62bgyp8yak47f53zd8mqf"},type:"GET"}).done((function(e){for(var t=0;t<e.data.length;t++){var n=e.data[t].thumbnail_url.split("live_user_")[1].split("-{width}")[0];$("#channels").append('<div class="channel">\n        <a href="https://twitch.tv/'.concat(n,'">\n          <img src="https://static-cdn.jtvnw.net/previews-ttv/live_user_').concat(n,'-360x204.jpg"></img>\n          <div class="channel-name">').concat(e.data[t].user_name,"(").concat(n,')</div>\n          <span class="channel-viewer"><span class="circle"></span>').concat(e.data[t].viewer_count,'</span>\n          <div class="channel-status" title="').concat(e.data[t].title,'">').concat(e.data[t].title,"</div>\n        </a>\n      </div>\n      "))}}))}$(document).ready((function(){n("zh")})),$("#zh").click((function(){$(this).addClass("select"),$("#en").removeClass("select"),$("#channels").empty(),n("zh")})),$("#en").click((function(){$(this).addClass("select"),$("#zh").removeClass("select"),$("#channels").empty(),n("en")}))}});