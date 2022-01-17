/// <reference types='cypress-xpath' />

describe("Informe QA en Orion Web", ()=>{
    it ("El usuario crea un nuevo mix",()=>{
        cy.visit('http://oriontest.mitrebol.cl/login')
        cy.get('#email').type('vortiz@helpcom.cl')
        cy.get('#password').type('123456')
        //?click en boton entrar
        cy.xpath("//body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[4]/div[1]/button[1]").click({force:true})
        cy.wait(3000)
        //?click en Centralizacion
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[2]/a[1]/img[1]").click({force:true})
        //?click en sub modulo con Alerce
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]/img[1]").click({force:true})
        cy.wait(4000)
        //?click boton lupa
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/button[1]").click({force:true})
        //?aplicar filtro fecha
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[5]/div[2]/div[1]/input[1]").type('2021-11-02',{force:true})
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[2]/div[1]/input[1]").type('2021-11-28',{force:true})
        //?Presionar boton buscar
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/a[2]").click({force:true})
        cy.wait(90000)
        //?accion click boton ver
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/a[1]").click({force:true})
        //?boton volver de ventana emergente
        cy.xpath("//body/div[@id='wrapper']/div[@id='page-content-wrapper']/div[@id='app']/div[@id='app']/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/div[3]/a[1]").click({force:true})
        //?prueba de paginacion
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/ul[1]/li[4]/button[1]").click({force:true})
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/ul[1]/li[5]/button[1]").click({force:true})
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/ul[1]/li[6]/button[1]").click({force:true})
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/ul[1]/li[6]/button[1]").click({force:true})
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/ul[1]/li[6]/button[1]").click({force:true})
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/ul[1]/li[6]/button[1]").click({force:true})
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/ul[1]/li[6]/button[1]").click({force:true})
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/ul[1]/li[6]/button[1]").click({force:true})
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/ul[1]/li[4]/button[1]").click({force:true})
        
        //?vista cantidad de elementos por pagina
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]").select('100',{force:true})


       

        



    })
  
})
