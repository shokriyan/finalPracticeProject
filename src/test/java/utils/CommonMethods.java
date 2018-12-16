package utils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class CommonMethods extends BaseClass {

	public static void sendFieldValue(WebElement element, String value) {
		element.clear();
		element.sendKeys(value);
	}

	public static void clickOnButtons(WebElement element) {
		if (element.isEnabled())
			clickableWaits(element, 10);
		;
	}

	public static void clinkOnLinks(String linkText) {
		WebElement links = driver.findElement(By.linkText(linkText));
		clickableWaits(links, 10);
	}

	public static void usermenuLinks(String moveOver, String linkText) {
		WebElement menuElement = driver.findElement(By.linkText(moveOver));
		Actions action = new Actions(driver);
		action.moveToElement(menuElement).perform();
		WebElement subMenu = driver.findElement(By.linkText(linkText));
		action.moveToElement(subMenu).click().build().perform();

	}

}
