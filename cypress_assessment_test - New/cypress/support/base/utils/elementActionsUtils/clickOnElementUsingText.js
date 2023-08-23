/*
 * this will click on element using text data
 */
Cypress.Commands.add("clickOnElementUsingText", (loc, data) => {
  cy.get(loc).contains(data).click();
});
