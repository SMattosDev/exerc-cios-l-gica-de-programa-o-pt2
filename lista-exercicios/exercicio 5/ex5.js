var nota1 = parseFloat(prompt("Insira sua primeira nota:"))
var nota2 = parseFloat(prompt("Insira sua segunda nota:"));

var soma = (nota1 + nota2) / 2;


if (soma === 10) {
    alert("Aprovado com Distinção");
} else if (soma >= 7) {
    alert("Aprovado");
} else {
    alert("Reprovado");
}