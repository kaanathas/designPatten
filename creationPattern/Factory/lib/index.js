"use strict";
// interface Product{
//     doStuff():any;
// }
Object.defineProperty(exports, "__esModule", { value: true });
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
var factory_1 = require("./factory");
var app = new factory_1.Application("B");
app.main();
var appc = new factory_1.Application("C");
appc.main();
