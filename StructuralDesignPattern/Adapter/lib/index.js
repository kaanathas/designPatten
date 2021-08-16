"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Adapter_1 = __importDefault(require("./Adapter"));
var RoundHole_1 = __importDefault(require("./RoundHole"));
var RoundPeg_1 = __importDefault(require("./RoundPeg"));
var SquarePeg_1 = __importDefault(require("./SquarePeg"));
var hole = new RoundHole_1.default(5);
var rpeg = new RoundPeg_1.default(15);
console.log(hole.fits(rpeg));
var aqpeg = new SquarePeg_1.default(5);
var sqAdapter = new Adapter_1.default(aqpeg);
console.log(hole.fits(sqAdapter));
