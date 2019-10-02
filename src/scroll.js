$(document).scroll(function() {
  var scroll = $(this).scrollTop();
  const element = document.querySelector(".about-content");
  const element2 = document.querySelector(".skill-content");
  const element3 = document.querySelector(".works-content");
  const element4 = document.querySelector(".contact-content");
  console.log(window.scrollY)
  if (scroll > 66) {
    element.classList.add("animated", "slideInUp");
  }
  if (scroll < 66) {
    element.classList.remove("animated", "slideInUp");
  }
  if (scroll > 572) {
    element2.classList.add("animated", "slideInUp");
  }
  if (scroll < 572) {
    element2.classList.remove("animated", "slideInUp");
  }
  if (scroll > 1211) {
    element3.classList.add("animated", "zoomIn");
  }
  if (scroll < 1212) {
    element3.classList.remove("animated", "zoomIn");
  }
  if (scroll > 1800 && scroll < 1900) {
    element4.classList.add("animated", "fadeInLeft");
  }
  if (scroll < 1801) {
    element4.classList.remove("animated", "fadeInLeft");
  }
});
