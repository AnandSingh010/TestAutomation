/*
 * verify null value on page
 */
Cypress.Commands.add("verifyNullValue", (loc, index) => {
  cy.get(loc).eq(index).should("be.empty");
});
