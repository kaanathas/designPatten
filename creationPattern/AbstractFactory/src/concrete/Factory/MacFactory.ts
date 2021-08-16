import GuiFactory from "../../Abstract/Factory/GuiFactory";
import Button from "../../Abstract/product/Button";
import CheckBox from "../../Abstract/product/CheckBox";
import MacButton from "../product/MacButton";
import macCheck from "../product/MacCheck";

export default class MacFactory implements GuiFactory{
    createButton(): Button {
       console.log("creating mac button ...")
       return new MacButton()
    }
    createCheckBox(): CheckBox {
       console.log(" creating mac checkbox..")
       return new macCheck()
    }

}