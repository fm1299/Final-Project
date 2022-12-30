# PROYECTO CALCULADORA
![Imagen](https://github.com/UbertoGC/practica3_ISII_rama1/blob/main/Imagenes/Calculadora.png)
## INTEGRANTES:
- UBERTO GARCIA CACERES
- JOSUE GABRIEL SUMARE USCA
- FABRICIO MIGUEL MATTOS CAHUI
- ANGIE ALEXANDRA PINO HUARSAYA
- ROY ANGEL CHOQUEHUANCA ANCONEYRA
El proyecto es una calculadora simple que, añadiendo funcionalidades y actualizaciones, aumentamos su complejidad y mejoramos sus fallos.
## PROPOSITO
Nuestro objetivo es mejorar y ampliar las funcionalidades del proyecto que actualmente tenemos, agregando más complejidad a un proyecto simple.
## FUNCIONALIDADES
Calcular operaciones básicas tales como:
- Suma
- Resta
- Division
- Multiplicación

Calcular operaciones complejas como:
- Logaritmo
- Potencia
- Factorial
- Porcentaje
- Raíz
## INFORMACION SOBRE EL PROYECTO
- TRELLO: https://trello.com/b/DUHUnuYf/final-proyect-isii
- ARQUITECTURA USADA: Patrón cliente-servidor
## DISTRIBUCIÓN DEL TRABAJO:
![Trello usado](https://github.com/UbertoGC/practica3_ISII_rama1/blob/main/Imagenes/Trello.png)
### Uberto García Cáceres
- Base del proyecto
- Función Potencia
- Actualización final
- Gestión de Issues - Trello
- Escritura del README
### Josue Gabriel Sumare Usca
- Función de Porcentaje
- Pruebas de Seguridad - OWASP ZAP
### Fabricio Miguel Mattos Cahui
- Función Logaritmica
- Administración de Jenkins
- Administración del repositorio Github.
### Angie Alexandra Pino Huarsaya
- Función Raíz
- Análisis Estático - Sonaqube
### Roy Angel Choquehuanca Anconeyra
- Función Factorial
- Pruebas de Rendimiento
## FUNCIONAMIENTO DEL CODIGO
El código requiere primero que se rellenen los espacios en blanco para los números, una vez puesto, se escoge la operación a realizar, luego se presiona el botón igual y se procede a realizar la operación y mostrarla en el recuadro superior. El código contiene las siguientes funciones básicas:
```
function suma(a,b,c){
    let c_1 = a + b
    c.value = c_1
}
function resta(a,b,c){
    let c_1 = a - b
    c.value = c_1
}
function division(a,b,c){
    let c_1 = a / b
    c.value = c_1
}
function multiplicacion(a,b,c){
    let c_1 = a * b
    c.value = c_1
}
```
También tiene funciones que añaden otras capacidades como limpiar el campo, elegir el símbolo o poder usar los respectivos números de la calculadora para ponerlo en un cuadro:
```
function borrar() {
    let a = document.getElementById("a")
    let b = document.getElementById("b")
    let c = document.getElementById("resultado")
    a.value = ""
    b.value = ""
    c.value = ""
}
```
```
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
```
```
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
```
```
function agregar(s) {
    let m = document.getElementById("simbolo")
    m.value = s
}
```
Y la principal funcionalidad, la función operación, que determina lo que se va a realizar cuando se presiona el botón igual.
```
function operacion(){
    let a = document.getElementById("a")
    let b = document.getElementById("b")
    let c =document.getElementById("resultado")
    let a_1 = parseFloat(a.value)
    let b_1 = parseFloat(b.value)
    let s = document.getElementById("simbolo")
    let simbolo = s.value
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
```
## CODIGO IMPLEMENTADO
Cada integrante ha implementado su respectiva funcionalidad, haciendo un fork al proyecto principal y dividiendo este en ramas, subiendo desde los fork hacia la respectiva rama de cada uno y de las ramas hacia la rama principal.
### Función Factorial:
```
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
```
### Función Logarítmica:
```
function log(a, b) {
    let r = Math.log(a) / Math.log(b);
    return parseFloat(r.toFixed(4));
}
```
### Función Porcentaje:
```
function percentage(a, b, c) {
    let c_1 = (a / 100 * b)
    return c_1
}
```
### Función Potencia:
```
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
```
### Función Raíz:
```
function raiz(a){
    let c_1
    c_1 = Math.sqrt(a)
    return c_1
}
```
## PRUEBAS UNITARIAS
Para las pruebas unitarias hemos usado Jest, una librería de Javascript para realizar pruebas unitarias. Para poder usar las pruebas unitarias lo primero que hemos hecho es usar una variable llamada "calc" con el objetivo de pasarle el archivo js que será probado:
```
const calc = require('../../Pruebas_trabajo/js/calculador')
```
También hemos hecho que cada función tenga un return para poder ser usados por Jest y un archivo Json por el cual podemos testear todos loss acrhivos de test:
```
{
    "scripts": {
      "test": "jest"
    }
}
```
Por cada implementación que hemos hecho, hemos implementado las siguientes pruebas unitarias:
### Función Factorial: test_factorial.test.js
```
test('Factorial con cero', () => {
    const resultado = calc.factorial(0.0)
    expect(resultado).toBe(1.0)
})
test('Factorial con numero positivo', () => {
    const resultado = calc.factorial(5.0)
    expect(resultado).toBe(120.0)
})
test('Factorial con numero negativo', () => {
    const resultado = calc.factorial(-5.0)
    expect(resultado).toBe(-120.0)
})
```
### Función Logarítmica: test_log.test.js
```
test('Logaritmo con decimal', () => {
    const resultado = calc.log(1.2, 2)
    expect(resultado).toBe(0.263)
})
test('Logaritmo con enteros positivos', () => {
    const resultado = calc.log(16, 4)
    expect(resultado).toBe(2.0000)
})
test('Logaritmo con argumento unitario ', () => {
    const resultado = calc.log(1.0, 5)
    expect(resultado).toBe(0.0000)
})
```
### Función Porcentaje: test_porcentaje.test.js
```
test('Porcentaje con numeros enteros', () => {
    const resultado = calc.percentage(20, 20)
    expect(resultado).toBe(4)
})
test('Porcentaje a numero negativo ', () => {
    const resultado = calc.percentage(40, -220)
    expect(resultado).toBe(-88)
})
test('Porcentaje con numeros negativos', () => {
    const resultado = calc.percentage(-40, -220)
    expect(resultado).toBe(88)
})
test('Porcentaje con numeros decimales', () => {
    const resultado = calc.percentage(40.5, 220.2)
    expect(resultado).toBe(89.181)
})
test('Porcentajes negativos con numeros negativos', () => {
    const resultado = calc.percentage(-40, -220)
    expect(resultado).toBe(88)
})
test('Porcentaje con numeros decimales negativos', () => {
    const resultado = calc.percentage(-40.5, -220.2)
    expect(resultado).toBe(89.181);
})
```
### Función Potencia: test_potencia.test.js
```
test('Potencia con un decimal', () => {
    const resultado = calc.potencia(1.2, 2.0)
    expect(resultado).toBe(1.44)
})
test('Potencia con negativo impar', () => {
    const resultado = calc.potencia(-4.0, 3.0)
    expect(resultado).toBe(-64.0)
})
test('Potencia con negativo par', () => {
    const resultado = calc.potencia(-3.0, 4.0)
    expect(resultado).toBe(81.0)
})
test('Potencia con base cero', () => {
    const resultado = calc.potencia(0.0, 3.0)
    expect(resultado).toBe(0)
})
test('Potencia con exponente cero', () => {
    const resultado = calc.potencia(-3.0, 0.0)
    expect(resultado).toBe(1.0)
})
```
### Función Raíz: test_raiz.test.js
```
test('Raiz con cero', () => {
    const resultado = calc.raiz(0)
    expect(resultado).toBe(0)
})
test('Raiz con numero positivo', () => {
    const resultado = calc.raiz(16)
    expect(resultado).toBe(4)
})
test('Raiz con numero negativo', () => {
    const resultado = calc.raiz(-4)
    expect(resultado).toBe(NaN)
})
```
## PRUEBAS FUNCIONALES
Para las pruebas unitarias hemos usado Selenium, teniendo una fácil compatibilidad con nuestro proyecto. Todos los códigos empiezan solicitando acceso a las librerías de selenium por medio de Node JS:
```
const {Builder,Key, By} = require('selenium-webdriver');
const assert = require('assert');
```
Por cada implementación que hemos hecho, hemos implementado las siguientes pruebas funcionales:
### Función Factorial: prueba_factorial.test.js
```
async function Factorial_cero() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/ubert/Documents/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("0.0",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[22]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("1",respuesta)
    await driver.quit();
}
async function Factorial_positivo() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/ubert/Documents/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("5.0",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[22]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("120",respuesta)
    await driver.quit();
}
async function Factorial_negativo() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/ubert/Documents/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("-5.0",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[22]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("-120",respuesta)
    await driver.quit();
}
Factorial_cero()
Factorial_negativo()
Factorial_positivo()
```
### Función Logarítmica: prueba_log.test.js
```
async function logaritmo_correcto() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/ubert/Documents/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("8", Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("2", Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[16]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("3", respuesta)
    await driver.quit();
}
async function logaritmo_decimal() {
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get('file:///C:/Users/ubert/Documents/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("1.4", Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("2", Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[16]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("0.4854", respuesta)
    await driver.quit();
}
async function logaritmo_negativo() {
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get('file:///C:/Users/ubert/Documents/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("-8", Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("2", Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[16]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let alerta = await driver.switchTo().alert().getText()
    assert.strictEqual(alerta, "Argumentos negativos")
    await driver.quit();
}
logaritmo_correcto()
logaritmo_decimal()
logaritmo_negativo()
```
### Función Porcentaje: prueba_porcentaje.test.js
```
async function Porcentaje_con_numeros_enteros() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/ubert/Documents/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("50",Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("4",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[24]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("2",respuesta)
    await driver.quit();
}
async function Porcentaje_a_numero_negativo() {
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get('file:///C:/Users/ubert/Documents/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("40",Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("-220",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[24]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("-88",respuesta)
    await driver.quit();
}
async function Porcentaje_con_numeros_negativos() {
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get('file:///C:/Users/ubert/Documents/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("-40",Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("-220",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[24]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("88",respuesta)
    await driver.quit();
}
async function Porcentaje_con_numeros_decimales() {
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get('file:///C:/Users/ubert/Documents/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("-40.5",Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("-220.2",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[24]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("89.181",respuesta)
    await driver.quit();;
}

Porcentaje_con_numeros_enteros()
Porcentaje_a_numero_negativo() 
Porcentaje_con_numeros_negativos()
Porcentaje_con_numeros_decimales()
```
### Función Potencia: prueba_potencia.test.js
```
async function Exponente_correcto() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/ubert/Documents/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("-8.0",Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("3.0",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[21]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("-512",respuesta)
    await driver.quit();
}
async function Exponente_decimal() {
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get('file:///C:/Users/ubert/Documents/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("-8.0",Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("3.5",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[21]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let alerta = await driver.switchTo().alert().getText()
    assert.strictEqual(alerta,"El exponente no puede ser decimal")
    await driver.quit();
}
async function Exponente_negativo() {
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get('file:///C:/Users/ubert/Documents/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("8.0",Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("-3.0",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[21]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let alerta = await driver.switchTo().alert().getText()
    assert.strictEqual(alerta,"El exponente no puede ser negativo")
    await driver.quit();
}
async function Exponente_y_base_igual_a_cero() {
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get('file:///C:/Users/ubert/Documents/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("0.0")
    await driver.findElement(By.id('b')).sendKeys("0.0")
    await driver.findElement(By.xpath('/html/body/div/input[21]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let alerta = await driver.switchTo().alert().getText()
    assert.strictEqual(alerta,"El exponente y la base no pueden ser 0 ambos")
    await driver.quit();
}
Exponente_correcto()
Exponente_decimal()
Exponente_negativo()
Exponente_y_base_igual_a_cero()
```
### Función Raíz: prueba_raiz.test.js
```
async function Raiz_cero() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/ubert/Documents/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("0.0",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[25]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("0",respuesta)
    await driver.quit();
}
async function Raiz_positivo() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/ubert/Documents/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("16",Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("2",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[25]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("4",respuesta)
    await driver.quit();
}
async function Raiz_negativo() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/ubert/Documents/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("-4",Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("2",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[25]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let alerta = await driver.switchTo().alert().getText()
    assert.strictEqual(alerta, "No existe raiz para negativos")
    await driver.quit();
}
Raiz_cero()
Raiz_negativo()
Raiz_positivo()
```
## ANALISIS ESTÁTICO

## PRUEBAS DE SEGURIDAD

## PRUEBAS DE RENDIMIENTO

## INSTALACION EN JENKINS
### Requisitos
- Tener instalado NODE JS
- Tener instalado JEST(se requiere NODE JS antes)
- Tener instalado SELENIUM para JAVASCRIPT(se requiere NODE JS antes)
### CONFIGURANDO
Primero necesitamos un archivo jenkins, al cual añadiremos las siguientes stages, cada una para ser configurada:
- Test Unitarios
- Test Funcionales
### Test Unitarios
Para configurar los test unitarios simplemente colocamos en el step un dir que nos llevara hacia la carpeta donde se encuentran y de allí procedemos a usar un sh para ejecutarlos, el codigo es:
```
npm run test
```
### Test funncionales
Para configurar los test funcionales, debe hacer un dir hacia la carpeta donde se encuentran, y de allí repetir la siguiente estructura según la cantidad de pruebas funcionales se tenga.
```
node "nombre del archivo js"
```
