import Device from "./Device";

export default class Tv implements Device{
    dEnable:boolean=false;
    vol:number=0;
    channel:number=0;
    isEnabled() {
        return this.dEnable;
    }
    enable() {
       this.dEnable=true
    }
    disable() {
        this.dEnable=false;
    }
    getVolume() {
        return this.vol;
    }
    setVolume(percent: number) {
        this.vol=percent
    }
    getChannel() {
        return this.channel
    }
    setChannel(cha: number) {
        this.channel=cha
    }

}