/// <reference types='cypress-xpath' />


describe("Informe QA en Orion Web", ()=>{
    it.only ("El usuario crea una orden de compra",()=>{
        cy.visit('http://oriontest.mitrebol.cl/login')
        cy.get('#email').type('vortiz@helpcom.cl')
        cy.get('#password').type('123456')
        //?click en boton entrar
        cy.xpath("//body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[4]/div[1]/button[1]").click({force:true})
        cy.wait(3000)
        //?click en Gestion Comercial
        cy.get(':nth-child(4) > .text-center > p').click({force:true})
        //?click en gestion compras
        cy.get(':nth-child(1) > .text-success > img').click({force:true})
        //?tiempo de espera pantalla de carga
        cy.wait(15000)
        //?click en logo azul(orden de compra)
        cy.xpath("/html[1]/body[1]/div[4]/div[2]/div[1]/nav[1]/form[1]/a[1]/button[1]").click({force:true})
        //?tiempo de espera para carga de pantalla ordenes de compra existentes
        cy.wait(290000)
        //?click en boton nueva orden de compra
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/a[1]").click({force:true})
        cy.wait(5000)
        //?Seleccionar razon social
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/select[1]").select('COMERCIAL AMAR HERMANOS Y COMPANIA LIMITADA')
        //?Seleccionar tipo recepto
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/select[1]").select('Centro de Distribución')
        //?Seleccionar razon social de empresa proveedora
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/select[1]").select('AGROINDUSTRIAL Y COMERCIAL LOS CIPRESES LIMITADA')
        //?Seleccionar sucursal proveedor
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[5]/div[1]/select[1]").select('CASA MASA MATRIZ')
        //?Seleccionar division
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[6]/div[1]/select[1]").contains('CASA MASA')
        //?Seleccionar sucural empresa emisor
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[2]/input[1]").click()
        cy.xpath("/html[1]/body[1]/div[6]/div[1]/div[1]/ul[1]/li[2]").contains('BARROS ARANA').click()
        //cy.xpath("/html[1]/body[1]/div[7]/div[1]/div[1]/ul[1]/li[3]").contains('CAJON').click()
        //?click en lugar vacio para saltar focus 
        cy.xpath("/html[1]/body[1]/nav[1]/div[1]").click()
        cy.wait(5000)
        //? Seleccionar bodega emisor
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[5]/div[1]/select[1]").select('BODEGA RETAIL')

        //?seccion de condiciones globales
        //?seleccione solicitud de ...
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[1]/select[1]").select('OC de mercadería')
        //?Seleccione lista de costo
        cy.xpath("//html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/div[3]/div[1]/select[1]").select('2021-03-30 2021-03-30 lista costo casa masa 26-11 P3')
        //?Ingresar una observacion de orden compra , evaluar 500 caracteres , se pruebas con 600
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/div[7]/div[1]/textarea[1]").type('Meis vocent signiferumque pri et. Facilis corpora recusabo ne quo, eum ne eruditi blandit suscipiantur. Mazim sapientem sed id, sea debet commune iracundia in. Eius falli propriae te usu. In usu nonummy volumus expetenda, sint quando facilisis ei per, delectus constituto sea teDicunt percipit deserunt ut usu. Aliquip delenit an eam, vocent vituperata vim ea. Ei mollis audire interpretaris cum, ei impedit fierent sea. Ius at homero noster prompta, ea sit dignissim vituperata efficiendi. Natum placerat ad mei.No his munere interesset. At soluta accusam gloriatur eos, ferri commodo sed id, e')
        
        //*TODO: adelantar trabajo y crear los xpath para los botones existentes en el resto del formulario , (a la espera de los CU)
       
        /*Encabezado O/C por sucursal - 
        //boton anular
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/button[1]/i[1]").click()
        //Boton enviar correo 
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]").click()
        //insertar lifetime
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[7]/input[1]").type('123')

        //______ detalle orden de compra
        //periodo de calculo
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[7]/input[1]").type('23-12-2021',{force:true})
        //boton calcular OC
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/button[1]").click()
        //boton ver calculos
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[2]/button[1]").click()
        //boton +
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[3]/button[1]/i[1]").click()
        //campo buscar
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[3]/button[1]/i[1]").type('criterio de busqueda')
        //checkbox detalle orden de compra
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[2]/div[1]/input[1]").check()
        //_________hasta aquii______*/
        //*? Fin TO:DO 

        //?seccion detalle orden de compra
        //?boton +
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[3]/button[1]/i[1]").click({force:true})
        //? dropdown de paginado , cantidad de elementos por pagina 10, 50 o 100
        cy.xpath("/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/select[1]").select('Ver 50 por pagina',{force:true})
        cy.wait(5000)
        /*cy.xpath("/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/select[1]").select('Ver 100 por pagina',{force:true})
        cy.wait(5000)
        cy.xpath("/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/select[1]").select('Ver 10 por pagina',{force:true})
        cy.wait(5000)*/

        //? checkbox primer elemento de la lista
        cy.xpath("/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/input[1]").check({force:true})
        cy.wait(2000)
        //? Agregar seleccionado
        cy.xpath("/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[2]/button[1]").click({force:true})
        cy.wait(5000)
        //? ejecutar metodo clear para limpiar la entrada de  texto que por defecto es 0
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[12]/input[1]").clear()
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[12]/input[1]").type('2')
        cy.wait(5000)
        //? click en boton actualizar
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[17]/div[1]/button[2]/i[1]").click({force:true})
        cy.wait(5000)
        //? se elimina un producto de la lista
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[17]/div[1]/button[2]/i[1]").click({force:true})
        cy.wait(5000)







      




        



    })
  
})
