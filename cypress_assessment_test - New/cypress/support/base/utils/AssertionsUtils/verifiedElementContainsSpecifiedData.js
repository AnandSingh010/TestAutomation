/*
 * verify element containing specified data
 */
Cypress.Commands.add("elementShouldContain", (loc, data) => {
  cy.get(loc).contains(data);
});
