const produtos = [
  {
    titulo: 'Jorda Verde escuro com Verde claro',
    imagem: './assets/img/jordan-verde.png'
  },
  {
    titulo: 'Jordan Azul com Branco',
    imagem: './assets/img/jordan-azul.png'
  },
  {
    titulo: 'Jordan Roxo com Branco',
    imagem: './assets/img/jordan-roxo.png'
  },
  {
    titulo: 'Jordan Cinza escuro com Branco',
    imagem: './assets/img/jordan-cinza.png'
  },
  {
    titulo: 'Jordan Preto com Vinho',
    imagem: './assets/img/jordan-vinho.png'
  },
  {
    titulo: 'Jordan Laranja',
    imagem: './assets/img/jordan-laranja.png'
  },
  {
    titulo: 'Jordan Branco com Cinza',
    imagem: './assets/img/jordan-branco.png'
  },
  {
    titulo: 'Jordan Preto com branco',
    imagem: './assets/img/jordan-preto.png'
  },
]

listarProdutos = () => {
  let boxProdutos = document.querySelector('.box-destaques')

  produtos.map((valProdutos) => {
    boxProdutos.innerHTML += `
      <figure class="destaques-single">
        <img src="`+ valProdutos.imagem +`" alt="Imagem dos produtos" title="`+ valProdutos.titulo +`">
      </figure>
    `;
  })
}

listarProdutos();