const filmes = [
  {
    imagem: "./assets/img/filme01.jpg",
    nome: "Shang-Chi",
  },
  {
    imagem: "./assets/img/filme02.jpg",
    nome: "Shang-Chi",
  },
  {
    imagem: "./assets/img/filme03.jpg",
    nome: "Shang-Chi",
  },
  {
    imagem: "./assets/img/filme04.jpg",
    nome: "Shang-Chi",
  },
  {
    imagem: "./assets/img/filme05.jpg",
    nome: "Shang-Chi",
  },
]

listarFilmes = () => {
  let boxFilmes = document.querySelector("#container-filmes")

  filmes.map((valFilmes) => {
    boxFilmes.innerHTML += `
      <div class="single-filmes">
        <figure class="img-filmes">
          <img src="`+ valFilmes.imagem +`" alt="Imagem dos filmes">
        </figure>
        <div class="ds-filmes">
          <span>Categoria</span>
          <img src="./assets/img/stars.svg" alt="Ícone de estrelas">
          <h3>`+ valFilmes.nome +`</h3>
        </div>
      </div>
    `;
  })
}

listarFilmes();