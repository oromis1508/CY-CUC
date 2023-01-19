import { getElement } from "../helpers/element";
import { Page } from "./page";

class CheckboxsPage extends Page {
  protected url = "https://the-internet.herokuapp.com/checkboxes";
  public readonly checkbox1 = getElement("[type=checkbox]:nth-of-type(1)");
  public readonly checkbox2 = getElement("[type=checkbox]:nth-of-type(2)");
  public readonly checkedCheckboxes = getElement("[type=checkbox][checked]");
}

export const CheckboxesPage = new CheckboxsPage();
