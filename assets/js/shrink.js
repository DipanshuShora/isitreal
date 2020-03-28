$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('#navbar-shrink').addClass('shrink');
  }
  else {
    $('#navbar-shrink').removeClass('shrink');
  }

});
// change font color of a on scrolling
var scroll_pos = 0;
$(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 50) {
        $("nav a").css('color', 'rgb(0,0,128)');
    }
    else{
        $("nav a").css('color', 'white');
        $("#nav-header").removeClass("transparency");
    }
});
