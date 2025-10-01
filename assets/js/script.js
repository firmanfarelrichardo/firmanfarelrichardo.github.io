/**
 * Initialize Typed.js for the typing animation in the sidebar
 */
const typed = new Typed('#typed-text', {
    strings: ['Fullstack Developer', 'AI Enthusiast', 'Problem Solver'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});


/**
 * Scroll Animation using Intersection Observer
 * Adds a 'is-visible' class to elements when they enter the viewport.
 */
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the 'is-visible' class
            entry.target.classList.add('is-visible');
            // Stop observing the element after it has become visible
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Tell the observer which elements to track
animatedElements.forEach(element => {
    observer.observe(element);
});