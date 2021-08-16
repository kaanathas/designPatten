import RoundPeg from "./RoundPeg";
import SquarePeg from "./SquarePeg";

export default class Adapter extends RoundPeg{

    private peg:SquarePeg;
    constructor(peg:SquarePeg){
        super(0);
        this.peg=peg
    }

    getRadius(){
        return this.peg.getWidth()+Math.sqrt(2)/2
    }
}