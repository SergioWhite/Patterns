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
exports.FireBall = void 0;
var AmmunitionDecorator_1 = require("./AmmunitionDecorator");
var FireBall = /** @class */ (function (_super) {
    __extends(FireBall, _super);
    function FireBall(powerPerson) {
        var _this = _super.call(this) || this;
        _this.powerPerson = powerPerson;
        return _this;
    }
    FireBall.prototype.getDescription = function () {
        return this.powerPerson.getDescription() + ' + FireBall';
    };
    FireBall.prototype.power = function () {
        return this.powerPerson.power() + 50;
    };
    return FireBall;
}(AmmunitionDecorator_1.AmmunitionDecorator));
exports.FireBall = FireBall;
