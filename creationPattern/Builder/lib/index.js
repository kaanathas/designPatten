"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __importDefault(require("./App"));
var App = new App_1.default();
var car = App.makeCar();
console.log(car.engine);
console.log(car.gps);
console.log(car.seat);
console.log(car.trip);
