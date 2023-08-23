/*
 * here verify any text is available on page
 */
Cypress.Commands.add("verifyTextContains", (loc, data) => {
  cy.get(loc).should("contain", data);
});
