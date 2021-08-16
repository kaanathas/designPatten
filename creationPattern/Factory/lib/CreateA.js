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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatorA = void 0;
var A_1 = require("./A");
var create_1 = require("./create");
var CreatorA = /** @class */ (function (_super) {
    __extends(CreatorA, _super);
    function CreatorA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreatorA.prototype.createProduct = function () {
        return new A_1.A;
    };
    return CreatorA;
}(create_1.Creator));
exports.CreatorA = CreatorA;
