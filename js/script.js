let listaDeTeclasNumeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let listaDeTeclasOperadores = ['/', '=', '+', '-', '*'];
let listaDeTeclasParaIgual = ['Enter', '='];
let listaDeTeclasParaVirguras = [',', '.'];

let resultado = document.querySelector("#resultado");
let guardarOperador = false;
let mudarNumero = true;
let guardarNumero = 0;

document.querySelector("#button_01").addEventListener("click", () => buttonNumber("1"));
document.querySelector("#button_02").addEventListener("click", () => buttonNumber("2"));
document.querySelector("#button_03").addEventListener("click", () => buttonNumber("3"));

document.querySelector("#button_04").addEventListener("click", () => buttonNumber("4"));
document.querySelector("#button_05").addEventListener("click", () => buttonNumber("5"));
document.querySelector("#button_06").addEventListener("click", () => buttonNumber("6"));

document.querySelector("#button_07").addEventListener("click", () => buttonNumber("7"));
document.querySelector("#button_08").addEventListener("click", () => buttonNumber("8"));
document.querySelector("#button_09").addEventListener("click", () => buttonNumber("9"));

document.querySelector("#ponto").addEventListener("click", () => adicionarPonto());
document.querySelector("#zero").addEventListener("click", () => buttonNumber("0"));
document.querySelector("#limpar").addEventListener("click", () => limpar());

document.querySelector("#somar").addEventListener("click", () => calcular("+"));
document.querySelector("#subtrair").addEventListener("click", () => calcular("-"));
document.querySelector("#multiplicar").addEventListener("click", () => calcular("*"));
document.querySelector("#dividir").addEventListener("click", () => calcular("/"));

document.querySelector("#button_igual").addEventListener("click", () => buttonIgual());

document.addEventListener("keydown", (event) => {
    if (listaDeTeclasNumeros.indexOf(event.key) != -1) {
        buttonNumber(event.key);
    } else if (listaDeTeclasOperadores.indexOf(event.key) != -1) {
        calcular(event.key);
    } else if (listaDeTeclasParaVirguras.indexOf(event.key) != -1) {
        adicionarPonto();
    } else if (listaDeTeclasParaIgual.indexOf(event.key) != -1) {
        buttonIgual();
    } else if (event.key == 'Backspace') {
        limpar();
    }
});


function buttonNumber(buttonPresionado) {
    if (mudarNumero == true) {
        resultado.value = "";
        mudarNumero = false;
    }
    resultado.style.color = "#000";
    resultado.value += buttonPresionado;
}

function limpar() {
    guardarOperador = false;
    resultado.value = "";
    guardarNumero = 0;
}

function calcular(operador) {
    if (resultado.value != "" || mudarNumero == false) {
        let numero = Number(resultado.value);
    
        if (guardarOperador != false) {
            guardarNumero = calcularElementos(guardarNumero, guardarOperador, numero)
        } else {
            guardarNumero = numero;
        }
    
        guardarOperador = operador;
        mudarNumero = true;

        piscarAoFazerUmaOperação();
    }
}

function adicionarPonto() {
    if (resultado.value.indexOf(".") == -1 && resultado.value != "") {
        resultado.value += "."
    }
}

function buttonIgual() {
    if (resultado.value != "") {
        calcular(false);
        resultado.style.color = "#23913D";
    }
}

function piscarAoFazerUmaOperação() {
    resultado.value = "";
    resultado.style.color = "#6c757d";

    setTimeout(() => {
        resultado.value = guardarNumero;
    }, 50);
}

function calcularElementos(numeroAntes, operador, numeroDepois) {
    switch (operador) {
        case "+":
            return numeroAntes + numeroDepois;
        case "-":
            return numeroAntes - numeroDepois;
        case "*":
            return numeroAntes * numeroDepois;
        case "/":
            return numeroAntes / numeroDepois;
        default:
            return 0;
    }
}