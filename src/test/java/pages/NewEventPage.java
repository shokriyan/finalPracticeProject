package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;



public class NewEventPage {
	
	WebDriver driver;

	@FindBy(how = How.ID, using = "title")
	public WebElement title;
	
	@FindBy (how = How.ID, using ="fieldId_start")
	public WebElement fieldId_start;
	
	@FindBy (how = How.ID, using = "fieldId_end")
	public WebElement fieldId_end;
	
	@FindBy (how = How.NAME, using ="category")
	private WebElement category;
	
	@FindBy (how = How.NAME, using = "email_alert")
	public WebElement email_alert;
	
	@FindBy (how = How.CSS, using ="fieldset.fieldset:nth-child(2) table:nth-child(1) tbody:nth-child(1) tr:nth-child(1) td:nth-child(2) > input.button:nth-child(1)")
	public WebElement btnAdd;
	
	@FindBy (how = How.CSS, using = "fieldset.fieldset:nth-child(2) table:nth-child(5) tbody:nth-child(1) tr:nth-child(1) td:nth-child(1) > input.button")
	public WebElement btnSave;
	
	@FindBy (how = How.CSS, using = "table.datacard:nth-child(1) td:nth-child(1) table:nth-child(1) tbody:nth-child(1) tr:nth-child(1) > td.datafield")
	private WebElement createdTitle;
	
	@FindBy (how = How.XPATH, using ="//div[@class='calendar'][1]/table")
	private WebElement fromTable; 
	
	
	public NewEventPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}
	
	public void selectCategory(String category) {
		Select select = new Select(this.category);
		select.selectByVisibleText(category);
	}
	
	public String getCreatedTitle() {
		return createdTitle.getText();
	}
	
	public void deselectEmailAlert() {
		if (email_alert.isSelected())
			email_alert.click();
	}
	
	public void selectFromdata(String month, String year, String day) {
		
		WebElement monthelement = fromTable.findElement(By.xpath("/thead/tr[1]/td[2]"));
		String getMonth = null; 
		do {
			
			
		}while (getMonth.equals(month+", "+year));
	}

}
