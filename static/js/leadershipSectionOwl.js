$(document).ready(function(){
  $(".leadership-excellence-owl .owl-carousel").owlCarousel({
    loop: true, // enable looping for smoother center effect
    margin: 30,
    nav: true,
    dots: true,
    center: true, // 👈 makes the middle item "active"
    responsive:{
        0:{
            items:1 // always centered
        },
        600:{
            items:3 // ensures a visible center card
        },
        1000:{
            items:3 // keep 3 so center effect works
        }
    }
  });
});
