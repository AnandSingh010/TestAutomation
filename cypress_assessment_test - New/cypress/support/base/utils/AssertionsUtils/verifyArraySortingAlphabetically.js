/*
 * verify the sorting performed alphabetically
 */
Cypress.Commands.add("verifyArraySortingAlphabetically", (loc) => {
  var strings = [];
  cy.get(loc).each((elements) => {
    strings.push(elements.text());
  });
  cy.wrap(strings).should("to.deep.eq", strings.sort()); // you may need deep equal here instead
});
