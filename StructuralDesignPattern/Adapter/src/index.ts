import Adapter from "./Adapter";
import RoundHole from "./RoundHole";
import RoundPeg from "./RoundPeg";
import SquarePeg from "./SquarePeg";

let hole=new RoundHole(5)
let rpeg=new RoundPeg(15)

// console.log(hole.fits(rpeg))

let sqpeg=new SquarePeg(5)

let sqAdapter=new Adapter(sqpeg)

console.log(hole.fits(sqAdapter))