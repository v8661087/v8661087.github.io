$(document).scroll(function() {
  var scroll = $(this).scrollTop();
  const element = document.querySelector(".about-content");
  const element2 = document.querySelector(".skill-content");
  const element3 = document.querySelector(".works-content");
  const element4 = document.querySelector(".contact-content");
  if (scroll > 112 && scroll < 222) {
    element.classList.add("animated", "slideInUp");
  }
  if (scroll < 113) {
    element.classList.remove("animated", "slideInUp");
  }
  if (scroll > 556 && scroll < 666) {
    element2.classList.add("animated", "slideInUp");
  }
  if (scroll < 557) {
    element2.classList.remove("animated", "slideInUp");
  }
  if (scroll > 1251 && scroll < 1366) {
    element3.classList.add("animated", "zoomIn");
  }
  if (scroll < 1252) {
    element3.classList.remove("animated", "zoomIn");
  }
  if (scroll > 2030 && scroll < 2130) {
    element4.classList.add("animated", "fadeInLeft");
  }
  if (scroll < 2031) {
    element4.classList.remove("animated", "fadeInLeft");
  }
});
