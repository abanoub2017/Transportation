$(function(){
    
    'use strict';
    
    // Adiust Slider Height
    var winH = $(window).height(),
        upperH = $('.upper-nav').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider .carousel-item').height(winH - (upperH + navH));
    
    // Nice Scrol
     $("html").niceScroll({ });
    
    //ScrollTop
   $('body').materialScrollTop();
    
});