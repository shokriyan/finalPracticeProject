package stepDefinitions;

import org.testng.AssertJUnit;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import manger.PageObjectManager;
import pages.HomePage;
import pages.UserHomePage;
import utils.BaseClass;
import utils.CommonMethods;

public class LoginSteps extends BaseClass{
	BaseClass base;
	HomePage home;
	UserHomePage userhome;
	PageObjectManager pageObjectManager;
	
	
	@Given("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
		base = new BaseClass();
		base.initialBrowser("chrome");
		pageObjectManager = new PageObjectManager(driver);
		 
	}
	
	@When("^user enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_and(String uname, String pass) throws Throwable {
		home =pageObjectManager.getHomePage();
		CommonMethods.sendFieldValue(home.username, uname);
		CommonMethods.sendFieldValue(home.password, pass);
		Thread.sleep(3000);
	}

	@When("^click on login button$")
	public void click_on_login_button() throws Throwable {
		
		home.clickOnLogin();
	}

	@Then("^Logged user should be \"([^\"]*)\"$")
	public void logged_user_should_be(String expected) throws Throwable {
		userhome = pageObjectManager.getUserHomePage();
		driver.switchTo().frame(1);
		String actual = userhome.loggedUserName();
		AssertJUnit.assertEquals(expected, actual);
	}

	@Then("^close browser$")
	public void close_browser() throws Throwable {
		base.teardown();
	}
	
	@Then("^should stay in home page$")
	public void should_stay_in_home_page() throws Throwable {
		boolean logoExist = home.logoDisplay();
		AssertJUnit.assertTrue(logoExist);
	}

}
