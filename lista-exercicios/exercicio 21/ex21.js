var valor = parseFloat(prompt(" Informe o valor do seu saque: (valor mínimo: R$10. Valor máximo: R$ 600.) "));

if (valor < 10 || valor > 600) {
    alert(" O valor inserido não é válido. ");
} else {
    // continuar;

    // definida por 0, pois ainda não sei quantas notas serão usadas;
    var notas100 = 0
    var notas50 = 0
    var notas10 = 0
    var notas5 = 0
    var notas1 = 0

    notas100 = Math.floor(valor / 100);
    // '%'calcula o restante do valor após usar as notas de 100, ou seja, o resto;
    valor = valor % 100;
    notas50 = Math.floor(valor / 50);
    valor = valor % 50;
    notas10 = Math.floor(valor / 10);
    valor = valor % 10;
    notas5 = Math.floor(valor / 5);
    valor = valor % 5;
    notas1 = Math.floor(valor / 1);
    valor = valor % 1;

    if (notas100 > 0) {
        alert(notas100 + " nota(s) de 100 reais ");
    }
    if (notas50 > 0) {
        alert(notas50 + " nota(s) de 50 reais ");
    }
    if (notas10 > 0) {
        alert(notas10 + " nota(s) de 10 reais ");
    }
    if (notas5 > 0) {
        alert(notas5 + " nota(s) de 5 reais");
    }
    if (notas1 > 0) {
        alert(notas1 + " nota(s) de 1 real");
    }
}