/*
 * this will click on element on the page using index
 */
Cypress.Commands.add("clickOnElementByIndex", (loc, index) => {
  cy.get(loc, { timeout: 10000 }).eq(index).click({ force: true });
});
