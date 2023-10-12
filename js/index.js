var operandoa;
var operandob;
var operacion;

function operaciones() {

    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    var Dividir = document.getElementById('Dividir');
    var Multiplicar = document.getElementById('Multiplicar');
    var Restar = document.getElementById('Restar');
    var Sumar = document.getElementById('Sumar');

    var Igual = document.getElementById('Igual');
    var Reset = document.getElementById('Reset');


    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";
    }





    Reset.onclick = function (e) {
        Resetear();
    }

    Sumar.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();

    }
    Restar.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    Multiplicar.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    Dividir.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }


    Igual.onclick = function (e) {
        operandob = resultado.textContent;
        Resolver();
    }

}


function limpiar() {
    resultado.textContent = "";
}

function Resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function Resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob)
            break;

        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob)
            break;

        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob)
            break;
            
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob)
            break;

    }
    Resetear();
    resultado.textContent = res;

}