$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Page Test",
  "description": "",
  "id": "create-account-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8075507300,
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
  "name": "I enter email address to create account \"RameshPatel2500@gmail.com\"",
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
  "duration": 81443500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1614274800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RameshPatel2500@gmail.com",
      "offset": 41
    }
  ],
  "location": "CreateAccountSteps.iEnterEmailAddressToCreateAccount(String)"
});
formatter.result({
  "duration": 108076500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iClickOnCreateAccountButton()"
});
formatter.result({
  "duration": 79428400,
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
  "duration": 2048450200,
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
  "duration": 536886000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 2482954500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iShouldBeAbleToCreateMyAccountSuccessfully()"
});
formatter.result({
  "duration": 30919200,
  "status": "passed"
});
formatter.after({
  "duration": 786596300,
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
  "duration": 8576171900,
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
  "duration": 22400,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1881603200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iShouldNavigateToSignInPageSuccessfully()"
});
formatter.result({
  "duration": 36615000,
  "status": "passed"
});
formatter.after({
  "duration": 683741300,
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
  "duration": 6661620400,
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
  "duration": 17300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1305571100,
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
  "duration": 172178700,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1113777100,
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
  "duration": 26843400,
  "status": "passed"
});
formatter.after({
  "duration": 648810800,
  "status": "passed"
});
formatter.before({
  "duration": 6226004800,
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
  "duration": 36500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2731228000,
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
  "duration": 168792400,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1105530700,
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
  "duration": 24968100,
  "status": "passed"
});
formatter.after({
  "duration": 660061900,
  "status": "passed"
});
formatter.before({
  "duration": 7355212900,
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
  "duration": 20800,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4833235400,
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
  "duration": 168838600,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1851120400,
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
  "duration": 31383200,
  "status": "passed"
});
formatter.after({
  "duration": 679095000,
  "status": "passed"
});
formatter.before({
  "duration": 5654736800,
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
  "duration": 27900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1526804400,
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
  "duration": 88244100,
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
  "duration": 85067300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 21242415700,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iShouldBeAbleToSeeSignOutLinkIsVisible()"
});
formatter.result({
  "duration": 49711900,
  "status": "passed"
});
formatter.after({
  "duration": 676288800,
  "status": "passed"
});
formatter.before({
  "duration": 6606913300,
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
  "duration": 22000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2711030100,
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
  "duration": 79518200,
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
  "duration": 77840900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 23220973800,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignOutLink()"
});
formatter.result({
  "duration": 35472473900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iShouldBeLogOutSuccessfully()"
});
formatter.result({
  "duration": 53774000,
  "status": "passed"
});
formatter.after({
  "duration": 685038100,
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
  "duration": 7850805900,
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
  "duration": 43600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 5420642600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iShouldNavigateToWomenCategoryPageSuccessfully()"
});
formatter.result({
  "duration": 34328200,
  "status": "passed"
});
formatter.after({
  "duration": 665734200,
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
  "duration": 8831534100,
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
  "duration": 36900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 2456452800,
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
  "duration": 1896100800,
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
  "duration": 65103700,
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
  "duration": 87757500,
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
  "duration": 70895200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 76897400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 36444100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iCloseThePopUp()"
});
formatter.result({
  "duration": 921535100,
  "status": "passed"
});
formatter.after({
  "duration": 660396600,
  "status": "passed"
});
formatter.before({
  "duration": 8239022500,
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
  "duration": 24900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 2299781200,
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
  "duration": 2183434100,
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
  "duration": 54483500,
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
  "duration": 71971000,
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
  "duration": 71735300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 63028200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 28736600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iCloseThePopUp()"
});
formatter.result({
  "duration": 778058100,
  "status": "passed"
});
formatter.after({
  "duration": 671414400,
  "status": "passed"
});
formatter.before({
  "duration": 10265664300,
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
  "duration": 16700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 2544047600,
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
  "duration": 1825618600,
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
  "duration": 55132800,
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
  "duration": 38670800,
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
  "duration": 61631800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 63575200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 21784900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iCloseThePopUp()"
});
formatter.result({
  "duration": 1356275200,
  "status": "passed"
});
formatter.after({
  "duration": 673537300,
  "status": "passed"
});
formatter.before({
  "duration": 7766444500,
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
  "duration": 40900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 4060809500,
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
  "duration": 4048410300,
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
  "duration": 85466400,
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
  "duration": 94686900,
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
  "duration": 87468900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 124328100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 34214900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iCloseThePopUp()"
});
formatter.result({
  "duration": 2485315200,
  "status": "passed"
});
formatter.after({
  "duration": 660625700,
  "status": "passed"
});
});