package com.automationpractice.steps;

import com.automationpractice.pages.CreateAccountPage;
import com.automationpractice.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class CreateAccountSteps {
    @And("^I enter email address to create account \"([^\"]*)\"$")
    public void iEnterEmailAddressToCreateAccount(String email) {
        new SignInPage().enterEmailAddressToCreateAccount(email);

    }

    @And("^I click on create account button$")
    public void iClickOnCreateAccountButton() {
        new SignInPage().clickOnCreateAccountButton();
    }


    @And("^I enter all personal information \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void iEnterAllPersonalInformation(String name, String lastname, String title, String password)  {
        new CreateAccountPage().enterPersonalInformation(name,lastname,title,password);

    }

    @And("^I enter all address details \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void iEnterAllAddressDetails(String name, String lastname, String address, String city, String state, String postcode, String mobile)  {
       new CreateAccountPage().enterAddressDetails(name,lastname,address,city,state,postcode,mobile);
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new CreateAccountPage().clickOnRegisterButton();
    }

    @Then("^I should be able to create my account successfully$")
    public void iShouldBeAbleToCreateMyAccountSuccessfully() {
        String expectedMessage = "MY ACCOUNT";
        String actualMessage = new CreateAccountPage().verifyMyAccountText();
        Assert.assertEquals("my account text not displayed",expectedMessage,actualMessage);
    }
}
