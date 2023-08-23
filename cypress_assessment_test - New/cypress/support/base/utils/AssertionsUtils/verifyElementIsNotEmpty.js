/*
 * verify non-empty elements
 */
Cypress.Commands.add("verfyElementIsNotEmpty", (loc, index) => {
  cy.get(loc).eq(index).should("not.to.empty");
});
