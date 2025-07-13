const postsBlog = [
    {
        img: "/assets/img/como-pintar-uma-casa.jpg.webp",
        alt: "Como pintar uma casa: 7 passos",
        href: "/blog/como-pintar-uma-casa/",
        titulo: "Como pintar uma casa: 7 passos"
    },
    {
        img: "/assets/img/construir-uma-casa-do-zero.jpg.webp",
        alt: "Construir uma casa do zero: 7 etapas",
        href: "/blog/construir-uma-casa-do-zero/",
        titulo: "Construir uma casa do zero: 7 etapas"
    },
    {
        img: "/assets/img/acidentes-domesticos.jpg.webp",
        alt: "Acidentes domésticos: 8 exemplos e como evitá-los",
        href: "/blog/acidentes-domesticos/",
        titulo: "Acidentes domésticos: 8 exemplos e como evitá-los"
    },
    {
        img: "/assets/img/como-funciona-um-compressor-de-ar.jpg.webp",
        alt: "Como funciona um compressor de ar: 5 tipos",
        href: "/blog/como-funciona-um-compressor-de-ar/",
        titulo: "Como funciona um compressor de ar: 5 tipos"
    },
    {
        img: "/assets/img/2022/12/qual-o-melhor-portao-basculante-ou-de-correr.jpg.webp",
        alt: "Portão basculante ou de correr: 9 diferenças",
        href: "/blog/portao-basculante-ou-de-correr/",
        titulo: "Portão basculante ou de correr: 9 diferenças"
    },
    {
        img: "/assets/img/2022/06/como-fazer-parede-de-pedra-natural.jpg.webp",
        alt: "Como fazer parede de pedra natural: 10 dicas",
        href: "/blog/como-fazer-parede-de-pedra-natural/",
        titulo: "Como fazer parede de pedra natural: 10 dicas"
    }
];

function renderBlogPosts() {
    const container = document.getElementById('blog-1-lista');
    let html = `
        <div class="container">
        <div class="row">
            <h2 class="title-featured">BLOG</h2>
            ${postsBlog.map(s => `
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
            <div class="pagination-wrap mt-60">
                <nav aria-label="Page navigation example">
                    <div class="col-sm-12 col-md-12 col-lg-12 padding5050">
                        <nav aria-label="navigation" style="display: flex; align-items: center; justify-content: center;">
                            <ul class="pagination list-wrap">
                                <li class="page-item active"><a href="/blog" title="1" class="page-link">1</a></li>
                                <li class="page-item"><a href="/blog/page/2/" title="2" class="page-link">2</a></li>
                                <li class="page-item"><a href="/blog/page/3/" title="3" class="page-link">3</a></li>
                                <li class="page-item"><a href="/blog/page/2/"><i class="fa fa-angle-right arrowpag"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </nav>
            </div>
    `;
    container.innerHTML = html;
}
renderBlogPosts();