/*
 * verify element should not exist and not visible on page using xpath element selector
 */
Cypress.Commands.add("elementWithXpathShouldNotExist", (loc) => {
  cy.xpath(loc).should("not.exist").and("not.be.visible");
});
