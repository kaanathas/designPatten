"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
var CreateA_1 = require("./CreateA");
var CreateB_1 = require("./CreateB");
var CreateC_1 = require("./CreateC");
var Application = /** @class */ (function () {
    function Application(p) {
        if (p == "A") {
            this.create = new CreateA_1.CreatorA();
        }
        else if (p == "C") {
            this.create = new CreateC_1.CreatorC();
        }
        else {
            this.create = new CreateB_1.CreatorB();
        }
    }
    Application.prototype.main = function () {
        this.create.someOperation();
    };
    return Application;
}());
exports.Application = Application;
