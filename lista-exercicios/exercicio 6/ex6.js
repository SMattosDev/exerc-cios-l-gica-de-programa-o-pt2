var num1 = parseFloat(prompt("Insira um número:"));
var num2 = parseFloat(prompt("Insira outro número:"));
var num3 = parseFloat(prompt("Insira outro número:"));

// (operador lógico) && = "e". Ex: se num1 é maior que num2 *e* num1 é maior que num3 
if (num1 > num2 && num1 > num3) {
    alert("Este é o número maior: " + num1)
} else if (num2 > num1 && num2 > num3) {
    alert("Este é o número maior: " + num2)
} else {
    alert("Este é o número maior: " + num3)
}
