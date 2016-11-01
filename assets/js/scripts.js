//===================
//  Odometer
//  Here set the numebers
//===================

var value = 189230;
setTimeout(function(){
  $('.odometer.01').html(189230);
}, 500);
setInterval(function(){ 
    //code goes here that will be run every 5 seconds. 
    $('.odometer.01').html(0);  
    $('.odometer.01').html(++value);   
}, 5000);


//===================
//  Magnific Popup
//===================

jQuery(document).ready(function() {
  jQuery('.image-gallery').magnificPopup({
    delegate: '.item a', // child items selector, by clicking on it popup will open
    type:'image'
  });

  //===================
  //  WOW
  //  do not touch
  //===================

  new WOW().init();

});



//===================
// Scroller
//  do not touch
//===================

$(function(){

  $('nav.pushy a[href*=#]').click(function() {

  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {

          var $target = $(this.hash);

          $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

          if ($target.length) {

              var targetOffset = $target.offset().top -0;

              $('html,body').animate({scrollTop: targetOffset}, 800);

              return false;

          }

      }

  });

});

//===================
//  Carousel slider use mobile left/right swipe
//===================

$(document).ready(function() {
   $("#carousel-offers").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#carousel-offers").swipeleft(function() {
      $(this).carousel('next');
   });
});
