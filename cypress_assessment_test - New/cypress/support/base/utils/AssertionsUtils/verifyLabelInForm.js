/*
 * verify form's label name
 */
Cypress.Commands.add("verifyALabelInForm", (loc, index, lebel_text) => {
  cy.get(loc)
    .eq(index)
    .within(() => {
      cy.get("label").should("contain", lebel_text);
    });
});
