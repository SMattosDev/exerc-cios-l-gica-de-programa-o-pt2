var nota1 = parseFloat(prompt("Insira sua primeira nota:"));
var nota2 = parseFloat(prompt("Insira sua segunda nota:"));
var nota3 = parseFloat(prompt("Insira sua terceira nota:"));

var media = (nota1 + nota2 + nota3) / 3

if (media === 10) {
    alert("Aprovado com Distinção. Nota: " + media.toFixed(1));
    // 'toFixed(1)' arredonda o número para uma casa decimal. ex: se o número for 7.3456, o resultado será 7.3
} else if (media >= 7) {
    alert(" Aprovado. Nota: " + media.toFixed(1));
} else {
    alert(" Reprovado. Nota: " + media.toFixed(1));
}



