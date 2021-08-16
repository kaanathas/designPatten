"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Application_1 = __importDefault(require("./Application/Application"));
var MacFactory_1 = __importDefault(require("./concrete/Factory/MacFactory"));
var WindowsFac_1 = __importDefault(require("./concrete/Factory/WindowsFac"));
var App = "Mac";
var Factory;
if (App == "win") {
    Factory = new WindowsFac_1.default();
}
else {
    Factory = new MacFactory_1.default();
}
var Application1 = new Application_1.default(Factory);
Application1.createUi();
Application1.paint();
