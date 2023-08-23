/*
 * verify element should available on page
 */
Cypress.Commands.add("elementShouldExist", (loc) => {
  cy.get(loc).should("exist").and("be.visible");
});
