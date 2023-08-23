/*
 * this will verify the page url
 */
Cypress.Commands.add("verifyUrl", (data, ...flag) => {
  if (flag.length > 0) cy.url().should("include", data);
  else cy.url().should("eq", data);
});

/*
 * this will verify the page Url
 */
Cypress.Commands.add("verifyURL", (data) => {
  cy.url().should("contain", data);
});
