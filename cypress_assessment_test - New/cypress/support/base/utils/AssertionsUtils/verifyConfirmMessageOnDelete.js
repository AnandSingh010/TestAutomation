/*
 * verify deletion confirmation message using text data
 */
Cypress.Commands.add("verifyConfirmMessageOnDelete", (loc, msg) => {
  cy.get(loc.deleteLearningUserCollectionButton)
    .invoke("attr", "data-confirm")
    .should("eq", msg);
});
