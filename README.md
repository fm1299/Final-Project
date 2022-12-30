# PROYECTO CALCULADORA
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

### UBERTO GARCIA CACERES
- Base del proyecto
- Función Potencia
- Actualización final
- Gestión de Issues - Trello
- Escritura del README
### JOSUE GABRIEL SUMARE USCA
- Función de Porcentaje
- Pruebas de Seguridad - OWASP ZAP
### FABRICIO MIGUEL MATTOS CAHUI
- Función Logaritmica
- Administración de Jenkins
- Administración del repositorio Github.
### ANGIE ALEXANDRA PINO HUARSAYA
- Función Raíz
- Análisis Estático - Sonaqube
### ROY ANGEL CHOQUEHUANCA ANCONEYRA
- Función Factorial
- Pruebas de Rendimiento

## Requisitos
- Tener instalado OWASP ZAP
- Tener instalado NODE JS
- Tener instalado SONARQUBE
- Tener instalado JEST(se requiere NODE JS antes)
- Tener instalado SELENIUM para JAVASCRIPT(se requiere NODE JS antes)
## Configurando
Primero necesitamos un archivo jenkins, al cual añadiremos las siguientes stages, cada una para ser configurada:
- Test Unitarios
- Test Funcionales
## Test Unitarios
Para configurar los test unitarios simplemente colocamos en el step un dir que nos llevara hacia la carpeta donde se encuentran y de allí procedemos a usar un sh para ejecutarlos, el codigo es:
```
npm run test
```
## Test funncionales
Para configurar los test funcionales, debe hacer un dir hacia la carpeta donde se encuentran, y de allí repetir la siguiente estructura según la cantidad de pruebas funcionales se tenga.
```
node "nombre del archivo js"
```