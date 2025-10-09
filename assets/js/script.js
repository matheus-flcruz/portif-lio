// --- Smooth Scroll ---
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os links de navegação que começam com '#'
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    // Adiciona um evento de clique a cada um desses links
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // 1. Previne o comportamento padrão de "pular" para a âncora
            event.preventDefault();

            // 2. Pega o ID da seção a partir do href do link (ex: "#projects")
            const targetId = this.getAttribute('href');

            // 3. Seleciona o elemento da seção alvo
            const targetSection = document.querySelector(targetId);

            // 4. Calcula a posição do header para descontar da rolagem
            const headerOffset = document.querySelector('header').offsetHeight;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // 5. Rola a página suavemente até a posição calculada
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});

// --- Scroll Reveal Animation ---

// Garante que o código só rode depois que a página estiver carregada
document.addEventListener('DOMContentLoaded', function () {

    // ... seu código de smooth scroll já existente fica aqui ...

    // --- Início do código do ScrollReveal ---
    const sr = ScrollReveal({
        origin: 'top',      // De onde a animação começa ('top', 'bottom', 'left', 'right')
        distance: '50px',   // Distância que o elemento percorre
        duration: 2000,     // Duração da animação em milissegundos
        reset: false        // A animação só acontece uma vez
    });

    // Animando os elementos da seção Hero
    sr.reveal('.hero h1', {});
    sr.reveal('.hero h2', { delay: 200 }); // Atraso de 200ms
    sr.reveal('.hero p', { delay: 400 });
    sr.reveal('.social-links', { delay: 600 });

    // Animando títulos das seções
    sr.reveal('.projects h2, .skills h2, .about-text h2', { origin: 'left' });

    // Animando os cards de projeto com um intervalo entre eles
    sr.reveal('.project-card', { interval: 200 });

    // Animando os ícones de habilidades
    sr.reveal('.skill-item', {
        origin: 'bottom',
        distance: '30px',
        interval: 100
    });

    // Animando a seção Sobre Mim
    sr.reveal('.about-image', { origin: 'left', distance: '80px' });
    sr.reveal('.about-text p', { origin: 'right', interval: 200 });

    // Animando a seção de Contato
    sr.reveal('.contact h2', {});
    sr.reveal('.contact p', { delay: 200 });
    sr.reveal('.contact-form', { origin: 'bottom', delay: 400 });
});

