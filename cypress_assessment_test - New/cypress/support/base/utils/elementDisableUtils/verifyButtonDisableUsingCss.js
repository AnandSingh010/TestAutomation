/*
 * this will verify the disabled button on the page
 */
Cypress.Commands.add("verifyDisabledButtonsUsingCss", (loc) => {
  cy.get(loc).should("be.disabled");
});
