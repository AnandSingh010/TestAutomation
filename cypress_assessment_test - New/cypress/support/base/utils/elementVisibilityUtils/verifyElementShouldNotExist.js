/*
 * verify element should not exist on page
 */
Cypress.Commands.add("elementShouldNotExist", (loc) => {
  cy.get(loc).should("not.exist").and("not.be.visible");
});
