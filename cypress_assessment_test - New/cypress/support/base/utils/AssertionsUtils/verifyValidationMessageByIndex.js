/*
 * here verify the validation message on page using index value
 */
Cypress.Commands.add("verifyValidationMessageByIndex", (loc, data, index) => {
  cy.get(loc).eq(index).invoke("text").should("contain", data);
});
