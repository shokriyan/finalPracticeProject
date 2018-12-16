package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features"
,tags= {"@eventCreate"}
, glue = { "stepDefinitions" }
, dryRun = false
, plugin = {"pretty", "html:test-output"
			,"json:target/cucumber.json"
			,"rerun:target/rerun.txt"}
, monochrome = true)
public class TestRunner {

}
