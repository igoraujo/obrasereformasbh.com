// filepath: /Users/igor.araujo/dev/projects/sites/obrasereformasbh.com/index.html
import profissionais from './proficionais-lista.js';

function renderProfissionais() {
    const container = document.getElementById('profissionais-lista');
    let html = `
            <div class="container">
            <div class="row">
                <h2 class="title-featured">Nossos Profissionais</h2>
                ${profissionais.map(s => `
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 box-article listed-box">
                    <picture class="listed-box-image">
                    <img src="${s.img}" title="${s.titulo}" alt="${s.alt}" class="listing_service_img lazyload" width="416" height="277" loading="lazy">
                    </picture>
                    <div class="infos">
                    <h3>
                        <a href="${s.href}" title="${s.titulo} em BH">${s.titulo}</a>
                    </h3>
                    <button class="listed-box-button btn-orcamento" onclick="location.href='${s.href}'">Saiba mais <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
                </div>
                `).join('')}
            </div>
            </div>
        `;
    container.innerHTML = html;
}
renderProfissionais();
