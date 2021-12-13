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
exports.Mocha = void 0;
var CondimentDecorator_1 = require("./CondimentDecorator");
var Mocha = /** @class */ (function (_super) {
    __extends(Mocha, _super);
    function Mocha(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Mocha.prototype.getDescription = function () {
        return this.beverage.getDescription() + ", Mocha";
    };
    Mocha.prototype.cost = function () {
        return .20 + this.beverage.cost();
    };
    return Mocha;
}(CondimentDecorator_1.CondimentDecorator));
exports.Mocha = Mocha;
