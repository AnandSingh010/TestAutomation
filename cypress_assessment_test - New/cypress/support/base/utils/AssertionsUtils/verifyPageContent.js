/*
 * verify the page data
 */
Cypress.Commands.add("verifyPageContents", (loc, data) => {
  cy.get(loc, { timeout: 20000 }).should("contain", data);
});
