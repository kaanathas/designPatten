import { Creator } from "./create"
import { C } from "./C"

export class CreatorC extends Creator{
    createProduct():Product{
        return new C
    }
}