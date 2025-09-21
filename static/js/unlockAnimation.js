// Example: inside unlockAnimation.js

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".unlock-title", {
    opacity: 1,
    duration: 1.5,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".unlock-section",
      start: "top center",
      toggleActions: "play none none none",
    }
  });
});