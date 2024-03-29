    let listaDeTeclasConcatenar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '.'];
    let listaDeTeclasOperadores = ['/', '=', '+', '-', '*'];
    let listaDeTeclasParaIgual = ['Enter', '='];

    let resultado = document.querySelector("#resultado");
    let guardarOperador = false;
    let mudarNumero = true;
    let guardarNumero = 0;

    const todosNumeros = document.querySelectorAll(".button-numbers");

    todosNumeros.forEach(numero => numero.addEventListener('click', (numero) => {
        const conteudoBotao = numero.target.textContent;
        buttonNumber(conteudoBotao);
    }));

    document.querySelector("#limpar").addEventListener("click", () => limpar());

    document.querySelector("#somar").addEventListener("click", () => calcular("+"));
    document.querySelector("#subtrair").addEventListener("click", () => calcular("-"));
    document.querySelector("#multiplicar").addEventListener("click", () => calcular("*"));
    document.querySelector("#dividir").addEventListener("click", () => calcular("/"));

    document.querySelector("#button_igual").addEventListener("click", () => buttonIgual());

    document.addEventListener("keydown", (event) => {
        if (listaDeTeclasConcatenar.indexOf(event.key) != -1) {
            buttonNumber(event.key);
        } else if (listaDeTeclasOperadores.indexOf(event.key) != -1) {
            calcular(event.key);
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

        if (buttonPresionado == "." || buttonPresionado == ",") {
            adicionarPonto();
        } else if (buttonPresionado == "0") {
            adicionarZero();
        } else {
            resultado.style.color = "#000";
            resultado.value += buttonPresionado;
        }
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

    function adicionarZero() {
        if (resultado.value != "") {
            resultado.value += "0"
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