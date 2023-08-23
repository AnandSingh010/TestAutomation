/*
 * verify element is not present on page with a specified wait
 */
Cypress.Commands.add("verifyElementNotExistWithWait", (loc) => {
  cy.get(loc).should("not.exist", { timeout: 20000 });
});
