// 광고 슬라이드
var swiper = new Swiper(".swiper-container", {
  cssMode: true,
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev"
  },
  pagination: {
    el: ".swiper-pagination"
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30
});

// 탭메뉴
$(document).ready(function(){
   
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
 
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
 
    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })
 
});