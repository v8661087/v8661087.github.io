// When the user clicks the button, open the modal
for (let i = 0; i < $(".works-item").length; i++) {
  $(".works-item")[i].onclick = function () {
    $(".modal")[i].style.display = "block";
    $("body").css("overflow", "hidden");
  };
}
// When the user clicks on <span> (x), close the modal
for (let i = 0; i < $(".modal__close").length; i++) {
  $(".modal__close")[i].onclick = function () {
    $(".modal")[i].style.display = "none";
    $("body").css("overflow", "auto");
  };
}
// When the user clicks anywhere outside of the modal, close it
$(document).click(function (e) {
  for (let i = 0; i < $(".modal").length; i++) {
    if (e.target === $(".modal")[i]) {
      $(".modal")[i].style.display = "none";
      $("body").css("overflow", "auto");
    }
  }
});
// When the user keyup Esc,close it
$(document).keyup(function (e) {
  if (e.keyCode === 27) {
    for (let i = 0; i < $(".modal").length; i++) {
      $(".modal")[i].style.display = "none";
      $("body").css("overflow", "auto");
    }
  }
});
