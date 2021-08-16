import Manual from "../../Products/Manual";
import Builder from "../abstract/Bulder";

export default class CarManual implements Builder{


    private manual!:Manual;

    constructor(){
        this.reset()
    }
    reset() {
        this.manual=new Manual()
    }
    setSeat(n: number) {
       this.manual.seat=n;
    }
    setEngine(e: string) {
     this.manual.engine=e
    }
    setTipComputer(t: string) {
       this.manual.trip=t;
    }
    setGPS(g: string) {
       this.manual.gps=g;
    }

    getProduct():Manual{
        let product=this.manual;
        this.reset()
        return  product;
    }

}