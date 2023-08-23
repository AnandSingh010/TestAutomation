import "cypress-wait-until";
import "./commands";
require("cy-verify-downloads").addCustomCommand();
import { creds } from "../fixtures/creds.json";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })

Cypress.Commands.add("loginThroughValidCreds", (user_email, password) => {
  cy.fixture("creds").then((creds) => {
    cy.get("input#UserEmail").type(creds.user_email);
    cy.get("input#UserPassword").type(creds.password);
    cy.get("#UserLoginForm [type='submit']").click();
  });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

Cypress.Commands.add("selectRandomValueFromDropdown", (dropdownSelector) => {
  cy.get(dropdownSelector).then((dropdown) => {
    const options = dropdown.find("option");
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomValue = options.eq(randomIndex).val();
    cy.wrap(dropdown).select(randomValue);
  });
});

Cypress.Commands.add("generateRandomText", (length) => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomText = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters.charAt(randomIndex);
  }

  return randomText;
});

Cypress.Commands.add("generateRandomNumber", (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
});
