var salario = parseFloat(prompt("Insira seu salário atual:"));
alert("Salário antes do reajuste: R$ " + salario);

var novoSalario;
var aumento;


if (salario <= 280.00) {
    aumento = salario * 0.20; // 20% de aumento
    alert("O percentual de aumento aplicado é 20%");

} else if (salario > 280.00 && salario <= 700.00) {
    aumento = salario * 0.15; // 15% de aumento
    alert("O percentual de aumento aplicado é 15%");

} else if (salario > 700.00 && salario <= 1500.00) {
    aumento = salario * 0.10; // 10% de aumento
    alert("O percentual de aumento aplicado é 10%");

} else {
    aumento = salario * 0.05; // 5% de aumento
    alert("O percentual de aumento aplicado é 5%");
}


novoSalario = salario + aumento;


alert("O valor do aumento é: R$ " + aumento);
alert("O novo salário, após o aumento, é: R$ " + novoSalario);
