// filepath: /Users/igor.araujo/dev/projects/sites/obrasereformasbh.com/index.html
const profissionais = [
    {
        img: "/assets/img/2022/06/arquiteto.jpg.webp",
        alt: "Arquiteto",
        href: "/profissionais/arquiteto/index.html",
        titulo: "Arquiteto"
    },
    {
        img: "/assets/img/2022/06/bombeiro-hidraulico-em-bh.jpg.webp",
        alt: "Bombeiro hidráulico",
        href: "/profissionais/bombeiro-hidraulico/index.html",
        titulo: "Bombeiro hidráulico"
    },
    {
        img: "/assets/img/2022/06/decoradora-em-bh.jpg.webp",
        alt: "Decoradora",
        href: "/profissionais/decoradora/index.html",
        titulo: "Decoradora"
    },
    {
        img: "/assets/img/2022/06/eletricista-em-bh.jpg.webp",
        alt: "Eletricista",
        href: "/profissionais/eletricista/index.html",
        titulo: "Eletricista"
    },
    {
        img: "/assets/img/engenheiro-civil-em-bh.jpg.webp",
        alt: "Engenheiro civil",
        href: "/profissionais/engenheiro-civil/index.html",
        titulo: "Engenheiro civil"
    },
    {
        img: "/assets/img/2022/06/gesseiro-em-bh.jpg.webp",
        alt: "Gesseiro",
        href: "/profissionais/gesseiro/index.html",
        titulo: "Gesseiro"
    },
    {
        img: "/assets/img/2022/06/pedreiro-em-bh.jpg.webp",
        alt: "Pedreiro",
        href: "/profissionais/pedreiro/index.html",
        titulo: "Pedreiro"
    },
    {
        img: "/assets/img/2022/06/pintor-em-bh.jpg.webp",
        alt: "Pintor",
        href: "/profissionais/pintor/index.html",
        titulo: "Pintor"
    }
];

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
