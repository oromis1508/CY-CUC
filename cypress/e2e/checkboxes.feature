Feature: Checkboxes

  Scenario Outline: Checkboxes
    Given I am on the checkboxes page
    When I click <click> checkbox
    Then I have <checked> checked elements
    Then Checkbox checkbox1 has value <value>
    Then Checkbox checkbox2 has value <value>

    Examples:
      | click     | checked | value |
      | checkbox1 | 2       | true  |
      | checkbox2 | 0       | false |
