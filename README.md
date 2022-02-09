# Orion Test Cypress
 
Instrucciones para instalacion de cypress

Instalar Node de manera global

ejecutar los siguientes comandos en la raiz del proyecto

npm init 
npm install cypress --save-dev

para abrir la interfaz de cypress colocar la siguiente linea en la seccion scripts del archivo package.json

"cypress:open": "cypress open"

ejecutar la interfaz de cypress con el siguiente comando

npm run cypress:open

para grabar y subir los resultados al dash de cypress
npx cypress run --record --key 828ac4dd-7356-44e9-8766-d1a46b9ce526


PAra configurar una nuevo dasboard es necesario configurar el id de proyecto en el archivo cypress.json   "projectId": "qv31aa" y cambiar la key record con el comando: npx cypress run --record --key "xxxxx"
