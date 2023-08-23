/*
 * this will uncheck the checked checkbox on the page
 */
Cypress.Commands.add("uncheckTheCheckbox", (loc, index) => {
  if (!Cypress.$(loc).eq(index).prop("checked")) {
    cy.log("checkbox is unchecked");
  } else {
    cy.get(loc).eq(index).uncheck({ force: true });
    cy.wait(1000);
  }
});
