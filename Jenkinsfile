pipeline{
    stages{
        stage('Pruebas Unitarias'){
            steps{
                dir("Test_Unitarios"){
                    sh "npm run test"
                }
            }
        }
        stage('Pruebas Funcionales'){
            steps{
                dir("Test_Funcionales"){
                    sh "node prueba_factorial.js"
                    sh "node prueba_log.js"
                    sh "node prueba_porcentaje.js"
                    sh "node prueba_potencia.js"
                    sh "node prueba_raiz.js"
                }
            }
        }
    }
}