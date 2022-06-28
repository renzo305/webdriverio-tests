Feature: Demo feature

    @demo
    Scenario: Run first demo feature
    Given Google page is opened
    When Search with <SearchItem>
    Then Click on the first search result
    Then URL should match <ExpectedURL>

    Examples:
        | TestID     | SearchItem  | ExpectedURL           |
        | Demo_TC001 | WDIO        | https://webdriver.io/ |

