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

document.querySelector("#ponto").addEventListener("click", () => adicionarOperacao("."));
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
        if (verificarOperador(elementos[cont]) == true) {
            vetor.push(numero);
            vetor.push(elementos[cont]);
            numero = "";
        } else if (cont == elementos.length) {
            vetor.push(numero);
        } else {
            numero += elementos[cont];
        }
    }

    // for (let cont = 0; cont)

    let cont = 1;
    let resposta;

    if (vetor[0] == "-") {
        resposta = Number(vetor[1]) * -1;
        cont = 2;
    } else {
        resposta = Number(vetor[0]);
    }

    for (; cont < vetor.length; cont += 2) {
        if (vetor[cont] == "x") {
            resposta *= Number(vetor[cont + 1]);
        } else if (vetor[cont] == "/") {
            resposta /= Number(vetor[cont + 1]);
        } else if (vetor[cont] == "+") {
            resposta += Number(vetor[cont + 1])
        } else if (vetor[cont] == "-") {
            resposta -= Number(vetor[cont + 1]);
        }
    }
    resultado.value = String(resposta);
})

function buttonNumber(buttonPresionado) {
    resultado.value += buttonPresionado;
}

function limpar() {
    resultado.value = "";
}

function adicionarOperacao(operacao) {
    let indice = resultado.value.length - 1;
    let ultimoElemento = resultado.value[indice];

    if (ultimoElemento != "-" && operacao == "-") {
        resultado.value += operacao;
    } else if (resultado.value == "") {
        null;
    } else if (verificarOperador(ultimoElemento) == false) {
        resultado.value += operacao;
    }
}

function verificarOperador(valor) {
    switch (valor) {
        case "+":
            return true;
        case "-":
            return true;
        case "x":
            return true;
        case "/":
            return true;
        default:
            return false;
    }
}