/*
 * verify element should available on page using xpath element selector
 */
Cypress.Commands.add("elementWithXpathShouldExist", (loc) => {
  cy.xpath(loc).should("exist").and("be.visible");
});
