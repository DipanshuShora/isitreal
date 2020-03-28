var scoll_pos = 0;
$(document).scroll(function(){
  scroll_pos = $(this).scrollTop();
  if (scroll_pos > 0) {
    $('#collapse-menu-item').removeClass('transparency in');
  }
});
