"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var RoundPeg_1 = __importDefault(require("./RoundPeg"));
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(peg) {
        var _this = _super.call(this, 0) || this;
        _this.peg = peg;
        return _this;
    }
    Adapter.prototype.getRadius = function () {
        return this.peg.getWidth() + Math.sqrt(2) / 2;
    };
    return Adapter;
}(RoundPeg_1.default));
exports.default = Adapter;
