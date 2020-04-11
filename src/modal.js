// Get the modal
let modal01 = document.getElementById("myModal01");
let modal02 = document.getElementById("myModal02");
let modal03 = document.getElementById("myModal03");
let modal04 = document.getElementById("myModal04");
let modal05 = document.getElementById("myModal05");
let modal06 = document.getElementById("myModal06");
let modal07 = document.getElementById("myModal07");

// Get the button that opens the modal
let btn01 = document.getElementById("works01");
let btn02 = document.getElementById("works02");
let btn03 = document.getElementById("works03");
let btn04 = document.getElementById("works04");
let btn05 = document.getElementById("works05");
let btn06 = document.getElementById("works06");
let btn07 = document.getElementById("works07");
// Get the <span> element that closes the modal
let span01 = document.getElementsByClassName("modal__close")[0];
let span02 = document.getElementsByClassName("modal__close")[1];
let span03 = document.getElementsByClassName("modal__close")[2];
let span04 = document.getElementsByClassName("modal__close")[3];
let span05 = document.getElementsByClassName("modal__close")[4];
let span06 = document.getElementsByClassName("modal__close")[5];
let span07 = document.getElementsByClassName("modal__close")[6];

// When the user clicks the button, open the modal
btn01.onclick = function () {
  modal01.style.display = "block";
  $("body").css("overflow", "hidden");
};
btn02.onclick = function () {
  modal02.style.display = "block";
  $("body").css("overflow", "hidden");
};
btn03.onclick = function () {
  modal03.style.display = "block";
  $("body").css("overflow", "hidden");
};
btn04.onclick = function () {
  modal04.style.display = "block";
  $("body").css("overflow", "hidden");
};
btn05.onclick = function () {
  modal05.style.display = "block";
  $("body").css("overflow", "hidden");
};
btn06.onclick = function () {
  modal06.style.display = "block";
  $("body").css("overflow", "hidden");
};
btn07.onclick = function () {
  modal07.style.display = "block";
  $("body").css("overflow", "hidden");
};
// When the user clicks on <span> (x), close the modal
span01.onclick = function () {
  modal01.style.display = "none";
  $("body").css("overflow", "auto");
};
span02.onclick = function () {
  modal02.style.display = "none";
  $("body").css("overflow", "auto");
};
span03.onclick = function () {
  modal03.style.display = "none";
  $("body").css("overflow", "auto");
};
span04.onclick = function () {
  modal04.style.display = "none";
  $("body").css("overflow", "auto");
};
span05.onclick = function () {
  modal05.style.display = "none";
  $("body").css("overflow", "auto");
};
span06.onclick = function () {
  modal06.style.display = "none";
  $("body").css("overflow", "auto");
};
span07.onclick = function () {
  modal07.style.display = "none";
  $("body").css("overflow", "auto");
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal01) {
    modal01.style.display = "none";
    $("body").css("overflow", "auto");
  }
  if (event.target == modal02) {
    modal02.style.display = "none";
    $("body").css("overflow", "auto");
  }
  if (event.target == modal03) {
    modal03.style.display = "none";
    $("body").css("overflow", "auto");
  }
  if (event.target == modal04) {
    modal04.style.display = "none";
    $("body").css("overflow", "auto");
  }
  if (event.target == modal05) {
    modal05.style.display = "none";
    $("body").css("overflow", "auto");
  }
  if (event.target == modal06) {
    modal06.style.display = "none";
    $("body").css("overflow", "auto");
  }
  if (event.target == modal07) {
    modal07.style.display = "none";
    $("body").css("overflow", "auto");
  }
};

$(document).on("keyup", function (event) {
  if (event.keyCode == 37) {
    modal01.style.display = "none";
    modal02.style.display = "none";
    modal03.style.display = "none";
    modal04.style.display = "none";
    modal05.style.display = "none";
    modal06.style.display = "none";
    modal07.style.display = "none";
    $("body").css("overflow", "auto");
  }
});
