var num1 = parseInt(prompt("Informe um número:"));
var num2 = parseInt(prompt("Informe outro número:"));
var num3 = parseInt(prompt("Informe outro número:"));

if (num1 >= num2 && num1 >= num3) {
    // Se num1 for o maior número, comparamos só o num2 e num3.
    if (num2 >= num3) {
        // Isso é possível porque o primeiro 'if' já determinou que num1 é o maior. Nome: condição aninhada
        alert("A ordem decrescente é: " + num1 + ", " + num2 + ", " + num3);
    } else {
        alert("A ordem decrescente é: " + num1 + ", " + num3 + ", " + num2);
    }
} else if (num2 >= num1 && num2 >= num3) {
    if (num1 >= num3) {
        alert("A ordem decrescente é: " + num2 + ", " + num1 + ", " + num3);
    } else {
        alert("A ordem decrescente é: " + num2 + ", " + num3 + ", " + num1);
    }
} else {
    alert("A ordem decrescente é: " + num3 + ", " + num2 + ", " + num1);
}

/* 
    Observação: No início, eu não sabia que era possível usar um 'if' dentro de outro 'if' 
    (condicional aninhada). Fui pesquisar e agora entendi que pode ter uma estrutura 
    dentro de uma mesma estrutura
*/