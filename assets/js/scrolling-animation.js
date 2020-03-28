$(window).on('scroll', function () {
  if ($(window).scrollTop()>0 && $(window).scrollTop()<378) {

  }
  else if ($(window).scrollTop()>378 && $(window).scrollTop()<1114) {
    if($(window).width() > 640){
      $('#feature-animation-1').addClass('animated fadeInLeft');
      $('#feature-animation-2').addClass('animated fadeInDown');
      $('#feature-animation-3').addClass('animated fadeInRight');
    }
  }
  else if ($(window).scrollTop()>1114 && $(window).scrollTop()<1904) {
  }
  else if ($(window).scrollTop()>1904 && $(window).scrollTop()<2424) {
    $('#about-animation').addClass('animated flipInX');
  }
  else if ($(window).scrollTop()>2424 && $(window).scrollTop()<2878) {
    $('#counter-animation').addClass('animated zoomIn');
  }
  else if ($(window).scrollTop()>2878 && $(window).scrollTop()<3430) {
  }
  else {}
});
