/*
 * click on element using xpath element selector with index value
 */
Cypress.Commands.add("clickUsingXpathWithIndex", (loc, index) => {
  cy.xpath(loc).eq(index).click({ force: true });
});
