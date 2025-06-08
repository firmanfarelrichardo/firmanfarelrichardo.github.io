document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animations to timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    setTimeout(() => {
        item.style.transition = 'opacity 0.5s, transform 0.5s';
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
    }, index * 300);
});

// Add hover effects to skills icons
const skillsIcons = document.querySelectorAll('.skills-icons img');
skillsIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Add hover effects to project cards
const projectCards = document.querySelectorAll('.project');
projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

// Add functionality for carousel dots
const dots = document.querySelectorAll('.dot');
const skillsTrack = document.querySelector('.skills-track');

let currentIndex = 0;

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.dataset.index);
        skillsTrack.scrollTo({
            left: currentIndex * skillsTrack.offsetWidth,
            behavior: 'smooth'
        });
        updateDots();
    });
});

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Initialize first dot as active
updateDots();

// Add functionality for horizontal scrolling
skillsTrack.addEventListener('wheel', (event) => {
    event.preventDefault();
    skillsTrack.scrollLeft += event.deltaY;
});

// Feedback form AJAX submit
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const status = document.getElementById('feedback-status');
        status.textContent = 'Sending...';
        status.style.color = '#4f8cff';
        const formData = new FormData(feedbackForm);
        try {
            const response = await fetch(feedbackForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                status.textContent = 'Thank you! Your message has been sent.';
                status.style.color = '#2ecc71';
                feedbackForm.reset();
            } else {
                status.textContent = 'Oops! Something went wrong. Please try again.';
                status.style.color = '#e74c3c';
            }
        } catch (error) {
            status.textContent = 'Network error. Please try again.';
            status.style.color = '#e74c3c';
        }
    });
}