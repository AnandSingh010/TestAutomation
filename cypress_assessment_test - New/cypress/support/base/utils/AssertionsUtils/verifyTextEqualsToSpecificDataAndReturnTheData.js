/*
 * here verify any text is equal to any specific data and return the data
 */
Cypress.Commands.add("verifyTextEqual", (loc, data) => {
  return cy.get(loc, { timeout: 20000 }).should("have.text", data);
});
