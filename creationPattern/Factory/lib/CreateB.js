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
exports.CreatorB = void 0;
var B_1 = require("./B");
var create_1 = require("./create");
var CreatorB = /** @class */ (function (_super) {
    __extends(CreatorB, _super);
    function CreatorB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreatorB.prototype.createProduct = function () {
        return new B_1.B;
    };
    return CreatorB;
}(create_1.Creator));
exports.CreatorB = CreatorB;
