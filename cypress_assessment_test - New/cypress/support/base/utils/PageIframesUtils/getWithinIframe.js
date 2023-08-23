/*
 * this will get into the iframe on the page
 */
Cypress.Commands.add("getWithinIframe", (iframe, targetElement) =>
  cy
    .get(iframe, { timeout: 20000 })
    .iframeLoaded()
    .its("document")
    .getInDocument(targetElement)
);
