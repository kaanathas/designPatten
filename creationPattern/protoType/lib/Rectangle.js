"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = __importDefault(require("./Shape"));
class Rectangle extends Shape_1.default {
    // constructor(source:Rectangle){
    //     super(source)
    //     this.width=source.width;
    //     this.height=source.height;
    // }
    clone() {
        return Object.assign({}, this);
    }
}
exports.default = Rectangle;
