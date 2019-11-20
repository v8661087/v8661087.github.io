$("#mySelect").on("change", GetMarket);
$("#mySelect").on("change", GetFood);

function GetMarket() {
  $("#listContent").empty();
  $("#NightMarket").empty();
  $.ajax({
    url:
      "https://data.taipei/api/getDatasetInfo/downloadResource?id=8a569b5b-0cb1-4c7f-a064-780b3301354c&rid=9744ea1c-aafb-471c-8bb8-04f398ad415a",
    dataType: "json"
  }).done(function(info) {
    for (i = 0; i < 15; i++) {
      if (info[i].夜市名稱 === $("#mySelect").val()) {
        if (info[i].交通資訊 !== null) {
          $("#NightMarket").append(
              `<div>夜市名稱:${info[i].夜市名稱}<br/>
              交通資訊${info[i].交通資訊}<br/>
              所在位置:${info[i].所在位置}<br/>
              營業時間:${info[i].營業時間}</div>`
          );
        } else {
          $("#NightMarket").append(
            `<div>夜市名稱:${info[i].夜市名稱}<br/>
              所在位置:${info[i].所在位置}<br/>
              營業時間:${info[i].營業時間}</div>`
          );
        }
      }
    }
  });
}

function GetFood() {
  $.ajax({
    url:
      "https://data.taipei/api/getDatasetInfo/downloadResource?id=8a569b5b-0cb1-4c7f-a064-780b3301354c&rid=da4a214f-0c3d-437e-9312-34e5671db2a8",
    dataType: "json"
  }).done(function(msg) {
    for (i = 0; i < 965; i++) {
      if (msg[i].夜市名稱 === $("#mySelect").val()) {
        $("#listContent").append(
          `<div class='listEach'>
            <div class='name'>${msg[i].攤位名稱}</div>
            <div class='food'>${msg[i].其他相關產品}</div>
          </div>`
        );
      }
    }
  });
}
