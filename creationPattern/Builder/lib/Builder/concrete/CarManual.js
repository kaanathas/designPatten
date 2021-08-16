"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Manual_1 = __importDefault(require("../../Products/Manual"));
var CarManual = /** @class */ (function () {
    function CarManual() {
        this.reset();
    }
    CarManual.prototype.reset = function () {
        this.manual = new Manual_1.default();
    };
    CarManual.prototype.setSeat = function (n) {
        this.manual.seat = n;
    };
    CarManual.prototype.setEngine = function (e) {
        this.manual.engine = e;
    };
    CarManual.prototype.setTipComputer = function (t) {
        this.manual.trip = t;
    };
    CarManual.prototype.setGPS = function (g) {
        this.manual.gps = g;
    };
    CarManual.prototype.getProduct = function () {
        var product = this.manual;
        this.reset();
        return product;
    };
    return CarManual;
}());
exports.default = CarManual;
