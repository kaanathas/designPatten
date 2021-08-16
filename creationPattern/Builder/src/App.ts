import CarBulder from "./Builder/concrete/CarBuilder";
import Director from "./director/director";
import Car from "./Products/Car";

export default class Application{

    makeCar():Car{
    let director=new Director();
    let builder=new CarBulder()
    director.constructSportCar(builder)
    let car=builder.getProduct()
    return car;
    }
}