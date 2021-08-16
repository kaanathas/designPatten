import GuiFactory from "../Abstract/Factory/GuiFactory";
import Button from "../Abstract/product/Button";
import CheckBox from "../Abstract/product/CheckBox";

export default class Application {
    private button!:Button;
    private checkBox!:CheckBox;
    factory: GuiFactory;

constructor(factory:GuiFactory){
    this.factory=factory
}
createUi(){
    this.button=this.factory.createButton()
    this.checkBox=this.factory.createCheckBox()
}
paint(){
    this.button.paint()
    this.checkBox.paint()
}
}