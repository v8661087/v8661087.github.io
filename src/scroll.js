$(document).scroll(function() {
  var scroll = $(this).scrollTop();
  const element = document.querySelector(".about-content");
  const element2 = document.querySelector(".skill-content");
  const element3 = document.querySelector(".works-content");
  const element4 = document.querySelector(".contact-content");
  if (scroll > 100 && scroll < 150) {
    element.classList.add("animated", "slideInUp");
  }
  if (scroll < 101) {
    element.classList.remove("animated", "slideInUp");
  }
  if (scroll > 700 && scroll < 750) {
    element2.classList.add("animated", "slideInUp");
  }
  if (scroll < 701) {
    element2.classList.remove("animated", "slideInUp");
  }
  if (scroll > 1350 && scroll < 1400) {
    element3.classList.add("animated", "slideInUp");
  }
  if (scroll < 1351) {
    element3.classList.remove("animated", "slideInUp");
  }
  if (scroll > 2100 && scroll < 2150) {
    element4.classList.add("animated", "slideInUp");
  }
  if (scroll < 2101) {
    element4.classList.remove("animated", "slideInUp");
  }
});
