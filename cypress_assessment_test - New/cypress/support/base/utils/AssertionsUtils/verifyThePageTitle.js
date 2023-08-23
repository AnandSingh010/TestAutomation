/*
 * this will verify the page title
 */
Cypress.Commands.add("verifyPageTitle", (loc, data) => {
  cy.get(loc, { timeout: 20000 }).should("have.text", data);
});
