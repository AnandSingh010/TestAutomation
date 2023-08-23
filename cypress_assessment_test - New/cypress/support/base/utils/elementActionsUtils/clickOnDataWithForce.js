/*
 * click on data with force
 */
Cypress.Commands.add("clickContainsWithForce", (data) => {
  cy.contains(data).click({ force: true });
});
