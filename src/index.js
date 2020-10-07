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
    if (scroll > 0) {
      $(".about-content").addClass("animated slideInUp");
    }
    if (scroll <= 0) {
      $(".about-content").removeClass("animated slideInUp");
    }

    if (scroll > $(".about").height()) {
      $(".skills-content").addClass("animated slideInUp");
    }
    if (scroll <= $(".about").height()) {
      $(".skills-content").removeClass("animated slideInUp");
    }

    if (scroll > $(".about").height() + $(".skills").height()) {
      $(".works-content").addClass("animated zoomIn");
    }
    if (scroll <= $(".about").height() + $(".skills").height()) {
      $(".works-content").removeClass("animated zoomIn");
    }

    if (
      scroll >
      $(".about").height() + $(".skills").height() + $(".works").height()
    ) {
      $(".contact-content").addClass("animated fadeInLeft");
    }
    if (
      scroll <=
      $(".about").height() + $(".skills").height() + $(".works").height()
    ) {
      $(".contact-content").removeClass("animated fadeInLeft");
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
