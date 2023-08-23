Feature: Add company

  Scenario: Verify user is able to add the company

    Given I am on the login page
    And User login to the web application using valid credentials
    And User click on "Company option" from the navigation menu
    And User selects "Communication language" from the dropdown
    And User selects "Invoice reminder frequency" from the dropdown
    And User selects "Default invoice address" from the dropdown
    And User selects "Invoice address Country" from the dropdown
    And User enters text in "Invoice Title" new comapny page
    And User enters text in "Company Name" new comapny page
    And User enters text in "Company Address" new comapny page
    And User enters text in "City" new comapny page
    And User enters number in "Registartion Number" new comapny page
    And User enters number in "VAT" new comapny page
    And User enters number in "Bank Account Number" new comapny page
    And User enters number in "Bank Code" new comapny page
    And User enters number in "Postal Code" new comapny page
    And User enters text in "Invoice Email Copy" new comapny page
    And User enters text in "Invoice Email" new comapny page
    And User clicks on Add company button
    Then Verify Error message is showing on the page
