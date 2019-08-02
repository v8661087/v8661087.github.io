var client_Id = "3ojsc7ffo62bgyp8yak47f53zd8mqf"; //developer id
var game = "League%20of%20Legends"; //game type
var limit = 20; //max object
var language = "zh-tw";
$.ajax({
  url:
    "https://api.twitch.tv/kraken/streams/?client_id=" +
    client_Id +
    "&amp;game=" +
    game +
    "&amp;limit=" +
    limit +
    "&amp;language=" +
    language,
  dataType: "jsonp",
  // 可以自訂回傳方法的字串。預設是 callback
  jsonp: "callback",
  // 規定只能用 GET
  type: "GET"
  // 傳遞的參數
}).done(function(info) {
  console.log(info);
  for (let i = 0; i < info.streams.length; i++) {
    $("#channels").append(
      "<div class='channel'>" +
        "<a href='" +
        info.streams[i].channel.url +
        "'>" +
        "<img src='" +
        info.streams[i].preview.medium +
        "'>" +
        "<img class='channel-logo' src='" +
        info.streams[i].channel.logo +
        "'>" +
        "<div class='channel-status'>" +
        info.streams[i].channel.status +
        "</div>" +
        "<div class='channel-name'>" +
        info.streams[i].channel.name +
        "</div>" +
        "</a>" +
        "</div>"
    );
  }
});
