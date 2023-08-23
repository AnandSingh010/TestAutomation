/*
 * verify the length of any element
 */
Cypress.Commands.add("verifyLengthAtLeast", (loc, value) => {
  cy.get(loc).its("length").should("be.at.least", value);
});
