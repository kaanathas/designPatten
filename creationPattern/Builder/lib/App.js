"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CarBuilder_1 = __importDefault(require("./Builder/concrete/CarBuilder"));
var director_1 = __importDefault(require("./director/director"));
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.prototype.makeCar = function () {
        var director = new director_1.default();
        var builder = new CarBuilder_1.default();
        director.constructSportCar(builder);
        var car = builder.getProduct();
        return car;
    };
    return Application;
}());
exports.default = Application;
