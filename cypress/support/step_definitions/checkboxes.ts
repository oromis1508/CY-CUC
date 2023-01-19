import { CheckboxesPage } from "../../pageobjects/checkboxes.page";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

When(/^I click (.*) checkbox$/, (checkboxName: "checkbox1" | "checkbox2") => {
  CheckboxesPage[checkboxName]().click();
});

Then(
  /^Checkbox (.*) has value (.*)$/,
  (checkboxName: "checkbox1" | "checkbox2", expectedValue: string) => {
    if (expectedValue === "true") {
      CheckboxesPage[checkboxName]().should("have.attr", "checked");
    } else {
      CheckboxesPage[checkboxName]().should("not.have.attr", "checked");
    }
  }
);

Then(/^I have (\d) checked elements$/, (expectedCount: string) => {
  CheckboxesPage.checkedCheckboxes().should("have.length", +expectedCount);
});

Given(/^I am on the checkboxes page$/, () => {
  CheckboxesPage.open();
});
