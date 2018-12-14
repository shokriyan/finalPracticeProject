Feature: User Login Feature

  @first
  Scenario Outline: Login with valid username and password
    Given user is on home page
    When user enter "<username>" and "<password>"
    And click on login button
    Then Logged user should be "Mohammad Shokriyan"
    And close browser
    Examples:
      | username   | password | expected           |
      | mshokriyan | 123456Ab | Mohammad Shokriyan |

  @second
  Scenario Outline: Login with invalid username and valid password
    Given user is on home page
    When user enter "<username>" and "<password>"
    And click on login button
    Then should stay in home page
    And close browser
    Examples:
      | username   | password |
      | shokiMamamd | 123456Ab |
    
    
