// interface Product{
//     doStuff():any;
// }

// class A implements Product{
//     doStuff() {
//        console.log("product A stuff")
//     }

// }

// class B implements Product{
//     doStuff() {
//         console.log("Product B stuff")
//     }

// }

// class C implements Product{
//     doStuff() {
//         console.log("Product C stuff")
//     }

// }
// class Creator{
//    createProduct():Product{
//        return new A()
//    }
 
//     someOperation(){
//         let p:Product= this.createProduct();
//         p.doStuff()
//     }
// }

// class CreatorA extends Creator{
//     createProduct():Product{
//         return new A
//     }
// }


// class CreatorB extends Creator{
//     createProduct():Product{
//         return new B
//     }
// }


// class CreatorC extends Creator{
//     createProduct():Product{
//         return new C
//     }
// }
// class Application{
//   create:Creator;
    
// constructor(p:String){
    
//         if(p=="A"){
//             this.create=new CreatorA()
           
//         }else if(p=="C"){
//             this.create=new CreatorC()
//         }else{
//             this.create=new CreatorB()
           
//         }
        
// }

// main(){
//     this.create.someOperation()
// }

  
// }
import {Application} from './factory'

let app =new Application("B")
app.main()

let appc =new Application("C")
appc.main()