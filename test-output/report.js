$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("calender.feature");
formatter.feature({
  "line": 1,
  "name": "Calender Functionality Feature",
  "description": "",
  "id": "calender-functionality-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "user should be a able to create a event",
  "description": "",
  "id": "calender-functionality-feature;user-should-be-a-able-to-create-a-event",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@eventCreate"
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
  "name": "login as \"mshokriyan\" and \"123456Ab\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on new event under calender and fill information event create successfully",
  "rows": [
    {
      "cells": [
        "title",
        "from",
        "end",
        "category"
      ],
      "line": 8
    },
    {
      "cells": [
        "Summer Camping",
        "15-Jun-2019 08:07",
        "15-Jul-2019 08:07",
        "Optional"
      ],
      "line": 9
    },
    {
      "cells": [
        "Spring Camping",
        "15-Apr-2019 08:07",
        "15-May-2019 08:07",
        "Optional"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_home_page()"
});
formatter.result({
  "duration": 3261200411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mshokriyan",
      "offset": 10
    },
    {
      "val": "123456Ab",
      "offset": 27
    }
  ],
  "location": "CalenderSteps.login_as_and(String,String)"
});
formatter.result({
  "duration": 6794398580,
  "status": "passed"
});
formatter.match({
  "location": "CalenderSteps.click_on_new_event_under_calender_and_fill_information_event_create_successfully(DataTable)"
});
formatter.result({
  "duration": 1165190774,
  "error_message": "org.openqa.selenium.InvalidElementStateException: invalid element state: Element must be user-editable in order to clear it.\n  (Session info: chrome\u003d70.0.3538.110)\n  (Driver info: chromedriver\u003d2.42.591059 (a3d9684d10d61aa0c45f6723b327283be1ebaad8),platform\u003dMac OS X 10.14.1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027mohammads-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:f1:1477:ef27:7f75%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.1\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591059 (a3d9684d10d61a..., userDataDir: /var/folders/x3/smdxzkxn7d3...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:54622}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.110, webStorageEnabled: true}\nSession ID: 04929e6f9d2b307d33e00d4c9b19a736\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.clear(RemoteWebElement.java:124)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy18.clear(Unknown Source)\n\tat utils.CommonMethods.sendFieldValue(CommonMethods.java:10)\n\tat stepDefinitions.CalenderSteps.click_on_new_event_under_calender_and_fill_information_event_create_successfully(CalenderSteps.java:48)\n\tat ✽.When click on new event under calender and fill information event create successfully(calender.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});