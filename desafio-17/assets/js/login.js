const usuarios = [
  {
    background: "tipo01",
    nome: "Matheus Ramos",
  },
  {
    background: "tipo02",
    nome: "Iuri Silva",
  },
  {
    background: "tipo03",
    nome: "Vinicius Eiji",
  },
]

listarUsuarios = () => {
  let boxUsuarios = document.querySelector("#container-usuarios")

  usuarios.map((valUsuarios) => {
    boxUsuarios.innerHTML += `
      <div class="single-usuarios">
        <div class="img-usuarios `+ valUsuarios.background +`"></div>
        <div class="ds-usuarios">
          <h3>`+ valUsuarios.nome +`</h3>
        </div>
      </div>
    `;
  })
}

listarUsuarios();