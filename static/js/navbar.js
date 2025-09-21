//gsap.registerPlugin(ScrollTrigger);
//
//const showAnim = gsap.from(".navbar", {
//  yPercent: -100,
//  paused: true,
//  duration: 0.5, // Increased duration for a smoother transition
//  ease: "power2.inOut",
//}).progress(1);
//
//ScrollTrigger.create({
//  start: "top top",
//  end: 99999, // A large number to ensure the trigger works for the entire page
//  onUpdate: (self) => {
//    if (self.direction === -1) {
//      showAnim.play();
//    } else {
//      showAnim.reverse();
//    }
//  }
//});


gsap.registerPlugin(ScrollTrigger);

// Main show/hide animation for the navbar
const showAnim = gsap.from(".navbar", {
  yPercent: -100,
  paused: true,
  duration: 0.5,
  ease: "power2.inOut",
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    if (self.direction === -1) {
      showAnim.play();
    } else {
      showAnim.reverse();
    }
  }
});

// Logo cross-fade and class toggle animation on scroll
ScrollTrigger.create({
  trigger: "body",
  start: "top -100px", // Trigger the animation after scrolling down 100px
  onEnter: () => {
    // Add 'scrolled' class to the body to trigger mobile-specific styles
    document.body.classList.add('scrolled');

    // Fade out the original logo and fade in the green one
    gsap.to(".logo-original", {
      opacity: 0,
      duration: 0.3
    });
    gsap.to(".logo-green", {
      opacity: 1,
      duration: 0.3
    });
  },
  onLeaveBack: () => {
    // Remove 'scrolled' class from the body
    document.body.classList.remove('scrolled');

    // Fade in the original and fade out the green one
    gsap.to(".logo-original", {
      opacity: 1,
      duration: 0.3
    });
    gsap.to(".logo-green", {
      opacity: 0,
      duration: 0.3
    });
  }
});

