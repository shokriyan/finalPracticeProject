package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.testng.AssertJUnit;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import manger.PageObjectManager;
import pages.HomePage;
import pages.SignUpPage;
import utils.BaseClass;
import utils.CommonMethods;

public class SignUpSteps extends BaseClass {

	SignUpPage signUp;
	HomePage home;
	PageObjectManager pageObjectManger;

	@When("^user provide information$")
	public void user_provide_information(DataTable sinupInfo) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)

		pageObjectManger = new PageObjectManager(driver);
		signUp = pageObjectManger.getSignUpPage();

		List<Map<String, String>> infoMap = sinupInfo.asMaps(String.class, String.class);

		for (Map<String, String> map : infoMap) {
			Thread.sleep(3000);
			CommonMethods.clinkOnLinks("Sign Up");
			signUp.selectPaymentPlan(map.get("payPlan"));
			CommonMethods.sendFieldValue(signUp.first_name, map.get("firstName"));
			CommonMethods.sendFieldValue(signUp.surname, map.get("lastName"));
			CommonMethods.sendFieldValue(signUp.email, map.get("email"));
			CommonMethods.sendFieldValue(signUp.email_confirm, map.get("email"));
			CommonMethods.sendFieldValue(signUp.username, map.get("username"));
			CommonMethods.sendFieldValue(signUp.password, map.get("password"));
			CommonMethods.sendFieldValue(signUp.passwordconfirm, map.get("password"));
			signUp.termCheckBox();
			signUp.clickOnSubmitButton();
			Thread.sleep(3000);
			CommonMethods.sendFieldValue(signUp.company_name, map.get("company"));
			CommonMethods.sendFieldValue(signUp.phone, map.get("phone"));
			CommonMethods.sendFieldValue(signUp.company_email, map.get("email"));
			Thread.sleep(3000);
			signUp.ClickOnCountinue();
			Thread.sleep(3000);
		}
	}

	@Then("^user account created successfully$")
	public void user_account_created_successfully(DataTable userAccount) throws Throwable {
		List<Map<String, String>> infoMap = userAccount.asMaps(String.class, String.class);
		for (Map<String, String> map : infoMap) {
			String expectedUser = map.get("expected");
			String getUser = signUp.getCreatedUser();
			String actualUser = getUser.trim();

			AssertJUnit.assertEquals(expectedUser, actualUser);

		}

	}

	@Then("^click on Finish$")
	public void click_on_Finish() throws Throwable {
		signUp.ClickOnFinish();
	}

}
