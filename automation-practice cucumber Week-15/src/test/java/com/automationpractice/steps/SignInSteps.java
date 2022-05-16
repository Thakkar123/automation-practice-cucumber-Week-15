package com.automationpractice.steps;

import com.automationpractice.pages.HomePage;
import com.automationpractice.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SignInSteps {
    @Given("^I am on homePage$")
    public void iAmOnHomePage() {
    }

    @And("^I click on sign in link$")
    public void iClickOnSignInLink() {
        new HomePage().clickOnSignInLink();
    }

    @Then("^i should navigate to sign in page successfully$")
    public void iShouldNavigateToSignInPageSuccessfully() {
        String expectedMessage = "AUTHENTICATION";
        String actualMessage = new SignInPage().verifyAuthenticationMessage();
        Assert.assertEquals("sing in page not displayed",expectedMessage,actualMessage);
    }




    @And("^I click on sign in button$")
    public void iClickOnSignInButton() {
        new SignInPage().clickOnSignInButton();
    }


    @When("^I enter \"([^\"]*)\" in username field and \"([^\"]*)\" into password field$")
    public void iEnterInUsernameFieldAndIntoPasswordField(String userName, String password)  {
        new SignInPage().inputCredentials(userName,password);
    }

    @Then("^i should see error message \"([^\"]*)\"$")
    public void iShouldSeeErrorMessage(String errorMessage){
        new SignInPage().verifyErrorMessage(errorMessage);
    }


    @And("^I input username in username field \"([^\"]*)\"$")
    public void iInputUsernameInUsernameField(String email) {
       new SignInPage().inputEmailAddress(email);
    }

    @And("^I input password in password field \"([^\"]*)\"$")
    public void iInputPasswordInPasswordField(String password) {
        new SignInPage().inputPassword(password);

    }

    @Then("^I should be able to see sign out link is visible$")
    public void iShouldBeAbleToSeeSignOutLinkIsVisible() {
        String expectedMessage = "Sign out";
        String actualMessage = new SignInPage().verifySignOutLinkIsVisible();
        Assert.assertEquals("sign out link not visible",expectedMessage,actualMessage);
    }


    @And("^I click on sign out link$")
    public void iClickOnSignOutLink() {
        new SignInPage().clickOnSignOutLink();
    }

    @Then("^I should be log out successfully$")
    public void iShouldBeLogOutSuccessfully() {
        new SignInPage().verifySignInLinkVisible();
    }
}
