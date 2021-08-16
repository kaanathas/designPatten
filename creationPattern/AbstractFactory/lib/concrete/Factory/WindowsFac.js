"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var WinButton_1 = __importDefault(require("../product/WinButton"));
var WinCheck_1 = __importDefault(require("../product/WinCheck"));
var WindowsFac = /** @class */ (function () {
    function WindowsFac() {
    }
    WindowsFac.prototype.createButton = function () {
        console.log("creating win Button...");
        return new WinButton_1.default();
    };
    WindowsFac.prototype.createCheckBox = function () {
        console.log("creating windows checkbox ...");
        return new WinCheck_1.default();
    };
    return WindowsFac;
}());
exports.default = WindowsFac;
