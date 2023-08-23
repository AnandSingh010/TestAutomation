/*
 * click on element with an additional parameter with a specific amount of time wait
 */
Cypress.Commands.add("clickOnElementWithWait", (loc, index, wait, para) => {
  cy.wait(wait);
  cy.get(loc).eq(index).click(para);
});
