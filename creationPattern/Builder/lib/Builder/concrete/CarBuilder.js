"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = __importDefault(require("../../Products/Car"));
var CarBulder = /** @class */ (function () {
    function CarBulder() {
        this.reset();
    }
    CarBulder.prototype.reset = function () {
        this.car = new Car_1.default();
    };
    CarBulder.prototype.setSeat = function (n) {
        this.car.seat = n;
    };
    CarBulder.prototype.setEngine = function (e) {
        this.car.engine = e;
    };
    CarBulder.prototype.setTipComputer = function (t) {
        this.car.trip = t;
    };
    CarBulder.prototype.setGPS = function (g) {
        this.car.gps = g;
    };
    CarBulder.prototype.getProduct = function () {
        var product = this.car;
        this.reset();
        return product;
    };
    return CarBulder;
}());
exports.default = CarBulder;
