package com.automationpractice.steps;

import com.automationpractice.pages.HomePage;
import com.automationpractice.pages.ProductPage;
import com.automationpractice.pages.WomenCategoryPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class WomenCategorySteps {
    @And("^I click on women tab$")
    public void iClickOnWomenTab() {
        new HomePage().clickOnWomenTab();
    }

    @Then("^I should navigate to women category page successfully$")
    public void iShouldNavigateToWomenCategoryPageSuccessfully() {
        String expectedMessage = "Women";
        String actualMessage = new WomenCategoryPage().verifyWomenText();
        Assert.assertEquals("woman category page not displayed",expectedMessage,actualMessage);
    }

    @And("^I click on product \"([^\"]*)\"$")
    public void iClickOnProduct(String product)  {
        new WomenCategoryPage().addProductToCart(product);

    }

    @And("^I change quantity \"([^\"]*)\"$")
    public void iChangeQuantity(String quantity)  {
      new ProductPage().changeQuantity(quantity);
    }

    @And("^I select size \"([^\"]*)\" from dropdown$")
    public void iSelectSizeFromDropdown(String size) {
        new ProductPage().selectSize(size);
    }

    @And("^I click on colour \"([^\"]*)\"$")
    public void iClickOnColour(String colour)  {
       new ProductPage().clickOnColour(colour);
    }

    @And("^I click on 'Add to Cart' button$")
    public void iClickOnAddToCartButton() {
        new ProductPage().clickOnAddToCartButton();
    }

    @Then("^Product added to cart successfully$")
    public void productAddedToCartSuccessfully() {
        new ProductPage().verifyProductAddedToCartMessage("Product successfully added to your shopping cart");
     }

    @And("^I close the pop up$")
    public void iCloseThePopUp() {
        new ProductPage().clickOnCloseButton();
    }
}
