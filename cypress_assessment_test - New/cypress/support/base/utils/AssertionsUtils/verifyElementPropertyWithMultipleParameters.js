/*
 * verify element property with multiple parameters using index
 */
Cypress.Commands.add(
  "verifyElementPropertyWithMultipleParameters",
  (loc, index, value1, value2) => {
    return cy.get(loc).eq(index).should(value1, value2);
  }
);
