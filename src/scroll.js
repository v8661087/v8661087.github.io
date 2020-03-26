$(document).scroll(function() {
  var scroll = $(this).scrollTop();
  const element = document.querySelector(".about-content");
  const element2 = document.querySelector(".skills-content");
  const element3 = document.querySelector(".works-content");
  const element4 = document.querySelector(".contact-content");
  if (scroll > 120) {
    element.classList.add("animated", "slideInUp");
  }
  if (scroll <= 120) {
    element.classList.remove("animated", "slideInUp");
  }
  if (
    scroll >
    $(".main").height() + $(".about").height() - $(window).height() +81
  ) {
    element2.classList.add("animated", "slideInUp");
  }
  if (
    scroll <=
    $(".main").height() + $(".about").height() - $(window).height() +81
  ) {
    element2.classList.remove("animated", "slideInUp");
  }
  if (
    scroll >
    $(".main").height() +
      $(".about").height() +
      $(".skills").height() -
      $(window).height() +81
  ) {
    element3.classList.add("animated", "zoomIn");
  }
  if (
    scroll <=
    $(".main").height() +
      $(".about").height() +
      $(".skills").height() -
      $(window).height() +81 
  ) {
    element3.classList.remove("animated", "zoomIn");
  }
  if (
    scroll >
    $(".main").height() +
      $(".about").height() +
      $(".skills").height() +
      $(".works").height() -
      $(window).height() +81
  ) {
    element4.classList.add("animated", "fadeInLeft");
  }
  if (
    scroll <
    $(".main").height() +
      $(".about").height() +
      $(".skills").height() +
      $(".works").height() -
      $(window).height() + 81
  ) {
    element4.classList.remove("animated", "fadeInLeft");
  }
});
