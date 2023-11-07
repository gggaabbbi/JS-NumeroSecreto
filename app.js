alert('Boas vindas ao jogo do número secreto!');

let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s. 
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');

    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    }
    // se não for igual
    else {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor que ' + chute);
        } else {
            alert('O número secreto é maior que ' + chute);
        }
        tentativas++;
    }
}

if (tentativas > 1) {
    alert(`Isso aí, você descobriu o número: ${numeroSecreto}! com ${tentativas} tentativas`);
} else {
    alert(`Isso aí, você descobriu o número: ${numeroSecreto}! com ${tentativas} tentativa`);
}