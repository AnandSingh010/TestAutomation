/*
 * this will verify validation messages of pages
 */
Cypress.Commands.add("verifyValidationMessage", (loc, data) => {
  cy.get(loc).invoke("text").should("contain", data);
});
