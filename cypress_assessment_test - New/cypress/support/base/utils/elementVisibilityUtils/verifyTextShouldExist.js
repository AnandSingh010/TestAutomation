/*
 * verify text data should available and visible on page
 */
Cypress.Commands.add("textShouldExist", (text) => {
  cy.contains(text, { timeout: 20000 }).should("exist").and("be.visible");
});
