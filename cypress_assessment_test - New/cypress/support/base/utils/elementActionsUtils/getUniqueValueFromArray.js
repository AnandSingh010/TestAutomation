/*
 * fetch a unique value from array
 */
Cypress.Commands.add("getUniqueValueArray", (givenArray, uniqueValueArray) => {
  cy.wrap(givenArray).each((element) => {
    if (!uniqueValueArray.includes(element)) {
      uniqueValueArray.push(element);
    }
  });
});
