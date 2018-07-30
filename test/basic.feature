Feature: Verify XPA Exchange Home Page
  
  Scenario: Verify TideWallet Connect - Login
    Given I go to the xpa exchange homepage
    When  I log in TideWallet Connect
    Then  I should see my wallet address
  