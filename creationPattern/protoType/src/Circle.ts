import Shape from "./Shape";

export default class Circle extends Shape{

    radis!:number;
    constructor(a?:any)
   // constructor(source:Circle);
    constructor(source?:Circle){
        super();
        // super(this);
        // console.log("con")
        // super(source);
        // this.radis=source.radis;
    }
    clone(): Shape {
        return Object.assign({}, this);
    }
 

}

