"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = __importDefault(require("./Circle"));
class Application {
    constructor() {
        this.shape = [];
        let circle = new Circle_1.default();
        circle.X = 10;
        circle.y = 1;
        circle.radis = 20;
        this.shape.push(circle.clone());
        this.shape.push(circle.clone());
        this.shape.push(circle.clone());
        this.shape.push(circle.clone());
        this.shape.push(circle.clone());
        this.shape.push(circle.clone());
        this.shape.push(circle.clone());
        this.shape.push(circle.clone());
    }
    main() {
        this.shape.forEach(element => {
            console.log(element.X);
        });
    }
}
exports.default = Application;
