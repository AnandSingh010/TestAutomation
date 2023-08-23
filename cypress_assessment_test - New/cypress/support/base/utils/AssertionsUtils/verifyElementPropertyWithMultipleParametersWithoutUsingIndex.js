/*
 * verify element property with multiple parameters without using index
 */
Cypress.Commands.add("verifyElementProperty2", (loc, value1, value2) => {
  return cy.get(loc).should(value1, value2);
});
