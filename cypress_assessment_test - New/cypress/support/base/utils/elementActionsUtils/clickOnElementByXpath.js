/*
 * this will click on element by xpath
 */
Cypress.Commands.add("clickOnElementByXpath", (loc) => {
  cy.xpath(loc).click();
});

/*
 * click on element using xpath element selector
 */
Cypress.Commands.add("clickUsingXpath", (loc) => {
  cy.xpath(loc).click({ force: true });
});
