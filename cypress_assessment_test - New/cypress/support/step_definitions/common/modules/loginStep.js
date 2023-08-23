import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { login } from "../../../base/pageObjects/loginPage";
import { commandLineEnv } from "../../../../support/step_definitions/commandLineEnv";
const Utility = require("../../../../support/uitility");
const cliurl = new commandLineEnv().Url();

Given("I am on the login page", () => {
  cy.visit(Utility.getBaseUrl("staging"));
  // cy.visit(cliurl)   // If you want to run test on diffrent environment from CLI then uncomment line 11 and  commnet above line at 10
});
