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
    
    //typwrite
    var app = document.getElementById('app');

   var typewriter = new Typewriter(app, {
    loop: false
  });

    typewriter.typeString(' We are committed to provide best domestic as well as Global logistics  services to our customers through efficient channels and effective management')
        .pauseFor(2500)
        .start();
 
    
});