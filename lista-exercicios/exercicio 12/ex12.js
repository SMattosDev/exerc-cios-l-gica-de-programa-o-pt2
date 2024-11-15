var valorHora = parseFloat(prompt("Insira o valor da sua hora de trabalho:"));
var horasTrabalhadas = parseFloat(prompt("Insira a quantidade de horas trabalhadas no mês:"));


var salarioBruto = valorHora * horasTrabalhadas;
var ir = 0;
var percentualIR = 0;


if (salarioBruto <= 1903.98) {
    percentualIR = 0;
    ir = 0;
} else if (salarioBruto <= 2826.65) {
    percentualIR = 7.5;
    ir = salarioBruto * 0.075;
} else if (salarioBruto <= 3751.05) {
    percentualIR = 15;
    ir = salarioBruto * 0.15;
} else if (salarioBruto <= 4664.68) {
    percentualIR = 22.5;
    ir = salarioBruto * 0.225;
} else {
    percentualIR = 27.5;
    ir = salarioBruto * 0.275;
}


var sindicato = salarioBruto * 0.03;
var fgts = salarioBruto * 0.08;
var salarioLiquido = salarioBruto - ir - sindicato;


alert("Salário Bruto: R$ " + salarioBruto);
alert("Desconto de IR (" + percentualIR + "%): R$ " + ir);
alert("Desconto Sindicato (3%): R$ " + sindicato);
alert("Depósito FGTS (8%): R$ " + fgts);
alert("Salário Líquido: R$ " + salarioLiquido);
