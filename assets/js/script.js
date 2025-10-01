/**
 * Initialize Typed.js for the typing animation in the sidebar
 */
const typed = new Typed('#typed-text', {
    // Strings to type
    strings: ['Fullstack Developer', 'AI Enthusiast', 'Problem Solver'],
    // Typing speed
    typeSpeed: 50,
    // Backspacing speed
    backSpeed: 30,
    // Delay before starting to backspace
    backDelay: 2000,
    // Loop the animation
    loop: true
});

/**
 * Bootstrap's ScrollSpy is automatically initialized
 * via data-bs-spy="scroll" attribute in the <body> tag.
 * No additional JS is needed for its basic functionality.
 */