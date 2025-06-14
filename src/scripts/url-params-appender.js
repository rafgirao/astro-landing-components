// Script para adicionar parâmetros da URL atual a todos os links externos
document.addEventListener('DOMContentLoaded', () => {
  // Função para obter todos os parâmetros da URL atual
  function getUrlParams() {
    const params = {};
    const queryString = window.location.search.substring(1);

    if (queryString) {
      const paramPairs = queryString.split('&');

      paramPairs.forEach(pair => {
        const [key, value] = pair.split('=');
        if (key && value) {
          params[decodeURIComponent(key)] = decodeURIComponent(value);
        }
      });
    }

    return params;
  }

  // Função para verificar se um link é externo ou um link de curso
  function isExternalLink(href) {
    if (!href) return false;

    // Ignora links de âncora, tel:, mailto:, javascript: etc.
    if (href.startsWith('#') ||
      href.startsWith('tel:') ||
      href.startsWith('mailto:') ||
      href.startsWith('javascript:')) {
      return false;
    }

    // Verifica se é um link para página de curso
    if (href.startsWith('/')) {
      return true;
    }

    // Verifica se o link é para outro domínio
    try {
      const currentDomain = window.location.hostname;
      const linkUrl = new URL(href, window.location.origin);

      // Se o domínio for diferente ou for um link de pagamento/checkout
      return linkUrl.hostname !== currentDomain ||
        href.includes('pay.') ||
        href.includes('checkout.') ||
        href.includes('herospark.com');
    } catch (e) {
      // Se não conseguir analisar a URL, assume que não é externo
      return false;
    }
  }

  // Função para adicionar parâmetros a uma URL
  function addParamsToUrl(url, params) {
    if (!Object.keys(params).length) return url;

    try {
      const urlObj = new URL(url, window.location.origin);

      // Adiciona cada parâmetro à URL
      Object.entries(params).forEach(([key, value]) => {
        urlObj.searchParams.set(key, value);
      });

      return urlObj.toString();
    } catch (e) {
      // Se não conseguir analisar a URL, retorna a original
      return url;
    }
  }

  // Obtém todos os parâmetros da URL atual
  const urlParams = getUrlParams();

  // Se não houver parâmetros, não faz nada
  if (!Object.keys(urlParams).length) return;

  // Seleciona todos os links na página
  const allLinks = document.querySelectorAll('a[href]');

  // Para cada link, verifica se é externo e adiciona os parâmetros
  allLinks.forEach(link => {
    const href = link.getAttribute('href');

    if (isExternalLink(href)) {
      const newHref = addParamsToUrl(href, urlParams);
      link.setAttribute('href', newHref);
    }
  });
});
