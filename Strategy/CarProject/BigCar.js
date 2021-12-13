"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigCar = void 0;
var Car_1 = require("./Car");
var SuperBeep_1 = require("./Beep/SuperBeep");
var AggressiveRelease_1 = require("./Release/AggressiveRelease");
var BigCar = /** @class */ (function (_super) {
    __extends(BigCar, _super);
    function BigCar() {
        var _this = _super.call(this) || this;
        _this.beepBehaviour = new SuperBeep_1.SuperBeep();
        _this.releaseBehaviour = new AggressiveRelease_1.AggressiveRelease();
        return _this;
    }
    BigCar.prototype.drive = function () {
        console.log('[drive]: Rrrrrrrrrrrrrrrrr');
    };
    return BigCar;
}(Car_1.Car));
exports.BigCar = BigCar;
