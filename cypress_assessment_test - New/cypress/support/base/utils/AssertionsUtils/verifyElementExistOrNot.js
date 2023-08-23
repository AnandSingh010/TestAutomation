/*
 * this will verify element on page exists or not
 */
Cypress.Commands.add("verifyElementExistsOrNot", (loc, index, param) => {
  cy.get(loc).eq(index).should(param);
});
