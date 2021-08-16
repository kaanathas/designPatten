"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Tv_1 = __importDefault(require("./Tv"));
var RemoteControl_1 = __importDefault(require("./RemoteControl"));
var tv = new Tv_1.default();
var remote = new RemoteControl_1.default(tv);
remote.togglePower();
remote.channelUp();
remote.channelUp();
remote.channelUp();
remote.channelUp();
remote.channelUp();
console.log(tv.getChannel());
