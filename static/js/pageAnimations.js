gsap.registerPlugin(ScrollTrigger);

// Animate the 'Growth Equity' card
gsap.from(".decide-what-card-2", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".decide-what-card-2",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    }
});

// Animate the 'Mergers and Acquisitions' card
gsap.from(".decide-what-card-1", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".decide-what-card-1",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    }
});



gsap.registerPlugin(ScrollTrigger);

// Animate the first two cards from the left
gsap.from(".why-service-card-10", {
  x: -100, // Starts 100 pixels to the left
  opacity: 0,
  duration: 1,
  stagger: 0.3, // Staggers the animation for the two cards with this class
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".why-service-1", // Trigger the animation when the parent div comes into view
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

// Animate the next two cards from the right
gsap.from(".why-service-card-11", {
  x: 100, // Starts 100 pixels to the right
  opacity: 0,
  duration: 1,
  stagger: 0.3, // Staggers the animation for the two cards with this class
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".why-service-1",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});



gsap.registerPlugin(ScrollTrigger);

// Animate the three phase cards to slide up and fade in
gsap.from(".pe-card", {
  y: 100, // Starts 100 pixels below their final position
  opacity: 0,
  duration: 1,
  stagger: 0.3, // Stagger the animation by 0.3 seconds between each card
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".pe-operating-section .row",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse"
  }
});


gsap.registerPlugin(ScrollTrigger);

// Animation for the section title and subtitle
gsap.from(".why-services-title, .why-services-subtitle", {
  y: 50, // Start 50 pixels below their final position
  opacity: 0,
  duration: 0.8,
  stagger: 0.2, // Stagger between title and subtitle
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".why-services-title", // Trigger when the main title comes into view
    start: "top 90%",
    end: "bottom 10%", // Optional: defines the active scroll range for animation
    toggleActions: "play reverse play reverse" // Play on scroll down/up, reverse on leave
  }
});

// Animation for the testimonial carousel section
// We'll target the parent container of the carousel
gsap.from(".leadership-excellence-owl", {
  x: -100, // Starts 100 pixels to the left
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".leadership-excellence-owl", // Trigger when the carousel container comes into view
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse" // Play on scroll down/up, reverse on leave
  }
});


gsap.registerPlugin(ScrollTrigger);

// Animate the card
gsap.from(".with-60-years-card", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".with-60-years-card",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    }
});

// Create a timeline for the line-by-line heading animation
let headingTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".heading-102",
        start: "top 80%",
        end: "bottom 40%",
        scrub: true,
    }
});

headingTimeline.from(".heading-102 span", {
    y: 50,
    opacity: 0,
    stagger: 0.5, // Animate each line with a 0.5 second delay
});


gsap.registerPlugin(ScrollTrigger);

let unlockTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".unlock-section",
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
        scrub: true // Optional: Links the animation directly to the scrollbar for a scrubbing effect
    }
});

unlockTimeline.from(".unlock-title span", {
    y: 50, // Starts 50 pixels below their final position
    opacity: 0, // Starts completely transparent
    stagger: 0.5 // Staggers the animation for each line by 0.5 seconds
});


gsap.registerPlugin(ScrollTrigger);

// Animation for the section title and subtitle
gsap.from(".industries-section-title, .industries-section-subtitle", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".industries-section-title",
    start: "top 90%",
    toggleActions: "play none none none"
  }
});

// Animation for the individual industry cards
gsap.from(".industries-card-1, .industries-card-2", {
  x: -100, // Starts 100 pixels to the left
  opacity: 0,
  duration: 1,
  stagger: 0.3, // Staggers the animation for each card
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".industries-section .container-section-1",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});















///////////FOOTER ANIMATION/////////////
