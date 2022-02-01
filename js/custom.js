$(function () {
  //    sticky navbar
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    var sticky = $(".sticky-top");
    if (scrolling >= 110) {
      sticky.addClass("navbg");
    } else {
      sticky.removeClass("navbg");
    }
  });

  //==== type js ====//

  $(".typed").typed({
    strings: ["real-time interaction to web", "income increase from advertising", "immediate boost of Call to action"],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 18,
    // time before typing starts
    startDelay: 300,
    // backspacing speed
    backSpeed: 1,
    // time before backspacing
    backDelay: 1500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 20,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {},
  });

  //==== webs-tabs part js ====//

  $(".tabs-nav a").click(function () {
    // Check for active
    $(".tabs-nav li").removeClass("active");
    $(this).parent().addClass("active");

    // Display active tab
    let currentTab = $(this).attr("href");
    $(".tabs-content div").hide();
    $(currentTab).show();

    return false;
  });

  // toggle navbar button //
  $(".toggle-navbar").on("click", function () {
    $(".responsive-menu").toggleClass("showing");
  });

  /*** Vid musklick på länk e mneyn så plockas classen showing bort***/
  $(".responsive-menu li").on("click", function () {
    $(".responsive-menu").removeClass("showing");
  });
  if ($(this).scrollbottom() > 10) {
    $(".responsive-menu").removeClass("showing");
  }
});
