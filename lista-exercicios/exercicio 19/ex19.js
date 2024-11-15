var numero = parseInt(prompt("Digite um número inteiro menor que 1000:"));

if (numero >= 1000 || numero < 0) {
    alert("Por favor, insira um número menor que 1000 e maior ou igual a 0.");
} else {


    // 'Math.floor' arredonda para baixo o resultado de uma divisão, para pegar a parte inteira
    var centenas = Math.floor(numero / 100);  // Pega o resto da divisão por 100 e divide por 10 para as dezenas
    var dezenas = Math.floor((numero % 100) / 10);
    var unidades = numero % 10; // O resto da divisão por 10 é as unidades

    var resultado = "";


    if (centenas > 0) {
        resultado = resultado + centenas + " centena";
        if (centenas > 1) {
            resultado = resultado + "s";
        }
    }


    if (dezenas > 0) {
        if (resultado != "") {
            resultado = resultado + ", ";
        }
        resultado = resultado + dezenas + " dezena";
        if (dezenas > 1) {
            resultado = resultado + "s";
        }
    }


    if (unidades > 0) {
        if (resultado != "") {
            resultado = resultado + " e ";
        }
        resultado = resultado + unidades + " unidade";
        if (unidades > 1) {
            resultado = resultado + "s";
        }
    }


    alert(resultado);
}
