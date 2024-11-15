var litros = parseFloat(prompt("Digite a quantidade de litros comprados: "));
var tipo = prompt("Digite o tipo de combustível (a para Álcool ou g para Gasolina): ");

var a = 3.90;
var g = 5.50;

var desconto;
var preco

if (tipo == "a") {
    preco = a; // preço do álcool
    if (litros <= 20) {
        desconto = 0.03 * litros * preco;
    } else {
        desconto = 0.05 * litros * preco;
    }
} else if (tipo == "g") {
    preco = g; // preço da gasolina
    if (litros <= 20) {
        desconto = 0.04 * litros * preco;
    } else {
        desconto = 0.06 * litros * preco;
    }
} else {
    alert("Tipo de combustível inválido!");
}

var total = litros * preco - desconto;
alert("O valor a ser pago é R$ " + total); 
