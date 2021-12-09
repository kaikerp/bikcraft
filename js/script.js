// function livro(nome, ano, autor) {
//   const contaAnos = new Date().getFullYear() - ano;
//   const frase = nome.toUpperCase() + ", por " + autor + ", de " + ano + ".";
//   const objeto = {
//     contaAnos,
//     frase,
//   };
//   return objeto;
// }
// const Livro = livro("O Senhor dos Anéis", 1954, "J.R.R. Tolkien");
// console.log(Livro.frase);
// console.log(Livro);
// function livro(nome, ano, autor) {
//   return {
//     contaAnos: new Date().getFullYear() - ano,
//     frase: nome.toUpperCase() + ", por " + autor + ", de " + ano + ".",
//   };
// }

// const Livro = livro("O Senhor dos Anéis", 1954, "J.R.R. Tolkien");
// console.log(Livro.frase);
// console.log(Livro);

// const curso = {
//   nome: "JavaScript",
//   completar() {
//     console.log(this.nome + ": Curso Completo.");
//   },
//   horas: "40 horas",
// };

// curso.completar();
// console.log(curso);

const circulo = document.querySelector("#div");

function seguirMouse(event) {
  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
}

window.addEventListener("mousemove", seguirMouse);
// ------
const botao = document.querySelector(".botao");

function mostrar() {
  const texto = document.querySelector(".texto");
  texto.classList.toggle("ativo");
}

botao.addEventListener("click", mostrar);
