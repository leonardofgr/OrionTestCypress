/// <reference types="Cypress"/>

//import 'cypress-file-upload';
//require ('@4tw/cypress-drag-drop')
require ('cypress-xpath')
require ('cypress-plugin-tab')

describe("Demo de una Api Rest",()=>{
    it('test api ',()=>{ 
        const datos ={
            "nombre": "Rodrigo",
            "apellidoPaterno":"Gonzales",
            "apellidoMaterno":"Perez",
            "telefono":"1234566",
            "direccion":"Los cipreses 02130",
            "curriculum":[
                {
                    "empresa":"helpcom",
                    "cargo":"Programador"
                },
                {
                    "empresa":"everis",
                    "cargo":"Scrum Master"
                },
                {
                    "empresa":"Mercado libre",
                    "cargo":"QA"
                },
            ]
        }

        cy.log(datos.nombre)
        cy.log(datos.curriculum[0])

       




    })
})

