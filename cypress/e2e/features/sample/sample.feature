Feature: Sample automation site to perform testing
   
    Background: Launch url
        Given User open "test url"
    @smoke
    Scenario: Check login screen with invalid cred
        Then User verify "Welcome Back!" message
        When User enter invalid creds
            | Email          | Password   |
            | test@gmail.com | 12345@test |
        Then User validate error message "Invalid email or password."
    @reg
    Scenario: Test different app
         Then User verify "Welcome Back!" message