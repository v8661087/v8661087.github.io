// Get the modal
var modal = document.getElementById("myModal");
var modal02 = document.getElementById("myModal02");
var modal03 = document.getElementById("myModal03");
var modal04 = document.getElementById("myModal04");
var modal05 = document.getElementById("myModal05");
var modal06 = document.getElementById("myModal06");
var modal07 = document.getElementById("myModal07");
// Get the button that opens the modal
var btn = document.getElementById("works01");
var btn02 = document.getElementById("works02");
var btn03 = document.getElementById("works03");
var btn04 = document.getElementById("works04");
var btn05 = document.getElementById("works05");
var btn06 = document.getElementById("works06");
var btn07 = document.getElementById("works07");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal__close")[0];
var span02 = document.getElementsByClassName("modal__close")[1];
var span03 = document.getElementsByClassName("modal__close")[2];
var span04 = document.getElementsByClassName("modal__close")[3];
var span05 = document.getElementsByClassName("modal__close")[4];
var span06 = document.getElementsByClassName("modal__close")[5];
var span07 = document.getElementsByClassName("modal__close")[6];
// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  $("body").css("overflow", "hidden");
};
btn02.onclick = function() {
  modal02.style.display = "block";
  $("body").css("overflow", "hidden");
};
btn03.onclick = function() {
  modal03.style.display = "block";
  $("body").css("overflow", "hidden");
};
btn04.onclick = function() {
  modal04.style.display = "block";
  $("body").css("overflow", "hidden");
};
btn05.onclick = function() {
  modal05.style.display = "block";
  $("body").css("overflow", "hidden");
};
btn06.onclick = function() {
  modal06.style.display = "block";
  $("body").css("overflow", "hidden");
};
btn07.onclick = function() {
  modal07.style.display = "block";
  $("body").css("overflow", "hidden");
};
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $("body").css("overflow", "auto");
};
span02.onclick = function() {
  modal02.style.display = "none";
  $("body").css("overflow", "auto");
};
span03.onclick = function() {
  modal03.style.display = "none";
  $("body").css("overflow", "auto");
};
span04.onclick = function() {
  modal04.style.display = "none";
  $("body").css("overflow", "auto");
};
span05.onclick = function() {
  modal05.style.display = "none";
  $("body").css("overflow", "auto");
};
span06.onclick = function() {
  modal06.style.display = "none";
  $("body").css("overflow", "auto");
};
span07.onclick = function() {
  modal07.style.display = "none";
  $("body").css("overflow", "auto");
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
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

$(document).on("keyup", function(event) {
  if (event.keyCode == 27) {
    modal.style.display = "none";
    modal02.style.display = "none";
    modal03.style.display = "none";
    modal04.style.display = "none";
    modal05.style.display = "none";
    modal06.style.display = "none";
    modal07.style.display = "none";
    $("body").css("overflow", "auto");
  }
});
