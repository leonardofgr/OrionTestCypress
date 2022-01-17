
it('OC con proveedor externo', function() {
  cy.visit('http://oriontest.mitrebol.cl/login');
  cy.get('#email').clear();
  cy.get('#email').type('vortiz@helpcom.cl');
  cy.get('#password').clear();
  cy.get('#password').type('123456');
  cy.wait(3000)
  cy.get('.btn-outline-success').click({force:true});
  cy.wait(3000)
  cy.get(':nth-child(4) > .text-center > .menu-imagen-visible').click({force:true});
  cy.wait(3000)
  cy.get(':nth-child(1) > .text-success > img').click({force:true})

  cy.wait(3000)
  //boton orden de compra
  cy.xpath("/html[1]/body[1]/div[4]/div[2]/div[1]/nav[1]/form[1]/a[1]/button[1]").click({force:true})
  cy.get('.btn-toolbar > :nth-child(4) > .btn').click({force:true});
  cy.wait(5000)//!tiempo de espera variable y/o extenso

  /* ==== Generated with Cypress Studio ==== */
  cy.get('[style="margin-top: 40px;"] > .col-10 > .form-control').select('1');
  cy.get(':nth-child(1) > :nth-child(2) > .card > .card-body > .form-group > .col-10 > .form-control').select('1');
  cy.get(':nth-child(2) > .card > .card-body > :nth-child(2) > .col-10 > .form-control').select('16');
  cy.get(':nth-child(2) > .card > .card-body > :nth-child(5) > .col-10 > .form-control').select('80');
  cy.get(':nth-child(2) > .card > .card-body > :nth-child(6) > .col-10 > .form-control').select('37');
  cy.get(':nth-child(2) > .card > .card-body > :nth-child(7) > .col-10 > .form-control').select('52');

  cy.get(':nth-child(3) > .col-8 > .form-control').select('2021-12-15 2021-12-15 COSTOS COMERCIAL CCU S.A 15-12-21',{force:true})

  cy.get('.el-input__inner').click();
  cy.get('.el-scrollbar__view > :nth-child(2)').click();
  cy.get('.form-check').click();
  cy.get('#app > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1)').click({force:true});
  cy.get(':nth-child(2) > :nth-child(1) > .card > .card-body > :nth-child(5) > .col-10 > .form-control').select('1',{force:true});
  cy.get(':nth-child(2) > .col-8 > .form-control').select('6',{force:true});
  cy.get(':nth-child(1) > :nth-child(1) > .check').check({force:true});
  cy.get(':nth-child(1) > :nth-child(1) > .check').uncheck({force:true});
  cy.get('.btn-toolbar > :nth-child(3) > .btn').click({force:true});
  cy.wait(2000)
  cy.get(':nth-child(2) > .ml-2').check({force:true});
  cy.wait(2000)
  cy.get(':nth-child(1) > .ml-2').check({force:true});
  cy.wait(2000)
  cy.get('.form-inline > .form-control').select('50',{force:true});
  cy.wait(3000)

  //?seleccionar elementos de la lista
  cy.get(':nth-child(16) > :nth-child(1) > .check').check({force:true});
  cy.get(':nth-child(17) > :nth-child(1) > .check').check({force:true});

  cy.get(':nth-child(16) > :nth-child(1) > .check').uncheck({force:true});
  cy.get(':nth-child(17) > :nth-child(1) > .check').uncheck({force:true});
  cy.get(':nth-child(29) > :nth-child(1) > .check').check({force:true});
  cy.get(':nth-child(30) > :nth-child(1) > .check').check({force:true});
  cy.get('.col-md-2 > .btn').click({force:true});
  cy.wait(2000)
  cy.get(':nth-child(30) > :nth-child(1) > .check').uncheck({force:true});
  cy.get(':nth-child(29) > :nth-child(1) > .check').uncheck({force:true});
  cy.get(':nth-child(36) > :nth-child(1) > .check').check({force:true});
  cy.get(':nth-child(46) > :nth-child(1) > .check').check({force:true});
  cy.get('.col-md-2 > .btn').click({force:true});
  cy.get('.pagination > :nth-child(2)').click({force:true});
  cy.get(':nth-child(40) > :nth-child(1) > .check').check({force:true});
  cy.get(':nth-child(41) > :nth-child(1) > .check').check({force:true});
  cy.get(':nth-child(46) > :nth-child(1) > .check').uncheck({force:true});
  cy.get(':nth-child(36) > :nth-child(1) > .check').uncheck({force:true});
  cy.get('.col-md-2 > .btn').click({force:true});
  cy.get(':nth-child(3) > .vs-popup > .vs-popup--header > .vs-icon').click({force:true});
  cy.get(':nth-child(3) > .btn > .fa').click({force:true});
  cy.get('.form-inline > .form-control').select('10',{force:true});
  cy.get('tbody > :nth-child(4) > :nth-child(1)').click({force:true});

  cy.get(':nth-child(4) > :nth-child(1) > .check').check({force:true});
  cy.get(':nth-child(5) > :nth-child(1) > .check').check({force:true});
  cy.get(':nth-child(6) > :nth-child(1) > .check').check({force:true});

  cy.get('.col-md-2 > .btn').click({force:true});
  cy.wait(3000)



  cy.get('#table-transition-example > tbody > :nth-child(1)').click({force:true});
  cy.get(':nth-child(1) > [aria-colindex="12"] > .form-control').clear({force:true});
  cy.get(':nth-child(1) > [aria-colindex="12"] > .form-control').type('2');
  cy.get('#table-transition-example > tbody > :nth-child(2)').click({force:true});
  cy.get(':nth-child(2) > [aria-colindex="12"] > .form-control').clear({force:true});
  cy.get(':nth-child(2) > [aria-colindex="12"] > .form-control').type('2');
  cy.get('#table-transition-example > tbody > :nth-child(3)').click({force:true});
  cy.get(':nth-child(3) > [aria-colindex="12"] > .form-control').clear({force:true});
  cy.get(':nth-child(3) > [aria-colindex="12"] > .form-control').type('2');
  cy.get(':nth-child(3) > [aria-colindex="12"] > .form-control').click({force:true});

  cy.get('#form7').click({force:true});
  

  cy.get(':nth-child(4) > [aria-colindex="12"] > .form-control').clear({force:true});
  cy.get(':nth-child(4) > [aria-colindex="12"] > .form-control').type('2',{force:true});
  cy.get(':nth-child(5) > [aria-colindex="12"] > .form-control').clear({force:true});
  cy.get(':nth-child(5) > [aria-colindex="12"] > .form-control').type('2',{force:true});
  cy.get(':nth-child(6) > [aria-colindex="12"] > .form-control').clear({force:true});
  cy.get(':nth-child(6) > [aria-colindex="12"] > .form-control').type('2',{force:true});
  cy.wait(3000)
  //?calcular orden de compra
  cy.get('.col-md-5 > .btn-toolbar > :nth-child(1) > .btn').click({force:true});
  //?boton guardar orden de compra
  cy.get('.card-body > .btn-toolbar > :nth-child(1) > .btn').click({force:true});

  
});
  