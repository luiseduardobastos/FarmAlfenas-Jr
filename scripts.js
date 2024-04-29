const btnAbrirNav = document.getElementById("btn-abrir-nav");
const btnFecharNav = document.getElementById("btn-fechar-nav");
const navCel = document.getElementById("nav-cel");

// Abrir a navCel
btnAbrirNav.addEventListener("click", function () {
  navCel.style.display = "flex";
  btnAbrirNav.style.display = "none";
  btnFecharNav.style.display = "flex";
});

// Fechar a navCel
navCel.addEventListener("click", function (event) {
  if (event.target === navCel) {
    navCel.style.display = "none";
    btnAbrirNav.style.display = "flex";
    btnFecharNav.style.display = "none";
  }
});

btnFecharNav.addEventListener("click", function () {
  navCel.style.display = "none";
  btnAbrirNav.style.display = "flex";
  btnFecharNav.style.display = "none";
});

const btnAbrirContato = document.getElementById("btn-abrir-contato");
const btnFecharContato = document.getElementById("btn-fechar-contato");
const contatoModal = document.getElementById("contato-modal");

// Abrir o modal do contato
btnAbrirContato.addEventListener("click", function () {
  contatoModal.style.display = "flex";
});

function abrirModalContato() {
  contatoModal.style.display = "flex";
}

// Fechar o modal do contato quando clicar fora
contatoModal.addEventListener("click", function (event) {
  if (event.target === contatoModal) {
    contatoModal.style.display = "none";
  }
});

btnFecharContato.addEventListener("click", function () {
  contatoModal.style.display = "none";
});
