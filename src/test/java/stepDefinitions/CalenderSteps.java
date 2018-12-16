package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.testng.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import manger.PageObjectManager;
import pages.HomePage;
import pages.NewEventPage;
import utils.BaseClass;
import utils.CommonMethods;

public class CalenderSteps extends BaseClass {

	HomePage home;
	NewEventPage event;
	PageObjectManager pageObjectManger;

	@Given("^login as \"([^\"]*)\" and \"([^\"]*)\"$")
	public void login_as_and(String username, String password) throws Throwable {
		pageObjectManger = new PageObjectManager(driver);
		home = pageObjectManger.getHomePage();

		CommonMethods.sendFieldValue(home.username, username);
		CommonMethods.sendFieldValue(home.password, password);
		Thread.sleep(3000);
		CommonMethods.clickOnButtons(home.btnlogin);

	}

	@When("^click on new event under calender and fill information event create successfully$")
	public void click_on_new_event_under_calender_and_fill_information_event_create_successfully(DataTable infoTable)
			throws Throwable {
		event = pageObjectManger.getNewEventPage();
		driver.switchTo().frame(1);

		List<Map<String, String>> infoMap = infoTable.asMaps(String.class, String.class);

		for (Map<String, String> mapData : infoMap) {
			CommonMethods.usermenuLinks("CALENDAR", "New Event");
			String title = mapData.get("title");
			CommonMethods.sendFieldValue(event.title, title);
			String from = mapData.get("from");
			CommonMethods.sendFieldValue(event.fieldId_start, from);
			String endDate = mapData.get("end");
			CommonMethods.sendFieldValue(event.fieldId_end, endDate);
			String category = mapData.get("category");
			event.selectCategory(category);
			CommonMethods.clickOnButtons(event.btnAdd);
			CommonMethods.clickOnButtons(event.btnSave);
			
			event.deselectEmailAlert();
			
			Thread.sleep(3000);
			
			String actualTitle = event.getCreatedTitle();
			
			Assert.assertEquals(actualTitle, title);

		}
	}

}
