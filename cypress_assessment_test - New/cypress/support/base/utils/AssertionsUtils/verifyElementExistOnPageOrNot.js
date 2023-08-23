/*
 * verify element exist on page or not
 */
Cypress.Commands.add("verifyElementExistOrNot", (loc, data) => {
  cy.get(loc).should(data);
});
