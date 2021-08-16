import Device from "./Device";

export default class RemoteControl{
protected device:Device;

constructor(de:Device){
    this.device=de
}



togglePower(){
    if(this.device.isEnabled()){
        this.device.disable
    }else{
        this.device.enable
    }
}

volumeDown(){
    this.device.setVolume(this.device.getVolume()-10)
}

volumeUp(){
    this.device.setVolume(this.device.getVolume()+10)
}

channelDown(){
    this.device.setChannel(this.device.getChannel()-1)
}

channelUp(){
    this.device.setChannel(this.device.getChannel()+1)
}
}