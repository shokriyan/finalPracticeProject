$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "User Login Feature",
  "description": "",
  "id": "user-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login with valid username and password",
  "description": "",
  "id": "user-login-feature;login-with-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@first"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Logged user should be \"Mohammad Shokriyan\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "user-login-feature;login-with-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "expected"
      ],
      "line": 11,
      "id": "user-login-feature;login-with-valid-username-and-password;;1"
    },
    {
      "cells": [
        "mshokriyan",
        "123456A",
        "Mohammad Shokriyan"
      ],
      "line": 12,
      "id": "user-login-feature;login-with-valid-username-and-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Login with valid username and password",
  "description": "",
  "id": "user-login-feature;login-with-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@first"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter \"mshokriyan\" and \"123456A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Logged user should be \"Mohammad Shokriyan\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_home_page()"
});
formatter.result({
  "duration": 3511328456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mshokriyan",
      "offset": 12
    },
    {
      "val": "123456A",
      "offset": 29
    }
  ],
  "location": "LoginSteps.user_enter_and(String,String)"
});
formatter.result({
  "duration": 3662837994,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_login_button()"
});
formatter.result({
  "duration": 473228826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mohammad Shokriyan",
      "offset": 23
    }
  ],
  "location": "LoginSteps.logged_user_should_be(String)"
});
formatter.result({
  "duration": 25089651,
  "error_message": "org.openqa.selenium.NoSuchFrameException: no such frame\n  (Session info: chrome\u003d70.0.3538.110)\n  (Driver info: chromedriver\u003d2.42.591059 (a3d9684d10d61aa0c45f6723b327283be1ebaad8),platform\u003dMac OS X 10.14.1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027mohammads-MacBook-Pro.local\u0027, ip: \u00272601:140:8000:1851:0:0:0:bb03%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.1\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591059 (a3d9684d10d61a..., userDataDir: /var/folders/x3/smdxzkxn7d3...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:58832}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.110, webStorageEnabled: true}\nSession ID: 68c96ba2d0e458719cbe248360fb6565\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:872)\n\tat stepDefinitions.LoginSteps.logged_user_should_be(LoginSteps.java:46)\n\tat ✽.Then Logged user should be \"Mohammad Shokriyan\"(login.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Login with invalid username and valid password",
  "description": "",
  "id": "user-login-feature;login-with-invalid-username-and-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@second"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "should stay in home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "user-login-feature;login-with-invalid-username-and-valid-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "user-login-feature;login-with-invalid-username-and-valid-password;;1"
    },
    {
      "cells": [
        "shokiMamamd",
        "123456Ab"
      ],
      "line": 23,
      "id": "user-login-feature;login-with-invalid-username-and-valid-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Login with invalid username and valid password",
  "description": "",
  "id": "user-login-feature;login-with-invalid-username-and-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@second"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user enter \"shokiMamamd\" and \"123456Ab\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "should stay in home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_home_page()"
});
formatter.result({
  "duration": 2814073478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shokiMamamd",
      "offset": 12
    },
    {
      "val": "123456Ab",
      "offset": 30
    }
  ],
  "location": "LoginSteps.user_enter_and(String,String)"
});
formatter.result({
  "duration": 3867134897,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_login_button()"
});
formatter.result({
  "duration": 1202978559,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.should_stay_in_home_page()"
});
formatter.result({
  "duration": 31001095,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "duration": 131105731,
  "status": "passed"
});
formatter.uri("registration.feature");
formatter.feature({
  "line": 1,
  "name": "Account Registration",
  "description": "",
  "id": "account-registration",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "user signup",
  "description": "",
  "id": "account-registration;user-signup",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@singUpTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user provide information",
  "rows": [
    {
      "cells": [
        "payPlan",
        "firstName",
        "lastName",
        "email",
        "username",
        "password",
        "company",
        "phone"
      ],
      "line": 7
    },
    {
      "cells": [
        "Free Edition",
        "John",
        "Smith",
        "jsmith@email.come",
        "johnSmith100",
        "123456Ab",
        "syntax",
        "1234567890"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user account created successfully",
  "rows": [
    {
      "cells": [
        "expected"
      ],
      "line": 10
    },
    {
      "cells": [
        "John Smith (johnSmith100)"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on Finish",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_home_page()"
});
formatter.result({
  "duration": 5253197972,
  "status": "passed"
});
formatter.match({
  "location": "SignUpSteps.user_provide_information(DataTable)"
});
formatter.result({
  "duration": 9872190651,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using id\u003dcompany_name\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027mohammads-MacBook-Pro.local\u0027, ip: \u00272601:140:8000:1851:0:0:0:bb03%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.1\u0027, java.version: \u002710.0.1\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.clear(Unknown Source)\n\tat utils.CommonMethods.sendFieldValue(CommonMethods.java:9)\n\tat stepDefinitions.SignUpSteps.user_provide_information(SignUpSteps.java:49)\n\tat ✽.When user provide information(registration.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "SignUpSteps.user_account_created_successfully(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignUpSteps.click_on_Finish()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});