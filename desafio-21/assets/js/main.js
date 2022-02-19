const single_perguntas = document.querySelectorAll(".single-perguntas")

single_perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    pergunta.classList.toggle("active")
  })
})