const faker = require('faker')

let userData = {
   
    randomEmail: faker.internet.email(),
    randomPassword: faker.random.number()
}


describe('Login Tests', function () {
    it('Successfull login', function () {
        cy.visit('http://oriontest.mitrebol.cl/login')
        cy.get('#email').type(randomEmail)
        cy.get('#password').type(randomPassword)
    })
})