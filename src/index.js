$(function () {
  //nav展開/收合切換
  $(".hamburger").click(function () {
    this.classList.toggle("change");
    $(".menu-link").toggleClass("change");
  });
  $(".menu-link").click(function () {
    this.classList.remove("change");
    $(".hamburger").removeClass("change");
  });
  //modal事件
  function modalEvent() {
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
  }
  modalEvent();

  // scroll到目前視窗畫面加入/移除動畫
  $(document).scroll(function () {
    let scroll = $(this).scrollTop();
    const element = document.querySelector(".about-content");
    const element2 = document.querySelector(".skills-content");
    const element3 = document.querySelector(".works-content");
    const element4 = document.querySelector(".contact-content");
    let windowHeightPaddingTop = $(window).height() - 81;
    if (scroll > 120) {
      element.classList.add("animated", "slideInUp");
    }
    if (scroll <= 120) {
      element.classList.remove("animated", "slideInUp");
    }
    if (
      scroll >
      $(".main").height() + $(".about").height() - windowHeightPaddingTop
    ) {
      element2.classList.add("animated", "slideInUp");
    }
    if (
      scroll <=
      $(".main").height() + $(".about").height() - windowHeightPaddingTop
    ) {
      element2.classList.remove("animated", "slideInUp");
    }
    if (
      scroll >
      $(".main").height() +
        $(".about").height() +
        $(".skills").height() -
        windowHeightPaddingTop
    ) {
      element3.classList.add("animated", "zoomIn");
    }
    if (
      scroll <=
      $(".main").height() +
        $(".about").height() +
        $(".skills").height() -
        windowHeightPaddingTop
    ) {
      element3.classList.remove("animated", "zoomIn");
    }
    if (
      scroll >
      $(".main").height() +
        $(".about").height() +
        $(".skills").height() +
        $(".works").height() -
        windowHeightPaddingTop
    ) {
      element4.classList.add("animated", "fadeInLeft");
    }
    if (
      scroll <
      $(".main").height() +
        $(".about").height() +
        $(".skills").height() +
        $(".works").height() -
        windowHeightPaddingTop
    ) {
      element4.classList.remove("animated", "fadeInLeft");
    }
  });

  // smooth scrolling polyfill
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          600,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  });
});
