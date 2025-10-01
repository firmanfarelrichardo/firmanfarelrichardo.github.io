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

/**
 * --- Interactive Magnetic Tilt Effect for Skill Cards ---
 */
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Tentukan seberapa kuat efek miringnya
        const rotateX = (y / rect.height) * -30; // -30 derajat
        const rotateY = (x / rect.width) * 30;  // 30 derajat

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    });

    card.addEventListener('mouseleave', () => {
        // Kembali ke posisi normal saat mouse keluar
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        card.style.boxShadow = '';
    });
});

/**
 * --- Interactive Contact Form Logic ---
 */
const contactMessage = document.getElementById('contact-message');
const sendEmailBtn = document.getElementById('send-email');
const sendWhatsappBtn = document.getElementById('send-whatsapp');

// Nomor WhatsApp dan Email tujuan
const myEmail = 'firmanfarelrichardo@gmail.com';
const myWhatsapp = '6281265553453'; // Format internasional tanpa '+'

// Template pesan default
const defaultMessage = `Halo Firman,

Saya melihat portofolio Anda dan tertarik untuk berdiskusi lebih lanjut mengenai...`;

// Fungsi untuk memperbarui link tombol
function updateContactLinks() {
    const message = encodeURIComponent(contactMessage.value);
    
    // Update link Email (mailto)
    const subject = encodeURIComponent('Pesan dari Portofolio Anda');
    sendEmailBtn.href = `mailto:${myEmail}?subject=${subject}&body=${message}`;
    
    // Update link WhatsApp
    sendWhatsappBtn.href = `https://wa.me/${myWhatsapp}?text=${message}`;
}

// Mengisi textarea dengan template saat halaman dimuat
if(contactMessage) {
    contactMessage.value = defaultMessage;
    
    // Memperbarui link saat pertama kali dimuat
    updateContactLinks();
    
    // Memperbarui link setiap kali ada perubahan pada teks
    contactMessage.addEventListener('input', updateContactLinks);
}