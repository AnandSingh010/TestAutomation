/*
 * perform file upload functionality for specific file extension
 */
Cypress.Commands.add("upload_file", (fileName, fileType = " ", selector) => {
  if ((fileType = "pdf")) {
    fileType = "application/pdf";
  } else if ((fileType = "rar")) {
    fileType = "application/x-rar-compressed";
  } else if ((fileType = "xls")) {
    fileType = "application/vnd.ms - excel";
  } else if ((fileType = "doc")) {
    fileType = "application/msword";
  } else if ((fileType = "docx")) {
    fileType = "application/msword";
  }
  return cy.get(selector).then((subject) => {
    cy.fixture(fileName, "base64")
      .then(Cypress.Blob.base64StringToBlob)
      .then((blob) => {
        const el = subject[0];
        const testFile = new File([blob], fileName, {
          type: fileType,
        });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(testFile);
        el.files = dataTransfer.files;
      });
  });
});
