/* ==== Test Created with Cypress Studio ==== */
it('demo qa', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://demoqa.com/text-box');
  cy.get('#userName').clear();
  cy.get('#userName').type('Leonardo');
  cy.get('#userEmail').clear();
  cy.get('#userEmail').type('correo@correo.cl');
  cy.get('.container > :nth-child(2) > :nth-child(3)').click();
  cy.get('#submit').click();
  /* ==== End Cypress Studio ==== */
});