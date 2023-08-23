import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { login } from "../../../base/pageObjects/loginPage";
import { commandLineEnv } from "../../../../support/step_definitions/commandLineEnv";
const Utility = require("../../../../support/uitility");
const cliurl = new commandLineEnv().Url();
import { resetPage } from "../../../base/pageObjects/resetPage";

Given("I am on the login page", () => {
  cy.visit(Utility.getBaseUrl("staging"));
  // cy.visit(cliurl)   // If you want to run test on diffrent environment from CLI then uncomment line 11 and  commnet above line at 10
});

When(/^User clicks on "(.*)"$/, (value) => {
  if (value == "Forgotten password Link") {
    resetPage.clickOnForgotPasswordLink();
  }
});

And(/^User enter email "(.*)" under the email input field$/, (value) => {
  if (value == "Email") {
    resetPage.enterEmail();
  }
});

And(/^User click on "(.*)" button under login page$/, (value) => {
  if (value == "Send") {
    resetPage.clickOnSendButton();
  } else if (value == "Back") {
    resetPage.clickOnBackButton();
  }
});

And(/^User login to the web application using valid credentials$/, () => {
  cy.loginThroughValidCreds();
});

And(
  /^User click on "(.*)" from the navigation menu and click on emails$/,
  (value) => {
    if (value == "Communication option") {
      resetPage.ClickOnCommunicationOption();
      resetPage.ClickOnCommunicationEmailOption();
    }
  }
);

And(/^User clicks on "(.*)" in email communication$/, (value) => {
  if (value == "Sent Option") {
    resetPage.ClickOnEmailSentOption();
  }
});

And(
  /^User clicks on the latest link under the actions column and reset the new password$/,
  () => {
    resetPage.latestLink();
  }
);

And(/^User Visit new url in window$/, () => {
  resetPage.getValueAndVisit();
});

And(/^User verify new window opened$/, () => {
  resetPage.verifyNewWindow();
  resetPage.clickOnNewpassword();
});

And(/^User enters new Password$/, () => {
  resetPage.enterNewpassword();
  resetPage.confirmNewpassword();
  resetPage.clickOnNewpasswordButton();
});

Then(
  /^Verify error message is displaying that password can not be less than 6 characters$/,
  () => {
    resetPage.verifyErrorMessage();
  }
);
