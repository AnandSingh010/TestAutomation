/*
 * here verify any element containing specific data as text
 */
Cypress.Commands.add("verifyTextContainWithIndex", (loc, index, data) => {
  cy.get(loc).eq(index).should("contain", data);
});
