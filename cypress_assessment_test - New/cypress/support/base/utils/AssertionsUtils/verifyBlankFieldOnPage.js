/*
 * verify blank field on page
 */
Cypress.Commands.add("verifyBlankValue", (loc, index) => {
  cy.get(loc).eq(index).should("not.have.value");
});
