package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class SignInPage extends Utility {

    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());

    public SignInPage() {
        PageFactory.initElements(driver, this);
    }


    @FindBy(xpath = "//h1[contains(text(),'Authentication')]")
    WebElement authenticationMessage;

    @FindBy(id = "email")
    WebElement emailAddressField;

    @FindBy(id = "passwd")
    WebElement passwordField;

    @FindBy(id = "SubmitLogin")
    WebElement signInButton;

    @FindBy(id = "SubmitCreate")
    WebElement createAccountButton;

    @FindBy(id = "email_create")
    WebElement createAccountEmail;

    @FindBy(xpath = "//li[contains(text(),'An email address required.')]")
    WebElement emailRequiredError;

    @FindBy(xpath = "//li[contains(text(),'Password is required.')]")
    WebElement passwordRequiredError;

    @FindBy(xpath = "//li[contains(text(),'Invalid email address.')]")
    WebElement invalidEmail;

    @FindBy(xpath = "//li[contains(text(),'Authentication failed.')]")
    WebElement authenticationFailed;

    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement signoutButton;

    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement signInLink;

    @FindBy(xpath = "//input[@id='email_create']")
    WebElement emailAddress;


    public String verifyAuthenticationMessage() {
        log.info("Verifying Authenticaion message  " + authenticationMessage.toString());
        return getTextFromElement(authenticationMessage);

    }

    public void inputEmailAddress(String text) {
        sendTextToElement(emailAddressField, text);
        log.info("Entering email address  " + emailAddressField.toString());
    }

    public void inputPassword(String text) {
        sendTextToElement(passwordField, text);
        log.info("Entering password  " + passwordField.toString());
    }

    public void clickOnSignInButton() {
        clickOnElement(signInButton);
        log.info("Clicking on Sign in button  " + signInButton.toString());

    }

    public String verifySignOutLinkIsVisible() {
        log.info("Verifying Sign Out link is visible  " + signoutButton.toString());
        return getTextFromElement(signoutButton);

    }

    public void clickOnSignOutLink() {
        clickOnElement(signoutButton);
        log.info("Clicking no Logout button  " + signoutButton.toString());
    }

    public void verifySignInLinkVisible() {
        verifyThatElementIsDisplayed(signInLink);
        log.info("Verifying Sign In link is visible  " + signInLink.toString());

    }

    public void enterEmailAddressToCreateAccount(String email) {
        sendTextToElement(emailAddress, email);
        log.info("Entering email to create account  " + createAccountEmail.toString());
    }

    public void clickOnCreateAccountButton() {
        clickOnElement(createAccountButton);
        log.info("Clicking on create account button  " + createAccountButton.toString());

    }

    public void inputCredentials(String username, String password) {
        sendTextToElement(emailAddressField, username);
        log.info("Entering Username " + emailAddressField.toString());

        sendTextToElement(passwordField, password);
        log.info("Entering Password  " + passwordField.toString());

    }

    // This method will get error message
    public void verifyErrorMessage(String errorMessage) {
        log.info("Verifying error message " + errorMessage.toString());
        List<WebElement> topMenuNames = driver.findElements(By.xpath("//body/div[@id='page']/div[@class='columns-container']/div[@id='columns']/div[@class='row']/div[@id='center_column']/div[1]"));
        for (WebElement names : topMenuNames) {
            if (names.getText().equalsIgnoreCase(errorMessage)) {
                break;
            }
        }
    }


}
