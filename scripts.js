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

// Pergunta 1
const btnAbrirPergunta1 = document.getElementById("btn-pergunta-1");
const setaPergunta1 = document.getElementById("seta-pergunta-1");
const cardPergunta1 = document.getElementById("card-pergunta-1");

// Abrir o card da pergunta 1
btnAbrirPergunta1.addEventListener("click", function () {
  if (cardPergunta1.style.display == "flex") {
    cardPergunta1.style.display = "none";
    setaPergunta1.classList.remove("transform", "rotate-180", "duration-300");
  } else {
    cardPergunta1.style.display = "flex";
    setaPergunta1.classList.add("transform", "rotate-180", "duration-300");
  }
});

// Pergunta 2
const btnAbrirPergunta2 = document.getElementById("btn-pergunta-2");
const setaPergunta2 = document.getElementById("seta-pergunta-2");
const cardPergunta2 = document.getElementById("card-pergunta-2");

// Abrir o card da pergunta 2
btnAbrirPergunta2.addEventListener("click", function () {
  if (cardPergunta2.style.display === "flex") {
    cardPergunta2.style.display = "none";
    setaPergunta2.classList.remove("transform", "rotate-180", "duration-300");
  } else {
    cardPergunta2.style.display = "flex";
    setaPergunta2.classList.add("transform", "rotate-180", "duration-300");
  }
});

// Pergunta 3
const btnAbrirPergunta3 = document.getElementById("btn-pergunta-3");
const setaPergunta3 = document.getElementById("seta-pergunta-3");
const cardPergunta3 = document.getElementById("card-pergunta-3");

// Abrir o card da pergunta 3
btnAbrirPergunta3.addEventListener("click", function () {
  if (cardPergunta3.style.display === "flex") {
    cardPergunta3.style.display = "none";
    setaPergunta3.classList.remove("transform", "rotate-180", "duration-300");
  } else {
    cardPergunta3.style.display = "flex";
    setaPergunta3.classList.add("transform", "rotate-180", "duration-300");
  }
});

// Pergunta 4
const btnAbrirPergunta4 = document.getElementById("btn-pergunta-4");
const setaPergunta4 = document.getElementById("seta-pergunta-4");
const cardPergunta4 = document.getElementById("card-pergunta-4");

// Abrir o card da pergunta 4
btnAbrirPergunta4.addEventListener("click", function () {
  if (cardPergunta4.style.display === "flex") {
    cardPergunta4.style.display = "none";
    setaPergunta4.classList.remove("transform", "rotate-180", "duration-300");
  } else {
    cardPergunta4.style.display = "flex";
    setaPergunta4.classList.add("transform", "rotate-180", "duration-300");
  }
});

// Pergunta 5
const btnAbrirPergunta5 = document.getElementById("btn-pergunta-5");
const setaPergunta5 = document.getElementById("seta-pergunta-5");
const cardPergunta5 = document.getElementById("card-pergunta-5");

// Abrir o card da pergunta 5
btnAbrirPergunta5.addEventListener("click", function () {
  if (cardPergunta5.style.display === "flex") {
    cardPergunta5.style.display = "none";
    setaPergunta5.classList.remove("transform", "rotate-180", "duration-300");
  } else {
    cardPergunta5.style.display = "flex";
    setaPergunta5.classList.add("transform", "rotate-180", "duration-300");
  }
});
