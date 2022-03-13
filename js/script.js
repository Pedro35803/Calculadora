let resultado = document.querySelector("#resultado");
let vetorCalc = [];

document.querySelector("#button_01").addEventListener("click", () => buttonNumber("1"));
document.querySelector("#button_02").addEventListener("click", () => buttonNumber("2"));
document.querySelector("#button_03").addEventListener("click", () => buttonNumber("3"));

document.querySelector("#button_04").addEventListener("click", () => buttonNumber("4"));
document.querySelector("#button_05").addEventListener("click", () => buttonNumber("5"));
document.querySelector("#button_06").addEventListener("click", () => buttonNumber("6"));

document.querySelector("#button_07").addEventListener("click", () => buttonNumber("7"));
document.querySelector("#button_08").addEventListener("click", () => buttonNumber("8"));
document.querySelector("#button_09").addEventListener("click", () => buttonNumber("9"));

document.querySelector("#ponto").addEventListener("click", () => adicionarOperadorOuPonto("."));
document.querySelector("#zero").addEventListener("click", () => buttonNumber("0"));
document.querySelector("#limpar").addEventListener("click", () => limpar());

document.querySelector("#somar").addEventListener("click", () => adicionarOperadorOuPonto("+"));
document.querySelector("#subtrair").addEventListener("click", () => adicionarOperadorOuPonto("-"));
document.querySelector("#multiplicar").addEventListener("click", () => adicionarOperadorOuPonto("x"));
document.querySelector("#dividir").addEventListener("click", () => adicionarOperadorOuPonto("/"));

document.querySelector("#button_igual").addEventListener("click", () => {

    let vetor = separarElementosNoVetor(resultado.value);
    
    if (vetor.length == 1) {
        null;
    } else {
        vetor = CalcularOperacoesPrioritarias(vetor);
    }

    let resposta = somarElementosDentroDoVetor(vetor);

    resultado.value = String(resposta);

})

function buttonNumber(buttonPresionado) {
    resultado.value += buttonPresionado;
}

function limpar() {
    resultado.value = "";
}

function adicionarOperadorOuPonto(operacao) {
    let indice = resultado.value.length - 1;
    let ultimoElemento = resultado.value[indice];

    if ((ultimoElemento != "-" && ultimoElemento != ".") && operacao == "-") {
        resultado.value += operacao;
    } else if (resultado.value == "") {
        null;
    } else if (verificarOperador(ultimoElemento) == false) {
        if (ultimoElemento == ".") {
            null;
        } else {
            resultado.value += operacao;
        }
    }
}

function separarElementosNoVetor(elementos) {
    let numero = "";
    let vetor = [];

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

    let indice = vetor.length - 1;
    let ultimoElemento = vetor[indice];
    let indiceElemento = ultimoElemento.length - 1;

    if (ultimoElemento[indiceElemento] == ".") {
        vetor[indice] = Number(vetor[indice]);
    } else if (verificarOperador(ultimoElemento) == true) {
        vetor.splice(vetor[indice]);
    }

    return vetor;
}

function CalcularOperacoesPrioritarias(vetor) {
    let novaLista = [];

    for (let cont = 0; cont < vetor.length; cont++) {
        if (vetor[cont] == "x" || vetor[cont] == "/") {
            let resposta = calcularElementos(vetor[cont - 1], vetor[cont], vetor[cont + 1]);
            novaLista.push(resposta);
        } else if ((vetor[cont] == "+" || vetor[cont] == "-")) {
            let numero = Number(vetor[cont] + vetor[cont + 1]);
            novaLista.push(numero);
        }
    }

    // Retorna aqui um vetor com apenas inteiros
    return novaLista;
}

function somarElementosDentroDoVetor(vetor) {
    let resposta = 0;

    for (let numero of vetor) {
        resposta += numero;
    }

    return resposta;
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

function calcularElementos(numeroAntes, operador, numeroDepois) {
    switch (operador) {
        case "+":
            return numeroAntes + numeroDepois;
        case "-":
            return numeroAntes - numeroDepois;
        case "x":
            return numeroAntes * numeroDepois;
        case "/":
            return numeroAntes / numeroDepois;
        default:
            return 0;
    }
}