let market = [];
let food = [];
async function getMarket() {
  await $.ajax({
    url:
      "https://data.taipei/api/getDatasetInfo/downloadResource?id=8a569b5b-0cb1-4c7f-a064-780b3301354c&rid=9744ea1c-aafb-471c-8bb8-04f398ad415a",
    dataType: "json",
  }).done(function (info) {
    market = [...info];
  });
  if (food.length) {
    $(".loading").css("display", "none");
  }
}
async function getFood() {
  await $.ajax({
    url:
      "https://data.taipei/api/getDatasetInfo/downloadResource?id=8a569b5b-0cb1-4c7f-a064-780b3301354c&rid=da4a214f-0c3d-437e-9312-34e5671db2a8",
    dataType: "json",
  }).done(function (info) {
    food = [...info];
  });
  if (market.length) {
    $(".loading").css("display", "none");
  }
}
$(document).ready(function () {
  $(".loading").css("display", "flex");
  getMarket();
  getFood();
});

function showMarket() {
  let name = market.find((item) => item.夜市名稱 === $("#mySelect").val());
  if (name.交通資訊 !== null) {
    $("#NightMarket").append(
      `<div>夜市名稱:${name.夜市名稱}<br/>
              交通資訊${name.交通資訊}<br/>
              所在位置:${name.所在位置}<br/>
              營業時間:${name.營業時間}</div>`
    );
  } else {
    $("#NightMarket").append(
      `<div>夜市名稱:${name.夜市名稱}<br/>
              所在位置:${name.所在位置}<br/>
              營業時間:${name.營業時間}</div>`
    );
  }
}

function showFood() {
  let filtered = food.filter((item) => item.夜市名稱 === $("#mySelect").val());
  for (i = 0; i < filtered.length; i++) {
    if (filtered[i].夜市名稱 === $("#mySelect").val()) {
      $("#listContent").append(
        `<div class='listEach'>
            <div class='name'>${filtered[i].攤位名稱}</div>
            <div class='food'>${filtered[i].其他相關產品}</div>
          </div>`
      );
    }
  }
}

function showInformation() {
  $("#listContent").empty();
  $("#NightMarket").empty();
  if ($("#mySelect").val() !== "請選擇") {
    var retry = setInterval(function () {
      if (market.length && food.length) {
        clearInterval(retry);
        showMarket();
        showFood();
      }
    }, 1000);
  }
}

$("#mySelect").on("change", showInformation);
