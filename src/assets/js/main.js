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

  /*active menu
  =======================================*/ 
  $('#js-top-nav_menu li').each(function () {
      var location = window.location.pathname;
      var location = location.substring(1);
      var link = $(this).children('a').attr('href');
      if(location === link) {
          $(this).addClass('active');
      }
  });

  /*slick-carousel directions
  =======================================*/ 
  $('#js-directions').slick({
    arrows: false,
    dots: true,
    slidesToScroll: 2,
    slidesToShow: 4,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false
      }
    }
  ]
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

  /*power-range
  =======================================*/ 
  var range = document.querySelector('#js-range');
  var jsCalcSumNumSpan = $('#js-calc-sum-num-span');
  var value;
  var month = 6;
  var percent = 0.2;
  var money = parseFloat($(jsCalcSumNumSpan).text());
  var total = 0;
  var monthly;

  var init = new Powerange(range, {
    min: 100000,
    max: 3000000,
    start: 100000,
    hideRange: true,
    step: 100000
  });

  $(range).on('change', function(){
    value = parseInt($(this).val());
    $(jsCalcSumNumSpan).text(value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

    month = +$('input[name="programms"]:checked').data('month');
    percent = +$('input[name="programms"]:checked').data('percent');
    var result = Math.floor(percent / 12 * month  * value);

    total = result + value;  

    monthly = Math.floor(result / month);

    $('#js-calc-monthly span ').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    
    $('#js-calc-total span').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

    $('#js-calc-month').text(month);
  });


  $('input[name="programms"]').on('change', function(){
    month = +$(this).data('month');
    percent = +$(this).data('percent');
    var result = Math.floor(percent / 12 * month  * money);
    total = result + money;  

    monthly = Math.floor(result / month);

    $('#js-calc-monthly span ').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    
    $('#js-calc-total span').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

    $('#js-calc-month').text(month);
  });

});



