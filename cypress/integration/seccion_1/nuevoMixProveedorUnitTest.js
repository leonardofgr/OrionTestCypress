/// <reference types='cypress-xpath' />

describe("Informe QA en Orion Web", ()=>{
    it ("El usuario crea un nuevo mix",()=>{
        cy.visit('http://oriontest.mitrebol.cl/login')
        cy.get('#email').type('vortiz@helpcom.cl')
        cy.get('#password').type('123456')
        //click en boton entrar
        cy.xpath("//body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[4]/div[1]/button[1]").click()
        cy.wait(3000)
        //click en gestion comercial 
        cy.get('#sidebar-wrapper > ul > li:nth-child(3) > a').click()
        cy.wait(2000)
        //click en Gestion compras
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]/h3[1]").click({force:true})
        cy.wait(11000)
        //click en Mix producto proveedor
        cy.get('#app > div > div.col-md-12 > div > div.card-header > div.float-left.form-inline > div:nth-child(7) > a').click()
        cy.wait(20000)
        //click en boton nuevo +
        cy.xpath("/html[1]/body[1]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/button[1]").click({force:true})
        cy.wait(1000)
         //dropdown empresa emisor/ razon social
        cy.xpath("/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]").select('COMERCIAL AMAR HERMANOS Y COMPANIA LIMITADA')
        
    })
  
})
