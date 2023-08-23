/*
 * verify element on form
 */
Cypress.Commands.add("verifyAnElementInForm", (loc, index, tag, type = 0) => {
  cy.get(loc)
    .eq(index)
    .within(() => {
      if (type) cy.get(tag).last().should("have.attr", "type", type);
      else cy.get(tag).should("be.exist");
    });
});
