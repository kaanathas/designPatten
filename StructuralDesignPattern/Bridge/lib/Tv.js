"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tv = /** @class */ (function () {
    function Tv() {
        this.dEnable = false;
        this.vol = 0;
        this.channel = 0;
    }
    Tv.prototype.isEnabled = function () {
        return this.dEnable;
    };
    Tv.prototype.enable = function () {
        this.dEnable = true;
    };
    Tv.prototype.disable = function () {
        this.dEnable = false;
    };
    Tv.prototype.getVolume = function () {
        return this.vol;
    };
    Tv.prototype.setVolume = function (percent) {
        this.vol = percent;
    };
    Tv.prototype.getChannel = function () {
        return this.channel;
    };
    Tv.prototype.setChannel = function (cha) {
        this.channel = cha;
    };
    return Tv;
}());
exports.default = Tv;
