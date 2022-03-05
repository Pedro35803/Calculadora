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

document.querySelector("#limpar").addEventListener("click", () => limpar());

document.querySelector("#somar").addEventListener("click", () => adicionarOperacao("+"));
document.querySelector("#subtrair").addEventListener("click", () => adicionarOperacao("-"));
document.querySelector("#multiplicar").addEventListener("click", () => adicionarOperacao("x"));
document.querySelector("#dividir").addEventListener("click", () => adicionarOperacao("/"));

document.querySelector("#button_igual").addEventListener("click", () => {
    for (let cont = 0; cont < resultado.textContent.length; cont++) {
        console.log(resultado.textContent[cont]);
    }
    limpar()
})

function buttonNumber(buttonPresionado) {
    resultado.textContent += buttonPresionado;
}

function limpar() {
    resultado.textContent = "";
}

function adicionarOperacao(operacao) {
    resultado.textContent += operacao;
}