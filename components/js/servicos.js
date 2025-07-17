// filepath: /Users/igor.araujo/dev/projects/sites/obrasereformasbh.com/index.html
const servicos = [
    {
        img: "/assets/img/acabamento-de-casa-em-bh.jpg.webp",
        alt: "Acabamento de casa",
        href: "/servicos/acabamento-de-casa/",
        titulo: "Acabamento de casa"
    },
    {
        img: "/assets/img/2022/06/bancada-em-bh.jpg.webp",
        alt: "Bancada",
        href: "/servicos/bancada/",
        titulo: "Bancada"
    },
    {
        img: "/assets/img/2022/06/construcao-de-casa-em-bh.jpg.webp",
        alt: "Construção de casa",
        href: "/servicos/construcao-de-casa/",
        titulo: "Construção de casa"
    },
    {
        img: "/assets/img/construcao-de-piscina-em-bh.jpg.webp",
        alt: "Construção de piscina",
        href: "/servicos/construcao-de-piscina/",
        titulo: "Construção de piscina"
    },
    {
        img: "/assets/img/construcao-de-telhado-em-bh.jpg.webp",
        alt: "Construção de telhado",
        href: "/servicos/construcao-de-telhado/",
        titulo: "Construção de telhado"
    },
    {
        img: "/assets/img/2022/06/design-de-interiores-em-bh.jpg.webp",
        alt: "Design de interiores",
        href: "/servicos/design-de-interiores/",
        titulo: "Design de interiores"
    },
    {
        img: "/assets/img/2022/06/gestao-de-obras-em-bh.jpg.webp",
        alt: "Gestão de obras",
        href: "/servicos/gestao-de-obras/",
        titulo: "Gestão de obras"
    },
    {
        img: "/assets/img/instalacao-de-porcelanato-em-bh.jpg.webp",
        alt: "Instalação de porcelanato",
        href: "/servicos/instalacao-de-porcelanato/",
        titulo: "Instalação de porcelanato"
    },
    {
        img: "/assets/img/parede-de-drywall-em-bh.jpg.webp",
        alt: "Parede de drywall",
        href: "/servicos/parede-de-drywall/",
        titulo: "Parede de drywall"
    },
    {
        img: "/assets/img/2022/06/pia-de-granito-em-bh.jpg.webp",
        alt: "Pia de granito",
        href: "/servicos/pia-de-granito/",
        titulo: "Pia de granito"
    },
    {
        img: "/assets/img/pintura-comercial-em-bh.jpg.webp",
        alt: "Pintura comercial",
        href: "/servicos/pintura-comercial/",
        titulo: "Pintura comercial"
    },
    {
        img: "/assets/img/pintura-de-casa-em-bh.jpg.webp",
        alt: "Pintura de casa",
        href: "/servicos/pintura-de-casa/",
        titulo: "Pintura de casa"
    },
    {
        img: "/assets/img/pintura-de-predio-em-bh.jpg.webp",
        alt: "Pintura de prédio",
        href: "/servicos/pintura-de-predio/",
        titulo: "Pintura de prédio"
    },
    {
        img: "/assets/img/2022/06/piso-de-granito-em-bh.jpg.webp",
        alt: "Piso de granito",
        href: "/servicos/piso-de-granito/",
        titulo: "Piso de granito"
    },
    {
        img: "/assets/img/2022/06/piso-vinilico-em-bh.jpg.webp",
        alt: "Piso vinílico",
        href: "/servicos/piso-vinilico/",
        titulo: "Piso vinílico"
    },
    {
        img: "/assets/img/2022/06/placa-de-gesso-3d-em-bh.jpg.webp",
        alt: "Placa de gesso 3D",
        href: "/servicos/placa-de-gesso-3d/",
        titulo: "Placa de gesso 3D"
    },
    {
        img: "/assets/img/2022/06/projeto-arquitetonico-comercial-em-bh.jpg.webp",
        alt: "Projeto arquitetônico comercial",
        href: "/servicos/projeto-arquitetonico-comercial/",
        titulo: "Projeto arquitetônico comercial"
    },
    {
        img: "/assets/img/2022/06/projeto-arquitetonico-residencial-em-bh.jpg.webp",
        alt: "Projeto arquitetônico residencial",
        href: "/servicos/projeto-arquitetonico-residencial/",
        titulo: "Projeto arquitetônico residencial"
    },
    {
        img: "/assets/img/projeto-de-fachada-residencial-em-bh.jpg.webp",
        alt: "Projeto de fachada residencial",
        href: "/servicos/projeto-de-fachada-residencial/",
        titulo: "Projeto de fachada residencial"
    },
    {
        img: "/assets/img/projeto-eletrico-predial-em-bh.jpg.webp",
        alt: "Projeto elétrico predial",
        href: "/servicos/projeto-eletrico-predial/",
        titulo: "Projeto elétrico predial"
    },
    {
        img: "/assets/img/projeto-eletrico-residencial-em-bh.jpg.webp",
        alt: "Projeto elétrico residencial",
        href: "/servicos/projeto-eletrico-residencial/",
        titulo: "Projeto elétrico residencial"
    },
    {
        img: "/assets/img/rebaixamento-de-gesso-em-bh.jpg.webp",
        alt: "Rebaixamento de gesso",
        href: "/servicos/rebaixamento-de-gesso/",
        titulo: "Rebaixamento de gesso"
    },
    {
        img: "/assets/img/reforma-comercial-em-bh.jpg.webp",
        alt: "Reforma comercial",
        href: "/servicos/reforma-comercial/",
        titulo: "Reforma comercial"
    },
    {
        img: "/assets/img/reforma-de-apartamento-em-bh.jpg.webp",
        alt: "Reforma de apartamento",
        href: "/servicos/reforma-de-apartamento/",
        titulo: "Reforma de apartamento"
    },
    {
        img: "/assets/img/reforma-de-casa-em-bh.jpg.webp",
        alt: "Reforma de casa",
        href: "/servicos/reforma-de-casa/",
        titulo: "Reforma de casa"
    },
    {
        img: "/assets/img/reforma-de-fachada-predial-em-bh.jpg.webp",
        alt: "Reforma de fachada predial",
        href: "/servicos/reforma-de-fachada-predial/",
        titulo: "Reforma de fachada predial"
    }
];

function renderServicos() {
    const container = document.getElementById('servicos-lista');
    let html = `
            <div class="container">
            <div class="row">
                <h2 class="title-featured">Serviços</h2>
                ${servicos.map(s => `
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
renderServicos();