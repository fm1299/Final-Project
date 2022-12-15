var a_0=false
var b_0=false
function borrar(){
    var a = document.getElementById("a")
    var b = document.getElementById("b")
    var c =document.getElementById("resultado")
    a.value = ""
    b.value = ""
    c.value = ""
}
function seleccionar(e){
    console.log(e)
    if(e =='a'){
        a_0=true
        b_0=false
    }
    else if (e == 'b'){
        a_0=false
        b_0=true
    }
}
function editar(v){
    if(a_0){
        var a = document.getElementById("a")
        var m = a.value
        m = m + v
        a.value = m 
    }
    else if (b_0){
        var b = document.getElementById("b")
        var m = b.value
        m = m + v
        b.value = m 
    }
}
function agregar(s){
    var m = document.getElementById("simbolo")
    m.value = s
}
function suma(a,b,c){
    var c_1 = a + b
    c.value = c_1
    return
}
function resta(a,b,c){
    var c_1 = a - b
    c.value = c_1
    return
}
function division(a,b,c){
    var c_1 = a / b
    c.value = c_1
    return
}
function multiplicacion(a,b,c){
    var c_1 = a * b
    c.value = c_1
    return
}
function operacion(){
    var a = document.getElementById("a")
    var b = document.getElementById("b")
    var c =document.getElementById("resultado")
    var a_1 = parseFloat(a.value)
    var b_1 = parseFloat(b.value)
    var s = document.getElementById("simbolo")
    var simbolo = s.value
    if(simbolo == "+"){
        suma(a_1,b_1,c)
    }
    else if( simbolo == "-"){
        resta(a_1,b_1,c)
    }
    else if (simbolo == "x"){
        multiplicacion(a_1,b_1,c)
    }
    else if ( simbolo == "÷"){
        if(b_1 == 0.0){
            window.alert("Division entre cero no permitida")
        }
        else{
            division(a_1,b_1,c)
        }
    }
    else{
        window.alert("Simbolo incorrecto o sin simbolo")
    }
}