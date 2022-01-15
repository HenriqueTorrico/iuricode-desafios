const redesSociais = [
  {
    icone: "./assets/img/smile.svg",
    descricao: "Meu Nome",
    nome: "Iuri Silva"
  },
  {
    icone: "./assets/img/mail.svg",
    descricao: "E-mail",
    nome: "iuricold99@gmail.com"
  },
  {
    icone: "./assets/img/instagram.svg",
    descricao: "Instagram",
    nome: "@iuricode"
  },
  {
    icone: "./assets/img/phone.svg",
    descricao: "Telefone",
    nome: "(14) 99999-9999"
  },
]

listarRedesSociais = () => {
  let boxRedes = document.querySelector('.redes-sociais')

  redesSociais.map((valRedes) => {
    boxRedes.innerHTML += `
      <div class="single-redes-sociais">
        <figure class="img-redes-sociais">
          <img src=` + valRedes.icone + ` alt="Ícones das redes sociais">
        </figure>
        <h3>`+ valRedes.descricao +`</h3>
        <p>`+ valRedes.nome +`</p>
      </div>
    `;
  })
}

listarRedesSociais();