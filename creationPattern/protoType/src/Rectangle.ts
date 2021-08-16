import Shape from "./Shape";

export default class Rectangle extends Shape{



    width!:number;
    height!:number;

    // constructor(source:Rectangle){
    //     super(source)
    //     this.width=source.width;
    //     this.height=source.height;

    // }
    clone(): Shape {
        return Object.assign({}, this);
    }

}