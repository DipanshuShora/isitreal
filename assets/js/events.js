$(document).ready(function() {
  $('#btn-collapse').click(function() {
    $("#nav-header").toggleClass("transparency");
    $("#collapse-menu-item").toggleClass("transparency");
    $("a.page-scroll").toggleClass("collapse-color");
    $("nav a").css('color','rgb(0,0,128)');
    return true;
  });
  $('#playstore-btn').click(function(){
      window.open('http://goo.gl/suuB7Y','_blank');
  });

});
$("nav a").click(function(){
  $("#collapse-menu-item").removeClass("transparency in");
});
