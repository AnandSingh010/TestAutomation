/*
 * Input data in text field
 */
Cypress.Commands.add("enterText", (loc, data, ...flag) => {
  if (flag.length == 1) {
    cy.get(loc).eq(flag[0]).type(data);
  } else if (flag.length == 2 && String(flag[1]).includes("clear")) {
    cy.get(loc).eq(flag[0]).clear().type(data);
  } else {
    cy.get(loc).type(data);
  }
});
