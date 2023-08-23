/*
 * remove any target attribute on an element
 */
Cypress.Commands.add("removeAttrOfElement", (loc, index, attr) => {
  cy.get(loc).eq(index).invoke("removeAttr", attr);
});
