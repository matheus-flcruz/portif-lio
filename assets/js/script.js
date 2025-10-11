document.addEventListener('DOMContentLoaded', function () {
    // --- LÓGICA DO SMOOTH SCROLL ---
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const headerOffset = document.querySelector('header').offsetHeight;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });

    // --- LÓGICA DO SCROLL REVEAL ---
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 2000,
        reset: false
    });

    // (O resto do seu código do ScrollReveal permanece aqui...)
    sr.reveal('.hero h1', {});
    sr.reveal('.hero h2', { delay: 200 });
    sr.reveal('.hero p', { delay: 400 });
    sr.reveal('.social-links', { delay: 600 });
    sr.reveal('.projects h2, .skills h2, .about-text h2', { origin: 'left' });
    sr.reveal('.project-card', { interval: 200 });
    sr.reveal('.skill-item', { origin: 'bottom', distance: '30px', interval: 100 });
    sr.reveal('.about-image', { origin: 'left', distance: '80px' });
    sr.reveal('.about-text p', { origin: 'right', interval: 200 });
    sr.reveal('.contact h2', {});
    sr.reveal('.contact p', { delay: 200 });
    sr.reveal('.contact-form', { origin: 'bottom', delay: 400 });


    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const navMenu = document.querySelector('.nav-menu');

    if (menuHamburguer && navMenu) {
        menuHamburguer.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuHamburguer.classList.toggle('active');
        });
    }
});

