import Tv from "./Tv";
import RemoteControl from "./RemoteControl";

let tv=new Tv()
let remote=new RemoteControl(tv)
remote.togglePower()
remote.channelUp()
remote.channelUp()
remote.channelUp()
remote.channelUp()
remote.channelUp()
console.log(tv.getChannel())