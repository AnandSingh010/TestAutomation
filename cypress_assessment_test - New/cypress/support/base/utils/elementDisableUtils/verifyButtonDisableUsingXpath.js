/*
 * this will verify the disabled button on the page using xpath
 */
Cypress.Commands.add("verifyDisabledButtonsUsingXpath", (loc) => {
  cy.xpath(loc).should("be.disabled");
});
