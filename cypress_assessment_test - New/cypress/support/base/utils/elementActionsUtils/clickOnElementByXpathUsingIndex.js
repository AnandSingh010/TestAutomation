/*
 * this will click on element by xpath using index
 */
Cypress.Commands.add("clickOnElementByXpathUsingIndex", (loc, index) => {
  cy.xpath(loc).eq(index).click();
});
