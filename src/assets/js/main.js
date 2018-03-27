$(function () {
  /*
      https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
      ===========================*/
  $("html").easeScroll({
    frameRate: 60,
    animationTime: 1000,
    stepSize: 90,
    pulseAlgorithm: 1,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: true,
    arrowScroll: 50,
    touchpadSupport: true,
    fixedBackground: true
  });

  /*slick-carousel directions
  =======================================*/ 
  $('#js-directions').slick({
    arrows: false,
    dots: true,
    slidesToScroll: 2,
    slidesToShow: 4
  });

  /*toggle top-menu
  =======================================*/ 
  $('#js-menu-btn').on('click', function(){
    $('#js-top-nav_menu').slideToggle();
  });

  /*toggle left-sidbar-menu
  =======================================*/ 
  $('#js-left-sidebar-btn').on('click', function(){
    $('#js-left-sidebar__menu').slideToggle();
  });  

});



