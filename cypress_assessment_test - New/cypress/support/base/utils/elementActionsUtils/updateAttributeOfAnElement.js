/*
 * update any target attribute on an element
 */
Cypress.Commands.add("updateAttrOfElement", (loc, index, attr, value) => {
  cy.get(loc).eq(index).invoke("attr", attr, value);
});
