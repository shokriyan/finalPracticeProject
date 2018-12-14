package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class UserHomePage {
	
	@FindBy (how = How.CSS, using ="td.headertext:nth-child(1)")
	private WebElement loggedUser; 
	
	public UserHomePage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	public String loggedUserName() {
		String getUser = loggedUser.getText();
		
		return getUser.trim().substring(6);
	}

}
