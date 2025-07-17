const postsBlog = [
    {
        img: "/assets/img/2022/06/tipos-de-madeira-para-telhado.jpg.webp",
        alt: "Tipos de madeira para telhado: 5 melhores",
        href: "/blog/tipos-de-madeira-para-telhado/index.html",
        titulo: "Tipos de madeira para telhado: 5 melhores"
    }
];

function renderBlogPosts() {
    const container = document.getElementById('blog-3-lista');
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
                                    <a href="/blog/page/2/">
                                        <i class="fa fa-angle-left arrowpag"></i>
                                    </a>
                                </li>
                                <li class="page-item"><a href="/blog" title="1" class="page-link">1</a></li>
                                <li class="page-item"><a href="/blog/page/2/" title="2" class="page-link">2</a></li>
                                <li class="page-item active"><a href="/blog/page/3/" title="3" class="page-link">3</a></li>
                            </ul>
                        </nav>
                    </div>
                </nav>
            </div>
    `;
    container.innerHTML = html;
}
renderBlogPosts();