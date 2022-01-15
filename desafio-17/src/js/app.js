const users = [
  {
    name: 'Matheus Ramos',
    back_type: 'one'
  },
  {
    name: 'Iuri Silva',
    back_type: 'two'
  },
  {
    name: 'Vinicius Eiji',
    back_type: 'tree'
  },
]

usersList = () => {
  const listUsers = document.querySelector('.users')

  users.map((valUsers) => {
    listUsers.innerHTML += `
    <a href="./listagem.html" class="users-link">
      <div class="users-single">
        <div class="users-img `+ valUsers.back_type +`"></div>
        <div class="users-name">`+ valUsers.name +`</div>
      </div>
    </a>
    `
  })
}

usersList();