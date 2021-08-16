export default interface Graphic{
    move(x:number,y:number):any;
    draw():any;
}


class Dot implements Graphic{

    x:number;
    y:number;

    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }
    move(x: number, y: number) {
       this.x+=x;
       this.y+=y;
    }
    draw() {
       console.log("X is"+this.x+"\n Y is"+this.y+'\n')
    }

}

class Circle extends Dot{
    radius:number;

    constructor(x:number,y:number,radius:number){
        super(x,y)
        this.radius=radius;
    }


    draw(){
        console.log("Draw the circle with radius" 
                    +this.radius+"\n"
                    +"X is"+this.x+"\n Y is"+this.y+'\n')
    }
}


class CompoundGraphic implements Graphic{


    children:Graphic[]=[];

    add(chid:Graphic){
        this.children.push(chid)
    }

    remove(child:Graphic){
        let index=this.children.indexOf(child)
        let removed=this.children.slice(index,1)
        return removed;
    }

    move(x: number, y: number) {
        this.children.forEach(child => {
            child.move(x,y)
        });
    }
    draw() {
        this.children.forEach(child => {
            child.draw()
        });
    }

}


let all=new CompoundGraphic()
all.add(new Dot(2,5))
all.add(new Dot(5,7))
all.add(new Dot(20,80))
all.add(new Circle(4,6,10))
let inner=new CompoundGraphic()
inner.add(new Dot(1,5))
inner.add(new Dot(1,7))
inner.add(new Dot(1,80))
inner.add(new Circle(1,6,10))
all.add(inner)
all.draw()