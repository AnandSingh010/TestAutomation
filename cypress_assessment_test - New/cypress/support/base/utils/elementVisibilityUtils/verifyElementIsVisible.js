/*
 * element visible
 */
Cypress.Commands.add("elementVisible", (ele) => {
  cy.get(ele).should("be.visible");
});
