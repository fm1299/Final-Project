let a_0 = false
let b_0 = false
function borrar() {
    let a = document.getElementById("a")
    let b = document.getElementById("b")
    let c = document.getElementById("resultado")
    a.value = ""
    b.value = ""
    c.value = ""
}
function seleccionar(e) {
    if (e == 'a') {
        a_0 = true
        b_0 = false
    }
    else if (e == 'b') {
        a_0 = false
        b_0 = true
    }
}
function editar(v) {
    if (a_0) {
        let a = document.getElementById("a")
        let m = a.value
        m = m + v
        a.value = m
    }
    else if (b_0) {
        let b = document.getElementById("b")
        let m = b.value
        m = m + v
        b.value = m
    }
}
function agregar(s) {
    let m = document.getElementById("simbolo")
    m.value = s
}
function suma(a, b) {
    let c_1 = a + b
    return c_1
}
function resta(a, b) {
    let c_1 = a - b
    return c_1
}
function division(a, b) {
    let c_1 = a / b
    return c_1
}
function multiplicacion(a, b) {
    let c_1 = a * b
    return c_1
}
function factorial(a) {
    let c_1 = 1
    if (a == 0.0) {
        return 1
    }
    for (let i = Math.abs(a); i > 0; i--) {
        c_1 *= i
    }
    if (a < 0.0) {
        return c_1 * -1
    }
    else {
        return c_1
    }
}
function raiz(a){
    let c_1
    c_1 = Math.sqrt(a)
    return c_1
}
function percentage(a, b, c) {
    let c_1 = (a / 100 * b)
    return c_1
}
function log(a, b) {
    let r = Math.log(a) / Math.log(b);
    return parseFloat(r.toFixed(4));
}

function operacion() {
    let a = document.getElementById("a")
    let b = document.getElementById("b")
    let c = document.getElementById("resultado")
    let a_1 = parseFloat(a.value)
    let b_1 = parseFloat(b.value)
    let s = document.getElementById("simbolo")
    let simbolo = s.value
    if (simbolo == "+") {
        c.value = suma(a_1, b_1)
    }
    else if (simbolo == "-") {
        c.value = resta(a_1, b_1)
    }
    else if (simbolo == "x") {
        c.value = multiplicacion(a_1, b_1)
    }
    else if (simbolo == "÷") {
        if (b_1 == 0.0) 
            window.alert("Division entre cero no permitida") 
        else
            c.value = division(a_1, b_1)
    }
    else if (simbolo == "^") {
        if (b_1 == 0.0 && a_1 == 0.0)
            window.alert("El exponente y la base no pueden ser 0 ambos");
        else if (b_1 < 0.0)
            window.alert("El exponente no puede ser negativo");
        else if (b_1 % 1 == 0)
            c.value = potencia(a_1, b_1)
        else
            window.alert("El exponente no puede ser decimal");
    }
    else if (simbolo == "!") {
        c.value = factorial(a_1)
    }
    else if (simbolo=="√"){
        if(a_1 < 0.0)
            window.alert("No existe raiz para negativos");
        else
            c.value = raiz(a_1)
    }
    else if (simbolo == "%") {
        c.value = percentage(a_1, b_1)
    }
    else if (simbolo == "log") {
        if (a_1 < 0 || b_1 < 0) {
            window.alert("Argumentos negativos");
        }
        if (a_1 == b_1) {
            c.value = 1;
        }
        else if (a_1 == 0.0) {
            window.alert("Argumento no puede ser 0");
        }
        else {
            c.value = log(a_1, b_1);
        }
    }
    else {
        window.alert("Simbolo incorrecto o sin simbolo")
    }
}
//FUNCION DE POTENCIA AGREGADA
function potencia(a, b) {
    if (b == 0.0)
        return 1.0
    if (a == 0.0)
        return 0.0
    let c_1 = a;
    while (b > 1) {
        c_1 = c_1 * a
        b = b - 1;
    }
    return c_1
}
module.exports = { potencia, log, percentage, raiz, factorial }
