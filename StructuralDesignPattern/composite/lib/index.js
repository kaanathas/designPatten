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
var Dot = /** @class */ (function () {
    function Dot(x, y) {
        this.x = x;
        this.y = y;
    }
    Dot.prototype.move = function (x, y) {
        this.x += x;
        this.y += y;
    };
    Dot.prototype.draw = function () {
        console.log("X is" + this.x + "\n Y is" + this.y + '\n');
    };
    return Dot;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, radius) {
        var _this = _super.call(this, x, y) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.draw = function () {
        console.log("Draw the circle with radius"
            + this.radius + "\n"
            + "X is" + this.x + "\n Y is" + this.y + '\n');
    };
    return Circle;
}(Dot));
var CompoundGraphic = /** @class */ (function () {
    function CompoundGraphic() {
        this.children = [];
    }
    CompoundGraphic.prototype.add = function (chid) {
        this.children.push(chid);
    };
    CompoundGraphic.prototype.remove = function (child) {
        var index = this.children.indexOf(child);
        var removed = this.children.slice(index, 1);
        return removed;
    };
    CompoundGraphic.prototype.move = function (x, y) {
        this.children.forEach(function (child) {
            child.move(x, y);
        });
    };
    CompoundGraphic.prototype.draw = function () {
        this.children.forEach(function (child) {
            child.draw();
        });
    };
    return CompoundGraphic;
}());
var all = new CompoundGraphic();
all.add(new Dot(2, 5));
all.add(new Dot(5, 7));
all.add(new Dot(20, 80));
all.add(new Circle(4, 6, 10));
var inner = new CompoundGraphic();
inner.add(new Dot(1, 5));
inner.add(new Dot(1, 7));
inner.add(new Dot(1, 80));
inner.add(new Circle(1, 6, 10));
all.add(inner);
all.draw();
