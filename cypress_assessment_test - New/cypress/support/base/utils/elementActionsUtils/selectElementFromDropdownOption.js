/*
 * select element from dropdown option
 */
Cypress.Commands.add("selectOptionFromSelectElement", (loc, data) => {
  cy.get(loc).then(($select) => {
    const opt = $select.find("option").eq(data);
    cy.log(opt.text());
    cy.wrap($select).select(opt.val());
  });
});
