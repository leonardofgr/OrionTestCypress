import HomePage from '/cypress/pages/HomePage.js'

describe('Test login con POM',()=>{
    beforeEach(()=>{
        cy.visit('http://oriontest.mitrebol.cl/login')
    })
    it('El usuario se logea exitosamente', ()=>{
        HomePage.typeUserMail('vortiz@helpcom.cl')
        HomePage.typeUserPasswoord('123456')
        HomePage.pressLoginBtn()
        
    })

})