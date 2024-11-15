var a = parseInt(prompt("Insira o valor de a:"));
var b = parseInt(prompt("Insira o valor de b:"));
var c = parseInt(prompt("Insira o valor de c:"));

// Verifica se 'a' é zero;
if (a == 0) {
    alert("O primeiro número informado não corresponde a uma equação do segundo grau.");
    return; // Encerra o programa se não for uma equação do segundo grau;
}


// fórmula: ax² + bx + c;
// Calcula o delta usando a fórmula delta = b² - 4ac;
// ** usado para exponenciação. ele eleva um número a uma determinada potência. ex: b elevado a 2 ou b ao quadrado;
// fórmula de Bhaskara;

var delta = b ** 2 - (4 * a * c);

if (delta < 0) {
    alert("A equação não possui raízes reais. Porque delta/discriminante deu negativo.");
}
else if (delta > 0) {


    /* Math.sqrt: é uma função que calcula a raiz do que estiver dentro do parênteses;
        (sqrt: sigla para square root = raiz quadrada) */

    var r1 = (-b + Math.sqrt(delta)) / (2 * a);
    var r2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert("A equação possui duas raízes reais, que são: r1 = " + r1 + " r2 = " + r2);

} else { // se delta = 0
    var r = (-b) / (2 * a);
    alert("A equação possui apenas uma raíz real, que é: r = " + r)
}
//esse exercício me fez aprender funções novas;