var dd = parseInt(prompt("Digite um dia de algum mês:"));
var mm = parseInt(prompt("Digite um mês de algum ano:"));
var ano = parseInt(prompt("Digite um ano:"));

if (dd > 1 && dd < 31 && mm >= 1 && mm <= 12 && ano > 1) {
    alert("A data é válida.");
} else {
    alert("A data é inválida.");
}