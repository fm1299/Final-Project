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
## PRUEBAS UNITARIAS
Para las pruebas unitarias hemos usado Jest, una librería de Javascript para realizar pruebas unitarias. Para poder usar las pruebas unitarias lo primero que hemos hecho es usar una variable llamada "calc" con el objetivo de pasarle el archivo js que será probado:
```
const calc = require('../../Pruebas_trabajo/js/calculador')
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
Para las pruebas unitarias hemos usado Selenium, teniendo una fácil compatibilidad con nuestro proyecto. Por cada implementación que hemos hecho, hemos implementado las siguientes pruebas funcionales:
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
