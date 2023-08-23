/*
 * this will verify element is visible on the page or not
 */
Cypress.Commands.add("verifyElementVisibleOrNot", (loc, index, param) => {
  cy.get(loc).eq(index).should(param);
});
