"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBulder = function (bulder) {
        this.bulder = bulder;
    };
    Director.prototype.constructSportCar = function (builder) {
        builder.reset();
        builder.setSeat(3);
        builder.setEngine("hybrid");
        builder.setTipComputer("trp enable");
        builder.setGPS("gps enabled");
    };
    Director.prototype.constructHaveyCar = function (builder) {
        builder.reset();
        builder.setSeat(8);
        builder.setEngine("hybrid");
        builder.setTipComputer("trp enable");
        builder.setGPS("gps enabled");
    };
    return Director;
}());
exports.default = Director;
