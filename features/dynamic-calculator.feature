Feature: Dynamic Calculator Tests

Scenario Outline: Addition test
  Given I have entered <first> into the calculator
  And I have entered <second> into the calculator
  When I press add
  Then the result should be <result> on the screen

Examples:
  | first | second | result |
  | 5 | 7 | 12 |
  | 10 | 20 | 30 |
  | -5 | 8 | 3 |
  | 100 | 200 | 300 |
  | -10 | -20 | -30 |
  | 0 | 15 | 15 |
  | 999 | 1 | 1000 |
  | 42 | 0 | 42 |
  | 1234 | 5678 | 6912 |