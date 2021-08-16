import {A} from './A'
export class Creator{
    createProduct():Product{
        return new A()
    }
  
     someOperation(){
         let p:Product= this.createProduct();
         p.doStuff()
     }
 }