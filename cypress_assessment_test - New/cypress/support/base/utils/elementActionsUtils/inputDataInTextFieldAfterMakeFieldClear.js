/*
 * input data in text field after make field clear
 */
Cypress.Commands.add("typeTextInField", (loc, index, data) => {
  cy.get(loc).eq(index).clear({ force: true }).type(data);
});
