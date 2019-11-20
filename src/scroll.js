$(document).scroll(function() {
  var scroll = $(this).scrollTop();
  const element = document.querySelector(".about-content");
  const element2 = document.querySelector(".skill-content");
  const element3 = document.querySelector(".works-content");
  const element4 = document.querySelector(".contact-content");
  if (scroll > $(".main").height() - $(window).height()) {
    element.classList.add("animated", "slideInUp");
  }
  if (scroll <= $(".main").height() - $(window).height()) {
    element.classList.remove("animated", "slideInUp");
  }
  if (
    scroll >
    $(".main").height() + $(".about").height() - $(window).height()
  ) {
    element2.classList.add("animated", "slideInUp");
  }
  if (
    scroll <=
    $(".main").height() + $(".about").height() - $(window).height()
  ) {
    element2.classList.remove("animated", "slideInUp");
  }
  if (
    scroll >
    $(".main").height() +
      $(".about").height() +
      $(".skill").height() -
      $(window).height()
  ) {
    element3.classList.add("animated", "zoomIn");
  }
  if (
    scroll <=
    $(".main").height() +
      $(".about").height() +
      $(".skill").height() -
      $(window).height()
  ) {
    element3.classList.remove("animated", "zoomIn");
  }
  if (
    scroll >
    $(".main").height() +
      $(".about").height() +
      $(".skill").height() +
      $(".works").height() -
      $(window).height()
  ) {
    element4.classList.add("animated", "fadeInLeft");
  }
  if (
    scroll <
    $(".main").height() +
      $(".about").height() +
      $(".skill").height() +
      $(".works").height() -
      $(window).height()
  ) {
    element4.classList.remove("animated", "fadeInLeft");
  }
});
