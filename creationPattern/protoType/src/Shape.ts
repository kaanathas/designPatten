export default abstract class Shape{
    X!:number;
    y!:number;
    color!:string;
  
    // constructor(source?:Shape){
    //     console.log(source)
    //     this.X=source.X;
    //     this.y=source.y;
    //     this.color=source.color;


    // }

    abstract clone():Shape;

}