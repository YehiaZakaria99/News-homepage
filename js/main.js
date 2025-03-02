$(function () {
  function myFunction(myScreen) {
    $(".nav-links").hide();

    $(".close-btn").on("click", function () {
      $(".nav-links").hide(300);
      $(".overlay").css({ zIndex: -9999, display: "none" }, 300);
    });

    $(".menu-bar").on("click", function () {
      $(".nav-links").show(300);
      $(".overlay").css({ zIndex: 0, display: "block" }, 300);
    });

    $(".link-nav").on("click", function () {
      $(".link-nav").removeClass("active");
      $(this).addClass("active");
    });

    $(".logo").on("click", function () {
      $(".link-nav").removeClass("active");
      $(".link-nav[href = '#']").addClass("active");
    });
    if (localStorage.getItem("mode")) {
      const mode = localStorage.getItem("mode");

      if (mode == "dark") {
        $("[darkModeBtn]").hide();
        $("[lightModeBtn]").show();
        $(".light-logo").hide();
        $(".dark-logo").show();
        $("body").addClass("dark-mode");
      } else if (mode == "light") {
        $("[lightModeBtn]").hide();
        $("[darkModeBtn]").show();
        $(".dark-logo").hide();
        $(".light-logo").show();
        $("body").removeClass("dark-mode");
      }
    }

    $("[darkModeBtn]").on("click", function () {
      localStorage.setItem("mode", "dark");
      $(this).hide();
      $("[lightModeBtn]").show();
      $(".light-logo").hide();
      $(".dark-logo").show();
      $("body").addClass("dark-mode");
    });

    $("[lightModeBtn]").on("click", function () {
      localStorage.setItem("mode", "light");
      $(this).hide();
      $("[darkModeBtn]").show();
      $(".dark-logo").hide();
      $(".light-logo").show();
      $("body").removeClass("dark-mode");
    });
    //   min width 768px
    if (myScreen.matches) {
      $(".overlay").css({ zIndex: -9999, display: "none" });
      $(".nav-links").show();
    }
  }

  const myScreen = window.matchMedia("(min-width: 768px)");
  myFunction(myScreen);
  myScreen.addEventListener("change", function () {
    myFunction(myScreen);
  });
});
