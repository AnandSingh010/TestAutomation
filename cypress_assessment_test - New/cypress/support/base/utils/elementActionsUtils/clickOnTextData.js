/*
 * click on text data
 */
Cypress.Commands.add("clickOnTextWithContains", (data) => {
  cy.contains(data).click();
});
