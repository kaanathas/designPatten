"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creator = void 0;
var A_1 = require("./A");
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.createProduct = function () {
        return new A_1.A();
    };
    Creator.prototype.someOperation = function () {
        var p = this.createProduct();
        p.doStuff();
    };
    return Creator;
}());
exports.Creator = Creator;
