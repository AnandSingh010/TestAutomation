/*
 * verify button status as disable using Css element selectors
 */
Cypress.Commands.add("verifyDisabledButtonsUsingCss", (loc) => {
  cy.get(loc).should("be.disabled");
});
