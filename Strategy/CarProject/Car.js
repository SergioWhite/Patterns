"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var StandardBeep_1 = require("./Beep/StandardBeep");
var StandardRelease_1 = require("./Release/StandardRelease");
var Car = /** @class */ (function () {
    function Car() {
        this.beepBehaviour = new StandardBeep_1.StandardBeep();
        this.releaseBehaviour = new StandardRelease_1.StandardRelease();
    }
    Car.prototype.beep = function () {
        this.beepBehaviour.beep();
    };
    Car.prototype.release = function () {
        this.releaseBehaviour.release();
    };
    return Car;
}());
exports.Car = Car;
