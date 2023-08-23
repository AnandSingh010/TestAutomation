Feature: Reset Pasword

  Scenario: Verify user is able to reset the password
    Given I am on the login page
    When User clicks on "Forgotten password Link"
    And User enter email "Email" under the email input field
    And User click on "Send" button under login page
    And User click on "Back" button under login page
    And User login to the web application using valid credentials
    And User click on "Communication option" from the navigation menu and click on emails
    And User clicks on "Sent Option" in email communication
    And User clicks on the latest link under the actions column and reset the new password
    And User Visit new url in window
    And User verify new window opened
    And User enters new Password
    Then Verify error message is displaying that password can not be less than 6 characters



