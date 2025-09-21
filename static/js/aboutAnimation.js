gsap.registerPlugin(ScrollTrigger);

// Animate the "Our Mission" title
gsap.from(".component-title-2", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".component-section",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

// Create a timeline for the line-by-line heading animation
let missionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".component-title-1",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse",
    scrub: true // Optional: Links the animation to the scrollbar
  }
});

// Animate each line in the heading
missionTimeline.from(".component-title-1 span", {
  y: 50,
  opacity: 0,
  stagger: 0.5
});



gsap.registerPlugin(ScrollTrigger);

// Animate the main titles and paragraph with a slide-up effect


// Animate the three vision cards to slide up with a stagger
gsap.from(".vision-card", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".three-vision-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse"
  }
});


///accordion

gsap.registerPlugin(ScrollTrigger);

// Animate the main titles on the left side, specifically within this section
gsap.from(".our-values-section .our-vision-title-1, .our-values-section .our-vision-title-3", {
  y: 50, // Starts 50 pixels below their final position
  opacity: 0, // Starts transparent
  duration: 0.8,
  stagger: 0.2,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".our-values-section", // Trigger on the main section container
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

// Animate the accordion items on the right side
gsap.from(".accordion-item", {
  x: 100, // Starts 100 pixels to the right
  opacity: 0,
  duration: 1,
  stagger: 0.2, // Stagger the animation for each accordion item
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".accordion", // Trigger on the accordion container
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});


/////////////
gsap.registerPlugin(ScrollTrigger);

// Animate the main title
gsap.from(".why-our-values-section .our-vision-title-1", {
  y: 50, // Starts 50 pixels below its final position
  opacity: 0, // Starts transparent
  duration: 0.8,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".why-our-values-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse"
  }
});

// Animate the three value cards
gsap.from(".why-our-values-container .card", {
  y: 100, // Starts 100 pixels below their final position
  opacity: 0,
  duration: 1,
  stagger: 0.3, // Staggers the animation for each card
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".why-our-values-container",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse"
  }
});

///meet an operator
gsap.registerPlugin(ScrollTrigger);

// Animate the main titles and subtitle
gsap.from(".meet-an-operator-section .meet-text-1, .meet-an-operator-section .meet-text-2", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".meet-an-operator-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse"
  }
});

// Animate the main image from the left and text from the right
gsap.from(".team-bg-image", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".team-section",
    start: "top 70%",
    end: "bottom 30%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".meet-an-operator-section .meet-text-3, .team-detail-div, .meet-an-operator-section .meet-text-5", {
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".team-section",
    start: "top 70%",
    end: "bottom 30%",
    toggleActions: "play reverse play reverse"
  }
});

// Animate the three cards at the bottom with a slide-up stagger
gsap.from(".team-card-1", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.3,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".team-section-1",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse"
  }
});

//our philosphy section

gsap.registerPlugin(ScrollTrigger);

// Animate the main titles and paragraph
gsap.from(".philosophy-text-1, .philosophy-text-2", {
  y: 50, // Starts 50 pixels below their final position
  opacity: 0, // Starts transparent
  duration: 0.8,
  stagger: 0.2, // Staggers the animation between the two elements
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".our-philosophy-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse"
  }
});

// Animate the four philosophy cards
gsap.from(".operating-card-1, .operating-card-2", {
  y: 100, // Starts 100 pixels below their final position
  opacity: 0,
  duration: 1,
  stagger: 0.2, // Staggers the animation between each card
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".our-philosophy-section-2",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse"
  }
});

//impact section

gsap.registerPlugin(ScrollTrigger);

// Animate the titles on the left side
gsap.from(".our-impact-section .our-impact-text-1, .our-impact-section .our-impact-text-2", {
  y: 50, // Starts 50 pixels below their final position
  opacity: 0, // Starts transparent
  duration: 0.8,
  stagger: 0.2, // Staggers the animation between the titles
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".our-impact-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse"
  }
});

// Animate the first and third cards (with class 'our-impact-card-1')
gsap.from(".our-impact-card-1", {
  x: -100, // Starts 100 pixels to the left
  opacity: 0,
  duration: 1,
  stagger: 0.5, // Stagger between these two cards
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".our-impact-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse"
  }
});

// Animate the second and fourth cards (with class 'our-impact-card-2')
gsap.from(".our-impact-card-2", {
  x: 100, // Starts 100 pixels to the right
  opacity: 0,
  duration: 1,
  stagger: 0.5, // Stagger between these two cards
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".our-impact-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse"
  }
});