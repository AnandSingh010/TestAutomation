/*
 * upload file of any file extensions
 */
Cypress.Commands.add("uploadFileFunction", (loc, fileName, mimetype) => {
  cy.fixture(fileName, "binary")
    .then(Cypress.Blob.binaryStringToBlob)
    .then((fileContent) => {
      cy.get(loc).attachFile({
        fileContent,
        filePath: fileName,
        encoding: "utf-8",
      });
    });
});
