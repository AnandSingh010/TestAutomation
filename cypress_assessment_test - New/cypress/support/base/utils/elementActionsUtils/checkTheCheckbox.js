/*
 * this will check the unchecked checkbox
 */
Cypress.Commands.add("checkTheCheckbox", (loc) => {
  if (Cypress.$(loc).prop("checked")) {
    cy.log("checkbox is checked");
  } else {
    cy.clickOnElement(loc, 0, { force: true });
  }
});
