package manger;

import org.openqa.selenium.WebDriver;

import pages.HomePage;
import pages.SignUpPage;
import pages.UserHomePage;

public class PageObjectManager {
	private WebDriver driver;
	private HomePage home;
	private UserHomePage userhome;
	private SignUpPage signUp;

	public PageObjectManager(WebDriver driver) {
		this.driver = driver;
	}

	public HomePage getHomePage() {
		return (home == null) ? home = new HomePage(driver) : home;
	}

	public UserHomePage getUserHomePage() {
		return (userhome == null) ? userhome = new UserHomePage(driver) : userhome;
	}
	
	public SignUpPage getSignUpPage() {
		return (signUp == null) ? signUp = new SignUpPage(driver) : signUp;
	}
	

}
