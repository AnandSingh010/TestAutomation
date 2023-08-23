/*
 * select the dropdown value using text
 */
Cypress.Commands.add("selectByText", (loc, index, data) => {
  cy.get(loc)
    .eq(index)
    .then(($box) => {
      cy.get($box).select(data);
    });
});
