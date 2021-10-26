
describe('Creacion de nuevo producto',()=>{
    it('Se espera crear un nuevo producto seleccionando elementos aleatorios de la lista',()=>{
        cy.visit('http://oriontest.mitrebol.cl/login')
        cy.get('#email').type('vortiz@helpcom.cl')
        cy.get('#password').type('123456')
        
        //click en boton entrar
        cy.xpath("//body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[4]/div[1]/button[1]").click()
        cy.wait(3000)
       
        //click en gestion comercial 
        cy.get('#sidebar-wrapper > ul > li:nth-child(3) > a').click()
        cy.wait(2000)
        
        //Click en gestion producto
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/a[1]/h3[1]").click({force:true})
       
        //click en Nuevo producto
        cy.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/a[1]").click({force:true})
        cy.wait(3000)

        // escribir el nombre del producto en el campo nombre abreviado
        cy.xpath("/html[1]/body[1]/div[17]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/input[1]").click({force:true}).clear()
        cy.xpath("/html[1]/body[1]/div[17]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/input[1]").type('Pelota del mundial')

        //Seleccionar elemento del dropdown Area ,'HOGAR Y NON FOOD'
        cy.xpath("/html[1]/body[1]/div[17]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[1]/div[2]/select[1]").select('4')

        // Selccionar elemento del dropdown departamento 
        cy.xpath("/html[1]/body[1]/div[17]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[2]/select[1]").select('DEPORTES')

        //seleccionar elemento del dropdown linea
        cy.xpath("/html[1]/body[1]/div[17]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[3]/div[2]/select[1]").select('FUTBOL')

        //Seleccionar elemento del dropdown Familia
        cy.xpath("/html[1]/body[1]/div[17]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[4]/div[2]/select[1]").select('ACCESORIOS FUTBOL',{force:true})

        //Seleccionar elemento del dropdown GRP ARTICULOS
        cy.xpath("/html[1]/body[1]/div[17]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[5]/div[2]/select[1]").select('ACCESORIOS FUTBOL',{force:true})

        //Seleccionar elemento del dropdown Marca
        cy.xpath("/html[1]/body[1]/div[17]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[6]/div[2]/select[1]").select('DIMEL',{force:true})

        //Seleccionar elemento del Tipo unidad
        cy.xpath("/html[1]/body[1]/div[17]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[7]/div[2]/select[1]").select('UNIDAD',{force:true})

        //Seleccionar elemento del dropdown tipo producto
        cy.xpath("/html[1]/body[1]/div[17]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[8]/div[2]/select[1]").select('ELABORADO',{force:true})

        //Seleccionar etiqueta
        cy.xpath("/html[1]/body[1]/div[17]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[5]/div[1]/div[2]/div[1]/select[1]").select('PAIS ORIGEN')

        //Escribir descripcion de la etiqueta
        cy.xpath("/html[1]/body[1]/div[17]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[5]/div[1]/div[2]/div[1]/div[1]/input[1]").type('China',{force:true})

        //Presionar boton agregar
        cy.xpath("/html[1]/body[1]/div[17]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[5]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]").click({force:true})

        //Click en presentacion
        cy.xpath("/html[1]/body[1]/div[17]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/button[1]/span[2]/span[1]").click({force:true})

        //Seleccionar Unidad de medida, ventana emergente presentacion
        cy.xpath("/html[1]/body[1]/div[16]/div[2]/div[1]/div[1]/div[1]/div[1]/select[1]").select('KG',{force:true})

        //completar el campo capacidad
        cy.xpath("/html[1]/body[1]/div[16]/div[2]/div[1]/div[1]/div[2]/div[1]/input[1]").type('0.3',{force:true})

        // seleccionar el campo embalaje 
        cy.xpath("/html[1]/body[1]/div[16]/div[2]/div[1]/div[1]/div[3]/div[1]/select[1]").select('UND',{force:true})

        //completar el campo cantidad 
        cy.xpath("/html[1]/body[1]/div[16]/div[2]/div[1]/div[1]/div[4]/div[1]/input[1]").type('200',{force:true})

        //Seleccionar el  campo tipo codigo
        cy.xpath("/html[1]/body[1]/div[16]/div[2]/div[1]/div[1]/div[5]/div[1]/select[1]").select('PLU',{force:true})

        //Comppletar el campo codigo de barra
        cy.xpath("/html[1]/body[1]/div[16]/div[2]/div[1]/div[1]/div[6]/div[1]/input[1]").type('121212',{force:true})

        //presionar el boton guardar de la ventana emergente
        cy.xpath("/html[1]/body[1]/div[16]/div[2]/div[1]/div[2]/button[1]").click({force:true})

        //Se cambia el focus de la web hasta el campo nombre producto ubicado en la caja nombre producto para seleccionar el nombre del producto
        cy.xpath("/html[1]/body[1]/div[17]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/input[1]").click().should('have.value','')
        cy.get('.el-scrollbar__view > :nth-child(2) > span').click()
       
        //Se presiona boton guardar
        cy.xpath("/html[1]/body[1]/div[17]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]").click({force:true})
        



        
    })
})