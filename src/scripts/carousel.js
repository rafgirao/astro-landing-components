/**
 * Carousel.js - Script compartilhado para gerenciar carrosséis
 * Usado pelos componentes Showcase e Testimonials
 * Inclui lazy loading nativo para imagens
 */

export function initCarousel(options) {
  const {
    carouselSelector = '.carousel',
    cardSelector = '.carousel-card',
    cardsContainerSelector = '.carousel-cards',
    dotsContainerSelector = '.carousel-dots',
    prevButtonSelector = '.carousel-prev',
    nextButtonSelector = '.carousel-next',
    defaultGroupSize = 3,
    autoplay = false,
    autoplayDelay = 5000,
    dotActiveClass = 'bg-primary',
    dotInactiveClass = 'bg-gray-300',
    cardWidthClasses = {
      mobile: 'w-full',
      tablet: 'md:w-1/2',
      desktop: 'lg:w-1/3'
    }
  } = options || {};

  // Encontrar todos os carrosséis na página
  const carousels = document.querySelectorAll(carouselSelector);

  carousels.forEach(carousel => {
    let index = 0;
    let groupSize = defaultGroupSize;
    let autoplayInterval = null;

    const cards = carousel.querySelectorAll(cardSelector);
    const cardsContainer = carousel.querySelector(cardsContainerSelector);
    const dotsContainer = carousel.querySelector(dotsContainerSelector);
    const prevButton = carousel.querySelector(prevButtonSelector);
    const nextButton = carousel.querySelector(nextButtonSelector);
    const totalItems = cards.length;

    // Determinar o número de grupos com base no total de itens e tamanho do grupo
    function calculateTotalGroups() {
      return Math.ceil(totalItems / groupSize);
    }

    // Inicializar os dots de navegação
    function initDots() {
      if (!dotsContainer) return;

      dotsContainer.innerHTML = '';
      const totalGroups = calculateTotalGroups();

      // Se houver mais de 5 grupos, não mostrar dots, apenas setas
      if (totalGroups > 5) {
        dotsContainer.style.display = 'none';
        return;
      } else {
        dotsContainer.style.display = 'flex';
      }

      for (let i = 0; i < totalGroups; i++) {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot', 'w-3', 'h-3', 'rounded-full', dotInactiveClass, 'transition-colors', 'duration-200');
        dot.setAttribute('aria-label', `Go to slide group ${i + 1}`);
        dot.dataset.index = String(i);

        // Marcar o dot ativo
        if (i === Math.floor(index / groupSize)) {
          dot.classList.remove(dotInactiveClass);
          dot.classList.add(dotActiveClass);
        }

        dot.addEventListener('click', () => {
          goToIndex(i * groupSize);
          if (autoplay) resetAutoplay();
        });

        dotsContainer.appendChild(dot);
      }
    }

    // Atualizar os dots ativos
    function updateDots() {
      if (!dotsContainer) return;

      const dots = dotsContainer.querySelectorAll('.carousel-dot');
      const currentGroup = Math.floor(index / groupSize);

      dots.forEach((dot, i) => {
        if (i === currentGroup) {
          dot.classList.remove(dotInactiveClass);
          dot.classList.add(dotActiveClass);
        } else {
          dot.classList.remove(dotActiveClass);
          dot.classList.add(dotInactiveClass);
        }
      });
    }

    // Atualizar o carrossel para o índice atual
    function updateCarousel() {
      if (!cardsContainer) return;

      // Calcular o deslocamento baseado no índice atual e no tamanho do grupo
      const translateX = -(index * (100 / groupSize));
      cardsContainer.style.transform = `translateX(${translateX}%)`;
      updateDots();
    }

    // Ir para um índice específico
    function goToIndex(idx) {
      const totalItems = cards.length;
      index = Math.max(0, Math.min(idx, totalItems - 1));
      updateCarousel();
    }

    // Ir para o próximo grupo
    function goToNext() {
      const totalItems = cards.length;
      index = (index + groupSize) % totalItems;
      updateCarousel();
      if (autoplay) resetAutoplay();
    }

    // Ir para o grupo anterior
    function goToPrev() {
      const totalItems = cards.length;
      index = (index - groupSize + totalItems) % totalItems;
      updateCarousel();
      if (autoplay) resetAutoplay();
    }

    // Ajustar o tamanho do grupo com base na largura da tela
    function adjustGroupSize() {
      const width = window.innerWidth;

      if (width < 768) {
        groupSize = 1; // Mobile: 1 card por vez
      } else if (width < 1024) {
        groupSize = 2; // Tablet: 2 cards por vez
      } else {
        groupSize = defaultGroupSize; // Desktop: 3 cards por vez (ou o valor padrão)
      }

      // Atualizar a largura dos cards
      cards.forEach(card => {
        if (width < 768) {
          card.classList.remove(cardWidthClasses.tablet, cardWidthClasses.desktop);
          card.classList.add(cardWidthClasses.mobile);
        } else if (width < 1024) {
          card.classList.remove(cardWidthClasses.mobile, cardWidthClasses.desktop);
          card.classList.add(cardWidthClasses.tablet);
        } else {
          card.classList.remove(cardWidthClasses.mobile, cardWidthClasses.tablet);
          card.classList.add(cardWidthClasses.desktop);
        }
      });

      // Reiniciar os dots e o carrossel
      initDots();
      updateCarousel();
    }

    // Iniciar autoplay
    function startAutoplay() {
      if (!autoplay) return;

      if (autoplayInterval) clearInterval(autoplayInterval);
      autoplayInterval = setInterval(goToNext, autoplayDelay);
    }

    // Resetar autoplay (após interação do usuário)
    function resetAutoplay() {
      if (!autoplay) return;

      if (autoplayInterval) clearInterval(autoplayInterval);
      startAutoplay();
    }

    // Adicionar event listeners
    if (prevButton) {
      prevButton.addEventListener('click', goToPrev);
    }

    if (nextButton) {
      nextButton.addEventListener('click', goToNext);
    }

    // Pausar autoplay quando o mouse estiver sobre o carrossel
    carousel.addEventListener('mouseenter', () => {
      if (autoplayInterval) clearInterval(autoplayInterval);
    });

    // Retomar autoplay quando o mouse sair do carrossel
    carousel.addEventListener('mouseleave', () => {
      if (autoplay) startAutoplay();
    });

    // Ajustar o tamanho do grupo quando a janela é redimensionada
    window.addEventListener('resize', adjustGroupSize);

    // Inicializar
    adjustGroupSize();
    initDots();
    updateCarousel();
    if (autoplay) startAutoplay();
  });
}

// Inicializar automaticamente quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  // Você pode adicionar inicializações automáticas aqui se necessário
});
