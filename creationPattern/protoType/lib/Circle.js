"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = __importDefault(require("./Shape"));
class Circle extends Shape_1.default {
    // constructor(source:Circle);
    constructor(source) {
        super();
        // super(this);
        // console.log("con")
        // super(source);
        // this.radis=source.radis;
    }
    clone() {
        return Object.assign({}, this);
    }
}
exports.default = Circle;
