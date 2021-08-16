"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Radio = /** @class */ (function () {
    function Radio() {
    }
    Radio.prototype.isEnabled = function () {
        return this.dEnable;
    };
    Radio.prototype.enable = function () {
        this.dEnable = true;
    };
    Radio.prototype.disable = function () {
        this.dEnable = false;
    };
    Radio.prototype.getVolume = function () {
        return this.vol;
    };
    Radio.prototype.setVolume = function (percent) {
        this.vol = percent;
    };
    Radio.prototype.getChannel = function () {
        return this.channel;
    };
    Radio.prototype.setChannel = function (cha) {
        this.channel = cha;
    };
    return Radio;
}());
exports.default = Radio;
