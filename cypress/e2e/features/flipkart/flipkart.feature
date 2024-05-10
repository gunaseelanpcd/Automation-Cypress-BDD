Feature: Perform testing scenarios in flipkart


    Background: Launch url
        Given User open "flipkart"

    Scenario: Select mobile from catagory and proceed for checkout
        When User click "Mobiles & Tablets"
        Then User validate "Mobile Phones Big Saving Days May 2024" label in mobiles section
        When User select first card under top deals of the sales
        Then User check on first smartphone within the range "50000"
        Then User print name of the smartphone