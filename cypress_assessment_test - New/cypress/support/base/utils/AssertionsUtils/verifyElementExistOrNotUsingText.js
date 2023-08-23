/*
 * verify any element present or not using text data
 */
Cypress.Commands.add("verifyElementExistOrNotUsingText", (loc, data, exist) => {
  cy.get(loc).contains(data).should(exist);
});
