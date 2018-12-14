package utils;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseClass {

	public static WebDriver driver;
	ConfigReader reader;

	public void initialBrowser(String browser) {
		String driverKey;
		String driverValue;

		reader = new ConfigReader();
		if (browser.equalsIgnoreCase("chrome")) {
			driverKey = "webdriver.chrome.driver";
			driverValue = System.getProperty("user.dir")+reader.getChromePath();
			System.setProperty(driverKey, driverValue);
			driver = new ChromeDriver();
		} else if (browser.equalsIgnoreCase("firefox")) {
			driverKey = "webdriver.gecko.driver";
			driverValue = System.getProperty("user.dir")+reader.getFirePath();
			System.setProperty(driverKey, driverValue);
			driver = new FirefoxDriver();
		} else
			throw new RuntimeException("Invalid browser name");

		String baseUrl = reader.getUrl();
		long impWait = reader.getImpWait();
		long loadWait = reader.getLoadWait();

		driver.get(baseUrl);
		driver.manage().timeouts().pageLoadTimeout(loadWait, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(impWait, TimeUnit.SECONDS);


	}

	public void teardown() {
		driver.close();
		driver.quit();
	}

	public static void clickableWaits(WebElement element, long duration) {

		WebDriverWait wait = new WebDriverWait(driver, duration);
		wait.until(ExpectedConditions.elementToBeClickable(element)).click();

	}

}
