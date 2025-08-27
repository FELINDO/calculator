let n1 = null;
let operador = null;
let n2 = false;


const display = document.getElementById("display");

function add(digito) {
    if (n2 === true) {
        display.innerHTML = digito;
        n2 = false;
    } else {
        if (display.innerHTML === "0") {
            display.innerHTML = digito;
        } else {
            display.innerHTML += digito;
        }
    }
}

function handleOperador(proximoOperador) {
    const valorInput = parseFloat(display.innerHTML);

    if (operador && n2) {
        operador = proximoOperador;
        return;
    }

    if (n1 === null) {
        n1 = valorInput;
    } else if (operador) {
        const resultado = realizarCalculo(n1, valorInput, operador);
        display.innerHTML = String(resultado);
        n1 = resultado;
    }

    n2 = true;
    operador = proximoOperador;
}

function realizarCalculo(n1, n2, operador) {
    if (operador === "+") return n1 + n2;
    if (operador === "-") return n1 - n2;
    if (operador === "*") return n1 * n2;
    if (operador === "÷") return n1 / n2;
}

function result() {
    const valorInput = parseFloat(display.innerHTML);

    if (operador === null) return;

    const resultado = realizarCalculo(n1, valorInput, operador);

    display.innerHTML = String(resultado);
    
    n1 = null;
    operador = null;
    n2 = false;
}

function clearDisplay() {
    display.innerHTML = "0";
    n1 = null;
    operador = null;
    n2 = false;
}

function backspace() {
    let valorAtual = display.innerHTML;
    if (valorAtual.length > 1) {
        display.innerHTML = valorAtual.slice(0, -1);
    } else {
        display.innerHTML = "0";
    }
}