let url ="https://api.twitch.tv/helix/streams?game_id=21779&language=zh"
$.ajax({
  url:
    url ,
    headers : {'Client-ID':'3ojsc7ffo62bgyp8yak47f53zd8mqf'},
  type: "GET"
  // 傳遞的參數
}).done(function(info) {
  console.log(info);
  for (let i = 0; i < info.data.length; i++) {
    let account = info.data[i].thumbnail_url.split("_")[2].split("-")[0]
   // console.log(account)
    $("#channels").append(
      "<div class='channel'>" +
        "<a href='https://twitch.tv/" +
        account +
        "'>" +
        "<img src='https://static-cdn.jtvnw.net/previews-ttv/live_user_" +
        account + "-360x204.jpg'>"
        +
        "<div class='channel-name'>" +
        info.data[i].user_name +"("+account+")" +
        "</div>" + "<span class='channel-viewer'><span class='circle'></span>"+info.data[i].viewer_count+"</span>" +
        "<div class='channel-status' title='"+info.data[i].title+"'>"  +
        info.data[i].title +
        "</div>" +
        "</a>" +
        "</div>"
    );
  }
});

$('#zh').click(function(e){
  if($(this).hasClass("select")){
  }else{
    $(this).addClass('select');
    $('#en').removeClass('select');
    $('#channels').empty();
    $.ajax({
      url:
        url ,
        headers : {'Client-ID':'3ojsc7ffo62bgyp8yak47f53zd8mqf'},
      type: "GET"
      // 傳遞的參數
    }).done(function(info) {
      console.log(info);
      for (let i = 0; i < info.data.length; i++) {
        let account = info.data[i].thumbnail_url.split("_")[2].split("-")[0]
       // console.log(account)
        $("#channels").append(
          "<div class='channel'>" +
            "<a href='https://twitch.tv/" +
            account +
            "'>" +
            "<img src='https://static-cdn.jtvnw.net/previews-ttv/live_user_" +
            account + "-360x204.jpg'>"
            +
            "<div class='channel-name'>" +
            info.data[i].user_name +"("+account+")" +
            "</div>" + "<span class='channel-viewer'><span class='circle'></span>"+info.data[i].viewer_count+"</span>" +
            "<div class='channel-status' title='"+info.data[i].title+"'>"  +
            info.data[i].title +
            "</div>" +
            "</a>" +
            "</div>"
        );
      }
    });
    
  }
})
$('#en').click(function(){
  if($(this).hasClass("select")){
  }else{
$(this).addClass('select');
$('#zh').removeClass('select');
$('#channels').empty();
let url = "https://api.twitch.tv/helix/streams?game_id=21779&language=en"
$.ajax({
  url:
    url ,
    headers : {'Client-ID':'3ojsc7ffo62bgyp8yak47f53zd8mqf'},
  type: "GET"
  // 傳遞的參數
}).done(function(info) {
  console.log(info);
  for (let i = 0; i < info.data.length; i++) {
    let account = info.data[i].thumbnail_url.split("_")[2].split("-")[0]
   // console.log(account)
    $("#channels").append(
      "<div class='channel'>" +
        "<a href='https://twitch.tv/" +
        account +
        "'>" +
        "<img src='https://static-cdn.jtvnw.net/previews-ttv/live_user_" +
        account + "-360x204.jpg'>"
        +
        "<div class='channel-name'>" +
        info.data[i].user_name +"("+account+")" +
        "</div>" + "<span class='channel-viewer'><span class='circle'></span>"+info.data[i].viewer_count+"</span>" +
        "<div class='channel-status' title='"+info.data[i].title+"'>"  +
        info.data[i].title +
        "</div>" +
        "</a>" +
        "</div>"
    );
  }
});
  }
})

