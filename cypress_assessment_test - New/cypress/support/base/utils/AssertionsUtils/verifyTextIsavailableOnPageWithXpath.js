/*
 * here verify any text is available on page using xpath
 */
Cypress.Commands.add("verifyElementTextWithXpath", (loc, data) => {
  cy.xpath(loc).should("include.text", data);
});
