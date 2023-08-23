/*
 * here verify message appearing on page
 */
Cypress.Commands.add("verifyMessage", (loc, data) => {
  cy.get(loc).invoke("text").should("contain", data);
});
