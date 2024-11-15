var num = parseFloat(prompt("Digite um número: "));

// 'Math.round()' arredonda o número para o inteiro mais próximo;
// exemplo: 4.6, ele será arredondado para 5, e se for 4.4, será arredondado para 4;
var arredondado = Math.round(num);


if (num === arredondado) {
    alert(" O número é inteiro. ");
} else {
    alert(" O número é decimal. ");
}
