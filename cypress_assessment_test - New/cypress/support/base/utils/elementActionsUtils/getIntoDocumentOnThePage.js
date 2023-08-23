/*
 * this will get into the documents on the page
 */
Cypress.Commands.add(
  "getInDocument",
  { prevSubject: "document" },
  (document, selector) => Cypress.$(selector, document)
);
