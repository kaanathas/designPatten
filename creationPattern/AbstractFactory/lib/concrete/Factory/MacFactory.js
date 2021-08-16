"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MacButton_1 = __importDefault(require("../product/MacButton"));
var MacCheck_1 = __importDefault(require("../product/MacCheck"));
var MacFactory = /** @class */ (function () {
    function MacFactory() {
    }
    MacFactory.prototype.createButton = function () {
        console.log("creating mac button ...");
        return new MacButton_1.default();
    };
    MacFactory.prototype.createCheckBox = function () {
        console.log(" creating mac checkbox..");
        return new MacCheck_1.default();
    };
    return MacFactory;
}());
exports.default = MacFactory;
