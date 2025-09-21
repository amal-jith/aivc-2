$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    // Add your carousel options here
    loop: false,
    margin: 30,
    nav: false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
});