const datos = require('/Users/leonardo/Proyectos VS Code/Cypres/CypressUdemyCurso/arrayJasonRandomDataForLogin.json')

describe('Login Tests with random data', () => {
    
    beforeEach(()=>{
        cy.visit('http://oriontest.mitrebol.cl/login')

    })
    datos.forEach(test => {
        
        it('Se espera no poder ingresar a Orion por uso de credenciales incorrectas',()=>{
            cy.get('#email').type(test.email)
            cy.get('#password').type(test.passwoord)
            cy.xpath("//body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[4]/div[1]/button[1]").click()
            cy.wait(3000)
        })
    })
})