const btnAbrirContato = document.getElementById("btn-abrir-contato");
const btnFecharContato = document.getElementById("btn-fechar-contato");
const contatoModal = document.getElementById("contato-modal");

// Abrir o modal do contato
btnAbrirContato.addEventListener("click", function () {
  contatoModal.style.display = "flex";
});

// Fechar o modal do contato quando clicar fora
contatoModal.addEventListener("click", function (event) {
  if (event.target === contatoModal) {
    contatoModal.style.display = "none";
  }
});

btnFecharContato.addEventListener("click", function () {
  contatoModal.style.display = "none";
});
