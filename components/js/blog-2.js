const postsBlog = [
    {
        img: "/assets/img/2022/06/como-reformar-casas-gastando-pouco.jpg.webp",
        alt: "Como reformar casas gastando pouco: 15 dicas de engenheiros",
        href: "/blog/como-reformar-casas-gastando-pouco/index.html",
        titulo: "Como reformar casas gastando pouco: 15 dicas de engenheiros"
    },
    {
        img: "/assets/img/2022/06/tipos-de-divisorias-para-escritorio.jpg.webp",
        alt: "Tipos de divisórias para escritório: 10 opções",
        href: "/blog/tipos-de-divisorias-para-escritorio/index.html",
        titulo: "Tipos de divisórias para escritório: 10 opções"
    },
    {
        img: "/assets/img/2022/06/como-construir-casas-baratas.jpg.webp",
        alt: "Como construir casas baratas: 14 dicas de engenheiros",
        href: "/blog/como-construir-casas-baratas/index.html",
        titulo: "Como construir casas baratas: 14 dicas de engenheiros"
    },
    {
        img: "/assets/img/2022/06/como-reformar-um-banheiro-pequeno.jpg.webp",
        alt: "Como reformar um banheiro pequeno: 11 dicas",
        href: "/blog/como-reformar-um-banheiro-pequeno/index.html",
        titulo: "Como reformar um banheiro pequeno: 11 dicas"
    },
    {
        img: "/assets/img/2022/06/como-economizar-energia-eletrica.jpg.webp",
        alt: "Como economizar energia elétrica: 18 dicas",
        href: "/blog/como-economizar-energia-eletrica/index.html",
        titulo: "Como economizar energia elétrica: 18 dicas"
    },
    {
        img: "/assets/img/2022/06/como-reformar-banheiro-gastando-pouco.jpg.webp",
        alt: "Como reformar banheiro gastando pouco: 18 dicas",
        href: "/blog/como-reformar-banheiro-gastando-pouco/index.html",
        titulo: "Como reformar banheiro gastando pouco: 18 dicas"
    }
];

function renderBlogPosts() {
    const container = document.getElementById('blog-2-lista');
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
                                <li class="page-item" style="display: flex; align-items: center; justify-content: center;">
                                    <a href="/blog/">
                                        <i class="fa fa-angle-left arrowpag"></i>
                                    </a>
                                </li>
                                <li class="page-item"><a href="/blog" title="1" class="page-link">1</a></li>
                                <li class="page-item active"><a href="/blog/page/2/" title="2" class="page-link">2</a></li>
                                <li class="page-item"><a href="/blog/page/3/" title="3" class="page-link">3</a></li>
                                <li class="page-item"><a href="/blog/page/3/"><i class="fa fa-angle-right arrowpag"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </nav>
            </div>
    `;
    container.innerHTML = html;
}
renderBlogPosts();