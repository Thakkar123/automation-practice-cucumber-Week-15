package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class WomenCategoryPage extends Utility {

    private static final Logger log = LogManager.getLogger(WomenCategoryPage.class.getName());

    public WomenCategoryPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//span[@class='category-name']")
    WebElement womenText;

    @CacheLookup
    @FindBy(xpath = "//a[@class='product-name']")
    WebElement productsList;

    public String verifyWomenText() {
        log.info("Verifying Women text " + womenText.toString());
        return getTextFromElement(womenText);
    }

    public void addProductToCart(String product) {
        clickOnElement(productsList, product);
        log.info("Clicking on product  " + productsList.toString());
    }
}
