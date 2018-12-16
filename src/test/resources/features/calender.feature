Feature: Calender Functionality Feature

  @eventCreate
  Scenario: user should be a able to create a event
    Given user is on home page
    And login as "mshokriyan" and "123456Ab"
    When click on new event under calender and fill information event create successfully
      | title          | from              | end               | category |
      | Summer Camping | 15-Jun-2019 08:07 | 15-Jul-2019 08:07 | Optional |
      | Spring Camping | 15-Apr-2019 08:07 | 15-May-2019 08:07 | Optional |
    Then close browser
