# PROYECTO CALCULADORA
El proyecto es una calculadora simple que, añadiendo funcionalidades y actualizaciones, aumentamos su complejidad y mejoramos sus fallos.
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
- Analisis Estático
- Test de Seguridad
- Test de Rendimiento
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