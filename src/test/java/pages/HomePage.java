package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.BaseClass;

public class HomePage extends BaseClass{
	
	@FindBy (how = How.XPATH, using ="//a[contains(@href,'freecrm')]/img")
	private WebElement homePageLogo;
	
	@FindBy (how =How.NAME, using ="username")
	public WebElement username;
	
	@FindBy (how = How.NAME, using ="password")
	public WebElement password;
	
	@FindBy (how = How.XPATH, using = "//input[@value='Login']")
	private WebElement btnlogin;
	
	
	public HomePage (WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	
	public boolean logoDisplay() {
		return homePageLogo.isDisplayed();
		
	}
	
	public void clickOnLogin() {
		clickableWaits(btnlogin, 30);
	}
	

}
