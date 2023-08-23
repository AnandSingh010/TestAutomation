/*
 * perform upload file functionality
 */
Cypress.Commands.add("upoadFile", (loc, fileName, mimetype) => {
  cy.fixture(fileName).then((fileContent) => {
    cy.get(loc).upload(
      { fileContent, fileName, mimeType: mimetype },
      { encoding: "utf-8" },
      { subjectType: "input" }
    );
  });
});
