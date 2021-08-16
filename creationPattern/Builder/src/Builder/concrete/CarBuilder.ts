import Car from "../../Products/Car";
import Builder from "../abstract/Bulder";

export default class CarBulder implements Builder{
    
    private car!:Car;

    constructor(){
        this.reset()
    }
    reset() {
        this.car=new Car()
    }
    setSeat(n: number) {
       this.car.seat=n;
    }
    setEngine(e: string) {
        this.car.engine=e
    }
    setTipComputer(t: string) {
        this.car.trip=t
    }
    setGPS(g: string) {
        this.car.gps=g;
    }

    getProduct():Car{
    let product=this.car;
    this.reset()
    return product
    }
  

}