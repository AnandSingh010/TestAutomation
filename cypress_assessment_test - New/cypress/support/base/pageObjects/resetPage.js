const creds = require("../../../fixtures/creds.json");
import { userData } from "../../step_definitions/common/userData";

export const resetPage = {
  enterEmail: "input#UserEmail",
  password_Field: "input#UserPassword",
  signIn: "#UserLoginForm [type='submit']",
  forgotPassword: "a#forget-password",
  enterNewEmail: "input#forgottenEmail",
  sendButton: ".big-btn.full-btn.send-btn.theme-main-button",
  backButton:
    ".forget-form-success > .big-btn.forget-back-button.outline-btn.text-primary.theme-second-button",
  communicationOption: ".page-sidebar-menu > li:nth-of-type(7) > a",
  communicationEmails: "li:nth-of-type(7) > .sub-menu > li:nth-of-type(5) > a",
  sentEmails: ":nth-child(2) > .open > .sub-menu > :nth-child(4) > a > .title",
  clickOnLatestPasswordLink: "tbody > :nth-child(1) > :nth-child(1)",
  setupNewPassword: "div > a",
  enterNewPassword: "#UserPassword",
  setNewPassword: "#UserPasswordConfirm",
  setNewpasswordButton: ".theme-main-button",
  visitUrl: ".browser-popup",
  message: "mdi mdi-alert mdi-small",

  clickOnForgotPasswordLink() {
    cy.get(resetPage.forgotPassword).click();
  },

  enterEmail() {
    cy.get(resetPage.enterNewEmail).type(userData.email, { force: true });
  },

  clickOnSendButton() {
    cy.get(resetPage.sendButton).as("send");
    cy.get("@send").should("be.visible").click();
  },

  clickOnBackButton() {
    cy.get(resetPage.backButton).should("be.visible").click();
  },

  ClickOnCommunicationOption() {
    cy.get(resetPage.communicationOption).should("be.visible").click();
  },

  ClickOnCommunicationEmailOption() {
    cy.get(resetPage.communicationEmails).should("be.visible").click();
  },

  ClickOnEmailSentOption() {
    cy.get(resetPage.sentEmails)
      .scrollIntoView()
      .should("have.text", "Sent emails")
      .click();
  },

  latestLink() {
    cy.get(resetPage.clickOnLatestPasswordLink).then(($text) => {
      var text = $text.text();
      cy.log(text);
      cy.get(resetPage.clickOnLatestPasswordLink)
        .nextAll()
        .then(($text) => {
          var text = $text.text();
          cy.log(text);
          cy.contains("HTML");
        });
    });
  },

  getValueAndVisit() {
    cy.get(resetPage.visitUrl)
      .invoke("attr", "href")
      .then((selectorURL) => {
        cy.url().then((url) => {
          const NewURL = new URL(url).host;
          cy.log(NewURL + selectorURL);
          cy.visit("https://" + NewURL + selectorURL);
        });
      });
  },

  verifyNewWindow() {
    cy.contains("Request for password recovery").should("be.visible");
  },

  clickOnNewpassword() {
    cy.get(resetPage.setupNewPassword).click();
  },

  enterNewpassword() {
    cy.get(resetPage.enterNewPassword).type(userData.pass);
  },

  confirmNewpassword() {
    cy.get(resetPage.setNewPassword).type(userData.pass);
  },

  clickOnNewpasswordButton() {
    cy.get(resetPage.setNewpasswordButton).click();
  },

  verifyErrorMessage() {
    cy.contains(
      "Could not save the password, try to repeat the action."
    ).should("be.visible");
  },
};
