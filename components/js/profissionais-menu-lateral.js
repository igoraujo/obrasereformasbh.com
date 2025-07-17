// filepath: /Users/igor.araujo/dev/projects/sites/obrasereformasbh.com/index.html
import profissionais from './proficionais-lista.js';

function renderProfissionais() {
    const container = document.getElementById('profissionais-menu-lateral');
    let html = `
                <h2 class="title-sidebar">Serviços</h2>
                <ul class="menu-sidebar">
                    ${profissionais.map(s => `
                    <li><a href="${s.href}" title="${s.titulo} em BH"><i class="fa fa-angle-double-right"></i>${s.titulo}</a></li>
                    `).join('')}
                </ul>`;
    container.innerHTML = html;
}
renderProfissionais();
