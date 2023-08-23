/*
 * verify button status as enabled using xpath element selectors
 */
Cypress.Commands.add("verifyEnabledButtonsUsingXpath", (loc) => {
  cy.xpath(loc).should("be.enabled");
});
