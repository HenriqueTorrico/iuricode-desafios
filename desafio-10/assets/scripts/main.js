$(document).ready(function () {
  $(".span-btn-mobile").click(function (){
    $(this).toggleClass('active');
    $(".links-menu").toggleClass('active');
  });
});

const scroll = [
  {
    imagem: "./assets/img/img-anime01.jpg",
    titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...",
    data: "00/00/0000",
    link: "./noticias.html"
  },
  {
    imagem: "./assets/img/img-anime02.jpg",
    titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...",
    data: "00/00/0000",
    link: "./noticias.html"
  },
  {
    imagem: "./assets/img/img-anime03.jpg",
    titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...",
    data: "00/00/0000",
    link: "./noticias.html"
  },
  {
    imagem: "./assets/img/img-anime04.jpg",
    titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...",
    data: "00/00/0000",
    link: "./noticias.html"
  },
  {
    imagem: "./assets/img/img-anime05.jpg",
    titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...",
    data: "00/00/0000",
    link: "./noticias.html"
  },
]

listarScroll = () => {
  let boxScroll = document.querySelector('.container-scroll')

  scroll.map((valScroll) => {
    boxScroll.innerHTML += `
      <div class="single-scroll">
        <figure class="img-scroll">
          <div class="leg-scroll">
            <span>Lorem</span>
          </div>
          <img src=`+ valScroll.imagem +` alt="Filmes">
        </figure>
        <div class="ds-scroll">
          <h4>`+ valScroll.titulo +`</h4>
          <p>`+ valScroll.descricao +`</p>
          <span>`+ valScroll.data +`</span>
          <a href=`+ valScroll.link +`>Ler notícia</a>
        </div>
      </div>
    `;
  })
}

listarScroll();