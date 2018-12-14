package utils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class CommonMethods extends BaseClass {

	public static void sendFieldValue(WebElement element, String value) {
		element.clear();
		element.sendKeys(value);
	}

	public static void clickOnButtons(WebElement element) {
		if (element.isEnabled())
			element.click();
	}

	public static void clinkOnLinks(String linkText) {
		WebElement links = driver.findElement(By.linkText(linkText));
		
		clickableWaits(links, 10);
	}

}
