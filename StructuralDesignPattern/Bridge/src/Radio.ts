import Device from "./Device";

export default class Radio implements Device{
    dEnable!:boolean;
    vol!:number;
    channel!:number;
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