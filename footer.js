// Função para carregar HTML externo
        async function loadHTML(url, elementId) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    console.error(`Erro: Não foi possível carregar ${url}. Status: ${response.status} ${response.statusText}`);
                    return false; // Retorna false em caso de erro HTTP
                }
                const html = await response.text();
                document.getElementById(elementId).innerHTML = html;
                console.log(`${url} carregado com sucesso.`);
                return true; // Retorna true em caso de sucesso
            } catch (error) {
                console.error(`Erro de rede ou outra falha ao carregar ${url}:`, error);
                return false; // Retorna false em caso de erro
            }
        }

        // Função para inicializar scripts que podem depender do footer
        function initializeFooterDependentScripts() {
            // Se houver algum script no script.js que interaja com elementos do footer,
            // ele precisaria ser chamado ou re-inicializado aqui.
            // Para o seu caso, o script de atualizar o ano já está no footer.html.
            // Se houver outras lógicas no script.js que dependam do footer (ex: event listeners de formulário do newsletter),
            // elas deveriam ser re-inicializadas aqui ou seu código em script.js adaptado para isso.
            console.log('Scripts dependentes do footer inicializados.');
        }

        // Inicialização principal da página
        document.addEventListener('DOMContentLoaded', async () => {
            console.log('DOM Content Loaded. Iniciando carregamento do footer...');
            const footerLoaded = await loadHTML('../footer.html', 'footer-placeholder');

            if (footerLoaded) {
                initializeFooterDependentScripts();
            } else {
                console.error('Falha ao carregar Footer. Scripts dependentes não serão inicializados.');
            }

            // O código abaixo é a inicialização dos Swipers e Back to Top Button,
            // que não dependem do footer, então podem ser inicializados aqui.
            // Mantenha essa parte do seu script.js ou adicione aqui se já não estiver.

            // Inicializa o Swiper para o Hero Section
            const heroSlider = document.querySelector('.hero-slider');
            if (heroSlider) {
                new Swiper(heroSlider, {
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            }

            // Inicializa o Swiper para os Testimonials Section
            const testimonialsSlider = document.querySelector('.testimonials-slider');
            if (testimonialsSlider) {
                new Swiper(testimonialsSlider, {
                    loop: true,
                    autoplay: {
                        delay: 6000,
                        disableOnInteraction: false,
                    },
                    slidesPerView: 1,
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        }
                    }
                });
            }

            // Função para o botão "Voltar ao topo"
            const backToTopButton = document.getElementById('back-to-top');
            if (backToTopButton) {
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 300) {
                        backToTopButton.classList.add('show');
                    } else {
                        backToTopButton.classList.remove('show');
                    }
                });

                backToTopButton.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            }
        });