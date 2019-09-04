Feature: Login to Jetstar
    @e2e-test
    Scenario: Test login feature
        Given I visit Jetstar website
        When I click on Sign In button
        And I enter "admin" and "password"
        Then I get an invalid email error message
