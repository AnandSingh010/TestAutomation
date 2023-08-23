/*
 * check the check boxes
 */
Cypress.Commands.add("checkMultipleRadioButton", (loc) => {
  cy.get(loc).check({ force: true });
});
