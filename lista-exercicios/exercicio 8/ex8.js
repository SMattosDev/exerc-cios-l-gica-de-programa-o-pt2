var num1 = parseFloat(prompt("Informe o valor do primeiro produto: "));
var num2 = parseFloat(prompt("Informe o valor do segundo produto: "));
var num3 = parseFloat(prompt("Informe o valor do terceiro produto: "));

if (num1 < num2 && num1 < num3) {
    alert("Você deve comprar o produto de R$: " + num1 + ". Porque é o mais barato.");

} else if (num2 < num1 && num2 < num3) {
    alert("Você deve comprar o produto de R$: " + num2 + ". Porque é o mais barato.");

} else {
    alert("Você deve comprar o produto de R$: " + num3 + ". Porque é o mais barato.");
}
