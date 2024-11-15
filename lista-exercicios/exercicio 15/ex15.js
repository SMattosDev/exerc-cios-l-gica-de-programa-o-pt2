var a = parseFloat(prompt("Insira o primeiro lado do triângulo:"));
var b = parseFloat(prompt("Insira o segundo lado do triângulo:"));
var c = parseFloat(prompt("Insira o terceiro lado do triângulo:"));


if (a + b > c && a + c > b && b + c > a) {
    alert("Os valores podem formar um triângulo.");


    if (a == b && b == c) {
        alert("Triângulo equilátero.");
    } else if (a == b || b == c || a == c) {
        alert("Triângulo isósceles.");
    } else {
        alert("Triângulo escaleno.");
    }

} else {
    alert("Os valores não formam um triângulo.");
}
