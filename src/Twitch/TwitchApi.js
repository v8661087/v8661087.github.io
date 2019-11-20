$(document).ready(function() {
  GetStreams("zh");
});
function GetStreams(language) {
  $.ajax({
    url: `https://api.twitch.tv/helix/streams?game_id=21779&language=${language}`,
    headers: { "Client-ID": "3ojsc7ffo62bgyp8yak47f53zd8mqf" },
    type: "GET"
  }).done(function(info) {
    for (let i = 0; i < info.data.length; i++) {
      let account = info.data[i].thumbnail_url
        .split("live_user_")[1]
        .split("-{width}")[0];
      $("#channels").append(
        `<div class="channel">
        <a href="https://twitch.tv/${account}">
          <img src="https://static-cdn.jtvnw.net/previews-ttv/live_user_${account}-360x204.jpg"></img>
          <div class="channel-name">${info.data[i].user_name}(${account})</div>
          <span class="channel-viewer"><span class="circle"></span>${info.data[i].viewer_count}</span>
          <div class="channel-status" title="${info.data[i].title}">${info.data[i].title}</div>
        </a>
      </div>
      `
      );
    }
  });
}

$("#zh").click(function() {
  $(this).addClass("select");
  $("#en").removeClass("select");
  $("#channels").empty();
  GetStreams("zh");
});
$("#en").click(function() {
  $(this).addClass("select");
  $("#zh").removeClass("select");
  $("#channels").empty();
  GetStreams("en");
});
