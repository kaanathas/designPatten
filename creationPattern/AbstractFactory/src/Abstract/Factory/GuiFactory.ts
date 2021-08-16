import Button from "../product/Button";
import CheckBox from "../product/CheckBox";

export default interface GuiFactory{
 createButton():Button
 createCheckBox():CheckBox
}