/*
 * select element from dropdown by entering option of data
 */
Cypress.Commands.add("selectOptionwithValue", (loc, data, index) => {
  cy.get(loc).select(data);
});
