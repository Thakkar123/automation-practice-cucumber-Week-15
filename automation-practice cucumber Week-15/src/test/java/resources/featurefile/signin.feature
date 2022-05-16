Feature: Sign in Test
  As user i want to sign in to automation practice website

  @sanity @smoke @regression
  Scenario: User should navigate to sign in page successfully
    Given I am on homePage
    And I click on sign in link
    Then i should navigate to sign in page successfully

  @smoke @regression
  Scenario Outline: verify the error messages with invalid credentials
    Given I am on homePage
    And I click on sign in link
    When I enter "<Username>" in username field and "<Password>" into password field
    And I click on sign in button
    Then i should see error message "<errorMessage>"

    Examples:
      | username       | password | errorMessage               |
      | ""             | 123456   | An email address required. |
      | abcd@gmail.com | ""       | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |

  @smoke @regression
  Scenario: verify that user should login successfully with valid credentials
    Given I am on homePage
    And I click on sign in link
    And I input username in username field "RameshPatel123@gmail.com"
    And I input password in password field "Temp123"
    And I click on sign in button
    Then I should be able to see sign out link is visible

  @regression
  Scenario: verify that user should logout successfully
    Given I am on homePage
    And I click on sign in link
    And I input username in username field "RameshPatel123@gmail.com"
    And I input password in password field "Temp123"
    And I click on sign in button
    And I click on sign out link
    Then I should be log out successfully
