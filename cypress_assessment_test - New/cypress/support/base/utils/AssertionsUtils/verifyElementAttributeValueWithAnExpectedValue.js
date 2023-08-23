/*
 * verify available value of an attributes with an expected value
 */
Cypress.Commands.add("verifyElementAttrValueWithExpect", (loc, atr, value1) => {
  cy.get(loc)
    .invoke("attr", atr)
    .then((value) => {
      expect(value).eq(value1);
    });
});
