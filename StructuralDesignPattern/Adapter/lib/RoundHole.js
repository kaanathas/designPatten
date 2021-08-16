"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoundHole = /** @class */ (function () {
    function RoundHole(rad) {
        this.radius = rad;
    }
    RoundHole.prototype.getRadius = function () {
        return this.radius;
    };
    RoundHole.prototype.fits = function (peg) {
        return this.getRadius() >= peg.getRadius();
    };
    return RoundHole;
}());
exports.default = RoundHole;
