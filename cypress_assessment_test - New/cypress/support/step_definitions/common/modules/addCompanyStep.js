import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { login } from "../../../base/pageObjects/loginPage";
import { commandLineEnv } from "../../../../support/step_definitions/commandLineEnv";
const Utility = require("../../../../support/uitility");
const cliurl = new commandLineEnv().Url();
import { addComapanyPage } from "../../../base/pageObjects/addComapanyPage";

Given("I am on the login page", () => {
  cy.visit(Utility.getBaseUrl("staging"));
  // cy.visit(cliurl)   // If you want to run test on diffrent environment from CLI then uncomment line 11 and  commnet above line at 10
});

And(/^User click on "(.*)" from the navigation menu$/, (value) => {
  if (value == "Company option") {
    addComapanyPage.clickOnComapny();
    addComapanyPage.clickOnNewComapny();
  }
});

And(/^User selects "(.*)" from the dropdown$/, (value) => {
  if (value == "Country") {
    addComapanyPage.selectCountry();
  } else if (value == "Country") {
    addComapanyPage.selectCountry();
  }
  // else if(value == 'Status'){
  //     addComapanyPage.selectStatus()
  // }
  else if (value == "Communication language") {
    addComapanyPage.selectCommunicationLanguage();
  } else if (value == "Invoice reminder frequency") {
    addComapanyPage.selectInvoiceReminder();
  } else if (value == "Default invoice address") {
    addComapanyPage.selectDefaultInvoice();
  } else if (value == "Invoice address Country") {
    addComapanyPage.selectinvoiceAddressCompany();
  }
});

And(/^User enters text in "(.*)" new comapny page$/, (value) => {
  if (value == "Invoice Title") {
    addComapanyPage.enterInvoiceTitle();
  } else if (value == "Company Name") {
    addComapanyPage.entercomapnyName();
  } else if (value == "Company Address") {
    addComapanyPage.enterCompanyAddress();
  } else if (value == "City") {
    addComapanyPage.enterCity();
  } else if (value == "Invoice Email Copy") {
    addComapanyPage.enterInvoiceEmail();
  } else if (value == "Invoice Email") {
    addComapanyPage.enterInvoiceMail();
  }
});

And(/^User enters number in "(.*)" new comapny page$/, (value) => {
  if (value == "Registartion Number") {
    addComapanyPage.enterRegistartionNumber();
  } else if (value == "VAT") {
    addComapanyPage.enterVATNumber();
  } else if (value == "VAT") {
    addComapanyPage.enterVATNumber();
  } else if (value == "Bank Account Number") {
    addComapanyPage.enterBankAccountNumber();
  } else if (value == "Bank Code") {
    addComapanyPage.enterBankCode();
  } else if (value == "Postal Code") {
    addComapanyPage.enterPostalCode();
  }
});

And(/^User clicks on Add company button$/, () => {
  addComapanyPage.clickonAddCompanyButton();
});

Then(/^Verify Error message is showing on the page$/, () => {
  addComapanyPage.verifyErrorMessage();
});
