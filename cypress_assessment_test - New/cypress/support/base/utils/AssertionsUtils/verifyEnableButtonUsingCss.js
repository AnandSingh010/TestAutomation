/*
 * verify button status as enabled using Css element selectors
 */
Cypress.Commands.add("verifyEnabledButtonsUsingCss", (loc) => {
  cy.get(loc).should("be.enabled");
});
