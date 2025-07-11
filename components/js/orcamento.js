// Função para carregar HTML externo em todos os placeholders
async function loadHTMLInPlaceholders(url, className) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Erro: Não foi possível carregar ${url}. Status: ${response.status} ${response.statusText}`);
            return false;
        }
        const html = await response.text();
        document.querySelectorAll(`.${className}`).forEach(el => {
            el.innerHTML = html;
        });
        console.log(`${url} carregado com sucesso em todos os placeholders.`);
        return true;
    } catch (error) {
        console.error(`Erro de rede ou outra falha ao carregar ${url}:`, error);
        return false;
    }
}

// Inicialização principal da página
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM Content Loaded. Iniciando carregamento do orçamento...');
    const orcamentoLoaded = await loadHTMLInPlaceholders('/components/orcamento.html', 'orcamento-placeholder');

    if (orcamentoLoaded) {
        console.log('Scripts dependentes do orçamento inicializados.');
    } else {
        console.error('Falha ao carregar orçamento. Scripts dependentes não serão inicializados.');
    }
});