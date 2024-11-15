var resposta1 = prompt("Telefonou para a vítima? (responda 'sim' ou 'não')");
var resposta2 = prompt("Esteve no local do crime? (responda 'sim' ou 'não')");
var resposta3 = prompt("Mora perto da vítima? (responda 'sim' ou 'não')");
var resposta4 = prompt("Devia para a vítima? (responda 'sim' ou 'não')");
var resposta5 = prompt("Já trabalhou com a vítima? (responda 'sim' ou 'não')");

// Variável que vai contar quantas respostas foram "sim"
var contador = 0;

// Se a resposta for "sim", aumenta o contador em 1
if (resposta1 === "sim") {
    contador++;  // O "++" aumenta o valor de contador em 1
}
if (resposta2 === "sim") {
    contador++;
}
if (resposta3 === "sim") {
    contador++;
}
if (resposta4 === "sim") {
    contador++;
}
if (resposta5 === "sim") {
    contador++;
}


if (contador === 5) {
    alert("Assassino");
} else if (contador >= 3) {
    alert("Cúmplice");
} else if (contador === 2) {
    alert("Suspeita");
} else {
    alert("Inocente");
}
// aprendi funções novas neste exercício;