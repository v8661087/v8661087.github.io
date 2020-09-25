var market = [];
var food = [];
async function getMarket() {
  try {
    await $.ajax({
      url:
        "https://data.taipei/api/getDatasetInfo/downloadResource?id=8a569b5b-0cb1-4c7f-a064-780b3301354c&rid=9744ea1c-aafb-471c-8bb8-04f398ad415a",
      dataType: "json",
    }).done(function (res) {
      market = [...res];
    });
  } catch (err) {
    console.log(err);
  }
}
async function getFood() {
  try {
    await $.ajax({
      url:
        "https://data.taipei/api/getDatasetInfo/downloadResource?id=8a569b5b-0cb1-4c7f-a064-780b3301354c&rid=da4a214f-0c3d-437e-9312-34e5671db2a8",
      dataType: "json",
    }).done(function (res) {
      food = [...res];
    });
  } catch (err) {
    console.log(err);
  }
}
async function getData() {
  await Promise.all([getMarket(), getFood()]);
  if (market.length && food.length) {
    $(".loading").css("display", "none");
    $("#mySelect").removeAttr("disabled");
    $("select").css("cursor", "auto");
  } else {
    alert("api error");
  }
}

getData();

function showMarket() {
  let name = market.find((item) => item.夜市名稱 === $("#mySelect").val());
  if (name.交通資訊 !== null) {
    $("#market").append(
      `夜市名稱: ${name.夜市名稱}<br/>
              交通資訊: ${name.交通資訊}<br/>
              所在位置: ${name.所在位置}<br/>
              營業時間: ${name.營業時間}`
    );
  } else {
    $("#market").append(
      `夜市名稱: ${name.夜市名稱}<br/>
              所在位置: ${name.所在位置}<br/>
              營業時間: ${name.營業時間}`
    );
  }
}

function showFood() {
  let filtered = food.filter((item) => item.夜市名稱 === $("#mySelect").val());
  for (i = 0; i < filtered.length; i++) {
    if (filtered[i].夜市名稱 === $("#mySelect").val()) {
      $("#list").append(
        `<div class='list-item w-100 border-bottom d-flex py-1'>
            <div class='name'>${filtered[i].攤位名稱}</div>
            <div class='food'>${filtered[i].其他相關產品}</div>
          </div>`
      );
    }
  }
}

function showInformation() {
  $("#list").empty();
  $("#market").empty();
  if (market.length && food.length) {
    if ($("#mySelect").val() !== "請選擇") {
      $(".info").css("display", "flex");
      showMarket();
      showFood();
    } else {
      $(".info").css("display", "none");
    }
  }
}

$("#mySelect").on("change", showInformation);
