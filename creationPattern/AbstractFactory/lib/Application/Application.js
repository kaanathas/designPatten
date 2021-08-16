"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Application = /** @class */ (function () {
    function Application(factory) {
        this.factory = factory;
    }
    Application.prototype.createUi = function () {
        this.button = this.factory.createButton();
        this.checkBox = this.factory.createCheckBox();
    };
    Application.prototype.paint = function () {
        this.button.paint();
        this.checkBox.paint();
    };
    return Application;
}());
exports.default = Application;
