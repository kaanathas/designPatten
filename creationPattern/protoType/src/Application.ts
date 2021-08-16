import Circle from "./Circle";
import Shape from "./Shape";

export default class Application{
    shape:Array<Shape>=[];


    constructor(){
        let circle=new Circle();
        circle.X=10
        circle.y=1;
        circle.radis=20
        this.shape.push(circle.clone())
        this.shape.push(circle.clone())
        this.shape.push(circle.clone())
        this.shape.push(circle.clone())
        this.shape.push(circle.clone())
        this.shape.push(circle.clone())
        this.shape.push(circle.clone())
        this.shape.push(circle.clone())
    }


main(){
    this.shape.forEach(element => {
        console.log(element.X)
    });
}
}
