// Navegação suave para links âncora
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os links que começam com #
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  // Adiciona um event listener para cada link
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Previne o comportamento padrão
      e.preventDefault();
      
      // Obtém o ID do elemento alvo
      const targetId = this.getAttribute('href').substring(1);
      
      // Verifica se o elemento existe
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Rola até o elemento com animação suave
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Atualiza a URL com o hash
        history.pushState('', '', `#${targetId}`);
      } else {
        console.warn(`Elemento com ID ${targetId} não encontrado na página`);
      }
    });
  });
});
