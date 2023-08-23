/*
 * verify the exact length of element
 */
Cypress.Commands.add("verifyLengthOfElementOnUserPage", (loc, value) => {
  cy.get(loc).its("length").should("be.eq", value);
});
