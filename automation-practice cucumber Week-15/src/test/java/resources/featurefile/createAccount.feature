Feature: Create Account Page Test

  @sanity @smoke @regression
  Scenario: verify that user should create account successfully
    Given I am on homePage
    And I click on sign in link
    And I enter email address to create account "RameshPatel2500@gmail.com"
    And I click on create account button
    And I enter all personal information "Ramesh","Patel","Mr","Temp123"
    And I enter all address details "Ramesh","Patel","Buckingham Palace","London","California","52556","0125968698"
    And I click on register button
    Then I should be able to create my account successfully

