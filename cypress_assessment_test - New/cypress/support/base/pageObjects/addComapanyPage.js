import { userData } from "../../step_definitions/common/userData";
import { resetPage } from "./resetPage";

export const addComapanyPage = {
  comapanyTab: ".page-sidebar-menu > li:nth-of-type(6) > a > .title",
  newComapnyButton: "li:nth-of-type(6) > .sub-menu > .menu-action-button > a",
  statusDropdown: "#CompanyStatus",
  countryDropdown: "#CompanyCountry",
  communicationLanguageDropdown: "#CompanyLanguageId",
  invoiceReminderDropdown: "#CompanyPayRating",
  defaultInvoiceDropdown: "#CompanyDefaultAgencyInvoiceAddress",
  userRoleDropdown: "#RolesUserRoleId",
  invoiceAddressCompany: "#CompanyContactCountry",
  CompanyInvoicetitleTextField: "#CompanyInvoiceName",
  comapnayAddressTextArea: "#CompanyAddress",
  companyNameTextField: "#CompanyName",
  companycityTextArea: "#CompanyCity",
  addComapnyButton: ".btn.btn-success",
  invoice_EmailField: "#CompanyEmailInvoiceCopy",
  invoiceMail: "#CompanyEmailInvoice",

  clickOnComapny() {
    cy.get(addComapanyPage.comapanyTab).click();
  },

  clickOnNewComapny() {
    cy.get(addComapanyPage.newComapnyButton).click();
  },

  selectCountry() {
    cy.selectRandomValueFromDropdown(addComapanyPage.country);
  },

  selectStatus() {
    cy.selectRandomValueFromDropdown(addComapanyPage.statusDropdown);
  },

  selectCommunicationLanguage() {
    cy.selectRandomValueFromDropdown(
      addComapanyPage.communicationLanguageDropdown
    );
  },
  selectInvoiceReminder() {
    cy.selectRandomValueFromDropdown(addComapanyPage.invoiceReminderDropdown);
  },
  selectDefaultInvoice() {
    cy.selectRandomValueFromDropdown(addComapanyPage.defaultInvoiceDropdown);
  },
  selectUserRole() {
    cy.selectRandomValueFromDropdown(addComapanyPage.userRole);
  },
  selectinvoiceAddressCompany() {
    cy.selectRandomValueFromDropdown(addComapanyPage.invoiceAddressCompany);
  },
  entercomapnyName() {
    cy.generateRandomText(10).then((randomText) => {
      cy.get(addComapanyPage.companyNameTextField).type(randomText);
    });
  },
  enterInvoiceTitle() {
    cy.generateRandomText(10).then((randomText) => {
      cy.get(addComapanyPage.CompanyInvoicetitleTextField).type(randomText);
    });
  },
  enterCompanyAddress() {
    cy.generateRandomText(20).then((randomText) => {
      cy.get(addComapanyPage.comapnayAddressTextArea).type(randomText);
    });
  },
  enterCity() {
    cy.generateRandomText(8).then((randomText) => {
      cy.get(addComapanyPage.companycityTextArea).type(randomText);
    });
  },
  enterInvoiceEmail() {
    cy.generateRandomText(8).then((randomText) => {
      cy.get(addComapanyPage.invoice_EmailField).type(
        randomText + userData.invoice_email
      );
    });
  },
  enterInvoiceMail() {
    cy.generateRandomText(8).then((randomText) => {
      cy.get(addComapanyPage.invoiceMail).type(
        randomText + userData.invoice_email
      );
    });
  },
  clickonAddCompanyButton() {
    cy.get(addComapanyPage.addComapnyButton).should("be.visible").click();
  },
  enterRegistartionNumber() {
    cy.get("input#CompanyIco").type(userData.reg_no);
  },
  enterVATNumber() {
    cy.get("input#CompanyDic").type(userData.vat);
  },
  enterBankAccountNumber() {
    cy.get("input#CompanyBankAccount").type(userData.bankAccountNo);
  },
  enterBankCode() {
    cy.get("input#CompanyBankCode").type(userData.bankAccountNo);
  },
  enterPostalCode() {
    cy.get("input#CompanyZip").type(userData.postal);
  },
  verifyErrorMessage() {
    cy.contains("Company could not have been saved.").should("be.visible");
  },
};
