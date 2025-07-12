// filepath: /Users/igor.araujo/dev/projects/sites/obrasereformasbh.com/index.html
const postsBlog = [
    {
        img: "/assets/img/como-pintar-uma-casa.jpg.webp",
        alt: "Como pintar uma casa: 7 passos",
        href: "/como-pintar-uma-casa/index.html",
        titulo: "Como pintar uma casa: 7 passos"
    },
    {
        img: "/assets/img/construir-uma-casa-do-zero.jpg.webp",
        alt: "Construir uma casa do zero: 7 etapas",
        href: "/construir-uma-casa-do-zero/",
        titulo: "Construir uma casa do zero: 7 etapas"
    },
    {
        img: "/assets/img/acidentes-domesticos.jpg.webp",
        alt: "Acidentes domésticos: 8 exemplos e como evitá-los",
        href: "/acidentes-domesticos/",
        titulo: "Acidentes domésticos: 8 exemplos e como evitá-los"
    }
    // Adicione mais posts conforme necessário
];

function renderBlog() {
    const container = document.getElementById('blog-lista');
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
            </div>
            </div>
        `;
    container.innerHTML = html;
}
renderBlog();