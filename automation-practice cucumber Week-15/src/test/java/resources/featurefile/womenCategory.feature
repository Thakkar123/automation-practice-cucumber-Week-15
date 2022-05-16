Feature: Women Category page Test

  @sanity @smoke @regression
  Scenario: verify user should navigate to women category page successfully
    When I am on homePage
    And I click on women tab
    Then I should navigate to women category page successfully

  @smoke @regression
  Scenario Outline: verify user should add product to the cart successfully
    When I am on homePage
    And I click on women tab
    And  I click on product "<Product>"
    And   I change quantity "<Quantity>"
    And   I select size "<Size>" from dropdown
    And   I click on colour "<Colour>"
    And   I click on 'Add to Cart' button
    Then  Product added to cart successfully
    And I close the pop up
    Examples:
      | Product                                | Quantity | Size | Colour |
      | Blouse                                 | 2        | M    | White  |
      | Printed Dress                          | 3        | L    | Orange |
      | Printed Chiffon Dress                  | 4        | S    | Green  |
      | Printed Summer Dress with Price $28.98 | 2        | M    | Blue   |