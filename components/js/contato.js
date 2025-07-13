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
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM Content Loaded. Iniciando carregamento do contato...');

    const contatoLoaded = await loadHTMLInPlaceholders('/components/contato.html', 'contato-placeholder');

    if (contatoLoaded) {
        console.log('Scripts dependentes do contato inicializados.');
    } else {
        console.error('Falha ao carregar contato. Scripts dependentes não serão inicializados.');
    }
});