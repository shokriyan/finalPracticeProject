Feature: Account Registration

  @singUpTest
  Scenario: user signup
    Given user is on home page
    When user provide information
      | payPlan      | firstName | lastName | email             | username   | password | company | phone      |
      | Free Edition | John      | Smith    | jsmith@email.come | johnSmith100 | 123456Ab | syntax  | 1234567890 |
    Then user account created successfully
      | expected                |
      | John Smith (johnSmith100) |
    And click on Finish
    And close browser
