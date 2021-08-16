import GuiFactory from "../../Abstract/Factory/GuiFactory";
import Button from "../../Abstract/product/Button";
import CheckBox from "../../Abstract/product/CheckBox";
import WinButton from "../product/WinButton";
import WinCheck from "../product/WinCheck";

export default class WindowsFac implements GuiFactory{
    createButton(): Button {
        console.log("creating win Button...")
        return  new WinButton()
    }
    createCheckBox(): CheckBox {
        console.log("creating windows checkbox ...")
        return new WinCheck()
    }

}