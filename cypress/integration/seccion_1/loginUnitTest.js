describe("Informe QA en Orion Web", ()=>{

    beforeEach(()=>{
        cy.visit('http://oriontest.mitrebol.cl/login')
    })
    
    it ("Test Login orion",()=>{
  
        cy.get('#email').type('vortiz@helpcom.cl')
        cy.get('#password').type('123456')
        //click en boton entrar
        cy.xpath("//body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[4]/div[1]/button[1]").click()
        cy.wait(5000)
        //click en gestion comercial 
        cy.get('#sidebar-wrapper > ul > li:nth-child(3) > a').click()
        cy.wait(2000)
        //click en Gestion compras
        cy.get('#app > div.row.justify-content-center > div > div > div.card-body > div > div:nth-child(1) > a > h3').click()
        cy.wait(11000)
        //click en Mix producto proveedor
        cy.get('#app > div > div.col-md-12 > div > div.card-header > div.float-left.form-inline > div:nth-child(7) > a').click()
        cy.wait(15000)
        
        
    })

  
   
  
})
