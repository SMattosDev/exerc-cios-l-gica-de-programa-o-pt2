var ano = parseInt(prompt("Informe um número que representa um ano: (ex: 2024)"));

// % calcula o resto de uma divisão entre dois números.
if (ano % 400 == 0) {
    alert("Esse ano é bissexto.");
} else if (ano % 100 == 0) {
    alert("Esse ano não é bissexto.");
} else if (ano % 4 == 0) {
    alert("Esse ano é bissexto.");
} else {
    alert("Esse ano não é bissexto.");
}
