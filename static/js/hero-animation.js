gsap.registerPlugin(ScrollTrigger);

gsap.to(".card.header-card", {
    // These are the properties that will be animated
    scale: 0.9,
    borderRadius: "1.25rem",
    boxShadow: "0px 10px 40px rgba(0,0,0,0.2)",

    // The ScrollTrigger configuration
    scrollTrigger: {
        trigger: ".header", // The element that starts the animation
        start: "top top", // The animation starts when the top of the header hits the top of the viewport
        end: "bottom 50%", // The animation ends when the bottom of the header is at 50% of the viewport
        scrub: true, // This is what links the animation to the scroll position
    }
});