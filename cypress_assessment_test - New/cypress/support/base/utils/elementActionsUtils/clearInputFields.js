/*
 * this will clear the input fields on page
 */
Cypress.Commands.add("clearInputField", (loc) => {
  cy.get(loc, { timeout: 20000 }).clear();
});
