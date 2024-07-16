
/* Please ❤ this if you like it! */


(function ($) {
  "use strict";




  $(document).ready(function () {
    /* Hero Case study images */

    // IDOLiSH7
    $('.slide-buttons.i7 li').mouseover('click', function () {
      let num = $(this).val();
      console.log(num)
      $('.slide-buttons.i7 li.active').removeClass('active');
      $('.i7 .hero-center-section.show').removeClass("show");
      $('.i7 .hero-center-section:nth-child(' + num + ')').addClass("show");
      $('.slide-buttons.i7 li:nth-child(' + num + ')').addClass('active');
    })

    // TRIGGER
    $('.slide-buttons.tr li').mouseover('click', function () {
      let num = $(this).val();
      console.log(num)
      $('.slide-buttons.tr li.active').removeClass('active');
      $('.tr .hero-center-section.show').removeClass("show");
      $('.tr .hero-center-section:nth-child(' + num + ')').addClass("show");
      $('.slide-buttons.tr li:nth-child(' + num + ')').addClass('active');
    })

    // Re:vale
    $('.slide-buttons.re li').mouseover('click', function () {
      let num = $(this).val();
      console.log(num)
      $('.slide-buttons.re li.active').removeClass('active');
      $('.re .hero-center-section.show').removeClass("show");
      $('.re .hero-center-section:nth-child(' + num + ')').addClass("show");
      $('.slide-buttons.re li:nth-child(' + num + ')').addClass('active');
    })
    
    // ZOOL
    $('.slide-buttons.zo li').mouseover('click', function () {
      let num = $(this).val();
      console.log(num)
      $('.slide-buttons.zo li.active').removeClass('active');
      $('.zo .hero-center-section.show').removeClass("show");
      $('.zo .hero-center-section:nth-child(' + num + ')').addClass("show");
      $('.slide-buttons.zo li.' + num ).addClass('active');
    })
  });




})(jQuery); 
