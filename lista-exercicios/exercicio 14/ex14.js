var nota1 = parseFloat(prompt("Insira sua primeira nota:"));
var nota2 = parseFloat(prompt("Insira sua segunda nota:"));

var soma = (nota1 + nota2) / 2

if (soma >= 0.0 && soma <= 4.0) {
    alert(" Sua primeira nota: " + nota1 + "  Sua segunda nota: " + nota2);
    alert(" Sua média: " + soma + " Nota: E " + " REPROVADO ");

} else if (soma > 4.0 && soma <= 6.0) {
    alert(" Sua primeira nota: " + nota1 + "  Sua segunda nota: " + nota2);
    alert(" Sua média: " + soma + " Nota: D " + " REPROVADO ");

} else if (soma > 6.0 && soma <= 7.5) {
    alert(" Sua primeira nota: " + nota1 + "  Sua segunda nota: " + nota2);
    alert(" Sua média: " + soma + " Nota: C " + " APROVADO ");

} else if (soma > 7.5 && soma <= 9.0) {
    alert(" Sua primeira nota: " + nota1 + "  Sua segunda nota: " + nota2);
    alert(" Sua média: " + soma + " Nota: B " + " APROVADO ");

} else if (soma > 9.0 && soma <= 10.0) {
    alert(" Sua primeira nota: " + nota1 + "  Sua segunda nota: " + nota2);
    alert(" Sua média: " + soma + " Nota: A " + " APROVADO ");
}