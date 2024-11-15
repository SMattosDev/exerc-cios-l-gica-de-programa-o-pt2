var letra = prompt("Qual turno você estuda? Digite M para matutino ou V para vespertino ou N para noturno.");

var M, V, N, m, v, n;


if (letra == "M" || letra == "m") {
    alert("Bom dia!");

} else if (letra == "V" || letra == "v") {
    alert("Boa tarde!");

} else if (letra == "N" || letra == "n") {
    alert("Boa noite!");

} else {
    alert("Valor inválido!");
}
