var num1 = parseFloat(prompt(" Digite um número: "));
var num2 = parseFloat(prompt(" Digite outro número: "));

var operacoes = parseFloat(prompt(" Digite qual operação você deseja realizar: par ou ímpar (digite 1); positivo ou negativo (digite 2); inteiro ou decimal (digite 3). "));
var par_impar = 1
var positivo_negativo = 2
var inteiro_decimal = 3


if (operacoes === par_impar) {


    if (num1 % 2 === 0) {
        alert(" O número " + num1 + " é par.");
    }
    else {
        alert(" O número " + num1 + " é ímpar.");
    }
    if (num2 % 2 === 0) {
        alert(" O número " + num2 + " é par.");
    }
    else {
        alert(" O número " + num2 + " é ímpar.");
    }


} else if (operacoes === positivo_negativo) {


    if (num1 >= 1) {
        alert(" O número " + num1 + " é positivo. ");
    }
    else {
        alert(" O número " + num1 + " é negativo. ");
    }
    if (num2 >= 1) {
        alert(" O número " + num2 + " é positivo. ");
    }
    else {
        alert(" O número " + num2 + " é negativo. ");
    }


} else if (operacoes === inteiro_decimal) {

    var arredondado1 = Math.round(num1);

    if (num1 === arredondado1) {
        alert(" O número " + num1 + " é inteiro. ");
    }
    else {
        alert(" O número " + num1 + " é decimal. ");
    }
    var arredondado2 = Math.round(num2);

    if (num2 === arredondado2) {
        alert(" O número " + num2 + " é inteiro. ");
    }
    else {
        alert(" O número " + num2 + " é decimal. ");
    }


} else {
    alert(" Erro. ")
}
