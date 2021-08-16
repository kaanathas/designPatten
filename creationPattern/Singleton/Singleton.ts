export default class Singlton{
    private static instance:Singlton;
    private constructor(){

    }
    static getInstsnce(){
    if(this.instance==null){
        this.instance=new Singlton();

    }
    return this.instance

    }
}