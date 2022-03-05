let resultado = document.querySelector("#resultado");

document.querySelector("#button_01").addEventListener("click", () => buttonNumber("1"));
document.querySelector("#button_02").addEventListener("click", () => buttonNumber("2"));
document.querySelector("#button_03").addEventListener("click", () => buttonNumber("3"));

document.querySelector("#button_04").addEventListener("click", () => buttonNumber("4"));
document.querySelector("#button_05").addEventListener("click", () => buttonNumber("5"));
document.querySelector("#button_06").addEventListener("click", () => buttonNumber("6"));

document.querySelector("#button_07").addEventListener("click", () => buttonNumber("7"));
document.querySelector("#button_08").addEventListener("click", () => buttonNumber("8"));
document.querySelector("#button_09").addEventListener("click", () => buttonNumber("9"));

document.querySelector("#ponto").addEventListener("click", () => buttonNumber("."));
document.querySelector("#zero").addEventListener("click", () => buttonNumber("0"));

document.querySelector("#limpar").addEventListener("click", () => limpar());

document.querySelector("#somar").addEventListener("click", () => adicionarOperacao("+"));
document.querySelector("#subtrair").addEventListener("click", () => adicionarOperacao("-"));
document.querySelector("#multiplicar").addEventListener("click", () => adicionarOperacao("x"));
document.querySelector("#dividir").addEventListener("click", () => adicionarOperacao("/"));

document.querySelector("#button_igual").addEventListener("click", () => {
    let numero = "";
    let vetor = [];
    let elementos = resultado.value;

    for (let cont = 0; cont <= elementos.length; cont++) {
        if (elementos[cont] == "x" || elementos[cont] == "+" || elementos[cont] == "/" || elementos[cont] == "-") {
            vetor.push(numero);
            vetor.push(elementos[cont]);
            numero = "";
        } else if (cont == elementos.length) {
            vetor.push(numero);
        } else {
            numero += elementos[cont];
        }
    }

    console.log(vetor);

    let resposta = vetor[0];
    for (let cont = 1; cont < vetor.length; cont += 2) {
        resposta += vetor[cont - 1];
        // console.log(cont);
        if (vetor[cont] == "*") {
            resposta *= vetor[cont + 1];
        } else if (vetor[cont] == "/") {
            resposta /= vetor[cont + 1];
        } else if (vetor[cont] == "+") {
            resposta += vetor[cont + 1]
        }
    }
})

function buttonNumber(buttonPresionado) {
    resultado.value += buttonPresionado;
}

function limpar() {
    resultado.value = "";
}

function adicionarOperacao(operacao) {
    let indice = resultado.value.length - 1
    let ultimoElemento = resultado.value[indice];

    if (ultimoElemento == Number(ultimoElemento)) {
        resultado.value += operacao;
    } else if (ultimoElemento != "-" && operacao == "-") {
        resultado.value += operacao;
    }
}