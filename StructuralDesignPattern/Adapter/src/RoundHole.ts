import RoundPeg from "./RoundPeg";

export default class RoundHole {
    radius:number
    constructor(rad:number){
        this.radius=rad;
    }

    getRadius(){
        return this.radius;
    }
    fits(peg:RoundPeg){
        return this.getRadius()>=peg.getRadius()
    }
}