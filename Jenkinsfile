pipeline {
    agent any

    parameters{//parametro basicos de configuracion
        string(name: "SPEC", defaultValue:"cypress/integration/seccion_2/CentralizacionTest.js", description: "Analisis del proceso de centralacion")
        choice(name:"BROWSER", choices: ['chrome','edge','firefox']description:"Escoga un navegador")

    }
    options{
        ansiColor('extern')//esto permitira mas legibilidad de los log, colores y secciones destacadas
    }
    stages{
        stage('Build'){
            steps{
                echo "Building aplication"
            }
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --broser ${BROWSER} --spec ${SPEC}"//la funcion bat recibe los paramentros especificados en la linea 5 y 6
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying the aplication"//este paso es creado para automatizar procesos de desarrollo , como lo podrian ser lanzamiento de codigo a produccion
            }
        }
    }
    post()
}