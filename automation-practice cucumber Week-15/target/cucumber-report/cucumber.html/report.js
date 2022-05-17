$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Page Test",
  "description": "",
  "id": "create-account-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13370660400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify that user should create account successfully",
  "description": "",
  "id": "create-account-page-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter email address to create account \"RameshPatel3400@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter all personal information \"Ramesh\",\"Patel\",\"Mr\",\"Temp123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter all address details \"Ramesh\",\"Patel\",\"Buckingham Palace\",\"London\",\"California\",\"52556\",\"0125968698\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should be able to create my account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 236336000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 7954393100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RameshPatel3400@gmail.com",
      "offset": 41
    }
  ],
  "location": "CreateAccountSteps.iEnterEmailAddressToCreateAccount(String)"
});
formatter.result({
  "duration": 143766000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iClickOnCreateAccountButton()"
});
formatter.result({
  "duration": 101344100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ramesh",
      "offset": 34
    },
    {
      "val": "Patel",
      "offset": 43
    },
    {
      "val": "Mr",
      "offset": 51
    },
    {
      "val": "Temp123",
      "offset": 56
    }
  ],
  "location": "CreateAccountSteps.iEnterAllPersonalInformation(String,String,String,String)"
});
formatter.result({
  "duration": 9617168700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ramesh",
      "offset": 29
    },
    {
      "val": "Patel",
      "offset": 38
    },
    {
      "val": "Buckingham Palace",
      "offset": 46
    },
    {
      "val": "London",
      "offset": 66
    },
    {
      "val": "California",
      "offset": 75
    },
    {
      "val": "52556",
      "offset": 88
    },
    {
      "val": "0125968698",
      "offset": 96
    }
  ],
  "location": "CreateAccountSteps.iEnterAllAddressDetails(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 827748700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 12843466900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iShouldBeAbleToCreateMyAccountSuccessfully()"
});
formatter.result({
  "duration": 50151900,
  "status": "passed"
});
formatter.after({
  "duration": 776157700,
  "status": "passed"
});
formatter.uri("signin.feature");
formatter.feature({
  "line": 1,
  "name": "Sign in Test",
  "description": "As user i want to sign in to automation practice website",
  "id": "sign-in-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8988705200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to sign in page successfully",
  "description": "",
  "id": "sign-in-test;user-should-navigate-to-sign-in-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "i should navigate to sign in page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 30800,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 7857441700,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iShouldNavigateToSignInPageSuccessfully()"
});
formatter.result({
  "duration": 54219000,
  "status": "passed"
});
formatter.after({
  "duration": 689684200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "verify the error messages with invalid credentials",
  "description": "",
  "id": "sign-in-test;verify-the-error-messages-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"\u003cUsername\u003e\" in username field and \"\u003cPassword\u003e\" into password field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "i should see error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "sign-in-test;verify-the-error-messages-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 19,
      "id": "sign-in-test;verify-the-error-messages-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "\"\"",
        "123456",
        "An email address required."
      ],
      "line": 20,
      "id": "sign-in-test;verify-the-error-messages-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "\"\"",
        "Invalid email address."
      ],
      "line": 21,
      "id": "sign-in-test;verify-the-error-messages-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 22,
      "id": "sign-in-test;verify-the-error-messages-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8937244800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verify the error messages with invalid credentials",
  "description": "",
  "id": "sign-in-test;verify-the-error-messages-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"\u003cUsername\u003e\" in username field and \"\u003cPassword\u003e\" into password field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "i should see error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 37900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 10067117200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cUsername\u003e",
      "offset": 9
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 44
    }
  ],
  "location": "SignInSteps.iEnterInUsernameFieldAndIntoPasswordField(String,String)"
});
formatter.result({
  "duration": 246689000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 8712599200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 28
    }
  ],
  "location": "SignInSteps.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 47200100,
  "status": "passed"
});
formatter.after({
  "duration": 725846700,
  "status": "passed"
});
formatter.before({
  "duration": 9600791500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify the error messages with invalid credentials",
  "description": "",
  "id": "sign-in-test;verify-the-error-messages-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"\u003cUsername\u003e\" in username field and \"\u003cPassword\u003e\" into password field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "i should see error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 36000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 13424576100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cUsername\u003e",
      "offset": 9
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 44
    }
  ],
  "location": "SignInSteps.iEnterInUsernameFieldAndIntoPasswordField(String,String)"
});
formatter.result({
  "duration": 228631200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 5462000800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 28
    }
  ],
  "location": "SignInSteps.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 42853300,
  "status": "passed"
});
formatter.after({
  "duration": 692302500,
  "status": "passed"
});
formatter.before({
  "duration": 5052189700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify the error messages with invalid credentials",
  "description": "",
  "id": "sign-in-test;verify-the-error-messages-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"\u003cUsername\u003e\" in username field and \"\u003cPassword\u003e\" into password field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "i should see error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 33200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2187702700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cUsername\u003e",
      "offset": 9
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 44
    }
  ],
  "location": "SignInSteps.iEnterInUsernameFieldAndIntoPasswordField(String,String)"
});
formatter.result({
  "duration": 170324300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2377511500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 28
    }
  ],
  "location": "SignInSteps.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 42254100,
  "status": "passed"
});
formatter.after({
  "duration": 726266000,
  "status": "passed"
});
formatter.before({
  "duration": 7039828400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verify that user should login successfully with valid credentials",
  "description": "",
  "id": "sign-in-test;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    },
    {
      "line": 24,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I input username in username field \"RameshPatel123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I input password in password field \"Temp123\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should be able to see sign out link is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 28200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 6907990100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RameshPatel123@gmail.com",
      "offset": 36
    }
  ],
  "location": "SignInSteps.iInputUsernameInUsernameField(String)"
});
formatter.result({
  "duration": 126560700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temp123",
      "offset": 36
    }
  ],
  "location": "SignInSteps.iInputPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 112572700,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 28182793600,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iShouldBeAbleToSeeSignOutLinkIsVisible()"
});
formatter.result({
  "duration": 49563600,
  "status": "passed"
});
formatter.after({
  "duration": 727094500,
  "status": "passed"
});
formatter.before({
  "duration": 5527540900,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "verify that user should logout successfully",
  "description": "",
  "id": "sign-in-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I input username in username field \"RameshPatel123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I input password in password field \"Temp123\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on sign out link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should be log out successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1692003300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RameshPatel123@gmail.com",
      "offset": 36
    }
  ],
  "location": "SignInSteps.iInputUsernameInUsernameField(String)"
});
formatter.result({
  "duration": 95252800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temp123",
      "offset": 36
    }
  ],
  "location": "SignInSteps.iInputPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 85485000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 23660393900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignOutLink()"
});
formatter.result({
  "duration": 23736288400,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iShouldBeLogOutSuccessfully()"
});
formatter.result({
  "duration": 93718600,
  "status": "passed"
});
formatter.after({
  "duration": 774295200,
  "status": "passed"
});
formatter.uri("womenCategory.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category page Test",
  "description": "",
  "id": "women-category-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5520192000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify user should navigate to women category page successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-navigate-to-women-category-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homePage",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on women tab",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to women category page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 56500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1900093700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iShouldNavigateToWomenCategoryPageSuccessfully()"
});
formatter.result({
  "duration": 35508700,
  "status": "passed"
});
formatter.after({
  "duration": 682605700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homePage",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on women tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on product \"\u003cProduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change quantity \"\u003cQuantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"\u003cSize\u003e\" from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on colour \"\u003cColour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I close the pop up",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "Product",
        "Quantity",
        "Size",
        "Colour"
      ],
      "line": 21,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 22,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 23,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 24,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 25,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5371318200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homePage",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on women tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"M\" from dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I close the pop up",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 41800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 2318659600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 20
    }
  ],
  "location": "WomenCategorySteps.iClickOnProduct(String)"
});
formatter.result({
  "duration": 2018373000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 130665500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategorySteps.iSelectSizeFromDropdown(String)"
});
formatter.result({
  "duration": 118390200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.iClickOnColour(String)"
});
formatter.result({
  "duration": 103663100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 116915900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 48770000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iCloseThePopUp()"
});
formatter.result({
  "duration": 660092100,
  "status": "passed"
});
formatter.after({
  "duration": 747166800,
  "status": "passed"
});
formatter.before({
  "duration": 4879570100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homePage",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on women tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"L\" from dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I close the pop up",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 30400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 7692792300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategorySteps.iClickOnProduct(String)"
});
formatter.result({
  "duration": 9906334200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 97579300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "WomenCategorySteps.iSelectSizeFromDropdown(String)"
});
formatter.result({
  "duration": 113431000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.iClickOnColour(String)"
});
formatter.result({
  "duration": 102203000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 88143800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 44413300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iCloseThePopUp()"
});
formatter.result({
  "duration": 4691058200,
  "status": "passed"
});
formatter.after({
  "duration": 765765200,
  "status": "passed"
});
formatter.before({
  "duration": 7850510600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homePage",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on women tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"S\" from dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I close the pop up",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 23500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 7243612300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategorySteps.iClickOnProduct(String)"
});
formatter.result({
  "duration": 2250947800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 101327900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 15
    }
  ],
  "location": "WomenCategorySteps.iSelectSizeFromDropdown(String)"
});
formatter.result({
  "duration": 72847100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.iClickOnColour(String)"
});
formatter.result({
  "duration": 98269800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 138257100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 41790100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iCloseThePopUp()"
});
formatter.result({
  "duration": 1418141100,
  "status": "passed"
});
formatter.after({
  "duration": 717204800,
  "status": "passed"
});
formatter.before({
  "duration": 11610962000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homePage",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on women tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on product \"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"M\" from dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I close the pop up",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 38100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 2587726700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 20
    }
  ],
  "location": "WomenCategorySteps.iClickOnProduct(String)"
});
formatter.result({
  "duration": 7327527100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 97111000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategorySteps.iSelectSizeFromDropdown(String)"
});
formatter.result({
  "duration": 136521300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.iClickOnColour(String)"
});
formatter.result({
  "duration": 111705300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 114694900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 39646800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iCloseThePopUp()"
});
formatter.result({
  "duration": 4554383500,
  "status": "passed"
});
formatter.after({
  "duration": 766373700,
  "status": "passed"
});
});