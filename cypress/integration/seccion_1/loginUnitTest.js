describe("Informe QA en Orion Web", ()=>{
    
    it ("Test Login orion",()=>{
        cy.visit('http://oriontest.mitrebol.cl/login')
        cy.get('#email').type('ytorres@helpcom.cl')
        cy.get('#password').type('123123')
        cy.xpath("//body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[4]/div[1]/button[1]").click()
        cy.wait(2000)
        
    })
  
})