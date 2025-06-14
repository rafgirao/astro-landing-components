/**
 * Script para detectar automaticamente a orientação dos vídeos e ajustar os containers
 */

document.addEventListener('DOMContentLoaded', () => {
  initVideoEmbeds();
});

function initVideoEmbeds() {
  // Inicializa os containers de vídeo do Panda
  const pandaContainers = document.querySelectorAll('.panda-embed-container[data-orientation="auto"]');
  
  pandaContainers.forEach(container => {
    const videoId = container.dataset.videoId;
    const iframe = container.querySelector('iframe');
    
    if (iframe) {
      // Adiciona um listener para quando o iframe for carregado
      iframe.addEventListener('load', () => {
        // Tenta obter as dimensões do vídeo após um pequeno delay para garantir que o player esteja inicializado
        setTimeout(() => {
          detectPandaVideoOrientation(container, videoId);
        }, 1000);
      });
      
      // Se o iframe já estiver carregado
      if (iframe.contentWindow && iframe.contentDocument) {
        detectPandaVideoOrientation(container, videoId);
      }
    }
  });
}

function detectPandaVideoOrientation(container, videoId) {
  // Tenta acessar o player do Panda via API (se disponível)
  try {
    // Como não temos acesso direto à API do Panda, usamos uma abordagem alternativa
    // Observamos o elemento do player para detectar mudanças nas dimensões
    
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;
        
        if (width && height) {
          const aspectRatio = width / height;
          
          // Se a largura for menor que a altura, é um vídeo em modo retrato
          if (aspectRatio < 1) {
            container.style.paddingTop = '177.78%'; // Proporção 9:16
          } else {
            container.style.paddingTop = '56.25%'; // Proporção 16:9
          }
          
          // Desconecta o observer após a detecção
          observer.disconnect();
        }
      }
    });
    
    // Observa o iframe para detectar mudanças
    observer.observe(container);
    
    // Fallback: se após 3 segundos não conseguirmos detectar, usamos o padrão landscape
    setTimeout(() => {
      observer.disconnect();
    }, 3000);
  } catch (error) {
    console.warn('Não foi possível detectar a orientação do vídeo:', error);
    // Fallback para proporção landscape
    container.style.paddingTop = '56.25%';
  }
}
