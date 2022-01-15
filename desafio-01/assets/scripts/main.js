const postagens = [
  {
    data: '02 de jul, 2021',
    titulo: 'Agora é oficial: o Windows 11 está vindo',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.'
  },
  {
    data: '02 de jul, 2021',
    titulo: 'Tim Berners-Lee vai leiloar código-fonte da web',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'
  },
  {
    data: '02 de jul, 2021',
    titulo: 'Tem Firefox novo no pedaço e você vai querer migrar',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est'
  },
  {
    data: '02 de jul, 2021',
    titulo: 'John McAfee, criador do antivírus McAfee, morre',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'
  },
]

listarPostagens = () => {
  let boxPostagens = document.querySelector('.container-postagens')

  postagens.map((valPostagens) => {
    boxPostagens.innerHTML += `
      <div class="postagens-single" alt="Ícone de like">
        <img src="./assets/img/like.svg">
        <p>`+ valPostagens.data +`</p>
        <h3>`+ valPostagens.titulo +`</h3>
        <p>`+ valPostagens.descricao +`</p>
      </div>
    `;
  })
}

listarPostagens();