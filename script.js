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
