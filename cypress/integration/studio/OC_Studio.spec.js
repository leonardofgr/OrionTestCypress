// OC_Studio.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('OC_Studio', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://oriontest.mitrebol.cl/login');
  cy.get('#email').clear();
  cy.get('#email').type('vortiz@helpcom.cl');
  cy.get('#password').clear();
  cy.get('#password').type('123456');
  cy.wait(5000)
  cy.get('.btn-outline-success').click({force:true});
  cy.wait(5000)
  cy.get(':nth-child(4) > .text-center > .menu-imagen-visible').click({force:true});
  cy.wait(5000)
  cy.get(':nth-child(1) > .text-success > img').click({force:true})

  cy.wait(8000)
  //boton orden de compra
  cy.xpath("/html[1]/body[1]/div[4]/div[2]/div[1]/nav[1]/form[1]/a[1]/button[1]").click({force:true})
  cy.get('.btn-toolbar > :nth-child(4) > .btn').click({force:true});
  cy.wait(5000)//!tiempo de espera variable y/o extenso
  cy.get('[style="margin-top: 40px;"] > .col-10 > .form-control').select('1');
  cy.get(':nth-child(1) > :nth-child(2) > .card > .card-body > .form-group > .col-10 > .form-control').select('2');
  cy.get(':nth-child(2) > .card > .card-body > :nth-child(2) > .col-10 > .form-control').select('3');
  cy.get(':nth-child(2) > .card > .card-body > :nth-child(5) > .col-10 > .form-control').select('32');
  cy.get(':nth-child(2) > .card > .card-body > :nth-child(6) > .col-10 > .form-control').select('5');
  cy.get('.el-input__inner').click({force:true});
  cy.get('.el-scrollbar__view > :nth-child(2)').click({force:true});
  cy.get('.el-scrollbar__view > :nth-child(3)').click({force:true});
  cy.get('#app > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(2)').click({force:true});
  cy.wait(3000)
  cy.get(':nth-child(2) > .col-8 > .form-control').select('6',{force:true});
  cy.xpath("//html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/div[3]/div[1]/select[1]").select('2021-03-30 2021-03-30 lista costo casa masa 26-11 P3',{force:true})
  cy.get('.btn-toolbar > :nth-child(3) > .btn').click({force:true});
  cy.get('.form-inline > .form-control').select('50',{force:true});
  cy.get('.table-responsive > .table > tbody > :nth-child(1) > :nth-child(1)').click({force:true});
  cy.get('.table-responsive > .table > tbody > :nth-child(1) > :nth-child(1) > .check').check({force:true});
  cy.get('.table-responsive > .table > tbody > :nth-child(2) > :nth-child(1) > .check').check({force:true});
  cy.get(':nth-child(3) > :nth-child(1) > .check').check({force:true});
  cy.get(':nth-child(4) > :nth-child(1) > .check').check({force:true});
  cy.get(':nth-child(5) > :nth-child(1) > .check').check({force:true});
  cy.get(':nth-child(6) > :nth-child(1) > .check').check({force:true});
  cy.get(':nth-child(7) > :nth-child(1) > .check').check({force:true});
  cy.get('.col-md-2 > .btn').click({force:true});
  cy.get(':nth-child(1) > [aria-colindex="12"] > .form-control').click({force:true});
  cy.get(':nth-child(1) > [aria-colindex="12"] > .form-control').type('1',{force:true});
  cy.get(':nth-child(2) > [aria-colindex="12"] > .form-control').clear({force:true});
  cy.get(':nth-child(2) > [aria-colindex="12"] > .form-control').type('3',{force:true});
  cy.get(':nth-child(3) > [aria-colindex="12"] > .form-control').clear({force:true});
  cy.get(':nth-child(3) > [aria-colindex="12"] > .form-control').type('2',{force:true});
  cy.get(':nth-child(1) > [aria-colindex="17"] > .btn-group > .btn-warning > .fas').click({force:true});
  cy.get(':nth-child(2) > [aria-colindex="17"] > .btn-group > .btn-warning > .fas').click({force:true});
  cy.get(':nth-child(3) > [aria-colindex="17"] > .btn-group > .btn-warning > .fas').click({force:true});
  cy.get('.btn-toolbar > :nth-child(2) > .btn').click({force:true});
  cy.get(':nth-child(1) > .col-md-12 > .card > .card-body > .form-group > .table > tbody > :nth-child(1) > :nth-child(1) > .check').check({force:true});
  cy.get(':nth-child(1) > .col-md-12 > .card > .card-body > .form-group > .table > tbody > :nth-child(1) > :nth-child(1) > .check').uncheck({force:true});
  cy.get(':nth-child(2) > .vs-popup > .vs-popup--header > .vs-icon').click({force:true});
  cy.get('.col-md-5 > .btn-toolbar > :nth-child(1) > .btn').click({force:true});

  cy.get('#form7').type('Orden de compra creada desde cypress',{force:true});



  //boton guardar OC
  cy.get('.card-body > .btn-toolbar > :nth-child(1) > .btn').click({force:true});
});
