/*
 * verify available value of an attributes
 */
Cypress.Commands.add("verifyattributeValue", (loc, attr, value) => {
  cy.get(loc).should(`have.${attr}`, value);
});
