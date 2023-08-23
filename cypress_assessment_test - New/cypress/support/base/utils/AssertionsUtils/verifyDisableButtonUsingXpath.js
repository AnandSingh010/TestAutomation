/*
 * verify button status as disable using xpath element selectors
 */
Cypress.Commands.add("verifyDisabledButtonsUsingXpath", (loc) => {
  cy.xpath(loc).should("be.disabled");
});
