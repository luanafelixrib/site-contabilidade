// Verifica se o DOM foi totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfólio carregado com sucesso! Iniciando scripts...");

    // 1. ROLAGEM SUAVE (SMOOTH SCROLL)
    // Seleciona todos os links do menu que começam com '#'
    const menuLinks = document.querySelectorAll('.header nav a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Impede o comportamento padrão de "pulo" do link
            
            // Pega o ID da seção clicada (ex: "#projetos")
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Faz a rolagem suave até a seção
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Alinha a seção no topo da tela
                });
            }
        });
    });

    // 2. ANIMAÇÃO DE FADE-IN (INTERSECTION OBSERVER)
    // Configurações do observador: dispara quando 15% da seção aparecer na tela
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    // Cria o observador
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se a seção entrou na área visível
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target); // Para de observar após a animação acontecer
            }
        });
    }, observerOptions);

    // Aplica o observador a todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in-hidden'); // Adiciona a classe que esconde a seção inicialmente
        sectionObserver.observe(section);
    });
});