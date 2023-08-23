/*
 * verify element value using index
 */
Cypress.Commands.add("verifyElementProperty", (loc, index, value) => {
  return cy.get(loc).eq(index).should(value);
});
