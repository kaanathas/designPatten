import Builder from "../Builder/abstract/Bulder";

export default class Director{

    private bulder!:Builder;

    setBulder(bulder:Builder){
        this.bulder=bulder;
    }


    constructSportCar(builder:Builder){
        builder.reset();
        builder.setSeat(3);
        builder.setEngine("hybrid");
        builder.setTipComputer("trp enable");
        builder.setGPS("gps enabled")
    }
    constructHaveyCar(builder:Builder){
        builder.reset();
        builder.setSeat(8);
        builder.setEngine("hybrid");
        builder.setTipComputer("trp enable");
        builder.setGPS("gps enabled")
    }

}