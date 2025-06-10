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

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('timeline-item')) {
                entry.target.style.transitionDelay = `${Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.2}s`;
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
    item.classList.add('slide-in');
    observer.observe(item);
});

const skillsIcons = document.querySelectorAll('.skills-icons img');
skillsIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

const projectCards = document.querySelectorAll('.project');
projectCards.forEach(card => {
    card.classList.add('interactive');
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xc = (x - rect.width / 2) / 20;
        const yc = (y - rect.height / 2) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${-yc}deg) rotateY(${xc}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
    observer.observe(card);
});

const skillsTrack = document.querySelector('.skills-track');

skillsTrack.addEventListener('animationend', () => {
    skillsTrack.style.animation = 'none';
    skillsTrack.offsetHeight; 
    skillsTrack.style.animation = 'slideSkills 20s linear infinite';
});

skillsTrack.addEventListener('mouseenter', () => {
    skillsTrack.style.animationPlayState = 'paused';
});

skillsTrack.addEventListener('mouseleave', () => {
    skillsTrack.style.animationPlayState = 'running';
});

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

const buttons = document.querySelectorAll('.cta-button, .cv-button, .feedback-button');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const circle = document.createElement('span');
        circle.style.position = 'absolute';
        circle.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        circle.style.borderRadius = '50%';
        circle.style.width = '100px';
        circle.style.height = '100px';
        circle.style.left = x - 50 + 'px';
        circle.style.top = y - 50 + 'px';
        circle.style.transform = 'scale(0)';
        circle.style.animation = 'ripple 0.6s linear';
        
        this.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
    });
});

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
    section.classList.add('slide-in');
});

const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    heroContent.style.animation = 'float 6s ease-in-out infinite';
}


document.querySelectorAll('.skill-icon').forEach((icon, index) => {
    const floatDuration = 3 + Math.random();
    icon.style.animation = `float ${floatDuration}s ease-in-out infinite`;
    icon.style.animationDelay = `${index * 0.2}s`;
    
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'translateY(0) scale(1)';
    });
});

// Animasi reveal untuk section dan timeline-item
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.section').forEach(section => {
    revealObserver.observe(section);
});
document.querySelectorAll('.timeline-item').forEach(item => {
    revealObserver.observe(item);
});

// Hamburger Menu Functionality
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');
const nav = document.querySelector('nav');

if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        nav.classList.toggle('active');
        
        // Add delay to each menu item
        const menuItems = navMenu.querySelectorAll('li');
        menuItems.forEach((item, index) => {
            item.style.setProperty('--i', index);
        });
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = hamburgerMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            nav.classList.remove('active');
            const spans = hamburgerMenu.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            // Enable body scroll again
            document.body.style.overflow = '';
        });
    });
}

// Timeline animation
function handleTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.3
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Initialize timeline animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    handleTimelineAnimation();
});