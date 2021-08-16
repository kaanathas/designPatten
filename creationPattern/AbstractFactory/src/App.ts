import GuiFactory from "./Abstract/Factory/GuiFactory"
import Application from "./Application/Application"
import MacFactory from "./concrete/Factory/MacFactory"
import WindowsFac from "./concrete/Factory/WindowsFac"

let App="Mac"
let Factory:GuiFactory
if(App=="win"){

    Factory=new WindowsFac()

}else{

    Factory=new MacFactory()

}


let Application1=new Application(Factory);
Application1.createUi()
Application1.paint()
