import {A} from './A'
import { Creator } from './create'
export class CreatorA extends Creator{
    createProduct():Product{
        return new A
    }
}