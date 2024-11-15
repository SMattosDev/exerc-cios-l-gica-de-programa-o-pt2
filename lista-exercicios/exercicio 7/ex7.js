var num1 = parseFloat(prompt("Insira um número:"));
var num2 = parseFloat(prompt("Insira outro número:"));
var num3 = parseFloat(prompt("Insira outro número:"));

var maior, menor;

if (num1 > num2 && num1 > num3) {
    maior = num1;
} else if (num2 > num1 && num2 > num3) {
    maior = num2;
} else {
    maior = num3;
}

if (num1 < num2 && num1 < num3) {
    menor = num1;
} else if (num2 < num1 && num2 < num3) {
    menor = num2;
} else {
    menor = num3;
}

alert("O número maior é: " + maior + " e o número menor é: " + menor);
