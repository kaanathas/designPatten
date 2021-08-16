import {B} from './B'
import { Creator } from './create'
export class CreatorB extends Creator{
    createProduct():Product{
        return new B
    }
}