//
//gsap.registerPlugin(ScrollTrigger);
//
//let sections = gsap.utils.toArray(".benefit");
//
//gsap.to(sections, {
//  xPercent: -100 * (sections.length - 1), // move through all cards
//  ease: "none",
//  scrollTrigger: {
//    trigger: ".benefits-container",
//    pin: true,
//    scrub: 1,
//    snap: 1 / (sections.length - 1), // snap to each card
//    end: () => "+=" + document.querySelector(".benefits-container").offsetWidth
//  }
//});
//



document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.pe-card');

    const observerOptions = {
        root: null, // use the viewport
        rootMargin: '0px 0px -85% 0px', // When the element hits 15% from the top of the viewport.
        threshold: 0 // Observe as soon as it enters.
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const currentCard = entry.target;
            const prevCard = currentCard.previousElementSibling;

            if (entry.isIntersecting) {
                // When a new card enters the 'sticky' zone
                if (prevCard) {
                    prevCard.classList.add('blur');
                }
                currentCard.classList.add('stuck');
            } else {
                // When a card leaves the 'sticky' zone
                currentCard.classList.remove('stuck');
                if (prevCard) {
                    prevCard.classList.remove('blur');
                }
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});