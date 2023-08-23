/*
 * here verify any text is equal to any specific data using index
 */
Cypress.Commands.add("verifyTextEqualWithIndex", (loc, index, data) => {
  cy.get(loc).eq(index).should("have.text", data);
});
