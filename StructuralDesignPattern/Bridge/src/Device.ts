export default interface Device{
    isEnabled():any;
    enable():any;
    disable():any;
    getVolume():any;
    setVolume(percent:number):any;
    getChannel():any;
    setChannel(percent:number):any;
}