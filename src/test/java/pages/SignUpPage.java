package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import utils.BaseClass;

public class SignUpPage extends BaseClass{
	
	public SignUpPage(WebDriver driver) {
		
		PageFactory.initElements(driver, this);
		
	}
	
	@FindBy (how = How.ID , using = "payment_plan_id")
	private WebElement paymentPlan;
	
	@FindBy (how = How.NAME, using = "first_name")
	public WebElement first_name;
	
	@FindBy (how = How.NAME, using = "surname")
	public WebElement surname;
	
	@FindBy (how = How.NAME, using = "email")
	public WebElement email;
	
	@FindBy (how = How.NAME, using = "email_confirm")
	public WebElement email_confirm;
	
	@FindBy (how = How.NAME, using = "username")
	public WebElement username;
	
	@FindBy (how = How.NAME, using = "password")
	public WebElement password;
	
	@FindBy (how = How.NAME, using ="passwordconfirm")
	public WebElement passwordconfirm;
	
	@FindBy (how = How.NAME, using = "agreeTerms")
	private WebElement agreeTerms;
	
	@FindBy (how = How.NAME, using = "submitButton")
	private WebElement submitButton;
	
	@FindBy (how = How.ID, using ="company_name")
	public WebElement company_name;
	
	@FindBy (how = How.ID, using = "company_email")
	public WebElement company_email;
	
	@FindBy (how = How.ID, using = "phone")
	public WebElement phone;
	
	@FindBy (how = How.CSS, using = "div.text_normal:nth-child(5) form.form-horizontal.bv-form:nth-child(3) div:nth-child(22) div.btnSubmit > button.btn.btn-warning")
	private WebElement btnSubmit;
	
	
	@FindBy (how = How.CSS, using = "body:nth-child(2) section:nth-child(3) div:nth-child(5) ul.text_normal > li:nth-child(1)")
	private WebElement createdUser;
	
	@FindBy (how = How.NAME, using = "finish")
	private WebElement btnFinish;
	
	
	public void selectPaymentPlan(String value) {
		Select select = new Select(paymentPlan);
		select.selectByVisibleText(value);
	}
	
	public void termCheckBox() {
		if (!agreeTerms.isSelected()){
			clickableWaits(agreeTerms, 2);
		}
	}
	
	public void clickOnSubmitButton() {
		if (submitButton.isEnabled()) {
			clickableWaits(submitButton, 10);
		}
	}
	
	public void ClickOnCountinue() {
		Actions action = new Actions(driver);
		action.moveToElement(btnSubmit).build().perform();
		if (!btnSubmit.isEnabled()) {
			clickableWaits(btnSubmit, 10);
		}
	}
	
	public String getCreatedUser() {
		String getUser = createdUser.getText();
		return getUser.trim();
	}
	
	public void ClickOnFinish() {
		if (btnFinish.isEnabled()) {
			clickableWaits(btnFinish, 5);
		}
	}
}
