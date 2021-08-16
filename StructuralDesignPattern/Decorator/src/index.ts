interface DataSoure{
    writeData(data:any):any;
    readData():any;

}



class FileDataSource implements DataSoure{

    constructor(fileNAme:any){

    }
    writeData(data: any) {
       console.log("write Data in fileDataSoure")
    }
    readData() {
       console.log("read data fileDataSoure")
    }

}

class DataSourceDecorator implements DataSoure{

wrappee:DataSoure;
constructor(source:DataSoure){
    this.wrappee=source;
}

    writeData(data: any) {
        this.wrappee.writeData(data)
    }
    readData() {
        this.wrappee.readData()
    }

}



class EncryptionDecorator extends DataSourceDecorator{


    writeData(data:any){
    console.log("Encryt the data")
    super.writeData(data)
    }


    readData(){
        console.log("reade data en encrpt")
        super.readData()
    }
}

class CompressDecorator extends DataSourceDecorator{


    writeData(data:any){
    console.log("compress the data")
    super.writeData(data)
    }


    readData(){
        console.log("reade data compress")
        super.readData()
    }
}


//  Encryption > Compression > FileDataSource


let a=new FileDataSource("file1")
// a.writeData("file1 data")

a=new CompressDecorator(a)
// a.writeData("file1 compressd")

a=new EncryptionDecorator(a)
a.writeData("file1 encrt")
