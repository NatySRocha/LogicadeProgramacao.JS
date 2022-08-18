const numeroDeCadastrosTotal = 3;
let numeroDeCadastrosEfetuados = 0;
let usuarios = "";

while (numeroDeCadastrosEfetuados < numeroDeCadastrosTotal) {
  const nome = prompt("Entre com seu nome");

  alert("Olá " + nome);
  usuarios += nome + "\n";

  // numeroDeCadastrosEfetuados = numeroDeCadastrosEfetuados + 1
  numeroDeCadastrosEfetuados += 1;
}

// faz exatamente a mesma coisa, mas com outra sintaxe
// for (let cadastrosEfetuados=0; cadastrosEfetuados < numeroDeCadastrosTotal; cadastrosEfetuados++) {
//   const nome = prompt("Entre com seu nome")

//   alert('Olá ' + nome)
//   usuarios += nome + '\n'
// }

alert(usuarios);
alert("cadastros efetuados");

let desejaContinuar = "S";

while (desejaContinuar === "S") {
  const nome = prompt("Entre com seu nome:");

  alert("Olá, " + nome);

  desejaContinuar = prompt("Digite S/N").toUpperCase();
}

// while(true) {
//   const nome = prompt('Entre com seu nome:')

//   alert('Olá, ' + nome)

//   const desejaContinuar = prompt('Digite S/N').toUpperCase()

//   if (desejaContinuar !== "S") {
//     break
//   }
// }

alert("cadastros efetuados");
