/*
 * verify element should not exist and not visible on page
 */
Cypress.Commands.add("elementShouldNotVisible", (loc) => {
  cy.get(loc).should("not.be.visible");
});
