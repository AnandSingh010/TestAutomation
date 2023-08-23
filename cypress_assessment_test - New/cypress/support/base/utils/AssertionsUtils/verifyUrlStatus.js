/*
 * verify url status as 200 OK
 */
Cypress.Commands.add("verifyHrefStatus", (loc, index, data, attribute) => {
  cy.get(loc)
    .eq(index)
    .invoke("attr", attribute)
    .and("include", data)
    .then((href) => {
      cy.log(href);
      cy.request(href).then((resp) => {
        expect(resp.status).to.eq(200);
      });
    });
});
