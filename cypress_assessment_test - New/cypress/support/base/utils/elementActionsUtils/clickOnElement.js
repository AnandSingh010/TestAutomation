/*
 * this will click on element on the page
 */
Cypress.Commands.add("clickOnElement", (loc, ...param) => {
  if (param.length == 1) cy.get(loc).eq(param[0]).click();
  else if (param.length == 2) cy.get(loc).eq(param[0]).click(param[1]);
  else cy.get(loc).click();
});
