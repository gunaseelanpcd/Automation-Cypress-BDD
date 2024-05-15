Feature: API Testing performing basic request

  Scenario: Simple GET method and validate its status
    Given User perfrom GET request
      | Method | URL                                           | Status |
      | GET    | https://jsonplaceholder.typicode.com/todos/1/ | 200    |
    When User perform POST request
      | Method | URL                                        | Status | Title | Body      | UserID |
      | POST   | https://jsonplaceholder.typicode.com/posts | 201    | Test  | Test Body | 1      |
    And User perform PUT request
      | Method | URL                                        | Status | Title | Body      | UserID | ID |
      | POST   | https://jsonplaceholder.typicode.com/posts | 201    | Test  | Test Body | 1      | 1  |
    And User perform DETELE request
      | Method | URL                                        |
      | POST   | https://jsonplaceholder.typicode.com/posts |

  Scenario: Different ways to perform POST request
    Given User perform POST request hardcode method
    When User perform POST request with dynamically gerated data
    And User permorm POST request using fixture file

  Scenario: Query PARAMS
    Given User perform Query PARAMS in API


  Scenario: Generate API Token and place order then verify
    Given User Generate API Token from simple books
    When User submit an order with gerated API Token
    Then User fetch orders from the database


  Scenario: Parsing JSON response
    Given User parsing simple json response
    When User get total price for 5 objects and it should be '899.23'

  Scenario: Schema validation for JSON
    Given User perform Schema validation
  
  @focus
  Scenario: Performing authentication methods
    Given User perform basic authentication
    When User perform digest authentication
    When User perform bearer token authentication
    When User perform API key authentication