/*
 * verify check box status as checked or unchecked
 */
Cypress.Commands.add("verifyCheckboxCheckedOrNot", (loc, index, value) => {
  cy.get(loc).eq(index).should(value);
});
