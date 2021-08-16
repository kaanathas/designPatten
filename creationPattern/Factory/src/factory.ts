import { Creator } from "./create";
import { CreatorA } from "./CreateA";
import { CreatorB } from "./CreateB";
import { CreatorC } from "./CreateC";

export class Application{
    create:Creator;
      
  constructor(p:String){
      
          if(p=="A"){
              this.create=new CreatorA()
             
          }else if(p=="C"){
              this.create=new CreatorC()
          }else{
              this.create=new CreatorB()
             
          }
          
  }
  
  main(){
      this.create.someOperation()
  }
  
    
  }