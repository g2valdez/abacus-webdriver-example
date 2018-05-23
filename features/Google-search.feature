@Smoke @Regression
Feature: Google Search
  Background:
    Given user goes to "https://www.google.com/"

  Scenario: Google Search for abacus-webdriver
  Description: As a test engineer, I want to easily find abacus webdriver through google so that I can learn more about it
    Then user is taken to the "Google home" page
    When user enters "abacus-webdriver" into the "Search Bar" field
    And user clicks on the "Search" button
    Then user is taken to the "Google Search Results" page
    And user enters "abacus-webdriver npm" into the "Search Bar" field
    And user clicks on the "Search" button
    Then the top search result is for "npm"
