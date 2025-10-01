/**
 * Inisialisasi Typed.js untuk animasi teks ketik
 */
const typed = new Typed('#typed-text', {
    strings: ['Fullstack Developer', 'AI Enthusiast', 'Problem Solver'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

/**
 * Inisialisasi Bootstrap ScrollSpy pada elemen body
 * Ini akan secara otomatis memperbarui navigasi sidebar berdasarkan posisi scroll.
 */
// Kode ini sebenarnya tidak perlu ditulis karena Bootstrap sudah otomatis
// mengaktifkan ScrollSpy melalui atribut data-* di HTML (data-bs-spy="scroll").
// Namun, jika diperlukan kustomisasi, bisa dilakukan di sini.
// Contoh:
// const scrollSpy = new bootstrap.ScrollSpy(document.body, {
//   target: '#main-nav'
// })


/**
 * Mengatur tahun sekarang di footer (jika ada)
 */
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}