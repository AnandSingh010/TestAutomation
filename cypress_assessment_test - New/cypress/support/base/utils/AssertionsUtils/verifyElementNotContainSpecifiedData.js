/*
 * verify element not contains a specified data
 */
Cypress.Commands.add("elementShouldNotContain", (loc, data) => {
  cy.get(loc).should("not.contain", data);
});
