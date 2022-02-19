const perguntas = [
  {
    pergunta: "Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?",
    resposta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    pergunta: "O que está incluído no Xbox Series X?",
    resposta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    pergunta: "Como sei se minha TV é compatível com 4K?",
    resposta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
]

listarPerguntas = () => {
  let boxPergunta = document.querySelector(".container-perguntas")

  perguntas.map((valPegunta) => {
    boxPergunta.innerHTML += `
      <div class="single-perguntas">
        <div class="pergunta">
          <h3>`+ valPegunta.pergunta +`</h3>
          <img src="./assets/img/arrow.svg" alt="Ícone arrow">
        </div>
        <div class="resposta">
          <p>`+ valPegunta.resposta +`</p>
        </div>
      </div>
    `;
  })
}

listarPerguntas()

const single_perguntas = document.querySelectorAll(".single-perguntas")

single_perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    pergunta.classList.toggle("active")
  })
})