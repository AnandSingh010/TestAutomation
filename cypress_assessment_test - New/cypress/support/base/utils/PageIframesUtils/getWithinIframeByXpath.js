/*
 * this will get into the iframe by xpath
 */
Cypress.Commands.add("getWithinIframeByXpath", (iframe, targetElement) =>
  cy.xpath(iframe).iframeLoaded().its("document").getInDocument(targetElement)
);
